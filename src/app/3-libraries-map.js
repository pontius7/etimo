m=d("aIIwE");
var gi={};
function vi(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}
function bi(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}
function yi(e){let t,
n,
r;
function a(e,r,a=0,i=e.length){if(a<i){if(0!==t(r,r))return i;
do{let t=a+i>>>1;
0>n(e[t],r)?a=t+1:i=t}while(a<i)}
return a}
return 2!==e.length?(t=vi,n=(t,n)=>vi(e(t),n),r=(t,n)=>e(t)-n):(t=e===vi||e===bi?e:ki,n=e,r=e),
{left:a,
center:function(e,t,n=0,i=e.length){let s=a(e,t,n,i-1);
return s>n&&r(e[s-1],t)>-r(e[s],t)?s-1:s},
right:function(e,r,a=0,i=e.length){if(a<i){if(0!==t(r,r))return i;
do{let t=a+i>>>1;
0>=n(e[t],r)?a=t+1:i=t}while(a<i)}
return a}}}
function ki(){return 0}
s(gi,"range",()=>Ni),
s(gi,"mean",()=>Ei),
s(gi,"Delaunay",()=>dl),
s(gi,"easeCubicOut",()=>Ao),
s(gi,"easeCubicInOut",()=>Po),
s(gi,"geoBounds",()=>pu),
s(gi,"geoConicConformal",()=>kd),
s(gi,"geoContains",()=>Wu),
s(gi,"geoPath",()=>sd),
s(gi,"hierarchy",()=>jd),
s(gi,"partition",()=>Cd),
s(gi,"interpolateRgb",()=>Ms),
s(gi,"polygonArea",()=>Pd),
s(gi,"polygonContains",()=>Id),
s(gi,"pie",()=>dh),
s(gi,"arc",()=>lh),
s(gi,"symbolCircle",()=>hh),
s(gi,"symbolSquare",()=>gh),
s(gi,"symbolDiamond",()=>mh),
s(gi,"symbolTriangle",()=>bh),
s(gi,"symbol",()=>yh),
s(gi,"zoomTransform",()=>Bh),
s(gi,"zoom",()=>Qh),
s(gi,"zoomIdentity",()=>Fh),
s(gi,"select",()=>ws),
s(gi,"pointer",()=>Ws);
let wi=yi(vi);
function xi(e){return function(t,n,r=n){if(!((n*=1)>=0))throw RangeError("invalid rx");
if(!((r*=1)>=0))throw RangeError("invalid ry");
let{data:a,
width:i,
height:s}=t;
if(!((i=Math.floor(i))>=0))throw RangeError("invalid width");
if(!((s=Math.floor(void 0!==s?s:a.length/i))>=0))throw RangeError("invalid height");
if(!i||!s||!n&&!r)return t;
let o=n&&e(n),
l=r&&e(r),
u=a.slice();
return o&&l?(ji(o,u,a,i,s),ji(o,a,u,i,s),ji(o,u,a,i,s),Si(l,a,u,i,s),Si(l,u,a,i,s),Si(l,a,u,i,s)):o?(ji(o,a,u,i,s),ji(o,u,a,i,s),ji(o,a,u,i,s)):l&&(Si(l,a,u,i,s),Si(l,u,a,i,s),Si(l,a,u,i,s)),
t}}
function ji(e,t,n,r,a){for(let i=0,s=r*a;i<s;)e(t,n,i,i+=r,1)}
function Si(e,t,n,r,a){for(let i=0,s=r*a;i<r;++i)e(t,n,i,i+s,r)}
function _i(e){let t=Math.floor(e);
if(t===e){var n;
let t;
return t=2*(n=e)+1,
(e,r,a,i,s)=>{if(!((i-=s)>=a))return;
let o=n*r[a],
l=s*n;
for(let e=a,t=a+l;e<t;e+=s)o+=r[Math.min(i,e)];
for(let n=a,u=i;n<=u;n+=s)o+=r[Math.min(i,n+l)],
e[n]=o/t,
o-=r[Math.max(a,n-l)]}}
let r=e-t,
a=2*e+1;
return(e,n,i,s,o)=>{if(!((s-=o)>=i))return;
let l=t*n[i],
u=o*t,
c=u+o;
for(let e=i,t=i+u;e<t;e+=o)l+=n[Math.min(s,e)];
for(let t=i,d=s;t<=d;t+=o)l+=n[Math.min(s,t+u)],
e[t]=(l+r*(n[Math.max(i,t-c)]+n[Math.min(s,t+c)]))/a,
l-=n[Math.max(i,t-u)]}}
wi.right,
wi.left,
yi(function(e){return null===e?NaN:+e}).center,
xi(_i),
xi(function(e){let t=_i(e);
return(e,n,r,a,i)=>{t(e,n,0+(r<<=2),0+(a<<=2),i<<=2),t(e,n,r+1,a+1,i),t(e,n,r+2,a+2,i),t(e,n,r+3,a+3,i)}});
class qi{constructor(){this._partials=new Float64Array(32),
this._n=0}
add(e){let t=this._partials,
n=0;
for(let r=0;r<this._n&&r<32;r++){let a=t[r],
i=e+a,
s=Math.abs(e)<Math.abs(a)?e-(i-a):a-(i-e);
s&&(t[n++]=s),
e=i}
return t[n]=e,
this._n=n+1,
this}
valueOf(){let e,
t,
n,
r=this._partials,
a=this._n,
i=0;
if(a>0){for(i=r[--a];a>0&&(i=(e=i)+(t=r[--a]),!(n=t-(i-e))););
a>0&&(n<0&&r[a-1]<0||n>0&&r[a-1]>0)&&(e=i+(t=2*n),t==e-i&&(i=e))}
return i}}
function Ei(e,t){let n=0,
r=0;
if(void 0===t)for(let t of e)null!=t&&(t*=1)>=t&&(++n,r+=t);
else{let a=-1;
for(let i of e)null!=(i=t(i,++a,e))&&(i*=1)>=i&&(++n,r+=i)}
if(n)return r/n}
function zi(e){return Array.from(function*(e){for(let t of e)yield*t}(e))}
function Ni(e,t,n){e*=1,
t*=1,
n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;
for(var r=-1,a=0|Math.max(0,Math.ceil((t-e)/n)),i=Array(a);++r<a;)i[r]=e+r*n;
return i}
Array.prototype.slice;
var Mi={value:()=>{}};
function Ci(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw Error("illegal type: "+e);
r[e]=[]}
return new Li(r)}
function Li(e){this._=e}
function Ti(e,t,n){for(var r=0,a=e.length;r<a;++r)if(e[r].name===t){e[r]=Mi,
e=e.slice(0,r).concat(e.slice(r+1));
break}
return null!=n&&e.push({name:t,value:n}),
e}
function Ai(){}
function Pi(e){return null==e?Ai:function(){return this.querySelector(e)}}
function Ii(){return[]}
function Ri(e){return null==e?Ii:function(){return this.querySelectorAll(e)}}
function Oi(e){return function(){return this.matches(e)}}
function Di(e){return function(t){return t.matches(e)}}
Li.prototype=Ci.prototype={constructor:Li,
on:function(e,t){var n,
r=this._,
a=(e+"").trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");
if(n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),e&&!r.hasOwnProperty(e))throw Error("unknown type: "+e);
return{type:e,name:t}}),
i=-1,
s=a.length;
if(!(arguments.length<2)){if(null!=t&&"function"!=typeof t)throw Error("invalid callback: "+t);
for(;++i<s;)if(n=(e=a[i]).type)r[n]=Ti(r[n],e.name,t);
else if(null==t)for(n in r)r[n]=Ti(r[n],e.name,null);
return this}
for(;++i<s;)if((n=(e=a[i]).type)&&(n=function(e,t){for(var n,r=0,a=e.length;r<a;++r)if((n=e[r]).name===t)return n.value}(r[n],e.name)))return n},
copy:function(){var e={},
t=this._;
for(var n in t)e[n]=t[n].slice();
return new Li(e)},
call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,a=Array(n),i=0;i<n;++i)a[i]=arguments[i+2];
if(!this._.hasOwnProperty(e))throw Error("unknown type: "+e);
for(i=0,n=(r=this._[e]).length;i<n;++i)r[i].value.apply(t,a)},
apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error("unknown type: "+e);
for(var r=this._[e],a=0,i=r.length;a<i;++a)r[a].value.apply(t,n)}};
var Fi=Array.prototype.find;
function Bi(){return this.firstElementChild}
var Ki=Array.prototype.filter;
function Gi(){return Array.from(this.children)}
function Ui(e){return Array(e.length)}
function Hi(e,t){this.ownerDocument=e.ownerDocument,
this.namespaceURI=e.namespaceURI,
this._next=null,
this._parent=e,
this.__data__=t}
function Wi(e,t,n,r,a,i){for(var s,o=0,l=t.length,u=i.length;o<u;++o)(s=t[o])?(s.__data__=i[o],r[o]=s):n[o]=new Hi(e,i[o]);
for(;o<l;++o)(s=t[o])&&(a[o]=s)}
function $i(e,t,n,r,a,i,s){var o,
l,
u,
c=new Map,
d=t.length,
h=i.length,
f=Array(d);
for(o=0;o<d;++o)(l=t[o])&&(f[o]=u=s.call(l,l.__data__,o,t)+"",c.has(u)?a[o]=l:c.set(u,l));
for(o=0;o<h;++o)u=s.call(e,i[o],o,i)+"",
(l=c.get(u))?(r[o]=l,l.__data__=i[o],c.delete(u)):n[o]=new Hi(e,i[o]);
for(o=0;o<d;++o)(l=t[o])&&c.get(f[o])===l&&(a[o]=l)}
function Vi(e){return e.__data__}
function Zi(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}
Hi.prototype={constructor:Hi,
appendChild:function(e){return this._parent.insertBefore(e,this._next)},
insertBefore:function(e,t){return this._parent.insertBefore(e,t)},
querySelector:function(e){return this._parent.querySelector(e)},
querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};
var Qi="http://www.w3.org/1999/xhtml",
Yi={svg:"http://www.w3.org/2000/svg",
xhtml:Qi,
xlink:"http://www.w3.org/1999/xlink",
xml:"http://www.w3.org/XML/1998/namespace",
xmlns:"http://www.w3.org/2000/xmlns/"};
function Ji(e){var t=e+="",
n=t.indexOf(":");
return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),
Yi.hasOwnProperty(t)?{space:Yi[t],
local:e}:e}
function Xi(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}
function es(e,t){return e.style.getPropertyValue(t)||Xi(e).getComputedStyle(e,null).getPropertyValue(t)}
function ts(e){return e.trim().split(/^|\s+/)}
function ns(e){return e.classList||new rs(e)}
function rs(e){this._node=e,
this._names=ts(e.getAttribute("class")||"")}
function as(e,t){for(var n=ns(e),r=-1,a=t.length;++r<a;)n.add(t[r])}
function is(e,t){for(var n=ns(e),r=-1,a=t.length;++r<a;)n.remove(t[r])}
function ss(){this.textContent=""}
function os(){this.innerHTML=""}
function ls(){this.nextSibling&&this.parentNode.appendChild(this)}
function us(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}
function cs(e){var t=Ji(e);
return(t.local?function(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}:function(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;
return n===Qi&&t.documentElement.namespaceURI===Qi?t.createElement(e):t.createElementNS(n,e)}})(t)}
function ds(){return null}
function hs(){var e=this.parentNode;
e&&e.removeChild(this)}
function fs(){var e=this.cloneNode(!1),
t=this.parentNode;
return t?t.insertBefore(e,this.nextSibling):e}
function ps(){var e=this.cloneNode(!0),
t=this.parentNode;
return t?t.insertBefore(e,this.nextSibling):e}
function ms(e){return function(){var t=this.__on;
if(t){for(var n,r=0,a=-1,i=t.length;r<i;++r)n=t[r],
e.type&&n.type!==e.type||n.name!==e.name?t[++a]=n:this.removeEventListener(n.type,n.listener,n.options);
++a?t.length=a:delete this.__on}}}
function gs(e,t,n){return function(){var r,
a=this.__on,
i=function(e){t.call(this,e,this.__data__)};
if(a)for(var s=0,o=a.length;s<o;++s)if((r=a[s]).type===e.type&&r.name===e.name)return this.removeEventListener(r.type,r.listener,r.options),
this.addEventListener(r.type,r.listener=i,r.options=n),
void(r.value=t);
this.addEventListener(e.type,i,n),
r={type:e.type,
name:e.name,
value:t,
listener:i,
options:n},
a?a.push(r):this.__on=[r]}}
function vs(e,t,n){var r=Xi(e),
a=r.CustomEvent;
"function"==typeof a?a=new a(t,n):(a=r.document.createEvent("Event"),n?(a.initEvent(t,n.bubbles,n.cancelable),a.detail=n.detail):a.initEvent(t,!1,!1)),
e.dispatchEvent(a)}
rs.prototype={add:function(e){0>this._names.indexOf(e)&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},
remove:function(e){var t=this._names.indexOf(e);
t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},
contains:function(e){return this._names.indexOf(e)>=0}};
var bs=[null];
function ys(e,t){this._groups=e,
this._parents=t}
function ks(){return new ys([[document.documentElement]],bs)}
function ws(e){return"string"==typeof e?new ys([[document.querySelector(e)]],[document.documentElement]):new ys([[e]],bs)}
ys.prototype=ks.prototype={constructor:ys,
select:function(e){"function"!=typeof e&&(e=Pi(e));
for(var t=this._groups,n=t.length,r=Array(n),a=0;a<n;++a)for(var i,s,o=t[a],l=o.length,u=r[a]=Array(l),c=0;c<l;++c)(i=o[c])&&(s=e.call(i,i.__data__,c,o))&&("__data__"in i&&(s.__data__=i.__data__),u[c]=s);
return new ys(r,this._parents)},
selectAll:function(e){var t;
"function"==typeof e?(t=e,e=function(){var e;
return null==(e=t.apply(this,arguments))?[]:Array.isArray(e)?e:Array.from(e)}):e=Ri(e);
for(var n=this._groups,r=n.length,a=[],i=[],s=0;s<r;++s)for(var o,l=n[s],u=l.length,c=0;c<u;++c)(o=l[c])&&(a.push(e.call(o,o.__data__,c,l)),i.push(o));
return new ys(a,i)},
selectChild:function(e){var t;
return this.select(null==e?Bi:(t="function"==typeof e?e:Di(e),function(){return Fi.call(this.children,t)}))},
selectChildren:function(e){var t;
return this.selectAll(null==e?Gi:(t="function"==typeof e?e:Di(e),function(){return Ki.call(this.children,t)}))},
filter:function(e){"function"!=typeof e&&(e=Oi(e));
for(var t=this._groups,n=t.length,r=Array(n),a=0;a<n;++a)for(var i,s=t[a],o=s.length,l=r[a]=[],u=0;u<o;++u)(i=s[u])&&e.call(i,i.__data__,u,s)&&l.push(i);
return new ys(r,this._parents)},
data:function(e,t){if(!arguments.length)return Array.from(this,Vi);
var n=t?$i:Wi,
r=this._parents,
a=this._groups;
"function"!=typeof e&&(b=e,e=function(){return b});
for(var i=a.length,s=Array(i),o=Array(i),l=Array(i),u=0;u<i;++u){var c=r[u],
d=a[u],
h=d.length,
f="object"==typeof(v=e.call(c,c&&c.__data__,u,r))&&"length"in v?v:Array.from(v),
p=f.length,
m=o[u]=Array(p),
g=s[u]=Array(p);
n(c,d,m,g,l[u]=Array(h),f,t);
for(var v,b,y,k,w=0,x=0;w<p;++w)if(y=m[w]){for(w>=x&&(x=w+1);!(k=g[x])&&++x<p;);
y._next=k||null}}
return(s=new ys(s,r))._enter=o,
s._exit=l,
s},
enter:function(){return new ys(this._enter||this._groups.map(Ui),this._parents)},
exit:function(){return new ys(this._exit||this._groups.map(Ui),this._parents)},
join:function(e,t,n){var r=this.enter(),
a=this,
i=this.exit();
return"function"==typeof e?(r=e(r))&&(r=r.selection()):r=r.append(e+""),
null!=t&&(a=t(a))&&(a=a.selection()),
null==n?i.remove():n(i),
r&&a?r.merge(a).order():a},
merge:function(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,a=n.length,i=r.length,s=Math.min(a,i),o=Array(a),l=0;l<s;++l)for(var u,c=n[l],d=r[l],h=c.length,f=o[l]=Array(h),p=0;p<h;++p)(u=c[p]||d[p])&&(f[p]=u);
for(;l<a;++l)o[l]=n[l];
return new ys(o,this._parents)},
selection:function(){return this},
order:function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,a=e[t],i=a.length-1,s=a[i];--i>=0;)(r=a[i])&&(s&&4^r.compareDocumentPosition(s)&&s.parentNode.insertBefore(r,s),s=r);
return this},
sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}
e||(e=Zi);
for(var n=this._groups,r=n.length,a=Array(r),i=0;i<r;++i){for(var s,o=n[i],l=o.length,u=a[i]=Array(l),c=0;c<l;++c)(s=o[c])&&(u[c]=s);
u.sort(t)}
return new ys(a,this._parents).order()},
call:function(){var e=arguments[0];
return arguments[0]=this,
e.apply(null,arguments),
this},
nodes:function(){return Array.from(this)},
node:function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],a=0,i=r.length;a<i;++a){var s=r[a];
if(s)return s}
return null},
size:function(){let e=0;
for(let t of this)++e;
return e},
empty:function(){return!this.node()},
each:function(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var a,i=t[n],s=0,o=i.length;s<o;++s)(a=i[s])&&e.call(a,a.__data__,s,i);
return this},
attr:function(e,t){var n=Ji(e);
if(arguments.length<2){var r=this.node();
return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}
return this.each((null==t?n.local?function(e){return function(){this.removeAttributeNS(e.space,e.local)}}:function(e){return function(){this.removeAttribute(e)}}:"function"==typeof t?n.local?function(e,t){return function(){var n=t.apply(this,arguments);
null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}:function(e,t){return function(){var n=t.apply(this,arguments);
null==n?this.removeAttribute(e):this.setAttribute(e,n)}}:n.local?function(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}:function(e,t){return function(){this.setAttribute(e,t)}})(n,t))},
style:function(e,t,n){return arguments.length>1?this.each((null==t?function(e){return function(){this.style.removeProperty(e)}}:"function"==typeof t?function(e,t,n){return function(){var r=t.apply(this,arguments);
null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}:function(e,t,n){return function(){this.style.setProperty(e,t,n)}})(e,t,null==n?"":n)):es(this.node(),e)},
property:function(e,t){return arguments.length>1?this.each((null==t?function(e){return function(){delete this[e]}}:"function"==typeof t?function(e,t){return function(){var n=t.apply(this,arguments);
null==n?delete this[e]:this[e]=n}}:function(e,t){return function(){this[e]=t}})(e,t)):this.node()[e]},
classed:function(e,t){var n=ts(e+"");
if(arguments.length<2){for(var r=ns(this.node()),a=-1,i=n.length;++a<i;)if(!r.contains(n[a]))return!1;
return!0}
return this.each(("function"==typeof t?function(e,t){return function(){(t.apply(this,arguments)?as:is)(this,e)}}:t?function(e){return function(){as(this,e)}}:function(e){return function(){is(this,e)}})(n,t))},
text:function(e){return arguments.length?this.each(null==e?ss:("function"==typeof e?function(e){return function(){var t=e.apply(this,arguments);
this.textContent=null==t?"":t}}:function(e){return function(){this.textContent=e}})(e)):this.node().textContent},
html:function(e){return arguments.length?this.each(null==e?os:("function"==typeof e?function(e){return function(){var t=e.apply(this,arguments);
this.innerHTML=null==t?"":t}}:function(e){return function(){this.innerHTML=e}})(e)):this.node().innerHTML},
raise:function(){return this.each(ls)},
lower:function(){return this.each(us)},
append:function(e){var t="function"==typeof e?e:cs(e);
return this.select(function(){return this.appendChild(t.apply(this,arguments))})},
insert:function(e,t){var n="function"==typeof e?e:cs(e),
r=null==t?ds:"function"==typeof t?t:Pi(t);
return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},
remove:function(){return this.each(hs)},
clone:function(e){return this.select(e?ps:fs)},
datum:function(e){return arguments.length?this.property("__data__",e):this.node().__data__},
on:function(e,t,n){var r,
a,
i=(e+"").trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");
return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}),
s=i.length;
if(!(arguments.length<2)){for(o=t?gs:ms,r=0;r<s;++r)this.each(o(i[r],t,n));
return this}
var o=this.node().__on;
if(o)for(var l,u=0,c=o.length;u<c;++u)for(r=0,l=o[u];r<s;++r)if((a=i[r]).type===l.type&&a.name===l.name)return l.value},
dispatch:function(e,t){return this.each(("function"==typeof t?function(e,t){return function(){return vs(this,e,t.apply(this,arguments))}}:function(e,t){return function(){return vs(this,e,t)}})(e,t))},
[Symbol.iterator]:function*(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r,a=e[t],i=0,s=a.length;i<s;++i)(r=a[i])&&(yield r)}};
let xs={capture:!0,
passive:!1};
function js(e){e.preventDefault(),
e.stopImmediatePropagation()}
var Ss=d("9LE87");
function _s(e,t,n,r,a){var i=e*e,
s=i*e;
return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*r+s*a)/6}
var qs=e=>()=>e;
function Es(e,t){return function(n){return e+n*t}}
function zs(e,t){var n=t-e;
return n?Es(e,n>180||n<-180?n-360*Math.round(n/360):n):qs(isNaN(e)?t:e)}
function Ns(e,t){var n=t-e;
return n?Es(e,n):qs(isNaN(e)?t:e)}
var Ms=function e(t){var n,
r=1==(n=+t)?Ns:function(e,t){var r,
a,
i;
return t-e?(r=e,a=t,r=Math.pow(r,i=n),a=Math.pow(a,i)-r,i=1/i,function(e){return Math.pow(r+e*a,i)}):qs(isNaN(e)?t:e)};
function a(e,t){var n=r((e=(0,Ss.rgb)(e)).r,(t=(0,Ss.rgb)(t)).r),
a=r(e.g,t.g),
i=r(e.b,t.b),
s=Ns(e.opacity,t.opacity);
return function(t){return e.r=n(t),
e.g=a(t),
e.b=i(t),
e.opacity=s(t),
e+""}}
return a.gamma=e,
a}(1);
function Cs(e){return function(t){var n,
r,
a=t.length,
i=Array(a),
s=Array(a),
o=Array(a);
for(n=0;n<a;++n)r=(0,Ss.rgb)(t[n]),
i[n]=r.r||0,
s[n]=r.g||0,
o[n]=r.b||0;
return i=e(i),
s=e(s),
o=e(o),
r.opacity=1,
function(e){return r.r=i(e),
r.g=s(e),
r.b=o(e),
r+""}}}
function Ls(e,t){return e*=1,
t*=1,
function(n){return e*(1-n)+t*n}}
Cs(function(e){var t=e.length-1;
return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),a=e[r],i=e[r+1],s=r>0?e[r-1]:2*a-i,o=r<t-1?e[r+2]:2*i-a;
return _s((n-r/t)*t,s,a,i,o)}}),
Cs(function(e){var t=e.length;
return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),a=e[(r+t-1)%t],i=e[r%t],s=e[(r+1)%t],o=e[(r+2)%t];
return _s((n-r/t)*t,a,i,s,o)}});
var Ts=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
As=RegExp(Ts.source,"g"),
Ps=180/Math.PI,
Is={translateX:0,
translateY:0,
rotate:0,
skewX:0,
scaleX:1,
scaleY:1};
function Rs(e,t,n,r,a,i){var s,
o,
l;
return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),
(l=e*n+t*r)&&(n-=e*l,r-=t*l),
(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),
e*r<t*n&&(e=-e,t=-t,l=-l,s=-s),
{translateX:a,
translateY:i,
rotate:Math.atan2(t,e)*Ps,
skewX:Math.atan(l)*Ps,
scaleX:s,
scaleY:o}}
function Os(e,t,n,r){function a(e){return e.length?e.pop()+" ":""}
return function(i,s){var o,
l,
u,
c,
d=[],
h=[];
return i=e(i),
s=e(s),
function(e,r,a,i,s,o){if(e!==a||r!==i){var l=s.push("translate(",null,t,null,n);
o.push({i:l-4,x:Ls(e,a)},{i:l-2,x:Ls(r,i)})}else(a||i)&&s.push("translate("+a+t+i+n)}(i.translateX,i.translateY,s.translateX,s.translateY,d,h),
(o=i.rotate)!==(l=s.rotate)?(o-l>180?l+=360:l-o>180&&(o+=360),h.push({i:d.push(a(d)+"rotate(",null,r)-2,x:Ls(o,l)})):l&&d.push(a(d)+"rotate("+l+r),
(u=i.skewX)!==(c=s.skewX)?h.push({i:d.push(a(d)+"skewX(",null,r)-2,x:Ls(u,c)}):c&&d.push(a(d)+"skewX("+c+r),
function(e,t,n,r,i,s){if(e!==n||t!==r){var o=i.push(a(i)+"scale(",null,",",null,")");
s.push({i:o-4,x:Ls(e,n)},{i:o-2,x:Ls(t,r)})}else(1!==n||1!==r)&&i.push(a(i)+"scale("+n+","+r+")")}(i.scaleX,i.scaleY,s.scaleX,s.scaleY,d,h),
i=s=null,
function(e){for(var t,n=-1,r=h.length;++n<r;)d[(t=h[n]).i]=t.x(e);
return d.join("")}}}
var Ds=Os(function(e){let t=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"");
return t.isIdentity?Is:Rs(t.a,t.b,t.c,t.d,t.e,t.f)},"px, ","px)","deg)"),
Fs=Os(function(e){return null==e?Is:(eo||(eo=document.createElementNS("http://www.w3.org/2000/svg","g")),eo.setAttribute("transform",e),(e=eo.transform.baseVal.consolidate())?Rs((e=e.matrix).a,e.b,e.c,e.d,e.e,e.f):Is)},", ",")",")");
function Bs(e){return((e=Math.exp(e))+1/e)/2}
var Ks=function e(t,n,r){function a(e,a){var i,
s,
o=e[0],
l=e[1],
u=e[2],
c=a[0],
d=a[1],
h=a[2],
f=c-o,
p=d-l,
m=f*f+p*p;
if(m<1e-12)s=Math.log(h/u)/t,
i=function(e){return[o+e*f,l+e*p,u*Math.exp(t*e*s)]};
else{var g=Math.sqrt(m),
v=(h*h-u*u+r*m)/(2*u*n*g),
b=(h*h-u*u-r*m)/(2*h*n*g),
y=Math.log(Math.sqrt(v*v+1)-v);
s=(Math.log(Math.sqrt(b*b+1)-b)-y)/t,
i=function(e){var r,
a,
i=e*s,
c=Bs(y),
d=u/(n*g)*(c*(((r=Math.exp(2*(r=t*i+y)))-1)/(r+1))-((a=Math.exp(a=y))-1/a)/2);
return[o+d*f,l+d*p,u*c/Bs(t*i+y)]}}
return i.duration=1e3*Math.abs(s)*t/Math.SQRT2,
i}
return a.rho=function(t){var n=Math.max(.001,+t),
r=n*n;
return e(n,r,r*r)},
a}(Math.SQRT2,2,4);
function Gs(e){return function(t,n){var r=e((t=(0,Ss.hsl)(t)).h,(n=(0,Ss.hsl)(n)).h),
a=Ns(t.s,n.s),
i=Ns(t.l,n.l),
s=Ns(t.opacity,n.opacity);
return function(e){return t.h=r(e),
t.s=a(e),
t.l=i(e),
t.opacity=s(e),
t+""}}}
function Us(e){return function(t,n){var r=e((t=(0,Ss.hcl)(t)).h,(n=(0,Ss.hcl)(n)).h),
a=Ns(t.c,n.c),
i=Ns(t.l,n.l),
s=Ns(t.opacity,n.opacity);
return function(e){return t.h=r(e),
t.c=a(e),
t.l=i(e),
t.opacity=s(e),
t+""}}}
function Hs(e){return function t(n){function r(t,r){var a=e((t=(0,Ss.cubehelix)(t)).h,(r=(0,Ss.cubehelix)(r)).h),
i=Ns(t.s,r.s),
s=Ns(t.l,r.l),
o=Ns(t.opacity,r.opacity);
return function(e){return t.h=a(e),
t.s=i(e),
t.l=s(Math.pow(e,n)),
t.opacity=o(e),
t+""}}
return n*=1,
r.gamma=t,
r}(1)}
function Ws(e,t){if(e=function(e){let t;
for(;t=e.sourceEvent;)e=t;
return e}(e),void 0===t&&(t=e.currentTarget),t){if(t.__kpt)return t.__kpt(e);
var n=t.ownerSVGElement||t;
if(n.createSVGPoint){var r=n.createSVGPoint();
return r.x=e.clientX,
r.y=e.clientY,
[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}
if(t.getBoundingClientRect){var a=t.getBoundingClientRect();
return[e.clientX-a.left-t.clientLeft,e.clientY-a.top-t.clientTop]}}
return[e.pageX,e.pageY]}
Gs(zs),
Gs(Ns),
Us(zs),
Us(Ns),
Hs(zs),
Hs(Ns);
var $s,
Vs,
Zs,
Qs,
Ys,
Js,
Xs,
eo,
to,
no,
ro=0,
ao=0,
io=0,
so=0,
oo=0,
lo=0,
uo="object"==typeof performance&&performance.now?performance:Date,
co="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};
function ho(){return oo||(co(fo),oo=uo.now()+lo)}
function fo(){oo=0}
function po(){this._call=this._time=this._next=null}
function mo(e,t,n){var r=new po;
return r.restart(e,t,n),
r}
function go(){oo=(so=uo.now())+lo,
ro=ao=0;
try{ho(),
++ro;
for(var e,t=to;t;)(e=oo-t._time)>=0&&t._call.call(void 0,e),
t=t._next;
--ro}finally{ro=0,
function(){for(var e,t,n=to,r=1/0;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:to=t);
no=e,
bo(r)}(),
oo=0}}
function vo(){var e=uo.now(),
t=e-so;
t>1e3&&(lo-=t,so=e)}
function bo(e){!ro&&(ao&&(ao=clearTimeout(ao)),e-oo>24?(e<1/0&&(ao=setTimeout(go,Math.ceil(e-uo.now()-lo)+1)),io&&(io=clearInterval(io))):(io||(so=uo.now(),io=setInterval(vo,1e3)),ro=1,co(go)))}
function yo(e,t,n){var r=new po;
return t=null==t?0:+t,
r.restart(n=>{r.stop(),e(n+t)},t,n),
r}
po.prototype=mo.prototype={constructor:po,
restart:function(e,t,n){if("function"!=typeof e)throw TypeError("callback is not a function");
n=(null==n?ho():+n)+(null==t?0:+t),
this._next||no===this||(no?no._next=this:to=this,no=this),
this._call=e,
this._time=n,
bo()},
stop:function(){this._call&&(this._call=null,this._time=1/0,bo())}};
var ko=Ci("start","end","cancel","interrupt"),
wo=[];
function xo(e,t,n,r,a,i){var s=e.__transition;
if(s){if(n in s)return}else e.__transition={};
!function(e,t,n){var r,
a=e.__transition;
function i(l){var u,
c,
d,
h;
if(1!==n.state)return o();
for(u in a)if((h=a[u]).name===n.name){if(3===h.state)return yo(i);
4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete a[u]):+u<t&&(h.state=6,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete a[u])}
if(yo(function(){3===n.state&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=2,n.on.call("start",e,e.__data__,n.index,n.group),2===n.state){for(n.state=3,r=Array(d=n.tween.length),u=0,c=-1;u<d;++u)(h=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++c]=h);
r.length=c+1}}
function s(t){for(var a=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(o),n.state=5,1),i=-1,s=r.length;++i<s;)r[i].call(e,a);
5===n.state&&(n.on.call("end",e,e.__data__,n.index,n.group),o())}
function o(){for(var r in n.state=6,n.timer.stop(),delete a[t],a)return;
delete e.__transition}
a[t]=n,
n.timer=mo(function(e){n.state=1,n.timer.restart(i,n.delay,n.time),n.delay<=e&&i(e-n.delay)},0,n.time)}(e,n,{name:t,index:r,group:a,on:ko,tween:wo,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:0})}
function jo(e,t){var n=_o(e,t);
if(n.state>0)throw Error("too late; already scheduled");
return n}
function So(e,t){var n=_o(e,t);
if(n.state>3)throw Error("too late; already running");
return n}
function _o(e,t){var n=e.__transition;
if(!n||!(n=n[t]))throw Error("transition not found");
return n}
function qo(e,t){var n,
r,
a,
i=e.__transition,
s=!0;
if(i){for(a in t=null==t?null:t+"",i)(n=i[a]).name===t?(r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",e,e.__data__,n.index,n.group),delete i[a]):s=!1;
s&&delete e.__transition}}
function Eo(e,t,n){var r=e._id;
return e.each(function(){var e=So(this,r);
(e.value||(e.value={}))[t]=n.apply(this,arguments)}),
function(e){return _o(e,r).value[t]}}
Ss=d("9LE87");
function zo(e,t){var n;
return("number"==typeof t?Ls:t instanceof Ss.color?Ms:(n=(0,Ss.color)(t))?(t=n,Ms):function(e,t){var n,r,a,i,s,o=Ts.lastIndex=As.lastIndex=0,l=-1,u=[],c=[];
for(e+="",t+="";(a=Ts.exec(e))&&(i=As.exec(t));)(s=i.index)>o&&(s=t.slice(o,s),u[l]?u[l]+=s:u[++l]=s),(a=a[0])===(i=i[0])?u[l]?u[l]+=i:u[++l]=i:(u[++l]=null,c.push({i:l,x:Ls(a,i)})),o=As.lastIndex;
return o<t.length&&(s=t.slice(o),u[l]?u[l]+=s:u[++l]=s),u.length<2?c[0]?(n=c[0].x,function(e){return n(e)+""}):(r=t,function(){return r}):(t=c.length,function(e){for(var n,r=0;r<t;++r)u[(n=c[r]).i]=n.x(e);
return u.join("")})})(e,t)}
var No=ks.prototype.constructor;
function Mo(e){return function(){this.style.removeProperty(e)}}
var Co=0;
function Lo(e,t,n,r){this._groups=e,
this._parents=t,
this._name=n,
this._id=r}
var To=ks.prototype;
function Ao(e){return--e*e*e+1}
function Po(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}
function Io(e){return 1.0009775171065494*(Math.pow(2,-10*e)-.0009765625)}
Lo.prototype=function(e){return ks().transition(e)}.prototype={constructor:Lo,
select:function(e){var t=this._name,
n=this._id;
"function"!=typeof e&&(e=Pi(e));
for(var r=this._groups,a=r.length,i=Array(a),s=0;s<a;++s)for(var o,l,u=r[s],c=u.length,d=i[s]=Array(c),h=0;h<c;++h)(o=u[h])&&(l=e.call(o,o.__data__,h,u))&&("__data__"in o&&(l.__data__=o.__data__),d[h]=l,xo(d[h],t,n,h,d,_o(o,n)));
return new Lo(i,this._parents,t,n)},
selectAll:function(e){var t=this._name,
n=this._id;
"function"!=typeof e&&(e=Ri(e));
for(var r=this._groups,a=r.length,i=[],s=[],o=0;o<a;++o)for(var l,u=r[o],c=u.length,d=0;d<c;++d)if(l=u[d]){for(var h,f=e.call(l,l.__data__,d,u),p=_o(l,n),m=0,g=f.length;m<g;++m)(h=f[m])&&xo(h,t,n,m,f,p);
i.push(f),
s.push(l)}
return new Lo(i,s,t,n)},
selectChild:To.selectChild,
selectChildren:To.selectChildren,
filter:function(e){"function"!=typeof e&&(e=Oi(e));
for(var t=this._groups,n=t.length,r=Array(n),a=0;a<n;++a)for(var i,s=t[a],o=s.length,l=r[a]=[],u=0;u<o;++u)(i=s[u])&&e.call(i,i.__data__,u,s)&&l.push(i);
return new Lo(r,this._parents,this._name,this._id)},
merge:function(e){if(e._id!==this._id)throw Error();
for(var t=this._groups,n=e._groups,r=t.length,a=n.length,i=Math.min(r,a),s=Array(r),o=0;o<i;++o)for(var l,u=t[o],c=n[o],d=u.length,h=s[o]=Array(d),f=0;f<d;++f)(l=u[f]||c[f])&&(h[f]=l);
for(;o<r;++o)s[o]=t[o];
return new Lo(s,this._parents,this._name,this._id)},
selection:function(){return new No(this._groups,this._parents)},
transition:function(){for(var e=this._name,t=this._id,n=++Co,r=this._groups,a=r.length,i=0;i<a;++i)for(var s,o=r[i],l=o.length,u=0;u<l;++u)if(s=o[u]){var c=_o(s,t);
xo(s,e,n,u,o,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}
return new Lo(r,this._parents,e,n)},
call:To.call,
nodes:To.nodes,
node:To.node,
size:To.size,
empty:To.empty,
each:To.each,
on:function(e,t){var n,
r,
a,
i,
s,
o,
l=this._id;
return arguments.length<2?_o(this.node(),l).on.on(e):this.each((n=l,a=t,o=((r=e)+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");
return t>=0&&(e=e.slice(0,t)),!e||"start"===e})?jo:So,function(){var e=o(this,n),t=e.on;
t!==i&&(s=(i=t).copy()).on(r,a),e.on=s}))},
attr:function(e,t){var n=Ji(e),
r="transform"===n?Fs:zo;
return this.attrTween(e,"function"==typeof t?(n.local?function(e,t,n){var r,a,i;
return function(){var s,o,l=n(this);
return null==l?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local))===(o=l+"")?null:s===r&&o===a?i:(a=o,i=t(r=s,l))}}:function(e,t,n){var r,a,i;
return function(){var s,o,l=n(this);
return null==l?void this.removeAttribute(e):(s=this.getAttribute(e))===(o=l+"")?null:s===r&&o===a?i:(a=o,i=t(r=s,l))}})(n,r,Eo(this,"attr."+e,t)):null==t?(n.local?function(e){return function(){this.removeAttributeNS(e.space,e.local)}}:function(e){return function(){this.removeAttribute(e)}})(n):(n.local?function(e,t,n){var r,a,i=n+"";
return function(){var s=this.getAttributeNS(e.space,e.local);
return s===i?null:s===r?a:a=t(r=s,n)}}:function(e,t,n){var r,a,i=n+"";
return function(){var s=this.getAttribute(e);
return s===i?null:s===r?a:a=t(r=s,n)}})(n,r,t))},
attrTween:function(e,t){var n="attr."+e;
if(arguments.length<2)return(n=this.tween(n))&&n._value;
if(null==t)return this.tween(n,null);
if("function"!=typeof t)throw Error();
var r=Ji(e);
return this.tween(n,(r.local?function(e,t){var n,r;
function a(){var a=t.apply(this,arguments);
return a!==r&&(n=(r=a)&&function(t){this.setAttributeNS(e.space,e.local,a.call(this,t))}),n}
return a._value=t,a}:function(e,t){var n,r;
function a(){var a=t.apply(this,arguments);
return a!==r&&(n=(r=a)&&function(t){this.setAttribute(e,a.call(this,t))}),n}
return a._value=t,a})(r,t))},
style:function(e,t,n){var r,
a,
i,
s,
o,
l,
u,
c,
d,
h,
f,
p,
m,
g,
v,
b,
y,
k,
w,
x,
j,
S="transform"==(e+="")?Ds:zo;
return null==t?this.styleTween(e,(r=e,function(){var e=es(this,r),t=(this.style.removeProperty(r),es(this,r));
return e===t?null:e===a&&t===i?s:s=S(a=e,i=t)})).on("end.style."+e,Mo(e)):"function"==typeof t?this.styleTween(e,(o=e,l=Eo(this,"style."+e,t),function(){var e=es(this,o),t=l(this),n=t+"";
return null==t&&(this.style.removeProperty(o),n=t=es(this,o)),e===n?null:e===u&&n===c?d:(c=n,d=S(u=e,t))})).each((h=this._id,y="end."+(b="style."+(f=e)),function(){var e=So(this,h),t=e.on,n=null==e.value[b]?v||(v=Mo(f)):void 0;
(t!==p||g!==n)&&(m=(p=t).copy()).on(y,g=n),e.on=m})):this.styleTween(e,(k=e,j=t+"",function(){var e=es(this,k);
return e===j?null:e===w?x:x=S(w=e,t)}),n).on("end.style."+e,null)},
styleTween:function(e,t,n){var r="style."+(e+="");
if(arguments.length<2)return(r=this.tween(r))&&r._value;
if(null==t)return this.tween(r,null);
if("function"!=typeof t)throw Error();
return this.tween(r,function(e,t,n){var r,a;
function i(){var i=t.apply(this,arguments);
return i!==a&&(r=(a=i)&&function(t){this.style.setProperty(e,i.call(this,t),n)}),r}
return i._value=t,i}(e,t,null==n?"":n))},
text:function(e){var t,
n;
return this.tween("text","function"==typeof e?(t=Eo(this,"text",e),function(){var e=t(this);
this.textContent=null==e?"":e}):(n=null==e?"":e+"",function(){this.textContent=n}))},
textTween:function(e){var t="text";
if(arguments.length<1)return(t=this.tween(t))&&t._value;
if(null==e)return this.tween(t,null);
if("function"!=typeof e)throw Error();
return this.tween(t,function(e){var t,n;
function r(){var r=e.apply(this,arguments);
return r!==n&&(t=(n=r)&&function(e){this.textContent=r.call(this,e)}),t}
return r._value=e,r}(e))},
remove:function(){var e;
return this.on("end.remove",(e=this._id,function(){var t=this.parentNode;
for(var n in this.__transition)if(+n!==e)return;
t&&t.removeChild(this)}))},
tween:function(e,t){var n=this._id;
if(e+="",arguments.length<2){for(var r,a=_o(this.node(),n).tween,i=0,s=a.length;i<s;++i)if((r=a[i]).name===e)return r.value;
return null}
return this.each((null==t?function(e,t){var n,r;
return function(){var a=So(this,e),i=a.tween;
if(i!==n)for(var s=0,o=(r=n=i).length;s<o;++s)if(r[s].name===t){(r=r.slice()).splice(s,1);
break}
a.tween=r}}:function(e,t,n){var r,a;
if("function"!=typeof n)throw Error();
return function(){var i=So(this,e),s=i.tween;
if(s!==r){a=(r=s).slice();
for(var o={name:t,value:n},l=0,u=a.length;l<u;++l)if(a[l].name===t){a[l]=o;
break}
l===u&&a.push(o)}
i.tween=a}})(n,e,t))},
delay:function(e){var t=this._id;
return arguments.length?this.each(("function"==typeof e?function(e,t){return function(){jo(this,e).delay=+t.apply(this,arguments)}}:function(e,t){return t*=1,function(){jo(this,e).delay=t}})(t,e)):_o(this.node(),t).delay},
duration:function(e){var t=this._id;
return arguments.length?this.each(("function"==typeof e?function(e,t){return function(){So(this,e).duration=+t.apply(this,arguments)}}:function(e,t){return t*=1,function(){So(this,e).duration=t}})(t,e)):_o(this.node(),t).duration},
ease:function(e){var t=this._id;
return arguments.length?this.each(function(e,t){if("function"!=typeof t)throw Error();
return function(){So(this,e).ease=t}}(t,e)):_o(this.node(),t).ease},
easeVarying:function(e){var t;
if("function"!=typeof e)throw Error();
return this.each((t=this._id,function(){var n=e.apply(this,arguments);
if("function"!=typeof n)throw Error();
So(this,t).ease=n}))},
end:function(){var e,
t,
n=this,
r=n._id,
a=n.size();
return new Promise(function(i,s){var o={value:s},l={value:function(){0==--a&&i()}};
n.each(function(){var n=So(this,r),a=n.on;
a!==e&&((t=(e=a).copy())._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),n.on=t}),0===a&&i()})},
[Symbol.iterator]:To[Symbol.iterator]},
function e(t){function n(e){return Math.pow(e,t)}
return t*=1,
n.exponent=e,
n}(3),
function e(t){function n(e){return 1-Math.pow(1-e,t)}
return t*=1,
n.exponent=e,
n}(3),
function e(t){function n(e){return((e*=2)<=1?Math.pow(e,t):2-Math.pow(2-e,t))/2}
return t*=1,
n.exponent=e,
n}(3),
function e(t){function n(e){return(e*=1)*e*(t*(e-1)+e)}
return t*=1,
n.overshoot=e,
n}(1.70158),
function e(t){function n(e){return--e*e*((e+1)*t+e)+1}
return t*=1,
n.overshoot=e,
n}(1.70158),
function e(t){function n(e){return((e*=2)<1?e*e*((t+1)*e-t):(e-=2)*e*((t+1)*e+t)+2)/2}
return t*=1,
n.overshoot=e,
n}(1.70158);
var Ro=2*Math.PI;
!function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Ro);
function a(e){return t*Io(- --e)*Math.sin((r-e)/n)}
return a.amplitude=function(t){return e(t,n*Ro)},
a.period=function(n){return e(t,n)},
a}(1,.3),
function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Ro);
function a(e){return 1-t*Io(e*=1)*Math.sin((e+r)/n)}
return a.amplitude=function(t){return e(t,n*Ro)},
a.period=function(n){return e(t,n)},
a}(1,.3),
function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Ro);
function a(e){return((e=2*e-1)<0?t*Io(-e)*Math.sin((r-e)/n):2-t*Io(e)*Math.sin((r+e)/n))/2}
return a.amplitude=function(t){return e(t,n*Ro)},
a.period=function(n){return e(t,n)},
a}(1,.3);
var Oo={time:null,
delay:0,
duration:250,
ease:Po};
ks.prototype.interrupt=function(e){return this.each(function(){qo(this,e)})},
ks.prototype.transition=function(e){var t,
n;
e instanceof Lo?(t=e._id,e=e._name):(t=++Co,(n=Oo).time=ho(),e=null==e?null:e+"");
for(var r=this._groups,a=r.length,i=0;i<a;++i)for(var s,o=r[i],l=o.length,u=0;u<l;++u)(s=o[u])&&xo(s,e,t,u,o,n||function(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);
return n}(s,t));
return new Lo(r,this._parents,e,t)};
let{abs:Do,
max:Fo,
min:Bo}=Math;
function Ko(e){return{type:e}}["w","e"].map(Ko),
["n","s"].map(Ko),
["n","w","e","s","nw","ne","sw","se"].map(Ko);
Ss=d("9LE87");
function Go(e,t,n,r,a){let i,
s,
o,
l,
u=t[0],
c=r[0],
d=0,
h=0;
c>u==c>-u?(i=u,u=t[++d]):(i=c,c=r[++h]);
let f=0;
if(d<e&&h<n)for(c>u==c>-u?(s=u+i,o=i-(s-u),u=t[++d]):(s=c+i,o=i-(s-c),c=r[++h]),i=s,0!==o&&(a[f++]=o);d<e&&h<n;)c>u==c>-u?(l=(s=i+u)-i,o=i-(s-l)+(u-l),u=t[++d]):(l=(s=i+c)-i,o=i-(s-l)+(c-l),c=r[++h]),
i=s,
0!==o&&(a[f++]=o);
for(;d<e;)l=(s=i+u)-i,
o=i-(s-l)+(u-l),
u=t[++d],
i=s,
0!==o&&(a[f++]=o);
for(;h<n;)l=(s=i+c)-i,
o=i-(s-l)+(c-l),
c=r[++h],
i=s,
0!==o&&(a[f++]=o);
return(0!==i||0===f)&&(a[f++]=i),
f}
function Uo(e){return new Float64Array(e)}
let Ho=Uo(4),
Wo=Uo(8),
$o=Uo(12),
Vo=Uo(16),
Zo=Uo(4);
function Qo(e,t,n,r,a,i){let s=(t-i)*(n-a),
o=(e-a)*(r-i),
l=s-o,
u=Math.abs(s+o);
return Math.abs(l)>=33306690738754716e-32*u?l:-function(e,t,n,r,a,i,s){let o,
l,
u,
c,
d,
h,
f,
p,
m,
g,
v,
b,
y,
k,
w,
x,
j,
S,
_=e-a,
q=n-a,
E=t-i,
z=r-i;
k=_*z,
f=(h=134217729*_)-(h-_),
p=_-f,
m=(h=134217729*z)-(h-z),
w=p*(g=z-m)-(k-f*m-p*m-f*g),
x=E*q,
f=(h=134217729*E)-(h-E),
p=E-f,
m=(h=134217729*q)-(h-q),
v=w-(j=p*(g=q-m)-(x-f*m-p*m-f*g)),
d=w-v,
Ho[0]=w-(v+d)+(d-j),
d=(b=k+v)-k,
v=(y=k-(b-d)+(v-d))-x,
d=y-v,
Ho[1]=y-(v+d)+(d-x),
d=(S=b+v)-b,
Ho[2]=b-(S-d)+(v-d),
Ho[3]=S;
let N=function(e){let t=e[0];
for(let n=1;n<4;n++)t+=e[n];
return t}(Ho),
M=22204460492503146e-32*s;
if(N>=M||-N>=M||(d=e-_,o=e-(_+d)+(d-a),d=n-q,u=n-(q+d)+(d-a),d=t-E,l=t-(E+d)+(d-i),d=r-z,c=r-(z+d)+(d-i),0===o&&0===l&&0===u&&0===c)||(M=11093356479670487e-47*s+33306690738754706e-32*Math.abs(N),(N+=_*c+z*o-(E*u+q*l))>=M||-N>=M))return N;
k=o*z,
f=(h=134217729*o)-(h-o),
p=o-f,
m=(h=134217729*z)-(h-z),
w=p*(g=z-m)-(k-f*m-p*m-f*g),
x=l*q,
f=(h=134217729*l)-(h-l),
p=l-f,
m=(h=134217729*q)-(h-q),
v=w-(j=p*(g=q-m)-(x-f*m-p*m-f*g)),
d=w-v,
Zo[0]=w-(v+d)+(d-j),
d=(b=k+v)-k,
v=(y=k-(b-d)+(v-d))-x,
d=y-v,
Zo[1]=y-(v+d)+(d-x),
d=(S=b+v)-b,
Zo[2]=b-(S-d)+(v-d),
Zo[3]=S;
let C=Go(4,Ho,4,Zo,Wo);
k=_*c,
f=(h=134217729*_)-(h-_),
p=_-f,
m=(h=134217729*c)-(h-c),
w=p*(g=c-m)-(k-f*m-p*m-f*g),
x=E*u,
f=(h=134217729*E)-(h-E),
p=E-f,
m=(h=134217729*u)-(h-u),
v=w-(j=p*(g=u-m)-(x-f*m-p*m-f*g)),
d=w-v,
Zo[0]=w-(v+d)+(d-j),
d=(b=k+v)-k,
v=(y=k-(b-d)+(v-d))-x,
d=y-v,
Zo[1]=y-(v+d)+(d-x),
d=(S=b+v)-b,
Zo[2]=b-(S-d)+(v-d),
Zo[3]=S;
let L=Go(C,Wo,4,Zo,$o);
k=o*c,
f=(h=134217729*o)-(h-o),
p=o-f,
m=(h=134217729*c)-(h-c),
w=p*(g=c-m)-(k-f*m-p*m-f*g),
x=l*u,
f=(h=134217729*l)-(h-l),
p=l-f,
m=(h=134217729*u)-(h-u),
v=w-(j=p*(g=u-m)-(x-f*m-p*m-f*g)),
d=w-v,
Zo[0]=w-(v+d)+(d-j),
d=(b=k+v)-k,
v=(y=k-(b-d)+(v-d))-x,
d=y-v,
Zo[1]=y-(v+d)+(d-x),
d=(S=b+v)-b,
Zo[2]=b-(S-d)+(v-d),
Zo[3]=S;
let T=Go(L,$o,4,Zo,Vo);
return Vo[T-1]}(e,t,n,r,a,i,u)}
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(8),
Uo(8),
Uo(8),
Uo(4),
Uo(8),
Uo(8),
Uo(16),
Uo(12),
Uo(192),
Uo(192),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(8),
Uo(4),
Uo(4),
Uo(4),
Uo(8),
Uo(16),
Uo(16),
Uo(16),
Uo(32),
Uo(32),
Uo(48),
Uo(64),
Uo(1152),
Uo(1152),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(4),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(24),
Uo(1152),
Uo(1152),
Uo(1152),
Uo(1152),
Uo(1152),
Uo(2304),
Uo(2304),
Uo(3456),
Uo(5760),
Uo(8),
Uo(8),
Uo(8),
Uo(16),
Uo(24),
Uo(48),
Uo(48),
Uo(96),
Uo(192),
Uo(384),
Uo(384),
Uo(384),
Uo(768),
Uo(96),
Uo(96),
Uo(96),
Uo(1152);
let Yo=new Uint32Array(512);
class Jo{static from(e,t=nl,n=rl){let r=e.length,
a=new Float64Array(2*r);
for(let i=0;i<r;i++){let r=e[i];
a[2*i]=t(r),
a[2*i+1]=n(r)}
return new Jo(a)}
constructor(e){let t=e.length>>1;
if(t>0&&"number"!=typeof e[0])throw Error("Expected coords to contain numbers.");
this.coords=e;
let n=Math.max(2*t-5,0);
this._triangles=new Uint32Array(3*n),
this._halfedges=new Int32Array(3*n),
this._hashSize=Math.ceil(Math.sqrt(t)),
this._hullPrev=new Uint32Array(t),
this._hullNext=new Uint32Array(t),
this._hullTri=new Uint32Array(t),
this._hullHash=new Int32Array(this._hashSize),
this._ids=new Uint32Array(t),
this._dists=new Float64Array(t),
this.trianglesLen=0,
this._cx=0,
this._cy=0,
this._hullStart=0,
this.hull=this._triangles,
this.triangles=this._triangles,
this.halfedges=this._halfedges,
this.update()}
update(){var e,
t;
let n,
r,
a,
i,
s,
o,
l,
{coords:u,
_hullPrev:c,
_hullNext:d,
_hullTri:h,
_hullHash:f}=this,
p=u.length>>1,
m=1/0,
g=1/0,
v=-1/0,
b=-1/0;
for(let e=0;e<p;e++){let t=u[2*e],
n=u[2*e+1];
t<m&&(m=t),
n<g&&(g=n),
t>v&&(v=t),
n>b&&(b=n),
this._ids[e]=e}
let y=(m+v)/2,
k=(g+b)/2,
w=0,
x=0,
j=0;
for(let e=0,t=1/0;e<p;e++){let n=Xo(y,k,u[2*e],u[2*e+1]);
n<t&&(w=e,t=n)}
let S=u[2*w],
_=u[2*w+1];
for(let e=0,t=1/0;e<p;e++){if(e===w)continue;
let n=Xo(S,_,u[2*e],u[2*e+1]);
n<t&&n>0&&(x=e,t=n)}
let q=u[2*x],
E=u[2*x+1],
z=1/0;
for(let e=0;e<p;e++){if(e===w||e===x)continue;
let t=function(e,t,n,r,a,i){let s=n-e,
o=r-t,
l=a-e,
u=i-t,
c=s*s+o*o,
d=l*l+u*u,
h=.5/(s*u-o*l),
f=(u*c-o*d)*h,
p=(s*d-l*c)*h;
return f*f+p*p}(S,_,q,E,u[2*e],u[2*e+1]);
t<z&&(j=e,z=t)}
let N=u[2*j],
M=u[2*j+1];
if(1/0===z){for(let e=0;e<p;e++)this._dists[e]=u[2*e]-u[0]||u[2*e+1]-u[1];
el(this._ids,this._dists,0,p-1);
let e=new Uint32Array(p),
t=0;
for(let n=0,r=-1/0;n<p;n++){let a=this._ids[n],
i=this._dists[a];
i>r&&(e[t++]=a,r=i)}
return this.hull=e.subarray(0,t),
this.triangles=new Uint32Array(0),
void(this.halfedges=new Int32Array(0))}
if(0>Qo(S,_,q,E,N,M)){let e=x,
t=q,
n=E;
x=j,
q=N,
E=M,
j=e,
N=t,
M=n}
let C=(n=q-(e=S),r=E-(t=_),a=N-e,i=M-t,s=n*n+r*r,o=a*a+i*i,l=.5/(n*i-r*a),{x:e+(i*s-r*o)*l,y:t+(n*o-a*s)*l});
this._cx=C.x,
this._cy=C.y;
for(let e=0;e<p;e++)this._dists[e]=Xo(u[2*e],u[2*e+1],C.x,C.y);
el(this._ids,this._dists,0,p-1),
this._hullStart=w;
let L=3;
d[w]=c[j]=x,
d[x]=c[w]=j,
d[j]=c[x]=w,
h[w]=0,
h[x]=1,
h[j]=2,
f.fill(-1),
f[this._hashKey(S,_)]=w,
f[this._hashKey(q,E)]=x,
f[this._hashKey(N,M)]=j,
this.trianglesLen=0,
this._addTriangle(w,x,j,-1,-1,-1);
for(let e=0,t=0,n=0;e<this._ids.length;e++){let r=this._ids[e],
a=u[2*r],
i=u[2*r+1];
if(e>0&&2220446049250313e-31>=Math.abs(a-t)&&2220446049250313e-31>=Math.abs(i-n)||(t=a,n=i,r===w||r===x||r===j))continue;
let s=0;
for(let e=0,t=this._hashKey(a,i);e<this._hashSize&&(-1===(s=f[(t+e)%this._hashSize])||s===d[s]);e++);
let o,
l=s=c[s];
for(;o=d[l],Qo(a,i,u[2*l],u[2*l+1],u[2*o],u[2*o+1])>=0;)if((l=o)===s){l=-1;
break}
if(-1===l)continue;
let p=this._addTriangle(l,r,d[l],-1,-1,h[l]);
h[r]=this._legalize(p+2),
h[l]=p,
L++;
let m=d[l];
for(;o=d[m],0>Qo(a,i,u[2*m],u[2*m+1],u[2*o],u[2*o+1]);)p=this._addTriangle(m,r,o,h[r],-1,h[m]),
h[r]=this._legalize(p+2),
d[m]=m,
L--,
m=o;
if(l===s)for(;0>Qo(a,i,u[2*(o=c[l])],u[2*o+1],u[2*l],u[2*l+1]);)p=this._addTriangle(o,r,l,-1,h[l],h[o]),
this._legalize(p+2),
h[o]=p,
d[l]=l,
L--,
l=o;
this._hullStart=c[r]=l,
d[l]=c[m]=r,
d[r]=m,
f[this._hashKey(a,i)]=r,
f[this._hashKey(u[2*l],u[2*l+1])]=l}
this.hull=new Uint32Array(L);
for(let e=0,t=this._hullStart;e<L;e++)this.hull[e]=t,
t=d[t];
this.triangles=this._triangles.subarray(0,this.trianglesLen),
this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}
_hashKey(e,t){var n,
r;
let a;
return Math.floor((a=(n=e-this._cx)/(Math.abs(n)+Math.abs(r=t-this._cy)),(r>0?3-a:1+a)/4*this._hashSize))%this._hashSize}
_legalize(e){let{_triangles:t,
_halfedges:n,
coords:r}=this,
a=0,
i=0;
for(;;){let s=n[e],
o=e-e%3;
if(i=o+(e+2)%3,-1===s){if(0===a)break;
e=Yo[--a];
continue}
let l=s-s%3,
u=o+(e+1)%3,
c=l+(s+2)%3,
d=t[i],
h=t[e],
f=t[u],
p=t[c];
if(function(e,t,n,r,a,i,s,o){let l=e-s,u=t-o,c=n-s,d=r-o,h=a-s,f=i-o,p=c*c+d*d,m=h*h+f*f;
return l*(d*m-p*f)-u*(c*m-p*h)+(l*l+u*u)*(c*f-d*h)<0}(r[2*d],r[2*d+1],r[2*h],r[2*h+1],r[2*f],r[2*f+1],r[2*p],r[2*p+1])){t[e]=p,
t[s]=d;
let r=n[c];
if(-1===r){let t=this._hullStart;
do{if(this._hullTri[t]===c){this._hullTri[t]=e;
break}
t=this._hullPrev[t]}while(t!==this._hullStart)}
this._link(e,r),
this._link(s,n[i]),
this._link(i,c);
let o=l+(s+1)%3;
a<Yo.length&&(Yo[a++]=o)}else{if(0===a)break;
e=Yo[--a]}}
return i}
_link(e,t){this._halfedges[e]=t,
-1!==t&&(this._halfedges[t]=e)}
_addTriangle(e,t,n,r,a,i){let s=this.trianglesLen;
return this._triangles[s]=e,
this._triangles[s+1]=t,
this._triangles[s+2]=n,
this._link(s,r),
this._link(s+1,a),
this._link(s+2,i),
this.trianglesLen+=3,
s}}
function Xo(e,t,n,r){let a=e-n,
i=t-r;
return a*a+i*i}
function el(e,t,n,r){if(r-n<=20)for(let a=n+1;a<=r;a++){let r=e[a],
i=t[r],
s=a-1;
for(;s>=n&&t[e[s]]>i;)e[s+1]=e[s--];
e[s+1]=r}else{let a=n+1,
i=r;
tl(e,n+r>>1,a),
t[e[n]]>t[e[r]]&&tl(e,n,r),
t[e[a]]>t[e[r]]&&tl(e,a,r),
t[e[n]]>t[e[a]]&&tl(e,n,a);
let s=e[a],
o=t[s];
for(;;){do{a++}while(t[e[a]]<o);
do{i--}while(t[e[i]]>o);
if(i<a)break;
tl(e,a,i)}
e[n+1]=e[i],
e[i]=s,
r-a+1>=i-n?(el(e,t,a,r),el(e,t,n,i-1)):(el(e,t,n,i-1),el(e,t,a,r))}}
function tl(e,t,n){let r=e[t];
e[t]=e[n],
e[n]=r}
function nl(e){return e[0]}
function rl(e){return e[1]}
class al{constructor(){this._x0=this._y0=this._x1=this._y1=null,
this._=""}
moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}
closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}
lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}
arc(e,t,n){let r=(e*=1)+(n*=1),
a=t*=1;
if(n<0)throw Error("negative radius");
null===this._x1?this._+=`M${r},${a}`:(Math.abs(this._x1-r)>1e-6||Math.abs(this._y1-a)>1e-6)&&(this._+="L"+r+","+a),
n&&(this._+=`A${n},${n},0,1,1,${e-n},${t}A${n},${n},0,1,1,${this._x1=r},${this._y1=a}`)}
rect(e,t,n,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+n}v${+r}h${-n}Z`}
value(){return this._||null}}
class il{constructor(){this._=[]}
moveTo(e,t){this._.push([e,t])}
closePath(){this._.push(this._[0].slice())}
lineTo(e,t){this._.push([e,t])}
value(){return this._.length?this._:null}}
class sl{constructor(e,[t,n,r,a]=[0,0,960,500]){if(!((r*=1)>=(t*=1)&&(a*=1)>=(n*=1)))throw Error("invalid bounds");
this.delaunay=e,
this._circumcenters=new Float64Array(2*e.points.length),
this.vectors=new Float64Array(2*e.points.length),
this.xmax=r,
this.xmin=t,
this.ymax=a,
this.ymin=n,
this._init()}
update(){return this.delaunay.update(),
this._init(),
this}
_init(){let e,
t,
{delaunay:{points:n,
hull:r,
triangles:a},
vectors:i}=this,
s=this.circumcenters=this._circumcenters.subarray(0,a.length/3*2);
for(let i,o,l=0,u=0,c=a.length;l<c;l+=3,u+=2){let c=2*a[l],
d=2*a[l+1],
h=2*a[l+2],
f=n[c],
p=n[c+1],
m=n[d],
g=n[d+1],
v=n[h],
b=n[h+1],
y=m-f,
k=g-p,
w=v-f,
x=b-p,
j=2*(y*x-k*w);
if(1e-9>Math.abs(j)){if(void 0===e){for(let a of(e=t=0,r))e+=n[2*a],
t+=n[2*a+1];
e/=r.length,
t/=r.length}
let a=1e9*Math.sign((e-f)*x-(t-p)*w);
i=(f+v)/2-a*x,
o=(p+b)/2+a*w}else{let e=1/j,
t=y*y+k*k,
n=w*w+x*x;
i=f+(x*t-k*n)*e,
o=p+(y*n-w*t)*e}
s[u]=i,
s[u+1]=o}
let o,
l,
u,
c=r[r.length-1],
d=4*c,
h=n[2*c],
f=n[2*c+1];
i.fill(0);
for(let e=0;e<r.length;++e)c=r[e],
o=d,
l=h,
u=f,
d=4*c,
h=n[2*c],
f=n[2*c+1],
i[o+2]=i[d]=u-f,
i[o+3]=i[d+1]=h-l}
render(e){let t=null==e?e=new al:void 0,
{delaunay:{halfedges:n,
inedges:r,
hull:a},
circumcenters:i,
vectors:s}=this;
if(a.length<=1)return null;
for(let t=0,r=n.length;t<r;++t){let r=n[t];
if(r<t)continue;
let a=2*Math.floor(t/3),
s=2*Math.floor(r/3),
o=i[a],
l=i[a+1],
u=i[s],
c=i[s+1];
this._renderSegment(o,l,u,c,e)}
let o,
l=a[a.length-1];
for(let t=0;t<a.length;++t){o=l;
let n=2*Math.floor(r[l=a[t]]/3),
u=i[n],
c=i[n+1],
d=4*o,
h=this._project(u,c,s[d+2],s[d+3]);
h&&this._renderSegment(u,c,h[0],h[1],e)}
return t&&t.value()}
renderBounds(e){let t=null==e?e=new al:void 0;
return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),
t&&t.value()}
renderCell(e,t){let n=null==t?t=new al:void 0,
r=this._clip(e);
if(null===r||!r.length)return;
t.moveTo(r[0],r[1]);
let a=r.length;
for(;r[0]===r[a-2]&&r[1]===r[a-1]&&a>1;)a-=2;
for(let e=2;e<a;e+=2)(r[e]!==r[e-2]||r[e+1]!==r[e-1])&&t.lineTo(r[e],r[e+1]);
return t.closePath(),
n&&n.value()}*cellPolygons(){let{delaunay:{points:e}}=this;
for(let t=0,n=e.length/2;t<n;++t){let e=this.cellPolygon(t);
e&&(e.index=t,yield e)}}
cellPolygon(e){let t=new il;
return this.renderCell(e,t),
t.value()}
_renderSegment(e,t,n,r,a){let i,
s=this._regioncode(e,t),
o=this._regioncode(n,r);
0===s&&0===o?(a.moveTo(e,t),a.lineTo(n,r)):(i=this._clipSegment(e,t,n,r,s,o))&&(a.moveTo(i[0],i[1]),a.lineTo(i[2],i[3]))}
contains(e,t,n){return(t*=1)==t&&(n*=1)==n&&this.delaunay._step(e,t,n)===e}*neighbors(e){let t=this._clip(e);
if(t)for(let n of this.delaunay.neighbors(e)){let e=this._clip(n);
if(e)e:for(let r=0,a=t.length;r<a;r+=2)for(let i=0,s=e.length;i<s;i+=2)if(t[r]===e[i]&&t[r+1]===e[i+1]&&t[(r+2)%a]===e[(i+s-2)%s]&&t[(r+3)%a]===e[(i+s-1)%s]){yield n;
break e}}}
_cell(e){let{circumcenters:t,
delaunay:{inedges:n,
halfedges:r,
triangles:a}}=this,
i=n[e];
if(-1===i)return null;
let s=[],
o=i;
do{let n=Math.floor(o/3);
if(s.push(t[2*n],t[2*n+1]),a[o=o%3==2?o-2:o+1]!==e)break;
o=r[o]}while(o!==i&&-1!==o);
return s}
_clip(e){if(0===e&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];
let t=this._cell(e);
if(null===t)return null;
let{vectors:n}=this,
r=4*e;
return this._simplify(n[r]||n[r+1]?this._clipInfinite(e,t,n[r],n[r+1],n[r+2],n[r+3]):this._clipFinite(e,t))}
_clipFinite(e,t){let n,
r,
a,
i,
s=t.length,
o=null,
l=t[s-2],
u=t[s-1],
c=this._regioncode(l,u),
d=0;
for(let h=0;h<s;h+=2)if(n=l,r=u,l=t[h],u=t[h+1],a=c,c=this._regioncode(l,u),0===a&&0===c)i=d,
d=0,
o?o.push(l,u):o=[l,u];
else{let t,
s,
h,
f,
p;
if(0===a){if(null===(t=this._clipSegment(n,r,l,u,a,c)))continue;
[s,h,f,p]=t}else{if(null===(t=this._clipSegment(l,u,n,r,c,a)))continue;
[f,p,s,h]=t,
i=d,
d=this._edgecode(s,h),
i&&d&&this._edge(e,i,d,o,o.length),
o?o.push(s,h):o=[s,h]}
i=d,
d=this._edgecode(f,p),
i&&d&&this._edge(e,i,d,o,o.length),
o?o.push(f,p):o=[f,p]}
if(o)i=d,
d=this._edgecode(o[0],o[1]),
i&&d&&this._edge(e,i,d,o,o.length);
else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];
return o}
_clipSegment(e,t,n,r,a,i){let s=a<i;
for(s&&([e,t,n,r,a,i]=[n,r,e,t,i,a]);;){if(0===a&&0===i)return s?[n,r,e,t]:[e,t,n,r];
if(a&i)return null;
let o,
l,
u=a||i;
8&u?(o=e+(n-e)*(this.ymax-t)/(r-t),l=this.ymax):4&u?(o=e+(n-e)*(this.ymin-t)/(r-t),l=this.ymin):2&u?(l=t+(r-t)*(this.xmax-e)/(n-e),o=this.xmax):(l=t+(r-t)*(this.xmin-e)/(n-e),o=this.xmin),
a?(e=o,t=l,a=this._regioncode(e,t)):(n=o,r=l,i=this._regioncode(n,r))}}
_clipInfinite(e,t,n,r,a,i){let s,
o=Array.from(t);
if((s=this._project(o[0],o[1],n,r))&&o.unshift(s[0],s[1]),(s=this._project(o[o.length-2],o[o.length-1],a,i))&&o.push(s[0],s[1]),o=this._clipFinite(e,o))for(let t,n=0,r=o.length,a=this._edgecode(o[r-2],o[r-1]);n<r;n+=2)t=a,
a=this._edgecode(o[n],o[n+1]),
t&&a&&(n=this._edge(e,t,a,o,n),r=o.length);
else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(o=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);
return o}
_edge(e,t,n,r,a){for(;t!==n;){let n,
i;
switch(t){case 5:t=4;
continue;
case 4:t=6,
n=this.xmax,
i=this.ymin;
break;
case 6:t=2;
continue;
case 2:t=10,
n=this.xmax,
i=this.ymax;
break;
case 10:t=8;
continue;
case 8:t=9,
n=this.xmin,
i=this.ymax;
break;
case 9:t=1;
continue;
case 1:t=5,
n=this.xmin,
i=this.ymin}(r[a]!==n||r[a+1]!==i)&&this.contains(e,n,i)&&(r.splice(a,0,n,i),a+=2)}
return a}
_project(e,t,n,r){let a,
i,
s,
o=1/0;
if(r<0){if(t<=this.ymin)return null;
(a=(this.ymin-t)/r)<o&&(s=this.ymin,i=e+(o=a)*n)}else if(r>0){if(t>=this.ymax)return null;
(a=(this.ymax-t)/r)<o&&(s=this.ymax,i=e+(o=a)*n)}
if(n>0){if(e>=this.xmax)return null;
(a=(this.xmax-e)/n)<o&&(i=this.xmax,s=t+(o=a)*r)}else if(n<0){if(e<=this.xmin)return null;
(a=(this.xmin-e)/n)<o&&(i=this.xmin,s=t+(o=a)*r)}
return[i,s]}
_edgecode(e,t){return(e===this.xmin?1:2*(e===this.xmax))|(t===this.ymin?4:8*(t===this.ymax))}
_regioncode(e,t){return(e<this.xmin?1:2*(e>this.xmax))|(t<this.ymin?4:8*(t>this.ymax))}
_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){let n=(t+2)%e.length,
r=(t+4)%e.length;
(e[t]===e[n]&&e[n]===e[r]||e[t+1]===e[n+1]&&e[n+1]===e[r+1])&&(e.splice(n,2),t-=2)}
e.length||(e=null)}
return e}}
let ol=2*Math.PI,
ll=Math.pow;
function ul(e){return e[0]}
function cl(e){return e[1]}
class dl{static from(e,t=ul,n=cl,r){return new dl("length"in e?function(e,t,n,r){let a=e.length,i=new Float64Array(2*a);
for(let s=0;s<a;++s){let a=e[s];
i[2*s]=t.call(r,a,s,e),i[2*s+1]=n.call(r,a,s,e)}
return i}(e,t,n,r):Float64Array.from(function*(e,t,n,r){let a=0;
for(let i of e)yield t.call(r,i,a,e),yield n.call(r,i,a,e),++a}(e,t,n,r)))}
constructor(e){this._delaunator=new Jo(e),
this.inedges=new Int32Array(e.length/2),
this._hullIndex=new Int32Array(e.length/2),
this.points=this._delaunator.coords,
this._init()}
update(){return this._delaunator.update(),
this._init(),
this}
_init(){let e=this._delaunator,
t=this.points;
if(e.hull&&e.hull.length>2&&function(e){let{triangles:t,coords:n}=e;
for(let e=0;e<t.length;e+=3){let r=2*t[e],a=2*t[e+1],i=2*t[e+2];
if((n[i]-n[r])*(n[a+1]-n[r+1])-(n[a]-n[r])*(n[i+1]-n[r+1])>1e-10)return!1}
return!0}(e)){this.collinear=Int32Array.from({length:t.length/2},(e,t)=>t).sort((e,n)=>t[2*e]-t[2*n]||t[2*e+1]-t[2*n+1]);
let e=this.collinear[0]<<1,
n=this.collinear[this.collinear.length-1]<<1,
r=1e-9*Math.hypot(t[n]-t[e],t[n+1]-t[e+1]);
for(let e=0;e<t.length;++e)t[e]+=r*Math.sin(e+.5);
this._delaunator=new Jo(t)}else delete this.collinear;
let n=this.halfedges=this._delaunator.halfedges,
r=this.hull=this._delaunator.hull,
a=this.triangles=this._delaunator.triangles,
i=this.inedges.fill(-1),
s=this._hullIndex.fill(-1);
for(let e=0,t=n.length;e<t;++e){let t=a[e%3==2?e-2:e+1];
(-1===n[e]||-1===i[t])&&(i[t]=e)}
for(let e=0,t=r.length;e<t;++e)s[r[e]]=e;
r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],i[r[0]]=1,2===r.length&&(i[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}
voronoi(e){return new sl(this,e)}*neighbors(e){let{inedges:t,
hull:n,
_hullIndex:r,
halfedges:a,
triangles:i,
collinear:s}=this;
if(s){let t=s.indexOf(e);
return t>0&&(yield s[t-1]),
void(t<s.length-1&&(yield s[t+1]))}
let o=t[e];
if(-1===o)return;
let l=o,
u=-1;
do{if(yield u=i[l],i[l=l%3==2?l-2:l+1]!==e)return;
if(-1===(l=a[l])){let t=n[(r[e]+1)%n.length];
return void(t!==u&&(yield t))}}while(l!==o)}
find(e,t,n=0){let r;
if((e*=1)!=e||(t*=1)!=t)return-1;
let a=n;
for(;(r=this._step(n,e,t))>=0&&r!==n&&r!==a;)n=r;
return r}
_step(e,t,n){let{inedges:r,
hull:a,
_hullIndex:i,
halfedges:s,
triangles:o,
points:l}=this;
if(l.length<2)return-1;
if(-1===r[e])return(e+1)%(l.length>>1);
let u=e,
c=ll(t-l[2*e],2)+ll(n-l[2*e+1],2),
d=r[e],
h=d;
do{let r=o[h],
d=ll(t-l[2*r],2)+ll(n-l[2*r+1],2);
if(d<c&&(c=d,u=r),o[h=h%3==2?h-2:h+1]!==e)break;
if(-1===(h=s[h])){if((h=a[(i[e]+1)%a.length])!==r&&ll(t-l[2*h],2)+ll(n-l[2*h+1],2)<c)return h;
break}}while(h!==d);
return u}
render(e){let t=null==e?e=new al:void 0,
{points:n,
halfedges:r,
triangles:a}=this;
for(let t=0,i=r.length;t<i;++t){let i=r[t];
if(i<t)continue;
let s=2*a[t],
o=2*a[i];
e.moveTo(n[s],n[s+1]),
e.lineTo(n[o],n[o+1])}
return this.renderHull(e),
t&&t.value()}
renderPoints(e,t){void 0!==t||e&&"function"==typeof e.moveTo||(t=e,e=null),
t=null==t?2:+t;
let n=null==e?e=new al:void 0,
{points:r}=this;
for(let n=0,a=-2&r.length;n<a;n+=2){let a=r[n],
i=r[n+1];
e.moveTo(a+t,i),
e.arc(a,i,t,0,ol)}
return n&&n.value()}
renderHull(e){let t=null==e?e=new al:void 0,
{hull:n,
points:r}=this,
a=2*n[0],
i=n.length;
e.moveTo(r[a],r[a+1]);
for(let t=1;t<i;++t){let a=2*n[t];
e.lineTo(r[a],r[a+1])}
return e.closePath(),
t&&t.value()}
hullPolygon(){let e=new il;
return this.renderHull(e),
e.value()}
renderTriangle(e,t){let n=null==t?t=new al:void 0,
{points:r,
triangles:a}=this,
i=2*a[e*=3],
s=2*a[e+1],
o=2*a[e+2];
return t.moveTo(r[i],r[i+1]),
t.lineTo(r[s],r[s+1]),
t.lineTo(r[o],r[o+1]),
t.closePath(),
n&&n.value()}*trianglePolygons(){let{triangles:e}=this;
for(let t=0,n=e.length/3;t<n;++t)yield this.trianglePolygon(t)}
trianglePolygon(e){let t=new il;
return this.renderTriangle(e,t),
t.value()}}
var hl=Math.PI,
fl=hl/2,
pl=hl/4,
ml=2*hl,
gl=180/hl,
vl=hl/180,
bl=Math.abs,
yl=Math.atan,
kl=Math.atan2,
wl=Math.cos,
xl=Math.exp,
jl=(Math.hypot,Math.log),
Sl=Math.pow,
_l=Math.sin,
ql=Math.sign||function(e){return e>0?1:e<0?-1:0},
El=Math.sqrt,
zl=Math.tan;
function Nl(e){return e>1?0:e<-1?hl:Math.acos(e)}
function Ml(e){return e>1?fl:e<-1?-fl:Math.asin(e)}
function Cl(){}
function Ll(e,t){e&&Al.hasOwnProperty(e.type)&&Al[e.type](e,t)}
var Tl={Feature:function(e,t){Ll(e.geometry,t)},
FeatureCollection:function(e,t){for(var n=e.features,r=-1,a=n.length;++r<a;)Ll(n[r].geometry,t)}},
Al={Sphere:function(e,t){t.sphere()},
Point:function(e,t){e=e.coordinates,
t.point(e[0],e[1],e[2])},
MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)e=n[r],
t.point(e[0],e[1],e[2])},
LineString:function(e,t){Pl(e.coordinates,t,0)},
MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)Pl(n[r],t,0)},
Polygon:function(e,t){Il(e.coordinates,t)},
MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)Il(n[r],t)},
GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,a=n.length;++r<a;)Ll(n[r],t)}};
function Pl(e,t,n){var r,
a=-1,
i=e.length-n;
for(t.lineStart();++a<i;)r=e[a],
t.point(r[0],r[1],r[2]);
t.lineEnd()}
function Il(e,t){var n=-1,
r=e.length;
for(t.polygonStart();++n<r;)Pl(e[n],t,1);
t.polygonEnd()}
function Rl(e,t){e&&Tl.hasOwnProperty(e.type)?Tl[e.type](e,t):Ll(e,t)}
var Ol,
Dl,
Fl,
Bl,
Kl,
Gl=new qi,
Ul=new qi,
Hl={point:Cl,
lineStart:Cl,
lineEnd:Cl,
polygonStart:function(){Gl=new qi,
Hl.lineStart=Wl,
Hl.lineEnd=$l},
polygonEnd:function(){var e=+Gl;
Ul.add(e<0?ml+e:e),
this.lineStart=this.lineEnd=this.point=Cl},
sphere:function(){Ul.add(ml)}};
function Wl(){Hl.point=Vl}
function $l(){Zl(Ol,Dl)}
function Vl(e,t){Hl.point=Zl,
Ol=e,
Dl=t,
Fl=e*=vl,
Bl=wl(t=(t*=vl)/2+pl),
Kl=_l(t)}
function Zl(e,t){var n=(e*=vl)-Fl,
r=n>=0?1:-1,
a=r*n,
i=wl(t=(t*=vl)/2+pl),
s=_l(t),
o=Kl*s,
l=Bl*i+o*wl(a),
u=o*r*_l(a);
Gl.add(kl(u,l)),
Fl=e,
Bl=i,
Kl=s}
function Ql(e){return[kl(e[1],e[0]),Ml(e[2])]}
function Yl(e){var t=e[0],
n=e[1],
r=wl(n);
return[r*wl(t),r*_l(t),_l(n)]}
function Jl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}
function Xl(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}
function eu(e,t){e[0]+=t[0],
e[1]+=t[1],
e[2]+=t[2]}
function tu(e,t){return[e[0]*t,e[1]*t,e[2]*t]}
function nu(e){var t=El(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);
e[0]/=t,
e[1]/=t,
e[2]/=t}
var ru={point:au,
lineStart:su,
lineEnd:ou,
polygonStart:function(){ru.point=lu,
ru.lineStart=uu,
ru.lineEnd=cu,
tc=new qi,
Hl.polygonStart()},
polygonEnd:function(){Hl.polygonEnd(),
ru.point=au,
ru.lineStart=su,
ru.lineEnd=ou,
Gl<0?($u=-(Zu=180),Vu=-(Qu=90)):tc>1e-6?Qu=90:tc<-1e-6&&(Vu=-90),
rc[0]=$u,
rc[1]=Zu},
sphere:function(){$u=-(Zu=180),
Vu=-(Qu=90)}};
function au(e,t){nc.push(rc=[$u=e,Zu=e]),
t<Vu&&(Vu=t),
t>Qu&&(Qu=t)}
function iu(e,t){var n=Yl([e*vl,t*vl]);
if(ec){var r=Xl(ec,n),
a=Xl([r[1],-r[0],0],r);
nu(a),
a=Ql(a);
var i,
s=e-Yu,
o=s>0?1:-1,
l=a[0]*gl*o,
u=bl(s)>180;
u^(o*Yu<l&&l<o*e)?(i=a[1]*gl)>Qu&&(Qu=i):u^(o*Yu<(l=(l+360)%360-180)&&l<o*e)?(i=-a[1]*gl)<Vu&&(Vu=i):(t<Vu&&(Vu=t),t>Qu&&(Qu=t)),
u?e<Yu?du($u,e)>du($u,Zu)&&(Zu=e):du(e,Zu)>du($u,Zu)&&($u=e):Zu>=$u?(e<$u&&($u=e),e>Zu&&(Zu=e)):e>Yu?du($u,e)>du($u,Zu)&&(Zu=e):du(e,Zu)>du($u,Zu)&&($u=e)}else nc.push(rc=[$u=e,Zu=e]);
t<Vu&&(Vu=t),
t>Qu&&(Qu=t),
ec=n,
Yu=e}
function su(){ru.point=iu}
function ou(){rc[0]=$u,
rc[1]=Zu,
ru.point=au,
ec=null}
function lu(e,t){if(ec){var n=e-Yu;
tc.add(bl(n)>180?n+(n>0?360:-360):n)}else Ju=e,
Xu=t;
Hl.point(e,t),
iu(e,t)}
function uu(){Hl.lineStart()}
function cu(){lu(Ju,Xu),
Hl.lineEnd(),
bl(tc)>1e-6&&($u=-(Zu=180)),
rc[0]=$u,
rc[1]=Zu,
ec=null}
function du(e,t){return(t-=e)<0?t+360:t}
function hu(e,t){return e[0]-t[0]}
function fu(e,t){return e[0]<=e[1]?e[0]<=t&&t<=e[1]:t<e[0]||e[1]<t}
function pu(e){var t,
n,
r,
a,
i,
s,
o;
if(Qu=Zu=-($u=Vu=1/0),nc=[],Rl(e,ru),n=nc.length){for(nc.sort(hu),t=1,i=[r=nc[0]];t<n;++t)fu(r,(a=nc[t])[0])||fu(r,a[1])?(du(r[0],a[1])>du(r[0],r[1])&&(r[1]=a[1]),du(a[0],r[1])>du(r[0],r[1])&&(r[0]=a[0])):i.push(r=a);
for(s=-1/0,t=0,r=i[n=i.length-1];t<=n;r=a,++t)a=i[t],
(o=du(r[1],a[0]))>s&&(s=o,$u=a[0],Zu=r[1])}
return nc=rc=null,
1/0===$u||1/0===Vu?[[NaN,NaN],[NaN,NaN]]:[[$u,Vu],[Zu,Qu]]}
function mu(e,t){function n(n,r){return t((n=e(n,r))[0],n[1])}
return e.invert&&t.invert&&(n.invert=function(n,r){return(n=t.invert(n,r))&&e.invert(n[0],n[1])}),
n}
function gu(e,t){return bl(e)>hl&&(e-=Math.round(e/ml)*ml),
[e,t]}
function vu(e){return function(t,n){return bl(t+=e)>hl&&(t-=Math.round(t/ml)*ml),
[t,n]}}
function bu(e){var t=vu(e);
return t.invert=vu(-e),
t}
function yu(e,t){var n=wl(e),
r=_l(e),
a=wl(t),
i=_l(t);
function s(e,t){var s=wl(t),
o=wl(e)*s,
l=_l(e)*s,
u=_l(t),
c=u*n+o*r;
return[kl(l*a-c*i,o*n-u*r),Ml(c*a+l*i)]}
return s.invert=function(e,t){var s=wl(t),
o=wl(e)*s,
l=_l(e)*s,
u=_l(t),
c=u*a-l*i;
return[kl(l*a+u*i,o*n+c*r),Ml(c*n-o*r)]},
s}
function ku(e,t){(t=Yl(t))[0]-=e,
nu(t);
var n=Nl(-t[1]);
return((0>-t[2]?-n:n)+ml-1e-6)%ml}
function wu(){var e,
t=[];
return{point:function(t,n,r){e.push([t,n,r])},
lineStart:function(){t.push(e=[])},
lineEnd:Cl,
rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},
result:function(){var n=t;
return t=[],
e=null,
n}}}
function xu(e,t){return 1e-6>bl(e[0]-t[0])&&1e-6>bl(e[1]-t[1])}
function ju(e,t,n,r){this.x=e,
this.z=t,
this.o=n,
this.e=r,
this.v=!1,
this.n=this.p=null}
function Su(e,t,n,r,a){var i,
s,
o=[],
l=[];
if(e.forEach(function(e){if(!((t=e.length-1)<=0)){var t,n,r=e[0],s=e[t];
if(xu(r,s)){if(!r[2]&&!s[2]){for(a.lineStart(),i=0;i<t;++i)a.point((r=e[i])[0],r[1]);
return void a.lineEnd()}
s[0]+=2e-6}
o.push(n=new ju(r,e,null,!0)),l.push(n.o=new ju(r,null,n,!1)),o.push(n=new ju(s,e,null,!1)),l.push(n.o=new ju(s,null,n,!0))}}),o.length){for(l.sort(t),_u(o),_u(l),i=0,s=l.length;i<s;++i)l[i].e=n=!n;
for(var u,c,d=o[0];;){for(var h=d,f=!0;h.v;)if((h=h.n)===d)return;
u=h.z,
a.lineStart();
do{if(h.v=h.o.v=!0,h.e){if(f)for(i=0,s=u.length;i<s;++i)a.point((c=u[i])[0],c[1]);
else r(h.x,h.n.x,1,a);
h=h.n}else{if(f)for(i=(u=h.p.z).length-1;i>=0;--i)a.point((c=u[i])[0],c[1]);
else r(h.x,h.p.x,-1,a);
h=h.p}
u=(h=h.o).z,
f=!f}while(!h.v);
a.lineEnd()}}}
function _u(e){if(t=e.length){for(var t,n,r=0,a=e[0];++r<t;)a.n=n=e[r],
n.p=a,
a=n;
a.n=n=e[0],
n.p=a}}
function qu(e){return bl(e[0])<=hl?e[0]:ql(e[0])*((bl(e[0])+hl)%ml-hl)}
function Eu(e,t){var n=qu(t),
r=t[1],
a=_l(r),
i=[_l(n),-wl(n),0],
s=0,
o=0,
l=new qi;
1===a?r=fl+1e-6:-1===a&&(r=-fl-1e-6);
for(var u=0,c=e.length;u<c;++u)if(h=(d=e[u]).length)for(var d,h,f=d[h-1],p=qu(f),m=f[1]/2+pl,g=_l(m),v=wl(m),b=0;b<h;++b,p=k,g=x,v=j,f=y){var y=d[b],
k=qu(y),
w=y[1]/2+pl,
x=_l(w),
j=wl(w),
S=k-p,
_=S>=0?1:-1,
q=_*S,
E=q>hl,
z=g*x;
if(l.add(kl(z*_*_l(q),v*j+z*wl(q))),s+=E?S+_*ml:S,E^p>=n^k>=n){var N=Xl(Yl(f),Yl(y));
nu(N);
var M=Xl(i,N);
nu(M);
var C=(E^S>=0?-1:1)*Ml(M[2]);
(r>C||r===C&&(N[0]||N[1]))&&(o+=E^S>=0?1:-1)}}
return(s<-1e-6||s<1e-6&&l<-1e-12)^1&o}
function zu(e,t,n,r){return function(a){var i,
s,
o,
l=t(a),
u=wu(),
c=t(u),
d=!1,
h={point:f,
lineStart:m,
lineEnd:g,
polygonStart:function(){h.point=v,
h.lineStart=b,
h.lineEnd=y,
s=[],
i=[]},
polygonEnd:function(){h.point=f,
h.lineStart=m,
h.lineEnd=g,
s=zi(s);
var e=Eu(i,r);
s.length?(d||(a.polygonStart(),d=!0),Su(s,Mu,e,n,a)):e&&(d||(a.polygonStart(),d=!0),a.lineStart(),n(null,null,1,a),a.lineEnd()),
d&&(a.polygonEnd(),d=!1),
s=i=null},
sphere:function(){a.polygonStart(),
a.lineStart(),
n(null,null,1,a),
a.lineEnd(),
a.polygonEnd()}};
function f(t,n){e(t,n)&&a.point(t,n)}
function p(e,t){l.point(e,t)}
function m(){h.point=p,
l.lineStart()}
function g(){h.point=f,
l.lineEnd()}
function v(e,t){o.push([e,t]),
c.point(e,t)}
function b(){c.lineStart(),
o=[]}
function y(){v(o[0][0],o[0][1]),
c.lineEnd();
var e,
t,
n,
r,
l=c.clean(),
h=u.result(),
f=h.length;
if(o.pop(),i.push(o),o=null,f){if(1&l){if((t=(n=h[0]).length-1)>0){for(d||(a.polygonStart(),d=!0),a.lineStart(),e=0;e<t;++e)a.point((r=n[e])[0],r[1]);
a.lineEnd()}
return}
f>1&&2&l&&h.push(h.pop().concat(h.shift())),
s.push(h.filter(Nu))}}
return h}}
function Nu(e){return e.length>1}
function Mu(e,t){return((e=e.x)[0]<0?e[1]-fl-1e-6:fl-e[1])-((t=t.x)[0]<0?t[1]-fl-1e-6:fl-t[1])}
gu.invert=gu;
var Cu=zu(function(){return!0},function(e){var t,n=NaN,r=NaN,a=NaN;
return{lineStart:function(){e.lineStart(),t=1},point:function(i,s){var o,l,u,c,d,h,f,p=i>0?hl:-hl,m=bl(i-n);
1e-6>bl(m-hl)?(e.point(n,r=(r+s)/2>0?fl:-fl),e.point(a,r),e.lineEnd(),e.lineStart(),e.point(p,r),e.point(i,r),t=0):a!==p&&m>=hl&&(1e-6>bl(n-a)&&(n-=1e-6*a),1e-6>bl(i-p)&&(i-=1e-6*p),l=r,c=s,r=bl(f=_l((o=n)-(u=i)))>1e-6?yl((_l(l)*(h=wl(c))*_l(u)-_l(c)*(d=wl(l))*_l(o))/(d*h*f)):(l+c)/2,e.point(a,r),e.lineEnd(),e.lineStart(),e.point(p,r),t=0),e.point(n=i,r=s),a=p},lineEnd:function(){e.lineEnd(),n=r=NaN},clean:function(){return 2-t}}},function(e,t,n,r){var a;
if(null==e)a=n*fl,r.point(-hl,a),r.point(0,a),r.point(hl,a),r.point(hl,0),r.point(hl,-a),r.point(0,-a),r.point(-hl,-a),r.point(-hl,0),r.point(-hl,a);
else if(bl(e[0]-t[0])>1e-6){var i=e[0]<t[0]?hl:-hl;
a=n*i/2,r.point(-i,a),r.point(0,a),r.point(i,a)}else r.point(t[0],t[1])},[-hl,-fl]),
Lu={sphere:Cl,
point:Cl,
lineStart:function(){Lu.point=Au,
Lu.lineEnd=Tu},
lineEnd:Cl,
polygonStart:Cl,
polygonEnd:Cl};
function Tu(){Lu.point=Lu.lineEnd=Cl}
function Au(e,t){ic=e*=vl,
sc=_l(t*=vl),
oc=wl(t),
Lu.point=Pu}
function Pu(e,t){e*=vl;
var n=_l(t*=vl),
r=wl(t),
a=bl(e-ic),
i=wl(a),
s=r*_l(a),
o=oc*n-sc*r*i,
l=sc*n+oc*r*i;
ac.add(kl(El(s*s+o*o),l)),
ic=e,
sc=n,
oc=r}
var Iu=[null,null],
Ru={type:"LineString",
coordinates:Iu};
function Ou(e,t){return Iu[0]=e,
Iu[1]=t,
ac=new qi,
Rl(Ru,Lu),
+ac}
var Du={Feature:function(e,t){return Bu(e.geometry,t)},
FeatureCollection:function(e,t){for(var n=e.features,r=-1,a=n.length;++r<a;)if(Bu(n[r].geometry,t))return!0;
return!1}},
Fu={Sphere:function(){return!0},
Point:function(e,t){return 0===Ou(e.coordinates,t)},
MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if(0===Ou(n[r],t))return!0;
return!1},
LineString:function(e,t){return Ku(e.coordinates,t)},
MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if(Ku(n[r],t))return!0;
return!1},
Polygon:function(e,t){return Gu(e.coordinates,t)},
MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,a=n.length;++r<a;)if(Gu(n[r],t))return!0;
return!1},
GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,a=n.length;++r<a;)if(Bu(n[r],t))return!0;
return!1}};
function Bu(e,t){return!(!e||!Fu.hasOwnProperty(e.type))&&Fu[e.type](e,t)}
function Ku(e,t){for(var n,r,a,i=0,s=e.length;i<s;i++){if(0===(r=Ou(e[i],t))||i>0&&(a=Ou(e[i],e[i-1]))>0&&n<=a&&r<=a&&(n+r-a)*(1-Math.pow((n-r)/a,2))<1e-12*a)return!0;
n=r}
return!1}
function Gu(e,t){return!!Eu(e.map(Uu),Hu(t))}
function Uu(e){return(e=e.map(Hu)).pop(),
e}
function Hu(e){return[e[0]*vl,e[1]*vl]}
function Wu(e,t){return(e&&Du.hasOwnProperty(e.type)?Du[e.type]:Bu)(e,t)}
var $u,
Vu,
Zu,
Qu,
Yu,
Ju,
Xu,
ec,
tc,
nc,
rc,
ac,
ic,
sc,
oc,
lc,
uc,
cc,
dc,
hc=e=>e,
fc=new qi,
pc=new qi,
mc={point:Cl,
lineStart:Cl,
lineEnd:Cl,
polygonStart:function(){mc.lineStart=gc,
mc.lineEnd=yc},
polygonEnd:function(){mc.lineStart=mc.lineEnd=mc.point=Cl,
fc.add(bl(pc)),
pc=new qi},
result:function(){var e=fc/2;
return fc=new qi,
e}};
function gc(){mc.point=vc}
function vc(e,t){mc.point=bc,
lc=cc=e,
uc=dc=t}
function bc(e,t){pc.add(dc*e-cc*t),
cc=e,
dc=t}
function yc(){bc(lc,uc)}
var kc,
wc,
xc,
jc,
Sc=1/0,
_c=1/0,
qc=-1/0,
Ec=-1/0,
zc={point:function(e,t){e<Sc&&(Sc=e),
e>qc&&(qc=e),
t<_c&&(_c=t),
t>Ec&&(Ec=t)},
lineStart:Cl,
lineEnd:Cl,
polygonStart:Cl,
polygonEnd:Cl,
result:function(){var e=[[Sc,_c],[qc,Ec]];
return qc=Ec=-(_c=Sc=1/0),
e}},
Nc=0,
Mc=0,
Cc=0,
Lc=0,
Tc=0,
Ac=0,
Pc=0,
Ic=0,
Rc=0,
Oc={point:Dc,
lineStart:Fc,
lineEnd:Gc,
polygonStart:function(){Oc.lineStart=Uc,
Oc.lineEnd=Hc},
polygonEnd:function(){Oc.point=Dc,
Oc.lineStart=Fc,
Oc.lineEnd=Gc},
result:function(){var e=Rc?[Pc/Rc,Ic/Rc]:Ac?[Lc/Ac,Tc/Ac]:Cc?[Nc/Cc,Mc/Cc]:[NaN,NaN];
return Nc=Mc=Cc=Lc=Tc=Ac=Pc=Ic=Rc=0,
e}};
function Dc(e,t){Nc+=e,
Mc+=t,
++Cc}
function Fc(){Oc.point=Bc}
function Bc(e,t){Oc.point=Kc,
Dc(xc=e,jc=t)}
function Kc(e,t){var n=e-xc,
r=t-jc,
a=El(n*n+r*r);
Lc+=a*(xc+e)/2,
Tc+=a*(jc+t)/2,
Ac+=a,
Dc(xc=e,jc=t)}
function Gc(){Oc.point=Dc}
function Uc(){Oc.point=Wc}
function Hc(){$c(kc,wc)}
function Wc(e,t){Oc.point=$c,
Dc(kc=xc=e,wc=jc=t)}
function $c(e,t){var n=e-xc,
r=t-jc,
a=El(n*n+r*r);
Lc+=a*(xc+e)/2,
Tc+=a*(jc+t)/2,
Ac+=a,
Pc+=(a=jc*e-xc*t)*(xc+e),
Ic+=a*(jc+t),
Rc+=3*a,
Dc(xc=e,jc=t)}
function Vc(e){this._context=e}
Vc.prototype={_radius:4.5,
pointRadius:function(e){return this._radius=e,
this},
polygonStart:function(){this._line=0},
polygonEnd:function(){this._line=NaN},
lineStart:function(){this._point=0},
lineEnd:function(){0===this._line&&this._context.closePath(),
this._point=NaN},
point:function(e,t){switch(this._point){case 0:this._context.moveTo(e,t),
this._point=1;
break;
case 1:this._context.lineTo(e,t);
break;
default:this._context.moveTo(e+this._radius,t),
this._context.arc(e,t,this._radius,0,ml)}},
result:Cl};
var Zc,
Qc,
Yc,
Jc,
Xc,
ed=new qi,
td={point:Cl,
lineStart:function(){td.point=nd},
lineEnd:function(){Zc&&rd(Qc,Yc),
td.point=Cl},
polygonStart:function(){Zc=!0},
polygonEnd:function(){Zc=null},
result:function(){var e=+ed;
return ed=new qi,
e}};
function nd(e,t){td.point=rd,
Qc=Jc=e,
Yc=Xc=t}
function rd(e,t){Jc-=e,
Xc-=t,
ed.add(El(Jc*Jc+Xc*Xc)),
Jc=e,
Xc=t}
class ad{constructor(n){this._append=null==n?id:function(n){let r=Math.floor(n);
if(!(r>=0))throw RangeError(`invalid digits: ${n}`);
if(r>15)return id;
if(r!==e){let n=10**r;
e=r,
t=function(e){let t=1;
this._+=e[0];
for(let r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}
return t}(n),
this._radius=4.5,
this._=""}
pointRadius(e){return this._radius=+e,
this}
polygonStart(){this._line=0}
polygonEnd(){this._line=NaN}
lineStart(){this._point=0}
lineEnd(){0===this._line&&(this._+="Z"),
this._point=NaN}
point(e,a){switch(this._point){case 0:this._append`M${e},${a}`,
this._point=1;
break;
case 1:this._append`L${e},${a}`;
break;
default:if(this._append`M${e},${a}`,this._radius!==n||this._append!==t){let e=this._radius,
a=this._;
this._="",
this._append`m0,${e}a${e},${e} 0 1,1 0,${-2*e}a${e},${e} 0 1,1 0,${2*e}z`,
n=e,
t=this._append,
r=this._,
this._=a}
this._+=r}}
result(){let e=this._;
return this._="",
e.length?e:null}}
function id(e){let t=1;
this._+=e[0];
for(let n=e.length;t<n;++t)this._+=arguments[t]+e[t]}
function sd(e,t){let n,
r,
a=3,
i=4.5;
function s(e){return e&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Rl(e,n(r))),
r.result()}
return s.area=function(e){return Rl(e,n(mc)),
mc.result()},
s.measure=function(e){return Rl(e,n(td)),
td.result()},
s.bounds=function(e){return Rl(e,n(zc)),
zc.result()},
s.centroid=function(e){return Rl(e,n(Oc)),
Oc.result()},
s.projection=function(t){return arguments.length?(n=null==t?(e=null,hc):(e=t).stream,s):e},
s.context=function(e){return arguments.length?(r=null==e?(t=null,new ad(a)):new Vc(t=e),"function"!=typeof i&&r.pointRadius(i),s):t},
s.pointRadius=function(e){return arguments.length?(i="function"==typeof e?e:(r.pointRadius(+e),+e),s):i},
s.digits=function(e){if(!arguments.length)return a;
if(null==e)a=null;
else{let t=Math.floor(e);
if(!(t>=0))throw RangeError(`invalid digits: ${e}`);
a=t}
return null===t&&(r=new ad(a)),
s},
s.projection(e).digits(a).context(t)}
function od(e){return function(t){var n=new ld;
for(var r in e)n[r]=e[r];
return n.stream=t,
n}}
function ld(){}
function ud(e,t,n){var r=e.clipExtent&&e.clipExtent();
return e.scale(150).translate([0,0]),
null!=r&&e.clipExtent(null),
Rl(n,e.stream(zc)),
t(zc.result()),
null!=r&&e.clipExtent(r),
e}
function cd(e,t,n){return ud(e,function(n){var r=t[1][0]-t[0][0],a=t[1][1]-t[0][1],i=Math.min(r/(n[1][0]-n[0][0]),a/(n[1][1]-n[0][1])),s=+t[0][0]+(r-i*(n[1][0]+n[0][0]))/2,o=+t[0][1]+(a-i*(n[1][1]+n[0][1]))/2;
e.scale(150*i).translate([s,o])},n)}
ld.prototype={constructor:ld,
point:function(e,t){this.stream.point(e,t)},
sphere:function(){this.stream.sphere()},
lineStart:function(){this.stream.lineStart()},
lineEnd:function(){this.stream.lineEnd()},
polygonStart:function(){this.stream.polygonStart()},
polygonEnd:function(){this.stream.polygonEnd()}};
var dd=wl(30*vl);
function hd(e,t){var n;
return+t?function(e,t){function n(r,a,i,s,o,l,u,c,d,h,f,p,m,g){var v=u-r,
b=c-a,
y=v*v+b*b;
if(y>4*t&&m--){var k=s+h,
w=o+f,
x=l+p,
j=El(k*k+w*w+x*x),
S=Ml(x/=j),
_=1e-6>bl(bl(x)-1)||1e-6>bl(i-d)?(i+d)/2:kl(w,k),
q=e(_,S),
E=q[0],
z=q[1],
N=E-r,
M=z-a,
C=b*N-v*M;
(C*C/y>t||bl((v*N+b*M)/y-.5)>.3||s*h+o*f+l*p<dd)&&(n(r,a,i,s,o,l,E,z,_,k/=j,w/=j,x,m,g),g.point(E,z),n(E,z,_,k,w,x,u,c,d,h,f,p,m,g))}}
return function(t){var r,
a,
i,
s,
o,
l,
u,
c,
d,
h,
f,
p,
m={point:g,
lineStart:v,
lineEnd:y,
polygonStart:function(){t.polygonStart(),
m.lineStart=k},
polygonEnd:function(){t.polygonEnd(),
m.lineStart=v}};
function g(n,r){n=e(n,r),
t.point(n[0],n[1])}
function v(){c=NaN,
m.point=b,
t.lineStart()}
function b(r,a){var i=Yl([r,a]),
s=e(r,a);
n(c,d,u,h,f,p,c=s[0],d=s[1],u=r,h=i[0],f=i[1],p=i[2],16,t),
t.point(c,d)}
function y(){m.point=g,
t.lineEnd()}
function k(){v(),
m.point=w,
m.lineEnd=x}
function w(e,t){b(r=e,t),
a=c,
i=d,
s=h,
o=f,
l=p,
m.point=b}
function x(){n(c,d,u,h,f,p,a,i,r,s,o,l,16,t),
m.lineEnd=y,
y()}
return m}}(e,t):(n=e,od({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}}))}
var fd=od({point:function(e,t){this.stream.point(e*vl,t*vl)}});
function pd(e,t,n,r,a,i){if(!i){function m(i,s){return[t+e*(i*=r),n-e*(s*=a)]}
return m.invert=function(i,s){return[(i-t)/e*r,(n-s)/e*a]},
m}
var s=wl(i),
o=_l(i),
l=s*e,
u=o*e,
c=s/e,
d=o/e,
h=(o*n-s*t)/e,
f=(o*t+s*n)/e;
function p(e,i){return[l*(e*=r)-u*(i*=a)+t,n-u*e-l*i]}
return p.invert=function(e,t){return[r*(c*e-d*t+h),a*(f-d*e-c*t)]},
p}
function md(e){return function(t,n){var r=wl(t),
a=wl(n),
i=e(r*a);
return 1/0===i?[2,0]:[i*a*_l(t),i*_l(n)]}}
function gd(e){return function(t,n){var r=El(t*t+n*n),
a=e(r),
i=_l(a);
return[kl(t*i,r*wl(a)),Ml(r&&n*i/r)]}}
function vd(e,t){return[e,jl(zl((fl+t)/2))]}
function bd(e){return zl((fl+e)/2)}
function yd(e,t){var n=wl(e),
r=e===t?_l(e):jl(n/wl(t))/jl(bd(t)/bd(e)),
a=n*Sl(bd(e),r)/r;
if(!r)return vd;
function i(e,t){a>0?t<1e-6-fl&&(t=1e-6-fl):t>fl-1e-6&&(t=fl-1e-6);
var n=a/Sl(bd(t),r);
return[n*_l(r*e),a-n*wl(r*e)]}
return i.invert=function(e,t){var n=a-t,
i=ql(r)*El(e*e+n*n),
s=kl(e,bl(n))*ql(n);
return n*r<0&&(s-=hl*ql(e)*ql(n)),
[s/r,2*yl(Sl(a/i,1/r))-fl]},
i}
function kd(){var e,
t,
n,
r;
return(e=0,t=hl/3,(r=(n=function(e){var t,n,r,a,i,s,o,l,u,c,d=150,h=480,f=250,p=0,m=0,g=0,v=0,b=0,y=0,k=1,w=1,x=null,j=Cu,S=null,_=hc,q=.5;
function E(e){return l(e[0]*vl,e[1]*vl)}
function z(e){return(e=l.invert(e[0],e[1]))&&[e[0]*gl,e[1]*gl]}
function N(){var e,r,a,i=pd(d,0,0,k,w,y).apply(null,t(p,m)),u=pd(d,h-i[0],f-i[1],k,w,y);
return e=g,r=v,a=b,n=(e%=ml)?r||a?mu(bu(e),yu(r,a)):bu(e):r||a?yu(r,a):gu,o=mu(t,u),l=mu(n,o),s=hd(o,q),M()}
function M(){return u=c=null,E}
return E.stream=function(e){var t;
return u&&c===e?u:u=fd((t=n,od({point:function(e,n){var r=t(e,n);
return this.stream.point(r[0],r[1])}}))(j(s(_(c=e)))))},E.preclip=function(e){return arguments.length?(j=e,x=void 0,M()):j},E.postclip=function(e){return arguments.length?(_=e,S=r=a=i=null,M()):_},E.clipAngle=function(e){return arguments.length?(j=+e?function(e){var t=wl(e),n=2*vl,r=t>0,a=bl(t)>1e-6;
function i(e,n){return wl(e)*wl(n)>t}
function s(e,n,r){var a=[1,0,0],i=Xl(Yl(e),Yl(n)),s=Jl(i,i),o=i[0],l=s-o*o;
if(!l)return!r&&e;
var u=Xl(a,i),c=tu(a,t*s/l);
eu(c,tu(i,-t*o/l));
var d=Jl(c,u),h=Jl(u,u),f=d*d-h*(Jl(c,c)-1);
if(!(f<0)){var p=El(f),m=tu(u,(-d-p)/h);
if(eu(m,c),m=Ql(m),!r)return m;
var g,v=e[0],b=n[0],y=e[1],k=n[1];
b<v&&(g=v,v=b,b=g);
var w=b-v,x=1e-6>bl(w-hl);
if(!x&&k<y&&(g=y,y=k,k=g),x||w<1e-6?x?y+k>0^m[1]<(1e-6>bl(m[0]-v)?y:k):y<=m[1]&&m[1]<=k:w>hl^(v<=m[0]&&m[0]<=b)){var j=tu(u,(-d+p)/h);
return eu(j,c),[m,Ql(j)]}}}
function o(t,n){var a=r?e:hl-e,i=0;
return t<-a?i|=1:t>a&&(i|=2),n<-a?i|=4:n>a&&(i|=8),i}
return zu(i,function(e){var t,n,l,u,c;
return{lineStart:function(){u=l=!1,c=1},point:function(d,h){var f,p,m=[d,h],g=i(d,h),v=r?g?0:o(d,h):g?o(d+(d<0?hl:-hl),h):0;
!t&&(u=l=g)&&e.lineStart(),g!==l&&(!(p=s(t,m))||xu(t,p)||xu(m,p))&&(m[2]=1),g!==l?(c=0,g?(e.lineStart(),p=s(m,t),e.point(p[0],p[1])):(p=s(t,m),e.point(p[0],p[1],2),e.lineEnd()),t=p):a&&t&&r^g&&!(v&n)&&(f=s(m,t,!0))&&(c=0,r?(e.lineStart(),e.point(f[0][0],f[0][1]),e.point(f[1][0],f[1][1]),e.lineEnd()):(e.point(f[1][0],f[1][1]),e.lineEnd(),e.lineStart(),e.point(f[0][0],f[0][1],3))),!g||t&&xu(t,m)||e.point(m[0],m[1]),t=m,l=g,n=v},lineEnd:function(){l&&e.lineEnd(),t=null},clean:function(){return c|(u&&l)<<1}}},function(t,r,a,i){!function(e,t,n,r,a,i){if(n){var s=wl(t),o=_l(t),l=r*n;
null==a?(a=t+r*ml,i=t-l/2):(a=ku(s,a),i=ku(s,i),(r>0?a<i:a>i)&&(a+=r*ml));
for(var u,c=a;r>0?c>i:c<i;c-=l)u=Ql([s,-o*wl(c),-o*_l(c)]),e.point(u[0],u[1])}}(i,e,n,a,t,r)},r?[0,-e]:[-hl,e-hl])}(x=e*vl):(x=null,Cu),M()):x*gl},E.clipExtent=function(e){return arguments.length?(_=null==e?(S=r=a=i=null,hc):function(e,t,n,r){function a(a,i){return e<=a&&a<=n&&t<=i&&i<=r}
function i(a,i,o,u){var c=0,d=0;
if(null==a||(c=s(a,o))!==(d=s(i,o))||0>l(a,i)^o>0)do{u.point(0===c||3===c?e:n,c>1?r:t)}while((c=(c+o+4)%4)!==d);
else u.point(i[0],i[1])}
function s(r,a){return 1e-6>bl(r[0]-e)?a>0?0:3:1e-6>bl(r[0]-n)?a>0?2:1:1e-6>bl(r[1]-t)?+(a>0):a>0?3:2}
function o(e,t){return l(e.x,t.x)}
function l(e,t){var n=s(e,1),r=s(t,1);
return n!==r?n-r:0===n?t[1]-e[1]:1===n?e[0]-t[0]:2===n?e[1]-t[1]:t[0]-e[0]}
return function(s){var l,u,c,d,h,f,p,m,g,v,b,y=s,k=wu(),w={point:x,lineStart:function(){w.point=j,u&&u.push(c=[]),v=!0,g=!1,p=m=NaN},lineEnd:function(){l&&(j(d,h),f&&g&&k.rejoin(),l.push(k.result())),w.point=x,g&&y.lineEnd()},polygonStart:function(){y=k,l=[],u=[],b=!0},polygonEnd:function(){var t=function(){for(var t=0,n=0,a=u.length;n<a;++n)for(var i,s,o=u[n],l=1,c=o.length,d=o[0],h=d[0],f=d[1];l<c;++l)i=h,s=f,h=(d=o[l])[0],f=d[1],s<=r?f>r&&(h-i)*(r-s)>(f-s)*(e-i)&&++t:f<=r&&(h-i)*(r-s)<(f-s)*(e-i)&&--t;
return t}(),n=b&&t,a=(l=zi(l)).length;
(n||a)&&(s.polygonStart(),n&&(s.lineStart(),i(null,null,1,s),s.lineEnd()),a&&Su(l,o,t,i,s),s.polygonEnd()),y=s,l=u=c=null}};
function x(e,t){a(e,t)&&y.point(e,t)}
function j(i,s){var o=a(i,s);
if(u&&c.push([i,s]),v)d=i,h=s,f=o,v=!1,o&&(y.lineStart(),y.point(i,s));
else if(o&&g)y.point(i,s);
else{var l=[p=Math.max(-1e9,Math.min(1e9,p)),m=Math.max(-1e9,Math.min(1e9,m))],k=[i=Math.max(-1e9,Math.min(1e9,i)),s=Math.max(-1e9,Math.min(1e9,s))];
!function(e,t,n,r,a,i){var s,o=e[0],l=e[1],u=0,c=1,d=t[0]-o,h=t[1]-l;
if(s=n-o,d||!(s>0)){if(s/=d,d<0){if(s<u)return;
s<c&&(c=s)}else if(d>0){if(s>c)return;
s>u&&(u=s)}
if(s=a-o,d||!(s<0)){if(s/=d,d<0){if(s>c)return;
s>u&&(u=s)}else if(d>0){if(s<u)return;
s<c&&(c=s)}
if(s=r-l,h||!(s>0)){if(s/=h,h<0){if(s<u)return;
s<c&&(c=s)}else if(h>0){if(s>c)return;
s>u&&(u=s)}
if(s=i-l,h||!(s<0)){if(s/=h,h<0){if(s>c)return;
s>u&&(u=s)}else if(h>0){if(s<u)return;
s<c&&(c=s)}
return u>0&&(e[0]=o+u*d,e[1]=l+u*h),c<1&&(t[0]=o+c*d,t[1]=l+c*h),!0}}}}}(l,k,e,t,n,r)?o&&(y.lineStart(),y.point(i,s),b=!1):(g||(y.lineStart(),y.point(l[0],l[1])),y.point(k[0],k[1]),o||y.lineEnd(),b=!1)}
p=i,m=s,g=o}
return w}}(S=+e[0][0],r=+e[0][1],a=+e[1][0],i=+e[1][1]),M()):null==S?null:[[S,r],[a,i]]},E.scale=function(e){return arguments.length?(d=+e,N()):d},E.translate=function(e){return arguments.length?(h=+e[0],f=+e[1],N()):[h,f]},E.center=function(e){return arguments.length?(p=e[0]%360*vl,m=e[1]%360*vl,N()):[p*gl,m*gl]},E.rotate=function(e){return arguments.length?(g=e[0]%360*vl,v=e[1]%360*vl,b=e.length>2?e[2]%360*vl:0,N()):[g*gl,v*gl,b*gl]},E.angle=function(e){return arguments.length?(y=e%360*vl,N()):y*gl},E.reflectX=function(e){return arguments.length?(k=e?-1:1,N()):k<0},E.reflectY=function(e){return arguments.length?(w=e?-1:1,N()):w<0},E.precision=function(e){return arguments.length?(s=hd(o,q=e*e),M()):El(q)},E.fitExtent=function(e,t){return cd(E,e,t)},E.fitSize=function(e,t){return cd(E,[[0,0],e],t)},E.fitWidth=function(e,t){return ud(E,function(t){var n=+e,r=n/(t[1][0]-t[0][0]),a=(n-r*(t[1][0]+t[0][0]))/2,i=-r*t[0][1];
E.scale(150*r).translate([a,i])},t)},E.fitHeight=function(e,t){return ud(E,function(t){var n=+e,r=n/(t[1][1]-t[0][1]),a=-r*t[0][0],i=(n-r*(t[1][1]+t[0][1]))/2;
E.scale(150*r).translate([a,i])},t)},function(){return t=e.apply(this,arguments),E.invert=t.invert&&z,N()}}(yd))(e,t)).parallels=function(r){return arguments.length?n(e=r[0]*vl,t=r[1]*vl):[e*gl,t*gl]},r).scale(109.5).parallels([30,30])}
function wd(e,t){return[e,t]}
function xd(e){var t=0,
n=e.children,
r=n&&n.length;
if(r)for(;--r>=0;)t+=n[r].value;
else t=1;
e.value=t}
function jd(e,t){e instanceof Map?(e=[void 0,e],void 0===t&&(t=_d)):void 0===t&&(t=Sd);
for(var n,r,a,i,s,o=new zd(e),l=[o];n=l.pop();)if((a=t(n.data))&&(s=(a=Array.from(a)).length))for(n.children=a,i=s-1;i>=0;--i)l.push(r=a[i]=new zd(a[i])),
r.parent=n,
r.depth=n.depth+1;
return o.eachBefore(Ed)}
function Sd(e){return e.children}
function _d(e){return Array.isArray(e)?e[1]:null}
function qd(e){void 0!==e.data.value&&(e.value=e.data.value),
e.data=e.data.data}
function Ed(e){var t=0;
do{e.height=t}while((e=e.parent)&&e.height<++t)}
function zd(e){this.data=e,
this.depth=this.height=0,
this.parent=null}
function Nd(e){e.x0=Math.round(e.x0),
e.y0=Math.round(e.y0),
e.x1=Math.round(e.x1),
e.y1=Math.round(e.y1)}
function Md(e,t,n,r,a){for(var i,s=e.children,o=-1,l=s.length,u=e.value&&(r-t)/e.value;++o<l;)(i=s[o]).y0=n,
i.y1=a,
i.x0=t,
i.x1=t+=i.value*u}
function Cd(){var e=1,
t=1,
n=0,
r=!1;
function a(a){var i,
s,
o=a.height+1;
return a.x0=a.y0=n,
a.x1=e,
a.y1=t/o,
a.eachBefore((i=t,s=o,function(e){e.children&&Md(e,e.x0,i*(e.depth+1)/s,e.x1,i*(e.depth+2)/s);
var t=e.x0,r=e.y0,a=e.x1-n,o=e.y1-n;
a<t&&(t=a=(t+a)/2),o<r&&(r=o=(r+o)/2),e.x0=t,e.y0=r,e.x1=a,e.y1=o})),
r&&a.eachBefore(Nd),
a}
return a.round=function(e){return arguments.length?(r=!!e,a):r},
a.size=function(n){return arguments.length?(e=+n[0],t=+n[1],a):[e,t]},
a.padding=function(e){return arguments.length?(n=+e,a):n},
a}
function Ld(e,t,n,r,a){for(var i,s=e.children,o=-1,l=s.length,u=e.value&&(a-n)/e.value;++o<l;)(i=s[o]).x0=t,
i.x1=r,
i.y0=n,
i.y1=n+=i.value*u}
md(function(e){return El(2/(1+e))}).invert=gd(function(e){return 2*Ml(e/2)}),
md(function(e){return(e=Nl(e))&&e/_l(e)}).invert=gd(function(e){return e}),
vd.invert=function(e,t){return[e,2*yl(xl(t))-fl]},
wd.invert=wd,
El(3),
gd(yl),
gd(Ml),
gd(function(e){return 2*yl(e)}),
zd.prototype=jd.prototype={constructor:zd,
count:function(){return this.eachAfter(xd)},
each:function(e,t){let n=-1;
for(let r of this)e.call(t,r,++n,this);
return this},
eachAfter:function(e,t){for(var n,r,a,i=this,s=[i],o=[],l=-1;i=s.pop();)if(o.push(i),n=i.children)for(r=0,a=n.length;r<a;++r)s.push(n[r]);
for(;i=o.pop();)e.call(t,i,++l,this);
return this},
eachBefore:function(e,t){for(var n,r,a=this,i=[a],s=-1;a=i.pop();)if(e.call(t,a,++s,this),n=a.children)for(r=n.length-1;r>=0;--r)i.push(n[r]);
return this},
find:function(e,t){let n=-1;
for(let r of this)if(e.call(t,r,++n,this))return r},
sum:function(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,r=t.children,a=r&&r.length;--a>=0;)n+=r[a].value;
t.value=n})},
sort:function(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})},
path:function(e){for(var t=this,n=function(e,t){if(e===t)return e;
var n=e.ancestors(),r=t.ancestors(),a=null;
for(e=n.pop(),t=r.pop();e===t;)a=e,e=n.pop(),t=r.pop();
return a}(t,e),r=[t];t!==n;)r.push(t=t.parent);
for(var a=r.length;e!==n;)r.splice(a,0,e),
e=e.parent;
return r},
ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);
return t},
descendants:function(){return Array.from(this)},
leaves:function(){var e=[];
return this.eachBefore(function(t){t.children||e.push(t)}),
e},
links:function(){var e=this,
t=[];
return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),
t},
copy:function(){return jd(this).eachBefore(qd)},
[Symbol.iterator]:function*(){var e,
t,
n,
r,
a=this,
i=[a];
do{for(e=i.reverse(),i=[];a=e.pop();)if(yield a,t=a.children)for(n=0,r=t.length;n<r;++n)i.push(t[n])}while(i.length)}},
Object.create(zd.prototype);
var Td=(1+Math.sqrt(5))/2;
function Ad(e,t,n,r,a,i){for(var s,o,l,u,c,d,h,f,p,m,g,v=[],b=t.children,y=0,k=0,w=b.length,x=t.value;y<w;){l=a-n,
u=i-r;
do{c=b[k++].value}while(!c&&k<w);
for(d=h=c,p=Math.max(h/(g=c*c*(m=Math.max(u/l,l/u)/(x*e))),g/d);k<w;++k){if(c+=o=b[k].value,o<d&&(d=o),o>h&&(h=o),(f=Math.max(h/(g=c*c*m),g/d))>p){c-=o;
break}
p=f}
v.push(s={value:c,dice:l<u,children:b.slice(y,k)}),
s.dice?Md(s,n,r,a,x?r+=u*c/x:i):Ld(s,n,r,x?n+=l*c/x:a,i),
x-=c,
y=k}
return v}
function Pd(e){for(var t,n=-1,r=e.length,a=e[r-1],i=0;++n<r;)t=a,
a=e[n],
i+=t[1]*a[0]-t[0]*a[1];
return i/2}
function Id(e,t){for(var n,r,a=e.length,i=e[a-1],s=t[0],o=t[1],l=i[0],u=i[1],c=!1,d=0;d<a;++d)n=(i=e[d])[0],
(r=i[1])>o!=u>o&&s<(l-n)*(o-r)/(u-r)+n&&(c=!c),
l=n,
u=r;
return c}!function e(t){function n(e,n,r,a,i){Ad(t,e,n,r,a,i)}
return n.ratio=function(t){return e((t*=1)>1?t:1)},
n}(Td),
function e(t){function n(e,n,r,a,i){if((s=e._squarify)&&s.ratio===t)for(var s,o,l,u,c,d=-1,h=s.length,f=e.value;++d<h;){for(l=(o=s[d]).children,u=o.value=0,c=l.length;u<c;++u)o.value+=l[u].value;
o.dice?Md(o,n,r,a,f?r+=(i-r)*o.value/f:i):Ld(o,n,r,f?n+=(a-n)*o.value/f:a,i),
f-=o.value}else e._squarify=s=Ad(t,e,n,r,a,i),
s.ratio=t}
return n.ratio=function(t){return e((t*=1)>1?t:1)},
n}(Td);
let Rd=Math.PI,
Od=2*Rd,
Dd=Od-1e-6;
function Fd(e){this._+=e[0];
for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}
function Bd(e,t,n,r){return e===n&&t===r}
class Kd{constructor(e){this._x0=this._y0=this._x1=this._y1=null,
this._="",
this._append=null==e?Fd:function(e){let t=Math.floor(e);
if(!(t>=0))throw Error(`invalid digits: ${e}`);
if(t>15)return Fd;
let n=10**t;
return function(e){this._+=e[0];
for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}(e),
this._equal=null==e?Bd:function(e){let t=Math.floor(e);
if(!(t<=15))return Bd;
let n=10**t,
r=function(e){return Math.round(e*n)};
return function(e,t,n,a){return r(e)===r(n)&&r(t)===r(a)}}(e)}
moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}
closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}
lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}
quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}
bezierCurveTo(e,t,n,r,a,i){this._append`C${+e},${+t},${+n},${+r},${this._x1=+a},${this._y1=+i}`}
arcTo(e,t,n,r,a){if(e*=1,t*=1,n*=1,r*=1,(a*=1)<0)throw Error(`negative radius: ${a}`);
let i=this._x1,
s=this._y1,
o=n-e,
l=r-t,
u=i-e,
c=s-t,
d=u*u+c*c;
if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;
else if(d>1e-6)if(Math.abs(c*o-l*u)>1e-6&&a){let h=n-i,
f=r-s,
p=o*o+l*l,
m=Math.sqrt(p),
g=Math.sqrt(d),
v=a*Math.tan((Rd-Math.acos((p+d-(h*h+f*f))/(2*m*g)))/2),
b=v/g,
y=v/m;
Math.abs(b-1)>1e-6&&this._append`L${e+b*u},${t+b*c}`,
this._append`A${a},${a},0,0,${+(c*h>u*f)},${this._x1=e+y*o},${this._y1=t+y*l}`}else this._append`L${this._x1=e},${this._y1=t}`}
arc(e,t,n,r,a,i){if(e*=1,t*=1,i=!!i,(n*=1)<0)throw Error(`negative radius: ${n}`);
let s=n*Math.cos(r),
o=n*Math.sin(r),
l=e+s,
u=t+o,
c=1^i,
d=i?r-a:a-r;
if(null===this._x1?this._append`M${l},${u}`:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-u)>1e-6)&&this._append`L${l},${u}`,n)if(d<0&&(d=d%Od+Od),d>Dd)this._append`A${n},${n},0,1,${c},${e-s},${t-o}A${n},${n},0,1,${c},${this._x1=l},${this._y1=u}`;
else if(d>1e-6){let i=e+n*Math.cos(a),
s=t+n*Math.sin(a);
if(d>=Rd&&this._equal(l,u,i,s)){let a=r+(d/=2);
this._append`A${n},${n},0,${+(d>=Rd)},${c},${e+n*Math.cos(a)},${t+n*Math.sin(a)}`}
this._append`A${n},${n},0,${+(d>=Rd)},${c},${this._x1=i},${this._y1=s}`}}
rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n*=1}v${+r}h${-n}Z`}
toString(){return this._}}
function Gd(e){return function(){return e}}
Kd.prototype;
let Ud=Math.abs,
Hd=Math.atan2,
Wd=Math.cos,
$d=Math.max,
Vd=Math.min,
Zd=Math.sin,
Qd=Math.sqrt,
Yd=Math.PI,
Jd=Yd/2,
Xd=2*Yd;
function eh(e){return e>=1?Jd:e<=-1?-Jd:Math.asin(e)}
function th(e){let t=3;
return e.digits=function(n){if(!arguments.length)return t;
if(null==n)t=null;
else{let e=Math.floor(n);
if(!(e>=0))throw RangeError(`invalid digits: ${n}`);
t=e}
return e},
()=>new Kd(t)}
function nh(e){return e.innerRadius}
function rh(e){return e.outerRadius}
function ah(e){return e.startAngle}
function ih(e){return e.endAngle}
function sh(e){return e&&e.padAngle}
function oh(e,t,n,r,a,i,s){var o=e-n,
l=t-r,
u=(s?i:-i)/Qd(o*o+l*l),
c=u*l,
d=-u*o,
h=e+c,
f=t+d,
p=n+c,
m=r+d,
g=(h+p)/2,
v=(f+m)/2,
b=p-h,
y=m-f,
k=b*b+y*y,
w=a-i,
x=h*m-p*f,
j=(y<0?-1:1)*Qd($d(0,w*w*k-x*x)),
S=(x*y-b*j)/k,
_=(-x*b-y*j)/k,
q=(x*y+b*j)/k,
E=(-x*b+y*j)/k,
z=S-g,
N=_-v,
M=q-g,
C=E-v;
return z*z+N*N>M*M+C*C&&(S=q,_=E),
{cx:S,
cy:_,
x01:-c,
y01:-d,
x11:S*(a/w-1),
y11:_*(a/w-1)}}
function lh(){var e=nh,
t=rh,
n=Gd(0),
r=null,
a=ah,
i=ih,
s=sh,
o=null,
l=th(u);
function u(){var u,
c,
d=+e.apply(this,arguments),
h=+t.apply(this,arguments),
f=a.apply(this,arguments)-Jd,
p=i.apply(this,arguments)-Jd,
m=Ud(p-f),
g=p>f;
if(o||(o=u=l()),h<d&&(c=h,h=d,d=c),h>1e-12)if(m>Xd-1e-12)o.moveTo(h*Wd(f),h*Zd(f)),
o.arc(0,0,h,f,p,!g),
d>1e-12&&(o.moveTo(d*Wd(p),d*Zd(p)),o.arc(0,0,d,p,f,g));
else{var v,
b,
y=f,
k=p,
w=f,
x=p,
j=m,
S=m,
_=s.apply(this,arguments)/2,
q=_>1e-12&&(r?+r.apply(this,arguments):Qd(d*d+h*h)),
E=Vd(Ud(h-d)/2,+n.apply(this,arguments)),
z=E,
N=E;
if(q>1e-12){var M=eh(q/d*Zd(_)),
C=eh(q/h*Zd(_));
(j-=2*M)>1e-12?(w+=M*=g?1:-1,x-=M):(j=0,w=x=(f+p)/2),
(S-=2*C)>1e-12?(y+=C*=g?1:-1,k-=C):(S=0,y=k=(f+p)/2)}
var L=h*Wd(y),
T=h*Zd(y),
A=d*Wd(x),
P=d*Zd(x);
if(E>1e-12){var I,
R=h*Wd(k),
O=h*Zd(k),
D=d*Wd(w),
F=d*Zd(w);
if(m<Yd)if(I=function(e,t,n,r,a,i,s,o){var l=n-e,u=r-t,c=s-a,d=o-i,h=d*l-c*u;
if(!(h*h<1e-12))return[e+(h=(c*(t-i)-d*(e-a))/h)*l,t+h*u]}(L,T,D,F,R,O,A,P)){var B,
K=L-I[0],
G=T-I[1],
U=R-I[0],
H=O-I[1],
W=1/Zd(((B=(K*U+G*H)/(Qd(K*K+G*G)*Qd(U*U+H*H)))>1?0:B<-1?Yd:Math.acos(B))/2),
$=Qd(I[0]*I[0]+I[1]*I[1]);
z=Vd(E,(d-$)/(W-1)),
N=Vd(E,(h-$)/(W+1))}else z=N=0}
S>1e-12?N>1e-12?(v=oh(D,F,L,T,h,N,g),b=oh(R,O,A,P,h,N,g),o.moveTo(v.cx+v.x01,v.cy+v.y01),N<E?o.arc(v.cx,v.cy,N,Hd(v.y01,v.x01),Hd(b.y01,b.x01),!g):(o.arc(v.cx,v.cy,N,Hd(v.y01,v.x01),Hd(v.y11,v.x11),!g),o.arc(0,0,h,Hd(v.cy+v.y11,v.cx+v.x11),Hd(b.cy+b.y11,b.cx+b.x11),!g),o.arc(b.cx,b.cy,N,Hd(b.y11,b.x11),Hd(b.y01,b.x01),!g))):(o.moveTo(L,T),o.arc(0,0,h,y,k,!g)):o.moveTo(L,T),
d>1e-12&&j>1e-12?z>1e-12?(v=oh(A,P,R,O,d,-z,g),b=oh(L,T,D,F,d,-z,g),o.lineTo(v.cx+v.x01,v.cy+v.y01),z<E?o.arc(v.cx,v.cy,z,Hd(v.y01,v.x01),Hd(b.y01,b.x01),!g):(o.arc(v.cx,v.cy,z,Hd(v.y01,v.x01),Hd(v.y11,v.x11),!g),o.arc(0,0,d,Hd(v.cy+v.y11,v.cx+v.x11),Hd(b.cy+b.y11,b.cx+b.x11),g),o.arc(b.cx,b.cy,z,Hd(b.y11,b.x11),Hd(b.y01,b.x01),!g))):o.arc(0,0,d,x,w,g):o.lineTo(A,P)}else o.moveTo(0,0);
if(o.closePath(),u)return o=null,
u+""||null}
return u.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,
r=(+a.apply(this,arguments)+ +i.apply(this,arguments))/2-Yd/2;
return[Wd(r)*n,Zd(r)*n]},
u.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:Gd(+t),u):e},
u.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:Gd(+e),u):t},
u.cornerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Gd(+e),u):n},
u.padRadius=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:Gd(+e),u):r},
u.startAngle=function(e){return arguments.length?(a="function"==typeof e?e:Gd(+e),u):a},
u.endAngle=function(e){return arguments.length?(i="function"==typeof e?e:Gd(+e),u):i},
u.padAngle=function(e){return arguments.length?(s="function"==typeof e?e:Gd(+e),u):s},
u.context=function(e){return arguments.length?(o=null==e?null:e,u):o},
u}
function uh(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}
function ch(e){return e}
function dh(){var e=ch,
t=uh,
n=null,
r=Gd(0),
a=Gd(Xd),
i=Gd(0);
function s(s){var o,
l,
u,
c,
d,
h,
f=(s="object"==typeof(o=s)&&"length"in o?o:Array.from(o)).length,
p=0,
m=Array(f),
g=Array(f),
v=+r.apply(this,arguments),
b=Math.min(Xd,Math.max(-Xd,a.apply(this,arguments)-v)),
y=Math.min(Math.abs(b)/f,i.apply(this,arguments)),
k=y*(b<0?-1:1);
for(l=0;l<f;++l)(h=g[m[l]=l]=+e(s[l],l,s))>0&&(p+=h);
for(null!=t?m.sort(function(e,n){return t(g[e],g[n])}):null!=n&&m.sort(function(e,t){return n(s[e],s[t])}),l=0,c=p?(b-f*k)/p:0;l<f;++l,v=d)d=v+((h=g[u=m[l]])>0?h*c:0)+k,
g[u]={data:s[u],
index:l,
value:h,
startAngle:v,
endAngle:d,
padAngle:y};
return g}
return s.value=function(t){return arguments.length?(e="function"==typeof t?t:Gd(+t),s):e},
s.sortValues=function(e){return arguments.length?(t=e,n=null,s):t},
s.sort=function(e){return arguments.length?(n=e,t=null,s):n},
s.startAngle=function(e){return arguments.length?(r="function"==typeof e?e:Gd(+e),s):r},
s.endAngle=function(e){return arguments.length?(a="function"==typeof e?e:Gd(+e),s):a},
s.padAngle=function(e){return arguments.length?(i="function"==typeof e?e:Gd(+e),s):i},
s}
Array.prototype.slice,
Qd(3);
var hh={draw(e,t){let n=Qd(t/Yd);
e.moveTo(n,0),
e.arc(0,0,n,0,Xd)}};
let fh=Qd(1/3),
ph=2*fh;
var mh={draw(e,t){let n=Qd(t/ph),
r=n*fh;
e.moveTo(0,-n),
e.lineTo(r,0),
e.lineTo(0,n),
e.lineTo(-r,0),
e.closePath()}},
gh={draw(e,t){let n=Qd(t),
r=-n/2;
e.rect(r,r,n,n)}};
Zd(Yd/10),
Zd(7*Yd/10),
Zd(Xd/10),
Wd(Xd/10);
let vh=Qd(3);
var bh={draw(e,t){let n=-Qd(t/(3*vh));
e.moveTo(0,2*n),
e.lineTo(-vh*n,-n),
e.lineTo(vh*n,-n),
e.closePath()}};
function yh(e,t){let n=null,
r=th(a);
function a(){let a;
if(n||(n=a=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),a)return n=null,
a+""||null}
return e="function"==typeof e?e:Gd(e||hh),
t="function"==typeof t?t:Gd(void 0===t?64:+t),
a.type=function(t){return arguments.length?(e="function"==typeof t?t:Gd(t),a):e},
a.size=function(e){return arguments.length?(t="function"==typeof e?e:Gd(+e),a):t},
a.context=function(e){return arguments.length?(n=null==e?null:e,a):n},
a}
function kh(){}
function wh(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}
function xh(e){this._context=e}
function jh(e,t){this._basis=new xh(e),
this._beta=t}
function Sh(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}
function _h(e,t){this._context=e,
this._k=(1-t)/6}
function qh(e,t){this._context=e,
this._k=(1-t)/6}
function Eh(e,t){this._context=e,
this._k=(1-t)/6}
function zh(e,t,n){var r=e._x1,
a=e._y1,
i=e._x2,
s=e._y2;
if(e._l01_a>1e-12){var o=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,
l=3*e._l01_a*(e._l01_a+e._l12_a);
r=(r*o-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,
a=(a*o-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}
if(e._l23_a>1e-12){var u=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,
c=3*e._l23_a*(e._l23_a+e._l12_a);
i=(i*u+e._x1*e._l23_2a-t*e._l12_2a)/c,
s=(s*u+e._y1*e._l23_2a-n*e._l12_2a)/c}
e._context.bezierCurveTo(r,a,i,s,e._x2,e._y2)}
function Nh(e,t){this._context=e,
this._alpha=t}
function Mh(e,t){this._context=e,
this._alpha=t}
function Ch(e,t){this._context=e,
this._alpha=t}
function Lh(e,t,n){var r=e._x1-e._x0,
a=t-e._x1,
i=(e._y1-e._y0)/(r||a<0&&-0),
s=(n-e._y1)/(a||r<0&&-0);
return((i<0?-1:1)+(s<0?-1:1))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs((i*a+s*r)/(r+a)))||0}
function Th(e,t){var n=e._x1-e._x0;
return n?(3*(e._y1-e._y0)/n-t)/2:t}
function Ah(e,t,n){var r=e._x0,
a=e._y0,
i=e._x1,
s=e._y1,
o=(i-r)/3;
e._context.bezierCurveTo(r+o,a+o*t,i-o,s-o*n,i,s)}
function Ph(e){this._context=e}
function Ih(e){this._context=e}
Qd(3),
Qd(3),
Qd(12),
xh.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,
this._point=0},
lineEnd:function(){switch(this._point){case 3:wh(this,this._x1,this._y1);
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){switch(e*=1,t*=1,this._point){case 0:this._point=1,
this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);
break;
case 1:this._point=2;
break;
case 2:this._point=3,
this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);
default:wh(this,e,t)}
this._x0=this._x1,
this._x1=e,
this._y0=this._y1,
this._y1=t}},
jh.prototype={lineStart:function(){this._x=[],
this._y=[],
this._basis.lineStart()},
lineEnd:function(){var e=this._x,
t=this._y,
n=e.length-1;
if(n>0)for(var r,a=e[0],i=t[0],s=e[n]-a,o=t[n]-i,l=-1;++l<=n;)r=l/n,
this._basis.point(this._beta*e[l]+(1-this._beta)*(a+r*s),this._beta*t[l]+(1-this._beta)*(i+r*o));
this._x=this._y=null,
this._basis.lineEnd()},
point:function(e,t){this._x.push(+e),
this._y.push(+t)}},
function e(t){function n(e){return 1===t?new xh(e):new jh(e,t)}
return n.beta=function(t){return e(+t)},
n}(.85),
_h.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._point=0},
lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);
break;
case 3:Sh(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){switch(e*=1,t*=1,this._point){case 0:this._point=1,
this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);
break;
case 1:this._point=2,
this._x1=e,
this._y1=t;
break;
case 2:this._point=3;
default:Sh(this,e,t)}
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return new _h(e,t)}
return n.tension=function(t){return e(+t)},
n}(0),
qh.prototype={areaStart:kh,
areaEnd:kh,
lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,
this._point=0},
lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),
this._context.closePath();
break;
case 2:this._context.lineTo(this._x3,this._y3),
this._context.closePath();
break;
case 3:this.point(this._x3,this._y3),
this.point(this._x4,this._y4),
this.point(this._x5,this._y5)}},
point:function(e,t){switch(e*=1,t*=1,this._point){case 0:this._point=1,
this._x3=e,
this._y3=t;
break;
case 1:this._point=2,
this._context.moveTo(this._x4=e,this._y4=t);
break;
case 2:this._point=3,
this._x5=e,
this._y5=t;
break;
default:Sh(this,e,t)}
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return new qh(e,t)}
return n.tension=function(t){return e(+t)},
n}(0),
Eh.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._point=0},
lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){switch(e*=1,t*=1,this._point){case 0:this._point=1;
break;
case 1:this._point=2;
break;
case 2:this._point=3,
this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);
break;
case 3:this._point=4;
default:Sh(this,e,t)}
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return new Eh(e,t)}
return n.tension=function(t){return e(+t)},
n}(0),
Nh.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},
lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);
break;
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){if(e*=1,t*=1,this._point){var n=this._x2-e,
r=this._y2-t;
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:this._point=1,
this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);
break;
case 1:this._point=2;
break;
case 2:this._point=3;
default:zh(this,e,t)}
this._l01_a=this._l12_a,
this._l12_a=this._l23_a,
this._l01_2a=this._l12_2a,
this._l12_2a=this._l23_2a,
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return t?new Nh(e,t):new _h(e,0)}
return n.alpha=function(t){return e(+t)},
n}(.5),
Mh.prototype={areaStart:kh,
areaEnd:kh,
lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},
lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),
this._context.closePath();
break;
case 2:this._context.lineTo(this._x3,this._y3),
this._context.closePath();
break;
case 3:this.point(this._x3,this._y3),
this.point(this._x4,this._y4),
this.point(this._x5,this._y5)}},
point:function(e,t){if(e*=1,t*=1,this._point){var n=this._x2-e,
r=this._y2-t;
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:this._point=1,
this._x3=e,
this._y3=t;
break;
case 1:this._point=2,
this._context.moveTo(this._x4=e,this._y4=t);
break;
case 2:this._point=3,
this._x5=e,
this._y5=t;
break;
default:zh(this,e,t)}
this._l01_a=this._l12_a,
this._l12_a=this._l23_a,
this._l01_2a=this._l12_2a,
this._l12_2a=this._l23_2a,
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return t?new Mh(e,t):new qh(e,0)}
return n.alpha=function(t){return e(+t)},
n}(.5),
Ch.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},
lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){if(e*=1,t*=1,this._point){var n=this._x2-e,
r=this._y2-t;
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:this._point=1;
break;
case 1:this._point=2;
break;
case 2:this._point=3,
this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);
break;
case 3:this._point=4;
default:zh(this,e,t)}
this._l01_a=this._l12_a,
this._l12_a=this._l23_a,
this._l01_2a=this._l12_2a,
this._l12_2a=this._l23_2a,
this._x0=this._x1,
this._x1=this._x2,
this._x2=e,
this._y0=this._y1,
this._y1=this._y2,
this._y2=t}},
function e(t){function n(e){return t?new Ch(e,t):new Eh(e,0)}
return n.alpha=function(t){return e(+t)},
n}(.5),
Ph.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,
this._point=0},
lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);
break;
case 3:Ah(this,this._t0,Th(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},
point:function(e,t){var n=NaN;
if(t*=1,(e*=1)!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,
this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);
break;
case 1:this._point=2;
break;
case 2:this._point=3,
Ah(this,Th(this,n=Lh(this,e,t)),n);
break;
default:Ah(this,this._t0,n=Lh(this,e,t))}
this._x0=this._x1,
this._x1=e,
this._y0=this._y1,
this._y1=t,
this._t0=n}}},
(function(e){this._context=new Ih(e)}.prototype=Object.create(Ph.prototype)).point=function(e,t){Ph.prototype.point.call(this,t,e)},
Ih.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},
closePath:function(){this._context.closePath()},
lineTo:function(e,t){this._context.lineTo(t,e)},
bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};
var Rh=e=>()=>e;
function Oh(e,{sourceEvent:t,target:n,transform:r,dispatch:a}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:a}})}
function Dh(e,t,n){this.k=e,
this.x=t,
this.y=n}
Dh.prototype={constructor:Dh,
scale:function(e){return 1===e?this:new Dh(this.k*e,this.x,this.y)},
translate:function(e,t){return 0===e&0===t?this:new Dh(this.k,this.x+this.k*e,this.y+this.k*t)},
apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},
applyX:function(e){return e*this.k+this.x},
applyY:function(e){return e*this.k+this.y},
invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},
invertX:function(e){return(e-this.x)/this.k},
invertY:function(e){return(e-this.y)/this.k},
rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},
rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},
toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};
var Fh=new Dh(1,0,0);
function Bh(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Fh;
return e.__zoom}
function Kh(e){e.stopImmediatePropagation()}
function Gh(e){e.preventDefault(),
e.stopImmediatePropagation()}
function Uh(e){return!(e.ctrlKey&&"wheel"!==e.type||e.button)}
function Hh(){var e=this;
return e instanceof SVGElement?(e=e.ownerSVGElement||e).hasAttribute("viewBox")?[[(e=e.viewBox.baseVal).x,e.y],[e.x+e.width,e.y+e.height]]:[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]:[[0,0],[e.clientWidth,e.clientHeight]]}
function Wh(){return this.__zoom||Fh}
function $h(e){return-e.deltaY*(1===e.deltaMode?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}
function Vh(){return navigator.maxTouchPoints||"ontouchstart"in this}
function Zh(e,t,n){var r=e.invertX(t[0][0])-n[0][0],
a=e.invertX(t[1][0])-n[1][0],
i=e.invertY(t[0][1])-n[0][1],
s=e.invertY(t[1][1])-n[1][1];
return e.translate(a>r?(r+a)/2:Math.min(0,r)||Math.max(0,a),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}
function Qh(){var e,
t,
n,
r=Uh,
a=Hh,
i=Zh,
s=$h,
o=Vh,
l=[0,1/0],
u=[[-1/0,-1/0],[1/0,1/0]],
c=250,
d=Ks,
h=Ci("start","zoom","end"),
f=0,
p=10;
function m(e){e.property("__zoom",Wh).on("wheel.zoom",x,{passive:!1}).on("mousedown.zoom",j).on("dblclick.zoom",S).filter(o).on("touchstart.zoom",_).on("touchmove.zoom",q).on("touchend.zoom touchcancel.zoom",E).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}
function g(e,t){return(t=Math.max(l[0],Math.min(l[1],t)))===e.k?e:new Dh(t,e.x,e.y)}
function v(e,t,n){var r=t[0]-n[0]*e.k,
a=t[1]-n[1]*e.k;
return r===e.x&&a===e.y?e:new Dh(e.k,r,a)}
function b(e){return[(+e[0][0]+ +e[1][0])/2,(+e[0][1]+ +e[1][1])/2]}
function y(e,t,n,r){e.on("start.zoom",function(){k(this,arguments).event(r).start()}).on("interrupt.zoom end.zoom",function(){k(this,arguments).event(r).end()}).tween("zoom",function(){var e=arguments,i=k(this,e).event(r),s=a.apply(this,e),o=null==n?b(s):"function"==typeof n?n.apply(this,e):n,l=Math.max(s[1][0]-s[0][0],s[1][1]-s[0][1]),u=this.__zoom,c="function"==typeof t?t.apply(this,e):t,h=d(u.invert(o).concat(l/u.k),c.invert(o).concat(l/c.k));
return function(e){if(1===e)e=c;
else{var t=h(e),n=l/t[2];
e=new Dh(n,o[0]-t[0]*n,o[1]-t[1]*n)}
i.zoom(null,e)}})}
function k(e,t,n){return!n&&e.__zooming||new w(e,t)}
function w(e,t){this.that=e,
this.args=t,
this.active=0,
this.sourceEvent=null,
this.extent=a.apply(e,t),
this.taps=0}
function x(e,...t){if(r.apply(this,arguments)){var n=k(this,t).event(e),
a=this.__zoom,
o=Math.max(l[0],Math.min(l[1],a.k*Math.pow(2,s.apply(this,arguments)))),
c=Ws(e);
if(n.wheel)(n.mouse[0][0]!==c[0]||n.mouse[0][1]!==c[1])&&(n.mouse[1]=a.invert(n.mouse[0]=c)),
clearTimeout(n.wheel);
else{if(a.k===o)return;
n.mouse=[c,a.invert(c)],
qo(this),
n.start()}
Gh(e),
n.wheel=setTimeout(function(){n.wheel=null,n.end()},150),
n.zoom("mouse",i(v(g(a,o),n.mouse[0],n.mouse[1]),n.extent,u))}}
function j(e,...t){if(!n&&r.apply(this,arguments)){var a,
s,
o,
l=e.currentTarget,
c=k(this,t,!0).event(e),
d=ws(e.view).on("mousemove.zoom",function(e){if(Gh(e),!c.moved){var t=e.clientX-p,n=e.clientY-m;
c.moved=t*t+n*n>f}
c.event(e).zoom("mouse",i(v(c.that.__zoom,c.mouse[0]=Ws(e,l),c.mouse[1]),c.extent,u))},!0).on("mouseup.zoom",function(e){var t,n,r,a;
d.on("mousemove.zoom mouseup.zoom",null),t=e.view,n=c.moved,r=t.document.documentElement,a=ws(t).on("dragstart.drag",null),n&&(a.on("click.drag",js,xs),setTimeout(function(){a.on("click.drag",null)},0)),"onselectstart"in r?a.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect),Gh(e),c.event(e).end()},!0),
h=Ws(e,l),
p=e.clientX,
m=e.clientY;
s=(a=e.view).document.documentElement,
o=ws(a).on("dragstart.drag",js,xs),
"onselectstart"in s?o.on("selectstart.drag",js,xs):(s.__noselect=s.style.MozUserSelect,s.style.MozUserSelect="none"),
Kh(e),
c.mouse=[h,this.__zoom.invert(h)],
qo(this),
c.start()}}
function S(e,...t){if(r.apply(this,arguments)){var n=this.__zoom,
s=Ws(e.changedTouches?e.changedTouches[0]:e,this),
o=n.invert(s),
l=n.k*(e.shiftKey?.5:2),
d=i(v(g(n,l),s,o),a.apply(this,t),u);
Gh(e),
c>0?ws(this).transition().duration(c).call(y,d,s,e):ws(this).call(m.transform,d,s,e)}}
function _(n,...a){if(r.apply(this,arguments)){var i,
s,
o,
l,
u=n.touches,
c=u.length,
d=k(this,a,n.changedTouches.length===c).event(n);
for(Kh(n),s=0;s<c;++s)l=[l=Ws(o=u[s],this),this.__zoom.invert(l),o.identifier],
d.touch0?d.touch1||d.touch0[2]===l[2]||(d.touch1=l,d.taps=0):(d.touch0=l,i=!0,d.taps=1+!!e);
e&&(e=clearTimeout(e)),
i&&(d.taps<2&&(t=l[0],e=setTimeout(function(){e=null},500)),qo(this),d.start())}}
function q(e,...t){if(this.__zooming){var n,
r,
a,
s,
o=k(this,t).event(e),
l=e.changedTouches,
c=l.length;
for(Gh(e),n=0;n<c;++n)a=Ws(r=l[n],this),
o.touch0&&o.touch0[2]===r.identifier?o.touch0[0]=a:o.touch1&&o.touch1[2]===r.identifier&&(o.touch1[0]=a);
if(r=o.that.__zoom,o.touch1){var d=o.touch0[0],
h=o.touch0[1],
f=o.touch1[0],
p=o.touch1[1],
m=(m=f[0]-d[0])*m+(m=f[1]-d[1])*m,
b=(b=p[0]-h[0])*b+(b=p[1]-h[1])*b;
r=g(r,Math.sqrt(m/b)),
a=[(d[0]+f[0])/2,(d[1]+f[1])/2],
s=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!o.touch0)return;
a=o.touch0[0],
s=o.touch0[1]}
o.zoom("touch",i(v(r,a,s),o.extent,u))}}
function E(e,...r){if(this.__zooming){var a,
i,
s=k(this,r).event(e),
o=e.changedTouches,
l=o.length;
for(Kh(e),n&&clearTimeout(n),n=setTimeout(function(){n=null},500),a=0;a<l;++a)i=o[a],
s.touch0&&s.touch0[2]===i.identifier?delete s.touch0:s.touch1&&s.touch1[2]===i.identifier&&delete s.touch1;
if(s.touch1&&!s.touch0&&(s.touch0=s.touch1,delete s.touch1),s.touch0)s.touch0[1]=this.__zoom.invert(s.touch0[0]);
else if(s.end(),2===s.taps&&(i=Ws(i,this),Math.hypot(t[0]-i[0],t[1]-i[1])<p)){var u=ws(this).on("dblclick.zoom");
u&&u.apply(this,arguments)}}}
return m.transform=function(e,t,n,r){var a=e.selection?e.selection():e;
a.property("__zoom",Wh),
e!==a?y(e,t,n,r):a.interrupt().each(function(){k(this,arguments).event(r).start().zoom(null,"function"==typeof t?t.apply(this,arguments):t).end()})},
m.scaleBy=function(e,t,n,r){m.scaleTo(e,function(){return this.__zoom.k*("function"==typeof t?t.apply(this,arguments):t)},n,r)},
m.scaleTo=function(e,t,n,r){m.transform(e,function(){var e=a.apply(this,arguments),r=this.__zoom,s=null==n?b(e):"function"==typeof n?n.apply(this,arguments):n,o=r.invert(s),l="function"==typeof t?t.apply(this,arguments):t;
return i(v(g(r,l),s,o),e,u)},n,r)},
m.translateBy=function(e,t,n,r){m.transform(e,function(){return i(this.__zoom.translate("function"==typeof t?t.apply(this,arguments):t,"function"==typeof n?n.apply(this,arguments):n),a.apply(this,arguments),u)},null,r)},
m.translateTo=function(e,t,n,r,s){m.transform(e,function(){var e=a.apply(this,arguments),s=this.__zoom,o=null==r?b(e):"function"==typeof r?r.apply(this,arguments):r;
return i(Fh.translate(o[0],o[1]).scale(s.k).translate("function"==typeof t?-t.apply(this,arguments):-t,"function"==typeof n?-n.apply(this,arguments):-n),e,u)},r,s)},
w.prototype={event:function(e){return e&&(this.sourceEvent=e),
this},
start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),
this},
zoom:function(e,t){return this.mouse&&"mouse"!==e&&(this.mouse[1]=t.invert(this.mouse[0])),
this.touch0&&"touch"!==e&&(this.touch0[1]=t.invert(this.touch0[0])),
this.touch1&&"touch"!==e&&(this.touch1[1]=t.invert(this.touch1[0])),
this.that.__zoom=t,
this.emit("zoom"),
this},
end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),
this},
emit:function(e){var t=ws(this.that).datum();
h.call(e,this.that,new Oh(e,{sourceEvent:this.sourceEvent,target:m,type:e,transform:this.that.__zoom,dispatch:h}),t)}},
m.wheelDelta=function(e){return arguments.length?(s="function"==typeof e?e:Rh(+e),m):s},
m.filter=function(e){return arguments.length?(r="function"==typeof e?e:Rh(!!e),m):r},
m.touchable=function(e){return arguments.length?(o="function"==typeof e?e:Rh(!!e),m):o},
m.extent=function(e){return arguments.length?(a="function"==typeof e?e:Rh([[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]]),m):a},
m.scaleExtent=function(e){return arguments.length?(l[0]=+e[0],l[1]=+e[1],m):[l[0],l[1]]},
m.translateExtent=function(e){return arguments.length?(u[0][0]=+e[0][0],u[1][0]=+e[1][0],u[0][1]=+e[0][1],u[1][1]=+e[1][1],m):[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},
m.constrain=function(e){return arguments.length?(i=e,m):i},
m.duration=function(e){return arguments.length?(c=+e,m):c},
m.interpolate=function(e){return arguments.length?(d=e,m):d},
m.on=function(){var e=h.on.apply(h,arguments);
return e===h?m:e},
m.clickDistance=function(e){return arguments.length?(f=(e*=1)*e,m):Math.sqrt(f)},
m.tapDistance=function(e){return arguments.length?(p=+e,m):p},
m}
Bh.prototype=Dh.prototype,
Object.keys(o=Ss).forEach(function(e){"default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(gi,e)||Object.defineProperty(gi,e,{enumerable:!0,get:function(){return o[e]}})});
m=d("aIIwE");
