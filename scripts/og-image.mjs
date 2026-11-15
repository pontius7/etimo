// The picture link previews show (site/og.jpg, 1200x630, named in scripts/site_pages.py SHARE_IMAGE): the site's own map in its first
// view, light theme, with no names, pins or page controls, and the Etimo wordmark at the top in the bar's font. Run by hand after a change
// to the map's look (like scripts/relief/build.sh), then commit site/og.jpg:
//   python3 -m http.server 8092 -d site &
//   node scripts/og-image.mjs http://127.0.0.1:8092
// Needs Node 22 and Google Chrome, nothing else (as scripts/checks/tour.mjs; CHROME and ETIMO_CHROME_ARGS work the same).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const BASE = process.argv[2];
if (!BASE) { console.error('usage: node og-image.mjs <base url>'); process.exit(2); }
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'site', 'og.jpg');
const W = 1200, H = 630;
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const port = 9500 + process.pid % 200;
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'etimo-og-'));
const chrome = spawn(CHROME, ['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', `--user-data-dir=${prof}`,
  `--remote-debugging-port=${port}`, ...(process.env.ETIMO_CHROME_ARGS || '').split(/\s+/).filter(Boolean), 'about:blank'], { stdio: 'ignore' });
const finish = async code => { try { chrome.kill(); } catch {} await new Promise(r => chrome.exitCode !== null ? r() : chrome.once('exit', r));
  fs.rmSync(prof, { recursive: true, force: true, maxRetries: 5 }); process.exit(code); };

let tab;
for (let i = 0; i < 60 && !tab; i++) { try { tab = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page'); } catch {} await sleep(250); }
if (!tab) { console.error('chrome did not start'); await finish(2); }
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = {};
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending[m.id]) pending[m.id](m); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async x => { const r = (await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true })).result; if (r.exceptionDetails) throw Error(r.exceptionDetails.exception?.description?.split('\n')[0] || 'script error'); return r.result.value; };
const until = async (x, what, ms = 30000) => { for (let t = 0; t < ms; t += 200) { if (await ev(x)) return; await sleep(200); } console.error('timed out waiting for ' + what); await finish(1); };

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }, { name: 'prefers-reduced-motion', value: 'reduce' }] });
await send('Page.navigate', { url: BASE.replace(/\/$/, '') + '/#map' });
await until('!!(window.__kMapReady && window.__kgl && window.__kgl.loaded() && window.__kgl.areTilesLoaded())', 'the map');
await until('!!document.querySelector(".bar h1 .brand") && document.fonts.status === "loaded"', 'the wordmark');
await sleep(1500);     // the page's own first layout of names and the relief picture
await ev(`(() => {
  const map = window.__kgl;
  for (const l of map.getStyle().layers) if (l.type === 'symbol' || l.type === 'circle' || /^(pin-|lab-)/.test(l.id)) map.setLayoutProperty(l.id, 'visibility', 'none');
  const box = map.getContainer();       // the map fills the picture: out of the page's framed box, same centre and zoom
  Object.assign(box.style, { position: 'fixed', inset: '0', width: '100vw', height: '100vh', borderRadius: '0', zIndex: 2147483646 });
  const c = map.getCenter(), z = map.getZoom();
  map.resize(); map.jumpTo({ center: c, zoom: z });
  const b = document.querySelector('.bar h1 .brand'), cs = getComputedStyle(b), root = getComputedStyle(document.documentElement);
  const st = document.createElement('style');
  st.textContent = 'body *{visibility:hidden!important;animation:none!important;transition:none!important}'
    + '.maplibregl-canvas,.mcred,.mcred *,#og-mark{visibility:visible!important}';
  document.head.append(st);
  const m = document.createElement('div');
  m.id = 'og-mark';
  m.textContent = b.textContent.trim();
  const land = root.getPropertyValue('--bg').trim() || '#fff';
  Object.assign(m.style, { position: 'fixed', top: '30px', left: '0', right: '0', textAlign: 'center', zIndex: 2147483647,
    font: cs.fontWeight + ' 40px/1 ' + cs.fontFamily, letterSpacing: cs.letterSpacing, color: cs.color,
    textShadow: '0 0 6px ' + land + ',0 0 14px ' + land });
  document.body.append(m);
  const cr = document.querySelector('.mcred');      // the map's credit line (the boundary data's licence asks for its notice): kept, above the map
  if (!cr) throw Error('no map credit line (.mcred)');
  Object.assign(cr.style, { position: 'fixed', right: '8px', bottom: '6px', left: 'auto', top: 'auto', zIndex: 2147483647, font: '400 10px/1.3 ' + cs.fontFamily, color: root.getPropertyValue('--mut').trim() || '#555', textShadow: '0 0 4px ' + land });
  document.body.append(cr);
})()`);
await until('window.__kgl.loaded() && window.__kgl.areTilesLoaded()', 'the map after resizing');
await sleep(800);      // the map redraws without its names
const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
fs.writeFileSync(OUT, Buffer.from(shot.result.data, 'base64'));
console.log('wrote', path.relative(process.cwd(), OUT), fs.statSync(OUT).size, 'bytes');
await finish(0);
