#!/usr/bin/env python3
"""After a build: show where each word in content/words/*.csv landed.

For every row: language found? family and map position (pin, home area or approximate circle),
and which browse category/subcategory its meaning maps to. Meanings that map nowhere are still
searchable but do not appear under a category: add them to content/meanings.csv (closest known
meanings are suggested).
"""
import csv, difflib, glob, json, os, subprocess
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
SRC = os.path.join(ROOT, 'data-src', 'data')
import sys
sys.path.insert(0, os.path.join(ROOT, 'scripts'))
import page_code  # noqa: E402  (the tables are in the page's code file, h/app.<hash>.js)
APP = page_code.app_path(ROOT)
lit = json.loads(subprocess.run(['node', os.path.join(HERE, 'jslit.js'), json.dumps([
    {'key': 'ra', 'file': APP, 'marker': 'let ra=', 'from': 0},
    {'key': 'sa', 'file': APP, 'marker': 'let sa=', 'from': 0}])],
    check=True, capture_output=True, text=True).stdout)
where = {m: (cat, sub) for cat, subs in lit['ra']['val'].items() for sub, ms in subs for m in ms}
syn = lit['sa']['val']
langs = json.load(open(os.path.join(SRC, 'languages.json'), encoding='utf-8'))
terr = json.load(open(os.path.join(SRC, 'terr.json'), encoding='utf-8'))
fam = {r['lang']: r['family'] for r in json.load(open(os.path.join(SRC, 'lexicon.json'), encoding='utf-8'))}
rows = unmapped = 0
for f in sorted(glob.glob(os.path.join(ROOT, 'content', 'words', '*.csv'))):
    print(f'\n{os.path.relpath(f, ROOT)}')
    if os.path.getsize(f) > 200_000:  # big dictionary files: per-label totals are in content/import-report.txt
        print('  (large file: see content/import-report.txt for where its rows went)')
        continue
    for i, row in enumerate(csv.DictReader(open(f, encoding='utf-8-sig', newline='')), start=2):
        row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
        if not row.get('word'):
            continue
        rows += 1
        L = row['language']
        info = langs.get(L)
        if not info:
            print(f'  line {i}: {row["word"]!r}: UNKNOWN language {L!r}')
            continue
        place = 'home area' if L in terr else 'approximate circle'
        cats = []
        for m in row['meaning'].split(', '):
            m2 = syn.get(m, m)
            if m2 in where:
                cats.append('/'.join(where[m2]))
        if not cats:
            unmapped += 1
            near = difflib.get_close_matches(row['meaning'], list(where), n=3)
            cats = [f'NO CATEGORY (searchable only; closest known: {", ".join(near) or "none"})']
        print(f'  line {i}: {row["word"]} = {row["meaning"]} | {L} ({fam.get(L)}; {place} at '
              f'{info["lat"]:.2f},{info["lon"]:.2f}) | {"; ".join(cats)}')
print(f'\n{rows} words checked, {unmapped} without a category')


def no_special_cases():
    """Map code names no country or language: every name and code in content/map/areas.json may appear only there
    (in the map code's string literals; comments and docstrings may tell the history; a table that lists every family is
    marked /*uniform-table*/ ... /*end-uniform-table*/ in the page code and left out)."""
    import ast, re
    areas = json.load(open(os.path.join(ROOT, 'content', 'map', 'areas.json'), encoding='utf-8'))
    names = {e[k] for part in ('countries', 'languages') for e in areas[part] for k in ('name', 'code', 'sourceName', 'parent', 'mainLanguage') if k in e}
    names |= {v[k] for v in areas['views'] for k in ('umbrella', 'census') if k in v} | {n for v in areas['views'] for n in v['languages']}
    hit = re.compile(r'(?<![\w])(' + '|'.join(re.escape(n) for n in sorted(names, key=len, reverse=True)) + r')(?![\w])')
    bad = []
    for f in ('site/map-gl.js', 'site/regional-layer.js', 'scripts/map-next/build.py', 'scripts/areas/census-areas.py', 'src/app/6-app-screens-and-startup.js', 'src/app/7-language-colours.js'):
        src = open(os.path.join(ROOT, f), encoding='utf-8').read()
        if f.endswith('.py'):
            tree = ast.parse(src)
            doc = {id(n.body[0].value) for n in ast.walk(tree) if isinstance(n, (ast.Module, ast.FunctionDef)) and n.body and isinstance(n.body[0], ast.Expr)}
            lits = [n.value for n in ast.walk(tree) if isinstance(n, ast.Constant) and isinstance(n.value, str) and id(n) not in doc]
        else:
            lits = re.findall(r"""'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`[^`]*`""", re.sub(r'/\*.*?\*/|(?<![:\w])//[^\n]*', '', re.sub(r'/\*uniform-table\*/.*?/\*end-uniform-table\*/', '', src, flags=re.S), flags=re.S))
        bad += [f'{f}: {m.group(1)!r} in {s[:50]!r}' for s in lits for m in [hit.search(s)] if m]
    if bad:
        sys.exit('map code names a country or language (move it into content/map/areas.json):\n  ' + '\n  '.join(bad[:30]))
    print('map code: no country or language named outside content/map/areas.json')


no_special_cases()
