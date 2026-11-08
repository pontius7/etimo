# Etimo

One app: Etimo's design with Etimo's and Devter's languages (209 languages, 9 families).

| folder | what |
|---|---|
| `site/` | the website (static, no build step). Deploy this folder |
| `content/` | **your additions**: words, languages, meanings. See `content/README.md` |
| `reference/` | untouched originals of both apps. Never edit |
| `scripts/` | the build (`add-words.sh`, `merge/`) |
| `docs/` | merge spec, QA checklist, screenshots |

## Adding a word or language

1. Add words to a CSV in `content/words/`, or a language as JSON in `content/languages/` (see `content/README.md`).
2. **Automatic:** keep `./scripts/watch.sh` running in a terminal. Every time you save a file in `content/`
   it rebuilds `site/`, re-checks the map and prints a short result. One-off: `./scripts/add-words.sh`.
   Run the watcher at every login: `sed "s#__REPO__#$PWD#g" scripts/launchd/com.etimo.watch.plist.template > ~/Library/LaunchAgents/com.etimo.watch.plist && launchctl load ~/Library/LaunchAgents/com.etimo.watch.plist`
   (stop: `launchctl unload ~/Library/LaunchAgents/com.etimo.watch.plist`).
3. Preview: `python3 -m http.server 8092 -d site`, then open http://localhost:8092
4. Commit and push; the host serves `site/`. Install the safety net once: `sh scripts/hooks/install.sh`
   (a commit is refused if `site/` is stale or the colour check fails).

First run sets up a Python environment in `.venv` (needs Python 3, Node and Google Chrome).

## How colours are derived (one source of truth)

`scripts/merge/palette.py` is the only place colours come from: five family colours kept exactly as in
Etimo, four new families, and one colour per language (Etimo's own table for its 78 languages; for any
new language a shade of its family colour, hue walking along its branch of the tree, lightness cycling).
The build writes that table into `site/index.html`; map zones, pins, rings, chips, cards, the wheel and the
tree all read it, in light and dark. Every language paints in its own colour, never its parent's.
Override one language with `"color": "#rrggbb"` in its JSON. `scripts/merge/check-colors.py` (runs in every
build) opens the app in Chrome in both themes and fails, naming the languages, unless map = palette = wheel,
the original 78 look identical to `reference/`, and every family has a colour. Before/after images: `docs/color-fix/`.

## How the build works

- `scripts/merge/merge-data.py` writes `site/data/*` from both reference apps plus `content/`:
  merges words and languages, re-projects Devter's areas into Etimo's map, makes zones not overlap
  (nested areas keep their own colour; only their drawn shape is clipped to the parent).
- `scripts/merge/apply-patches.py` writes `site/index.html` from Etimo's original with checked
  find/replace patches (families, colours, labels, translations, navy interface).
- `scripts/merge/check-overlaps.py`, `check-colors.py` (+ `probe-colors.mjs`), `palette.py`, `words-report.py`: checks and reports.
- `scripts/watch.py` (auto-rebuild), `scripts/hooks/` (pre-commit), `scripts/launchd/` (run watcher at login).

Do not edit `site/index.html` or `site/data/*` by hand; rerun the build instead.
Hosting: Cloudflare Pages, build command none, output directory `site`.
