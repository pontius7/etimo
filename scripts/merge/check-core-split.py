#!/usr/bin/env python3
"""Check the core word list's parts (core_split() in scripts/build-page.py) against the whole list, word for word.

  site/h/core/lang/<id>.<hash>.json   must be, together, exactly lexicon.json: every language with words has one file whose
                                      entries are its entries (same words, same fields, same order), and nothing else
  site/h/core/<category>.<hash>.json  must hold, in lexicon order, exactly the entries with a meaning listed under that
                                      category (the page's taxonomy and synonyms), each equal to its entry in lexicon.json
  window.__kCore in site/index.html   must name exactly these files (the page fetches them by it)

Run by the build's checks (scripts/add-words.sh checks). Prints one line; exits 1 on any difference."""
import glob
import importlib.util
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
SITE = os.path.join(ROOT, 'site')


def load(path):
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def main():
    bad = []
    html = open(os.path.join(SITE, 'index.html'), encoding='utf-8').read()
    m = re.search(r'window\.__kCore=(\{.*?\}\}),', html)
    if not m:
        print('core split: FAILED: site/index.html has no window.__kCore (run scripts/build-page.py)')
        return 1
    K = json.loads(m.group(1))
    L = load(os.path.join(SITE, 'data', 'lexicon.json'))
    lx = re.search(r'"(h/lexicon\.[0-9a-f]{10}\.json)"', html)
    if not lx or load(os.path.join(SITE, lx.group(1))) != L:
        bad.append('the page\'s lexicon file is not site/data/lexicon.json')

    # the page's own tables and ids, as build-page.py makes them
    spec = importlib.util.spec_from_file_location('build_page', os.path.join(ROOT, 'scripts', 'build-page.py'))
    bp = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(bp)
    _, _, tv = bp.tables(bp.assemble())
    ra, sa = tv['TAXONOMY'], tv['SYNONYMS']
    ia = {mn: c for c, subs in ra.items() for _, ms in subs for mn in ms}
    listed = {c: {mn for _, ms in subs for mn in ms} for c, subs in ra.items()}

    on_disk = {os.path.relpath(p, os.path.join(SITE, 'h', 'core')) for p in glob.glob(os.path.join(SITE, 'h', 'core', '**', '*.json'), recursive=True)}
    named = {f'lang/{i}.{h}.json' for i, h in K['l'].items()} | {f'{c}.{h}.json' for c, h in K['c'].items()}
    if on_disk != named:
        bad.append(f'files and window.__kCore differ: on disk only {sorted(on_disk - named)[:5]}, named only {sorted(named - on_disk)[:5]}')

    # 1. the languages' files, together, are the list
    n_words = 0
    want_ids = {}
    for R in L:
        if R['entries']:
            want_ids[bp.slug(R['lang'])] = R
    if set(want_ids) != set(K['l']):
        bad.append(f'languages: with words but no file {sorted(set(want_ids) - set(K["l"]))[:5]}, '
                   f'file but no words {sorted(set(K["l"]) - set(want_ids))[:5]}')
    for i, R in want_ids.items():
        p = os.path.join(SITE, 'h', 'core', 'lang', f'{i}.{K["l"].get(i)}.json')
        got = load(p) if os.path.exists(p) else None
        if got != R['entries']:
            bad.append(f'{R["lang"]}: its file differs from lexicon.json')
        else:
            n_words += len(got)
    total = sum(len(R['entries']) for R in L)
    if n_words != total:
        bad.append(f'the languages\' files hold {n_words} words, lexicon.json {total}')

    # 2. the categories' files
    n_cat = 0
    for c in ra:
        want = []
        for R in L:
            es = {}
            for k, e in enumerate(R['entries']):
                if set(bp.core_cs(e['meaning'], ia, sa)) & listed[c]:
                    es[str(k)] = e
            if es:
                want.append({'lang': R['lang'], 'e': es})
        p = os.path.join(SITE, 'h', 'core', f'{c}.{K["c"].get(c)}.json')
        got = load(p) if os.path.exists(p) else None
        if got != want or [list(x['e']) for x in got] != [list(x['e']) for x in want]:
            bad.append(f'category {c}: its file differs from the entries listed under it in lexicon.json')
        n_cat += sum(len(x['e']) for x in want)

    if bad:
        print('core split: FAILED')
        for b in bad[:20]:
            print('  ' + b)
        return 1
    print(f'core split: OK ({len(K["l"])} language files = lexicon.json, {total:,} words; '
          f'{len(K["c"])} category files, {n_cat:,} entries)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
