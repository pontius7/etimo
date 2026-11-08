"""Duplicate detection for words added through content/words/*.csv.

A row is a duplicate only when it is the SAME WORD for the SAME MEANING in the SAME LANGUAGE.
Nothing is merged because it merely looks similar: ë and e, č and c are different letters.

What counts as the same word (after normalisation, see norm_text):
  * different capitals, extra or odd spaces, invisible marks (zero-width joiners, direction marks,
    soft hyphens, byte-order marks, Mongolian variation selectors),
  * apostrophe look-alikes (' ’ ‘ ʼ ʻ ` ´ ′) and dash look-alikes (- ‐ – — −),
  * compatibility forms: full-width CJK/Latin, Arabic presentation forms, Armenian ligature, ligatures,
  * Greek final sigma (ς = σ), German ß = ss, Georgian capitals (Mtavruli), Turkish İ/I/ı rules,
  * Arabic/Persian/Urdu yeh and kaf variants (ي ى = ی, ك = ک) and optional vowel marks (harakat),
  * Hebrew vowel points and cantillation marks (niqqud).
  * Cyrillic written word = Latin written word of the same language and meaning, when the Cyrillic
    word's Latin form (the project's romanizer, or the exact Serbo-Croatian table for Serbian,
    Montenegrin, Bosnian, Croatian) equals the Latin word. Other script pairs need identical
    native writing, because their romanizations are not reliable enough to decide.

What is NOT treated as a duplicate: other diacritics, other spellings, other meanings, the same word
in another language, anything that is only similar.

Pure Python, no dependencies.
"""
import re
import unicodedata

TURKIC_I = {'Turkish', 'Azerbaijani', 'Gagauz', 'Rumelian Turkish', 'Turkmen', 'Crimean Tatar'}
SERBO_CROATIAN = {'Serbian', 'Montenegrin', 'Bosnian', 'Croatian'}

_APOS = "’‘ʼʻ`´′ʹʽ՚＇"
_DASH = "‐‑‒–—―−﹘﹣－"
_PUNCT_MAP = {ord(c): "'" for c in _APOS}
_PUNCT_MAP.update({ord(c): '-' for c in _DASH})

# optional vowel marks etc.: Arabic harakat/tatweel/Quranic marks, Hebrew points and cantillation
_STRIP = set()
for a, b in ((0x064B, 0x065F), (0x06D6, 0x06DC), (0x06DF, 0x06E4), (0x06EA, 0x06ED),
             (0x0591, 0x05BD), (0x180B, 0x180D), (0xFE00, 0xFE0F)):
    _STRIP.update(range(a, b + 1))
_STRIP.update({0x0640, 0x0670, 0x06E7, 0x06E8, 0x05BF, 0x05C1, 0x05C2, 0x05C4, 0x05C5, 0x05C7, 0x180F})
_ARABIC_FOLD = {0x064A: 0x06CC, 0x0649: 0x06CC, 0x0643: 0x06A9}  # ي ى -> ی ; ك -> ک

_SR = dict(zip('абвгдђежзијклљмнњопрстћуфхцчџш',
               ['a', 'b', 'v', 'g', 'd', 'đ', 'e', 'ž', 'z', 'i', 'j', 'k', 'l', 'lj', 'm', 'n', 'nj',
                'o', 'p', 'r', 's', 't', 'ć', 'u', 'f', 'h', 'c', 'č', 'dž', 'š']))


def script_of(s):
    """Dominant script of the letters in s (LATIN, CYRILLIC, GREEK, GEORGIAN, ARABIC, ...), or None."""
    counts = {}
    for ch in s:
        if ch.isalpha():
            n = unicodedata.name(ch, '?').split()[0]
            counts[n] = counts.get(n, 0) + 1
    return max(counts, key=counts.get) if counts else None


def norm_text(s, lang=None):
    """Canonical form used for comparing words (not for display)."""
    s = (s or '').translate(_PUNCT_MAP)
    s = unicodedata.normalize('NFKC', s)
    out = []
    for ch in s:
        o = ord(ch)
        if o in _STRIP or unicodedata.category(ch) == 'Cf':
            continue
        out.append(chr(_ARABIC_FOLD.get(o, o)))
    s = ''.join(out)
    if lang in TURKIC_I:
        s = s.replace('İ', 'i').replace('I', 'ı')
    else:
        s = s.replace('İ', 'i')
    s = unicodedata.normalize('NFC', s.casefold())
    return ' '.join(s.split())


def norm_meaning(s):
    s = norm_text(s)
    return s.rstrip(' .,;:!?…')


def norm_ipa(s):
    return unicodedata.normalize('NFC', (s or '')).strip().strip('/[]').strip()


def _sr_latin(word):
    s = norm_text(word).replace('с́', 'ś').replace('з́', 'ź')
    return ''.join(_SR.get(c, c) for c in s)


def latin_keys(word, lat, lang):
    """Latin-script forms of an entry, used only to match a Cyrillic word with a Latin one."""
    sc = script_of(word)
    keys = set()
    if sc == 'LATIN':
        keys.add(norm_text(word, lang))
        if lat:
            keys.add(norm_text(lat, lang))
    elif sc == 'CYRILLIC':
        if lat:
            keys.add(norm_text(lat, lang))
        if lang in SERBO_CROATIAN:
            keys.add(_sr_latin(word))
    keys.discard('')
    return keys


class DupIndex:
    """Entries seen so far, grouped by (language, meaning). find() returns an earlier duplicate."""

    def __init__(self):
        self.by = {}

    @staticmethod
    def _rec(lang, ent, label, cmp):
        word, lat = ent['word'], ent.get('lat')
        return {'ent': ent, 'label': label, 'nk': norm_text(word, lang), 'script': script_of(word),
                'lks': latin_keys(word, lat, lang),
                'cmp': cmp if cmp is not None else {'ipa': ent.get('ipa'), 'lat': lat, 'src': ent.get('src') or []}}

    def add(self, lang, ent, label, cmp=None):
        self.by.setdefault((lang, norm_meaning(ent['meaning'])), []).append(self._rec(lang, ent, label, cmp))

    def find(self, lang, ent):
        """-> (earlier record, 'exact' | 'cross-script') or None."""
        cands = self.by.get((lang, norm_meaning(ent['meaning'])))
        if not cands:
            return None
        me = self._rec(lang, ent, None, None)
        for c in cands:
            if c['nk'] == me['nk']:
                return c, 'exact'
        for c in cands:
            if {c['script'], me['script']} == {'LATIN', 'CYRILLIC'} and c['lks'] & me['lks']:
                return c, 'cross-script'
        return None


def conflicts(user, hit_cmp):
    """Differences between a skipped row's own ipa/latin/source and what the kept entry has.
    user = what the row itself gave: {'ipa','lat','src'} (empty when not given)."""
    out = []
    if user.get('ipa') and hit_cmp.get('ipa') and norm_ipa(user['ipa']) != norm_ipa(hit_cmp['ipa']):
        out.append(f'ipa "{user["ipa"]}" vs kept "{hit_cmp["ipa"]}"')
    if user.get('lat') and hit_cmp.get('lat') and norm_text(user['lat']) != norm_text(hit_cmp['lat']):
        out.append(f'latin "{user["lat"]}" vs kept "{hit_cmp["lat"]}"')
    if user.get('src') and not set(user['src']) <= set(hit_cmp.get('src') or []):
        out.append(f'source "{", ".join(user["src"])}" vs kept "{", ".join(hit_cmp.get("src") or []) or "none"}"')
    return out


def find_internal_duplicates(lex):
    """Duplicates already inside the lexicon (the reference apps' own data). Report only."""
    found = []
    for rec in lex:
        idx = DupIndex()
        for e in rec['entries']:
            hit = idx.find(rec['lang'], e)
            if hit:
                found.append((rec['lang'], e, hit[0]['ent'], hit[1]))
            idx.add(rec['lang'], e, None)
    return found


def ref_label(ent):
    src = ', '.join(ent.get('src') or []) or 'no source'
    return f'existing entry "{ent["word"]}" ({src})'


def write_report(path, stats, skipped, conflict_rows, internal):
    lines = ['Duplicate report. Generated by the build (scripts/merge/merge-data.py); do not edit.',
             '', 'rows read: {read}   added: {added}   duplicates skipped: {dup} '
             '(exact {exact}, cross-script {cross})   conflicts: {conf}'.format(
                 read=stats['read'], added=stats['added'], dup=len(skipped),
                 exact=sum(1 for s in skipped if s['reason'] == 'exact'),
                 cross=sum(1 for s in skipped if s['reason'] == 'cross-script'), conf=len(conflict_rows)), '']
    by_file = {}
    for s in skipped:
        by_file.setdefault(s['file'], []).append(s)
    lines.append('== Skipped duplicates ==')
    if not skipped:
        lines.append('(none)')
    for f in sorted(by_file):
        lines.append(f'-- {f}')
        for s in by_file[f]:
            tag = '' if s['reason'] == 'exact' else '  [Cyrillic/Latin spelling of the same word]'
            lines.append(f'{f} line {s["line"]}: {s["lang"]} "{s["word"]}" ({s["meaning"]}) = duplicate of '
                         f'{s["of"]}{tag}')
    lines += ['', '== Conflicts: skipped rows that carry different data than the kept entry =='
              if conflict_rows else '== Conflicts ==']
    if not conflict_rows:
        lines.append('(none)')
    for s in conflict_rows:
        lines.append(f'{s["file"]} line {s["line"]}: {s["lang"]} "{s["word"]}" ({s["meaning"]}): '
                     + '; '.join(s['conflicts']))
    lines += ['', '== Already inside the reference lexicons (flag only, nothing removed) ==']
    if not internal:
        lines.append('(none)')
    for lang, e, first, reason in internal:
        lines.append(f'{lang}: "{e["word"]}" ({e["meaning"]}) repeats "{first["word"]}"'
                     + ('' if reason == 'exact' else ' [Cyrillic/Latin]'))
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')
