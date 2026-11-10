"""The site's projection: d3 geoConicConformal, parallels [35,60], rotate [-30,0], scale 1000, translate [0,0]."""
import numpy as np
P0, P1, LON0, K = np.radians(35), np.radians(60), 30.0, 1000.0
tany = lambda y: np.tan((np.pi / 2 + y) / 2)
N = np.log(np.cos(P0) / np.cos(P1)) / np.log(tany(P1) / tany(P0))
F = np.cos(P0) * tany(P0) ** N / N
def fwd(lon, lat):
    lam = np.radians(np.asarray(lon, float) - LON0); r = F / tany(np.radians(lat)) ** N
    return K * r * np.sin(N * lam), -K * (F - r * np.cos(N * lam))
def inv(X, Y):
    x = np.asarray(X, float) / K; fy = F + np.asarray(Y, float) / K      # F - y, with y = -Y/K
    r = np.sqrt(x * x + fy * fy)
    lam = np.arctan2(x, fy) / N
    phi = 2 * np.arctan((F / r) ** (1 / N)) - np.pi / 2
    return np.degrees(lam) + LON0, np.degrees(phi)
if __name__ == '__main__':
    print('Istanbul', fwd(28.9784, 41.0082), 'expected about (-13.4, -792.6)')
    print('Izmir', fwd(27.1428, 38.4237), 'expected about (-38.6, -748.9)')
    print(inv(*fwd(23.7, 38.0)))
