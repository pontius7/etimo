function kp({L:e,onCat:t,d:FDd}){let n=ja(),
r=e.info||{},
[a,i]=(0,m.useState)("all"),
[s,o]=(0,m.useState)(mi.wqL===e.id?mi.wq:""),
l=(0,m.useRef)(null);
(0,m.useEffect)(()=>{mi.wq=s,mi.wqL=e.id},[s,e.id]),
(0,m.useEffect)(()=>{i("all"),mi.cat="all"},[e.id]),
(0,m.useEffect)(()=>{l.current&&wf(l.current,e)},[e.id]);
let u="all"===a?e.entries:e.entries.filter(e=>e.cats[a]),
c=Da(s.trim()),
FQ=FDq(s),
d=c?u.filter(e=>Da(e.word+" "+(e.lat||"")+" "+e.meaning+" "+Ta(e.meaning)).indexOf(c)>-1||FDcoreMatch(e,FQ)):u,
h=ua.slice().sort((e,t)=>Na(e).localeCompare(Na(t),Ia())),
p=h.indexOf(e),
g=r.sp,
v=(r.path||[]).map(e=>Pa(e)),
b=new Set;
u.forEach(e=>e.src.forEach(e=>b.add(e)));
let y=Array.from(b).concat(g?[("Unicode CLDR estimate"===g.src?"Unicode CLDR ("+n.estimate+")":za(g.src))+(g.y?" "+g.y:"")]:[]).concat(["Glottolog"]).concat(r.an?[n.anL+": "+za(r.anSrc)]:[]);
return(0,f.jsxs)("div",{className:"view lview",style:window.__hdv?window.__hdv(e):void 0,children:[(0,f.jsxs)("div",{className:"head",children:[(0,f.jsxs)("span",{className:"pill",children:[(0,f.jsx)("span",{className:"dot "+e.family}),Ca(e.family)]}),(0,f.jsx)("h2",{children:Na(e)}),(0,f.jsx)(oi,{}),r.an?(0,f.jsx)("p",{className:"anb",lang:"",children:r.an}):null,(0,f.jsxs)("div",{className:"meta",children:[(0,f.jsx)("span",{children:(0,f.jsx)("b",{children:Ma(e)})}),g?(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:za(g.v)})," ",n.spk]}):null,r.lv?(0,f.jsx)("span",{children:Aa(r.lv)}):null]}),null,(()=>{let C=(r.cen||[]).map(e=>({k:e[0],t:" · "+za(e[1])+" · "+e[2]+", "+za(e[3])})),D=window.__diaOf?window.__diaOf(e.lang):null;
D&&Object.keys(D).forEach(k=>{C.some(c=>c.k===k)||C.push({k:k,t:""})});
return C.length?(0,f.jsx)("div",{className:"cenl",children:C.map((c,t)=>(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:window.__cnm?window.__cnm(c.k,za):za(c.k)}),c.t,D&&D[c.k]?(0,f.jsx)("span",{className:"cdia",children:D[c.k].map(d=>(0,f.jsxs)("span",{className:"cdi",children:[(0,f.jsx)("i",{style:{background:d[1]}}),d[0]]},d[0]))}):null]},t))}):null})(),void 0!==r.dialectOf&&r.cls&&r.cls.length?(0,f.jsx)("div",{className:"clsl",children:r.cls.map((e,t)=>(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:za(e[0])})," · "+za(e[1])]},t))}):null]}),(0,f.jsx)("div",{className:"lsearch",children:(0,f.jsx)(ui,{id:"wq",value:s,onChange:o,ph:n.findIn(Na(e))})}),(0,f.jsx)("div",{className:"ltiles",role:"tablist",children:["all",...aa].map(e=>(0,f.jsx)("button",{type:"button",role:"tab","aria-selected":e===a,className:"lt"+(e===a?" on":""),onClick:()=>{mi.cat=e;
try{localStorage.setItem("khl-cat",e)}catch{}
i(e),t&&t()},children:"all"===e?n.allF:n.cat[e]},e))}),(0,f.jsx)("div",{className:"lrows",children:d.length?d.map((t,n)=>(0,f.jsxs)("button",{type:"button",className:"wr",onClick:()=>Ja(hi(e,t)),children:[(0,f.jsx)("span",{className:"wk",children:1===t.cs.length&&t.meaning.indexOf(", ")>-1?La(t.cs[0]):Ta(t.meaning)}),(0,f.jsxs)("span",{className:"wv",children:[(0,f.jsx)("b",{children:t.word}),ai(t)?(0,f.jsx)("small",{className:"pr",children:ai(t)}):null]})]},n)):(0,f.jsx)("p",{className:"empty",children:n.none})}),(0,f.jsx)(FDsection,{L:e,q:s,d:FDd}),(0,f.jsx)("button",{type:"button",className:"minimap",ref:l,"aria-label":n.showMap,onClick:()=>Ja("map-"+e.id.slice(2)),children:(0,f.jsxs)("span",{className:"tag",children:[(0,f.jsx)(si,{n:"map"}),n.showMap]})}),(0,f.jsx)(bp,{prev:p>0?[h[p-1].id,Na(h[p-1])]:null,next:p<h.length-1?[h[p+1].id,Na(h[p+1])]:null}),(0,f.jsxs)("p",{className:"note",children:[n.sources,": ",y.join(" · ")]})]})}
function wp(){let e=ja(),
[t,n]=(0,m.useState)(mi.reg),
[r,a]=(0,m.useState)(mi.azL),
[i,s]=(0,m.useState)(mi.azn);
(0,m.useEffect)(()=>{mi.reg=t,mi.azL=r,mi.azn=i},[t,r,i]);
let o=e=>{let t=e.k.charAt(0).toUpperCase();
return/[A-Z]/.test(t)?t:"#"},
l=(0,m.useMemo)(()=>pa.filter(e=>{var n;
return n=e.L,"all"===t||$a[t].indexOf(n.lang)>-1}),[t]),
u={};
l.forEach(e=>{u[o(e)]=1});
let c=Object.keys(u).sort(),
d="all"===r||u[r]?r:"all",
h="all"===d?l:l.filter(e=>o(e)===d),
p="";
return(0,f.jsxs)("div",{className:"view",children:[(0,f.jsx)("div",{className:"regs",children:["all","west","ital","cee","east","nord","balk","grk","cauc","dag","volga","iran","casia","casia2","sib"].map(r=>(0,f.jsx)("button",{type:"button","aria-pressed":t===r,onClick:()=>{n(r),s(300)},children:"all"===r?e.allF:e.reg[r]},r))}),(0,f.jsxs)("div",{className:"lets",children:[(0,f.jsx)("button",{type:"button","aria-pressed":"all"===d,onClick:()=>{a("all"),s(300)},children:e.allF}),c.map(e=>(0,f.jsx)("button",{type:"button","aria-pressed":d===e,onClick:()=>{a(e),s(300)},children:e},e))]}),(0,f.jsx)("div",{className:"rows",children:h.slice(0,i).map((e,t)=>{let n=o(e),r=n!==p;
return p=n,(0,f.jsxs)("div",{style:{display:"contents"},children:[r?(0,f.jsx)("div",{className:"letter",children:n}):null,(0,f.jsx)(fi,{x:e})]},t)})}),h.length>i?(0,f.jsx)("button",{type:"button",className:"more",onClick:()=>s(i+300),children:e.more(Math.min(300,h.length-i))}):null]})}
function xp({L:e,e:t}){let n=ja(),
r=(e.info,(0,m.useRef)(null)),
{done:a,
copy:i}=pi();
(0,m.useEffect)(()=>{r.current&&wf(r.current,e)},[e.id]);
let s=t.cs[0],
o=Fa(t.lat||t.word),
l=s?ha[s].filter(t=>t.L.id!==e.id&&Ka(o,Fa(t.e.lat||t.e.word))):[],
u=s&&t.et&&null!=t.et.cs?ha[s].filter(n=>n.L.id!==e.id&&n.e.et&&n.e.et.cs===t.et.cs):[],
c=s?ha[s].filter(t=>t.L.id!==e.id&&0>l.indexOf(t)&&0>u.indexOf(t)):[];
l=l.filter(e=>0>u.indexOf(e)),
s&&new Set(ha[s].map(e=>e.L.id)).size;
let d=({x:e})=>(0,f.jsxs)("button",{type:"button",className:"wr",onClick:()=>Ja(hi(e.L,e.e)),children:[(0,f.jsxs)("span",{className:"wk",children:[(0,f.jsx)("i",{className:"dot "+e.L.family}),Na(e.L)]}),(0,f.jsxs)("span",{className:"wv",children:[(0,f.jsx)("b",{children:e.e.word}),ai(e.e)?(0,f.jsx)("small",{className:"pr",children:ai(e.e)}):null]})]});
return(0,f.jsxs)("div",{className:"view wordp",children:[(0,f.jsxs)("section",{className:"wcard",children:[(0,f.jsxs)("div",{className:"wcard-h",children:[(0,f.jsxs)("span",{className:"pill",children:[(0,f.jsx)("span",{className:"dot "+e.family}),Ca(e.family)]}),(0,f.jsx)("span",{className:"wmean",children:Ta(t.meaning)})]}),(0,f.jsxs)("div",{className:"wcard-b",children:[(0,f.jsx)("p",{className:"wbig",children:t.word}),ai(t)?(0,f.jsx)("p",{className:"wlat pr",children:ai(t)}):null,(0,f.jsxs)("p",{className:"worg",children:[(0,f.jsx)("i",{className:"dot "+e.family}),Na(e)," · ",Ma(e)]})]})]}),t.et||t.loan?(0,f.jsxs)("section",{className:"wety",children:[(0,f.jsx)("p",{className:"gh",children:n.etym}),t.et?(0,f.jsxs)("p",{className:"et",children:[n.etRoot," ",(0,f.jsx)("b",{className:"root",children:t.et.root})," · ",t.et.lang,t.et.gloss?" (“"+t.et.gloss+"”)":""]}):null,t.loan?(0,f.jsxs)("p",{className:"et",children:[n.etLoan," ",(0,f.jsx)("b",{children:t.loan.from}),t.loan.form?" · "+t.loan.form:""]}):null]}):null,(0,f.jsxs)("div",{className:"wacts",children:[s?(0,f.jsx)("button",{type:"button",className:"lt on",onClick:()=>Ja("m-"+oa(s)),children:n.seeAll}):null,(0,f.jsx)("button",{type:"button",className:"lt",onClick:()=>Ja(e.id),children:Na(e)}),s?(0,f.jsx)("button",{type:"button",className:"lt",onClick:()=>Ja("mm-"+oa(s)),children:n.explore}):null,(0,f.jsx)("button",{type:"button",className:"lt",onClick:()=>i(Oa(e,t)),children:a?n.copied:n.copy1})]}),(0,f.jsx)("button",{type:"button",className:"minimap",ref:r,"aria-label":n.showMap,onClick:()=>Ja("map-"+e.id.slice(2)),children:(0,f.jsxs)("span",{className:"tag",children:[(0,f.jsx)(si,{n:"map"}),n.showMap]})}),u.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{className:"gh",children:[n.cogT," · ",u.length]}),(0,f.jsx)("div",{children:u.map((e,t)=>(0,f.jsx)(d,{x:e},t))})]}):null,l.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{className:"gh",children:[n.similar||"Similar form"," · ",l.length]}),(0,f.jsx)("div",{children:l.map((e,t)=>(0,f.jsx)(d,{x:e},t))})]}):null,c.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{className:"gh",children:[n.otherL||"Other languages"," · ",c.length]}),(0,f.jsx)("div",{children:c.map((e,t)=>(0,f.jsx)(d,{x:e},t))})]}):null,(0,f.jsxs)("p",{className:"note",children:[n.sources,": ",t.src.join(" · ")]})]})}
function jp(){let e={name:"",
kids:{},
langs:[]};
ua.forEach(t=>{if("Albanian"===t.lang)return;
let n=e;
(t.info&&t.info.path||[]).forEach(e=>{n.kids[e]=n.kids[e]||{name:e,kids:{},langs:[]},n=n.kids[e]}),n.langs.push(t)});
let t=jd(function e(t,n){let r=Object.keys(t.kids).map(r=>e(t.kids[r],n+1)).concat(t.langs.map(e=>({name:(_n=>{if("Albanian"!==e.family)return _n;
_n=_n.replace(/ (Albanian|albanski|албански)$/,"");
if((e.info&&e.info.path||[]).indexOf("Gheg")>-1&&"Gheg Albanian"!==e.lang){_n=_n.replace(/ (Gheg|gegijski|гегијски)$/,"").replace(/ (dijalekat|дијалекат)$/,"").replace(/^Gegnishtja e Rekës së Epërme$/,"Reka e Epërme").replace(/^Gegnishtja /,"");
_n=_n.charAt(0).toUpperCase()+_n.slice(1)}
return _n})(Na(e)),en:e.lang,L:e}))),a={name:n?Pa(t.name):t.name,en:t.name,children:r};
return n>1&&1===r.length?r[0]:a}(e,0)).sum(e=>+!!e.L).sort((e,t)=>t.value-e.value||(e.data.en>t.data.en?1:-1));
return Cd().size([2*Math.PI,t.height+1])(t),
t.each(e=>{let t=e.data.L?e.data.L:e.leaves()[0].data.L;
e.fam=t.family}),
t}
function Sp({d:e}){if(e.data.L){let t=e.data.L;
return(0,f.jsxs)("button",{type:"button",className:"vl",onClick:()=>Ja(t.id),children:[(0,f.jsx)("i",{className:"dot "+t.family}),(0,f.jsx)("span",{className:"vn",children:e.data.name}),(0,f.jsx)("span",{className:"vp",children:Ma(t)})]})}
return(0,f.jsxs)("details",{className:"vb d"+e.depth,open:!1,children:[(0,f.jsxs)("summary",{children:[1===e.depth?(0,f.jsx)("i",{className:"dot "+e.fam}):null,(0,f.jsx)("span",{className:"vn",children:e.data.name}),(0,f.jsx)("span",{className:"vc",children:e.value})]}),(0,f.jsx)("div",{className:"vk",children:e.children.map((e,t)=>(0,f.jsx)(Sp,{d:e},t))})]})}
function _p({api:e,ui:t}){let[n,r]=(0,m.useState)(""),
[a,i]=(0,m.useState)(null),
[s,o]=(0,m.useState)(!1),
[l,u]=(0,m.useState)(0),
c=(0,m.useRef)(null),
d=(0,m.useRef)(null);
(0,m.useEffect)(()=>{let e=c.current&&c.current.closest(".mapbox");
if(!e)return;
let t=e=>{let t=e.detail||{},n=t.lang&&ua.find(e=>e.id===t.lang);
i(n?{k:"l",id:n.id,n:Na(n),f:n.family}:t.fam?{k:"f",id:t.fam,n:Ca(t.fam),f:t.fam}:null),r("")};
return e.addEventListener("ksel",t),()=>e.removeEventListener("ksel",t)},[]);
let h=Da(n.trim()),
p=la.filter(e=>!h||Da(Ca(e)).indexOf(h)>-1).map(e=>({k:"f",id:e,n:Ca(e),f:e})),
g=h?ua.filter(e=>e.info&&null!=e.info.lat).map(e=>{let t=Da(Na(e)),n=Da((e.info.an||"")+" "+(e.info.al||[]).join(" ")),r=0===t.indexOf(h)?0:t.split(/[\s-]/).some(e=>0===e.indexOf(h))?1:t.indexOf(h)>-1?2:n.indexOf(h)>-1?3:Da(e.lang||"").indexOf(h)>-1?4:9;
return{L:e,sc:r}}).filter(e=>e.sc<9).sort((e,t)=>e.sc-t.sc||Na(e.L).localeCompare(Na(t.L),Ia())).slice(0,8).map(e=>({k:"l",id:e.L.id,n:Na(e.L),f:e.L.family,sub:Ca(e.L.family)})):[],
v=p.concat(g),
b=t=>{o(!1),
r(""),
i({k:t.k,id:t.id,n:t.n,f:t.f}),
d.current&&d.current.blur(),
e.current&&("l"===t.k?e.current.select(t.id):e.current.family(t.id))},
y=()=>{i(null),
r(""),
o(!1),
e.current&&e.current.home(),
d.current&&d.current.blur()},
k=(e,t)=>(0,f.jsxs)("button",{type:"button",role:"option","aria-selected":t===l,onMouseDown:e=>e.preventDefault(),onClick:()=>b(e),children:[(0,f.jsx)("i",{className:"dot "+e.f}),(0,f.jsx)("span",{className:"kn",children:e.n}),e.sub?(0,f.jsx)("i",{className:"sub",children:e.sub}):null]},e.k+e.id);
let A=a&&"l"===a.k&&!(window.matchMedia&&matchMedia("(min-width: 64rem)").matches)?null:a;
return(0,f.jsxs)("div",{className:"kfil",ref:c,children:[(0,f.jsxs)("div",{className:"kfb",children:[A&&!s?(0,f.jsx)("i",{className:"dot "+A.f}):(0,f.jsx)(si,{n:"search"}),(0,f.jsx)("input",{ref:d,type:"text",role:"combobox",inputMode:"search",enterKeyHint:"search",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-expanded":s,"aria-controls":"kdd","aria-autocomplete":"list","aria-label":Xf("find"),placeholder:Xf("find"),value:s?n:A?A.n:n,onChange:e=>{r(e.target.value),u(0),o(!0)},onFocus:()=>{o(!0),u(0)},onBlur:()=>setTimeout(()=>o(!1),160),onKeyDown:e=>{"ArrowDown"===e.key?(e.preventDefault(),u(Math.min(v.length-1,l+1))):"ArrowUp"===e.key?(e.preventDefault(),u(Math.max(0,l-1))):"Enter"===e.key?v[l]&&(e.preventDefault(),b(v[l])):"Escape"===e.key&&(s?(o(!1),d.current&&d.current.blur()):y())}}),A||n?(0,f.jsx)("button",{type:"button",className:"kfx","aria-label":Xf("clear"),onMouseDown:e=>e.preventDefault(),onClick:a&&!A?()=>r(""):y,children:(0,f.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M6 6l12 12M18 6 6 18"})})}):null]}),s?(0,f.jsxs)("div",{className:"kdd",id:"kdd",role:"listbox",onMouseDown:e=>e.preventDefault(),children:[p.length?(0,f.jsx)("p",{className:"kh",children:Xf("fams")}):null,p.map((e,t)=>k(e,t)),g.length?(0,f.jsx)("p",{className:"kh",children:Xf("langs")}):null,g.map((e,t)=>k(e,p.length+t)),v.length?null:(0,f.jsx)("p",{className:"kh",children:Xf("none")})]}):null]})}
function qp(e,t,n,r,a,i,l){
let TWO=2*Math.PI,
ACT=0,D0=null,
SL=null,
PD=null,
rm=Ya();
e.querySelectorAll(":scope > svg").forEach(x=>x.remove());
let g0=Math.min(e.clientWidth,620,Math.max(280,innerHeight-150)),
v=g0/2,
R=v-3;
e.style.height=g0+"px";
let y=ws(e).insert("svg",":first-child").attr("viewBox",[-v,-v,g0,g0]).attr("width",g0).attr("height",g0).attr("role","group").attr("aria-label",l.nav.tree),
arc=lh().startAngle(d=>d.a0).endAngle(d=>d.a1).padAngle(.007).padRadius(R*.6).innerRadius(d=>d.r0).outerRadius(d=>d.r1).cornerRadius(3.5),
cx=document.createElement("canvas").getContext("2d"),
FM={},
ff=c=>FM[c]||(FM[c]=(()=>{let q=y.append("text").attr("class",c).text("x"),s=getComputedStyle(q.node()),o={f:s.fontFamily,w:s.fontWeight};
q.remove();
return o})()),
LS=0,
mw=(s,fs,c)=>{let o=ff(c);
cx.font=o.w+" "+fs+"px "+o.f;
return(cx.measureText(s).width+("wla"===c?LS:"wlb"===c?.06:.01)*fs*s.length)*1.05},
fit=(s,f0,f1,room,c)=>{for(let f=f0;f>=f1;f-=.5)if(mw(s,f,c)<=room)return{t:s,
f};
for(let m=s.length-1;m>=3;m--){let s2=s.slice(0,m).replace(/[\s·-]+$/,"")+"…";
if(mw(s2,f1,c)<=room)return{t:s2,
f:f1}}
return null},
best=(arr,a0,a1,room,c)=>{for(const x of arr)for(let f=a0;f>=a1;f-=.5)if(mw(x,f,c)<=room)return{t:x,
f};
return null},
CAND=q=>{let n=q.d.data.name,
sh=n.split(/[-\s]/)[0];
return[n.toUpperCase(),n.replace(/^Northwest /,"NW ").toUpperCase()].concat(/^(north|south|east|west)/i.test(sh)?[]:[sh.toUpperCase()])},
PT=(q,w)=>[q*Math.sin(w),-q*Math.cos(w)],
FX=w=>w[0].toFixed(1)+","+w[1].toFixed(1),
UID="w"+Math.random().toString(36).slice(2,6);
return{draw(root){
/* the phone bar (wb) shows only once something has been chosen: a tap on a slice, or a move to another group */
null===D0?D0=root:root!==D0&&(ACT=1);
SL=null;
a.textContent="";
a.hidden=!0;
let kids=root.children||[],
TOP=!root.depth&&kids.length>1&&kids.every(q=>!q.data.L),
__t=(LS=.08),
HINT={en:"Tap a family to open it",
sq:"Prek një familje për ta hapur",

sr:"Dodirni porodicu da je otvoriš",
sc:"Додирни породицу да је отвориш"}[ya()]||"Tap a family to open it",
hasB=kids.some(q=>!q.data.L),
hasL=kids.some(q=>(q.children||[]).some(w=>!w.data.L)),
rc=.28*R,
rA0=rc+.015*R,
rA1=R*(hasL?.44:.46),
rB0=rA1+.015*R,
rB1=R*.6,
rL0=rB1+.015*R,
x0=root.x0,
kk=TWO/(root.x1-root.x0),
W=(d,r0,r1,kind)=>({d,a0:(d.x0-x0)*kk,a1:(d.x1-x0)*kk,r0,r1,kind}),
arcs=[];
TOP?kids.forEach(A=>{arcs.push(W(A,.2*R,R*.82,"a")),A.leaves().forEach(Lf=>arcs.push(W(Lf,R*.855,R,"tick")))}):kids.forEach(A=>{if(A.data.L){arcs.push(W(A,rA0,R,"leaf"));
return}
arcs.push(W(A,rA0,rA1,"a"));
(A.children||[]).forEach(B=>{if(B.data.L){arcs.push(W(B,rB0,R,"leaf"));
return}
arcs.push(W(B,rB0,rB1,"b"));
B.leaves().forEach(Lf=>arcs.push(W(Lf,rL0,R,"leaf")))})});
if(TOP){let fa=arcs.filter(q=>"a"===q.kind),
sp=fa.map(q=>q.a1-q.a0),
ad=sp.map(v=>Math.max(v,.22)),
f=TWO/ad.reduce((x,y)=>x+y,0),
cur=0,
mp=new Map;
fa.forEach((q,ix)=>{let n0=cur,n1=cur+ad[ix]*f;
mp.set(q.d,[q.a0,q.a1,n0,n1]),cur=n1});
arcs.forEach(q=>{let A0="a"===q.kind?q.d:q.d.ancestors().find(x=>1===x.depth),mm=mp.get(A0);
if(!mm)return;
let rr=(mm[3]-mm[2])/(mm[1]-mm[0]||1);
q.a0=mm[2]+(q.a0-mm[0])*rr,q.a1=mm[2]+(q.a1-mm[0])*rr})}
arcs.filter(q=>"leaf"===q.kind).forEach(q=>arcs.push(Object.assign({},q,{r0:q.r1-5.5,kind:"rim"})));
let BG=t.BG,
col=q=>{let F=t[q.d.fam],
c=Mf(F,q.d)||F,
D=parseInt((BG||"#fff").replace("#","").slice(0,2),16)<=128;
return"a"===q.kind?D?Ms(F,BG)(.32):F:"b"===q.kind?Ms(F,BG)(D?.48:.3):"rim"===q.kind?Ms(c,t.INK)(.5):c},
LM=parseInt((BG||"#fff").replace("#","").slice(0,2),16)>128?.94:.7;
i.style.width=i.style.height=(1.3*rc).toFixed(1)+"px";
{let OUT=(()=>{let PP=root.parent;
if(!PP)return arcs.filter(q=>"leaf"===q.kind||"tick"===q.kind);
let ks=PP.children||[],k2=TWO/(PP.x1-PP.x0||1),sp=ks.map(k=>(k.x1-k.x0)*k2),ad=PP.depth?sp:sp.map(w=>Math.max(w,.22)),fz=TWO/ad.reduce((x,y)=>x+y,0),c0=0;
return ks.map((k,j)=>{let a0=c0;
c0+=ad[j]*fz;
return{d:k,a0,a1:c0,cur:k===root}})})(),
mr=.62*rc,
mi=.4*rc,
ma=lh().startAngle(d=>d.a0).endAngle(d=>d.a1).innerRadius(mi).outerRadius(mr).padAngle(.014).padRadius(mr).cornerRadius(1.5),
Z=(mr+3).toFixed(1),
bk=l.back||"Back";
i.innerHTML='<button type="button" class="smr'+(root.depth?"":" top")+'" style="width:'+(2*mr+6).toFixed(1)+"px;height:"+(2*mr+6).toFixed(1)+'px"'+(root.depth?' aria-label="'+ei(bk+" · "+(root.parent.depth?root.parent.data.name:l.nav.tree))+'"':' tabindex="-1" aria-hidden="true"')+'><svg viewBox="-'+Z+" -"+Z+" "+2*Z+" "+2*Z+'"><g class="smg">'+OUT.map(q=>'<path d="'+ma(q)+'" fill="'+(1===q.d.depth?t[q.d.fam]:Mf(t[q.d.fam],q.d)||t[q.d.fam])+'"'+(!1===q.cur?' opacity=".3"':'')+'/>').join("")+"</g></svg></button>";
let sm=i.firstChild;
sm.onclick=()=>{sm.classList.remove("hit"),
sm.offsetWidth,
sm.classList.add("hit");
root.depth&&setTimeout(()=>r(root.parent),rm?0:140)}}
let dir=null==PD?0:root.depth>PD?1:root.depth<PD?-1:0;
PD=root.depth;
if(rm||!dir)y.selectAll("g.lay,g.lgone").remove();
else{y.selectAll("g.lgone").remove();
let og=y.selectAll("g.lay").attr("class","lgone"+(dir<0?" dn":""));
setTimeout(()=>og.remove(),220)}
let G=y.append("g").attr("class","lay"+(TOP?" wtop":"")+(rm?"":dir>0?" win":dir<0?" wout":" wfirst")),
P=G.append("g").selectAll("path").data(arcs).join("path").attr("class",q=>"wa "+q.kind).attr("fill",col).attr("tabindex",0).attr("role","button").attr("aria-label",q=>q.d.data.name+(q.d.data.L?"":" · "+q.d.value)),
LB=G.append("g").attr("pointer-events","none"),
OUTL=0,
OUTS=[];
P.append("title").text(q=>q.d.data.name+(q.d.data.L?"":" · "+q.d.value));
arcs.forEach((q,ix)=>{if("tick"===q.kind||"rim"===q.kind)return;
let nm="leaf"===q.kind?q.d.data.name:q.d.data.name.toUpperCase(),ph=(q.a0+q.a1)/2,sp=q.a1-q.a0;
if("leaf"===q.kind){let rs=Math.max(q.r0+8,(10.5/.78+3)/sp-4),room=q.r1-rs-6,sw=sp*(rs+4)-3,fs=Math.min(g0>560?15:13.5,.78*sw);
let dg=ph*180/Math.PI,lf=ph>Math.PI,f=fs>=9.5&&room>=30?fit(nm,fs,9,room,"wll"):null;
if(!f||f.t!==nm){q.lab=1;
OUTL=1;
OUTS.push({nm,ph});
return}
q.lab=1;
let rc2=(rs+q.r1-6)/2;
LB.append("text").attr("class","wll").call(__lab,col(q)).each(function(){(q.lts=q.lts||[]).push(this)}).attr("dy","0.35em").attr("font-size",f.f).attr("text-anchor","middle").attr("transform","rotate("+(dg-90)+") translate("+rc2.toFixed(1)+",0)"+(lf?" rotate(180)":"")).text(f.t);
return}
let th=q.r1-q.r0,rmid=(q.r0+q.r1)/2,f0=Math.min("a"===q.kind?TOP?g0>560?34:28:g0>560?15:13.5:g0>560?12.5:11.5,.5*th),hw=Math.min(sp/2-.008,1.3),room=2*hw*rmid-10;
if(!TOP&&(f0<9||room<22))return;
let cl="a"===q.kind?"wla":"wlb",f=f0>=9&&room>=22?TOP?best(CAND(q),f0,9.5,room,cl):fit(nm,f0,9,room,cl):null;
if(!f&&TOP){let rs=q.r0+10,rr=q.r1-q.r0-12,fs=Math.min(14,.8*sp*((q.r0+q.r1)/2));
if(fs<8)return;
let g2=best(CAND(q),fs,8,rr,cl);
if(!g2)return;
let dg=ph*180/Math.PI,lf=ph>Math.PI;
LB.append("text").attr("class",cl).call(__lab,col(q)).each(function(){(q.lts=q.lts||[]).push(this)}).attr("dy","0.35em").attr("font-size",g2.f).attr("text-anchor","middle").attr("transform","rotate("+(dg-90)+") translate("+((q.r0+q.r1)/2).toFixed(1)+",0)"+(lf?" rotate(180)":"")).text(g2.t);
return}
if(!f)return;
let tp=Math.cos(ph)>=0,pd=Math.max(9,.55*f.f),rb=TOP?(tp?q.r1-pd-.72*f.f:q.r1-pd):tp?rmid-.33*f.f:rmid+.33*f.f,A0=PT(rb,tp?ph-hw:ph+hw),A1=PT(rb,tp?ph+hw:ph-hw),id=UID+ix;
LB.append("path").attr("id",id).attr("fill","none").attr("d","M"+FX(A0)+"A"+rb.toFixed(1)+","+rb.toFixed(1)+" 0 0 "+(tp?1:0)+" "+FX(A1));
LB.append("text").attr("class",cl).call(__lab,col(q)).each(function(){(q.lts=q.lts||[]).push(this)}).attr("font-size",f.f).attr("text-anchor","middle").append("textPath").attr("href","#"+id).attr("startOffset","50%").text(f.t)});
P.attr("d",arc);
{let T=0,
B=0;
if(OUTS.length){let FS=g0>560?13:12,
RH=FS+5,
HW=Math.max(v,innerWidth/2-8),
cv=document.createElement("canvas").getContext("2d");
cv.font="500 "+FS+"px Manrope, system-ui, sans-serif";
let rows={t:[],
b:[]};
let lay=(grp,sgn)=>{let L=grp.map(o=>{let x=R*Math.sin(o.ph),yr=-R*Math.cos(o.ph),w=cv.measureText(o.nm).width+2;
return{...o,x,yr,w}}).sort((a,b)=>Math.abs(a.x)-Math.abs(b.x));
let placed=[];
L.forEach(o=>{let cs=[];
if(Math.abs(o.x)<.35*R){let c=Math.max(-HW+o.w/2,Math.min(HW-o.w/2,o.x));
cs.push({an:"middle",tx:c,a0:c-o.w/2,a1:c+o.w/2})}
if(o.x<0){let a0=Math.max(-HW,o.x-3);
cs.push({an:"start",tx:a0,a0,a1:a0+o.w})}else{let a1=Math.min(HW,o.x+3);
cs.push({an:"end",tx:a1,a0:a1-o.w,a1})}
for(let r=0;r<14;r++)for(const c of cs){let a0=c.a0-5,a1=c.a1+5;
let ok=placed.every(p=>{if(p.r===r&&!(a1<p.a0||a0>p.a1))return!1;
if(p.r<r&&o.x>p.r0x-2&&o.x<p.r1x+2)return!1;
if(p.r>r&&p.x>c.a0-2&&p.x<c.a1+2)return!1;
return!0});
if(ok){placed.push({...o,r,...c,a0,a1,r0x:c.a0,r1x:c.a1});
return}}});
return placed};
let tp=lay(OUTS.filter(o=>Math.cos(o.ph)>=0),-1),
bt=lay(OUTS.filter(o=>Math.cos(o.ph)<0),1);
let nt=tp.reduce((m,p)=>Math.max(m,p.r+1),0),
nb=bt.reduce((m,p)=>Math.max(m,p.r+1),0);
T=nt?nt*RH+14:0;
B=nb?nb*RH+14:0;
let OG=LB.append("g").attr("class","wout2");
[[tp,-1],[bt,1]].forEach(([arr,sg])=>arr.forEach(p=>{let ry=sg<0?-R-12-p.r*RH:R+12+p.r*RH+FS*.8,ly=sg<0?ry+3:ry-FS*.95,y0=p.yr+(sg<0?-3:3),bend=sg<0?ly+4:ly-4;
let ex=p.an==="middle"?p.tx:p.x;
OG.append("path").attr("class","wld").attr("d","M"+p.x.toFixed(1)+","+y0.toFixed(1)+"L"+p.x.toFixed(1)+","+bend.toFixed(1)+"L"+ex.toFixed(1)+","+ly.toFixed(1));
OG.append("text").attr("class","wlo").attr("font-size",FS).attr("text-anchor",p.an).attr("x",p.tx.toFixed(1)).attr("y",ry.toFixed(1)).text(p.nm)}))}
let H=g0+T+B;
y.attr("viewBox",[-v,-v-T,g0,H]).attr("height",H);
e.style.height=H+"px";
i.style.top=(v+T)+"px";
i.style.transform="translate(-50%,-50%)"}
let pk=i.querySelector(".wpk")||(()=>{let z=document.createElement("span");
z.className="wpk";
i.appendChild(z);
return z})(),
mb=a.parentNode.querySelector(".wmap")||(()=>{let z=document.createElement("button");
z.type="button";
z.className="wmap";
a.after(z);
return z})(),
wb=a.parentNode.querySelector(".wbar")||(()=>{let z=document.createElement("div");
z.className="wbar";
mb.after(z);
return z})(),
OM={en:"On map",
sq:"Në hartë",

sr:"Na karti",
sc:"На карти"}[ya()]||"On map",
mbu=q=>{let L=q&&q.d.data.L,
g=!L&&root.depth?root:null;
mb.hidden=!L&&!g;
wb.hidden=mb.hidden||!ACT;
if(mb.hidden)return;
mb.innerHTML=ii.map+"<span>"+ei(OM)+"</span><em>"+ei(L?q.d.data.name:root.data.name)+"</em>";
mb.style.setProperty("--wf",t[L?q.d.fam:root.fam]||"");
mb.onclick=()=>{if(L){Ja("map-"+L.id.slice(2));
return}
Uf={fam:root.fam,
sub:root.depth>1,
ids:root.leaves().map(z=>z.data.L.id)},
Ja("map")};
/* phones (<64rem): the bar above the tab bar (v74 in src/styles/v66.css) names what is chosen; its name opens the language, its
   map button shows it (or the whole family) on the map. Desktop keeps the single button (.wmap). */
let sub=L&&q.d.parent&&q.d.parent.depth?q.d.parent.data.name:"";
wb.style.setProperty("--wf",t[L?q.d.fam:root.fam]||""),
wb.innerHTML=(L?'<button type="button" class="wbo">':'<div class="wbo">')+"<i></i><span>"+(sub?"<small>"+ei(sub)+"</small>":"")+"<b>"+ei(L?q.d.data.name:root.data.name)+"</b></span>"+(L?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>':"</div>")+'<button type="button" class="wbm">'+ii.map+"<span>"+ei(OM)+"</span></button>",
wb.querySelector(".wbm").onclick=mb.onclick,
L&&(wb.querySelector(".wbo").onclick=()=>Ja(L.id))},
paint=()=>{P.classed("sel",q=>"leaf"===q.kind&&q.d.data.L.id===SL);
P.filter(".sel").raise();
/* the chosen language's slice comes a little out of the wheel (along its middle), its names with it; the family's other
   languages dim by how far they are from it in the tree: its closest relatives a little, distant branches more. */
{let S0=SL&&arcs.find(x=>"leaf"===x.kind&&x.d.data.L.id===SL),anc=S0&&new Set(S0.d.ancestors()),out=R*.022;
P.each(function(x){let o="",tr="";
if(S0)if(x===S0){let m=(x.a0+x.a1)/2;tr=(Math.sin(m)*out).toFixed(2)+"px "+(-Math.cos(m)*out).toFixed(2)+"px"}
else if("leaf"===x.kind){let n=x.d,k=0;for(;n&&!anc.has(n);n=n.parent)k++;n&&(k+=S0.d.depth-n.depth,o=Math.max(.36,1.05-.1*k).toFixed(2))}
else"tick"!==x.kind&&!anc.has(x.d)&&(o=".72");
this.style.translate=tr,this.style.opacity=o,(x.lts||[]).forEach(t=>{t.style.translate=tr,t.style.opacity=o&&Math.max(.5,+o).toFixed(2)})})}
let q=SL&&arcs.find(x=>"leaf"===x.kind&&x.d.data.L.id===SL);
mbu(q),
i.classList.toggle("pick",!!q),
pk.textContent=q?q.d.data.name:"",
pk.style.color=q?t[q.d.fam]||"":"";
if(!q){a.classList.toggle("whint",TOP),
(a.textContent="",a.hidden=!0);
return}
a.classList.remove("whint");
a.hidden=!1;
a.textContent=q.d.data.name+" · "+(l.sbOpen||"tap again to open")},
act=q=>{ACT=1;
if("tick"===q.kind){r(q.d.ancestors().find(x=>1===x.depth));
return}
if("leaf"!==q.kind){r(q.d);
return}
let id=q.d.data.L.id;
/* phones (<64rem): the first tap on a language chooses it (the bar shows it), a second opens it; desktop: a named slice opens at once */
if(SL===id||q.lab&&!(!window.matchMedia||!matchMedia("(min-width: 64rem)").matches))Ja(id);
else{SL=id;
paint()}};
P.on("click",(ev,q)=>act(q)).on("keydown",(ev,q)=>{("Enter"===ev.key||" "===ev.key)&&(ev.preventDefault(),act(q))}).on("pointerenter",(ev,q)=>{"mouse"===ev.pointerType&&(a.hidden=!1,a.textContent=q.d.data.name+(q.d.data.L?"":" · "+q.d.value))}).on("pointerleave",ev=>{"mouse"===ev.pointerType&&paint()});
Ep&&arcs.some(x=>"leaf"===x.kind&&x.d.data.L.id===Ep)&&(SL=Ep,Ep=null),
paint(),
TOP&&!rm&&P.filter(".a").classed("wpl",!0).style("animation-delay",(q,j)=>1100+260*j+"ms");
},
destroy(){y.remove(),a&&a.parentNode&&a.parentNode.querySelectorAll(".wbar").forEach(z=>z.remove())}}}
var Ep=null;
function zp(e){if(!Ep)return e;
let t=e.leaves().find(e=>e.data.L&&e.data.L.id===Ep);
return t&&(t.ancestors().find(e=>e.depth===Math.min(2,t.depth-1))||t.parent)||e}
function Np({path:e,go:t,lbl:n}){let r=e.slice(1);
return(0,f.jsx)("nav",{className:"kdep","aria-label":n,children:r.map((a,i)=>{let s=i===r.length-1,o=s?e[i]:a;
return(0,f.jsx)("button",{type:"button",className:"kdp"+(s?" cur":""),style:{"--dc":Mf(If(a.fam),a)||""},"aria-label":(s?"↑ ":"")+(o.depth?o.data.name:n),title:a.data.name,onClick:()=>t(o),children:(0,f.jsx)("i",{})},i)})})}
function Mp({root:e,cur:t,go:n}){let r=t.ancestors();
return(0,f.jsx)("div",{className:"wfam",role:"tablist",children:(e.children||[]).map(a=>{let i=r.includes(a);
return(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":i,onClick:()=>n(i&&t===a?e:a),style:{"--wf":Mf(If(a.fam),a)||""},children:[(0,f.jsx)("i",{}),(0,f.jsx)("span",{children:a.data.name})]},a.data.name)})})}
function Cp({s:e}){let t=(0,m.useRef)(null);
return(0,m.useEffect)(()=>{let n=t.current;
if(!n)return;
let r=()=>{let t=Math.max(820,n.clientWidth),r=26,a=e.leaves(),i=Math.max(1,...e.descendants().filter(e=>!e.data.L&&e.depth).map(e=>e.depth)),s=Math.max(110,(t-214-24)/i),o=r,l=new Map,u=null,c=(e,t,n)=>{let r=Math.floor(t/(.52*n));
return e.length>r?e.slice(0,Math.max(3,r-1))+"…":e};
a.forEach(e=>{let t=e.ancestors().find(e=>1===e.depth);
u&&t!==u&&(o+=30),u=t,l.set(e,[12+i*s,o]),o+=36});
let d=e=>{if(l.has(e))return l.get(e);
let t=(e.children||[]).map(d),n=[12+(e.depth-1)*s,(t[0][1]+t[t.length-1][1])/2];
return l.set(e,n),n};
(e.children||[]).forEach(d);
let h="",f="";
e.descendants().forEach(e=>{if(!e.depth||e.data.L)return;
let[t,n]=l.get(e),r=1===e.depth,a=document.createElement("canvas").getContext("2d");
a.font=(r?"600 14":"500 12.5")+"px "+getComputedStyle(document.body).fontFamily;
let i=e.data.name+(r?" · "+e.leaves().length:""),o=Math.min(Math.max(s-11,40),a.measureText(i).width+(r?24:26)),u=e.children||[],d=t+o,p=d+5,m=u.map(e=>l.get(e)[1]),g=Mf(If(e.fam),e)||"#888";
u.length&&(h+='<path class="pl" stroke="'+g+'" d="M'+d+","+n+"H"+p+(u.length>1?"M"+p+","+Math.min(...m)+"V"+Math.max(...m):"V"+m[0])+u.map(e=>{let[t,n]=l.get(e);
return"M"+p+","+n+"H"+t}).join("")+'"/>');
let v=1===e.depth,b=v?14:12.5;
f+='<g class="pt'+(v?" pf":"")+'" transform="translate('+t+","+(n-13)+')"><rect width="'+o+'" height="'+'26" rx="'+(v?8:13)+'"'+(v?"":' style="--pc:'+g+'"')+'/><text x="'+(v?10:12)+'" y="13" dy=".35em">'+ei(a.measureText(i).width+(v?24:26)<=o+.5?i:c(i,o-(v?20:24),b))+"</text></g>"}),a.forEach(e=>{let t=e.data.L,[n,r]=l.get(e),a=Mf(If(e.fam),e)||"#888";
f+='<g class="pq" data-go="'+t.id+'" transform="translate('+n+","+(r-15)+')"><rect width="214" height="30" rx="9"/><rect class="pbar" width="5" height="30" rx="2.5" fill="'+a+'"/><text x="15" y="15" dy=".35em"><tspan class="pn">'+ei(c(e.data.name,140,15))+'</tspan><tspan class="pr2" dx="7">'+ei(c(Ma(t),64,12))+"</tspan></text></g>"}),n.innerHTML='<svg class="pedi" viewBox="0 0 '+t+" "+(o+r)+'" width="'+t+'" height="'+(o+r)+'" role="tree">'+h+f+"</svg>"};
r();
let a=new ResizeObserver(()=>r());
a.observe(n);
let i=e=>{let t=e.target.closest&&e.target.closest("[data-go]");
t&&Ja(t.dataset.go)};
return n.addEventListener("click",i),()=>{a.disconnect(),n.removeEventListener("click",i)}},[e]),
(0,f.jsx)("div",{className:"vdendro",ref:t})}
/* Phones: the tree. A family opens with one tap and shows its whole branching at once (branch names over thin lines, every
   language a row), instead of a fold-out per branch; one family is open at a time, the others fold to compact rows, and the
   open family's header stays at the top while its branches scroll, so it closes again with one tap. Kept while the page is
   left and come back to (mi.tf). Desktop keeps the drawn tree (Cp). */
function kTree({s:e}){let[o,so]=(0,m.useState)(()=>mi.tf||null),R=(0,m.useRef)(null),
tog=(id,ev)=>{ev.preventDefault();let n=o===id?null:id;mi.tf=n,so(n);
n&&requestAnimationFrame(()=>{let el=R.current&&[...R.current.children].find(c=>c.dataset.tf===id),y=el&&el.getBoundingClientRect().top-56;
el&&(y<0||y>innerHeight*.5)&&window.scrollBy({top:y,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})};
return(0,f.jsx)("div",{className:"vtree vbt"+(o?" vone":""),ref:R,style:{display:"block"},children:e.children.map((d,t)=>{let id=d.data.en;
return d.data.L?(0,f.jsx)(Sp,{d:d},t):(0,f.jsxs)("details",{className:"vb d1"+(o===id?" von":""),open:o===id,"data-tf":id,children:[(0,f.jsxs)("summary",{onClick:ev=>tog(id,ev),"aria-expanded":o===id,children:[(0,f.jsx)("i",{className:"dot "+d.fam}),(0,f.jsx)("span",{className:"vn",children:d.data.name}),(0,f.jsx)("span",{className:"vc",children:d.value})]}),o===id?(0,f.jsx)("div",{className:"vk vgt",children:d.children.map((c,j)=>(0,f.jsx)(kBr,{d:c},j))}):null]},t)})})}
function kBr({d:e}){if(e.data.L)return(0,f.jsx)(Sp,{d:e});
return(0,f.jsxs)("div",{className:"vg",children:[(0,f.jsxs)("div",{className:"vgn",children:[(0,f.jsx)("span",{children:e.data.name}),(0,f.jsx)("span",{className:"vc",children:e.value})]}),(0,f.jsx)("div",{className:"vgk",children:e.children.map((c,j)=>(0,f.jsx)(kBr,{d:c},j))})]})}
function Lp({s:e}){let t="(min-width: 64rem)",
[n,r]=(0,m.useState)(()=>!(!window.matchMedia||!matchMedia(t).matches));
return(0,m.useEffect)(()=>{let e=matchMedia(t),n=()=>r(e.matches);
return e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[]),
n?(0,f.jsx)(Cp,{s:e}):(0,f.jsx)(kTree,{s:e})}
function Tp({v:e,on:t}){let n=ja();
return(0,f.jsx)("div",{className:"sseg",role:"tablist",children:[["w",n.nav.words,"book"],["l",n.nav.lang,"wheel"]].map(([n,r,a])=>(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":e===n,onClick:()=>t(n),children:[(0,f.jsx)(si,{n:a}),(0,f.jsx)("span",{children:r})]},n))})}
function Ap({q:e}){let t=ja(),
n={en:"Map",
sq:"Harta",

sr:"Mapa",
sc:"Мапа"}[ya()]||"Map",
r=Da((e||"").trim()),
a=ua.filter(e=>e.info&&null!=e.info.lat).map(e=>{let t=Da(Na(e)),n=Da((e.info.an||"")+" "+(e.info.al||[]).join(" ")),a=r?0===t.indexOf(r)?0:t.split(/[\s-]/).some(e=>0===e.indexOf(r))?1:t.indexOf(r)>-1?2:n.indexOf(r)>-1?3:Da(Ma(e)+" "+Pf(e)).indexOf(r)>-1?4:9:5;
return{x:e,sc:a}}).filter(e=>e.sc<9).sort((e,t)=>e.sc-t.sc||la.indexOf(e.x.family)-la.indexOf(t.x.family)||Na(e.x).localeCompare(Na(t.x),Ia())),
i=r=>(0,f.jsxs)("div",{className:"lres",style:{"--lc":Vf(r)||""},children:[(0,f.jsxs)("button",{type:"button",className:"lmain",onClick:()=>Ja(r.id),children:[(0,f.jsx)("i",{className:"ldot"}),(0,f.jsxs)("span",{className:"ltx",children:[(0,f.jsxs)("b",{children:[(0,f.jsx)(di,{s:Na(r),q:(e||"").trim()}),r.info.an?(0,f.jsx)("em",{children:r.info.an}):null]}),(0,f.jsx)("small",{children:Pf(r)+" · "+Ma(r)})]})]}),(0,f.jsxs)("button",{type:"button",className:"lact",onClick:()=>{Ep=r.id,Ja("languages")},children:[(0,f.jsx)(si,{n:"wheel"}),(0,f.jsx)("span",{children:t.wheel})]}),(0,f.jsxs)("button",{type:"button",className:"lact",onClick:()=>Ja("map-"+r.id.slice(2)),children:[(0,f.jsx)(si,{n:"map"}),(0,f.jsx)("span",{children:n})]})]},r.id);
return a.length?r?(0,f.jsxs)("div",{className:"lresw",children:[(0,f.jsx)("p",{className:"gh",children:t.nav.lang+" · "+a.length}),a.map(e=>i(e.x))]}):(0,f.jsx)("div",{className:"lresw",children:la.map(e=>{let t=a.filter(t=>t.x.family===e);
return t.length?(0,f.jsxs)("section",{className:"lresg",children:[(0,f.jsxs)("p",{className:"gh",children:[(0,f.jsx)("i",{className:"dot "+e}),Ca(e)+" · "+t.length]}),t.map(e=>i(e.x))]},e):null})}):(0,f.jsx)("p",{className:"empty",children:t.none})}
function Pp({ui:e,theme:t}){let n,
r=ja(),
[__tk,__stk]=(0,m.useState)(0),
[a,i]=(0,m.useState)("wheel"),
[s,o]=(0,m.useState)(mi.lq),
l=(0,m.useMemo)(jp,[e]),
[u,c]=(0,m.useState)(()=>zp(l));
(0,m.useEffect)(()=>c(zp(l)),[l]);
let d=(0,m.useRef)(null),
h=(0,m.useRef)(null),
p=(0,m.useRef)(null),
g=(0,m.useRef)(null),
v={Slavic:(n=getComputedStyle(document.documentElement)).getPropertyValue("--f-slav").trim(),
Iranian:n.getPropertyValue("--f-iran").trim(),
Albanian:n.getPropertyValue("--f-alba").trim(),
Greek:n.getPropertyValue("--f-gree").trim(),
Romance:n.getPropertyValue("--f-roma").trim(),
/*@FAM_CHIP_PROPS@*/BG:n.getPropertyValue("--bg").trim(),
INK:n.getPropertyValue("--ink").trim()};
(0,m.useEffect)(()=>{mi.lq=s},[s]),
(0,m.useEffect)(()=>{if("wheel"===a&&d.current)return g.current=qp(d.current,v,0,e=>{e&&!e.data.L&&c(e)},h.current,p.current,r),()=>{g.current&&g.current.destroy(),g.current=null}},[a,l,t,__tk]),
(0,m.useEffect)(()=>{g.current&&g.current.draw(u)},[u,a,l,t,__tk]),
(0,m.useEffect)(()=>{let e=new MutationObserver(()=>__stk(e=>e+1));
return e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>e.disconnect()},[]);
let b=u.ancestors().reverse(),
y=((u.children||[]).filter(e=>!e.data.L),Da(s.trim()));
u.leaves().map(e=>e.data.L).sort((e,t)=>Na(e).localeCompare(Na(t),Ia())).filter(e=>!y||Da(Na(e)+" "+Ma(e)+" "+e.lang+" "+(e.info&&e.info.an||"")).indexOf(y)>-1);
return(0,f.jsxs)("div",{className:"view"+("tree"===a?" tvtree":""),id:"langs",children:[(0,f.jsx)("div",{className:"lmrow",children:(0,f.jsxs)("div",{className:"lm tvs",role:"tablist",children:[(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":"wheel"===a,onClick:()=>i("wheel"),children:[(0,f.jsx)(si,{n:"wheel"}),(0,f.jsx)("span",{children:r.wheel})]}),(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":"tree"===a,onClick:()=>i("tree"),children:[(0,f.jsx)(si,{n:"tree"}),(0,f.jsx)("span",{children:r.tree})]})]})}),"tree"===a?(0,f.jsx)(Lp,{s:l}):(0,f.jsxs)("div",{className:"sbwrap",children:[(0,f.jsx)(Mp,{root:l,cur:u,go:c}),(0,f.jsx)(Np,{path:b,go:c,lbl:r.nav.tree}),(0,f.jsx)("div",{className:"sb",ref:d,children:(0,f.jsx)("div",{className:"sbc",ref:p})}),(0,f.jsx)("p",{className:"sbh",ref:h,hidden:!0,children:""})]}),null]})}
d("aIIwE"),
d("aIIwE"),
m=d("aIIwE");
let Ip=["etimo","етимо","ετυμο","этимо","etymo"],
Rp="tiymnrsazeтимнпкрсзшжвυμτνρσα01";
function Op(){let[e,t]=(0,m.useState)(()=>Ip[0].split("").map(e=>[e,1,e])),
[n,r]=(0,m.useState)(null),
a=(0,m.useRef)(null),
i=(0,m.useRef)(null);
i.current=n,
(0,m.useEffect)(()=>{let e=a.current,t=()=>{let t=e&&function(e){try{let t=document.createElement("canvas").getContext("2d"),n=getComputedStyle(e);
t.font=(n.fontWeight||"500")+" 100px "+n.fontFamily;
let r={};
new Set(Ip.join("")+Rp).forEach(e=>{r[e]=t.measureText(e).width/100});
let a=0;
return Ip.forEach(e=>{let t=Array.from(e).slice(1,-1).reduce((e,t)=>e+r[t],0);
a=Math.max(a,t)}),{w:r,W:a}}catch{return null}}(e);
t&&r(t)};
t();
let n=null;
try{n=document.fonts,n.ready.then(t),n.addEventListener("loadingdone",t)}catch{}
return()=>{try{n&&n.removeEventListener("loadingdone",t)}catch{}}},[]),
(0,m.useEffect)(()=>{try{document.title="Etimo"}catch{}
if(Ya())return;
let e=0,n=null,r=null,a=()=>{if(document.hidden)return void(r=setTimeout(a,1500));
let s=Ip[e=(e+1)%Ip.length],o=s.length,l=performance.now(),u=s.split("").map((e,t)=>0===t||t===o-1?0:360+170*(t-1)+130*Math.random());
n=setInterval(()=>{let e=performance.now()-l,c=!0,d=i.current,h=s.split("").map((t,n)=>{if(0===n||n===o-1||e>=u[n])return[t,1,t];
c=!1;
let r=d?d.w[t]:0,a=d?Rp.split("").filter(e=>Math.abs(d.w[e]-r)<=.14*r):[];
return a.length||(a=Rp.split("")),[a[Math.random()*a.length|0],0,t]});
t(h),c&&(clearInterval(n),n=null,r=setTimeout(a,1e4))},45)};
return r=setTimeout(a,1e4),()=>{clearTimeout(r),clearInterval(n)}},[]);
let s=(e,t,r)=>(0,f.jsx)("span",{className:"bc"+(e[1]?"":" sc"),style:r&&n?{width:n.w[e[2]]+"em"}:void 0,children:e[0]},t);
return(0,f.jsx)("span",{className:"brand",role:"img","aria-label":"Etimo",ref:a,children:(0,f.jsxs)("span",{className:"bw","aria-hidden":"true",children:[s(e[0],0),(0,f.jsx)("span",{className:"bm",style:n?{width:n.W+"em"}:void 0,children:e.slice(1,-1).map((e,t)=>s(e,t+1,1))},"m"),s(e[e.length-1],9)]})})}
m=d("aIIwE");
(0,f.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M12 3 2.5 8 12 13l9.5-5L12 3Z"}),(0,f.jsx)("path",{d:"m2.5 12 9.5 5 9.5-5M2.5 16l9.5 5 9.5-5"})]}),
(0,f.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"})}),
(0,f.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"})}),
(0,f.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,f.jsx)("circle",{cx:"12",cy:"12",r:"8.5"}),(0,f.jsx)("path",{d:"M3.5 12h17M12 3.5c2.6 2.4 3.9 5.2 3.9 8.5s-1.3 6.1-3.9 8.5c-2.6-2.4-3.9-5.2-3.9-8.5S9.4 5.9 12 3.5Z"})]});
function Dp({selId:e,conc:t,ui:n,theme:r}){let a=ja(),
i=(0,m.useRef)(null),
s=(0,m.useRef)(null),
o=(0,m.useRef)(null),
l=(0,m.useRef)(null),
[u,c]=(0,m.useState)("all"),
[d,h]=(0,m.useState)(null),
[p,g]=(0,m.useState)(!1),
[v,b]=(0,m.useState)(!1),
[y,k]=(0,m.useState)(0),
w=(0,m.useRef)(d);
w.current=d,
(0,m.useEffect)(()=>{let n=s.current;
if(i.current&&n)return o.current=function(e,t,n,r,a={}){let i,s,o,l,u,c,d,h=ja(),f=Ya();
/* GL: the base of the map (areas, borders, relief, census view) is drawn by the map engine in site/map-gl.js, which also owns zoom and pan.
   Everything on top (pins, names, outlines, card) is still drawn here. The functions for it are kV ... gStart further down.
   The old map drawn here in SVG was retired on 2026-11-13: when the engine cannot start (no WebGL2, a failed or stalled
   download) the map box shows a short note instead (kNoMap). GL is always on; the remaining "!GL" branches are inert. */
let GL=!0,GM=null,gT=Fh,gB=0,gC=0,gZ=-1,gOne=1,gFit=0,gMv=!1,gLon=!1;
e.querySelectorAll(":scope > svg").forEach(e=>e.remove());
let p=null,m={};
r&&(p=new Set,ha[r].forEach(e=>{p.add(e.L.id),(m[e.L.id]=m[e.L.id]||[]).push(e.e)}));
let g=p?ua.filter(e=>p.has(e.id)&&e.info&&null!=e.info.lat).sort((e,t)=>e.info.lon-t.info.lon):[],v=e.querySelector("#wc");
v&&(v.innerHTML=g.map((e,t)=>{let n=m[e.id],r=n[0];
return'<button type="button" class="wcd '+e.family+'" data-i="'+t+'" role="option"><span class="wl"><span class="dot '+e.family+'"></span><span class="wn">'+ei(Na(e))+"</span></span><b>"+ei(r.word)+'</b><span class="wt pr">'+ei(ai(r))+(n.length>1?"<i>+"+(n.length-1)+"</i>":"")+'</span><span class="wi">'+(t+1)+" / "+g.length+"</span></button>"}).join("")),e.classList.toggle("hascar",!!g.length),/* how much of the map's bottom the word strip takes (the credits line sits above it on phones) */e.style.setProperty("--wch",v&&g.length?Math.max(0,e.clientHeight-v.offsetTop)+"px":"0px");
let b=e.clientWidth,y=e.clientHeight,k=v?Array.prototype.slice.call(v.children):[],w=()=>(v&&g.length?v.offsetHeight+16:0)+(!t||t.hidden||me()&&t.classList.contains("kpanel")?0:t.offsetHeight+14),x=ua.filter(e=>e.info&&null!=e.info.lat),j=kd().parallels([35,60]).rotate([-30,0]),S=Math.max(22,.06*b),_=Math.max(22,.07*y);
j.fitExtent([[S,_],[b-S,y-_]],{type:"FeatureCollection",features:x.filter(e=>la.indexOf(e.family)<5).map(e=>({type:"Feature",geometry:{type:"Point",coordinates:[e.info.lon,e.info.lat]}}))});
/* Two drawings, one on top of the other. q (base): areas, borders, relief. It is drawn a quarter larger than the box on every side (KP) and, while a gesture runs, moved as a picture instead of being redrawn. Q2 (top): pins, city names, labels; light enough to redraw on every frame, so it stays sharp. */
let KP=.25,q=ws(e).insert("svg",":first-child").attr("viewBox",[-KP*b,-KP*y,(1+2*KP)*b,(1+2*KP)*y]).attr("data-kl","base"),E=q.append("g"),Q2=ws(e).insert("svg",()=>q.node().nextSibling).attr("viewBox",[0,0,b,y]).attr("data-kl","top"),E2=Q2.append("g"),kMo=new MutationObserver(()=>{let a=q.node(),o=Q2.node();
["class","data-f","data-sf"].forEach(n=>{let v=a.getAttribute(n);
null==v?o.removeAttribute(n):o.getAttribute(n)!==v&&o.setAttribute(n,v)})});
kMo.observe(q.node(),{attributes:!0,attributeFilter:["class","data-f","data-sf"]});
/* GL: what little is left of the base drawing (the dimming mask, names at deep zoom) lives in the top drawing, under the pins: one drawing to refresh per frame instead of two */
GL&&(q.attr("data-gl",1),E.remove(),E=Q2.insert("g",":first-child"));
/* pointer position in map-box pixels, whatever the base picture is doing at that moment */
q.node().__kpt=ev=>{let r=e.getBoundingClientRect();
return[(ev.clientX-r.left-e.clientLeft)*b/(e.clientWidth||b),(ev.clientY-r.top-e.clientTop)*y/(e.clientHeight||y)]};
yf(q),j.clipExtent([[-2*b,-2*y],[3*b,3*y]]),x.forEach(e=>{e._xy=j([e.info.lon,e.info.lat])});
let z=sd(j);
0;
"dark"===document.documentElement.getAttribute("data-theme")||!document.documentElement.getAttribute("data-theme")&&matchMedia("(prefers-color-scheme: dark)").matches;
q.attr("class","m-wait"),e.classList.add("loading");
{let t=()=>{q.classed("m-wait",!1).classed("m-in",!0),e.classList.remove("loading")};
op().then(t,t),setTimeout(t,1800)}
GL||(wt=E.append("path").attr("class","coast").attr("d",z(mf())),xt=E.append("path").attr("class","bord").attr("d",z((df||(df=af(ca,ca.objects.countries,(e,t)=>e!==t)),df))),jt=wt.attr("d"),St=xt.attr("d"));
let N=[];
if(!GL){let e=mf();
("FeatureCollection"===e.type?e.features:[e]).forEach(e=>{let t=e.geometry;
("Polygon"===t.type?[t.coordinates]:t.coordinates).forEach(e=>{e[0].some(e=>e[0]>=-40&&e[0]<=180&&e[1]>0)&&e.forEach(e=>{let t=e.map(e=>j([Math.max(-60,Math.min(180,e[0])),Math.max(-10,e[1])])),n=1e9,r=1e9,a=-1e9,i=-1e9;
t.forEach(e=>{e[0]<n&&(n=e[0]),e[0]>a&&(a=e[0]),e[1]<r&&(r=e[1]),e[1]>i&&(i=e[1])}),N.push({r:t,b:[n,r,a,i]})})})})}
let M=j.scale()/function(e){return e&&e.__esModule?e.default:e}(lf).S0,C=j.translate(),L="translate("+C[0]+","+C[1]+") scale("+M+")",T=e=>!(!da[e.lang]||!da[e.lang].d),A=E.append("g").attr("class","zones"),P=A.append("g").attr("transform",L),I=A.insert("g",":first-child").attr("transform",L).attr("class","dias"),R=E.append("g").attr("class","ters"),O=R.append("g").attr("transform",L),D=null;
function F(e,t){let n=x.indexOf(e),r=e._xy,a=Xa(e),i=a<1e3?15:a<1e4?25:a<1e5?40:a<1e6?70:a<1e7?140:200,s=j([e.info.lon,e.info.lat+i/111]),o=Math.max(Math.hypot(s[0]-r[0],s[1]-r[1]),1.2),l=Ni(72).map(e=>{let t=e/72*2*Math.PI;
return[r[0]+o*Math.cos(t),r[1]+o*Math.sin(t)]}),u=(D||(D=dl.from(x,e=>e._xy[0],e=>e._xy[1]).voronoi([-2*b,-2*y,3*b,3*y]))).cellPolygon(n);
if(!u)return l;
let c=B(l,u=u.slice(0,-1));
if(c.length>2&&0!==Pd(c))return c;
let d=B(l,u.slice().reverse());
return d.length>2?d:l}
function B(e,t){let n=e;
for(let e=0;e<t.length&&n.length;e++){let r=t[e],a=t[(e+1)%t.length],i=e=>(a[0]-r[0])*(e[1]-r[1])-(a[1]-r[1])*(e[0]-r[0])>=0,s=(e,t)=>{let n=e[0],i=e[1],s=t[0],o=t[1],l=r[0],u=r[1],c=a[0],d=a[1],h=((n-l)*(u-d)-(i-u)*(l-c))/((n-s)*(u-d)-(i-o)*(l-c));
return[n+h*(s-n),i+h*(o-i)]},o=n;
n=[];
for(let e=0;e<o.length;e++){let t=o[e],r=o[(e+1)%o.length],a=i(t),l=i(r);
a?(n.push(t),l||n.push(s(t,r))):l&&n.push(s(t,r))}}
return n}
let K={};
function G(e,t){let n=e.id+(t?"z":"");
if(K[n])return K[n];
let r=F(e);
0>Pd(r)&&(r=r.slice().reverse());
let a=1e9,i=1e9,s=-1e9,o=-1e9;
r.forEach(e=>{e[0]<a&&(a=e[0]),e[0]>s&&(s=e[0]),e[1]<i&&(i=e[1]),e[1]>o&&(o=e[1])});
let l="";
return N.forEach(e=>{if(e.b[0]>s||e.b[2]<a||e.b[1]>o||e.b[3]<i)return;
let t=B(e.r,r);
t.length<3&&(t=B(e.r,r.slice().reverse())),t.length>2&&(l+="M"+t.map(e=>e[0].toFixed(1)+","+e[1].toFixed(1)).join("L")+"Z")}),K[n]=l}
function U(e){let t,n,r;
if(T(e)){let t=da[e.lang].b;
return[t[0]*M+C[0],t[1]*M+C[1],t[2]*M+C[0],t[3]*M+C[1]]}
return n=(t=F(e)).map(e=>e[0]),[Math.min(...n),Math.min(...r=t.map(e=>e[1])),Math.max(...n),Math.max(...r)]}
let H=E.append("g").attr("class","adm");

(!ff&&(ff=kAfterMap().then(()=>new Promise(e=>(window.requestIdleCallback||(e=>setTimeout(e,300)))(e,{timeout:1500}))).then(()=>fetch("data/today.json")).then(e=>e.json()).then(e=>{let t=ef(e,e.objects.regions).features,n=ef(e,e.objects.countries).features;
return[...t,...n].forEach(e=>{e.bb=kHitBox(e)}),hf={t:e,R:t,C:n,get mesh(){return this._m||(this._m=af(e,e.objects.regions,(e,t)=>e!==t&&e.properties.c===t.properties.c))}}}).catch(()=>null)),ff).then(e=>{e&&q.node().isConnected&&(GL||H.append("path").attr("d",z(e.mesh)),bt(),kKeys())});
try{new ResizeObserver(()=>e.style.setProperty("--ch",(t.hidden?0:t.offsetHeight+10)+"px")).observe(t),new MutationObserver(()=>e.style.setProperty("--ch",(t.hidden?0:t.offsetHeight+10)+"px")).observe(t,{attributes:!0,attributeFilter:["hidden"]})}catch{}
GL||E.insert("g","g.adm").attr("class","shd").attr("pointer-events","none").attr("transform",L).append("image").attr("href",matchMedia("(max-width:820px),(pointer:coarse) and (max-width:1180px)").matches?__ETIMO_H_SHADE_S__:__ETIMO_H_SHADE__).attr("decoding","async").style("opacity",0).on("error",function(){let w=__ETIMO_H_SHADE_WEBP__;
this.getAttribute("href")!==w&&this.setAttribute("href",w)}).on("load",function(){this.style.transition="opacity .6s";
requestAnimationFrame(()=>{this.style.opacity=""})}).attr("x",-1490).attr("y",-1670).attr("width",3150).attr("height",1660).attr("preserveAspectRatio","none"),e.addEventListener("focusin",e=>{e.target.closest&&e.target.closest(".kfb")&&t.classList.contains("kpanel")&&!t.hidden&&(t.hidden=!0,Le(null))});
let W=E.append("g").attr("class","adm2").attr("pointer-events","none");
yt=E.append("g").attr("class","adm2l").attr("pointer-events","none"),setTimeout(()=>kAfterMap().then(Zf).then(e=>{e&&q.node().isConnected&&(GL||W.append("path").attr("class","d2m").attr("d",z(af(e.topo,e.topo.objects.d,(e,t)=>e!==t))),se=e.F.map((e,t)=>{let n=e.geometry,r="Polygon"===n.type?[n.coordinates]:n.coordinates,a=null,i=-1;
if(r.forEach(e=>{let t=e[0].map(e=>j(e)).filter(Boolean),n=0,r=0,s=0;
for(let e=0,a=t.length;e<a;e++){let i=t[e],o=t[(e+1)%a],l=i[0]*o[1]-o[0]*i[1];
n+=l,r+=(i[0]+o[0])*l,s+=(i[1]+o[1])*l}
let o=Math.abs(n/2);
o>i&&o>0&&(i=o,a={r:t,c:[r/(3*n),s/(3*n)]})}),!a)return{i:t,n:""};
let s=1e9,o=1e9,l=-1e9,u=-1e9;
return a.r.forEach(e=>{e[0]<s&&(s=e[0]),e[0]>l&&(l=e[0]),e[1]<o&&(o=e[1]),e[1]>u&&(u=e[1])}),{i:t,n:e.properties.n||"",cx:a.c[0],cy:a.c[1],w:l-s,h:u-o}}).filter(e=>e.n&&isFinite(e.cx)&&isFinite(e.w)),Ne(kV()))}),1400);
let $=E2.append("g").attr("class","regs"),fA={};
x.forEach(e=>{T(e)&&(fA[e.family]=(fA[e.family]||0)+(da[e.lang].a||0))});
let fV=Object.values(fA).filter(e=>e>0).map(Math.log),f0=Math.min(...fV),f1=Math.max(...fV);
$.selectAll("text").data([["Slavic",33,53.5],["Romance",.5,44.6],["Iranian",54,33],["Greek",24.6,37],["Albanian",20.1,41.1],["Uralic",62,63.6],["Turkic",70,47.5],["Caucasian",44.6,44.15],["Mongolic",106,45.2]/*@EXTRA_FAM_LABELS@*/]).join("text").attr("class",e=>"regn fam "+e[0]).style("--fk",e=>fA[e[0]]>0&&f1>f0?((Math.log(fA[e[0]])-f0)/(f1-f0)).toFixed(3):0).attr("x",e=>j([e[1],e[2]])[0]).attr("y",e=>j([e[1],e[2]])[1]).text(e=>Ca(e[0]).toLocaleUpperCase());
let V=x.filter(T).sort((e,t)=>da[t.lang].a-da[e.lang].a);
P.selectAll("path").data(GL?[]:V).join("path").attr("class",e=>"zone "+e.family+(e.info&&e.info.hist?" hist":"")).attr("fill-rule","evenodd").attr("d",e=>da[e.lang].v||da[e.lang].d),x.filter(e=>!GL&&!T(e)).forEach(e=>A.append("path").datum(e).attr("class","zone "+e.family+(e.info&&e.info.hist?" hist":"")).attr("d",G(e,1))),function(e,t,n,r,a,i,s){op().then(o=>{if(!o||!e.node().isConnected)return;
let l=++sp,u=t.scale()/1e3,c=t.translate(),d="translate("+c[0]+","+c[1]+") scale("+u/o.u+")",h=e.insert("g","path.coast").attr("class","topo").attr("pointer-events","none");
h.append("path").attr("class","tland").attr("d",s);
let f=h.append("g").attr("transform",d);
f.append("path").attr("class","tgrid").attr("d",o.g).attr("vector-effect","non-scaling-stroke");
let p=f.append("defs");
p.append("path").attr("id","tm"+l).attr("d",o.m).attr("fill","none").attr("vector-effect","non-scaling-stroke"),p.append("path").attr("id","ti"+l).attr("d",o.i).attr("fill","none").attr("vector-effect","non-scaling-stroke"),f.append("use").attr("href","#tm"+l).attr("class","tc tcm"),f.append("use").attr("href","#ti"+l).attr("class","tc tci");
let m={};
r.forEach(e=>{(m[e.family]=m[e.family]||[]).push(a(e)?{d:da[e.lang].d,t:n}:{d:i(e,1),t:null})});
let g=e.insert("g","g.adm").attr("class","topo2").attr("pointer-events","none"),v=g.append("defs");
Object.keys(m).forEach(e=>{let t=v.append("clipPath").attr("id","tcp"+l+e);
m[e].forEach(e=>{let n=t.append("path").attr("d",e.d).attr("clip-rule","evenodd");
e.t&&n.attr("transform",e.t)});
let r=g.append("g").attr("clip-path","url(#tcp"+l+e+")").attr("class","tf "+e).append("g").attr("transform",d);
r.append("use").attr("href","#tm"+l).attr("class","tc tcm"),r.append("use").attr("href","#ti"+l).attr("class","tc tci");
let a=m[e].filter(e=>e.t).map(e=>e.d).join("");
a&&g.append("g").attr("class","tout "+e).attr("transform",n).append("path").attr("d",a).attr("fill","none").attr("fill-rule","evenodd").attr("vector-effect","non-scaling-stroke")})})}(E,j,L,x,T,G,GL?"":z(mf())),GL||Yf(I),A.selectAll("path.zone").each(function(e){let t=Vf(e);
t&&(this.style.fill=t,this.style.stroke=t,this.style.setProperty("--zc",t))}),Df().then(e=>{let t=e&&e.st;
t&&A.selectAll("path.zone").classed("zmin",e=>"min"===t[e.lang]).classed("zplu",e=>"plu"===t[e.lang])}),e.querySelectorAll(".mtip").forEach(e=>e.remove());
let Z=document.createElement("div");
Z.className="mtip",Z.hidden=!0,e.appendChild(Z);
let Q=E.append("g").attr("transform",L).append("path").attr("class","zhl").attr("fill-rule","evenodd");
function Y(t,n){if(t.pointerType&&"mouse"!==t.pointerType)return;
let r=Ws(t.sourceEvent||t,e);
Z.innerHTML=n,Z.hidden=!1;
let a=Z.offsetWidth,i=Z.offsetHeight,s="mouse"!==At,o=s?r[0]-a/2:r[0]+14,l=s?r[1]-i-26:r[1]+16;
s?(o=Math.max(8,Math.min(o,e.clientWidth-a-8)),l<58&&(l=r[1]+28)):(o+a>e.clientWidth-8&&(o=r[0]-a-14),l+i>e.clientHeight-8&&(l=r[1]-i-12)),Z.style.transform="translate("+Math.round(o)+"px,"+Math.round(l)+"px)"}
function J(){clearTimeout(Pt),Z.hidden=!0,Z.classList.remove("pin"),Q.attr("d",null)}
A.selectAll("path").on("pointermove",(e,t)=>{if(!vt())return e.pointerType&&"mouse"!==e.pointerType?J():(Q.attr("class","zhl "+t.family).attr("d",T(t)?da[t.lang].d+(da[t.lang].x||""):null),void Y(e,"<b>"+ei(Na(t))+"</b><span>"+ei(Ca(t.family))+" · "+ei(Ma(t))+"</span>"))}).on("pointerleave",()=>{vt()||J()}),q.on("pointerleave",()=>{X||J(),De(null)});
let X=!1,ee={},te=null,ne={},re={},ae=null,ie=null,se=[],oe=new Set;
function le(e){let t,n,r,a=kPl(e);
if(!a)return null;
let s=a.r?a.r.properties.n:"",o=a.c?a.c.properties.n:"",l=a.r&&(t=a.r)&&("Crimea"===t.properties.n||"Sevastopol"===t.properties.n)?h.crimea:"";
(r=[((n=j(e))[0]-C[0])/M,(n[1]-C[1])/M],x.filter(e=>{let t=0;
return function(e){if(ee[e.lang])return ee[e.lang];
let t=da[e.lang]&&da[e.lang].d,n=[];
return t&&t.split("M").forEach(e=>{e&&n.push(e.replace(/Z/g,"").split("L").map(e=>e.split(",").map(Number)))}),ee[e.lang]=n}(e).forEach(e=>{Id(e,r)&&t++}),t%2==1})).map(Na);
ae=ze(e);
{let t=Kf&&Kf.E;
if(ie=null,t)if(t.so&&pf(t.so.f,e)&&Wu(t.so.f,e))ie={nm:t.so.f.properties.n,d:t.so};
else{let e=a.r&&a.r.properties.c+"|"+a.r.properties.n,n=a.c&&a.c.properties.c;
ie=e&&t.r[e]?{d:t.r[e]}:n&&t.r[n]?{d:t.r[n]}:null}}
a.r&&/^(Autonomous Republic of Crimea|Sevastopol)$/.test(a.r.properties.n)&&(o={en:"disputed",sq:"e diskutueshme",sr:"sporno",sc:"спорно"}[ya()]||"disputed");
let u=ie&&ie.nm||s;
return function(e,t,n,r,a){let i=(e,t)=>{let n=e.map(Na);
return n.slice(0,t).join(", ")+(n.length>t?" +"+(n.length-t):"")},s=(e,t)=>{let n=ae&&Kf&&Kf.M[e.lang];
return!!(n&&n[t]&&n[t].some(e=>e[0]===ae._i))},MN="MNE"===(e.c||e.r)?.properties.c,o=x.filter(t=>ce(t,"d",a)||s(t,"h")||MN&&"Bosnian"===t.lang&&ce(t,"x",a)),l=x.filter(e=>!o.includes(e)&&(ce(e,"x",a)||s(e,"x"))),u=e=>e===nt?-1:0;
o.sort((e,t)=>u(e)-u(t)),l.sort((e,t)=>u(e)-u(t)),Ct={t:t||n,s:t&&n?r||n:"",hl:o,dl:l,eth:ie&&ie.d,country:(e.c||e.r)?.properties.c,countryName:e.c?.properties.n,rid:e.r?.properties.region_id,rf:e.r||null,cd:n,dd:ae&&ae.properties.n||""};
let c="<b>"+ei(t||n)+(t&&n?"<em> · "+ei(r||n)+"</em>":"")+"</b>";
if((o.length||l.length)&&(c+='<span class="hm">'+ei(i(o.concat(l),12))+"</span>"),ie&&ie.d){let e=ie.d.g,t=e[0];
c+='<span class="hm eth"><i>'+ei(ie.d.y)+"</i>"+e.slice(0,4).map(e=>ei(e[0])+" "+e[1]+"%").join(" · ")+(t&&t[1]>50?'<em class="emj">'+ei(t[0])+" "+ei({en:"majority",sq:"shumicë",sr:"većina",sc:"већина"}[ya()]||"majority")+"</em>":t?'<em class="emj nomaj">'+ei({en:"no majority",sq:"pa shumicë",sr:"bez većine",sc:"без већине"}[ya()]||"no majority")+"</em>":"")+"</span>"}
if(nt&&!o.includes(nt)&&!l.includes(nt)){let t=ne[nt.lang],n=t&&(t.home[0]||t.dia[0]||{}).d?ae:e.r||e.c;
t&&n&&(t.home.some(e=>e.f===n)?c+='<span class="hm">'+ei(Na(nt))+" · "+ei(Xf("home"))+"</span>":t.dia.some(e=>e.f===n)&&(c+='<span class="hm">'+ei(Na(nt))+"</span>"))}
return c}(a,ae&&ae.properties.n||u,o,ae&&u?u:l,r)}
function ue(e){return e?e.split("M").filter(Boolean).map(e=>e.replace(/Z/g,"").split("L").map(e=>e.split(",").map(Number))):[]}
function ce(e,t,n){let r=da[e.lang]&&da[e.lang][t];
if(!r)return!1;
let a=e.lang+t,i=re[a]||(re[a]=ue(r)),s=0;
return i.forEach(e=>{Id(e,n)&&s++}),s%2==1}
/* The place at a point (lon/lat): {r: region, c: country}, or null, as a click finds it. One exception to "region first":
   a country without regions of its own that lies inside or over a region of another country (Vatican City in Rome,
   Macau in Guangdong, the UN buffer zone in Cyprus) is that place, not the region. A second copy of a country that does
   have regions (the data has Palestine as PSE with West Bank and Gaza, and again as PSX) leaves the region as it was. */
function kPl(e){if(!hf)return null;
let In=t=>pf(t,e)&&kHitIn(t,e),rc=hf.rc||(hf.rc=new Set(hf.R.map(t=>t.properties.c))),cn=hf.cn||(hf.cn=Object.fromEntries(hf.C.map(t=>[t.properties.c,t.properties.n]))),cs=hf.C.filter(In),r=hf.R.find(In),o=cs.find(t=>!rc.has(t.properties.c));
return o&&r&&cn[r.properties.c]!==o.properties.n?{r:null,c:o}:r||cs[0]?{r:r,c:cs[0]}:null}
function de(e){let a=kPl(e);return a&&(a.r||a.c)||null}
function he(){Et&&(wt&&wt.attr("d",jt),xt&&xt.attr("d",St),_t&&qt&&_t.attr("d",qt)),Et=null}
function fe(e){let t=e.k,n=-e.x/t,r=-e.y/t;
return t<2||n<Et[0]||r<Et[1]||n+b/t>Et[2]||r+y/t>Et[3]||t<.5*Et[4]}
function pe(e){if(!wt||p)return;
if(e.k<2.2)return void he();
if(Et&&!fe(e)&&e.k<=2.5*Et[4])return;
if(!Ff)return void(Bf||(Bf=fetch("data/world-50m.json").then(e=>e.json()).then(e=>{let t=ef(e,e.objects.land);
ef(e,e.objects.countries).features.forEach((t,n)=>{t.bb=pu(t),e.objects.countries.geometries[n]._bb=t.bb});
let n=(t.geometry?t.geometry:t.features[0].geometry).coordinates.map(e=>{let t={type:"Feature",geometry:{type:"Polygon",coordinates:e}};
return t.bb=pu(t),t});
return Ff={t:e,lp:n}}).catch(()=>null))).then(e=>{e&&q.node().isConnected&&pe(kV())});
let t=e.k,n=b/t,r=y/t,a=-e.x/t,i=-e.y/t,s=[a-n,i-r,a+2*n,i+2*r,t],o=1e9,l=1e9,u=-1e9,c=-1e9;
for(let e=0;e<=8;e++)for(let t=0;t<=8;t++){let n=j.invert([s[0]+(s[2]-s[0])*e/8,s[1]+(s[3]-s[1])*t/8]);
n&&isFinite(n[0])&&(o=Math.min(o,n[0]),u=Math.max(u,n[0]),l=Math.min(l,n[1]),c=Math.max(c,n[1]))}
o-=3,l-=3,u+=3,c+=3;
let d=e=>{let t=e.bb||e._bb;
return!!t&&!(t[1][1]<l||t[0][1]>c)&&(t[0][0]>t[1][0]||!(t[1][0]<o||t[0][0]>u))},h=j.clipExtent();
try{j.clipExtent([[s[0],s[1]],[s[2],s[3]]]);
let e={type:"FeatureCollection",features:Ff.lp.filter(d)},t=z(e)||"",n=z(af(Ff.t,Ff.t.objects.countries,(e,t)=>e!==t&&(d(e)||d(t))))||"";
wt.attr("d",t),xt.attr("d",n),_t||(_t=E.select("path.tland"),qt=_t.empty()?null:_t.attr("d")),_t&&qt&&_t.attr("d",t),Et=s}finally{j.clipExtent(h)}}
function me(){return!p&&!(!window.matchMedia||!matchMedia("(min-width: 64rem)").matches)}
function ge(){return me()&&t&&!t.hidden&&t.classList.contains("kpanel")?t.offsetWidth+12:0}
function ve(e){let t={en:{rg:"Area",lh:"Languages here",pl:"Places",kin:"Kinship",maj:"majority",nomaj:"No group has a majority",lin:"Lineage",cen:"Home region"},sq:{rg:"Zona",lh:"Gjuhët këtu",pl:"Vende",kin:"Afërsia",maj:"shumicë",nomaj:"Asnjë grup nuk ka shumicë",lin:"Prejardhja",cen:"Rajoni"},sr:{rg:"Oblast",lh:"Jezici ovde",pl:"Mesta",kin:"Srodstvo",maj:"većina",nomaj:"Nijedna grupa nema većinu",lin:"Poreklo",cen:"Matična oblast"},sc:{rg:"Област",lh:"Језици овде",pl:"Места",kin:"Сродство",maj:"већина",nomaj:"Ниједна група нема већину",lin:"Порекло",cen:"Матична област"}};
return(t[ya()]||t.en)[e]||t.en[e]}
function be(e,t){return'<button type="button" class="prow" data-sel="'+e.id+'"><i class="pdot" style="background:'+(Vf(e)||"")+'"></i><span class="prn"><b>'+ei(Na(e))+"</b><small>"+ei(Pf(e))+"</small></span>"+"</button>"}
function ye(e){let t={en:{rgn:"Region",spk:"Census count",st:"Status",go:"Words",more:"Details",near:"Nearby in this family",pl:"Places",hint:"Tap a place to see who speaks there"},sq:{rgn:"Rajoni",spk:"Regjistrimi",st:"Statusi",go:"Fjalët",more:"Detaje",near:"Afër në këtë familje",pl:"Vende",hint:"Prek një vend për të parë kush flet atje"},sr:{rgn:"Oblast",spk:"Popis",st:"Status",go:"Reči",more:"Detalji",near:"U blizini, ista porodica",pl:"Mesta",hint:"Dodirni mesto da vidiš ko tamo govori"},sc:{rgn:"Област",spk:"Попис",st:"Статус",go:"Речи",more:"Детаљи",near:"У близини, иста породица",pl:"Места",hint:"Додирни место да видиш ко тамо говори"}};
return(t[ya()]||t.en)[e]||t.en[e]}
let ke={},we=[],xe=null,je=null;
function Se(e,t,n){let r=getComputedStyle(document.documentElement),a=r.getPropertyValue("--bg").trim(),i=r.getPropertyValue("--ink").trim(),s=parseInt((a||"#fff").replace("#","").slice(0,2),16)>128?.94:.7,o=2*Math.PI/(e.x1-e.x0||1),l=e.x0,u=e.descendants().filter(t=>t!==e),c=Math.min(2,Math.max(1,...u.filter(e=>!e.data.L).map(t=>t.depth-e.depth))),d=150,h=54/c,f=lh().padAngle(.006).padRadius(80).cornerRadius(2.5),p="",m="",g=[],v=!e.depth,b=n&&n.size,y="km"+Math.random().toString(36).slice(2,7),k=document.createElement("canvas").getContext("2d"),w=(e,t,n,r)=>(k.font=n+" "+t+"px Manrope, system-ui, sans-serif",k.measureText(e).width+r*t*e.length),x=(e,t,n,r,a,i)=>{for(let s=t;s>=n;s-=.25)if(w(e,s,a,i)<=r)return s;
return 0},j=(e,t)=>[e*Math.sin(t),-e*Math.cos(t)],S=e=>e[0].toFixed(1)+","+e[1].toFixed(1);
u.forEach((r,u)=>{let k=r.data.L,w=r.depth-e.depth;
if(!k&&w>c)return;
let _=k?"leaf":1===w?"a":"b",q=k?87:30+(w-1)*h,E=k?d:30+w*h-2,z=Mf(If(r.fam),r)||If(r.fam)||"#888",N=(r.x0-l)*o,M=(r.x1-l)*o,C=!b||(k?n.has(k.id):r.leaves().some(e=>e.data.L&&n.has(e.data.L.id))||1===r.depth&&n.has("__fam:"+r.fam)),L=(N+M)/2,T=M-N;
if(p+='<path d="'+f({startAngle:N,endAngle:M,innerRadius:q,outerRadius:E})+'" fill="'+(r.__f=((e,t)=>{let F=If(r.fam)||e;
return"leaf"===t?e:"a"===t?s<.9?Ms(F,a)(.32):F:Ms(F,a)(s<.9?.48:.3)})(z,_))+'" class="'+(C?"":"off ")+(k&&k.id===t?"kmf":"")+'"><title>'+ei(r.data.name)+"</title></path>",k){if(p+='<path d="'+f({startAngle:N,endAngle:M,innerRadius:145.5,outerRadius:d})+'" fill="'+Ms(z,i)(.5)+'" class="'+(C?"":"off")+'"/>',!(!v||C&&b))return;
let e=r.data.name,n=q+6,a=142-n,s=Math.min(11,.78*(T*(n+3)-2)),o=s>=6?x(e,s,6,a,500,.01):0,l="km2l"+(C?"":" off")+(k.id===t?" f":"");
if(!o)return void g.push({nm:e,ph:L,cl:l});
let u=180*L/Math.PI,c=L>Math.PI;
return void(m+='<text class="'+l+'" style="'+__labs(r.__f)+'" font-size="'+o.toFixed(2)+'" dy=".35em" text-anchor="middle" transform="rotate('+(u-90).toFixed(2)+") translate("+((n+d-6)/2).toFixed(1)+",0)"+(c?" rotate(180)":"")+'">'+ei(e)+"</text>")}
let A=E-q,P=(q+E)/2,I=Math.min(T/2-.01,1.3),R=2*I*P-6,O=r.data.name.toUpperCase(),D=x(O,Math.min("a"===_?10:8.5,.5*A),5.5,R,600,"a"===_?.14:.1);
if(!D||!C)return;
let F=Math.cos(L)>=0,B=F?P-.33*D:P+.33*D,K=j(B,F?L-I:L+I),G=j(B,F?L+I:L-I),U=y+u;
m+='<path class="km2t" id="'+U+'" fill="none" stroke="none" d="M'+S(K)+"A"+B.toFixed(1)+","+B.toFixed(1)+" 0 0 "+(F?1:0)+" "+S(G)+'"/><text class="'+("a"===_?"km2a":"km2b")+'" style="'+__labs(r.__f)+'" font-size="'+D.toFixed(2)+'" text-anchor="middle"><textPath href="#'+U+'" startOffset="50%">'+ei(O)+"</textPath></text>"});
let _=0,q=0,E=156;
if(g.length){let e=e=>{let t=e.map(e=>({...e,x:d*Math.sin(e.ph),yr:-d*Math.cos(e.ph),w:w(e.nm,10,500,0)+2})).sort((e,t)=>Math.abs(e.x)-Math.abs(t.x)),n=[];
return t.forEach(e=>{let t=[];
if(Math.abs(e.x)<52.5){let n=Math.max(-E+e.w/2,Math.min(E-e.w/2,e.x));
t.push({an:"middle",tx:n,b0:n-e.w/2,b1:n+e.w/2})}
if(e.x<0){let n=Math.max(-E,e.x-3);
t.push({an:"start",tx:n,b0:n,b1:n+e.w})}else{let n=Math.min(E,e.x+3);
t.push({an:"end",tx:n,b0:n-e.w,b1:n})}
for(let r=0;r<14;r++)for(const a of t){let t=a.b0-4,i=a.b1+4;
if(n.every(n=>!(n.r===r&&!(i<n.b0||t>n.b1)||n.r<r&&e.x>n.c0-2&&e.x<n.c1+2||n.r>r&&n.x>a.b0-2&&n.x<a.b1+2)))return void n.push({...e,r:r,...a,b0:t,b1:i,c0:a.b0,c1:a.b1})}}),n},t=e(g.filter(e=>Math.cos(e.ph)>=0)),n=e(g.filter(e=>Math.cos(e.ph)<0)),r=t.reduce((e,t)=>Math.max(e,t.r+1),0),a=n.reduce((e,t)=>Math.max(e,t.r+1),0);
_=r?14*r+12:0,q=a?14*a+12:0,[[t,-1],[n,1]].forEach(([e,t])=>e.forEach(e=>{let n=t<0?-160-14*e.r:160+14*e.r+8,r=t<0?n+3:n-9.5,a=e.yr+(t<0?-3:3),i=t<0?r+4:r-4,s="middle"===e.an?e.tx:e.x;
m+='<path class="km2d'+(e.cl.indexOf("off")>-1?" off":"")+'" d="M'+e.x.toFixed(1)+","+a.toFixed(1)+"L"+e.x.toFixed(1)+","+i.toFixed(1)+"L"+s.toFixed(1)+","+r.toFixed(1)+'"/><text class="'+e.cl.replace("km2l","km2o")+'" font-size="10" text-anchor="'+e.an+'" x="'+e.tx.toFixed(1)+'" y="'+n.toFixed(1)+'">'+ei(e.nm)+"</text>"}))}
return'<svg class="kmini km2'+(b?" karea":"")+'" viewBox="-156 '+(-156-_)+" 312 "+(312+_+q)+'" role="img">'+p+m+function(e){let t=e.parent;
if(!t)return"";
let n=t.children||[],r=2*Math.PI/(t.x1-t.x0||1),a=n.map(e=>(e.x1-e.x0)*r),i=t.depth?a:a.map(e=>Math.max(e,.22)),s=2*Math.PI/i.reduce((e,t)=>e+t,0),o=0,l=lh().padAngle(.03).padRadius(20).cornerRadius(1.2),u="";
return n.forEach((t,n)=>{let r=o;
o+=i[n]*s;
let a=1===t.depth?If(t.fam):Mf(If(t.fam),t)||If(t.fam);
u+='<path class="kmcr" d="'+l({startAngle:r,endAngle:o,innerRadius:14,outerRadius:24})+'" fill="'+a+'"'+(t===e?"":' opacity=".3"')+"/>"}),u}(e)+"</svg>"}
function _e(e,t){return we=e,e.map((e,n)=>{let r=function(e){let t=j(e);
if(!t)return[];
let n=[(t[0]-C[0])/M,(t[1]-C[1])/M];
return x.filter(e=>ce(e,"d",n))}([e[1],e[2]]);
return t&&!r.includes(t)&&r.unshift(t),r.sort((e,n)=>(n===t)-(e===t)||(n.family===(t&&t.family))-(e.family===(t&&t.family))),e._at=r,'<button type="button" class="ppl" data-pl="'+n+'"><span class="ppd">'+r.slice(0,4).map(e=>'<i style="background:'+(Vf(e)||"")+'"></i>').join("")+(r.length>4?"<small>+"+(r.length-4)+"</small>":"")+"</span>"+ei(e[0])+"</button>"}).join("")}
function qe(e){if(!e)return"";
let t=e.g,n=t[0];
return'<section class="psec"><p class="ph">'+ei(e.y)+'</p><div class="pbars">'+t.slice(0,6).map(e=>'<div class="pb"><span class="pbn">'+ei(e[0])+'</span><span class="pbt"><i style="width:'+Math.max(1.5,e[1])+'%"></i></span><b>'+e[1]+"%</b></div>").join("")+"</div>"+(n?'<p class="pmaj'+(n[1]>50?"":" no")+'">'+(n[1]>50?ei(n[0])+" · "+ei(ve("maj")):ei(ve("nomaj")))+"</p>":"")+"</section>"}
function nearFam(e){let t=e.family,n=ke[t];
if(!n){let e=x.filter(e=>e.family===t&&e.info&&null!=e.info.lat),r=(e,t)=>{let n=e.info.lat-t.info.lat,r=(e.info.lon-t.info.lon)*Math.cos((e.info.lat+t.info.lat)*Math.PI/360);
return n*n+r*r},a=e.slice().sort((e,t)=>e.info.lon-t.info.lon)[0];
n=[a];
let i=new Set(e.filter(e=>e!==a));
for(;i.size;){let e=n[n.length-1],t=null,a=1e18;
i.forEach(n=>{let i=r(e,n);
i<a&&(a=i,t=n)}),n.push(t),i.delete(t)}
ke[t]=n}
let r=n.indexOf(e);
return r<0||n.length<2?null:[n[(r-1+n.length)%n.length],n[(r+1)%n.length]]}
function nearMap(e){let t=e.info||{},n=new Set(nearFam(e)||[]),r=e=>e.info&&e.info.dialectOf,a=kV(),i=null,s=e=>[a.applyX(e._xy[0]),a.applyY(e._xy[1])],o=s(e);
try{let e=R.select("path.terr").node(),t=e&&e.getBoundingClientRect(),n=Q2.node().getBoundingClientRect();
t&&t.width&&(i=[t.left-n.left,t.top-n.top,t.right-n.left,t.bottom-n.top])}catch{}
if(GL&&T(e)){let u=U(e);
i=[a.applyX(u[0]),a.applyY(u[1]),a.applyX(u[2]),a.applyY(u[3])]}
return x.filter(n=>n!==e&&n._xy&&(void 0===r(n)||r(n)===e.lang||void 0!==t.dialectOf&&r(n)===t.dialectOf)).map(e=>{let t=s(e);
return[e,i?Math.hypot(Math.max(i[0]-t[0],0,t[0]-i[2]),Math.max(i[1]-t[1],0,t[1]-i[3])):0,Math.hypot(t[0]-o[0],t[1]-o[1])]}).sort((e,t)=>e[1]-t[1]||e[2]-t[2]).slice(0,8).forEach(e=>n.add(e[0])),n}
function panelSecs(e,i){let n=e.info,s="";
void 0!==n.dialectOf&&n.cls&&n.cls.length&&(s+='<section class="psec pcen"><p class="ph">'+ei(ka(Zr[ya()].clsT))+"</p><ul>"+n.cls.map(e=>"<li><b>"+ei(za(e[0]))+"</b><span></span><i>"+ei(za(e[1]))+"</i></li>").join("")+"</ul></section>"),n.cen&&n.cen.length&&(s+='<section class="psec pcen"><p class="ph">'+ei(ka(Zr[ya()].cenT))+"</p><ul>"+n.cen.map(e=>'<li data-source-country="'+ei(e[0])+'"><b>'+ei(za(e[0]))+"</b><span>"+ei(za(e[1]))+"</span><i>"+ei(e[2])+" · "+ei(za(e[3]))+"</i></li>").join("")+"</ul></section>"),i&&(s+='<section class="psec"><p class="ph">'+ei(ye("near"))+'</p><div class="pnav"><button type="button" class="pn" data-sel="'+i[0].id+'" style="--nc:'+(Vf(i[0])||"")+'"><span class="pa">‹</span><i></i><b>'+ei(Na(i[0]))+'</b></button><button type="button" class="pn nx" data-sel="'+i[1].id+'" style="--nc:'+(Vf(i[1])||"")+'"><b>'+ei(Na(i[1]))+'</b><i></i><span class="pa">›</span></button></div></section>');
return s}
function Ee(e){if(!me())return void t.classList.remove("kpanel");
t.classList.add("kpanel"),t.scrollTop=0;
let n=e.info,r=n.sp,a=Vf(e)||"",i=nearFam(e);
xe=function(e){let t=$f(e.id);
return t&&t.ancestors().find(e=>1===e.depth)||Af()}(e),je=e.id;
let s='<div class="phd" style="--pc:'+a+'"><button type="button" class="ib close" id="cx" aria-label="×">'+tn+'</button><span class="pfam"><i class="dot '+e.family+'"></i>'+ei(Ca(e.family))+"</span><h3>"+ei(Na(e))+"</h3>"+(n.an?'<p class="pan">'+ei(n.an)+"</p>":"")+'<p class="plin">'+ei(Pf(e))+'</p></div><div class="pstats"><div><small>'+ei(ye("rgn"))+"</small><b>"+ei(Ma(e))+"</b></div>"+(r?"<div><small>"+ei(ye("spk"))+"</small><b>"+ei(za(r.v))+"</b></div>":"")+(n.lv?"<div><small>"+ei(ye("st"))+"</small><b>"+ei(Aa(n.lv))+"</b></div>":"")+"</div>";
s+=panelSecs(e,i),s+='<section class="psec pwh"><div class="pwbox">'+Se(xe,e.id,null)+'</div></section><div class="pdyn"></div><div class="acts"><button type="button" class="btn pri pgo" data-go="'+e.id+'">'+ei(ye("go"))+"</button></div>",t.innerHTML=s,gw(),delete t.dataset.sourceCountry,delete t.dataset.regionId,t.querySelector("#cx").onclick=()=>{t.hidden=!0,Q2.selectAll("text.plabel").classed("fade",!1),$t(null),Ut(800)},Promise.all([Zf(),Df(),ff||null]).then(([r,a])=>{if(nt!==e||!t.classList.contains("kpanel"))return;
let i=t.querySelector(".pdyn");
if(!i)return;
let s="",o=r&&r.M[e.lang];
o&&o.p&&o.p.length&&(s+='<section class="psec"><p class="ph">'+ei(ye("pl"))+'<span class="phh">'+ei(ye("hint"))+'</span></p><div class="pplaces">'+_e(o.p.slice(0,18),e)+"</div></section>");
let l=[n.lon,n.lat],kA=kPl(l)||{},u=kA.r,c=kA.c,d=a&&(u&&a.r[u.properties.c+"|"+u.properties.n]||c&&a.r[c.properties.c]);
d&&(s+=qe({y:(u?u.properties.n:c.properties.n)+" · "+d.y,g:d.g})),i.innerHTML=s})}
function ze(e){return null}
function Ne(e){let t=yt;
if(!t||!se.length)return;
let n=e.k;
if(n<4)return void t.selectAll("text").remove();
let r=-e.x/n,a=-e.y/n,i=r+b/n,s=a+Me()/n,o=se.filter(e=>e.w*n>=34&&e.cx>r&&e.cx<i&&e.cy>a&&e.cy<s).sort((e,t)=>oe.has(t.i)-oe.has(e.i)||t.w*t.h-e.w*e.h),l=[],u=[];
x.forEach(e=>{let t=e._xy;
t[0]>r-8&&t[0]<i+8&&t[1]>a-8&&t[1]<s+8&&u.push([t[0]+30/n,t[1],36/n,11/n])}),Qe.selectAll("g.city:not(.kh)").each(e=>u.push([e.x+(e.w||50)/2/n,e.y,(e.w||50)/2/n+3/n,10/n])),o.forEach(e=>{if(l.length>=(b<600?13:28))return;
let t=3.1*e.n.length+4,r=e.cx,a=e.cy,i=t/n,s=8/n;
u.some(e=>Math.abs(e[0]-r)<i+e[2]&&Math.abs(e[1]-a)<s+e[3])||(u.push([r,a,i,s]),l.push(e))}),t.selectAll("text").data(l,e=>e.i).join(e=>e.append("text").attr("class","d2l").text(e=>e.n),e=>e,e=>e.remove()).attr("transform",e=>"translate("+e.cx+","+e.cy+") scale("+1/n+")")}
function Me(){return y}
function Ce(){Rt&&Rt.classList.toggle("on",!Gt(kV())||!!nt||!!te)}
function Le(e){te=e||null;
We.selectAll("path.tap").remove();
e&&We.append("path").attr("class","kr tap "+(nt?nt.family:"")).attr("d",z(e));
{let M=E.select("g.kfocus");
M.empty()&&(M=E.append("g").attr("class","ksel kfocus").attr("pointer-events","none"));
M.raise().selectAll("*").remove();
window.__kfT=e?Date.now():0;
e&&(M.append("path").attr("class","kmask").attr("fill-rule","evenodd").attr("d","M-1e6,-1e6H1e6V1e6H-1e6Z"+z(e)),M.append("path").attr("class","kr tap "+(nt?nt.family:"")).attr("d",z(e)))}
Ce()}
function Te(){J(),Le(null),t.hidden=!0,Q2.selectAll("text.plabel").classed("fade",!1),rt&&(rt=null,pt=null,q.classed("fsel",!1).attr("data-f",null)),$t(null),Ut(800),Ae()}
function Ae(){GL&&gSync();
try{e.dispatchEvent(new CustomEvent("ksel",{detail:{lang:nt?nt.id:null,fam:nt?null:rt||null}}))}catch{}}
function Pe(){t.hidden=!0,Q2.selectAll("text.plabel").classed("fade",!1),$t(null)}
function Ie(){t.hidden=!0,Q2.selectAll("text.plabel").classed("fade",!1),J(),Le(null),nt&&$t(null)}
function Re(e,n,r){let a=t.querySelector("#rgl");
if(!a||nt!==e||!n)return;
if(!n.home.length&&!n.dia.length)return void(a.hidden=!0);
let i=n.home[0]&&(n.home[0].cn||n.home[0].n),s=(e,t,n)=>'<button type="button" class="rchip" data-rg="'+t+n+'">'+ei(e.n)+(e.cn&&e.cn!==i?"<i>"+ei(e.cn)+"</i>":"")+"</button>",o=r?n.home:n.home.slice(0,6),l="";
n.home.length&&(l+='<p class="rgh">'+ei(h.where||"Where")+'</p><div class="rgc">'+o.map((e,t)=>s(e,"h",t)).join("")+(!r&&n.home.length>6?'<button type="button" class="rchip rmore" data-more="1">+'+(n.home.length-6)+"</button>":"")+"</div>"),n.dia.length&&(l+='<div class="rgc">'+n.dia.slice(0,r?60:4).map((e,t)=>s(e,"d",t)).join("")+(!r&&n.dia.length>4?'<button type="button" class="rchip rmore" data-more="1">+'+(n.dia.length-4)+"</button>":"")+"</div>"),a.innerHTML=l,a.hidden=!1}
var Oe=null;
function De(e){(e!==Oe||e&&!We.select("path.hov").node())&&(Oe=e,We.selectAll("path.hov").remove(),e&&e!==te&&We.append("path").attr("class","kr hov").style("--hc",window.__hovc?window.__hovc(Ct,nt):null).attr("d",z(e)))}
function Fe(e){We.selectAll("*").remove(),Date.now()-(window.__kfT||0)>1500&&E.selectAll("g.kfocus>*").remove(),Oe=null,q.classed("kdm",!1),oe=new Set,te=null,Ce(),e&&Promise.all([ff||null,Zf()]).then(([t])=>{if(!t||nt!==e)return;
let n=function(e){if(!hf||!da[e.lang])return null;
let t=ne[e.lang];
if(t)return t;
let n=e=>{let t=e.properties;
return t.n},r={};
hf.C.forEach(e=>{r[e.properties.c]=n(e)});
let a=(t,a)=>{let i=ue(t),s=new Map,o=0;
if(i.length){let e=1e9,t=1e9,n=-1e9,r=-1e9;
i.forEach(a=>a.forEach(a=>{a[0]<e&&(e=a[0]),a[0]>n&&(n=a[0]),a[1]<t&&(t=a[1]),a[1]>r&&(r=a[1])}));
let a=Math.max(n-e,r-t)/26||1;
for(let l=e+a/2;l<n;l+=a)for(let e=t+a/2;e<r;e+=a){let t=[l,e],n=0;
if(i.forEach(e=>{Id(e,t)&&n++}),n%2!=1)continue;
let r=j.invert([l*M+C[0],e*M+C[1]]);
if(!r)continue;
let a=de(r);
a&&(o++,s.set(a,(s.get(a)||0)+1))}}
if(!o&&a){let t=de([e.info.lon,e.info.lat]);
t&&(o=1,s.set(t,1))}
let l=[...s].map(([e,t])=>({f:e,cnt:t,isC:!e.properties.t&&!r[e.properties.c]||hf.C.includes(e),n:n(e),cn:hf.C.includes(e)?"":r[e.properties.c]||""})).sort((e,t)=>t.cnt-e.cnt),u=l.filter(e=>e.cnt>=2||e.cnt/o>=.03);
return(u.length?u:l.slice(0,3)).slice(0,60)},i=a(da[e.lang].d,!0),s=new Set(i.map(e=>e.f)),o=a(da[e.lang].x||"",!1).filter(e=>!s.has(e.f));
return ne[e.lang]={home:i,dia:o}}(e);
n&&(n.dia.slice(0,40).forEach((t,n)=>We.append("path").attr("class","kr kdia "+e.family+(t.d?" kd":"")).style("--ri",Math.min(n,24)).style("--kf",window.__albColor?__albColor({data:{L:e}}):null).attr("d",z(t.f))),n.home.slice(0,64).forEach((t,n)=>We.append("path").attr("class","kr home "+e.family+(t.d?" kd":"")).style("--ri",Math.min(n,24)).style("--kf",window.__albColor?__albColor({data:{L:e}}):null).attr("d",z(t.f))),Re(e,n,!1),q.classed("kdm",!!(n.home[0]&&n.home[0].d||n.dia[0]&&n.dia[0].d)),oe=new Set(n.home.concat(n.dia).filter(e=>e.d).map(e=>e.i)),Ne(kV()))})}
/* The region card (phone and desktop; styles: block v69 in src/styles/v64.css). Top: the country, then the region's
   name, which is also the list of the country's regions (choosing one flies there and opens its card). A district or
   an ethnic area that was tapped keeps the title, with the region list under it. Then the family wheel with the
   region's languages lit, and the languages with speakers and shares from data/region-langs.json (built by
   scripts/merge/region-langs.py from the census tables and content/region-languages.csv). Languages drawn there on
   the map without a figure follow by name. No numbers for a region: the languages on the map, as before. */
let kRgP=null,kRgV=null,kRgK=0,kRgO=[],kRgL=null;
function kRgD(){return kRgP||(kRgP=fetch("data/region-langs.json").then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(D=>kRgV=D).catch(()=>(kRgP=null,null)))}
function kRgT(k){let T={en:{find:"Find a region",rs:"Regions",langs:"languages",lang1:"language",more:"more",ppl:"people",none:"No census figures for this area yet",also:"Also on the map",cen:"Census",multi:"more than one answer possible"},
sq:{find:"Gjej një rajon",rs:"Rajonet",langs:"gjuhë",lang1:"gjuhë",more:"të tjera",ppl:"veta",none:"Ende pa shifra regjistrimi për këtë zonë",also:"Edhe në hartë",cen:"Regjistrimi",multi:"lejohej më shumë se një përgjigje","mother tongue":"gjuha amtare","home language":"gjuha në shtëpi","everyday language":"gjuha e përditshme","main language at home":"gjuha kryesore në shtëpi",language:"gjuha"},

sr:{find:"Pronađi oblast",rs:"Oblasti",langs:"jezika",lang1:"jezik",more:"još",ppl:"osoba",none:"Za ovu oblast još nema podataka popisa",also:"Takođe na mapi",cen:"Popis",multi:"moguće više odgovora","mother tongue":"maternji jezik","home language":"jezik u kući","everyday language":"svakodnevni jezik","main language at home":"glavni jezik u kući",language:"jezik"},
sc:{find:"Пронађи област",rs:"Области",langs:"језика",lang1:"језик",more:"још",ppl:"особа",none:"За ову област још нема података пописа",also:"Такође на мапи",cen:"Попис",multi:"могуће више одговора","mother tongue":"матерњи језик","home language":"језик у кући","everyday language":"свакодневни језик","main language at home":"главни језик у кући",language:"језик"}};
return(T[ya()]||T.en)[k]||T.en[k]||k}
function kRgF(v,d){try{return new Intl.NumberFormat({sq:"sq",sr:"sr-Latn",sc:"sr-Cyrl"}[ya()]||"en",{maximumFractionDigits:d}).format(v)}catch{return String(v)}}
function kRgS(p){return null==p?"":p<.05?"<"+kRgF(.1,1)+"%":kRgF(p,p>=10?0:1)+"%"}
/* The region's own wheel, drawn like the site's wheel: families inside, languages outside, each slice as large as its
   share (equal slices when the region has no figures; the middle then gives the number of languages). Languages that are
   not on the site and the smallest ones share one grey slice. A slice opens its language, as its row does. */
function kRgW(rows,R,n){let it=[],gr=0,num=rows.length>0;
num?rows.forEach(o=>{o.L&&null!=o.p&&o.p>=.3?it.push({L:o.L,v:o.p}):gr+=o.p||0}):n.forEach(l=>it.push({L:l,v:1}));
num&&R.o&&(gr+=R.o[2]||0);
if(!it.length)return"";
let fam={};it.forEach(o=>fam[o.L.family]=(fam[o.L.family]||0)+o.v);
it.sort((A,C)=>fam[C.L.family]-fam[A.L.family]||(A.L.family<C.L.family?-1:A.L.family>C.L.family?1:0)||C.v-A.v);
let tot=it.reduce((m,o)=>m+o.v,0)+gr,a0=0,P="",Q="",A=lh().padAngle(it.length+(gr>0)>1?.025:0).padRadius(70).cornerRadius(2.5),k=0,
arc=(r0,r1,a,b)=>A({innerRadius:r0,outerRadius:r1,startAngle:a,endAngle:b}),fs=[];
it.forEach(o=>{let b=a0+o.v/tot*2*Math.PI,f=fs[fs.length-1];o.a=a0,o.b=b;
f&&f.f===o.L.family?f.b=b:fs.push({f:o.L.family,a:a0,b:b,L:o.L}),P+='<path d="'+arc(num?63:76,92,a0,b)+'" fill="'+(Vf(o.L)||"#888")+'" data-sel="'+o.L.id+'" data-n="'+ei(Na(o.L))+'"'+(num?' data-s="'+ei(kRgS(o.v))+'"':"")+' style="--i:'+k++ +'"><title>'+ei(Na(o.L))+(num?" "+kRgS(o.v):"")+"</title></path>",a0=b});
gr>0&&(P+='<path class="rgo" d="'+arc(63,92,a0,2*Math.PI)+'" style="--i:'+k+'"/>',Q+='<path class="rgo" d="'+arc(46,58,a0,2*Math.PI)+'"/>');
/* the inner ring names the families; with one family (one language, or several of one family) and no other share it
   would only repeat the outer ring, so it is left out */
(fs.length>1||gr>0)&&fs.forEach(f=>{Q+='<path d="'+arc(46,58,f.a,f.b)+'" fill="'+(If(f.f)||Vf(f.L)||"#888")+'" opacity=".55"><title>'+ei(Ca(f.f))+"</title></path>"});
/* The three largest languages are named outside the wheel, each at the end of a short line out from the middle of its slice,
   turning left or right by the side the slice is on; names on one side are kept 15 apart. The middle stays empty: the list
   below has the numbers. */
let LB=it.slice().sort((A,C)=>C.v-A.v).slice(0,3).map((o,n)=>{let m=(o.a+o.b)/2,sx=Math.sin(m),sy=-Math.cos(m),nm=Na(o.L);
return{o:o,n:n,sx:sx,sy:sy,r:sx>=0?1:-1,y:sy*106,nm:nm.length>20?nm.slice(0,19)+"…":nm}}),X=100;
[1,-1].forEach(r=>{let S=LB.filter(l=>l.r===r).sort((A,C)=>A.y-C.y);
for(let i=1;i<S.length;i++)S[i].y=Math.max(S[i].y,S[i-1].y+15);
let lo=S.length?S[S.length-1].y-106:0;lo>0&&S.forEach(l=>l.y-=lo);
S.forEach(l=>{l.y=Math.max(-106,l.y),l.h=l.sx*104+8*l.r,X=Math.max(X,Math.abs(l.h)+8+6.4*l.nm.length)})});
let lab=LB.map(l=>'<g class="rgwl" data-sel="'+l.o.L.id+'" style="--n:'+l.n+'"><path d="M'+(l.sx*95).toFixed(1)+","+(l.sy*95).toFixed(1)+"L"+(l.sx*104).toFixed(1)+","+l.y.toFixed(1)+"H"+l.h.toFixed(1)+'"/><text class="'+(l.r>0?"s":"e")+'" x="'+(l.h+4*l.r).toFixed(1)+'" y="'+l.y.toFixed(1)+'" dy=".35em">'+ei(l.nm)+"</text></g>").join("");
X=Math.ceil(X);
return'<section class="psec pwh rgw"><svg class="rgwh" viewBox="'+-X+" -116 "+2*X+' 232" style="--rgw:'+2*X+'" role="img" aria-label="'+ei(it.map(o=>Na(o.L)+(num?" "+kRgS(o.v):"")).join(", "))+'">'+Q+P+lab+"</svg></section>"}
/* A tap on the region card's wheel names the language on a small label above the tap (its share too when the region has
   figures) for 2.4 s, and the other slices step back meanwhile (v74 in src/styles/v66.css). */
let kRgTt=0;
function kRgTip(el,ev){let W=el.closest(".rgw"),svg=el.closest("svg"),id=el.dataset.sel,P=svg&&svg.querySelector('path[data-sel="'+id+'"]');
if(!W||!P)return;
let d=W.querySelector(".rgtip")||W.appendChild(Object.assign(document.createElement("div"),{className:"rgtip"})),R=W.getBoundingClientRect(),
x=ev&&ev.clientX?ev.clientX-R.left:R.width/2,y=ev&&ev.clientY?ev.clientY-R.top:R.height/2;
d.innerHTML="<b>"+ei(P.dataset.n||"")+"</b>"+(P.dataset.s?"<span>"+ei(P.dataset.s)+"</span>":""),
d.style.left=Math.round(Math.max(70,Math.min(R.width-70,x)))+"px",d.style.top=Math.round(y)+"px",
svg.querySelectorAll("[data-sel]").forEach(n=>n.classList.toggle("on",n.dataset.sel===id)),svg.classList.add("tip"),
d.classList.remove("show"),void d.offsetWidth,d.classList.add("show"),
clearTimeout(kRgTt),kRgTt=setTimeout(()=>{d.classList.remove("show"),svg.classList.remove("tip")},2400)}
function kRgShow(e){let k=++kRgK;
kRgCard(e,kRgV),t.scrollTop=0,kRgV||kRgD().then(D=>{if(!D||k!==kRgK||t.hidden||!t.querySelector(".rgh"))return;
let h0=t.offsetHeight;kRgCard(e,D),te&&!me()&&t.offsetHeight!==h0&&Ke(te,f?0:600)})}
setTimeout(kRgD,2500);
/* languages drawn anywhere in a region (not only where it was tapped): 25 points across it, kept per region */
function kRgHere(F){if(!F)return[];if(F.__here)return F.__here;
let g=F.geometry,P=g?"Polygon"===g.type?[g.coordinates]:"MultiPolygon"===g.type?g.coordinates:[]:[],x0=1e9,x1=-1e9,y0=1e9,y1=-1e9,H=new Set;
P.forEach(p=>p[0].forEach(c=>{x0=Math.min(x0,c[0]),x1=Math.max(x1,c[0]),y0=Math.min(y0,c[1]),y1=Math.max(y1,c[1])}));
if(x1-x0<180)for(let i=1;i<6;i++)for(let k=1;k<6;k++){let pt=[x0+(x1-x0)*i/6,y0+(y1-y0)*k/6];
if(!(pf(F,pt)&&Wu(F,pt)))continue;
let q=j(pt);if(!q)continue;
let r=[(q[0]-C[0])/M,(q[1]-C[1])/M];x.forEach(l=>{(ce(l,"d",r)||ce(l,"x",r))&&H.add(l)})}
return F.__here=[...H]}
function kRgCard(e,D){let F=e.rf,P=F&&F.properties,R=D&&P&&D.r[P.c+"|"+P.n]||null,S=R&&D.src[R.s]||null,
B=kRgL||(kRgL=new Map(x.map(l=>[l.lang,l]))),n=[...new Set(e.hl.concat(e.dl,kRgHere(F),(R&&R.P||[]).map(m=>B.get(m)).filter(Boolean)))],
rows=R&&R.L?R.L.map(([nm,c,p])=>({L:B.get(nm)||null,nm:nm,c:c,p:p})):[],
inR=new Set(rows.filter(o=>o.L).map(o=>o.L.id)),rest=n.filter(l=>!inR.has(l.id)),
lit=[...new Set(rows.filter(o=>o.L&&(null==o.p||o.p>=1)).map(o=>o.L).concat(n))],
top=l=>($f(l.id)||{ancestors:()=>[]}).ancestors().find(a=>1===a.depth),fams=new Set(lit.map(top).filter(Boolean)),
a=1===fams.size?[...fams][0]:lit[0]&&top(lit[0])||Af(),
nm=G=>G.properties.n||"",
O=P?hf.R.filter(G=>G.properties.c===P.c&&nm(G)).sort((A,C)=>nm(A).localeCompare(nm(C))):[],
rN=F?nm(F):"",chev='<svg class="rgv" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>',
sel=O.length>1?'<select class="rgsel" aria-label="'+ei(kRgT("rs")+(e.cd?" · "+e.cd:""))+'">'+O.map((G,i)=>'<option value="'+i+'"'+(G===F?" selected":"")+">"+ei(nm(G))+"</option>").join("")+"</select>":"",
own=!sel||e.t&&e.t!==rN,
h='<div class="phd preg rgh"><button type="button" class="ib close" id="cx" aria-label="×">'+tn+'</button><p class="rgk">'+ei(e.cd||ve("rg"))+"</p>"+(own?"<h3>"+ei(e.t||"")+"</h3>"+(sel?'<label class="rgp"><span>'+ei(rN)+"</span>"+chev+sel+"</label>":e.s&&e.s!==e.cd?'<p class="plin">'+ei(e.s)+"</p>":""):'<label class="rgt"><h3>'+ei(rN)+"</h3>"+chev+sel+"</label>")+"</div>",
row=o=>{let s="--w:"+(Math.min(100,o.p||0)/100).toFixed(4)+(o.L?";--c:"+(Vf(o.L)||"#888"):""),
q='<i></i><b>'+ei(o.L?Na(o.L):o.nm)+"</b><span>"+(null==o.c?"":kRgF(o.c,0))+"</span><em>"+kRgS(o.p)+"</em>";
return o.L?'<button type="button" class="rgr" data-sel="'+o.L.id+'" style="'+s+'">'+q+"</button>":'<div class="rgr nx" style="'+s+'">'+q+"</div>"},
b=kRgW(rows,R,n),shown=rows.filter((o,i)=>i<3||i<7&&null!=o.p&&o.p>=.1),hid=rows.slice(shown.length),
mo=(R&&R.o?R.o[0]:0)+hid.length,mp=(R&&R.o&&R.o[1]||0)+hid.reduce((m,o)=>m+(o.c||0),0);
if(xe=a,je=null,rows.length)b+='<section class="psec rgl"><div class="rgrows">'+shown.map(row).join("")+"</div>"+(mo?'<p class="rgmore">+'+kRgF(mo,0)+" "+ei(kRgT("more"))+(mp?" · "+kRgF(mp,0)+" "+ei(kRgT("ppl")):"")+"</p>":"")+'<p class="rgsrc">'+ei((/^R:/.test(R.s)?"":kRgT("cen")+" ")+(S?S.y:"")+(S&&S.m?" · "+kRgT(S.m):"")+(R.x?" · "+kRgT("multi"):""))+"</p></section>"+(rest.length?'<section class="psec rgalso"><p class="ph">'+ei(kRgT("also"))+'</p><div class="rgchips">'+rest.map(l=>'<button type="button" class="rgchip" data-sel="'+l.id+'"><i style="background:'+(Vf(l)||"")+'"></i>'+ei(Na(l))+"</button>").join("")+"</div></section>":"");
else n.length&&(b+='<section class="psec rgl"><div class="rgrows rgleg">'+n.map(l=>row({L:l,nm:"",c:null,p:null}).replace('class="rgr"','class="rgr nn"')).join("")+"</div></section>");
let f0=document.activeElement&&document.activeElement.classList.contains("rgsel");
t.innerHTML=h+b,kRgO=O,t.dataset.sourceCountry=e.countryName||e.country||"",t.dataset.regionId="",t.classList.add("kpanel"),t.hidden=!1,t.querySelector("#cx").onclick=()=>{t.hidden=!0,Le(null),Ut(800)};
let s=t.querySelector(".rgsel");
let go=i=>{let G=kRgO[i],p=G&&kIn(G),m=p&&le(p);m&&Ge(de(p),m,{clientX:0,clientY:0,target:q.node()})};
s&&(s.onchange=()=>go(+s.value),f0&&s.focus({preventScroll:!0}),
/* phones (<64rem): the list opens inside the card (kRgList); desktop keeps the system menu */
s.parentNode.addEventListener("click",ev=>{me()||(ev.preventDefault(),kRgList(s,go,e.cd||""))}))}
/* The region list on phones: a layer over the card (v74 in src/styles/v66.css) with every region of the country, the current one
   marked, and a search field once there are more than 12. Choosing one flies there and opens its card; x or Escape closes it. */
function kRgList(s,go,cn){if(t.querySelector(".rgls"))return;
let O=[...s.options],cur=s.selectedIndex,w=document.createElement("div"),F=kRgT("find");
w.className="rgls",w.setAttribute("role","dialog"),w.setAttribute("aria-label",s.getAttribute("aria-label")||kRgT("rs"));
w.innerHTML='<div class="rglh"><p class="rgk">'+ei(cn||kRgT("rs"))+'</p><button type="button" class="ib close rglx" aria-label="×">'+tn+"</button></div>"+(O.length>12?'<input class="rglq" type="search" autocomplete="off" enterkeyhint="search" placeholder="'+ei(F)+'" aria-label="'+ei(F)+'">':"")+'<div class="rglu">'+O.map((o,i)=>'<button type="button" class="rglo" data-i="'+i+'"'+(i===cur?' aria-current="true"':"")+"><span>"+ei(o.text)+"</span></button>").join("")+"</div>";
let u=w.querySelector(".rglu"),shut=()=>{w.remove(),s.focus({preventScroll:!0})},c=null;
t.scrollTop=0,t.appendChild(w),c=u.querySelector("[aria-current]"),c&&(u.scrollTop=c.offsetTop-u.clientHeight/2+c.offsetHeight/2);
w.querySelector(".rglx").onclick=shut,w.onkeydown=ev=>{"Escape"===ev.key&&(ev.stopPropagation(),shut())};
u.onclick=ev=>{let B=ev.target.closest(".rglo");B&&(+B.dataset.i===cur?shut():go(+B.dataset.i))};
let qf=w.querySelector(".rglq");qf&&(qf.oninput=()=>{let v=Da(qf.value.trim());u.querySelectorAll(".rglo").forEach(B=>B.hidden=!!v&&-1===Da(B.textContent).indexOf(v))})}
var Be=0;
function Ke(e,t){let n=z.bounds(e),r=(n[0][0]+n[1][0])/2,a=(n[0][1]+n[1][1])/2,i=Math.max((n[1][0]-n[0][0])/2*2.6,b/90),s=Math.max((n[1][1]-n[0][1])/2*2.6,y/90);
return Wt(r-i,a-s,r+i,a+s,t,60),[r,a]}
function Ge(n,r,a){let i=Ct;
if(n)return J(),Le(n),X=!1,function(e){if(!e)return;
$t(null),Q2.selectAll("text.plabel").classed("fade",!1);
let n=e.hl.concat(e.dl),r=new Set(n.map(e=>($f(e.id)||{ancestors:()=>[]}).ancestors().find(e=>1===e.depth))),a=1===r.size&&[...r][0]?[...r][0]:(n[0]&&($f(n[0].id)||{ancestors:()=>[]}).ancestors().find(e=>1===e.depth))||Af();
xe=a,je=null,kRgShow(e)}(i),void Ke(n,f?0:820);
if(J(),Le(n),X=!0,!n)return Z.classList.add("pin"),void Y({pointerType:"mouse",clientX:a.clientX,clientY:a.clientY,target:a.target,sourceEvent:a},r);
let s=Ke(n,f?0:820);
clearTimeout(Be),Be=setTimeout(()=>{if(te!==n)return;
X=!0;
let t=kV(),a=z.centroid(n),i=e.getBoundingClientRect(),o=t.applyX(isFinite(a[0])?a[0]:s[0]),l=t.applyY(isFinite(a[1])?a[1]:s[1]);
Z.classList.add("pin"),Y({pointerType:"mouse",clientX:i.left+o,clientY:i.top+l,target:q.node()},r)},f?30:880)}
function Ue(e){let t=kV(),n=Ws(e,q.node());
return j.invert([t.invertX(n[0]),t.invertY(n[1])])}
let He=0;
q.on("pointermove.place",e=>{if(X||e.buttons||q.node().classList.contains("zooming")||"mouse"!==e.pointerType||!hf)return;
if(!vt()&&e.target.classList&&e.target.classList.contains("zone"))return void De(null);
let t=e.target;
t.closest&&t.closest("g.pin,.clu")||He||(He=requestAnimationFrame(()=>{He=0;
let t=Ue(e),n=le(t);
n?(Y(e,n),De(de(t))):(J(),De(null))}))}),q.on("click.place",e=>{let t=e.target;
if(t.closest&&t.closest("g.pin,.clu")||!vt()||!hf)return;
let n=le(Ue(e));
if(!n)return X=!1,Le(null),J(),void(nt&&!p&&Pe());
Ge((Ue(e),de(Ue(e))),n,e)}),A.selectAll("path").on("click",(e,t)=>{vt()&&hf||(e.stopPropagation(),J(),nn(t),Ht(t,950))}),E.append("g");
let We=E2.append("g").attr("class","ksel").attr("pointer-events","none"),$e=E2.append("g"),Ve=E2.append("g"),Ze=E2.append("g"),Qe=E2.append("g").attr("class","cities").attr("pointer-events","none"),Ye=E2.insert("g","g.cities").attr("class","acities").attr("pointer-events","none"),Je=Jf.map(e=>{let t=j([e[2],e[1]]);
return{n:e[0],p:e[3],x:t[0],y:t[1]}}),Xe=!!p,et=Q2.append("g").attr("class","labs"),tt=Q2.append("g").attr("class","labs");
x.forEach(e=>{e._xy=j([e.info.lon,e.info.lat])});
let nt=null,rt=null,at=Ve.selectAll("g.pin").data(p?x.slice().sort((e,t)=>!!p.has(e.id)-!!p.has(t.id)):x).join(e=>{let t=e.append("g");
return t.append("circle").attr("class","hit").attr("r",12.32),t.append("path").attr("class","mk"),t});
function it(e){if(!Ye.selectAll("g.ac").size()){let e=Ye.selectAll("g.ac").data(Je).join("g").attr("class","ac");
e.append("circle").attr("r",2.2),e.append("text").attr("x",5).attr("y",3.6).text(e=>e.n)}
let t=kV(),n=[],r=new Set(Qe.selectAll("g.city").data().map(e=>e.n)),a=x.map(e=>[t.applyX(e._xy[0]),t.applyY(e._xy[1])]),i=e<1.5?2500:e<2.2?1200:e<3.2?600:e<4.6?300:e<7?160:0;
Ye.selectAll("g.ac").each(function(s){let o=t.applyX(s.x),l=t.applyY(s.y),u=s.p>=i&&!r.has(s.n)&&o>6&&o<b-30&&l>6&&l<y-6;
if(u&&a.some(e=>Math.hypot(e[0]-o,e[1]-l)<13)&&(u=!1),u){let e=[o-5,l-9,o+9+6.1*s.n.length,l+8],t=t=>e[0]<t[2]&&e[2]>t[0]&&e[1]<t[3]&&e[3]>t[1];
n.some(t)||st.some(t)?u=!1:n.push(e)}
u!==this.__u&&(this.__u=u,this.style.display=u?null:"none"),u&&this.setAttribute("transform","translate("+s.x+","+s.y+") scale("+1/Math.pow(e,.9)+")")})}
var st=[];
function ot(e){let t=1/Math.pow(e,.96);
GL&&gMv||Ve.selectAll("g.pin").attr("transform",e=>"translate("+e._xy[0]+","+e._xy[1]+") scale("+(e===nt?1.4*t:t)+")"),Qe.selectAll("g.city").attr("transform",t=>"translate("+t.x+","+t.y+") scale("+1/Math.pow(e,.9)+")"),function(e){let t=Qe.selectAll("g.city.kp");
if(t.empty())return;
let n=e<2?3:e<4?8:e<8?18:60,r=[],a=new Set;
t.each(t=>{if(a.size>=n)return;
let i=[t.x-5/e,t.y-9/e,t.x+t.w/e,t.y+9/e];
r.some(e=>!(i[2]<e[0]||i[0]>e[2]||i[3]<e[1]||i[1]>e[3]))||(r.push(i),a.add(t.i))}),t.classed("kh",e=>!a.has(e.i))}(e),it(e)}
function lt(e){if(Qe.selectAll("g.city").remove(),!e||!e.info)return;
let t=Kf&&Kf.M[e.lang];
if(t&&t.p&&t.p.length){let e=t.p.map((e,t)=>{let n=j([e[1],e[2]]);
return{n:e[0],x:n[0],y:n[1],i:t,w:6.4*e[0].length+12}}),n=Qe.selectAll("g.city").data(e).join("g").attr("class","city kp").style("animation-delay",(e,t)=>45*Math.min(t,20)+"ms");
return n.append("circle").attr("r",2.5),n.append("text").attr("x",6).attr("y",3.8).text(e=>e.n),void ot(kV().k)}
let n=ee[e.lang];
if(!n){n=[];
let t=T(e)?da[e.lang].d:"";
t&&t.split("M").forEach(e=>{e&&n.push(e.replace(/Z/g,"").split("L").map(e=>e.split(",").map(Number)))}),ee[e.lang]=n}
let r=Jf.map(e=>{let t=j([e[2],e[1]]);
return{n:e[0],p:e[3],la:e[1],lo:e[2],x:t[0],y:t[1],r:[(t[0]-C[0])/M,(t[1]-C[1])/M]}}),a=r.filter(e=>{let t=0;
return n.forEach(n=>{Id(n,e.r)&&t++}),t%2==1}).sort((e,t)=>t.p-e.p),i=[];
if(a.forEach(e=>{i.length<4&&!i.some(t=>Math.hypot(t.x-e.x,t.y-e.y)<14)&&i.push(e)}),i.length<2){let t=t=>{let n=(t.la-e.info.lat)*Math.PI/180,r=(t.lo-e.info.lon)*Math.PI/180*Math.cos(e.info.lat*Math.PI/180);
return 6371*Math.hypot(n,r)};
r.filter(e=>a.indexOf(e)<0&&t(e)<280&&e.p>=90).sort((e,n)=>t(e)-t(n)).slice(0,2-i.length).forEach(e=>i.push(e))}
let s=Qe.selectAll("g.city").data(i).join("g").attr("class","city");
s.append("circle").attr("r",2.8),s.append("text").attr("x",6).attr("y",3.8).text(e=>e.n),ot(kV().k)}
function ut(e){return e===nt?1e12:e.cl?1e9+e.m.length:Xa(e)}
at.attr("class",e=>"pin "+e.family+(p&&!p.has(e.id)?" dim":"")),at.select("path.mk").attr("d",e=>{var t;
return yh(vf[t=e.family]||hh,5.6*Math.PI*5.6*(bf[t]||1))()}).style("fill",e=>Vf(e)),ot(1),at.on("pointerenter pointermove",(e,t)=>Y(e,"<b>"+ei(Na(t))+"</b><span>"+ei(Ca(t.family))+" · "+ei(Ma(t))+"</span>")).on("pointerleave",()=>J()),at.attr("tabindex",e=>p&&!p.has(e.id)?-1:0).attr("role","button").attr("aria-label",e=>Na(e)).on("click",(e,t)=>en(t)).on("keydown",(e,t)=>{"Enter"===e.key&&en(t)}),et.selectAll("text.ln").data(p?g:x).join("text").attr("class","plabel ln").text(e=>Na(e)).style("opacity",0);
let ct={},dt=[],ht=[],ft=new Set,pt=null,kn=null;
p&&(g.forEach(e=>{let t=m[e.id][0];
ct[e.id]=Fa(t.lat||t.word)}),dt=g.map(e=>g.map(t=>e!==t&&Ka(ct[e.id],ct[t.id]))));
let mt=e=>(2===e.cl?8.5+2.1*Math.sqrt(e.m.length-1):9+2.4*Math.sqrt(e.m.length-1))*(me()?1:.74);   /* phones: smaller group bubbles (v73) */
function gt(e,n){var r;
n&&(t.innerHTML='<button type="button" class="ib close" id="cx" aria-label="×">'+tn+'</button><div class="mhd"><h3>'+ei((r=n).word)+'</h3></div><div class="meta"><span>'+ei(Ra(r.m.length))+'</span></div><div class="chipsc">'+r.m.map(e=>'<button type="button" class="lchip" data-ci="'+g.indexOf(e)+'"><span class="dot '+e.family+'"></span>'+ei(Na(e))+"</button>").join("")+"</div>",t.hidden=!1,t.querySelector("#cx").onclick=()=>{t.hidden=!0});
let a=e.map(e=>e._xy[0]),i=e.map(e=>e._xy[1]),s=Math.min(...a)-3,o=Math.max(...a)+3,l=Math.min(...i)-3,u=Math.max(...i)+3,c=n&&n.word?b/16:b/7,d=n&&n.word?(y-52-w())/14:y/7;
if(o-s<c){let e=(s+o)/2;
s=e-c/2,o=e+c/2}
if(u-l<d){let e=(l+u)/2;
l=e-d/2,u=e+d/2}
Wt(s,l,o,u,520)}
function vt(e){return null==e&&(e=kV().k),!!p||!!nt||!!rt||e>=1.7}
function bt(t){Ne(t=t||kV()),GL&&ot(t.k),clearTimeout(Mt),Mt=setTimeout(()=>{q.node().isConnected&&!q.node().classList.contains("zooming")&&pe(kV())},90);
let n,r=t.k,a=[],i=vt(r);
q.classed("ov",!i).classed("zin",r>=2.2).classed("kpho",!me()&&!p),A.classed("dim",!!nt||i&&!p).classed("faint",!!p),p&&(a.push([0,0,b,52]),a.push([0,y-w(),b,y])),function(e){if(!p)return function(e){let t=x.length,n=x.map((e,t)=>t),r=e=>{for(;n[e]!==e;)n[e]=n[n[e]],e=n[e];
return e},a=10/e;
if(e<24&&!nt&&!rt&&me())for(let e=0;e<t;e++)for(let i=e+1;i<t;i++){if(x[e]===nt||x[i]===nt)continue;
let t=x[e]._xy,s=x[i]._xy;
Math.abs(t[0]-s[0])<a&&Math.abs(t[1]-s[1])<a&&Math.hypot(t[0]-s[0],t[1]-s[1])<a&&(n[r(e)]=r(i))}
if(e<10&&!nt&&!rt&&me()&&(void 0===x._dgs&&(x._dgs=function(e){let t=e.filter(ep);
if(t.length<4)return 0;
let n=t.map(e=>e._xy[0]),r=t.map(e=>e._xy[1]);
return Math.max(Math.max(...n)-Math.min(...n),Math.max(...r)-Math.min(...r))}(x)),x._dgs&&x._dgs*e<(b<600?150:230))){let e=-1;
for(let a=0;a<t;a++)ep(x[a])&&(e<0?e=a:n[r(a)]=r(e))}
let i={};
x.forEach((e,t)=>{let n=r(t);
(i[n]=i[n]||[]).push(e)});
let s=Object.keys(i).map(e=>i[e]).filter(e=>e.length>2),o=s.map(e=>e.map(e=>e.id).join("+")).sort().join("|");
if(o===pt)return;
pt=o,ft=new Set,ht=s.map(e=>{e.forEach(e=>ft.add(e.id));
let t=new Set(e.map(e=>e.family));
return{cl:2,key:e.map(e=>e.id).join("+"),m:e,_xy:[Ei(e,e=>e._xy[0]),Ei(e,e=>e._xy[1])],word:tp(e),family:1===t.size?e[0].family:"mixed"}}),Ve.selectAll("g.pin").classed("inC",e=>ft.has(e.id));
let l=Ze.selectAll("g.clu").data(ht,e=>e.key).join(e=>{let t=e.append("g").attr("role","button").attr("tabindex",0).on("click",(e,t)=>gt(t.m,t.word?t:null)).on("keydown",(e,t)=>{"Enter"===e.key&&gt(t.m,t.word?t:null)});
return t.append("circle").attr("class","cring"),t.append("circle").attr("class","cdisc"),t.append("text").attr("class","cnum"),t});
l.attr("class",e=>"clu sp "+e.family).attr("aria-label",e=>e.m.map(Na).join(", ")),l.on("pointerenter pointermove",(e,t)=>Y(e,"<b>"+ei(Ra(t.m.length))+"</b><span>"+ei(t.m.slice(0,5).map(Na).join(", ")+(t.m.length>5?" …":""))+"</span>")).on("pointerleave",()=>J()),l.select("circle.cdisc").attr("r",mt),l.select("circle.cring").attr("r",e=>mt(e)+3.5),l.select("text").text(e=>e.m.length),et.selectAll("text.cl").data(ht.filter(e=>e.word),e=>e.key).join("text").attr("class","plabel cl").text(e=>e.word).style("opacity",0),et.selectAll("text.ln").classed("inC",e=>ft.has(e.id))}(e);
let t=g.length,n=g.map((e,t)=>t),r=e=>{for(;n[e]!==e;)n[e]=n[n[e]],e=n[e];
return e};
if(e<14){let a=52/e;
for(let e=0;e<t;e++)for(let i=e+1;i<t;i++){if(!dt[e][i]||g[e]===nt||g[i]===nt)continue;
let t=g[e]._xy,s=g[i]._xy;
Math.hypot(t[0]-s[0],t[1]-s[1])<a&&(n[r(e)]=r(i))}}
let a={};
g.forEach((e,t)=>{let n=r(t);
(a[n]=a[n]||[]).push(e)});
let i=Object.keys(a).map(e=>a[e]).filter(e=>e.length>1),s=i.map(e=>e.map(e=>e.id).join("+")).sort().join("|");
if(s===pt)return;
pt=s,ft=new Set,ht=i.map(e=>{e.forEach(e=>ft.add(e.id));
let t={};
e.forEach(e=>{t[ct[e.id]]=(t[ct[e.id]]||0)+1});
let n=Object.keys(t).sort((e,n)=>t[n]-t[e])[0],r=m[e.filter(e=>ct[e.id]===n)[0].id][0],a={};
return e.forEach(e=>{a[e.family]=(a[e.family]||0)+1}),{cl:1,key:e.map(e=>e.id).join("+"),m:e,_xy:[Ei(e,e=>e._xy[0]),Ei(e,e=>e._xy[1])],word:String(r.lat||r.word).split(/[,;(]/)[0].trim(),family:Object.keys(a).sort((e,t)=>a[t]-a[e])[0]}}),Ve.selectAll("g.pin").classed("inC",e=>ft.has(e.id));
let o=Ze.selectAll("g.clu").data(ht,e=>e.key).join(e=>{let t=e.append("g").attr("role","button").attr("tabindex",0).on("click",(e,t)=>gt(t.m,t)).on("keydown",(e,t)=>{"Enter"===e.key&&gt(t.m,t)});
return t.append("circle"),t.append("text").attr("class","cnum"),t});
o.attr("class",e=>"clu "+e.family).attr("aria-label",e=>e.word+": "+e.m.map(Na).join(", ")),o.select("circle").attr("r",mt),o.select("text").text(e=>e.m.length),et.selectAll("text.cl").data(ht,e=>e.key).join("text").attr("class","plabel cl").text(e=>e.word).style("opacity",0),et.selectAll("text.ln").classed("inC",e=>ft.has(e.id))}(r),n=Math.pow(r,.85),Ze.selectAll("g.clu").attr("transform",e=>"translate("+e._xy[0]+","+e._xy[1]+") scale("+1/n+")");
let s=5.6*Math.pow(r,.04),o=Math.pow(r,.15);
ht.forEach(e=>{let n=t.applyX(e._xy[0]),r=t.applyY(e._xy[1]),i=mt(e)*o;
a.push([n-i,r-i,n+i,r+i])}),Ve.selectAll("g.pin").each(e=>{if(p&&!p.has(e.id)||ft.has(e.id)||rt&&e.family!==rt||e!==nt&&q.node().classList.contains("kpho"))return;
let n=t.applyX(e._xy[0]),r=t.applyY(e._xy[1]);
if(n>-20&&n<b+20&&r>-20&&r<y+20){let e=.82*s;
a.push([n-e,r-e,n+e,r+e])}});
let l=Q2.selectAll("text.plabel").attr("font-size",e=>e===nt||e.cl?14:12.5).classed("act",e=>e===nt).nodes().slice().sort((e,t)=>ut(t.__data__)-ut(e.__data__)),u=e.querySelector(".zoom");
if(u){let t=e.getBoundingClientRect(),n=u.getBoundingClientRect();
a.push([n.left-t.left-4,n.top-t.top-4,n.right-t.left+4,n.bottom-t.top+4])}
Qe.selectAll("g.city").each(e=>{let n=t.applyX(e.x),r=t.applyY(e.y);
a.push([n-6,r-9,n+9+6.2*e.n.length,r+9])});
let c=e=>a.some(t=>e[0]+1<t[2]&&e[2]-1>t[0]&&e[1]+1<t[3]&&e[3]-1>t[1]),d=e=>e[0]>=2&&e[2]<=b-2&&e[1]>=2&&e[3]<=y-2;
let kOk=kOrd(l,e=>(e.__data__===nt?tt:et).node());
if(l.forEach(e=>{let n=e.__data__;
if(kOk||(n===nt?tt:et).node().appendChild(e),!i||!n.cl&&ft.has(n.id)||rt&&!n.cl&&n.family!==rt&&n!==nt||!Xe&&!rt&&!n.cl&&n!==nt&&t.k<3.4||kn&&!n.cl&&n!==nt&&!kn.has(n))return void(e.style.opacity=0);
let r=n===nt||n.cl?14:12.5,l=t.applyX(n._xy[0]),u=t.applyY(n._xy[1]),h=n.cl?mt(n)*o+5:(n===nt?1.35*s:s)+4,f=e.textContent.length*r*.56,p=[["start",l+h,u+5,[l+h-1,u+5-r,l+h+f+2,u+6]],["end",l-h,u+5,[l-h-f-2,u+5-r,l-h+1,u+6]],["middle",l,u-h-3,[l-f/2-2,u-h-3-r,l+f/2+2,u-h+1]],["middle",l,u+h+r-1,[l-f/2-2,u+h-1,l+f/2+2,u+h+r+2]],["start",l+.7*h,u-.7*h-2,[l+.7*h-1,u-.7*h-2-r,l+.7*h+f+2,u-.7*h+2]],["start",l+.7*h,u+.7*h+r-2,[l+.7*h-1,u+.7*h-2,l+.7*h+f+2,u+.7*h+r+1]],["end",l-.7*h,u-.7*h-2,[l-.7*h-f-2,u-.7*h-2-r,l-.7*h+1,u-.7*h+2]],["end",l-.7*h,u+.7*h+r-2,[l-.7*h-f-2,u+.7*h-2,l-.7*h+1,u+.7*h+r+1]]],m=null;
/* phones without pins (kpho): the name is the marker, centred on its language's point, with room around it; a name that would
   touch one already placed (larger languages are placed first) waits for a closer zoom. The chosen language keeps its pin. */
if(n!==nt&&!n.cl&&q.node().classList.contains("kpho")){let g=f/2+8,v=u+.36*r;p=[["middle",l,v,[l-g,v-r-4,l+g,v+6]]]}
for(let e=0;e<p.length;e++)if(d(p[e][3])&&!c(p[e][3])){m=p[e];
break}
m||n!==nt||(m=p[0]),m?(e.setAttribute("text-anchor",m[0]),e.setAttribute("x",Math.round(m[1])),e.setAttribute("y",Math.round(m[2])),e.__o=[m[1]-l,m[2]-u],a.push(m[3]),e.style.opacity=1):e.style.opacity=0}),$.style("opacity",i?0:null),function(e){let t=Q2.node().getBoundingClientRect(),n=[],r=[],a=(e,n)=>{let r=e.getBoundingClientRect();
return r.width?[r.left-t.left-n,r.top-t.top-n,r.right-t.left+n,r.bottom-t.top+n]:null},i=(e,t)=>t.some(t=>e[0]<t[2]&&e[2]>t[0]&&e[1]<t[3]&&e[3]>t[1]);
Q2.selectAll("text.plabel").each(function(){if("0"===this.style.opacity)return;
let e=a(this,1);
e&&n.push(e)}),"0"!==$.style("opacity")&&$.selectAll("text").each(function(){let e=a(this,2);
e&&n.push(e)}),Qe.selectAll("g.city").each(function(){if(this.classList.remove("kx"),this.classList.contains("kh"))return;
let e=a(this,1);
e&&(i(e,n)||i(e,r)?this.classList.add("kx"):r.push(e))}),st=n.concat(r),it(e.k)}(t),!i){let e=b>=1024?17*1.15:b>=700?13:11;
$.selectAll("text").attr("dx",function(n){let r=t.applyX(j([n[1],n[2]])[0]),a=this.textContent.length*e*1.12/2+8;
return r-a<4?4+a-r:r+a>b-4?b-4-a-r:0})}/* the census names follow what the page has just written (family names have moved by now) */
GL&&gNames()}
var yt,kt,wt,xt,jt,St,_t,qt,Et,zt,Nt=null,Mt=0,Ct=null,Lt=!1,Tt=0,At="mouse",Pt=0,It=!1;
/* How the base keeps up with a gesture.
   kT is the view the base was last drawn at. kShow moves that drawing (as a picture) to where view T needs it.
   kPaint redraws it exactly at the view. A redraw in mid-gesture happens only when the picture no longer covers
   the box or has been enlarged past 1.6 times, and never more often than the device can take (kMs = how long the
   last redraw took).
   The will-change hint is on only while the picture is being moved, and off for the frame of every redraw. With
   the hint on, Chrome never re-picks the resolution of a layer: a layer made while zoomed in 150 times kept that
   resolution after zooming out and the whole map was then drawn about 190 times too large (measured: 324 tiles
   per redraw instead of 15, frames of 300 to 900 ms, and in the end a locked compositor). The base stays its own
   layer through translateZ(0) in the stylesheet, so switching the hint costs nothing. */
/* ---- GL: the view, and the link to the map engine (site/map-gl.js) ----
   The rest of this code thinks in one transform T (k = how many times the first view, x / y = shift in pixels), as it always did.
   kV reads it from the engine, kGo sends one to it, kTick runs on every frame the engine draws. */
function kV(){if(!GL)return Bh(q.node());
if(!GM)return gT;
let v=GM.view(),k=v.s/M;
return Fh.translate(b/2-k*(v.x*M+C[0]),y/2-k*(v.y*M+C[1])).scale(k)}
function kGo(T,ms){gT=T;
GM?GM.jump({s:T.k*M,x:((b/2-T.x)/T.k-C[0])/M,y:((y/2-T.y)/T.k-C[1])/M},f?0:ms||0):(kTick(T),clearTimeout(gB),gB=setTimeout(()=>{q.node().isConnected&&bt()},0))}
function kTick(T){let t=T.k,z=t>=11?2:t>=6?1:0;
Rt&&Rt.classList.toggle("on",!Gt(T)||!!nt||!!te);
/* GL: while the engine moves the map it also draws the names and dots (gLab below), so the page's own unseen copies are not
   moved or touched at all; they are put right once, at rest (the "end" handler calls kTick again). Moving them would make the
   browser lay out all of them (about 2,600) on every frame, and taking them out of the drawing instead made it rebuild them all
   whenever the map stopped. */
if(GL&&gMv&&gLon)return void(Ot=T);
GL?(E.attr("transform",T),z!==gZ&&(gZ=z,q.classed("zmid",z>0).classed("zdeep",z>1))):kMove(T),E2.attr("transform",T);
ot(t),kFollow(T),$.selectAll("text").attr("transform",e=>{let n=j([e[1],e[2]]);
return"translate("+n[0]+","+n[1]+") scale("+1/Math.max(t,gOne)+") translate("+-n[0]+","+-n[1]+")"}),$e.selectAll("circle").attr("r",11.76/Math.pow(t,.96)),Ot=T}
function gHome(){let B=[1e9,1e9,-1e9,-1e9];
x.forEach(e=>{if(!T(e))return;
let u=U(e);
B=[Math.min(B[0],u[0]),Math.min(B[1],u[1]),Math.max(B[2],u[2]),Math.max(B[3],u[3])]});
if(!(B[2]>B[0]))return Fh;
let pad=b<640?10:36,top=b<640?58:30,k=Math.min((b-2*pad)/(B[2]-B[0]),(y-top-pad)/(B[3]-B[1])),cx=(B[0]+B[2])/2,cy=(B[1]+B[3])/2;
gFit=k;
/* the first view is closer than "every language fits": 1.7 times on phones (<64rem), 1.3 times on desktop. It starts at the languages' west edge, so all
   of Europe shows (most languages are there) and the far east is a pan away; up and down it centres on the languages in that
   width (the far east reaches much further north, which would leave the Arctic on screen).
   Zooming out still reaches all of them (gOne uses gFit). */
{k*=me()?1.3:1.7;let hw=(b-2*pad)/2/k,hh=(y-top-pad)/2/k,W=[1e9,-1e9];
cx=B[2]-B[0]>2*hw?B[0]+hw:cx;
x.forEach(e=>{if(!T(e)||Math.abs(e._xy[0]-cx)>hw)return;let u=U(e);W=[Math.min(W[0],u[1]),Math.max(W[1],u[3])]});
W[1]>W[0]&&(cy=(W[0]+W[1])/2,
/* desktop: when those languages reach further up and down than the view, it centres on where most of them are (the middle
   80%), so a few in the Arctic or in southern Arabia do not pull the view away from Europe, the Caucasus and Iran */
me()&&W[1]-W[0]>2*hh&&(cy=kMid(x.filter(e=>T(e)&&Math.abs(e._xy[0]-cx)<=hw).map(e=>e._xy[1]))))}
return Fh.translate(b/2,top+(y-top-pad)/2).scale(k).translate(-cx,-cy)}
function kMid(v){v=v.slice().sort((a,b)=>a-b);let q=f=>v[Math.min(v.length-1,Math.floor(f*v.length))];return v.length?(q(.1)+q(.9))/2:0}
function gZoom(fac){let T=kV(),k=Math.max(.8*gOne,Math.min(150,T.k*fac)),r=k/T.k;
kGo(Fh.translate(b/2-(b/2-T.x)*r,y/2-(y/2-T.y)*r).scale(k),260)}
/* what is chosen goes to the engine, which sets how strong every area is drawn */
/* GL: what the page has written at this view, measured as it stands (language and family names, both kinds of city names,
   pins), so the engine writes no census name on top of it, nor one that repeats a city name beside it (GM.avoid in site/map-gl.js) */
function gNames(){if(!GM||!GM.avoid)return;
let n=new Set,B=[],T=kV(),R=Q2.node().getBoundingClientRect(),add=el=>{let r=el.getBoundingClientRect();
r.width&&B.push([r.left-R.left-2,r.top-R.top-2,r.right-R.left+2,r.bottom-R.top+2])};
Q2.selectAll("text.plabel").each(function(){"0"!==this.style.opacity&&"none"!==this.style.display&&add(this)}),"0"!==$.style("opacity")&&$.selectAll("text").each(function(){add(this)}),Qe.selectAll("g.city").each(function(d){d&&!this.classList.contains("kh")&&!this.classList.contains("kx")&&(n.add(d.n),add(this))}),Ye.selectAll("g.ac").each(function(d){d&&this.__u&&!this.hasAttribute("data-off")&&(n.add(d.n),add(this))}),Ve.selectAll("g.pin").each(function(d){if(!d||!d._xy||"none"===this.style.display||"none"===getComputedStyle(this).display)return;
let X=T.applyX(d._xy[0]),Y=T.applyY(d._xy[1]);
B.push([X-10,Y-10,X+10,Y+10])}),GM.avoid({boxes:B,cities:[...n]})}
function gSync(){if(!GM)return;
gPo||gPinsOn();
let th=document.documentElement.getAttribute("data-theme");
GM.set({sel:nt,fam:nt?null:rt||null,conc:!!p,theme:"dark"===th||!th&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),clearTimeout(gC),gC=setTimeout(gCity,500),gLabSync()}
/* on phones, general city names show only inside the chosen language's area */
function gCity(){if(!q.node().isConnected)return;
let ph=matchMedia("(max-width: 768px)").matches;
Ye.selectAll("g.ac").each(function(d){!ph||nt&&ce(nt,"d",[(d.x-C[0])/M,(d.y-C[1])/M])?this.removeAttribute("data-off"):this.setAttribute("data-off","1")})}
let gLang=h=>h&&x.find(e=>e.lang===h.name),gTip=l=>"<b>"+ei(Na(l))+"</b><span>"+ei(Ca(l.family))+" · "+ei(Ma(l))+"</span>";
/* pointer over the map: a detailed area names its language; on the first view a broad area does; further in, the place under the pointer */
function gHover(ev){let o=ev.originalEvent;
if(!o||X||o.buttons||q.node().classList.contains("zooming"))return;
if(o.target.closest&&o.target.closest("g.pin,.clu"))return;
let h=GM.hit(ev.point),l=h&&("lang"===h.t||"zone"===h.t&&!vt())?gLang(h):null;
GM.map.getCanvas().style.cursor=l||vt()&&hf?"pointer":"";
GM.hover(l&&"zone"===h.t?l.lang:null);
if(l)return De(null),Y(o,gTip(l));
if(!vt()||!hf)return J(),De(null);
He||(He=requestAnimationFrame(()=>{He=0;
let t=Ue(o),n=le(t);
n?(Y(o,n),De(de(t))):(J(),De(null))}))}
/* click or tap on the map: a detailed area chooses its language; on the first view a broad area does; further in, the place opens */
function gClick(ev){let o=ev.originalEvent,t=o&&o.target;
if(!o||t.closest&&t.closest("g.pin,.clu"))return;
let h=GM.hit(ev.point);
if(h&&"lang"===h.t){let l=gLang(h);
return void(l&&kt&&(J(),kt.select(l.id)))}
if(!vt()||!hf){let l=h&&"zone"===h.t&&gLang(h);
return void(l&&(J(),nn(l),Ht(l,950)))}
let n=le(Ue(o));
if(!n)return X=!1,Le(null),J(),void(nt&&!p&&Pe());
Ge(de(Ue(o)),n,o)}
/* Keyboard on the map, every country (both maps): each place a click opens (every region of data/today.json, and every
   country without regions) is a button nobody sees (.kkeys in the stylesheet). All of them are one Tab stop. Arrow keys
   go through them (by country, then name), Page Up / Page Down jump to the previous / next country, typing a name jumps
   to it, Home / End. The place with focus is brought into view and shown as under the pointer; Enter opens its card. */
let kKn=0;
/* a point inside a place (lon/lat) where a click opens that same place: tried along lines across its parts, largest part first.
   Not inside the South Ossetia area of the ethnic data, which has a card of its own. null for a place a click can never open. */
function kIn(F){if(void 0!==F.__in)return F.__in;
let g=F.geometry,P=(g?"Polygon"===g.type?[g.coordinates]:"MultiPolygon"===g.type?g.coordinates:[]:[]).map(p=>{let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
p[0].forEach(c=>{x0=Math.min(x0,c[0]),x1=Math.max(x1,c[0]),y0=Math.min(y0,c[1]),y1=Math.max(y1,c[1])});
return[p,(x1-x0)*(y1-y0),y0,y1]}).sort((a,c)=>c[1]-a[1]),o=null,so=Kf&&Kf.E&&Kf.E.so;
e:for(let[p,,y0,y1]of P)for(let s of[.5,.37,.63,.24,.76,.12,.88]){let Y0=y0+(y1-y0)*s,X=[],I=[];
p.forEach(r=>{for(let i=0,k=r.length-1;i<r.length;k=i++){let a=r[i],c=r[k];a[1]>Y0!=c[1]>Y0&&X.push(a[0]+(Y0-a[1])*(c[0]-a[0])/(c[1]-a[1]))}}),X.sort((a,c)=>a-c);
for(let i=0;i+1<X.length;i+=2)I.push([X[i],X[i+1]]);
I.sort((a,c)=>c[1]-c[0]-(a[1]-a[0]));
for(let[a,c]of I)for(let u of[.5,.25,.75,.1,.9]){let t=[a+(c-a)*u,Y0];if(de(t)===F&&!(so&&pf(so.f,t)&&Wu(so.f,t))){o=t;break e}}}
return Kf&&Kf.E?F.__in=o:o}
function kKeys(){e.querySelectorAll(".kkeys").forEach(n=>n.remove());
if(!hf)return;
let nm=F=>F.properties.n||"",cn={},has=new Set(hf.R.map(r=>r.properties.c)),named=new Set(hf.C.filter(c=>has.has(c.properties.c)).map(c=>c.properties.n));
hf.C.forEach(c=>{cn[c.properties.c]=Ma({place:nm(c)})});
let L=hf.R.filter(nm).map(r=>({F:r,c:cn[r.properties.c]||r.properties.c||"",n:nm(r)})).concat(hf.C.filter(c=>!has.has(c.properties.c)&&!named.has(c.properties.n)&&nm(c)).map(c=>({F:c,c:Ma({place:nm(c)}),n:""})));
L.sort((a,c)=>a.c.localeCompare(c.c,Ia())||a.n.localeCompare(c.n,Ia())),L.forEach(it=>it.l=it.n?it.n+", "+it.c:it.c);
let G=document.createElement("div"),fr=document.createDocumentFragment(),cur=0,ta="",taT=0;
G.className="kkeys",G.setAttribute("role","group"),G.setAttribute("aria-label",{en:"Places on the map",sq:"Vende në hartë",sr:"Mesta na mapi",sc:"Места на мапи"}[ya()]||"Places on the map");
L.forEach((it,i)=>{let B=document.createElement("button");
B.type="button",B.tabIndex=i?-1:0,B.textContent=it.l,B.dataset.i=i,fr.appendChild(B)}),G.appendChild(fr);
/* a place is checked when the keyboard is about to land on it (kIn); one a click can never open is skipped and hidden */
let ok=i=>!!kIn(L[i].F)||(G.children[i].hidden=!0,!1),go=(i,d)=>{for(;i>=0&&i<L.length&&!ok(i);)i+=d;let B=G.children[i];B&&(G.children[cur]&&(G.children[cur].tabIndex=-1),cur=i,B.tabIndex=0,B.focus({preventScroll:!0}))};
G.addEventListener("focusin",ev=>{let i=+(ev.target.dataset||{}).i;
if(!isFinite(i))return;
if(!ok(i))return go(i+1,1);
G.children[cur]&&G.children[cur]!==ev.target&&(G.children[cur].tabIndex=-1),cur=i,ev.target.tabIndex=0,kFocus(L[i])}),G.addEventListener("focusout",ev=>{G.contains(ev.relatedTarget)||(kKn++,J(),De(null))}),G.addEventListener("click",ev=>{let i=+(ev.target.dataset||{}).i,t=isFinite(i)&&kIn(L[i].F),n=t&&le(t);
n&&Ge(de(t),n,{clientX:0,clientY:0,target:q.node()})}),G.addEventListener("keydown",ev=>{let n=L.length,k=ev.key,to=null,d=1;
if("ArrowDown"===k||"ArrowRight"===k)to=Math.min(n-1,cur+1);
else if("ArrowUp"===k||"ArrowLeft"===k)to=Math.max(0,cur-1),d=-1;
else if("Home"===k)to=0;
else if("End"===k)to=n-1,d=-1;
else if("PageDown"===k){to=cur;for(;to<n-1&&L[to].c===L[cur].c;)to++}
else if("PageUp"===k){let c=cur>0&&L[cur-1].c!==L[cur].c?cur-1:cur;to=c;for(;to>0&&L[to-1].c===L[c].c;)to--;d=-1}
else if(1===k.length&&!ev.ctrlKey&&!ev.metaKey&&!ev.altKey&&" "!==k){clearTimeout(taT),taT=setTimeout(()=>{ta=""},700);
let s=1===(ta+=k.toLowerCase()).length?1:0;
for(let m=0;m<n;m++){let i=(cur+s+m)%n;if(L[i].l.toLowerCase().startsWith(ta)&&ok(i)){to=i;break}}
if(null==to)return}
else return;
ev.preventDefault(),go(to,d)}),e.appendChild(G)}
function kFocus(it){let n=++kKn,t=kIn(it.F);
if(!t)return J(),De(null);
let P=j(t),T=kV(),X=T.applyX(P[0]),Yp=T.applyY(P[1]),top=52+(y-52-w())/2,show=()=>{if(n!==kKn||!q.node().isConnected)return;
let T=kV(),r=Q2.node().getBoundingClientRect(),h=le(t);
h?(Y({clientX:r.left+T.applyX(P[0]),clientY:r.top+T.applyY(P[1])},h),De(de(t))):(J(),De(null))};
if(X>40&&X<b-40&&Yp>64&&Yp<y-40-w())return show();
let TT=Fh.translate(b/2-T.k*P[0],top-T.k*P[1]).scale(T.k);
GL?kGo(TT,f?0:380):q.transition().duration(f?0:380).ease(Po).call(Dt.transform,TT),setTimeout(show,f?40:440)}
/* The map's fallback (v74 in src/styles/v66.css): a short note over the map box when the engine cannot start, with the two
   ways on that still work (the Languages wheel, and trying again). The rest of the site does not need the map. */
function kNoMap(box){if(!box||box.querySelector(".knomap"))return;
let T={en:["The map can't be shown in this browser","It needs WebGL 2, the browser's graphics. The languages and the dictionary work as usual.","Languages","Try again"],
sq:["Harta nuk mund të shfaqet në këtë shfletues","Kërkon WebGL 2, grafikën e shfletuesit. Gjuhët dhe fjalori punojnë si zakonisht.","Gjuhët","Provo përsëri"],
sr:["Mapa ne može da se prikaže u ovom pregledaču","Potreban je WebGL 2, grafika pregledača. Jezici i rečnik rade kao i obično.","Jezici","Pokušaj ponovo"]}[ya()]||[],
E0=["The map can't be shown in this browser","It needs WebGL 2, the browser's graphics. The languages and the dictionary work as usual.","Languages","Try again"],
t=i=>ei(Ea(T[i]||E0[i])),d=document.createElement("div");
d.className="knomap",d.setAttribute("role","status"),
d.innerHTML='<div class="knm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14"/></svg><h3>'+t(0)+"</h3><p>"+t(1)+'</p><div class="knb"><button type="button" class="knl">'+t(2)+'</button><button type="button" class="knr">'+t(3)+"</button></div></div>",
d.querySelector(".knl").onclick=()=>Ja("languages"),d.querySelector(".knr").onclick=()=>location.reload(),box.appendChild(d)}
function gStart(){let gDead=!1,gBad=err=>{gDead||(gDead=!0,clearTimeout(gTm),console.warn("Etimo: the map engine could not start",err),GM&&GM.off(),GM=null,window.__etimoMap&&window.__etimoMap.drop(),kNoMap(e),window.__kMapReady||(window.__kMapReady=!0,window.dispatchEvent(new Event("etimo:mapready"))))},/* a start that takes longer than 20 seconds (a stalled download) also ends in the note */
gTm=setTimeout(()=>{q.node().isConnected&&!GM&&gBad(Error("the map engine took too long"))},2e4);
(window.__etimoMap?Promise.resolve(window.__etimoMap):import("./map-gl.js?v=9").then(m=>window.__etimoMap=m)).then(m=>m.attach(e,{languages:x,color:Vf,parent:E.node(),px:u=>[u[0]*M+C[0],u[1]*M+C[1]],k:()=>kV().k})).then(g=>{if(clearTimeout(gTm),gDead||!q.node().isConnected)return;
let T0=gT;
GM=g,e.querySelectorAll("canvas[aria-label]").forEach(c=>c.setAttribute("aria-label",Ea({sq:"Harta e gjuhëve",sr:"Mapa jezika"}[ya()]||"Map of languages"))),GM.limits(M,.8*gOne,150),GM.overlay(q.node(),Q2.node()),kGo(T0,0),GM.on({move:()=>kTick(kV()),/* the names are laid out again once the map has really come to rest: a wheel or pinch stops and starts many times a second */
start:()=>{clearTimeout(Mt),clearTimeout(gB),De(null),gMv||(gMv=!0,q.classed("zooming",!0)),X=!1,J()},end:()=>{clearTimeout(gB),gB=setTimeout(()=>{q.node().isConnected&&(gMv=!1,q.classed("zooming",!1),kTick(kV()),bt(),gLabSync())},140)},click:gClick,hover:gHover,fail:gBad,leave:()=>{X||J(),De(null),GM.hover(null)}}),Ve.selectAll("g.pin").each(function(d){GM.hidePin.has(d.lang)&&(this.style.display="none")}),Q2.selectAll("text.plabel.ln").each(function(d){d&&GM.hidePin.has(d.lang)&&(this.style.display="none")}),gSync(),
/* the names and dots are laid out a frame after the map is in place, so the map shows first */
requestAnimationFrame(()=>requestAnimationFrame(()=>{q.node().isConnected&&(kTick(kV()),bt())}))}).catch(gBad)}
/* GL: the pins are drawn by the engine (site/map-gl.js: a disc with the language's colour at its core), so zooming does not redraw 210 of them on every frame.
   The pin elements stay in the page, unseen, for pointer and keyboard and for the rules that fade, dim or hide a pin (style sheet and classes, unchanged).
   gPinStep reads what those rules say for every pin and hands it to the engine; it runs for a moment after anything about the pins changes.
   The elements are put at their right size when the map comes to rest (ot, called from bt), not while it moves.
   An engine file from before this (still in a browser's cache) has no pinStates: the page then draws the pins itself, as before. */
let gPx=new Map,gPc=[],gPt=0,gPr=0,gPh=null,gPo=null;
function gPinSync(ms){gPt=Math.max(gPt,performance.now()+(ms||(q.classed("kboot")?3800:700))),gPr||(gPr=requestAnimationFrame(gPinStep))}
function gPinStep(){gPr=0;
if(!GM||!GM.pinStates||!q.node().isConnected)return;
let a=[],g=+getComputedStyle(Ve.node()).opacity;
Ve.selectAll("g.pin").each(function(d){let i=gPx.get(d);
if(null==i)return;
let cs=getComputedStyle(this),o="none"===cs.display?0:Math.round(100*g*cs.opacity)/100,s=d===nt?1.4:d===gPh?1.18:1,c=gPc[i];
c&&c[0]===o&&c[1]===s||(gPc[i]=[o,s],a.push([i,o,s]))});
a.length&&GM.pinStates(a),performance.now()<gPt&&(gPr=requestAnimationFrame(gPinStep))}
function gPinsOn(){gPo=new MutationObserver(()=>gPinSync());
if(!GM.pinStates)return;
x.forEach((e,i)=>gPx.set(e,i)),gPc=[],Q2.attr("data-glpins",1),gPo.observe(Ve.node(),{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class","style"]});
[q.node(),Q2.node()].forEach(n=>gPo.observe(n,{attributes:!0,attributeFilter:["class","data-f"]}));
Ve.selectAll("g.pin").on("pointerenter.gl",(e,d)=>{gPh=d,gPinSync(80)}).on("pointerleave.gl",()=>{gPh=null,gPinSync(80)}),gPinSync(3800)}
/* GL: the names and dots the page lays out (language, family, district and city names, city dots, the word view's circles, the name of
   the place with keyboard focus) are drawn by the engine (site/map-gl.js, layers lab-*), the way the leading map products draw theirs:
   on the graphics card, the same size on screen while the map zooms, nothing of the page redrawn on any frame. When the map comes to
   rest, or anything about them changes, gLabStep reads each one as the page and its style sheet left it (its point on the map, its
   offset from it, text, size, weight, colours, how visible) and hands the list over. The page's own elements stay in place, unseen
   (data-glab in v64.css: hidden with visibility, so their own colours and opacities can still be read), for the keyboard, the pointer and the census names' collision check (gNames); while the map moves
   kTick leaves them exactly as they are (not moved, not hidden, so the browser has nothing to lay out again). Pins are not in it: the engine has them already (gPinStep).
   An engine file without labels() (an old copy in a browser's cache) leaves everything to the page, as before. */
let gLt=0,gLr=0,gLo=null,gLkey="",gLops=[],gLwait=0;
const gR2=v=>Math.round(100*v)/100;
function gLabSync(ms){if(!GL||!GM||!GM.labels||!q.node().isConnected)return;
gLo||(gLon=!1,gLo=new MutationObserver(()=>{gMv||gLabSync()}),[q.node(),Q2.node()].forEach(n=>gLo.observe(n,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","transform","x","y","r","display","opacity","data-off"]})),
/* a word circle's hover and focus look comes from the style sheet alone (no change in the page to observe) */
["pointerover","pointerout","focusin","focusout"].forEach(t=>Q2.node().addEventListener(t,e=>{e.target.closest&&e.target.closest(".clu")&&gLabSync(200)})));
gLt=Math.max(gLt,performance.now()+(ms||420)),gLr||(gLr=requestAnimationFrame(gLabStep))}
function gLabStep(){gLr=0;
if(!GM||!GM.labels||!q.node().isConnected||gMv)return;
let now=performance.now();
if(now<gLwait)return void(gLr=requestAnimationFrame(gLabStep));
gLwait=now+90;
let L=gLabRead(),key=JSON.stringify(L.map(({o,...p})=>p));
if(key!==gLkey)gLkey=key,gLops=L.map(p=>p.o),GM.labels(L);
else{let a=[];
L.forEach((p,i)=>{p.o!==gLops[i]&&(gLops[i]=p.o,a.push([i,p.o]))}),a.length&&GM.labelStates(a)}
gLon||(gLon=!0,[q,Q2].forEach(s=>s.attr("data-glab","")));
now<gLt&&(gLr=requestAnimationFrame(gLabStep))}
/* an outline's lines in pixels of the window (M, L and Z only, as the map's path drawing writes them; anything else: null) */
function gLpath(d,M){if(!d||!M)return null;
let tk=d.match(/[A-Za-z]|-?[\d.]+(?:e-?\d+)?/g)||[],rings=[],ring=null,cmd="";
for(let j=0;j<tk.length;){let t=tk[j];
if(/[A-Za-z]/.test(t)){if(cmd=t,j++,"Z"===t||"z"===t)ring&&ring.length>=4&&ring.push(ring[0],ring[1]),ring=null;
else if("M"!==t&&"L"!==t)return null;
continue}
let x=+t,y=+tk[j+1];
if(j+=2,"M"===cmd&&(ring=[],rings.push(ring),cmd="L"),!ring)return null;
ring.push(Math.round(10*(M.a*x+M.c*y+M.e))/10,Math.round(10*(M.b*x+M.d*y+M.f))/10)}
return rings.filter(r=>r.length>=4)}
function gLpathC(el,M){let d=el.getAttribute("d"),m=M&&[M.a,M.b,M.c,M.d,M.e,M.f].join(),c=el.__glp;
return c&&c.d===d&&c.m===m?c.p:(el.__glp={d,m,p:gLpath(d,M)}).p}
/* the point a name belongs to, in pixels of the window: a language name's pin; otherwise the translate of the nearest element that
   carries one (a city, a district name, a family name, a word circle); without one, the middle of the name itself */
function gLanchor(el,r,T2){let d=el.__data__;
if(el.classList.contains("plabel")&&d&&d._xy&&T2)return[T2.a*d._xy[0]+T2.c*d._xy[1]+T2.e,T2.b*d._xy[0]+T2.d*d._xy[1]+T2.f];
for(let p=el;p&&p!==r;p=p.parentNode){let m=/^\s*translate\(\s*([-\d.e]+)[ ,]+([-\d.e]+)/.exec(p.getAttribute("transform")||"");
if(m){let M=p.parentNode.getScreenCTM();
return M?[M.a*m[1]+M.c*m[2]+M.e,M.b*m[1]+M.d*m[2]+M.f]:null}}
return null}
function gLabRead(){let out=[],mark=[],roots=[q.node(),Q2.node()],B=Q2.node().getBoundingClientRect(),T2=E2.node().getScreenCTM();
/* a computed colour (rgb(), rgba() or color(srgb ...)) with an extra opacity, as rgba(); null when nothing would show */
let col=(c,a)=>{if(!c||"none"===c||!(a>0))return null;
let m=c.match(/-?[\d.]+(e-?\d+)?/g);
if(!m||m.length<3)return null;
let f=/^color\(/.test(c)?255:1,al=(m.length>3?+m[3]:1)*a;
return al>.004?"rgba("+Math.round(m[0]*f)+","+Math.round(m[1]*f)+","+Math.round(m[2]*f)+","+gR2(al)+")":null};
/* how visible a group is (its own opacity times its parents'), once per group */
let gop=new Map,op=(p,r)=>{if(!p||p===r)return 1;
let v=gop.get(p);
if(null==v){let s=getComputedStyle(p);
v="none"===s.display?0:+s.opacity*op(p.parentNode,r),gop.set(p,v)}return v};
roots.forEach(r=>{let R=r.getScreenCTM(),k0=R?Math.hypot(R.a,R.b):1;
r.querySelectorAll("text,circle,path").forEach(el=>{let pn=el.parentNode;
if("none"===el.style.display||pn.style&&"none"===pn.style.display||el.closest("g.pin,defs,mask,clipPath"))return;
let b=el.getBoundingClientRect();
if(!(b.width||b.height)||b.right<B.left-40||b.left>B.right+40||b.bottom<B.top-30||b.top>B.bottom+30)return;
let cs=getComputedStyle(el),o="none"===cs.display?0:+cs.opacity*op(pn,r);
if(o<.01)return;
let M=el.getScreenCTM(),k=M?Math.hypot(M.a,M.b)/k0:1,fill=col(cs.fill,+cs.fillOpacity),edge=col(cs.stroke,+cs.strokeOpacity),sw=edge?parseFloat(cs.strokeWidth)*k:0,cx=(b.left+b.right)/2,cy=(b.top+b.bottom)/2;
/* an outline (stroke only, straight lines: the chosen language's home regions, the place with keyboard focus) goes over as its
   lines in pixels of the window and is marked data-gl, so the style sheet hides it; a filled shape stays the page's own drawing */
if("path"===el.tagName){let pts=!fill&&edge&&gLpathC(el,M);
return void(pts&&pts.length?(el.hasAttribute("data-gl")||mark.push([el,!0]),out.push({k:"l",x:0,y:0,pts,c:edge,lw:gR2(parseFloat(cs.strokeWidth)*("non-scaling-stroke"===cs.vectorEffect?1:k)),o:gR2(o)})):el.hasAttribute("data-gl")&&mark.push([el,!1]))}
if("circle"===el.tagName){if(!fill&&!edge)return;
let rr=b.width/2;
return void out.push({k:"c",x:gR2(cx),y:gR2(cy),r:gR2(Math.max(.5,rr-sw/2)),c:fill||"rgba(0,0,0,0)",h:edge||"rgba(0,0,0,0)",hw:gR2(sw),o:gR2(o)})}
let t=el.textContent.trim();
if(!t||!fill)return;
"uppercase"===cs.textTransform&&(t=t.toUpperCase());
let fs=parseFloat(cs.fontSize),s=fs*k,a=gLanchor(el,r,T2)||[cx,cy];
out.push({k:"t",x:gR2(a[0]),y:gR2(a[1]),t,s:gR2(s),w:100*Math.round((+cs.fontWeight||400)/100),ls:gR2((parseFloat(cs.letterSpacing)||0)/fs),off:[gR2((cx-a[0])/s),gR2((cy-a[1])/s)],c:fill,h:edge||"rgba(0,0,0,0)",hw:gR2(Math.min(s/4,sw/2)),o:gR2(o)})})});
mark.forEach(([el,on])=>on?el.setAttribute("data-gl",""):el.removeAttribute("data-gl"));
return out}
let kT=Fh,kCss=!1,kTm=0,kAt=0,kMs=30,kHold=!1;
function kShow(T){let s=T.k/kT.k,dx=T.x-s*kT.x,dy=T.y-s*kT.y,n=q.node().style;
return 1e-5>Math.abs(s-1)&&.05>Math.abs(dx)&&.05>Math.abs(dy)?kCss&&(n.transform="",n.willChange="",kCss=!1):(n.transform="translate3d("+dx+"px,"+dy+"px,0) scale("+s+")",kHold||(n.willChange="transform"),kCss=!0),[s,dx,dy]}
function kPaint(P){clearTimeout(kTm),kTm=0;
let t0=performance.now(),n=q.node().style;
Et&&fe(P)&&he(),kT=P,E.attr("transform",P),q.classed("zmid",P.k>=6).classed("zdeep",P.k>=11),n.transform="",n.willChange="",kCss=!1,kHold=!0,kAt=t0,requestAnimationFrame(()=>{kHold=!1,requestAnimationFrame(()=>{kMs=.5*kMs+.5*Math.max(0,Math.min(500,performance.now()-t0-16))})})}
function kMove(T){let now=performance.now(),s=T.k/kT.k,dx=T.x-s*kT.x,dy=T.y-s*kT.y,open=dx-KP*b*s>.5||dx+(1+KP)*b*s<b-.5||dy-KP*y*s>.5||dy+(1+KP)*y*s<y-.5,gap=Math.min(420,Math.max(120,4*kMs));
/* the picture is never shown stretched past 4 times or shrunk below a quarter: beyond that it is redrawn at once, however recent the last redraw */
if((open||s>1.6)&&now-kAt>gap||s>4||s<.25)return kPaint(T);
kShow(T),clearTimeout(kTm),kTm=setTimeout(()=>{kTm=0,kCss&&q.node().isConnected&&kPaint(kV())},130)}
/* labels keep their place next to their pin while the map moves; they are laid out again when it rests */
function kFollow(T){Q2.selectAll("text.plabel").each(function(d){let o=this.__o;
o&&d&&d._xy&&"0"!==this.style.opacity&&(this.setAttribute("x",(T.applyX(d._xy[0])+o[0]).toFixed(1)),this.setAttribute("y",(T.applyY(d._xy[1])+o[1]).toFixed(1)))})}
function kEnd(){kPaint(kV()),q.classed("zooming",!1),bt()}
/* credits for the map's data (both maps): one small line in the bottom left corner; only the link takes the pointer */
/* map credits: one line on desktop; on phones a small (i) in the map's lower left corner that starts open, folds away at the
   first touch of the map or while a card is open, and opens again when tapped (styles: v65.css) */
if(!e.querySelector(".mcred")){e.insertAdjacentHTML("beforeend",'<div class="mcred open"><button type="button" class="mcb" aria-expanded="true" aria-label="'+({en:"Map credits",sq:"Burimet e hartës",sr:"Izvori mape",sc:"Извори мапе"}[ya()]||"Map credits")+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11v6M12 7.6v.01"/></svg></button><p class="mct"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a> · © EuroGeographics for the administrative boundaries · Relief: Terrain Tiles (USGS, NOAA, Copernicus)</p></div>');
let K=e.querySelector(".mcred"),KB=K.querySelector(".mcb"),ko=o=>{K.classList.toggle("open",o),KB.setAttribute("aria-expanded",String(o))};
KB.onclick=ev=>{ev.stopPropagation();let o=!K.classList.contains("open")||!K.classList.contains("on")&&!!e.querySelector(":scope>.card:not([hidden])");ko(o),K.classList.toggle("on",o)},e.addEventListener("pointerdown",ev=>{K.contains(ev.target)||(ko(!1),K.classList.remove("on"))},{capture:!0,passive:!0})}
let Rt=e.querySelector(".mreset")||(()=>{let t=e,n=document.createElement("button");
n.type="button",n.className="mreset kreset";
let r={en:"Reset",sq:"Rifillo",sr:"Ispočetka",sc:"Испочетка"}[ya()]||"Reset";
return n.setAttribute("aria-label",r),n.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3.2"/></svg>',n.setAttribute("title",r),t.appendChild(n),n})(),Ot=null,Dt=Qh().extent([[0,0],[b,y]]).scaleExtent([.8,150]).translateExtent(function(e,t,n){let r=e.scale()/1e3,a=e.translate(),i=a[0]+-1490*r,s=a[0]+1660*r,o=a[1]+-1670*r,l=a[1]+-10*r,u=t/.55,c=n/.55,d=(i+s)/2,h=(o+l)/2;
return s-i<u&&(i=d-u/2,s=d+u/2),l-o<c&&(o=h-c/2,l=h+c/2),[[i,o],[s,l]]}(j,b,y)).filter(e=>!(e.button||e.ctrlKey&&"wheel"!==e.type||0===String(e.type).indexOf("touch")||"touch"===e.pointerType)).on("start",()=>{clearTimeout(Mt),De(null),q.classed("zooming",!0),X=!1,J()}).on("end",()=>{Lt||kEnd()}).on("zoom",e=>kTick(e.transform));
GL||q.call(Dt);
if(GL){let w=t=>{"Escape"===t.key&&(!t.target||!/INPUT|TEXTAREA/.test(t.target.tagName))&&(nt||rt||!Gt(kV()))&&Te()},pd=ev=>{At=ev.pointerType};
window.addEventListener("keydown",w),e.addEventListener("pointerdown",pd,!0),zt=()=>{window.removeEventListener("keydown",w),e.removeEventListener("pointerdown",pd,!0),kMo.disconnect(),clearTimeout(gB),clearTimeout(gC),GM&&GM.off(),GM=null}}else{let e=q.node(),t=new Map,n=null,r=0,a=null,i=!1,s=null,o=0,l=null,u=()=>{let h=e.parentNode,t=Nt||(Nt=h.getBoundingClientRect());
return[b/(h.clientWidth||b),y/(h.clientHeight||y),t.left+h.clientLeft,t.top+h.clientTop]},c=e=>{let t=u();
return[(e.clientX-t[2])*t[0],(e.clientY-t[3])*t[1]]},d=e=>Dt.constrain()(Fh.translate(e.x,e.y).scale(Math.max(.8,Math.min(150,e.k))),[[0,0],[b,y]],Dt.translateExtent()),h=()=>{let r=[...t.values()],a=Bh(e);
n=r.length>1?{m:"z",T:a,c:[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2],d:Math.hypot(r[0][0]-r[1][0],r[0][1]-r[1][1])||1}:r.length?{m:"p",T:a,c:r[0].slice()}:null},m=()=>{if(!n)return;
let e,i=[...t.values()];
if("p"===n.m&&i.length)e=Fh.translate(n.T.x+i[0][0]-n.c[0],n.T.y+i[0][1]-n.c[1]).scale(n.T.k);
else{if(!(i.length>1))return;
{let t=[(i[0][0]+i[1][0])/2,(i[0][1]+i[1][1])/2],r=Math.hypot(i[0][0]-i[1][0],i[0][1]-i[1][1])||1,a=Math.max(.8,Math.min(150,n.T.k*r/n.d)),s=(n.c[0]-n.T.x)/n.T.k,o=(n.c[1]-n.T.y)/n.T.k;
e=Fh.translate(t[0]-s*a,t[1]-o*a).scale(a)}}
a=d(e),r||(r=requestAnimationFrame(()=>{r=0,a&&(Lt=!0,q.call(Dt.transform,a),a=null)}))},g=e=>{if(!t.has(e.pointerId))return;
let n=c(e);
t.set(e.pointerId,n),!i&&Math.hypot(n[0]-s[0],n[1]-s[1])>14&&(i=!0),i&&m()},v=e=>{if(!t.has(e.pointerId))return;
if(t.delete(e.pointerId),t.size)return void h();
let s=Lt;
if(Lt=!1,n=null,cancelAnimationFrame(r),r=0,a=null,i)Tt=performance.now(),s&&kEnd();
else if("pointercancel"!==e.type){let t=c(e),n=performance.now();
l&&n-o<320&&Math.hypot(t[0]-l[0],t[1]-l[1])<32&&!(e.target&&e.target.closest&&e.target.closest("g.pin,.clu"))?(o=0,l=null,Tt=n,q.transition().duration(f?0:300).ease(Ao).call(Dt.scaleBy,2,t)):(o=n,l=t)}},k=e=>{if(performance.now()-Tt<380)return e.stopPropagation(),void e.preventDefault();
It&&(It=!1,e.stopPropagation(),e.preventDefault(),X=!1,Le(null),J(),nt&&!p&&Pe(),rt&&(rt=null,pt=null,q.classed("fsel",!1).attr("data-f",null),bt(),Ae()))},w=t=>{"Escape"===t.key&&(!t.target||!/INPUT|TEXTAREA/.test(t.target.tagName))&&(nt||rt||!Gt(Bh(e)))&&Te()};
q.on("pointerdown.kt",e=>{Nt=null,It=!1,At=e.pointerType,"mouse"!==e.pointerType&&(t.set(e.pointerId,c(e)),1===t.size?(i=!1,s=c(e),q.interrupt()):i=!0,h())}),window.addEventListener("pointermove",g,{passive:!0}),window.addEventListener("pointerup",v),window.addEventListener("pointercancel",v),window.addEventListener("keydown",w),e.addEventListener("click",k,!0);
/* wheel and trackpad: each step sets a target and the view glides to it, instead of jumping a notch at a time */
let wK=0,wP=null,wR=0,wT=0,wS=()=>{let now=performance.now(),T=Bh(e),a=1-Math.exp(-Math.max(8,Math.min(50,now-wT))/55);
wT=now;
let lk=Math.log(T.k)+a*(Math.log(wK)-Math.log(T.k)),kk=.004>Math.abs(Math.log(wK)-lk)?wK:Math.exp(lk),x0=(wP[0]-T.x)/T.k,y0=(wP[1]-T.y)/T.k;
Lt=!0,q.call(Dt.transform,d(Fh.translate(wP[0]-x0*kk,wP[1]-y0*kk).scale(kk))),kk===wK?(wR=0,Lt=!1,kEnd()):wR=requestAnimationFrame(wS)};
q.on("wheel.zoom",null),e.addEventListener("wheel",ev=>{ev.preventDefault();
let T=Bh(e),dl=-ev.deltaY*(1===ev.deltaMode?.05:ev.deltaMode?1:.002)*(ev.ctrlKey?10:1);
wR||(wK=T.k,wT=performance.now()-16);
let nk=Math.max(.8,Math.min(150,wK*Math.pow(2,dl)));
if(!wR&&1e-4>Math.abs(Math.log(nk/T.k)))return;
wR||q.interrupt(),wK=nk,wP=e.__kpt(ev),wR||(wR=requestAnimationFrame(wS))},{passive:!1});
/* what lands on a pin or a cluster (top drawing) still drives the map underneath */
let o2=Q2.node(),fw=ev=>{"wheel"===ev.type&&ev.preventDefault(),e.dispatchEvent(new ev.constructor(ev.type,{bubbles:!1,cancelable:!0,view:window,detail:ev.detail,clientX:ev.clientX,clientY:ev.clientY,screenX:ev.screenX,screenY:ev.screenY,ctrlKey:ev.ctrlKey,shiftKey:ev.shiftKey,altKey:ev.altKey,metaKey:ev.metaKey,button:ev.button,buttons:ev.buttons,deltaX:ev.deltaX,deltaY:ev.deltaY,deltaMode:ev.deltaMode,pointerId:ev.pointerId,pointerType:ev.pointerType,isPrimary:ev.isPrimary}))};
["wheel","mousedown","dblclick","pointerdown"].forEach(t=>o2.addEventListener(t,fw,{passive:!1})),o2.addEventListener("click",k,!0),zt=()=>{window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),window.removeEventListener("keydown",w),e.removeEventListener("click",k,!0),cancelAnimationFrame(r),cancelAnimationFrame(wR),clearTimeout(kTm),kMo.disconnect()}}
let Ft=e.querySelector("#zi"),Bt=e.querySelector("#zo");
Ft&&(Ft.onclick=()=>GL?gZoom(1.8):q.transition().duration(260*!f).ease(Ao).call(Dt.scaleBy,1.8)),Bt&&(Bt.onclick=()=>GL?gZoom(1/1.8):q.transition().duration(260*!f).ease(Ao).call(Dt.scaleBy,1/1.8));
let Kt=(i=x.map(e=>e._xy[0]),s=x.map(e=>e._xy[1]),o=Math.min(...i),l=Math.max(...i),u=Math.min(...s),(d=Math.max(1,Math.min(1.6,.62*y/Math.max(1,(c=Math.max(...s))-u))))<9?(b<640?phoneHome():Fh):Fh.translate(b/2,y/2+10).scale(d).translate(-(o+l)/2-.06*(l-o),-(u+c)/2)),Gt=e=>.04>Math.abs(e.k-Kt.k)&&30>Math.abs(e.x-Kt.x)&&30>Math.abs(e.y-Kt.y);
/* GL: the first view shows every language area, on every screen; what appears at which scale is unchanged */
GL&&(Kt=gHome(),gOne=Math.min(1,gFit||Kt.k));
function phoneHome(){let ys=x.filter(e=>e._xy[0]>0&&e._xy[0]<b).map(e=>e._xy[1]),u=Math.min(...ys),c=Math.max(...ys),top=64,free=y-top-12,k=Math.max(1,Math.min(1.15,.8*free/Math.max(1,c-u)));
return Fh.translate(b/2,top+free/2).scale(k).translate(-b/2,-(u+c)/2)}
function Ut(e){GL?kGo(Kt,e||620):q.transition().duration(f?0:e||620).ease(Po).call(Dt.transform,Kt)}
function Ht(e,t){let n=U(e),r=(n[0]+n[2])/2,a=(n[1]+n[3])/2,c=e.info&&e.info.nest?24:10,i=Math.max(n[2]-n[0],b/c),s=Math.max(n[3]-n[1],y/c);
Wt(r-.75*i,a-.75*s,r+.75*i,a+.75*s,t)}
function Wt(e,t,n,r,a,i){let s=ge(),o=b-s,l=y-52-w(),u=Math.max(1,Math.min(i||40,.86/Math.max((n-e)/o,(r-t)/l,1e-6)));
let TT=Fh.translate(s+o/2,52+l/2).scale(u).translate(-(e+n)/2,-(t+r)/2);
GL?kGo(TT,a):q.transition().duration(f?0:a).ease(Po).call(Dt.transform,TT)}
function $t(e){nt=e,kn=null,q.classed("hsel",!!e&&!p).attr("data-sf",e&&!p&&e.family||null);
let t=kV().k;
Ve.selectAll("g.pin").classed("sel",t=>t===e).classed("fade",t=>!!e&&!p&&t!==e),ot(t),e&&Ve.selectAll("g.pin").filter(t=>t===e).raise(),$e.selectAll("circle").data(e?[e]:[],e=>e.id).join("circle").attr("class",e=>"ring "+e.family).attr("cx",e=>e._xy[0]).attr("cy",e=>e._xy[1]).attr("r",11.76/Math.pow(t,.96)),R.selectAll("path.terr").remove(),e&&!GL&&(T(e)?O.append("path").attr("class","terr "+e.family).attr("fill-rule","evenodd").attr("d",da[e.lang].d).each(function(){let c=Vf(e);
c&&(this.style.fill="color-mix(in srgb,"+c+" 22%,transparent)",this.style.stroke=c)}):R.append("path").attr("class","terr "+e.family).attr("fill-rule","evenodd").attr("d",G(e)).each(function(){let c=Vf(e);
c&&(this.style.fill="color-mix(in srgb,"+c+" 22%,transparent)",this.style.stroke=c)})),e&&T(e)&&da[e.lang].x&&O.append("path").attr("class","terr dia2 "+e.family).attr("fill-rule","evenodd").attr("d",da[e.lang].x),kn=e&&!p?nearMap(e):null,lt(e),Fe(e),bt(),Ae()}
Rt&&(Rt.onclick=()=>Te()),window.__kMapHome=Te;
let Vt=-1,Zt=null;
function Qt(e,t){let n=1e9;
g.forEach(t=>{if(t!==e){let r=Math.hypot(t._xy[0]-e._xy[0],t._xy[1]-e._xy[1]);
r<n&&(n=r)}});
let r=Math.min(40,Math.max(5,30/Math.max(n,.3))),a=52+(y-52-w())/2;
let TT=Fh.translate(b/2,a).scale(r).translate(-e._xy[0],-e._xy[1]);
GL?kGo(TT,t):q.transition().duration(f?0:t).ease(Po).call(Dt.transform,TT)}
function Yt(e,t){(e!==Vt||t)&&(Vt=e,k.forEach((t,n)=>{t.classList.toggle("on",n===e),t.setAttribute("aria-selected",n===e)}),$t(g[e]),t&&Qt(g[e],560))}
function Jt(e,t){let n=k[e];
v.scrollTo({left:n.offsetLeft-(v.clientWidth-n.offsetWidth)/2,behavior:t&&!f?"smooth":"auto"})}
let Xt=()=>{clearTimeout(Zt),Zt=setTimeout(()=>{let e,t,n,r=(e=v.scrollLeft+v.clientWidth/2,t=0,n=1e9,k.forEach((r,a)=>{let i=Math.abs(r.offsetLeft+r.offsetWidth/2-e);
i<n&&(n=i,t=a)}),t);
r!==Vt&&Yt(r,!0)},110)};
function en(e){if(p){if(!p.has(e.id))return;
let t=g.indexOf(e);
if(t<0)return;
return void(t===Vt?Qt(e,520):Jt(t,!0))}
nn(e),Ht(e,1e3)}
v&&g.length&&(v.addEventListener("scroll",Xt,{passive:!0}),v.onclick=e=>{let t=e.target.closest(".wcd");
if(!t)return;
let n=+t.dataset.i;
n===Vt?Ja(g[n].id):Jt(n,!0)});
let tn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
function gw(){t.querySelectorAll("button[data-go]").forEach(e=>{let n=fa[e.dataset.go],r=!(n&&n.entries&&n.entries.length),a=e.parentNode;
e.hidden=r,a.classList.contains("acts")&&(a.hidden=r&&!a.querySelector("button:not([data-go])"))}),window.__lexReady||window.addEventListener("etimo:lex",gw,{once:!0})}
function nn(e){$t(e),Q2.selectAll("text.plabel").classed("fade",t=>t!==e);
let n=e.info,r=n.sp;
t.innerHTML='<button type="button" class="ib close" id="cx" aria-label="×">'+tn+'</button><div class="mhd"><span class="pill"><span class="dot '+e.family+'"></span>'+ei(Ca(e.family))+"</span><h3>"+ei(Na(e))+(n.an&&n.an!==Na(e)?'<span class="man">'+ei(n.an)+"</span>":"")+'</h3></div><div class="mst"><div><small>'+ei(ye("rgn"))+"</small><b>"+ei(Ma(e))+"</b></div>"+(r?"<div><small>"+ei(ye("spk"))+"</small><b>"+ei(za(r.v))+"</b></div>":"")+(n.lv?"<div><small>"+ei(ye("st"))+"</small><b>"+ei(Aa(n.lv))+"</b></div>":"")+'</div><div class="rgl" id="rgl" hidden></div><div class="acts"><button type="button" class="btn mmore" aria-expanded="false">'+ei(ye("more"))+'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg></button><button type="button" class="btn pri" data-go="'+e.id+'">'+ei(h.openWords)+'</button></div><div class="mx" hidden>'+(Pf(e)?'<p class="mlin">'+ei(Pf(e))+"</p>":"")+(me()?"":panelSecs(e,nearFam(e)))+"</div>",t.classList.toggle("msheet",!me()),t.classList.remove("mopen"),t.querySelector(".mmore").onclick=function(){let o=t.classList.toggle("mopen");
this.setAttribute("aria-expanded",o),t.querySelector(".mx").hidden=!o,o||(t.scrollTop=0)},gw(),t.hidden=!1,t.querySelector("#cx").onclick=()=>{t.hidden=!0,Q2.selectAll("text.plabel").classed("fade",!1),$t(null),Ut(800)},Ee(e)}
t.onclick=e=>{let n=e.target,r=n.closest("[data-sel]"),a=n.closest("[data-pl]");
if(a)return void function(e){let n=we[e];
if(!n)return;
t.querySelectorAll(".ppl").forEach((t,n)=>t.classList.toggle("on",n===e));
let r=new Set((n._at||[]).map(e=>e.id)),a=t.querySelector(".pwbox");
a&&xe&&(a.innerHTML=Se(xe,je,r));
let i=j([n[1],n[2]]);
if(i){let e=b/34;
Wt(i[0]-e,i[1]-e,i[0]+e,i[1]+e,800,60)}}(+a.dataset.pl);
/* region card: a tap on its wheel (a slice or a name beside it) names the language there (kRgTip); a language in its list opens
   the Languages wheel with that language chosen. Other cards: the language's card, as before. */
if(r)return void(r.closest(".rgwh")?kRgTip(r,e):t.querySelector(".rgh")?(Ep=r.dataset.sel,Ja("languages")):kt&&kt.select(r.dataset.sel));
let i=n.closest("[data-ci]"),s=n.closest("[data-rg]");
if(s)return void function(e){let t=nt&&ne[nt.lang];
if(!t)return;
let n=("h"===e[0]?t.home:t.dia)[+e.slice(1)];
n&&(J(),Le(n.f),Ke(n.f,900))}(s.dataset.rg);
if(n.closest("[data-more]"))return void(nt&&ne[nt.lang]&&Re(nt,ne[nt.lang],!0));
if(i){t.hidden=!0;
let e=+i.dataset.ci;
return void(e>=0&&(e===Vt?Qt(g[e],700):Jt(e,!0)))}
let o=n.closest("[data-go]");
o&&(t.hidden=!0,Ja(o.dataset.go))};
let rn=a.view;
a.fam&&(rt=a.fam,q.classed("fsel",!0).attr("data-f",a.fam));
let an=rn?rn.sel?fa["l-"+rn.sel]:null:n?fa["l-"+n]:null;
if(GL&&kGo(Kt,0),bt(),rn){an&&nn(an);
let e=j(rn.c),t=Math.max(GL?.8*gOne:1,Math.min(150,rn.zs/j.scale())),n=y-52-w();
{let TT=Fh.translate(b/2,t>1.01?52+n/2:y/2).scale(t).translate(-e[0],-e[1]);
GL?kGo(TT,0):q.call(Dt.transform,TT)}}else if(an)nn(an),setTimeout(()=>Ht(an,760),60*!f);
else if(g.length){if(g.length){let e=g.map(e=>e._xy[0]),t=g.map(e=>e._xy[1]);
Yt(0,!1),setTimeout(()=>Wt(Math.min(...e)-12,Math.min(...t)-12,Math.max(...e)+12,Math.max(...t)+12,700),60*!f)}}else if(GL);
else if(f)q.call(Dt.transform,Kt);
else{let e=(b/2-Kt.x)/Kt.k,t=(y/2-Kt.y)/Kt.k,n=Math.max(.6,.58*Kt.k);
q.call(Dt.transform,Fh.translate(b/2-e*n,y/2-t*n).scale(n)),q.transition().delay(250).duration(1600).ease(Po).call(Dt.transform,Kt)}
f||(Ve.selectAll("g.pin").each(function(e,t){this.style.setProperty("--pi",t%90)}),q.classed("kboot",!0),setTimeout(()=>q.classed("kboot",!1),3600));
GL&&gStart();
let sn={cauc:[38,39.5,50.5,45],dag:[45.2,40.8,48.6,43.7],north:[12,55,140,75]};
return Uf&&!p&&setTimeout(()=>{let e=Uf;
if(e&&q.node().isConnected&&kt&&(Uf=null,kt.family(e.fam),e.sub)){let t=new Set(e.ids),n=1e9,r=1e9,a=-1e9,i=-1e9;
x.filter(e=>t.has(e.id)).forEach(e=>{let t=T(e)?U(e):[e._xy[0]-4,e._xy[1]-4,e._xy[0]+4,e._xy[1]+4];
n=Math.min(n,t[0]),r=Math.min(r,t[1]),a=Math.max(a,t[2]),i=Math.max(i,t[3])}),isFinite(n)&&Wt(n,r,a,i,1e3)}},420),kt=window.__kt={region(e){if("all"===e)Ut(560);
else{var t;
let n,r;
n=j([(t=sn[e])[0],t[3]]),r=j([t[2],t[1]]),Wt(Math.min(n[0],r[0]),Math.min(n[1],r[1]),Math.max(n[0],r[0]),Math.max(n[1],r[1]),560)}},select(e){let t=x.find(t=>t.id===e);
if(t){if(p){let e=g.indexOf(t);
return void(e>=0&&(e===Vt?Qt(t,520):Jt(e,!0)))}
J(),Le(null),rt&&(rt=null,pt=null,q.classed("fsel",!1).attr("data-f",null)),nn(t),Ht(t,1e3)}},home(){Te()},view(){/* an engine map whose engine never started has no view worth keeping: the old map then opens at its own first view */
if(GL&&!GM)return null;
let e=kV(),t=y-52-w(),n=e.k>1.01?52+t/2:y/2;
return{c:j.invert([e.invertX(b/2),e.invertY(n)]),zs:e.k*j.scale(),sel:nt&&!p?nt.id.replace(/^l-/,""):null}},family(e){if(e&&Ie(),rt=e,q.classed("fsel",!!e).attr("data-f",e||null),pt=null,!e)return bt(),Ut(800),void Ae();
let t=1e9,n=1e9,r=-1e9,a=-1e9;
x.filter(t=>t.family===e).forEach(e=>{let i=T(e)?U(e):[e._xy[0]-4,e._xy[1]-4,e._xy[0]+4,e._xy[1]+4];
t=Math.min(t,i[0]),n=Math.min(n,i[1]),r=Math.max(r,i[2]),a=Math.max(a,i[3])}),bt(),Wt(t,n,r,a,1e3),Ae()},destroy(){zt(),clearTimeout(Pt),window.__kMapHome=null,t.hidden=!0,t.onclick=null,v&&v.removeEventListener("scroll",Xt),q.interrupt(),q.remove(),Q2.remove()}}}(i.current,n,e,t,{view:l.current,fam:w.current,fail:()=>k(e=>e+1)}),()=>{o.current&&(l.current=o.current.view(),o.current.destroy()),o.current=null}},[e,t,n,r,y]),
(0,m.useEffect)(()=>{l.current=null},[e,t]),
(0,m.useEffect)(()=>{let e=i.current?i.current.clientWidth:0,t=i.current?i.current.clientHeight:0,n=null,r=new ResizeObserver(()=>{clearTimeout(n),n=setTimeout(()=>{let n=i.current;
n&&(Math.abs(n.clientWidth-e)>24||Math.abs(n.clientHeight-t)>24)&&(e=n.clientWidth,t=n.clientHeight,k(e=>e+1))},140)}),__mo=new MutationObserver(()=>k(e=>e+1));
return i.current&&r.observe(i.current),__mo.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>{r.disconnect(),__mo.disconnect(),clearTimeout(n)}},[]),
(0,m.useEffect)(()=>{let e=()=>{document.fullscreenElement||b(!1)},t=e=>{"Escape"===e.key&&v&&!document.fullscreenElement&&b(!1)};
return document.addEventListener("fullscreenchange",e),window.addEventListener("keydown",t),()=>{document.removeEventListener("fullscreenchange",e),window.removeEventListener("keydown",t)}},[v]),
(0,m.useLayoutEffect)(()=>{document.documentElement.classList.toggle("mapfs",v)},[v]),
(0,m.useEffect)(()=>()=>document.documentElement.classList.remove("mapfs"),[]);
a.mapAll,
a.mapCauc,
a.mapDag,
a.mapNorth;
return(0,f.jsx)("div",{className:"view exv2"+(v?" isfs":""),children:(0,f.jsxs)("div",{className:"mapbox",ref:i,children:[t?null:(0,f.jsx)(_p,{api:o,ui:n}),(0,f.jsxs)("div",{className:"zoom",role:"group","aria-label":Ea({sq:"Zmadhimi",sr:"Zumiranje"}[ya()]||"Zoom"),children:[(0,f.jsx)("button",{type:"button",id:"zi","aria-label":Ea({sq:"Zmadho",sr:"Uvećaj"}[ya()]||"Zoom in"),children:(0,f.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})})}),(0,f.jsx)("button",{type:"button",id:"zo","aria-label":Ea({sq:"Zvogëlo",sr:"Umanji"}[ya()]||"Zoom out"),children:(0,f.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M4.5 12h15"})})})]}),t?(0,f.jsx)("div",{className:"wcar",id:"wc",role:"listbox","aria-label":La(t)}):null,(0,f.jsx)("div",{className:"card mcard",ref:s,hidden:!0,"aria-live":"polite"})]})})}
let Fp=[1,1.1,1.2,1.3];
function Bp(){let e=1,
t=!1,
n=!0;
try{e=+(localStorage.getItem("khl-ts")||1),
t="1"===localStorage.getItem("khl-hc"),
n="0"!==localStorage.getItem("khl-mo")}catch{}
return 0>Fp.indexOf(e)&&(e=1),
{ts:e,
hc:t,
mo:n}}
function Kp(){let e=Bp(),
t=document.documentElement;
return t.style.setProperty("--ts",String(e.ts)),
e.hc?t.setAttribute("data-contrast","high"):t.removeAttribute("data-contrast"),
e.mo?t.removeAttribute("data-motion"):t.setAttribute("data-motion","off"),
e}
function Gp(){let e=document.documentElement.getAttribute("data-theme");
return e?"dark"===e:!(!window.matchMedia||!matchMedia("(prefers-color-scheme: dark)").matches)}
try{let e=localStorage.getItem("khl-theme");
("dark"===e||"light"===e)&&document.documentElement.setAttribute("data-theme",e)}catch{}
/* The settings sheet (language, text size, contrast, night mode, motion). Phone (<64rem): it comes down from the top, where
   the language button is, and a swipe up closes it (from its grab bar, or anywhere once it is scrolled to its end); the
   bar at its lower edge shows that. Desktop (>=64rem): from the bottom, as before. Styles: v71 in src/styles/v65.css. */
function kSheet(u){if(window.matchMedia&&matchMedia("(min-width: 64rem)").matches)return{side:"bottom",className:"sheet-x"};
let S=null;return{side:"top",className:"sheet-x sheet-top",
onTouchStart:e=>{let el=e.currentTarget,p=e.touches[0];S=1===e.touches.length?{y:p.clientY,t:Date.now(),dy:0,ok:!!e.target.closest(".sgrab")||el.scrollTop+el.clientHeight>=el.scrollHeight-2}:null},
onTouchMove:e=>{if(!S||!S.ok)return;let el=e.currentTarget,dy=e.touches[0].clientY-S.y;S.dy=dy<0?dy:0,el.style.transition="none",el.style.transform=S.dy?"translateY("+S.dy+"px)":""},
onTouchEnd:e=>{let el=e.currentTarget,s0=S;if(S=null,!s0||!s0.ok)return;el.style.transition="";let v=-s0.dy/Math.max(1,Date.now()-s0.t);s0.dy<-72||v>.45&&s0.dy<-24?u(!1):el.style.transform=""},
onTouchCancel:e=>{S=null,e.currentTarget.style.transition="",e.currentTarget.style.transform=""}}}
/* True when the elements already stand last in their parents, in this order: what appending them one by one would leave.
   The language names are put in their drawing order that way each time the map rests, and the order hardly ever changes;
   taking a name out of the page and putting it back makes the browser restyle the whole map and page (the style sheet's
   :has() rules), about 6,000 elements, so it is done only when the order really is different. */
function kOrd(l,P){let m=new Map;l.forEach(e=>{let p=P(e);m.has(p)?m.get(p).push(e):m.set(p,[e])});
for(const[p,a]of m){let c=p.lastElementChild;for(let i=a.length-1;i>=0;i--,c=c&&c.previousElementSibling)if(c!==a[i])return!1}return!0}
/* Loading order on a phone. The map and the Languages wheel do not use the lexicon (about 8 MB of words) or the region
   shapes (today.json): there they wait until the map engine has drawn its first picture ("etimo:mapready" from map-gl.js),
   so that picture gets the bandwidth and the processor first. Every other screen fetches the lexicon at once.
   kAfterMap: resolves when the map has drawn (at once if it already has), or after ms (8 s) whatever happens. */
function kAfterMap(ms){return new Promise(res=>{if(window.__kMapReady)return res();
let go=()=>{clearTimeout(t),removeEventListener("etimo:mapready",go),res()},t=setTimeout(go,ms||8e3);
addEventListener("etimo:mapready",go)})}
function kLexWhen(){let late=()=>/^(map|map-.+|languages|tree)$/.test(location.hash.replace("#",""));
if(!late())return Promise.resolve();
let wheel=/^(languages|tree)$/.test(location.hash.replace("#",""));
return new Promise(res=>{let go=()=>{removeEventListener("hashchange",chk),res()},chk=()=>{late()||go()};
addEventListener("hashchange",chk),wheel?setTimeout(go,1500):kAfterMap().then(go)})}
/* The home page's starter (a file of home_starters() in scripts/build-page.py, chosen in the page's first lines): the same
   lists as kLexBuild makes, from its few words, each at its place in its language's list. The home page shows from these
   (window.__lexStart) and keeps what it shows; kLexBuild then puts the full lists in place. */
function kLexStart(S){let by={};ua.forEach(e=>{by[e.lang]=e});
for(const R of S){let e=by[R.lang];if(!e)continue;
for(const k in R.e){let t=R.e[k],n,r;e.entries[+k]=t;
t._l=e.lang,n=t.meaning,r=[],n.split(", ").forEach(e=>{let t=sa[e]||e;
ia[t]&&0>r.indexOf(t)&&r.push(t)}),t.cs=r,t.cats={},t.cs.forEach(n=>{t.cats[ia[n]]=1,ha[n].push({L:e,e:t})});}}}
/* The word lists from the lexicon, built in slices of about 8 ms with the main thread given back in between, so a tap or a
   map move never waits for them. The result is the one a single long run gives: the same lists, in the same order (each
   language's words sorted on their own, then the sorted languages merged; ties keep their order, as a stable sort does).
   Nothing is visible before the end: the lists are put in place in one step. */
async function kLexBuild(L){let T=()=>performance.now(),t0=T(),g,
gap=()=>T()-t0<8?null:(window.scheduler&&scheduler.yield?scheduler.yield():new Promise(r=>setTimeout(r,0))).then(()=>{t0=T()}),
by={},HA={},EN=[],cmp=(e,t)=>e.k.localeCompare(t.k,"en")||e.L.lang.localeCompare(t.L.lang);
ua.forEach(e=>{by[e.lang]=e}),Object.keys(ha).forEach(k=>{HA[k]=[]});
{let ha=HA;
for(const R of L){let e=by[R.lang];if(!e)continue;EN.push([e,R.entries]);
for(let i=0;i<R.entries.length;i++){let t=R.entries[i],n,r;
t._l=e.lang,n=t.meaning,r=[],n.split(", ").forEach(e=>{let t=sa[e]||e;
ia[t]&&0>r.indexOf(t)&&r.push(t)}),t.cs=r,t.cats={},t.cs.forEach(n=>{t.cats[ia[n]]=1,ha[n].push({L:e,e:t})});
if(!(i&255)&&(g=gap()))await g}}}
let lists=[],at=new Map(EN);
for(const e of ua){let es=at.has(e)?at.get(e):e.entries,a=[];
for(let i=0;i<es.length;i++){let t=es[i];a.push({L:e,e:t,k:(t.lat||t.ipa||t.word).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/æ/g,"ae").replace(/[øœ]/g,"o").replace(/ı/g,"i").replace(/[łɬ]/g,"l").replace(/[đð]/g,"d").replace(/ħ/g,"h").replace(/ß/g,"ss").replace(/ŋ/g,"n").replace(/[ʕʼ'’ʻ`]/g,"").replace(/^[^a-zЀ-ӿͰ-ϿႠ-ჿ]+/,"")});if(!(i&255)&&(g=gap()))await g}
a.sort(cmp),lists.push(a);if(g=gap())await g}
let out=[],h=[],pos=lists.map(()=>0),less=(a,b)=>{let c=cmp(lists[a][pos[a]],lists[b][pos[b]]);return c<0||0===c&&a<b},
up=i=>{for(;i>0;){let q=i-1>>1;if(!less(h[i],h[q]))break;[h[i],h[q]]=[h[q],h[i]],i=q}},
down=i=>{for(;;){let l=2*i+1,r=l+1,m=i;l<h.length&&less(h[l],h[m])&&(m=l),r<h.length&&less(h[r],h[m])&&(m=r);if(m===i)break;[h[i],h[m]]=[h[m],h[i]],i=m}};
lists.forEach((a,i)=>{a.length&&(h.push(i),up(h.length-1))});
for(;h.length;){let i=h[0];out.push(lists[i][pos[i]++]),pos[i]<lists[i].length?down(0):(h[0]=h[h.length-1],h.pop(),h.length&&down(0));if(!(511&out.length)&&(g=gap()))await g}
EN.forEach(([e,es])=>{e.entries=es}),Object.keys(HA).forEach(k=>{let a=ha[k]||(ha[k]=[]);a.length=0;for(const x of HA[k])a.push(x)}),pa=out}
/* Region and country shapes for a tap (kPl; names kHit*, as the map code has its own kIn): every polygon's rings as flat lists of lon/lat, made continuous over the 180°
   line, with their box. The data's points lie close together, so a flat test on them finds the same place as d3's test on
   the sphere, at a small part of the cost. A polygon around a pole keeps d3's test. */
function kHitRings(f){if(f._k)return f._k;let g=f.geometry,P=g&&("Polygon"===g.type?[g.coordinates]:"MultiPolygon"===g.type?g.coordinates:null);
if(!P)return f._k=null;let out=[];
for(const poly of P){let rs=[],w=1/0,e=-1/0,s=1/0,n=-1/0,pole=!1,ref=null;
poly.forEach((ring,ri)=>{let a=new Float64Array(2*ring.length),x=0,px=null;
ring.forEach((c,i)=>{x=c[0];if(null!==px)for(;x-px>180;)x-=360;else for(;null!==ref&&x-ref>180;)x-=360;
if(null!==px)for(;px-x>180;)x+=360;else for(;null!==ref&&ref-x>=180;)x+=360;
a[2*i]=x,a[2*i+1]=c[1],px=x});
ring.length>1&&Math.abs(a[a.length-2]-a[0])>1e-6&&(pole=!0);
if(!ri){ref=a[0];for(let i=0;i<a.length;i+=2)w=Math.min(w,a[i]),e=Math.max(e,a[i]),s=Math.min(s,a[i+1]),n=Math.max(n,a[i+1])}
rs.push(a)});
let k=Math.floor((w+180)/360)*360;k&&rs.forEach(a=>{for(let i=0;i<a.length;i+=2)a[i]-=k});
out.push({rs,w:w-k,e:e-k,s,n,pole,poly})}
return f._k=out}
function kHitIn(f,pt){let P=kHitRings(f);if(!P)return Wu(f,pt);
for(const p of P){if(p.pole){if(Wu({type:"Polygon",coordinates:p.poly},pt))return!0;continue}
let y=pt[1];if(y<p.s||y>p.n)continue;let x=pt[0];for(;x<p.w;)x+=360;for(;x>=p.w+360;)x-=360;if(x>p.e)continue;
let c=!1;for(const r of p.rs)for(let i=0,j=r.length-2;i<r.length;j=i,i+=2){let yi=r[i+1],yj=r[j+1];
yi>y!=yj>y&&x<(r[j]-r[i])*(y-yi)/(yj-yi)+r[i]&&(c=!c)}
if(c)return!0}return!1}
/* The box of a shape as [[west, south], [east, north]], like d3 geoBounds; over the 180° line west is larger than east. */
function kHitBox(f){let P=kHitRings(f);if(!P)return pu(f);if(P.some(p=>p.pole))return[[-180,Math.min(...P.map(p=>p.s))],[180,90]];
let iv=P.map(p=>[p.w,p.e]).sort((a,b)=>a[0]-b[0]),m=[];
for(const v of iv)m.length&&v[0]<=m[m.length-1][1]?m[m.length-1][1]=Math.max(m[m.length-1][1],v[1]):m.push([v[0],v[1]]);
let s=Math.min(...P.map(p=>p.s)),n=Math.max(...P.map(p=>p.n)),gi=-1,gap=m[0][0]+360-m[m.length-1][1];
for(let i=1;i<m.length;i++){let d=m[i][0]-m[i-1][1];d>gap&&(gap=d,gi=i)}
if(gap<=0)return[[-180,s],[180,n]];
let W=gi<0?m[0][0]:m[gi][0],E=gi<0?m[m.length-1][1]:m[gi-1][1],nm=v=>((v+180)%360+360)%360-180;
return[[nm(W),s],[E>180?nm(E):E,n]]}
let kHN=0;
function Up(){var e,
t;
let[n,r]=(0,m.useState)(location.hash.replace("#","")),
[a,i]=(0,m.useState)(ga.ui),
[s,o]=(0,m.useState)(Gp()?"dark":"light"),
[l,u]=(0,m.useState)(!1),
[c,d]=(0,m.useState)(Bp()),
[h,p]=(0,m.useState)(0),
{done:g,
copy:v}=pi();
(0,m.useEffect)(()=>{let e=()=>{kHN++,r(location.hash.replace("#","")),p(e=>e+1),window.scrollTo(0,0)};
return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),
(0,m.useEffect)(()=>{let e=()=>p(e=>e+1);
return window.addEventListener("etimo:lex",e),window.addEventListener("etimo:lexstart",e),()=>{window.removeEventListener("etimo:lex",e),window.removeEventListener("etimo:lexstart",e)}},[]),
(0,m.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>o(Gp()?"dark":"light");
return e.addEventListener?.("change",t),()=>e.removeEventListener?.("change",t)},[]);
let b=function(e){if(fa[e])return{v:"lang",
L:fa[e]};
let FDm=/^d(\d+)-(.+)$/.exec(e);
if(FDm&&fa["l-"+FDm[2]])return{v:"lang",
L:fa["l-"+FDm[2]],
d:+FDm[1]};
let t=/^w(\d+)-(.+)$/.exec(e);
if(t){let e=fa["l-"+t[2]],
n=e&&e.entries[+t[1]];
if(n)return{v:"word",
L:e,
e:n}}
if(e.startsWith("m-")){let t=ma(e.slice(2));
if(t)return{v:"concept",
c:t}}
if(e.startsWith("mm-")){let t=ma(e.slice(3));
if(t)return{v:"map",
conc:t}}
return e.startsWith("c-")&&aa.indexOf(e.slice(2))>-1?{v:"cat",
cat:e.slice(2)}:"languages"===e||"tree"===e?{v:"langs"}:"map"===e?{v:"map"}:e.startsWith("map-")?{v:"map",
sel:e.slice(4)}:"az"===e?{v:"az"}:"search"===e?{v:"search"}:{v:"home"}}(n),
y=ja();
function k(e){ga.ui=e;
try{localStorage.setItem("khl-ui",e)}catch{}
i(e)}
function w(e){document.documentElement.setAttribute("data-theme",e?"dark":"light");
try{localStorage.setItem("khl-theme",e?"dark":"light")}catch{}
o(e?"dark":"light")}
function x(e,t){try{localStorage.setItem(e,t)}catch{}
d(Kp())}(0,m.useEffect)(()=>{document.documentElement.lang=Ia()},[a]);
"home"===b.v||"cat"===b.v?y.title:"langs"===b.v?y.nav.lang:"map"===b.v?b.conc?La(b.conc):y.explore:"az"===b.v||"search"===b.v&&y.searchT;
let j="cat"===b.v||"concept"===b.v||"lang"===b.v||"word"===b.v||"langs"===b.v||"map"===b.v&&(b.sel||b.conc),
S="concept"===b.v?(e=b.c,()=>ha[e].slice().sort((e,t)=>Na(e.L).localeCompare(Na(t.L),Ia())).map(e=>Oa(e.L,e.e)).join("\n\n")):"lang"===b.v?(t=b.L,()=>t.entries.filter(e=>"all"===mi.cat||e.cats[mi.cat]).map(e=>Oa(t,e)).join("\n\n")):null,
_="langs"===b.v||"lang"===b.v?"lang":"map"!==b.v||b.conc?"search"===b.v?"search":"words":"map",
q="sr"===a||"sc"===a,
E=null;
if(!window.__lexReady&&!(window.__lexStart&&"home"===b.v)&&"map"!==b.v&&"langs"!==b.v)E=(0,f.jsx)("div",{className:"wrap",children:(0,f.jsx)("p",{className:"boot",children:y.loading})});
else if("home"===b.v)E=(0,f.jsx)(fp,{ui:a},"home"+kHN);
else if("cat"===b.v)E=(0,f.jsx)(gp,{cat:b.cat});
else{let e="word"===b.v?(0,f.jsx)(xp,{L:b.L,e:b.e},n):"concept"===b.v?(0,f.jsx)(yp,{c:b.c},b.c):"lang"===b.v?(0,f.jsx)(kp,{L:b.L,d:b.d},b.L.id+(null!=b.d?"d"+b.d:"")):"langs"===b.v?(0,f.jsx)(Pp,{ui:a,theme:s}):"search"===b.v?(0,f.jsx)(Jh,{},"s"+h):"map"===b.v?(0,f.jsx)(Dp,{selId:b.sel||null,conc:b.conc||null,ui:a,theme:s},(b.sel||"")+(b.conc||"")):(0,f.jsx)(wp,{});
E=(0,f.jsx)("div",{className:"wrap",children:(0,f.jsx)("main",{id:"app",children:e},n+a)})}
/* the theme button (5-full-dictionary.js) moves right when the bar shows a button on its left outside the Home tab
   (style sheet: body.kbk .fdtheme). A class on body changes only that button; the :has() rule it replaces made the browser
   restyle the whole page, map included, after any change on the page. */
(0,m.useEffect)(()=>{document.body.classList.toggle("kbk","words"!==_&&("home"===b.v||!!j))});
return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"barw",children:(0,f.jsxs)("div",{className:"bar",children:[(0,f.jsxs)("div",{className:"bl",children:["home"===b.v?(0,f.jsx)("button",{type:"button",className:"ib",key:"th","aria-label":y.night,onClick:()=>w("dark"!==s),children:(0,f.jsx)(si,{n:"dark"===s?"sun":"moon"})}):null,j?(0,f.jsx)("button",{type:"button",className:"ib","aria-label":y.back,onClick:()=>{h>1&&history.length>1?history.back():Ja("lang"===b.v||b.sel?"languages":b.conc?"m-"+oa(b.conc):"words")},children:(0,f.jsx)(si,{n:"back"})}):null]}),(0,f.jsx)("h1",{children:(0,f.jsx)(Op,{})}),(0,f.jsxs)("div",{className:"br",children:[S?(0,f.jsxs)("button",{type:"button",className:"ib cpb",onClick:()=>v(S()),children:[(0,f.jsx)(si,{n:"copy"}),(0,f.jsx)("span",{children:g?y.copied:y.copyList})]}):null]})]})}),E,(0,f.jsx)("nav",{className:"tabbar","aria-label":"Main",children:(0,f.jsx)("div",{className:"in",children:[["search","book",y.searchT],["map","map",y.nav.map],["words","words",y.nav.home],["lang","wheel",y.nav.lang],["ui","globe",{en:"English",sq:"Shqip",sr:"Srpski",sc:"Српски"}[a]]].map(e=>(0,f.jsxs)("button",{type:"button","aria-current":_===e[0]?"page":void 0,"aria-haspopup":"ui"===e[0]?"dialog":void 0,"aria-label":"ui"===e[0]?y.uiLang+": "+e[2]:void 0,onClick:()=>function(e){if("ui"!==e)return"search"===e?(mi.sq="",void("search"===b.v?(p(e=>e+1),window.scrollTo(0,0)):Ja("search"))):"words"===e?(mi.q="",mi.n=120,void("home"===b.v?(kHN++,p(e=>e+1),window.scrollTo(0,0)):Ja("words"))):void("map"===e&&"map"===b.v&&window.__kMapHome?window.__kMapHome():Ja({map:"map",lang:"languages"}[e]));
u(!0)}(e[0]),children:[(0,f.jsx)(si,{n:e[1]}),(0,f.jsx)("span",{children:e[2]})]},e[0]))})}),(0,f.jsx)(an,{open:l,onOpenChange:u,children:(0,f.jsxs)(Hr,{...kSheet(u),children:[(0,f.jsx)("div",{className:"sgrab","aria-hidden":!0}),(0,f.jsx)(Wr,{className:"sr",children:y.langLabel}),(0,f.jsx)($r,{className:"sr",children:y.textSize}),(0,f.jsxs)("div",{className:"inner menu-in",children:[(0,f.jsx)("p",{className:"dh",children:y.langLabel}),[["en","English"],["sq","Shqip"]].map(e=>(0,f.jsx)("button",{type:"button",className:"opt",role:"menuitemradio","aria-checked":a===e[0],onClick:()=>{k(e[0]),u(!1)},children:e[1]},e[0])),(0,f.jsx)("button",{type:"button",className:"opt",role:"menuitemradio","aria-checked":q,onClick:()=>{q||(k("sc"),u(!1))},children:"Српски"}),q?(0,f.jsxs)("div",{className:"two",children:[(0,f.jsx)("button",{type:"button","aria-checked":"sc"===a,onClick:()=>k("sc"),children:"Ћирилица"}),(0,f.jsx)("button",{type:"button","aria-checked":"sr"===a,onClick:()=>k("sr"),children:"Latinica"})]}):null,(0,f.jsx)("p",{className:"dh",children:y.textSize}),(0,f.jsx)("div",{className:"four",children:Fp.map((e,t)=>(0,f.jsx)("button",{type:"button","aria-checked":c.ts===e,style:{fontSize:15+3*t},onClick:()=>x("khl-ts",String(e)),children:"A"},e))}),(0,f.jsx)("p",{className:"dh",children:y.contrast}),(0,f.jsxs)("div",{className:"two",children:[(0,f.jsx)("button",{type:"button","aria-checked":!c.hc,onClick:()=>x("khl-hc","0"),children:y.normal}),(0,f.jsx)("button",{type:"button","aria-checked":c.hc,onClick:()=>x("khl-hc","1"),children:y.high})]}),(0,f.jsx)("p",{className:"dh",children:y.night}),(0,f.jsxs)("div",{className:"two",children:[(0,f.jsx)("button",{type:"button","aria-checked":"dark"!==s,onClick:()=>w(!1),children:y.off}),(0,f.jsx)("button",{type:"button","aria-checked":"dark"===s,onClick:()=>w(!0),children:y.on})]}),(0,f.jsx)("p",{className:"dh",children:y.motion}),(0,f.jsxs)("div",{className:"two",children:[(0,f.jsx)("button",{type:"button","aria-checked":!c.mo,onClick:()=>x("khl-mo","0"),children:y.off}),(0,f.jsx)("button",{type:"button","aria-checked":c.mo,onClick:()=>x("khl-mo","1"),children:y.on})]})]})]})})]})}
Kp(),
function(){try{let e=document.createElement("button");
e.type="button",
e.className="ktop",
e.setAttribute("aria-label","Back to top"),
e.innerHTML='<svg class="kr0" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" class="ktr"/><circle cx="24" cy="24" r="22" class="ktp" pathLength="100"/></svg><span class="kti">'+ii.back+"</span>",
document.body.appendChild(e);
let t=!1,
n=0,
r=()=>{n=0;
let r=window.scrollY||0,
a=document.documentElement.scrollHeight-innerHeight,
i=r>380&&a>600;
i!==t&&(t=i,e.classList.toggle("on",i)),
e.style.setProperty("--p",a>0?Math.min(100,r/a*100).toFixed(1):"0")};
addEventListener("scroll",()=>{n||(n=requestAnimationFrame(r))},{passive:!0}),
addEventListener("resize",r),
e.onclick=()=>{window.scrollTo({top:0,behavior:Ya()?"auto":"smooth"})},
r()}catch{}}(),
function(){try{!function(){let e=0,
t=!0,
n=()=>{e=0;
let n=document.querySelector(".tabbar .in");
if(!n)return;
let r=n.querySelector(".ktab-ind");
r||(r=document.createElement("i"),r.className="ktab-ind",n.appendChild(r));
let a=n.querySelector('button[aria-current="page"]');
if(!a||!a.offsetWidth)return r.classList.remove("on"),
void(t=!0);
let i=matchMedia("(min-width: 64rem)").matches,
s=n.getBoundingClientRect(),
o=i?a.getBoundingClientRect():(a.querySelector(".icn")||a).getBoundingClientRect(),
l=i?o.width:56,
u=i?o.height:30,
c=o.left-s.left+o.width/2-l/2,
d=o.top-s.top+o.height/2-u/2;
t&&r.classList.add("nt"),
r.style.width=l.toFixed(1)+"px",
r.style.height=u.toFixed(1)+"px",
r.style.transform="translate("+c.toFixed(1)+"px,"+d.toFixed(1)+"px)",
r.classList.add("on"),
t&&(r.offsetWidth,r.classList.remove("nt"),t=!1)},
r=()=>{e||(e=requestAnimationFrame(n))};
new MutationObserver(r).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["aria-current"]}),
addEventListener("resize",r),
addEventListener("hashchange",()=>setTimeout(r,60)),
document.fonts&&document.fonts.ready.then(r),
setTimeout(r,400),
setTimeout(r,1500)}(),
Rf(),
document.addEventListener("click",e=>{e.target&&e.target.closest&&e.target.closest(".bar h1 .brand")&&matchMedia("(min-width: 64rem)").matches&&(mi.q="",mi.n=120,Ja("words"),setTimeout(()=>window.scrollTo({top:0,behavior:Ya()?"auto":"smooth"}),30))});
Cf.d.slice(1).split(" L").map(e=>e.split(",").map(Number));
let e=()=>{document.querySelectorAll(".spec-p").forEach(e=>{})},
t=0,
n=document.getElementById("root");
n&&new MutationObserver(()=>{t||(t=requestAnimationFrame(()=>{t=0,e()}))}).observe(n,{childList:!0,subtree:!0}),
addEventListener("resize",()=>document.querySelectorAll(".kmtn").forEach(e=>e.remove())||e())}catch(e){}}();
let Hp=document.getElementById("root");
Hp.innerHTML='<div class="wrap"><p class="boot">'+ja().loading+"</p></div>",
Promise.all([__ETIMO_H_LANGUAGES__,__ETIMO_H_WORLD__].map(e=>fetch(e).then(t=>{if(!t.ok)throw Error(e+" "+t.status);
return t.json()})).concat([fetch(__ETIMO_H_TERR__).then(e=>e.ok?e.json():{}).catch(()=>({}))])).then(([t,n,r])=>{ua=Object.keys(t).map(e=>({lang:e,place:t[e].pl,family:t[e].fam,gc:t[e].gc,entries:[]})),ca=n,Object.keys(ia).forEach(e=>{ha[e]=[]}),ua.forEach(e=>{e.id="l-"+oa(e.lang),e.info=t[e.lang]||{},fa[e.id]=e}),pa=[],da=r||{},window.__lexReady=!1,Hp.innerHTML="",(0,p.createRoot)(Hp).render((0,f.jsx)(Up,{})),
window.__kStart&&fetch(window.__kStart).then(r=>r.ok?r.json():null).then(S=>{S&&!window.__lexReady&&(kLexStart(S),window.__lexStart=!0,window.dispatchEvent(new Event("etimo:lexstart")))}).catch(()=>{}),kLexWhen().then(()=>{let u=__ETIMO_H_LEXICON__;
return fetch(u).then(t=>{if(!t.ok)throw Error(u+" "+t.status);
return t.json()})}).then(kLexBuild).then(()=>{window.__lexReady=!0,window.dispatchEvent(new Event("etimo:lex"))}).catch(e=>{console.error(e),Hp.querySelector(".boot")&&(Hp.querySelector(".boot").textContent=ja().loadErr)})}).catch(e=>{console.error(e),Hp.innerHTML='<div class="wrap"><p class="boot">'+ja().loadErr+"</p></div>"});
