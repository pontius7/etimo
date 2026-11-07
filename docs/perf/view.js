// evaluate_script body for the before/after screenshots: select a language, then centre a region at zoom k.
// The view is set through d3-zoom's own state (svg.__zoom) plus one tiny wheel step, so both builds land on the same transform.
async () => {
  const V = { lang: 'Czech', region: 'CZ:43-582786', k: 80 };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  for (let i = 0; i < 1200 && !document.querySelector('g.regional-evidence path'); i++) await sleep(50);
  if (V.lang) { const l = [...document.querySelectorAll('g.pin')].map(p => p.__data__).find(d => d && d.lang === V.lang); window.__kt.select(l.id); }
  let n = -1; for (let i = 0; i < 200; i++) { await sleep(100); const c = document.querySelectorAll('g.regional-evidence path').length; if (c === n && (!V.lang || c > 38)) break; n = c; }
  await sleep(2000); // let the fly-to transition finish; use k <= 149.5 (d3 ignores a wheel step that cannot change k)
  const svg = document.querySelector('.mapbox svg'), vb = svg.viewBox.baseVal, r = svg.getBoundingClientRect();
  const p = document.querySelector('g.regional-evidence path[data-region="' + V.region + '"]'), b = p.getBBox();
  const z = svg.__zoom; z.k = V.k; z.x = vb.width / 2 - V.k * (b.x + b.width / 2); z.y = vb.height / 2 - V.k * (b.y + b.height / 2);
  svg.dispatchEvent(new WheelEvent('wheel', { deltaY: -1, deltaMode: 0, clientX: r.x + r.width / 2, clientY: r.y + r.height / 2, bubbles: true, cancelable: true }));
  await sleep(2500); window.scrollTo(0, 0); await sleep(300);
  return { t: p.parentNode.parentNode.getAttribute('transform'), paths: n };
}
