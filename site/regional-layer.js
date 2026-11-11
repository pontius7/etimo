/* Verified counts and separate qualitative evidence. Original visual controls are retained. */
/* Data is split by country and language (scripts/build-regional.py): only Montenegro loads up front;
   other municipalities load when a language with regional counts is selected. */
let loading;
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const get=(name,opt)=>fetch('data/'+name,opt).then(r=>{if(!r.ok)throw Error(name+': '+r.status);return r.json();});
// Quantised TopoJSON (object "regions") -> GeoJSON features, same properties as the original GeoJSON.
const topoFeatures=(topo,cc)=>{
 const tr=topo.transform,arcs=topo.arcs.map(a=>{if(!tr)return a;let x=0,y=0;return a.map(([dx,dy])=>[(x+=dx)*tr.scale[0]+tr.translate[0],(y+=dy)*tr.scale[1]+tr.translate[1]]);});
 const ring=idx=>{const pts=[];for(const i of idx){const a=i<0?arcs[~i].slice().reverse():arcs[i];for(let j=pts.length?1:0;j<a.length;j++)pts.push(a[j]);}return pts;};
 return topo.objects.regions.geometries.map(g=>({type:'Feature',properties:{...g.properties,country_code:cc},geometry:g.type==='Polygon'?{type:'Polygon',coordinates:g.arcs.map(ring)}:{type:'MultiPolygon',coordinates:g.arcs.map(p=>p.map(ring))}}));
};
const geoCache=new Map(),langCache=new Map(),langReady=new Map(),pending=new Map();
const geoFor=cc=>{if(!geoCache.has(cc))geoCache.set(cc,get('regional/geo/'+cc+'.json').then(t=>topoFeatures(t,cc)).catch(e=>{geoCache.delete(cc);throw e;}));return geoCache.get(cc);};
// One language: its rows per country joined to that country's features. Stale language requests are aborted.
const langFor=(key,index)=>{
 const info=index.languages[key];if(!info)return null;
 for(const [k,c] of pending)if(k!==key){c.abort();pending.delete(k);langCache.delete(k);}
 if(!langCache.has(key)){const ctl=new AbortController();pending.set(key,ctl);
  langCache.set(key,Promise.all([get('regional/lang/'+info.file+'.json',{signal:ctl.signal}),...info.countries.map(geoFor)]).then(([data,...geos])=>{
   const byCC=new Map();info.countries.forEach((cc,i)=>{const feats=geos[i];byCC.set(cc,(data.rows[cc]||[]).map(([ix,m,count,percentage,denominator])=>{const [observation_period,measure,source_id]=data.meta[m];return [feats[ix],[{language_id:key,count,percentage,denominator,observation_period,measure,source_id}]];}));});
   langReady.set(key,byCC);if(pending.get(key)===ctl)pending.delete(key);return byCC;
  }).catch(e=>{langCache.delete(key);if(pending.get(key)===ctl)pending.delete(key);throw e;}));}
 return langCache.get(key);
};
export async function attachRegionalEvidence({host,parent,path,current,languages,color,tooltip,hideTooltip}) {
 loading ||= Promise.all([get('regional/index.json'),geoFor('ME'),get('regional/ME.json'),get('regional-sources.json'),Promise.all([get('regional/geo/GR-regions.json'),get('athos.json').catch(()=>null)]).then(([t,athos])=>{const features=topoFeatures(t,'GR');/* Mount Athos is Greek land that the NUTS regions file leaves out; without it the peninsula fell back to the coarse hand-drawn area */const cm=athos&&athos.ring&&features.find(f=>/Central Macedonia/.test(f.properties.name||''));if(cm){const g=cm.geometry;cm.geometry={type:'MultiPolygon',coordinates:(g.type==='Polygon'?[g.coordinates]:g.coordinates).concat([[athos.ring]])};}return {type:'FeatureCollection',features};}),get('tables/GR.json')]).catch(e=>{loading=null;throw e;});
 const [index,me,values,sources,greece,grData]=await loading;
 if(!parent.node().isConnected)return;
 // While the map moves (the app sets svg.zooming), region strokes are dropped. They are invisible anyway (stroke-opacity 0),
 // but with vector-effect:non-scaling-stroke the browser re-measures every path's stroke on each frame.
 if(!document.getElementById('regional-motion-css')){const s=document.createElement('style');s.id='regional-motion-css';s.textContent='.mapbox svg.zooming g.regional-evidence path{stroke:none;vector-effect:none}';document.head.append(s);}
 const gr=Object.fromEntries(grData.regions.map(r=>[r.id,r]));
 const langBy=new Map();for(const l of languages)if(!langBy.has(l.lang))langBy.set(l.lang,l);
 const dCache=new Map();const dOf=f=>{const k=f.properties.region_id;let d=dCache.get(k);if(d===undefined){d=path(f);dCache.set(k,d);}return d;};
 const id='regional-'+Math.random().toString(36).slice(2);const defs=parent.append('defs');
 // Erase outdated schematic language areas inside Montenegro and Greece only.
 const mask=defs.append('mask').attr('id',id+'-mask').attr('maskUnits','userSpaceOnUse').attr('x',-10000).attr('y',-10000).attr('width',20000).attr('height',20000);
 mask.append('rect').attr('x',-10000).attr('y',-10000).attr('width',20000).attr('height',20000).attr('fill','white');
 mask.selectAll('path').data([...me,...greece.features]).join('path').attr('d',path).attr('fill','black');
 parent.selectAll('g.zones,g.ters').attr('mask','url(#'+id+'-mask)');
 // Clip the hand-drawn language areas to the real coastline so colour never spills into the sea.
 fetch('data/world-50m.json').then(r=>r.ok?r.json():Promise.reject()).then(topo=>{
  if(!parent.node().isConnected||!topo.objects.land)return;
  const [sx,sy]=topo.transform.scale,[tx,ty]=topo.transform.translate;
  const arcs=topo.arcs.map(a=>{let x=0,y=0;return a.map(([dx,dy])=>[(x+=dx)*sx+tx,(y+=dy)*sy+ty]);});
  const ring=idx=>{const pts=[];for(const i of idx){const a=i<0?arcs[~i].slice().reverse():arcs[i];pts.push(...(pts.length?a.slice(1):a));}return pts;};
  const d=path({type:'MultiPolygon',coordinates:topo.objects.land.arcs.map(poly=>poly.map(ring))});
  if(!d)return;
  defs.append('clipPath').attr('id',id+'-land').append('path').attr('d',d);
  parent.selectAll('g.zones,g.ters').attr('clip-path','url(#'+id+'-land)');
  // One coastline, and it is the edge the colours are cut to: the overlay coast is redrawn from this same outline
  // (the app's own coarser coast line is hidden in country-sources.css; it used to show as a second line beside it).
  borderLayer.select('path.ol-coast').attr('d',d);
  // Greek coast: the hand-drawn areas follow this coarser coastline, Greece is drawn from its own finer outline,
  // so slivers and small islands of the hand-drawn areas showed beside the Greek coast. Erase them within about
  // 5 km of Greece, then restore the neighbours' land so areas across a land border are untouched.
  try{
   const proj=path.projection&&path.projection();const grD=greece.features.map(f=>dOf(f)||'').join('');
   const nb=(topo.objects.countries.geometries||[]).filter(g=>/^(Albania|North Macedonia|Macedonia|Bulgaria|Turkey)$/.test((g.properties||{}).name||''));
   const nbD=nb.map(g=>path({type:'MultiPolygon',coordinates:(g.type==='Polygon'?[g.arcs]:g.arcs).map(poly=>poly.map(ring))})||'').join('');
   if(proj&&grD){const w=Math.abs(proj([24.12,38])[0]-proj([24,38])[0]);
    mask.append('path').attr('d',grD).attr('fill','black').attr('stroke','black').attr('stroke-width',w).attr('stroke-linejoin','round');
    if(nbD)mask.append('path').attr('d',nbD).attr('fill','white').attr('stroke','white').attr('stroke-width',w).attr('stroke-linejoin','round');
    mask.append('path').attr('d',me.map(f=>path(f)||'').join('')+grD).attr('fill','black');}
  }catch(e){}
 }).catch(()=>{});
 const pattern=defs.append('pattern').attr('id',id+'-presence').attr('patternUnits','userSpaceOnUse').attr('width',1.8).attr('height',1.8).attr('patternTransform','rotate(35)');
 pattern.append('line').attr('x1',0).attr('y1',0).attr('x2',0).attr('y2',1.8).attr('stroke','var(--ink,#718278)').attr('stroke-opacity',.28).attr('stroke-width',.45);
 const layer=parent.insert('g','g.adm').attr('class','regional-evidence');
 const hatchP=defs.append('pattern').attr('id',id+'-hatch').attr('patternUnits','userSpaceOnUse').attr('width',1.1).attr('height',1.1).attr('patternTransform','rotate(40)');
 const hatchLine=hatchP.append('line').attr('x1',0).attr('y1',0).attr('x2',0).attr('y2',1.1).attr('stroke-width',.42);
 const hatchLayer=parent.insert('g','g.adm').attr('class','regional-hatch').attr('pointer-events','none');
 layer.append('title').text('Official regional language tables. Montenegro: all 25 municipalities, 2023 counts; indicative OSM boundaries, 2026-11-04. Greece: 13 regions, documented presence only. Other boundaries © EuroGeographics / GISCO.');
 const PRIORITY=new Set(['podgorica','gusinje','andrijevica','budva','ulcinj','bar'].map(n=>'ME-2023-'+n));
 const NAMES={'ME-2023-niksic':'Nikšić','ME-2023-savnik':'Šavnik','ME-2023-zabljak':'Žabljak','ME-2023-kolasin':'Kolašin','ME-2023-pluzine':'Plužine','ME-2023-rozaje':'Rožaje','ME-2023-pljevlja':'Pljevlja'};
 const borderLayer=parent.insert('g','g.adm').attr('class','border-overlay').attr('pointer-events','none').attr('fill','none').attr('stroke-linejoin','round').attr('stroke-linecap','round');
 for(const [cls,w,op] of [['coast',.7,.55],['bord',1,.7]]){const src=parent.select('path.'+cls).node();if(src)borderLayer.append('path').attr('class','ol-'+cls).attr('d',src.getAttribute('d')).attr('stroke','var(--ink,#06110e)').attr('stroke-width',w).attr('stroke-opacity',op).attr('vector-effect','non-scaling-stroke');}
 // Sharper international borders (Natural Earth 1:10m) replace the coarser ones once loaded.
 fetch('data/borders-10m.json').then(r=>r.ok?r.json():Promise.reject()).then(b=>{const bp=borderLayer.select('path.ol-bord');if(bp.empty()||!parent.node().isConnected)return;const d=path({type:'MultiLineString',coordinates:b.border.flat(0).map(l=>l)});if(d)bp.attr('d',d);}).catch(()=>{});
 const labelLayer=parent.insert('g','g.adm').attr('class','municipality-labels').attr('pointer-events','none');
 labelLayer.selectAll('text').data(me).join('text').attr('x',f=>path.centroid(f)[0]).attr('y',f=>path.centroid(f)[1]).attr('text-anchor','middle').attr('font-family','var(--sans,system-ui)').attr('font-size',1.1).attr('fill','var(--ink,#263e32)').attr('stroke','var(--bg,#fff)').attr('stroke-width',.3).attr('paint-order','stroke').attr('data-pri',f=>PRIORITY.has(f.properties.region_id)?1:0).text(f=>NAMES[f.properties.region_id]||f.properties.name);
 const KPRI=12,KALL=40;
 // Runs on every zoom frame: while the labels are hidden (k<12) nothing else is touched, and at most one dedupe runs per frame.
 let dq=0;
 const updateLabels=()=>{const t=parent.attr('transform')||'';const k=Number(t.match(/scale\(([^,)]+)/)?.[1]||1);labelLayer.attr('visibility',k>=KPRI?'visible':'hidden');if(k<KPRI)return;labelLayer.selectAll('text').attr('display',function(){return k>=KALL||this.dataset.pri==='1'?null:'none';}).attr('font-size',10.5/k).attr('stroke-width',3/k);if(!dq)dq=requestAnimationFrame(()=>{dq=0;dedupe();});};
 // Skip a name the map already prints as a city label, so the same word is never drawn twice.
 // Only city labels with the same text as a shown municipality label are measured (avoids styling/measuring ~800 nodes per frame); checkVisibility() answers "is it rendered" without forcing a layout.
 const dedupe=()=>{const names=new Set();labelLayer.selectAll('text').each(function(){if(this.getAttribute('display')!=='none')names.add(this.textContent.trim());});if(!names.size)return;
  const cities=new Set([...parent.selectAll('g.acities text,g.cities text').nodes()].filter(n=>{if(!names.has(n.textContent.trim()))return false;const s=getComputedStyle(n);return (n.checkVisibility?n.checkVisibility():n.getBoundingClientRect().width>0)&&s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity)>.05;}).map(n=>n.textContent.trim()));
  labelLayer.selectAll('text').each(function(){if(this.getAttribute('display')==='none')return;if(cities.has(this.textContent.trim()))this.setAttribute('display','none');});};
 const observer=new MutationObserver(updateLabels);observer.observe(parent.node(),{attributes:true,attributeFilter:['transform']});updateLabels();
 function open(event,row){hideTooltip();if(event.type==='keydown'){const b=event.currentTarget.getBoundingClientRect();event.currentTarget.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,clientX:b.x+b.width/2,clientY:b.y+b.height/2}));}}
 let last;
 // Albanian dialect areas (Wikimedia Commons: Albaniandialects.png, CC BY-SA 4.0, Karadakli230; Albanian_dialects.svg for Arbëresh, CC BY-SA 3.0, ArnoldPlaton). Arvanitika (data/greece-areas.json) is traced from a reference map supplied by the site owner and fitted to the Greek coastline, 2026-11-10.
 // and Vlach areas (Wikimedia Commons: South-Balkan-Romance-languages.png, after Koryakov 2001, CC BY-SA 3.0), drawn on the real map in shades of each family colour.
 // Same colour as the language's zone, pin and wheel slice in both themes (dark mode brightens dim colours).
  const PAL=new Proxy(window.__albPalette||{},{get:(t,n)=>t[n]&&window.__albColor?(window.__albColor({data:{L:{lang:n}}})||t[n]):t[n]});
 const DNAME={'Northeastern Gheg':'Northeastern Gheg','Northwestern Gheg':'Northwestern Gheg','Central Gheg':'Central Gheg','South Gheg':'South Gheg','Central–Northeastern Transitional Gheg':'Transitional Gheg','Upper Reka Gheg':'Upper Reka Gheg','Tosk':'Tosk Albanian','Lab':'Labërisht','Çam':'Çam Albanian','Arbëresh':'Arbëresh','Arvanitika':'Arvanitika'};
 const GHEG=new Set(['Northeastern Gheg','Northwestern Gheg','Central Gheg','South Gheg','Transitional Gheg','Upper Reka Gheg']);
 const TOSKS=new Set(['Tosk Albanian','Labërisht','Çam Albanian','Arbëresh','Arvanitika']);
 const ADIAL=new Set(['Northeastern Gheg','Northwestern Gheg','Central Gheg','South Gheg','Transitional Gheg','Upper Reka Gheg','Tosk Albanian','Labërisht','Çam Albanian']);
 const ALBSET=new Set([...Object.values(DNAME),'Gheg Albanian','Albanian']);
 const ARO=['Farsherot','Muscopolean','Gopesh–Malovishte','Pindian','Gramostean'];
 const MEG=['Megleno-Romanian (northern)','Megleno-Romanian (central)','Megleno-Romanian (Tsarnarekan)'];
 const VSET=new Set([...ARO,...MEG,'Aromanian','Megleno-Romanian']);
 const HIDEPIN=new Set([...ADIAL,'Albanian',...ARO,...MEG]);
 const HIDEZONE=new Set([...HIDEPIN,'Arvanitika','Aromanian']);
 const albObj=languages.find(l=>l.lang==='Albanian');
 let famSel=null,dialects=null,vlach=null;
 // One rule for every detailed area layer (Albanian dialects, Vlach, Serbia, Montenegro):
 //   nothing selected .78 | the selected language .9 | another language of the same family selected .3 |
 //   a language of another family selected .07 | under a family filter: that family .78, others .14
 //   (.14 is what the base language areas use for the families a filter leaves out).
 // Only the sibling shading inside the Albanian and Vlach groups (aOp, vOp below) goes beyond it.
 const OP={rest:.78,sel:.9,fam:.3,other:.07,filterOther:.14};
 const restOp=(fam,sel)=>sel?(sel.family===fam?OP.fam:OP.other):famSel?(famSel===fam?OP.rest:OP.filterOther):OP.rest;
 const albMode=()=>{const s=current();return !!(dialects&&((s&&ALBSET.has(s.lang))||famSel==='Albanian'));};
 const dialectLayer=parent.insert('g',()=>layer.node()).attr('class','albanian-dialects').attr('pointer-events','none');
 const vlachLayer=parent.insert('g',()=>hatchLayer.node()).attr('class','vlach-areas').attr('pointer-events','none');
 const toP=(rings,proj)=>rings.map(r=>r.map(p=>proj(p)||[0,0]));
 const toD=(pr)=>pr.map(r=>'M'+r.map(q=>q[0].toFixed(2)+','+q[1].toFixed(2)).join('L')+'Z').join('');
 const mkRow=(name,rings,proj)=>{const pr=toP(rings,proj);return {name,d:toD(pr),pr};};
 const inRings=(pr,x,y)=>{let c=false;for(const r of pr){for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c;}}return c;};
 fetch('data/albanian-dialects.json').then(r=>r.ok?r.json():Promise.reject()).then(j=>{const proj=path.projection&&path.projection();if(!proj)return;dialects=Object.entries(j).map(([k,rings])=>mkRow(DNAME[k]||k,rings,proj));if(parent.node().isConnected)draw();}).catch(()=>{});
 fetch('data/vlach-areas.json').then(r=>r.ok?r.json():Promise.reject()).then(j=>{const proj=path.projection&&path.projection();if(!proj)return;vlach=Object.entries(j).map(([k,rings])=>mkRow(k,rings,proj));if(parent.node().isConnected)draw();}).catch(()=>{});
 // Pins, labels and rough circles for the dialect-level entries stay hidden; the real areas carry the information.
 const hideExtras=()=>{const root=host.querySelector?host:document;
  root.querySelectorAll('g.pin').forEach(el=>{const d=el.__data__;if(d&&HIDEPIN.has(d.lang))el.style.display='none';});
  root.querySelectorAll('g.zones path,g.ters path,path.zone,path.terr').forEach(el=>{const d=el.__data__;if(d&&d.lang&&HIDEZONE.has(d.lang))el.style.display='none';});
  root.querySelectorAll('g.labs text.plabel').forEach(el=>{const t=el.textContent.trim();if(HIDEPIN.has(t))el.style.display='none';});};
 // Not selected: the dialect areas are drawn like every other language area (restOp above).
 const aOp=(r,sel)=>{if(!albMode())return restOp('Albanian',sel);
  const n=sel&&ALBSET.has(sel.lang)?sel.lang:'Albanian';
  if(n==='Albanian')return .82;
  if(n==='Gheg Albanian')return GHEG.has(r.name)?.82:.14;
  if(r.name===n)return .9;
  return ((GHEG.has(n)&&GHEG.has(r.name))||(TOSKS.has(n)&&TOSKS.has(r.name)))?.32:.14;};
 const vOp=(r,sel)=>{const n=sel&&VSET.has(sel.lang)?sel.lang:null;
  const aro=ARO.includes(r.name),meg=MEG.includes(r.name),main=r.name==='Megleno-Romanian';
  if(!n)return aro||main?restOp('Romance',sel):0;
  if(n==='Aromanian')return aro?.88:main?.25:0;
  if(n==='Megleno-Romanian')return meg?.88:aro?.22:0;
  if(ARO.includes(n))return r.name===n?.92:aro?.2:main?.2:0;
  return r.name===n?.92:meg?.3:aro?.2:0;};
 const tipEl=()=>{let t=host.querySelector('.etimo-tip');if(!t){t=document.createElement('div');t.className='mtip etimo-tip';t.hidden=true;host.appendChild(t);}return t;};
 const target=r=>(!albMode()&&ADIAL.has(r.name)&&albObj)||languages.find(x=>x.lang===r.name);
 const wire=sel=>sel.attr('pointer-events','auto').style('cursor','pointer')
  .on('pointermove',(ev,r)=>{if(ev.pointerType&&ev.pointerType!=='mouse')return;const l=target(r);const nm=l?l.lang:r.name;const t=tipEl();const b=host.getBoundingClientRect();t.innerHTML='<b>'+(window.__dn?__dn(nm):nm)+'</b><span>'+(l?l.family:'')+' · tap to select</span>';t.hidden=false;t.style.transform='translate('+Math.round(Math.min(ev.clientX-b.left+14,b.width-t.offsetWidth-8))+'px,'+Math.round(ev.clientY-b.top+16)+'px)';})
  .on('pointerleave',()=>{tipEl().hidden=true;})
  .on('click',(ev,r)=>{const l=target(r);if(!l||!window.__kt)return;ev.stopPropagation();tipEl().hidden=true;window.__kt.select(l.id);});
 const areaRows=()=>{const sel=current();const out=[];if(albMode()&&dialects)dialects.forEach(r=>{if(aOp(r,sel)>=.5)out.push(r);});if(serbia&&!albMode()){const s0=current();serbia.forEach(r=>{if(s0&&r.name===s0.lang)out.push(r);});}if(vlach&&!albMode())vlach.forEach(r=>{if(sel&&VSET.has(sel.lang)&&vOp(r,sel)>=.5)out.push(r);});return out;};
 // On phones, city names show only inside the selected area.
 const cityFilter=()=>{
  const phone=window.matchMedia&&matchMedia('(max-width: 768px)').matches;
  const els=[...host.querySelectorAll('g.ac')];
  if(!phone){els.forEach(el=>el.removeAttribute('data-off'));return;}
  const mine=areaRows();
  const fills=[];
  if(!mine.length)parent.selectAll('path.terr,path.tap').each(function(){try{const M=this.getCTM(),P=parent.node().getCTM();if(M&&P)fills.push([this,M.inverse().multiply(P)]);}catch(e){}});
  els.forEach(el=>{const d=el.__data__;if(!d){return;}let ok=false;
   for(const r of mine){if(inRings(r.pr,d.x,d.y)){ok=true;break;}}
   if(!ok)for(const [p,m] of fills){try{if(p.isPointInFill(new DOMPoint(d.x,d.y).matrixTransform(m))){ok=true;break;}}catch(e){}}
   if(ok)el.removeAttribute('data-off');else el.setAttribute('data-off','1');});
 };
 const clipPoly=(ring,C)=>{let out=ring.slice(0,-1);for(let i=0;i<C.length&&out.length;i++){const a=C[i],b=C[(i+1)%C.length],inn=p=>(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0])<=0,res=[];for(let k=0;k<out.length;k++){const p=out[k],q=out[(k+1)%out.length];const ip=inn(p),iq=inn(q);if(ip)res.push(p);if(ip!==iq){const dx=q[0]-p[0],dy=q[1]-p[1],ex=b[0]-a[0],ey=b[1]-a[1],t=((a[0]-p[0])*ey-(a[1]-p[1])*ex)/(dx*ey-dy*ex);res.push([p[0]+t*dx,p[1]+t*dy]);}}out=res;}return out;};
 (()=>{const f=greece.features.find(x=>/Central Macedonia/.test(x.properties.name||''));if(!f)return;const proj=path.projection&&path.projection();if(!proj)return;const polys=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;const C=[[23.88,40.45],[24.45,40.45],[24.45,40.05],[24.10,40.05],[23.97,40.18],[23.90,40.30]];const rings=polys.map(p=>clipPoly(p[0],C)).filter(r=>r.length>2);if(!rings.length)return;borderLayer.append('path').attr('class','ol-athos').attr('d',toD(toP(rings,proj))).attr('fill','none').attr('stroke','var(--ink,#06110e)').attr('stroke-opacity',.45).attr('stroke-width',.7).attr('vector-effect','non-scaling-stroke');})();
 let serbia=null;
 fetch('data/serbia-areas.json').then(r=>r.ok?r.json():Promise.reject()).then(j=>{const proj=path.projection&&path.projection();if(!proj)return;serbia=(serbia||[]).concat(Object.entries(j).map(([k,rings])=>mkRow(k,rings,proj)));if(parent.node().isConnected)draw();}).catch(()=>{});
 fetch('data/greece-areas.json').then(r=>r.ok?r.json():Promise.reject()).then(j=>{const proj=path.projection&&path.projection();if(!proj)return;serbia=(serbia||[]).concat(Object.entries(j).map(([k,rings])=>mkRow(k,rings,proj)));if(parent.node().isConnected)draw();}).catch(()=>{});
 const serbiaLayer=parent.insert('g',()=>hatchLayer.node()).attr('class','serbia-areas').attr('pointer-events','none');
 // Montenegro: broad language areas (data/montenegro-areas.json, generalised from the 2011 settlement map) carry the colour
 // while no language is selected; they span municipalities. The municipalities stay on top with their borders, labels,
 // hover and click. With a language selected, the municipalities show that language's census share as before.
 let meAreas=null;
 const meLayer=parent.insert('g',()=>layer.node()).attr('class','me-areas').attr('pointer-events','none');
 fetch('data/montenegro-areas.json').then(r=>r.ok?r.json():Promise.reject()).then(j=>{const proj=path.projection&&path.projection();if(!proj)return;meAreas=Object.entries(j).map(([k,rings])=>mkRow(k,rings,proj));if(parent.node().isConnected)draw();}).catch(()=>{});
 const sOp=(r,sel)=>{const l=languages.find(x=>x.lang===r.name);if(sel&&r.name===sel.lang)return OP.sel;return restOp(l&&l.family,sel);};
 const paintDialects=()=>{
  const sel=current();const alb=albMode();const vSel=!!(sel&&VSET.has(sel.lang)&&vlach);
  parent.selectAll('path.terr').style('display',(alb||vSel)?'none':'');
  hideExtras();
  dialectLayer.selectAll('path').data(dialects||[],r=>r.name).join('path').attr('d',r=>r.d).attr('fill',r=>PAL[r.name]||'#888').attr('fill-rule','evenodd').attr('fill-opacity',r=>aOp(r,sel)).attr('stroke',r=>sel&&r.name===sel.lang?(PAL[r.name]||'#888'):'none').attr('stroke-width',r=>sel&&r.name===sel.lang?2.4:0).attr('stroke-linejoin','round').attr('vector-effect','non-scaling-stroke').call(wire);dialectLayer.selectAll('path').filter(r=>sel&&r.name===sel.lang).raise();
  const vrows=(vlach&&!alb)?vlach.filter(r=>vOp(r,sel)>0):[];
  vlachLayer.selectAll('path').data(vrows,r=>r.name).join('path').attr('d',r=>r.d).attr('fill',r=>PAL[r.name]||'#888').attr('fill-rule','evenodd').attr('fill-opacity',r=>vOp(r,sel)).attr('stroke',r=>sel&&r.name===sel.lang?(PAL[r.name]||'#888'):'none').attr('stroke-width',r=>sel&&r.name===sel.lang?2.4:0).attr('stroke-linejoin','round').attr('vector-effect','non-scaling-stroke').call(wire);vlachLayer.selectAll('path').filter(r=>sel&&r.name===sel.lang).raise();
  cityFilter();
  const sSel=current();const srows=(serbia&&!alb)?serbia:[];
  serbiaLayer.selectAll('path').data(srows,r=>r.name+r.d.length).join('path').attr('d',r=>r.d).attr('fill',r=>{const l=languages.find(x=>x.lang===r.name);return PAL[r.name]||(l&&color(l))||'#888';}).attr('fill-rule','evenodd').attr('fill-opacity',r=>sOp(r,sSel)).attr('stroke',r=>sSel&&r.name===sSel.lang?(PAL[r.name]||'#888'):'none').attr('stroke-width',r=>sSel&&r.name===sSel.lang?2.4:0).attr('stroke-linejoin','round').attr('vector-effect','non-scaling-stroke').call(wire);
  let legend=host.querySelector('.alb-legend');
  const show=alb||vSel;
  if(show){
   if(!legend){legend=document.createElement('div');legend.className='alb-legend';host.appendChild(legend);}
   if(alb){
    legend.setAttribute('aria-label','Albanian dialects');
    const item=n=>'<li style="opacity:'+(aOp({name:n},sel)>.4?1:.38)+'"><i style="background:'+(PAL[n]||'#888')+'"></i>'+(window.__dn?__dn(n):n)+'</li>';
    legend.innerHTML='<b>'+(window.__lt?__lt('ad'):'ad')+'</b><div><span>'+(window.__lt?__lt('gh'):'gh')+'</span><ul>'+[...GHEG].map(item).join('')+'</ul></div><div><span>'+(window.__lt?__lt('to'):'to')+'</span><ul>'+[...TOSKS].map(item).join('')+'</ul></div><small>Areas after Gjinari 1988 and later work, via Wikimedia Commons (Karadakli230, CC BY-SA 4.0; ArnoldPlaton, CC BY-SA 3.0)</small>';
   }else{
    legend.setAttribute('aria-label','Vlach languages');
    const item=n=>'<li style="opacity:'+(vOp({name:n},sel)>.4?1:.38)+'"><i style="background:'+(PAL[n]||'#888')+'"></i>'+(window.__dn?__dn(n):n).replace(/Megleno-Romanian \((.*)\)/,(m,a)=>a[0].toUpperCase()+a.slice(1))+'</li>';
    legend.innerHTML='<b>'+(window.__lt?__lt('vl'):'vl')+'</b><div><span>'+(window.__lt?__lt('na'):'na')+'</span><ul>'+ARO.slice(0,3).map(item).join('')+'</ul></div><div><span>'+(window.__lt?__lt('sa'):'sa')+'</span><ul>'+ARO.slice(3).map(item).join('')+'</ul></div><div><span>'+(window.__lt?__lt('me'):'me')+'</span><ul>'+MEG.map(item).join('')+'</ul></div><small>Areas after Koryakov 2001 (Atlas of Romance languages), via Wikimedia Commons, CC BY-SA 3.0</small>';
   }
   legend.hidden=false;
  }else if(legend)legend.hidden=true;
 };

 // One-contour system: real country borders and coast come from the overlay; today.json supplies only region lines inside a country.
 const baseLayer=parent.insert('g','g.zones').attr('class','country-base').attr('pointer-events','none');
 const inner=borderLayer.append('path').attr('class','ol-inner').attr('stroke','var(--ink,#06110e)').attr('stroke-width',.6).attr('stroke-opacity',.22).attr('vector-effect','non-scaling-stroke');
 const dominant={};
 for(const l of languages)for(const c of ((l.info&&l.info.cen)||l.cen||[])){const m=String(c[1]).match(/\(([\d.]+)%\)|([\d.]+)% of/);if(!m)continue;const p=parseFloat(m[1]||m[2]);if(!(c[0] in dominant)||p>dominant[c[0]].p)dominant[c[0]]={p,l};}
 // Countries without a census row here: the language most of the population speaks.
 for(const [n,lang] of Object.entries({Albania:'Albanian',Kosovo:'Albanian',France:'French',Spain:'Spanish',Portugal:'Portuguese',Italy:'Italian',Romania:'Romanian',Moldova:'Romanian',Ukraine:'Ukrainian',Russia:'Russian',Poland:'Polish','Czech Republic':'Czech',Slovakia:'Slovak',Iran:'Persian'})){const l=languages.find(x=>x.lang===lang);if(l&&!dominant[n])dominant[n]={p:100,l};}
 dominant.Greece={p:100,l:languages.find(x=>x.lang==='Greek')};
 let countries=[];
 const paintBase=()=>{const sel=current();const rows=countries.filter(c=>{const d=dominant[c.name];if(albMode())return false;return d&&d.p>=40&&c.name!=='Montenegro'&&(!sel||d.l.lang===sel.lang);});baseLayer.selectAll('path').data(rows,r=>r.name).join('path').attr('d',r=>r.d).attr('fill',r=>color(dominant[r.name].l)).attr('fill-opacity',r=>(famSel&&dominant[r.name].l.family!==famSel)?.1:.34);};
 fetch('data/today.json').then(r=>r.json()).then(topo=>{
  if(!parent.node().isConnected)return;
  const tr=topo.transform,arcs=topo.arcs.map(a=>{if(!tr)return a;let x=0,y=0;return a.map(([dx,dy])=>[(x+=dx)*tr.scale[0]+tr.translate[0],(y+=dy)*tr.scale[1]+tr.translate[1]]);});
  const ring=idx=>{const pts=[];for(const i of idx){const a=i<0?arcs[~i].slice().reverse():arcs[i];pts.push(...(pts.length?a.slice(1):a));}return pts;};
  const polys=g=>g.type==='Polygon'?[g.arcs]:g.type==='MultiPolygon'?g.arcs:[];
  countries=topo.objects.countries.geometries.map(g=>({name:g.properties.n,d:path({type:'MultiPolygon',coordinates:polys(g).map(p=>p.map(ring))})})).filter(c=>c.d);
  const use=new Map();topo.objects.regions.geometries.forEach((g,gi)=>{const seen=new Set();for(const p of polys(g))for(const r of p)for(const i of r)seen.add(i<0?~i:i);for(const i of seen){if(!use.has(i))use.set(i,[]);use.get(i).push(gi);}});
  const G=topo.objects.regions.geometries,lines=[];
  for(const [i,gs] of use)if(gs.length===2&&G[gs[0]].properties.c===G[gs[1]].properties.c)lines.push(arcs[i]);
  const d=path({type:'MultiLineString',coordinates:lines});if(d)inner.attr('d',d);
  {const proj=path.projection&&path.projection();if(proj){
   const outer=[];greece.features.forEach(f=>{const ps=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;ps.forEach(p=>{if(p[0]&&p[0].length>2)outer.push(p[0]);});});
   const pr=toP(outer,proj),d=toD(pr);const c=countries.find(x=>x.name==='Greece');if(c)c.d=d;
   const pa=proj([24,38]),pb=proj([24.03,38]);const wdt=Math.abs(pb[0]-pa[0])*2;
   const mk=(sfx,stroke)=>{const m=defs.append('mask').attr('id',id+sfx).attr('maskUnits','userSpaceOnUse').attr('x',-10000).attr('y',-10000).attr('width',20000).attr('height',20000);m.append('rect').attr('x',-10000).attr('y',-10000).attr('width',20000).attr('height',20000).attr('fill','white');const p=m.append('path').attr('d',d).attr('fill','black');if(stroke)p.attr('stroke','black').attr('stroke-width',wdt);return 'url(#'+id+sfx+')';};
   parent.select('path.coast').attr('mask',mk('-gmask',true));borderLayer.select('path.ol-coast').attr('mask','url(#'+id+'-gmask)');
   inner.attr('mask',mk('-gmask2',false));
   borderLayer.append('path').attr('class','ol-greece').attr('d',d).attr('fill','none').attr('stroke','var(--ink,#06110e)').attr('stroke-opacity',.5).attr('stroke-width',.6).attr('stroke-linejoin','round').attr('vector-effect','non-scaling-stroke');
  }}
  paintBase();
 }).catch(()=>{});
 let curSel=null,waiting=null;
 const famFactor=r=>{if(r.qualitative)return 1;const fam=r.language&&r.language.family;if(albMode())return fam==='Albanian'?1:(r.over?.5:.22);if(famSel)return fam===famSel?1:.28;return 1;};
 const draw=()=>{
  if(!parent.node().isConnected){host.removeEventListener('ksel',onKsel);for(const t of ['pointerup','click','keyup'])host.removeEventListener(t,later);observer.disconnect();return;}
  const selected=current();last=selected?selected.lang:null;curSel=selected;paintDialects();paintBase();
  // Features in original order: Montenegro always; elsewhere only regions with a record for the selected language.
  const key=selected?(ALBSET.has(selected.lang)?'Albanian':selected.lang):null;const ready=key&&langReady.get(key);
  if(key&&!ready&&waiting!==key){const p=langFor(key,index);if(p){waiting=key;p.then(()=>{if(waiting===key)waiting=null;const s=current();if(parent.node().isConnected&&s&&(ALBSET.has(s.lang)?'Albanian':s.lang)===key)draw();},()=>{if(waiting===key)waiting=null;});}}
  const feats=[];for(const cc of index.countries){if(cc==='ME')for(const f of me)feats.push([f,values[f.properties.region_id]||[]]);else if(ready&&ready.has(cc))for(const x of ready.get(cc))feats.push(x);}
  const rows=feats.map(([feature,records])=>{
   const isME=feature.properties.country_code==='ME';
   const observation=selected?records.find(o=>o.language_id===(ALBSET.has(selected.lang)?'Albanian':selected.lang)):isME?[...records].filter(o=>o.percentage!=null).sort((a,b)=>b.percentage-a.percentage)[0]:null;
   const eff=selected&&ALBSET.has(selected.lang)?albObj:selected;
   const top=isME?[...records].filter(o=>o.percentage!=null).sort((a,b)=>b.percentage-a.percentage)[0]:null;
   const own=eff?records.find(o=>o.language_id===eff.lang):observation;
   const over=!!(eff&&isME&&own&&own.percentage>=2&&top&&top.language_id!==eff.lang);
   return {feature,observation:own||observation,over,top,eff,language:over?(langBy.get(top.language_id)||eff):(eff||langBy.get(observation?.language_id))};
  }).filter(row=>(row.observation||row.feature.properties.country_code==='ME')&&!(albMode()&&['AL','XK','MK','GR'].includes(row.feature.properties.country_code)));
  if(!albMode())for(const feature of greece.features){const region=gr[feature.properties.region_id];const presence=selected?region.presence.filter(p=>p.language===selected.lang):region.presence;rows.push({feature,presence,language:selected,qualitative:true});}
  const meOn=!!(meAreas&&!selected&&!albMode());const meRow=row=>meOn&&row.feature.properties.country_code==='ME';
  meLayer.selectAll('path').data(meOn?meAreas:[],r=>r.name).join('path').attr('d',r=>r.d).attr('fill-rule','evenodd').attr('fill',r=>{const l=languages.find(x=>x.lang===r.name);return PAL[r.name]||(l&&color(l))||'#888';}).attr('fill-opacity',r=>{const l=languages.find(x=>x.lang===r.name);return restOp(l&&l.family,null);});
  const fill=row=>(row.qualitative||meRow(row))?'transparent':color(row.language)||'var(--ink,#60796a)';
  // Where the selected language is a minority, it shows as stripes over the majority colour.
  const overRows=rows.filter(r=>r.over);
  hatchLine.attr('stroke',overRows.length?color(overRows[0].eff)||'#9e2b2b':'#9e2b2b');
  hatchLayer.selectAll('path').data(overRows,r=>r.feature.properties.region_id).join(e=>e.append('path').attr('d',r=>dOf(r.feature))).attr('fill','url(#'+id+'-hatch)').attr('fill-opacity',r=>Math.min(.85,.2+r.observation.percentage/40));
  // Geometry, static attributes and listeners are set once per path (enter); each redraw only restyles.
  layer.selectAll('path').data(rows,r=>r.feature.properties.region_id).join(enter=>enter.append('path')
   .attr('d',r=>dOf(r.feature))
   .attr('stroke-opacity',0).attr('stroke-width',.3).attr('vector-effect','non-scaling-stroke')
   .attr('data-region',r=>r.feature.properties.region_id).attr('role','button').attr('tabindex',r=>['ME','GR'].includes(r.feature.properties.country_code)?0:-1).attr('aria-label',r=>r.feature.properties.name+' · regional language data')
   .on('click',open).on('keydown',(event,row)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open(event,row);}})
   .on('pointermove',(event,row)=>{const selected=curSel;
    if(row.qualitative){tooltip(event,'<b>'+esc(row.feature.properties.name)+' · Greece</b><span>'+esc(row.presence.length?row.presence.map(p=>p.language).join(', '):'No matching regional evidence in this package')+'</span><span>Documented presence · no current regional speaker counts</span><span>Hatching is not a majority or population-share estimate.</span>');return;}
    const o=row.observation;
    if(!o){tooltip(event,'<b>'+esc(row.feature.properties.name)+'</b><span>No published value for this selected language in the mapped table.</span><span>Click for all census responses.</span>');return;}
    const source=sources[o.source_id];const value=o.count==null?'Not published / unavailable':o.count.toLocaleString('en')+(o.denominator==null?'':' of '+o.denominator.toLocaleString('en'))+(o.percentage==null?'':' ('+o.percentage.toFixed(2)+'%)');
    const status=o.percentage==null?'Unknown':o.percentage>50?'Numerical majority':o.percentage===50?'Exactly half':o.percentage>0?(selected?'Below half':'Largest reported group; below half'):'Reported zero';
    tooltip(event,'<b>'+esc(row.feature.properties.name)+' · '+esc(o.language_id)+'</b><span>'+esc(value)+'</span><span>'+esc(o.observation_period+' · '+o.measure.replaceAll('_',' '))+'</span><span>'+esc(status)+'</span><span>'+esc(source?.population_scope)+'</span><span>'+esc(row.feature.properties.country_code==='ME'?'MONSTAT counts · © OpenStreetMap contributors; indicative boundaries':'Official regional table · © EuroGeographics / GISCO boundaries')+'</span>');
   }).on('pointerleave',hideTooltip))
   .attr('fill',fill)
   .attr('fill-opacity',r=>meRow(r)?.001:famFactor(r)*(r.qualitative?.001:r.over?(r.top.percentage>50?.75:.45):r.observation?.percentage==null?.04:r.observation.percentage>50?.75:r.observation.percentage>10?.5:r.observation.percentage>1?.3:r.observation.percentage>0?.14:.05))
   .attr('stroke',r=>r.qualitative?'var(--ink,#60796a)':color(r.language)||'var(--ink,#60796a)');
 };
 const sync=()=>{if(!parent.node().isConnected)return;const c=current();const key=c?c.lang:null;if(key!==last)draw();};
 const later=()=>{setTimeout(sync,60);setTimeout(sync,450);setTimeout(cityFilter,500);};
 const onKsel=e=>{famSel=(e&&e.detail&&e.detail.fam)||null;draw();};
 host.addEventListener('ksel',onKsel);for(const t of ['pointerup','click','keyup'])host.addEventListener(t,later);draw();
}
