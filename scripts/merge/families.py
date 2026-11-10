#!/usr/bin/env python3
"""The one list of language families. Every build script reads it from here.

  ETIMO   the five families built into the original Etimo app (never change)
  DEVTER  the four added by the Devter merge (colours in palette.py)
  EXTRA   any family you add in content/families.json (see content/README.md, "Add a family")

Adding a family is a content change only: one entry in content/families.json. The build then
gives it a colour variable in both themes, clones every per-family style rule, adds its name to
the map, the wheel, the tree, the filters and the tagline, and accepts languages that name it.

Run  python3 scripts/merge/families.py  to list the families and check your file.
"""
import json, os, re

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
FILE = os.path.join(ROOT, 'content', 'families.json')

ETIMO = ['Slavic', 'Iranian', 'Albanian', 'Greek', 'Romance']
DEVTER = ['Caucasian', 'Turkic', 'Uralic', 'Mongolic']
KEYS = {'Slavic': 'slav', 'Iranian': 'iran', 'Albanian': 'alba', 'Greek': 'gree', 'Romance': 'roma',
        'Caucasian': 'cauc', 'Turkic': 'turk', 'Uralic': 'ural', 'Mongolic': 'mong'}
HEX = re.compile(r'^#[0-9a-fA-F]{6}$')


def _load():
    if not os.path.exists(FILE):
        return {}
    with open(FILE, encoding='utf-8') as f:
        raw = json.load(f)
    out, keys = {}, set(KEYS.values())
    for name, d in raw.items():
        if name.startswith('_'):          # "_example", "_help": ignored
            continue
        where = f'content/families.json: {name}'
        assert re.match(r'^[A-Z][A-Za-z]+$', name), f'{where}: the name must be one word, letters only, capitalised (it is also a style name)'
        assert name not in KEYS, f'{where}: this family already exists'
        key = d.get('key') or name[:4].lower()
        assert re.match(r'^[a-z]{3,6}$', key) and key not in keys, f'{where}: "key" must be 3-6 lowercase letters and not used by another family (got {key!r})'
        keys.add(key)
        for k in ('light', 'dark'):
            assert HEX.match(d.get(k, '')), f'{where}: "{k}" must be a colour like #2f7d8c'
        lab = d.get('label')
        assert (isinstance(lab, list) and len(lab) == 2 and -180 <= lab[0] <= 180 and -90 <= lab[1] <= 90), \
            f'{where}: "label" must be [longitude, latitude] of where the family name sits on the map'
        sr, sq = d.get('sr') or name, d.get('sq') or name
        out[name] = {'key': key, 'light': d['light'].lower(), 'dark': d['dark'].lower(), 'label': lab,
                     'sr': sr, 'sq': sq, 'de': d.get('de') or name,
                     'sr_of': d.get('sr_of') or sr, 'sq_of': d.get('sq_of') or sq}
    return out


EXTRA = _load()
NEW = DEVTER + list(EXTRA)          # everything the original app did not have
ALL = ETIMO + NEW
for _n, _d in EXTRA.items():
    KEYS[_n] = _d['key']


def join_words(words, last):
    """['a','b','c'], 'and' -> 'a, b and c'"""
    return ', '.join(words[:-1]) + f' {last} ' + words[-1] if len(words) > 1 else words[0]


if __name__ == '__main__':
    for n in ALL:
        src = 'Etimo' if n in ETIMO else 'Devter' if n in DEVTER else 'content/families.json'
        print(f'{n:12} --f-{KEYS[n]:6} {src}')
    print(f'{len(ALL)} families, {len(EXTRA)} from content/families.json: OK')
