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
SITE = os.path.join(ROOT, 'site')
lit = json.loads(subprocess.run(['node', os.path.join(HERE, 'jslit.js'), json.dumps([
    {'key': 'ra', 'file': os.path.join(SITE, 'index.html'), 'marker': 'let ra=', 'from': 490000},
    {'key': 'sa', 'file': os.path.join(SITE, 'index.html'), 'marker': 'let sa=', 'from': 490000}])],
    check=True, capture_output=True, text=True).stdout)
where = {m: (cat, sub) for cat, subs in lit['ra']['val'].items() for sub, ms in subs for m in ms}
syn = lit['sa']['val']
langs = json.load(open(os.path.join(SITE, 'data', 'languages.json'), encoding='utf-8'))
terr = json.load(open(os.path.join(SITE, 'data', 'terr.json'), encoding='utf-8'))
fam = {r['lang']: r['family'] for r in json.load(open(os.path.join(SITE, 'data', 'lexicon.json'), encoding='utf-8'))}
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
