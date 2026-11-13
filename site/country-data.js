/* Country and municipality tables, generated from the audited observation register. */
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const documentIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 3.5h10l4 4V21H5zM14.5 3.5V8H19M8.5 12h7M8.5 16h7"/></svg>';
const aliases=Object.fromEntries('ALB:AL BIH:BA BGR:BG HRV:HR GRC:GR XKX:XK KOS:XK MNE:ME MKD:MK ROU:RO SRB:RS SVN:SI TUR:TR AUT:AT CZE:CZ DEU:DE HUN:HU LIE:LI POL:PL SVK:SK CHE:CH BLR:BY EST:EE LVA:LV LTU:LT MDA:MD RUS:RU UKR:UA ITA:IT'.split(' ').map(x=>x.split(':')));
Object.assign(aliases,{'Bosnia and Herz.':'BA','Republic of Serbia':'RS','Czech Republic':'CZ','Türkiye':'TR','Italy':'IT','South Tyrol':'IT','Macedonia':'MK','Republic of Moldova':'MD','Russian Federation':'RU'});
const registry=fetch('data/country-sources.json').then(r=>r.json()).then(r=>{for(const c of Object.values(r)){aliases[c.country]=c.code;aliases[c.code]=c.code;}return r;});
// data/tables/<CC>.json: small countries hold the full table; large ones ("chunked") hold one index row per
// region (name, level, leading language per question/year) and keep the census rows in data/tables/<CC>/<n>.json.
const cache=new Map(),parts=new Map(),partData=new Map();
function load(code){if(!cache.has(code))cache.set(code,fetch('data/tables/'+code+'.json').then(r=>{if(!r.ok)throw Error('Country table unavailable');return r.json();}).then(data=>{data.file=code;if(data.chunked)data.regions=data.regions.map(([id,name,level,part,lead])=>({id,name,level:data.levels[level],part,lead}));return data;}).catch(e=>{cache.delete(code);throw e;}));return cache.get(code);}
function part(data,n){const key=data.file+'/'+n;if(!parts.has(key))parts.set(key,fetch('data/tables/'+key+'.json').then(r=>{if(!r.ok)throw Error('Regional table part unavailable');return r.json();}).then(p=>{partData.set(key,p);return p;}).catch(e=>{parts.delete(key);throw e;}));return parts.get(key);}
const loaded=(data,r)=>!data.chunked?r.observations:partData.get(data.file+'/'+r.part)?.[r.id];
const observations=(data,r)=>data.chunked?part(data,r.part).then(p=>p[r.id]||[]):Promise.resolve(r.observations);
const number=v=>v==null?'Not published':v.toLocaleString('en',{maximumFractionDigits:2});
const group=s=>s.measure+'|'+s.observation_period;
const readable=s=>({'0':'Country','1':'Entity / Brčko District','2':'Canton','3':'Municipality / city','gmina':'Municipality (gmina)','powiat':'District (powiat)'}[s]||s.replaceAll('_',' '));
const normal=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let modal,opener,requestId=0;
function ensureModal(){
 if(modal)return;modal=document.createElement('dialog');modal.className='country-sources-modal country-data-modal';modal.setAttribute('aria-labelledby','country-data-title');document.body.append(modal);
 modal.addEventListener('keydown',e=>{if(e.key==='Escape')e.stopPropagation();});
 modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-close-country]'))modal.close();});
 modal.addEventListener('close',()=>{if(opener?.isConnected)opener.focus();});
}
function renderRows(rows,data){
 const languages=rows.filter(o=>o.kind==='language_response'&&(o.count>0||o.percentage>0));const unpublished=rows.filter(o=>o.kind==='language_response'&&o.count==null&&o.percentage==null);const zeros=rows.filter(o=>o.kind==='language_response'&&(o.count===0||o.percentage===0));const other=rows.filter(o=>o.kind!=='language_response');
 const one=o=>'<tr><th scope="row">'+esc(o.language)+'</th><td>'+number(o.count)+'</td><td>'+(o.percentage==null?'—':o.percentage.toFixed(2)+'%')+'</td><td>'+esc(o.kind!=='language_response'?'':o.percentage==null?'Unknown':o.percentage>50?'Majority':o.percentage===50?'Exactly half':o.percentage>0?'Below half':'Reported zero')+'</td></tr>';
 const table=ls=>'<div class="country-table-scroll"><table><thead><tr><th>Language / response</th><th>People</th><th>Share</th><th>Share status</th></tr></thead><tbody>'+ls.sort((a,b)=>(b.percentage??-1)-(a.percentage??-1)).map(one).join('')+'</tbody></table></div>';
 const first=rows[0],source=data.sources[first?.source];const denominator=first?.denominator;
 return '<p class="region-measure">'+esc(source?.observation_period||'')+' · '+esc(readable(source?.measure||''))+(denominator!=null?' · Population base: '+number(denominator):'')+'</p>'+table(languages)+(unpublished.length?'<details class="other-responses"><summary>Protected / unpublished cells ('+unpublished.length+')</summary>'+table(unpublished)+'</details>':'')+(zeros.length?'<details class="other-responses"><summary>Reported zero ('+zeros.length+')</summary>'+table(zeros)+'</details>':'')+(other.length?'<details class="other-responses"><summary>Other responses &amp; nonresponse ('+other.length+')</summary>'+table(other)+'</details>':'')+
 '<p class="region-scope">'+esc(source?.population_scope||'')+(source?.response_structure==='multiple_response'?' · Multiple answers possible.':'')+'</p>'+(rows.some(o=>o.warning)?'<p class="region-scope">'+esc([...new Set(rows.map(o=>o.warning).filter(Boolean))].join(' '))+'</p>':'');
}
function qualitativeRows(region){
 return '<p class="region-measure">Documented presence · no current regional speaker counts</p><ul class="regional-presence">'+(region.presence||[]).map(o=>'<li><b>'+esc(o.language)+'</b><span>'+esc(o.locations)+'</span><small>'+esc(o.note||'Presence in named localities; no percentage implied.')+'</small></li>').join('')+'</ul>'+(region.presence?.length?'':'<p class="region-scope">No region-specific language evidence has been verified in this package. This does not mean absence.</p>');
}
function fill(data,selectedRegion){
 const groups=[...new Set(Object.values(data.sources).map(group))];const levels=[...new Set(data.regions.map(r=>r.level))];
 const preferred=levels.find(l=>['municipality','3','gmina'].includes(l.toLowerCase()))||levels.find(l=>!['country','0','national'].includes(l.toLowerCase()))||levels[0]||'';
 modal.innerHTML='<header><div><p class="source-eyebrow">Regions &amp; municipalities</p><h2 id="country-data-title">'+esc(data.country)+'</h2></div><div class="country-modal-actions"><button class="ib country-source-icon" data-country-source="'+esc(data.code)+'" aria-label="Sources · '+esc(data.country)+'" title="Sources">'+documentIcon+'</button><button type="button" class="ib" data-close-country aria-label="Close country">×</button></div></header>'+
 '<div class="country-data-controls"><label>Find a region<input type="search" placeholder="Region or municipality" data-region-search></label>'+
 (groups.length?'<label>Question &amp; year<select data-measure>'+groups.map(g=>'<option value="'+esc(g)+'">'+esc(readable(g.replace('|',' · ')))+'</option>').join('')+'</select></label>':'')+
 (levels.length>1?'<label>Geography<select data-level>'+levels.map(l=>'<option value="'+esc(l)+'"'+(l===preferred?' selected':'')+'>'+esc(readable(l))+'</option>').join('')+'</select></label>':'')+'</div>'+
 '<p class="country-results" role="status"></p><div class="country-region-list"></div><button class="country-more" type="button" hidden>Show more</button>'+
 '<details class="country-coverage"><summary>Coverage notes</summary><p>'+esc(data.coverage)+'</p><p>'+esc(data.report_note)+'</p>'+(data.regions.length?'':'<p>'+esc(data.regional_report)+'</p>')+'<p>Majority means more than 50% of the stated population base. Below half is a numerical description, not a legal or ethnic classification. Blank or protected values are never treated as zero. Tables at different geographic levels must not be added together.</p></details>';
 let limit=50;let selected=selectedRegion;
 const search=modal.querySelector('[data-region-search]'),level=modal.querySelector('[data-level]'),measure=modal.querySelector('[data-measure]'),list=modal.querySelector('.country-region-list'),more=modal.querySelector('.country-more');
 const selectedRecord=data.regions.find(r=>r.id===selected);if(selectedRecord&&level)level.value=selectedRecord.level;
 function update(){
  const term=normal(search.value),lev=level?.value||preferred,grp=measure?.value;
  const gi=data.chunked?String(data.groups.indexOf(grp??'*')):null,inGroup=o=>!grp||group(data.sources[o.source])===grp;
  const matches=data.regions.filter(r=>(!lev||r.level===lev)&&(!term||normal(r.name).includes(term))).map(r=>data.chunked?{...r,entry:r.lead[gi]}:{...r,visibleRows:r.observations.filter(inGroup)}).filter(r=>data.chunked?r.entry!==undefined:r.visibleRows.length||data.qualitative);
  if(selected){const ix=matches.findIndex(r=>r.id===selected);if(ix>=limit)limit=Math.ceil((ix+1)/50)*50;}
  const shown=matches.slice(0,limit);
  list.innerHTML=shown.map(r=>{
   const lead=data.chunked?(r.entry?{language:data.names[r.entry[0]],percentage:r.entry[1]}:undefined):r.visibleRows.filter(o=>o.kind==='language_response'&&o.percentage!=null).sort((a,b)=>b.percentage-a.percentage)[0];
   return '<details class="country-region" data-region-id="'+esc(r.id)+'"'+(selected===r.id?' open':'')+'><summary><span>'+esc(r.name)+'</span><small>'+(lead?esc(lead.language)+' '+lead.percentage.toFixed(2)+'%'+(lead.percentage>50?' · majority':' · largest reported group'):data.qualitative?'Documented presence':'Counts / responses')+'</small></summary><div class="country-region-body"></div></details>';
  }).join('');
  for(const d of list.querySelectorAll('details.country-region')){
   const r=shown.find(r=>r.id===d.dataset.regionId);const populate=()=>{const body=d.querySelector('.country-region-body');if(!d.open||body.innerHTML)return;if(data.qualitative){body.innerHTML=qualitativeRows(r);return;}const obs=loaded(data,r);if(obs){body.innerHTML=renderRows(data.chunked?obs.filter(inGroup):r.visibleRows,data);return;}observations(data,r).then(populate,()=>{});};d.addEventListener('toggle',populate);populate();
  }
  modal.querySelector('.country-results').textContent=matches.length?matches.length+' '+(lev?readable(lev).toLowerCase()+' '+(matches.length===1?'record':'records'):'regions')+(shown.length<matches.length?' · showing '+shown.length:''):'No matching regional table is available in this package.';
  more.hidden=shown.length>=matches.length;
  if(selected){list.querySelector('[open]')?.scrollIntoView({block:'nearest'});selected=null;}
 }
 // Start fetching a region's census rows as soon as the pointer or focus reaches its row.
 if(data.chunked){const byId=new Map(data.regions.map(r=>[r.id,r]));const warm=e=>{const r=byId.get(e.target.closest?.('details.country-region')?.dataset.regionId);if(r&&!loaded(data,r))part(data,r.part).catch(()=>{});};list.addEventListener('pointerover',warm);list.addEventListener('focusin',warm);}
 search.addEventListener('input',()=>{limit=50;update();});level?.addEventListener('change',()=>{limit=50;update();});measure?.addEventListener('change',update);more.addEventListener('click',()=>{limit+=50;update();});update();
 modal.querySelector('[data-close-country]').focus({preventScroll:true});
}
async function openCountry(raw,trigger,region){
 if(!matchMedia('(min-width: 64rem)').matches)return; // phones show no source dialogs (README: Phone and desktop)
 ensureModal();opener=trigger;const id=++requestId;
 modal.innerHTML='<header><h2 id="country-data-title">Regional language data</h2><button class="ib" data-close-country aria-label="Close country">×</button></header><p role="status">Loading tables…</p>';
 if(!modal.open)modal.showModal();
 try{await registry;const code=aliases[raw];if(!code)throw Error('This country is outside the source register');const data=await load(code);const pick=region&&data.chunked&&data.regions.find(r=>r.id===region);if(pick)await observations(data,pick).catch(()=>{});if(id===requestId)fill(data,region);}catch(e){if(id===requestId)modal.querySelector('[role=status]').textContent=e.message;}
}
document.addEventListener('etimo:country-data',e=>openCountry(e.detail.country,e.detail.trigger,e.detail.region));
document.addEventListener('click',e=>{const b=e.target.closest('[data-country-data]');if(b){e.preventDefault();e.stopPropagation();openCountry(b.dataset.countryData,b);}});
function decorate(){
 for(const row of document.querySelectorAll('li[data-source-country]')){
  const b=row.querySelector('b');if(!b||b.querySelector('[data-country-data]'))continue;const raw=row.dataset.sourceCountry;if(!aliases[raw])continue;
  const text=[...b.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE);if(!text.length)continue;
  const button=document.createElement('button');button.className='country-name-link';button.dataset.countryData=raw;button.textContent=text.map(n=>n.textContent).join('');button.setAttribute('aria-haspopup','dialog');text[0].before(button);text.forEach(n=>n.remove());
 }
 for(const panel of document.querySelectorAll('.kpanel[data-source-country]')){
  const raw=panel.dataset.sourceCountry;if(!aliases[raw]||!panel.querySelector('.phd.preg')||panel.querySelector('.country-regions-launch'))continue;
  const section=document.createElement('section');section.className='psec country-regions-launch';section.innerHTML='<button class="country-regions-button" data-country-data="'+esc(raw)+'">Regions &amp; municipalities <span aria-hidden="true">↗</span></button><p class="region-scope">Language counts, shares and census years</p>';panel.querySelector('.phd.preg').after(section);
 }
 for(const panel of document.querySelectorAll('.kpanel[data-region-id]'))census(panel);
}
const CEN={en:['Census','mother tongue','language','majority'],sr:['Popis','maternji jezik','jezik','većina'],sc:['Popis','maternji jezik','jezik','većina'],sq:['Regjistrimi','gjuha amtare','gjuha','shumicë']};
// cenNone: remembers a region without census rows, so the observer does not re-add and remove the section endlessly.
function census(panel){
 const rid=panel.dataset.regionId,raw=panel.dataset.sourceCountry,code=aliases[raw];if(!rid||!code||!panel.querySelector('.phd.preg')||panel.querySelector('.rg-cen')||panel.dataset.cenNone===rid)return;
 const sec=document.createElement('section');sec.className='psec pcen rg-cen';sec.dataset.rid=rid;
 const after=panel.querySelector('.country-regions-launch')||panel.querySelector('.phd.preg');after.after(sec);
 load(code).then(async data=>{if(!sec.isConnected||panel.dataset.regionId!==rid){sec.remove();return;}
  const r=data.regions.find(x=>x.id===rid);const all=r&&await observations(data,r);if(!sec.isConnected||panel.dataset.regionId!==rid){sec.remove();return;}
  const obs=all&&all.filter(o=>o.kind==='language_response'&&(o.count>0||o.percentage>0));if(!obs||!obs.length){panel.dataset.cenNone=rid;sec.remove();return;}
  const src=data.sources[obs[0].source]||{};const grp=group(src);const rows=obs.filter(o=>group(data.sources[o.source]||{})===grp).sort((a,b)=>(b.percentage??-1)-(a.percentage??-1));
  let L='en';try{L=localStorage.getItem('khl-ui')||'en'}catch(e){}const T=CEN[L]||CEN.en,k=window.__ka||(x=>x),dn=window.__dn||(x=>x);
  const meas=src.measure==='mother_tongue'?T[1]:src.measure==='language'?T[2]:readable(src.measure||'');
  sec.innerHTML='<p class="ph">'+esc(k(T[0]+' '+(src.observation_period||'')+' · '+meas))+'</p><ul>'+rows.map(o=>'<li><b>'+esc(k(dn(o.language)))+'</b><span>'+number(o.count)+(o.percentage==null?'':' ('+o.percentage.toFixed(1)+'%)')+'</span>'+(o.percentage>50?'<i>'+esc(k(T[3]))+'</i>':'')+'</li>').join('')+'</ul>';
 }).catch(()=>sec.remove());
}
let queued=false;registry.then(()=>{decorate();new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;decorate();});}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-source-country']});});
