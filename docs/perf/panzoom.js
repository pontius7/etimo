// evaluate_script body for the pan/zoom measurement (run after selecting Czech, 9,820 region paths on screen):
// 30 wheel steps in, a 40-frame drag, 30 wheel steps out; returns frame-interval stats and long tasks.
async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms)), raf = () => new Promise(r => requestAnimationFrame(r));
  const svg = document.querySelector('.mapbox svg'), r = svg.getBoundingClientRect();
  const cx = r.left + r.width * 0.62, cy = r.top + r.height * 0.45;
  const frames = []; let last = performance.now(), go = true;
  const tick = t => { frames.push(t - last); last = t; if (go) requestAnimationFrame(tick); }; requestAnimationFrame(tick);
  const long = []; const po = new PerformanceObserver(l => l.getEntries().forEach(e => long.push(e.duration))); po.observe({ type: 'longtask' });
  const wheel = dy => svg.dispatchEvent(new WheelEvent('wheel', { deltaY: dy, deltaMode: 0, clientX: cx, clientY: cy, bubbles: true, cancelable: true }));
  const ptr = (type, x, y) => svg.dispatchEvent(new PointerEvent(type, { pointerId: 7, pointerType: 'mouse', isPrimary: true, button: 0, buttons: type === 'pointerup' ? 0 : 1, clientX: x, clientY: y, bubbles: true, cancelable: true }));
  const t0 = performance.now();
  for (let i = 0; i < 30; i++) { wheel(-60); await raf(); }
  ptr('pointerdown', cx, cy); for (let i = 1; i <= 40; i++) { ptr('pointermove', cx - i * 6, cy - i * 2); await raf(); } ptr('pointerup', cx - 240, cy - 80);
  for (let i = 0; i < 30; i++) { wheel(60); await raf(); }
  await sleep(400); go = false; po.disconnect();
  const f = frames.slice(1).sort((a, b) => a - b), q = p => +f[Math.floor(f.length * p)].toFixed(1);
  return { ms: Math.round(performance.now() - t0), frames: f.length, dropped: f.filter(x => x > 25).length, p50: q(.5), p95: q(.95), max: +f[f.length - 1].toFixed(1), longTasks: long.length, longTaskMs: Math.round(long.reduce((a, b) => a + b, 0)) };
}
