"""Download the Google Sheets listed in content/sheets.txt into content/words/ as CSV.

Each non-empty line of content/sheets.txt that is not a # comment is a Google Sheet link (the
normal browser link is fine). The sheet must be shared as "Anyone with the link: Viewer".
Tab 1 of sheet 1 is saved as content/words/sheet-1.csv, and so on; a link that names a tab
(#gid=...) downloads that tab. The build then treats these files like any other CSV,
including the duplicate filter.

No internet: the last downloaded copy is kept and the build goes on, with a warning.
Sheet not shared (Google sends a sign-in page): the build stops and says so.
"""
import os
import re
import sys
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONTENT = os.path.join(ROOT, 'content')
LIST = os.path.join(CONTENT, 'sheets.txt')
NEEDED = {'language', 'word', 'meaning'}


def export_url(link):
    m = re.search(r'/spreadsheets/d/(?:e/)?([A-Za-z0-9_-]{20,})', link)
    if not m:
        return None
    if '/d/e/' in link:  # "Publish to web" link
        url = f'https://docs.google.com/spreadsheets/d/e/{m.group(1)}/pub?output=csv'
    else:
        url = f'https://docs.google.com/spreadsheets/d/{m.group(1)}/export?format=csv'
    g = re.search(r'[#&?]gid=(\d+)', link)
    return url + (f'&gid={g.group(1)}' if g else '')


def main():
    if not os.path.exists(LIST):
        return
    links = [l.strip() for l in open(LIST, encoding='utf-8') if l.strip() and not l.lstrip().startswith('#')]
    for n, link in enumerate(links, start=1):
        out = os.path.join(CONTENT, 'words', f'sheet-{n}.csv')
        name = os.path.relpath(out, ROOT)
        url = export_url(link)
        if not url:
            sys.exit(f'content/sheets.txt line {n}: not a Google Sheets link: {link}')
        # curl, not urllib: python.org builds on macOS often lack the certificates to verify Google
        res = subprocess.run(['curl', '-sL', '--max-time', '30', '-A', 'etimo-build',
                              '-w', '\n%{http_code} %{content_type}', url], capture_output=True)
        if res.returncode != 0:
            print(f'  WARNING sheet {n}: no connection (curl exit {res.returncode}); using the last copy in {name}')
            continue
        body, _, meta = res.stdout.decode('utf-8', 'replace').rpartition('\n')
        code, _, ctype = meta.partition(' ')
        data = body.lstrip('\ufeff')
        if code in ('401', '403', '404'):
            sys.exit(f'Google Sheet {n} cannot be read (HTTP {code}). Check the link, then in the sheet: '
                     f'Share -> General access -> "Anyone with the link" -> Viewer.')
        if code != '200':
            print(f'  WARNING sheet {n}: download failed (HTTP {code}); using the last copy in {name}')
            continue
        if 'text/html' in ctype or data.lstrip().startswith('<'):
            sys.exit(f'Google Sheet {n} returned a sign-in page, so it is not shared. In the sheet: '
                     f'Share -> General access -> "Anyone with the link" -> Viewer.')
        header = {h.strip().lower() for h in data.split('\n', 1)[0].split(',')}
        if not NEEDED <= header:
            sys.exit(f'Google Sheet {n}: row 1 must be the column names '
                     f'language,word,meaning,latin,ipa,source (found: {data.splitlines()[0] if data else "empty"})')
        with open(out, 'w', encoding='utf-8', newline='') as f:
            f.write(data)
        rows = sum(1 for line in data.splitlines()[1:] if line.strip(', '))
        print(f'  sheet {n}: {rows} rows -> {name}')


if __name__ == '__main__':
    main()
