#!/usr/bin/env python3
"""Current regions for the European countries whose regions in site/data/today.json were out of date or incomplete.

Checked on 2026-11-12 against the EU's official boundaries (GISCO: NUTS 2024 and LAU 2024), country by country: a
region counts as matching when it and an official one are each other's largest overlap and most of the smaller lies in
the other. Every country not listed below matched (or is a real division the EU groups differently: Estonia's counties,
Cyprus's districts, Portugal's districts, Montenegro's municipalities, Greece with Mount Athos, Hungary's counties and
cities with county rights), and is left exactly as it is.

  Norway           NUTS 3 2024: the 15 counties of 2024, Svalbard, Jan Mayen  (today.json had the 19 of before 2018)
  Italy, Sardinia  NUTS 3 2024: its 5 provinces                               (today.json had 4 abolished in 2016)
  Switzerland      NUTS 3 2024: all 26 cantons                                (Basel-Stadt was missing)
  Kosovo           NUTS 3 2024: its 7 districts, names in Albanian and Serbian (today.json had 28 municipalities, not the 38)
  Latvia           LAU 2024: the 43 municipalities of the 2021 reform         (today.json had the 119 from before it)
  Luxembourg       LAU 2024: its 100 communes                                 (today.json had the 3 districts abolished in 2015)
  Slovenia         LAU 2024: its 212 municipalities                           (today.json had 70 units of no current division)
  North Macedonia  the 80 municipalities of the 2021 census, names in Latin  (site/data/regional/geo/MK.json, from GISCO
                   boundaries; LAU gives the same 80 in Cyrillic only)       (today.json had 69)

In Norway, Switzerland and Sardinia a region that is the same place as before (nearly the same extent both ways, so
not a merger or a split) keeps its English and German names from today.json; every other region takes the official
name of the source. Run after merge-data.py (scripts/add-words.sh does). Running it twice changes nothing.
The two GISCO files are downloaded once into .cache/current-regions/.
Needs the project Python (shapely):  .venv/bin/python scripts/merge/current-regions.py
"""
import json
import os
import sys
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import topo as T  # noqa: E402

try:
    from shapely.geometry import shape
    from shapely.strtree import STRtree
except ImportError:
    sys.exit('current-regions: run with the project Python:  .venv/bin/python scripts/merge/current-regions.py')

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TODAY = os.path.join(ROOT, 'site', 'data', 'today.json')
CACHE = os.path.join(ROOT, '.cache', 'current-regions')
GISCO = 'https://gisco-services.ec.europa.eu/distribution/v2/'
FILES = {'nuts3': 'nuts/topojson/NUTS_RG_01M_2024_4326_LEVL_3.json', 'lau': 'lau/topojson/LAU_RG_01M_2024_4326.json'}

# today.json code: (source, the source's country code, kind of region, only the units whose id starts with this,
#                   whether an unchanged region keeps its English / German names from today.json)
# Names are kept only where today.json has the established English names (Geneva, Grisons); where the whole level is new
# (municipalities, Kosovo's districts) every region takes the official name, so a country never mixes two styles.
REPLACE = {
    'NOR': ('nuts3', 'NO', 'County', None, True),
    'ITA': ('nuts3', 'IT', 'Province', 'ITG2', True),
    'CHE': ('nuts3', 'CH', 'Canton', None, True),
    'KOS': ('nuts3', 'XK', 'District', None, False),
    'LVA': ('lau', 'LV', 'Municipality', None, False),
    'LUX': ('lau', 'LU', 'Commune', None, False),
    'SVN': ('lau', 'SI', 'Municipality', None, False),
    'MKD': ('census', 'MK', 'Municipality', None, False),
}
EXPECT = {'NOR': 17, 'CHE': 26, 'KOS': 7, 'LVA': 43, 'LUX': 100, 'SVN': 212, 'MKD': 80, 'ITA': 107}
# Kosovo's official languages are Albanian and Serbian; NUTS gives the Albanian names only. Both, as today.json did ("Viti/Vitina").
BOTH = {'Prishtinë': 'Prishtinë/Priština', 'Mitrovicë': 'Mitrovicë/Mitrovica', 'Pejë': 'Pejë/Peć', 'Prizren': 'Prizren',
        'Ferizaj': 'Ferizaj/Uroševac', 'Gjilan': 'Gjilan/Gnjilane', 'Gjakovë': 'Gjakovë/Đakovica'}


def source(kind):
    if kind == 'census':
        with open(os.path.join(ROOT, 'site', 'data', 'regional', 'geo', 'MK.json'), encoding='utf-8') as f:
            return json.load(f)
    path = os.path.join(CACHE, os.path.basename(FILES[kind]))
    if not os.path.exists(path):
        os.makedirs(CACHE, exist_ok=True)
        print(f'  current-regions: downloading {FILES[kind]}')
        urllib.request.urlretrieve(GISCO + FILES[kind], path)
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def shp(g, arcs):
    ring = lambda idx: [p for k, i in enumerate(idx) for p in (arcs[i] if i >= 0 else arcs[~i][::-1])[(1 if k else 0):]]
    if g['type'] == 'Polygon':
        gj = {'type': 'Polygon', 'coordinates': [ring(r) for r in g['arcs']]}
    elif g['type'] == 'MultiPolygon':
        gj = {'type': 'MultiPolygon', 'coordinates': [[ring(r) for r in p] for p in g['arcs']]}
    else:
        return None
    return shape(gj).buffer(0)


def same(old, new):
    """{index in new: index in old} for the regions that are the same place."""
    if not old or not new:
        return {}
    ot, nt = STRtree([s for _, s in old]), STRtree([s for _, s in new])
    best = lambda s, tree, items: max(((s.intersection(items[i][1]).area, i) for i in tree.query(s) if s.intersects(items[i][1])), default=(0, None))
    out = {}
    for j, (_, s) in enumerate(new):
        a, i = best(s, ot, old)
        if i is None or best(old[i][1], nt, new)[1] != j:
            continue
        if a / max(s.area, old[i][1].area) >= .7:      # nearly the same extent both ways: not a merger or a split
            out[j] = i
    return out


def main():
    today = json.load(open(TODAY, encoding='utf-8'))
    assert 'transform' not in today, 'expected unquantized today.json'
    arcs, regs = today['arcs'], today['objects']['regions']['geometries']
    srcs = {k: source(k) for k in {v[0] for v in REPLACE.values()}}
    decoded = {k: T.decode_arcs(t) for k, t in srcs.items()}
    rnd = lambda arc: [[round(p[0], 5), round(p[1], 5)] for p in arc]
    keep, added = [], []
    for c, (kind, cc, label, prefix, carry) in REPLACE.items():
        t, darcs = srcs[kind], decoded[kind]
        geoms = t['objects'][list(t['objects'])[0]]['geometries']
        if kind == 'census':
            units = [(g, g['properties']['name'], g['properties']['region_id']) for g in geoms]
        elif kind == 'lau':
            units = [(g, g['properties']['LAU_NAME'], g['properties']['GISCO_ID']) for g in geoms if g['properties']['CNTR_CODE'] == cc]
        else:
            units = [(g, BOTH.get(g['properties']['NAME_LATN'], g['properties']['NAME_LATN']) if cc == 'XK' else g['properties']['NAME_LATN'], g['properties']['NUTS_ID'])
                     for g in geoms if g['properties']['CNTR_CODE'] == cc and (not prefix or g['properties']['NUTS_ID'].startswith(prefix))]
        new = [(u, shp(u[0], darcs)) for u in units]
        new = [(u, s) for u, s in new if s is not None and not s.is_empty]
        # the old regions this replaces: the whole country, or (Sardinia) those lying in the new units
        cover = None
        if prefix:
            from shapely.ops import unary_union
            cover = unary_union([s for _, s in new])
        olds = [g for g in regs if g['properties'].get('c') == c]
        oshapes = [(g, shp(g, arcs)) for g in olds]
        if cover is not None:
            oshapes = [(g, s) for g, s in oshapes if s is not None and s.intersection(cover).area > .5 * s.area]
        gone = {id(g) for g, _ in oshapes}
        match = same([(g['properties'], s) for g, s in oshapes], [(u[1], s) for u, s in new]) if carry else {}
        base = len(arcs) + sum(len(a['_arcs']) for a in added)
        used = sorted({i for u, _ in new for i in T.geom_arc_ids(u[0])})
        remap = {old: base + k for k, old in enumerate(used)}
        rm = lambda a: (remap[a] if a >= 0 else ~remap[~a]) if isinstance(a, int) else [rm(x) for x in a]
        geoms_out = []
        for j, ((g, name, sid), _) in enumerate(new):
            prev = oshapes[match[j]][0]['properties'] if j in match else None
            props = {'n': prev['n'] if prev else name, 'nd': prev.get('nd', prev['n']) if prev else name, 'c': c, 't': label, 'src': sid}
            geoms_out.append({'type': g['type'], 'arcs': rm(g['arcs']), 'properties': props})
        added.append({'c': c, '_arcs': [rnd(darcs[i]) for i in used], 'geoms': geoms_out, 'gone': gone,
                      'carried': len(match), 'before': len(oshapes)})
    for a in added:
        arcs.extend(a['_arcs'])
    gone = set().union(*(a['gone'] for a in added))
    regs = [g for g in regs if id(g) not in gone] + [g for a in added for g in a['geoms']]
    # drop the arcs no geometry uses any more, and number the rest again
    allg = regs + today['objects']['countries']['geometries']
    used = sorted({i for g in allg for i in T.geom_arc_ids(g)})
    remap = {old: k for k, old in enumerate(used)}
    rm = lambda a: (remap[a] if a >= 0 else ~remap[~a]) if isinstance(a, int) else [rm(x) for x in a]
    for g in allg:
        if 'arcs' in g:
            g['arcs'] = rm(g['arcs'])
    today['arcs'] = [arcs[i] for i in used]
    today['objects']['regions']['geometries'] = regs
    counts = {a['c']: sum(1 for g in regs if g['properties']['c'] == a['c']) for a in added}
    bad = {c: (n, EXPECT[c]) for c, n in counts.items() if n != EXPECT[c]}
    if bad:
        sys.exit(f'current-regions: unexpected number of regions (got, expected): {bad}')
    with open(TODAY, 'w', encoding='utf-8') as f:
        json.dump(today, f, ensure_ascii=False, separators=(',', ':'))
    print('  current-regions: ' + ', '.join(f"{a['c']} {a['before']} -> {len(a['geoms'])} ({a['carried']} kept their names)" for a in added)
          + f'; {len(today["arcs"])} arcs')


if __name__ == '__main__':
    main()
