# Etimo — universal dictionary

Merged app: Etimo's engine and design + Devter's languages (and more to come).

- `site/` — the deployable static site (no build step). Cloudflare Pages: build command *none*, output directory `site`.
- `reference/` — untouched copies of the two original Claude artifacts. Never edit.
- `scripts/` — data build/merge tools.

Run locally: `python3 -m http.server 8080 -d site` → http://localhost:8080

## Rebuilding the merge

See `docs/MERGE-QA.md`. In short: `.venv/bin/python scripts/merge/merge-data.py` (needs
`scripts/merge/requirements.txt`), then `python3 scripts/merge/apply-patches.py`.
