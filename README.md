# Etimo

A dictionary and language map: 209 languages in 9 families, each with its words, its place on the
map, and its place in the family wheel and tree.

Live: https://etimo.nikocevic7.workers.dev (Cloudflare). Preview on your Mac:
`python3 -m http.server 8092 -d site`, then open http://localhost:8092

## Folders

| folder | what it is | edit by hand? |
|---|---|---|
| `content/` | **Your additions**: words, languages, dialects, families, meanings | yes, this is where you work |
| `scripts/` | The build (`add-words.sh`) and its checks | only to change how the site is built |
| `reference/` | Untouched originals of the two apps the site was merged from | never |
| `site/` | The website that gets published | no (see the table below) |
| `docs/` | Merge spec, QA notes, screenshots | notes only |

What produces each part of `site/`:

| path in `site/` | produced by |
|---|---|
| `index.html` | `scripts/merge/apply-patches.py` (original app + numbered patches + `scripts/merge/inject/`) |
| `data/languages.json`, `lexicon.json`, `terr.json`, `dia.json` and the other map data | `scripts/merge/merge-data.py` |
| `h/` (startup files, full dictionaries, search index, all with a content hash in the name) | `merge-data.py`, `bulk_import.py`, `apply-patches.py` |
| `data/regional/`, `data/tables/` (census and regional tables) | `scripts/build-regional.py`, run only when that source data changes |
| `data/shade.avif`, `shade-s.avif`, `shade.webp` (relief) | `scripts/relief/build.sh`, run only to change the relief's look |
| `regional-layer.js`, `country-data.js`, `country-sources.js`, `country-sources.css`, `search-key.js`, `_headers`, `data/greece-areas.json`, `data/athos.json` | written by hand; these are the only files in `site/` you edit directly |

`./scripts/add-words.sh` runs the first three rows and every check. Running it twice changes nothing.

## Everyday tasks

All four are content changes. No code is touched. Details and every field: `content/README.md`.

| I want to add | Do this |
|---|---|
| **Words** | Put a CSV in `content/words/`, or paste a Google Sheet link into `content/sheets.txt` |
| **A language** | Copy `content/languages/_example.json.txt` to `content/languages/<name>.json` and fill it in |
| **A dialect** | Words only: write the language as `Serbian (Torlak)` in the CSV and map the label in `content/language-aliases.csv`. With its own area on the map: add it as a language that has the same `path` as its parent |
| **A language family** | Add one entry to `content/families.json` (name, two colours, where its name sits on the map). A ready Baltic example is in the file: remove the `_` in `_Baltic` to switch it on |

Then:

```
./scripts/add-words.sh          # rebuilds site/, runs every check, prints a report
python3 -m http.server 8092 -d site
```

A mistake (unknown language, unknown family, missing column, bad colour) stops the build and names the
file and line. Nothing is published until you commit and push.

Optional helpers: `./scripts/watch.sh` rebuilds whenever you save a file in `content/`;
`sh scripts/hooks/install.sh` installs a commit check that refuses a commit if `site/` is out of date or
a colour check fails. First run sets up Python in `.venv` (needs Python 3, Node and Google Chrome).

## Checks that run in every build

| check | what it proves |
|---|---|
| `test-search-key.js` | plain Latin typing finds special letters and other scripts (`voda` finds вода) |
| `check-overlaps.py` | no two language areas on the map overlap |
| `words-report.py` | every new word landed in a language, a family and a category |
| `check-colors.py` | opens the site in Chrome in light and dark and fails, naming the language, unless: map colour = palette = wheel colour for every language; dialect and minority areas = their language's colour; the 78 original languages look exactly like `reference/`; every family has a colour |

## Colours: one source

`scripts/merge/palette.py` and `scripts/merge/families.py` are the only places colours come from.

- A **family** has one colour per theme (light, dark). Five come from the original Etimo and never
  change, four were chosen for the merge, and any further family is defined in `content/families.json`.
- A **language** has its own colour: Etimo's table for its 78 languages, and for every other language a
  shade of its family colour. Override one with `"color": "#rrggbb"` in its JSON.
- The build writes that one table into the page. Map areas, dialect areas, pins, the wheel, the tree,
  cards and dots all read it, in both themes.
- Rule for dots: a dot beside a **family name** is the family colour; a language's **area, pin and
  wheel slice** are the language's colour.

Choosing a colour for a new family: `python3 scripts/merge/palette.py` prints how far apart every
pair of family colours is (20 or more reads as clearly different). With nine families the open
room is small; the Baltic example (`#819808` light, `#879f18` dark) scores 19.3 and 20.7 against
its nearest neighbour.

## How the page is built (and its limit)

The app is the original Etimo bundle, a single compiled file with no separate source code.
`apply-patches.py` rebuilds `site/index.html` from that original every time by applying exact
find-and-replace patches, each with an id. If a patch no longer matches, the build stops and names it;
it never half-applies. New behaviour and styles live in `scripts/merge/inject/fd-app.js` and `fd.css`.

This keeps every change reviewable and repeatable, but it means app logic is edited through
patches, not ordinary source files. Data, colours, languages, families and words do not have
that limit: they are plain files in `content/`.

## Map fixes, 2026-11-10

Each was reproduced in Chrome before it was changed and re-measured after.

| problem (measured) | fix |
|---|---|
| Dark mode: dialect and minority areas (Albanian dialects, Vlach, Serbia) used the light colours, so 7 of 11, 4 of 6 and 10 of 14 did not match their language's area or wheel slice | areas read the same theme-aware colour as the language (`site/regional-layer.js`); now also covered by `check-colors.py` |
| Switching light/dark while the map was open left 113 of 208 areas in the old theme's colours until a reload | the map redraws on a theme change, keeping position and selection |
| Same on the wheel: 107 of 199 language slices kept the old theme's colours | the wheel redraws after the theme has changed |
| Every zoom or drag frame rewrote all 926 city labels, visible or not | only labels whose visibility changed are written (926 writes per frame down to about 15) |
| Phones: the page was 56px taller than the screen (padding left over for a hosting badge), so the map page could scroll. A height change of that size makes the map rebuild itself from scratch: about 1.2 seconds of frozen map in Chrome with a 4x slower CPU. Tested by resizing the map by 60px, not on a real phone | the map page has no extra padding and no longer scrolls (other pages keep it, so the last row clears the back-to-top button). The map card also sits at the bottom edge again |
| Desktop panel showed the language colour beside the family name; the phone popup and the search chip showed the family colour | all three show the family colour |

## Coast and outline fixes, 2026-11-10 (second pass)

| problem (measured in Chrome) | fix |
|---|---|
| Two coastlines side by side when zoomed in: the app's own coast line and the overlay copy came from different outlines | one coast line, redrawn from the same outline the colours are cut to (`world-50m.json`), so the line and the colour edge always coincide |
| Dark slivers and small dark islands beside the Greek coast: the hand-drawn Greek area follows a coarser coast than Greece's own regions | hand-drawn areas are erased within about 5 km of Greece's outline; neighbours' land is restored so areas across a land border are untouched |
| Blank land at the coast that read as sea (the Karaburun peninsula by Izmir, strips along many coasts): hand-drawn areas stop short of the coastline | `merge-data.py` (`fill_coast_gaps`) gives narrow blank coastal land to the nearest drawn area, only inside countries that are at least 60% mapped. 921 pieces, 29 languages. The result is cached in `.cache/` until an area changes |
| Mount Athos (328 km2) showed as a crude dark shape: it is missing from the Greek regions file | `site/data/athos.json` is added to Central Macedonia when the map loads |
| Arvanitika was one rough blob | redrawn from the owner's reference map (`site/data/greece-areas.json`) |

Checked and found correct (not changed): language areas, pins and wheel slices match in both
themes on a fresh load; no console errors on the home, map, language, dictionary and wheel screens;
downloads are compressed and cached (first visit about 2.5 MB, mostly the word list, then served
from cache).

## Relief (the soft mountain shading)

Built by `scripts/relief/build.sh` from public elevation data, drawn in the map's own projection
(d3 conic conformal, parallels 35 and 60, centred on 30 E). The look is deliberately quiet: the land
is smoothed so only mountain systems show, the sea is flat (no sea-floor rings, no coast shadows),
and flat land is fully clear so language colours stay pure. Three files, same picture:

| file | size | who gets it |
|---|---|---|
| `site/data/shade.avif` | 4725 x 2490, about 480 KB | desktop |
| `site/data/shade-s.avif` | 3150 x 1660, about 310 KB | phones and small tablets |
| `site/data/shade.webp` | 3465 x 1826, about 390 KB | only browsers that cannot read AVIF |

To change the look, edit the three numbers on the `shade.py` line in `build.sh` (smoothing,
exaggeration, strength), run it, then run `./scripts/add-words.sh`.

## Hosting

Cloudflare Worker `etimo`, serving the `site/` folder as static files. The build settings live in
the Cloudflare dashboard (Workers, etimo, Settings, Build), not in this repo. `site/_headers` sets
caching: files in `h/` carry a content hash and are cached for a year, `data/` for a day, the page
itself is always revalidated.

Command line: `wrangler deployments list --name etimo` shows recent deploys.
