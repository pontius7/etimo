#!/usr/bin/env python3
"""Colour consistency check. Serves site/ and reference/etimo-artifact, paints both in a headless Chrome
(dark + light) and asserts:
  (a) every language's map fill equals its palette value (the `P` table in site/index.html, lifted in dark mode)
  (b) the wheel segment colour equals the map colour, for every language the wheel names
  (c) the 78 original languages look exactly like the reference app
  (d) siblings in one branch of the tree are visibly different colours (fail < dE 2, warn < dE 6)
  (e) every family has a colour variable in both themes
  (f) dialect and minority areas drawn over the map are the colour of their language's zone
Exit code 1 and the language names on any failure.   usage: check-colors.py [--shots DIR]
"""
import colorsys, http.server, json, os, re, shutil, socketserver, subprocess, sys, tempfile, threading
sys.path.insert(0, os.path.dirname(__file__))
import palette  # noqa: E402

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
HERE = os.path.dirname(os.path.abspath(__file__))
SHOTS = sys.argv[sys.argv.index('--shots') + 1] if '--shots' in sys.argv else None


def serve(directory):
    class H(http.server.SimpleHTTPRequestHandler):
        def __init__(s, *a, **k):
            super().__init__(*a, directory=directory, **k)

        def log_message(s, *a):
            pass
    srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), H)
    srv.daemon_threads = True
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def hexof(c):
    c = (c or '').strip()
    m = re.match(r'rgba?\((\d+),\s*(\d+),\s*(\d+)', c)
    if m:
        return '#%02x%02x%02x' % tuple(int(x) for x in m.groups())
    return c.lower() if c.startswith('#') else c


def lift(h, dark):  # same as the app's lift(): in dark mode, dim colours are brightened 32% towards white
    if not dark:
        return h
    r = [int(h[i:i + 2], 16) for i in (1, 3, 5)]
    lin = [(v / 255 / 12.92 if v / 255 <= .04045 else ((v / 255 + .055) / 1.055) ** 2.4) for v in r]
    if .2126 * lin[0] + .7152 * lin[1] + .0722 * lin[2] >= .2:
        return h
    return '#' + ''.join('%02x' % round(v + (255 - v) * .32) for v in r)


def probe(tag, url, theme, tmp, port):
    out = os.path.join(tmp, f'{tag}-{theme}.json')
    cmd = ['node', os.path.join(HERE, 'probe-colors.mjs'), url, theme, out, str(port), os.path.join(tmp, f'prof-{tag}-{theme}')]
    if SHOTS and tag == 'site':
        os.makedirs(SHOTS, exist_ok=True)
        cmd.append(os.path.join(SHOTS, f'after-{theme}.png'))
    env = dict(os.environ, ETIMO_FAM_VARS=','.join(palette.VAR.values()))
    return subprocess.Popen(cmd, stderr=subprocess.PIPE, text=True, env=env), out


def main():
    site = serve(os.path.join(ROOT, 'site'))
    ref = serve(os.path.join(ROOT, 'reference', 'etimo-artifact'))
    tmp = tempfile.mkdtemp(prefix='etimo-colors-')
    jobs = {}
    port = 9500 + os.getpid() % 300
    for tag, srv in (('site', site), ('ref', ref)):
        for theme in ('dark', 'light'):
            port += 1
            jobs[(tag, theme)] = probe(tag, f'http://127.0.0.1:{srv.server_address[1]}/', theme, tmp, port)
    data = {}
    for k, (pr, out) in jobs.items():
        pr.wait(timeout=240)
        if pr.returncode or not os.path.exists(out):
            print(f'FAIL: browser probe {k} did not produce data: {pr.stderr.read().strip()}')
            sys.exit(1)
        data[k] = json.load(open(out))
    shutil.rmtree(tmp, ignore_errors=True)

    langs = json.load(open(os.path.join(ROOT, 'site', 'data', 'languages.json')))
    ref_langs = json.load(open(os.path.join(ROOT, 'reference', 'etimo-artifact', 'data', 'languages.json')))
    html = open(os.path.join(ROOT, 'site', 'index.html'), encoding='utf8').read()
    P = json.loads(re.search(r'var P=(\{.*?\});function hx', html, re.S).group(1))
    fam_of = {k: v['path'][0] for k, v in langs.items()}  # tree root; map family comes from lexicon, used only for (e)
    errors, warns = [], []

    for theme in ('dark', 'light'):
        dark = theme == 'dark'
        z, w, v = data['site', theme]['zones'], data['site', theme]['wheel'], data['site', theme]['vars']
        zr = data['ref', theme]['zones']
        # (e) family variables
        for f, var in palette.VAR.items():
            if not re.match(r'^#[0-9a-f]{6}$', v.get(var, '').lower()):
                errors.append(f'(e) {theme}: family {f} has no --f-{var} colour')
        # (a) map == palette
        for name in langs:
            if name not in z:
                errors.append(f'(a) {theme}: {name} has no zone on the map')
                continue
            if name not in P and name != 'Albanian':
                errors.append(f'(a) {theme}: {name} is missing from the palette table')
                continue
            want = lift(P[name].lower(), dark)
            if name == 'Albanian':  # umbrella language, not a leaf in the tree: drawn in the family colour (as in the reference)
                want = v['alba'].lower()
            if hexof(z[name]) != want:
                errors.append(f'(a) {theme}: {name} map {hexof(z[name])} != palette {want}')
        # (b) wheel == map
        matched = 0
        for name, c in w.items():
            if name in z:
                matched += 1
                if hexof(c) != hexof(z[name]):
                    errors.append(f'(b) {theme}: {name} wheel {hexof(c)} != map {hexof(z[name])}')
        if matched < len(langs) * .8:
            errors.append(f'(b) {theme}: only {matched}/{len(langs)} wheel segments could be matched by name')
        # (f) areas == zones
        ar = data['site', theme].get('areas') or {}
        if not ar:
            errors.append(f'(f) {theme}: no dialect/minority areas were drawn (regional layer did not load)')
        for name, c in ar.items():
            if name in z and hexof(c) != hexof(z[name]):
                errors.append(f'(f) {theme}: {name} area {hexof(c)} != zone {hexof(z[name])}')
        # (c) originals == reference
        for name in ref_langs:
            if name not in zr:
                errors.append(f'(c) {theme}: reference has no zone for {name}')
            elif name in z and hexof(z[name]) != hexof(zr[name]):
                errors.append(f'(c) {theme}: {name} {hexof(z[name])} != reference {hexof(zr[name])}')
        for f in ('slav', 'iran', 'alba', 'gree', 'roma'):
            if v[f] != data['ref', theme]['vars'][f]:
                errors.append(f'(c) {theme}: family --f-{f} {v[f]} != reference {data["ref", theme]["vars"][f]}')
        # (d) siblings
        groups = {}
        for name, d in langs.items():
            groups.setdefault(tuple(d['path'][:-1]) if len(d['path']) > 1 else tuple(d['path']), []).append(name)
        for key, names in groups.items():
            names = [n for n in names if n in z]
            for i, a in enumerate(names):
                for b in names[i + 1:]:
                    d = palette.ciede2000(hexof(z[a]), hexof(z[b]))
                    if d < 2 and (a in ref_langs and b in ref_langs):
                        warns.append(f'{theme}: {a} ~ {b} dE {d:.1f} (both original; identical to the reference)')
                    elif d < 2:
                        errors.append(f'(d) {theme}: {a} and {b} (both under {" > ".join(key)}) are the same colour (dE {d:.1f})')
                    elif d < 6:
                        warns.append(f'{theme}: {a} ~ {b} dE {d:.1f}')

    print(f'colour check: {len(langs)} languages x 2 themes, {sum(1 for k in langs if k in ref_langs)} originals compared to the reference')
    if warns:
        print(f'  {len(warns)} near-collisions (dE < 6, informational); first: {"; ".join(warns[:3])}')
    if errors:
        print(f'FAIL: {len(errors)} problems')
        for e in errors[:40]:
            print('  ' + e)
        if len(errors) > 40:
            print(f'  ... and {len(errors) - 40} more')
        sys.exit(1)
    print('PASS: map = palette = wheel = areas for every language; originals identical to the reference; families coloured in both themes')


if __name__ == '__main__':
    main()
