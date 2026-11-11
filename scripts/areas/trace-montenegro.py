"""Generalised language areas of Montenegro from the 2011 settlement map (Wikimedia Commons,
MontenegroLanguage2011.PNG, Lazar Ilic), fitted to the site's Montenegro outline.

usage: trace_me.py <repo> <reference.png> <out-dir> [smoothing-km=2.2] [min-area-km2=30]
Writes <out-dir>/montenegro-areas.json ({language: [[lon,lat] rings]}) and <out-dir>/me-compare.png.
Romani, "others", undeclared, no-majority, protected and uninhabited settlements carry no colour:
they take the language of the area around them.
"""
import sys, json, math
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage, optimize
from skimage import measure, draw
from shapely.geometry import Polygon, shape
from shapely.ops import unary_union
from shapely.geometry.polygon import orient
from shapely.validation import make_valid

REPO, IMG, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
SIG_KM = float(sys.argv[4]) if len(sys.argv) > 4 else 2.2
MIN_KM2 = float(sys.argv[5]) if len(sys.argv) > 5 else 30
LANGS = ['Serbian', 'Montenegrin', 'Albanian', 'Bosnian']
# legend colours (dark = over half, light = largest group under half); Bosniak is counted with Bosnian
LEGEND = {'Serbian': [(51, 153, 204), (153, 204, 255)], 'Montenegrin': [(255, 0, 0), (255, 128, 128)],
          'Albanian': [(128, 128, 0), (255, 255, 153)], 'Bosnian': [(0, 128, 64), (0, 255, 128), (0, 255, 0)]}
OTHER = [(191, 128, 255), (128, 64, 0), (51, 51, 153), (128, 128, 128), (192, 192, 192), (255, 255, 255), (0, 0, 0)]

im = np.asarray(Image.open(IMG).convert('RGB')).astype(np.int32)
H, W = im.shape[:2]
white = (im.min(-1) > 235)
lab, _ = ndimage.label(white)
bg = lab == lab[15, 15]
comp, n = ndimage.label(~bg)
sizes = ndimage.sum(np.ones_like(comp), comp, range(1, n + 1))
country = ndimage.binary_fill_holes(comp == (1 + int(np.argmax(sizes))))
ys, xs = np.nonzero(country)
print('map in image: x %d..%d, y %d..%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), country.sum()))

# the colours actually used inside the map (to check the legend table above)
q = im[country]
u, c = np.unique(q, axis=0, return_counts=True)
top = np.argsort(-c)[:14]
print('colours inside the map:', [(tuple(int(v) for v in u[i]), int(c[i])) for i in top])

cols, cls = [], []
for i, k in enumerate(LANGS):
    for col in LEGEND[k]: cols.append(col); cls.append(i)
for col in OTHER: cols.append(col); cls.append(-1)
cols = np.array(cols); cls = np.array(cls)
d2 = ((im[:, :, None, :] - cols[None, None, :, :]) ** 2).sum(-1)
near = d2.argmin(-1); dist = np.sqrt(d2.min(-1))
klass = cls[near]; klass[dist > 60] = -1; klass[~country] = -1
share = {k: float((klass == i).sum()) / country.sum() for i, k in enumerate(LANGS)}
print('raw area share:', {k: round(v, 3) for k, v in share.items()}, 'no colour: %.3f' % (1 - sum(share.values())))

# ---------- fit the image to the real outline ----------
gj = json.load(open(REPO + '/site/data/montenegro-municipalities.geojson'))
CL = math.cos(math.radians(42.7))
real = unary_union([make_valid(shape(f['geometry'])) for f in gj['features']]).buffer(0.003).buffer(-0.003)
real = unary_union([Polygon(p.exterior) for p in getattr(real, 'geoms', [real]) if p.area > 1e-5]).simplify(0.0004)   # outline only: no gaps between municipalities
x0, y0, x1, y1 = real.bounds
RES = 0.0015
RW, RH = int((x1 - x0 + 0.4) / RES), int((y1 - y0 + 0.4) / RES)
ras = np.zeros((RH, RW), np.float32)
for p in (real.geoms if hasattr(real, 'geoms') else [real]):
    ex, ey = p.exterior.coords.xy
    rr, cc = draw.polygon((y1 + 0.2 - np.array(ey)) / RES, (np.array(ex) - x0 + 0.2) / RES, ras.shape)
    ras[rr, cc] = 1
ras_soft = ndimage.gaussian_filter(ras, 1.5)
ST = 6
gy, gx = np.mgrid[0:H:ST, 0:W:ST]
tgt = country[::ST, ::ST].astype(np.float32)
def score(p):
    a, b, c, d, e, f = p
    lon = a + b * gx + c * gy; lat = d + e * gx + f * gy
    s = ndimage.map_coordinates(ras_soft, [(y1 + 0.2 - lat) / RES, (lon - x0 + 0.2) / RES], order=1, mode='constant')
    return float(((2 * tgt - 1) * (2 * s - 1)).mean())
sxl = (x1 - x0) / (xs.max() - xs.min()); syl = (y1 - y0) / (ys.max() - ys.min())
p0 = [x0 - sxl * xs.min(), sxl, 0, y1 + syl * ys.min(), 0, -syl]
res = optimize.minimize(lambda p: -score(p), p0, method='Nelder-Mead', options={'xatol': 1e-7, 'fatol': 1e-7, 'maxiter': 6000,
    'initial_simplex': np.array([p0] + [np.array(p0) + np.eye(6)[i] * [0.02, sxl * .02, sxl * .02, 0.02, syl * .02, syl * .02][i] for i in range(6)])})
a, b, c, d, e, f = res.x
lon = a + b * gx + c * gy; lat = d + e * gx + f * gy
s = ndimage.map_coordinates(ras, [(y1 + 0.2 - lat) / RES, (lon - x0 + 0.2) / RES], order=0) > 0.5
iou = (s & (tgt > .5)).sum() / (s | (tgt > .5)).sum()
km_px = abs(f) * 111.2
print('fit: outline agreement (IoU) %.3f, %.0f m per pixel' % (iou, km_px * 1000))
def px2ll(x, y): return (a + b * x + c * y, d + e * x + f * y)

# ---------- generalise: broad areas, not settlements ----------
sig = SIG_KM / km_px
known = (klass >= 0).astype(np.float32)
dens = np.stack([ndimage.gaussian_filter((klass == i).astype(np.float32), sig) for i in range(len(LANGS))])
gen = dens.argmax(0)
min_px = MIN_KM2 / km_px ** 2
for _ in range(6):                                   # small islands of one language join what surrounds them
    changed = False
    for i in range(len(LANGS)):
        lab, n = ndimage.label((gen == i) & country)
        if not n: continue
        sz = ndimage.sum(np.ones_like(lab), lab, range(1, n + 1))
        small = np.isin(lab, 1 + np.flatnonzero(sz < min_px))
        if small.any():
            d2 = dens.copy(); d2[i][small] = -1
            gen[small] = d2.argmax(0)[small]; changed = True
    if not changed: break
gshare = {k: float(((gen == i) & country).sum()) / country.sum() for i, k in enumerate(LANGS)}
print('generalised area share:', {k: round(v, 3) for k, v in gshare.items()})

# ---------- outlines ----------
DS = 3
def outline(i):
    fld = ndimage.gaussian_filter((gen == i).astype(np.float32), sig * 0.45)[::DS, ::DS]
    fld = np.pad(fld, 3)
    shapes = []
    for cnt in measure.find_contours(fld, 0.5):
        if len(cnt) < 8: continue
        p = make_valid(Polygon([px2ll((x - 3) * DS, (y - 3) * DS) for y, x in cnt]))
        if not p.is_empty: shapes.append(p)
    shapes.sort(key=lambda p: -p.area)
    out = Polygon()
    for p in shapes:
        out = out.difference(p) if out.contains(p) else out.union(p)
    return out
raw = {k: outline(i) for i, k in enumerate(LANGS)}
used = Polygon()
areas = {}
for k in ['Albanian', 'Bosnian', 'Montenegrin']:      # these three are cut exactly; Serbian is everything else
    g = raw[k].intersection(real).difference(used)
    g = g.buffer(-0.002).buffer(0.002).simplify(0.0012)
    parts = [x for x in getattr(g, 'geoms', [g]) if x.geom_type == 'Polygon' and x.area * 111.2 ** 2 * CL >= MIN_KM2 * 0.6]
    areas[k] = unary_union(parts); used = used.union(areas[k])
g = real.difference(used.buffer(0.0002))
areas['Serbian'] = unary_union([x for x in getattr(g, 'geoms', [g]) if x.geom_type == 'Polygon' and x.area * 111.2 ** 2 * CL >= 3])
out = {}
for k in LANGS:
    rings = []
    for g in getattr(areas[k], 'geoms', [areas[k]]):
        if g.geom_type != 'Polygon' or g.is_empty: continue
        g = orient(g, 1.0)
        for r in [g.exterior] + list(g.interiors):
            rings.append([[round(x, 4), round(y, 4)] for x, y in list(r.coords)[:-1]])
    out[k] = rings
    print('%-12s %6.0f km2, %d rings, %d points' % (k, areas[k].area * 111.2 ** 2 * CL, len(rings), sum(len(r) for r in rings)))
json.dump(out, open(OUT + '/montenegro-areas.json', 'w'), separators=(',', ':'), ensure_ascii=False)

# ---------- side by side ----------
K = 0.5
det = b * f - c * e
def ll2px(X, Y):
    u_, v_ = X - a, Y - d
    return ((u_ * f - c * v_) / det * K, (b * v_ - e * u_) / det * K)
PAL = {'Serbian': (51, 153, 204), 'Montenegrin': (255, 0, 0), 'Albanian': (128, 128, 0), 'Bosnian': (0, 128, 64)}
left = Image.open(IMG).convert('RGB').resize((int(W * K), int(H * K)), Image.LANCZOS)
right = Image.new('RGB', left.size, (255, 255, 255)); dr = ImageDraw.Draw(right)
for k in ['Serbian', 'Albanian', 'Bosnian', 'Montenegrin']:
    for g in getattr(areas[k], 'geoms', [areas[k]]):
        if g.geom_type != 'Polygon': continue
        dr.polygon([ll2px(x, y) for x, y in g.exterior.coords], fill=PAL[k])
        for r in g.interiors: dr.polygon([ll2px(x, y) for x, y in r.coords], fill=(255, 255, 255))
for k in ['Albanian', 'Bosnian', 'Montenegrin']:      # redraw the cut-out ones on top of Serbian's holes
    for g in getattr(areas[k], 'geoms', [areas[k]]):
        if g.geom_type == 'Polygon': dr.polygon([ll2px(x, y) for x, y in g.exterior.coords], fill=PAL[k])
for ft in gj['features']:
    g = shape(ft['geometry'])
    for p in getattr(g, 'geoms', [g]): dr.line([ll2px(x, y) for x, y in p.exterior.coords], fill=(20, 20, 20), width=1)
cut = (int(xs.min() * K) - 10, int(ys.min() * K) - 10, int(xs.max() * K) + 10, int(ys.max() * K) + 10)
l2, r2 = left.crop(cut), right.crop(cut)
sheet = Image.new('RGB', (l2.width * 2 + 10, l2.height), (255, 255, 255)); sheet.paste(l2, (0, 0)); sheet.paste(r2, (l2.width + 10, 0))
sheet.save(OUT + '/me-compare.png')
