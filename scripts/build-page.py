#!/usr/bin/env python3
"""Build site/index.html from the source files in src/.

  src/page.html   the page: head, the order of the styles and scripts
  src/styles/     the style sheets, one file per <style> block
  src/app/        the app script in seven parts (libraries and app code), joined in order

The build does three things and nothing else:

  1. Includes.     <!--@include path-->  in page.html is replaced by that file, as it is.
  2. Placeholders. /*@NAME@*/ and __ETIMO_NAME__ in the sources are replaced by values that come
                   from content/ and the data files: family colours and lists (palette.py,
                   families.py, content/families.json), per-language colours, and the hashed
                   names of the startup files in site/h/. Every placeholder must occur exactly
                   as often as listed in placeholders(); an unknown or missing one stops the build.
  3. Tables.       /*@table NAME*/ ... /*@end*/ marks a table in the app that content/ can add
                   to (your languages' names, places and region tab; your meanings; your
                   families' names). The markers are removed; the table is rewritten only when
                   content/ adds something to it.

App logic and styles are edited directly in src/. Words, languages, families and meanings are
still added in content/ only (content/README.md).
"""
import csv, glob, hashlib, json, os, re, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..'))
MERGE = os.path.join(HERE, 'merge')
sys.path.insert(0, MERGE)
import palette  # noqa: E402
import families  # noqa: E402

SRC = os.path.join(ROOT, 'src')
OUT = os.path.join(ROOT, 'site', 'index.html')
D_DATA = os.path.join(ROOT, 'reference', 'devter-artifact', 'data')
NEW, OLD, EXTRA, VAR = families.NEW, families.ETIMO, families.EXTRA, palette.VAR
LAST = families.DEVTER[-1]   # the frozen styles hold rules for every family up to this one


def jsdump(v):
    return json.dumps(v, ensure_ascii=False, separators=(',', ':'))


def read(path):
    with open(path, encoding='utf-8', newline='') as f:
        return f.read()


def load(path):
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def jsval(literal):
    """A JavaScript object/array literal from the app source, as Python data."""
    r = subprocess.run(['node', '-e', 'process.stdout.write(JSON.stringify((0,eval)("("+require("fs").readFileSync(0,"utf8")+")")))'],
                       input=literal, check=True, capture_output=True, text=True)
    return json.loads(r.stdout)


# ---------------------------------------------------------------- 1. includes
def assemble():
    def inc(m):
        path = os.path.normpath(os.path.join(SRC, m.group(1).strip()))
        assert path.startswith(ROOT + os.sep) and os.path.isfile(path), f'src/page.html: no such file to include: {m.group(1)}'
        return read(path)
    return re.sub(r'<!--@include (.+?)-->', inc, read(os.path.join(SRC, 'page.html')))


# ---------------------------------------------------------------- families from content/families.json
def split_selectors(sel):
    parts, depth, cur = [], 0, ''
    for ch in sel:
        if ch in '([':
            depth += 1
        elif ch in ')]':
            depth -= 1
        if ch == ',' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return parts


def sub_fam(s, fam):
    return s.replace(LAST, fam).replace('--f-' + VAR[LAST], '--f-' + VAR[fam])


def extra_family_css(text):
    """Give every family from content/families.json the per-family style rules.

    The styles in src/ already hold these rules for the nine built-in families. For each extra
    family the rules of the last built-in one (Mongolic) are copied: a rule whose body uses that
    family's colour variable is copied right after it; a rule with a shared body gets the extra
    selectors added to its list; ':not(.Mongolic)' chains are extended. Only the original style
    sheets are touched (everything before the merge-devter block), as in the first build.
    """
    end = text.index('<style id="merge-devter">')
    css, rest = text[:end], text[end:]
    out, i, last, starts, n = [], 0, 0, [], 0
    while i < len(css):
        c = css[i]
        if css.startswith('/*', i):
            i = css.find('*/', i + 2) + 2
            continue
        if c == '{':
            starts.append(i)
        elif c == '}' and starts:
            op = starts.pop()
            body = css[op + 1:i]
            if '{' not in body:
                k = op - 1
                while k >= 0 and css[k] not in '{};' and not (
                        css[k] == '>' and css.rfind('<', 0, k) > css.rfind('>', 0, k)):  # end of a <style> tag
                    k -= 1
                pre_start = k + 1
                prelude = css[pre_start:op]
                if LAST in prelude and '<' not in prelude and '/*@' not in prelude:
                    lead = len(prelude) - len(prelude.lstrip())
                    sel = prelude.strip()
                    rule = css[pre_start:i + 1]
                    if f':not(.{LAST})' in sel:
                        nsel = sel.replace(f':not(.{LAST})', f':not(.{LAST})' + ''.join(f':not(.{f})' for f in EXTRA))
                        new = prelude[:lead] + nsel + '{' + body + '}'
                    else:
                        parts = split_selectors(sel)
                        mine = [p for p in parts if LAST in p]
                        if 'f-' + VAR[LAST] in body:
                            new = rule + ''.join(','.join(sub_fam(p, f) for p in mine) + '{' + sub_fam(body, f) + '}' for f in EXTRA)
                        else:
                            new = prelude[:lead] + ','.join(parts + [sub_fam(p, f) for f in EXTRA for p in mine]) + '{' + body + '}'
                    out.append(css[last:pre_start])
                    out.append(new)
                    last = i + 1
                    n += 1
        i += 1
    out.append(css[last:])
    return ''.join(out) + rest, n


# ---------------------------------------------------------------- content/languages
def load_content_languages():
    out = []
    for f in sorted(glob.glob(os.path.join(ROOT, 'content', 'languages', '*.json'))):
        d = load(f)
        out += d if isinstance(d, list) else [d]
    return out


CONTENT_LANGS = load_content_languages()


def content_language_shades():
    """Map colour for each of your languages: a shade of its family colour, in the same tonal
    steps Etimo uses (family hue, lightness cycling), so it reads as part of the family on the map,
    wheel and cards. Optional "color": "#rrggbb" in the JSON overrides it."""
    out, count = {}, {}
    for c in CONTENT_LANGS:
        if c.get('color'):
            out[c['name']] = c['color']
            continue
        fam = c['family']
        i = count[fam] = count.get(fam, 0) + 1
        base = palette.ETIMO['light'].get(fam) or palette.FAM['light'][fam]
        L0, C0, H0 = palette.rgb2oklch(palette.hex2rgb(base))
        L = palette.LEVELS[(i * 3) % len(palette.LEVELS)]
        H = H0 + ((i % 5) - 2) * 4
        C = min(.17, C0)
        while True:
            rgb, ok = palette.oklch2rgb(L, C, H)
            if ok or C < .05:
                break
            C -= .005
        out[c['name']] = palette.rgb2hex(rgb)
    return out


def devter_language_shades():
    """Per-language colours in Etimo's style for the 131 merged languages: family hue band walked in tree order."""
    langs, lex = load(os.path.join(D_DATA, 'languages.json')), load(os.path.join(D_DATA, 'lexicon.json'))
    lex_fam = {r['lang']: r['family'] for r in lex}
    by_fam = {}
    for n in sorted(langs, key=lambda n: (langs[n].get('path') or [], n)):
        by_fam.setdefault(lex_fam[n], []).append(n)
    out = {}
    for fam, names in by_fam.items():
        out.update(palette.language_shades(fam, names))
    return out


# ---------------------------------------------------------------- hashed startup files
# today.json stays at data/today.json: regional-layer.js fetches the same URL, so both share one download
HASHED = {'lexicon.json': 'H_LEXICON', 'languages.json': 'H_LANGUAGES', 'world-50s.json': 'H_WORLD', 'terr.json': 'H_TERR',
          'shade.webp': 'H_SHADE_WEBP', 'shade.avif': 'H_SHADE', 'shade-s.avif': 'H_SHADE_S'}


def hashed_copies():
    """Copy the startup data to site/h/<name>.<hash>.<ext> (cached for a year, see site/_headers)."""
    hdir = os.path.join(ROOT, 'site', 'h')
    os.makedirs(hdir, exist_ok=True)
    for old in os.listdir(hdir):
        if os.path.isfile(os.path.join(hdir, old)):
            os.remove(os.path.join(hdir, old))
    out = {}
    for name in HASHED:
        src = os.path.join(ROOT, 'site', 'data', name)
        with open(src, 'rb') as f:
            data = f.read()
        base, ext = os.path.splitext(name)
        hn = f'{base}.{hashlib.sha1(data).hexdigest()[:10]}{ext}'
        shutil.copyfile(src, os.path.join(hdir, hn))
        out[name] = 'h/' + hn
    return out


def search_version():
    root = os.path.join(ROOT, 'site', 'h', 'search')
    vs = [d for d in os.listdir(root) if os.path.isdir(os.path.join(root, d))] if os.path.isdir(root) else []
    assert len(vs) == 1, f'expected one search index version in site/h/search, found {vs} (run merge-data.py)'
    return vs[0]


def preloads(H):
    """What the browser fetches from the first moment, before the page script runs. Every screen needs the three small
    startup files. A map screen (#map, #map-..., #mm-...) then needs the map engine and its settings (the relief is not needed for the
    first picture and would take bandwidth from the tiles), and not
    the lexicon (8 MB of words, fetched once the map has drawn: kLexWhen in the page code); every other screen needs the
    lexicon, and there the map engine is fetched quietly once the lexicon is in (before that it would slow the lexicon
    on a slow connection), so opening the map is quick.
    The engine addresses are read from the import lines themselves, so a new ?v= there is never missed here."""
    app = open(os.path.join(SRC, 'app', '6-app-screens-and-startup.js'), encoding='utf-8').read()
    eng = open(os.path.join(ROOT, 'site', 'map-gl.js'), encoding='utf-8').read()
    mapjs = re.search(r'import\("\./(map-gl\.js\?v=\d+)"\)', app).group(1)
    mlib, mver = re.search(r"from '\./(map-next/vendor/maplibre-gl\.mjs\?v=([\d.]+))'", eng).groups()
    rl = re.search(r"from '\./(regional-layer\.js\?v=\d+)'", eng).group(1)      # the engine's own rules (map-gl.js imports them)
    worker = f'map-next/vendor/maplibre-gl-worker.mjs?v={mver}'     # MapLibre adds ?v=<its version> to its worker itself
    js = ('(function(){var h=location.hash,d=document,a=function(r,u,f){var l=d.createElement("link");l.rel=r;l.href=u;'
          'if(f){l.as="fetch";l.crossOrigin="anonymous"}d.head.appendChild(l)},map=/^#(map|mm-)/.test(h);'
          f'if(map){{a("modulepreload","{mapjs}");a("modulepreload","{mlib}");a("preload","map-next/data/meta.json",1);'
          f'a("modulepreload","{rl}");a("preload","data/regional/index.json",1);a("preload","data/regional/ME.json",1);a("prefetch","{worker}");'
          '}'
          f'if(!/^#(map|map-.+|languages|tree)$/.test(h))a("preload","{H["lexicon.json"]}",1);'
          f'if(!map)addEventListener("etimo:lex",function(){{setTimeout(function(){{["{mapjs}","{mlib}","{worker}"].forEach(function(u){{a("prefetch",u)}})}},1500)}},{{once:true}})'
          '})()')
    return (''.join(f'<link rel="preload" href="{H[n]}" as="fetch" crossorigin>' for n in ('languages.json', 'world-50s.json', 'terr.json'))
            + '<script>' + js + '</script>')


# ---------------------------------------------------------------- 2. placeholders
def placeholders():
    """name -> (text, how many times it must occur in the sources)"""
    H = hashed_copies()
    shades = devter_language_shades()
    shades.update(content_language_shades())
    sr = ['slovenskih', 'iranskih', 'albanskih', 'grčkih', 'romanskih', 'kavkaskih', 'turkijskih', 'uralskih', 'mongolskih']
    sq = ['sllave', 'iraniane', 'shqipe', 'greke', 'romane', 'kaukaziane', 'turkike', 'uraliane', 'mongole']
    P = {
        # startup files (the name carries a hash of the content)
        'PRELOADS': (preloads(H), 1),
        'SEARCH_VERSION': (jsdump(search_version()), 1),
        # families: the four merged ones and any from content/families.json follow Etimo's five
        'FAMILIES': (jsdump(OLD + NEW), 2),
        'N_FAMILIES': (str(len(OLD) + len(NEW)), 3),
        'FAM_VARS_LIGHT': (''.join(f';--f-{VAR[f]}:{palette.FAM["light"][f]}' for f in NEW), 3),
        'FAM_VARS_DARK': (''.join(f';--f-{VAR[f]}:{palette.FAM["dark"][f]}' for f in NEW), 7),
        'FAM_VAR_PAIRS': (''.join(f',["{f}","--f-{VAR[f]}"]' for f in NEW), 1),
        'FAM_VAR_PROPS': (''.join(f',{f}:"--f-{VAR[f]}"' for f in NEW), 2),
        'FAM_VAR_PROPS_SQ': (''.join(f",{f}:'--f-{VAR[f]}'" for f in NEW), 1),
        'FAM_KEY_PROPS': (''.join(f',{f}:"{VAR[f]}"' for f in NEW), 1),
        'FAM_CHIP_PROPS': (''.join(f'{f}:n.getPropertyValue("--f-{VAR[f]}").trim(),' for f in NEW), 1),
        'TAGLINE_EN': (families.join_words(OLD + NEW, 'and'), 1),
        'TAGLINE_SR': (families.join_words(sr + [d['sr_of'] for d in EXTRA.values()], 'i'), 1),
        'TAGLINE_SQ': (families.join_words(sq + [d['sq_of'] for d in EXTRA.values()], 'dhe'), 1),
        # only families from content/families.json (empty when there are none)
        'EXTRA_FAM_LABELS': (''.join(f',[{jsdump(f)},{d["label"][0]},{d["label"][1]}]' for f, d in EXTRA.items()), 1),
        'EXTRA_DOT_SELECTORS': (''.join(f'.dot.{f},' for f in EXTRA), 1),
        'EXTRA_TREE_ORDER': (''.join(f'\ndetails.vb.d1:has(>summary .dot.{f}){{order:{10 + i}}}' for i, f in enumerate(EXTRA)), 1),
        # map colour of every language after Etimo's own 78: the merged ones, then yours
        'LANG_COLOURS': (',' + jsdump(shades)[1:-1], 1),
    }
    for name, key in HASHED.items():
        P[key] = (jsdump(H[name]), 1)
    return P, len(shades)


TOKEN = re.compile(r'/\*@([A-Z]+(?:_[A-Z]+)*)@\*/|__ETIMO_([A-Z]+(?:_[A-Z]+)*)__')


def fill(text, P):
    seen = {}

    def one(m):
        name = m.group(1) or m.group(2)
        assert name in P, f'unknown placeholder {m.group(0)} in src/ (the known ones are listed in scripts/build-page.py)'
        seen[name] = seen.get(name, 0) + 1
        return P[name][0]
    text = TOKEN.sub(one, text)
    for name, (_, count) in P.items():
        assert seen.get(name, 0) == count, f'placeholder {name}: expected {count} in src/, found {seen.get(name, 0)}'
    return text


# ---------------------------------------------------------------- 3. tables content/ can add to
TABLES = ('GROUPS', 'LANG_NAMES', 'PLACE_NAMES', 'TAXONOMY', 'MEANING_LABELS', 'SYNONYMS', 'FAMILY_NAMES')
TABLE = re.compile(r'/\*@table ([A-Z_]+)\*/(.*?)/\*@end\*/', re.S)


def tables(text):
    src = {m.group(1): m.group(2) for m in TABLE.finditer(text)}
    assert sorted(src) == sorted(TABLES) and len(TABLE.findall(text)) == len(TABLES), f'tables in src/: {sorted(src)}'
    new, notes = {}, []

    def get(name):
        if name not in new:
            new[name] = jsval(src[name])
        return new[name]

    # your languages: region tab, names and places in Serbian/Albanian (fallback: English)
    for c in CONTENT_LANGS:
        if c.get('region'):
            groups = get('GROUPS')
            assert c['region'] in groups, f'{c["name"]}: region must be one of {sorted(groups)}'
            groups[c['region']] = groups[c['region']] + [c['name']]
        get('LANG_NAMES')[c['name']] = [c.get('name_sr') or '', c.get('name_sq') or '']
        if c.get('place_sr') or c.get('place_sq'):
            get('PLACE_NAMES').setdefault(c['place'], [c.get('place_sr') or c['place'], c.get('place_sq') or c['place']])
    # your families: display names
    if EXTRA:
        get('FAMILY_NAMES').update({k: {'en': k, 'sr': d['sr'], 'sq': d['sq']} for k, d in EXTRA.items()})
    # your meanings: content/meanings.csv (meaning, subcategory[, sr, sq]) -> taxonomy, labels, synonyms
    rows, mpath = [], os.path.join(ROOT, 'content', 'meanings.csv')
    if os.path.exists(mpath):
        with open(mpath, encoding='utf-8-sig', newline='') as fh:
            for i, row in enumerate(csv.DictReader(fh), start=2):
                row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
                if row.get('meaning'):
                    rows.append((i, row))
    if rows:
        ra = get('TAXONOMY')
        subs = {sub[0]: sub for cat in ra.values() for sub in cat}
        known = {m for cat in ra.values() for _, ms in cat for m in ms}
        added, labels = [], {}
        for i, row in rows:
            assert row.get('subcategory') in subs, (f'content/meanings.csv line {i}: unknown subcategory '
                                                    f'{row.get("subcategory")!r}; use one of: {sorted(subs)}')
            if row['meaning'] not in known and row['meaning'] not in added:
                subs[row['subcategory']][1].append(row['meaning'])
                added.append(row['meaning'])
            if row.get('sr') or row.get('sq'):
                labels[row['meaning']] = {k: row[k] for k in ('sr', 'sq') if row.get(k)}
        if labels:
            ea = get('MEANING_LABELS')
            for k, v in labels.items():
                ea[k] = dict(ea.get(k, {}), **v)
        known |= set(added)
        new['SYNONYMS'] = {k: v for k, v in load(os.path.join(MERGE, 'devter-synonyms.json')).items()
                           if k not in known and v in known}
        notes.append(f'your meanings +{len(added)} (without sr/sq labels: {[m for m in added if m not in labels]})')
    if CONTENT_LANGS:
        notes.append(f'your languages {len(CONTENT_LANGS)}')
    return TABLE.sub(lambda m: jsdump(new[m.group(1)]) if m.group(1) in new else m.group(2), text), notes


# ---------------------------------------------------------------- main
def build(out=OUT):
    text = assemble()
    notes = []
    if EXTRA:
        text, n = extra_family_css(text)
        notes.append(f'your families {list(EXTRA)} ({n} style rules extended)')
    P, n_colours = placeholders()
    text = fill(text, P)
    text, tnotes = tables(text)
    left = re.search(r'<!--@|/\*@|__ETIMO_', text)
    assert not left, f'unreplaced marker in the page: {text[left.start():left.start() + 60]!r}'
    with open(out, 'w', encoding='utf-8', newline='') as f:
        f.write(text)
    print(f'wrote {os.path.relpath(out, ROOT)} ({len(text):,} chars) from src/; families {len(OLD) + len(NEW)}, '
          f'language colours +{n_colours}' + ''.join('; ' + x for x in notes + tnotes))


if __name__ == '__main__':
    build(sys.argv[1] if len(sys.argv) > 1 else OUT)
