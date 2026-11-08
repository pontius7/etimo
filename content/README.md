# Adding words and languages

Everything you add lives in this folder. The original apps in `reference/` are never touched;
the build merges your files on top of them every time, so rerunning never duplicates anything.

## 1. Add words

Put a CSV file in `content/words/` (any name, e.g. `my-serbian-words.csv`). Columns:

| column | required | meaning |
|---|---|---|
| language | yes | language name exactly as on the site in English (e.g. `Serbian`, `Kazakh`, `Gheg Albanian`) |
| word | yes | the word in its own script |
| meaning | yes | English meaning, e.g. `water`. Use the same wording as the site so it lands in the right category |
| latin | no | Latin spelling for non-Latin words. Left empty, Cyrillic is transliterated automatically |
| ipa | no | pronunciation without slashes. Left empty, Latin-script words get a rule-based reading |
| source | no | where the word comes from (shown as the source). Defaults to the file name |

`content/words/_template.csv` is an empty starting file. Save CSVs as UTF-8 (Excel: "CSV UTF-8").

### Or: add words in a Google Sheet

1. Make a Google Sheet. Row 1 = `language,word,meaning,latin,ipa,source` (one per column).
2. Share -> General access -> **Anyone with the link** -> **Viewer**.
3. Paste its link on a new line in `content/sheets.txt` (several sheets = several lines).

`./scripts/add-words.sh` downloads each sheet to `content/words/sheet-1.csv` (2, 3...) before
building, so the sheet is checked and de-duplicated like any CSV. An error saying
`sheet-1.csv line 12` means row 12 of the sheet. Without internet the last download is used.

### Big dictionaries and dialect labels (two tiers)

Any CSV (or `.csv.gz` for files over ~90 MB) in `content/words/` is split automatically:

- **Core**: rows whose meaning is a meaning the site already shows go into `site/data/lexicon.json`
  and land in their category (at most 3 imported words per language and meaning). Dictionary glosses
  such as `(noun) steam, vapor | mist` are matched on their first gloss pieces.
- **Full dictionary**: every other row goes to `site/h/dict/<language>.<hash>.json`, loaded only when
  someone opens that language's "Full dictionary" or a search result from it. A search index
  (`site/h/search/<version>/`) lets the main search find these words from any screen.

The `language` column may also be a label such as `Croatian (Kajkavian)` or `Kazakh (Cyrillic)`:
`content/language-aliases.csv` (`label,site_language,dialect_tag,note`) maps each label to a site
language. A dialect with its own site language goes there (`Greek (Pontic)` -> Pontic Greek);
otherwise the dialect is kept in the source shown with the word (`Wiktionary · Kajkavian`).
`SKIP` leaves a label out on purpose (with a note). An unknown label stops the build and lists it.
Pure script notes (`(Latin)`, `(Cyrillic)`, `(Arabic script)`) need no row.
`content/import-report.txt` shows, per label, where its rows went (core / dictionary / duplicate / skipped).

Search uses one shared function (`site/search-key.js`, tested by `scripts/merge/test-search-key.js`)
for the index and for what is typed: plain Latin letters find special letters and other scripts
(`voda` finds вода, `s` finds š/ш, `sh` narrows to them, `zena` finds žena/жена).

### Duplicates

The build skips a row when the same word with the same meaning already exists in that language,
either already on the site or earlier in your CSVs. Differences that are ignored: capitals, extra
spaces, invisible characters, look-alike apostrophes and dashes, Arabic/Persian letter variants and
vowel marks, Hebrew vowel points, and Cyrillic vs Latin spelling (`вода` = `voda` for Serbian,
Montenegrin, Bosnian, Croatian, or when the `latin` column matches). Real letter differences count
as different words (`ujë` ≠ `uje`), and so do different meanings and different languages.

Every build writes `content/duplicates-report.txt`. It lists each skipped row with its file and
line, what it duplicated, and any row whose ipa, latin or source differed from the entry that
was kept.

## 2. Add a language (optional)

Copy `content/languages/_example.json.txt` to `content/languages/<name>.json` and fill it in.
`family` must be one of: Slavic, Iranian, Albanian, Greek, Romance, Caucasian, Turkic, Uralic,
Mongolic (that gives it its colour). `lat`/`lon` place the pin. `area` is optional: a ring of
`[lon, lat]` points for its home region; without it the map draws an approximate circle sized by
speakers. `path` builds its branch in the wheel and tree.

Everything else updates by itself: the pin, zone and wheel slice get a shade of the family colour
(in Etimo's tonal steps), the language joins search, A-Z, lists and its family filter. Optional
extra fields:

| field | effect |
|---|---|
| `name_sr`, `name_sq` | language name in Serbian (Latin; Cyrillic is derived) and Albanian |
| `place_sr`, `place_sq` | the `place` text in Serbian and Albanian |
| `region` | adds it to a region tab: `west`, `ital`, `cee`, `east`, `nord`, `balk`, `grk`, `cauc`, `dag`, `volga`, `iran`, `casia`, `casia2`, `sib` |
| `color` | your own map colour `#rrggbb` instead of the automatic shade |

## 3. New meanings (optional)

A meaning the site doesn't know is still searchable but not listed under a category. To place it,
add a row to `content/meanings.csv`: `meaning,subcategory,sr,sq` (subcategory = an existing one
such as `Water`, `Movement`, `Religion & magic`; sr/sq = Serbian and Albanian labels).

## 4. Build and check

```
./scripts/add-words.sh
```

It rebuilds `site/`, checks the map, and prints a report: for every word, the language, its
family and map position, and the category it landed in, plus close matches for any meaning
without a category. A mistake (unknown language, missing column) stops the build and names the
file and line. Then preview with `python3 -m http.server 8092 -d site`.

Note: `site/_headers` lets browsers cache `data/*` for a day. The startup files, dictionaries and
search index are copied to `site/h/` under content-hashed names and cached for a year: a rebuild
gives them new names, so visitors get new words right away.
