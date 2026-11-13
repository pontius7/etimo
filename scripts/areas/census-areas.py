#!/usr/bin/env python3
"""Language areas of a country from its census by municipality: site/data/<country>-areas.json.

Each municipality takes the language most of its people speak (the largest census figure among the site's languages;
answers such as "Serbo-Croatian" or "other" do not count). Municipalities with the same language are joined into one
area. The file has the same form as the other detailed layers ({language: rings}), so the map build
(scripts/map-next/build.py, its CENSUS_AREAS list) draws it like them; the colour is the language's own, from the
palette. A reference image of the same census is only for checking the result, never a source of colours.

  .venv/bin/python scripts/areas/census-areas.py HR     # Croatia, 2021 census, 555 towns and municipalities
  .venv/bin/python scripts/areas/census-areas.py BA     # Bosnia and Herzegovina, 2013 census, 141 municipalities + Brcko

Census rows: site/data/tables/<CC>.json (scripts/build-regional.py). Municipality outlines, per country in SOURCES:
Croatia from site/data/regional/geo/HR.json (the census view's own outlines, joined by the census row id); Bosnia and
Herzegovina from geoBoundaries (BIH ADM3, public domain), kept in scripts/areas/geo/, joined by name (NAMES pairs the
few names that differ). A municipality without an outline leaves a gap that goes to the neighbour it shares most
border with. Needs shapely (the project's .venv).
"""
import csv, json, os, re, sys, unicodedata
from shapely.geometry import Polygon, MultiPolygon, shape
from shapely.ops import unary_union

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA = os.path.join(ROOT, 'site', 'data')

SOURCES = {
    'HR': {'out': 'croatia-areas.json', 'levels': ('Town', 'Municipality'), 'geo': ('topo', os.path.join(DATA, 'regional', 'geo', 'HR.json'))},
    'BA': {'out': 'bosnia-areas.json', 'levels': ('3',), 'extra': ('1', 'BRČKO'), 'geo': ('names', os.path.join(ROOT, 'scripts', 'areas', 'geo', 'BIH-ADM3.geojson'))},
}
# census name -> outline name, where they differ (Bosnia); (name, 'north'/'south') picks one of two outlines with that name
NAMES = {'BA': {'DOBOJ-ISTOK': 'Doboj East', 'FOČA - FBiH': 'Foča-Ustikolina', 'PALE - FBiH': 'Pale-Prača', 'GRAD MOSTAR': 'Mostar',
                'PROZOR': 'Prozor-Rama', 'CENTAR SARAJEVO': 'Centar', 'NOVI GRAD SARAJEVO': ('Novi Grad', 'south'),
                'NOVI GRAD': ('Novi Grad', 'north'), 'STARI GRAD SARAJEVO': 'Stari Grad', 'TRNOVO - FBiH': 'Trnovo (BiH)',
                'KUPRES - FBiH': 'Kupres (BiH)', 'FOČA - RS': 'Foča', 'KRUPA NA UNI': 'Kupra na Uni', 'KUPRES - RS': 'Kupres',
                'NOVO GORAŽDE': 'Ustiprača',          # the municipality's name until 2005
                'PALE - RS': 'Pale', 'VIŠEGRAD': 'Republika Srpska',  # the source names Višegrad's outline wrongly
                'BRČKO DISTRIKT BOSNE I HERCEGOVINE BRČKO DISTRICT OF BOSNIA AND HERZEGOVINA': 'Brcko District'}}


def norm(s):
    s = unicodedata.normalize('NFD', str(s)).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', s)).strip()


def topo_shapes(path):
    """{region_id: shape} from a quantized TopoJSON file."""
    t = json.load(open(path, encoding='utf-8'))
    (sx, sy), (tx, ty) = t['transform']['scale'], t['transform']['translate']
    arcs = []
    for a in t['arcs']:
        x = y = 0
        pts = []
        for dx, dy in a:
            x, y = x + dx, y + dy
            pts.append((x * sx + tx, y * sy + ty))
        arcs.append(pts)
    ring = lambda ids: [p for k, i in enumerate(ids) for p in (arcs[i] if i >= 0 else arcs[~i][::-1])[(1 if k else 0):]]
    out = {}
    for g in next(iter(t['objects'].values()))['geometries']:
        polys = [g['arcs']] if g['type'] == 'Polygon' else g['arcs'] if g['type'] == 'MultiPolygon' else []
        ps = [Polygon(ring(p[0]), [ring(h) for h in p[1:]]).buffer(0) for p in polys]
        if ps:
            out[g['properties']['region_id']] = unary_union(ps)
    return out


def main(cc):
    src = SOURCES[cc]
    table = json.load(open(os.path.join(DATA, 'tables', cc + '.json'), encoding='utf-8'))
    site = set(json.load(open(os.path.join(DATA, 'languages.json'), encoding='utf-8')))
    labels = {}
    with open(os.path.join(ROOT, 'content', 'census-language-names.csv'), encoding='utf-8') as f:
        for r in csv.DictReader(l for l in f if l.strip() and not l.startswith('#')):
            labels[r['label'].casefold()] = r['language']
    lang = lambda o: next((n for n in (o.get('language_id'), o['language'], labels.get(o['language'].casefold())) if n in site), None)

    levels = table['levels']
    rows = [r for r in table['regions'] if levels[r[2]] in src['levels']]
    if src.get('extra'):
        rows += [r for r in table['regions'] if levels[r[2]] == src['extra'][0] and src['extra'][1] in r[1]]
    parts = {}

    def obs(r):
        if r[3] not in parts:
            parts[r[3]] = json.load(open(os.path.join(DATA, 'tables', cc, '%s.json' % r[3]), encoding='utf-8'))
        return parts[r[3]].get(r[0], [])

    kind, path = src['geo']
    if kind == 'topo':
        geo = topo_shapes(path)
        where = lambda r: geo.get(r[0])
    else:
        feats = [(f['properties']['shapeName'], shape(f['geometry']).buffer(0)) for f in json.load(open(path, encoding='utf-8'))['features']]
        by = {}
        for n, g in feats:
            by.setdefault(norm(n), []).append(g)

        def where(r):
            want = NAMES.get(cc, {}).get(r[1], r[1])
            pick = None
            if isinstance(want, tuple):
                want, pick = want
            gs = by.get(norm(want), [])
            if pick and len(gs) > 1:
                gs = [max(gs, key=lambda g: g.centroid.y) if pick == 'north' else min(gs, key=lambda g: g.centroid.y)]
            return gs[0] if len(gs) == 1 else None

    areas, missing, nolang, count = {}, [], [], {}
    for r in rows:
        g = where(r)
        if g is None:
            missing.append(r[1])
            continue
        best = {}
        for o in obs(r):
            n = o.get('kind') == 'language_response' and o.get('count') and lang(o)
            if n:
                best[n] = best.get(n, 0) + o['count']
        if not best:
            nolang.append(r[1])
            continue
        top = max(best, key=best.get)
        areas.setdefault(top, []).append(g)
        count[top] = count.get(top, 0) + 1
    shapes = {n: unary_union(gs) for n, gs in areas.items()}

    # gaps inside the country (a municipality without an outline or without figures) go to the neighbour with most shared border
    whole = unary_union(list(shapes.values()))
    outer = unary_union([Polygon(p.exterior) for p in (whole.geoms if hasattr(whole, 'geoms') else [whole])])
    gaps = outer.difference(whole)
    for gap in (gaps.geoms if hasattr(gaps, 'geoms') else [gaps]):
        if gap.area < 1e-7:
            continue
        side = {n: g.intersection(gap.buffer(.002)).area for n, g in shapes.items()}
        n = max(side, key=side.get)
        if side[n] > 0:
            shapes[n] = unary_union([shapes[n], gap])

    out = {}
    for n, g in sorted(shapes.items()):
        g = g.buffer(0).simplify(.0015, preserve_topology=True)
        rings = []
        for p in (g.geoms if hasattr(g, 'geoms') else [g]):
            if p.area < 2e-6:
                continue
            for r in [p.exterior, *p.interiors]:
                rings.append([[round(x, 4), round(y, 4)] for x, y in r.coords])
        out[n] = rings
    dest = os.path.join(DATA, src['out'])
    json.dump(out, open(dest, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('%s: %d municipalities -> %s; %s' % (cc, sum(count.values()), src['out'], ', '.join('%s %d' % kv for kv in sorted(count.items(), key=lambda kv: -kv[1]))))
    if missing:
        print('  no outline (gap filled from neighbours): ' + ', '.join(missing))
    if nolang:
        print('  no figure for a site language: ' + ', '.join(nolang))


if __name__ == '__main__':
    if len(sys.argv) < 2 or sys.argv[1] not in SOURCES:
        sys.exit('usage: census-areas.py ' + '|'.join(SOURCES))
    for cc in sys.argv[1:]:
        main(cc)
