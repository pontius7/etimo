#!/usr/bin/env python3
"""Freeze the current first-level regions of the countries outside the EU's NUTS data from OpenStreetMap.

Writes scripts/merge/osm-regions.json (a small TopoJSON: one arc per OSM boundary way, simplified, so neighbouring
regions share their lines), which scripts/merge/current-regions.py reads. The map build never downloads from OSM;
run this only to take a new snapshot, then rerun current-regions.py and check the audit again (README, "Regions").

Why OSM: on 2026-11-12 it was the open source that already had Kazakhstan's 2022 regions and the other changes
below (geoBoundaries, the other candidate, is mostly from 2017 to 2020; it was used for the audit where that is
recent enough). Data © OpenStreetMap contributors, ODbL 1.0 (the map's credit line links openstreetmap.org/copyright).

Which units, per country (see COUNTRIES): OSM's admin units of the country's first level, picked by their ISO 3166-2
code and admin level. Only countries whose regions were out of date and that the map's languages cover are here
(README, "Regions"); disputed areas are not taken from here: their regions in today.json stay exactly as they were.

    .venv/bin/python scripts/merge/osm-snapshot.py            # uses the raw downloads in .cache/current-regions/osm/
    .venv/bin/python scripts/merge/osm-snapshot.py --fetch    # downloads what is missing first (Overpass API)
"""
import json
import os
import subprocess
import sys
import time

try:
    from shapely.geometry import LinearRing, LineString, Polygon, shape
    from shapely.ops import linemerge, unary_union
    from shapely.strtree import STRtree
except ImportError:
    sys.exit('osm-snapshot: run with the project Python:  .venv/bin/python scripts/merge/osm-snapshot.py')

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RAW = os.path.join(ROOT, '.cache', 'current-regions', 'osm')
OUT = os.path.join(ROOT, 'scripts', 'merge', 'osm-regions.json')
SERVERS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter',
           'https://overpass.private.coffee/api/interpreter']
TOL = 0.01          # degrees (about 1 km): bends smaller than this are dropped (today.json's older regions are ~10 km)
SNAPSHOT = '2026-11-12'

# today.json code: (ISO 3166-1 alpha-2, the OSM admin level of its first-level units, kind of unit, {ISO 3166-2: kind},
#                   the OSM name tag used for the English name)
AZ_CITIES = ('AZ-BA', 'AZ-GA', 'AZ-LA', 'AZ-MI', 'AZ-NA', 'AZ-NV', 'AZ-SA', 'AZ-SM', 'AZ-SR', 'AZ-XA', 'AZ-YE')
COUNTRIES = {
    'KAZ': ('KZ', '4', 'Region', {'KZ-71': 'City', 'KZ-75': 'City', 'KZ-79': 'City'}, 'name:en'),
    'KGZ': ('KG', '4', 'Region', {'KG-GB': 'City', 'KG-GO': 'City'}, 'name:en'),
    'TKM': ('TM', '4', 'Province', {'TM-S': 'City'}, 'name:en'),
    'MNG': ('MN', '4', 'Province', {'MN-1': 'Capital City'}, 'name:en'),
    'IRN': ('IR', '4', 'Province', {}, 'name:en'),
    # Azerbaijan's 67 districts (Aghdara again since 2023) and 11 cities; official Azerbaijani names, as the Europe step
    # used for whole new levels
    'AZE': ('AZ', '6', 'District', {c: 'City' for c in AZ_CITIES}, 'name:az'),
}
# OSM units without their ISO 3166-2 code (Baku), and a unit OSM tags as a district that is one of Baku's boroughs
# (Garadagh), which OSM's Baku leaves out: it goes back into Baku. Aghdara district (AZ-AGD) is kept: re-established
# by law on 5 December 2023.
EXTRA = {'AZE': {2415335: 'AZ-BA'}}
ABSORB = {'AZ-GAR': 'AZ-BA'}
# Taken from OSM's Nominatim service instead of Overpass (whose public servers refused every request for these on
# 2026-11-12, "at capacity"): same OSM data, whole outlines.
BY_NOMINATIM = {'MNG', 'KGZ', 'TKM'}
# OSM's English name without its letters (the old data had it right, but on the wrong place)
NAME_FIX = {'MN-064': 'Govisümber'}
# The kind of unit is shown on its own (t), so it is left out of the name: 'Atyrau Region' -> 'Atyrau'
SUFFIX = (' İnzibati Ərazisi', ' rayonu', ' Rayonu', ' şəhəri', ' Region', ' Province', ' Oblast', ' District', ' City')
PREFIX = ('Oblast ', 'Region ')


def short(name):
    for x in SUFFIX:
        if name and name.endswith(x):
            return name[:-len(x)]
    for x in PREFIX:
        if name and name.startswith(x):
            return name[len(x):]
    return name


def query(cc, levels):
    return (f'[out:json][timeout:400];rel["boundary"="administrative"]["admin_level"~"^({levels})$"]'
            f'["ISO3166-2"~"^{cc}-"];out geom;')


def fetch(q, path):
    for i in range(8):
        url = SERVERS[i % len(SERVERS)]
        r = subprocess.run(['curl', '-sS', '-m', '500', '-A', 'etimo-map-build/1.0', '--data-urlencode', 'data=' + q,
                            url, '-o', path + '.part'], capture_output=True)
        try:
            with open(path + '.part', encoding='utf-8') as f:
                json.load(f)
            os.replace(path + '.part', path)
            return
        except (OSError, ValueError):   # busy server: wait and try the next one
            print(f'  osm-snapshot: {url} busy, retrying')
            time.sleep(10 + 10 * i)
    sys.exit(f'osm-snapshot: could not download {path}')


def raw(name, q, do_fetch):
    path = os.path.join(RAW, name)
    if not os.path.exists(path):
        if not do_fetch:
            sys.exit(f'osm-snapshot: {path} missing; run with --fetch')
        os.makedirs(RAW, exist_ok=True)
        fetch(q, path)
    with open(path, encoding='utf-8') as f:
        return [e for e in json.load(f)['elements'] if e['type'] == 'relation']


K = lambda p: (round(p[0], 7), round(p[1], 7))


def simplify(coords):
    if len(coords) <= 2:
        return coords
    if K(coords[0]) == K(coords[-1]):   # a closed way (an island): simplify both halves so it stays a ring
        far = max(range(len(coords)), key=lambda i: (coords[i][0] - coords[0][0]) ** 2 + (coords[i][1] - coords[0][1]) ** 2)
        a = list(LineString(coords[:far + 1]).simplify(TOL).coords) if far > 1 else coords[:far + 1]
        b = list(LineString(coords[far:]).simplify(TOL).coords) if len(coords) - far > 2 else coords[far:]
        return a + b[1:]
    return list(LineString(coords).simplify(TOL).coords)


def chain(refs, ways):
    """Ways in rings: [[(way, forward), ...], ...]; ways that do not close a ring are reported and left out."""
    left, rings, broken = list(refs), [], 0
    while left:
        ref = left.pop(0)
        ring, start, end = [(ref, True)], K(ways[ref][0]), K(ways[ref][-1])
        while start != end:
            for i, r2 in enumerate(left):
                a, b = K(ways[r2][0]), K(ways[r2][-1])
                if a == end or b == end:
                    ring.append((r2, a == end))
                    end = b if a == end else a
                    left.pop(i)
                    break
            else:
                ring, broken = None, broken + 1
                break
        if ring:
            rings.append(ring)
    return rings, broken


def members(rel, ways, role):
    return [m['ref'] for m in rel.get('members', []) if m['type'] == 'way' and m['ref'] in ways
            and (m.get('role') or 'outer') == role]


def country(c):
    """The map's own outline of a country (today.json, the same outline the map draws)."""
    with open(os.path.join(ROOT, 'site', 'data', 'today.json'), encoding='utf-8') as f:
        t = json.load(f)
    arcs = t['arcs']
    ring = lambda idx: [p for k, i in enumerate(idx) for p in (arcs[i] if i >= 0 else arcs[~i][::-1])[(1 if k else 0):]]
    out = []
    for g in t['objects']['countries']['geometries']:
        if g['properties'].get('c') == c:
            polys = [g['arcs']] if g['type'] == 'Polygon' else g['arcs']
            out += [Polygon(ring(p[0]), [ring(h) for h in p[1:]]).buffer(0) for p in polys]
    return unary_union(out)


def topology(shapes, arcs):
    """Regions of one country -> geometries whose rings are arcs shared with their neighbours (appended to arcs)."""
    lines = unary_union([s.boundary for _, s in shapes])          # all borders, split where three regions meet
    merged = linemerge(lines)
    edges = list(getattr(merged, 'geoms', [merged]))
    # each border simplified once (both neighbours use the same line); a closed one (an island) stays a ring
    simple = [Polygon(e.coords).simplify(TOL).exterior if e.is_ring and len(e.coords) > 4 else
              (e.simplify(TOL) if not e.is_ring else e) for e in edges]
    simple = [q if q.is_ring == e.is_ring and len(q.coords) >= (4 if e.is_ring else 2) else e for q, e in zip(simple, edges)]
    pts = lambda rg, L: [p for j, k in enumerate(rg) for p in (list(L[k].coords) if k >= 0 else list(L[~k].coords)[::-1])[(1 if j else 0):]]
    base = len(arcs)
    arcs += [[[round(x, 5), round(y, 5)] for x, y in e.coords] for e in simple]
    tree = STRtree(edges)
    out = []
    for props, s in shapes:
        b = s.boundary
        mine = [int(k) for k in tree.query(b, predicate='intersects')
                if b.distance(edges[k].interpolate(.5, normalized=True)) < 1e-9]
        left, rings = list(mine), []
        while left:
            k = left.pop(0)
            rg, end, start = [k], edges[k].coords[-1], edges[k].coords[0]
            while end != start:
                for i, k2 in enumerate(left):
                    c0, c1 = edges[k2].coords[0], edges[k2].coords[-1]
                    if c0 == end or c1 == end:
                        rg.append(k2 if c0 == end else ~k2)
                        end = c1 if c0 == end else c0
                        left.pop(i)
                        break
                else:
                    raise SystemExit(f"osm-snapshot: {props['iso']}: a border does not close")
            rings.append(rg)
        outer, holes = [], []
        for rg in rings:
            poly = Polygon(pts(rg, edges)).buffer(0)      # the unsimplified ring decides outer or hole
            is_outer = poly.intersection(s).area > .5 * poly.area
            if LinearRing(pts(rg, edges)).is_ccw == is_outer:   # outer rings clockwise, holes counter-clockwise (d3)
                rg = [~k for k in reversed(rg)]
            (outer if is_outer else holes).append((rg, poly))
        res = [[[k + base if k >= 0 else ~(~k + base) for k in rg]] for rg, _ in outer]
        for rg, poly in holes:
            home = min((i for i, (_, o) in enumerate(outer) if o.contains(poly.representative_point())),
                       key=lambda i: outer[i][1].area)
            res[home].append([k + base if k >= 0 else ~(~k + base) for k in rg])
        out.append({'type': 'Polygon', 'arcs': res[0], 'properties': props} if len(res) == 1 else
                   {'type': 'MultiPolygon', 'arcs': res, 'properties': props})
    # where simplifying made a region cross itself, its borders keep their full detail (and so do its neighbours')
    for _ in range(4):
        broken = [g for g in out if not shape({'type': 'MultiPolygon', 'coordinates': [[pts([k - base if k >= 0 else ~(~k - base)
                  for k in r], simple) for r in p] for p in (g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']])]}).is_valid]
        if not broken:
            break
        for g in broken:
            for p in (g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']]):
                for r in p:
                    for k in r:
                        i = (k if k >= 0 else ~k) - base
                        simple[i] = edges[i]
                        arcs[base + i] = [[round(x, 5), round(y, 5)] for x, y in edges[i].coords]
    return out


def overpass_units(c, cc, levels, namekey, do_fetch, report):
    """Units of a country from Overpass relations (`out geom`): (ISO code, name, OSM ids, shape)."""
    rels = raw(f'geom-{cc}{levels}.json' if levels != '4' else f'geom-{cc}.json', query(cc, levels), do_fetch)
    if c in EXTRA:
        more = raw(f'extra-{cc}.json', '[out:json][timeout:200];rel(id:' + ','.join(map(str, EXTRA[c])) + ');out geom;', do_fetch)
        for r in more:
            r['tags']['ISO3166-2'] = EXTRA[c][r['id']]
        rels += more
    rels = [r for r in rels if r['tags'].get('admin_level') in levels.split('|')]
    ways = {}
    for r in rels:
        for m in r.get('members', []):
            if m['type'] == 'way' and m.get('geometry'):
                ways.setdefault(m['ref'], [(p['lon'], p['lat']) for p in m['geometry'] if p])
    ways = {k: simplify(v) for k, v in ways.items()}
    out = []
    for r in rels:
        iso = r['tags'].get('ISO3166-2', '')
        if not iso.startswith(cc + '-'):
            continue
        outer, broken = chain(members(r, ways, 'outer') + members(r, ways, ''), ways)
        inner, b2 = chain(members(r, ways, 'inner'), ways)
        ring = lambda rg: [p for k, (ref, fwd) in enumerate(rg) for p in (ways[ref] if fwd else ways[ref][::-1])[(1 if k else 0):]]
        outs = [Polygon(ring(rg)).buffer(0) for rg in outer if len(ring(rg)) >= 4]
        ins = [Polygon(ring(rg)).buffer(0) for rg in inner if len(ring(rg)) >= 4]
        if broken or b2:
            report.append(f'{c} {iso}: {broken + b2} open ring(s) in OSM left out')
        out.append((r['tags'], [r['id']], unary_union(outs).difference(unary_union(ins)) if ins else unary_union(outs)))
    return out


def nominatim_units(c, cc, levels, do_fetch):
    """The same from OSM's Nominatim service (whole polygons), for when the Overpass servers refuse: the units and
    their tags come from an Overpass tag list (tags-*.json, small), the outlines from one Nominatim lookup."""
    tags = {}
    for name in sorted(os.listdir(RAW)):
        if name.startswith('tags-') and name.endswith('.json'):
            with open(os.path.join(RAW, name), encoding='utf-8') as f:
                for e in json.load(f)['elements']:
                    t = e.get('tags', {})
                    if t.get('ISO3166-2', '').startswith(cc + '-') and t.get('admin_level') in levels.split('|'):
                        tags[e['id']] = t
    path = os.path.join(RAW, f'nom-{cc}.json')
    if not os.path.exists(path):
        if not do_fetch:
            sys.exit(f'osm-snapshot: {path} missing; run with --fetch')
        url = ('https://nominatim.openstreetmap.org/lookup?format=geojson&polygon_geojson=1&osm_ids='
               + ','.join(f'R{i}' for i in sorted(tags)))
        subprocess.run(['curl', '-sS', '-m', '300', '-A', 'etimo-map-build/1.0', url, '-o', path], check=True)
        time.sleep(1)
    with open(path, encoding='utf-8') as f:
        feats = json.load(f)['features']
    return [(tags[ft['properties']['osm_id']], [ft['properties']['osm_id']], shape(ft['geometry']).buffer(0))
            for ft in feats if ft['properties'].get('osm_id') in tags]


def main():
    do_fetch = '--fetch' in sys.argv
    only = [a for a in sys.argv[1:] if not a.startswith('--')]   # for testing: just these countries
    arcs, geoms, report = [], [], []
    for c, (cc, levels, kind, kinds, namekey) in COUNTRIES.items():
        if only and c not in only:
            continue
        units = (nominatim_units(c, cc, levels, do_fetch) if c in BY_NOMINATIM
                 else overpass_units(c, cc, levels, namekey, do_fetch, report))
        land = country(c)
        shapes = []
        for tags, ids, shp in units:
            iso = tags['ISO3166-2']
            en = NAME_FIX[iso] if iso in NAME_FIX else tags.get(namekey) or tags.get('name:en') or tags.get('name')
            # OSM's regions reach into the sea (territorial waters); the map's regions end at its own coastline and
            # borders, so each region is cut to the map's outline of its country
            shp = shp.intersection(land)
            if shp.is_empty:
                report.append(f'{c} {iso} {en}: no land inside the map outline, left out')
                continue
            shapes.append(({'c': c, 'iso': iso, 'osm': ids, 'en': short(en), 'full': en,
                            't': kinds.get(iso, kind)}, shp))
        for part, into in ABSORB.items():
            a = next((x for x in shapes if x[0]['iso'] == part), None)
            b = next((x for x in shapes if x[0]['iso'] == into), None)
            if a and b:
                shapes = [x for x in shapes if x is not a and x is not b] + [(b[0], unary_union([a[1], b[1]]))]
                b[0]['osm'] += a[0]['osm']
        # one place, one region: where two outlines overlap, the smaller unit (a city inside its region) keeps it
        shapes.sort(key=lambda x: x[1].area)
        taken, clean = None, []
        for props, shp in shapes:
            if taken is not None:
                shp = shp.difference(taken)
            taken = shp if taken is None else unary_union([taken, shp])
            shp = unary_union([q for q in getattr(shp, 'geoms', [shp]) if q.geom_type == 'Polygon' and q.area >= TOL * TOL])
            if not shp.is_empty:
                clean.append((props, shp))
        shapes = clean
        # slivers of the country outline no region reaches (OSM's border runs a little inside the map's): each goes
        # to the region it shares the longest border with, so every point of the country opens a region
        gap = land.difference(unary_union([x[1] for x in shapes]))
        for q in getattr(gap, 'geoms', [gap]):
            if q.geom_type != 'Polygon' or q.is_empty:
                continue
            k = max(range(len(shapes)), key=lambda i: shapes[i][1].boundary.intersection(q.boundary).length)
            if shapes[k][1].boundary.intersection(q.boundary).length > 0:
                shapes[k] = (shapes[k][0], unary_union([shapes[k][1], q]))
        geoms += topology(shapes, arcs)
    topo = {'type': 'Topology', 'arcs': arcs,
            'objects': {'regions': {'type': 'GeometryCollection', 'geometries': geoms}},
            'meta': {'source': 'OpenStreetMap, administrative boundaries (Overpass API)', 'snapshot': SNAPSHOT,
                     'licence': 'ODbL 1.0, © OpenStreetMap contributors', 'simplified_deg': TOL}}
    with open(OUT, 'w', encoding='utf-8') as f:
        json.dump(topo, f, ensure_ascii=False, separators=(',', ':'))
    counts = {}
    for g in geoms:
        counts[g['properties']['c']] = counts.get(g['properties']['c'], 0) + 1
    print(f'  osm-snapshot: {len(geoms)} regions, {len(arcs)} arcs, {os.path.getsize(OUT) // 1024} KB: '
          + ', '.join(f'{c} {n}' for c, n in counts.items()))
    for line in report:
        print('   ', line)


if __name__ == '__main__':
    main()
