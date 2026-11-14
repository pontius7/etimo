#!/usr/bin/env python3
"""Data for the MapLibre map (site/map-next/).

Run after the normal site build, with the project's Python (it has the geometry library):
    python3 scripts/build-page.py && .venv/bin/python scripts/map-next/build.py

Nothing here is typed in by hand. Everything the map shows comes from the files the site already uses:
  language areas     site/data/terr.json         (made by scripts/merge/merge-data.py from the sources and content/)
  language list      site/data/languages.json    (pin position, family, own name, census rows)
  language colours   site/data/palette.json   (the one palette build-page.py writes from scripts/merge/palette.py and content/)
  main language of a country   the census rows above, plus the short list in site/regional-layer.js (same rule as the site)
  family names       site/index.html (where each name sits); their colours: site/data/palette.json
  lighter tint       content/minority-areas.csv  (min / plu rows)
  detailed areas     site/data/albanian-dialects.json, vlach-areas.json, serbia-areas.json, greece-areas.json,
                     montenegro-areas.json, and the census countries of CENSUS_AREAS (croatia-, bosnia-areas.json); which generic pins and zones they replace: the lists in site/regional-layer.js
  region lines       site/data/today.json        (regions inside a country)
  district lines     site/data/adm2.json
  relief             site/data/shade*.avif       (placed by RELIEF below, same numbers as scripts/relief/relief.py)
  coast and borders  Natural Earth 1:10m countries (public domain, world-atlas 2.0.2; fetched once into .cache/map-next/)
So: change content or colours the usual way, rebuild, and this map follows.

One set of outlines. Land, coast, country borders and the edge of every language area all come from the same
country shapes. A language area is cut by those shapes: what spills a little over a border is removed, and the
thin gap left between an area and the border (or the coast) is given to the area next to it. A colour can
therefore only end on a line that is drawn. Region and district lines are trimmed to the same shapes.

Etimo's map shape. MapLibre draws in the web-map projection, which enlarges the north. Etimo's map is a conic
projection (d3 geoConicConformal, parallels 35/60, centred on 30 E; see scripts/relief/lcc.py), and the areas
are stored in it, in "map units". This script hands MapLibre map units disguised as longitude/latitude, chosen
so that MapLibre's own projection turns them back into exactly the same picture (`fake()`).
"""
import json
import math
import os
import re
import sys
import time
import urllib.request

try:
    from shapely import STRtree, area as areas_of, get_parts, make_valid, voronoi_polygons
    from shapely.geometry import LineString, MultiPoint, MultiPolygon, Point, Polygon, box
    from shapely.ops import unary_union
except ImportError:
    sys.exit('map-next: run with the project Python:  .venv/bin/python scripts/map-next/build.py')

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA = os.path.join(ROOT, 'site', 'data')
OUT = os.path.join(ROOT, 'site', 'map-next', 'data')
CACHE = os.path.join(ROOT, '.cache', 'map-next')
WORLD_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-10m.json'
sys.path.insert(0, os.path.join(ROOT, 'scripts', 'merge'))
import topo  # noqa: E402

RELIEF = (-1490, -1670, 3150, 1660)      # x, y, width, height of the relief image in map units
CX, CY = RELIEF[0] + RELIEF[2] / 2, RELIEF[1] + RELIEF[3] / 2
C = 1 / 16384                             # one map unit as a share of MapLibre's world width
KEEP = (RELIEF[0] - 400, RELIEF[1] - 400, RELIEF[0] + RELIEF[2] + 400, RELIEF[1] + RELIEF[3] + 400)
VIEW = (RELIEF[0] - 60, RELIEF[1] - 60, RELIEF[0] + RELIEF[2] + 60, RELIEF[1] + RELIEF[3] + 60)   # the part of the world the map is about
# How fine the outlines are (map units; 1 unit is about 6.4 km). Bends smaller than this are dropped.
DETAIL_NEAR = 0.03   # within NEAR of a language area: about 190 m
DETAIL_VIEW = 0.15   # elsewhere on the map: about 1 km
DETAIL_FAR = 1.0     # the margin around it, only there to fill tall or wide screens
NEAR = 25
THIN = 0.6        # an overshoot or a gap narrower than twice this (about 7.5 km) is treated as a drawing error
BASE_MIN = 40     # a country is tinted with its main language when that language has at least this share (%)
# a language without a drawn area gets a circle around its pin, by number of speakers (same steps as the site): (below, km)
CIRCLE_KM = ((1e3, 15), (1e4, 25), (1e5, 40), (1e6, 70), (1e7, 140), (float('inf'), 200))


def load(name):
    with open(os.path.join(DATA, name), encoding='utf-8') as f:
        return json.load(f)


# ------------------------------------------------------------------ projection
_ty = lambda y: math.tan((math.pi / 2 + y) / 2)
_Y0, _Y1 = math.radians(35), math.radians(60)
_N = math.log(math.cos(_Y0) / math.cos(_Y1)) / math.log(_ty(_Y1) / _ty(_Y0))
_F = math.cos(_Y0) * _ty(_Y0) ** _N / _N


def project(lon, lat):
    """lon/lat -> map units (same numbers as Conic(35, 60, -30) in merge-data.py)."""
    lam = math.radians(((lon - 30 + 180) % 360) - 180)
    r = _F / _ty(math.radians(lat)) ** _N
    return 1000 * r * math.sin(_N * lam), -1000 * (_F - r * math.cos(_N * lam))


def fake(x, y):
    """map units -> the longitude/latitude MapLibre is given."""
    return [round((x - CX) * C * 360, 4), round(math.degrees(math.atan(math.sinh(-2 * math.pi * (y - CY) * C))), 4)]


def near(points, box=KEEP):
    xs, ys = [p[0] for p in points], [p[1] for p in points]
    return max(xs) >= box[0] and min(xs) <= box[2] and max(ys) >= box[1] and min(ys) <= box[3]


def polys(g):
    """All polygons inside any geometry."""
    if g.is_empty:
        return []
    if g.geom_type == 'Polygon':
        return [g]
    if g.geom_type == 'MultiPolygon':
        return list(g.geoms)
    return [p for part in getattr(g, 'geoms', []) for p in polys(part)]


def solid(g):
    """Only the polygon part of a result (set operations can leave stray points and lines).
    The parts of one result do not overlap, so they are kept as they are; merging them again was most of the
    build time. Only if they do not form a clean shape together are they merged."""
    if g.is_empty:
        return Polygon()
    ps = get_parts(g) if g.geom_type in ('Polygon', 'MultiPolygon') else polys(g)
    if len(ps) == 0:
        return Polygon()
    keep = [p for p, a in zip(ps, areas_of(ps)) if a > 1e-7]
    if len(keep) == len(ps) and g.geom_type in ('Polygon', 'MultiPolygon'):
        return g
    if len(keep) < 2:
        return keep[0] if keep else Polygon()
    m = MultiPolygon(keep)
    return m if m.is_valid else unary_union(keep)


def lines(g):
    if g.is_empty:
        return []
    if g.geom_type == 'LineString':
        return [g]
    return [l for part in getattr(g, 'geoms', []) for l in lines(part)]


def gj_polygons(g):
    return [[[fake(x, y) for x, y in ring.coords] for ring in [p.exterior, *p.interiors]] for p in polys(g) if p.area > 1e-5]


# ------------------------------------------------------------------ topologies (countries, regions, districts)
class Topo:
    """A TopoJSON file with its arcs in map units. Arcs outside the map (far west, far south) are marked unusable."""

    def __init__(self, t, detail=None, small=None):
        self.small = small          # small(polygon) -> True for islets not worth keeping
        self.t = t
        self.pts, self.ok = [], []
        for a in topo.decode_arcs(t):
            ok = all(lat > -60 and abs(((lon - 30 + 180) % 360) - 180) < 175 for lon, lat in a)
            seam = all(abs(abs(lon) - 180) < 1e-4 for lon, _ in a)             # the cut the source makes at 180 degrees
            p = [project(lon, lat) for lon, lat in a] if ok else []
            if ok and detail and len(p) > 2:
                p = list(LineString(p).simplify(detail(p), preserve_topology=False).coords)
            self.pts.append(p)
            self.ok.append(ok and not seam)

    def geoms(self, obj):
        for g in self.t['objects'][obj]['geometries']:
            yield g, (g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']] if g['type'] == 'Polygon' else [])

    def ring(self, idx):
        r = []
        for i in idx:
            seg = self.pts[i] if i >= 0 else self.pts[~i][::-1]
            r.extend(seg if not r else seg[1:])
        return r

    def shape(self, parts):
        """Polygons of one geometry that lie on the map, as one valid shape (None when there are none)."""
        out = []
        for poly in parts:
            if not all(self.pts[i if i >= 0 else ~i] for ring in poly for i in ring):
                continue                                                   # reaches outside the map
            shell, holes = self.ring(poly[0]), [r for r in map(self.ring, poly[1:]) if len(r) >= 4]
            if len(shell) >= 4 and near(shell):
                out += [q for q in polys(make_valid(Polygon(shell, holes))) if not (self.small and self.small(q))]
        return unary_union(polys(unary_union(out))) if out else None

    def shared(self, obj, same=None, box=KEEP):
        """Arcs used by exactly two geometries of `obj` (the lines between neighbours). `same(a, b)` can narrow it."""
        use = {}
        for gi, (g, parts) in enumerate(self.geoms(obj)):
            for i in {i if i >= 0 else ~i for poly in parts for ring in poly for i in ring}:
                use.setdefault(i, []).append(g)
        return [self.pts[i] for i, gs in use.items()
                if len(gs) == 2 and self.ok[i] and len(self.pts[i]) >= 2 and near(self.pts[i], box) and (same is None or same(*gs))]


def world(area_tree):
    """The precise countries, fine near language areas and coarse where the map only needs a backdrop."""
    path = os.path.join(CACHE, 'countries-10m.json')
    if not os.path.exists(path):
        os.makedirs(CACHE, exist_ok=True)
        urllib.request.urlretrieve(WORLD_URL, path)
    close = lambda g: len(area_tree.query(g, predicate='dwithin', distance=NEAR)) > 0
    detail = lambda p: DETAIL_NEAR if close(LineString(p)) else DETAIL_VIEW if near(p, VIEW) else DETAIL_FAR
    small = lambda q: not close(q) and q.area < (.05 if near(q.exterior.coords, VIEW) else 2)
    with open(path, encoding='utf-8') as f:
        return Topo(json.load(f), detail, small)


# ------------------------------------------------------------------ languages
def load_palette():
    with open(os.path.join(ROOT, 'site', 'data', 'palette.json'), encoding='utf-8') as f:
        return json.load(f)


def colour_table():
    """The language colour table: site/data/palette.json, written by scripts/build-page.py (one palette for the whole site)."""
    path = os.path.join(ROOT, 'site', 'data', 'palette.json')
    if not os.path.exists(path):
        sys.exit('map-next: site/data/palette.json not found (run scripts/build-page.py first)')
    with open(path, encoding='utf-8') as f:
        return json.load(f)['light']


def main_languages(langs):
    """Country name -> its main language, by the rule the site uses (regional-layer.js): the highest census
    share, then the site's own short list for countries without a census row."""
    best = {}
    for name, info in langs.items():
        for row in info.get('cen') or []:
            m = re.search(r'\(([\d.]+)%\)|([\d.]+)% of', str(row[1]))
            if m:
                p = float(m.group(1) or m.group(2))
                if row[0] not in best or p > best[row[0]][0]:
                    best[row[0]] = (p, name)
    js = open(os.path.join(ROOT, 'site', 'regional-layer.js'), encoding='utf-8').read()
    m = re.search(r"const MAIN_LANG=\{(Albania:[^}]*)\}", js)
    if not m:
        sys.exit('map-next: the list of main languages was not found in site/regional-layer.js')
    for a, b, v in re.findall(r"""(?:'([^']+)'|([\w ]+)):'([^']+)'""", m.group(1)):
        k = a or b
        if v in langs and k not in best:
            best[k] = (100, v)
    if 'Greek' in langs:
        best['Greece'] = (100, 'Greek')
    return {c: lang for c, (p, lang) in best.items() if p >= BASE_MIN and c != 'Montenegro'}


def area_rings(d):
    return [[tuple(map(float, p.split(','))) for p in part.rstrip('Z').split('L')] for part in d.split('M')[1:]]


def rings_shape(rings):
    """Rings as one shape, combined by the even-odd rule, as the site's SVG does."""
    g = None
    for r in sorted((r for r in rings if len(r) >= 3), key=lambda r: -abs(Polygon(r).area)):
        p = solid(make_valid(Polygon(r)))
        g = p if g is None else solid(g.symmetric_difference(p))
    return g


def area_shape(d):
    return rings_shape(area_rings(d))


def site_lists():
    """Which generic pins and zones the detailed layers replace: read from the lists in site/regional-layer.js."""
    js = open(os.path.join(ROOT, 'site', 'regional-layer.js'), encoding='utf-8').read()

    def body(pattern, what):
        m = re.search(pattern, js)
        if not m:
            sys.exit(f'map-next: the list {what} was not found in site/regional-layer.js')
        return m.group(1)
    arr = lambda n: re.findall(r"'([^']+)'", body(r"const %s=(?:new Set\()?\[(.*?)\]" % n, n))
    obj = lambda n: dict(re.findall(r"'([^']+)':'([^']+)'", body(r"const %s=\{(.*?)\}" % n, n)))
    aro, par = arr('ARO'), obj('PAR')
    hide_pin = set(arr('ADIAL')) | {'Albanian'} | set(aro) | set(arr('MEG'))
    return {'hide_pin': hide_pin, 'hide_zone': hide_pin | {'Arvanitika', 'Aromanian'} | set(par), 'dname': obj('DNAME'), 'aro': set(aro), 'meg': set(arr('MEG'))}


# Countries drawn from their census by municipality (scripts/areas/census-areas.py writes the file): (file, country as on the map).
# In each, these areas replace the broad areas of the languages they draw and cover the whole country; the areas of other
# languages there (minorities, dialects) stay. Add a country here once its file exists.
CENSUS_AREAS = (('croatia-areas.json', 'Croatia'), ('bosnia-areas.json', 'Bosnia and Herzegovina'))


def detailed_areas(lists):
    """The detailed layers: {(kind, language): shape}. The kind tells the page which rule the area follows
    (dial = Albanian dialects, vlach = Aromanian varieties, meg = Megleno-Romanian parts, shown only when chosen,
    area = Serbia and Greece, me = Montenegro)."""
    out = {}

    def add(name, kind, rename=lambda n: n):
        for n, rings in load(name).items():
            n = rename(n)
            k = kind(n) if callable(kind) else kind
            g = rings_shape([[project(p[0], p[1]) for p in r] for r in rings])
            if k and g is not None and not g.is_empty:
                out[k, n] = solid(out[k, n].union(g)) if (k, n) in out else g
    add('albanian-dialects.json', 'dial', lambda n: lists['dname'].get(n, n))
    add('vlach-areas.json', lambda n: 'meg' if n in lists['meg'] else 'vlach')
    add('serbia-areas.json', 'area')
    add('greece-areas.json', 'area')
    add('montenegro-areas.json', 'me')
    for name, _ in CENSUS_AREAS:
        add(name, 'area')
    return out


def census_countries(fitted, detail, countries):
    """The CENSUS_AREAS rule: the broad areas of the drawn languages stop at the country's border, and a gap the census
    areas leave inside it (a municipality without an outline) goes to the census area sharing most of its edge."""
    for name, cname in CENSUS_AREAS:
        c = next((c for c in countries if c['name'] == cname), None)
        if c is None:
            sys.exit(f'map-next: {name}: no country called {cname} on the map')
        cs, drawn = c['shape'], set(load(name))
        fitted = {n: g for n, g in ((n, solid(g.difference(cs)) if n in drawn else g) for n, g in fitted.items()) if not g.is_empty}
        mine = [k for k, g in detail.items() if k[0] == 'area' and k[1] in drawn and g.intersects(cs)]
        for piece in polys(solid(cs.difference(unary_union([detail[k] for k in mine])))):
            if piece.area < 1e-6 or not mine:
                continue
            edge = piece.buffer(THIN)
            k = max(mine, key=lambda k: detail[k].intersection(edge).area)
            detail[k] = solid(detail[k].union(piece))
    return fitted, detail


def fit_regions(regs, cshape):
    """Census regions of one country, cut to that country's shape; the thin strip left between a region and the
    border is given to the region next to it. `regs` is [(key, shape)]; returns the shapes in the same order."""
    from shapely.prepared import prep
    inside = prep(cshape)
    parts = [g if inside.contains(g) else solid(cshape.intersection(g)) for _, g in regs]
    gap = solid(cshape.difference(unary_union(parts)))
    if not gap.is_empty:
        tree = STRtree(parts)
        for rest in polys(solid(gap.difference(gap.buffer(-THIN).buffer(THIN * 1.1)))):
            for reach in (.25, .5, .8, 1.3):
                if rest.is_empty:
                    break
                for i in tree.query(rest.buffer(reach)):
                    if rest.is_empty:
                        break
                    if parts[i].is_empty or parts[i].distance(rest) > reach:
                        continue
                    c = solid(parts[i].buffer(reach).intersection(rest))
                    if c.area > 1e-6:
                        parts[i] = solid(parts[i].union(c))
                        rest = solid(rest.difference(c))
    return parts


def census_regions(countries, ctree):
    """The regions and municipalities of the census view (site/data/regional/geo), one file per country, cut to
    the same country shapes as everything else. A feature keeps its place in the source file (`i`), which is how
    the census rows refer to it, and carries the point where its name is written (`at`, map units)."""
    src = os.path.join(DATA, 'regional', 'geo')
    os.makedirs(os.path.join(OUT, 'regions'), exist_ok=True)
    done = []
    for fn in sorted(os.listdir(src)):
        cc = fn[:-5]
        if not fn.endswith('.json') or '-' in cc:      # GR-regions: no counts, nothing is drawn from it
            continue
        out, world_file = os.path.join(OUT, 'regions', cc + '.json'), os.path.join(CACHE, 'countries-10m.json')
        if os.path.exists(out) and os.path.getmtime(out) > max(os.path.getmtime(os.path.join(src, fn)), os.path.getmtime(world_file)):
            done.append(cc + ' unchanged')      # delete site/map-next/data/regions/ to have them all cut again
            continue
        t = Topo(load(os.path.join('regional', 'geo', fn)))
        regs = [(i, g['properties'], s) for i, (g, parts) in enumerate(t.geoms('regions')) for s in [t.shape(parts)] if s is not None]
        if not regs:
            continue
        whole = unary_union([s for _, _, s in regs])
        ci = max(ctree.query(whole), key=lambda c: countries[c]['shape'].intersection(whole).area, default=None)
        if ci is None:
            continue
        fitted = fit_regions([(i, s) for i, _, s in regs], countries[ci]['shape'])
        feats = []
        for (i, props, _), g in zip(regs, fitted):
            if g.is_empty:
                continue
            c = max(polys(g), key=lambda q: q.area).representative_point()
            feats.append({'type': 'Feature', 'properties': {'i': i, 'id': props.get('region_id'), 'name': props.get('name'), 'at': [round(c.x, 2), round(c.y, 2)]},
                          'geometry': {'type': 'MultiPolygon', 'coordinates': gj_polygons(g)}})
        size = write(os.path.join('regions', cc + '.json'), {'type': 'FeatureCollection', 'features': feats})
        done.append(f'{cc} {len(feats)} regions {size // 1024} KB')
    return done


def circles(langs, have, lists, countries, ctree):
    """A circle around the pin for every language without a drawn area, kept inside its own neighbourhood
    (no circle crosses into the space nearer to another pin) and on land."""
    pts = {n: project(i['lon'], i['lat']) for n, i in langs.items() if i.get('lat') is not None and i.get('lon') is not None}
    cells = polys(voronoi_polygons(MultiPoint(list(pts.values())), extend_to=box(*KEEP)))
    tree = STRtree(cells)
    out = {}
    for n, (x, y) in pts.items():
        if n in have or n in lists['hide_zone']:
            continue
        km = next(k for lim, k in CIRCLE_KM if (langs[n].get('sz') or 0) < lim)
        nx, ny = project(langs[n]['lon'], langs[n]['lat'] + km / 111)
        g = Point(x, y).buffer(math.hypot(nx - x, ny - y), 18)
        cell = next((cells[i] for i in tree.query(Point(x, y)) if cells[i].covers(Point(x, y))), None)
        if cell is not None:
            g = g.intersection(cell)
        g = solid(unary_union([countries[i]['shape'].intersection(g) for i in ctree.query(g)]))
        if not g.is_empty:
            out[n] = g
    return out


def tints():
    """language -> 'min' or 'plu' from content/minority-areas.csv."""
    out = {}
    with open(os.path.join(ROOT, 'content', 'minority-areas.csv'), encoding='utf-8') as f:
        for line in f:
            cells = [c.strip() for c in line.split(',')]
            if not line.startswith('#') and len(cells) > 1 and cells[1] in ('min', 'plu'):
                out[cells[0]] = cells[1]
    return out


def fit_areas(original, countries):
    """Cut every language area by the country shapes (see the note at the top). Returns {language: shape}."""
    shapes = [c['shape'] for c in countries]
    tree = STRtree(shapes)
    inside = [[] for _ in countries]              # per country: [language, shape] pieces
    removed = 0
    for name, g in original.items():
        for K in polys(g):
            for ci in tree.query(K):
                if not shapes[ci].intersects(K):
                    continue
                for part in polys(shapes[ci].intersection(K)):
                    if part.area < .2 * K.area and part.buffer(-THIN).is_empty:
                        removed += 1                # a little of the area lying across the border
                    elif part.area > 1e-6:
                        inside[ci].append([name, part])
    filled = 0
    for ci, lst in enumerate(inside):
        if not lst:
            continue
        gap = solid(shapes[ci].difference(unary_union([g for _, g in lst])))
        if gap.is_empty:
            continue
        left = solid(gap.difference(gap.buffer(-THIN).buffer(THIN * 1.1)))
        for reach in (.25, .5, .8, 1.3):            # the nearest area takes each stretch of a thin gap
            if left.is_empty:
                break
            for i, (_, g) in enumerate(lst):
                if left.is_empty or g.distance(left) > reach:
                    continue
                c = solid(g.buffer(reach).intersection(left))
                if c.area > 1e-6:
                    lst[i][1] = solid(lst[i][1].union(c))
                    left = solid(left.difference(c))
                    filled += 1
    out = {}
    for lst in inside:
        for name, g in lst:
            out.setdefault(name, []).append(g)
    return {name: solid(unary_union(gs)) for name, gs in out.items()}, removed, filled


def trimmed(arcs, countries, tree):
    """Lines kept only inside the country they belong to (so none pokes across a border or into the sea)."""
    out = []
    for a in arcs:
        l = LineString(a)
        mid = l.interpolate(.5, normalized=True)
        for ci in tree.query(mid):
            if countries[ci]['shape'].contains(mid):
                out += [list(x.coords) for x in lines(l.intersection(countries[ci]['shape'])) if x.length > .02]
                break
    return out


def write(name, obj):
    path = os.path.join(OUT, name)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'))
    return os.path.getsize(path)


TILES = os.path.join(ROOT, 'site', 'map-next', 'tiles')
TILE_Z = 8      # the last zoom that is cut; closer in, the map enlarges these tiles (they keep every point of the data)


def tiles():
    """Cuts land.json, areas.json and lines.json into vector tiles (site/map-next/tiles/{z}/{x}/{y}.pbf), the way web maps
    ship their shapes: the phone downloads only the tiles it shows, at the detail of its zoom, instead of all the shapes.
    Tool: tippecanoe (brew install tippecanoe). Nothing is dropped or merged (--no-feature-limit, --no-tile-size-limit);
    neighbouring areas are simplified alike so no gap opens between two colours (--no-simplification-of-shared-nodes);
    at TILE_Z the tiles keep the data's full precision (-d14). Tiles are written uncompressed; Cloudflare compresses them.
    Returns what the page needs: the version (a hash of the three files, so a new build is never mixed with an old
    cached one), the last zoom and the box with data."""
    import hashlib
    import shutil
    import subprocess
    tool = shutil.which('tippecanoe')
    if not tool:
        sys.exit('map-next: tippecanoe is needed for the map tiles:  brew install tippecanoe')
    h = hashlib.sha1(f'z{TILE_Z}d14'.encode())
    for n in ('land.json', 'areas.json', 'lines.json'):
        with open(os.path.join(OUT, n), 'rb') as f:
            h.update(f.read())
    tmp = TILES + '.new'
    shutil.rmtree(tmp, ignore_errors=True)
    subprocess.run([tool, '-q', '-e', tmp, '-Z0', f'-z{TILE_Z}', '-d14', '--no-feature-limit', '--no-tile-size-limit',
                    '--no-tile-compression', '--no-simplification-of-shared-nodes', '--no-tiny-polygon-reduction', '--force',
                    *[x for n in ('land', 'areas', 'lines') for x in ('-L', f'{n}:{os.path.join(OUT, n + ".json")}')]], check=True)
    with open(os.path.join(tmp, 'metadata.json'), encoding='utf-8') as f:
        bounds = [float(v) for v in json.load(f)['bounds'].split(',')]
    os.remove(os.path.join(tmp, 'metadata.json'))
    shutil.rmtree(TILES, ignore_errors=True)
    os.rename(tmp, TILES)
    n = sum(len(fs) for _, _, fs in os.walk(TILES))
    return {'v': h.hexdigest()[:10], 'maxzoom': TILE_Z, 'bounds': bounds, 'count': n}


# Census region names the sources give wrongly: Romania's counties in capitals without diacritics, six Montenegrin
# municipalities without them. Every other name is used exactly as the source gives it.
NAME_FIX = {
    'RO': {'ALBA': 'Alba', 'ARAD': 'Arad', 'ARGES': 'Argeș', 'BACAU': 'Bacău', 'BIHOR': 'Bihor', 'BISTRITA-NASAUD': 'Bistrița-Năsăud',
           'BOTOSANI': 'Botoșani', 'BRAILA': 'Brăila', 'BRASOV': 'Brașov', 'BUZAU': 'Buzău', 'CALARASI': 'Călărași',
           'CARAS-SEVERIN': 'Caraș-Severin', 'CLUJ': 'Cluj', 'CONSTANTA': 'Constanța', 'COVASNA': 'Covasna', 'DAMBOVITA': 'Dâmbovița',
           'DOLJ': 'Dolj', 'GALATI': 'Galați', 'GIURGIU': 'Giurgiu', 'GORJ': 'Gorj', 'HARGHITA': 'Harghita', 'HUNEDOARA': 'Hunedoara',
           'IALOMITA': 'Ialomița', 'IASI': 'Iași', 'ILFOV': 'Ilfov', 'MARAMURES': 'Maramureș', 'MEHEDINTI': 'Mehedinți', 'MURES': 'Mureș',
           'NEAMT': 'Neamț', 'OLT': 'Olt', 'PRAHOVA': 'Prahova', 'SALAJ': 'Sălaj', 'SATU MARE': 'Satu Mare', 'SIBIU': 'Sibiu',
           'SUCEAVA': 'Suceava', 'TELEORMAN': 'Teleorman', 'TIMIS': 'Timiș', 'TULCEA': 'Tulcea', 'VALCEA': 'Vâlcea', 'VASLUI': 'Vaslui',
           'VRANCEA': 'Vrancea', 'BUCURESTI': 'București'},
    'ME': {'Savnik': 'Šavnik', 'Kolasin': 'Kolašin', 'Pluzine': 'Plužine', 'Niksic': 'Nikšić', 'Zabljak': 'Žabljak', 'Rozaje': 'Rožaje'},
}


def census_extras():
    """Two small files from the census regions (regions/) and the census rows (site/data/regional/), every country:
    census-names.json  {CC: [[name, x, y, width, height], ...]}: where the page writes each region's name at deep zoom
                       (x / y = the label point inside the region, map units; width / height of its largest part)
    census-top.json    {"langs": [...], CC: [[i, language, share], ...]}: the largest language in each region, from the
                       same census question as the rest of that country's rows. Left out where the languages that are
                       not listed could add up to more than it, so a region never gets a majority that the table does not show.
    Montenegro's largest language comes from its own table on the page (regional/ME.json), so only its names are here."""
    idx = load(os.path.join('regional', 'index.json'))
    shares = {}                                   # cc -> region index -> {language: share}
    for lang, info in idx['languages'].items():
        data = load(os.path.join('regional', 'lang', f"{info['file']}.json"))
        for cc, rows in data['rows'].items():
            for ix, _m, _count, pct, _den in rows:
                if pct is not None:
                    shares.setdefault(cc, {}).setdefault(ix, {})[lang] = pct
    unit = lambda lon, lat: ((lon / 360) / C + CX, CY - math.asinh(math.tan(math.radians(lat))) / (2 * math.pi * C))
    names, top, langs = {}, {'langs': []}, {}
    for fn in sorted(os.listdir(os.path.join(OUT, 'regions'))):
        cc, fix = fn[:-5], NAME_FIX.get(fn[:-5], {})
        with open(os.path.join(OUT, 'regions', fn), encoding='utf-8') as f:
            feats = json.load(f)['features']
        if cc == 'RO':
            bad = sorted({ft['properties']['name'] for ft in feats} - set(fix))
            if bad:
                sys.exit('map-next: Romanian county names with no correct spelling in NAME_FIX: ' + ', '.join(bad))
        nm, tp = [], []
        for ft in feats:
            p = ft['properties']
            rings = [[unit(lon, lat) for lon, lat in poly[0]] for poly in ft['geometry']['coordinates']]
            box = lambda r: (max(x for x, _ in r) - min(x for x, _ in r), max(y for _, y in r) - min(y for _, y in r))
            w, h = max((box(r) for r in rings), key=lambda wh: wh[0] * wh[1])      # the largest part (islands do not count)
            xs, ys = (0, w), (0, h)
            nm.append([fix.get(p['name'], p['name']), p['at'][0], p['at'][1], round(max(xs) - min(xs), 2), round(max(ys) - min(ys), 2)])
            s = shares.get(cc, {}).get(p['i'])
            if cc != 'ME' and s:
                lang, pct = max(s.items(), key=lambda kv: kv[1])
                if pct > 100 - sum(s.values()):
                    if lang not in langs:
                        langs[lang] = len(top['langs'])
                        top['langs'].append(lang)
                    tp.append([p['i'], langs[lang], round(pct, 2)])
        names[cc] = nm
        if tp:
            top[cc] = tp
    sizes = [write('census-names.json', names), write('census-top.json', top)]
    print(f'map-next: census names {sum(map(len, names.values()))} in {len(names)} countries ({sizes[0] // 1024} KB), '
          f'largest language known for {sum(len(v) for k, v in top.items() if k != "langs")} regions ({sizes[1] // 1024} KB)')


def main():
    os.makedirs(OUT, exist_ok=True)
    terr, langs, colours = load('terr.json'), load('languages.json'), colour_table()
    today = Topo(load('today.json'))
    original = {n: g for n, g in ((n, area_shape(t.get('v') or t['d'])) for n, t in terr.items()) if g is not None}
    w = world(STRtree(list(original.values())))

    # countries: precise shapes; the site's country name comes from today.json (the names the census rows use)
    names = [(g['properties']['n'], s) for g, parts in today.geoms('countries') for s in [today.shape(parts)] if s is not None]
    name_tree = STRtree([s for _, s in names])
    main = main_languages(langs)
    countries = []
    for g, parts in w.geoms('countries'):
        s = w.shape(parts)
        if s is None or s.is_empty:
            continue
        pt = max(polys(s), key=lambda p: p.area).representative_point()
        site_name = next((names[i][0] for i in name_tree.query(pt) if names[i][1].contains(pt)), g['properties']['name'])
        countries.append({'name': site_name, 'shape': s, 'lang': main.get(site_name)})
    ctree = STRtree([c['shape'] for c in countries])

    lists, tint = site_lists(), tints()
    fitted, removed, filled = fit_areas({n: g for n, g in original.items() if n not in lists['hide_zone']}, countries)
    round_areas = circles(langs, fitted, lists, countries, ctree)
    fitted.update(round_areas)
    detail, removed2, filled2 = fit_areas(detailed_areas(lists), countries)
    fitted, detail = census_countries(fitted, detail, countries)
    # Montenegro and Greece are drawn from their own detailed layers; the broad areas stop at their borders (the site's rule)
    own = unary_union([c['shape'] for c in countries if c['name'] in ('Montenegro', 'Greece')])
    fitted = {n: g for n, g in ((n, solid(g.difference(own))) for n, g in fitted.items()) if not g.is_empty}
    # where a family's speakers live outside its home areas (site/data/dia.json), one shape per family
    fam_cols = load_palette()['families']
    fam_col = lambda fam: {th: fam_cols.get(fam, {}).get(th) or '#8a93a3' for th in ('light', 'dark')}
    dia, _, _ = fit_areas({fam: g for fam, g in ((fam, area_shape(d)) for fam, d in load('dia.json')['fam'].items()) if g is not None}, countries)

    def props(name):
        info = langs.get(name, {})
        return {'name': name, 'fam': info.get('fam') or (info.get('path') or [''])[0], 'own': info.get('an') or '',
                'color': colours.get(name, '#8a93a3'), 'sz': info.get('sz') or 0}

    feat = lambda p, typ, coords: {'type': 'Feature', 'properties': p, 'geometry': {'type': typ, 'coordinates': coords}}
    fc = lambda feats: {'type': 'FeatureCollection', 'features': feats}
    hist = lambda n: bool((langs.get(n) or {}).get('hist'))
    # id: each area's own name for the engine's per-area state (promoteId in site/map-gl.js): the language for a broad
    # area, kind:language for a detailed one, dia:family for a family's area outside its home areas
    zone = lambda n: {**props(n), 'id': n, **({'tint': tint[n]} if n in tint else {}), **({'hist': 1} if hist(n) else {}),
                      **({'round': 1} if n in round_areas else {})}
    areas = [feat(zone(n), 'MultiPolygon', gj_polygons(g)) for n, g in sorted(fitted.items(), key=lambda kv: -kv[1].area)]
    areas += [feat({**props(n), 'kind': k, 'key': k + ':' + n, 'id': k + ':' + n}, 'MultiPolygon', gj_polygons(g)) for (k, n), g in sorted(detail.items(), key=lambda kv: -kv[1].area)]
    areas += [feat({'kind': 'dia', 'fam': fam, 'id': 'dia:' + fam, **fam_col(fam)}, 'MultiPolygon', gj_polygons(g)) for fam, g in dia.items()]
    drawn_whole = {cname for _, cname in CENSUS_AREAS}     # covered by their census areas: no country tint under them
    land = [feat({'name': c['name'], **({'base': colours.get(c['lang'], '#8a93a3'), 'lang': c['lang'], 'bfam': props(c['lang'])['fam']} if c['lang'] and c['name'] not in drawn_whole else {})},
                 'MultiPolygon', gj_polygons(c['shape'])) for c in countries]
    ml = lambda kind, arcs: feat({'kind': kind}, 'MultiLineString', [[fake(x, y) for x, y in a] for a in arcs])
    line_feats = [
        ml('border', w.shared('countries')),
        ml('region', trimmed(today.shared('regions', lambda a, b: a['properties']['c'] == b['properties']['c'], VIEW), countries, ctree)),
        ml('district', trimmed(Topo(load('adm2.json')).shared('d', box=VIEW), countries, ctree)),
    ]
    x, y, wd, h = RELIEF
    bs = [t['b'] for t in terr.values()]
    meta = {
        'built': time.strftime('%Y-%m-%d %H:%M'),
        'unit': {'cx': CX, 'cy': CY, 'c': C},
        'relief': [fake(x, y), fake(x + wd, y), fake(x + wd, y + h), fake(x, y + h)],
        'home': [min(b[0] for b in bs), min(b[1] for b in bs), max(b[2] for b in bs), max(b[3] for b in bs)],
        # the detailed areas, for the rules the page applies when a language or a family is chosen: [kind, language, family]
        'detail': sorted([k, n, props(n)['fam']] for k, n in detail),
        # every other area by its id, so the engine can give each its strength when a language or a family is chosen:
        # the broad areas by family, the historical ones, the families' areas outside their home areas, and the
        # countries tinted with their main language [country, language, its family]
        'zones': {f: sorted(n for n in fitted if props(n)['fam'] == f) for f in sorted({props(n)['fam'] for n in fitted})},
        'hist': sorted(n for n in fitted if hist(n)),
        'dia': sorted(dia),
        'tint': sorted([c['name'], c['lang'], props(c['lang'])['fam']] for c in countries if c['lang'] and c['name'] not in drawn_whole),
    }
    sizes = {n: write(n, o) for n, o in (('areas.json', fc(areas)), ('land.json', fc(land)), ('lines.json', fc(line_feats)))}
    meta['tiles'] = tiles()      # what the map loads: the tiles cut from the three files above (they stay for the checks)
    sizes['meta.json'] = write('meta.json', meta)
    print(f'map-next: {meta["tiles"]["count"]} tiles (zoom 0 to {TILE_Z}, version {meta["tiles"]["v"]})')
    for old in ('pins.json', 'families.json'):       # the page draws pins and names itself
        if os.path.exists(os.path.join(OUT, old)):
            os.remove(os.path.join(OUT, old))
    print('map-next: census regions: ' + ', '.join(census_regions(countries, ctree)))
    print('map-next: ' + ', '.join(f'{n} {s // 1024} KB' for n, s in sizes.items()))
    print(f'map-next: {len(fitted)} language areas ({sum(1 for n in fitted if n not in terr)} of them circles, {sum(1 for n in fitted if n in tint)} in a lighter tint), '
          f'{len(detail)} detailed areas, {len(dia)} family areas outside the home areas, {len(countries)} countries '
          f'(tinted with their main language: {", ".join(sorted(c["name"] + "=" + c["lang"] for c in countries if c["lang"]))})')
    print(f'map-next: areas fitted to borders: {removed + removed2} overshoots removed, {filled + filled2} thin gaps filled')
    lost = sorted(set(terr) - set(fitted) - lists['hide_zone'] - {n for _, n in detail})
    if lost:
        print('map-next: WARNING, areas with nothing left on land: ' + ', '.join(lost))
    grey = sorted(n for n in fitted if n not in colours)
    if grey:
        print('map-next: no colour in the table for: ' + ', '.join(grey) + ' (drawn grey)')
    census_extras()


if __name__ == '__main__':
    # --census: only the census names and largest languages (after a change to the census tables or to NAME_FIX)
    census_extras() if '--census' in sys.argv[1:] else main()
