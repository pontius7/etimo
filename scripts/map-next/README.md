# Etimo map on MapLibre

The map of the site is drawn by MapLibre GL (open-source map engine, BSD licence, version 6.18.0, copied into
`site/map-next/vendor/`). It draws the heavy part on the graphics card and owns zoom, pan and pinch.

| Part | Where |
|---|---|
| The engine's side: layers, colours of sea / land / lines, how strong each area is when a language or family is chosen, census view, legend | `site/map-gl.js` |
| The page's side: what pins and names show and where (the engine draws them, see below), search, language card, and the link to the engine (`kV`, `kGo`, `kTick`, `gStart` ...) | `src/app/6-app-screens-and-startup.js` (search for `GL`) |
| Lists and strengths the engine and the data build share (Albanian dialects, Vlach varieties, which pins and areas the detailed layers replace; how strong a detailed area or a census region is drawn: `restOp`, `dialOp`, `vlachOp`, `censusOp`, `hatchOp`) | top of `site/regional-layer.js` (the only copy) |
| The map data | `scripts/map-next/build.py` writes `site/map-next/data/` |
| The few style rules the engine's box needs | `src/styles/v64.css` |

- Rebuild after any content or colour change: `python3 scripts/build-page.py && .venv/bin/python scripts/map-next/build.py`
  (needs tippecanoe for the tiles: `brew install tippecanoe`)
  (about 45 seconds; the census regions are only cut again when their source changed. Delete
  `site/map-next/data/regions/` to cut them all again).
- What feeds the data: the same files as the site. The list is at the top of `build.py`.
- How precise the outlines are, and what counts as a drawing error at a border: the constants at the top of `build.py`.

## Tiles and loading order (speed on phones, 2026-11-13)
- **Tiles.** Land, language areas and lines reach the engine as vector tiles, the way web maps ship their shapes:
  `build.py` (`tiles()`) cuts `land.json`, `areas.json` and `lines.json` with tippecanoe into
  `site/map-next/tiles/{z}/{x}/{y}.pbf` (zoom 0 to 8, about 2,450 files, 3 seconds). Closer in than zoom 8 the engine
  enlarges those tiles; they keep the data's full precision (`-d14`). Nothing is dropped or merged, and neighbouring areas
  are simplified alike, so no gap opens between two colours. Sea has no tiles (MapLibre takes a missing tile as empty).
  The three JSON files stay: they are the tiles' source and the checks read them. One engine source, `base`, with the
  layers `land`, `areas`, `lines` (`'source-layer'` in `map-gl.js`); a check that reads features asks for
  `querySourceFeatures('base', {sourceLayer: 'areas'})`. The tile address carries `?v=` (a hash of the three files, in
  `meta.json`), so tiles are cached for a year (`site/_headers`); MapLibre too (`?v=6.18.0` on its import: a new MapLibre
  needs a new `?v=` there). Cloudflare serves whole files only (no byte ranges), so a one-file tile archive (PMTiles) would
  need extra storage; the folder of tiles needs none. Measured on a phone-sized Chrome, processor slowed 4 times, 4G:
  the first view loads 4 tiles (230 KB) instead of 3.1 MB of shapes.
- **What loads first.** `scripts/build-page.py` (`preloads()`) writes a few lines at the top of the page: on a map screen the
  engine, its settings and the relief are fetched from the first moment and the lexicon (8 MB of words) only after the map has
  drawn ("etimo:mapready", sent by `map-gl.js` at the first quiet moment after a tile came; `kLexWhen` / `kAfterMap` in the
  page code); the region shapes (`today.json`) and districts also wait for it. Other screens fetch the lexicon at once and
  the engine quietly 1.5 s after the lexicon is in. The lexicon's lists are built in slices of 8 ms (`kLexBuild`).
- **Map started early (2026-11-13).** On a map screen the page's first lines also start the engine (`prewarm()` in
  `site/map-gl.js`) in a hidden box the size of the screen, and fetch its worker and, on phones, the first view's four tiles
  (`first_tiles()` in `scripts/build-page.py`), all while the page's own code still downloads; `attach()` then moves the ready
  map into the page, which lays out its names a frame later. "etimo:mapready" waits until the map is drawn in the page.
  Fast phone profile over 4G: map on screen 1.7 s (full speed), 1.95 s (processor 2 times slower).
- **Home page starter.** The home page shows its words from a small file (`home_starters()` in `scripts/build-page.py`, about
  70 KB, one of three at random) and keeps them when the full lexicon arrives (`kLexStart`, `kHN` in the page code); other
  screens wait for the full lexicon as before. Mid-range phone over 4G: words on screen 3.6 s -> 1.7 s.
- **Area outlines later (2026-11-13).** The page starts with a small copy of `terr.json` (each language area's box, size and
  whether it has an outline, 7.6 KB instead of 940 KB); the outlines come in `h/terr-d.<hash>.json` with the region shapes,
  once the map has drawn (`terr_split()` in `scripts/build-page.py`, `kTerrD()` in the page code). Everything that reads an
  outline (place card, a language's home places and cities) waits for the region shapes; the cities of a language chosen
  before then are laid out again when they come (`lt(nt)`).
- **Page code, fonts (2026-11-13).** The page's code is its own cached file and the fonts are the site's own (main README,
  "Speed"); the unseen copies of the map's names use Manrope with the system font, as the engine does, so a rare letter does
  not pull in a 160 KB fallback font before the first view.
- **A tap on the map** finds its region with a flat test on the shapes' points (`kHitIn`, `kHitBox`), not d3's test on the sphere.
- **Style rules and the map.** The map holds about 6,000 page elements (the unseen copies of names and dots, the keyboard
  list). A `:has()` rule on an element that contains them (`body`, `#root`, `.wrap`, `.mapbox`) whose styled element lies
  inside it makes the browser restyle all of them after any change on the page: write such a rule on a small neighbour
  instead (`.mapbox>.card:not([hidden])~.mcred`, `.mapbox>.zoom:has(~.card…)`), or with a class the page sets. The same
  goes for a CSS variable set on `.mapbox`: `--ch` and `--wch` are registered as not inherited (`@property` in `v64.css`).
  While the map moves, the page leaves its unseen copies alone (`kTick`), and it puts its language names back in order
  only when the order has changed (`kOrd`).
- Result (same conditions): map on screen 8.6 s -> 2.6 s, main thread blocked during loading 3.0 s -> 1.1 s, tap on a region
  1.2 s -> 0.37 s, longest stall at the end of a pinch 230 ms -> 70 ms. Measured with headless Chrome only, not on a real iPhone.

## How a choice is drawn (2026-11-14)
- **Each area has its own state.** Every language area, detailed area, family area and tinted country carries its own
  values in the engine (MapLibre's feature state), keyed by its id in the tiles: `id`, written by `build.py` (the language
  for a broad area, `kind:language` for a detailed one, `dia:family` for a family's area outside its home areas; a country
  by its name), read through `promoteId` in `site/map-gl.js`. `meta.json` lists them (`zones` by family, `hist`, `dia`,
  `tint`, `detail`). Values: `o` how strong the area is drawn, `e` the chosen language's outline, `h` the outline under the
  pointer, `i` the first view's fade. The layers' rules only read them and never change, so a choice or a hover
  re-processes no tile (before: every visible tile, 4 of 4, and 170 to 200 ms until the new look showed). A new map area
  or detailed area needs no code: `build.py` gives it its id and lists it.
- **The two outlines** (`hover-edge`, `sel-edge`) read the same tiles as a second source, `edges`, added once the first
  view has faded in (`edges()`): the engine rewrites every layer of an area whenever any of that area's state changes, so on
  the areas' own source a fade rewrote every outline on every frame (3 to 5 ms a frame, processor slowed 4 times), and
  building them for the first view cost it about 90 ms there.
- **What each area gets** (`targets()` in `site/map-gl.js`): the same rules as before, one value per area: the chosen
  language, its family, the rest, historical languages, a family filter, the word view, the countries tinted with their
  main language, and the detailed layers with the shared strengths of `site/regional-layer.js`.
- **Fades** (`fade()`): a choice takes every area from what it shows to its new value in 200 ms, the site's easing
  (`cubic-bezier(0.2, 0.8, 0.2, 1)`), one value per area and frame; a second choice during a fade starts from where it is.
  The outline under the pointer (desktop) fades in and out in 120 ms. The language areas fade in once (300 ms) when the
  map is first drawn in the page, not when the page shows the kept map again. With "reduce motion" (the system's or the
  site's own setting) every fade lasts at most 100 ms.
- **Camera.** A flight to a language, a region, a family or a pin, and back home, takes 400 to 700 ms by how far it goes
  (zoom steps plus screens panned: `kFly` in the page code), with the site's easing.
- The census view is unchanged (it still sends its shapes on every choice); it is built once the fade's first frame is
  drawn, so its work does not hold that frame back.
- Tried and dropped: the strengths as a few numbers in the engine's global state (`setGlobalStateProperty`) read by a
  per-area rule. MapLibre re-processes every tile whenever global state that a per-area rule reads changes: 14 times in
  one 200 ms fade. Per-area values set each frame cost under 1 ms of script a frame and no tile.
- Measured 2026-11-14 (phone size, headless Chrome on an M1 Pro, processor slowed 4 times, no camera move): tiles
  re-processed by a choice or a hover 4 -> 0; first changed frame 140 to 230 ms -> 20 to 40 ms; fade over at 170 to 250 ms;
  frames during a fade 16 to 18 ms. Frames over 20 ms remain only from the census view, which still builds and sends its
  regions on every choice (one frame of about 30 ms; about 80 ms of script for a language with census rows), and the
  Albanian or Vlach legend (one frame of about 30 ms). The map at rest is pixel for pixel as before for 23 choices
  (languages on every part of the map, a circle, a historical language, minority areas, the detailed layers, families,
  the word view) on phone and desktop, light and dark. Map ready: about 50 ms later on the slowed phone (2.08 -> 2.13 s).

## No old map any more
The old SVG map was retired on 2026-11-13 (main README, "Old map retired"). When the engine cannot start, the map box shows
a short note instead (`kNoMap` in the page code).

## What the engine draws
Sea, land, coast, country borders, region lines, district lines (deep zoom), a tint of each country in its main
language, the language areas (lighter tint for minority areas, faint dashed for historical languages, a circle for
languages without a drawn area), family areas outside the home areas, the detailed layers (Albanian dialects, Vlach
varieties, Serbia, Greece, Montenegro), relief, and the census view: with a language chosen, every municipality or
region that has a census row for it is filled by its share there (stripes in Montenegro where it is a minority).

Names, dots and outlines too (layers `lab-dot`, `lab-text`, `lab-line`): language, family, district and city names, city dots,
the word circles, the chosen language's region outlines and the place with keyboard focus. The page still lays them out (which
name shows, where, in what look: its code and style sheet are unchanged) and, each time the map comes to rest or anything about
them changes, `gLabStep` in the page code reads every one as it stands (its point on the map, its offset in pixels, text, size,
weight, colours, how visible) and hands the list to the engine (`labels()` in `site/map-gl.js`). While the map moves the engine
draws them from that list: a name keeps its size on screen and its distance from its point, and the page redraws nothing on any
frame, as in the leading map products. The page's own elements stay in place, hidden with `visibility` (so their own colours and
opacities stay readable), for the keyboard, the pointer (the word circles take clicks) and the census names' collision check;
while the map moves the page leaves them exactly as they are (not moved, not hidden) and puts them right once, at rest. Moving
them on every frame made the browser lay out all of them (about 2,600) each frame; taking them out of the drawing instead made it
rebuild them all whenever the map stopped (a 160 to 230 ms pause at the end of every pinch on a slowed phone, 2026-11-13). The letters are Manrope, drawn by the engine without a font
server: a font list like `["Manrope SemiBold", "Manrope"]` gives weight 600 (the engine takes the weight from the words of the
first name and the letters from the first family the browser has). Measured on 2026-11-12 in Chrome on an M1 Pro (wheel zoom
in and out at three places): late frames 383 of 914 before, 7 of 840 after; phone size with the processor slowed 4 times:
a typical frame 50 ms before, 16 ms after.

The pins too: each language pin is a disc with a soft shadow and the language's colour at its core, so it stands out
from its own area (size and colours: `PIN` and `THEMES` at the top of `site/map-gl.js`). The page keeps its pin
elements, unseen, for pointer and keyboard and for the rules that fade, dim or hide a pin; it tells the engine how
visible and how large each pin is (`gPinStep` in the page code). While the map moves, no pin is redrawn by the page.

The relief picture is downloaded and decoded once and handed to the engine as it is (AVIF, or WebP where AVIF cannot be
decoded). The map never waits for it: without it the map is drawn flat.

Keyboard (both maps, every country): a canvas has nothing to focus, so every place a click opens (each region of
`data/today.json`, and each country without regions: about 1,800) is a button nobody sees (`kKeys` in the page code).
They are one Tab stop: arrow keys go through them by country and name, Page Up / Page Down jump a country, typing a name
jumps to it, Home / End. The place with focus is brought into view and shown as under the pointer (name and outline);
Enter opens its card, at any zoom.

What a click (or Enter) opens: the region at that spot, then the country (`kPl` in the page code). Exception: a country
without regions of its own lying inside or over another country's region is itself (Vatican City in Rome, Macau in
Guangdong, the UN buffer zone in Cyprus). The data holds Palestine and Åland twice (PSE with its regions West Bank and
Gaza, and PSX without; ALA and ALD): the copy without regions changes nothing and is left out of the keyboard list.

Credits: one small line in the bottom left corner of the map (`.mcred`): OpenStreetMap (Montenegro's municipalities),
EuroGeographics (the other census boundaries, GISCO), and the relief's elevation sources (Terrain Tiles).

Census names and stripes (every country with a census table: Albania, Bulgaria, Croatia, the Czech Republic,
Liechtenstein, Montenegro, North Macedonia, Romania, Serbia, Slovakia; 9,924 regions):
- Names are drawn by the engine (layer `names` in `site/map-gl.js`) in the site's font, Manrope, without a font server:
  with no `glyphs` address in the style MapLibre draws the letters itself. A name shows from the first zoom level, 4 times
  in or more, where its region is 34 px wide; the larger region wins where two collide. At rest the page tells the engine
  what it has written (language, family and city names, pins: `gNames` / `GM.avoid`), and a census name that would lie
  on one of those, or repeats a city name beside it, is left out.
- Names come from the census region files as they are, except where the source spells them wrongly: Romania's counties
  (given in capitals without diacritics) and six Montenegrin municipalities (`NAME_FIX` in `build.py`).
- Stripes, one rule for every country: where the chosen language has 2% or more but another language is the largest
  (same census question), the region takes that language's colour and the chosen one shows as stripes. The largest
  language comes from `census-top.json`; it is left out where the languages not listed could outweigh it. Where the
  largest language is not on the map (German in Liechtenstein, Romani in 30 Slovak municipalities and Šuto Orizari in
  North Macedonia) there is no colour for it, and the region shows the chosen language's share as everywhere else.
- Both files are written by `build.py` (`census-names.json`, `census-top.json`); after a change to the census tables
  or to `NAME_FIX` alone: `.venv/bin/python scripts/map-next/build.py --census`.

One set of outlines: coast, borders, the edge of every language area and every census region come from the same
country shapes (Natural Earth 1:10m). A colour always ends on a drawn line.

## The first view
Every language area, fitted to the screen, on phone, tablet and desktop. What appears at which scale (pins, names,
cities, districts) is unchanged.
