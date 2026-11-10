"""Soft shaded relief for the Etimo map, in the map's own projection.

usage: relief.py <dem-dir> <zoom> <out-dir> [px-per-unit=2]
Step 1 builds <out-dir>/elev.npy (elevation on the map grid, metres, sea = 0). Later runs reuse it.
"""
import sys, os, glob, numpy as np
from PIL import Image
from scipy import ndimage
sys.path.insert(0, os.path.dirname(os.path.abspath(sys.argv[0])))
import lcc
DEM, Z, OUT = sys.argv[1], int(sys.argv[2]), sys.argv[3]
S = float(sys.argv[4]) if len(sys.argv) > 4 else 2.0
X0, Y0, WU, HU = -1490, -1670, 3150, 1660           # where the site places the image, in map units
W, H = int(WU * S), int(HU * S)
cache = os.path.join(OUT, 'elev-z%d-s%g.npy' % (Z, S))
if not os.path.exists(cache):
    tiles = [os.path.basename(p)[:-4].split('_') for p in glob.glob(os.path.join(DEM, '%d_*.png' % Z))]
    xs = sorted({int(t[1]) for t in tiles}); ys = sorted({int(t[2]) for t in tiles})
    x0, y0 = xs[0], ys[0]
    mos = np.zeros(((ys[-1] - y0 + 1) * 256, (xs[-1] - x0 + 1) * 256), np.float32)
    for _, tx, ty in tiles:
        a = np.asarray(Image.open(os.path.join(DEM, '%d_%s_%s.png' % (Z, tx, ty))).convert('RGB')).astype(np.float32)
        e = a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768
        mos[(int(ty) - y0) * 256:(int(ty) - y0 + 1) * 256, (int(tx) - x0) * 256:(int(tx) - x0 + 1) * 256] = e
    mos = np.maximum(mos, 0)                         # flat sea, no sea-floor texture
    mos = ndimage.gaussian_filter(mos, 0.7)
    n = 2 ** Z
    elev = np.zeros((H, W), np.float32)
    for r0 in range(0, H, 400):                      # in strips, to keep memory low
        r1 = min(H, r0 + 400)
        X, Y = np.meshgrid(X0 + (np.arange(W) + 0.5) / S, Y0 + (np.arange(r0, r1) + 0.5) / S)
        lon, lat = lcc.inv(X, Y); lat = np.clip(lat, -84.9, 84.9)
        px = (lon + 180) / 360 * n * 256 - x0 * 256 - 0.5
        py = (1 - np.arcsinh(np.tan(np.radians(lat))) / np.pi) / 2 * n * 256 - y0 * 256 - 0.5
        elev[r0:r1] = ndimage.map_coordinates(mos, [py, px], order=1, mode='nearest')
    np.save(cache, elev)
    print('elevation grid', elev.shape, 'max %.0f m' % elev.max())
