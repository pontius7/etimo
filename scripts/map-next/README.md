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
