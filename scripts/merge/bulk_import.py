"""Word import for content/words/*.csv (and *.csv.gz): two tiers, one duplicate filter.

Every row is resolved to a site language (content/language-aliases.csv), then split:

  CORE tier        the row's meaning matches a meaning the site already shows (any `meaning` in the
                   merged lexicon, plus content/meanings.csv). The entry goes into data/lexicon.json
                   under that site meaning, so it lands in its category. For dictionary glosses such as
                   "(noun) steam, vapor | mist" the leading "(pos.)" tags are dropped, the text before "|"
                   is split on , and ; and the first piece that is a site meaning is used.
  DICTIONARY tier  everything else. One file per language, site/dict/<slug>.json, loaded only when
                   someone opens that language's full dictionary or a search result from it.

The duplicate filter (dedupe.py) runs over both tiers together, per language, seeded with the words
already on the site. A dialect label that has no language of its own on the site keeps its dialect
visible in the source ("Wiktionary · Kajkavian").

Language labels:
  * the exact English site name, or
  * a row in content/language-aliases.csv (label, site_language, dialect_tag, note);
    site_language SKIP drops the label on purpose (it is listed in content/import-report.txt), or
  * "<site name> (<script>)" where every qualifier is a pure script/source note (SCRIPT_QUALIFIERS).
Anything else stops the build with the list of unknown labels; nothing is guessed or dropped silently.
"""
import csv
import gzip
import hashlib
import io
import json
import os
import re
import unicodedata

import dedupe

SCRIPT_QUALIFIERS = {'Latin', 'Cyrillic', 'Arabic script', 'Arabic', 'Greek script', 'Georgian script'}
# a gloss written in another language than English ends in a language tag, e.g. "... [ro]"
FOREIGN_GLOSS = re.compile(r'\[[a-z]{2,3}\]\s*$')
LEAD_TAGS = re.compile(r'^\s*(?:\([^()]*\)\s*)+')
STOP = {'the', 'and', 'for', 'with', 'from', 'that', 'this', 'which', 'who', 'not', 'one', 'someone', 'something',
        'form', 'alternative', 'plural', 'singular', 'masculine', 'feminine', 'neuter', 'genitive', 'dative',
        'accusative', 'vocative', 'nominative', 'instrumental', 'locative', 'definite', 'indefinite', 'past',
        'present', 'participle', 'person', 'first', 'second', 'third', 'tense', 'imperfective', 'perfective',
        'spelling', 'obsolete', 'archaic', 'see', 'also', 'used', 'being', 'have', 'has', 'are', 'was', 'its',
        'into', 'onto', 'upon', 'out', 'off', 'about', 'any', 'some', 'such', 'other', 'his', 'her', 'their'}
CORE_CAP = 3  # at most this many imported words per language and site meaning go to the core tier


# ---------------------------------------------------------------- reading
def csv_files(words_dir):
    import glob
    fs = glob.glob(os.path.join(words_dir, '*.csv')) + glob.glob(os.path.join(words_dir, '*.csv.gz'))
    return sorted(f for f in fs if not os.path.basename(f).startswith('_'))


def open_csv(path):
    if path.endswith('.gz'):
        return io.TextIOWrapper(gzip.open(path, 'rb'), encoding='utf-8-sig', newline='')
    return open(path, encoding='utf-8-sig', newline='')


def file_label(path):
    b = os.path.basename(path)
    return b[:-7] if b.endswith('.csv.gz') else os.path.splitext(b)[0]


# ---------------------------------------------------------------- languages
def load_aliases(path, site_langs):
    out = {}
    if not os.path.exists(path):
        return out
    with open(path, encoding='utf-8-sig', newline='') as fh:
        for i, row in enumerate(csv.DictReader(fh), start=2):
            row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
            if not row.get('label'):
                continue
            where = f'content/language-aliases.csv line {i}'
            tgt = row.get('site_language')
            assert tgt, f'{where}: empty site_language (use SKIP to leave a label out on purpose)'
            assert row['label'] not in out, f'{where}: label "{row["label"]}" listed twice'
            if tgt == 'SKIP':
                assert row.get('note'), f'{where}: SKIP needs a note saying why'
                out[row['label']] = (None, '', row['note'])
            else:
                assert tgt in site_langs, f'{where}: "{tgt}" is not a site language'
                out[row['label']] = (tgt, row.get('dialect_tag') or '', row.get('note') or '')
    return out


def resolve(label, site_langs, aliases):
    """-> (site language or None for SKIP, dialect tag, note) or None when unknown."""
    if label in site_langs:
        return label, '', ''
    if label in aliases:
        return aliases[label]
    m = re.match(r'^(.*?)\s*\(([^()]*)\)$', label)
    if m and m.group(1) in site_langs:
        quals = [q.strip() for q in re.split(r'[,;]', m.group(2)) if q.strip()]
        if quals and all(q in SCRIPT_QUALIFIERS for q in quals):
            return m.group(1), '', ''
    return None


# ---------------------------------------------------------------- meanings
def split_top(s):
    """Split on , and ; outside parentheses."""
    parts, depth, cur = [], 0, ''
    for ch in s:
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth = max(0, depth - 1)
        if ch in ',;' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return [p.strip() for p in parts if p.strip()]


def gloss_pieces(meaning):
    if FOREIGN_GLOSS.search(meaning):
        return []
    s = LEAD_TAGS.sub('', meaning).split('|')[0]
    return split_top(s)


def core_meaning(meaning, known):
    """Site meaning this row belongs to, or None. known: norm_meaning -> site meaning."""
    hit = known.get(dedupe.norm_meaning(meaning))
    if hit:
        return hit
    for p in gloss_pieces(meaning):
        for cand in (p, re.sub(r'\s*\([^()]*\)', '', p).strip()):
            hit = known.get(dedupe.norm_meaning(cand))
            if hit:
                return hit
    return None


# ---------------------------------------------------------------- search keys
def search_keys(strings):
    """site/search-key.js words() for each string, run in Node: the app uses the same file for queries."""
    import subprocess
    import tempfile
    here = os.path.dirname(os.path.abspath(__file__))
    with tempfile.TemporaryDirectory() as td:
        i, o = os.path.join(td, 'in.json'), os.path.join(td, 'out.json')
        with open(i, 'w', encoding='utf-8') as f:
            json.dump(strings, f, ensure_ascii=False)
        subprocess.run(['node', os.path.join(here, 'search_keys.js'), i, o], check=True)
        with open(o, encoding='utf-8') as f:
            return json.load(f)


def meaning_tokens(gloss):
    s = LEAD_TAGS.sub('', gloss).split('|')[0]
    s = re.sub(r'\([^()]*\)', ' ', s)
    toks = []
    for t in re.split(r'[^\w]+', s.lower()):
        if len(t) >= 3 and t not in STOP and not t.isdigit() and t not in toks:
            toks.append(t)
    return toks[:3]


# ---------------------------------------------------------------- main entry point
def import_words(root, langs, lex, extra_meanings, romanize):
    """Read content/words, add core entries to `lex`, return dictionary tier + report data.

    langs: site languages (dict), lex: lexicon records (list), extra_meanings: content/meanings.csv
    meanings, romanize: function(list of (lang, entry)) -> fills lat/ipa like the Devter words."""
    content = os.path.join(root, 'content')
    by_lang = {r['lang']: r for r in lex}
    aliases = load_aliases(os.path.join(content, 'language-aliases.csv'), set(langs))
    known = {}
    for r in lex:
        for e in r['entries']:
            known.setdefault(dedupe.norm_meaning(e['meaning']), e['meaning'])
    for m in extra_meanings:
        known.setdefault(dedupe.norm_meaning(m), m)

    files = csv_files(os.path.join(content, 'words'))
    # pass 1: every label must resolve before anything is imported
    unknown = {}
    for f in files:
        with open_csv(f) as fh:
            rd = csv.DictReader(fh)
            cols = {(c or '').strip().lower() for c in (rd.fieldnames or [])}
            for k in ('language', 'word', 'meaning'):
                assert k in cols, f'{os.path.relpath(f, root)}: missing column "{k}"'
            for i, row in enumerate(rd, start=2):
                lab = (row.get('language') or row.get('Language') or '').strip()
                if lab and resolve(lab, langs, aliases) is None:
                    unknown.setdefault(lab, f'{os.path.relpath(f, root)} line {i}')
    if unknown:
        lines = '\n'.join(f'  "{k}" (first at {v})' for k, v in sorted(unknown.items()))
        raise SystemExit('Unknown language labels. Add each to content/language-aliases.csv '
                         '(label,site_language,dialect_tag,note; site_language SKIP to leave it out) '
                         f'or use the exact site name:\n{lines}')

    internal = dedupe.find_internal_duplicates(lex)
    idx = {}

    def index_for(lang):
        if lang not in idx:
            d = idx[lang] = dedupe.DupIndex()
            for e in by_lang[lang]['entries']:
                d.add(lang, e, dedupe.ref_label(e))
        return idx[lang]

    stats, skipped, conflict_rows = {'read': 0, 'added': 0}, [], []
    report = {}  # (file, label) -> counters
    core_new, dict_rows = [], {}  # dict_rows: lang -> list of [word, lat, ipa, gloss, src]
    core_count = {}
    for f in files:
        rel = os.path.relpath(f, root)
        with open_csv(f) as fh:
            for i, row in enumerate(csv.DictReader(fh), start=2):
                row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
                if not any(row.values()):
                    continue
                where = f'{rel} line {i}'
                for k in ('language', 'word', 'meaning'):
                    assert row.get(k), f'{where}: missing "{k}"'
                lang, tag, note = resolve(row['language'], langs, aliases)
                rep = report.setdefault((rel, row['language']), {'lang': lang, 'tag': tag, 'note': note, 'core': 0,
                                                                 'dict': 0, 'dup': 0, 'skip': 0})
                if lang is None:
                    rep['skip'] += 1
                    continue
                stats['read'] += 1
                src = row.get('source') or file_label(f)
                if tag:
                    src = f'{src} · {tag}'
                ipa = row.get('ipa', '').strip().strip('/').strip('[]').strip()
                lat = row.get('latin') or None
                cm = core_meaning(row['meaning'], known)
                if cm and core_count.get((lang, cm), 0) >= CORE_CAP:
                    cm = None  # keep the core tier modest: further synonyms live in the full dictionary
                ent = {'word': row['word'], 'lat': lat, 'meaning': cm or row['meaning'], 'src': [src]}
                if ipa:
                    ent['ipa'] = ipa
                d = index_for(lang)
                hit = d.find(lang, ent)
                if hit:
                    kept, reason = hit
                    s = {'file': rel, 'line': i, 'lang': lang, 'word': row['word'], 'meaning': ent['meaning'],
                         'of': kept['label'], 'reason': reason,
                         'conflicts': dedupe.conflicts({'ipa': ipa, 'lat': row.get('latin'),
                                                        'src': [src] if row.get('source') else []}, kept['cmp'])}
                    skipped.append(s)
                    if s['conflicts']:
                        conflict_rows.append(s)
                    rep['dup'] += 1
                    continue
                d.add(lang, ent, f'"{row["word"]}" from {where}', {'ipa': ipa, 'lat': row.get('latin'), 'src': [src]})
                stats['added'] += 1
                if cm:
                    core_count[(lang, cm)] = core_count.get((lang, cm), 0) + 1
                    by_lang[lang]['entries'].append(ent)
                    core_new.append((by_lang[lang], ent))
                    rep['core'] += 1
                else:
                    dict_rows.setdefault(lang, []).append(ent)
                    rep['dict'] += 1
    idx.clear()
    # reading aids: same rules as the Devter words (Cyrillic -> Latin; Latin script -> rule IPA for core)
    need = [(r['lang'], e) for r, e in core_new]
    need += [(lang, e) for lang, es in dict_rows.items() for e in es
             if not e['lat'] and dedupe.script_of(e['word']) not in (None, 'LATIN')]
    romanize(need, {id(e) for _, e in core_new})
    return {'stats': stats, 'skipped': skipped, 'conflicts': conflict_rows, 'internal': internal,
            'report': report, 'core_new': core_new, 'dict': dict_rows}


# ---------------------------------------------------------------- outputs
def slug(name):
    return re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', name.lower()))


def _bytes(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':')).encode('utf-8')


def _fresh(path):
    import shutil
    if os.path.isdir(path):
        shutil.rmtree(path)
    os.makedirs(path)


def write_dictionary(site, langs, dict_rows):
    """Full-dictionary tier: site/h/dict/<slug>.<hash>.json, one file per language, sorted A-Z:
    {"s": [sources], "e": [[word, lat, ipa, gloss, source#], ...]} (trailing empty fields dropped).
    The file name carries a content hash, so it can be cached for a year (site/_headers /h/*).
    languages.json gets info.fd = [count, file name]. Returns (lang -> rows, lang -> keys, sizes)."""
    out_dir = os.path.join(site, 'h', 'dict')
    _fresh(out_dir)
    order, strings = [], []
    for lang, es in sorted(dict_rows.items()):
        for e in es:
            order.append(e)
            strings.append(e['word'])
            strings.append(e['lat'] if e['lat'] and e['lat'] != e['word'] else '')
    keyed = search_keys(strings) if strings else []
    for i, e in enumerate(order):  # keys of the word, then of its Latin form
        k = list(keyed[2 * i])
        k += [x for x in keyed[2 * i + 1] if x not in k]
        e['_k'] = k
    sizes, sorted_rows, sorted_keys = {}, {}, {}
    for lang, es in sorted(dict_rows.items()):
        es = sorted(es, key=lambda e: ((e['_k'] or [''])[0], e['word'], e['meaning']))
        srcs, sidx, rows = [], {}, []
        for e in es:
            s = e['src'][0]
            if s not in sidx:
                sidx[s] = len(srcs)
                srcs.append(s)
            lat = e['lat'] if e['lat'] and e['lat'] != e['word'] else ''
            r = [e['word'], lat, e.get('ipa') or '', e['meaning'], sidx[s]]
            while r and r[-1] in ('', 0) and len(r) > 4:
                r.pop()
            rows.append(r)
        data = _bytes({'s': srcs, 'e': rows})
        name = f'{slug(lang)}.{hashlib.sha1(data).hexdigest()[:10]}.json'
        with open(os.path.join(out_dir, name), 'wb') as f:
            f.write(data)
        sizes[lang] = len(data)
        langs[lang]['fd'] = [len(rows), name]
        sorted_rows[lang] = rows
        sorted_keys[lang] = [e['_k'] for e in es]
    return sorted_rows, sorted_keys, sizes


SHARD_MAX = 300_000
KEY_CAP = 150  # entries kept per search key
TOP1 = 40  # entries kept for a one-letter query


def write_search(site, sorted_rows, sorted_keys):
    """Sharded search index over the dictionary tier: site/h/search/<version>/<prefix>.json.

    Keys come from site/search-key.js (single-letter key, digraph key, each word of a multi-word
    entry; the Latin form too) plus up to 5 English words of the first gloss. A key is filed under
    its first 2 characters (file name = hex code points joined by "-"); a file over 300 KB is split
    again by the next character, and the file of the split prefix keeps only keys equal to it.
    One-letter files hold the shortest entries for that letter (a one-letter query shows those).
    index.json: {"langs": [...], "split": [...]}. Each shard:
    {"e": [[lang#, entry#, word, reading, short gloss], ...], "k": [[key minus prefix, e#, ...], ...]}
    where a negative e# (~e#) marks a match on a meaning word."""
    lang_names = sorted(sorted_rows)
    toks = []
    for lang in lang_names:
        for r in sorted_rows[lang]:
            toks.append(meaning_tokens(r[3]))
    flat = search_keys([t for ts in toks for t in ts])
    postings = {}
    n = f = 0
    for li, lang in enumerate(lang_names):
        for ei, keys in enumerate(sorted_keys[lang]):
            for k in keys:
                if k:
                    postings.setdefault(k, []).append((li, ei, 0))
            own = set(keys)
            for _ in toks[n]:
                for k in flat[f][:1]:
                    if len(k) >= 3 and k not in own:
                        own.add(k)
                        postings.setdefault(k, []).append((li, ei, 1))
                f += 1
            n += 1

    # a very common key (e.g. a meaning word in thousands of glosses) keeps its KEY_CAP best entries:
    # word matches first, then shorter words
    for k, ps in postings.items():
        if len(ps) > KEY_CAP:
            ps.sort(key=lambda p: (p[2], len(sorted_rows[lang_names[p[0]]][p[1]][0])))
            del ps[KEY_CAP:]

    def short(g):
        g = LEAD_TAGS.sub('', g).strip()
        return g if len(g) <= 36 else g[:34].rstrip() + '…'

    def build(prefix, keys):
        ents, eidx, ks = [], {}, []
        for k in sorted(keys):
            row = [k[len(prefix):]]
            for li, ei, kind in postings[k]:
                ref = (li, ei)
                if ref not in eidx:
                    eidx[ref] = len(ents)
                    r = sorted_rows[lang_names[li]][ei]
                    ipa = r[2] if len(r) > 2 else ''
                    ents.append([li, ei, r[0], (r[1] if len(r) > 1 else '') or (('/' + ipa + '/') if ipa else ''),
                                 short(r[3])])
                row.append(eidx[ref] if kind == 0 else ~eidx[ref])
            ks.append(row)
        return _bytes({'e': ents, 'k': ks})

    ver_src = hashlib.sha1()
    for lang in lang_names:
        ver_src.update(_bytes(sorted_rows[lang]))
    version = ver_src.hexdigest()[:10]
    out_root = os.path.join(site, 'h', 'search')
    _fresh(out_root)
    out_dir = os.path.join(out_root, version)
    os.makedirs(out_dir)

    def fname(prefix):
        return '-'.join('%x' % ord(c) for c in prefix) + '.json'
    split, stat = [], {'files': 0, 'bytes': 0, 'largest': 0}

    def put(prefix, data):
        with open(os.path.join(out_dir, fname(prefix)), 'wb') as f:
            f.write(data)
        stat['files'] += 1
        stat['bytes'] += len(data)
        stat['largest'] = max(stat['largest'], len(data))

    def emit(prefix, keys):
        data = build(prefix, keys)
        if len(data) > SHARD_MAX and any(len(k) > len(prefix) for k in keys):
            split.append(prefix)
            put(prefix, build(prefix, [k for k in keys if len(k) == len(prefix)]))
            groups = {}
            for k in keys:
                if len(k) > len(prefix):
                    groups.setdefault(k[:len(prefix) + 1], []).append(k)
            for p, ks in sorted(groups.items()):
                emit(p, ks)
            return
        put(prefix, data)

    groups, ones = {}, {}
    for k in postings:
        if len(k) >= 2:
            groups.setdefault(k[:2], []).append(k)
        ones.setdefault(k[0], []).append(k)
    for p, ks in sorted(groups.items()):
        emit(p, ks)
    for c, ks in sorted(ones.items()):  # one-letter files: the shortest word keys only
        best = sorted((k for k in ks if any(kind == 0 for _, _, kind in postings[k])), key=lambda k: (len(k), k))
        chosen, seen = [], 0
        for k in best:
            chosen.append(k)
            seen += len(postings[k])
            if seen >= TOP1:
                break
        put(c, build(c, chosen))
    manifest = _bytes({'v': version, 'langs': lang_names, 'split': sorted(split)})
    with open(os.path.join(out_dir, 'index.json'), 'wb') as f:
        f.write(manifest)
    stat['files'] += 1
    stat['bytes'] += len(manifest)
    stat.update({'keys': len(postings), 'version': version})
    return stat


def write_import_report(path, report, dict_sizes, lex_size, search_info):
    lines = ['Import report. Generated by the build (scripts/merge/merge-data.py); do not edit.',
             'Per input label: target site language [dialect tag shown in the source], then rows that went to',
             'core (data/lexicon.json) / dictionary (site/h/dict/<language>.<hash>.json) / duplicate (skipped, see',
             'duplicates-report.txt) / skipped (label left out on purpose in content/language-aliases.csv).', '']
    by_file = {}
    for (f, lab), r in report.items():
        by_file.setdefault(f, []).append((lab, r))
    for f in sorted(by_file):
        t = {k: sum(r[k] for _, r in by_file[f]) for k in ('core', 'dict', 'dup', 'skip')}
        lines.append(f'== {f}: core {t["core"]:,} / dictionary {t["dict"]:,} / duplicate {t["dup"]:,} / '
                     f'skipped {t["skip"]:,}')
        for lab, r in sorted(by_file[f]):
            tgt = 'SKIPPED: ' + r['note'] if r['lang'] is None else r['lang'] + (f' [{r["tag"]}]' if r['tag'] else '')
            lines.append(f'  {lab} -> {tgt} | core {r["core"]} / dictionary {r["dict"]} / duplicate {r["dup"]} / '
                         f'skipped {r["skip"]}')
        lines.append('')
    lines.append('== Labels left out (SKIP) ==')
    sk = sorted({(lab, r['note']) for (f, lab), r in report.items() if r['lang'] is None})
    lines += [f'  {lab}: {note}' for lab, note in sk] or ['  (none)']
    lines += ['', f'data/lexicon.json: {lex_size:,} bytes',
              f'dictionary files: {len(dict_sizes)} languages, {sum(dict_sizes.values()):,} bytes']
    lines += [f'  {k}: {v:,} bytes' for k, v in sorted(dict_sizes.items(), key=lambda x: -x[1])]
    lines += [f'search index: {search_info["files"]} files, {search_info["bytes"]:,} bytes, largest '
              f'{search_info["largest"]:,} bytes, {search_info["keys"]:,} keys (site/h/search/{search_info["version"]}/)']
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')
