#!/usr/bin/env python3
"""QA: measure colour overlap between drawn map shapes in site/data (frame units^2).

Drawn shapes = terr `v` (or `d`), the app's fallback circles, and family diaspora shading.
Totals are split by whether a Devter shape is involved.
Run: .venv/bin/python scripts/merge/check-overlaps.py
"""
import importlib.util, json, os, sys
from shapely import union_all
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('md', os.path.join(HERE, 'merge-data.py'))
md = importlib.util.module_from_spec(spec); spec.loader.exec_module(md)
T = md.load(md.OUT, 'terr.json'); L = md.load(md.OUT, 'languages.json'); D = md.load(md.OUT, 'dia.json')
ET = set(md.load(md.E_DIR, 'terr.json')); EL = set(md.load(md.E_DIR, 'languages.json')); EF = set(md.load(md.E_DIR, 'dia.json')['fam'])
shapes = {('z', k): md._path_geom(v.get('v') or v['d']) for k, v in T.items()}
shapes.update({('c', k): g for k, g in md.approx_circles(L, T).items()})
shapes.update({('f', k): md._path_geom(v) for k, v in D['fam'].items()})
etimo = lambda key: (key[1] in EF) if key[0] == 'f' else (key[1] in EL)
keys = list(shapes)
new_total, new_max, old_total, worst = 0.0, 0.0, 0.0, None
for i, a in enumerate(keys):
    for b in keys[i + 1:]:
        if a[0] == 'c' and b[0] == 'c':
            continue  # circles are Voronoi-clipped against each other by the app
        ga, gb = shapes[a], shapes[b]
        if ga is None or gb is None or not ga.intersects(gb):
            continue
        ar = ga.intersection(gb).area
        if etimo(a) and etimo(b):
            old_total += ar
        else:
            new_total += ar
        if ar > new_max:
            new_max, worst = ar, (a, b)
print(f'overlap involving Devter shapes: total {new_total:.2f}')
print(f'overlap among Etimo-only shapes: total {old_total:.2f}')
print(f'largest single pair: {new_max:.2f} {worst or ""}')
# 1 frame unit ~ 6 km; what remains are hairline slivers from rounding path coordinates to 0.1
print('PASS' if new_max < 3.0 else 'FAIL', '(threshold: no pair over 3 frame units^2, i.e. hairline rounding slivers only)')
sys.exit(0 if new_max < 3.0 else 1)
