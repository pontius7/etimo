#!/bin/sh
# Rebuild the site after editing content/ (words, languages, meanings). See content/README.md.
set -e
cd "$(dirname "$0")/.."
[ -x .venv/bin/python ] || { python3 -m venv .venv && .venv/bin/pip install -q -r scripts/merge/requirements.txt; }
python3 scripts/merge/fetch-sheets.py
node scripts/merge/test-search-key.js | tail -1
.venv/bin/python scripts/merge/merge-data.py
.venv/bin/python scripts/merge/current-regions.py   # out-of-date regions -> current official ones (NUTS / LAU 2024; OSM snapshot outside the EU)
python3 scripts/merge/region-langs.py      # languages with numbers per region: census tables + content/region-languages.csv
python3 scripts/build-page.py
.venv/bin/python scripts/merge/check-overlaps.py | tail -1
python3 scripts/merge/words-report.py
# Colour check: map = palette = wheel for every language, originals identical to the reference.
# Needs Google Chrome and Node. Skip only if you must: ETIMO_SKIP_COLOR_CHECK=1 ./scripts/add-words.sh
if [ -z "$ETIMO_SKIP_COLOR_CHECK" ]; then python3 scripts/merge/check-colors.py; else echo "colour check SKIPPED"; fi
