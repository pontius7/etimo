# Kept from the retired old map (2026-11-13)

The site's map is drawn only by the map engine (MapLibre, `site/map-gl.js`). The old SVG map (`?map=svg`, and the fallback
when the engine could not start) was retired on 2026-11-13; when the engine cannot start the map box now shows a short note
(`kNoMap` in `src/app/6-app-screens-and-startup.js`). Its drawing code is in git history (`site/regional-layer.js` at commit
05bafd0); only the rules the engine and the data build share stayed in that file.

Kept here because they were hand-made and could be reused (nothing here is published or read by a build):

| File | What |
|---|---|
| `athos.json` | the outline of Mount Athos, traced by hand, that the old map drew as its own area |
| `regional-sources.json` | the source notes the old map showed for its regional evidence layers |
