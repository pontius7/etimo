"""Files for search engines and sharing, written by the page stage (scripts/build-page.py): the web app manifest and its icon.
Nothing here carries a date or time, so ./build --check can compare the output with what is committed."""
import json
import os
import re
import urllib.parse

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
SITE = os.path.join(ROOT, 'site')
SITE_URL = 'https://etimo.nikocevic7.workers.dev'    # the one place the site's address is written


def write(name, text):
    with open(os.path.join(SITE, name), 'w', encoding='utf-8', newline='') as f:
        f.write(text)


def token(name):
    """A colour from the tokens (light theme)."""
    css = open(os.path.join(ROOT, 'src', 'styles', 'tokens.css'), encoding='utf-8').read()
    return re.search(rf'--{name}:(#[0-9a-f]{{6}})', css).group(1)


def write_manifest():
    """site/manifest.webmanifest and site/icon.svg: the page's own icon (the path in src/page.html), in the page's ink and background."""
    html = open(os.path.join(ROOT, 'src', 'page.html'), encoding='utf-8').read()
    d = re.search(r'%3Cpath%20d=\'([^\']+)\'', html).group(1)
    write('icon.svg', f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="{token("bg")}"/>'
                      f'<path fill="{token("ink")}" d="{urllib.parse.unquote(d)}"/></svg>\n')
    write('manifest.webmanifest', json.dumps({
        'name': 'Etimo', 'short_name': 'Etimo', 'description': 'A dictionary and map of languages and their families.',
        'start_url': '/', 'display': 'standalone', 'background_color': token('bg'), 'theme_color': token('bg'),
        'icons': [{'src': '/icon.svg', 'sizes': 'any', 'type': 'image/svg+xml', 'purpose': 'any'}]}, indent=2) + '\n')


def write_all():
    write_manifest()
