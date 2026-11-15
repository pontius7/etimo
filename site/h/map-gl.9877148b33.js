/* Etimo map engine.

   MapLibre GL (open-source map engine, in map-next/vendor/) draws the heavy part of the map on the graphics card:
   sea, land, coast, borders, region and district lines, relief, the language areas, the detailed area layers and
   the census view. It also owns zoom, pan and pinch, and draws the pins and what the page writes on the map (names,
   dots, outlines: labels() below), so nothing of the page is redrawn while the map moves. The page
   (src/app/6-app-screens-and-startup.js) still decides what shows where, and keeps search and the language card.

   The data comes from scripts/map-next/build.py (map-next/data/). Colours of sea, land and lines: src/styles/tokens.css (themeOf below).
   Which area is how strong when a language or a family is chosen: targets() below, given to each area as its own state
   and faded to (fade()); the lists and the strengths of the detailed layers are the ones in regional-layer.js, which the
   data build reads too, so both follow one rule. */
/* ?v= is MapLibre's version: the vendor folder is cached for a year (site/_headers), so a new MapLibre needs a new ?v= here
   (its worker file gets the version from MapLibre itself; the page's first-moment fetches read this line: scripts/build-page.py) */
import * as maplibregl from '../map-next/vendor/maplibre-gl.mjs?v=6.18.0';
import {OP, prepare, viewOn, viewOf, exclusiveOf, kindOp, censusOp, hatchOp, get} from './regional-layer.b07294b149.js';

const DATA = 'map-next/data/';
/* Sea, land and line colours: the same values as the site's stylesheet (--sea, --land, --coast, --bord2, relief opacity). */
const THEMES = {
  dark:  {sea: '#0a0f18', land: '#161e2b', coast: '#2d3e5d', border: '#526380', inner: '#eef2f8', relief: .5, pin: '#0e141e', pinEdge: 'rgba(238,242,248,.66)', pinSel: '#ffffff'},
  light: {sea: '#e5eaf1', land: '#fbfaf6', coast: '#606a7c', border: '#374256', inner: '#06110e', relief: .62, pin: '#ffffff', pinEdge: 'rgba(22,32,50,.45)', pinSel: '#141c2c'},
};
/* The colours themselves live in the page's colour file, src/styles/tokens.css (--map-sea, --map-land, ...); THEMES above
   only stands in where the page has none, or when it is asked for the theme the page is not showing. */
const CSSKEY = {sea: 'sea', land: 'land', coast: 'coast', border: 'border', inner: 'name', pin: 'pin', pinEdge: 'pin-edge', pinSel: 'pin-sel'};
function themeOf(t) {
  const P = {...THEMES[t]}, root = document.documentElement;
  if ((root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light') !== t) return P;
  const c = getComputedStyle(root);
  for (const [k, n] of Object.entries(CSSKEY)) { const v = c.getPropertyValue('--map-' + n).trim(); if (v) P[k] = v; }
  return P;
}
/* A language pin: a soft shadow, a disc, and the language's colour at its core (so a pin stands out from its own area,
   which has the same colour). PIN = radius of the disc in screen pixels. How visible and how large each pin is comes
   from the page, pin by pin: o = 0 to 1, s = 1, or larger for the chosen pin and the one under the pointer. */
const PIN = 6.4, PIN_O = ['coalesce', ['feature-state', 'o'], 0], PIN_S = ['coalesce', ['feature-state', 's'], 1], PIN_BIG = ['>', PIN_S, 1.05];
/* The ring that goes out once from a pin when its language is chosen (pulse() below): how far it has gone, 0 to 1 (1 = done, unseen). */
const PULSE_T = ['coalesce', ['feature-state', 't'], 1];
/* Pin size follows the zoom, so many pins never crowd the map: where many languages show (zoom 4.2 to 5) a pin is a small seed
   of its colour with a thin light edge, no outline and no shadow; it grows smoothly into the full pin (disc, outline, soft
   shadow) only close in (zoom 8). Phones (below the site's one breakpoint, 64rem) draw them a little smaller. The chosen pin
   and the one under the pointer keep their outline and their larger size (s from the page). */
const PHONE = typeof matchMedia === 'function' && !matchMedia('(min-width: 64rem)').matches;
const PF = PHONE ? .86 : 1;
/* Census region names: on phones a name waits until its region is 96 px wide (desktop: 34 px), keeps 9 px of room around it
   (desktop: 3 px) and is a little lighter, so language names, the map's subject, are not crowded out on a small screen. */
const NAME_PX = PHONE ? 96 : 34, NAME_PAD = PHONE ? 9 : 3;
const PZ = (a, b, c) => ['interpolate', ['linear'], ['zoom'], 4.2, ['*', a * PF, PIN_S], 6, ['*', b * PF, PIN_S], 8, ['*', c * PF, PIN_S]];
const PIN_R = PZ(3.4, 4.9, PIN), CORE_R = PZ(2.35, 3, PIN * .58), SHADOW_R = PZ(4, 6.5, PIN + 3.4);
const PIN_W = ['interpolate', ['linear'], ['zoom'], 4.2, ['case', PIN_BIG, 2, 0], 6, ['case', PIN_BIG, 2, .6], 8, ['case', PIN_BIG, 2, 1]];
const SHADOW_O = ['interpolate', ['linear'], ['zoom'], 5.5, 0, 7.5, ['*', .34, PIN_O]];
/* The page's names (layers lab-*): how visible each one is (o, from the page; a fade in progress comes as feature state), and its
   weight. The engine draws the letters itself in the site's font (no font server): it takes the weight from the words in the
   first name of the list and the letters from the first family the browser has, here Manrope (the page loads 300 to 600). */
const LAB_O = ['coalesce', ['feature-state', 'o'], ['get', 'o']];
const LAB_FONT = ['match', ['get', 'w'], 300, ['literal', ['Manrope Light', 'Manrope']], 500, ['literal', ['Manrope Medium', 'Manrope']], 600, ['literal', ['Manrope SemiBold', 'Manrope']], 700, ['literal', ['Manrope Bold', 'Manrope']], ['literal', ['Manrope']]];
const ZONE = .6;      // a language area with nothing chosen (--zone-op on the site)
const BASE = .34;     // a country tinted with its main language, under the areas
/* An area's own state (fade() below), d where it has none: o = how strong it is drawn, i = the first view's fade */
const FS = (k, d) => ['coalesce', ['feature-state', k], d], IN = FS('i', 1);
const EDGE = ['!=', ['get', 'kind'], 'dia'];      // the outlines: one filter for both, so the engine builds them once

const json = url => fetch(url).then(r => { if (!r.ok) throw Error(url + ': ' + r.status); return r.json(); });
/* The site's one easing, cubic-bezier(0.2, 0.8, 0.2, 1), for the camera and every fade on the map: x(t) = .6t - .6t² + t³
   is solved for t (Newton; it always grows, so a few steps are exact), then y(t). */
const ease = x => {
  if (x <= 0 || x >= 1) return x <= 0 ? 0 : 1;
  let t = x;
  for (let i = 0; i < 6; i++) t -= (t * (.6 - .6 * t + t * t) - x) / (.6 - 1.2 * t + 3 * t * t);
  const u = 1 - t;
  return 2.4 * u * u * t + 3 * u * t * t + t * t * t;
};
/* the site's own motion setting (data-motion="off") or the system's "reduce motion": every fade then lasts at most 100 ms */
const still = () => document.documentElement.getAttribute('data-motion') === 'off' || matchMedia('(prefers-reduced-motion: reduce)').matches;

let engine = null, made = null, gen = 0;
const mapReady = () => { if (!window.__kMapReady) { window.__kMapReady = true; window.dispatchEvent(new Event('etimo:mapready')); } };
/* Takes the engine out of the page again: its box, its map and the kept copy. The page calls it when the engine fails (it then shows a note instead of the map). */
export function drop() {
  gen++;
  mapReady();
  if (made) { try { made.map && made.map.remove(); } catch {} made.box.remove(); made = null; }
  if (window.__kgl) delete window.__kgl;
  document.querySelectorAll('[data-kpre]').forEach(n => n.remove());
  engine = null;
}
/* Called from the page's first lines on a map screen (preloads() in scripts/build-page.py): the engine is made at once, in a
   hidden box the size of the screen, so its worker, settings and first tiles load while the page's own code is still on its
   way; attach() then moves the ready map into the page's map box (use() below). */
export function prewarm() {
  if (engine || !document.body) return;
  const host = document.createElement('div');
  host.setAttribute('data-kpre', '');
  host.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100dvh;visibility:hidden;pointer-events:none;z-index:-1;overflow:hidden';
  document.body.appendChild(host);
  const id = gen;
  engine = create(host, id, true).catch(e => { if (id === gen) drop(); throw e; });
  engine.catch(() => {});
}
/* The page calls this every time it (re)builds its map box. The map itself is made once and kept. */
export async function attach(host, ctx) {
  if (!engine) { const id = gen; engine = create(host, id).catch(e => { if (id === gen) drop(); throw e; }); }
  const G = await engine;
  G.use(host, ctx);
  return G;
}

async function create(host, id, early) {
  if (!document.createElement('canvas').getContext('webgl2')) throw Error('no WebGL2');
  /* The relief picture is downloaded and decoded once, while the map data loads, and handed to the engine as it is:
     AVIF (smaller one on phones), or WebP where AVIF cannot be decoded. Without it the map still works, just flat. */
  const small = matchMedia('(max-width:820px),(pointer:coarse) and (max-width:1180px)').matches;
  const picture = url => fetch(url).then(r => { if (!r.ok) throw Error(url + ': ' + r.status); return r.blob(); }).then(b => createImageBitmap(b));
  /* fetched once the first tile of shapes has come (below), so on a phone it does not take bandwidth from the engine's
     own files and the tiles; until then the map is drawn without it */
  let reliefP = null;
  const relief = () => reliefP || (reliefP = picture('data/' + (small ? 'shade-s.avif' : 'shade.avif')).catch(() => picture('data/shade.webp'))
    .catch(e => { console.warn('Etimo: the relief could not be loaded, the map is drawn without it', e); return null; }));

  const [meta, index] = await Promise.all([json(DATA + 'meta.json'), get('regional/index.json')]);
  const {cx, cy, c} = meta.unit;
  const R = prepare(meta.rules), underCensus = Object.keys(R.kinds).filter(k => R.kinds[k].underCensus);
  /* map units <-> the coordinates MapLibre is given (same formula as fake() in scripts/map-next/build.py) */
  const at = (x, y) => [(x - cx) * c * 360, Math.atan(Math.sinh(-2 * Math.PI * (y - cy) * c)) * 180 / Math.PI];
  const zoomOf = s => Math.log2(s / (512 * c));      // s = screen pixels per map unit

  if (id !== gen) throw Error('dropped');
  const box = document.createElement('div');
  box.className = 'kgl';
  host.prepend(box);
  made = {box, map: null};

  const S = {theme: 'light', sel: null, fam: null, conc: false, hover: null, dop: {}, n: 0};
  let ctx = null, H = {}, legend = null;

  /* ---------------------------------------------------------------- what is chosen -> how strong each area is
     Every language area, detailed area, family area and tinted country has its own state (feature state, keyed by its id
     in the tiles: promoteId below; the lists come from meta.json): o = how strong it is drawn, e = the chosen language's
     outline, h = the outline under the pointer, i = the first view's fade. The layers' rules only read it and never
     change, so a choice or a hover re-processes no tile. */
  const HIST = new Set(meta.hist);
  /* languages with no drawn area have a circle around their pin (scripts/map-next/build.py circles()): it shows only while that
     language is chosen; at rest the pin alone stands for it (a disc around every such pin read as a stain on the map) */
  const ROUND = new Set(meta.rounds || []);
  function targets() {
    const sel = S.sel, fam = S.fam, wide = exclusiveOf(R, sel, fam), out = [];
    /* the broad language areas, and the chosen one's outline (not while a view replaces it) */
    const plain = sel && !R.views.some(v => viewOn(v, sel, fam));
    for (const [zf, names] of Object.entries(meta.zones)) for (const n of names) out.push(['areas', n, {
      o: ROUND.has(n) ? (sel && n === sel.lang ? (S.conc ? .5 : OP.sel) : 0)
        : S.conc ? (sel && n === sel.lang ? .5 : ZONE * .3)
        : sel ? (n === sel.lang ? OP.sel : zf === sel.family ? OP.fam : OP.other)
        : fam ? (zf === fam ? ZONE * 1.1 : .12)
        : HIST.has(n) ? .11 : ZONE,
      e: plain && n === sel.lang ? 1 : 0}]);
    /* a family's speakers outside its home areas */
    for (const df of meta.dia) out.push(['areas', 'dia:' + df, {o: sel || S.conc ? .08 : fam ? (df === fam ? ZONE * .5 : .06) : ZONE * .5}]);
    /* a country tinted with its main language: only the chosen language's countries, none while an exclusive view is on */
    for (const [cn, lang, bfam] of meta.tint) out.push(['land', cn, {o: wide || (sel && lang !== sel.lang) ? 0 : fam && bfam !== fam ? .1 : BASE}]);
    /* The detailed layers: the strengths are the shared ones (kindOp in regional-layer.js) */
    const isSel = n => !!sel && (n === sel.lang || R.parent[n] === sel.lang);
    S.rule = (kind, n, dfam) => kindOp(R, kind, n, dfam, sel, fam);
    S.dop = {};
    for (const [kd, n, dfam] of meta.detail) {
      const key = kd + ':' + n, o = S.dop[key] = S.rule(kd, n, dfam);
      /* outlined: the chosen language's own detailed area */
      out.push(['areas', key, {o, e: sel && o >= .5 && (R.kinds[kd].view ? n === sel.lang : isSel(n)) ? 1 : 0}]);
    }
    return out;
  }
  /* A change of state fades from what shows now to the new value (one value per area and frame, the site's easing), so a
     second choice during a fade starts from where the first one is. Measured against the other way (a few numbers in the
     engine's global state read by the rules): the engine re-processes every tile whenever global state that a per-area
     rule reads changes, 14 times in one fade; this way none, under 1 ms of work a frame (scripts/map-next/README.md). */
  const tw = new Map(), run = new Set(), feats = new Map();
  let raf = 0, outlined = false, built = false;      // built: create() has run to its end (edges() below)
  function fade(list, ms) {         // list: [[source layer, id, {value: target, ...}], ...]
    const t0 = performance.now(), d = still() ? Math.min(ms, 100) : ms;
    for (const [sl, fid, to] of list) for (const k in to) {
      const src = k === 'e' || k === 'h' ? 'edges' : 'base', fk = src + '|' + sl + '|' + fid, b = to[k];      // the outlines' state on their own source
      let f = feats.get(fk), r = tw.get(fk + '|' + k);
      if (!f) feats.set(fk, f = {source: src, sourceLayer: sl, id: fid});
      if (!r) tw.set(fk + '|' + k, r = {f, k, v: k === 'h' ? 0 : b, b: null});     // a first value is set at once; the pointer's outline fades in from none
      if (r.b === b) continue;
      r.a = r.v; r.b = b; r.t0 = t0; r.ms = d;
      run.add(r);
    }
    if (run.size && !raf) raf = requestAnimationFrame(step);
  }
  function step() {
    raf = 0;
    if (id !== gen) return;
    const t = performance.now(), now = new Map();
    for (const r of run) {
      const p = r.ms > 0 ? Math.min(1, (t - r.t0) / r.ms) : 1, v = p < 1 ? r.a + (r.b - r.a) * ease(p) : r.b;
      if (v !== r.v || p === 1) { r.v = v; let s = now.get(r.f); if (!s) now.set(r.f, s = {}); s[r.k] = v; }
      if (p === 1) run.delete(r);
    }
    for (const [f, s] of now) if (f.source === 'base' || outlined) map.setFeatureState(f, s);
    if (run.size) raf = requestAnimationFrame(step);
  }
  const T0 = THEMES.light, kind = ['get', 'kind'], TILES = [new URL('map-next/tiles/', location.href).href + '{z}/{x}/{y}.pbf?v=' + meta.tiles.v];
  const reliefOp = P => ['interpolate', ['linear'], ['zoom'], 0, P.relief, 22, P.relief];
  const round = {'line-join': 'round', 'line-cap': 'round'};
  const map = new maplibregl.Map({
    container: box,
    center: at(...[(meta.home[0] + meta.home[2]) / 2, (meta.home[1] + meta.home[3]) / 2]),
    zoom: early ? (innerWidth >= 1024 ? 4.4 : 3.6) : 3,      // early: about the zoom of the page's first view, so its tiles are the ones loaded
    maxBounds: [at(cx - 2700, cy + 2000), at(cx + 2700, cy - 2100)],
    renderWorldCopies: false, attributionControl: false, fadeDuration: 0,
    /* Past the tiles' deepest zoom the engine enlarges the deepest tile as it is (its older, plain way). Its newer default
       (zoomLevelsToOverscale: 4) cuts new smaller tiles out of it in the worker, and those lose step with the per-area state
       (setFeatureState then throws "feature index out of bounds" on a deep view). */
    zoomLevelsToOverscale: undefined,
    dragRotate: false, pitchWithRotate: false, touchPitch: false, rollEnabled: false, maxPitch: 0,
    style: {
      version: 8,
      sources: {
        /* land, language areas and lines: vector tiles cut by scripts/map-next/build.py (tiles()), so the map loads only
           what it shows, at the detail of its zoom; past meta.tiles.maxzoom it enlarges those tiles (full detail kept).
           Sea has no tiles: MapLibre takes a missing tile (404) as empty. ?v= changes with every new build. */
        base:   {type: 'vector', tiles: TILES, minzoom: 0, maxzoom: meta.tiles.maxzoom, bounds: meta.tiles.bounds,
                 /* each area's and country's id, for its own state (targets() above): id is written by build.py */
                 promoteId: {areas: 'id', land: 'name'}},
        /* the census regions: tiles of their own, per country (census_tiles() in build.py), as two sources (fill, stripes); a
           country's tiles are fetched only while the census view draws in it (census() below adds its layers) */
        ...Object.fromEntries(Object.entries(meta.census.bounds).flatMap(([cc, bounds]) => ['census-', 'census-h-'].map(k => [k + cc, {type: 'vector', bounds, minzoom: 0, maxzoom: meta.census.maxzoom,
          tiles: [new URL('map-next/census-tiles/' + cc + '/', location.href).href + '{z}/{x}/{y}.pbf?v=' + meta.census.v]}]))),
        relief: {type: 'image', coordinates: meta.relief},     // no url: the decoded picture is handed over (style.load below)
        pins:   {type: 'geojson', data: {type: 'FeatureCollection', features: []}},
        pulse:  {type: 'geojson', data: {type: 'FeatureCollection', features: []}},
        names:  {type: 'geojson', data: {type: 'FeatureCollection', features: []}, maxzoom: 14},
        labs:   {type: 'geojson', data: {type: 'FeatureCollection', features: []}, maxzoom: 14},
      },
      /* Bottom to top. Every paint value that depends on the theme is set in look(); how strong an area is, is its own
         state (targets() above), read by the rules here (FS, IN). */
      layers: [
        {id: 'sea', type: 'background', paint: {'background-color': T0.sea}},
        {id: 'land', type: 'fill', source: 'base', 'source-layer': 'land', paint: {'fill-color': T0.land}},
        {id: 'base', type: 'fill', source: 'base', 'source-layer': 'land', filter: ['has', 'base'], paint: {'fill-color': ['get', 'base'], 'fill-opacity': ['*', FS('o', BASE), IN]}},
        {id: 'dia', type: 'fill', source: 'base', 'source-layer': 'areas', filter: ['==', kind, 'dia'], paint: {'fill-color': ['get', 'light'], 'fill-opacity': ['*', FS('o', ZONE * .5), IN]}},
        {id: 'areas', type: 'fill', source: 'base', 'source-layer': 'areas', filter: ['all', ['!', ['has', 'kind']], ['!', ['has', 'round']]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ['*', FS('o', ['case', ['has', 'hist'], .11, ZONE]), IN]}},
        /* languages without a drawn area: a circle around the pin. A layer of their own, so a circle lies over the area under it instead of replacing it */
        {id: 'rounds', type: 'fill', source: 'base', 'source-layer': 'areas', filter: ['has', 'round'], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ['*', FS('o', 0), IN]}},     // unseen until its language is chosen (targets())
        {id: 'detail-a', type: 'fill', source: 'base', 'source-layer': 'areas', filter: ['in', kind, ['literal', underCensus]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ['*', FS('o', 0), IN]}},
        /* here: the census view, a fill and a stripe layer per country it draws in (census() below) */
        {id: 'detail-b', type: 'fill', source: 'base', 'source-layer': 'areas', filter: ['in', kind, ['literal', Object.keys(R.kinds).filter(k => !underCensus.includes(k))]], paint: {'fill-color': ['get', 'color'], 'fill-opacity': ['*', FS('o', 0), IN]}},
        {id: 'areas-hist', type: 'line', source: 'base', 'source-layer': 'areas', filter: ['all', ['has', 'hist'], ['!', ['has', 'round']]], paint: {'line-color': ['get', 'color'], 'line-width': 1.2, 'line-opacity': ['*', .6, IN], 'line-dasharray': [2.5, 2.1]}},
        {id: 'relief', type: 'raster', source: 'relief', paint: {'raster-fade-duration': 0, 'raster-resampling': 'linear', 'raster-opacity': reliefOp(T0)}},
        /* One set of outlines: the coast is the edge of the land shapes; borders, region and district lines are cut to the same shapes. */
        {id: 'coast', type: 'line', source: 'base', 'source-layer': 'land', layout: round, paint: {'line-color': T0.coast, 'line-width': .9}},
        {id: 'district', type: 'line', source: 'base', 'source-layer': 'lines', filter: ['==', kind, 'district'], layout: round, paint: {'line-color': T0.inner, 'line-width': .6, 'line-opacity': 0}},
        {id: 'region', type: 'line', source: 'base', 'source-layer': 'lines', filter: ['==', kind, 'region'], layout: round, paint: {'line-color': T0.inner, 'line-width': .7, 'line-opacity': 0}},
        {id: 'border', type: 'line', source: 'base', 'source-layer': 'lines', filter: ['==', kind, 'border'], layout: round, paint: {'line-color': T0.border, 'line-opacity': .9, 'line-width': 1.2}},
        /* here, once the first view is drawn: the outline under the pointer and the chosen language's (edges() below) */
        /* names of the census regions (every country with a census table), drawn here in the site's font (Manrope, no font server:
           without a glyphs address MapLibre draws the letters itself). Shown from the zoom where a region is 34 px wide (text-field in scale());
           the larger region wins where two collide. Same size on phone and desktop (10.5 px); phones show fewer (NAME_PX, NAME_PAD). */
        {id: 'names', type: 'symbol', source: 'names', layout: {'text-field': '', 'text-font': ['Manrope'], 'text-size': 10.5, 'text-max-width': 8, 'text-padding': NAME_PAD, 'symbol-sort-key': ['get', 'r']}, paint: {'text-color': T0.inner, 'text-halo-color': T0.land, 'text-halo-width': 1.6, 'text-opacity': PHONE ? .7 : .86}},
        /* the outlines the page draws (the chosen language's home regions, the place with keyboard focus): under the pins and names, as on the page */
        {id: 'lab-line', type: 'line', source: 'labs', filter: ['==', ['get', 'k'], 'l'], layout: round, paint: {'line-color': ['get', 'c'], 'line-width': ['get', 'lw'], 'line-opacity': LAB_O}},
        {id: 'pin-shadow', type: 'circle', source: 'pins', paint: {'circle-radius': SHADOW_R, 'circle-color': '#0a1220', 'circle-blur': .85, 'circle-opacity': SHADOW_O, 'circle-translate': [0, 1.6]}},
        {id: 'pin-disc', type: 'circle', source: 'pins', paint: {'circle-radius': PIN_R, 'circle-color': T0.pin, 'circle-opacity': PIN_O, 'circle-stroke-width': PIN_W, 'circle-stroke-color': ['case', PIN_BIG, T0.pinSel, T0.pinEdge], 'circle-stroke-opacity': PIN_O}},
        {id: 'pin-core', type: 'circle', source: 'pins', paint: {'circle-radius': CORE_R, 'circle-color': ['get', 'color'], 'circle-opacity': PIN_O}},
        {id: 'pin-pulse', type: 'circle', source: 'pulse', paint: {'circle-radius': ['+', 7 * PF, ['*', 22 * PF, PULSE_T]], 'circle-opacity': 0, 'circle-stroke-color': ['get', 'color'], 'circle-stroke-width': 2, 'circle-stroke-opacity': ['*', .6, ['-', 1, PULSE_T]]}},
        /* What the page writes on the map (language, family, district and city names, city dots, the word view's circles), drawn
           here so that nothing of the page is redrawn while the map moves. The page lays them out when the map comes to rest and
           hands each one over as it stands, in screen pixels and in the look its style sheet gives it (labels() below): a name keeps
           its size on screen and its distance from its point while the map zooms, as in the leading map products. */
        {id: 'lab-dot', type: 'circle', source: 'labs', filter: ['==', ['get', 'k'], 'c'], paint: {'circle-radius': ['get', 'r'], 'circle-color': ['get', 'c'], 'circle-stroke-color': ['get', 'h'], 'circle-stroke-width': ['get', 'hw'], 'circle-opacity': LAB_O, 'circle-stroke-opacity': LAB_O}},
        {id: 'lab-text', type: 'symbol', source: 'labs', filter: ['==', ['get', 'k'], 't'], layout: {'text-field': ['get', 't'], 'text-font': LAB_FONT, 'text-size': ['get', 's'], 'text-letter-spacing': ['get', 'ls'], 'text-offset': ['get', 'off'], 'text-anchor': 'center', 'text-max-width': 400, 'text-padding': 0, 'text-allow-overlap': true, 'text-ignore-placement': true, 'symbol-sort-key': ['get', 'i']}, paint: {'text-color': ['get', 'c'], 'text-halo-color': ['get', 'h'], 'text-halo-width': ['get', 'hw'], 'text-opacity': LAB_O}},
      ],
    },
  });
  made.map = map;
  /* MapLibre counts the map as loaded only once the relief source has a picture. It gets an empty one at once, so the
     map never waits for the relief, and the real one once it is decoded (fetched after the first tile, see relief above). */
  const putRelief = img => { if (id === gen && map.getSource('relief')) map.getSource('relief').updateImage({image: img}); };
  /* every area's first state, before any tile is drawn: as with nothing chosen, and unseen until the first view fades them in (drawn below) */
  map.once('style.load', () => { putRelief(new ImageData(1, 1)); fade(targets().map(([sl, fid, to]) => [sl, fid, {...to, i: 0}]), 0); });
  window.__kgl = map;      // for looking at the map from the browser console
  map.touchZoomRotate.disableRotation();
  map.keyboard.disableRotation();
  map.once('idle', () => box.classList.add('on'));
  /* the first picture with the map's shapes in it: the first quiet moment after a tile of land and areas has come.
     The page waits for this before it loads what the map does not need yet (lexicon, region shapes). The language areas
     fade in then, once (300 ms): the map is made once and kept, so a page that shows it again does not fade them again. */
  let tiled = false;
  const drawn = () => { if (tiled && !(box.parentNode && box.parentNode.hasAttribute('data-kpre'))) { map.off('idle', drawn); fade(targets().map(([sl, fid]) => [sl, fid, {i: 1}]), 300); mapReady(); map.once('idle', edges); } };   // drawn in the page, not in the early hidden box
  map.on('data', function first(e) { if (e.sourceId === 'base' && e.tile) { tiled = true; map.off('data', first); relief().then(img => img && putRelief(img)); } });
  map.on('idle', drawn);
  let nameFeats = [];
  /* the census region names (census-names.json), once the map has drawn and the site's font is ready, so the letters are drawn in it */
  map.once('idle', () => {
    Promise.all([json(DATA + 'census-names.json'), document.fonts ? document.fonts.load('10.5px Manrope').catch(() => null) : null]).then(([d]) => {
      if (id !== gen) return;
      const features = [];
      for (const rows of Object.values(d)) for (const [name, x, y, w, h] of rows)
        features.push({type: 'Feature', id: features.length, properties: {name, z: Math.ceil(Math.log2(NAME_PX / (Math.max(w, .01) * 512 * c))), r: -w * h}, geometry: {type: 'Point', coordinates: at(x, y)}});
      nameFeats = features;
      map.getSource('names').setData({type: 'FeatureCollection', features});
    }).catch(e => console.warn('Etimo: the census names could not be loaded', e));
  });
  /* A map data file that did not arrive leaves a map with holes, and MapLibre still reports the map as loaded: the page is told, and shows its note instead of the map. */
  let broken = null;
  map.on('error', e => { if (broken || e.sourceId !== 'base') return; broken = e.error || e; if (H.fail) H.fail(broken); });
  await new Promise((ok, no) => { map.once('load', ok); map.once('error', e => no(e.error || e)); });
  if (broken) throw broken;

  /* ---------------------------------------------------------------- what the page is told and asks */
  const fire = (n, e) => { try { H && H[n] && H[n](e); } catch (err) { console.warn(err); } };
  map.on('movestart', () => fire('start'));
  map.on('move', () => fire('move'));
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
    /* a name from the first whole zoom level, 4 times in or more, where its region is 34 px wide (z, set when the names load) */
    const steps = ['step', z, ''];
    S.z0 = Math.ceil(k(4));
    for (let Z = S.z0; Z <= Math.ceil(map.getMaxZoom()); Z++) steps.push(Z, ['case', ['<=', ['get', 'z'], Z], ['get', 'name'], '']);
    map.setLayoutProperty('names', 'text-field', steps.length > 3 ? steps : '');
    look();
  }

  /* ---------------------------------------------------------------- colours */
  let colourOf = {};
  const colour = n => colourOf[n];
  /* a language's colour as the page shows it in this theme (pin, wheel, card); the built-in table is the fallback */
  function colours() {
    if (!ctx) return;
    colourOf = {};
    const add = (n, col) => { if (col && !colourOf[n]) colourOf[n] = col; };
    for (const l of ctx.languages) add(l.lang, ctx.color(l));
    for (const [, n] of meta.detail) add(n, window.__albColor && window.__albColor({data: {L: {lang: n}}}));
  }
  /* the pins: one point per language, where the page puts it, in the colour the page gives it in this theme */
  function pins() {
    if (!ctx) return;
    const o = ctx.px([0, 0]), m = ctx.px([1, 0])[0] - o[0];      // the page keeps a pin's place in its own pixels (_xy); back to map units
    const features = ctx.languages.map((l, i) => l._xy && {type: 'Feature', id: i, properties: {color: ctx.color(l)}, geometry: {type: 'Point', coordinates: at((l._xy[0] - o[0]) / m, (l._xy[1] - o[1]) / m)}}).filter(Boolean);
    map.getSource('pins').setData({type: 'FeatureCollection', features});
    S.pinAt = new Map(features.map(f => [f.id, f]));
  }
  const byName = key => { const pairs = Object.entries(colourOf).flat(); return pairs.length ? ['to-color', ['match', ['get', key], ...pairs, ['get', key === 'lang' ? 'base' : 'color']]] : ['get', key === 'lang' ? 'base' : 'color']; };
  /* Light and dark, and the zoom-dependent relief: only colours change, nothing is reloaded. */
  function look() {
    const P = themeOf(S.theme), col = byName('name');
    /* minority areas: the language's colour mixed with the land colour (46% / 74%, as on the site) */
    const mix = s => ['interpolate', ['linear'], s, 0, P.land, 1, col];
    map.setPaintProperty('sea', 'background-color', P.sea);
    map.setPaintProperty('land', 'fill-color', P.land);
    map.setPaintProperty('base', 'fill-color', byName('lang'));
    map.setPaintProperty('dia', 'fill-color', ['get', S.theme]);
    for (const id of ['areas', 'rounds']) map.setPaintProperty(id, 'fill-color', ['match', ['get', 'tint'], 'min', mix(.46), 'plu', mix(.74), col]);
    for (const id of ['detail-a', 'detail-b']) map.setPaintProperty(id, 'fill-color', col);
    for (const id of ['areas-hist', 'hover-edge', 'sel-edge']) if (map.getLayer(id)) map.setPaintProperty(id, 'line-color', col);
    map.setPaintProperty('pin-disc', 'circle-color', P.pin);
    /* the pins' soft shadow is near-black: on the dark map it read as a dark disc around every pin, so only the light theme has it */
    map.setPaintProperty('pin-shadow', 'circle-opacity', S.theme === 'dark' ? 0 : SHADOW_O);
    map.setPaintProperty('pin-disc', 'circle-stroke-color', ['case', PIN_BIG, P.pinSel, P.pinEdge]);
    map.setPaintProperty('coast', 'line-color', P.coast);
    map.setPaintProperty('border', 'line-color', P.border);
    map.setPaintProperty('region', 'line-color', P.inner);
    map.setPaintProperty('district', 'line-color', P.inner);
    map.setPaintProperty('names', 'text-color', P.inner);
    map.setPaintProperty('names', 'text-halo-color', P.land);
    /* relief: full strength on the wide view, a little lighter from 6 times in, gone from 11 times in (as on the site) */
    map.setPaintProperty('relief', 'raster-opacity', ['interpolate', ['linear'], ['zoom'], k(5), P.relief, k(6.5), P.relief * .84, k(9.5), P.relief * .84, k(11.5), 0]);
  }

  /* The two outlines (the one under the pointer, the chosen language's), added once the first view has faded in: the same
     tiles (from the browser's cache) as a source of their own. Their own source because the engine rewrites every layer of
     an area whenever any of its state changes: on the areas' source a fade rewrote every outline on every frame (3 to 5 ms
     a frame on a phone slowed 4 times); and only now because building them cost the first view about 90 ms there
     (measured). A choice made before is outlined as soon as they are in. The first quiet moment after the first view can
     come before create() has run to its end (measured on the way in from another screen): then it waits for the next one. */
  function edges() {
    if (outlined || id !== gen) return;
    if (!built) { map.once('idle', edges); map.triggerRepaint(); return; }
    map.addSource('edges', {type: 'vector', tiles: TILES, minzoom: 0, maxzoom: meta.tiles.maxzoom, bounds: meta.tiles.bounds, promoteId: {areas: 'id'}});
    const col = byName('name'), line = (lid, w, op) => map.addLayer({id: lid, type: 'line', source: 'edges', 'source-layer': 'areas', filter: EDGE, layout: {'line-join': 'round'}, paint: {'line-color': col, 'line-width': w, 'line-opacity': op}}, 'names');
    line('hover-edge', 2, ['*', .9, FS('h', 0)]);
    line('sel-edge', 2.2, FS('e', 0));
    outlined = true;
    for (const r of tw.values()) if (r.f.source === 'edges' && r.v) map.setFeatureState(r.f, {[r.k]: r.v});
  }

  /* ---------------------------------------------------------------- a choice: every area fades to its new strength (200 ms) */
  function paint() {
    fade(targets(), 200);
    showLegend();
    /* the census view once the fade's first frame is drawn, so its work (each region's new state) does not hold that frame back */
    map.once('render', () => setTimeout(() => id === gen && census()));
    map.triggerRepaint();
  }

  /* ---------------------------------------------------------------- census view (per municipality or region)
     The regions are tiles of their own, one set per country (map-next/census-tiles/<CC>, cut once by scripts/map-next/build.py:
     census_tiles()); each region's id is its place in the census rows (i). A choice gives every region it draws its colour (c),
     strength (o) and stripes (h) as that region's own state, and takes the state off the others: numbers only, no shape is sent
     again and no tile is cut again. A country's layers are on the map only while a choice draws a region there, so its tiles
     are fetched and read only then (cenShow()). */
  const rowsOf = new Map(), ready = new Map();
  let top = null, topP = null, ids = {};
  /* the width of a census name in the font and size it is drawn in (10.5 px Manrope; text-max-width 8 em = 84 px a line) */
  const measure = document.createElement('canvas').getContext('2d'), widths = new Map();
  const textWidth = n => { let w = widths.get(n); if (w == null) { measure.font = '10.5px Manrope, sans-serif'; w = measure.measureText(n).width; widths.set(n, w); } return w; };
  /* the largest language of every census region (census-top.json, scripts/map-next/build.py), and the region ids of a country
     whose own table lists every answer by region (Montenegro: regional/ME.json) */
  const topFor = () => topP || (topP = json(DATA + 'census-top.json').then(d => {
    const T = {};
    for (const [cc, rows] of Object.entries(d)) if (cc !== 'langs' && cc !== 'ids') T[cc] = new Map(rows.map(([i, li, p]) => [i, [d.langs[li], p]]));
    ids = d.ids || {};
    top = T;
  }).catch(e => { topP = null; throw e; }));
  /* one language: its census rows, by region id */
  function rowsFor(key) {
    const info = index.languages[key];
    if (!info) return null;
    if (!rowsOf.has(key)) {
      rowsOf.set(key, get('regional/lang/' + info.file + '.json').then(data => {
        const rows = [];
        for (const cc of info.countries) if (meta.census.bounds[cc]) for (const [i, , , pct] of data.rows[cc] || []) rows.push({cc, i, pct});
        ready.set(key, rows);
      }).catch(e => { rowsOf.delete(key); throw e; }));
    }
    return rowsOf.get(key);
  }
  /* a country whose own table lists every answer by region (census-top.json "ids": Montenegro, regional/ME.json): loaded like the
     language rows, once a language is chosen; every one of its regions is drawn */
  const tables = new Map(), tabOf = new Map();
  const tableFor = cc => { if (!tabOf.has(cc)) tabOf.set(cc, get('regional/' + cc + '.json').then(t => { tables.set(cc, t); }).catch(e => { tabOf.delete(cc); throw e; })); return tabOf.get(cc); };
  /* stripes in the chosen language's colour: where it is a minority, over the colour of the majority. One picture per colour,
     made once (a picture redrawn in place would keep its old colour along its edges in the engine's picture sheet: seams) */
  const hatches = new Set();
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
  /* each country's regions as they are drawn now: fill (source census-<CC>: c colour, o strength) and stripes (census-h-<CC>, the
     same tiles as a source of their own: h strength), region i -> state */
  const cen = new Map(), hat = new Map();
  function setStates(store, want, src) {
    for (const [cc, had] of store) { const w = want.get(cc); for (const i of had.keys()) if (!w || !w.has(i)) { map.removeFeatureState({source: src + cc, sourceLayer: 'census', id: i}); had.delete(i); } }
    for (const [cc, w] of want) {
      let had = store.get(cc);
      if (!had) store.set(cc, had = new Map());
      for (const [i, s] of w) {
        const was = had.get(i);
        if (was && Object.keys(s).every(k => was[k] === s[k])) continue;
        map.setFeatureState({source: src + cc, sourceLayer: 'census', id: i}, s);
        had.set(i, s);
      }
    }
  }
  /* The countries whose census layers are on the map, in the order they came: every fill under every stripe layer, all of them
     between the detailed areas (detail-a, detail-b), as the one census layer pair was. A fill layer is there while a choice draws
     a region in its country, a stripe layer while it draws stripes there; taking a layer off costs nothing. The stripes are on
     a source of their own, so a new colour (a new picture for the stripe layers, which makes the engine read their tiles again)
     leaves the fills as they are. */
  const fills = [], stripes = [];
  function cenShow(fillCC, stripeCC, pat) {
    for (const cc of stripes.slice()) if (!stripeCC.has(cc)) { map.removeLayer('census-hatch-' + cc); stripes.splice(stripes.indexOf(cc), 1); }
    for (const cc of fills.slice()) if (!fillCC.has(cc)) { map.removeLayer('census-' + cc); fills.splice(fills.indexOf(cc), 1); }
    for (const cc of fillCC) if (!fills.includes(cc)) {
      map.addLayer({id: 'census-' + cc, type: 'fill', source: 'census-' + cc, 'source-layer': 'census', paint: {'fill-color': ['to-color', FS('c', '#8a93a3')], 'fill-opacity': FS('o', 0)}}, stripes.length ? 'census-hatch-' + stripes[0] : 'detail-b');
      fills.push(cc);
    }
    for (const cc of stripes) map.setPaintProperty('census-hatch-' + cc, 'fill-pattern', pat);      // nothing happens when it is the same
    for (const cc of stripeCC) if (!stripes.includes(cc)) {
      map.addLayer({id: 'census-hatch-' + cc, type: 'fill', source: 'census-h-' + cc, 'source-layer': 'census', paint: {'fill-pattern': pat, 'fill-opacity': FS('h', 0)}}, 'detail-b');
      stripes.push(cc);
    }
  }
  function census() {
    const sel = S.sel, n = ++S.n;
    const again = p => p && p.then(() => { if (n === S.n) census(); }, () => {});
    if (!sel) { cenShow(new Set(), new Set()); return; }
    /* a detail view can show another language's figures (the Albanian dialects: Albanian's) and leave countries out */
    const v = viewOf(R, sel, S.fam), key = v && v.census || sel.lang, skip = new Set(v && v.noCensus || []);
    const eff = v && v.census ? ctx.languages.find(l => l.lang === v.census) || sel : sel;
    const want = new Map(), wantH = new Map(), put = (m, cc, i, s) => { let w = m.get(cc); if (!w) m.set(cc, w = new Map()); w.set(i, s); };
    const row = (cc, i, col, o, h) => { put(want, cc, i, {c: col || '#8a93a3', o}); if (h) put(wantH, cc, i, {h}); };
    if (!ready.has(key)) again(rowsFor(key));
    if (!top) again(topFor());
    /* Every country, one rule: where the chosen language has 2% or more but another language is the largest, the region takes
       that language's colour and the chosen one shows as stripes. t = [largest language, its share], from the same census question.
       Only when the largest language is on the map (it has a colour): German in Liechtenstein and Romani in some Slovak and
       North Macedonian municipalities are not, and there the region shows the chosen language's share as everywhere else. */
    const paintRow = (cc, i, pct, t) => {
      const big = t && t[0] !== eff.lang ? ctx.languages.find(l => l.lang === t[0]) : null;
      const over = !!(pct != null && pct >= 2 && big);
      const lang = over ? big : eff;
      row(cc, i, ctx.color(lang), censusOp(pct, over, t ? t[1] : 0, lang.family, exclusiveOf(R, sel, S.fam) && v.family, S.fam), over ? hatchOp(pct) : 0);
    };
    for (const r of ready.get(key) || []) if (!skip.has(r.cc) && !ids[r.cc]) paintRow(r.cc, r.i, r.pct, top && top[r.cc] && top[r.cc].get(r.i) || null);
    /* a country with a table of every answer (Montenegro): every region is drawn, a language without a figure there faintly */
    for (const [cc, rids] of Object.entries(ids)) {
      const tab = tables.get(cc);
      if (!tab) { again(tableFor(cc)); continue; }
      rids.forEach((rid, i) => {
        if (rid == null) return;
        const own = (tab[rid] || []).find(o => o.percentage != null && o.language_id === eff.lang);
        paintRow(cc, i, own ? own.percentage : null, top[cc] && top[cc].get(i) || null);
      });
    }
    /* only what changed: regions no longer drawn lose their state, the others get theirs */
    setStates(cen, want, 'census-');
    setStates(hat, wantH, 'census-h-');
    cenShow(new Set(want.keys()), new Set(wantH.keys()), wantH.size ? hatch(ctx.color(eff) || '#9e2b2b') : null);
  }

  /* ---------------------------------------------------------------- legend of a detail view (VIEWS in regional-layer.js) */
  function showLegend() {
    const v = viewOf(R, S.sel, S.fam), host = box.parentNode;
    if (!host) return;
    legend = host.querySelector('.view-legend');
    if (!v) { if (legend) legend.hidden = true; return; }
    /* phones (below the site's 64rem): the key starts folded to its title under the search field, clear of the language card at the
       bottom and the zoom buttons at the side; a tap on the title opens or folds it. Desktop: always open, as before. */
    if (!legend) {
      legend = document.createElement('div'); legend.className = 'view-legend';
      if (PHONE) legend.classList.add('shut');
      legend.addEventListener('click', e => { if (e.target.closest('.vl-t')) { legend.classList.toggle('shut'); legend.querySelector('.vl-t').setAttribute('aria-expanded', !legend.classList.contains('shut')); } });
      host.appendChild(legend);
    }
    const dn = n => window.__dn ? window.__dn(n) : n, lt = key => window.__lt ? window.__lt(key) : key;
    /* short: only the part in brackets ("Name (northern)" -> "Northern") */
    const name = (n, p) => p.short ? dn(n).replace(/^[^(]*\((.*)\)/, (m, a) => a[0].toUpperCase() + a.slice(1)) : dn(n);
    const item = (n, p) => '<li style="opacity:' + (S.rule(p.kind, n) > .4 ? 1 : .38) + '"><i style="background:' + (colour(n) || '#888') + '"></i>' + name(n, p) + '</li>';
    legend.setAttribute('aria-label', lt(v.title));
    legend.innerHTML = (PHONE ? '<button type="button" class="vl-t" aria-expanded="' + !legend.classList.contains('shut') + '"><b>' + lt(v.title) + '</b></button>' : '<b>' + lt(v.title) + '</b>') + v.groups.flatMap(g => (g.parts || []).map(p => ({...p, kind: g.kind || v.kind}))).map(p => '<div><span>' + lt(p.label) + '</span><ul>' + p.names.map(n => item(n, p)).join('') + '</ul></div>').join('') +
      '<small>' + lt(v.credit[0]) + v.credit[1] + '</small>';
    legend.hidden = false;
  }

  /* ---------------------------------------------------------------- the handle the page works with */
  built = true;
  return map.etimo = {      // map.etimo: for the browser console and the checks, as window.__kgl
    map, box,
    hidePin: R.hidePin,
    /* (re)attach to the page's map box */
    use(host, c) {
      ctx = c; H = {};
      if (box.parentNode !== host) { const was = box.parentNode; host.prepend(box); if (was && was.hasAttribute('data-kpre')) was.remove(); }
      map.resize();
      colours();
      pins();
    },
    /* the page's two drawings go inside the map, so a gesture that starts on a pin still moves the map */
    overlay(...svgs) { map.getCanvasContainer().append(...svgs); },
    on(h) { H = h || {}; if (broken && H.fail) setTimeout(() => H.fail && H.fail(broken)); },
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
      if (theme) { colours(); pins(); look(); }
      paint();
    },
    /* how visible (o) and how large (s) each pin is: [[number of the language in the page's list, o, s], ...] */
    pinStates(list) { for (const [id, o, s] of list) map.setFeatureState({source: 'pins', id}, {o, s}); },
    /* one ring goes out from a pin (its number in the page's list) and fades, once, in 600 ms; the pin has its own one-point source */
    pulse(i) {
      const f = S.pinAt && S.pinAt.get(i);
      if (!f) return;
      map.getSource('pulse').setData({type: 'FeatureCollection', features: [{...f, id: 0}]});
      cancelAnimationFrame(S.pulseRaf);
      const t0 = performance.now(), step = now => {
        if (made?.map !== map) return;
        const t = Math.min(1, (now - t0) / 600);
        map.setFeatureState({source: 'pulse', id: 0}, {t: 1 - (1 - t) ** 3});
        if (t < 1) S.pulseRaf = requestAnimationFrame(step);
      };
      step(t0);
    },
    /* What the page has written at this view (its language and family names, city names and pins, as boxes in pixels of the box,
       and the city names), called when the map is at rest: a census name that would lie on one of those boxes, or that repeats
       a city name written nearby, is left out until the next rest. The boxes of the names are measured in the font they are drawn in. */
    avoid({boxes, cities}) {
      const zz = Math.floor(map.getZoom()), W = box.clientWidth, Hh = box.clientHeight, city = new Set(cities), hide = [];
      if (zz >= (S.z0 || 99)) for (const f of nameFeats) {
        const nm = f.properties.name;
        if (f.properties.z > zz) continue;                                   // not written at this zoom anyway
        const p = map.project(f.geometry.coordinates);
        if (p.x < -90 || p.y < -40 || p.x > W + 90 || p.y > Hh + 40) continue;
        if (city.has(nm)) { hide.push(f.id); continue; }
        const tw = textWidth(nm), lines = Math.max(1, Math.ceil(tw / 84)), bw = Math.min(tw, 84) / 2 + NAME_PAD, bh = lines * 6.6 + NAME_PAD;
        for (const b of boxes) if (p.x + bw > b[0] && p.x - bw < b[2] && p.y + bh > b[1] && p.y - bh < b[3]) { hide.push(f.id); break; }
      }
      const key = hide.join(',');
      if (key !== S.hide) { S.hide = key; map.setFilter('names', hide.length ? ['!', ['in', ['id'], ['literal', hide]]] : null); }
    },
    /* The page's names, dots and outlines as they stand at rest (layers lab-*): [{k: 't', 'c' or 'l', x, y: the point they belong to,
       in pixels of the window; text: t, s size, w weight, ls letter spacing (em), off offset from the point (em); dot: r radius;
       outline: pts its lines, lw width; c colour, h halo or edge colour, hw its width, o how visible}]. Replaces what was there. */
    labels(list) {
      const R = map.getCanvas().getBoundingClientRect(), NO = [0, 0];
      const ll = (x, y) => { const p = map.unproject([x - R.left, y - R.top]); return [p.lng, p.lat]; };
      const features = list.map((p, i) => {
        const {x, y, off, pts, ...props} = p;
        /* an outline: pts = its lines, each a flat list of x, y in pixels of the window */
        const geometry = pts ? {type: 'MultiLineString', coordinates: pts.map(a => { const c = []; for (let j = 0; j < a.length; j += 2) c.push(ll(a[j], a[j + 1])); return c; })}
          : {type: 'Point', coordinates: ll(x, y)};
        return {type: 'Feature', id: i, properties: {...props, i, off: off || NO}, geometry};
      });
      /* Each name's offset travels with it, as a pair in its properties (layer lab-text reads it). It used to be set on the
         layer on every call; that made the engine redo these tiles twice per call (once for the layer, once for the data), and
         when both landed during a tile's first load the engine paired the new shapes with the old tile contents: the next fade
         then threw "feature index out of bounds". One request per call now. */
      map.removeFeatureState({source: 'labs'});
      map.getSource('labs').setData({type: 'FeatureCollection', features});
    },
    /* a fade in progress: [[number in the last list, how visible], ...] */
    labelStates(list) { for (const [id, o] of list) map.setFeatureState({source: 'labs', id}, {o}); },
    /* the area under the pointer on the first view is outlined: the outline fades in and out (120 ms) */
    hover(n) { if (n !== S.hover) { const was = S.hover; S.hover = n; fade([was && ['areas', was, {h: 0}], n && ['areas', n, {h: 1}]].filter(Boolean), 120); } },
    /* what lies at a point of the box: a detailed area that selects a language, a broad area, or nothing of ours */
    hit(pt) {
      for (const ft of map.queryRenderedFeatures([pt.x, pt.y], {layers: ['detail-b', ...fills.map(cc => 'census-' + cc), 'detail-a', 'rounds', 'areas']})) {
        const p = ft.properties, id = ft.layer.id;
        if (id.startsWith('census-')) { const had = cen.get(id.slice(7)); if (had && had.has(ft.id)) return {t: 'census'}; continue; }      // the tiles hold every region: only a drawn one counts
        if (id === 'areas' || id === 'rounds') return {t: 'zone', name: p.name};
        if (!R.kinds[p.kind].censusReplaces && (S.dop[p.key] || 0) > 0) {
          const as = R.shownAs[p.name];
          return {t: 'lang', name: as && !R.views.some(v => v.umbrella === as && viewOn(v, S.sel, S.fam)) ? as : p.name};
        }
      }
      return null;
    },
    off() { H = {}; if (legend) legend.hidden = true; },
  };
}
