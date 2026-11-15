# The two original apps (moved here from `reference/` in the S5 clean-up)

Untouched copies of the two published Claude artifacts the site was merged from, as of 2026-11-07 (`MANIFEST.md` lists every file with its checksum). Never edit them.

- **What moved out:** the files the build and the colour check still read were frozen into `data-src/original/etimo/` and `data-src/original/devter/`; they are no longer in this folder (their names are in `MANIFEST.md`).
- **Why this folder is here:** nothing builds from it any more (133 MB). `scripts/build-regional.py` reads the census sources in `etimo-artifact/data/` (default of its `--src`), only when that source data changes.
- **To bring it back:** `git mv archive/reference reference`, then copy `data-src/original/<app>/*` back over `reference/<app>-artifact/*` (`etimo` goes to `etimo-artifact`, `devter` to `devter-artifact`) for the full original, and point `E_DIR`, `D_DIR`, `D_HTML` in `scripts/merge/merge-data.py` back if you want the build to read it.
