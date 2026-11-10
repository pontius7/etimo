#!/usr/bin/env python3
"""Build site/index.html = Etimo's index.html + the Devter merge patches.

Reads  reference/etimo-artifact/index.html   (never modified)
       reference/devter-artifact/index.html  (source of Devter tables: names, places, regions, cities)
       reference/*/data/languages.json, lexicon.json (computed counts and group lists)
Writes site/index.html

Every patch is an exact-match find/replace. Each `old` snippet must occur exactly `count` times
(default 1) in the current text or the script stops with an error. Rerunnable and idempotent:
the output depends only on the reference inputs.

Spec: docs/MERGE-SPEC.md (patch ids P1..P24 are referenced in comments).
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, HERE)
import palette  # noqa: E402
import families  # noqa: E402

E_HTML = os.path.join(ROOT, 'reference', 'etimo-artifact', 'index.html')
D_HTML = os.path.join(ROOT, 'reference', 'devter-artifact', 'index.html')
E_DATA = os.path.join(ROOT, 'reference', 'etimo-artifact', 'data')
D_DATA = os.path.join(ROOT, 'reference', 'devter-artifact', 'data')
OUT = os.path.join(ROOT, 'site', 'index.html')

NEW_FAMS = families.NEW     # Devter's four + anything in content/families.json
OLD_FAMS = families.ETIMO   # built into the original app
EXTRA_FAMS = families.EXTRA
VAR = palette.VAR


def jsdump(v):
    return json.dumps(v, ensure_ascii=False, separators=(',', ':'))


def load(path):
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def jslit(requests):
    r = subprocess.run(['node', os.path.join(HERE, 'jslit.js'), json.dumps(requests)],
                       check=True, capture_output=True, text=True)
    return json.loads(r.stdout)


class Patcher:
    def __init__(self, text):
        self.s = text
        self.log = []

    def rep(self, pid, old, new, count=1):
        n = self.s.count(old)
        if n != count:
            raise SystemExit(f'PATCH {pid} FAILED: expected {count} occurrence(s) of {old[:120]!r}, found {n}')
        self.s = self.s.replace(old, new)
        self.log.append((pid, count))


# ---------------------------------------------------------------- inputs
E_LANGS, D_LANGS = load(os.path.join(E_DATA, 'languages.json')), load(os.path.join(D_DATA, 'languages.json'))
D_LEX = load(os.path.join(D_DATA, 'lexicon.json'))
N_LANGS = len(E_LANGS) + len(D_LANGS)
N_FAMS = len(OLD_FAMS) + len(NEW_FAMS)

with open(E_HTML, encoding='utf-8') as f:
    SRC = f.read()

LIT = jslit([
    # Etimo tables (offsets keep the search inside the app code, past React's own identifiers)
    {'key': 'Yr', 'file': E_HTML, 'marker': ',Yr=', 'from': 490000},
    {'key': 'Jr', 'file': E_HTML, 'marker': ',Jr=', 'from': 490000},
    {'key': 'Xr', 'file': E_HTML, 'marker': ',Xr=', 'from': 490000},
    {'key': 'ta', 'file': E_HTML, 'marker': ',ta=', 'from': 490000},
    {'key': 'na', 'file': E_HTML, 'marker': ',na=', 'from': 490000},
    {'key': 'ra', 'file': E_HTML, 'marker': 'let ra=', 'from': 490000},
    {'key': 'ea', 'file': E_HTML, 'marker': ',ea=', 'from': 490000},
    {'key': 'Sa', 'file': E_HTML, 'marker': 'let $a=', 'from': 600000},
    {'key': 'Jf', 'file': E_HTML, 'marker': 'const Jf=', 'from': 700000},
    # Devter tables
    {'key': 'rN', 'file': D_HTML, 'marker': ',rN=', 'from': 480000},
    {'key': 'rC', 'file': D_HTML, 'marker': ',rC=', 'from': 480000},
    {'key': 'rz', 'file': D_HTML, 'marker': ',rz=', 'from': 480000},
    {'key': 'rT', 'file': D_HTML, 'marker': ',rT=', 'from': 480000},
    {'key': 'rL', 'file': D_HTML, 'marker': ',rL=', 'from': 480000},
    {'key': 'rS', 'file': D_HTML, 'marker': 'let r$=', 'from': 480000},
    {'key': 'ag', 'file': D_HTML, 'marker': 'let ag=', 'from': 480000},
    {'key': 'kCT', 'file': D_HTML, 'marker': 'const kCT=', 'from': 600000},
])
for k in ('Yr', 'Jr', 'Xr', 'ta', 'na', 'ra', 'Sa', 'Jf'):
    assert SRC.count(LIT[k]['src']) == 1, f'literal {k} not unique'


# ---------------------------------------------------------------- CSS: per-family rules
def css_family_rules(text):
    """Copy every CSS rule that is specific to 'Romance' for the 4 new families.

    Works on the <style> region only (before the main <script type="module">). For an innermost
    rule `selectors{body}` that mentions Romance:
      * body uses var(--f-roma): insert a copy per new family right after it (cascade order kept),
        built from the Romance selector parts only;
      * otherwise (shared body, e.g. opacity:1): extend the selector list in place;
      * ':not(.Romance)' chains: extend the chain.
    """
    end = text.index('<script type="module">')
    css, rest = text[:end], text[end:]
    out, i, depth, last, stats = [], 0, 0, 0, {'copied': 0, 'extended': 0, 'not': 0}
    starts = []
    while i < len(css):
        c = css[i]
        if css.startswith('/*', i):
            j = css.find('*/', i + 2)
            i = j + 2
            continue
        if c == '{':
            starts.append(i)
        elif c == '}' and starts:
            op = starts.pop()
            body = css[op + 1:i]
            if '{' not in body:
                # prelude starts after previous '}' / '{' / ';' at this level, or after '>' of <style>
                k = op - 1
                while k >= 0 and css[k] not in '{};' and not (
                        css[k] == '>' and css.rfind('<', 0, k) > css.rfind('>', 0, k)):  # end of a <style> tag
                    k -= 1
                pre_start = k + 1
                prelude = css[pre_start:op]
                if 'Romance' in prelude and '<' not in prelude:
                    lead = len(prelude) - len(prelude.lstrip())
                    sel = prelude.strip()
                    rule = css[pre_start:i + 1]
                    if ':not(.Romance)' in sel:
                        nsel = sel.replace(':not(.Romance)', ':not(.Romance)' + ''.join(f':not(.{f})' for f in NEW_FAMS))
                        new = prelude[:lead] + nsel + '{' + body + '}'
                        stats['not'] += 1
                    else:
                        parts = [p for p in split_selectors(sel)]
                        rparts = [p for p in parts if 'Romance' in p]
                        if 'f-roma' in body:
                            copies = ''.join(
                                ','.join(sub_fam(p, f) for p in rparts) + '{' + sub_fam(body, f) + '}' for f in NEW_FAMS)
                            new = rule + copies
                            stats['copied'] += 1
                        else:
                            ext = [sub_fam(p, f) for f in NEW_FAMS for p in rparts]
                            new = prelude[:lead] + ','.join(parts + ext) + '{' + body + '}'
                            stats['extended'] += 1
                    out.append(css[last:pre_start])
                    out.append(new)
                    last = i + 1
        i += 1
    out.append(css[last:])
    return ''.join(out) + rest, stats


def split_selectors(sel):
    parts, depth, cur = [], 0, ''
    for ch in sel:
        if ch in '([':
            depth += 1
        elif ch in ')]':
            depth -= 1
        if ch == ',' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return parts


def sub_fam(s, fam):
    return s.replace('Romance', fam).replace('--f-roma', '--f-' + VAR[fam])


# ---------------------------------------------------------------- main
def build():
    p = Patcher(SRC)
    s_count = SRC.count

    # ---- head: fonts (Georgian) -----------------------------------------------------
    p.rep('P20-font-link', 'family=Noto+Sans:wght@400;500;600&display=swap',
          'family=Noto+Sans:wght@400;500;600&family=Noto+Serif+Georgian:wght@300;400;500'
          '&family=Noto+Sans+Georgian:wght@400;500;600&display=swap')
    p.rep('P20-serif', '--serif:"Noto Serif Display","Noto Serif","Noto Naskh Arabic",Georgia,serif',
          '--serif:"Noto Serif Display","Noto Serif","Noto Serif Georgian","Noto Sans Georgian","Noto Naskh Arabic",Georgia,serif')
    p.rep('P20-sans', '--sans:"Manrope","Noto Sans","Noto Sans Arabic",system-ui',
          '--sans:"Manrope","Noto Sans","Noto Sans Georgian","Noto Sans Arabic",system-ui')

    # ---- CSS colour vars (3 light + 7 dark definition sites) --------------------------
    for theme, roma, n in (('light', '--f-roma:#9860d0', 3), ('dark', '--f-roma:#d0a9ff', 7)):
        add = ''.join(f';--f-{VAR[f]}:{palette.FAM[theme][f]}' for f in NEW_FAMS)
        p.rep(f'P20-vars-{theme}', roma, roma + add, n)

    # ---- CSS per-family rules ------------------------------------------------------
    p.s, stats = css_family_rules(p.s)
    p.log.append(('P20-css-rules', stats))
    # grouped .dot rule that lists the families without Romance (Etimo's bar-shaped dots)
    p.rep('P20-dot-group', '.dot,.dot.Slavic,.dot.Iranian,.dot.Greek,.dot.Albanian,.sn .dot',
          '.dot,.dot.Slavic,.dot.Iranian,.dot.Greek,.dot.Albanian,'
          + ''.join(f'.dot.{f},' for f in NEW_FAMS) + '.sn .dot')
    # historical-language zones (Devter v68 rule)
    p.rep('P18-css', '</style>\n<script type="module">',
          '</style>\n<style id="merge-devter">.zones path.zone.hist{fill-opacity:.18!important;stroke-dasharray:3 2.5;'
          'stroke-width:1.2px;vector-effect:non-scaling-stroke}'
          '/* top menu: icons never clipped (wrapper + svg may not shrink or hide strokes) */'
          '.tabbar button .icn{overflow:visible!important;flex:none!important;max-width:none!important;min-width:0}'
          '.tabbar button svg{overflow:visible!important;flex:none!important}'
          '.tabbar button{overflow:visible}</style>\n<script type="module">')

    # ---- German UI locale excluded (decision 2026-11-07): menu entry removed, stored "de" -> English
    p.rep('DE-menu', '[["en","English"],["sq","Shqip"],["de","Deutsch"]].map(', '[["en","English"],["sq","Shqip"]].map(')
    p.rep('DE-accept', '["en","sr","sc","sq","de"].indexOf(e)>-1', '["en","sr","sc","sq"].indexOf(e)>-1')
    # no favicon file exists; an empty data icon avoids the console 404
    p.rep('favicon', '<title>Etimo</title>', '<title>Etimo</title>\n<link rel="icon" href="data:,">')

    # ---- family lists ----------------------------------------------------------------
    fam_arr_old = '["Slavic","Iranian","Albanian","Greek","Romance"]'
    fam_arr_new = jsdump(OLD_FAMS + NEW_FAMS)
    p.rep('P6-la', 'let la=' + fam_arr_old, 'let la=' + fam_arr_new)
    p.rep('P7-Nf', 'Nf=' + fam_arr_old, 'Nf=' + fam_arr_new)

    # ---- P8 map pins: no family shapes (user decision 2026-11-07). Every pin is the same round
    # marker; family and language are carried by its colour (Vf), as everywhere else in the UI.
    p.rep('P8-pins-round',
          'let vf={Slavic:hh,Iranian:gh,Albanian:mh,Greek:bh,Romance:gf},bf={Slavic:1,Iranian:.86,Albanian:.82,Greek:1.05,Romance:.9};',
          'let vf={},bf={};')

    # ---- family -> CSS var maps --------------------------------------------------------
    p.rep('P9-yf-gradients', '["Greek","--f-gree"],["Romance","--f-roma"]].forEach(',
          '["Greek","--f-gree"],["Romance","--f-roma"]' + ''.join(f',["{f}","--f-{VAR[f]}"]' for f in NEW_FAMS) + '].forEach(')
    varmap_old = '{Slavic:"--f-slav",Iranian:"--f-iran",Albanian:"--f-alba",Greek:"--f-gree",Romance:"--f-roma"}'
    varmap_new = varmap_old[:-1] + ''.join(f',{f}:"--f-{VAR[f]}"' for f in NEW_FAMS) + '}'
    p.rep('P9-If-Vf', varmap_old, varmap_new, 2)
    p.rep('P9-Rf', '{Slavic:"slav",Iranian:"iran",Albanian:"alba",Greek:"gree",Romance:"roma"}',
          '{Slavic:"slav",Iranian:"iran",Albanian:"alba",Greek:"gree",Romance:"roma"' +
          ''.join(f',{f}:"{VAR[f]}"' for f in NEW_FAMS) + '}')
    p.rep('P9-chips-v', 'Romance:n.getPropertyValue("--f-roma").trim(),BG:',
          'Romance:n.getPropertyValue("--f-roma").trim(),' +
          ''.join(f'{f}:n.getPropertyValue("--f-{VAR[f]}").trim(),' for f in NEW_FAMS) + 'BG:')
    p.rep('P12-inline-V', "Greek:'--f-gree',Romance:'--f-roma'};window.__albPalette=P;",
          "Greek:'--f-gree',Romance:'--f-roma'" + ''.join(f",{f}:'--f-{VAR[f]}'" for f in NEW_FAMS) +
          "};window.__albPalette=P;")

    # ---- P10 family labels on the map (Devter positions) --------------------------------
    p.rep('P10-labels', '["Greek",24.6,37],["Albanian",20.1,41.1]]',
          '["Greek",24.6,37],["Albanian",20.1,41.1],["Uralic",62,63.6],["Turkic",70,47.5],["Caucasian",44.6,44.15],'
          '["Mongolic",106,45.2]'
          + ''.join(f',[{jsdump(f)},{d["label"][0]},{d["label"][1]}]' for f, d in EXTRA_FAMS.items()) + ']')

    # ---- P11 spotlight rotation + hero specimen chips -----------------------------------
    p.rep('P11-spot', '["Slavic","Romance","Iranian","Greek","Albanian","Slavic","Romance","Iranian","Slavic","Romance"].forEach',
          '["Slavic","Romance","Caucasian","Turkic","Iranian","Uralic","Greek","Albanian","Mongolic","Slavic"].forEach')
    p.rep('P11-hero', '["ا–ی","Persian","Iranian"],["A–Z","French","Romance"]].map(',
          '["ا–ی","Persian","Iranian"],["ა–ჰ","Georgian","Caucasian"],["A–Z","French","Romance"],["A–Ö","Finnish","Uralic"]].map(')

    # ---- P2 mini map: per-language rotation only for the far east (Etimo langs unchanged) --
    p.rep('P2-minimap', 'h=kd().parallels([35,60]).rotate([-30,0]),f=[o.lon-6',
          'h=kd().parallels([35,60]).rotate([o.lon>75.5?-o.lon:-30,0]),f=[o.lon-6')

    # ---- P3 first view: fit Etimo's own language points (same first view as before) ------
    p.rep('P3-fit', 'j.fitExtent([[S,_],[b-S,y-_]],{type:"FeatureCollection",features:x.map(',
          'j.fitExtent([[S,_],[b-S,y-_]],{type:"FeatureCollection",features:x.filter(e=>la.indexOf(e.family)<5).map(')

    # ---- P17 overlays: replace the 3 stub loaders' 2 data stubs + the Kf consumers --------
    p.rep('P17-Df', 'let Of=null;function Df(){return Of||(Of=Promise.resolve(null))}',
          'let Of=null;function Df(){return Of||(Of=fetch("data/ethno.json").then(e=>e.ok?e.json():null).catch(()=>null))}')
    p.rep('P17-Zf', 'function Zf(){return Gf||(Gf=Promise.resolve(null))}',
          'function Zf(){return Gf||(Gf=Promise.all([fetch("data/adm2.json").then(e=>e.json()),'
          'fetch("data/micro.json").then(e=>e.json()),Df()]).then(([t,m,E])=>{E&&E.so&&(E.so.f.bb=pu(E.so.f));'
          'let F=ef(t,t.objects.d).features;F.forEach((f,i)=>{f.bb=pu(f),f._i=i,f.properties.n=(f.properties.n||"")'
          '.replace(/^(городской округ|город|городской)\\s+/i,"")});return Kf={F,M:m,topo:t,E}}).catch(()=>null))}')
    # In Etimo's build these three reads were folded into the single null var Kf.
    p.rep('P17-Kf-ethno', '{let t=Kf;if(ie=null,t)', '{let t=Kf&&Kf.E;if(ie=null,t)')
    p.rep('P17-Kf-districts', 's=(e,t)=>{let n=ae&&Kf;return!!(n&&n[t]',
          's=(e,t)=>{let n=ae&&Kf&&Kf.M[e.lang];return!!(n&&n[t]')
    p.rep('P17-Kf-places', '!e||!e.info)return;let t=Kf;if(t&&t.p&&t.p.length)',
          '!e||!e.info)return;let t=Kf&&Kf.M[e.lang];if(t&&t.p&&t.p.length)')

    # ---- P18 historical zones (2 sites) ------------------------------------------------
    p.rep('P18-zone-terr', '.join("path").attr("class",e=>"zone "+e.family).attr("fill-rule","evenodd").attr("d",e=>da[e.lang].d)',
          '.join("path").attr("class",e=>"zone "+e.family+(e.info&&e.info.hist?" hist":"")).attr("fill-rule","evenodd")'
          '.attr("d",e=>da[e.lang].v||da[e.lang].d)')  # v = non-overlapping drawn shape (merge-data.py)
    p.rep('P18-zone-circle', 'A.append("path").datum(e).attr("class","zone "+e.family)',
          'A.append("path").datum(e).attr("class","zone "+e.family+(e.info&&e.info.hist?" hist":""))')

    # ---- nested same-family areas (data: languages.json info.nest = outermost same-family parent)
    # Colour rule (2026-11-07, user): EVERY language is painted in its own palette colour on the map,
    # exactly as on the wheel, cards and pins. Nested areas used to blend into their parent's colour;
    # that made Montenegrin/Gheg/Tosk/Catalan... disagree with the original app and with the wheel.
    # `info.nest` is still used for geometry (non-overlapping shapes, tighter zoom frame) only.
    # selecting a nested area zooms to that area alone: smaller minimum frame than Etimo's 1/10 view
    p.rep('NEST-zoom', 'function Ht(e,t){let n=U(e),r=(n[0]+n[2])/2,a=(n[1]+n[3])/2,i=Math.max(n[2]-n[0],b/10),s=Math.max(n[3]-n[1],y/10);',
          'function Ht(e,t){let n=U(e),r=(n[0]+n[2])/2,a=(n[1]+n[3])/2,c=e.info&&e.info.nest?24:10,'
          'i=Math.max(n[2]-n[0],b/c),s=Math.max(n[3]-n[1],y/c);')

    # ---- P19 alias search (2 sites) ----------------------------------------------------
    p.rep('P19-alias', 'n=Da(e.info.an||"")', 'n=Da((e.info.an||"")+" "+(e.info.al||[]).join(" "))', 2)

    # ---- P16 A-Z index key: keep Georgian letters too ---------------------------------
    p.rep('P16-sortkey', '.replace(/^[^a-zЀ-ӿͰ-Ͽ]+/,"")}', '.replace(/^[^a-zЀ-ӿͰ-ϿႠ-ჿ]+/,"")}')

    # ---- P13 region groups + tabs ------------------------------------------------------
    ag = LIT['ag']['val']
    groups = dict(LIT['Sa']['val'])
    eur = ag['eur']
    redistribute = {'Gagauz': 'balk', 'Rumelian Turkish': 'balk', 'Karaim': 'east', 'Hungarian': 'cee'}
    nord = [x for x in eur if x not in redistribute]
    for lang, g in redistribute.items():
        assert lang in eur, lang
        groups[g] = groups[g] + [lang]
    dag = [r['lang'] for r in D_LEX if 'Dagestan' in (r.get('place') or '')]
    groups.update({'nord': nord, 'cauc': ag['cauc'], 'dag': dag, 'volga': ag['volga'], 'casia2': ag['casia'],
                   'sib': ag['sib']})
    for c in CONTENT_LANGS:  # your languages: optional "region" = one of the tab keys
        if c.get('region'):
            assert c['region'] in groups, f'{c["name"]}: region must be one of {sorted(groups)}'
            groups[c['region']] = groups[c['region']] + [c['name']]
    every = {x for v in groups.values() for x in v}
    missing = sorted(set(D_LANGS) - every)
    assert not missing, f'Devter languages without a region tab: {missing}'
    p.rep('P13-groups', 'let $a=' + LIT['Sa']['src'], 'let $a=' + jsdump(groups))
    tabs_old = '["all","west","ital","cee","east","balk","grk","iran","casia"]'
    tabs_new = '["all","west","ital","cee","east","nord","balk","grk","cauc","dag","volga","iran","casia","casia2","sib"]'
    p.rep('P13-tabs', 'children:' + tabs_old + '.map(', 'children:' + tabs_new + '.map(')
    reg_add = {
        'en': {'nord': 'Northern Europe', 'cauc': 'Caucasus', 'dag': 'Dagestan', 'volga': 'Volga & Urals',
               'casia2': 'Anatolia, Iran & Central Asia', 'sib': 'Siberia, Mongolia & China'},
        'sr': {'nord': 'Severna Evropa', 'cauc': 'Kavkaz', 'dag': 'Dagestan', 'volga': 'Volga i Ural',
               'casia2': 'Anadolija, Iran i Srednja Azija', 'sib': 'Sibir, Mongolija i Kina'},
        'sq': {'nord': 'Evropa Veriore', 'cauc': 'Kaukazi', 'dag': 'Dagestani', 'volga': 'Vollga dhe Urali',
               'casia2': 'Anadolli, Irani dhe Azia Qendrore', 'sib': 'Siberia, Mongolia dhe Kina'},
    }
    casia_lbl = {'en': 'Caucasus & Central Asia', 'sr': 'Kavkaz i Srednja Azija', 'sq': 'Kaukazi dhe Azia Qendrore'}
    for loc, lbl in casia_lbl.items():
        p.rep(f'P13-reg-{loc}', f'casia:"{lbl}"}}', f'casia:"{lbl}"' + ''.join(
            f',{k}:{jsdump(v)}' for k, v in reg_add[loc].items()) + '}')

    # ---- P15 UI strings ------------------------------------------------------------------
    # tagline (names every family), search hint (language count), top5 (family count)
    p.rep('P15-tagline-en', '" Slavic, Iranian, Albanian, Greek and Romance languages"',
          '" ' + families.join_words(OLD_FAMS + NEW_FAMS, 'and') + ' languages"')
    p.rep('P15-tagline-sr', '" slovenskih, iranskih, albanskih, grčkih i romanskih jezika"',
          '" ' + families.join_words(['slovenskih', 'iranskih', 'albanskih', 'grčkih', 'romanskih', 'kavkaskih', 'turkijskih',
                                        'uralskih', 'mongolskih'] + [d['sr_of'] for d in EXTRA_FAMS.values()], 'i') + ' jezika"')
    p.rep('P15-tagline-sq', '" gjuhë sllave, iraniane, shqipe, greke dhe romane"',
          '" gjuhë ' + families.join_words(['sllave', 'iraniane', 'shqipe', 'greke', 'romane', 'kaukaziane', 'turkike',
                                              'uraliane', 'mongole'] + [d['sq_of'] for d in EXTRA_FAMS.values()], 'dhe') + '"')
    p.rep('P15-shint-en', 'any of the 57 languages', f'any of the {N_LANGS} languages')
    p.rep('P15-shint-sr', 'bilo kom od 57 jezika', f'bilo kom od {N_LANGS} jezika')
    p.rep('P15-shint-sq', 'cilëndo nga 57 gjuhët', f'cilëndo nga {N_LANGS} gjuhët')
    p.rep('P15-top5-en', 'top5:"5 families"', f'top5:"{N_FAMS} families"')
    p.rep('P15-top5-sr', 'top5:"5 porodica"', f'top5:"{N_FAMS} porodica"')
    p.rep('P15-top5-sq', 'top5:"5 familje"', f'top5:"{N_FAMS} familje"')

    # about-the-data: name the sources behind the Devter word lists (all 4 locales)
    about = {
        'en': ('which also supplies the reconstructed roots, cognate sets and loan notes.',
               ' For the Caucasian, Turkic, Uralic and Mongolic languages, word forms also come from Robbeets et al. 2021 '
               'and Savelyev & Robbeets 2020 (Transeurasian lexical data), DiACL (Carling et al.), Apertium bilingual '
               'dictionaries and the Altangerel English–Mongolian dictionary; for their Latin-script words the '
               'pronunciation shown is a rule-based reading of the spelling, and Cyrillic words without a published '
               'romanisation are transliterated by a fixed rule.'),
        'sr': ('skupove srodnih reči i napomene o pozajmljenicama.',
               ' Za kavkaske, turkijske, uralske i mongolske jezike oblici reči potiču i iz Robbeets i dr. 2021 i '
               'Savelyev i Robbeets 2020 (transevroazijski leksički podaci), DiACL (Carling i dr.), dvojezičnih rečnika '
               'Apertium i englesko-mongolskog rečnika Altangerel; za njihove reči pisane latinicom prikazani izgovor je '
               'čitanje pravopisa po pravilima, a ćirilične reči bez objavljene latinizacije transliterisane su po '
               'utvrđenom pravilu.'),
        'sq': ('grupet e fjalëve të afërta dhe shënimet për huazimet.',
               ' Për gjuhët kaukaziane, turkike, uraliane dhe mongole, format e fjalëve vijnë edhe nga Robbeets et al. '
               '2021 dhe Savelyev & Robbeets 2020 (të dhëna leksikore transeuroaziatike), DiACL (Carling et al.), '
               'fjalorët dygjuhësh Apertium dhe fjalori anglisht–mongolisht i Altangerelit; për fjalët e tyre me '
               'shkrim latin, shqiptimi i dhënë është një lexim i drejtshkrimit sipas rregullash, ndërsa fjalët '
               'cirilike pa latinizim të botuar janë transliteruar sipas një rregulli të caktuar.'),
    }
    for loc, (anchor, add) in about.items():
        p.rep(f'P15-about-{loc}', anchor, anchor + add)

    # family display names, path roots, vitality labels, language and place names
    yr = dict(LIT['Yr']['val'])
    yr.update({k: LIT['rN']['val'][k] for k in families.DEVTER})
    yr.update({k: {'en': k, 'sr': d['sr'], 'sq': d['sq'], 'de': d['de']} for k, d in EXTRA_FAMS.items()})
    p.rep('P15-Yr', ',Yr=' + LIT['Yr']['src'], ',Yr=' + jsdump(yr))
    jr = dict(LIT['Jr']['val'])
    for k, v in LIT['rC']['val'].items():
        assert k not in jr, k
        jr[k] = v
    # deeper Devter branch names (Devter itself showed them in English): sr + sq translations
    for k, v in load(os.path.join(HERE, 'devter-path-names.json')).items():
        assert k not in jr, k
        jr[k] = v
    p.rep('P15-Jr', ',Jr=' + LIT['Jr']['src'], ',Jr=' + jsdump(jr))
    xr = dict(LIT['Xr']['val'])
    for k in ('extinct', 'historical'):
        assert k not in xr
        xr[k] = LIT['rz']['val'][k]
    p.rep('F16-Xr', ',Xr=' + LIT['Xr']['src'], ',Xr=' + jsdump(xr))
    ta = dict(LIT['ta']['val'])
    for k, v in LIT['rT']['val'].items():
        assert k not in ta, k
        ta[k] = v
    for c in CONTENT_LANGS:  # names in Serbian/Albanian for your languages (fallback: English)
        ta[c['name']] = [c.get('name_sr') or '', c.get('name_sq') or '', '']
    p.rep('F17-ta', ',ta=' + LIT['ta']['src'], ',ta=' + jsdump(ta))
    na = dict(LIT['na']['val'])
    for k, v in LIT['rL']['val'].items():
        if k in na:
            assert na[k] == v, (k, na[k], v)
        na[k] = v
    for c in CONTENT_LANGS:
        if c.get('place_sr') or c.get('place_sq'):
            na.setdefault(c['place'], [c.get('place_sr') or c['place'], c.get('place_sq') or c['place'], ''])
    p.rep('F18-na', ',na=' + LIT['na']['src'], ',na=' + jsdump(na))

    # ---- P14 taxonomy: 41 Devter meanings placed in Etimo's subcategories + synonyms ------
    ra = LIT['ra']['val']
    known = {m for c in ra.values() for _, ms in c for m in ms}
    place = {
        'Children & grandchildren': ['grandchild'],
        'Siblings': ['older brother', 'younger brother', 'older sister', 'younger sister'],
        'Uncles, aunts & cousins': ["uncle (father's brother)", "uncle (mother's brother)",
                                    "aunt (father's sister)", "aunt (mother's sister)"],
        'In-laws & step-kin': ['father-in-law', 'mother-in-law', 'son-in-law', 'daughter-in-law'],
        'Animals & herds': ['herd', 'shepherd'],
        'Pigs & goats': ['he-goat', 'sow (female pig)'],
        'Earth & land': ['rock', 'soil'],
        'Water': ['creek', 'stream', 'spring', 'well'],
        'Plants & trees': ['bark'],
        'Trunk & limbs': ['back'],
        'Fats, salt & sweets': ['fat'],
        'Furniture & hearth': ['hearth'],
        'Hats, belts & jewellery': ['ring'],
        'Religion & magic': ['house of worship', 'mosque', 'prayer', 'mullah', 'imam', 'Islam', 'Muslim', 'Christian',
                             'Koran', 'shaman', 'witch', 'good luck', 'misfortune'],
    }
    added = []
    for cat in ra.values():
        for sub in cat:
            for m in place.get(sub[0], []):
                if m not in known:
                    sub[1].append(m)
                    added.append(m)
    assert set(sum(place.values(), [])) - known == set(added), 'unplaced meaning'
    # your own meanings: content/meanings.csv (meaning, subcategory[, sr, sq]) -> taxonomy + labels
    ea_add = {}
    mpath = os.path.join(ROOT, 'content', 'meanings.csv')
    if os.path.exists(mpath):
        import csv
        subs = {sub[0]: sub for cat in ra.values() for sub in cat}
        with open(mpath, encoding='utf-8-sig', newline='') as fh:
            for i, row in enumerate(csv.DictReader(fh), start=2):
                row = {(k or '').strip().lower(): (v or '').strip() for k, v in row.items()}
                if not row.get('meaning'):
                    continue
                assert row.get('subcategory') in subs, (f'content/meanings.csv line {i}: unknown subcategory '
                                                        f'{row.get("subcategory")!r}; use one of: {sorted(subs)}')
                if row['meaning'] not in known and row['meaning'] not in added:
                    subs[row['subcategory']][1].append(row['meaning'])
                    added.append(row['meaning'])
                if row.get('sr') or row.get('sq'):
                    ea_add[row['meaning']] = {k: row[k] for k in ('sr', 'sq') if row.get(k)}
    p.rep('P14-ra', 'let ra=' + LIT['ra']['src'], 'let ra=' + jsdump(ra))
    if ea_add:
        ea = dict(LIT['ea']['val'])
        for k, v in ea_add.items():
            ea[k] = dict(ea.get(k, {}), **v)
        p.rep('P14-ea', ',ea=' + LIT['ea']['src'], ',ea=' + jsdump(ea))
    known |= set(added)
    syn = {k: v for k, v in LIT['rS']['val'].items() if k not in known and v in known}
    p.rep('P14-sa', 'let sa={};', 'let sa=' + jsdump(syn) + ';')
    ea = LIT['ea']['val']
    untranslated = [m for m in added if m not in ea]

    # ---- P22 cities ------------------------------------------------------------------------
    cities = cities_with_cc(LIT['Jf']['val'], LIT['kCT']['val'])
    p.rep('P22-cities', 'const Jf=' + LIT['Jf']['src'], 'const Jf=' + jsdump(LIT['Jf']['val'] + cities))

    # ---- P12 per-language colours (inline P map) for Devter languages ----------------------
    shades = devter_language_shades()
    shades.update(content_language_shades())
    p.rep('P12-inline-P', '"Wakhi":"#655811","Sarikoli":"#b59e27"};',
          '"Wakhi":"#655811","Sarikoli":"#b59e27",' + jsdump(shades)[1:-1] + '};')

    # ---- UI accent: Etimo's teal-green chrome becomes obsidian/navy (user decision 2026-11-07)
    p.s, n_navy = navy_ui(p.s)
    p.log.append(('UI-navy', n_navy))

    # ---- cache-busting for the on-demand regional scripts (perf/regional-data branch)
    p.rep('P-cache-regional', 'regional-layer.js?v=34', 'regional-layer.js?v=36')
    p.rep('P-cache-country', 'country-data.js?v=4', 'country-data.js?v=5')

    fd_patches(p)
    perf_patches(p)
    map_fixes(p)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(p.s)
    print(f'wrote {os.path.relpath(OUT, ROOT)} ({len(p.s):,} chars); {len(p.log)} patches applied')
    for pid, c in p.log:
        print('  ok', pid, c)
    print(f'  languages {N_LANGS}, families {N_FAMS}, new meanings {len(added)} (untranslated: {untranslated}), '
          f'synonyms {len(syn)}, cities +{len(cities)}, per-language colours +{len(shades)}')



# ---------------------------------------------------------------- full dictionaries, search, language page
INJ = os.path.join(HERE, 'inject')


def search_version():
    root = os.path.join(ROOT, 'site', 'h', 'search')
    vs = [d for d in os.listdir(root) if os.path.isdir(os.path.join(root, d))] if os.path.isdir(root) else []
    assert len(vs) == 1, f'expected one search index version in site/h/search, found {vs} (run merge-data.py)'
    return vs[0]


def fd_patches(p):
    """Full-dictionary tier (scripts/merge/bulk_import.py) in the app: lazy per-language dictionary
    on the language page, dictionary results in the main search, Latin-key matching everywhere,
    language page layout (header, sticky search, family path), "About the data" text removed."""
    ek = open(os.path.join(ROOT, 'site', 'search-key.js'), encoding='utf-8').read()
    app = open(os.path.join(INJ, 'fd-app.js'), encoding='utf-8').read()
    css = open(os.path.join(INJ, 'fd.css'), encoding='utf-8').read()
    # language tree: families from content/families.json follow the nine built-in ones
    css += ''.join(f'\ndetails.vb.d1:has(>summary .dot.{f}){{order:{10 + i}}}' for i, f in enumerate(EXTRA_FAMS))
    assert '</script>' not in ek and '</script>' not in app and '</style>' not in css
    p.rep('FD-ek', '\n<script type="module">', '\n<script>' + ek + '</script>\n<style id="etimo-fd">' + css
          + '</style>\n<script type="module">')
    p.rep('FD-code', 'function kp({L:e,onCat:t}){',
          'const FDV=' + jsdump(search_version()) + ';\n' + app + '\nfunction kp({L:e,onCat:t,d:FDd}){')
    # language page: Latin keys in its word filter
    # every language page opens on "All" (not the last-used or "family" category)
    p.rep('FD-cat-default', 'cat:"family",tv:', 'cat:"all",tv:')
    p.rep('FD-cat-nostore', 'let e=localStorage.getItem("khl-cat");e&&(mi.cat=e);', '')
    p.rep('FD-cat-kp', '[a,i]=(0,m.useState)(mi.cat),', '[a,i]=(0,m.useState)("all"),')
    p.rep('FD-cat-reset', '(0,m.useEffect)(()=>{mi.wq=s,mi.wqL=e.id},[s,e.id]),',
          '(0,m.useEffect)(()=>{mi.wq=s,mi.wqL=e.id},[s,e.id]),(0,m.useEffect)(()=>{i("all"),mi.cat="all"},[e.id]),')
    # language tree: all families start closed so every family is visible; tap to open
    p.rep('FD-tree-closed', 'open:e.depth<=1', 'open:!1')
    # home hero: moving pill a bit longer (phone 28px, desktop 40px)
    p.rep('FD-pill-len', 'o.len=e<640?18:26', 'o.len=e<640?28:40')
    # map: finger taps may wobble; treat up to 14px of movement as a tap (select), not a drag
    p.rep('FD-tap-slop', 'Math.hypot(n[0]-s[0],n[1]-s[1])>7&&(i=!0)', 'Math.hypot(n[0]-s[0],n[1]-s[1])>14&&(i=!0)')
    p.rep('FD-kp-filter', 'c=Da(s.trim()),d=c?u.filter(e=>Da(e.word+" "+(e.lat||"")+" "+e.meaning+" "+Ta(e.meaning)).indexOf(c)>-1):u,',
          'c=Da(s.trim()),FQ=FDq(s),d=c?u.filter(e=>Da(e.word+" "+(e.lat||"")+" "+e.meaning+" "+Ta(e.meaning)).indexOf(c)>-1'
          '||FDcoreMatch(e,FQ)):u,')
    # layout: header -> sticky search -> category chips -> words -> full dictionary -> map -> prev/next
    mini = ('(0,f.jsx)("button",{type:"button",className:"minimap",ref:l,"aria-label":n.showMap,onClick:()=>Ja("map-"+'
            'e.id.slice(2)),children:(0,f.jsxs)("span",{className:"tag",children:[(0,f.jsx)(si,{n:"map"}),n.showMap]})})')
    p.rep('FD-kp-mini-out', 'children:[' + mini + ',(0,f.jsxs)("div",{className:"head",', 'children:[(0,f.jsxs)("div",{className:"head",')
    # family path line removed from the language page (user request 2026-11-08)
    p.rep('FD-kp-path', '(0,f.jsx)("div",{className:"meta",style:{fontSize:15},children:v.join(" › ")})', 'null')
    i = p.s.index('(0,f.jsx)("div",{className:"ltiles",role:"tablist",children:["all",...aa]')
    srch = ',(0,f.jsx)(ui,{id:"wq",value:s,onChange:o,ph:n.findIn(Na(e))})'
    j = p.s.index(srch, i)
    assert j - i < 600, 'ltiles block not followed by the word search'
    tiles = p.s[i:j]
    p.s = p.s[:i] + '(0,f.jsx)("div",{className:"lsearch",children:(0,f.jsx)(ui,{id:"wq",value:s,onChange:o,ph:n.findIn(Na(e))})}),' \
        + tiles + p.s[j + len(srch):]
    p.log.append(('FD-kp-search-top', 1))
    p.rep('FD-kp-dict', ':(0,f.jsx)("p",{className:"empty",children:n.none})}),(0,f.jsx)(bp,{prev:p>0',
          ':(0,f.jsx)("p",{className:"empty",children:n.none})}),(0,f.jsx)(FDsection,{L:e,q:s,d:FDd}),' + mini
          + ',(0,f.jsx)(bp,{prev:p>0')
    # route #d<entry>-<language>: open the language page on that dictionary entry
    p.rep('FD-route', 'let b=function(e){if(fa[e])return{v:"lang",L:fa[e]};',
          'let b=function(e){if(fa[e])return{v:"lang",L:fa[e]};let FDm=/^d(\\d+)-(.+)$/.exec(e);'
          'if(FDm&&fa["l-"+FDm[2]])return{v:"lang",L:fa["l-"+FDm[2]],d:+FDm[1]};')
    p.rep('FD-route-kp', '(0,f.jsx)(kp,{L:b.L},b.L.id)', '(0,f.jsx)(kp,{L:b.L,d:b.d},b.L.id+(null!=b.d?"d"+b.d:""))')
    # main search: core results as before, then the full-dictionary results
    p.rep('FD-search', 'function Yh({q:e,fam:t="all",onPick:n}){',
          'function Yh(e){return(0,f.jsxs)("div",{className:"fdw",children:[(0,f.jsx)(FDYh,e),(0,f.jsx)(FDresults,{q:e.q,fam:e.fam})]})}'
          'function FDYh({q:e,fam:t="all",onPick:n}){')
    # core search: Latin keys (single-letter + digraph) for every entry and query
    p.rep('FD-Ga', 'ri(e.e.word)&&n(ni(e.e.word)),e._k=Array.from(t)}return e._k}',
          'ri(e.e.word)&&n(ni(e.e.word)),EK.keys(e.e.word).concat(e.e.lat?EK.keys(e.e.lat):[]).forEach(e=>t.add(e)),'
          'e._k=Array.from(t)}return e._k}')
    p.rep('FD-Ha', 's=[...new Set([r,a,Da(i),ri(i)?Da(ni(i)):""].filter(Boolean))];',
          's=[...new Set([r,a,Da(i),ri(i)?Da(ni(i)):""].concat(EK.keys(n)).filter(Boolean))];')
    # settings sheet: the "About the data" disclaimer under the language selector is removed
    a = ',(0,f.jsx)("p",{className:"dh",children:ka(Zr[ya()].aboutD)}),(0,f.jsx)("p",{className:"abt",children:Ea({'
    i = p.s.index(a)
    assert p.s.count(a) == 1
    m = re.compile(r'de:"(?:[^"\\]|\\.)*"\}\[ya\(\)\]\)\}\)').search(p.s, i)
    assert m and m.start() - i < 20000, 'end of the About-the-data paragraph not found'
    p.s = p.s[:i] + p.s[m.end():]
    p.log.append(('FD-no-about', 1))


# ---------------------------------------------------------------- performance
# today.json stays at data/today.json: regional-layer.js fetches the same URL, so both share one download
HASHED = ['lexicon.json', 'languages.json', 'world-50s.json', 'terr.json', 'shade.webp', 'shade.avif', 'shade-s.avif']


def hashed_copies():
    """Copy the startup data to site/h/<name>.<hash>.<ext> (cached for a year, see site/_headers)."""
    import hashlib
    import shutil
    hdir = os.path.join(ROOT, 'site', 'h')
    os.makedirs(hdir, exist_ok=True)
    for old in os.listdir(hdir):
        if os.path.isfile(os.path.join(hdir, old)):
            os.remove(os.path.join(hdir, old))
    out = {}
    for name in HASHED:
        src = os.path.join(ROOT, 'site', 'data', name)
        data = open(src, 'rb').read()
        base, ext = os.path.splitext(name)
        hn = f'{base}.{hashlib.sha1(data).hexdigest()[:10]}{ext}'
        shutil.copyfile(src, os.path.join(hdir, hn))
        out[name] = 'h/' + hn
    return out


def perf_patches(p):
    H = hashed_copies()
    J = 'e=>fetch(e).then(t=>{if(!t.ok)throw Error(e+" "+t.status);return t.json()})'
    old_head = ('Promise.all(["data/lexicon.json","data/languages.json","data/world-50s.json"].map(' + J + ').concat([fetch('
                '"data/terr.json").then(e=>e.ok?e.json():{}).catch(()=>({}))])).then(([e,t,n,r])=>{ua=e,ca=n,Object.keys(ia)'
                '.forEach(e=>{ha[e]=[]}),ua.forEach(e=>{e.id="l-"+oa(e.lang),e.info=t[e.lang]||{},fa[e.id]=e,e.entries.forEach(')
    i = p.s.index(old_head)
    j = p.s.index('.catch(e=>{console.error(e),Hp.innerHTML=', i)
    body = p.s[i + len(old_head):j]
    # body = <per-entry fn>)}),pa=[],...,da=r||{},Hp.innerHTML="",(0,p.createRoot)(Hp).render((0,f.jsx)(Up,{}))}
    k = body.index(')}),pa=[],')
    per_entry = body[:k]
    k2 = body.index(',da=r||{},Hp.innerHTML=""')
    pa_build = body[k + len(')}),'):k2]
    tail = '(0,p.createRoot)(Hp).render((0,f.jsx)(Up,{}))})'
    assert body.endswith(',da=r||{},Hp.innerHTML="",' + tail), body[-200:]
    # B1: the map (languages + world + areas) renders first; words arrive afterwards and fill in
    new = ('Promise.all([' + jsdump(H['languages.json']) + ',' + jsdump(H['world-50s.json']) + '].map(' + J + ').concat([fetch('
           + jsdump(H['terr.json']) + ').then(e=>e.ok?e.json():{}).catch(()=>({}))])).then(([t,n,r])=>{'
           'ua=Object.keys(t).map(e=>({lang:e,place:t[e].pl,family:t[e].fam,gc:t[e].gc,entries:[]})),ca=n,'
           'Object.keys(ia).forEach(e=>{ha[e]=[]}),ua.forEach(e=>{e.id="l-"+oa(e.lang),e.info=t[e.lang]||{},fa[e.id]=e}),'
           'pa=[],da=r||{},window.__lexReady=!1,Hp.innerHTML="",(0,p.createRoot)(Hp).render((0,f.jsx)(Up,{})),'
           '(' + J + ')(' + jsdump(H['lexicon.json']) + ').then(L=>{let by={};ua.forEach(e=>{by[e.lang]=e}),L.forEach(R=>{'
           'let e=by[R.lang];e&&(e.entries=R.entries,e.entries.forEach(' + per_entry + '))}),' + pa_build
           + ',window.__lexReady=!0,window.dispatchEvent(new Event("etimo:lex"))}).catch(e=>{console.error(e),'
           'Hp.querySelector(".boot")&&(Hp.querySelector(".boot").textContent=ja().loadErr)})})')
    p.s = p.s[:i] + new + p.s[j:]
    p.log.append(('PERF-boot-map-first', 1))
    p.rep('PERF-lex-event', 'return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),',
          'return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),'
          '(0,m.useEffect)(()=>{let e=()=>p(e=>e+1);return window.addEventListener("etimo:lex",e),'
          '()=>window.removeEventListener("etimo:lex",e)},[]),')
    p.rep('PERF-wait-words', 'E=null;if("home"===b.v)',
          'E=null;if(!window.__lexReady&&"map"!==b.v&&"langs"!==b.v)E=(0,f.jsx)("div",{className:"wrap",children:'
          '(0,f.jsx)("p",{className:"boot",children:y.loading})});else if("home"===b.v)')
    # B3: today's internal borders load after the first map paint (idle time), not with it
    p.rep('PERF-today', 'ff=fetch("data/today.json")',
          'ff=new Promise(e=>(window.requestIdleCallback||(e=>setTimeout(e,300)))(e)).then(()=>fetch("data/today.json"))')
    # B2: relief image fades in once decoded. Built by scripts/relief/ (soft shading, flat sea).
    # Desktop gets the large AVIF, phones and small tablets the smaller one (same picture, fewer pixels,
    # sized for their screens); a browser that cannot read AVIF falls back to the WebP.
    p.rep('PERF-shade', '.attr("href","data/shade.webp").attr("decoding","async")',
          '.attr("href",matchMedia("(max-width:820px),(pointer:coarse) and (max-width:1180px)").matches?'
          + jsdump(H['shade-s.avif']) + ':' + jsdump(H['shade.avif']) + ').attr("decoding","async").style("opacity",0)'
          '.on("error",function(){let w=' + jsdump(H['shade.webp']) + ';this.getAttribute("href")!==w&&this.setAttribute("href",w)})'
          '.on("load",function(){'
          'this.style.transition="opacity .6s";requestAnimationFrame(()=>{this.style.opacity=""})})')
    # B5: start the startup downloads with the HTML
    pre = ''.join(f'<link rel="preload" href="{H[n]}" as="fetch" crossorigin>' for n in
                  ('languages.json', 'world-50s.json', 'terr.json', 'lexicon.json'))
    p.rep('PERF-preload', '<link rel="icon" href="data:,">', '<link rel="icon" href="data:,">' + pre)


def navy_ui(text):
    """Re-hue Etimo's interface greens (teal headers, buttons, tints, dark-mode greenish blacks) to
    an obsidian/navy blue, keeping lightness so contrast stays as designed. Family colours and the
    per-language colour tables are left alone: those are data colours, not interface chrome."""
    import re as _re
    keep = {c.lower() for t in ('light', 'dark') for d in (palette.ETIMO, palette.FAM) for c in d[t].values()}
    skip = []  # spans of the per-language colour tables
    for start_pat, end_pat in (('var P={', '};'), ('_c={', '}[_n]')):
        i = text.find(start_pat)
        if i >= 0:
            skip.append((i, text.find(end_pat, i)))

    def conv(rgb):
        L, C, H = palette.rgb2oklch(rgb)
        if not (150 <= H <= 200 and C >= .008 and C <= .11):
            return None
        L2 = L * .76 if .3 <= L <= .7 else L
        C2 = min(C, .07 if L2 < .7 else .04)
        out, ok = palette.oklch2rgb(L2, C2, 262)
        return out
    n = 0

    def hexsub(m):
        nonlocal n
        if any(a <= m.start() < b for a, b in skip) or m.group(0).lower() in keep:
            return m.group(0)
        r = conv(palette.hex2rgb(m.group(0)))
        if r is None:
            return m.group(0)
        n += 1
        return palette.rgb2hex(r)

    def rgbsub(m):
        nonlocal n
        if any(a <= m.start() < b for a, b in skip):
            return m.group(0)
        r = conv([int(m.group(i)) / 255 for i in (2, 3, 4)])
        if r is None:
            return m.group(0)
        n += 1
        v = [round(x * 255) for x in r]
        return f'{m.group(1)}({v[0]},{v[1]},{v[2]}{m.group(5) or ""})'
    text = _re.sub(r'#[0-9a-fA-F]{6}\b', hexsub, text)
    text = _re.sub(r'(rgba?)\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,[^)]*)?\)', rgbsub, text)
    return text, n


def load_content_languages():
    import glob
    out = []
    for f in sorted(glob.glob(os.path.join(ROOT, 'content', 'languages', '*.json'))):
        d = load(f)
        out += d if isinstance(d, list) else [d]
    return out


CONTENT_LANGS = load_content_languages()


def content_language_shades():
    """Map colour for each of your languages: a shade of its family colour, in the same tonal
    steps Etimo uses (family hue, lightness cycling), so it reads as part of the family on the map,
    wheel and cards. Optional "color": "#rrggbb" in the JSON overrides it."""
    out = {}
    count = {}
    for c in CONTENT_LANGS:
        if c.get('color'):
            out[c['name']] = c['color']
            continue
        fam = c['family']
        i = count[fam] = count.get(fam, 0) + 1
        base = palette.ETIMO['light'].get(fam) or palette.FAM['light'][fam]
        L0, C0, H0 = palette.rgb2oklch(palette.hex2rgb(base))
        L = palette.LEVELS[(i * 3) % len(palette.LEVELS)]
        H = H0 + ((i % 5) - 2) * 4
        C = min(.17, C0)
        while True:
            rgb, ok = palette.oklch2rgb(L, C, H)
            if ok or C < .05:
                break
            C -= .005
        out[c['name']] = palette.rgb2hex(rgb)
    return out


def devter_language_shades():
    """Per-language colours in Etimo's style: family hue band walked in tree order."""
    by_fam = {}
    lex_fam = {r['lang']: r['family'] for r in D_LEX}
    order = sorted(D_LANGS, key=lambda n: (D_LANGS[n].get('path') or [], n))
    for n in order:
        by_fam.setdefault(lex_fam[n], []).append(n)
    out = {}
    for fam, langs in by_fam.items():
        out.update(palette.language_shades(fam, langs))
    return out


def cities_with_cc(etimo, devter):
    """Devter cities missing from Etimo's list, with an ISO-2 code from point-in-country lookup."""
    import topo as T
    have = {c[0] for c in etimo}
    add = [c for c in devter if c[0] not in have]
    t = load(os.path.join(E_DATA, 'today.json'))
    arcs = T.decode_arcs(t)

    def rings(g):
        def arc(i):
            a = arcs[i] if i >= 0 else arcs[~i][::-1]
            return a
        polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']] if g['type'] == 'Polygon' else []
        out = []
        for poly in polys:
            for ring in poly:
                pts = []
                for i in ring:
                    pts.extend(arc(i))
                out.append(pts)
        return out
    countries = [(g['properties'].get('c'), rings(g)) for g in t['objects']['countries']['geometries']]

    def inside(x, y, ring):
        c = False
        for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):
            if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
                c = not c
        return c
    iso2 = {'RUS': 'RU', 'KAZ': 'KZ', 'MNG': 'MN', 'CHN': 'CN', 'UZB': 'UZ', 'KGZ': 'KG', 'TJK': 'TJ', 'TKM': 'TM',
            'AZE': 'AZ', 'GEO': 'GE', 'ARM': 'AM', 'TUR': 'TR', 'IRN': 'IR', 'FIN': 'FI', 'EST': 'EE', 'HUN': 'HU',
            'NOR': 'NO', 'SWE': 'SE', 'UKR': 'UA', 'MDA': 'MD', 'LVA': 'LV', 'LTU': 'LT', 'AFG': 'AF', 'PAK': 'PK',
            'IND': 'IN', 'BLR': 'BY', 'POL': 'PL', 'ROU': 'RO', 'BGR': 'BG', 'GRC': 'GR', 'SYR': 'SY', 'IRQ': 'IQ',
            'KOR': 'KR', 'PRK': 'KP', 'JPN': 'JP', 'SRB': 'RS', 'HRV': 'HR', 'BIH': 'BA', 'MNE': 'ME', 'MKD': 'MK',
            'ALB': 'AL', 'KOS': 'XK', 'SVN': 'SI', 'SVK': 'SK', 'CZE': 'CZ', 'AUT': 'AT', 'DEU': 'DE', 'ITA': 'IT',
            'FRA': 'FR', 'ESP': 'ES', 'PRT': 'PT', 'CYP': 'CY', 'ISR': 'IL', 'LBN': 'LB', 'JOR': 'JO', 'SAU': 'SA',
            'EGY': 'EG', 'DNK': 'DK', 'NLD': 'NL', 'BEL': 'BE', 'CHE': 'CH', 'GBR': 'GB', 'IRL': 'IE', 'TWN': 'TW',
            'VNM': 'VN', 'BGD': 'BD', 'NPL': 'NP', 'MMR': 'MM', 'THA': 'TH', 'LAO': 'LA', 'KAB': 'KZ'}
    out = []
    for c in add:
        name, lat, lon, pop = c[:4]
        code = None
        for cc, rs in countries:
            n = sum(inside(lon, lat, r) for r in rs)
            if n % 2:
                code = cc
                break
        if code is None:  # coastal point just outside the generalised outline: nearest vertex
            best = min(((min((px - lon) ** 2 + (py - lat) ** 2 for r in rs for px, py in r), cc)
                        for cc, rs in countries if rs), key=lambda z: z[0])
            code = best[1]
        assert code in iso2, f'no ISO-2 mapping for {code} ({name})'
        out.append([name, lat, lon, pop, iso2[code]])
    return out


# ---------------------------------------------------------------- map fixes (2026-11-10 audit)
def map_fixes(p):
    """Verified map bugs, fixed in the app code. Each one is described in README.md ("Map fixes")."""
    # 1. Zoom/pan: the app rewrote display + transform on all 926 city labels on every frame, shown or
    #    not. Now it writes only when a label's visibility changes and only moves the visible ones.
    p.rep('MAP-city-writes',
          'this.style.display=u?null:"none",this.setAttribute("transform","translate("+s.x+","+s.y+") scale("+1/Math.pow(e,.9)+")")',
          'u!==this.__u&&(this.__u=u,this.style.display=u?null:"none"),u&&this.setAttribute("transform","translate("+s.x+","+s.y+") scale("+1/Math.pow(e,.9)+")")')
    # 2. Light/dark switch while the map is open: zones, pins and areas kept the old theme's colours
    #    until the page was reloaded. The map is now redrawn (same position, same selection).
    p.rep('MAP-theme-redraw',
          'k(e=>e+1))},140)});return i.current&&r.observe(i.current),()=>{r.disconnect(),clearTimeout(n)}',
          'k(e=>e+1))},140)}),__mo=new MutationObserver(()=>k(e=>e+1));return i.current&&r.observe(i.current),'
          '__mo.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),'
          '()=>{r.disconnect(),__mo.disconnect(),clearTimeout(n)}')
    # 3. Desktop map panel: the dot beside the family name showed the language colour while the phone
    #    popup and the search chip show the family colour. One rule now: a family label = family dot.
    p.rep('MAP-panel-famdot', '<span class="pfam"><i></i>\'+ei(Ca(e.family))+"</span><h3>"',
          '<span class="pfam"><i class="dot \'+e.family+\'"></i>\'+ei(Ca(e.family))+"</span><h3>"')
    # 2b. Same light/dark problem on the wheel: it was redrawn before the new theme was applied to the
    #     page, so the family slices and about half the language slices kept the other theme's colours.
    #     It now redraws after the theme attribute has actually changed.
    p.rep('WHEEL-theme-state', 'function Pp({ui:e,theme:t}){let n,r=ja(),[a,i]=(0,m.useState)("wheel"),',
          'function Pp({ui:e,theme:t}){let n,r=ja(),[__tk,__stk]=(0,m.useState)(0),[a,i]=(0,m.useState)("wheel"),')
    p.rep('WHEEL-theme-redraw', '},[a,l,t]),(0,m.useEffect)(()=>{g.current&&g.current.draw(u)},[u,a,l,t])',
          '},[a,l,t,__tk]),(0,m.useEffect)(()=>{g.current&&g.current.draw(u)},[u,a,l,t,__tk]),'
          '(0,m.useEffect)(()=>{let e=new MutationObserver(()=>__stk(e=>e+1));'
          'return e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>e.disconnect()},[])')
    p.rep('MAP-panel-famdot-scope', '.card.mcard .mhd,.exv2 .card.mcard .mhd{',
          '.card.mcard .mhd,.exv2 .card.mcard .mhd,.kpanel .phd{', 2)


if __name__ == '__main__':
    build()
