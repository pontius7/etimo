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


def devter_romanize(lex):
    with tempfile.TemporaryDirectory() as td:
        js = os.path.join(td, 'romanize.js')
        out = os.path.join(td, 'out.json')
        with open(js, 'w', encoding='utf-8') as f:
            f.write(NODE_SRC)
        subprocess.run(['node', js, D_HTML, os.path.join(D_DIR, 'lexicon.json'), out], check=True)
        with open(out, encoding='utf-8') as f:
            res = json.load(f)
    assert len(res) == len(lex)
    return res


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


def merge_terr():
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
    return out


def merge_dia():
    e, d = load(E_DIR, 'dia.json'), load(D_DIR, 'dia.json')
    out = {k: dict(v) for k, v in e.items()}
    for grp, items in d.items():
        tgt = out.setdefault(grp, {})
        for k, path in items.items():
            assert k not in tgt, f'dia collision {grp}/{k}'
            tgt[k] = reproject_path(path)[0]
    return out


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
    assert all(r['lang'] in langs for r in lex)
    dump('languages.json', langs)
    dump('lexicon.json', lex)
    dump('terr.json', merge_terr())
    dump('dia.json', merge_dia())
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
