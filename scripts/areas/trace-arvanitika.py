"""Trace the red (Arvanitika) areas of a small reference map and place them on the real Greek coast.

usage: trace_arv.py <repo> <reference.png> <out-dir>
Writes <out-dir>/arvanitika.json (list of [lon,lat] rings) and <out-dir>/compare.png.
"""
import sys, json, math
import numpy as np
from PIL import Image, ImageDraw
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.geometry.polygon import orient
from skimage import measure, draw
from scipy import ndimage, optimize

REPO, IMG, OUT = sys.argv[1], sys.argv[2], sys.argv[3]

def my(lat):  # Mercator y, in degrees
    return math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))
def inv_my(y):
    return math.degrees(2 * math.atan(math.exp(math.radians(y))) - math.pi / 2)

# ---------- real land (the outline the site draws for Greece), in (lon, mercY) ----------
topo = json.load(open(REPO + '/site/data/regional/geo/GR-regions.json'))
(sx, sy), (tx, ty) = topo['transform']['scale'], topo['transform']['translate']
arcs = []
for arc in topo['arcs']:
    x = y = 0; pts = []
    for p in arc:
        x += p[0]; y += p[1]; pts.append((x * sx + tx, y * sy + ty))
    arcs.append(pts)
def ring(ids):
    out = []
    for i in ids:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        out.extend(a if not out else a[1:])
    return out
polys = []
for g in topo['objects']['regions']['geometries']:
    ps = [g['arcs']] if g['type'] == 'Polygon' else g['arcs']
    for p in ps:
        r = ring(p[0])
        if len(r) >= 4:
            polys.append(Polygon([(lo, my(la)) for lo, la in r]).buffer(0))
land = unary_union(polys).buffer(0.0005).buffer(-0.0005)
land_parts = list(land.geoms) if isinstance(land, MultiPolygon) else [land]
print('land polygons:', len(land_parts))

# land raster for the fit
RES = 0.004
LON0, LON1 = 19.3, 27.2
MY0, MY1 = my(34.7), my(41.8)
W, H = int((LON1 - LON0) / RES), int((MY1 - MY0) / RES)
ras = np.zeros((H, W), np.float32)
for p in land_parts:
    xs, ys = p.exterior.coords.xy
    rr, cc = draw.polygon((MY1 - np.array(ys)) / RES, (np.array(xs) - LON0) / RES, ras.shape)
    ras[rr, cc] = 1
ras_soft = ndimage.gaussian_filter(ras, 2.0)

# ---------- reference image ----------
im = np.asarray(Image.open(IMG).convert('RGB')).astype(np.float32)
h, w = im.shape[:2]
CLS = {'red': (190, 57, 13), 'orange': (185, 140, 50), 'tan': (208, 185, 109), 'sea': (94, 99, 95), 'white': (240, 240, 235), 'dark': (60, 60, 60)}
names = list(CLS)
d2 = np.stack([((im - np.array(c, np.float32)) ** 2).sum(-1) for c in CLS.values()], -1)
prob = np.exp(-d2 / (2 * 38.0 ** 2)); prob /= prob.sum(-1, keepdims=True)
P = {n: prob[..., i] for i, n in enumerate(names)}
land_img = P['red'] + P['orange'] + P['tan']
valid = np.ones((h, w), bool)
valid[170:, 185:] = False      # legend text
valid[198:, :95] = False       # ornament
yy, xx = np.mgrid[0:h, 0:w]

def score(aff, step=1):
    a, b, c, d, e, f = aff
    X = xx[::step, ::step]; Y = yy[::step, ::step]
    lon = a + b * X + c * Y; m = d + e * X + f * Y
    s = ndimage.map_coordinates(ras_soft, [(MY1 - m) / RES, (lon - LON0) / RES], order=1, mode='constant')
    v = valid[::step, ::step]; t = land_img[::step, ::step]
    return float((((2 * t - 1) * (2 * s - 1))[v]).mean())

best = (-9, None)
for s in np.arange(44, 80, 1.5):                 # pixels per degree of longitude
    for lon0 in np.arange(19.4, 22.0, 0.06):
        for lat0 in np.arange(38.6, 40.4, 0.06):
            aff = (lon0, 1 / s, 0, my(lat0), 0, -1 / s)
            sc = score(aff, 3)
            if sc > best[0]: best = (sc, aff)
print('coarse fit score %.3f' % best[0], ['%.4f' % v for v in best[1]])
res = optimize.minimize(lambda p: -score(p), best[1], method='Nelder-Mead',
                        options={'xatol': 1e-5, 'fatol': 1e-6, 'maxiter': 4000,
                                 'initial_simplex': np.array([best[1]] + [np.array(best[1]) + np.eye(6)[i] * [0.05, 0.0005, 0.0005, 0.05, 0.0005, 0.0005][i] for i in range(6)])})
aff = res.x
print('refined fit score %.3f' % -res.fun, ['%.5f' % v for v in aff])
a, b, c, d, e, f = aff
print('scale: %.2f px/deg (%.2f km per pixel), image spans lon %.2f..%.2f, lat %.2f..%.2f' % (
    1 / b, 111.32 * math.cos(math.radians(38)) * b, a, a + b * w, inv_my(d + f * h), inv_my(d)))
def px2m(x, y): return (a + b * x + c * y, d + e * x + f * y)
# hard-mask agreement
lon = a + b * xx + c * yy; m = d + e * xx + f * yy
s = ndimage.map_coordinates(ras, [(MY1 - m) / RES, (lon - LON0) / RES], order=0) > 0.5
t = land_img > 0.5
print('land agreement (IoU): %.3f' % ((s & t & valid).sum() / ((s | t) & valid).sum()))

# ---------- vectorise a class at sub-pixel precision ----------
UP = 8
def vectorise(field, min_px_area):
    fld = ndimage.gaussian_filter(np.pad(field, 2), 0.55)
    gy, gx = np.mgrid[0:fld.shape[0] - 1 + 1e-9:1 / UP, 0:fld.shape[1] - 1 + 1e-9:1 / UP]
    fine = ndimage.map_coordinates(fld, [gy, gx], order=3, mode='nearest')
    shapes = []
    for cnt in measure.find_contours(fine, 0.5):
        if len(cnt) < 4: continue
        pts = [px2m(x / UP - 2, y / UP - 2) for y, x in cnt]
        p = Polygon(pts).buffer(0)
        if not p.is_empty: shapes.append(p)
    shapes.sort(key=lambda p: -p.area)
    out = Polygon()
    for p in shapes:
        out = out.difference(p) if out.contains(p.representative_point()) and out.contains(p) else out.union(p)
    px_area = abs(b * f - c * e)
    parts = [g for g in (out.geoms if hasattr(out, 'geoms') else [out]) if g.area >= min_px_area * px_area]
    return unary_union(parts)

red = vectorise(np.where(valid, P['red'], 0), 2.5)
tan = vectorise(np.where(valid, P['tan'] + P['orange'], 0), 4)
px = b                                     # one pixel, in degrees
dsnap = 1.6 * px
band = land.difference(land.buffer(-dsnap))
add = red.buffer(dsnap).intersection(band).difference(tan.buffer(-0.8 * px))
area = red.union(add).intersection(land)

# small islands: all or nothing, so no slivers
pieces = []
near = red.buffer(dsnap)
for lp in land_parts:
    if not lp.intersects(near): continue
    part = area.intersection(lp)
    if lp.area < 0.012:                    # roughly under 110 km2
        frac = near.intersection(lp).area / lp.area
        if frac >= 0.55: pieces.append(lp)
        elif frac >= 0.25 and not part.is_empty: pieces.append(part)
    elif not part.is_empty:
        pieces.append(part)
area = unary_union(pieces)
area = area.buffer(0.35 * px).buffer(-0.7 * px).buffer(0.35 * px).intersection(land)   # round off, drop slivers
area = area.simplify(0.0012, preserve_topology=True)
parts = [g for g in (area.geoms if hasattr(area, 'geoms') else [area]) if g.geom_type == 'Polygon' and g.area >= 1.2 * px * px]
print('areas:', len(parts), ' total %.0f km2' % sum(g.area * 111.32 ** 2 * math.cos(math.radians(38)) ** 2 for g in parts))

rings = []
for g in parts:
    g = orient(g, 1.0)
    for r in [g.exterior] + [i for i in g.interiors if Polygon(i).area >= 1.2 * px * px]:
        rings.append([[round(x, 4), round(inv_my(y), 4)] for x, y in list(r.coords)[:-1]])
json.dump(rings, open(OUT + '/arvanitika.json', 'w'), separators=(',', ':'))
print('rings:', len(rings), 'points:', sum(len(r) for r in rings))

# ---------- side-by-side check, in the frame of the reference ----------
K = 4
det = b * f - c * e
def m2px(X, Y):
    u, v = X - a, Y - d
    return ((u * f - c * v) / det * K + K / 2, (b * v - e * u) / det * K + K / 2)
def paint(dr, geom, fill):
    for g in (geom.geoms if hasattr(geom, 'geoms') else [geom]):
        if g.geom_type != 'Polygon': continue
        dr.polygon([m2px(x, y) for x, y in g.exterior.coords], fill=fill)
right = Image.new('RGB', (w * K, h * K), (94, 99, 95)); dr = ImageDraw.Draw(right)
paint(dr, land, (208, 185, 109)); paint(dr, unary_union(parts), (190, 57, 13))
old = json.load(open(REPO + '/site/data/greece-areas.json'))['Arvanitika']
mid = Image.new('RGB', (w * K, h * K), (94, 99, 95)); dm = ImageDraw.Draw(mid)
paint(dm, land, (208, 185, 109))
for r in old: dm.polygon([m2px(lo, my(la)) for lo, la in r], fill=(190, 57, 13))
left = Image.open(IMG).convert('RGB').resize((w * K, h * K), Image.LANCZOS)
sheet = Image.new('RGB', (w * K * 3 + 20, h * K), (255, 255, 255))
sheet.paste(left, (0, 0)); sheet.paste(mid, (w * K + 10, 0)); sheet.paste(right, (w * K * 2 + 20, 0))
sheet.save(OUT + '/compare.png')
