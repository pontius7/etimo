# Removed on 2026-11-14, kept for reuse

Nothing here is published or read by the build. Everything is also in git history (the commit before the removal is
`6148fb9`, the removal is `5b40cd2`).

| Kept here | What it is | Why it was removed | To bring it back |
|---|---|---|---|
| `data/borders-10m.json` (852 KB) | Country borders at 1:10m, the old map's border lines | No script, page or build step referred to it | copy to `site/data/` |
| `data/greece-10m.json` (89 KB) | Greece's outline at 1:10m (Athos and the islands in detail) | same | copy to `site/data/` |
| `vendor/maplibre-gl.css` (72 KB) | MapLibre's own style sheet, version 6.18.0 | The page never loaded it; the few rules the map needs are in `src/styles/v64.css` | copy to `site/map-next/vendor/` and link it from `src/page.html` |
| `old-map-code.patch` | The page code of the retired SVG map: the `GL` switch and every branch behind it, the old zoom handling (`Dt`, `kPaint`, `kEnd`), the old map's `zones`, `dias`, `adm`, `adm2` groups with their hover, click and colouring code, and unused helpers | Could never run: the engine map is always on | `git apply -R archive/removed-2026-11-14/old-map-code.patch` (against `src/app` as of `5b40cd2`; later changes may need a hand merge) |
| `removed-styles.patch` | 164 style rules and the animation `lpin` (old controls and lists such as `.mdon`, `.mtl`, `.gbtn`, `.llist`, `.kpill`, and unused utility classes) | No script, page, build script or content file could produce their class names | `git apply -R archive/removed-2026-11-14/removed-styles.patch`, or copy single rules out of it |

Not kept here because nothing was lost:
- The three hashed copies of the relief in `site/h/` were duplicates; the originals are `site/data/shade.avif`, `shade-s.avif`, `shade.webp`.
- The five GitHub branches deleted that day were fully inside `main`. Their last commits, if a branch is ever wanted
  again (`git branch <name> <commit>`): `fix/map-colors` c76c507, `integrate` 8145410, `map-engine` fa73423,
  `merge/devter` 3907dc4, `perf/regional-data` d12a13c.

Rule from that day on: whatever a change removes that could be reused (data, shapes, word lists, texts, images, working
code) is moved to `archive/` with a line here or in a README beside it, not deleted.
