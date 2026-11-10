"""Turn the elevation grid into the site's relief image: one dark tint whose transparency is the shadow.

usage: shade.py <elev.npy> <alpha-master.png> <sigma> <exaggeration> <gain>\n       shade.py <elev.npy> <preview.jpg> 0 0 0 preview <current-relief-image>   (side-by-side of candidates)
"""
import sys, numpy as np
from PIL import Image
from scipy import ndimage
elev = np.load(sys.argv[1]); out = sys.argv[2]
TINT = (18, 33, 37)
def shadow(sigma, ex, gain, max_a=150, gamma=1.0):
    z = ndimage.gaussian_filter(elev, sigma)
    z = 0.75 * z + 0.25 * ndimage.gaussian_filter(elev, sigma * 3)      # keep the big forms, drop the scratchy detail
    cell = 6371.0 / 2 * 1000 / 1000                                        # metres per pixel at 2 px per map unit
    zy, zx = np.gradient(z * ex / cell)
    alt = np.radians(45); c = np.cos(alt) / np.sqrt(2)
    acc = 0
    for wgt, (lx, ly) in ((0.6, (-c, -c)), (0.2, (-np.cos(alt), 0)), (0.2, (0, -np.cos(alt)))):   # NW, with a little W and N
        acc = acc + wgt * ((-zx * lx - zy * ly + np.sin(alt)) / np.sqrt(1 + zx * zx + zy * zy))
    d = np.tanh(np.clip((np.sin(alt) - acc) / np.sin(alt), 0, 1) * gain) ** gamma      # soft ceiling: hills register, high ranges do not go black
    return (d * max_a).astype(np.uint8)
def rgba(a):
    im = np.zeros(a.shape + (4,), np.uint8); im[..., :3] = TINT; im[..., 3] = a
    return Image.fromarray(im, 'RGBA')
if len(sys.argv) > 6 and sys.argv[6] == 'preview':
    # what a retina screen shows at the default zoom: Alps, Balkans, Anatolia, Caucasus
    box = (2100, 1250, 3700, 2150)
    variants = [(1.3, 22, 1.5), (2.0, 30, 1.5), (3.0, 40, 1.5)]
    old = Image.open(sys.argv[7]).convert('RGBA').resize(elev.shape[::-1], Image.BILINEAR).crop(box)
    tiles = [old] + [rgba(shadow(*v)).crop(box) for v in variants]
    w, h = box[2] - box[0], box[3] - box[1]
    sheet = Image.new('RGB', (w * 2 + 12, h * 2 + 12), (255, 255, 255))
    for i, t in enumerate(tiles):
        bg = Image.new('RGBA', (w, h), (233, 236, 241, 255))
        for k, col in enumerate([(58, 138, 160), (150, 165, 110), (176, 130, 220)]):   # sample language colours
            bg.paste(Image.new('RGBA', (w // 4, h), col + (255,)), (k * w // 4, 0))
        t.putalpha(t.getchannel('A').point(lambda v: int(v * 0.62)))
        bg.alpha_composite(t)
        sheet.paste(bg.convert('RGB'), ((i % 2) * (w + 12), (i // 2) * (h + 12)))
    sheet.save(out, quality=88)
else:
    a = shadow(float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5])).astype(np.float32)
    a = np.clip(a - 4, 0, None) * (150 / 146)        # flat land and the sea become exactly clear
    Image.fromarray(a.astype(np.uint8), 'L').save(out)
    print(out, a.shape, 'mean alpha %.1f' % a.mean())
