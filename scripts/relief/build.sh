#!/bin/sh
# Rebuild the map's shaded relief (site/data/shade.avif, shade-s.avif, shade.webp).
# Run only to change the relief's look; then run ./scripts/add-words.sh. Needs Python 3 and the internet.
# Elevation: Mapzen/AWS Terrain Tiles (terrarium), public, https://registry.opendata.aws/terrain-tiles/
set -e
cd "$(dirname "$0")/../.."
W=.relief-work; mkdir -p "$W/dem"
[ -x "$W/venv/bin/python" ] || { python3 -m venv "$W/venv" && "$W/venv/bin/pip" install -q -r scripts/relief/requirements.txt; }
PY="$W/venv/bin/python"
"$PY" scripts/relief/dem_tiles.py 6 > "$W/dem/list.txt"
(cd "$W/dem" && xargs -P 24 -I{} sh -c 'f=$(echo {} | tr / _).png; [ -s "$f" ] || curl -s --retry 3 -o "$f" "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{}.png"' < list.txt)
"$PY" scripts/relief/relief.py "$W/dem" 6 "$W" 2
# the look: smoothing (map pixels), vertical exaggeration, shadow strength
"$PY" scripts/relief/shade.py "$W/elev-z6-s2.npy" "$W/alpha-master.png" 1.6 26 1.5
"$PY" scripts/relief/export.py "$W/alpha-master.png" site/data
