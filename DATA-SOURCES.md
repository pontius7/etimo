# Data sources and their terms

Every third-party source the repository uses or contains. The "Terms" column gives only what the repository itself
documents (README, `content/README.md`, `scripts/map-next/README.md`, script headers, the credit line on the map,
the `source` column of the word lists). Where the repository documents no terms it says **terms not recorded**: nothing
here is a guess. Before reusing any part, read the source's own terms at the link given.

The code is under the PolyForm Noncommercial License 1.0.0 ([LICENSE](LICENSE)); the owner's own content under
CC BY-NC-SA 4.0 ([LICENSE-CONTENT.md](LICENSE-CONTENT.md)). Etimo is a non-commercial project.

## Notices the site shows (keep them)

The map's credit line (`.mcred`, built in `src/app/6-app-screens-and-startup.js`) reads:

> © OpenStreetMap · © EuroGeographics for the administrative boundaries · Relief: Terrain Tiles (USGS, NOAA, Copernicus)

"© OpenStreetMap" links to https://www.openstreetmap.org/copyright. The map's country outlines are Natural Earth's default view.

## Boundaries and geography

| Source | What it is | Where in the repo | Terms as documented in the repo | Link the repo gives |
|---|---|---|---|---|
| EuroGeographics / GISCO (NUTS 2024, LAU 2024) | Official EU regions, municipalities (Europe's current regions; North Macedonia's 80 municipalities) | `scripts/merge/current-regions.py` (downloads into `.cache/current-regions/`), `site/data/today.json`, `site/data/regional/geo/` | "© EuroGeographics for the administrative boundaries", shown on the map; the owner states that part of the boundary data allows non-commercial use only; the full terms are not recorded in the repo | https://gisco-services.ec.europa.eu/distribution/v2/ |
| OpenStreetMap | First-level regions outside the EU's data (Kazakhstan, Iran, Azerbaijan, Kyrgyzstan, Turkmenistan, Mongolia, Pakistan and others), Montenegro's municipalities | `scripts/merge/osm-regions.json` (frozen by `scripts/merge/osm-snapshot.py`), `site/data/montenegro-municipalities.geojson`, `site/data/today.json` | ODbL 1.0, © OpenStreetMap contributors (`osm-snapshot.py`, `osm-regions.json` meta); credited on the map | https://www.openstreetmap.org/copyright |
| Natural Earth 1:10m countries (via world-atlas 2.0.2) | Land, coast, country borders of the map | fetched by `scripts/map-next/build.py` into `.cache/map-next/`; outlines in `site/map-next/data/` and the tiles | public domain (`scripts/map-next/build.py` header) | https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-10m.json |
| Older outlines and borders (`world-50m.json`, `world-50s.json`) | Outlines the page and the data build use | `site/data/`, copies in `reference/` | terms not recorded (origin not recorded in the repo) | none recorded |
| geoBoundaries (BIH ADM3) | Municipality outlines of Bosnia and Herzegovina | `scripts/areas/geo/BIH-ADM3.geojson` | public domain (`scripts/areas/census-areas.py` header, README) | none recorded |
| geoBoundaries (other countries) | Used to check regions in the 2026-11-12 audit | README, "Outside the EU's data" | not used as a data file; terms not recorded | none recorded |
| Wikimedia Commons maps | Reference images traced for Montenegro (`MontenegroLanguage2011.PNG`, Lazar Ilic) and used as the reference for Bulgaria, Serbia (Vlach) and Belarus | `scripts/areas/README.md`, `site/data/montenegro-areas.json`, `site/data/country-sources.json` | terms not recorded | https://commons.wikimedia.org/wiki/File:2021_Bulgarian_Census_Majority_Mother_Tongue_by_Municipality.png, https://commons.wikimedia.org/wiki/File:Belarusian_in_Belarus_2019.jpg (others in `site/data/country-sources.json`) |

## Relief and elevation

| Source | What it is | Where in the repo | Terms as documented in the repo | Link the repo gives |
|---|---|---|---|---|
| Mapzen / AWS Terrain Tiles (terrarium) | Elevation data behind the mountain shading | `scripts/relief/` (`build.sh`, `dem_tiles.py`); output `site/data/shade.avif`, `shade-s.avif`, `shade.webp` | "public" (`scripts/relief/build.sh`); credited on the map as "Terrain Tiles (USGS, NOAA, Copernicus)"; no licence text recorded | https://registry.opendata.aws/terrain-tiles/ |

## Census and language statistics

Each country's tables are in `site/data/tables/`, `site/data/regional/` and `site/country-data.js`; the sources are
registered in `site/data/country-sources.json` (shown on the site under "Sources" / "Regions & municipalities").
The repo records the publishers and links below, **not their reuse terms: terms not recorded for every row.**

| Country, year | Publisher as registered | Link the repo gives (first of its list) |
|---|---|---|
| Albania 2023 | INSTAT | https://www.instat.gov.al/en/themes/censuses/census-of-population-and-housing/ |
| Bosnia and Herzegovina 2013 | Census publication index | https://www.popis.gov.ba/popis2013/knjige.php |
| Bulgaria 2021 | NSI | https://www.nsi.bg/en/infostat/2000 |
| Croatia 2021 | DZS | https://dzs.gov.hr/vijesti/objavljeni-konacni-rezultati-popisa-2021/1270 |
| Greece (documented distributions, 1951 census) | RISE UP / LanguageMap; European Parliament study 2023 | https://www.languagemap.eu/countries/el/ |
| Kosovo 2024 | KAS | https://askdata.rks-gov.net/pxweb/en/ASKdata/ASKdata__Census%20population__1_Demographic_Characteristics/census2024_22.px/ |
| Montenegro 2023 | MONSTAT (municipality geometry: © OpenStreetMap contributors) | https://monstat.org/eng/novosti.php?id=4012 |
| North Macedonia 2021 | State Statistical Office | https://www.stat.gov.mk/publikacii/2022/Statistichki-atlas-mk-en-web.pdf |
| Romania 2021 | INS; ISPMN language map | https://www.recensamantromania.ro/rezultate-rpl-2021/rezultate-definitive/ |
| Serbia 2022 | Statistical Office | https://stat.gov.rs/en-us/vesti/20230616-st/?a=0&s=1104 |
| Slovenia 2002 | SURS | https://www.stat.si/popis2002/en/rezultati_html/reg-t-07eng.htm |
| Turkey 1965 baseline | published spatial study; Mendeley dataset | https://data.mendeley.com/datasets/rrtrfhcxkn/1 |
| Austria 2001 | Federal Chancellery, state report | https://www.bundeskanzleramt.gv.at/dam/jcr%3A345e6405-afc4-4fdd-807e-0a0c410bce02/6._at_staatenbericht_sprachencharta_en.pdf |
| Czechia 2021 | CZSO | https://scitani.gov.cz/language-mother-tongue |
| Germany 2023 | Destatis | https://www.destatis.de/DE/Presse/Pressemitteilungen/Zahl-der-Woche/2026/PD26_08_p002.html |
| Hungary 2022 | KSH (a secondary transcription by pop-stat.mashke.org is also linked) | https://nepszamlalas2022.ksh.hu/eredmenyek/statikus-tablak |
| Liechtenstein 2020 | Amt fuer Statistik | https://www.statistikportal.li/de/publikation/213-bevoelkerungsstruktur/2020/01/v-1/p11876 |
| Poland 2021 | GUS | https://stat.gov.pl/spisy-powszechne/nsp-2021/ |
| Slovakia 2021 | Statistical Office | https://gis.scitanie.sk/portal/apps/experiencebuilder/experience/?id=2c3fe4e67c9045c0ad5e61757c148b63 |
| Switzerland 2022-2024 | FSO | https://statistik.admin.ch/de/news/2026-0287 |
| Belarus 2019 | census portal (via Commons image and archived portal) | https://commons.wikimedia.org/wiki/File:Belarusian_in_Belarus_2019.jpg |
| Estonia 2021 | Statistics Estonia | https://andmed.stat.ee/en/stat/rahvaloendus__rel2021__rahvastiku-demograafilised-ja-etno-kultuurilised-naitajad__rahvus-emakeel/RL21431 |
| Latvia 2022 | CSB | https://data.stat.gov.lv/pxweb/en/OSP_OD/OSP_OD__apsekojumi__pieaug_izgl/PIA77.px |
| Lithuania 2021 | Statistics Lithuania (secondary transcription by pop-stat.mashke.org also linked) | https://osp.stat.gov.lt/en/2021-gyventoju-ir-bustu-surasymo-rezultatai/tautybe-gimtoji-kalba-ir-tikyba |
| Moldova 2024 | NBS | https://statistica.gov.md/ro/rezultatele-finale-ale-recensamantului-populatiei-si-locuintelor-2024-caracteris-10121_62043.html |
| Russia 2021 | Rosstat | https://rosstat.gov.ru/vpn/2020/Tom5_Nacionalnyj_sostav_i_vladenie_yazykami |
| Ukraine 2025 (survey) | KIIS | https://kiis.com.ua/?cat=reports&id=1513&lang=ukr&page=1&t=10 |
| Italy, South Tyrol 2024 | ASTAT | https://astat.provinz.bz.it/de/publikationen/ergebnisse-sprachgruppenzahlung-2024 |
| China 2020 census | used for the Uyghur and Inner Mongolian rows of `content/minority-areas.csv` | source named in that file |

Census-derived area files made by `scripts/areas/census-areas.py` (`croatia-areas.json`, `bosnia-areas.json`) are derived from the tables above and the outlines above.

## Dictionaries and word lists

| Source | What it is | Where in the repo | Terms as documented in the repo | Link the repo gives |
|---|---|---|---|---|
| Wiktionary via kaikki.org | About 353,000 entries of `balkan-dictionaries.csv` | `content/words/balkan-dictionaries.csv`, built into `site/h/dict/` and `site/h/search/` | CC BY-SA 4.0 (the `source` column of each row) | kaikki.org; en.wiktionary.org |
| en.wiktionary.org | 900 further rows; Swadesh list appendices in `expanded-eurasian-lexicon.csv` | `content/words/` | CC BY-SA 4.0 (`source` column of the 900 rows); the appendix rows give the page address only, terms not recorded in the row | https://en.wiktionary.org/wiki/Appendix:Turkic_Swadesh_lists (and the other appendices named in the `source` column) |
| Dalametra 1906, Dictionar macedo-roman | Aromanian entries by OCR | `content/words/balkan-dictionaries.csv` | public domain (`source` column, with the page) | none recorded |
| Unicode CLDR (also via Babel CLDR) | Words in `expanded-eurasian-lexicon.csv`; country names in Serbian and Albanian (README, "Interface languages") | `content/words/expanded-eurasian-lexicon.csv`, `src/app/2-app-text-and-tables.js` | terms not recorded | https://github.com/unicode-org/cldr |
| Glottolog 5 | Family and branch classification of the Germanic and Baltic languages | `content/languages/`, README, "Germanic and Baltic" | terms not recorded (README: "literature-referenced") | https://glottolog.org |
| Etimo German interface glosses | 1,370 unreviewed glosses kept from the retired German interface | `content/words/german.csv`, `archive/german/` | the owner's own (CC BY-NC-SA 4.0, see LICENSE-CONTENT.md) | none |
| Google Sheets listed in `content/sheets.txt` | Optional word lists the owner pastes in | fetched by `scripts/merge/fetch-sheets.py` | none listed at present | the links in that file |

## Fonts

Self-hosted from Google Fonts by `scripts/fonts/self-host.py` into `site/fonts/` and `src/styles/fonts.css`: Jost, Manrope, Noto Serif Display,
Noto Naskh Arabic, Noto Sans Arabic, Noto Sans, Noto Serif Georgian, Noto Sans Georgian.
Terms as documented: "under the SIL Open Font License, which allows this" (header of `self-host.py`). Link: https://fonts.google.com

## Software

| Source | What it is | Where in the repo | Terms as documented in the repo | Link the repo gives |
|---|---|---|---|---|
| MapLibre GL JS 6.18.0 | The map engine | `site/map-next/vendor/` | 3-Clause BSD (file header of `maplibre-gl.mjs`, `maplibre-LICENSE.txt`) | https://github.com/maplibre/maplibre-gl-js/blob/v6.18.0/LICENSE.txt |
| tippecanoe | Tool that cuts the map tiles (not part of the repo) | its output is `site/map-next/tiles/`; run by `scripts/map-next/build.py` | tool terms not recorded; the tiles contain the boundary and language-area data above and carry those terms | (`brew install tippecanoe`) |
| React 19 and d3 | Pasted into the page code | `src/app/1-libraries-ui.js`, `src/app/3-libraries-map.js` | terms not recorded in the repo (the libraries' own licence headers, if any, are kept in those files) | none recorded |
| Shapely (and numpy) | Python geometry library the build uses | `scripts/merge/requirements.txt` | not distributed in the repo; terms not recorded | none |

## The two original apps

| Source | What it is | Where in the repo | Terms as documented in the repo | Link the repo gives |
|---|---|---|---|---|
| Etimo and Devter artifacts | Untouched copies of the two published apps the site was merged from, as of 2026-11-07; the build reads their data and the colour check compares against them | `reference/etimo-artifact/`, `reference/devter-artifact/`, `reference/MANIFEST.md` | terms and authorship not recorded in the repo | https://claude.ai/artifact/6nAtAVMpd6u19vVZnkPAkv (Etimo, per `reference/MANIFEST.md`) |
