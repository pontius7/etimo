const FDV=__ETIMO_SEARCH_VERSION__;
/* Full dictionaries + Latin-friendly search. Part 5 of the app script (see src/page.html),
   placed right before the language page component, so it shares the names of the other parts:
   m = React, f = jsx runtime, ja() UI strings, Ja(hash) navigate, Na(L) language name,
   ai(entry) reading, fa id->language, di highlight, Da text fold, Qa remember query, ka/ya locale,
   EK = site/search-key.js (inlined before this script). FDV = search index version (build). */
let FDH = 'h/', FDc = {}, FDsI = null, FDsc = {};
const FDt = k => {
  let t = {
    full: {en: 'Full dictionary', sr: 'Ceo rečnik', sq: 'Fjalori i plotë'},
    words: {en: 'words', sr: 'reči', sq: 'fjalë'},
    open: {en: 'Show the full dictionary', sr: 'Prikaži ceo rečnik', sq: 'Shfaq fjalorin e plotë'},
    loading: {en: 'Loading the dictionary…', sr: 'Učitavanje rečnika…', sq: 'Duke ngarkuar fjalorin…'},
    failed: {en: 'The dictionary could not be loaded. Check the connection and try again.', sr: 'Rečnik nije učitan. Proverite vezu i pokušajte ponovo.', sq: 'Fjalori nuk u ngarkua. Kontrolloni lidhjen dhe provoni përsëri.'},
    retry: {en: 'Try again', sr: 'Pokušaj ponovo', sq: 'Provo përsëri'},
    more: {en: 'Show more', sr: 'Prikaži još', sq: 'Shfaq më shumë'},
    inDict: {en: 'In the full dictionaries', sr: 'U celim rečnicima', sq: 'Në fjalorët e plotë'},
    none: {en: 'No match in the full dictionary.', sr: 'Nema pogotka u celom rečniku.', sq: 'Asnjë përputhje në fjalorin e plotë.'},
    src: {en: 'Source', sr: 'Izvor', sq: 'Burimi'},
    shown: {en: 'shown', sr: 'prikazano', sq: 'të shfaqura'},
    searching: {en: 'Searching the full dictionaries…', sr: 'Pretraga celih rečnika…', sq: 'Duke kërkuar në fjalorët e plotë…'}
  }[k];
  return ka(t[ya()] || t.en);
};
/* Long lists draw only the rows near the screen. kWin(n, key, est) -> {ref, a, b, top, bot}:
   ref goes on the list box; rows a..b-1 are drawn between two spacers (heights top, bot) that stand in for the others, so the page keeps
   its length. The first element of every row carries data-i = row number (rows are measured from it). A row that is not measured
   yet counts as the average measured row (est before any). key names the list: heights stay remembered while it stays the same.
   A sticky heading (class letter) may be the first element of a row: its row starts where the next element starts minus its height.
   An element with data-d is a repeated heading (A-Z); its height is subtracted from the top spacer by the caller (KWD).
   When a measured height moves rows above the screen the scroll position is corrected by the shift, so nothing jumps. */
let KWC = {k: '', w: 0, h: []}, KWD = 0;
/* On a scroll the new rows are drawn at once, in the same frame (the browser sends one scroll event per frame, before it paints):
   a fast drag of the scrollbar never shows an empty screen. React's flushSync; a plain call if it is ever missing. */
const KWF = f => { let s = d("2b9p0").flushSync; s ? s(f) : f(); };
function kWin(n, key, est) {
  let ref = (0, m.useRef)(null), an = (0, m.useRef)(null), cur = (0, m.useRef)(null), [rg, setRg] = (0, m.useState)([0, 40, key]), [, tick] = (0, m.useState)(0);
  if (KWC.k !== key || KWC.w !== innerWidth) KWC = {k: key, w: innerWidth, h: []};
  let r = rg[2] === key ? rg : [0, 40, key], a = Math.min(r[0], n), b = Math.min(r[1], n), avg = () => { let s = 0, c = 0; for (let x of KWC.h) if (x > 0) { s += x; c++; } return c ? s / c : est; }, av = avg(), t = 0, u = 0;
  for (let i = 0; i < n; i++) { let h = KWC.h[i] || av; if (i < a) t += h; else if (i >= b) u += h; }
  cur.current = {r, n, key};
  let cap = () => {
    let el = ref.current;
    if (!el) return;
    for (let e of el.children) if (e.dataset.i != null && !e.classList.contains('letter')) { let q = e.getBoundingClientRect(); if (q.bottom > 0) { an.current = {i: e.dataset.i, y: q.top, s: scrollY}; return; } }
  };
  let calc = now => {
    let el = ref.current, C = cur.current;
    if (!el || !C) return;
    let q = el.getBoundingClientRect(), vh = innerHeight, lo = -q.top - vh * 1.5, hi = -q.top + vh * 2.5, v = avg(), y = 0, x = -1, z = C.n;
    for (let i = 0; i < C.n; i++) { let h = KWC.h[i] || v; if (x < 0 && y + h > lo) x = i; if (y > hi) { z = i; break; } y += h; }
    if (x < 0) x = Math.max(0, C.n - 30);
    x = Math.floor(x / 8) * 8; z = Math.min(C.n, Math.max(Math.ceil(z / 8) * 8, x + 8));
    if (x !== Math.min(C.r[0], C.n) || z !== Math.min(C.r[1], C.n) || C.r[2] !== C.key) { cap(); now ? KWF(() => setRg([x, z, C.key])) : setRg([x, z, C.key]); }
  };
  (0, m.useLayoutEffect)(() => {
    let el = ref.current;
    if (!el) return;
    let A = an.current;
    an.current = null;
    if (A) {
      let e = el.querySelector('[data-i="' + A.i + '"]');
      if (e) { let j = e.getBoundingClientRect().top - (A.y - (scrollY - A.s)); if (Math.abs(j) > 1) scrollTo({top: scrollY + j, behavior: 'instant'}); }
    }
    let rows = [], ch = false, dd = el.querySelector('[data-d]');
    for (let e of el.children) if (e.dataset.i != null) rows.push([+e.dataset.i, e.classList.contains('letter') ? e.nextElementSibling.getBoundingClientRect().top - e.getBoundingClientRect().height : e.getBoundingClientRect().top]);
    let end = el.lastElementChild ? el.lastElementChild.getBoundingClientRect().top : 0;
    rows.forEach((x, j) => { let h = (j + 1 < rows.length ? rows[j + 1][1] : end) - x[1]; if (h > 0 && Math.abs((KWC.h[x[0]] || 0) - h) > .5) { KWC.h[x[0]] = h; ch = true; } });
    if (dd && Math.abs(dd.offsetHeight - KWD) > .5) { KWD = dd.offsetHeight; ch = true; }
    if (ch) { cap(); tick(x => x + 1); } else calc();
  });
  (0, m.useEffect)(() => {
    let q = 0, go = () => { q || (q = requestAnimationFrame(() => { q = 0; calc(); })); }, sc = () => calc(1);
    document.documentElement.style.overflowAnchor = 'none'; /* the browser's own scroll anchoring would correct a second time */
    addEventListener('scroll', sc, {passive: true}); addEventListener('resize', go);
    return () => { document.documentElement.style.overflowAnchor = ''; removeEventListener('scroll', sc); removeEventListener('resize', go); cancelAnimationFrame(q); };
  }, []);
  return {ref, a, b, top: t, bot: u};
}
/* the two spacers of a windowed list */
const kSp = (k, h) => (0, f.jsx)('div', {key: k, 'aria-hidden': true, style: {height: Math.max(0, h), flexShrink: 0}});
/* "Details" fold in the language page's hero (census and dialect list): closed by default, a real button (keyboard), the open state
   is kept per language in mi so a re-render or a return to the page keeps it. Opening is a short fade/rise (CSS .kdet-b). */
function kDet({id, lbl, kids}) {
  let [o, so] = (0, m.useState)(mi.kdetL === id && !!mi.kdet), has = kids.some(Boolean);
  (0, m.useEffect)(() => { mi.kdet = o; mi.kdetL = id; }, [o, id]);
  (0, m.useEffect)(() => { so(mi.kdetL === id && !!mi.kdet); }, [id]);
  if (!has) return null;
  return (0, f.jsxs)('div', {className: 'kdet' + (o ? ' open' : ''), children: [(0, f.jsxs)('button', {type: 'button', className: 'kdet-t', 'aria-expanded': o, 'aria-controls': 'kdet-b', onClick: () => so(!o), children: [lbl, (0, f.jsx)('i', {className: 'kdet-c', 'aria-hidden': true})]}), o ? (0, f.jsx)('div', {id: 'kdet-b', className: 'kdet-b', children: kids}) : null]});
}
const FDnum = n => n.toLocaleString(Ia());
/* one language's dictionary file -> {s, e, k (keys, built on first search)} */
function FDload(L) {
  let fd = L.info && L.info.fd;
  if (!fd) return Promise.resolve(null);
  if (!FDc[L.lang]) FDc[L.lang] = fetch(FDH + 'dict/' + fd[1]).then(r => { if (!r.ok) throw Error(r.status); return r.json(); })
    .catch(e => { delete FDc[L.lang]; throw e; });
  return FDc[L.lang];
}
function FDkeys(D) {
  if (!D.k) D.k = D.e.map(r => { let k = EK.keys(r[0]); if (r[1]) EK.keys(r[1]).forEach(x => k.indexOf(x) < 0 && k.push(x)); return k; });
  if (!D.g) D.g = D.e.map(r => Da(r[3]));
  return D;
}
/* rank of entry for query q (lower is better, 9 = no match): exact same script, exact key, prefix, contains */
function FDrank(word, keys, gloss, q, qk, qp, qd) {
  if (qp && EK.plain(word) === qp) return 0;
  let r = 9;
  for (let k of keys) for (let x of qk) {
    if (k === x) r = Math.min(r, 1); else if (k.startsWith(x)) r = Math.min(r, 3); else if (x.length > 2 && k.indexOf(x) > -1) r = Math.min(r, 5);
  }
  if (r > 2 && qd && gloss) { let g = ' ' + gloss + ' '; if (g.indexOf(' ' + qd + ' ') > -1) r = Math.min(r, 2); else if (g.indexOf(' ' + qd) > -1) r = Math.min(r, 4); else if (qd.length > 2 && g.indexOf(qd) > -1) r = Math.min(r, 6); }
  return r;
}
const FDq = q => { q = String(q || '').trim(); return {q, qk: q ? EK.keys(q) : [], qp: EK.plain(q), qd: Da(q)}; };
/* core word list matching for the language page (adds Latin keys to the original contains test) */
function FDcoreMatch(e, Q) {
  if (!e._ek) { e._ek = EK.keys(e.word); e.lat && EK.keys(e.lat).forEach(x => e._ek.indexOf(x) < 0 && e._ek.push(x)); }
  return e._ek.some(k => Q.qk.some(x => k.startsWith(x) || (x.length > 2 && k.indexOf(x) > -1)));
}
function FDsplitTag(s) { let i = s.lastIndexOf(' · '); return i > -1 ? [s.slice(0, i), s.slice(i + 3)] : [s, '']; }
function FDrow({r, D, open, onTog, q, hl}) {
  let [src, tag] = FDsplitTag(D.s[r[4] || 0] || ''), pr = r[1] ? r[1] + (r[2] ? ' · /' + r[2] + '/' : '') : r[2] ? '/' + r[2] + '/' : '';
  return (0, f.jsxs)('div', {className: 'fdr' + (open ? ' open' : '') + (hl ? ' hlrow' : ''), children: [
    (0, f.jsxs)('button', {type: 'button', className: 'wr', 'aria-expanded': open, onClick: onTog, children: [
      (0, f.jsx)('span', {className: 'wk', children: (0, f.jsx)(di, {s: r[3].replace(/^\s*(\([^()]*\)\s*)+/, ''), q})}),
      (0, f.jsxs)('span', {className: 'wv', children: [(0, f.jsx)('b', {children: (0, f.jsx)(di, {s: r[0], q})}), pr ? (0, f.jsx)('small', {className: 'pr', children: pr}) : null,
        tag ? (0, f.jsx)('small', {className: 'fdtag', children: tag}) : null]})]}),
    open ? (0, f.jsxs)('p', {className: 'fdx', children: [r[3], (0, f.jsx)('br', {}), (0, f.jsxs)('span', {children: [FDt('src'), ': ', src, tag ? ' · ' + tag : '']})]}) : null]});
}
/* "Full dictionary (N words)" section of a language page. q = the page's search text, d = entry to show */
function FDsection({L, q, d}) {
  let fd = L.info && L.info.fd, [st, setSt] = (0, m.useState)(d != null || (q || '').trim().length > 1 ? 'load' : 'idle'),
    [D, setD] = (0, m.useState)(null), [n, setN] = (0, m.useState)(200), [op, setOp] = (0, m.useState)(d != null ? d : -1),
    ref = (0, m.useRef)(null), [dq, setDq] = (0, m.useState)(q || '');
  (0, m.useEffect)(() => { let t = setTimeout(() => setDq(q || ''), 120); return () => clearTimeout(t); }, [q]);
  (0, m.useEffect)(() => { if (st === 'idle' && (q || '').trim().length > 1) setSt('load'); }, [q]);
  (0, m.useEffect)(() => {
    if (st !== 'load') return;
    let live = true;
    FDload(L).then(x => { if (live) { setD(x); setSt('ok'); } }).catch(() => live && setSt('err'));
    return () => { live = false; };
  }, [st, L.lang]);
  (0, m.useEffect)(() => setN(200), [dq]);
  (0, m.useEffect)(() => { if (d != null && D && ref.current) ref.current.scrollIntoView({block: 'center'}); }, [D]);
  let list = (0, m.useMemo)(() => {
    if (!D) return [];
    let Q = FDq(dq);
    if (!Q.q) return D.e.map((r, i) => i);
    FDkeys(D);
    let out = [];
    D.e.forEach((r, i) => { let k = FDrank(r[0], D.k[i], D.g[i], Q.q, Q.qk, Q.qp, Q.qd); k < 9 && out.push([k, i]); });
    out.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return out.map(x => x[1]);
  }, [D, dq]);
  if (!fd) return null;
  let head = (0, f.jsxs)('h3', {className: 'fdh', children: [FDt('full'), (0, f.jsxs)('span', {children: [FDnum(fd[0]), ' ', FDt('words')]})]});
  if (st === 'idle') return (0, f.jsxs)('section', {className: 'fds', children: [head, (0, f.jsx)('button', {type: 'button', className: 'more fdopen', onClick: () => setSt('load'), children: FDt('open') + ' (' + FDnum(fd[0]) + ')'})]});
  if (st === 'load') return (0, f.jsxs)('section', {className: 'fds', 'aria-busy': 'true', children: [head, (0, f.jsxs)('p', {className: 'fdload', children: [(0, f.jsx)('i', {}), FDt('loading')]})]});
  if (st === 'err') return (0, f.jsxs)('section', {className: 'fds', children: [head, (0, f.jsx)('p', {className: 'empty', children: FDt('failed')}), (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setSt('load'), children: FDt('retry')})]});
  let qq = dq.trim(), show = list.slice(0, n), focus = d != null && D.e[d] ? d : null;
  return (0, f.jsxs)('section', {className: 'fds', children: [head,
    focus != null ? (0, f.jsx)('div', {ref, className: 'lrows fdfocus', children: (0, f.jsx)(FDrow, {r: D.e[focus], D, open: !0, hl: !0, onTog: () => {}, q: ''})}) : null,
    qq && !list.length ? (0, f.jsx)('p', {className: 'empty', children: FDt('none')}) : null,
    (0, f.jsx)('div', {className: 'lrows fdrows', children: show.map(i => (0, f.jsx)(FDrow, {r: D.e[i], D, q: qq, open: op === i, onTog: () => setOp(op === i ? -1 : i)}, i))}),
    list.length > n ? (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setN(n + 200), children: FDt('more') + ' (' + FDnum(Math.min(200, list.length - n)) + ' / ' + FDnum(list.length - n) + ')'}) : null]});
}
/* ---------- main search over the dictionary tier (sharded index, one small file per key prefix) */
function FDindex() {
  if (!FDsI) FDsI = fetch(FDH + 'search/' + FDV + '/index.json').then(r => { if (!r.ok) throw Error(r.status); return r.json(); })
    .then(x => (x.split = new Set(x.split), x)).catch(e => { FDsI = null; throw e; });
  return FDsI;
}
const FDhex = p => Array.from(p).map(c => c.codePointAt(0).toString(16)).join('-');
function FDshard(I, k) {
  let p = EK.prefix(k, Math.min(2, Array.from(k).length)), n = Array.from(k).length;
  while (I.split.has(p) && n > Array.from(p).length) p = EK.prefix(k, Array.from(p).length + 1);
  if (!FDsc[p]) FDsc[p] = fetch(FDH + 'search/' + FDV + '/' + FDhex(p) + '.json').then(r => r.ok ? r.json() : {e: [], k: []})
    .then(x => (x.p = p, x)).catch(() => (delete FDsc[p], {e: [], k: [], p}));
  return FDsc[p];
}
function FDsearch(q) {
  let Q = FDq(q);
  if (!Q.qk.length) return Promise.resolve([]);
  return FDindex().then(I => Promise.all(Q.qk.map(k => FDshard(I, k))).then(sh => {
    let best = new Map();
    sh.forEach(S => S.k.forEach(row => {
      let key = S.p + row[0], hitW = Q.qk.some(x => key === x), pre = Q.qk.some(x => key.startsWith(x));
      if (!pre) return;
      for (let j = 1; j < row.length; j++) {
        let v = row[j], mean = v < 0, e = S.e[mean ? ~v : v], word = e[2];
        let r = !mean && Q.qp && EK.plain(word) === Q.qp ? 0 : hitW ? (mean ? 2 : 1) : (mean ? 4 : 3);
        let id = e[0] + ':' + e[1], o = best.get(id);
        if (!o || r < o.r) best.set(id, {r, L: I.langs[e[0]], i: e[1], w: word, p: e[3], g: e[4]});
      }
    }));
    return Array.from(best.values()).sort((a, b) => a.r - b.r || a.w.length - b.w.length || a.w.localeCompare(b.w));
  }));
}
function FDresults({q, fam = 'all'}) {
  let [res, setRes] = (0, m.useState)(null), [n, setN] = (0, m.useState)(60), qq = String(q || '').trim();
  (0, m.useEffect)(() => {
    setN(60);
    if (!qq) { setRes(null); return; }
    let live = true, t = setTimeout(() => FDsearch(qq).then(x => live && setRes({q: qq, x})).catch(() => live && setRes({q: qq, x: []})), 120);
    return () => { live = false; clearTimeout(t); };
  }, [qq]);
  if (!qq) return null;
  if (!res || res.q !== qq) return (0, f.jsx)('p', {className: 'gh fdsg', children: FDt('searching')});
  let lang = x => fa['l-' + oa(x.L)], xs = res.x.filter(x => { let L = lang(x); return L && ('all' === fam || L.family === fam); });
  if (!xs.length) return null;
  return (0, f.jsxs)('div', {className: 'fdsr', children: [(0, f.jsxs)('p', {className: 'gh', children: [FDt('inDict'), ' · ', FDnum(xs.length)]}),
    (0, f.jsx)('div', {className: 'kgrid sgrid', children: xs.slice(0, n).map(x => { let L = lang(x);
      return (0, f.jsxs)('button', {type: 'button', className: 'kt rt', onClick: () => { Qa(qq); Ja('d' + x.i + '-' + L.id.slice(2)); }, children: [
        (0, f.jsx)('span', {className: 'kn', children: (0, f.jsx)(di, {s: x.g, q: qq})}),
        (0, f.jsxs)('span', {className: 'kb', children: [(0, f.jsx)('span', {className: 'kw', children: (0, f.jsx)(di, {s: x.w, q: qq})}),
          x.p ? (0, f.jsx)('span', {className: 'kpr pr', children: x.p}) : null,
          (0, f.jsxs)('span', {className: 'kl', children: [(0, f.jsx)('i', {className: 'dot ' + L.family}), Na(L)]})]})]}, x.L + x.i); })}),
    xs.length > n ? (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setN(n + 60), children: FDt('more') + ' (' + FDnum(xs.length - n) + ')'}) : null]});
}

/* phones: a quiet "Dictionary" row on the home page, right above the A–Z tile (the tab bar keeps 3 items) */
(function FDdictRow() {
  let tick = 0;
  const run = () => {
    tick = 0;
    const az = document.querySelector('.ct-grid > .ct.ctz:not(.fdict)');
    if (!az || az.parentNode.querySelector('.fdict')) return;
    const tab = document.querySelector('.tabbar .in > button:nth-child(1)');
    if (!tab) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ct ctz fdict';
    const label = (tab.querySelector('span:not(.icn)') || tab).textContent.trim();
    /* same anatomy as the A–Z tile: header label, then a body with the big glyph line */
    b.innerHTML = '<span class="cn"></span><span class="cw"><span class="cs on"><span class="cx">Aa · Аа · Αα</span><span class="cl">abc · абв · αβγ</span></span></span>';
    b.querySelector('.cn').textContent = label; b.setAttribute('aria-label', label);
    b.addEventListener('click', () => tab.click());
    az.parentNode.insertBefore(b, az);
  };
  new MutationObserver(() => { if (!tick) tick = requestAnimationFrame(run); })
    .observe(document.documentElement, {childList: true, subtree: true});
})();

/* phones: one light/dark button on every page (top-left, beside the back arrow) */
(function FDtheme() {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'fdtheme'; b.setAttribute('aria-label', Ea(({sq: 'Ndriçim i çelët / i errët', sr: 'Svetli / tamni prikaz'})[ya()] || 'Light / dark mode'));
  const isDark = () => {
    const t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  b.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('khl-theme', next); } catch (e) {}
  });
  const add = () => document.body && !document.body.contains(b) && document.body.appendChild(b);
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', add) : add();
})();

/* every word row gets its own copy control: "word /pron/ — translation" (replaces the header copy-list button) */
(function FDrowCopy() {
  let tick = 0;
  const run = () => {
    tick = 0;
    document.querySelectorAll('.wr:not([data-fdcp])').forEach(r => {
      r.setAttribute('data-fdcp', '1');
      const c = document.createElement('span');
      c.className = 'fdcp'; c.setAttribute('role', 'button'); c.setAttribute('tabindex', '0'); c.setAttribute('aria-label', 'Copy');
      r.appendChild(c);
    });
  };
  new MutationObserver(() => { if (!tick) tick = requestAnimationFrame(run); })
    .observe(document.documentElement, {childList: true, subtree: true});
  const copy = (c) => {
    const r = c.closest('.wr'); if (!r) return;
    const t = s => { const e = r.querySelector(s); return e ? e.textContent.trim() : ''; };
    const word = t('.wv b'), pr = t('.wv .pr'), mean = t('.wk');
    const text = [word, pr].filter(Boolean).join(' ') + (mean ? ' — ' + mean : '');
    const done = () => { c.classList.add('ok'); setTimeout(() => c.classList.remove('ok'), 1200); };
    try { navigator.clipboard.writeText(text).then(done, done); } catch (e) {}
  };
  const handler = e => {
    const c = e.target.closest && e.target.closest('.fdcp');
    if (!c) return;
    if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault(); e.stopPropagation();
    if (e.type !== 'pointerdown') copy(c);
  };
  ['pointerdown', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, handler, true));
})();

