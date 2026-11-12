# Etimo map on MapLibre

The map of the site is drawn by MapLibre GL (open-source map engine, BSD licence, version 6.18.0, copied into
`site/map-next/vendor/`). It draws the heavy part on the graphics card and owns zoom, pan and pinch.

| Part | Where |
|---|---|
| The engine's side: layers, colours of sea / land / lines, how strong each area is when a language or family is chosen, census view, legend | `site/map-gl.js` |
| The page's side: pins, names, city and district names, outlines, search, language card, and the link to the engine (`kV`, `kGo`, `kTick`, `gStart` ...) | `src/app/6-app-screens-and-startup.js` (search for `GL`) |
| Lists and strengths shared by both maps (Albanian dialects, Vlach varieties, which pins and areas the detailed layers replace) | top of `site/regional-layer.js` |
| The map data | `scripts/map-next/build.py` writes `site/map-next/data/` |
| The few style rules the engine's box needs | `src/styles/v64.css` |

- Rebuild after any content or colour change: `python3 scripts/build-page.py && .venv/bin/python scripts/map-next/build.py`
  (about 45 seconds; the census regions are only cut again when their source changed. Delete
  `site/map-next/data/regions/` to cut them all again).
- What feeds the data: the same files as the site. The list is at the top of `build.py`.
- How precise the outlines are, and what counts as a drawing error at a border: the constants at the top of `build.py`.

## Going back to the old map
Open the site with `?map=svg` in the address (or set `localStorage["etimo-map"] = "svg"`). The old drawing code is
still in place and is also used on its own when the engine cannot start (no WebGL2). To remove the engine for good:
delete `site/map-gl.js`, `site/map-next/`, `scripts/map-next/`, `src/styles/v64.css` and the `GL` parts of the map code.

## What the engine draws
Sea, land, coast, country borders, region lines, district lines (deep zoom), a tint of each country in its main
language, the language areas (lighter tint for minority areas, faint dashed for historical languages, a circle for
languages without a drawn area), family areas outside the home areas, the detailed layers (Albanian dialects, Vlach
varieties, Serbia, Greece, Montenegro), relief, and the census view: with a language chosen, every municipality or
region that has a census row for it is filled by its share there (stripes in Montenegro where it is a minority).

The pins too: each language pin is a disc with a soft shadow and the language's colour at its core, so it stands out
from its own area (size and colours: `PIN` and `THEMES` at the top of `site/map-gl.js`). The page keeps its pin
elements, unseen, for pointer and keyboard and for the rules that fade, dim or hide a pin; it tells the engine how
visible and how large each pin is (`gPinStep` in the page code). While the map moves, no pin is redrawn by the page.

One set of outlines: coast, borders, the edge of every language area and every census region come from the same
country shapes (Natural Earth 1:10m). A colour always ends on a drawn line.

## The first view
Every language area, fitted to the screen, on phone, tablet and desktop. What appears at which scale (pins, names,
cities, districts) is unchanged.
