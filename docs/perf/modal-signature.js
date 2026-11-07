// Paste into evaluate_script: returns a hash per modal state so before/after can be compared.
async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const H = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; };
  const out = {};
  for (const cc of ['CZ', 'RO', 'PL', 'SK', 'HR', 'MD', 'BA', 'EE', 'CH', 'ME', 'GR']) {
    document.dispatchEvent(new CustomEvent('etimo:country-data', { detail: { country: cc, trigger: document.body } }));
    const m = () => document.querySelector('.country-data-modal');
    for (let i = 0; i < 600 && !(m() && m().querySelector('.country-results')?.textContent); i++) await sleep(50);
    const M = m(), list = M.querySelector('.country-region-list');
    const snap = async () => { // open first 3 rows, wait for bodies
      const ds = [...list.querySelectorAll('details.country-region')].slice(0, 3);
      ds.forEach(d => d.open = true);
      for (let i = 0; i < 400 && ds.some(d => !d.querySelector('.country-region-body').innerHTML); i++) await sleep(25);
      return H(M.querySelector('.country-results').textContent + list.innerHTML) + ':' + M.querySelector('.country-results').textContent;
    };
    const r = { head: H(M.querySelector('header').outerHTML + M.querySelector('.country-data-controls').outerHTML + M.querySelector('.country-coverage').outerHTML), base: await snap() };
    const meas = M.querySelector('[data-measure]'), lev = M.querySelector('[data-level]'), q = M.querySelector('[data-region-search]');
    if (meas) for (const o of [...meas.options].slice(1)) { meas.value = o.value; meas.dispatchEvent(new Event('change')); r['m:' + o.value] = await snap(); }
    if (lev) for (const o of [...lev.options]) { lev.value = o.value; lev.dispatchEvent(new Event('change')); r['l:' + o.value] = await snap(); }
    q.value = 'ova'; q.dispatchEvent(new Event('input')); r.search = await snap();
    const more = M.querySelector('.country-more'); if (!more.hidden) { more.click(); r.more = await snap(); }
    out[cc] = r; M.close(); await sleep(50);
  }
  return out;
}
