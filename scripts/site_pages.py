"""Files for search engines and sharing, written by the page stage (scripts/build-page.py): the web app manifest and its icon,
robots.txt, sitemap.xml and a plain readable page for every language (site/l/<id>/index.html).
Nothing here carries a date or time, so ./build --check can compare the output with what is committed."""
import html
import json
import os
import re
import shutil
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


READABLE_WORDS = 50
READABLE_CSS = '''
body{margin:0 auto;padding:20px 20px 56px;max-width:40rem;background:var(--bg);color:var(--ink);font:1rem/1.5 Manrope,'Noto Sans',system-ui,sans-serif}
a{color:inherit}
.top{display:block;margin-bottom:28px;font-weight:600;text-decoration:none}
h1{margin:0 0 4px;font-family:'Noto Serif Display',Georgia,serif;font-weight:500;font-size:2rem;line-height:1.2}
h1::before{content:"";display:inline-block;width:.5em;height:.5em;margin-right:.4em;border-radius:50%;background:var(--fc)}
dt{color:var(--mut)}
dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 16px;margin:20px 0}
dt,dd{margin:0}
.open{display:inline-block;margin:4px 0 24px;padding:10px 18px;border-radius:8px;background:var(--ac);color:var(--ac-ink);text-decoration:none;font-weight:600}
table{width:100%;border-collapse:collapse}
th{text-align:left;color:var(--mut);font-weight:500}
th,td{padding:8px 12px 8px 0;border-bottom:1px solid var(--line);vertical-align:top}
td:first-child{font-size:1.125rem}
@media (min-width:64rem){body{padding-top:48px;max-width:46rem}h1{font-size:2.5rem}}
'''
READABLE_PAGE = '''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{name} · Etimo</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Etimo"><meta property="og:title" content="{name} · Etimo">
<meta property="og:description" content="{desc}"><meta property="og:url" content="{url}"><meta name="twitter:card" content="summary">
<link rel="icon" href="/icon.svg"><link rel="stylesheet" href="/l/page.css">
<style>:root{{--fc:{light}}}@media (prefers-color-scheme:dark){{:root{{--fc:{dark}}}}}</style>
</head><body>
<a class="top" href="/">Etimo</a>
<h1>{name}</h1>
<dl>{facts}</dl>
<a class="open" href="/#l-{ident}">Open in Etimo</a>
<table><thead><tr><th>Word</th><th>Pronunciation</th><th>Meaning</th></tr></thead><tbody>
{rows}</tbody></table>
</body></html>
'''


def readable_page(name, info, entries, colours, ident):
    """One language's page: name, family, place, number of words, the first words with their meanings, a link into the app."""
    esc = html.escape
    desc = f'{name} ({info["fam"]}): {len(entries)} words with meanings and pronunciation, from {info["pl"]}.'
    facts = [('Family', ' › '.join(info['path'])), ('Where', info['pl']), ('Words in Etimo', f'{len(entries):,}')]
    if info.get('an'):
        facts.insert(0, ('In its own name', info['an']))
    if info.get('sz'):
        facts.insert(-1, ('Speakers', f'{info["sz"]:,}'))
    rows = ''.join('<tr>' + ''.join(f'<td>{esc(e.get(k) or "")}</td>' for k in ('word', 'ipa', 'meaning')) + '</tr>\n'
                   for e in entries[:READABLE_WORDS])
    return READABLE_PAGE.format(
        name=esc(name), desc=esc(desc), url=f'{SITE_URL}/l/{ident}/', ident=ident, rows=rows, **colours,
        facts=''.join(f'<dt>{esc(k)}</dt><dd>{esc(v)}</dd>' for k, v in facts))


def write_readable():
    """Every language's page, their stylesheet, robots.txt and sitemap.xml. Reads the data files the build already has on disk."""
    load = lambda n: json.load(open(os.path.join(SITE, 'data', n), encoding='utf-8'))
    languages, lexicon, palette = load('languages.json'), load('lexicon.json'), load('palette.json')
    entries = {e['lang']: e['entries'] for e in lexicon}
    shutil.rmtree(os.path.join(SITE, 'l'), ignore_errors=True)
    ids = {re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', name.lower())): name for name in languages}   # oa() in the app
    for ident in sorted(ids):
        name = ids[ident]
        os.makedirs(os.path.join(SITE, 'l', ident))
        write(f'l/{ident}/index.html', readable_page(
            name, languages[name], entries[name], {t: palette[t][name] for t in ('light', 'dark')}, ident))
    styles = lambda n: open(os.path.join(ROOT, 'src', 'styles', n), encoding='utf-8').read()
    write('l/page.css', styles('fonts.css').replace('url(fonts/', 'url(/fonts/') + styles('tokens.css') + READABLE_CSS)
    write('robots.txt', f'User-agent: *\nAllow: /\n\nSitemap: {SITE_URL}/sitemap.xml\n')
    urls = [f'{SITE_URL}/'] + [f'{SITE_URL}/l/{i}/' for i in sorted(ids)]
    write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
          + ''.join(f'<url><loc>{u}</loc></url>\n' for u in urls) + '</urlset>\n')


def write_all():
    write_manifest()
    write_readable()
