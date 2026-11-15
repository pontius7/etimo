/* Country evidence UI. All source text is local; links open only on request. */
const icon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 3.5h10l4 4V21H5z"/><path d="M14.5 3.5V8H19M8.5 12h7M8.5 16h7"/></svg>';
const closeIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const alpha3='ALB:AL BIH:BA BGR:BG HRV:HR GRC:GR XKX:XK KOS:XK MNE:ME MKD:MK ROU:RO SRB:RS SVN:SI TUR:TR AUT:AT CZE:CZ DEU:DE HUN:HU LIE:LI POL:PL SVK:SK CHE:CH BLR:BY EST:EE LVA:LV LTU:LT MDA:MD RUS:RU UKR:UA ITA:IT';
const aliases=Object.fromEntries(alpha3.split(' ').map(x=>x.split(':')));
Object.assign(aliases,{'Bosnia and Herz.':'BA','Republic of Serbia':'RS','Czech Republic':'CZ','Türkiye':'TR','Italy':'IT','South Tyrol':'IT','Macedonia':'MK','Republic of Moldova':'MD','Russian Federation':'RU'});
let registry, request, modal, opener;
function label(){return ({sq:'Burimet',sr:'Izvori',sc:'Извори',de:'Quellen'})[document.documentElement.lang]||'Sources';}
function load(){return request ||= fetch('data/country-sources.json').then(r=>{if(!r.ok)throw Error('Source register unavailable');return r.json();}).then(r=>{registry=r;for(const c of Object.values(r))aliases[c.country]=c.code;return r;}).catch(e=>{request=null;throw e;});}
function countryKey(raw){return registry?.[raw]?raw:aliases[raw];}
function sourceButton(raw){
 const code=countryKey(raw);if(!code)return null;
 const button=document.createElement('button');button.type='button';button.className='ib country-source-icon';button.dataset.countrySource=code;
 const title=label()+' · '+registry[code].country;button.title=title;button.setAttribute('aria-label',title);button.setAttribute('aria-haspopup','dialog');button.innerHTML=icon;return button;
}
function decorate(){
 if(!registry)return;
 for(const row of document.querySelectorAll('li[data-source-country]')){
  if(row.querySelector('[data-country-source]'))continue;
  const button=sourceButton(row.dataset.sourceCountry);if(button)row.querySelector('b')?.append(button);
 }
 for(const panel of document.querySelectorAll('.kpanel')){
  const heading=panel.querySelector('.phd.preg');const old=panel.querySelector('.country-panel-source');
  const key=countryKey(panel.dataset.sourceCountry);
  if(!heading||!key){old?.remove();continue;}
  if(old?.dataset.countrySource===key)continue;
  old?.remove();const button=sourceButton(key);button.classList.add('country-panel-source');heading.append(button);
 }
}
function ensureModal(){
 if(modal)return;
 modal=document.createElement('dialog');modal.className='country-sources-modal';modal.setAttribute('aria-labelledby','country-sources-title');
 document.body.append(modal);
 modal.addEventListener('keydown',event=>{if(event.key==='Escape')event.stopPropagation();});
 modal.addEventListener('click',event=>{if(event.target===modal)modal.close();});
 modal.addEventListener('close',()=>{if(opener?.isConnected)opener.focus();});
 modal.addEventListener('click',event=>{if(event.target.closest('[data-close-sources]'))modal.close();});
}
function safeLink(url){try{const parsed=new URL(url);return ['https:','http:'].includes(parsed.protocol)?escapeHTML(parsed.href):'';}catch{return '';}}
async function openSources(raw,trigger){
 ensureModal();opener=trigger;
 modal.innerHTML='<header><h2 id="country-sources-title">'+label()+'</h2><button class="ib" type="button" data-close-sources aria-label="Close sources">'+closeIcon+'</button></header><p role="status">Loading sources…</p>';
 if(!modal.open)modal.showModal();
 try{
  await load();const entry=registry[countryKey(raw)];if(!entry)throw Error('No country source entry is available.');
  const seen=new Set();const links=[];
  for(const dataset of entry.datasets){
   if(seen.has(dataset.url))continue;seen.add(dataset.url);
   links.push({title:dataset.measure.replaceAll('_',' '),url:dataset.url,year:dataset.observation_period,scope:dataset.population_scope});
  }
  for(const [title,url] of entry.reports){if(!seen.has(url)){seen.add(url);links.push({title,url});}}
  modal.innerHTML='<header><div><p class="source-eyebrow">'+label()+'</p><h2 id="country-sources-title">'+escapeHTML(entry.country)+'</h2></div><button class="ib" type="button" data-close-sources aria-label="Close sources">'+closeIcon+'</button></header>'+
   '<p class="source-period">'+escapeHTML(entry.observation_period)+' · '+escapeHTML(entry.measure)+'</p>'+
   '<ul class="country-source-links">'+links.map(link=>'<li><a href="'+safeLink(link.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(link.title)+'<span aria-hidden="true">↗</span></a>'+(link.year?'<small>'+escapeHTML(link.year+' · '+link.scope)+'</small>':'')+'</li>').join('')+'</ul>'+
   '<details><summary>Coverage &amp; interpretation</summary><p>'+escapeHTML(entry.coverage)+'</p>'+(entry.report_note?'<p>'+escapeHTML(entry.report_note)+'</p>':'')+(entry.regional_report?'<p>'+escapeHTML(entry.regional_report)+'</p>':'')+'<p>'+escapeHTML(entry.note)+'</p><p>A numerical majority means more than 50% of the stated population. Legal minority status is a separate question.</p>'+entry.datasets.map(d=>'<p><b>'+escapeHTML(d.source_id)+'</b> · '+escapeHTML(d.notes)+'</p>').join('')+'</details>';
  modal.querySelector('[data-close-sources]').focus();
 }catch(error){modal.querySelector('[role=status]').textContent=error.message+' Close and retry.';}
}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-country-source]');if(!button)return;
 event.preventDefault();event.stopPropagation();openSources(button.dataset.countrySource,button);
});
// Direct region clicks can open the same country-specific evidence modal.
document.addEventListener('etimo:country-sources',event=>openSources(event.detail.country,event.detail.trigger));
let queued=false;
new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;decorate();});}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-source-country']});
load().then(decorate).catch(error=>console.warn(error.message));
