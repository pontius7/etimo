# Etimo

A dictionary and language map: 210 languages in 9 families, each with its words, its place on the
map, and its place in the family wheel and tree.

Live: https://etimo.nikocevic7.workers.dev (Cloudflare). Preview on your Mac:
`python3 -m http.server 8092 -d site`, then open http://localhost:8092

## Publishing

Cloudflare serves the `site/` folder as it is. Nothing is built on Cloudflare's side.

- **Push to `main` on GitHub** and Cloudflare publishes it (Workers Builds, set up 2026-11-11: no
  build command, deploy command `npx wrangler deploy --name etimo --assets ./site --compatibility-date 2026-11-10`).
  So always run `./scripts/add-words.sh` and commit `site/` before pushing: what is in `site/` is what goes live.
- **By hand**, if a push does not publish: run that same `wrangler deploy` line from this folder.
- **Check** with `npx wrangler deployments list --name etimo` (newest entry should be minutes old) and by
  opening the live address. Build history: Cloudflare dashboard, Workers, etimo, Deployments.

## Folders

| folder | what it is | edit by hand? |
|---|---|---|
| `content/` | **Your additions**: words, languages, dialects, families, meanings | yes, this is where you work |
| `src/` | **The page's source**: the page, its styles and the app script, as ordinary files | yes, to change how the site looks or behaves |
| `scripts/` | The build (`add-words.sh`) and its checks | only to change how the site is built |
| `reference/` | Untouched originals of the two apps the site was merged from | never |
| `site/` | The website that gets published | no (see the table below) |
| `docs/` | Merge spec, QA notes, screenshots | notes only |

What produces each part of `site/`:

| path in `site/` | produced by |
|---|---|
| `index.html` | `scripts/build-page.py`, from the files in `src/` |
| `data/languages.json`, `lexicon.json`, `terr.json`, `dia.json` and the other map data | `scripts/merge/merge-data.py` |
| `h/` (startup files, full dictionaries, search index, all with a content hash in the name) | `merge-data.py`, `bulk_import.py`, `build-page.py` |
| `data/regional/`, `data/tables/` (census and regional tables) | `scripts/build-regional.py`, run only when that source data changes |
| `data/shade.avif`, `shade-s.avif`, `shade.webp` (relief) | `scripts/relief/build.sh`, run only to change the relief's look |
| `regional-layer.js`, `country-data.js`, `country-sources.js`, `country-sources.css`, `search-key.js`, `_headers`, `data/greece-areas.json`, `data/montenegro-areas.json`, `data/athos.json` | written by hand or traced (`scripts/areas/`); these are the only files in `site/` you edit directly |

`./scripts/add-words.sh` runs the first three rows and every check. Running it twice changes nothing.

## Structure

Everything in the repository, one line each. "Built" means a script writes it; do not edit those by hand.

```
content/                      your additions (the only place to add words, languages, families, meanings)
  words/                      word lists as CSV (one template, two large imports)
  languages/                  one JSON file per language you add (_example.json.txt shows every field)
  families.json               extra language families (name, two colours, label position)
  meanings.csv                extra meanings and where they sit in the categories
  language-aliases.csv        other spellings of language names found in word lists
  sheets.txt                  Google Sheet links that are fetched as word lists
  minority-areas.csv          which language areas are drawn in a lighter tint, with the census figure and source for each
  import-report.txt           built: where the rows of the large word lists went

src/                          the page's source (see "How the page is built")
  page.html                   the page and the order of its parts
  styles/                     30 style files: main.css, the layers v41..v62 and etimo-*.css, fd.css
  app/                        the app script in seven parts (1 and 3 are libraries)

scripts/
  add-words.sh                THE build: fetch sheets, merge data, build the page, run every check
  build-page.py               joins src/ into site/index.html and fills the placeholders
  build-regional.py           census and regional tables (run only when that source data changes)
  watch.py, watch.sh          rebuild whenever a file in content/ or src/ is saved
  hooks/                      optional commit check (refuses a commit if site/ is out of date)
  launchd/                    optional: run the watcher in the background on a Mac
  merge/
    merge-data.py             all map and word data in site/data and site/h (areas, coast-gap fill, country clip)
    bulk_import.py            the large word lists: full dictionaries and the search index
    dedupe.py, fetch-sheets.py, topo.py   helpers for the two above
    palette.py, families.py   the one source of colours and of the family list
    devter-synonyms.json      synonym table used when content/meanings.csv adds a meaning
    check-overlaps.py         check: no two language areas overlap
    check-colors.py, probe-colors.mjs   check in Chrome: map = palette = wheel, light and dark
    words-report.py, jslit.js check: every new word landed in a language, family and category
    search_keys.js, test-search-key.js  check: Latin typing finds other scripts
  relief/                     builds the mountain shading images from elevation data (build.sh)
  areas/                      traces language areas from reference map images (Arvanitika, Montenegro)

site/                         the published website (Cloudflare serves this folder as it is)
  index.html                  built from src/
  regional-layer.js           by hand: the detailed layers on the map (Albanian dialects, Vlach, Serbia,
                              Montenegro, Greece), country borders and coast, municipality labels
  country-data.js, country-sources.js, country-sources.css   by hand: census tables and their sources
  search-key.js               by hand: turns any script into Latin search keys (also part of the page)
  _headers                    by hand: caching rules for Cloudflare
  data/                       map data
    languages.json, lexicon.json, terr.json, dia.json, micro.json, ethno.json, adm2.json   built by merge-data.py
    world-50m.json, world-50s.json, borders-10m.json, today.json, greece-10m.json          outlines and borders
    albanian-dialects.json, vlach-areas.json, serbia-areas.json                            traced area layers
    greece-areas.json, montenegro-areas.json, athos.json                                   traced (scripts/areas/)
    montenegro-municipalities.geojson, country-sources.json, regional-sources.json         census geography and sources
    shade.avif, shade-s.avif, shade.webp                                                   relief (scripts/relief/)
    regional/, tables/        built by build-regional.py: census data per country
  h/                          built: copies with a content hash in the name, cached for a year
    dict/                     full dictionary of each language that has one
    search/                   the search index, in small pieces

reference/                    untouched originals of the two apps the site was merged from; the build still
                              reads their data files, and the colour check compares against them
docs/                         merge spec, QA notes, screenshots (history, not needed to build)
```

## Everyday tasks

All four are content changes. No code is touched. Details and every field: `content/README.md`.

| I want to add | Do this |
|---|---|
| **Words** | Put a CSV in `content/words/`, or paste a Google Sheet link into `content/sheets.txt` |
| **A language** | Copy `content/languages/_example.json.txt` to `content/languages/<name>.json` and fill it in |
| **A dialect** | Words only: write the language as `Serbian (Torlak)` in the CSV and map the label in `content/language-aliases.csv`. With its own area on the map: add it as a language that has the same `path` as its parent |
| **A lighter (minority) area** | Add a row to `content/minority-areas.csv`: language, `min` or `plu`, region, the census shares, the source |
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
| `check-colors.py` | opens the site in Chrome in light and dark and fails, naming the language, unless: map colour = palette = wheel colour for every language; dialect and minority areas = their language's colour; the 78 original languages look exactly like `reference/` (except the four recoloured on purpose, listed as `RECOLOURED` in the script); every family has a colour |

## Colours: one source

`scripts/merge/palette.py` and `scripts/merge/families.py` are the only places colours come from.

- A **family** has one colour per theme (light, dark). Five come from the original Etimo and never
  change, four were chosen for the merge, and any further family is defined in `content/families.json`.
- A **language** has its own colour: Etimo's table for its 78 languages (in `src/app/7-language-colours.js`),
  and for every other language a shade of its family colour. Override one with `"color": "#rrggbb"` in its JSON.
- Changing one of the 78 original colours: edit it in `src/app/7-language-colours.js` and add the name to
  `RECOLOURED` in `scripts/merge/check-colors.py`, otherwise the check fails because it no longer matches `reference/`.
- The build writes that one table into the page. Map areas, dialect areas, pins, the wheel, the tree,
  cards and dots all read it, in both themes.
- Rule for dots: a dot beside a **family name** is the family colour; a language's **area, pin and
  wheel slice** are the language's colour.

Choosing a colour for a new family: `python3 scripts/merge/palette.py` prints how far apart every
pair of family colours is (20 or more reads as clearly different). With nine families the open
room is small; the Baltic example (`#819808` light, `#879f18` dark) scores 19.3 and 20.7 against
its nearest neighbour.

## How the page is built

The page has ordinary source files in `src/`. `scripts/build-page.py` joins them into the one
published file, `site/index.html`. To change how the site looks or behaves, edit a file in `src/`,
run `./scripts/add-words.sh` (or only `python3 scripts/build-page.py` for a quick look) and reload
the preview.

| in `src/` | what it is |
|---|---|
| `page.html` | the page itself: the head, and the order in which the styles and scripts are joined |
| `styles/` | the style sheets, one file per block, one rule per line. `main.css` is the base; `v41.css` to `v62.css` and the `etimo-*.css` files are later layers (a later file wins). New rules go at the end of `v62.css` as a numbered block (`v63` to `v68` are there now); `fd.css` styles the full dictionary and the language page |
| `app/1-libraries-ui.js`, `app/3-libraries-map.js` | other people's libraries (React and the interface kit; d3 for the map). Not meant to be edited |
| `app/2-app-text-and-tables.js` | every interface text in each language (`Zr`), the word categories, language and place names, region tabs |
| `app/4-app-search-and-helpers.js` | search, colour helpers, the city list, category screens |
| `app/5-full-dictionary.js` | full dictionaries and Latin-friendly search (written by hand, with readable names) |
| `app/6-app-screens-and-startup.js` | language page, tree, wheel, the map (`Dp`), settings, startup |
| `app/7-language-colours.js` | the colour of every language, and how colours are lifted for dark mode |

Three things to know:

- **Short names.** The app was compiled once, so most names inside it are short (`kp` is the
  language page, `Dp` the map). Every statement is on its own line; find a function with
  `grep -n "^function kp" src/app/*.js`.
- **Placeholders.** `/*@NAME@*/`, `__ETIMO_NAME__` and `/*@table NAME*/ ... /*@end*/` mark the few
  places the build fills in from `content/` and the data files: family colours and lists, the
  colour of each language, names of your own languages and meanings, and the hashed names of the
  startup files. Leave them where they are. The full list is in `placeholders()` in `scripts/build-page.py`;
  a missing or unknown placeholder stops the build and names it.
- **One page out.** The published page is still a single file, so nothing changes for visitors.

History: until 2026-11-10 the page was rebuilt on every build from the original compiled app
through 86 find-and-replace patches (`scripts/merge/apply-patches.py`, still in the git history).
The switch to `src/` was checked two ways: the page built from `src/` was byte-for-byte the page
the patches produced, both with today's content and with a test family, test languages and test
meanings added; and after the script and styles were put on separate lines, the only difference
was line breaks, with the parsed program of every script file unchanged.

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
| The hand-drawn Montenegrin area reached 710 km2 past Montenegro's border and cut strips out of the Bosnian, Serbian and Albanian areas there | `merge-data.py` (`clip_to_country`) keeps it inside Montenegro's outline |
| Arvanitika was one rough blob | redrawn from the owner's reference map (`site/data/greece-areas.json`) |

Checked and found correct (not changed): language areas, pins and wheel slices match in both
themes on a fresh load; no console errors on the home, map, language, dictionary and wheel screens;
downloads are compressed and cached (first visit about 2.5 MB, mostly the word list, then served
from cache).

## Layout and map consistency, 2026-11-11

Each was measured in Chrome before and after (phone size 390 x 844 and desktop 1440 x 900).

| problem (measured) | fix |
|---|---|
| Phones and tablets: the menu sat under the header, so 110px at the top was chrome | one header row (56px) at the top, the menu as a bar at the bottom of the screen, as in the original design (`src/styles/fd.css`). Search boxes stick directly under the header. The map fills the space between header and bar exactly and the page does not scroll |
| Desktop: the map page was 51px taller than the screen, so it could scroll | the map page has no end padding on desktop either |
| With no language selected, central and southern Albania, the Arbëresh areas in Italy and the Arvanitika areas in Greece had nothing drawn: their base areas are hidden in favour of the dialect layer, and that layer was only drawn once Albanian was selected. This was the same in the original app | the dialect areas are always drawn. At rest a click on one selects Albanian; once Albanian is selected a click picks the dialect, as before |
| The four detailed layers (Albanian dialects, Vlach, Serbia, Montenegro) each used their own strengths: .6 to .78 at rest, .85 to .92 selected, .06 or .07 dimmed | one rule in `site/regional-layer.js` (`OP`, `restOp`): .78 at rest, .9 selected, .3 while another language of the same family is selected, .07 for another family, .14 for families a filter leaves out. They also fade in step with the base areas (.25s; off when the system asks for reduced motion) |

Audit of all 209 languages after these changes: with nothing selected, every language has a drawn
area (its own, its varieties', or its parent's); selecting any language highlights an area for it.
What still differs on purpose: languages listed in `content/minority-areas.csv` are drawn lighter where
the census shows the people as a minority or plurality in their region, and the 8 historical languages
are drawn faint with a dashed outline.

## Interface, colours and minority areas, 2026-11-11 (second pass)

Each was checked in Chrome at phone size (390 x 844) and desktop (1440 x 900), light and dark.

| change | where |
|---|---|
| **Words button** shows only for a language that has words (33 of 210 have none yet). It appears by itself once words are added, and is re-checked when the word list finishes loading | `gw()` in `src/app/6-app-screens-and-startup.js`; phone card and desktop panel |
| **Phone search field**: while a language card is open the field shows "Find a language or family" again and the card's close button is the only one. Family filters and desktop keep the name in the field | `_p` in the same file |
| **Menu**: the Explore tab is called **Map**; the active tab is a soft tinted pill instead of a solid one | same file; block `v66` in `src/styles/v62.css`. `scripts/merge/probe-colors.mjs` clicks the tab by either name |
| **Favicon, description, title** in the page head; the icon is the logo's "e" drawn from the logo font (Noto Serif Display, weight 600), dark or light with the browser. Logo is labelled as an image for screen readers | `src/page.html`, `Op` |
| **Map labels**: while one language is selected, only its own label, the two languages its card names as near, and the eight nearest to its area keep a label | `nearMap()`, `kn` |
| **Minority areas**: a solid lighter tint of the language's own colour (was see-through, which went grey over the colour underneath). The list moved from the copied map data into `content/minority-areas.csv`, one rule for every country, each row with its census figure and source. Added from the Russian 2021 census already in the data: Adyghe, Khakas, Southern and Northern Altai, Abaza. Added from China's 2020 census: Uyghur (largest group under half, medium tint), Inner Mongolian. Not decided, so still normal colour: Karakalpak, Sorbian, Walloon, Kashubian and others listed at the foot of the file | `apply_minority_areas()` in `scripts/merge/merge-data.py`; block `v67` |
| **Croatian, Bosnian, Serbian, Montenegrin** were two pairs of near-twins (weakest pair 15 on the colour-difference scale, 11 in dark). Now deep green `#05571d`, light spring green `#a2e78b`, turquoise `#36dbd2`, deep petrol `#095a67`: weakest pair 24 light, 20 dark. Sandžak Bosniak is a sibling shade of Bosnian (`#7dc953`) | `src/app/7-language-colours.js`, `content/languages/sandzak-bosniak.json` |
| **Family names on the first map view** are sized by the family's territory (Turkic and Slavic largest, Albanian smallest), with tighter letter spacing on small ones. Ranges: phone 9 to 12.5px, tablet 10.5 to 15px, desktop 11.5 to 20px | `--fk` set where the names are drawn; block `v68` |

## Montenegro and Arvanitika: areas traced from reference maps

- **Montenegro** (`site/data/montenegro-areas.json`): four broad areas (Serbian, Montenegrin, Albanian,
  Bosnian) generalised from the 2011 census settlement map on Wikimedia Commons. They span municipalities
  and carry the colour while no language is selected. The 25 municipalities stay as they were, on top:
  borders, labels, hover and click. Selecting a language shows its census share per municipality, as before.
  Romani and the no-data classes are left out; Bosniak counts as Bosnian.
- **Arvanitika** (`site/data/greece-areas.json`): traced from the owner's reference map.

How they are traced, and how to re-trace from another image: `scripts/areas/README.md`.

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

## Phone panel, first view and Sandžak Bosniak, 2026-11-10

- **Phone panel (the card that appears when a language is picked).** Order is now: name with its native
  name, three labelled facts (region, census count, status), the "Where" chips, then two buttons:
  **Details** and **Open words**. Details opens, inside the same card, what the desktop panel shows: the
  branch line, census by country, classification and the two neighbours in the family. Both panels are
  filled by the same two functions (`panelSecs`, `nearFam` in `src/app/6-app-screens-and-startup.js`), so
  they cannot drift apart. Styles: the `.msheet` block at the end of `src/styles/fd.css`. While Details is
  open the zoom and reset buttons fade out so nothing overlaps.
- **Phone first view.** The coloured part of the map is centred between the search field and the menu
  (`phoneHome` in the same file, screens under 640 px only). Desktop is unchanged.
- **Sandžak Bosniak** is a language entry in `content/languages/sandzak-bosniak.json` with the same `path`
  as Bosnian. Its area is not a new drawing: the settlement areas that were labelled Bosnian in
  `site/data/serbia-areas.json` (161 areas, Serbia census 2022) and `site/data/montenegro-areas.json`
  (Plav-Gusinje and Rožaje-Petnjica, 2011 settlement map) all lie inside Sandžak and now carry this name.
  `PAR` in `site/regional-layer.js` names the parent, so the same areas also light up when Bosnian is
  picked. The speaker figure is the sum of the two whole-country census counts for Bosnian as mother
  tongue (Serbia 145,329 in 2022, Montenegro 43,470 in 2023). It has no word list yet, like Bosnian.
