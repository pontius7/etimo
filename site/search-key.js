/* Etimo search keys: the ONE function that turns any word or query into Latin-letter keys.
   Used by the build (scripts/merge/search_keys.js runs this file in Node to index the full
   dictionaries) and by the app (index.html inlines this file), so index and query never disagree.

   keys(s) -> [single, digraph] (duplicates removed, spaces and punctuation removed)
     single : every letter folded to one plain Latin letter   š ş ș ś ш щ -> s,  č ć ç ч ц ћ -> c,
              ž ж з -> z,  đ ђ -> d,  ë é ê -> e,  ä â ă -> a,  ö ő -> o,  ü ű -> u,  ğ -> g,  ı î -> i
     digraph: special letters written as digraphs                š ш -> sh,  щ -> shch,  č ć ч ћ -> ch,
              ž ж -> zh,  đ ђ -> dj,  dž џ -> dzh,  љ -> lj,  њ -> nj,  ц -> ts
   so typing "s" already reaches ш/š words (single key), "sh" narrows to them (digraph key), and
   "c" reaches ч/ц/č/ć. Cyrillic (incl. Serbian, Macedonian, Kazakh, Mongolian letters), Greek,
   Georgian, Armenian and Arabic-script letters are transliterated; other Latin letters lose their
   accents (ß -> ss, æ -> ae, ø -> o, ł -> l). */
(function (root) {
  'use strict';
  var T = {};
  function add(map) { for (var k in map) T[k] = typeof map[k] === 'string' ? [map[k], map[k]] : map[k]; }
  // Latin special letters [digraph, single]
  add({'š': ['sh', 's'], 'ş': ['sh', 's'], 'ș': ['sh', 's'], 'ś': 's', 'ž': ['zh', 'z'], 'ź': 'z', 'ż': 'z',
    'č': ['ch', 'c'], 'ć': ['ch', 'c'], 'ç': ['ch', 'c'], 'ğ': ['gh', 'g'], 'đ': ['dj', 'd'], 'ð': 'd',
    'ß': 'ss', 'æ': 'ae', 'œ': 'oe', 'ø': 'o', 'ł': 'l', 'ı': 'i', 'þ': 'th', 'ħ': 'h', 'ə': 'e', 'ɛ': 'e',
    'ŋ': ['ng', 'n'], 'ɣ': ['gh', 'g'], 'ʃ': ['sh', 's'], 'ʒ': ['zh', 'z'], 'ǧ': ['gh', 'g'], 'ǯ': ['dzh', 'dz'],
    'ẍ': ['kh', 'h']});
  // Cyrillic
  add({'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g', 'д': 'd', 'ђ': ['dj', 'd'], 'ѓ': ['gj', 'g'], 'е': 'e',
    'ё': ['yo', 'e'], 'є': ['ye', 'e'], 'ж': ['zh', 'z'], 'з': 'z', 'ѕ': 'dz', 'и': 'i', 'і': 'i', 'ї': ['yi', 'i'],
    'й': ['y', 'i'], 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'ћ': ['ch', 'c'], 'ќ': ['kj', 'k'], 'у': 'u', 'ў': 'u', 'ф': 'f', 'х': ['kh', 'h'],
    'ц': ['ts', 'c'], 'ч': ['ch', 'c'], 'џ': ['dzh', 'dz'], 'ш': ['sh', 's'], 'щ': ['shch', 's'], 'ъ': '',
    'ы': 'y', 'ь': '', 'э': 'e', 'ю': ['yu', 'u'], 'я': ['ya', 'a'],
    'ә': ['ae', 'a'], 'ғ': ['gh', 'g'], 'қ': ['q', 'k'], 'ң': ['ng', 'n'], 'ө': 'o', 'ұ': 'u', 'ү': 'u', 'һ': 'h',
    'ҳ': 'h', 'ҷ': 'j', 'ӣ': 'i', 'ӯ': 'u', 'ҡ': 'k', 'ҙ': 'z', 'ҫ': 's', 'ӏ': '', 'ҝ': 'k', 'ҕ': 'g', 'җ': ['zh', 'z'],
    'ӊ': ['ng', 'n'], 'ҥ': ['ng', 'n'], 'ӈ': ['ng', 'n'], 'ӧ': 'o', 'ӱ': 'u', 'ӓ': 'a', 'ӹ': 'y'});
  // Greek (accents are removed before the lookup)
  add({'α': 'a', 'β': 'v', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'i', 'θ': 'th', 'ι': 'i', 'κ': 'k',
    'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't',
    'υ': ['y', 'i'], 'φ': 'f', 'χ': ['ch', 'h'], 'ψ': 'ps', 'ω': 'o'});
  // Georgian (national romanisation)
  add({'ა': 'a', 'ბ': 'b', 'გ': 'g', 'დ': 'd', 'ე': 'e', 'ვ': 'v', 'ზ': 'z', 'თ': 't', 'ი': 'i', 'კ': 'k',
    'ლ': 'l', 'მ': 'm', 'ნ': 'n', 'ო': 'o', 'პ': 'p', 'ჟ': ['zh', 'z'], 'რ': 'r', 'ს': 's', 'ტ': 't', 'უ': 'u',
    'ფ': 'p', 'ქ': 'k', 'ღ': ['gh', 'g'], 'ყ': ['q', 'k'], 'შ': ['sh', 's'], 'ჩ': ['ch', 'c'], 'ც': ['ts', 'c'],
    'ძ': 'dz', 'წ': ['ts', 'c'], 'ჭ': ['ch', 'c'], 'ხ': ['kh', 'h'], 'ჯ': 'j', 'ჰ': 'h'});
  // Armenian
  add({'ա': 'a', 'բ': 'b', 'գ': 'g', 'դ': 'd', 'ե': 'e', 'զ': 'z', 'է': 'e', 'ը': 'e', 'թ': 't', 'ժ': ['zh', 'z'],
    'ի': 'i', 'լ': 'l', 'խ': ['kh', 'h'], 'ծ': ['ts', 'c'], 'կ': 'k', 'հ': 'h', 'ձ': 'dz', 'ղ': ['gh', 'g'],
    'ճ': ['ch', 'c'], 'մ': 'm', 'յ': 'y', 'ն': 'n', 'շ': ['sh', 's'], 'ո': 'o', 'չ': ['ch', 'c'], 'պ': 'p', 'ջ': 'j',
    'ռ': 'r', 'ս': 's', 'վ': 'v', 'տ': 't', 'ր': 'r', 'ց': ['ts', 'c'], 'ւ': 'u', 'փ': 'p', 'ք': 'k', 'օ': 'o',
    'ֆ': 'f', 'և': 'ev'});
  // Arabic script (consonants; short vowels are not written)
  add({'ا': 'a', 'آ': 'a', 'أ': 'a', 'إ': 'i', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ث': 's', 'ج': 'j', 'چ': ['ch', 'c'],
    'ح': 'h', 'خ': ['kh', 'h'], 'د': 'd', 'ذ': 'z', 'ر': 'r', 'ز': 'z', 'ژ': ['zh', 'z'], 'س': 's', 'ش': ['sh', 's'],
    'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z', 'ع': '', 'غ': ['gh', 'g'], 'ف': 'f', 'ق': 'q', 'ک': 'k', 'ك': 'k',
    'گ': 'g', 'ل': 'l', 'م': 'm', 'ن': 'n', 'و': 'v', 'ه': 'h', 'ة': 'a', 'ی': 'y', 'ي': 'y', 'ى': 'y', 'ء': '',
    'ئ': 'y', 'ؤ': 'v', 'ۆ': 'o', 'ێ': 'e', 'ە': 'e', 'ڵ': 'l', 'ڕ': 'r', 'ڤ': 'v'});
  var MARK = /\p{M}/gu, ISMARK = /\p{M}/u, KEEP = /[\p{L}\p{N}]/u;

  /** fold(s) -> [digraph text, single text]; words separated by single spaces. */
  function fold(s) {
    s = String(s == null ? '' : s).normalize('NFKC')
      .toLowerCase().normalize('NFC').replace(/ու/g, 'ւ');  // Armenian ու = u
    var d = '', o = '';
    for (var ch of s) {
      var t = T[ch];
      if (!t) {
        var b = ch.normalize('NFD').replace(MARK, '');
        t = T[b];
        if (!t) {
          if (b.length && KEEP.test(b)) t = [b, b];
          else if (ISMARK.test(ch) || /[​-‏­ʼʻ'’ʹ`´]/.test(ch)) t = ['', ''];
          else t = [' ', ' '];
        }
      }
      d += t[0]; o += t[1];
    }
    var tidy = function (x) { return x.replace(/\s+/g, ' ').trim(); };
    return [tidy(d), tidy(o)];
  }

  /** keys(s) -> unique non-empty [single, digraph] with spaces removed. */
  function keys(s) {
    var f = fold(s), out = [];
    [f[1], f[0]].forEach(function (k) { k = k.replace(/ /g, ''); if (k && out.indexOf(k) < 0) out.push(k); });
    return out;
  }

  /** words(s) -> keys of each space-separated word (for multi-word entries), plus keys(s). */
  function words(s) {
    var out = keys(s), f = fold(s);
    if (f[1].indexOf(' ') > -1) {
      f[1].split(' ').concat(f[0].split(' ')).forEach(function (w) { if (w && out.indexOf(w) < 0) out.push(w); });
    }
    return out;
  }

  /** Exact comparison form: same script and same letters (case, spacing and punctuation ignored). */
  function plain(s) {
    return String(s == null ? '' : s).normalize('NFKC').toLowerCase().normalize('NFC')
      .replace(/ς/g, 'σ').replace(/[^\p{L}\p{N}\p{M}]+/gu, '');
  }

  /** prefix(key, n) -> first n code points (search index bucket). */
  function prefix(k, n) { return Array.from(k).slice(0, n).join(''); }

  var api = {fold: fold, keys: keys, words: words, plain: plain, prefix: prefix};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.EK = api;
})(typeof window !== 'undefined' ? window : globalThis);
