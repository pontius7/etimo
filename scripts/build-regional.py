#!/usr/bin/env python3
"""Rebuild the lazy-loaded regional map data and country tables.

Reads the original (monolithic) files and writes small, on-demand files:

  site/data/regional/index.json          countries, feature counts, language -> countries
  site/data/regional/geo/<CC>.json       per-country quantised TopoJSON (object "regions")
  site/data/regional/geo/GR-regions.json Greece NUTS-2 regions (replaces greece-regions.geojson)
  site/data/regional/ME.json             every Montenegro record (map needs all of them)
  site/data/regional/lang/<n>.json       one language: {CC: [[feature, meta, count, pct, denom]...]}
  site/data/tables/<CC>.json             modal index (small countries: full original table)
                                         index rows: [id, name, level#, chunk#, {group#: [name#, pct] | 0}]
  site/data/tables/<CC>/<n>.json         region detail chunks {region_id: observations}

Source directory: --src (default: site/data if the originals are still there,
otherwise reference/etimo-artifact/data, which is an untouched copy).
Geometry is simplified with mapshaper (Douglas-Peucker, --interval metres,
default 3 m: ~0.15 device px at the app's maximum zoom of 150x) and quantised.
"""
import argparse, json, os, shutil, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site', 'data')
REF = os.path.join(ROOT, 'reference', 'etimo-artifact', 'data')
CHUNKED_MIN = 200_000      # tables bigger than this get an index + detail chunks
CHUNK_TARGET = 300_000     # bytes per detail chunk (raw JSON)
DROP_OBS = ('language_id', 'status', 'threshold')   # unused by country-data.js


def num(v):
    return int(v) if isinstance(v, float) and v.is_integer() else v


def dump(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'))
    return os.path.getsize(path)


def load(src, name):
    with open(os.path.join(src, name), encoding='utf-8') as f:
        return json.load(f)


def build_regional(src, interval):
    out = os.path.join(SITE, 'regional')
    shutil.rmtree(out, ignore_errors=True)
    geo = load(src, 'regional-boundaries.geojson')
    values = {}
    for i in (1, 2, 3):                       # same merge as Object.assign({}, ...parts)
        values.update(load(src, f'regional-observations-{i}.json'))
    order, by_cc = [], {}
    for f in geo['features']:
        cc = f['properties']['country_code']
        if cc not in by_cc:
            order.append(cc); by_cc[cc] = []
        by_cc[cc].append(f)
    # Countries must be contiguous so that drawing them in `order` keeps the original DOM order.
    seen = [f['properties']['country_code'] for f in geo['features']]
    assert sum(1 for a, b in zip(seen, seen[1:]) if a != b) == len(order) - 1, 'countries not contiguous'

    tmp = tempfile.mkdtemp()
    def topo(features, keep, name):
        feats = [{'type': 'Feature', 'geometry': f['geometry'],
                  'properties': {k: f['properties'][k] for k in keep}} for f in features]
        gj = os.path.join(tmp, name + '.geojson')
        with open(gj, 'w') as fh:
            json.dump({'type': 'FeatureCollection', 'features': feats}, fh)
        dst = os.path.join(out, 'geo', name + '.json')
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        cmd = ['npx', '-y', 'mapshaper', '-i', gj, 'name=regions',
               '-simplify', 'dp', f'interval={interval}', 'keep-shapes',
               '-o', dst, 'format=topojson', 'quantization=1000000']
        subprocess.run(cmd, check=True, capture_output=True)
        t = json.load(open(dst))
        got = [g['properties']['region_id'] for g in t['objects']['regions']['geometries']]
        assert got == [f['properties']['region_id'] for f in features], name + ': feature order/ids changed'
        return dump(dst, t)
    total = sum(topo(by_cc[cc], ('region_id', 'name'), cc) for cc in order)
    # Greece NUTS-2 regions (mask, outline and qualitative layer); country_code is restored by the loader.
    total += topo(load(src, 'greece-regions.geojson')['features'], ('region_id', 'name', 'qualitative'), 'GR-regions')
    shutil.rmtree(tmp)

    # Map-time observations. Only fields the map reads are kept.
    meta, meta_ix = [], {}
    def mi(o):
        k = (o['observation_period'], o['measure'], o['source_id'])
        if k not in meta_ix:
            meta_ix[k] = len(meta); meta.append(list(k))
        return meta_ix[k]
    keep = ('language_id', 'count', 'percentage', 'denominator', 'observation_period', 'measure', 'source_id')
    me = {f['properties']['region_id']: [{k: num(o[k]) for k in keep} for o in values.get(f['properties']['region_id'], [])]
          for f in by_cc.get('ME', [])}
    total += dump(os.path.join(out, 'ME.json'), me)
    langs = {}
    for cc in order:
        if cc == 'ME':
            continue
        for ix, f in enumerate(by_cc[cc]):
            for o in values.get(f['properties']['region_id'], []):
                rows = langs.setdefault(o['language_id'], {}).setdefault(cc, [])
                rows.append([ix, mi(o), num(o['count']), num(o['percentage']), num(o['denominator'])])
    files = {}
    for n, (lang, rows) in enumerate(sorted(langs.items())):
        files[lang] = n
        total += dump(os.path.join(out, 'lang', f'{n}.json'), {'meta': meta, 'rows': rows})
    index = {'countries': order, 'size': {cc: len(by_cc[cc]) for cc in order},
             'languages': {lang: {'file': files[lang], 'countries': list(rows)} for lang, rows in sorted(langs.items())}}
    total += dump(os.path.join(out, 'index.json'), index)
    print(f'regional: {len(order)} countries, {len(langs)} language files, {total/1e6:.2f} MB total')


def lead_of(rows):
    lead = None
    for o in rows:
        if o['kind'] == 'language_response' and o['percentage'] is not None:
            if lead is None or o['percentage'] > lead['percentage']:
                lead = o
    return lead


def build_tables(src):
    out = os.path.join(SITE, 'tables')
    shutil.rmtree(out, ignore_errors=True)
    cdir = os.path.join(src, 'countries')
    for fn in sorted(os.listdir(cdir)):
        if len(fn) != 7 or not fn.endswith('.json'):
            continue                      # skip *-part-N.json
        code = fn[:2]
        data = load(cdir, fn)
        size = os.path.getsize(os.path.join(cdir, fn))
        if data.get('parts'):
            data['regions'] = [r for p in data['parts'] for r in load(cdir, p)]
            size += sum(os.path.getsize(os.path.join(cdir, p)) for p in data['parts'])
            del data['parts']
        if data.get('qualitative') or size < CHUNKED_MIN:
            dump(os.path.join(out, code + '.json'), data)   # small: same table, one file
            continue
        group = lambda s: f"{s['measure']}|{s['observation_period']}"
        groups = list(dict.fromkeys(group(s) for s in data['sources'].values()))
        names, name_ix = [], {}
        def ni(s):
            if s not in name_ix:
                name_ix[s] = len(names); names.append(s)
            return name_ix[s]
        levels = list(dict.fromkeys(r['level'] for r in data['regions']))
        regions, chunk, chunk_bytes, n = [], {}, 0, 0
        def flush():
            nonlocal chunk, chunk_bytes, n
            if chunk:
                dump(os.path.join(out, code, f'{n}.json'), chunk)
                n += 1; chunk = {}; chunk_bytes = 0
        for r in data['regions']:
            obs = [{k: num(v) for k, v in o.items() if k not in DROP_OBS} for o in r['observations']]
            # Per question/year: 0 = rows but no share; [name, pct] = leading language row; absent = no rows.
            g = {}
            keys = groups if groups else ['*']
            for gk in keys:
                vis = [o for o in r['observations'] if gk == '*' or group(data['sources'][o['source']]) == gk]
                if vis:
                    lead = lead_of(vis)
                    g[keys.index(gk)] = [ni(lead['language']), lead['percentage']] if lead else 0
            regions.append([r['id'], r['name'], levels.index(r['level']), n, {str(k): v for k, v in g.items()}])
            chunk[r['id']] = obs
            chunk_bytes += len(json.dumps(obs, ensure_ascii=False, separators=(',', ':')).encode())
            if chunk_bytes >= CHUNK_TARGET:
                flush()
        flush()
        idx = {k: v for k, v in data.items() if k != 'regions'}
        idx.update({'chunked': True, 'groups': groups if groups else ['*'], 'names': names, 'levels': levels, 'chunks': n, 'regions': regions})
        s = dump(os.path.join(out, code + '.json'), idx)
        print(f'table {code}: {len(regions)} regions, index {s/1e3:.0f} kB, {n} chunks (was {size/1e6:.1f} MB)')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', default=SITE if os.path.exists(os.path.join(SITE, 'regional-boundaries.geojson')) else REF)
    ap.add_argument('--interval', type=float, default=3.0, help='simplification tolerance in metres')
    a = ap.parse_args()
    print('source:', a.src)
    build_regional(a.src, a.interval)
    build_tables(a.src)
