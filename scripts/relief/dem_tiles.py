import sys, numpy as np
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0])
import lcc
Z = int(sys.argv[1]); n = 2 ** Z
X, Y = np.meshgrid(np.arange(-1490, 1660.01, 2.0), np.arange(-1670, -9.99, 2.0))
lon, lat = lcc.inv(X, Y)
lat = np.clip(lat, -84.9, 84.9)
tx = np.floor((lon + 180) / 360 * n).astype(int) % n
ty = np.floor((1 - np.arcsinh(np.tan(np.radians(lat))) / np.pi) / 2 * n).astype(int)
t = set(zip(tx.ravel().tolist(), ty.ravel().tolist()))
for dx in (-1, 0, 1):
    for dy in (-1, 0, 1):
        t |= {((a + dx) % n, min(n - 1, max(0, b + dy))) for a, b in list(t)[:0]}
sys.stderr.write('lon %.1f..%.1f lat %.1f..%.1f tiles %d\n' % (lon.min(), lon.max(), lat.min(), lat.max(), len(t)))
for a, b in sorted(t): print('%d/%d/%d' % (Z, a, b))
