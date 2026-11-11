// Headless-Chrome probe: paints the app in one theme and dumps every colour it actually shows.
// usage: node probe-colors.mjs <url> <theme:dark|light> <out.json> <port> <profileDir> [shot.png]
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const [, , url, theme, out, port, prof, shot] = process.argv;
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const p = spawn(CHROME, ['--headless=new', '--disable-gpu', `--user-data-dir=${prof}`, `--remote-debugging-port=${port}`,
  '--window-size=1400,1000', 'about:blank'], { stdio: 'ignore' });
const die = (m) => { try { p.kill(); } catch {} console.error(m); process.exit(2); };
let tabs;
for (let i = 0; i < 60; i++) { try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (tabs.find(t => t.type === 'page')) break; } catch {} await sleep(250); }
if (!tabs) die('chrome did not start');
const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pend = {};
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend[m.id]) pend[m.id](m); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async x => (await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true })).result?.result?.value;
await send('Page.enable');
await send('Page.addScriptToEvaluateOnNewDocument', { source: `try{localStorage.setItem('khl-theme','${theme}')}catch(e){}` });
await send('Page.navigate', { url });
await sleep(5000);
const click = re => ev(`(()=>{const b=[...document.querySelectorAll('button,a,[role=tab]')].find(x=>/^\\s*${re}\\s*$/i.test(x.textContent));if(b){b.click();return true}return false})()`);
if (!await click('(Map|Explore)')) die('no Map tab');   // the tab was called Explore before; the reference copy still calls it that
let zones = null;
for (let i = 0; i < 40 && !zones; i++) {
  await sleep(1000);
  zones = await ev(`(()=>{const o={};document.querySelectorAll('path.zone').forEach(p=>{const d=p.__data__;if(d&&d.lang)o[d.lang]=p.style.fill||getComputedStyle(p).fill});return Object.keys(o).length>20?o:null})()`);
}
if (!zones) die('map zones never appeared');
const FAMS = (process.env.ETIMO_FAM_VARS || 'slav,iran,alba,gree,roma,cauc,turk,ural,mong').split(',');
const vars = await ev(`(()=>{const c=getComputedStyle(document.documentElement);const o={};for(const k of ${JSON.stringify(FAMS)})o[k]=c.getPropertyValue('--f-'+k).trim();return o})()`);
// dialect / minority areas drawn over the zones (Serbia, Vlach): must be the same colour as the language itself
let areas = {};
for (let i = 0; i < 15; i++) {
  areas = await ev(`(()=>{const o={};document.querySelectorAll('g.serbia-areas path, g.vlach-areas path').forEach(p=>{const d=p.__data__;if(d&&d.name)o[d.name]=p.getAttribute('fill')||getComputedStyle(p).fill});return o})()`) || {};
  if (Object.keys(areas).length) break;
  await sleep(1000);
}
if (shot) { await sleep(8000); fs.writeFileSync(shot.replace(/\.png$/, '-map.png'), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64')); }
if (!await click('Languages')) die('no Languages tab');
await sleep(2500);
await click('Wheel');
let wheel = null;
for (let i = 0; i < 20 && !wheel; i++) {
  await sleep(1000);
  wheel = await ev(`(()=>{const o={};document.querySelectorAll('path.wa.tick').forEach(p=>{const n=p.getAttribute('aria-label');if(n)o[n]=p.getAttribute('fill')});return Object.keys(o).length>20?o:null})()`);
}
if (!wheel) die('wheel ticks never appeared');
if (shot) { fs.writeFileSync(shot.replace(/\.png$/, '-wheel.png'), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64')); }
fs.writeFileSync(out, JSON.stringify({ theme, zones, wheel, vars, areas }));
p.kill(); process.exit(0);
