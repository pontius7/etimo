"""Write the three relief files the site uses, from the transparency master.

usage: export.py <alpha-master.png> <site/data>
  shade.avif    4725 x 2490   desktop
  shade-s.avif  3150 x 1660   phones and small tablets
  shade.webp    3465 x 1826   only for browsers that cannot read AVIF
"""
import os, sys
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
A = Image.open(sys.argv[1]).convert('L'); out = sys.argv[2]
TINT = (18, 33, 37)
def make(w, h):
    return Image.merge('RGBA', [Image.new('L', (w, h), v) for v in TINT] + [A.resize((w, h), Image.LANCZOS)])
make(4725, 2490).save(os.path.join(out, 'shade.avif'), 'AVIF', quality=80, speed=4)
make(3150, 1660).save(os.path.join(out, 'shade-s.avif'), 'AVIF', quality=80, speed=4)
make(3465, 1826).save(os.path.join(out, 'shade.webp'), 'WEBP', quality=50, method=6, alpha_quality=60)
for n in ('shade.avif', 'shade-s.avif', 'shade.webp'):
    print(n, os.path.getsize(os.path.join(out, n)), 'bytes')
