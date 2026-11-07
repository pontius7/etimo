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

## 2. Add a language (optional)

Copy `content/languages/_example.json.txt` to `content/languages/<name>.json` and fill it in.
`family` must be one of: Slavic, Iranian, Albanian, Greek, Romance, Caucasian, Turkic, Uralic,
Mongolic (that gives it its colour). `lat`/`lon` place the pin. `area` is optional: a ring of
`[lon, lat]` points for its home region; without it the map draws an approximate circle sized by
speakers. `path` builds its branch in the wheel and tree.

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

Note: `site/_headers` lets browsers cache `data/*` for a day, so returning visitors may see
new words only after that (or after a hard reload).
