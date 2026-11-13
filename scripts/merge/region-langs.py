#!/usr/bin/env python3
"""Languages spoken in each region of the map, with numbers: site/data/region-langs.json.

Read by the region card (phone and desktop): its language wheel and its list of languages with speakers and shares.

Two inputs, both matched to the map's own regions (site/data/today.json) by name, so nothing needs region codes:
  1. The census tables in site/data/tables/ (built by scripts/build-regional.py). For every country the table level
     whose names match the map's regions best is used (counties, voivodeships, cantons ...). Names that differ in
     language (Bavaria / Bayern) are paired in content/region-aliases.csv.
  2. content/region-languages.csv: your own register. One row per language per region. A region you list there takes
     your rows instead of the census table's, so it is also the way to correct or update a region.
Census labels in the census's own language (Maghiara, angielski ...) are turned into language names by
content/census-language-names.csv. A name that is one of the site's languages gets that language's colour on the card
(the colour comes from the palette, nothing to fill in); any other name is shown in a neutral grey.

A mistake in the two content files (unknown country, region or language, a bad number) stops the build and names the
file and line. Run: python3 scripts/merge/region-langs.py   (part of ./scripts/add-words.sh). Standard library only.
"""
import csv, difflib, glob, json, os, re, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA = os.path.join(ROOT, 'site', 'data')
CONTENT = os.path.join(ROOT, 'content')
OUT = os.path.join(DATA, 'region-langs.json')
TOP = 10            # languages kept per region; the rest are summed into one "other" row
MIN_LEVEL_MATCH = 3  # a table level is used for a country only if at least this many of its names match map regions

ISO3 = dict(x.split(':') for x in (
    'AL:ALB BA:BIH BG:BGR HR:HRV GR:GRC XK:KOS ME:MNE MK:MKD RO:ROU RS:SRB SI:SVN TR:TUR AT:AUT CZ:CZE DE:DEU HU:HUN '
    'LI:LIE PL:POL SK:SVK CH:CHE BY:BLR EE:EST LV:LVA LT:LTU MD:MDA RU:RUS UA:UKR IT:ITA').split())
GENERIC = (r'county|judetul|judet|municipiul|mun|oblast|region|regional unit|province|canton|kanton|voivodeship|'
           r'wojewodztwo|kraj|okres|district|municipality|opstina|obcina|grad|city|of|the|uta|raionul|raion|rayon|'
           r'prefecture|qarku|qark|zupanija|megye|land|kreis|powiat|gmina|komuna|maakond|apskritis|novads')


def norm(s):
    s = unicodedata.normalize('NFD', str(s or '')).encode('ascii', 'ignore').decode().lower()
    s = re.sub(r'[^a-z0-9 ]', ' ', s)
    s = re.sub(r'\b(' + GENERIC + r')\b', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()


class Stop(Exception):
    pass


def rows(name):
    """Rows of a content CSV as (line number, dict); lines starting with # are notes."""
    path = os.path.join(CONTENT, name)
    if not os.path.exists(path):
        return []
    with open(path, encoding='utf-8') as f:
        lines = [(i + 1, l) for i, l in enumerate(f) if l.strip() and not l.lstrip().startswith('#')]
    if not lines:
        return []
    head = next(csv.reader([lines[0][1]]))
    out = []
    for n, l in lines[1:]:
        vals = next(csv.reader([l]))
        out.append((n, {h.strip(): (vals[i].strip() if i < len(vals) else '') for i, h in enumerate(head)}))
    return out


def fail(file, line, msg):
    raise Stop('content/%s line %d: %s' % (file, line, msg))


def main():
    topo = json.load(open(os.path.join(DATA, 'today.json'), encoding='utf-8'))
    regions = [g['properties'] for g in topo['objects']['regions']['geometries'] if g['properties'].get('n')]
    countries = {g['properties']['c']: g['properties']['n'] for g in topo['objects']['countries']['geometries']}
    by_country = {}
    for p in regions:
        by_country.setdefault(p['c'], []).append(p)
    site = set(json.load(open(os.path.join(DATA, 'languages.json'), encoding='utf-8')))

    # census label -> language name
    names = {}
    for n, r in rows('census-language-names.csv'):
        if not r.get('label') or not r.get('language'):
            fail('census-language-names.csv', n, 'needs label and language')
        names[r['label'].casefold()] = r['language']
    for n, r in rows('language-aliases.csv'):
        if r.get('label') and r.get('site_language') and not r.get('dialect_tag'):
            names.setdefault(r['label'].casefold(), r['site_language'])

    raw = set()

    def language(label, lid=None):
        if lid and lid in site:
            return lid
        if label in site:
            return label
        got = names.get(label.casefold()) or lid
        if not got:
            raw.add(label)
        return got or label

    # map name <-> census name pairs
    alias = {}
    for n, r in rows('region-aliases.csv'):
        c = country_code(r.get('country', ''), countries)
        if not c:
            fail('region-aliases.csv', n, 'unknown country "%s"' % r.get('country'))
        if not any(p['n'] == r.get('map_region') for p in by_country.get(c, [])):
            fail('region-aliases.csv', n, 'no region "%s" on the map in %s%s' % (
                r.get('map_region'), countries[c], hint(r.get('map_region'), by_country.get(c, []))))
        alias[(c, norm(r['census_region']))] = r['map_region']

    out, sources, report = {}, {}, []

    # 1. census tables
    for path in sorted(glob.glob(os.path.join(DATA, 'tables', '*.json'))):
        cc = os.path.basename(path)[:-5]
        c = ISO3.get(cc)
        table = json.load(open(path, encoding='utf-8'))
        if not c or not table.get('regions') or c not in by_country:
            report.append('%s: no regional rows to match' % cc)
            continue
        if table.get('chunked'):
            recs = [{'id': r[0], 'name': r[1], 'level': table['levels'][r[2]], 'part': r[3]} for r in table['regions']]
        else:
            recs = [{'id': r['id'], 'name': r['name'], 'level': r['level'], 'obs': r.get('observations', [])}
                    for r in table['regions']]
        mine = by_country[c]
        index = {}
        for p in mine:
            for key in {norm(p['n'])} - {''}:
                index.setdefault(key, p['n'])

        def match(name):
            k = norm(name)
            if (c, k) in alias:
                return alias[(c, k)]
            if k in index:
                return index[k]
            hits = {v for key, v in index.items() if len(key) > 3 and re.search(r'\b' + re.escape(key) + r'\b', k)}
            return hits.pop() if len(hits) == 1 else None

        levels = {}
        for r in recs:
            m = match(r['name'])
            if m:
                levels.setdefault(r['level'], {}).setdefault(m, r)
        if not levels:
            report.append('%s: 0 of %d map regions matched' % (cc, len(mine)))
            continue
        # only a level of about the same size as the map's regions: a district named like its canton must not stand in for it
        size = {}
        for r in recs:
            size[r['level']] = size.get(r['level'], 0) + 1
        levels = {l: f for l, f in levels.items() if size[l] <= 1.5 * len(mine) + 3}
        if not levels:
            report.append('%s: no table level the size of the map regions (%d)' % (cc, len(mine)))
            continue
        level, found = max(levels.items(), key=lambda kv: len(kv[1]))
        if len(found) < MIN_LEVEL_MATCH and len(found) < len(mine):
            report.append('%s: only %d matches, not used' % (cc, len(found)))
            continue
        parts = {}
        groups = table.get('groups') or []
        for region, r in found.items():
            if 'obs' in r:
                obs = r['obs']
            else:
                if r['part'] not in parts:
                    parts[r['part']] = json.load(open(os.path.join(DATA, 'tables', cc, '%s.json' % r['part']), encoding='utf-8'))
                obs = parts[r['part']].get(r['id'], [])
            obs = [o for o in obs if o.get('kind') == 'language_response' and (o.get('count') or o.get('percentage'))]
            if not obs:
                # no numbers, but the languages documented there (Greece's table): names only
                pres = [x for x in table['regions'] if isinstance(x, dict) and x.get('id') == r['id']]
                names_here = sorted({language(x['language']) for x in (pres[0].get('presence') or [] if pres else [])})
                if names_here:
                    sid = (pres[0]['presence'][0].get('source_id') or cc)
                    src = table['sources'].get(sid, {})
                    sources[sid] = {'y': str(src.get('observation_period', ''))[:40], 'm': measure(src.get('measure', '')), 'u': src.get('url', '')}
                    out[c + '|' + region] = {'s': sid, 'P': names_here}
                continue
            group = lambda o: '%s|%s' % (table['sources'].get(o['source'], {}).get('measure'), table['sources'].get(o['source'], {}).get('observation_period'))
            want = next((g for g in groups if any(group(o) == g for o in obs)), group(obs[0]))
            obs = [o for o in obs if group(o) == want]
            src = table['sources'][obs[0]['source']]
            sid = obs[0]['source']
            sources[sid] = {'y': str(src.get('observation_period', '')), 'm': measure(src.get('measure', '')), 'u': src.get('url', '')}
            langs = [(language(o['language'], o.get('language_id')), o.get('count'), o.get('percentage')) for o in obs]
            out[c + '|' + region] = entry(sid, obs[0].get('denominator'), langs)
        got = sum(1 for k, v in out.items() if k.startswith(c + '|') and 'L' in v)
        named = sum(1 for k, v in out.items() if k.startswith(c + '|') and 'P' in v)
        report.append('%s: %d of %d map regions with numbers (%s level%s%s)' % (
            cc, got, len(mine), level, ', %d with the languages documented there, no numbers' % named if named else '',
            ', %d matched without numbers' % (len(found) - got - named) if len(found) > got + named else ''))

    # 2. the register: a region listed here takes these rows instead
    mine = {}
    for n, r in rows('region-languages.csv'):
        c = country_code(r.get('country', ''), countries)
        if not c:
            fail('region-languages.csv', n, 'unknown country "%s"' % r.get('country'))
        reg = next((p['n'] for p in by_country.get(c, []) if norm(p['n']) == norm(r.get('region')) or p['n'] == r.get('region')), None)
        if not reg:
            fail('region-languages.csv', n, 'no region "%s" on the map in %s%s' % (r.get('region'), countries[c], hint(r.get('region'), by_country.get(c, []))))
        lang = language(r.get('language', ''))
        if not lang:
            fail('region-languages.csv', n, 'language is empty')
        num = lambda k, f: (f(r[k].replace(',', '').replace(' ', '').rstrip('%')) if r.get(k) else None)
        try:
            cnt, pct = num('speakers', int), num('share', float)
        except ValueError:
            fail('region-languages.csv', n, 'speakers must be a whole number and share a number (percent)')
        if cnt is None and pct is None:
            fail('region-languages.csv', n, 'give speakers, share, or both')
        if not r.get('year') or not r.get('source'):
            fail('region-languages.csv', n, 'year and source are required')
        sid = 'R:' + r['year'] + ':' + r['source']
        sources[sid] = {'y': r['year'], 'm': measure(r.get('measure') or 'language'), 'u': r['source']}
        mine.setdefault(c + '|' + reg, []).append((lang, cnt, pct, sid))
    for key, langs in mine.items():
        out[key] = entry(langs[0][3], None, [l[:3] for l in langs])
    if mine:
        report.append('register: %d regions from content/region-languages.csv' % len(mine))

    # labels still in the census's own language (lower-case start or letters outside English), as far as a script can tell
    unknown = sorted(l for l in raw & {l[0] for e in out.values() for l in e.get('L', [])} if l[:1].islower() or not l.isascii())
    data = {'note': 'built by scripts/merge/region-langs.py; edit content/region-languages.csv instead', 'src': sources,
            'r': dict(sorted(out.items()))}
    text = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    old = open(OUT, encoding='utf-8').read() if os.path.exists(OUT) else ''
    if text != old:
        open(OUT, 'w', encoding='utf-8').write(text)
    print('region languages: %d regions with numbers, %d with names only (%d KB)%s' % (
        sum('L' in v for v in out.values()), sum('P' in v for v in out.values()), len(text) // 1024, '' if text != old else ', unchanged'))
    for line in report:
        print('  ' + line)
    if unknown:
        print('  census labels without an English name (add them to content/census-language-names.csv): ' + ', '.join(unknown[:30]))


def entry(sid, total, langs):
    """[name, speakers, share] sorted by share; shares filled from the total when only speakers are known."""
    langs = [list(l) for l in langs]
    tot = total or (sum(l[1] for l in langs if l[1]) if all(l[1] for l in langs) and not any(l[2] for l in langs) else None)
    for l in langs:
        if l[2] is None and l[1] and tot:
            l[2] = 100.0 * l[1] / tot
        l[2] = round(l[2], 2) if l[2] is not None else None
        l[1] = int(l[1]) if l[1] is not None else None
    merged = {}
    for name, cnt, pct in langs:  # two labels for one language (Moldovenească + Română) become one row
        m = merged.setdefault(name, [name, None, None])
        m[1] = (m[1] or 0) + cnt if cnt is not None else m[1]
        m[2] = round((m[2] or 0) + pct, 2) if pct is not None else m[2]
    langs = sorted(merged.values(), key=lambda l: (-(l[2] if l[2] is not None else -1), -(l[1] or 0)))
    keep, rest = langs[:TOP], langs[TOP:]
    e = {'s': sid, 'L': keep}
    if sum(l[2] or 0 for l in langs) > 101:
        e['x'] = 1  # people could give more than one language, so the shares add up to more than 100
    if tot:
        e['t'] = int(tot)
    if rest:
        e['o'] = [len(rest), sum(l[1] or 0 for l in rest) or None, round(sum(l[2] or 0 for l in rest), 2) or None]
    return e


MEASURES = {'mother_tongue_single_only': 'mother tongue', 'mother_tongue_any_reported': 'mother tongue',
            'usual_home_language': 'home language', 'predominantly_spoken_language': 'main language at home'}


def measure(m):
    return MEASURES.get(m, m.replace('_', ' '))


def country_code(v, countries):
    v = (v or '').strip()
    if v in countries:
        return v
    if v.upper() in ISO3:
        return ISO3[v.upper()]
    return next((c for c, n in countries.items() if norm(n) == norm(v)), None)


def hint(name, regs):
    close = difflib.get_close_matches(name or '', [p['n'] for p in regs], 3, .5)
    return ' (did you mean: %s?)' % ', '.join(close) if close else ''


if __name__ == '__main__':
    try:
        main()
    except Stop as e:
        print('STOP: ' + str(e), file=sys.stderr)
        sys.exit(1)
