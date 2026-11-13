function Yh(e){return(0,f.jsxs)("div",{className:"fdw",children:[(0,f.jsx)(FDYh,e),(0,f.jsx)(FDresults,{q:e.q,fam:e.fam})]})}
function FDYh({q:e,fam:t="all",onPick:n}){let r=ja(),
[a,i]=(0,m.useState)(80),
s=(0,m.useMemo)(()=>Ha(e),[e,r]),
o=!s.hits.length&&s.dym.length?s.dym[0]:null,
l=(0,m.useMemo)(()=>o?Object.assign({},s,{ms:[o],hits:Ha(La(o)).hits}):s,[s,o]);
(0,m.useEffect)(()=>i(80),[e,t]);
let u=e=>"all"===t?e:e.filter(e=>e.L.family===t),
c=u(l.hits),
d=u(l.sim);
return l.ms.length||c.length||d.length||l.dym.length?(0,f.jsxs)("div",{className:"sres",children:[o?(0,f.jsx)("p",{className:"gh noex",children:r.showing(e,La(o))}):null,l.dym.length>+!!o&&!s.hits.length?(0,f.jsxs)("div",{className:"dym",children:[(0,f.jsx)("p",{className:"gh",children:r.dym}),(0,f.jsx)("div",{className:"chipsc",children:l.dym.slice(+!!o).map(e=>(0,f.jsx)("button",{type:"button",className:"qchip",onClick:()=>{let t;
return n?(t=La(e),n?n(t):null):Ja("m-"+oa(e))},children:La(e)},e))})]}):null,l.ms.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:"gh",children:r.nav.mean}),(0,f.jsx)("div",{className:"tiles",children:l.ms.slice(0,8).map(t=>(0,f.jsx)("button",{type:"button",className:"tile",onClick:()=>Ja("m-"+oa(t)),children:(0,f.jsx)("span",{className:"t",children:(0,f.jsx)(di,{s:La(t),q:e})})},t))})]}):null,c.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:"gh",children:r.matching}),(0,f.jsx)("div",{className:"kgrid sgrid",children:c.slice(0,a).map((t,n)=>(0,f.jsx)(ap,{x:t,q:e},n))}),c.length>a?(0,f.jsx)("button",{type:"button",className:"more",onClick:()=>i(a+200),children:r.more(c.length-a)}):null]}):null,d.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:"gh"+(c.length?"":" noex"),children:c.length||l.ms.length?r.closest:r.noex(e)}),(0,f.jsx)("div",{className:"kgrid sgrid",children:d.map((e,t)=>(0,f.jsx)(ap,{x:e},t))})]}):null,c.length||d.length||l.ms.length?null:(0,f.jsx)("p",{className:"empty",children:r.none})]}):(0,f.jsx)("p",{className:"empty",children:r.none})}
function Jh(){let e=ja(),
[t,n]=(0,m.useState)(mi.sm||"w"),
[r,a]=(0,m.useState)(mi.sq||""),
[i,s]=(0,m.useState)("all"),
o=(0,m.useDeferredValue)(r.replace(/^\s+/,"").replace(/\s+$/," "));
(0,m.useEffect)(()=>{mi.sq=r},[r]);
let l=Za();
return(0,f.jsxs)("div",{className:"view srch",children:[(0,f.jsx)(ui,{id:"sq",value:r,onChange:a,ph:"l"===t?e.ph.lang:e.ph.all,recent:"l"!==t,autoFocus:!0}),(0,f.jsx)(Tp,{v:t,on:e=>{mi.sm=e,n(e)}}),"l"===t?(0,f.jsx)(Ap,{q:o}):o?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"chips fchips",children:["all"].concat(la).map(t=>(0,f.jsx)("button",{type:"button","aria-pressed":i===t,onClick:()=>s(t),children:"all"===t?e.allF:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("i",{className:"dot "+t}),Ca(t)]})},t))}),(0,f.jsx)(Yh,{q:o,fam:i,onPick:a})]}):(0,f.jsxs)("div",{className:"sidle",children:[l.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:"gh",children:e.recent}),(0,f.jsx)("div",{className:"chipsc",children:l.map(e=>(0,f.jsx)("button",{type:"button",className:"qchip",onClick:()=>a(e),children:e},e))})]}):null,(0,f.jsx)("div",{className:"sbg",children:aa.map(t=>(0,f.jsxs)("button",{type:"button",className:"kt sbt",onClick:e=>li(e,"c-"+t),children:[(0,f.jsx)("span",{className:"kn",children:e.cat[t]}),(0,f.jsx)("span",{className:"kb",children:rp(t)})]},t))})]})]})}
function Xh(e){return e}
function ef(e,t){return"string"==typeof t&&(t=e.objects[t]),
"GeometryCollection"===t.type?{type:"FeatureCollection",
features:t.geometries.map(function(t){return tf(e,t)})}:tf(e,t)}
function tf(e,t){var n=t.id,
r=t.bbox,
a=null==t.properties?{}:t.properties,
i=nf(e,t);
return null==n&&null==r?{type:"Feature",
properties:a,
geometry:i}:null==r?{type:"Feature",
id:n,
properties:a,
geometry:i}:{type:"Feature",
id:n,
bbox:r,
properties:a,
geometry:i}}
function nf(e,t){var n=function(e){if(null==e)return Xh;
var t,
n,
r=e.scale[0],
a=e.scale[1],
i=e.translate[0],
s=e.translate[1];
return function(e,o){o||(t=n=0);
var l=2,
u=e.length,
c=Array(u);
for(c[0]=(t+=e[0])*r+i,c[1]=(n+=e[1])*a+s;l<u;)c[l]=e[l],
++l;
return c}}(e.transform),
r=e.arcs;
function a(e){return n(e)}
function i(e){for(var t=[],a=0,i=e.length;a<i;++a)!function(e,t){t.length&&t.pop();
for(var a=r[e<0?~e:e],i=0,s=a.length;i<s;++i)t.push(n(a[i],i));
e<0&&function(e,t){for(var n,r=e.length,a=r-t;a<--r;)n=e[a],
e[a++]=e[r],
e[r]=n}(t,s)}(e[a],t);
return t.length<2&&t.push(t[0]),
t}
function s(e){for(var t=i(e);t.length<4;)t.push(t[0]);
return t}
function o(e){return e.map(s)}
return function e(t){var n,
r=t.type;
switch(r){case"GeometryCollection":return{type:r,
geometries:t.geometries.map(e)};
case"Point":n=a(t.coordinates);
break;
case"MultiPoint":n=t.coordinates.map(a);
break;
case"LineString":n=i(t.arcs);
break;
case"MultiLineString":n=t.arcs.map(i);
break;
case"Polygon":n=o(t.arcs);
break;
case"MultiPolygon":n=t.arcs.map(o);
break;
default:return null}
return{type:r,
coordinates:n}}(t)}
function rf(e,t){var n={},
r={},
a={},
i=[],
s=-1;
function o(e,t){for(var r in e){var a=e[r];
delete t[a.start],
delete a.start,
delete a.end,
a.forEach(function(e){n[e<0?~e:e]=1}),
i.push(a)}}
return t.forEach(function(n,r){var a,i=e.arcs[n<0?~n:n];
!(i.length<3)||i[1][0]||i[1][1]||(a=t[++s],t[s]=n,t[r]=a)}),
t.forEach(function(t){var n,i,s,o,l,u,c=(n=t,o=(s=e.arcs[n<0?~n:n])[0],e.transform?(i=[0,0],s.forEach(function(e){i[0]+=e[0],i[1]+=e[1]})):i=s[s.length-1],n<0?[i,o]:[o,i]),d=c[0],h=c[1];
if(l=a[d])if(delete a[l.end],l.push(t),l.end=h,u=r[h]){delete r[u.start];
var f=u===l?l:l.concat(u);
r[f.start=l.start]=a[f.end=u.end]=f}else r[l.start]=a[l.end]=l;
else if(l=r[h])if(delete r[l.start],l.unshift(t),l.start=d,u=a[d]){delete a[u.end];
var p=u===l?l:u.concat(l);
r[p.start=u.start]=a[p.end=l.end]=p}else r[l.start]=a[l.end]=l;
else r[(l=[t]).start=d]=a[l.end=h]=l}),
o(a,r),
o(r,a),
t.forEach(function(e){n[e<0?~e:e]||i.push([e])}),
i}
function af(e){return nf(e,sf.apply(this,arguments))}
function sf(e,t,n){var r,
a,
i;
if(arguments.length>1)r=function(e,t){var n,
r=[],
a=[];
function i(e){var t=e<0?~e:e;
(a[t]||(a[t]=[])).push({i:e,g:n})}
function s(e){e.forEach(i)}
function o(e){e.forEach(s)}
return function e(t){switch(n=t,t.type){case"GeometryCollection":t.geometries.forEach(e);
break;
case"LineString":s(t.arcs);
break;
case"MultiLineString":case"Polygon":o(t.arcs);
break;
case"MultiPolygon":t.arcs.forEach(o)}}(e),
a.forEach(null==t?function(e){r.push(e[0].i)}:function(e){t(e[0].g,e[e.length-1].g)&&r.push(e[0].i)}),
r}(t,n);
else for(a=0,r=Array(i=e.arcs.length);a<i;++a)r[a]=a;
return{type:"MultiLineString",
arcs:rf(e,r)}}
function of(e,t){var n={},
r=[],
a=[];
function i(e){e.forEach(function(t){t.forEach(function(t){(n[t=t<0?~t:t]||(n[t]=[])).push(e)})}),
r.push(e)}
function s(t){return function(e){for(var t,n=-1,r=e.length,a=e[r-1],i=0;++n<r;)t=a,
a=e[n],
i+=t[0]*a[1]-t[1]*a[0];
return Math.abs(i)}(nf(e,{type:"Polygon",arcs:[t]}).coordinates[0])}
return t.forEach(function e(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(e);
break;
case"Polygon":i(t.arcs);
break;
case"MultiPolygon":t.arcs.forEach(i)}}),
r.forEach(function(e){if(!e._){var t=[],r=[e];
for(e._=1,a.push(t);e=r.pop();)t.push(e),e.forEach(function(e){e.forEach(function(e){n[e<0?~e:e].forEach(function(e){e._||(e._=1,r.push(e))})})})}}),
r.forEach(function(e){delete e._}),
{type:"MultiPolygon",
arcs:a.map(function(t){var r,a=[];
if(t.forEach(function(e){e.forEach(function(e){e.forEach(function(e){n[e<0?~e:e].length<2&&a.push(e)})})}),(r=(a=rf(e,a)).length)>1)for(var i,o,l=1,u=s(a[0]);l<r;++l)(i=s(a[l]))>u&&(o=a[0],a[0]=a[l],a[l]=o,u=i);
return a}).filter(function(e){return e.length>0})}}
var lf;
lf=JSON.parse('{"S0":1000,"x0":-1473.9417365861548,"y0":-1753.165358505492,"x1":1481.629643755751,"y1":-278.6023872109487,"W":3400,"H":1696,"R":1.1503697804810527}');
let uf=null,
cf=null,
df=null,
hf=null,
ff=null,
pf=(e,t)=>{let n=e.bb;
return t[1]>=n[0][1]-.01&&t[1]<=n[1][1]+.01&&(n[0][0]<=n[1][0]?t[0]>=n[0][0]-.01&&t[0]<=n[1][0]+.01:t[0]>=n[0][0]||t[0]<=n[1][0])};
function mf(){return cf||(cf=ca.objects.land?ef(ca,ca.objects.land):function(e){return nf(e,of.apply(this,arguments))}(ca,ca.objects.countries.geometries)),
cf}
var gf={draw(e,t){let n=Math.sqrt(t/2.378);
for(let t=0;t<5;t++){let r=-Math.PI/2+2*t*Math.PI/5;
t?e.lineTo(n*Math.cos(r),n*Math.sin(r)):e.moveTo(n*Math.cos(r),n*Math.sin(r))}
e.closePath()}};
let vf={},
bf={};
function yf(e){let t=e.append("defs");
[["Slavic","--f-slav"],["Iranian","--f-iran"],["Albanian","--f-alba"],["Greek","--f-gree"],["Romance","--f-roma"]/*@FAM_VAR_PAIRS@*/].forEach(e=>{let n=t.append("radialGradient").attr("id","g-"+e[0]);
n.append("stop").attr("offset","0%").attr("style","stop-color:var("+e[1]+");stop-opacity:.72"),n.append("stop").attr("offset","50%").attr("style","stop-color:var("+e[1]+");stop-opacity:.34"),n.append("stop").attr("offset","100%").attr("style","stop-color:var("+e[1]+");stop-opacity:0")})}
function kf(e,t,n){let r,
a=t([e.info.lon,e.info.lat]),
i=t([e.info.lon,e.info.lat+((r=Xa(e))<1e3?12:r<1e4?18:r<1e5?30:r<1e6?60:r<1e7?140:260)/111]);
return Math.max(n||6,Math.hypot(a[0]-i[0],a[1]-i[1]))}
function wf(e,t){var n,
r;
let a,
i,
s;
e.querySelectorAll("svg").forEach(e=>e.remove());
let o=t.info;
if(!o||null==o.lat)return;
let l=e.clientWidth||340,
u=e.clientHeight||200,
c=ua.filter(e=>e.info&&null!=e.info.lat),
d=new Set([t.id]),
h=kd().parallels([35,60]).rotate([o.lon>75.5?-o.lon:-30,0]),
f=[o.lon-6,o.lat-3.5,o.lon+6,o.lat+3.5];
h.fitExtent([[14,14],[l-14,u-14]],{type:"MultiPoint",coordinates:[[f[0],f[1]],[f[2],f[1]],[f[2],f[3]],[f[0],f[3]],[(f[0]+f[2])/2,f[1]],[(f[0]+f[2])/2,f[3]]]});
let p=ws(e).insert("svg",":first-child").attr("viewBox",[0,0,l,u]).attr("aria-hidden","true");
yf(p),
p.append("g").selectAll("path").data((!uf&&(uf=ef(ca,ca.objects.countries)),uf).features).join("path").attr("class","land").attr("d",sd(h)),
n=p.append("g"),
r=c.filter(e=>d.has(e.id)),
(a=n.selectAll("circle").data(r,e=>e.id)).exit().transition().duration(300*!Ya()).attr("opacity",0).remove(),
i=a.enter().append("circle").attr("class",e=>"halo "+e.family).attr("cx",e=>h([e.info.lon,e.info.lat])[0]).attr("cy",e=>h([e.info.lon,e.info.lat])[1]).attr("r",e=>.4*kf(e,h,18)).attr("fill",e=>"url(#g-"+e.family+")").attr("opacity",0),
s=r.length>12?.55:r.length>3?.75:1,
i.transition().duration(Ya()?0:1100).ease(Ao).attr("opacity",s).attr("r",e=>kf(e,h,18));
let m=c.filter(e=>{let t=h([e.info.lon,e.info.lat]);
return e._m=t,t[0]>-16&&t[0]<l+16&&t[1]>-16&&t[1]<u+16});
p.append("g").selectAll("circle").data(m.filter(e=>d.has(e.id))).join("circle").attr("class",e=>"ring "+e.family).attr("cx",e=>e._m[0]).attr("cy",e=>e._m[1]).attr("r",6),
p.append("g").selectAll("circle").data(m.sort((e,t)=>!!d.has(e.id)-!!d.has(t.id))).join("circle").attr("class",e=>"pin "+e.family+(d.has(e.id)?"":" dim")).attr("cx",e=>e._m[0]).attr("cy",e=>e._m[1]).attr("r",e=>d.has(e.id)?6:4.2)}
let xf=["scramble","rise","blur","type","drop"],
jf="";
function Sf(e){if(!e)return;
let t=e.dataset.t||e.textContent;
if(e.dataset.t=t,Ya())return void(e.textContent=t);
let n=jf||"scramble";
if(clearTimeout(e.__ty),"scramble"===n){let t,
n,
r,
a,
i,
s;
return t=e.dataset.t,
n=/[Ⴀ-ჿ]/.test(t)?"აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ":/[Ѐ-ӿ]/.test(t)?"абвгдежзийклмнопрстуфхцчшщъыьэюяӀҗңөүһә":"abcdefghijklmnoprstuvyzäöüçğışžčšåâ",
r=t.length,
a=performance.now(),
i=0,
cancelAnimationFrame(e.__s),
void(s=()=>{let o=performance.now(),l=o-a;
if(o-i<45)return void(e.__s=requestAnimationFrame(s));
i=o;
let u="",c=!0;
for(let e=0;e<r;e++)l>=140+70*e||" "===t[e]||"-"===t[e]?u+=t[e]:(c=!1,u+=n.charAt(Math.random()*n.length|0));
e.textContent=u,c||(e.__s=requestAnimationFrame(s))})()}
if("type"===n){let n=0;
e.textContent="";
let r=()=>{e.textContent=t.slice(0,++n),
n<t.length&&(e.__ty=setTimeout(r,85))};
return void r()}"drop"!==n?(e.textContent=t,e.classList.remove("a-rise","a-blur"),e.offsetWidth,e.classList.add("a-"+n)):e.innerHTML=Array.from(t).map((e,t)=>'<span class="dl" style="--d:'+55*t+'ms">'+(" "===e?"&nbsp;":ei(e))+"</span>").join("")}
function _f(e){if(!e)return;
e.style.fontSize="";
let t=parseFloat(getComputedStyle(e).fontSize),
n=0;
for(;e.scrollWidth>e.clientWidth+1&&t>12&&n++<40;)t-=1,
e.style.fontSize=t+"px"}
function qf(e){e.querySelectorAll(".ct.ctm .cm, .ct.ctm .cx").forEach(_f)}
let Ef=97*Math.random()|0,
zf={family:"mother",
cattle:"horse",
nature:"water",
body:"heart",
food:"bread",
home:"house",
time:"night",
belief:"God"},
Nf=__ETIMO_FAMILIES__;
function Mf(e,t){let _ac=window.__albColor&&window.__albColor(t);
if(_ac)return _ac;
{let _n=t&&t.data&&t.data.L&&t.data.name,
_c={Serbian:"#2fa63a",
Croatian:"#b9dc4a",
Bosnian:"#0e6b4b",
Montenegrin:"#5fc9a2",
Czech:"#14857a",
Slovak:"#5f7e1f",
Rusyn:"#0b4a2a",
"Pannonian Rusyn":"#0b4a2a",
"Carpatho-Rusyn":"#0b4a2a",
Italian:"#8e2f89"}[_n];
if(_c)return _c}
return function(e,t){let n=/^#?([0-9a-f]{6})$/i.exec((e||"").trim());
if(!n||!t)return e;
let r=parseInt(n[1],16),
a=e=>(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),
i=a(r>>16&255),
s=a(r>>8&255),
o=a(255&r),
l=Math.cbrt(.4122214708*i+.5363325363*s+.0514459929*o),
u=Math.cbrt(.2119034982*i+.6806995451*s+.1073969566*o),
c=Math.cbrt(.0883024619*i+.2817188376*s+.6299787005*o),
d=.2104542553*l+.793617785*u-.0040720468*c,
h=1.9779984951*l-2.428592205*u+.4505937099*c,
f=.0259040371*l+.7827717662*u-.808675766*c,
p=Math.hypot(h,f),
m=180*Math.atan2(f,h)/Math.PI,
g=[],
v=0;
for(let e=t;e&&e.parent;e=e.parent)g.unshift(e);
g.forEach(e=>{let t=1===e.depth?e.parent.children.filter(t=>t.fam===e.fam):e.parent.children,n=t.indexOf(e),r=t.length,a=r>1?n/(r-1)-.5:0;
1===e.depth&&(v+=24*a)});
{let e=g[0],
n=e&&e.x1-e.x0;
if(n&&t.depth>1){let r=e.leaves().length,
a=Math.min(30,10+1.2*r),
i=((t.x0+t.x1)/2-e.x0)/n-.5;
v+=i*a,
d+=.035*Math.min(3,t.depth-2)}
if(t.parent&&t.depth>1){let e=t.parent.children,
n=(e.length,e.indexOf(t));
t.data&&t.data.L?(d=[.46,.62,.53][Math.max(0,g[0].leaves().indexOf(t))%3]+.15*(d-.6),p*=n%2?.8:1.12,v+=7*(n%2?-1:1)):d+=n%2?-.06:.06}}
m+=v,
d=Math.max(t.data&&t.data.L?.4:.34,Math.min(t.data&&t.data.L?.68:.84,d));
let b=null;
for(let e=0;e<14&&!b;e++){let e=p*Math.cos(m*Math.PI/180),
t=p*Math.sin(m*Math.PI/180),
n=(d+.3963377774*e+.2158037573*t)**3,
r=(d-.1055613458*e-.0638541728*t)**3,
a=(d-.0894841775*e-1.291485548*t)**3,
i=4.0767416621*n-3.3077115913*r+.2309699292*a,
s=-1.2684380046*n+2.6097574011*r-.3413193965*a,
o=-.0041960863*n-.7034186147*r+1.707614701*a;
i>=-.002&&i<=1.002&&s>=-.002&&s<=1.002&&o>=-.002&&o<=1.002?b=[i,s,o]:p*=.88}
if(!b)return e;
let y=e=>(e=(e=Math.max(0,Math.min(1,e)))<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,Math.round(255*e).toString(16).padStart(2,"0"));
return"#"+y(b[0])+y(b[1])+y(b[2])}(e,t)}
const Cf={d:"M0.0,130.1 L6.8,129.8 L13.6,126.3 L20.5,113.1 L27.3,94.8 L34.1,95.1 L40.9,113.6 L47.7,86.2 L54.5,41.8 L61.4,44.8 L68.2,38.9 L75.0,58.7 L81.8,85.4 L88.6,88.4 L95.5,84.2 L102.3,79.2 L109.1,88.3 L115.9,59.1 L122.7,72.2 L129.5,79.1 L136.4,78.2 L143.2,70.8 L150.0,97.7 L156.8,100.7 L163.6,108.1 L170.5,108.8 L177.3,91.2 L184.1,87.7 L190.9,83.0 L197.7,81.3 L204.5,95.8 L211.4,87.4 L218.2,79.0 L225.0,84.2 L231.8,80.6 L238.6,88.2 L245.5,92.3 L252.3,110.5 L259.1,125.2 L265.9,124.9 L272.7,121.2 L279.5,101.4 L286.4,86.4 L293.2,78.7 L300.0,79.7 L306.8,93.8 L313.6,61.8 L320.5,68.4 L327.3,101.7 L334.1,111.9 L340.9,80.8 L347.7,58.7 L354.5,63.1 L361.4,80.3 L368.2,107.5 L375.0,125.3 L381.8,129.8 L388.6,127.5 L395.5,112.4 L402.3,77.3 L409.1,54.8 L415.9,48.4 L422.7,16.0 L429.5,26.1 L436.4,46.8 L443.2,29.6 L450.0,44.1 L456.8,58.1 L463.6,101.2 L470.5,66.6 L477.3,34.8 L484.1,61.5 L490.9,106.5 L497.7,125.7 L504.5,118.8 L511.4,80.4 L518.2,26.6 L525.0,26.6 L531.8,80.4 L538.6,112.5 L545.5,101.6 L552.3,108.0 L559.1,122.0 L565.9,125.1 L572.7,107.3 L579.5,82.1 L586.4,81.7 L593.2,68.9 L600.0,89.5",
p:[[57.6,34.9,4807,"Mont Blanc"],[216.4,77.8,2917,"Olympus"],[521.6,16.7,5610,"Damavand"]]};
let Lf=null;
var Tf=null;
function Af(){return Lf&&Tf===ga.ui||(Tf=ga.ui,Lf=jp(),Hf=null),
Lf}
function Pf(e){let t=$f(e.id);
return t?t.ancestors().reverse().slice(1,-1).map(e=>Pa(e.data.name)).join(" › "):Ca(e.family)}
function If(e){let t={Slavic:"--f-slav",
Iranian:"--f-iran",
Albanian:"--f-alba",
Greek:"--f-gree",
Romance:"--f-roma"/*@FAM_VAR_PROPS@*/}[e];
return t?getComputedStyle(document.documentElement).getPropertyValue(t).trim():""}
function Rf(){let e={Slavic:"slav",
Iranian:"iran",
Albanian:"alba",
Greek:"gree",
Romance:"roma"/*@FAM_KEY_PROPS@*/},
t=[[0,.5],[1,.5]],
n=0,
r=n=>{let r=n.querySelector("svg.ridge"),
a=n.querySelector(".ticks"),
i=r&&r.querySelector("path");
if(!r||!a||!i||n.__kp)return;
n.__kp=1,
r.removeAttribute("preserveAspectRatio");
let s=document.createElementNS("http://www.w3.org/2000/svg","path");
s.setAttribute("class","kseg"),
r.appendChild(s);
let o=null,
l=[],
u=[],
c=null,
d=0,
h=!1,
f=()=>{let e=r.clientWidth,
n=r.clientHeight;
if(!e||!n)return void(o=null);
let a=t.map(([t,r])=>[t*e,3+r*(n-6)]);
o={W:e,
H:n,
q:a},
r.setAttribute("viewBox","0 0 "+e+" "+n);
let c="M"+a.map(e=>e[0].toFixed(1)+" "+e[1].toFixed(1)).join(" L");
i.setAttribute("d",c),
s.setAttribute("d",c),
l=[0];
for(let e=1;e<a.length;e++)l.push(l[e-1]+Math.hypot(a[e][0]-a[e-1][0],a[e][1]-a[e-1][1]));
u=a.map(e=>e[0]),
o.T=l[l.length-1],
o.len=e<640?28:40,
s.style.strokeDasharray=o.len+" "+(o.T+2*o.len)},
p=e=>{o&&(e=Math.max(o.len/2,Math.min(o.T-o.len/2,e)),s.style.strokeDashoffset=(o.len/2-e).toFixed(2))},
m=e=>{h!==e&&(h=e,s.classList.toggle("on",e))},
g=e=>{if(!o)return;
cancelAnimationFrame(d);
let t=(e=>{for(let t=1;t<u.length;t++)if(u[t]>=e){let n=(e-u[t-1])/(u[t]-u[t-1]||1);
return l[t-1]+n*(l[t]-l[t-1])}
return o.T})(e*o.W);
if(null==c||Ya())return c=t,
p(t),
void m(!0);
let n=c,
r=t-n;
if(Math.abs(r)<.5)return void m(!0);
if(r<0)return m(!1),
void setTimeout(()=>{c=t,p(t),m(!0)},420);
let a=performance.now(),
i=Math.min(2600,1500+1.2*r),
s=e=>{let t=Math.min(1,(e-a)/i),
o=.5-Math.cos(Math.PI*t)/2;
c=n+r*o,
p(c),
d=t<1?requestAnimationFrame(s):0};
d=requestAnimationFrame(s)},
v=()=>{let t=[...a.children],
r=t.length||1,
i=Math.max(0,t.findIndex(e=>e.classList.contains("on"))),
o=n.querySelector(".sl.on .dot"),
l=o&&Object.keys(e).find(e=>o.classList.contains(e));
s.style.stroke=l?"var(--f-"+e[l]+")":"var(--hd)",
g(.04+.92*(i+.5)/r)};
f(),
new MutationObserver(v).observe(a,{attributes:!0,subtree:!0,attributeFilter:["class"]}),
n.__ks=()=>{let e=c&&o?c/o.T:null;
f(),
o&&null!=e&&(c=e*o.T,p(c))},
v()},
a=()=>{n=0,
document.querySelectorAll(".spec-p").forEach(r)},
i=document.getElementById("root"),
s=0;
i&&new MutationObserver(()=>{n||(n=requestAnimationFrame(a))}).observe(i,{childList:!0,subtree:!0}),
addEventListener("resize",()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>document.querySelectorAll(".spec-p").forEach(e=>e.__ks&&e.__ks()))}),
a()}
let Of=null;
function Df(){return Of||(Of=fetch("data/ethno.json").then(e=>e.ok?e.json():null).catch(()=>null))}
let Ff=null,
Bf=null;
let Kf=null,
Gf=null,
Uf=null,
Hf=null,
Wf={};
function $f(e){if(!Hf||Tf!==ga.ui){let e=Af();
Hf=new Map;
try{e.leaves().forEach(e=>e.data.L&&Hf.set(e.data.L.id,e))}catch{}}
return Hf.get(e)}
function Vf(e){if(!e||!e.family)return null;
let t={Slavic:"--f-slav",
Iranian:"--f-iran",
Albanian:"--f-alba",
Greek:"--f-gree",
Romance:"--f-roma"/*@FAM_VAR_PROPS@*/}[e.family],
n=t&&getComputedStyle(document.documentElement).getPropertyValue(t).trim();
if(!n)return null;
let r=n+e.id;
return Wf[r]||(Wf[r]=Mf(n,$f(e.id))||n)}
function Zf(){return Gf||(Gf=Promise.all([fetch("data/adm2.json").then(e=>e.json()),fetch("data/micro.json").then(e=>e.json()),Df()]).then(([t,m,E])=>{E&&E.so&&(E.so.f.bb=pu(E.so.f));
let F=ef(t,t.objects.d).features;
F.forEach((f,i)=>{f.bb=pu(f),f._i=i,f.properties.n=(f.properties.n||"").replace(/^(городской округ|город|городской)\s+/i,"")});
return Kf={F,M:m,topo:t,E}}).catch(()=>null))}
let Qf=null;
function Yf(e){(Qf||(Qf=fetch("data/dia.json").then(e=>e.ok?e.json():null).catch(()=>null))).then(t=>{t&&e.node().isConnected&&(e.selectAll("path").data(Object.keys(t.fam)).join("path").attr("class",e=>"dia "+e).attr("fill-rule","evenodd").attr("d",e=>t.fam[e]),Object.keys(t.lang).forEach(e=>{da[e]&&(da[e].x=t.lang[e])}))})}
const Jf=[["Delhi",28.67,77.23,15926,"IN"],["Karachi",24.87,66.99,12130,"PK"],["Cairo",30.05,31.25,11893,"EG"],["Moscow",55.75,37.61,10452,"RU"],["Istanbul",41.02,28.97,10061,"TR"],["Paris",48.86,2.35,9904,"FR"],["London",51.5,-0.12,8567,"GB"],["Tehran",35.67,51.42,7873,"IR"],["Lahore",31.56,74.35,6577,"PK"],["Madrid",40.4,-3.69,5567,"ES"],["Ahmedabad",23.03,72.58,5375,"IN"],["Baghdad",33.34,44.39,5054,"IQ"],["Barcelona",41.39,2.18,4920,"ES"],["St.  Petersburg",59.94,30.31,4553,"RU"],["Riyadh",24.63,46.72,4465,"SA"],["Alexandria",31.2,29.95,4165,"EG"],["Ankara",39.93,32.86,3716,"TR"],["Berlin",52.52,13.4,3406,"DE"],["Algiers",36.77,3.05,3354,"DZ"],["Rome",41.9,12.48,3339,"IT"],["Kabul",34.52,69.18,3277,"AF"],["Athens",37.99,23.73,3242,"GR"],["Casablanca",33.6,-7.62,3181,"MA"],["Tel Aviv",32.08,34.77,3112,"IL"],["Stuttgart",48.78,9.2,2945,"DE"],["Milan",45.47,9.2,2945,"IT"],["Jaipur",26.92,75.81,2917,"IN"],["Frankfurt",50.1,8.68,2895,"DE"],["Lisbon",38.72,-9.15,2812,"PT"],["Katowice",50.26,19.02,2746,"PL"],["Aleppo",36.23,37.17,2738,"SY"],["Kyiv",50.44,30.51,2709,"UA"],["Giza",30.01,31.19,2682,"EG"],["Faisalabad",31.41,73.11,2617,"PK"],["İzmir",38.44,27.15,2587,"TR"],["Mashhad",36.27,59.57,2469,"IR"],["Damascus",33.5,36.3,2466,"SY"],["Tunis",36.8,10.18,2412,"TN"],["Vienna",48.2,16.36,2400,"AT"],["Mannheim",49.5,8.47,2362,"DE"],["Birmingham",52.48,-1.92,2285,"GB"],["Naples",40.84,14.24,2250,"IT"],["Manchester",53.48,-2.25,2230,"GB"],["Tripoli",32.89,13.18,2189,"LY"],["Tashkent",41.3,69.27,2184,"UZ"],["Baku",40.4,49.86,2122,"AZ"],["Kuwait City",29.37,47.98,2063,"KW"],["Dammam",26.43,50.1,2055,"SA"],["Indore",22.72,75.86,2026,"IN"],["Bucharest",44.44,26.1,1942,"RO"],["Saidu",34.75,72.35,1860,"PK"],["Rawalpindi",33.59,73.07,1858,"PK"],["Beirut",33.87,35.51,1846,"LB"],["Minsk",53.9,27.56,1805,"BY"],["Hamburg",53.55,10,1757,"DE"],["Vadodara",22.31,73.18,1756,"IN"],["Brussels",50.84,4.33,1743,"BE"],["Essen",51.45,7.02,1742,"DE"],["Bhopal",23.25,77.41,1727,"IN"],["Warsaw",52.23,21.01,1707,"PL"],["Rabat",34.03,-6.84,1705,"MA"],["Budapest",47.5,19.08,1679,"HU"],["Turin",45.07,7.67,1652,"IT"],["Ludhiana",30.93,75.87,1649,"IN"],["Isfahan",32.7,51.7,1628,"IR"],["Agra",27.17,78.01,1592,"IN"],["Leeds",53.79,-1.55,1529,"GB"],["Multan",30.2,71.45,1522,"PK"],["Gujranwala",32.16,74.18,1513,"PK"],["Florence",43.78,11.25,1500,"IT"],["Bursa",40.2,29.07,1492,"TR"],["Kharkiv",50,36.25,1461,"UA"],["Hyderabad",25.38,68.37,1459,"PK"],["Doha",25.29,51.53,1450,"QA"],["Karaj",35.8,50.97,1423,"IR"],["Lyon",45.77,4.83,1423,"FR"],["Tabriz",38.09,46.3,1413,"IR"],["The Hague",52.08,4.27,1406,"NL"],["Marseille",43.29,5.37,1400,"FR"],["Meerut",29,77.7,1398,"IN"],["Faridabad",28.44,77.31,1394,"IN"],["Dubai",25.21,55.29,1379,"AE"],["Ghaziabad",28.66,77.41,1341,"IN"],["Porto",41.15,-8.62,1337,"PT"],["Mosul",36.35,43.14,1316,"IQ"],["Yekaterinburg",56.85,60.6,1313,"RU"],["Peshawar",34.01,71.53,1303,"PK"],["Sheffield",53.37,-1.5,1293,"GB"],["Adana",37,35.32,1293,"TR"],["Jabalpur",23.18,79.95,1285,"IN"],["Nizhny Novgorod",56.33,44,1278,"RU"],["Duisburg",51.43,6.75,1277,"DE"],["Munich",48.13,11.57,1275,"DE"],["Stockholm",59.32,18.07,1264,"SE"],["Rajkot",22.31,70.8,1260,"IN"],["Shiraz",29.63,52.57,1240,"IR"],["Geneva",46.21,6.14,1240,"CH"],["Düsseldorf",51.22,6.78,1220,"DE"],["Seville",37.41,-5.98,1212,"ES"],["Amritsar",31.64,74.87,1212,"IN"],["Almaty",43.33,76.91,1209,"KZ"],["Sofia",42.69,23.31,1185,"BG"],["Abbottabad",34.15,73.2,1184,"PK"],["Banghazi",32.12,20.06,1180,"LY"],["Prague",50.09,14.42,1162,"CZ"],["Glasgow",55.86,-4.24,1160,"GB"],["Srinagar",34.07,74.83,1140,"IN"],["Samara",53.2,50.15,1137,"RU"],["Omsk",54.99,73.4,1135,"RU"],["Kazan",55.75,49.12,1115,"RU"],["Helsinki",60.16,24.93,1115,"FI"],["Zürich",47.38,8.55,1108,"CH"],["Sharjah",25.37,55.41,1103,"AE"],["Yerevan",40.18,44.51,1102,"AM"],["Tbilisi",41.73,44.79,1100,"GE"],["Belgrade",44.82,20.47,1099,"RS"],["Chelyabinsk",55.16,61.44,1091,"RU"],["Dushanbe",38.56,68.77,1086,"TJ"],["København",55.68,12.56,1085,"DK"],["Amman",31.95,35.93,1060,"JO"],["Dublin",53.35,-6.26,1059,"IE"],["Rostov",47.24,39.71,1052,"RU"],["Dnipro",48.48,35,1050,"UA"],["Lille",50.65,3.08,1044,"FR"],["Gaziantep",37.08,37.38,1044,"TR"],["Amsterdam",52.35,4.91,1031,"NL"],["Jerusalem",31.78,35.21,1029,"IL"],["Ufa",54.79,56.04,1018,"RU"],["Haifa",32.82,34.98,1011,"IL"],["Medina",24.5,39.58,1010,"SA"],["Rotterdam",51.92,4.48,1005,"NL"],["Homs",34.73,36.72,1005,"SY"],["Cologne",50.93,6.95,1004,"DE"],["Fez",34.06,-5,1002,"MA"],["Perm",58,56.25,997,"RU"],["Ahvaz",31.28,48.72,996,"IR"],["Jodhpur",26.29,73.01,995,"IN"],["Odessa",46.49,30.71,991,"UA"],["Donetsk",48,37.83,988,"UA"],["Duhok",36.87,43,986,"IQ"],["Volgograd",48.71,44.5,984,"RU"],["Chandigarh",30.72,76.78,979,"IN"],["Gwalior",26.2,78.17,978,"IN"],["Qom",34.65,50.95,973,"IR"],["Salerno",40.68,14.77,954,"IT"],["Nice",43.72,7.26,927,"FR"],["Irbil",36.18,44.01,926,"IQ"],["Antwerpen",51.22,4.41,920,"BE"],["Konya",37.88,32.47,919,"TR"],["Az Zarqa",32.07,36.1,895,"JO"],["Tirana",41.33,19.82,895,"AL"],["Tarsus",36.92,34.88,894,"TR"],["Newcastle",54.99,-1.61,882,"GB"],["Bilbao",43.25,-2.93,876,"ES"],["Marrakesh",31.63,-8,872,"MA"],["Basra",30.52,47.81,870,"IQ"],["Palermo",38.13,13.35,863,"IT"],["Cardiff",51.48,-3.17,861,"GB"],["Jullundur",31.34,75.57,855,"IN"],["Shache",38.43,77.25,851,"CN"],["Toulouse",43.62,1.45,847,"FR"],["Voronezh",51.67,39.19,844,"RU"],["Saratov",51.58,46.03,843,"RU"],["Bishkek",42.88,74.58,837,"KG"],["Oslo",59.92,10.75,835,"NO"],["Basel",47.58,7.59,830,"CH"],["Kermanshah",34.38,47.06,828,"IR"],["Thessaloniki",40.7,22.88,828,"GR"],["Braga",41.55,-8.42,827,"PT"],["Kota",25.18,75.83,827,"IN"],["Nottingham",52.94,-1.17,826,"GB"],["Jhansi",25.45,78.56,826,"IN"],["Agadir",30.44,-9.62,825,"MA"],["Bareilly",28.35,79.42,817,"IN"],["Liverpool",53.41,-2.96,811,"GB"],["Valencia",39.49,-0.4,808,"ES"],["Aligarh",27.89,78.06,805,"IN"],["Lviv",49.83,24.03,804,"UA"],["Bordeaux",44.85,-0.6,803,"FR"],["Oran",35.71,-0.62,798,"DZ"],["Jammu",32.71,74.84,791,"IN"],["Zaporizhzhya",47.86,35.17,788,"UA"],["Moradabad",28.84,78.75,787,"IN"],["Antalya",36.89,30.7,783,"TR"],["Islamabad",33.69,73.08,780,"PK"],["Wuppertal",51.25,7.17,777,"DE"],["Saarbrücken",49.25,6.97,770,"DE"],["Quetta",30.22,67.02,768,"PK"],["Trabzon",40.98,39.72,765,"TR"],["Łódź",51.77,19.46,758,"PL"],["Kraków",50.06,19.96,756,"PL"],["Fargona",40.39,71.78,750,"UZ"],["Namangan",41,71.67,750,"UZ"],["Tangier",35.78,-5.81,750,"MA"],["Liège",50.63,5.58,749,"BE"],["Riga",56.95,24.1,743,"LV"],["Gdańsk",54.36,18.64,740,"PL"],["Nürnberg",49.45,11.08,737,"DE"],["Muscat",23.59,58.38,735,"OM"],["Ashgabat",37.95,58.38,728,"TM"],["Bremen",53.08,8.8,725,"DE"],["As Sulaymaniyah",35.56,45.43,723,"IQ"],["Zagreb",45.8,16,723,"HR"],["Hanover",52.37,9.72,722,"DE"],["Kandahar",31.61,65.69,716,"AF"],["Dehra Dun",30.32,78.05,714,"IN"],["Samarkand",39.67,66.94,708,"UZ"],["Tolyatti",53.51,49.42,703,"RU"],["Meknes",33.9,-5.56,698,"MA"],["Sarajevo",43.85,18.38,697,"BA"],["Chișinău",47.01,28.86,688,"MD"],["Bonn",50.72,7.08,681,"DE"],["Catania",37.5,15.08,675,"IT"],["Najaf",32,44.34,666,"IQ"],["Bytom",50.35,18.91,662,"PL"],["Ismaïlia",30.59,32.26,656,"EG"],["Kryvyy Rih",47.93,33.34,652,"UA"],["Irbid",32.55,35.85,650,"JO"],["Andijan",40.79,72.34,650,"UZ"],["Krasnodar",45.02,39,650,"RU"],["Zaragoza",41.65,-0.89,649,"ES"],["Genoa",44.41,8.93,647,"IT"],["Diyarbakır",37.92,40.23,645,"TR"],["Ulyanovsk",54.33,48.41,641,"RU"],["Utrecht",52.1,5.12,640,"NL"],["Hofuf",25.35,49.59,637,"SA"],["Wrocław",51.11,17.03,635,"PL"],["Izhevsk",56.85,53.23,631,"RU"],["Poznań",52.41,16.9,624,"PL"],["Bur Said",31.26,32.29,624,"EG"],["Bannu",32.99,70.6,622,"PK"],["Southend-on-Sea",51.55,0.72,618,"GB"],["Dresden",51.05,13.75,618,"DE"],["Icel",36.8,34.62,617,"TR"],["Wiesbaden",50.08,8.25,617,"DE"],["Samsun",41.28,36.34,609,"TR"],["Luxor",25.7,32.65,609,"EG"],["Yaroslavl",57.62,39.87,607,"RU"],["Constantine",36.36,6.6,605,"DZ"],["Abu Dhabi",24.47,54.37,603,"AE"],["Kirkuk",35.47,44.39,601,"IQ"],["El Mansura",31.05,31.38,600,"EG"],["Sohag",26.55,31.7,600,"EG"],["Zahedan",29.5,60.83,599,"IR"],["Jalalabad",34.44,70.44,598,"AF"],["Al Hillah",23.49,46.76,595,"SA"],["Al Hillah",32.47,44.42,595,"IQ"],["Rasht",37.3,49.63,595,"IR"],["Kayseri",38.73,35.49,593,"TR"],["Ajmer",26.45,74.64,590,"IN"],["Dortmund",51.53,7.45,588,"DE"],["Kerman",30.3,57.08,578,"IR"],["Urmia",37.53,45,577,"IR"],["Bikaner",28.02,73.33,576,"IN"],["Manama",26.24,50.58,564,"BH"],["Makhachkala",42.98,47.5,555,"RU"],["Bristol",51.45,-2.58,554,"GB"],["Bahawalpur",29.39,71.67,553,"PK"],["Kenitra",34.27,-6.58,552,"MA"],["Málaga",36.72,-4.42,550,"ES"],["Orenburg",51.78,55.11,550,"RU"],["Tabuk",28.38,36.55,548,"SA"],["Hisar",29.17,75.73,545,"IN"],["Sargodha",32.09,72.67,543,"PK"],["Leipzig",51.34,12.41,543,"DE"],["Vilnius",54.68,25.32,542,"LT"],["Latakia",35.54,35.78,539,"SY"],["Göteborg",57.71,11.98,538,"SE"],["Rouen",49.43,1.08,533,"FR"],["Ṭarābulus",34.44,35.83,530,"LB"],["Hamadan",34.8,48.52,528,"IR"],["Ryazan",54.62,39.72,520,"RU"],["Tyumen",57.14,65.53,519,"RU"],["Lipetsk",52.62,39.64,516,"RU"],["Eskişehir",39.79,30.53,515,"TR"],["Ujjain",23.19,75.79,513,"IN"],["Penza",53.18,45,513,"RU"],["Mykolayiv",46.97,31.98,511,"UA"],["Karbala",32.61,44.02,511,"IQ"],["Blida",36.42,2.83,511,"DZ"],["Gliwice",50.33,18.67,508,"PL"],["Suez",30,32.55,508,"EG"],["Kashgar",39.48,75.97,507,"CN"],["Gaza City",31.53,34.45,506,"PS"],["Edinburgh",55.95,-3.22,505,"GB"],["Arak",34.08,49.7,504,"IR"],["Annaba",36.92,7.76,504,"DZ"],["Brighton",50.83,-0.17,503,"GB"],["Astrakhan",46.35,48.05,503,"RU"],["Bradford",53.79,-1.75,502,"GB"],["Bari",41.11,16.87,501,"IT"],["Damanhûr",31.05,30.47,500,"EG"],["El Minya",28.09,30.75,500,"EG"],["Shahrisabz",39.06,66.83,499,"UZ"],["Douma",33.58,36.4,496,"SY"],["Skopje",42,21.43,494,"MK"],["Beni Suef",29.08,31.09,489,"EG"],["Tula",54.2,37.63,489,"RU"],["Bologna",44.5,11.34,488,"IT"],["Saharanpur",29.97,77.55,485,"IN"],["Mariupol",47.1,37.56,482,"UA"],["Homyel",52.43,31,481,"BY"],["Herat",34.33,62.17,481,"AF"],["Ostrava",49.83,18.25,479,"CZ"],["Yazd",31.92,54.37,478,"IR"],["Sialkote",32.52,74.56,477,"PK"],["Udaipur",24.6,73.73,470,"IN"],["İzmit",40.78,29.93,467,"TR"],["Piraeus",37.95,23.7,466,"GR"],["Qazvin",36.27,50,465,"IR"],["Pristina",42.67,21.17,465,"-99"],["Shymkent",42.32,69.6,465,"KZ"],["Malatya",38.37,38.3,462,"TR"],["Naberezhnyye Chelny",55.73,52.39,461,"RU"],["Hamah",35.15,36.73,461,"SY"],["Bandar-e-Abbas",27.2,56.27,461,"IR"],["Leicester",52.63,-1.13,458,"GB"],["Mazar-i-Sharif",36.7,67.1,458,"AF"],["Kirov",58.59,49.67,457,"RU"],["Sunderland",54.9,-1.38,453,"GB"],["Sfax",34.75,10.72,453,"TN"],["Luhansk",48.57,39.33,452,"UA"],["An Nasiriyah",31.04,46.27,452,"IQ"],["Qaraghandy",49.88,73.12,452,"KZ"],["Şanlıurfa",37.17,38.79,450,"TR"],["Belfast",54.59,-5.93,450,"GB"],["Chlef",36.17,1.32,449,"DZ"],["Cheboksary",56.13,47.25,447,"RU"],["Gent",51.03,3.7,444,"BE"],["Portsmouth",50.8,-1.08,442,"GB"],["Strasbourg",48.58,7.75,440,"FR"],["Nantes",47.21,-1.59,439,"FR"],["Khujand",40.29,69.62,438,"TJ"],["Khomeini Shahr",32.7,51.47,437,"IR"],["Kaliningrad",54.7,20.5,435,"RU"],["Bournemouth",50.73,-1.9,427,"GB"],["Heidelberg",49.42,8.7,427,"DE"],["Bryansk",53.26,34.43,427,"RU"],["Bratislava",48.15,17.12,424,"SK"],["Arak",25.28,3.75,423,"DZ"],["Erzurum",39.92,41.29,421,"TR"],["Ivanovo",57.01,41.01,421,"RU"],["Asyut",27.19,31.18,421,"EG"],["Sukkur",27.71,68.85,418,"PK"],["Middlesbrough",54.58,-1.23,416,"GB"],["Ardabil",38.25,48.3,415,"IR"],["Magnitogorsk",53.42,58.98,413,"RU"],["Al Ayn",24.23,55.74,409,"AE"],["Metz",49.12,6.18,409,"FR"],["Kursk",51.74,36.19,409,"RU"],["Oujda",34.69,-1.91,409,"MA"],["Hotan",37.1,79.93,409,"CN"],["Szczecin",53.42,14.53,408,"PL"],["Murcia",37.98,-1.13,407,"ES"],["Tanta",30.79,31,405,"EG"],["Sikar",27.61,75.14,400,"IN"],["Tver",56.86,35.89,400,"RU"],["Surgut",61.26,73.43,400,"RU"],["Buraydah",26.37,43.96,399,"SA"],["Khmelnytskyy",49.42,27,398,"UA"],["Eindhoven",51.43,5.5,398,"NL"],["Horlivka",48.3,38.05,397,"UA"],["Tallinn",59.43,24.73,394,"EE"],["Stoke",53,-2.18,391,"GB"],["Osh",40.54,72.79,391,"KG"],["Bhilwara",25.35,74.64,390,"IN"],["Grenoble",45.18,5.72,389,"FR"],["Coventry",52.4,-1.5,388,"GB"],["Brno",49.2,16.61,388,"CZ"],["Granada‎",37.16,-3.59,388,"ES"],["Qarshi",38.87,65.8,386,"UZ"],["Misrata",32.38,15.1,386,"LY"],["Hail",27.52,41.7,385,"SA"],["Béjaïa",36.76,5.07,385,"DZ"],["Southampton",50.9,-1.4,384,"GB"],["Nizhny Tagil",57.92,59.97,381,"RU"],["Vigo",42.22,-8.73,379,"ES"],["Sevastopol",44.6,33.52,379,"RU"],["Makiyivka",48.03,37.97,377,"UA"],["Karlsruhe",49,8.4,377,"DE"],["Kahramanmaraş",37.61,36.95,376,"TR"],["Palma",39.57,2.65,376,"ES"],["Kaunas",54.95,23.88,375,"LT"],["Khorramabad",33.48,48.35,375,"IR"],["Denizli",37.77,29.08,372,"TR"],["Van",38.5,43.4,372,"TR"],["La Coruña",43.33,-8.42,371,"ES"],["Reading",51.47,-0.98,370,"GB"],["Abadan",30.33,48.28,370,"IR"],["Al-Qatif",26.52,50.01,369,"SA"],["Mahilyow",53.9,30.32,369,"BY"],["Valletta",35.9,14.51,368,"MT"],["Bydgoszcz",53.12,18.01,366,"PL"],["Vladikavkaz",43.05,44.67,365,"RU"],["Larkana",27.56,68.21,364,"PK"],["Stavropol",45.05,41.98,363,"RU"],["Sheikhu Pura",31.72,73.99,361,"PK"],["Lublin",51.25,22.57,360,"PL"],["Augsburg",48.35,10.9,359,"DE"],["Ad Diwaniyah",31.99,44.92,358,"IQ"],["Simferopol",44.95,34.1,358,"RU"],["Toulon",43.13,5.92,358,"FR"],["Taraz",42.9,71.36,358,"KZ"],["Zanjan",36.67,48.5,357,"IR"],["San Sebastián",43.32,-1.98,357,"ES"],["Mirpur Khas",25.53,69.01,356,"PK"],["Rahim Yar Khan",28.42,70.3,353,"PK"],["Safi",32.32,-9.24,353,"MA"],["Vinnytsya",49.23,28.48,352,"UA"],["Muzaffarnagar",29.49,77.7,350,"IN"],["Qoqon",40.54,70.94,350,"UZ"],["Haarlem",52.38,4.63,350,"NL"],["Sanandaj",35.3,47.02,349,"IR"],["Linz",48.32,14.29,349,"AT"],["Verona",45.44,10.99,347,"IT"],["Nur-Sultan",51.18,71.43,346,"KZ"],["Al Amarah",31.84,47.15,345,"IQ"],["Charleroi",50.42,4.45,345,"BE"],["Belgorod",50.63,36.6,345,"RU"],["Kohat",33.6,71.43,343,"PK"],["Kurgan",55.46,65.34,343,"RU"],["Vitsyebsk",55.19,30.19,343,"BY"],["Jhang",31.28,72.32,341,"PK"],["Plovdiv",42.15,24.75,340,"BG"],["Kaluga",54.52,36.27,339,"RU"],["Gijón",43.53,-5.67,336,"ES"],["Orel",52.97,36.07,335,"RU"],["Bielefeld",52.03,8.53,332,"DE"],["Mathura",27.5,77.67,331,"IN"],["Patiala",30.32,76.38,329,"IN"],["Pavlodar",52.3,76.95,329,"KZ"],["Sagar",23.85,78.75,328,"IN"],["Sochi",43.59,39.73,328,"RU"],["Montpellier",43.61,3.87,327,"FR"],["Sousse",35.83,10.63,327,"TN"],["Iași",47.17,27.57,326,"RO"],["Birjand",32.88,59.22,325,"IR"],["Yoshkar Ola",56.64,47.87,324,"RU"],["Volzhskiy",48.79,44.77,323,"RU"],["Al Kut",32.49,45.83,322,"IQ"],["Valladolid",41.65,-4.75,322,"ES"],["Podolsk",55.38,37.53,321,"RU"],["Córdoba",37.88,-4.77,321,"ES"],["Smolensk",54.78,32.05,321,"RU"],["Kherson",46.63,32.6,320,"UA"],["Shahjahanpur",27.88,79.91,320,"IN"],["Vladimir",56.13,40.41,319,"RU"],["Bukhara",39.78,64.43,319,"UZ"],["Poltava",49.57,34.57,318,"UA"],["New Delhi",28.6,77.2,318,"IN"],["Rohtak",28.9,76.58,317,"IN"],["Hrodna",53.68,23.83,317,"BY"],["Cluj-Napoca",46.79,23.6,317,"RO"],["El Faiyum",29.31,30.84,317,"EG"],["Alicante",38.35,-0.48,316,"ES"],["Timișoara",45.76,21.22,315,"RO"],["Gdynia",54.52,18.53,315,"PL"],["Pescara",42.46,14.22,315,"IT"],["Dezful",32.38,48.47,315,"IR"],["Ljubljana",46.06,14.51,315,"SI"],["Koblenz",50.35,7.6,313,"DE"],["Varna",43.22,27.9,313,"BG"],["Aswan",24.09,32.9,313,"EG"],["Qurghonteppa",37.84,68.77,312,"TJ"],["Cherepovets",59.14,37.91,312,"RU"],["Galați",45.46,28.05,311,"RO"],["Brașov",45.65,25.61,311,"RO"],["Dayr az Zawr",35.33,40.13,309,"SY"],["Chernihiv",51.5,31.3,308,"UA"],["Nalchik",43.5,43.62,308,"RU"],["Ksar El Kebir",35.02,-5.91,307,"MA"],["Ratlam",23.35,75.03,307,"IN"],["Firozabad",27.15,78.39,306,"IN"],["Craiova",44.33,23.83,304,"RO"],["Kom Ombo",24.47,32.95,304,"EG"],["Chemnitz",50.83,12.92,303,"DE"],["Ganca",40.68,46.35,303,"AZ"],["Saransk",54.17,45.18,303,"RU"],["Constanța",44.2,28.61,303,"RO"],["Gujrat",32.58,74.08,302,"PK"],["Kingston upon Hull",53.75,-0.33,302,"GB"],["Batman",37.89,41.14,302,"TR"],["Qena",26.15,32.72,302,"EG"],["Tambov",52.73,41.43,301,"RU"],["Brest",52.1,23.7,301,"BY"],["Mardan",34.2,72.04,300,"PK"],["Qyzylorda",44.8,65.46,300,"KZ"],["Al Mubarraz",25.43,49.57,299,"SA"],["Dumyat",31.42,31.82,299,"EG"],["Baqubah",33.75,44.66,299,"IQ"],["Chernivtsi",48.31,25.92,298,"UA"],["Cherkasy",49.43,32.07,298,"UA"],["İskenderun",36.58,36.17,298,"TR"],["Al Kharj",24.16,47.31,298,"SA"],["Rampur",28.82,79.02,296,"IN"],["Ar Ramadi",33.42,43.3,295,"IQ"],["Vologda",59.21,39.92,295,"RU"],["Swansea",51.63,-3.95,294,"GB"],["Sumy",50.92,34.78,294,"UA"],["Panipat",29.4,76.97,293,"IN"],["Białystok",53.13,23.18,292,"PL"],["Cagliari",39.22,9.1,292,"IT"],["Kasur",31.13,74.46,291,"PK"],["Kassel",51.3,9.5,290,"DE"],["Bhuj",23.23,69.67,289,"IN"],["Sakarya",40.77,30.4,287,"TR"],["Zagazig",30.58,31.52,285,"EG"],["Alwar",27.55,76.6,283,"IN"],["Cádiz",36.52,-6.29,283,"ES"],["Zhytomyr",50.25,28.66,282,"UA"],["Gorgan",36.83,54.48,281,"IR"],["Batna",35.57,6.17,281,"DZ"],["Al Khalil",31.54,35.1,280,"PS"],["Rize",41.02,40.52,279,"TR"],["Taganrog",47.23,38.92,279,"RU"],["Sumqayt",40.58,49.63,279,"AZ"],["Kostroma",57.77,40.94,278,"RU"],["Pamplona",42.82,-1.65,275,"ES"],["Sétif",36.18,5.4,275,"DZ"],["Bern",46.92,7.47,275,"CH"],["Blackpool",53.83,-3.05,273,"GB"],["Elâzığ",38.68,39.23,271,"TR"],["Sari",36.55,53.1,271,"IR"],["Venice",45.44,12.33,271,"IT"],["Münster",51.97,7.62,270,"DE"],["Kiel",54.33,10.13,269,"DE"],["Nancy",48.68,6.2,269,"FR"],["Malmö",55.6,13.02,269,"SE"],["Yanbu al Bahr",24.09,38.05,268,"SA"],["Sterlitamak",53.63,55.96,267,"RU"],["Lausanne",46.53,6.65,266,"CH"],["Saint-Étienne",45.43,4.38,266,"FR"],["Petrozavodsk",61.78,34.36,265,"RU"],["Sivas",39.75,37.03,264,"TR"],["Tubruq",32.08,23.96,264,"LY"],["Graz",47.08,15.41,263,"AT"],["Az Aubayr",30.39,47.71,262,"IQ"],["Balıkesir",39.65,27.89,262,"TR"],["Aqtobe",50.28,57.17,262,"KZ"],["Konibodom",40.29,70.43,260,"TJ"],["Kondoz",36.73,68.87,260,"AF"],["Adapazarı",40.8,30.42,260,"TR"],["Tampere",61.5,23.75,259,"FI"],["Dzerzhinsk",56.25,43.46,257,"RU"],["Etawah",26.79,79.01,257,"IN"],["Rivne",50.62,26.25,255,"UA"],["Freiburg",48,7.87,255,"DE"],["Pathankot",32.27,75.72,254,"IN"],["Borujerd",33.92,48.8,252,"IR"],["Messina",38.2,15.55,252,"IT"],["Sonipat",29,77.02,251,"IN"],["Caserta",41.06,14.34,250,"IT"],["Como",45.81,9.08,250,"IT"],["Luzern",47.05,8.28,250,"CH"],["Kashan",33.98,51.58,250,"IR"],["Niš",43.33,21.9,250,"RS"],["Melun",48.53,2.67,249,"FR"],["Kirovohrad",48.5,32.26,249,"UA"],["Hafar al Batin",28.43,45.96,249,"SA"],["Jalal Abad",40.94,73,249,"KG"],["Miskolc",48.1,20.78,248,"HU"],["Kattaqorgon",39.9,66.26,247,"UZ"],["Plymouth",50.39,-4.16,247,"GB"],["Orsk",51.21,58.63,247,"RU"],["Rzeszów",50.03,22,246,"PL"],["Braunschweig",52.25,10.5,245,"DE"],["Ternopil",49.54,25.58,245,"UA"],["Nizhenvartovsk",60.93,76.58,245,"RU"],["Manisa",38.63,27.44,244,"TR"],["Hapur",28.74,77.76,243,"IN"],["Novorossiysk",44.73,37.77,242,"RU"],["Le Havre",49.5,0.1,242,"FR"],["Ivano-Frankivsk",48.93,24.71,241,"UA"],["Fürth",49.47,11,238,"DE"],["Seeb",23.68,58.18,238,"OM"],["Århus",56.16,10.21,238,"DK"],["Košice",48.73,21.25,237,"SK"],["Al Jubayl",27,49.65,237,"SA"],["Oostanay",53.22,63.63,237,"KZ"],["Sahiwal",30.67,73.11,236,"PK"],["Oviedo",43.35,-5.83,236,"ES"],["Luton",51.88,-0.42,236,"GB"],["Dera Ghazi Khan",30.06,70.64,236,"PK"],["Tours",47.38,0.7,236,"FR"],["Jizzax",40.1,67.83,235,"UZ"],["Lübeck",53.87,10.67,235,"DE"],["Türkmenabat",39.11,63.58,235,"TM"],["Nizhnekamsk",55.64,51.82,234,"RU"],["Zabol",31.02,61.48,234,"IR"],["Clermont-Ferrand",45.78,3.08,233,"FR"],["Kremenchuk",49.08,33.43,233,"UA"],["Ploiești",44.95,26.04,233,"RO"],["Al Fallujah",33.35,43.78,232,"IQ"],["Debrecen",47.53,21.63,231,"HU"],["Osnabrück",52.28,8.05,231,"DE"],["Syktyvkar",61.66,50.82,231,"RU"],["Nawabshah",26.25,68.4,230,"PK"],["Noginsk",55.87,38.48,230,"RU"],["Magdeburg",52.13,11.62,230,"DE"],["Tlimcen",34.89,-1.32,230,"DZ"],["Nukus",42.47,59.62,230,"UZ"],["Bharatpur",27.21,77.51,229,"IN"],["Er Rachidia",31.94,-4.45,228,"MA"],["Petropavlovsk",54.88,69.22,228,"KZ"],["Starsy Oskol",51.3,37.84,227,"RU"],["Kolpino",59.73,30.65,226,"RU"],["Sabzewar",36.22,57.63,226,"IR"],["Grozny",43.32,45.7,226,"RU"],["Vitoria",42.85,-2.67,225,"ES"],["Karnal",29.68,76.97,225,"IN"],["Novi Sad",45.25,19.85,225,"RS"],["Skikda",36.88,6.9,225,"DZ"],["Adıyaman",37.77,38.28,224,"TR"],["Okara",30.81,73.45,224,"PK"],["Nicosia",35.17,33.37,224,"CY"],["Neyshabur",36.22,58.82,222,"IR"],["Arar",30.99,41.02,222,"SA"],["Amol",36.47,52.36,222,"IR"],["Banja Luka",44.78,17.18,222,"BA"],["Shakhty",47.72,40.27,221,"RU"],["Babruysk",53.13,29.19,221,"BY"],["Gabès",33.9,10.1,220,"TN"],["Velikiy Novgorod",58.5,31.33,219,"RU"],["Baghlan",36.14,68.7,219,"AF"],["Potsdam",52.4,13.07,218,"DE"],["Denow",38.28,67.89,217,"UZ"],["Groningen",53.22,6.58,217,"NL"],["Gilgit",35.92,74.3,217,"PK"],["Rybinsk",58.05,38.82,217,"RU"],["Mallawi",27.73,30.84,217,"EG"],["Orléans",47.9,1.9,217,"FR"],["Kielce",50.89,20.66,216,"PL"],["Trieste",45.65,13.8,216,"IT"],["Nablus",32.22,35.25,216,"PS"],["Navoi",40.11,65.35,215,"UZ"],["Split",43.52,16.47,215,"HR"],["Mulhouse",47.75,7.35,215,"FR"],["Brăila",45.29,27.97,214,"RO"],["Oradea",47.05,21.92,214,"RO"],["Lutsk",50.75,25.33,214,"UA"],["Bergen",60.39,5.32,214,"NO"],["Kırıkkale",39.85,33.53,211,"TR"],["Pali",25.79,73.33,210,"IN"],["Oral",51.27,51.33,210,"KZ"],["Bojnurd",37.47,57.32,209,"IR"],["Santander",43.38,-3.8,209,"ES"],["Sidi bel Abbes",35.19,-0.64,209,"DZ"],["Rennes",48.1,-1.67,209,"FR"],["Beer Sheva",31.25,34.83,206,"IL"],["Salzburg",47.81,13.04,206,"AT"],["Erfurt",50.97,11.03,203,"DE"],["Pisa",43.72,10.4,203,"IT"],["Rostock",54.07,12.15,203,"DE"],["Khvoy",38.53,44.97,203,"IR"],["Lashkar Gah",31.58,64.36,202,"AF"],["Chiniot",31.72,72.98,202,"PK"],["Angren",41.03,70.15,202,"UZ"],["Al Khums",32.66,14.26,202,"LY"],["Taranto",40.51,17.23,202,"IT"],["Biskra",34.86,5.73,202,"DZ"],["Pskov",57.83,28.33,202,"RU"],["Cartagena",37.6,-0.98,201,"ES"],["Daşoguz",41.84,59.96,201,"TM"],["Bacău",46.58,26.92,200,"RO"],["Taza",34.22,-4.02,200,"MA"],["Armavir",45,41.13,200,"RU"],["Az Zawiyah",32.76,12.72,200,"LY"],["Bergamo",45.7,9.67,200,"IT"],["Rashid",31.46,30.39,200,"EG"],["Meymaneh",35.93,64.77,200,"AF"],["Balakovo",52.03,47.8,200,"RU"],["Bila Tserkva",49.77,30.13,199,"UA"],["Aydın",37.85,27.85,199,"TR"],["Bulandshahr",28.41,77.85,199,"IN"],["Gurgaon",28.45,77.02,197,"IN"],["Reims",49.25,4.03,197,"FR"],["Iskandar",41.55,69.68,196,"UZ"],["Engels",51.5,46.12,196,"RU"],["Gandhinagar",23.22,72.64,196,"IN"],["Burgas",42.51,27.47,196,"BG"],["Al Jahra",29.34,47.66,194,"KW"],["Oxford",51.75,-1.25,193,"GB"],["Klaipėda",55.72,21.12,192,"LT"],["Bhiwani",28.81,76.13,191,"IN"],["Norwich",52.63,1.3,191,"GB"],["Zlatoust",55.17,59.65,191,"RU"],["Sadiqabad",28.3,70.13,190,"PK"],["Caen",49.18,-0.35,190,"FR"],["Syzran",53.17,48.48,189,"RU"],["Aberdeen",57.15,-2.11,189,"GB"],["Cork",51.89,-8.47,189,"IE"],["Angers",47.48,-0.53,188,"FR"],["Szeged",46.25,20.15,188,"HU"],["Mostaganem",35.94,0.09,188,"DZ"],["Olsztyn",53.77,20.49,187,"PL"],["Gibraltar",36.13,-5.35,187,"GI"],["Marbella",36.52,-4.88,186,"ES"],["Pécs",46.08,18.22,186,"HU"],["Mainz",49.98,8.27,185,"DE"],["Kütahya",39.42,29.93,185,"TR"],["Kramatorsk",48.72,37.53,184,"UA"],["Kutaisi",42.25,42.73,184,"GE"],["Tiarat",35.38,1.32,184,"DZ"],["Ruse",43.85,25.97,184,"BG"],["Shibin el Kom",30.55,31.01,183,"EG"],["Mataró",41.54,2.45,183,"ES"],["Corum",40.52,34.95,183,"TR"],["Atyrau",47.11,51.92,183,"KZ"],["Kamensk Uralskiy",56.42,61.94,182,"RU"],["Sirsa",29.49,75.03,182,"IN"],["Tonk",26.15,75.79,182,"IN"],["Castello",39.97,-0.05,181,"ES"],["Reggio di Calabria",38.11,15.64,180,"IT"],["Varamin",35.32,51.65,180,"IR"],["El Jadida",33.26,-8.51,180,"MA"],["Balkh",36.75,66.9,180,"AF"],["Zuwara",32.93,12.08,180,"LY"],["Almería",36.83,-2.43,179,"ES"],["El Arish",31.12,33.8,179,"EG"],["Mary",37.6,61.83,179,"TM"],["Ar Raqqah",35.93,39.02,178,"SY"],["Termiz",37.23,67.27,178,"UZ"],["Nyíregyháza",47.97,21.72,177,"HU"],["Treviso",45.67,12.24,177,"IT"],["Malayer",34.32,48.85,177,"IR"],["El Oued",33.37,6.86,177,"DZ"],["Modena",44.65,10.92,176,"IT"],["Saveh",35.02,50.33,176,"IR"],["Turku",60.45,22.25,176,"FI"],["Ouargla",31.97,5.34,176,"DZ"],["Sirjan",29.47,55.73,175,"IR"],["As Samawah",31.31,45.28,175,"IQ"],["Saida",33.56,35.37,174,"LB"],["Simla",31.1,77.17,174,"IN"],["Ulm",48.4,10,173,"DE"],["Stavanger",58.97,5.68,173,"NO"],["Isparta",37.77,30.53,172,"TR"],["Tébessa",35.41,8.12,172,"DZ"],["Prizren",42.23,20.75,171,"-99"],["Rijeka",45.33,14.45,171,"HR"],["Kragujevac",44.02,20.92,171,"RS"],["Pitești",44.86,24.88,171,"RO"],["Temirtau",50.07,72.96,171,"KZ"],["Djelfa",34.68,3.25,171,"DZ"],["Burgos",42.35,-3.68,170,"ES"],["Al Marj",32.5,20.83,170,"LY"],["Nîmes",43.83,4.35,170,"FR"],["Dijon",47.33,5.03,170,"FR"],["Čačak",43.89,20.33,170,"RS"],["Arad",46.17,21.32,169,"RO"],["Baranavichy",53.14,26.01,169,"BY"],["Würzburg",49.8,9.95,169,"DE"],["Bandar-e Bushehr",28.92,50.83,169,"IR"],["Chirchiq",41.45,69.56,168,"UZ"],["Miass",55,60.09,168,"RU"],["Baramula",34.2,74.35,168,"IN"],["Volgodonsk",47.51,42.16,168,"RU"],["Berezniki",59.42,56.76,168,"RU"],["Benha",30.47,31.18,167,"EG"],["Novocherkassk",47.42,40.08,167,"RU"],["Oldenburg",53.13,8.22,167,"DE"],["Parma",44.81,10.32,166,"IT"],["Elbasan",41.12,20.08,165,"AL"],["Hawalli",29.33,48,164,"KW"],["Zenica",44.22,17.92,164,"BA"],["Pizen",49.74,13.36,164,"CZ"],["Regensburg",49.02,12.12,164,"DE"],["Tartus",34.88,35.89,163,"SY"],["Lecce",40.36,18.15,163,"IT"],["Ingolstadt",48.77,11.45,163,"DE"],["Mostar",43.35,17.82,163,"BA"],["Patra",38.23,21.73,163,"GR"],["Ash Shatrah",31.42,46.18,162,"IQ"],["Budaun",28.03,79.09,162,"IN"],["Salamanca",40.97,-5.67,162,"ES"],["Settat",33.01,-7.62,162,"MA"],["Mahabad",36.77,45.72,162,"IR"],["Ras al Khaymah",25.79,55.94,161,"AE"],["Salavat",53.37,55.93,160,"RU"],["Gonbad-e Kavus",37.25,55.17,160,"IR"],["Samarra",34.19,43.88,159,"IQ"],["Zarzis",33.51,11.1,159,"TN"],["York",53.95,-1.07,159,"GB"],["Maykop",44.61,40.12,158,"RU"],["Hoshiarpur",31.52,75.98,158,"IN"],["Albacete",39,-1.87,158,"ES"],["Melitopol",46.84,35.38,158,"UA"],["Odense",55.4,10.38,158,"DK"],["Uroteppa",39.92,69,157,"TJ"],["Afyon",38.75,30.55,157,"TR"],["Zonguldak",41.43,31.78,157,"TR"],["Tiraspol",46.85,29.64,157,"MD"],["Rustavi",41.57,45.05,157,"GE"],["Kashmar",35.18,58.45,157,"IR"],["Hurghada",27.23,33.83,157,"EG"],["Sibiu",45.8,24.14,156,"RO"],["Livorno",43.55,10.3,156,"IT"],["Shkodër",42.07,19.52,156,"AL"],["Batumi",41.6,41.63,156,"GE"],["Antakya",36.23,36.12,155,"TR"],["Ordu",41,37.87,155,"TR"],["Foggia",41.46,15.56,155,"IT"],["Innsbruck",47.28,11.41,155,"AT"],["Barysaw",54.23,28.49,155,"BY"],["Masjed Soleyman",31.98,49.3,154,"IR"],["Kovrov",56.36,41.33,154,"RU"],["Lemosos",34.68,33.03,154,"CY"],["Nusaybin",37.07,41.22,153,"TR"],["Uşak",38.68,29.42,153,"TR"],["Ilam",33.63,46.43,153,"IR"],["Novokuybishevsk",53.12,49.92,152,"RU"],["Kerch",45.37,36.49,152,"RU"],["Dundee",56.47,-3,152,"GB"],["Samalut",28.3,30.71,152,"EG"],["Limoges",45.83,1.25,152,"FR"],["Uzhgorod",48.63,22.25,151,"UA"],["Bălți",47.76,27.91,151,"MD"],["Nazareth",32.7,35.3,151,"IL"],["Maragheh",37.42,46.22,151,"IR"],["Suhar",24.36,56.73,151,"OM"],["M'sila",35.7,4.55,150,"DZ"],["Urgentch",41.56,60.64,150,"UZ"],["Podgorica",42.47,19.27,146,"ME"],["Luxembourg",49.61,6.13,107,"LU"],["Andorra",42.51,1.53,54,"AD"],["Vaduz",47.13,9.52,36,"LI"],["Monaco",43.74,7.41,36,"MC"],["San Marino",43.94,12.44,30,"SM"],["Ganja",40.68,46.36,330,"AZ"],["Sumqayit",40.59,49.67,350,"AZ"],["Shaki",41.19,47.17,65,"AZ"],["Lankaran",38.75,48.85,85,"AZ"],["Nakhchivan",39.21,45.41,90,"AZ"],["Derbent",42.06,48.29,125,"RU"],["Nazran",43.23,44.77,120,"RU"],["Cherkessk",44.22,42.06,125,"RU"],["Elista",46.31,44.27,105,"RU"],["Urgench",41.55,60.63,140,"UZ"],["Termez",37.22,67.28,150,"UZ"],["Türkmenbaşy",40.02,52.97,90,"TM"],["Karakol",42.49,78.39,70,"KG"],["Naryn",41.43,75.99,40,"KG"],["Astana",51.17,71.43,1300,"KZ"],["Karaganda",49.8,73.1,500,"KZ"],["Aktobe",50.28,57.21,500,"KZ"],["Aktau",43.65,51.15,200,"KZ"],["Kostanay",53.21,63.62,250,"KZ"],["Semey",50.43,80.27,340,"KZ"],["Oskemen",49.95,82.6,330,"KZ"],["Kyzylorda",44.85,65.51,240,"KZ"],["Turkistan",43.3,68.25,190,"KZ"],["Petropavl",54.87,69.15,220,"KZ"],["Kunduz",36.73,68.87,370,"AF"],["Urumqi",43.83,87.62,4000,"CN"],["Ghulja",43.91,81.32,600,"CN"],["Altay",47.85,88.13,200,"CN"],["Ulaanbaatar",47.92,106.92,1600,"MN"],["Ölgii",48.97,89.96,35,"MN"],["Khovd",48,91.64,30,"MN"],["Mörön",49.64,100.16,40,"MN"],["Ulaangom",49.98,92.07,30,"MN"],["Choibalsan",48.07,114.5,40,"MN"],["Darkhan",49.49,105.92,75,"MN"],["Saint Petersburg",59.93,30.34,5600,"RU"],["Naberezhnye Chelny",55.74,52.41,530,"RU"],["Yoshkar-Ola",56.63,47.89,280,"RU"],["Ukhta",63.56,53.68,100,"RU"],["Vorkuta",67.5,64.03,70,"RU"],["Kudymkar",59.01,54.66,30,"RU"],["Novosibirsk",55.03,82.92,1600,"RU"],["Tomsk",56.5,84.97,570,"RU"],["Krasnoyarsk",56.01,92.85,1100,"RU"],["Khanty-Mansiysk",61,69,100,"RU"],["Nizhnevartovsk",60.94,76.56,280,"RU"],["Salekhard",66.53,66.6,50,"RU"],["Novy Urengoy",66.08,76.63,110,"RU"],["Naryan-Mar",67.64,53.01,25,"RU"],["Arkhangelsk",64.54,40.54,350,"RU"],["Dudinka",69.4,86.18,20,"RU"],["Norilsk",69.35,88.2,180,"RU"],["Khatanga",71.98,102.47,3,"RU"],["Yakutsk",62.03,129.73,350,"RU"],["Mirny",62.54,113.96,35,"RU"],["Neryungri",56.66,124.72,57,"RU"],["Tiksi",71.64,128.87,5,"RU"],["Verkhoyansk",67.55,133.4,1,"RU"],["Kyzyl",51.72,94.45,115,"RU"],["Abakan",53.72,91.43,185,"RU"],["Ulan-Ude",51.83,107.61,440,"RU"],["Irkutsk",52.29,104.3,620,"RU"],["Chita",52.03,113.5,350,"RU"],["Gorno-Altaysk",51.96,85.96,60,"RU"],["Khabarovsk",48.48,135.08,610,"RU"],["Magadan",59.56,150.8,90,"RU"],["Oulu",65.01,25.47,210,"FI"],["Rovaniemi",66.5,25.72,65,"FI"],["Ivalo",68.66,27.54,3,"FI"],["Utsjoki",69.9,27,1,"NO"],["Tromsø",69.65,18.96,77,"NO"],["Alta",69.97,23.27,21,"NO"],["Karasjok",69.47,25.51,3,"NO"],["Kautokeino",69,23.04,3,"NO"],["Kirkenes",69.73,30.05,3,"NO"],["Bodø",67.28,14.4,53,"NO"],["Narvik",68.44,17.43,14,"NO"],["Trondheim",63.43,10.4,210,"NO"],["Røros",62.57,11.39,6,"NO"],["Kiruna",67.86,20.23,23,"SE"],["Jokkmokk",66.6,19.83,3,"SE"],["Luleå",65.58,22.15,78,"SE"],["Umeå",63.83,20.26,130,"SE"],["Östersund",63.18,14.64,64,"SE"],["Murmansk",68.97,33.09,270,"RU"],["Lovozero",68,35,3,"RU"],["Olonets",60.98,32.97,8,"RU"],["Sortavala",61.7,30.7,18,"RU"],["Tartu",58.38,26.72,95,"EE"],["Pärnu",58.38,24.5,52,"EE"],["Ventspils",57.39,21.56,33,"LV"],["Győr",47.69,17.63,130,"HU"],["Târgu Mureș",46.54,24.56,135,"RO"],["Miercurea Ciuc",46.36,25.8,38,"RO"],["Satu Mare",47.79,22.88,100,"RO"],["Subotica",46.1,19.67,100,"RS"],["Uzhhorod",48.62,22.3,115,"UA"],["Bakhchysarai",44.75,33.86,26,"RU"]];
function Xf(e){let t={en:{dia:"Also spoken",
home:"home region",
find:"Find a language or family",
clear:"Clear",
fams:"Families",
langs:"Languages",
none:"No match"},
sr:{dia:"Govori se i",
home:"matična oblast",
find:"Pronađi jezik ili porodicu",
clear:"Obriši",
fams:"Porodice",
langs:"Jezici",
none:"Nema rezultata"},
sq:{dia:"Flitet edhe",
home:"trevë amtare",
find:"Gjej gjuhë ose familje",
clear:"Pastro",
fams:"Familje",
langs:"Gjuhë",
none:"Asnjë rezultat"}};
return ka((t[ya()]||t.en)[e])}
function ep(e){e&&e.info;
return!1}
function tp(e){let t=e.filter(ep).length;
return t&&e.every(e=>e.info&&e.info.lat>40&&e.info.lat<44.6&&e.info.lon>42&&e.info.lon<50.2)?t/e.length>=.8?"Dagestan":"Caucasus":""}
var np={family:["mother","father","brother"],
cattle:["horse","cow","dog"],
nature:["water","fire","stone"],
body:["head","hand","heart"],
food:["bread","milk","salt"],
home:["house","door","knife"],
time:["day","night","year"],
belief:["God","song","money","boat"]};
function rp(e){let t=[];
return(np[e]||[]).forEach(e=>{ha[e]&&t.length<3&&t.push(La(e))}),
t.length>=3||(t=[],ra[e].forEach(e=>e[1].forEach(e=>{ha[e]&&ha[e].length>=8&&t.length<3&&t.push(La(e))}))),
t.join(" · ")}
function ap({x:e,q:t=""}){let n=ai(e.e);
return(0,f.jsxs)("button",{type:"button",className:"kt rt",onClick:()=>{Qa(mi.q||""),Ja(hi(e.L,e.e))},children:[(0,f.jsx)("span",{className:"kn",children:(0,f.jsx)(di,{s:Ta(e.e.meaning),q:t})}),(0,f.jsxs)("span",{className:"kb",children:[(0,f.jsx)("span",{className:"kw",children:(0,f.jsx)(di,{s:e.e.word,q:t})}),n?(0,f.jsx)("span",{className:"kpr pr",children:(0,f.jsx)(di,{s:n,q:t})}):null,(0,f.jsxs)("span",{className:"kl",children:[(0,f.jsx)("i",{className:"dot "+e.L.family}),Na(e.L)]})]})]})}
let ip=null,
sp=0;
function op(){return ip||(ip=Promise.resolve(null))}
let lp={c:new Set,
w:new Set,
u:null},
up={f:1};
function cp(e){return String(e).toLowerCase().replace(/[\s\u0301-]/g,"")}
function dp(e,t){let n=97*Math.random()|0,
r={},
a=new Set,
i=[],
s=(s,o)=>{let l=ha[e].filter(e=>(!s||e.L.family===s)&&(e=>{let n=cp(e.e.word);
return!r[e.L.id]&&Va(e.e.word)&&!t.w.has(n)&&!a.has(n)&&!lp.w.has(n)})(e)).sort((e,t)=>e.e.word.length-t.e.word.length);
if(!l.length)return;
let u=l[(n+o)%Math.min(l.length,5)];
r[u.L.id]=1,
a.add(cp(u.e.word)),
i.push(u)};
["Slavic","Romance","Caucasian","Turkic","Iranian","Uralic","Greek","Albanian","Mongolic","Slavic"].forEach((e,t)=>{i.length<10&&s(e,t)});
for(let e=0;i.length<10&&e<12;e++){let t=i.length;
if(s(null,e),i.length===t)break}
return i}
function hp(){let e=lp.u||{c:new Set,
w:new Set},
t=Object.keys(ia).filter(e=>"paper"!==e&&new Set(ha[e].map(e=>e.L.lang)).size>=40);
if(!t.length)return null;
let n=t.filter(t=>!e.c.has(t)&&!lp.c.has(t));
n.length<3&&(lp.c.clear(),n=t.filter(t=>!e.c.has(t))),
n.length||(n=t);
let r="";
try{r=localStorage.getItem("khl-spot")||""}catch{}
n=n.filter(e=>e!==r).concat(n.length>1?[]:n);
for(let e=n.length-1;e>0;e--){let t=Math.random()*(e+1)|0;
[n[e],n[t]]=[n[t],n[e]]}
let a=null,
i=null;
for(let t=0;t<n.length&&t<12;t++){let r=dp(n[t],e);
if((!a||r.length>a.length)&&(a=r,i=n[t]),r.length>=9)break}
if(!a||a.length<2)return null;
lp.c.add(i);
try{localStorage.setItem("khl-spot",i)}catch{}
return a.forEach(e=>lp.w.add(cp(e.e.word))),
{c:i,
sl:a}}
function fp({ui:e}){let t=ja(),
[n,r]=(0,m.useState)(mi.q),
a=(0,m.useRef)(null),
i=(0,m.useMemo)(()=>(Ef=97*Math.random()|0,up.f=1,lp.u={c:new Set,w:new Set},aa.map((e,t)=>function(e,t){let n=[];
if(ra[e].forEach(e=>e[1].forEach(e=>{ha[e]&&ha[e].length>=8&&e.length<=16&&n.push(e)})),!n.length)return[];
let r=Ef,a=[],i=new Set,s=zf[e]&&n.indexOf(zf[e])>-1?n.indexOf(zf[e]):0;
for(let e=0;a.length<4&&e<2*n.length;e++){let o=0===e?n[s]:n[(s+(r+7*t)*(e+3)+11*e)%n.length];
if(i.has(o)||lp.u.c.has(o))continue;
let l=Nf[(t+a.length+r)%4],u=e=>Va(e.e.word)&&e.e.word.length<=7&&!lp.u.w.has(cp(e.e.word)),c=ha[o].filter(e=>e.L.family===l&&u(e));
c.length||(c=ha[o].filter(u)),c.length&&(i.add(o),lp.u.c.add(o),a.push({...c[(r+3*t+e)%c.length],c:o}),lp.u.w.add(cp(a[a.length-1].e.word)))}
return a}(e,t))),[]),
[s,o]=(0,m.useState)(()=>hp());
(0,m.useEffect)(()=>{mi.q=n},[n]),
(0,m.useEffect)(()=>{let e;
do{e=xf[Math.random()*xf.length|0]}while(e===jf);
jf=e},[]),
(0,m.useEffect)(()=>{if(!n&&a.current)return function(e){qf(e);
let t=()=>qf(e);
window.addEventListener("resize",t);
try{document.fonts.ready.then(t)}catch{}
let n=[];
e.querySelectorAll(up.f?".stage .sl.on .sw,.ct .cs.on .cx":".stage .sl.on .sw").forEach((e,t)=>n.push(setTimeout(()=>Sf(e),90*t))),up.f=0;
let r=null,a=null;
!Ya()&&e.querySelector(".ct .cs")&&(r=setInterval(()=>{document.hidden||e.querySelectorAll(".ct").forEach((e,t)=>{let r=e.querySelectorAll(".cs");
if(r.length<2)return;
let a=0;
r.forEach((e,t)=>{e.classList.contains("on")&&(a=t)});
let i=(a+1)%r.length;
n.push(setTimeout(()=>{let t=e.querySelectorAll(".cm");
r[a].classList.remove("on"),r[i].classList.add("on"),t.length===r.length&&(t[a].classList.remove("on"),t[i].classList.add("on")),e.classList.remove("flip"),e.offsetWidth,e.classList.add("flip"),Sf(r[i].querySelector(".cx"))},220*t))})},4200));
let i=e.querySelector(".stage");
if(i&&!Ya()){let t=i.querySelectorAll(".sl"),n=e.querySelectorAll(".ticks i");
t.length>1&&(a=setInterval(()=>{if(document.hidden)return;
let e=0;
t.forEach((t,n)=>{t.classList.contains("on")&&(e=n)}),t.forEach(e=>e.classList.remove("on")),n.forEach(e=>e.classList.remove("on")),e=(e+1)%t.length,0===e&&o(e=>hp()||e),t[e].classList.add("on"),n[e]&&n[e].classList.add("on"),Sf(t[e].querySelector(".sw"))},3600))}
return()=>{window.removeEventListener("resize",t),clearInterval(r),clearInterval(a),n.forEach(clearTimeout)}}(a.current)},[n,e,s]);
let l=!!n.trim();
return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{id:"heroSlot",children:(0,f.jsxs)("div",{className:"wrap",ref:a,children:[(0,f.jsx)(ui,{id:"q",value:n,onChange:e=>{mi.n=120,r(e)},ph:t.ph.all,recent:!0,autoFocus:mi.focusSearch&&(mi.focusSearch=!1,!0)}),!l&&s&&(0,f.jsxs)("section",{className:"spec",style:{"--i":0},children:[(0,f.jsx)("div",{className:"spec-h",children:(0,f.jsx)("p",{className:"spec-c",children:La(s.c)})}),(0,f.jsxs)("div",{className:"spec-p",children:[(0,f.jsx)("button",{type:"button",className:"stage","aria-label":t.seeAll+": "+La(s.c),onClick:e=>li({currentTarget:e.currentTarget.closest(".spec")},"m-"+oa(s.c)),children:s.sl.map((e,t)=>(0,f.jsxs)("span",{className:"sl"+(t?"":" on"),children:[(0,f.jsx)("span",{className:"sw",children:e.e.word}),(0,f.jsx)("span",{className:"st pr",children:ai(e.e)||" "}),(0,f.jsxs)("span",{className:"sn",children:[(0,f.jsx)("i",{className:"dot "+e.L.family}),Na(e.L)," · ",Ma(e.L)]})]},s.c+e.L.id))}),(0,f.jsx)("div",{className:"ticks","aria-hidden":"true",children:s.sl.map((e,t)=>(0,f.jsx)("i",{className:t?"":"on"},s.c+t))}),(0,f.jsx)("svg",{className:"ridge",viewBox:"0 0 400 36",preserveAspectRatio:"none","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M0 18L400 18"})})]})]}),!l&&(0,f.jsxs)("div",{className:"ct-grid",children:[aa.map((e,n)=>(0,f.jsxs)("div",{className:"ctw","data-k":e,style:{"--i":n+3},children:[(0,f.jsxs)("button",{type:"button",className:"ct ctm","aria-label":t.cat[e],onClick:t=>li(t,"c-"+e),children:[(0,f.jsx)("span",{className:"cn",children:[(0,f.jsx)("span",{className:"ck",children:t.cat[e]},"k"),(0,f.jsx)("span",{className:"cms",children:i[n].map((e,t)=>(0,f.jsx)("span",{className:"cm"+(t?"":" on"),children:La(e.c)},e.c))},"m")]}),(0,f.jsx)("span",{className:"cw",children:i[n].map((e,t)=>(0,f.jsxs)("span",{className:"cs"+(t?"":" on"),children:[(0,f.jsx)("span",{className:"cx",children:e.e.word}),(0,f.jsx)("span",{className:"cpr pr",children:ai(e.e)||" "}),(0,f.jsxs)("span",{className:"cl",children:[(0,f.jsx)("i",{className:"dot "+e.L.family}),Na(e.L)]})]},e.L.id+e.c))})]})]},e)),(0,f.jsxs)("button",{type:"button",className:"ct ctz",style:{"--i":10},onClick:e=>li(e,"az"),children:[(0,f.jsx)("span",{className:"cn",children:"A–Z"}),(0,f.jsx)("span",{className:"cw",children:[["А–Я","Russian","Slavic"],["Α–Ω","Greek","Greek"],["ا–ی","Persian","Iranian"],["ა–ჰ","Georgian","Caucasian"],["A–Z","French","Romance"],["A–Ö","Finnish","Uralic"]].map((e,t)=>(0,f.jsxs)("span",{className:"cs"+(t?"":" on"),children:[(0,f.jsx)("span",{className:"cx",children:e[0]}),(0,f.jsxs)("span",{className:"cl",children:[(0,f.jsx)("i",{className:"dot "+e[2]}),e[1]]})]},e[0]))})]})]})]})}),(0,f.jsx)("div",{className:"wrap",children:(0,f.jsx)("main",{id:"app",children:l?(0,f.jsx)(mp,{q:n.trim()}):(0,f.jsx)(pp,{onPick:e=>r(e)})})})]})}
function pp({onPick:e}){let t=ja(),
n=Za();
return n.length?(0,f.jsxs)("div",{className:"pre",children:[(0,f.jsx)("p",{className:"ph",children:t.recent}),(0,f.jsx)("div",{className:"chipsc",children:n.map(t=>(0,f.jsxs)("button",{type:"button",className:"qchip",onClick:()=>e(t),children:[(0,f.jsx)("span",{className:"icn",dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'}}),t]},t))})]}):null}
function mp({q:e}){return(0,f.jsx)(Yh,{q:e})}
function gp({cat:e}){let t=ja(),
n=(0,m.useRef)(null),
r=(0,m.useMemo)(()=>997*Math.random()|0,[e]);
(0,m.useEffect)(()=>{let e=n.current?.querySelector(".lt.on");
e?.scrollIntoView({inline:"center",block:"nearest"})},[e]);
let a=0;
return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{id:"heroSlot",children:(0,f.jsxs)("div",{className:"wrap",children:[(0,f.jsxs)("section",{className:"chero",children:[(0,f.jsx)("h2",{children:t.cat[e]}),(0,f.jsx)("span",{className:"orn","aria-hidden":"true"})]}),(0,f.jsx)("div",{className:"cswitch",role:"tablist",ref:n,children:aa.map(n=>(0,f.jsx)("button",{type:"button",role:"tab","aria-selected":n===e,className:"lt"+(n===e?" on":""),onClick:()=>n!==e&&function(e){mi.cat=e;
try{localStorage.setItem("khl-cat",e)}catch{}
history.replaceState(null,"","#c-"+e),window.dispatchEvent(new HashChangeEvent("hashchange"))}(n),children:t.cat[n]},n))})]})}),(0,f.jsx)("div",{className:"wrap",children:(0,f.jsx)("main",{id:"app",className:"view",children:ra[e].map(e=>{var t;
let n=e[1].filter(e=>ha[e].length);
return n.length?(0,f.jsxs)("section",{className:"kgrp",children:[(0,f.jsx)("p",{className:"gh kgh",children:(t=e[0],"en"!==ya()&&Qr[t]?ka(Qr[t][ya()]||t):t)}),(0,f.jsx)("div",{className:"kgrid",children:n.map(e=>{let t=function(e,t){let n=ha[e].filter(e=>Va(e.e.word)&&e.e.word.length<=9),r=n.length?n:ha[e],a=t;
for(let t=0;t<e.length;t++)a=(31*a+e.charCodeAt(t))%9973;
return r[a%r.length]}(e,r);
return a++,(0,f.jsxs)("button",{type:"button",className:"kt",style:{"--i":Math.min(a,14)},onClick:t=>li(t,"m-"+oa(e)),children:[(0,f.jsx)("span",{className:"kn",children:La(e)}),(0,f.jsx)("span",{className:"kb",children:t?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"kw",children:t.e.word}),ai(t.e)?(0,f.jsx)("span",{className:"kpr pr",children:ai(t.e)}):null,(0,f.jsxs)("span",{className:"kl",children:[(0,f.jsx)("i",{className:"dot "+t.L.family}),Na(t.L)]})]}):null})]},e)})})]},e[0]):null})})})]})}
function vp({r:e}){return(0,f.jsxs)("button",{type:"button",className:"wr","data-l":e.L.id,onClick:()=>Ja(e.h?hi(e.L,e.h):e.L.id),children:[(0,f.jsxs)("span",{className:"wk",children:[(0,f.jsx)("i",{className:"dot "+e.L.family}),Na(e.L)]}),(0,f.jsxs)("span",{className:"wv",children:[(0,f.jsx)("b",{children:e.w.join(", ")}),e.l.length?(0,f.jsx)("small",{className:"pr",children:e.l.join(", ")}):null]})]})}
function bp({prev:e,next:t}){return(0,f.jsxs)("div",{className:"pn",children:[(0,f.jsxs)("button",{type:"button",disabled:!e,onClick:()=>e&&Ja(e[0]),children:["‹ ",e?e[1]:""]}),(0,f.jsxs)("button",{type:"button",disabled:!t,onClick:()=>t&&Ja(t[0]),children:[t?t[1]:""," ›"]})]})}
function yp({c:e}){let t=ja(),
n=ha[e],
[r,a]=(0,m.useState)(mi.fam);
(0,m.useEffect)(()=>{let e=mi.hl;
if(!e)return;
mi.hl="";
let t=setTimeout(()=>{let t=document.querySelector('.wr[data-l="'+e+'"]');
t&&(t.scrollIntoView({block:"center"}),t.classList.add("hlrow"))},60);
return()=>clearTimeout(t)},[e]);
let i={};
n.forEach(e=>{(i[e.L.family]=i[e.L.family]||new Set).add(e.L.id)});
let s="all"===r||i[r]?r:"all",
o=(0,m.useMemo)(()=>{let e,t,r,a,i;
return e=n.filter(e=>"all"===s||e.L.family===s).map(e=>({x:e,k:Fa(e.e.lat||e.e.word)})),t={},e.forEach(e=>{t[e.k]=(t[e.k]||0)+1}),e.sort((e,n)=>t[n.k]-t[e.k]||(e.k<n.k?-1:+(e.k>n.k))),r=[],e.forEach(e=>{let t=null;
if(e.k)for(let n=0;n<r.length;n++)if(r[n].k&&Ka(r[n].k,e.k)){t=r[n];
break}
t||(t={k:e.k,m:[]},r.push(t)),t.m.push(e.x)}),r.forEach(e=>{e.n=new Set(e.m.map(e=>e.L.id)).size;
let t=e.m.filter(t=>Fa(t.e.lat||t.e.word)===e.k)[0]||e.m[0];
e.label=String(t.e.lat||t.e.word).split(/[,;(]/)[0].trim(),e.m.sort((e,t)=>Na(e.L).localeCompare(Na(t.L),Ia()))}),a=r.filter(e=>e.n>1).sort((e,t)=>t.n-e.n),i=[],r.filter(e=>e.n<=1).forEach(e=>{i=i.concat(e.m)}),i.sort((e,t)=>Na(e.L).localeCompare(Na(t.L),Ia())),{multi:a,single:i}},[e,s,t]),
l=[];
ra[ia[e]].forEach(e=>e[1].forEach(e=>{ha[e].length&&l.push(e)}));
let u=l.indexOf(e),
c=new Set;
return n.forEach(e=>e.e.src.forEach(e=>c.add(e))),
(0,f.jsxs)("div",{className:"view",children:[(0,f.jsxs)("div",{className:"head",children:[(0,f.jsx)("h2",{children:La(e)}),(0,f.jsx)(oi,{})]}),(0,f.jsx)(ci,{list:"m-"+oa(e),map:"mm-"+oa(e),isMap:!1}),(0,f.jsxs)("div",{className:"fams",children:[(0,f.jsx)("button",{type:"button","aria-pressed":"all"===s,onClick:()=>{mi.fam="all",a("all")},children:t.allF}),la.filter(e=>i[e]).map(e=>(0,f.jsxs)("button",{type:"button","aria-pressed":s===e,onClick:()=>{mi.fam=e,a(e)},children:[(0,f.jsx)("i",{className:"dot "+e}),Ca(e)]},e))]}),(0,f.jsxs)("div",{children:[o.multi.map((e,t)=>{let n={};
return e.m.forEach(e=>{n[e.L.family]=1}),(0,f.jsxs)("section",{className:"fg",children:[(0,f.jsxs)("header",{children:[(0,f.jsx)("b",{children:e.label}),(0,f.jsx)("span",{className:"fdots",children:Object.keys(n).map(e=>(0,f.jsx)("i",{className:"dot "+e},e))})]}),Wa(e.m).map(e=>(0,f.jsx)(vp,{r:e},e.L.id))]},t)}),o.single.length?(0,f.jsxs)("section",{className:"fg",children:[(0,f.jsx)("header",{children:(0,f.jsx)("b",{className:"un",children:t.unique})}),Wa(o.single).map(e=>(0,f.jsx)(vp,{r:e},e.L.id))]}):null]}),(0,f.jsx)(bp,{prev:u>0?["m-"+oa(l[u-1]),La(l[u-1])]:null,next:u<l.length-1?["m-"+oa(l[u+1]),La(l[u+1])]:null}),(0,f.jsxs)("p",{className:"note",children:[t.sources,": ",Array.from(c).join(" · ")]})]})}
