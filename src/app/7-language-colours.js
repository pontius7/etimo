(function(){var P={"Lower Sorbian":"#9bcc72","Upper Sorbian":"#518219","Polish":"#32520d","Kashubian":"#167013","Czech":"#60b566","Slovak":"#1d8742","Slovene":"#2db79b","Croatian":"#125f33","Bosnian":"#6ad49a","Montenegrin":"#186e69","Serbian":"#36d4cb","Macedonian":"#1c7f64","Bulgarian":"#0f5445","Rusyn":"#2db3b9","Ukrainian":"#1d7f8e","Belarusian":"#36d0e9","Russian":"#135e6a","Northwestern Gheg":"#ae2952","Northeastern Gheg":"#fa9aac","Gheg Albanian":"#e77689","Central Gheg":"#841134","Transitional Gheg":"#a61e35","Upper Reka Gheg":"#c03a49","South Gheg":"#86121a","Albanian":"#fa9e97","Tosk Albanian":"#e8796d","Labërisht":"#c13d31","Çam Albanian":"#a72219","Arvanitika":"#faa180","Arbëresh":"#e67e56","Griko":"#094570","Greek":"#1777ba","Tsakonian":"#0f5caf","Cypriot Greek":"#032a64","Pontic Greek":"#052daa","Cappadocian Greek":"#4761e4","Portuguese":"#a490f0","Spanish":"#6942b3","Catalan":"#8052c3","French":"#be9bf7","Walloon":"#6a2e9b","Franco-Provençal":"#5a1886","Milanese":"#ba88e3","Ladin":"#813faa","Friulian":"#d69ff4","Italian":"#9549b1","Neapolitan":"#752086","Sardinian":"#ce88d9","Romanian":"#8a3394","Vlach (Timok Romanian)":"#e69ae3","Megleno-Romanian":"#6d0f6a","Megleno-Romanian (northern)":"#a5429d","Megleno-Romanian (central)":"#d67ec3","Megleno-Romanian (Tsarnarekan)":"#9b3186","Aromanian":"#881c74","Farsherot":"#f296d1","Muscopolean":"#ad377e","Gopesh–Malovishte":"#e480b6","Pindian":"#750f4e","Gramostean":"#90155e","Ossetic":"#dd8638","Digor Ossetic":"#ee9b51","Yaghnobi":"#9d6319","Northern Kurdish":"#754810","Central Kurdish":"#f0ab55","Southern Kurdish":"#da9130","Hawrami":"#60410c","Mazanderani":"#855c15","Tati":"#c89527","Tat":"#8f6b19","Balochi":"#e1b34d","Persian":"#694f10","Bakhtiari":"#7a6115","Lari":"#54470c","Kumzari":"#d1bb4e","Pashto":"#827219","Wakhi":"#655811","Sarikoli":"#b59e27"/*@LANG_COLOURS@*/};
function hx(h){var n=parseInt(h.slice(1),16);
return[n>>16,n>>8&255,n&255]}
function th(a){return'#'+a.map(function(v){return Math.round(v).toString(16).padStart(2,'0')}).join('')}
function lum(h){var c=hx(h).map(function(v){v/=255;
return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)});
return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function dk(){var t=document.documentElement.getAttribute('data-theme');
if(t==='dark')return true;
if(t==='light')return false;
return!!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)}
function lift(h){if(!dk()||lum(h)>=.2)return h;
return th(hx(h).map(function(v){return v+(255-v)*.32}))}
var V={Slavic:'--f-slav',Iranian:'--f-iran',Albanian:'--f-alba',Greek:'--f-gree',Romance:'--f-roma'/*@FAM_VAR_PROPS_SQ@*/};
window.__albPalette=P;
window.__albGroups={};
window.__albColor=function(t){try{if(!t||!t.data)return null;
var l=t.data.L,n=l?(l.lang||t.data.name):null;
if(n&&P[n])return lift(P[n]);
if(!l&&V[t.fam]){var c=getComputedStyle(document.documentElement).getPropertyValue(V[t.fam]).trim();
if(c)return c}}catch(e){}
return null};
function Y(c){if(c[0]==='#')return lum(c);
var m=c.match(/[\d.]+/g).map(Number);
return lum(th(m.slice(0,3)))}
window.__tc=function(c){try{var y=Y(c);
return 1.05/(y+.05)>=3?'#ffffff':'#0a0e16'}catch(e){return'#ffffff'}};
window.__ts=function(c){return window.__tc(c)==='#ffffff'?'rgba(9,13,21,.6)':'none'};
function _lo(c){try{var y=Y(c);
return 1.05/(y+.05)<3}catch(e){return false}}
window.__lab=function(s,c){var h=_lo(c);
s.style('fill','#ffffff','important').style('stroke',h?'rgba(9,13,21,.55)':'none','important').style('stroke-width',h?'.22em':'0','important').style('paint-order','stroke','important').style('stroke-linejoin','round','important');
return s};
window.__labs=function(c){var h=_lo(c);
return 'fill:#ffffff;paint-order:stroke;stroke-linejoin:round;'+(h?'stroke:rgba(9,13,21,.55);stroke-width:.22em':'stroke:none')};
try{var _st=document.createElement('style');
_st.id='etimo-sel';
_st.textContent=".kfocus .kmask{fill:var(--bg);opacity:.8;stroke:none}.kfocus .kr.tap{fill:none!important;stroke-width:2.6px}.ksel .kr.home{opacity:1;stroke-width:2.2px}.ksel .kr.home.kd{fill:color-mix(in srgb,var(--kf) 42%,transparent)}.ksel .kr.kdia{opacity:.7}.wla,.wtop .wla{letter-spacing:.08em!important}.wlb{letter-spacing:.06em!important}";
document.head.appendChild(_st)}catch(e){}
window.__hdv=function(L){try{var c=(L&&P[L.lang])||(window.__albColor&&window.__albColor({data:{L:L}}));
if(!c||c[0]!=='#')return void 0;
var f=function(v){v/=255;
return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)},g=function(v){v=v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055;
return v*255},rgb=hx(c).map(f),l=Math.cbrt(.4122214708*rgb[0]+.5363325363*rgb[1]+.0514459929*rgb[2]),m=Math.cbrt(.2119034982*rgb[0]+.6806995451*rgb[1]+.1073969566*rgb[2]),q=Math.cbrt(.0883024619*rgb[0]+.2817188376*rgb[1]+.6299787005*rgb[2]),Lk=.2104542553*l+.793617785*m-.0040720468*q,A=1.9779984951*l-2.428592205*m+.4505937099*q,B=.0259040371*l+.7827717662*m-.8086757660*q,C=Math.hypot(A,B),H=Math.atan2(B,A),out=c;
var mk=function(Lv,Cv){var a=Cv*Math.cos(H),b=Cv*Math.sin(H),l_=Math.pow(Lv+.3963377774*a+.2158037573*b,3),m_=Math.pow(Lv-.1055613458*a-.0638541728*b,3),s_=Math.pow(Lv-.0894841775*a-1.291485548*b,3),r=[4.0767416621*l_-3.3077115913*m_+.2309699292*s_,-1.2684380046*l_+2.6097574011*m_-.3413193965*s_,-.0041960863*l_-.7034186147*m_+1.707614701*s_];
return r};
for(var i=0;i<60&&1.05/(lum(out)+.05)<4.6;i++){Lk-=.012;
var Cv=C,r;
for(var t=0;t<30;t++){r=mk(Lk,Cv);
if(r.every(function(v){return v>=-1e-4&&v<=1.0001}))break;
Cv*=.94}
out=th(r.map(function(v){return Math.max(0,Math.min(255,g(Math.max(0,Math.min(1,v)))))}))}
return{'--hd':out,'--lacc':th(hx(c).map(function(v){return v+(255-v)*.5}))}}catch(e){return void 0}};
window.__hovc=function(C,S){try{var L=(C&&((C.hl&&C.hl[0])||(C.dl&&C.dl[0])))||S;
var c=L?window.__albColor({data:{L:L}}):null;
if(!c&&L&&V[L.family])c=getComputedStyle(document.documentElement).getPropertyValue(V[L.family]).trim();
if(!c||c[0]!=='#')return null;
var bg=getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
bg=bg&&bg[0]==='#'&&bg.length===7?bg:(dk()?'#0f131a':'#f7f7f4');
var a=hx(c),b=hx(bg),o=!S?.6:S.lang===L.lang?1:S.family===L.family?.36:.08,mx=th(a.map(function(v,i){return v*o+b[i]*(1-o)}));
var mix=function(x,y,t){var p=hx(y);
return th(x.map(function(v,i){return v+(p[i]-v)*t}))};
return lum(mx)<.3?mix(a,'#ffffff',.55):mix(a,'#0a0e16',.42)}catch(e){return null}};
window.__diaOf=function(L){var N={zl:['Zeta-Lovćen','Zetsko-lovćenski','Zetë-Lovqen','#9bc7e0'],eh:['Eastern Herzegovinian','Istočnohercegovački','Hercegovinas Lindore','#e3f3c9'],kr:['Kosovo-Resava','Kosovsko-resavski','Kosovë-Resavë','#c1196d'],sv:['Šumadija-Vojvodina','Šumadijsko-vojvođanski','Shumadi-Vojvodinë','#aede76'],pt:['Prizren-Timok (Torlak)','Prizrensko-timočki (torlački)','Prizren-Timok (torlak)','#7d7d7d'],ec:['Eastern Čakavian','Istočnočakavski','Çakavishte lindore','#203358'],wm:['Western Macedonian','Zapadnomakedonski','Maqedonishte perëndimore','#7c4a0d'],em:['Eastern Macedonian','Istočnomakedonski','Maqedonishte lindore','#45871e'],nm:['Northern Macedonian','Severnomakedonski','Maqedonishte veriore','#fcdbed'],sm:['Southern Macedonian','Južnomakedonski','Maqedonishte jugore','#1e6dac'],cm:['Central Macedonian','Centralnomakedonski','Maqedonishte qendrore','#f1acd5'],as:['Aegean Slavic','Egejski slovenski','Sllavishte e Egjeut','#b77528'],nwb:['Northwestern Bulgarian','Severozapadni bugarski','Bullgarishte veriperëndimore','#dcbb73'],seb:['Southeastern Bulgarian','Jugoistočni bugarski','Bullgarishte juglindore','#f5e5bb'],swb:['Southwestern Bulgarian','Jugozapadni bugarski','Bullgarishte jugperëndimore','#cfdef9'],neb:['Northeastern Bulgarian','Severoistočni bugarski','Bullgarishte verilindore','#75b339']};
var T={Serbian:{Serbia:['pt','eh','sv','zl','kr'],Montenegro:['zl','eh'],Kosovo:['kr','pt'],'Bosnia and Herzegovina':['eh'],Romania:['kr']},Montenegrin:{Montenegro:['zl','eh']},Bosnian:{'Bosnia and Herzegovina':['eh']},Croatian:{Croatia:['eh','ec'],'Bosnia and Herzegovina':['eh']},Macedonian:{'North Macedonia':['wm','em','nm','sm','cm'],Greece:['as','sm'],Bulgaria:['em'],Albania:['wm'],Kosovo:['wm']},Bulgarian:{Bulgaria:['nwb','seb','swb','neb']}}[L];
if(!T)return null;
var l=window.__ya?window.__ya():'en',ix=l==='sr'?1:l==='sq'?2:0,k=window.__ka||function(x){return x},o={};
Object.keys(T).forEach(function(c){o[c]=T[c].map(function(d){var e=N[d];
return[k(e[ix]),e[3]]})});
return o};
window.__cnm=function(c,za){var M={Kosovo:['Kosovo','Kosovë'],Greece:['Grčka','Greqi'],Albania:['Albanija','Shqipëri'],'Bosnia and Herzegovina':['Bosna i Hercegovina','Bosnjë-Hercegovinë'],Romania:['Rumunija','Rumani']}[c],l=window.__ya?window.__ya():'en';
if(M&&(l==='sr'||l==='sq'))return(window.__ka||function(x){return x})(M[l==='sr'?0:1]);
return za(c)};
window.__dn=function(n){try{var s=window.__Na?window.__Na({lang:n}):n;
return s.replace(/ (Albanian|albanski|албански)$/,'')}catch(e){return n}};
window.__lt=function(k){var T={en:{ad:'Albanian dialects',gh:'Gheg',to:'Tosk',vl:'Vlach languages',na:'North Aromanian',sa:'South Aromanian',me:'Megleno-Romanian'},sq:{ad:'Dialektet e shqipes',gh:'Gegnisht',to:'Toskërisht',vl:'Gjuhët vllahe',na:'Arumune veriore',sa:'Arumune jugore',me:'Meglenorumune'},sr:{ad:'Albanski dijalekti',gh:'Gegijski',to:'Toskijski',vl:'Aromunski i meglenorumunski',na:'Severnoaromunski',sa:'Južnoaromunski',me:'Meglenorumunski'}};
var l=window.__ya?window.__ya():'en',v=(T[l]||T.en)[k]||T.en[k];
return window.__ka?window.__ka(v):v};
})();
