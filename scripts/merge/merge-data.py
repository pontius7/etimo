#!/usr/bin/env python3
"""Merge Devter's data into Etimo's data folder layout.

Reads  reference/etimo-artifact/data/*  and  reference/devter-artifact/data/*
Writes site/data/{lexicon,languages,terr,dia,today,adm2,micro,ethno}.json

Rerunnable and idempotent: output depends only on the two reference folders.
Never touches reference/ or files owned by other branches (regional-*, countries/*).

Steps
  1. languages.json  key union (Etimo first, then Devter). No name collisions (asserted).
  2. lexicon.json    Etimo records verbatim, then Devter records with
                     - gc copied from languages.json (parity with Etimo records)
                     - lat/ipa precomputed with Devter's own runtime functions (aN/aE and the
                       rule tables rP/rq/rA/rO), extracted from Devter's index.html and run in node,
                       so Etimo's display function ai() shows exactly what Devter showed.
  3. terr.json/dia.json  Devter paths re-projected from Devter's reference frame
                     (conic conformal [42,66] rot -72) into Etimo's ([35,60] rot -30), then unioned.
                     terr entries also get `v`, a non-overlapping shape used for drawing (see
                     add_visual_partition); `d` stays the full area for hover/selection.

Requires shapely (scripts/merge/requirements.txt):
  python3 -m venv .venv && .venv/bin/pip install -r scripts/merge/requirements.txt
  .venv/bin/python scripts/merge/merge-data.py
  4. today.json      Etimo topology kept; for countries where Devter has regions Etimo lacks,
                     that country's regions are taken from Devter (arcs decoded + appended);
                     Devter-only countries appended.
  5. adm2.json, micro.json, ethno.json  copied verbatim (micro indexes adm2 by array position).
"""
import json, math, os, re, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, HERE)
import topo as T  # noqa: E402

E_DIR = os.path.join(ROOT, 'reference', 'etimo-artifact', 'data')
D_DIR = os.path.join(ROOT, 'reference', 'devter-artifact', 'data')
D_HTML = os.path.join(ROOT, 'reference', 'devter-artifact', 'index.html')
OUT = os.path.join(ROOT, 'site', 'data')


def load(d, name):
    with open(os.path.join(d, name), encoding='utf-8') as f:
        return json.load(f)


def dump(name, obj):
    path = os.path.join(OUT, name)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'))
    print(f'  wrote data/{name} ({os.path.getsize(path):,} bytes)')


# ---------------------------------------------------------------- projection
class Conic:
    """d3.geoConicConformal raw projection at scale 1000, translate [0,0] (the 'reference frame')."""

    def __init__(self, p0, p1, rot):
        y0, y1 = math.radians(p0), math.radians(p1)
        ty = lambda y: math.tan((math.pi / 2 + y) / 2)
        self.n = math.log(math.cos(y0) / math.cos(y1)) / math.log(ty(y1) / ty(y0))
        self.f = math.cos(y0) * ty(y0) ** self.n / self.n
        self.rot = rot  # degrees added to lon (d3 rotate([rot,0]))
        self.ty = ty

    def fwd(self, lon, lat):
        lam = math.radians(((lon + self.rot + 180) % 360) - 180)
        r = self.f / self.ty(math.radians(lat)) ** self.n
        return 1000 * r * math.sin(self.n * lam), -1000 * (self.f - r * math.cos(self.n * lam))

    def inv(self, x, y):
        x, y = x / 1000, -y / 1000
        fy = self.f - y
        r = math.copysign(math.hypot(x, fy), self.n)
        lam = math.atan2(x, abs(fy)) * math.copysign(1, fy)
        if fy * self.n < 0:
            lam -= math.pi * math.copysign(1, x) * math.copysign(1, fy)
        lam /= self.n
        lat = 2 * math.atan((self.f / r) ** (1 / self.n)) - math.pi / 2
        return math.degrees(lam) - self.rot, math.degrees(lat)


ETIMO = Conic(35, 60, -30)
DEVTER = Conic(42, 66, -72)
NUM = re.compile(r'(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)')


def reproject_path(d):
    pts = []

    def sub(m):
        lon, lat = DEVTER.inv(float(m.group(1)), float(m.group(2)))
        x, y = ETIMO.fwd(lon, lat)
        pts.append((x, y))
        return f'{x:.1f},{y:.1f}'
    return NUM.sub(sub, d), pts


def selftest_projection():
    # spec: Etimo Russian terr point (196.7,-1060.2) is about 50.3E 55.2N
    lon, lat = ETIMO.inv(196.7, -1060.2)
    assert abs(lon - 50.3) < .2 and abs(lat - 55.2) < .2, (lon, lat)
    # spec: Devter Finnish dia point is about 11.7E 59.6N; round trip check
    for lon, lat in [(11.7, 59.6), (130, 62), (44.6, 42), (-8, 30)]:
        for P in (ETIMO, DEVTER):
            x, y = P.fwd(lon, lat)
            l2, b2 = P.inv(x, y)
            assert abs(l2 - lon) < 1e-6 and abs(b2 - lat) < 1e-6, (lon, lat, l2, b2)


# ---------------------------------------------------------------- Devter transliteration / IPA
NODE_SRC = r'''
const fs=require('fs');const s=fs.readFileSync(process.argv[2],'utf8');
function seg(a,b){const i=s.indexOf(a);if(i<0)throw Error('missing '+a);const j=s.indexOf(b,i);if(j<0)throw Error('missing '+b);return s.slice(i,j+b.length)}
// rule tables (rP, rq, rA, rO) and the Livvi alias; then rI cache
const tables=seg('let rP={','rq["Livvi Karelian"]=rq.Karelian;');
// Cyrillic map aS + aE + aj + aN
const fns=seg('let aS={','return"/"+(i=i.replace(/ːː+/g,"ː").replace(/\\s*~\\s*/g," ~ ").replace(/\\s*;\\s*/g,", "))+"/"}(e.word,e._l):""}');
const code=tables+'let rI={};'+fns+';module.exports={aN,aE,aj};';
const m={exports:{}};new Function('module',code)(m);
const {aN,aE,aj}=m.exports;
const lex=JSON.parse(fs.readFileSync(process.argv[3],'utf8'));
const out=lex.map(r=>r.entries.map(e=>{e._l=r.lang;const geo=/[Ⴀ-ჿ]/.test(e.word);const cyr=aj(e.word);
  return [cyr?'c':geo?'g':'x', aN(e)]}));
fs.writeFileSync(process.argv[4],JSON.stringify(out));
'''


def devter_romanize(lex, path=None):
    """Run Devter's own aN() over lexicon records (default: Devter's lexicon.json)."""
    with tempfile.TemporaryDirectory() as td:
        js = os.path.join(td, 'romanize.js')
        out = os.path.join(td, 'out.json')
        with open(js, 'w', encoding='utf-8') as f:
            f.write(NODE_SRC)
        if path is None:
            path = os.path.join(D_DIR, 'lexicon.json')
        subprocess.run(['node', js, D_HTML, path, out], check=True)
        with open(out, encoding='utf-8') as f:
            res = json.load(f)
    if lex is not None:
        assert len(res) == len(lex)
    return res


# ---------------------------------------------------------------- your additions (content/)
CONTENT = os.path.join(ROOT, 'content')
FAMILIES = ['Slavic', 'Iranian', 'Albanian', 'Greek', 'Romance', 'Caucasian', 'Turkic', 'Uralic', 'Mongolic']
_AREAS = {}
_NEWFAM = {}


def add_content(langs, lex):
    """Add languages from content/languages/*.json and words from content/words/*.csv.

    See content/README.md. Errors stop the build with the file and row that caused them.
    Returns the number of words added."""
    import csv
    import glob
    by_lang = {r['lang']: r for r in lex}
    for f in sorted(glob.glob(os.path.join(CONTENT, 'languages', '*.json'))):
        defs = json.load(open(f, encoding='utf-8'))
        for d in (defs if isinstance(defs, list) else [defs]):
            where = f'{os.path.relpath(f, ROOT)}: {d.get("name")}'
            for k in ('name', 'family', 'lat', 'lon', 'place', 'path'):
                assert d.get(k) not in (None, '', []), f'{where}: missing "{k}"'
            assert d['family'] in FAMILIES, f'{where}: family must be one of {FAMILIES}'
            assert d['name'] not in langs, f'{where}: language already exists'
            assert -180 <= d['lon'] <= 180 and -90 <= d['lat'] <= 90, f'{where}: lat/lon out of range'
            langs[d['name']] = {'gc': d.get('glottocode'), 'lat': d['lat'], 'lon': d['lon'],
                                'cc': d.get('countries', []), 'path': d['path'],
                                'sp': ({'v': d['speakers'], 'y': d.get('speakers_year', ''),
                                        'src': d.get('speakers_source', '')} if d.get('speakers') else None),
                                'lv': d.get('status'), 'an': d.get('self_name'), 'coordSrc': d.get('source')}
            rec = {'lang': d['name'], 'place': d['place'], 'family': d['family'], 'entries': []}
            _NEWFAM[d['name']] = d['family']
            if d.get('glottocode'):
                rec['gc'] = d['glottocode']
            lex.append(rec)
            by_lang[d['name']] = rec
            if d.get('area'):
                _AREAS[d['name']] = d['area']
    import dedupe
    internal = dedupe.find_internal_duplicates(lex)
    idx = {}  # language -> DupIndex of everything kept so far (built on first use)

    def index_for(rec):
        if rec['lang'] not in idx:
            d = idx[rec['lang']] = dedupe.DupIndex()
            for e in rec['entries']:
                d.add(rec['lang'], e, dedupe.ref_label(e))
        return idx[rec['lang']]

    stats, skipped, conflict_rows = {'read': 0, 'added': 0}, [], []
    new = []
    for f in sorted(glob.glob(os.path.join(CONTENT, 'words', '*.csv'))):
        with open(f, encoding='utf-8-sig', newline='') as fh:
            for i, row in enumerate(csv.DictReader(fh), start=2):
                row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
                if not any(row.values()):
                    continue
                where = f'{os.path.relpath(f, ROOT)} line {i}'
                for k in ('language', 'word', 'meaning'):
                    assert row.get(k), f'{where}: missing "{k}"'
                rec = by_lang.get(row['language'])
                assert rec, f'{where}: unknown language "{row["language"]}" (add it in content/languages/)'
                stats['read'] += 1
                ent = {'word': row['word'], 'lat': row.get('latin') or None, 'meaning': row['meaning'],
                       'src': [row.get('source') or os.path.splitext(os.path.basename(f))[0]]}
                if row.get('ipa'):
                    ent['ipa'] = row['ipa'].strip('/')
                d = index_for(rec)
                hit = d.find(rec['lang'], ent)
                if hit:  # duplicate: skip it (rerunning never duplicates) and say so in the report
                    kept, reason = hit
                    s = {'file': os.path.relpath(f, ROOT), 'line': i, 'lang': rec['lang'], 'word': row['word'],
                         'meaning': row['meaning'], 'of': kept['label'], 'reason': reason,
                         'conflicts': dedupe.conflicts({'ipa': row.get('ipa'), 'lat': row.get('latin'),
                                                        'src': [row['source']] if row.get('source') else []},
                                                       kept['cmp'])}
                    skipped.append(s)
                    if s['conflicts']:
                        conflict_rows.append(s)
                    continue
                d.add(rec['lang'], ent, f'"{row["word"]}" from {where}',
                      {'ipa': row.get('ipa'), 'lat': row.get('latin'), 'src': ent['src']})
                stats['added'] += 1
                rec['entries'].append(ent)
                new.append((rec, ent))
    if new:  # same reading rules as the Devter words: Cyrillic -> Latin, Latin script -> IPA
        tmp = [{'lang': r['lang'], 'entries': [e]} for r, e in new]
        with tempfile.NamedTemporaryFile('w', suffix='.json', delete=False, encoding='utf-8') as t:
            json.dump(tmp, t, ensure_ascii=False)
        try:
            res = devter_romanize(None, t.name)
        finally:
            os.unlink(t.name)
        for (rec, ent), [[kind, shown]] in zip(new, res):
            if kind == 'c' and not ent['lat']:
                ent['lat'] = shown or None
            elif kind == 'x':
                if not ent.get('ipa') and shown.startswith('/') and len(shown) > 2:
                    ent['ipa'] = shown[1:-1]
                if not ent['lat']:
                    ent['lat'] = ent['word']
    report = os.path.join(CONTENT, 'duplicates-report.txt')
    dedupe.write_report(report, stats, skipped, conflict_rows, internal)
    print(f'  content/: {len(_AREAS)} new language areas, +{len(new)} words, '
          f'{len(skipped)} duplicates skipped ({len(conflict_rows)} with different data) '
          f'-> {os.path.relpath(report, ROOT)}')
    return len(new)


def add_content_areas(terr, langs):
    """Optional home-area polygon for a new language ([[lon,lat],...] ring) -> terr.json entry."""
    from shapely.geometry import Polygon
    for name, ring in _AREAS.items():
        pts = [ETIMO.fwd(lon, lat) for lon, lat in ring]
        g = Polygon(pts).buffer(0)
        xs, ys = [p[0] for p in pts], [p[1] for p in pts]
        terr[name] = {'d': _geom_path(g, 0), 'a': round(g.area * 6.371 ** 2),
                      'b': [round(min(xs), 1), round(min(ys), 1), round(max(xs), 1), round(max(ys), 1)]}


# ---------------------------------------------------------------- steps
def merge_languages():
    e, d = load(E_DIR, 'languages.json'), load(D_DIR, 'languages.json')
    clash = set(e) & set(d)
    assert not clash, f'language name collision: {clash}'
    gce = {v.get('gc') for v in e.values()} - {None}
    gcd = {v.get('gc') for v in d.values()} - {None}
    assert not (gce & gcd), f'glottocode collision: {gce & gcd}'
    out = dict(e)
    out.update(d)
    return out, e, d


def merge_lexicon(langs):
    e, d = load(E_DIR, 'lexicon.json'), load(D_DIR, 'lexicon.json')
    slug = lambda s: re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', s.lower()))
    se, sd = {slug(r['lang']) for r in e}, {slug(r['lang']) for r in d}
    assert not (se & sd), f'id slug collision: {se & sd}'
    rom = devter_romanize(d)
    out = list(e)
    stats = {'lat_translit': 0, 'lat_word': 0, 'ipa_rules': 0}
    for r, rr in zip(d, rom):
        rec = {'lang': r['lang'], 'place': r['place'], 'family': r['family']}
        gc = (langs.get(r['lang']) or {}).get('gc')
        if gc:
            rec['gc'] = gc
        ents = []
        for ent, (kind, shown) in zip(r['entries'], rr):
            ent = dict(ent)
            if kind == 'c':
                # Devter shows lat when present, else its Cyrillic transliteration aE(word)
                if shown and shown != ent.get('lat'):
                    stats['lat_translit'] += 1
                ent['lat'] = shown or ent.get('lat')
            elif kind == 'x':
                # Latin / transcription: Devter shows rule-based IPA. Store it as ipa (no slashes)
                # and keep lat = the spelling so the A-Z index sorts by spelling, as Devter did.
                if shown.startswith('/') and shown.endswith('/') and len(shown) > 2:
                    ent['ipa'] = shown[1:-1]
                    stats['ipa_rules'] += 1
                if ent.get('lat') is None:
                    ent['lat'] = ent['word']
                    stats['lat_word'] += 1
            # kind 'g' (Georgian): Devter shows lat if present, else nothing -> unchanged
            ents.append(ent)
        rec['entries'] = ents
        out.append(rec)
    print('  devter romanization:', stats)
    return out


def merge_terr(langs):
    e, d = load(E_DIR, 'terr.json'), load(D_DIR, 'terr.json')
    assert not (set(e) & set(d)), set(e) & set(d)
    out = dict(e)
    for k, v in d.items():
        path, pts = reproject_path(v['d'])
        xs, ys = [p[0] for p in pts], [p[1] for p in pts]
        nv = dict(v)
        nv['d'] = path
        nv['b'] = [round(min(xs), 1), round(min(ys), 1), round(max(xs), 1), round(max(ys), 1)]
        out[k] = nv
    add_content_areas(out, langs)
    nest = add_visual_partition(out, set(e), langs, set(load(E_DIR, 'languages.json')))
    for k, n in nest.items():
        langs[k]['nest'] = n
    return out


def _path_geom(d):
    """SVG path (absolute M/L/Z rings, even-odd) -> shapely geometry."""
    from shapely.geometry import Polygon
    from shapely.validation import make_valid
    g = None
    for ring in d.split('M'):
        ring = ring.replace('Z', '').strip()
        if not ring:
            continue
        pts = [tuple(map(float, p.split(','))) for p in ring.split('L')]
        if len(pts) < 3:
            continue
        p = make_valid(Polygon(pts))
        g = p if g is None else g.symmetric_difference(p)
    return make_valid(g) if g is not None else None


def _geom_path(g, min_area=0.3):
    from shapely.geometry import Polygon, MultiPolygon, GeometryCollection
    polys = []
    stack = [g]
    while stack:
        x = stack.pop()
        if isinstance(x, Polygon):
            polys.append(x)
        elif isinstance(x, (MultiPolygon, GeometryCollection)):
            stack.extend(x.geoms)
    out = []
    for p in polys:
        if p.area < min_area:
            continue
        for ring in [p.exterior, *p.interiors]:
            c = list(ring.coords)[:-1]
            if len(c) >= 3:
                out.append('M' + 'L'.join(f'{x:.1f},{y:.1f}' for x, y in c) + 'Z')
    return ''.join(out)


def approx_circles(langs, terr):
    """The app's fallback circles (index.html F(): radius by speakers, clipped to Voronoi cells)."""
    from shapely.geometry import Point, MultiPoint, Polygon
    from shapely.ops import voronoi_diagram

    def speakers(info):
        if info.get('sz'):
            return info['sz']
        sp = info.get('sp')
        if not sp:
            return 5000
        m = re.search(r'\d+', re.sub(r'[,.](?=\d{3})', '', sp.get('v') or ''))
        return int(m.group(0)) if m else 5000
    pts = {k: ETIMO.fwd(v['lon'], v['lat']) for k, v in langs.items() if v.get('lat') is not None}
    vor = voronoi_diagram(MultiPoint(list(pts.values())))
    cells = list(vor.geoms)
    out = {}
    for k, xy in pts.items():
        if k in terr and terr[k].get('d'):
            continue
        a = speakers(langs[k])
        i = 15 if a < 1e3 else 25 if a < 1e4 else 40 if a < 1e5 else 70 if a < 1e6 else 140 if a < 1e7 else 200
        top = ETIMO.fwd(langs[k]['lon'], langs[k]['lat'] + i / 111)
        r = math.hypot(top[0] - xy[0], top[1] - xy[1])
        circ = Polygon([(xy[0] + r * math.cos(t / 72 * 2 * math.pi), xy[1] + r * math.sin(t / 72 * 2 * math.pi))
                        for t in range(72)])
        p = Point(xy)
        cell = next((c for c in cells if c.contains(p)), None)
        out[k] = circ.intersection(cell) if cell is not None else circ
    return out


def add_visual_partition(terr, etimo_keys, langs, etimo_langs):
    """Add `v` = the drawn shape, so that coloured zones never overlap.

    Each language keeps its full home area in `d` (used for hover/selection tests). For drawing,
    a larger area gives way to every smaller one it overlaps (Etimo already draws small areas on
    top of large ones), so each spot of the map is painted by exactly one language. This applies
    to every pair, Etimo's own included (user decision 2026-11-07: no overlapping colours).

    Languages with no area polygon are drawn by the app as an approximate circle (radius from the
    speaker count, clipped to the language's Voronoi cell). Those circles are rebuilt here in the
    same frame with the same rule and also cut out of the larger zones underneath.

    Nested areas (user decision 2026-11-07): a smaller area lying inside a larger area of the SAME
    family (>= 80% of a polygon, >= 95% of a fallback circle) is a "nested" language. Its drawn
    shape is clipped to that parent and it does not cut other same-family zones; the app paints
    it in the colour of its outermost same-family ancestor (`info.nest`) until it is selected,
    then in its own colour. Returns {language: outermost same-family ancestor}.
    """
    from shapely import union_all
    G = {k: _path_geom(v['d']) for k, v in terr.items()}
    circles = approx_circles(langs, terr)
    fam = family_of()
    parent = {}
    for k, g in list(G.items()) + list(circles.items()):
        if g is None or g.area == 0:
            continue
        need = 0.95 if k in circles else 0.8
        best = None
        for m, h in G.items():
            if m == k or h is None or fam[m] != fam[k] or (k in terr and terr[m]['a'] <= terr[k]['a']):
                continue
            if g.intersects(h):
                f = g.intersection(h).area / g.area
                if f >= need and (best is None or f > best[1]):
                    best = (m, f)
        if best:
            parent[k] = best[0]

    def root(k):
        seen = set()
        while k in parent and k not in seen:
            seen.add(k)
            k = parent[k]
        return k
    keys = sorted(terr, key=lambda k: (terr[k]['a'], k))  # small -> large
    plain = [k for k in keys if k not in parent]
    V = {}
    # pass 1: non-nested zones; smaller wins, fallback circles win
    for i, k in enumerate(plain):
        g = G[k]
        if g is None:
            continue
        cut = [G[m] for m in plain[:i] if G[m] is not None and g.intersects(G[m])]
        cut += [c for c in circles.values() if g.intersects(c)]
        V[k] = g.difference(union_all(cut)) if cut else g
    # pass 2: nested zones (outermost first) take their spot out of the parent's drawn shape only
    for k in sorted((k for k in keys if k in parent), key=lambda k: (-terr[k]['a'], k)):
        g = G[k]
        cut = [G[m] for m in plain if terr[m]['a'] < terr[k]['a'] and G[m] is not None and g.intersects(G[m])]
        cut += [c for c in circles.values() if g.intersects(c)]
        own = (g.difference(union_all(cut)) if cut else g).intersection(V[parent[k]])
        V[parent[k]] = V[parent[k]].difference(own)
        V[k] = own
    changed = 0
    for k, rest in V.items():
        if abs(rest.area - G[k].area) < 0.5:
            continue
        terr[k]['v'] = _geom_path(rest)
        changed += 1
    nest = {k: root(k) for k in parent}
    print(f'  terr: non-overlapping drawn shapes for {changed} languages; nested same-family: {len(nest)}')
    return nest


def family_of():
    fam = {}
    for d in (E_DIR, D_DIR):
        for r in load(d, 'lexicon.json'):
            fam[r['lang']] = r['family']
    fam.update(_NEWFAM)
    return fam


def merge_dia(terr, langs):
    e, d = load(E_DIR, 'dia.json'), load(D_DIR, 'dia.json')
    out = {k: dict(v) for k, v in e.items()}
    for grp, items in d.items():
        tgt = out.setdefault(grp, {})
        for k, path in items.items():
            assert k not in tgt, f'dia collision {grp}/{k}'
            tgt[k] = reproject_path(path)[0]
    separate_family_dia(out['fam'], set(e['fam']), terr, set(load(E_DIR, 'terr.json')), langs,
                        set(load(E_DIR, 'languages.json')))
    return out


def separate_family_dia(fam, etimo_fams, terr, etimo_terr, langs, etimo_langs):
    """Family-level diaspora shading is always on screen (under the home zones), so it must not
    overlap a home zone (polygon or fallback circle) or another family's diaspora: each shape
    loses every home zone and every smaller diaspora shape it overlaps."""
    from shapely import union_all
    G = {k: _path_geom(v) for k, v in fam.items()}
    circles = approx_circles(langs, terr)
    zones_d = union_all([_path_geom(v['d']) for k, v in terr.items() if k not in etimo_terr]
                        + [c for k, c in circles.items() if k not in etimo_langs])
    zones_all = union_all([zones_d] + [_path_geom(v['d']) for k, v in terr.items() if k in etimo_terr]
                          + [c for k, c in circles.items() if k in etimo_langs])
    order = sorted(fam, key=lambda k: (G[k].area, k))
    for i, k in enumerate(order):
        g = G[k]
        cut = [zones_all]
        cut += [G[m] for m in order[:i] if g.intersects(G[m])]
        rest = g.difference(union_all(cut))
        if abs(rest.area - g.area) >= 0.5:
            print(f'  dia {k}: {g.area:,.0f} -> {rest.area:,.0f} (frame units^2)')
            fam[k] = _geom_path(rest)


def merge_today():
    e, d = load(E_DIR, 'today.json'), load(D_DIR, 'today.json')
    assert 'transform' not in e, 'expected unquantized Etimo topology'
    d_arcs = T.decode_arcs(d)

    def regions_by_c(t):
        out = {}
        for g in t['objects']['regions']['geometries']:
            out.setdefault(g['properties'].get('c'), []).append(g)
        return out
    er, dr = regions_by_c(e), regions_by_c(d)
    take = []
    for c, geoms in dr.items():
        en = {g['properties']['n'] for g in er.get(c, [])}
        dn = {g['properties']['n'] for g in geoms}
        if dn - en and en <= dn:  # Devter strictly richer (Etimo's set was clipped to its map)
            take.append(c)
    take.sort()
    ec = {g['properties'].get('c') for g in e['objects']['countries']['geometries']}
    add_countries = [g for g in d['objects']['countries']['geometries'] if g['properties'].get('c') not in ec]

    # append only the Devter arcs that are used, re-indexed
    used = set()
    for c in take:
        for g in dr[c]:
            T.geom_arc_ids(g, used)
    for g in add_countries:
        T.geom_arc_ids(g, used)
    used = sorted(used)
    base = len(e['arcs'])
    remap = {old: base + i for i, old in enumerate(used)}

    def rm(a):
        if isinstance(a, int):
            return remap[a] if a >= 0 else ~remap[~a]
        return [rm(x) for x in a]

    def regeom(g):
        g = dict(g)
        if 'arcs' in g:
            g['arcs'] = rm(g['arcs'])
        return g
    rnd = lambda arc: [[round(p[0], 5), round(p[1], 5)] for p in arc]
    out = dict(e)
    out['arcs'] = e['arcs'] + [rnd(d_arcs[i]) for i in used]
    regs = [g for g in e['objects']['regions']['geometries'] if g['properties'].get('c') not in take]
    regs += [regeom(g) for c in take for g in dr[c]]
    out['objects'] = {
        'regions': dict(e['objects']['regions'], geometries=regs),
        'countries': dict(e['objects']['countries'],
                          geometries=e['objects']['countries']['geometries'] + [regeom(g) for g in add_countries]),
    }
    print(f'  today: regions from Devter for {take}; +{len(add_countries)} countries '
          f'{sorted(g["properties"].get("c") for g in add_countries)}; +{len(used)} arcs')
    return out


def copy_verbatim(name):
    with open(os.path.join(D_DIR, name), 'rb') as f:
        data = f.read()
    with open(os.path.join(OUT, name), 'wb') as f:
        f.write(data)
    print(f'  copied data/{name} ({len(data):,} bytes)')


def main():
    selftest_projection()
    os.makedirs(OUT, exist_ok=True)
    langs, el, dl = merge_languages()
    lex = merge_lexicon(langs)
    assert len(lex) == len(langs) == len(el) + len(dl)
    added = add_content(langs, lex)
    terr = merge_terr(langs)  # also sets langs[*]['nest']; includes content/ areas
    dump('languages.json', langs)
    dump('lexicon.json', lex)
    dump('terr.json', terr)
    assert len(lex) == len(langs) and all(r['lang'] in langs for r in lex)
    dump('dia.json', merge_dia(terr, langs))
    dump('today.json', merge_today())
    for n in ('adm2.json', 'micro.json', 'ethno.json'):
        copy_verbatim(n)
    # micro.json h/x index into adm2.json features by array position: keep them in sync
    adm2 = load(OUT, 'adm2.json')
    nfeat = len(adm2['objects']['d']['geometries'])
    micro = load(OUT, 'micro.json')
    mx = max([i for v in micro.values() for k in ('h', 'x') for i, _ in (v.get(k) or [])] or [0])
    assert mx < nfeat, f'micro.json references adm2 index {mx} >= {nfeat}'
    print(f'  merged languages: {len(langs)} ({len(el)} Etimo + {len(dl)} Devter); '
          f'entries: {sum(len(r["entries"]) for r in lex):,}; adm2 features {nfeat}, max micro index {mx}')


if __name__ == '__main__':
    main()
