# Etimo

One app: Etimo's design with Etimo's and Devter's languages (209 languages, 9 families).

| folder | what |
|---|---|
| `site/` | the website (static, no build step). Deploy this folder |
| `content/` | **your additions**: words, languages, meanings. See `content/README.md` |
| `reference/` | untouched originals of both apps. Never edit |
| `scripts/` | the build (`add-words.sh`, `merge/`) |
| `docs/` | merge spec, QA checklist, screenshots |

## Everyday use

1. Add words to a CSV in `content/words/`, or a language as JSON in `content/languages/`.
2. Run `./scripts/add-words.sh`. It rebuilds `site/`, checks the map, and prints where each word
   and language landed (map position, colour family, category).
3. Preview: `python3 -m http.server 8092 -d site`, then open http://localhost:8092
4. Commit and push; the host serves `site/`.

First run sets up a Python environment in `.venv` (needs Python 3 and Node installed).

## How the build works

- `scripts/merge/merge-data.py` writes `site/data/*` from both reference apps plus `content/`:
  merges words and languages, re-projects Devter's areas into Etimo's map, makes zones not overlap
  (nested same-family areas blend into their parent until selected).
- `scripts/merge/apply-patches.py` writes `site/index.html` from Etimo's original with checked
  find/replace patches (families, colours, labels, translations, navy interface).
- `scripts/merge/check-overlaps.py`, `palette.py`, `words-report.py`: checks and reports.

Do not edit `site/index.html` or `site/data/*` by hand; rerun the build instead.
Hosting: Cloudflare Pages, build command none, output directory `site`.
