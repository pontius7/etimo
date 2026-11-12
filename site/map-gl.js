/* Etimo map engine.

   MapLibre GL (open-source map engine, in map-next/vendor/) draws the heavy part of the map on the graphics card:
   sea, land, coast, borders, region and district lines, relief, the language areas, the detailed area layers and
   the census view. It also owns zoom, pan and pinch. The page (src/app/6-app-screens-and-startup.js) keeps what
   it always drew on top: pins, names, city and district names, the selection outlines, search and the language card.

   The data comes from scripts/map-next/build.py (map-next/data/). Colours of sea, land and lines: THEMES below.
   Which area is how strong when a language or a family is chosen: paint() below; the lists and the strengths of
   the detailed layers are the ones in regional-layer.js, so both maps follow one rule.

   Going back to the old map: open the site with ?map=svg (or set localStorage "etimo-map" to "svg"). */
import * as maplibregl from './map-next/vendor/maplibre-gl.mjs';
import {GHEG, TOSKS, ADIAL, ALBSET, ARO, MEG, VSET, HIDEPIN, PAR, OP, get} from './regional-layer.js?v=39';

const DATA = 'map-next/data/';
/* Sea, land and line colours: the same values as the site's stylesheet (--sea, --land, --coast, --bord2, relief opacity). */
const THEMES = {
  dark:  {sea: '#0a0f18', land: '#161e2b', coast: '#2d3e5d', border: '#526380', inner: '#eef2f8', relief: .5},
  light: {sea: '#e5eaf1', land: '#fbfaf6', coast: '#606a7c', border: '#374256', inner: '#06110e', relief: .62},
};
const ZONE = .6;      // a language area with nothing chosen (--zone-op on the site)
const BASE = .34;     // a country tinted with its main language, under the areas
/* census view: how strong a region is drawn for the share of the chosen language there */
const share = p => p == null ? .04 : p > 50 ? .75 : p > 10 ? .5 : p > 1 ? .3 : p > 0 ? .14 : .05;
const PRIORITY = new Set(['podgorica', 'gusinje', 'andrijevica', 'budva', 'ulcinj', 'bar'].map(n => 'ME-2023-' + n));
const NAMES = {'ME-2023-niksic': 'Nikšić', 'ME-2023-savnik': 'Šavnik', 'ME-2023-zabljak': 'Žabljak', 'ME-2023-kolasin': 'Kolašin', 'ME-2023-pluzine': 'Plužine', 'ME-2023-rozaje': 'Rožaje', 'ME-2023-pljevlja': 'Pljevlja'};
const LABEL_FROM = 12, LABEL_ALL = 40;   // municipality names: the main ones from 12 times in, all from 40 times

const json = url => fetch(url).then(r => { if (!r.ok) throw Error(url + ': ' + r.status); return r.json(); });
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let engine = null;
/* The page calls this every time it (re)builds its map box. The map itself is made once and kept. */
export async function attach(host, ctx) {
  if (!engine) engine = create(host).catch(e => { engine = null; throw e; });
  const G = await engine;
  G.use(host, ctx);
  return G;
}

async function create(host) {
  if (!document.createElement('canvas').getContext('webgl2')) throw Error('no WebGL2');
  const [meta, index, meValues] = await Promise.all([json(DATA + 'meta.json'), get('regional/index.json'), get('regional/ME.json')]);
  const {cx, cy, c} = meta.unit;
  /* map units <-> the coordinates MapLibre is given (same formula as fake() in scripts/map-next/build.py) */
  const at = (x, y) => [(x - cx) * c * 360, Math.atan(Math.sinh(-2 * Math.PI * (y - cy) * c)) * 180 / Math.PI];
  const zoomOf = s => Math.log2(s / (512 * c));      // s = screen pixels per map unit

  const small = matchMedia('(max-width:820px),(pointer:coarse) and (max-width:1180px)').matches;
  let reliefUrl = 'data/' + (small ? 'shade-s.avif' : 'shade.avif');
  try { await createImageBitmap(await (await fetch(reliefUrl)).blob()); } catch { reliefUrl = 'data/shade.webp'; }

  const box = document.createElement('div');
  box.className = 'kgl';
  host.prepend(box);

  const S = {theme: 'light', sel: null, fam: null, conc: false, hover: null, dop: {}, n: 0};
  let ctx = null, H = {}, labels = null, legend = null;
  const T0 = THEMES.light, kind = ['get', 'kind'], name = ['get', 'name'];
  const reliefOp = P => ['interpolate', ['linear'], ['zoom'], 0, P.relief, 22, P.relief];
  const round = {'line-join': 'round', 'line-cap': 'round'};
  const map = new maplibregl.Map({
    container: box,
    center: at(...[(meta.home[0] + meta.home[2]) / 2, (meta.home[1] + meta.home[3]) / 2]), zoom: 3,
    maxBounds: [at(cx - 2700, cy + 2000), at(cx + 2700, cy - 2100)],
    renderWorldCopies: false, attributionControl: false, fadeDuration: 0,
    dragRotate: false, pitchWithRotate: false, touchPitch: false, rollEnabled: false, maxPitch: 0,
    style: {
      version: 8,
      sources: {
        land:   {type: 'geojson', data: DATA + 'land.json',  maxzoom: 12, tolerance: .25},
        lines:  {type: 'geojson', data: DATA + 'lines.json', maxzoom: 12, tolerance: .25},
        areas:  {type: 'geojson', data: DATA + 'areas.json', maxzoom: 12, tolerance: .25},
        census: {type: 'geojson', data: {type: 'FeatureCollection', features: []}, maxzoom: 12, tolerance: .25},
        relief: {type: 'image', url: reliefUrl, coordinates: meta.relief},
      },
      /* Bottom to top. Every paint value that depends on the theme or on what is chosen is set in look() and paint(). */
      layers: [
        {id: 'sea', type: 'background', paint: {'background-color': T0.sea}},
        {id: 'land', type: 'fill', source: 'land', paint: {'fill-color': T0.land}},
        {id: 'base', type: 'fill', source: 'land', filter: ['has', 'base'], paint: {'fill-color': ['get', 'base'], 'fill-opacity': BASE}},
        {id: 'dia', type: 'fill', source: 'areas', filter: ['==', kind, 'dia'], paint: {'fill-color': ['get', 'light'], 'fill-opacity': ZONE * .5}},
        {id: 'areas', type: 'fill', source: 'areas', filter: ['all', ['!', ['has', 'kind']], ['!', ['has', 'round']]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ZONE}},
        /* languages without a drawn area: a circle around the pin. A layer of their own, so a circle lies over the area under it instead of replacing it */
        {id: 'rounds', type: 'fill', source: 'areas', filter: ['has', 'round'], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ZONE}},
        {id: 'detail-a', type: 'fill', source: 'areas', filter: ['in', kind, ['literal', ['me', 'dial']]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': OP.rest}},
        {id: 'census', type: 'fill', source: 'census', paint: {'fill-color': ['get', 'c'], 'fill-opacity': ['get', 'o']}},
        {id: 'census-hatch', type: 'fill', source: 'census', filter: ['>', ['get', 'h'], 0], layout: {visibility: 'none'}, paint: {'fill-opacity': ['get', 'h']}},
        {id: 'detail-b', type: 'fill', source: 'areas', filter: ['in', kind, ['literal', ['vlach', 'meg', 'area']]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': OP.rest}},
        {id: 'areas-hist', type: 'line', source: 'areas', filter: ['has', 'hist'], paint: {'line-color': ['get', 'color'], 'line-width': 1.2, 'line-opacity': .6, 'line-dasharray': [2.5, 2.1]}},
        {id: 'relief', type: 'raster', source: 'relief', paint: {'raster-fade-duration': 0, 'raster-resampling': 'linear', 'raster-opacity': reliefOp(T0)}},
        /* One set of outlines: the coast is the edge of the land shapes; borders, region and district lines are cut to the same shapes. */
        {id: 'coast', type: 'line', source: 'land', layout: round, paint: {'line-color': T0.coast, 'line-width': .9}},
        {id: 'district', type: 'line', source: 'lines', filter: ['==', kind, 'district'], layout: round, paint: {'line-color': T0.inner, 'line-width': .6, 'line-opacity': 0}},
        {id: 'region', type: 'line', source: 'lines', filter: ['==', kind, 'region'], layout: round, paint: {'line-color': T0.inner, 'line-width': .7, 'line-opacity': 0}},
        {id: 'border', type: 'line', source: 'lines', filter: ['==', kind, 'border'], layout: round, paint: {'line-color': T0.border, 'line-opacity': .9, 'line-width': 1.2}},
        {id: 'hover-edge', type: 'line', source: 'areas', filter: ['==', name, ''], layout: {'line-join': 'round'}, paint: {'line-color': ['get', 'color'], 'line-width': 2, 'line-opacity': .9}},
        {id: 'sel-edge', type: 'line', source: 'areas', filter: ['==', name, ''], layout: {'line-join': 'round'}, paint: {'line-color': ['get', 'color'], 'line-width': 2.2}},
      ],
    },
  });
  window.__kgl = map;      // for looking at the map from the browser console
  map.touchZoomRotate.disableRotation();
  map.keyboard.disableRotation();
  map.once('idle', () => box.classList.add('on'));
  await new Promise((ok, no) => { map.once('load', ok); map.once('error', e => no(e.error || e)); });

  /* ---------------------------------------------------------------- what the page is told and asks */
  const fire = (n, e) => { try { H && H[n] && H[n](e); } catch (err) { console.warn(err); } };
  map.on('movestart', () => fire('start'));
  map.on('move', () => { fire('move'); placeLabels(); });
  map.on('moveend', () => fire('end'));
  map.on('click', e => fire('click', e));
  map.on('mousemove', e => fire('hover', e));
  map.on('mouseout', () => fire('leave'));

  /* ---------------------------------------------------------------- zoom levels follow the page's first view */
  let base = 1;     // screen pixels per map unit at the page's "1 times" view
  const k = f => zoomOf(base * f);
  function scale() {
    const z = ['zoom'], lin = ['interpolate', ['linear'], z];
    map.setPaintProperty('district', 'line-opacity', [...lin, k(9), 0, k(12), .2]);
    map.setLayerZoomRange('district', Math.max(0, k(9)), 24);
    map.setPaintProperty('region', 'line-opacity', [...lin, k(2.2), 0, k(3.2), .22]);
    map.setPaintProperty('region', 'line-width', [...lin, k(3), .6, k(12), .9]);
    map.setPaintProperty('border', 'line-width', [...lin, k(1), 1.05, k(4), 1.5]);
    look();
  }

  /* ---------------------------------------------------------------- colours */
  let colourOf = {};
  const colour = n => colourOf[n];
  /* a language's colour as the page shows it in this theme (pin, wheel, card); the built-in table is the fallback */
  function colours() {
    colourOf = {};
    const add = (n, col) => { if (col && !colourOf[n]) colourOf[n] = col; };
    for (const l of ctx.languages) add(l.lang, ctx.color(l));
    for (const [, n] of meta.detail) add(n, window.__albColor && window.__albColor({data: {L: {lang: n}}}));
  }
  const byName = key => { const pairs = Object.entries(colourOf).flat(); return pairs.length ? ['to-color', ['match', ['get', key], ...pairs, ['get', key === 'lang' ? 'base' : 'color']]] : ['get', key === 'lang' ? 'base' : 'color']; };
  /* Light and dark, and the zoom-dependent relief: only colours change, nothing is reloaded. */
  function look() {
    const P = THEMES[S.theme], col = byName('name');
    /* minority areas: the language's colour mixed with the land colour (46% / 74%, as on the site) */
    const mix = s => ['interpolate', ['linear'], s, 0, P.land, 1, col];
    map.setPaintProperty('sea', 'background-color', P.sea);
    map.setPaintProperty('land', 'fill-color', P.land);
    map.setPaintProperty('base', 'fill-color', byName('lang'));
    map.setPaintProperty('dia', 'fill-color', ['get', S.theme]);
    for (const id of ['areas', 'rounds']) map.setPaintProperty(id, 'fill-color', ['match', ['get', 'tint'], 'min', mix(.46), 'plu', mix(.74), col]);
    for (const id of ['detail-a', 'detail-b']) map.setPaintProperty(id, 'fill-color', col);
    for (const id of ['areas-hist', 'hover-edge', 'sel-edge']) map.setPaintProperty(id, 'line-color', col);
    map.setPaintProperty('coast', 'line-color', P.coast);
    map.setPaintProperty('border', 'line-color', P.border);
    map.setPaintProperty('region', 'line-color', P.inner);
    map.setPaintProperty('district', 'line-color', P.inner);
    /* relief: full strength on the wide view, a little lighter from 6 times in, gone from 11 times in (as on the site) */
    map.setPaintProperty('relief', 'raster-opacity', ['interpolate', ['linear'], ['zoom'], k(5), P.relief, k(6.5), P.relief * .84, k(9.5), P.relief * .84, k(11.5), 0]);
  }

  /* ---------------------------------------------------------------- what is chosen -> how strong each area is */
  const albMode = () => !!(S.sel && ALBSET.has(S.sel.lang)) || S.fam === 'Albanian';
  function paint() {
    const sel = S.sel, fam = S.fam, alb = albMode(), f = ['get', 'fam'];
    /* the broad language areas */
    for (const id of ['areas', 'rounds']) map.setPaintProperty(id, 'fill-opacity',
      S.conc ? (sel ? ['case', ['==', name, sel.lang], .5, ZONE * .3] : ZONE * .3)
        : sel ? ['case', ['==', name, sel.lang], OP.sel, ['==', f, sel.family], OP.fam, OP.other]
        : fam ? ['case', ['==', f, fam], ZONE * 1.1, .12]
        : ['case', ['has', 'hist'], .11, ZONE]);
    map.setPaintProperty('dia', 'fill-opacity', sel || S.conc ? .08 : fam ? ['case', ['==', f, fam], ZONE * .5, .06] : ZONE * .5);
    /* a country tinted with its main language */
    map.setFilter('base', alb ? ['==', name, ''] : sel ? ['all', ['has', 'base'], ['==', ['get', 'lang'], sel.lang]] : ['has', 'base']);
    map.setPaintProperty('base', 'fill-opacity', fam ? ['case', ['==', ['get', 'bfam'], fam], BASE, .1] : BASE);
    /* The detailed layers: one rule for all of them (OP in regional-layer.js):
         nothing chosen .78 | the chosen language .9 | same family .3 | another family .07 | under a family filter .78 / .14
       Only the sibling shading inside the Albanian and Vlach groups goes beyond it. */
    const rest = dfam => sel ? (sel.family === dfam ? OP.fam : OP.other) : fam ? (fam === dfam ? OP.rest : OP.filterOther) : OP.rest;
    const isSel = n => !!sel && (n === sel.lang || PAR[n] === sel.lang);
    const rules = {
      dial(n) {
        if (!alb) return rest('Albanian');
        const s = sel && ALBSET.has(sel.lang) ? sel.lang : 'Albanian';
        if (s === 'Albanian') return .82;
        if (s === 'Gheg Albanian') return GHEG.has(n) ? .82 : .14;
        if (n === s) return .9;
        return (GHEG.has(s) && GHEG.has(n)) || (TOSKS.has(s) && TOSKS.has(n)) ? .32 : .14;
      },
      vlach(n) {
        if (alb) return 0;
        const s = sel && VSET.has(sel.lang) ? sel.lang : null, aro = ARO.includes(n), meg = MEG.includes(n), main = n === 'Megleno-Romanian';
        if (!s) return aro || main ? rest('Romance') : 0;
        if (s === 'Aromanian') return aro ? .88 : main ? .25 : 0;
        if (s === 'Megleno-Romanian') return meg ? .88 : aro ? .22 : 0;
        if (ARO.includes(s)) return n === s ? .92 : aro || main ? .2 : 0;
        return n === s ? .92 : meg ? .3 : aro ? .2 : 0;
      },
      area: (n, dfam) => alb ? 0 : isSel(n) ? OP.sel : rest(dfam),
      /* Montenegro: broad areas while nothing is chosen; with a language chosen the municipalities show its census share */
      me: (n, dfam) => alb ? 0 : !sel ? rest(dfam) : PAR[sel.lang] && n === sel.lang ? OP.sel : 0,
    };
    rules.meg = rules.vlach;
    S.rules = rules;
    S.dop = {};
    const edge = [];
    for (const [kd, n, dfam] of meta.detail) {
      const o = S.dop[kd + ':' + n] = rules[kd](n, dfam);
      if (sel && o >= .5 && (kd === 'dial' || kd === 'vlach' || kd === 'meg' ? n === sel.lang : isSel(n))) edge.push(kd + ':' + n);
    }
    const dop = ['match', ['get', 'key'], ...Object.entries(S.dop).flat(), 0];
    map.setPaintProperty('detail-a', 'fill-opacity', dop);
    map.setPaintProperty('detail-b', 'fill-opacity', dop);
    /* the chosen language is outlined (not while the Albanian or Vlach view replaces it) */
    const plain = sel && !alb && !VSET.has(sel.lang);
    map.setFilter('sel-edge', sel ? ['any', ['all', ['!', ['has', 'kind']], ['==', name, plain ? sel.lang : '']], ['in', ['get', 'key'], ['literal', edge]]] : ['==', name, '']);
    showLegend();
    census();
  }

  /* ---------------------------------------------------------------- census view (per municipality or region) */
  const regs = new Map(), rowsOf = new Map(), ready = new Map();
  const regFor = cc => { if (!regs.has(cc)) regs.set(cc, json(DATA + 'regions/' + cc + '.json').then(fc => ({feats: fc.features, byIx: new Map(fc.features.map(ft => [ft.properties.i, ft]))})).catch(e => { regs.delete(cc); throw e; })); return regs.get(cc); };
  let meFeats = null;
  /* one language: its census rows joined to the regions of each country it has rows for */
  function rowsFor(key) {
    const info = index.languages[key];
    if (!info) return null;
    if (!rowsOf.has(key)) {
      const ccs = info.countries.filter(cc => cc !== 'ME');
      rowsOf.set(key, Promise.all([get('regional/lang/' + info.file + '.json'), ...ccs.map(regFor)]).then(([data, ...geos]) => {
        const rows = [];
        ccs.forEach((cc, i) => { for (const [ix, , , pct] of data.rows[cc] || []) { const ft = geos[i].byIx.get(ix); if (ft) rows.push({ft, cc, pct}); } });
        ready.set(key, rows);
      }).catch(e => { rowsOf.delete(key); throw e; }));
    }
    return rowsOf.get(key);
  }
  const hatches = new Set();
  /* stripes in the chosen language's colour: where it is a minority, over the colour of the majority */
  function hatch(col) {
    const id = 'hatch-' + col;
    if (!hatches.has(id)) {
      const cv = document.createElement('canvas'); cv.width = cv.height = 16;
      const g = cv.getContext('2d'); g.strokeStyle = col; g.lineWidth = 3.4;
      for (const d of [-16, 0, 16]) { g.beginPath(); g.moveTo(d - 2, 18); g.lineTo(d + 18, -2); g.stroke(); }
      map.addImage(id, g.getImageData(0, 0, 16, 16), {pixelRatio: 2});
      hatches.add(id);
    }
    return id;
  }
  function census() {
    const sel = S.sel, alb = albMode(), n = ++S.n, src = map.getSource('census');
    const again = p => p && p.then(() => { if (n === S.n) census(); }, () => {});
    if (!meFeats) again(regFor('ME').then(r => { meFeats = r.feats; makeLabels(); }));
    if (!sel) { src.setData({type: 'FeatureCollection', features: []}); map.setLayoutProperty('census-hatch', 'visibility', 'none'); return; }
    const key = ALBSET.has(sel.lang) ? 'Albanian' : sel.lang;
    const eff = ALBSET.has(sel.lang) ? ctx.languages.find(l => l.lang === 'Albanian') || sel : sel;
    const out = [], row = (ft, col, o, h) => out.push({type: 'Feature', geometry: ft.geometry, properties: {c: col || '#8a93a3', o, h: h || 0}});
    if (!ready.has(key)) again(rowsFor(key));
    for (const r of ready.get(key) || []) if (!(alb && ['AL', 'XK', 'MK', 'GR'].includes(r.cc))) row(r.ft, ctx.color(eff), share(r.pct));
    /* Montenegro: every municipality; where the chosen language is a minority (2% or more) the majority keeps its colour and the language shows as stripes */
    let striped = false;
    for (const ft of meFeats || []) {
      const recs = (meValues[ft.properties.id] || []).filter(o => o.percentage != null), own = recs.find(o => o.language_id === eff.lang);
      const top = recs.slice().sort((a, b) => b.percentage - a.percentage)[0];
      const over = !!(own && own.percentage >= 2 && top && top.language_id !== eff.lang);
      const lang = over ? ctx.languages.find(l => l.lang === top.language_id) || eff : eff;
      const fac = alb ? (lang.family === 'Albanian' ? 1 : over ? .5 : .22) : 1;
      row(ft, ctx.color(lang), fac * (over ? (top.percentage > 50 ? .75 : .45) : share(own ? own.percentage : null)), over ? Math.min(.85, .2 + own.percentage / 40) : 0);
      striped = striped || over;
    }
    src.setData({type: 'FeatureCollection', features: out});
    if (striped) map.setPaintProperty('census-hatch', 'fill-pattern', hatch(ctx.color(eff) || '#9e2b2b'));
    map.setLayoutProperty('census-hatch', 'visibility', striped ? 'visible' : 'none');
  }

  /* ---------------------------------------------------------------- legend of the Albanian and Vlach views */
  function showLegend() {
    const sel = S.sel, alb = albMode(), vSel = !!(sel && VSET.has(sel.lang)), host = box.parentNode;
    if (!host) return;
    legend = host.querySelector('.alb-legend');
    if (!(alb || vSel)) { if (legend) legend.hidden = true; return; }
    if (!legend) { legend = document.createElement('div'); legend.className = 'alb-legend'; host.appendChild(legend); }
    const dn = n => window.__dn ? window.__dn(n) : n, lt = key => window.__lt ? window.__lt(key) : key;
    const item = (n, kd, label) => '<li style="opacity:' + (S.rules[kd](n) > .4 ? 1 : .38) + '"><i style="background:' + (colour(n) || '#888') + '"></i>' + (label || dn(n)) + '</li>';
    if (alb) {
      legend.setAttribute('aria-label', 'Albanian dialects');
      legend.innerHTML = '<b>' + lt('ad') + '</b><div><span>' + lt('gh') + '</span><ul>' + [...GHEG].map(n => item(n, 'dial')).join('') + '</ul></div><div><span>' + lt('to') + '</span><ul>' + [...TOSKS].map(n => item(n, 'dial')).join('') + '</ul></div><small>Areas after Gjinari 1988 and later work, via Wikimedia Commons (Karadakli230, CC BY-SA 4.0; ArnoldPlaton, CC BY-SA 3.0)</small>';
    } else {
      legend.setAttribute('aria-label', 'Vlach languages');
      const short = n => dn(n).replace(/Megleno-Romanian \((.*)\)/, (m, a) => a[0].toUpperCase() + a.slice(1));
      legend.innerHTML = '<b>' + lt('vl') + '</b><div><span>' + lt('na') + '</span><ul>' + ARO.slice(0, 3).map(n => item(n, 'vlach')).join('') + '</ul></div><div><span>' + lt('sa') + '</span><ul>' + ARO.slice(3).map(n => item(n, 'vlach')).join('') + '</ul></div><div><span>' + lt('me') + '</span><ul>' + MEG.map(n => item(n, 'meg', short(n))).join('') + '</ul></div><small>Areas after Koryakov 2001 (Atlas of Romance languages), via Wikimedia Commons, CC BY-SA 3.0</small>';
    }
    legend.hidden = false;
  }

  /* ---------------------------------------------------------------- names of Montenegro's municipalities (deep zoom) */
  function makeLabels() {
    if (labels) labels.g.remove();
    labels = null;
    if (!meFeats || !ctx || !ctx.parent || !ctx.parent.isConnected) return;
    const NS = 'http://www.w3.org/2000/svg', g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'municipality-labels'); g.setAttribute('pointer-events', 'none'); g.setAttribute('visibility', 'hidden');
    const texts = meFeats.map(ft => {
      const t = document.createElementNS(NS, 'text'), p = ctx.px(ft.properties.at);
      t.setAttribute('x', p[0]); t.setAttribute('y', p[1]); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('font-family', 'var(--sans,system-ui)'); t.setAttribute('fill', 'var(--ink,#263e32)'); t.setAttribute('stroke', 'var(--bg,#fff)'); t.setAttribute('paint-order', 'stroke');
      if (PRIORITY.has(ft.properties.id)) t.dataset.pri = '1';
      t.textContent = NAMES[ft.properties.id] || ft.properties.name;
      return g.appendChild(t);
    });
    ctx.parent.appendChild(g);
    labels = {g, texts, dq: 0};
    placeLabels();
  }
  function placeLabels() {
    if (!labels || !ctx) return;
    const kk = ctx.k();
    labels.g.setAttribute('visibility', kk >= LABEL_FROM ? 'visible' : 'hidden');
    if (kk < LABEL_FROM) return;
    for (const t of labels.texts) { t.setAttribute('display', kk >= LABEL_ALL || t.dataset.pri ? 'inline' : 'none'); t.setAttribute('font-size', 10.5 / kk); t.setAttribute('stroke-width', 3 / kk); }
    /* a name the map already prints as a city label is not written twice */
    if (!labels.dq) labels.dq = requestAnimationFrame(() => {
      if (!labels) return;
      labels.dq = 0;
      const host = box.parentNode, shown = new Set(labels.texts.filter(t => t.getAttribute('display') !== 'none').map(t => t.textContent));
      if (!host || !shown.size) return;
      const cities = new Set([...host.querySelectorAll('g.acities text,g.cities text')].filter(n => shown.has(n.textContent.trim()) && (n.checkVisibility ? n.checkVisibility() : true)).map(n => n.textContent.trim()));
      for (const t of labels.texts) if (cities.has(t.textContent)) t.setAttribute('display', 'none');
    });
  }

  /* ---------------------------------------------------------------- the handle the page works with */
  return {
    map, box,
    hidePin: HIDEPIN,
    /* (re)attach to the page's map box */
    use(host, c) {
      ctx = c; H = {};
      if (box.parentNode !== host) host.prepend(box);
      map.resize();
      colours();
      makeLabels();
    },
    /* the page's two drawings go inside the map, so a gesture that starts on a pin still moves the map */
    overlay(...svgs) { map.getCanvasContainer().append(...svgs); },
    on(h) { H = h || {}; },
    /* the view: s = screen pixels per map unit, x / y = the map unit at the centre of the box */
    view() {
      const ct = map.getCenter();
      return {s: 512 * Math.pow(2, map.getZoom()) * c, x: ct.lng / (c * 360) + cx, y: cy - Math.asinh(Math.tan(ct.lat * Math.PI / 180)) / (2 * Math.PI * c)};
    },
    jump(v, ms) {
      const to = {center: at(v.x, v.y), zoom: zoomOf(v.s)};
      map.stop();
      ms ? map.easeTo({...to, duration: ms, easing: ease}) : map.jumpTo(to);
    },
    /* one = pixels per map unit at the page's "1 times" view; the map can go from `out` to `inn` times that */
    limits(one, out, inn) {
      base = one;
      map.setMinZoom(null); map.setMaxZoom(null);
      map.setMinZoom(zoomOf(one * out)); map.setMaxZoom(zoomOf(one * inn));
      scale();
    },
    /* what is chosen: a language, a family, the word view, the theme */
    set(st) {
      const theme = st.theme !== S.theme;
      Object.assign(S, st);
      if (theme) { colours(); look(); }
      paint();
    },
    /* the area under the pointer on the first view is outlined */
    hover(n) { if (n !== S.hover) { S.hover = n; map.setFilter('hover-edge', ['all', ['!', ['has', 'kind']], ['==', name, n || '']]); } },
    /* what lies at a point of the box: a detailed area that selects a language, a broad area, or nothing of ours */
    hit(pt) {
      const alb = albMode();
      for (const ft of map.queryRenderedFeatures([pt.x, pt.y], {layers: ['detail-b', 'census', 'detail-a', 'rounds', 'areas']})) {
        const p = ft.properties, id = ft.layer.id;
        if (id === 'census') return {t: 'census'};
        if (id === 'areas' || id === 'rounds') return {t: 'zone', name: p.name};
        if (p.kind !== 'me' && (S.dop[p.key] || 0) > 0) return {t: 'lang', name: !alb && ADIAL.has(p.name) ? 'Albanian' : p.name};
      }
      return null;
    },
    off() { H = {}; if (legend) legend.hidden = true; if (labels) { labels.g.remove(); labels = null; } },
  };
}
