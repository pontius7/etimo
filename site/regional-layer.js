/* The rules both halves of the map share: which areas the detailed layers (Albanian dialects, Vlach varieties, Serbia,
   Montenegro, Greece) stand for, which generic pins and zones they replace, how strong an area or a census region is
   drawn, and each country's main language. Read by the map engine (site/map-gl.js) and by the data build
   (scripts/map-next/build.py reads MAIN_LANG, HIDEPIN and HIDEZONE from this text).
   The old SVG map that used to be drawn from this file was retired on 2026-11-13 (README "Old map retired"). */
const get=(name,opt)=>fetch('data/'+name,opt).then(r=>{if(!r.ok)throw Error(name+': '+r.status);return r.json();});
// The lists and strengths below are shared: the engine-drawn map (site/map-gl.js) and the data step (scripts/map-next/build.py) read them from here.
const DNAME={'Northeastern Gheg':'Northeastern Gheg','Northwestern Gheg':'Northwestern Gheg','Central Gheg':'Central Gheg','South Gheg':'South Gheg','Central–Northeastern Transitional Gheg':'Transitional Gheg','Upper Reka Gheg':'Upper Reka Gheg','Tosk':'Tosk Albanian','Lab':'Labërisht','Çam':'Çam Albanian','Arbëresh':'Arbëresh','Arvanitika':'Arvanitika'};
const GHEG=new Set(['Northeastern Gheg','Northwestern Gheg','Central Gheg','South Gheg','Transitional Gheg','Upper Reka Gheg']);
const TOSKS=new Set(['Tosk Albanian','Labërisht','Çam Albanian','Arbëresh','Arvanitika']);
const ADIAL=new Set(['Northeastern Gheg','Northwestern Gheg','Central Gheg','South Gheg','Transitional Gheg','Upper Reka Gheg','Tosk Albanian','Labërisht','Çam Albanian']);
const ALBSET=new Set([...Object.values(DNAME),'Gheg Albanian','Albanian']);
const ARO=['Farsherot','Muscopolean','Gopesh–Malovishte','Pindian','Gramostean'];
const MEG=['Megleno-Romanian (northern)','Megleno-Romanian (central)','Megleno-Romanian (Tsarnarekan)'];
const VSET=new Set([...ARO,...MEG,'Aromanian','Megleno-Romanian']);
const HIDEPIN=new Set([...ADIAL,'Albanian',...ARO,...MEG]);
const PAR={'Sandžak Bosniak':'Bosnian'};const isSel=(r,sel)=>!!sel&&(r.name===sel.lang||PAR[r.name]===sel.lang);
const HIDEZONE=new Set([...HIDEPIN,'Arvanitika','Aromanian',...Object.keys(PAR)]);
const OP={rest:.78,sel:.9,fam:.3,other:.07,filterOther:.14};
// How strong an area is drawn. The only copy: this map (below) and the engine-drawn one (site/map-gl.js) both call these.
// dfam / lfam = the family of the area's language, sel = the selected language, fam = the family filter, alb = the Albanian dialect view is on.
// restOp: one rule for every detailed area layer (Albanian dialects, Vlach, Serbia, Montenegro):
//   nothing selected .78 | the selected language .9 | another language of the same family selected .3 |
//   a language of another family selected .07 | under a family filter: that family .78, others .14
//   (.14 is what the base language areas use for the families a filter leaves out).
// dialOp, vlachOp: the sibling shading inside the Albanian and Vlach groups, the only places that go beyond it.
const restOp=(dfam,sel,fam)=>sel?(sel.family===dfam?OP.fam:OP.other):fam?(fam===dfam?OP.rest:OP.filterOther):OP.rest;
const dialOp=(n,sel,fam,alb)=>{if(!alb)return restOp('Albanian',sel,fam);
 const s=sel&&ALBSET.has(sel.lang)?sel.lang:'Albanian';
 if(s==='Albanian')return .82;
 if(s==='Gheg Albanian')return GHEG.has(n)?.82:.14;
 if(n===s)return .9;
 return ((GHEG.has(s)&&GHEG.has(n))||(TOSKS.has(s)&&TOSKS.has(n)))?.32:.14;};
const vlachOp=(n,sel,fam)=>{const s=sel&&VSET.has(sel.lang)?sel.lang:null;
 const aro=ARO.includes(n),meg=MEG.includes(n),main=n==='Megleno-Romanian';
 if(!s)return aro||main?restOp('Romance',sel,fam):0;
 if(s==='Aromanian')return aro?.88:main?.25:0;
 if(s==='Megleno-Romanian')return meg?.88:aro?.22:0;
 if(ARO.includes(s))return n===s?.92:aro||main?.2:0;
 return n===s?.92:meg?.3:aro?.2:0;};
// Census view, one region: pct = the selected language's share there. Where it is a minority shown as stripes (over), the
// region takes the colour of the largest group (top = that group's share, lfam = its family) and hatchOp gives the stripes.
const censusOp=(pct,over,top,lfam,alb,fam)=>(alb?(lfam==='Albanian'?1:over?.5:.22):fam?(lfam===fam?1:.28):1)*
 (over?(top>50?.75:.45):pct==null?.04:pct>50?.75:pct>10?.5:pct>1?.3:pct>0?.14:.05);
const hatchOp=pct=>Math.min(.85,.2+pct/40);
// Each country's main language where the census does not settle it (the data build reads this list).
const MAIN_LANG={Albania:'Albanian',Kosovo:'Albanian',France:'French',Spain:'Spanish',Portugal:'Portuguese',Italy:'Italian',Romania:'Romanian',Moldova:'Romanian',Ukraine:'Ukrainian',Russia:'Russian',Poland:'Polish','Czech Republic':'Czech',Slovakia:'Slovak',Iran:'Persian'};
export {DNAME,GHEG,TOSKS,ADIAL,ALBSET,ARO,MEG,VSET,HIDEPIN,HIDEZONE,PAR,OP,MAIN_LANG,restOp,dialOp,vlachOp,censusOp,hatchOp,get};
