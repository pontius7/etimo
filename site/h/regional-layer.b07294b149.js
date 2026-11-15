/* The rules the map engine (site/map-gl.js) follows for the detailed areas and the census view: how strong an area or a census
   region is drawn, and which view (a family of finer areas with a legend) a choice switches on. Every special case is data in
   content/map/areas.json, which the data build copies into meta.json ("rules"); nothing here names a country or a language.
   The old SVG map that used to be drawn from this file was retired on 2026-11-13 (README "Old map retired"). */
const get=(name,opt)=>fetch('data/'+name,opt).then(r=>{if(!r.ok)throw Error(name+': '+r.status);return r.json();});
const OP={rest:.78,sel:.9,fam:.3,other:.07,filterOther:.14};
// How strong an area is drawn. The only copy: the engine calls these for every detailed area.
// dfam = the family of the area's language, sel = the selected language, fam = the family filter.
// restOp: nothing selected .78 | the selected language .9 | another language of the same family selected .3 |
//   a language of another family selected .07 | under a family filter: that family .78, others .14
//   (.14 is what the base language areas use for the families a filter leaves out).
const restOp=(dfam,sel,fam)=>sel?(sel.family===dfam?OP.fam:OP.other):fam?(fam===dfam?OP.rest:OP.filterOther):OP.rest;
// The rules from meta.json, made ready: sets for the lookups. A view (areas.json "views") switches on when the chosen language is
// one of its languages, or, with familyActivates, when its family is the chosen family filter.
const prepare=R=>({...R,hidePin:new Set(R.hidePin),views:R.views.map(v=>({...v,langs:new Set(v.languages),
 of:new Map(v.groups.flatMap(g=>(g.names||g.parts.flatMap(p=>p.names)).map(n=>[n,g.id])))}))});
const viewOn=(v,sel,fam)=>!!sel&&v.langs.has(sel.lang)||!!v.familyActivates&&fam===v.family;
// the view a choice switches on (the first), and the one that takes the whole map over (exclusive)
const viewOf=(R,sel,fam)=>R.views.find(v=>viewOn(v,sel,fam))||null;
const exclusiveOf=(R,sel,fam)=>R.views.find(v=>v.exclusive&&viewOn(v,sel,fam))||null;
// One area of a view. strength: idle = the view is off, umbrella = a chosen name that stands for a whole group, member = a
// chosen name inside a group, other = any other chosen name. A row gives a number (or "rest") per group, "self" for the chosen
// area itself and "else" for the rest; a missing number is 0.
const viewOp=(R,v,n,sel,fam)=>{
 if((v.hiddenBy||[]).some(id=>viewOn(R.views.find(w=>w.id===id),sel,fam)))return 0;
 const g=v.of.get(n),st=v.strength,pick=w=>w==='rest'?restOp(v.restFamily,sel,fam):w||0;
 if(!viewOn(v,sel,fam))return pick(st.idle[g]??st.idle.else);
 const s=sel&&v.langs.has(sel.lang)?sel.lang:v.umbrella,row=st.umbrella[s]||v.of.has(s)&&st.member[v.of.get(s)]||st.other||{};
 return pick(n===s&&row.self!=null?row.self:row[g]??row.else);};
// the rule of a kind of detailed area (meta.rules.kinds): a view's group rule, or one of the plain two (chosen language's own area
// at full strength, else by family; censusReplaces: broad only while nothing is chosen, as the census shows the rest)
const kindOp=(R,kind,n,dfam,sel,fam)=>{
 const k=R.kinds[kind]||{},x=exclusiveOf(R,sel,fam);
 if(k.view)return viewOp(R,R.views.find(v=>v.id===k.view),n,sel,fam);
 if(x)return 0;
 const mine=!!sel&&(n===sel.lang||R.parent[n]===sel.lang);
 return k.censusReplaces?(!sel?restOp(dfam,sel,fam):R.parent[sel.lang]&&n===sel.lang?OP.sel:0):mine?OP.sel:restOp(dfam,sel,fam);};
// Census view, one region: pct = the selected language's share there. Where it is a minority shown as stripes (over), the
// region takes the colour of the largest group (top = that group's share, lfam = its family) and hatchOp gives the stripes.
// focus = the family an exclusive view puts forward (or none).
const censusOp=(pct,over,top,lfam,focus,fam)=>(focus?(lfam===focus?1:over?.5:.22):fam?(lfam===fam?1:.28):1)*
 (over?(top>50?.75:.45):pct==null?.04:pct>50?.75:pct>10?.5:pct>1?.3:pct>0?.14:.05);
const hatchOp=pct=>Math.min(.85,.2+pct/40);
export {OP,prepare,viewOn,viewOf,exclusiveOf,kindOp,restOp,censusOp,hatchOp,get};
