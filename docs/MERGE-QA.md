# Merge QA: Etimo + Devter

Branch `merge/devter`. Checked 2026-11-07 in Chrome (chrome-devtools MCP), merged site on
`python3 -m http.server 8092 -d site`, untouched Etimo on port 8093 (`reference/etimo-artifact`).
Screenshots: `docs/merge-qa/` (Etimo and merged pairs share a number).

## How to rebuild

```
python3 -m venv .venv && .venv/bin/pip install -r scripts/merge/requirements.txt
.venv/bin/python scripts/merge/merge-data.py      # site/data/* from both reference folders
python3 scripts/merge/apply-patches.py            # site/index.html from Etimo's index.html
.venv/bin/python scripts/merge/check-overlaps.py  # map colour-overlap check
python3 scripts/merge/palette.py                  # family colour check
```

Both build scripts are rerunnable: running them again on the committed tree leaves `git status`
clean (checked). `apply-patches.py` stops with `PATCH <id> FAILED` if any snippet is not found
exactly the expected number of times. 59 patches apply, 0 fail.

## Checklist

| # | item | result | evidence |
|---|---|---|---|
| 1 | Merged language count | PASS: 209 (78 Etimo + 131 Devter), 55,920 entries, 9 families, 11 wheel roots | merge-data.py output |
| 2 | First view matches Etimo (same frame, same zoom, shade.webp unchanged) | PASS: fit uses Etimo's own language points; frame/raster unchanged | 01-first-view-etimo / -merged |
| 3 | Devter zones re-projected into Etimo's frame | PASS: terr/dia vertices converted Devter conic [42,66] rot -72 to Etimo [35,60] rot -30; round trip checked to 1e-6 degrees | merge-data.py self-test; Georgian bbox centre 43.5E 42.1N |
| 4 | Map drawn without overlapping colours (user request) | PASS: every drawn zone, fallback circle and family diaspora shape is cut so no two overlap; left over: rounding slivers only (largest 1.95 frame units^2, about 80 km^2, along Khanty/Mansi border) | check-overlaps.py; 01/06 screenshots |
| 5 | Etimo language detail looks unchanged (Serbian) | PASS: same card, colours, census rows | 02-serbian-detail-etimo / -merged |
| 6 | Devter language detail looks native (Georgian, Kazakh, Avar, Turkish, Finnish, Hungarian, Abkhaz) | PASS: Etimo card in family colour, native name, speakers, branch path, word list with Latin/IPA line | 03-georgian-detail-merged, 03-kazakh-detail-dark-merged |
| 7 | District / places / ethnic overlays enabled | PASS: Avar on the map shows the adm2 district mesh, 5 home places, and the Dagestan census composition (Avars 30.5% ...) | 03-avar-map-panel-merged |
| 8 | Wheel and tree with 11 roots, no overlapping labels | PASS: labels shrink to fit (Etimo's own fit code, untouched); 5-root Etimo code path unchanged, so no size patch was needed | 04-wheel-etimo / -merged, 04-tree-merged |
| 9 | Search in a Balkan language (`voda`) and a Caucasian one (`წყალი`) | PASS: Slavic hits plus Akhvakh similar spelling; Georgian, Old Georgian, Mingrelian; filter chips list all 9 families | 05-search-voda-merged, 05-search-georgian-merged |
| 10 | Dark theme | PASS: new family colours readable on dark land | 06-dark-map-etimo / -merged |
| 11 | Mobile 390 px | PASS: no horizontal scroll (scrollWidth 390), bottom tab bar intact | 07-mobile-* |
| 12 | Console errors | PASS: 0 errors over map, A-Z, wheel, search and 6 language views (the favicon 404 Etimo also had is fixed with an empty data icon). One DevTools "form field without id" notice exists in Etimo too | list_console_messages |
| 13 | UI languages en, sr, sc, sq switch without missing strings for new content | PASS: region tabs, family names (chips, wheel, cards), vitality labels (historical, extinct), language and place names, and all 102 Devter branch names translated in sr/sq (sc derived) | locale run in Chrome |
| 14 | German (de) UI locale | REMOVED (user decision): menu shows English, Shqip, Српски/Srpski; a stored `de` falls back to English | menu check in Chrome |
| 15 | Family colours: CIEDE2000 >= 20, contrast >= 3:1 | PASS: min 22.2 (light) and 20.2 (dark) for every pair with a new family; contrast 3.9 to 15.6:1. Etimo's own Greek/Romance pair stays 19.0 in dark (unchanged) | palette.py |
| 16 | Stale counts fixed | PASS: "57 languages" is now the computed 209 (en/sr/sq), "5 families" is now 9, tagline lists the 9 families, About text names the Devter sources | apply-patches.py P15-* |
| 17 | Title stays "Etimo"; Georgian fonts loaded | PASS: Noto Serif Georgian and Noto Sans Georgian in the font link and both stacks | P20-* |
| 18 | Files owned by the perf/regional-data branch untouched | PASS: no change to regional-layer.js, country-data.js, country-sources.js, data/countries/*, data/regional-* | git diff main --stat |

## New colours

| family | light | dark | pin shape |
|---|---|---|---|
| Caucasian | `#d05418` | `#ea702c` | hexagon |
| Turkic | `#5b5500` | `#e1f15d` | triangle (point down) |
| Uralic | `#06899d` | `#44d4e2` | plus |
| Mongolic | `#8b186c` | `#d553ac` | star |

Per-language shades for the 131 Devter languages follow Etimo's pattern: the hue walks across the
family's band in tree order while lightness cycles through Etimo's levels (`palette.language_shades`).

## Intentional differences from the old Etimo

- Map colours no longer overlap anywhere (user request). Where Etimo's own areas overlapped (for
  example Catalan inside Spanish, Montenegrin and Serbian, dialect circles over Albanian), the
  smaller area now owns the spot. Hover and selection still use each language's full area.
- Devter's family diaspora shading is shown: Turkic over Germany and the Low Countries, Uralic in
  Scandinavia, Slavic over Central Asia/Siberia outside the home zones. This is most visible in
  dark mode (06 screenshots). One line in `merge_dia` removes it if unwanted.
- Region tabs: 6 added (Northern Europe, Caucasus, Dagestan, Volga & Urals, "Anatolia, Iran &
  Central Asia" (Devter's colliding `casia`, renamed `casia2`), Siberia, Mongolia & China).
  Devter's "Europe" group was split: Gagauz and Rumelian Turkish to Balkans, Karaim to Eastern
  Europe, Hungarian to Central Europe, Finnic and Sami to Northern Europe.
- Home specimen card cycles 6 scripts (adds Georgian and Finnish); word spotlight draws from all 9
  families.
- Taxonomy: Devter's 41 extra meanings were placed in Etimo's subcategories (all already have
  sr/sq labels) and 12 Devter synonyms added, so Etimo entries with those meanings now also show in
  browse-by-category.

## Known gaps

- `site/data/lexicon.json` is now 5.1 MB and still blocks first render (Etimo's boot design). Serve
  with gzip/brotli (Cloudflare does by default).
- `Yakut`'s northern edge lies beyond Etimo's hillshade raster (the raster ends near 72N at 130E),
  so that strip has no relief. Siberian shapes appear rotated (Etimo's frame is centred on 30E), as
  decided.
- Devter's pre-projected relief layer (`topo.json`) and its own city-label code are not used; its
  98 extra cities were added to Etimo's city list instead.
- `regional-layer.js` country shading (`dominant` map) still covers only Etimo's countries; that
  file belongs to the parallel perf branch.
- German strings that Etimo already had remain in the bundle but are unreachable.
- The A-Z key for Devter Latin-script words is the spelling (as in Devter); Etimo's own Latin
  words still sort by their IPA (existing Etimo behaviour, unchanged).
