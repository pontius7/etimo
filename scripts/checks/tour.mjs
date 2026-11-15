// Smoke test: opens every screen of a running Etimo site at phone or desktop size, clicks through the main controls and
// fails (exit 1) on any page error, console error or step that cannot be done. Not part of ./build.
//   python3 -m http.server 8092 -d site &
//   node scripts/checks/tour.mjs http://127.0.0.1:8092 phone|desktop [screenshot-folder]
// Needs Node 22 and Google Chrome, nothing else (the same as scripts/merge/probe-colors.mjs; CHROME and ETIMO_CHROME_ARGS work the same).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const [BASE, MODE, SHOTS] = process.argv.slice(2);
if (!BASE || !['phone', 'desktop'].includes(MODE)) { console.error('usage: node tour.mjs <base url> <phone|desktop> [screenshot folder]'); process.exit(2); }
const phone = MODE === 'phone';
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const port = 9300 + process.pid % 200;
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'etimo-tour-'));
const chrome = spawn(CHROME, ['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', `--user-data-dir=${prof}`,
  `--remote-debugging-port=${port}`, ...(process.env.ETIMO_CHROME_ARGS || '').split(/\s+/).filter(Boolean), 'about:blank'], { stdio: 'ignore' });
const finish = code => { try { chrome.kill(); } catch {} fs.rmSync(prof, { recursive: true, force: true }); process.exit(code); };

let tabs;
for (let i = 0; i < 60 && !tabs; i++) { try { tabs = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page'); } catch {} await sleep(250); }
if (!tabs) { console.error('chrome did not start'); finish(2); }
const ws = new WebSocket(tabs.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = {}, errors = [];
ws.onmessage = e => {
  const m = JSON.parse(e.data);
  if (m.id && pending[m.id]) return pending[m.id](m);
  if (m.method === 'Runtime.exceptionThrown') errors.push('pageerror: ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text).split('\n')[0].slice(0, 200));
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push('console.error: ' + m.params.args.map(a => a.value ?? a.description ?? '').join(' ').slice(0, 200));
};
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async x => { const r = (await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true })).result; if (r.exceptionDetails) throw Error(r.exceptionDetails.exception?.description?.split('\n')[0] || 'script error'); return r.result.value; };
await send('Page.enable'); await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: phone ? 390 : 1440, height: phone ? 844 : 900, deviceScaleFactor: phone ? 2 : 1, mobile: phone });
await send('Emulation.setTouchEmulationEnabled', { enabled: phone });

// the centre of the first visible element that matches a selector (and, if given, a text pattern)
const where = (sel, re) => ev(`(()=>{const re=${re ? re.toString() : 'null'};for(const e of document.querySelectorAll(${JSON.stringify(sel)})){
  if(re&&!re.test(e.textContent))continue;const r=e.getBoundingClientRect();if(r.width&&r.height)return {x:r.x+r.width/2,y:r.y+r.height/2,w:r.width,h:r.height}}return null})()`);
const tapAt = async (x, y) => {
  if (phone) { await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] }); await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); return; }
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });
};
const tap = async (sel, re) => { const w = await where(sel, re); if (!w) throw Error(`nothing visible matches ${sel}`); await tapAt(w.x, w.y); };
const go = h => ev(`location.hash=${JSON.stringify(h)}`);
const key = async (k, code) => { for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key: k, code: k, windowsVirtualKeyCode: code }); };
const typeInto = async (sel, text) => { await tap(sel); await send('Input.insertText', { text }); };
const mapReady = async () => { for (let i = 0; i < 60; i++) { if (await ev('!!(window.__kMapReady&&document.querySelector(".kgl.on"))')) return; await sleep(500); } throw Error('map never became ready'); };

const failed = [];
let n = 0;
// soft: a control that only some screen sizes have; a missing one is reported but does not fail the tour
async function step(name, fn, { settle = 900, soft = false } = {}) {
  let err = null;
  try { await fn(); } catch (e) { err = e.message.split('\n')[0].slice(0, 160); if (!soft) failed.push(`${name}: ${err}`); }
  await sleep(settle);
  const dom = await ev('document.querySelectorAll("*").length').catch(() => '?');
  if (SHOTS) { fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(path.join(SHOTS, `${MODE}-${String(++n).padStart(2, '0')}-${name}.png`), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64')); }
  console.log(name.padEnd(12), err ? (soft ? 'skipped: ' : 'FAILED: ') + err : `ok, ${dom} elements`);
}

await send('Page.navigate', { url: BASE + '/' });
for (let i = 0; i < 40 && !await ev('!!(document.querySelector("#root")&&document.querySelector("#root").children.length)'); i++) await sleep(500);
await step('home', () => sleep(2500));
await step('category', async () => { await tap('button.ct.ctm'); await sleep(700); });
await step('concept', async () => { await tap('.kgrid button, button.kt'); await sleep(700); });
await step('search', async () => { await go('search'); await sleep(500); await typeInto('input', 'voda'); await sleep(1500); });
await step('az', () => go('az'));
await step('langpage', async () => { await go('l-serbian'); await sleep(800); });
await step('fulldict', async () => { await tap('.fdopen'); await sleep(1500); });
await step('wheel', async () => { await go('languages'); await sleep(1500); });
await step('wheel-tap', async () => {      // a language slice of the wheel, clicked twice (select, then open)
  const ok = await ev(`(()=>{const svg=[...document.querySelectorAll('svg')].sort((a,b)=>b.getBoundingClientRect().width-a.getBoundingClientRect().width)[0];
    const leaf=[...svg.querySelectorAll('path')].filter(e=>/leaf|lf|sl/.test(e.getAttribute('class')||''));const el=leaf[Math.floor(leaf.length/3)]||svg.querySelectorAll('path')[40];
    window.__wl=el;el.dispatchEvent(new MouseEvent('click',{bubbles:true}));return !!el})()`);
  if (!ok) throw Error('no wheel slice');
  await sleep(600); await ev("window.__wl.dispatchEvent(new MouseEvent('click',{bubbles:true}))"); await sleep(600);
});
await step('tree', async () => { await go('tree'); await sleep(800); if (await where('button, [role=tab]', /Tree/)) await tap('button, [role=tab]', /Tree/); await sleep(600); });
await step('map', async () => { await go('map'); await mapReady(); await sleep(2500); }, { settle: 1500 });
await step('map-lang', async () => { await go('map-serbian'); await sleep(400); }, { settle: 2500 });
await step('map-details', () => tap('.msheet button, .mcard button', /Details/), { soft: true });
await step('map-region', async () => {
  await go('map'); await sleep(1200);
  await ev(`(()=>{const k=[...document.querySelectorAll('.kkeys button')];(k.find(x=>/Vojvodina|Bavaria|Bayern/.test(x.textContent))||k[200]).click()})()`);
}, { settle: 2500 });
await step('map-zoom', async () => {
  await ev('(()=>{const c=document.querySelector("#cx,.card [aria-label*=lose]");c&&c.click()})()'); await sleep(800);
  const c = await where('.kgl canvas'); if (!c) throw Error('no map canvas');
  for (let i = 0; i < 6; i++) { await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: c.x, y: c.y, deltaX: 0, deltaY: -300 }); await sleep(120); }
}, { settle: 2500 });
await step('map-word', async () => { await go('mm-water'); await sleep(400); }, { settle: 2500 });
await step('settings', async () => { await go('map'); await sleep(700); await tap('button[aria-label*="anguage" i], button[aria-label*="etting" i], button.lg, button.lang'); }, { soft: true });
await step('dark-map', async () => { await key('Escape', 27); await sleep(500); await tap('button.fdtheme, button.ib[aria-label*="ight"]'); }, { soft: true, settle: 3000 });
await step('map-keys', async () => {
  await ev('(()=>{const k=document.querySelector(".kkeys button");k&&k.focus()})()');
  for (const [k, c] of [['ArrowDown', 40], ['ArrowDown', 40], ['PageDown', 34], ['Enter', 13]]) { await key(k, c); await sleep(250); }
}, { settle: 1500 });
await step('map-search', async () => {
  await ev('(()=>{const c=document.querySelector("#cx");c&&c.click()})()'); await sleep(600);
  await typeInto('.mapbox input, input[placeholder*="language"]', 'alb'); await sleep(900);
});
await step('tree-open', async () => { await go('tree'); await sleep(900); if (await where('button', /Slavic/)) await tap('button', /Slavic/); await sleep(600); });
await step('dark-home', async () => { await go(''); await sleep(1500); });

const unique = [...new Set(errors)];
unique.forEach(e => console.log(e));
console.log(failed.length || unique.length ? `FAIL: ${failed.length} steps failed, ${unique.length} page errors` : `PASS: every screen opened at ${MODE} size, no page errors`);
finish(failed.length || unique.length ? 1 : 0);
