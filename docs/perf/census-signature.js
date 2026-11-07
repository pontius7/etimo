async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const H = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; };
  const ids = [['CZ','CZ:43-500011'],['CZ','CZ:101-40924'],['CZ','CZ:43-565946'],['RO','RO:country-romania'],['RO','RO:harghita-voslabeni'],['HR','HR-2021-t4-record-298'],['PL','PL:1410062'],['ME','ME-2023-niksic'],['MD','MD:5332000'],['CZ','nope']];
  const out = {};
  for (const [cc, rid] of ids) {
    const p = document.createElement('div'); p.className = 'kpanel'; p.dataset.sourceCountry = cc; p.dataset.regionId = rid; p.innerHTML = '<div class="phd preg">x</div>'; p.style.display = 'none'; document.body.append(p);
    let sec; for (let i = 0; i < 400; i++) { await sleep(25); sec = p.querySelector('.rg-cen'); if (i > 4 && (!sec || sec.innerHTML)) break; }
    out['cen:' + rid] = sec ? H(sec.outerHTML) : 'removed'; p.remove();
    document.dispatchEvent(new CustomEvent('etimo:country-data', { detail: { country: cc, trigger: document.body, region: rid } }));
    const M = () => document.querySelector('.country-data-modal');
    for (let i = 0; i < 1200 && !(M() && M().querySelector('.country-results')?.textContent); i++) await sleep(25);
    const o = M().querySelector('details[open]');
    for (let i = 0; i < 200 && o && !o.querySelector('.country-region-body').innerHTML; i++) await sleep(25);
    out['modal:' + rid] = [M().querySelector('.country-results').textContent, M().querySelector('[data-level]')?.value, o?.dataset.regionId, o ? H(o.innerHTML) : null, M().querySelectorAll('details.country-region').length].join('|');
    M().close(); await sleep(30);
  }
  return out;
}
