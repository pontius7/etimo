#!/usr/bin/env python3
"""Serve the site's fonts from the site itself instead of Google Fonts.

The page used to load a Google Fonts stylesheet (fonts.googleapis.com) and the files from fonts.gstatic.com: two more servers
to connect to before the page could show anything (the stylesheet holds back the page and its code). This script takes the
same stylesheet, as Google gives it to a current browser (woff2, split by alphabet), copies every font file into site/fonts/
and writes the rules to src/styles/fonts.css with the files' new addresses, so the letters are exactly the same.

Run again only when the families in FAMILIES change. The fonts are under the SIL Open Font License, which allows this.
Downloads go through curl (the project's Python has no certificate store).
"""
import os
import re
import subprocess

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
FAMILIES = ('family=Jost:wght@300;400;500&family=Manrope:wght@300;400;500;600'
            '&family=Noto+Serif+Display:ital,wght@0,300;0,400;0,500;1,300&family=Noto+Naskh+Arabic:wght@400;500'
            '&family=Noto+Sans+Arabic:wght@400;500;600&family=Noto+Sans:wght@400;500;600'
            '&family=Noto+Serif+Georgian:wght@300;400;500&family=Noto+Sans+Georgian:wght@400;500;600&display=swap')
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
OUT = os.path.join(ROOT, 'site', 'fonts')


def get(url, path=None):
    args = ['curl', '-sSfL', '-A', UA, url] + (['-o', path] if path else [])
    return subprocess.run(args, check=True, capture_output=True).stdout


def main():
    css = get('https://fonts.googleapis.com/css2?' + FAMILIES).decode('utf-8')
    os.makedirs(OUT, exist_ok=True)
    keep = set()
    for url in sorted(set(re.findall(r'url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)', css))):
        name = '-'.join(url.split('/')[-3:-1]) + '-' + url.split('/')[-1]       # family/version/file -> one flat name
        keep.add(name)
        if not os.path.exists(os.path.join(OUT, name)):
            get(url, os.path.join(OUT, name))
        css = css.replace(url, 'fonts/' + name)
    for old in os.listdir(OUT):
        if old not in keep:
            os.remove(os.path.join(OUT, old))
    with open(os.path.join(ROOT, 'src', 'styles', 'fonts.css'), 'w', encoding='utf-8') as f:
        f.write('/* Written by scripts/fonts/self-host.py from the Google Fonts stylesheet; the files are in site/fonts/. */\n' + css)
    size = sum(os.path.getsize(os.path.join(OUT, n)) for n in keep)
    print(f'fonts: {len(keep)} files ({size // 1024} KB) in site/fonts/, {css.count("@font-face")} rules in src/styles/fonts.css')


if __name__ == '__main__':
    main()
