"""The built page as the tools read it: site/index.html and its code file (h/app.<hash>.js, see split_app() in
scripts/build-page.py), for the tables written into the code (the colour table P, ra, sa ...)."""
import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))


def app_path(root=ROOT):
    html = open(os.path.join(root, 'site', 'index.html'), encoding='utf-8').read()
    m = re.search(r'<script type="module" src="(h/app\.[0-9a-f]+\.js)">', html)
    assert m, 'site/index.html has no app code file (run scripts/build-page.py)'
    return os.path.join(root, 'site', m.group(1))


def read(root=ROOT):
    """index.html followed by the app code: one text to search, as the page was before the code had its own file."""
    html = open(os.path.join(root, 'site', 'index.html'), encoding='utf-8').read()
    return html + '\n' + open(app_path(root), encoding='utf-8').read()
