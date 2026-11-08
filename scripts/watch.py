#!/usr/bin/env python3
"""Rebuild automatically whenever you add or edit a word, meaning or language.

Watches content/ (words/*.csv, meanings.csv, languages/*.json) and the build scripts, waits for you to
stop saving for 3 seconds, then runs scripts/add-words.sh (rebuild site/, overlap check, word report,
colour check: map = palette = wheel). Prints a short summary and keeps watching.
No dependencies; polls every 2 seconds.   Stop with Ctrl-C.
"""
import glob, os, subprocess, sys, time

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PATTERNS = ['content/**/*.csv', 'content/**/*.json', 'content/**/*.md', 'scripts/merge/*.py', 'scripts/merge/*.mjs', 'scripts/merge/*.json']


def snapshot():
    snap = {}
    for pat in PATTERNS:
        for f in glob.glob(os.path.join(ROOT, pat), recursive=True):
            if os.path.basename(f).startswith('_') or '/__pycache__/' in f:
                continue
            try:
                snap[f] = os.stat(f).st_mtime_ns
            except OSError:
                pass
    return snap


def build(changed):
    names = ', '.join(sorted(os.path.relpath(f, ROOT) for f in changed)[:4]) + (' ...' if len(changed) > 4 else '')
    print(f'\n[{time.strftime("%H:%M:%S")}] changed: {names}\n  rebuilding (about a minute)...', flush=True)
    t = time.time()
    r = subprocess.run(['sh', os.path.join(ROOT, 'scripts', 'add-words.sh')], cwd=ROOT, capture_output=True, text=True)
    lines = [l for l in (r.stdout + r.stderr).splitlines() if l.strip()]
    keep = [l for l in lines if any(k in l for k in ('merged languages', 'wrote site/index.html', 'PASS', 'FAIL', 'colour check', '  (', 'Error', 'Traceback', 'words checked', 'landed'))]
    print('\n'.join('  ' + l for l in (keep or lines)[-14:]))
    print(f'  {"DONE" if r.returncode == 0 else "FAILED: fix the file above and save again"} in {time.time() - t:.0f}s. '
          f'Preview: python3 -m http.server 8092 -d site -> http://localhost:8092', flush=True)


def main():
    print('Watching content/ for new words and languages. Ctrl-C to stop.')
    last = snapshot()
    if '--now' in sys.argv:
        build(last)
    while True:
        time.sleep(2)
        cur = snapshot()
        changed = [f for f in cur if last.get(f) != cur[f]] + [f for f in last if f not in cur]
        if not changed:
            continue
        while True:  # debounce: wait until the files stop changing
            time.sleep(3)
            again = snapshot()
            if again == cur:
                break
            cur = again
        build(changed)
        last = snapshot()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('\nstopped')
