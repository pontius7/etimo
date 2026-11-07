#!/bin/sh
# Rebuild the site after editing content/ (words, languages, meanings). See content/README.md.
set -e
cd "$(dirname "$0")/.."
[ -x .venv/bin/python ] || { python3 -m venv .venv && .venv/bin/pip install -q -r scripts/merge/requirements.txt; }
.venv/bin/python scripts/merge/merge-data.py
python3 scripts/merge/apply-patches.py | head -1
.venv/bin/python scripts/merge/check-overlaps.py | tail -1
python3 scripts/merge/words-report.py
