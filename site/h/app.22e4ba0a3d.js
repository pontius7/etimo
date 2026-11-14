let e,
t,
n,
r,
a,
i;
function s(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}
var o,
l=globalThis,
u={},
c={},
d=l.parcelRequireec2c;
null==d&&((d=function(e){if(e in u)return u[e].exports;
if(e in c){var t=c[e];
delete c[e];
var n={id:e,exports:{}};
return u[e]=n,t.call(n.exports,n,n.exports),n.exports}
var r=Error("Cannot find module '"+e+"'");
throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){c[e]=t},l.parcelRequireec2c=d);
var h=d.register;
h("TLpOh",function(e,t){s(e.exports,"Fragment",()=>n,e=>n=e),s(e.exports,"jsx",()=>r,e=>r=e),s(e.exports,"jsxs",()=>a,e=>a=e);
var n,r,a,i=Symbol.for("react.transitional.element");
function o(e,t,n){var r=null;
if(void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);
else n=t;
return{$$typeof:i,type:e,key:r,ref:void 0!==(t=n.ref)?t:null,props:n}}
n=Symbol.for("react.fragment"),r=o,a=o}),
h("iVJPK",function(e,t){s(e.exports,"createRoot",()=>fn,e=>fn=e),s(e.exports,"hydrateRoot",()=>pn,e=>pn=e),s(e.exports,"version",()=>mn,e=>mn=e);
var n,r=d("jLEW8"),a=d("aIIwE"),i=d("395Dg");
function o(e){var t="https://react.dev/errors/"+e;
if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);
for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}
function u(e){for(var t=e,n=t;n&&!n.alternate;)!!(4098&(t=n).flags)&&(e=t.return),n=t.return;
for(;t.return;)t=t.return;
return 3===t.tag?e:null}
function c(e){if(13===e.tag){var t=e.memoizedState;
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}
return null}
function h(e){if(31===e.tag){var t=e.memoizedState;
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}
return null}
function f(e){if(u(e)!==e)throw Error(o(188))}
function p(e,t,n,r,a,i){for(;null!==e;){if((5===e.tag||27===e.tag||6===e.tag)&&n(e,r,a,i)||(22!==e.tag||null===e.memoizedState)&&(t||5!==e.tag&&27!==e.tag)&&p(e.child,t,n,r,a,i))return!0;
e=e.sibling}
return!1}
function m(e){for(e=e.return;null!==e;){if(3===e.tag||5===e.tag||27===e.tag)return e;
e=e.return}
return null}
function g(e){var t=!1;
for(e=e.return;null!==e&&(4===e.tag&&(t=!0),3!==e.tag&&5!==e.tag&&27!==e.tag);)e=e.return;
return t}
function v(e){var t=[null,null],n=m(e);
return null===n||function e(t,n,r,a){for(;null!==r;){if(r===n)a.foundSelf=!0;
else if(5===r.tag||27===r.tag||6===r.tag){if(a.foundSelf)return t[1]=r,!0;
t[0]=r}else if((22!==r.tag||null===r.memoizedState)&&e(t,n,r.child,a))return!0;
r=r.sibling}
return!1}(t,e,n.child,{foundSelf:!1}),t}
function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;
case 3:return e.stateNode.containerInfo;
default:throw Error(o(559))}}
var y=null,k=null;
function w(e,t,n){return e===n||e===t&&(y=e,!0)}
function x(e,t,n){return e===n?(k=e,!1):e===t&&(null!==k&&(y=e),!0)}
function j(e){if(null===e)return null;
do{e=null===e?null:e.return}while(e&&5!==e.tag&&27!==e.tag&&3!==e.tag);
return e||null}
function S(e,t,n){for(var r=0,a=e;a;a=n(a))r++;
a=0;
for(var i=t;i;i=n(i))a++;
for(;0<r-a;)e=n(e),r--;
for(;0<a-r;)t=n(t),a--;
for(;r--;){if(e===t||null!==t&&e===t.alternate)return e;
e=n(e),t=n(t)}
return null}
var _=Object.assign,q=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),T=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy");
Symbol.for("react.scope");
var D=Symbol.for("react.activity"),F=Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var B=Symbol.for("react.memo_cache_sentinel"),K=Symbol.for("react.view_transition"),G=Symbol.for("react.recoverable"),U=Symbol.iterator;
function H(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=U&&e[U]||e["@@iterator"])?e:null}
var W=Symbol.for("react.client.reference"),$=Array.isArray,V=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Y=[],J=-1;
function X(e){return{current:e}}
function ee(e){0>J||(e.current=Y[J],Y[J]=null,J--)}
function te(e,t){Y[++J]=e.current,e.current=t}
var ne=X(null),re=X(null),ae=X(null),ie=X(null);
function se(e,t){switch(te(ae,t),te(re,e),te(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mh(e):0;
break;
default:if(e=t.tagName,t=t.namespaceURI)e=gh(t=mh(t),e);
else switch(e){case"svg":e=1;
break;
case"math":e=2;
break;
default:e=0}}
ee(ne),te(ne,e)}
function oe(){ee(ne),ee(re),ee(ae)}
function le(e){var t=e.memoizedState;
null!==t&&(Gf._currentValue=t.memoizedState,te(ie,e));
var n=gh(t=ne.current,e.type);
t!==n&&(te(re,e),te(ne,n))}
function ue(e){re.current===e&&(ee(ne),ee(re)),ie.current===e&&(ee(ie),Gf._currentValue=Q)}
function ce(e){if(void 0===gn)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);
gn=t&&t[1]||"",vn=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}
return"\n"+gn+e+vn}
var de=!1;
function he(e,t){if(!e||de)return"";
de=!0;
var n=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};
if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}
Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}
n=!1;
try{var a=Object.getOwnPropertyDescriptor(e.prototype,"props");
Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(void 0!==a?Object.defineProperty(e.prototype,"props",a):delete e.prototype.props)}}}else{try{throw Error()}catch(e){r=e}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(e){if(e&&r&&"string"==typeof e.stack)return[e.stack,r.stack]}
return[null,null]}};
r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");
a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});
var i=r.DetermineComponentFrameRoot(),s=i[0],o=i[1];
if(s&&o){var l=s.split("\n"),u=o.split("\n");
for(a=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;
for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;
if(r===l.length||a===u.length)for(r=l.length-1,a=u.length-1;1<=r&&0<=a&&l[r]!==u[a];)a--;
for(;1<=r&&0<=a;r--,a--)if(l[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||l[r]!==u[a]){var c="\n"+l[r].replace(" at new "," at ");
return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);
break}}}finally{de=!1,Error.prepareStackTrace=n}
return(n=e?e.displayName||e.name:"")?ce(n):""}
function fe(e){try{var t="",n=null;
do{t+=function(e,t){switch(e.tag){case 26:case 27:case 5:return ce(e.type);
case 16:return ce("Lazy");
case 13:return e.child!==t&&null!==t?ce("Suspense Fallback"):ce("Suspense");
case 19:return ce("SuspenseList");
case 0:case 15:return he(e.type,!1);
case 11:return he(e.type.render,!1);
case 1:return he(e.type,!0);
case 31:return ce("Activity");
case 30:return ce("ViewTransition");
default:return""}}(e,n),n=e,e=e.return}while(e);
return t}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}
var pe=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,ge=r.unstable_cancelCallback,ve=r.unstable_shouldYield,be=r.unstable_requestPaint,ye=r.unstable_now,ke=r.unstable_getCurrentPriorityLevel,we=r.unstable_ImmediatePriority,xe=r.unstable_UserBlockingPriority,je=r.unstable_NormalPriority,Se=r.unstable_LowPriority,_e=r.unstable_IdlePriority,qe=r.log,Ee=r.unstable_setDisableYieldValue,ze=null,Ne=null;
function Me(e){if("function"==typeof qe&&Ee(e),Ne&&"function"==typeof Ne.setStrictMode)try{Ne.setStrictMode(ze,e)}catch(e){}}
var Ce=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(Le(e)/Te|0)|0},Le=Math.log,Te=Math.LN2,Ae=256,Pe=262144,Ie=4194304;
function Re(e){var t=42&e;
if(0!==t)return t;
switch(e&-e){case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:return 64;
case 128:return 128;
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;
case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;
case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;
case 67108864:return 67108864;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 0;
default:return e}}
function Oe(e,t,n){var r=e.pendingLanes;
if(0===r)return 0;
var a=0,i=e.suspendedLanes,s=e.pingedLanes;
e=e.warmLanes;
var o=134217727&r;
return 0!==o?0!=(r=o&~i)?a=Re(r):0!=(s&=o)?a=Re(s):n||0!=(n=o&~e)&&(a=Re(n)):0!=(o=r&~i)?a=Re(o):0!==s?a=Re(s):n||0!=(n=r&~e)&&(a=Re(n)),0===a?0:0!==t&&t!==a&&0==(t&i)&&((i=a&-a)>=(n=t&-t)||32===i&&4194048&n)?t:a}
function De(e,t){return 0==(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}
function Fe(e,t){8&t&&(t|=32&t);
var n=e.entangledLanes;
if(0!==n)for(e=e.entanglements,n&=t;0<n;){var r=31-Ce(n),a=1<<r;
t|=e[r],n&=~a}
return t}
function Be(){var e=Ie;
return!(62914560&(Ie<<=1))&&(Ie=4194304),e}
function Ke(e){for(var t=[],n=0;31>n;n++)t.push(e);
return t}
function Ge(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}
function Ue(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;
var r=31-Ce(t);
e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}
function He(e,t){var n=e.entangledLanes|=t;
for(e=e.entanglements;n;){var r=31-Ce(n),a=1<<r;
a&t|e[r]&t&&(e[r]|=t),n&=~a}}
function We(e,t){var n=t&-t;
return 0!=((n=42&n?1:$e(n))&(e.suspendedLanes|t))?0:n}
function $e(e){switch(e){case 2:e=1;
break;
case 8:e=4;
break;
case 32:e=16;
break;
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;
break;
case 268435456:e=134217728;
break;
default:e=0}
return e}
function Ve(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}
function Ze(){var e=Z.p;
return 0!==e?e:void 0===(e=window.event)?32:ap(e.type)}
function Qe(e,t){var n=Z.p;
try{return Z.p=e,t()}finally{Z.p=n}}
var Ye=Math.random().toString(36).slice(2),Je="__reactFiber$"+Ye,Xe="__reactProps$"+Ye,et="__reactContainer$"+Ye,tt="__reactEvents$"+Ye,nt="__reactListeners$"+Ye,rt="__reactHandles$"+Ye,at="__reactResources$"+Ye,it="__reactMarker$"+Ye,st="__reactLoad$"+Ye;
function ot(e){delete e[Je],delete e[Xe],delete e[nt],delete e[rt]}
function lt(e){var t;
if(t=e[Je])return t;
for(var n=e.parentNode;n;){if(t=n[et]||n[Je]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uf(e);null!==e;){if(n=e[Je])return n;
e=uf(e)}
return t}
n=(e=n).parentNode}
return null}
function ut(e){if(e=e[Je]||e[et]){var t=e.tag;
if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}
return null}
function ct(e){var t=e.tag;
if(5===t||26===t||27===t||6===t)return e.stateNode;
throw Error(o(33))}
function dt(e){var t=e[at];
return t||(t=e[at]={hoistableStyles:new Map,hoistableScripts:new Map}),t}
function ht(e){e[it]=!0}
function ft(e){e[st]=void 0}
var pt=new Set,mt={};
function gt(e,t){vt(e,t),vt(e+"Capture",t)}
function vt(e,t){for(mt[e]=t,e=0;e<t.length;e++)pt.add(t[e])}
var bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yt={},kt={},wt=!1;
function xt(){var e=wt;
return wt=!1,e}
function jt(e,t,n){if(pe.call(kt,t)||!pe.call(yt,t)&&(bt.test(t)?kt[t]=!0:(yt[t]=!0,0)))if(null===n)e.removeAttribute(t);
else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);
case"boolean":var r=t.toLowerCase().slice(0,5);
if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}
e.setAttribute(t,n)}}
function St(e,t,n){if(null===n)e.removeAttribute(t);
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}
e.setAttribute(t,n)}}
function _t(e,t,n,r){if(null===r)e.removeAttribute(n);
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}
e.setAttributeNS(t,n,r)}}
function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;
default:return""}}
function Et(e){var t=e.type;
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}
function zt(e){if(!e._valueTracker){var t=Et(e)?"checked":"value";
e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);
if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var a=r.get,i=r.set;
return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}
function Nt(e){if(!e)return!1;
var t=e._valueTracker;
if(!t)return!0;
var n=t.getValue(),r="";
return e&&(r=Et(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}
var Mt=/[\n"\\]/g;
function Ct(e){return e.replace(Mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}
function Lt(e,t,n,r,a,i,s,o){e.name="",null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s?e.type=s:e.removeAttribute("type"),null!=t?"number"===s?(0===t&&""===e.value||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):"submit"!==s&&"reset"!==s||e.removeAttribute("value"),null!=t?"number"===s&&e.value==t?At(e,qt(e.value)):At(e,qt(t)):null!=n?At(e,qt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.name=""+qt(o):e.removeAttribute("name")}
function Tt(e,t,n,r,a,i,s,o){if(null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.type=i),null!=t||null!=n){if(("submit"===i||"reset"===i)&&null==t)return void zt(e);
n=null!=n?""+qt(n):"",t=null!=t?""+qt(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}
r="function"!=typeof(r=null!=r?r:a)&&"symbol"!=typeof r&&!!r,e.checked=o?e.checked:!!r,e.defaultChecked=!!r,null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.name=s),zt(e)}
function At(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}
function Pt(e,t,n,r){if(e=e.options,t){t={};
for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));
null!==t||e[a].disabled||(t=e[a])}
null!==t&&(t.selected=!0)}}
function It(e,t,n){null==t||((t=""+qt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+qt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}
function Rt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));
if($(r)){if(1<r.length)throw Error(o(93));
r=r[0]}
n=r}
null==n&&(n=""),t=n}
e.defaultValue=n=qt(t),(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),zt(e)}
function Ot(e,t){if(t){var n=e.firstChild;
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}
e.textContent=t}
var Dt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function Ft(e,t,n){var r=0===t.indexOf("--");
null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Dt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}
function Bt(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(o(62));
if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="",wt=!0);
for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(Ft(e,a,r),wt=!0)}else for(var i in t)t.hasOwnProperty(i)&&Ft(e,i,t[i])}
function Kt(e){if(-1===e.indexOf("-"))return!1;
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0}}
var Gt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ut=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ht(e){return Ut.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}
function Wt(){}
var $t=null;
function Vt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}
var Zt=null,Qt=null;
function Yt(e){var t=ut(e);
if(t&&(e=t.stateNode)){var n=e[Xe]||null;
switch(e=t.stateNode,t.type){case"input":if(Lt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;
for(n=n.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];
if(r!==e&&r.form===e.form){var a=r[Xe]||null;
if(!a)throw Error(o(90));
Lt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}
for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&Nt(r)}
break;
case"textarea":It(e,n.value,n.defaultValue);
break;
case"select":null!=(t=n.value)&&Pt(e,!!n.multiple,t,!1)}}}
var Jt=!1;
function Xt(e,t,n){if(Jt)return e(t,n);
Jt=!0;
try{return e(t)}finally{if(Jt=!1,(null!==Zt||null!==Qt)&&(Yc(),Zt&&(t=Zt,e=Qt,Qt=Zt=null,Yt(t),e)))for(t=0;t<e.length;t++)Yt(e[t])}}
function en(e,t){var n=e.stateNode;
if(null===n)return null;
var r=n[Xe]||null;
if(null===r)return null;
switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r="button"!==(e=e.type)&&"input"!==e&&"select"!==e&&"textarea"!==e),e=!r;
break;
default:e=!1}
if(e)return null;
if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));
return n}
var tn="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,nn=!1;
if(tn)try{var rn={};
Object.defineProperty(rn,"passive",{get:function(){nn=!0}}),window.addEventListener("test",rn,rn),window.removeEventListener("test",rn,rn)}catch(e){nn=!1}
var an=null,sn=null,on=null;
function ln(){if(on)return on;
var e,t,n=sn,r=n.length,a="value"in an?an.value:an.textContent,i=a.length;
for(e=0;e<r&&n[e]===a[e];e++);
var s=r-e;
for(t=1;t<=s&&n[r-t]===a[i-t];t++);
return on=a.slice(e,1<t?1-t:void 0)}
function un(e){var t=e.keyCode;
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}
function cn(){return!0}
function dn(){return!1}
function hn(e){function t(t,n,r,a,i){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?cn:dn,this.isPropagationStopped=dn,this}
return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;
var e=this.nativeEvent;
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var e=this.nativeEvent;
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),t}
var fn,pn,mn,gn,vn,bn,yn,kn,wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=hn(wn),jn=_({},wn,{view:0,detail:0}),Sn=hn(jn),_n=_({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(bn=e.screenX-kn.screenX,yn=e.screenY-kn.screenY):yn=bn=0,kn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:yn}}),qn=hn(_n),En=hn(_({},_n,{dataTransfer:0})),zn=hn(_({},jn,{relatedTarget:0})),Nn=hn(_({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=hn(_({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Cn=hn(_({},wn,{data:0})),Ln={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};
function Pn(e){var t=this.nativeEvent;
return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}
function In(){return Pn}
var Rn=hn(_({},jn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;
if("Unidentified"!==t)return t}
return"keypress"===e.type?13===(e=un(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Tn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return"keypress"===e.type?un(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?un(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),On=hn(_({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=hn(_({},wn,{submitter:0})),Fn=hn(_({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=hn(_({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=hn(_({},_n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=hn(_({},wn,{newState:0,oldState:0,source:0})),Un=[9,13,27,32],Hn=tn&&"CompositionEvent"in window,Wn=null;
tn&&"documentMode"in document&&(Wn=document.documentMode);
var $n=tn&&"TextEvent"in window&&!Wn,Vn=tn&&(!Hn||Wn&&8<Wn&&11>=Wn),Zn=!1;
function Qn(e,t){switch(e){case"keyup":return-1!==Un.indexOf(t.keyCode);
case"keydown":return 229!==t.keyCode;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1}}
function Yn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}
var Jn=!1,Xn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return"input"===t?!!Xn[e.type]:"textarea"===t}
function tr(e,t,n,r){Zt?Qt?Qt.push(r):Qt=[r]:Zt=r,0<(t=eh(t,"onChange")).length&&(n=new xn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}
var nr=null,rr=null;
function ar(e){Wd(e,0)}
function ir(e){if(Nt(ct(e)))return e}
function sr(e,t){if("change"===e)return t}
var or=!1;
if(tn){if(tn){var lr="oninput"in document;
if(!lr){var ur=document.createElement("div");
ur.setAttribute("oninput","return;"),lr="function"==typeof ur.oninput}
n=lr}else n=!1;
or=n&&(!document.documentMode||9<document.documentMode)}
function cr(){nr&&(nr.detachEvent("onpropertychange",dr),rr=nr=null)}
function dr(e){if("value"===e.propertyName&&ir(rr)){var t=[];
tr(t,rr,e,Vt(e)),Xt(ar,t)}}
function hr(e,t,n){"focusin"===e?(cr(),rr=n,(nr=t).attachEvent("onpropertychange",dr)):"focusout"===e&&cr()}
function fr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ir(rr)}
function pr(e,t){if("click"===e)return ir(t)}
function mr(e,t){if("input"===e||"change"===e)return ir(t)}
var gr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};
function vr(e,t){if(gr(e,t))return!0;
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;
var n=Object.keys(e),r=Object.keys(t);
if(n.length!==r.length)return!1;
for(r=0;r<n.length;r++){var a=n[r];
if(!pe.call(t,a)||!gr(e[a],t[a]))return!1}
return!0}
function br(e){if(void 0===(e=e||("u">typeof document?document:void 0)))return null;
try{return e.activeElement||e.body}catch(t){return e.body}}
function yr(e){for(;e&&e.firstChild;)e=e.firstChild;
return e}
function kr(e,t){var n,r=yr(e);
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};
e=n}
e:{for(;r;){if(r.nextSibling){r=r.nextSibling;
break e}
r=r.parentNode}
r=void 0}
r=yr(r)}}
function wr(e){for(var t=br((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}
if(!n)break;
t=br((e=t.contentWindow).document)}
return t}
function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}
var jr=tn&&"documentMode"in document&&11>=document.documentMode,Sr=null,_r=null,qr=null,Er=!1;
function zr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;
Er||null==Sr||Sr!==br(r)||(r="selectionStart"in(r=Sr)&&xr(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},qr&&vr(qr,r)||(qr=r,0<(r=eh(_r,"onSelect")).length&&(t=new xn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}
function Nr(e,t){var n={};
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
var Mr={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Cr={},Lr={};
function Tr(e){if(Cr[e])return Cr[e];
if(!Mr[e])return e;
var t,n=Mr[e];
for(t in n)if(n.hasOwnProperty(t)&&t in Lr)return Cr[e]=n[t];
return e}
tn&&(Lr=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);
var Ar=Tr("animationend"),Pr=Tr("animationiteration"),Ir=Tr("animationstart"),Rr=Tr("transitionrun"),Or=Tr("transitionstart"),Dr=Tr("transitioncancel"),Fr=Tr("transitionend"),Br=new Map,Kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gr(e,t){Br.set(e,t),gt(t,[e])}
Kr.push("scrollEnd");
var Ur=0;
function Hr(e,t){return null!=e.name&&"auto"!==e.name?e.name:null!==t.autoName?t.autoName:t.autoName=e="_"+(e=Tc.identifierPrefix)+"t_"+(Ur++).toString(32)+"_"}
function Wr(e){if(null==e||"string"==typeof e)return e;
var t=null,n=Bc;
if(null!==n)for(var r=0;r<n.length;r++){var a=e[n[r]];
if(null!=a){if("none"===a)return"none";
t=null==t?a:t+" "+a}}
return null==t?e.default:t}
function $r(e,t){return e=Wr(e),null==(t=Wr(t))?"auto"===e?null:e:"auto"===t?null:t}
var Vr="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});
if(!window.dispatchEvent(t))return}
console.error(e)},Zr=[],Qr=0,Yr=0;
function Jr(){for(var e=Qr,t=Yr=Qr=0;t<e;){var n=Zr[t];
Zr[t++]=null;
var r=Zr[t];
Zr[t++]=null;
var a=Zr[t];
Zr[t++]=null;
var i=Zr[t];
if(Zr[t++]=null,null!==r&&null!==a){var s=r.pending;
null===s?a.next=a:(a.next=s.next,s.next=a),r.pending=a}0!==i&&na(n,a,i)}}
function Xr(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,Yr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}
function ea(e,t,n,r){return Xr(e,t,n,r),ra(e)}
function ta(e,t){return Xr(e,null,null,t),ra(e)}
function na(e,t,n){e.lanes|=n;
var r=e.alternate;
null!==r&&(r.lanes|=n);
for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;
return 3===e.tag?(i=e.stateNode,a&&null!==t&&(a=31-Ce(n),null===(r=(e=i.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),i):null}
function ra(e){if(50<Kc)throw Kc=0,Gc=null,Error(o(185));
for(var t=e.return;null!==t;)t=(e=t).return;
return 3===e.tag?e.stateNode:null}
var aa={};
function ia(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function sa(e,t,n,r){return new ia(e,t,n,r)}
function oa(e){return!(!(e=e.prototype)||!e.isReactComponent)}
function la(e,t){var n=e.alternate;
return null===n?((n=sa(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=1206910976&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}
function ua(e,t){e.flags&=1206910978;
var n=e.alternate;
return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,e.dependencies=null===(t=n.dependencies)?null:{lanes:t.lanes,firstContext:t.firstContext}),e}
function ca(e,t,n,r,a,i){var s=0;
if("function"==typeof(r=e))oa(r)&&(s=1);
else if("string"==typeof r)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;
switch(e){case"meta":case"title":return!0;
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;
return!0;
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;
return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}
return!1}(e,n,ne.current)?26:"html"===e||"head"===e||"body"===e?27:5;
else e:switch(r){case D:return(e=sa(31,n,t,a)).elementType=D,e.lanes=i,e;
case N:return da(n.children,a,i,t);
case M:s=8,a|=24;
break;
case C:return(e=sa(12,n,t,2|a)).elementType=C,e.lanes=i,e;
case P:return(e=sa(13,n,t,a)).elementType=P,e.lanes=i,e;
case I:return(e=sa(19,n,t,a)).elementType=I,e.lanes=i,e;
case F:case K:return(e=sa(30,n,t,e=32|a)).elementType=K,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;
default:if("object"==typeof r&&null!==r)switch(r.$$typeof){case T:s=10;
break e;
case L:s=9;
break e;
case A:s=11;
break e;
case R:s=14;
break e;
case O:s=16,r=null;
break e}
s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}
return(t=sa(s,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}
function da(e,t,n,r){return(e=sa(7,e,r,t)).lanes=n,e}
function ha(e,t,n){return(e=sa(6,e,null,t)).lanes=n,e}
function fa(e){var t=sa(18,null,null,0);
return t.stateNode=e,t}
function pa(e,t,n){return(t=sa(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}
var ma=new WeakMap;
function ga(e,t){if("object"==typeof e&&null!==e){var n=ma.get(e);
return void 0!==n?n:(t={value:e,source:t,stack:fe(t)},ma.set(e,t),t)}
return{value:e,source:t,stack:fe(t)}}
var va=[],ba=0,ya=null,ka=0,wa=[],xa=0,ja=null,Sa=1,_a="";
function qa(e,t){va[ba++]=ka,va[ba++]=ya,ya=e,ka=t}
function Ea(e,t,n){wa[xa++]=Sa,wa[xa++]=_a,wa[xa++]=ja,ja=e;
var r=Sa;
e=_a;
var a=32-Ce(r)-1;
r&=~(1<<a),n+=1;
var i=32-Ce(t)+a;
if(30<i){var s=a-a%5;
i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Sa=1<<32-Ce(t)+a|n<<a|r,_a=i+e}else Sa=1<<i|n<<a|r,_a=e}
function za(e){null!==e.return&&(qa(e,1),Ea(e,1,0))}
function Na(e){for(;e===ya;)ya=va[--ba],va[ba]=null,ka=va[--ba],va[ba]=null;
for(;e===ja;)ja=wa[--xa],wa[xa]=null,_a=wa[--xa],wa[xa]=null,Sa=wa[--xa],wa[xa]=null}
function Ma(e,t){wa[xa++]=Sa,wa[xa++]=_a,wa[xa++]=ja,Sa=t.id,_a=t.overflow,ja=e}
var Ca=null,La=null,Ta=!1,Aa=null,Pa=!1,Ia=Error(o(519));
function Ra(e){throw Ga(ga(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),Ia}
function Oa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;
switch(t[Je]=e,t[Xe]=r,n){case"dialog":$d("cancel",t),$d("close",t);
break;
case"iframe":case"object":case"embed":$d("load",t);
break;
case"video":case"audio":for(n=0;n<Ud.length;n++)$d(Ud[n],t);
break;
case"source":$d("error",t);
break;
case"img":case"image":case"link":$d("error",t),$d("load",t);
break;
case"details":$d("toggle",t);
break;
case"input":$d("invalid",t),Tt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);
break;
case"select":$d("invalid",t);
break;
case"textarea":$d("invalid",t),Rt(t,r.value,r.defaultValue,r.children)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||sh(t.textContent,n)?(null!=r.popover&&($d("beforetoggle",t),$d("toggle",t)),null!=r.onScroll&&$d("scroll",t),null!=r.onScrollEnd&&$d("scrollend",t),null!=r.onClick&&(t.onclick=Wt),t=!0):t=!1,t||Ra(e,!0)}
function Da(e){for(Ca=e.return;Ca;)switch(Ca.tag){case 5:case 31:case 13:return void(Pa=!1);
case 27:case 3:return void(Pa=!0);
default:Ca=Ca.return}}
function Fa(e){if(e!==Ca)return!1;
if(!Ta)return Da(e),Ta=!0,!1;
var t,n=e.tag;
if((t=3!==n&&27!==n)&&((t=5===n)&&(t="form"===(t=e.type)||"button"===t||bh(e.type,e.memoizedProps)),t=!t),t&&La&&Ra(e),Da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));
La=lf(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));
La=lf(e)}else 27===n?(n=La,qh(e.type)?(e=of,of=null,La=e):La=n):La=Ca?sf(e.stateNode.nextSibling):null;
return!0}
function Ba(){La=Ca=null,Ta=!1}
function Ka(){var e=Aa;
return null!==e&&(null===_c?_c=e:_c.push.apply(_c,e),Aa=null),e}
function Ga(e){null===Aa?Aa=[e]:Aa.push(e)}
var Ua=X(null),Ha=null,Wa=null;
function $a(e,t,n){te(Ua,t._currentValue),t._currentValue=n}
function Va(e){e._currentValue=Ua.current,ee(Ua)}
function Za(e,t,n){for(;null!==e;){var r=e.alternate;
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;
e=e.return}}
function Qa(e,t,n,r){var a=e.child;
for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;
if(null!==i){var s=a.child;
i=i.firstContext;
e:for(;null!==i;){var l=i;
i=a;
for(var u=0;u<t.length;u++)if(l.context===t[u]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Za(i.return,n,e),r||(s=null);
break e}
i=l.next}}else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));
s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),Za(s,n,e),s=null}else 13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated?(a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),Za(a.return,n,e),s=null!==(s=a.child)?s.sibling:null):s=a.child;
if(null!==s)s.return=a;
else for(s=a;null!==s;){if(s===e){s=null;
break}
if(null!==(a=s.sibling)){a.return=s.return,s=a;
break}
s=s.return}
a=s}}
function Ya(e,t,n,r){e=null;
for(var a=t,i=!1;null!==a;){if(!i)if(524288&a.flags)i=!0;
else if(262144&a.flags)break;
if(10===a.tag){var s=a.alternate;
if(null===s)throw Error(o(387));
if(null!==(s=s.memoizedProps)){var l=a.type;
gr(a.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(a===ie.current){if(null===(s=a.alternate))throw Error(o(387));
s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Gf):e=[Gf])}
a=a.return}
return null!==e&&Qa(t,e,n,r),t.flags|=262144,null!==e}
function Ja(e){for(e=e.firstContext;null!==e;){if(!gr(e.context._currentValue,e.memoizedValue))return!0;
e=e.next}
return!1}
function Xa(e){Ha=e,Wa=null,null!==(e=e.dependencies)&&(e.firstContext=null)}
function ei(e){return ni(Ha,e)}
function ti(e,t){return null===Ha&&Xa(e),ni(e,t)}
function ni(e,t){var n=t._currentValue;
if(t={context:t,memoizedValue:n,next:null},null===Wa){if(null===e)throw Error(o(308));
Wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wa=Wa.next=t;
return n}
var ri="u">typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};
this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ai=r.unstable_scheduleCallback,ii=r.unstable_NormalPriority,si={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};
function oi(){return{controller:new ri,data:new Map,refCount:0}}
function li(e){e.refCount--,0===e.refCount&&ai(ii,function(){e.controller.abort()})}
function ui(e,t){if(4194048&e.pendingLanes){var n=e.transitionTypes;
for(null===n&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];
-1===n.indexOf(r)&&n.push(r)}}}
var ci=null,di=null,hi=0,fi=0,pi=null;
function mi(){if(0==--hi&&(ci=null,null!==di)){null!==pi&&(pi.status="fulfilled");
var e=di;
di=null,fi=0,pi=null;
for(var t=0;t<e.length;t++)(0,e[t])()}}
var gi=V.S;
V.S=function(e,t){if(zc=ye(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e){if(null===di){var t=di=[];
hi=0,fi=Fd(),pi={status:"pending",value:void 0,then:function(e){t.push(e)}}}
hi++,e.then(mi,mi)}(t),null!==ci)for(var n=Ed;null!==n;)ui(n,ci),n=n.next;
if(null!==(n=e.types)){for(var r=Ed;null!==r;)ui(r,n),r=r.next;
if(0!==fi){null===(r=ci)&&(r=ci=[]);
for(var a=0;a<n.length;a++){var i=n[a];
-1===r.indexOf(i)&&r.push(i)}}}
null!==gi&&gi(e,t)};
var vi=X(null);
function bi(){var e=vi.current;
return null!==e?e:uc.pooledCache}
function yi(e,t){te(vi,null===t?vi.current:t.pool)}
function ki(){var e=bi();
return null===e?null:{parent:si._currentValue,pool:e}}
var wi=Error(o(460)),xi=Error(o(474)),ji=Error(o(542)),Si={then:function(){}};
function _i(e){return"fulfilled"===(e=e.status)||"rejected"===e}
function qi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Wt,Wt),t=n),t.status){case"fulfilled":return t.value;
case"rejected":if(Mi(e=t.reason),void 0===e&&!("reason"in t))throw Error(o(600));
throw e;
default:if("string"==typeof t.status)t.then(Wt,Wt);
else{if(null!==(e=uc)&&100<e.shellSuspendCounter)throw Error(o(482));
(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;
n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;
n.status="rejected",n.reason=e}})}
switch(t.status){case"fulfilled":return t.value;
case"rejected":throw Mi(e=t.reason),e}
throw zi=t,wi}}
function Ei(e){try{return(0,e._init)(e._payload)}catch(e){if(null!==e&&"object"==typeof e&&"function"==typeof e.then)throw zi=e,wi;
throw e}}
var zi=null;
function Ni(){if(null===zi)throw Error(o(459));
var e=zi;
return zi=null,e}
function Mi(e){if(e===wi||e===ji)throw Error(o(483))}
var Ci=null,Li=0;
function Ti(e){var t=Li;
return Li+=1,null===Ci&&(Ci=[]),qi(Ci,e,t)}
function Ai(e,t){e.ref=void 0!==(t=t.props.ref)?t:null}
function Pi(e,t){if(t.$$typeof===q)throw Error(o(525));
throw Error(o(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}
function Ii(e){function t(t,n){if(e){var r=t.deletions;
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}
function n(n,r){if(!e)return null;
for(;null!==r;)t(n,r),r=r.sibling;
return null}
function r(e){for(var t=new Map;null!==e;)null===e.key?t.set(e.index,e):t.set(e.key,e),e=e.sibling;
return t}
function a(e,t){return(e=la(e,t)).index=0,e.sibling=null,e}
function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=134217730,n):(t.flags|=1048576,n)}
function s(t){return e&&null===t.alternate&&(t.flags|=134217730),t}
function l(e,t,n,r){return null===t||6!==t.tag?(t=ha(n,e.mode,r)).return=e:(t=a(t,n)).return=e,t}
function u(e,t,n,r){var i=n.type;
return i===N?(Ai(e=d(e,t,n.props.children,r,n.key),n),e):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===O&&Ei(i)===t.type)?Ai(t=a(t,n.props),n):Ai(t=ca(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}
function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=pa(n,e.mode,r)).return=e:(t=a(t,n.children||[])).return=e,t}
function d(e,t,n,r,i){return null===t||7!==t.tag?(t=da(n,e.mode,r,i)).return=e:(t=a(t,n)).return=e,t}
function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=ha(""+t,e.mode,n)).return=e,t;
if("object"==typeof t&&null!==t){switch(t.$$typeof){case E:return Ai(n=ca(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;
case z:return(t=pa(t,e.mode,n)).return=e,t;
case O:return h(e,t=Ei(t),n)}
if($(t)||H(t))return(t=da(t,e.mode,n,null)).return=e,t;
if("function"==typeof t.then)return h(e,Ti(t),n);
if(t.$$typeof===T)return h(e,ti(e,t),n);
Pi(e,t)}
return null}
function f(e,t,n,r){var a=null!==t?t.key:null;
if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==a?null:l(e,t,""+n,r);
if("object"==typeof n&&null!==n){switch(n.$$typeof){case E:return n.key===a?u(e,t,n,r):null;
case z:return n.key===a?c(e,t,n,r):null;
case O:return f(e,t,n=Ei(n),r)}
if($(n)||H(n))return null!==a?null:d(e,t,n,r,null);
if("function"==typeof n.then)return f(e,t,Ti(n),r);
if(n.$$typeof===T)return f(e,t,ti(e,n),r);
Pi(e,n)}
return null}
function p(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return l(t,e=e.get(n)||null,""+r,a);
if("object"==typeof r&&null!==r){switch(r.$$typeof){case E:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);
case z:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);
case O:return p(e,t,n,r=Ei(r),a)}
if($(r)||H(r))return d(t,e=e.get(n)||null,r,a,null);
if("function"==typeof r.then)return p(e,t,n,Ti(r),a);
if(r.$$typeof===T)return p(e,t,n,ti(t,r),a);
Pi(t,r)}
return null}
return function(l,u,c,d){try{Li=0;
var m=function l(u,c,d,m){if("object"==typeof d&&null!==d&&d.type===N&&null===d.key&&void 0===d.props.ref&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case E:e:{for(var g=d.key;null!==c;){if(c.key===g){if((g=d.type)===N){if(7===c.tag){n(u,c.sibling),Ai(m=a(c,d.props.children),d),m.return=u,u=m;
break e}}else if(c.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===O&&Ei(g)===c.type){n(u,c.sibling),Ai(m=a(c,d.props),d),m.return=u,u=m;
break e}
n(u,c);
break}
t(u,c),c=c.sibling}
d.type===N?Ai(m=da(d.props.children,u.mode,m,d.key),d):Ai(m=ca(d.type,d.key,d.props,null,u.mode,m),d),m.return=u,u=m}
return s(u);
case z:e:{for(g=d.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(u,c.sibling),(m=a(c,d.children||[])).return=u,u=m;
break e}
n(u,c);
break}
t(u,c),c=c.sibling}(m=pa(d,u.mode,m)).return=u,u=m}
return s(u);
case O:return l(u,c,d=Ei(d),m)}
if($(d))return function(a,s,o,l){for(var u=null,c=null,d=s,m=s=0,g=null;null!==d&&m<o.length;m++){d.index>m?(g=d,d=null):g=d.sibling;
var v=f(a,d,o[m],l);
if(null===v){null===d&&(d=g);
break}
e&&d&&null===v.alternate&&t(a,d),s=i(v,s,m),null===c?u=v:c.sibling=v,c=v,d=g}
if(m===o.length)return n(a,d),Ta&&qa(a,m),u;
if(null===d){for(;m<o.length;m++)null!==(d=h(a,o[m],l))&&(s=i(d,s,m),null===c?u=d:c.sibling=d,c=d);
return Ta&&qa(a,m),u}
for(d=r(d);m<o.length;m++)null!==(g=p(d,a,m,o[m],l))&&(e&&null!==(v=g.alternate)&&d.delete(null===v.key?m:v.key),s=i(g,s,m),null===c?u=g:c.sibling=g,c=g);
return e&&d.forEach(function(e){return t(a,e)}),Ta&&qa(a,m),u}(u,c,d,m);
if(H(d)){if("function"!=typeof(g=H(d)))throw Error(o(150));
return function(a,s,l,u){if(null==l)throw Error(o(151));
for(var c=null,d=null,m=s,g=s=0,v=null,b=l.next();null!==m&&!b.done;g++,b=l.next()){m.index>g?(v=m,m=null):v=m.sibling;
var y=f(a,m,b.value,u);
if(null===y){null===m&&(m=v);
break}
e&&m&&null===y.alternate&&t(a,m),s=i(y,s,g),null===d?c=y:d.sibling=y,d=y,m=v}
if(b.done)return n(a,m),Ta&&qa(a,g),c;
if(null===m){for(;!b.done;g++,b=l.next())null!==(b=h(a,b.value,u))&&(s=i(b,s,g),null===d?c=b:d.sibling=b,d=b);
return Ta&&qa(a,g),c}
for(m=r(m);!b.done;g++,b=l.next())null!==(b=p(m,a,g,b.value,u))&&(e&&null!==(v=b.alternate)&&m.delete(null===v.key?g:v.key),s=i(b,s,g),null===d?c=b:d.sibling=b,d=b);
return e&&m.forEach(function(e){return t(a,e)}),Ta&&qa(a,g),c}(u,c,d=g.call(d),m)}
if("function"==typeof d.then)return l(u,c,Ti(d),m);
if(d.$$typeof===T)return l(u,c,ti(u,d),m);
Pi(u,d)}
return"string"==typeof d&&""!==d||"number"==typeof d||"bigint"==typeof d?(d=""+d,null!==c&&6===c.tag?(n(u,c.sibling),(m=a(c,d)).return=u):(n(u,c),(m=ha(d,u.mode,m)).return=u),s(u=m)):n(u,c)}(l,u,c,d);
return Ci=null,m}catch(e){if(e===wi||e===ji)throw e;
var g=sa(29,e,null,l.mode);
return g.lanes=d,g.return=l,g}}}
var Ri=Ii(!0),Oi=Ii(!1),Di=!1;
function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}
function Bi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}
function Ki(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}
function Gi(e,t,n){var r=e.updateQueue;
if(null===r)return null;
if(r=r.shared,2&lc){var a=r.pending;
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=ra(e),na(e,null,n),t}
return Xr(e,r,t,n),ra(e)}
function Ui(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes;
n|=r&=e.pendingLanes,t.lanes=n,He(e,n)}}
function Hi(e,t){var n=e.updateQueue,r=e.alternate;
if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;
if(null!==(n=n.firstBaseUpdate)){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};
null===i?a=i=s:i=i.next=s,n=n.next}while(null!==n);
null===i?a=i=t:i=i.next=t}else a=i=t;
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}
null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}
var Wi=!1;
function $i(){if(Wi){if(null!==pi)throw pi}}
function Vi(e,t,n,r){Wi=!1;
var a=e.updateQueue;
Di=!1;
var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;
if(null!==o){a.shared.pending=null;
var l=o,u=l.next;
l.next=null,null===s?i=u:s.next=u,s=l;
var c=e.alternate;
null!==c&&(o=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l)}
if(null!==i){var d=a.baseState;
for(s=0,c=u=l=null,o=i;;){var h=-536870913&o.lane,f=h!==o.lane;
if(f?(dc&h)===h:(r&h)===h){0!==h&&h===fi&&(Wi=!0),null!==c&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});
e:{var p=e,m=o;
switch(h=t,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(n,d,h);
break e}
d=p;
break e;
case 3:p.flags=-65537&p.flags|128;
case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(n,d,h):p))break e;
d=_({},d,h);
break e;
case 2:Di=!0}}
null!==(h=o.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[h]:f.push(h))}else f={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,s|=h;
if(null===(o=o.next)){if(null===(o=a.shared.pending))break;
o=(f=o).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}
null===c&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===i&&(a.shared.lanes=0),yc|=s,e.lanes=s,e.memoizedState=d}}
function Zi(e,t){if("function"!=typeof e)throw Error(o(191,e));
e.call(t)}
function Qi(e,t){var n=e.callbacks;
if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Zi(n[e],t)}
var Yi=X(null),Ji=X(0);
function Xi(e,t){te(Ji,e=vc),te(Yi,t),vc=e|t.baseLanes}
function es(){te(Ji,vc),te(Yi,Yi.current)}
function ts(){vc=Ji.current,ee(Yi),ee(Ji)}
var ns=X(null),rs=null;
function as(e){var t=e.alternate;
te(us,1&us.current),te(ns,e),null===rs&&(null===t||null!==Yi.current||null!==t.memoizedState)&&(rs=e)}
function is(e){te(us,us.current),te(ns,e),null===rs&&(rs=e)}
function ss(e){22===e.tag?(te(us,us.current),te(ns,e),null===rs&&(rs=e)):os()}
function os(){te(us,us.current),te(ns,ns.current)}
function ls(e){ee(ns),rs===e&&(rs=null),ee(us)}
var us=X(0);
function cs(e,t){te(ns,ns.current),te(us,t)}
function ds(e){ee(us),ee(ns),rs===e&&(rs=null)}
function hs(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;
if(null!==n&&(null===(n=n.dehydrated)||rf(n)||af(n)))return t}else if(19===t.tag&&"independent"!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;
continue}
if(t===e)break;
for(;null===t.sibling;){if(null===t.return||t.return===e)return null;
t=t.return}
t.sibling.return=t.return,t=t.sibling}
return null}
var fs=0,ps=null,ms=null,gs=null,vs=!1,bs=!1,ys=!1,ks=0,ws=0,xs=null,js=0;
function Ss(){throw Error(o(321))}
function _s(e,t){if(null===t)return!1;
for(var n=0;n<t.length&&n<e.length;n++)if(!gr(e[n],t[n]))return!1;
return!0}
function qs(e,t,n,r,a,i){return fs=i,ps=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=null===e||null===e.memoizedState?Ko:Go,ys=!1,i=n(r,a),ys=!1,bs&&(i=zs(t,n,r,a)),Es(e),i}
function Es(e){V.H=Bo;
var t=null!==ms&&null!==ms.next;
if(fs=0,gs=ms=ps=null,vs=!1,ws=0,xs=null,t)throw Error(o(300));
null===e||il||null!==(e=e.dependencies)&&Ja(e)&&(il=!0)}
function zs(e,t,n,r){ps=e;
var a=0;
do{if(bs&&(xs=null),ws=0,bs=!1,25<=a)throw Error(o(301));
if(a+=1,gs=ms=null,null!=e.updateQueue){var i=e.updateQueue;
i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}
V.H=Uo,i=t(n,r)}while(bs);
return i}
function Ns(){var e=V.H,t=e.useState()[0];
return t="function"==typeof t.then?Ps(t):t,e=e.useState()[0],(null!==ms?ms.memoizedState:null)!==e&&(ps.flags|=1024),t}
function Ms(){var e=0!==ks;
return ks=0,e}
function Cs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}
function Ls(e){if(vs){for(e=e.memoizedState;null!==e;){var t=e.queue;
null!==t&&(t.pending=null),e=e.next}
vs=!1}
fs=0,gs=ms=ps=null,bs=!1,ws=ks=0,xs=null}
function Ts(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};
return null===gs?ps.memoizedState=gs=e:gs=gs.next=e,gs}
function As(){if(null===ms){var e=ps.alternate;
e=null!==e?e.memoizedState:null}else e=ms.next;
var t=null===gs?ps.memoizedState:gs.next;
if(null!==t)gs=t,ms=e;
else{if(null===e){if(null===ps.alternate)throw Error(o(467));
throw Error(o(310))}
e={memoizedState:(ms=e).memoizedState,baseState:ms.baseState,baseQueue:ms.baseQueue,queue:ms.queue,next:null},null===gs?ps.memoizedState=gs=e:gs=gs.next=e}
return gs}
function Ps(e){var t=ws;
return ws+=1,null===xs&&(xs=[]),e=qi(xs,e,t),t=ps,null===(null===gs?t.memoizedState:gs.next)&&(V.H=null===(t=t.alternate)||null===t.memoizedState?Ko:Go),e}
function Is(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Ps(e);
if(e.$$typeof===G)return;
if(e.$$typeof===T)return ei(e)}
throw Error(o(438,String(e)))}
function Rs(e){var t=null,n=ps.updateQueue;
if(null!==n&&(t=n.memoCache),null==t){var r=ps.alternate;
null!==r&&null!==(r=r.updateQueue)&&null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})}
if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ps.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=B;
return t.index++,n}
function Os(e,t){return"function"==typeof t?t(e):t}
function Ds(e){return Fs(As(),ms,e)}
function Fs(e,t,n){var r=e.queue;
if(null===r)throw Error(o(311));
r.lastRenderedReducer=n;
var a=e.baseQueue,i=r.pending;
if(null!==i){if(null!==a){var s=a.next;
a.next=i.next,i.next=s}
t.baseQueue=a=i,r.pending=null}
if(i=e.baseState,null===a)e.memoizedState=i;
else{var l=s=null,u=null,c=t=a.next,d=!1;
do{var h=-536870913&c.lane;
if(h!==c.lane?(dc&h)===h:(fs&h)===h){var f=c.revertLane;
if(0===f)null!==u&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===fi&&(d=!0);
else{if((fs&f)===f){c=c.next,f===fi&&(d=!0);
continue}
h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=h,s=i):u=u.next=h,ps.lanes|=f,yc|=f}
h=c.action,ys&&n(i,h),i=c.hasEagerState?c.eagerState:n(i,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=f,s=i):u=u.next=f,ps.lanes|=h,yc|=h;
c=c.next}while(null!==c&&c!==t);
if(null===u?s=i:u.next=l,!gr(i,e.memoizedState)&&(il=!0,d&&null!==(n=pi)))throw n;
e.memoizedState=i,e.baseState=s,e.baseQueue=u,r.lastRenderedState=i}
return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}
function Bs(e){var t=As(),n=t.queue;
if(null===n)throw Error(o(311));
n.lastRenderedReducer=e;
var r=n.dispatch,a=n.pending,i=t.memoizedState;
if(null!==a){n.pending=null;
var s=a=a.next;
do{i=e(i,s.action),s=s.next}while(s!==a);
gr(i,t.memoizedState)||(il=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}
return[i,r]}
function Ks(e,t,n){var r=ps,a=As(),i=Ta;
if(i){if(void 0===n)throw Error(o(407));
n=n()}else n=t();
var s=!gr((ms||a).memoizedState,n);
if(s&&(a.memoizedState=n,il=!0),a=a.queue,po(Hs.bind(null,r,a,e),[e]),lo((e=a.getSnapshot!==t||s||null!==gs&&!!(1&gs.memoizedState.tag))?9:8,{destroy:void 0},Us.bind(null,r,a,n,t),null),e){if(r.flags|=2048,null===uc)throw Error(o(349));
i||127&fs||Gs(r,t,n)}
return n}
function Gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ps.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ps.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}
function Us(e,t,n,r){t.value=n,t.getSnapshot=r,Ws(t)&&$s(e)}
function Hs(e,t,n){return n(function(){Ws(t)&&$s(e)})}
function Ws(e){var t=e.getSnapshot;
e=e.value;
try{var n=t();
return!gr(e,n)}catch(e){return!0}}
function $s(e){var t=ta(e,2);
null!==t&&$c(t,e,2)}
function Vs(e){var t=Ts();
if("function"==typeof e){var n=e;
if(e=n(),ys){Me(!0);
try{n()}finally{Me(!1)}}}
return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:e},t}
function Zs(e,t,n,r){return e.baseState=n,Fs(e,ms,"function"==typeof r?r:Os)}
function Qs(e,t,n,r,a){if(Oo(e))throw Error(o(485));
if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};
null!==V.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Ys(t,i)):(i.next=n.next,t.pending=n.next=i)}}
function Ys(e,t){var n=t.action,r=t.payload,a=e.state;
if(t.isTransition){var i=V.T,s={};
s.types=null!==i?i.types:null,V.T=s;
try{var o=n(a,r),l=V.S;
null!==l&&l(s,o),Js(e,t,o)}catch(n){eo(e,t,n)}finally{null!==i&&null!==s.types&&(i.types=s.types),V.T=i}}else try{Js(e,t,i=n(a,r))}catch(n){eo(e,t,n)}}
function Js(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){Xs(e,t,n)},function(n){return eo(e,t,n)}):Xs(e,t,n)}
function Xs(e,t,n){t.status="fulfilled",t.value=n,to(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ys(e,n)))}
function eo(e,t,n){var r=e.pending;
if(e.pending=null,null!==r){r=r.next;
do{t.status="rejected",t.reason=n,to(t),t=t.next}while(t!==r)}
e.action=null}
function to(e){e=e.listeners;
for(var t=0;t<e.length;t++)(0,e[t])()}
function no(e,t){return t}
function ro(e,t){if(Ta){var n=uc.formState;
if(null!==n){e:{var r=ps;
if(Ta){if(La){t:{for(var a=La,i=Pa;8!==a.nodeType;)if(!i||null===(a=sf(a.nextSibling))){a=null;
break t}
a="F!"===(i=a.data)||"F"===i?a:null}
if(a){La=sf(a.nextSibling),r="F!"===a.data;
break e}}
Ra(r)}
r=!1}
r&&(t=n[0])}}
return(n=Ts()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},n.queue=r,n=Po.bind(null,ps,r),r.dispatch=n,r=Vs(!1),i=Ro.bind(null,ps,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Ts()).queue=a,n=Qs.bind(null,ps,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}
function ao(e){return io(As(),ms,e)}
function io(e,t,n){if(t=Fs(e,t,no)[0],e=Ds(Os)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=Ps(t)}catch(e){if(e===wi)throw ji;
throw e}else r=t;
var a=(t=As()).queue,i=a.dispatch;
return n!==t.memoizedState&&(ps.flags|=2048,lo(9,{destroy:void 0},so.bind(null,a,n),null)),[r,i,e]}
function so(e,t){e.action=t}
function oo(e){var t=As(),n=ms;
if(null!==n)return io(t,n,e);
As(),t=t.memoizedState;
var r=(n=As()).queue.dispatch;
return n.memoizedState=e,[t,r,!1]}
function lo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ps.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ps.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}
function uo(){return As().memoizedState}
function co(e,t,n,r){var a=Ts();
ps.flags|=e,a.memoizedState=lo(1|t,{destroy:void 0},n,void 0===r?null:r)}
function ho(e,t,n,r){var a=As();
r=void 0===r?null:r;
var i=a.memoizedState.inst;
null!==ms&&null!==r&&_s(r,ms.memoizedState.deps)?a.memoizedState=lo(t,i,n,r):(ps.flags|=e,a.memoizedState=lo(1|t,i,n,r))}
function fo(e,t){co(8390656,8,e,t)}
function po(e,t){ho(2048,8,e,t)}
function mo(e){var t=As().memoizedState,n={ref:t,nextImpl:e};
ps.flags|=4;
var r=ps.updateQueue;
if(null===r)r={lastEffect:null,events:null,stores:null,memoCache:null},ps.updateQueue=r,r.events=[n];
else{var a=r.events;
null===a?r.events=[n]:a.push(n)}
return function(){if(2&lc)throw Error(o(440));
return t.impl.apply(void 0,arguments)}}
function go(e,t){return ho(4,2,e,t)}
function vo(e,t){return ho(4,4,e,t)}
function bo(e,t){if("function"==typeof t){var n=t(e=e());
return function(){"function"==typeof n?n():t(null)}}
if(null!=t)return t.current=e=e(),function(){t.current=null}}
function yo(e,t,n){n=null!=n?n.concat([e]):null,ho(4,4,bo.bind(null,t,e),n)}
function ko(){}
function wo(e,t){var n=As();
t=void 0===t?null:t;
var r=n.memoizedState;
return null!==t&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}
function xo(e,t){var n=As();
t=void 0===t?null:t;
var r=n.memoizedState;
if(null!==t&&_s(t,r[1]))return r[0];
if(r=e(),ys){Me(!0);
try{e()}finally{Me(!1)}}
return n.memoizedState=[r,t],r}
function jo(e,t,n){return void 0===n||1073741824&fs&&!(261930&dc)?e.memoizedState=t:(e.memoizedState=n,e=Hc(),ps.lanes|=e,yc|=e,n)}
function So(e,t,n,r){return gr(n,t)?n:null!==Yi.current?(gr(e=jo(e,n,r),t)||(il=!0),e):106&fs&&(!(1073741824&fs)||261930&dc)?(e=Hc(),ps.lanes|=e,yc|=e,t):(il=!0,e.memoizedState=n)}
function _o(e,t,n,r,a){var i=Z.p;
Z.p=0!==i&&8>i?i:8;
var s=V.T,o={};
o.types=null!==s?s.types:null,V.T=o,Ro(e,!1,t,n);
try{var l=a(),u=V.S;
if(null!==u&&u(o,l),null!==l&&"object"==typeof l&&"function"==typeof l.then){var c,d,h=(c=[],d={status:"pending",value:null,reason:null,then:function(e){c.push(e)}},l.then(function(){d.status="fulfilled",d.value=r;
for(var e=0;e<c.length;e++)(0,c[e])(r)},function(e){for(d.status="rejected",d.reason=e,e=0;e<c.length;e++)(0,c[e])(void 0)}),d);
Io(e,t,h,Uc())}else Io(e,t,r,Uc())}catch(n){Io(e,t,{then:function(){},status:"rejected",reason:n},Uc())}finally{Z.p=i,null!==s&&null!==o.types&&(s.types=o.types),V.T=s}}
function qo(){}
function Eo(e,t,n,r){if(5!==e.tag)throw Error(o(476));
var a=zo(e).queue;
_o(e,a,t,Q,null===n?qo:function(){return No(e),n(r)})}
function zo(e){var t=e.memoizedState;
if(null!==t)return t;
var n={};
return(t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:Q},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}
function No(e){var t=zo(e);
null===t.next&&(t=e.alternate.memoizedState),Io(e,t.next.queue,{},Uc())}
function Mo(){return ei(Gf)}
function Co(){return As().memoizedState}
function Lo(){return As().memoizedState}
function To(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Uc(),r=Gi(t,e=Ki(n),n);
return null!==r&&($c(r,t,n),Ui(r,t,n)),t={cache:oi()},void(e.payload=t)}
t=t.return}}
function Ao(e,t,n){var r=Uc();
n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Oo(e)?Do(t,n):null!==(n=ea(e,t,n,r))&&($c(n,e,r),Fo(n,t,r))}
function Po(e,t,n){Io(e,t,n,Uc())}
function Io(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};
if(Oo(e))Do(t,a);
else{var i=e.alternate;
if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var s=t.lastRenderedState,o=i(s,n);
if(a.hasEagerState=!0,a.eagerState=o,gr(o,s))return Xr(e,t,a,0),null===uc&&Jr(),!1}catch(e){}
if(null!==(n=ea(e,t,a,r)))return $c(n,e,r),Fo(n,t,r),!0}
return!1}
function Ro(e,t,n,r){if(r={lane:2,revertLane:Fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Oo(e)){if(t)throw Error(o(479))}else null!==(t=ea(e,n,r,2))&&$c(t,e,2)}
function Oo(e){var t=e.alternate;
return e===ps||null!==t&&t===ps}
function Do(e,t){bs=vs=!0;
var n=e.pending;
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}
function Fo(e,t,n){if(4194048&n){var r=t.lanes;
r&=e.pendingLanes,t.lanes=n|=r,He(e,n)}}
var Bo={readContext:ei,use:Is,useCallback:Ss,useContext:Ss,useEffect:Ss,useImperativeHandle:Ss,useLayoutEffect:Ss,useInsertionEffect:Ss,useMemo:Ss,useReducer:Ss,useRef:Ss,useState:Ss,useDebugValue:Ss,useDeferredValue:Ss,useTransition:Ss,useSyncExternalStore:Ss,useId:Ss,useHostTransitionStatus:Ss,useFormState:Ss,useActionState:Ss,useOptimistic:Ss,useMemoCache:Ss,useCacheRefresh:Ss,useEffectEvent:Ss},Ko={readContext:ei,use:Is,useCallback:function(e,t){return Ts().memoizedState=[e,void 0===t?null:t],e},useContext:ei,useEffect:fo,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,co(4194308,4,bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){co(4,2,e,t)},useMemo:function(e,t){var n=Ts();
t=void 0===t?null:t;
var r=e();
if(ys){Me(!0);
try{e()}finally{Me(!1)}}
return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ts();
if(void 0!==n){var a=n(t);
if(ys){Me(!0);
try{n(t)}finally{Me(!1)}}}else a=t;
return r.memoizedState=r.baseState=a,r.queue=e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},e=e.dispatch=Ao.bind(null,ps,e),[r.memoizedState,e]},useRef:function(e){return Ts().memoizedState={current:e}},useState:function(e){var t=(e=Vs(e)).queue,n=Po.bind(null,ps,t);
return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ko,useDeferredValue:function(e,t){return jo(Ts(),e,t)},useTransition:function(){var e=Vs(!1);
return e=_o.bind(null,ps,e.queue,!0,!1),Ts().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ps,a=Ts();
if(Ta){if(void 0===n)throw Error(o(407));
n=n()}else{if(n=t(),null===uc)throw Error(o(349));
127&dc||Gs(r,t,n)}
a.memoizedState=n;
var i={value:n,getSnapshot:t};
return a.queue=i,fo(Hs.bind(null,r,i,e),[e]),r.flags|=2048,lo(9,{destroy:void 0},Us.bind(null,r,i,n,t),null),n},useId:function(){var e=Ts(),t=uc.identifierPrefix;
if(Ta){var n=_a;
t="_"+t+"R_"+(n=(Sa&~(1<<32-Ce(Sa)-1)).toString(32)+n),0<(n=ks++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=js++).toString(32)+"_";
return e.memoizedState=t},useHostTransitionStatus:Mo,useFormState:ro,useActionState:ro,useOptimistic:function(e){var t=Ts();
t.memoizedState=t.baseState=e;
var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};
return t.queue=n,t=Ro.bind(null,ps,!0,n),n.dispatch=t,[e,t]},useMemoCache:Rs,useCacheRefresh:function(){return Ts().memoizedState=To.bind(null,ps)},useEffectEvent:function(e){var t=Ts(),n={impl:e};
return t.memoizedState=n,function(){if(2&lc)throw Error(o(440));
return n.impl.apply(void 0,arguments)}}},Go={readContext:ei,use:Is,useCallback:wo,useContext:ei,useEffect:po,useImperativeHandle:yo,useInsertionEffect:go,useLayoutEffect:vo,useMemo:xo,useReducer:Ds,useRef:uo,useState:function(){return Ds(Os)},useDebugValue:ko,useDeferredValue:function(e,t){return So(As(),ms.memoizedState,e,t)},useTransition:function(){var e=Ds(Os)[0],t=As().memoizedState;
return["boolean"==typeof e?e:Ps(e),t]},useSyncExternalStore:Ks,useId:Co,useHostTransitionStatus:Mo,useFormState:ao,useActionState:ao,useOptimistic:function(e,t){return Zs(As(),0,e,t)},useMemoCache:Rs,useCacheRefresh:Lo,useEffectEvent:mo},Uo={readContext:ei,use:Is,useCallback:wo,useContext:ei,useEffect:po,useImperativeHandle:yo,useInsertionEffect:go,useLayoutEffect:vo,useMemo:xo,useReducer:Bs,useRef:uo,useState:function(){return Bs(Os)},useDebugValue:ko,useDeferredValue:function(e,t){var n=As();
return null===ms?jo(n,e,t):So(n,ms.memoizedState,e,t)},useTransition:function(){var e=Bs(Os)[0],t=As().memoizedState;
return["boolean"==typeof e?e:Ps(e),t]},useSyncExternalStore:Ks,useId:Co,useHostTransitionStatus:Mo,useFormState:oo,useActionState:oo,useOptimistic:function(e,t){var n=As();
return null!==ms?Zs(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Rs,useCacheRefresh:Lo,useEffectEvent:mo};
function Ho(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:_({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}
var Wo={enqueueSetState:function(e,t,n){e=e._reactInternals;
var r=Uc(),a=Ki(r);
a.payload=t,null!=n&&(a.callback=n),null!==(t=Gi(e,a,r))&&($c(t,e,r),Ui(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;
var r=Uc(),a=Ki(r);
a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Gi(e,a,r))&&($c(t,e,r),Ui(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;
var n=Uc(),r=Ki(n);
r.tag=2,null!=t&&(r.callback=t),null!==(t=Gi(e,r,n))&&($c(t,e,n),Ui(t,e,n))}};
function $o(e,t,n,r,a,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,s):!(t.prototype&&t.prototype.isPureReactComponent&&vr(n,r)&&vr(a,i))}
function Vo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}
function Zo(e,t){var n=t;
if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);
if(e=e.defaultProps)for(var a in n===t&&(n=_({},n)),e)void 0===n[a]&&(n[a]=e[a]);
return n}
function Qo(e){Vr(e)}
function Yo(e){console.error(e)}
function Jo(e){Vr(e)}
function Xo(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}
function el(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}
function tl(e,t,n){return(n=Ki(n)).tag=3,n.payload={element:null},n.callback=function(){Xo(e,t)},n}
function nl(e){return(e=Ki(e)).tag=3,e}
function rl(e,t,n,r){var a=n.type.getDerivedStateFromError;
if("function"==typeof a){var i=r.value;
e.payload=function(){return a(i)},e.callback=function(){el(t,n,r)}}
var s=n.stateNode;
null!==s&&"function"==typeof s.componentDidCatch&&(e.callback=function(){el(t,n,r),"function"!=typeof a&&(null===Cc?Cc=new Set([this]):Cc.add(this));
var e=r.stack;
this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}
var al=Error(o(461)),il=!1;
function sl(e,t,n,r){t.child=null===e?Oi(t,null,n,r):Ri(t,e.child,n,r)}
function ol(e,t,n,r,a){n=n.render;
var i=t.ref;
if("ref"in r){var s={};
for(var o in r)"ref"!==o&&(s[o]=r[o])}else s=r;
return Xa(t),r=qs(e,t,n,s,i,a),o=Ms(),null===e||il?(Ta&&o&&za(t),t.flags|=1,sl(e,t,r,a),t.child):(Cs(e,t,a),Tl(e,t,a))}
function ll(e,t,n,r,a){if(null===e){var i=n.type;
return"function"!=typeof i||oa(i)||void 0!==i.defaultProps||null!==n.compare?((e=ca(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,ul(e,t,i,r,a))}
if(i=e.child,!Al(e,a)){var s=i.memoizedProps;
if((n=null!==(n=n.compare)?n:vr)(s,r)&&e.ref===t.ref)return Tl(e,t,a)}
return t.flags|=1,(e=la(i,r)).ref=t.ref,e.return=t,t.child=e}
function ul(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;
if(vr(i,r)&&e.ref===t.ref){if(il=!1,t.pendingProps=r=i,!Al(e,a))return t.lanes=e.lanes,Tl(e,t,a);
131072&e.flags&&(il=!0)}}
return gl(e,t,n,r,a)}
function cl(e,t,n,r){var a=r.children,i=null!==e?e.memoizedState:null;
if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(128&t.flags){if(i=null!==i?i.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;
r=a&~i}else r=0,t.child=null;
return hl(e,t,i,n,r)}
if(!(536870912&n))return r=t.lanes=536870912,hl(e,t,null!==i?i.baseLanes|n:n,n,r);
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&yi(0,null!==i?i.cachePool:null),null!==i?Xi(t,i):es(),ss(t)}else null!==i?(yi(0,i.cachePool),Xi(t,i),os(),t.memoizedState=null):(null!==e&&yi(0,null),es(),os());
return sl(e,t,a,n),t.child}
function dl(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}
function hl(e,t,n,r,a){var i=bi();
return t.memoizedState={baseLanes:n,cachePool:i=null===i?null:{parent:si._currentValue,pool:i}},null!==e&&yi(0,null),es(),ss(t),null!==e&&Ya(e,t,r,!0),t.childLanes=a,null}
function fl(e,t){return(t=_l({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}
function pl(e,t,n){return Ri(t,e.child,null,n),(e=fl(t,t.pendingProps)).flags|=2,ls(t),t.memoizedState=null,e}
function ml(e,t){var n=t.ref;
if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(o(284));
(null===e||e.ref!==n)&&(t.flags|=4194816)}}
function gl(e,t,n,r,a){return Xa(t),n=qs(e,t,n,r,void 0,a),r=Ms(),null===e||il?(Ta&&r&&za(t),t.flags|=1,sl(e,t,n,a),t.child):(Cs(e,t,a),Tl(e,t,a))}
function vl(e,t,n,r,a,i){return Xa(t),t.updateQueue=null,n=zs(t,r,n,a),Es(e),r=Ms(),null===e||il?(Ta&&r&&za(t),t.flags|=1,sl(e,t,n,i),t.child):(Cs(e,t,i),Tl(e,t,i))}
function bl(e,t,n,r,a){if(Xa(t),null===t.stateNode){var i=aa,s=n.contextType;
"object"==typeof s&&null!==s&&(i=ei(s)),t.memoizedState=null!==(i=new n(r,i)).state&&void 0!==i.state?i.state:null,i.updater=Wo,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},Fi(t),s=n.contextType,i.context="object"==typeof s&&null!==s?ei(s):aa,i.state=t.memoizedState,"function"==typeof(s=n.getDerivedStateFromProps)&&(Ho(t,n,s,r),i.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(s=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),s!==i.state&&Wo.enqueueReplaceState(i,i.state,null),Vi(t,r,i,a),$i(),i.state=t.memoizedState),"function"==typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;
var o=t.memoizedProps,l=Zo(n,o);
i.props=l;
var u=i.context,c=n.contextType;
s=aa,"object"==typeof c&&null!==c&&(s=ei(c));
var d=n.getDerivedStateFromProps;
c="function"==typeof d||"function"==typeof i.getSnapshotBeforeUpdate,o=t.pendingProps!==o,c||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(o||u!==s)&&Vo(t,i,r,s),Di=!1;
var h=t.memoizedState;
i.state=h,Vi(t,r,i,a),$i(),u=t.memoizedState,o||h!==u||Di?("function"==typeof d&&(Ho(t,n,d,r),u=t.memoizedState),(l=Di||$o(t,n,l,r,h,u,s))?(c||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=l):("function"==typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Bi(e,t),c=Zo(n,s=t.memoizedProps),i.props=c,d=t.pendingProps,h=i.context,u=n.contextType,l=aa,"object"==typeof u&&null!==u&&(l=ei(u)),(u="function"==typeof(o=n.getDerivedStateFromProps)||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(s!==d||h!==l)&&Vo(t,i,r,l),Di=!1,h=t.memoizedState,i.state=h,Vi(t,r,i,a),$i();
var f=t.memoizedState;
s!==d||h!==f||Di||null!==e&&null!==e.dependencies&&Ja(e.dependencies)?("function"==typeof o&&(Ho(t,n,o,r),f=t.memoizedState),(c=Di||$o(t,n,c,r,h,f,l)||null!==e&&null!==e.dependencies&&Ja(e.dependencies))?(u||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,f,l),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,f,l)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=l,r=c):("function"!=typeof i.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}
return i=r,ml(e,t),r=!!(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=Ri(t,e.child,null,a),t.child=Ri(t,null,n,a)):sl(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Tl(e,t,a),e}
function yl(e,t,n,r){return Ba(),t.flags|=256,sl(e,t,n,r),t.child}
var kl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};
function wl(e){return{baseLanes:e,cachePool:ki()}}
function xl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=xc),e}
function jl(e,t,n){var r,a=t.pendingProps,i=!1,s=!!(128&t.flags);
if((r=s)||(r=(null===e||null!==e.memoizedState)&&!!(2&us.current)),r&&(i=!0,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(Ta){if(i?as(t):os(),(e=La)?null!==(e=null!==(e=nf(e,Pa))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ja?{id:Sa,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},(n=fa(e)).return=t,t.child=n,Ca=t,La=null):e=null,null===e)throw Ra(t);
return af(e)?t.lanes=32:t.lanes=536870912,null}
return s=a.children,a=a.fallback,i?(os(),s=_l({mode:"hidden",children:s},i=t.mode),a=da(a,i,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=wl(n),a.childLanes=xl(e,r,n),t.memoizedState=kl,dl(null,a)):(as(t),Sl(t,s))}
var l=e.memoizedState;
if(null!==l){var u=l.dehydrated;
if(null!==u){var c=e,d=t,h=r,f=a,p=u,m=l,g=n;
if(s)return 256&d.flags?(as(d),d.flags&=-257,ql(c,d,g)):null!==d.memoizedState?(os(),d.child=c.child,d.flags|=128,null):(os(),p=f.fallback,m=d.mode,f=_l({mode:"visible",children:f.children},m),(p=da(p,m,g,null)).flags|=2,f.return=d,p.return=d,f.sibling=p,d.child=f,Ri(d,c.child,null,g),(f=d.child).memoizedState=wl(g),f.childLanes=xl(c,h,g),d.memoizedState=kl,dl(null,f));
if(as(d),af(p)){if(h=p.nextSibling&&p.nextSibling.dataset)var v=h.dgst;
return""!==(h=v)&&((f=Error(o(419))).stack="",f.digest=h,Ga({value:f,source:null,stack:null})),ql(c,d,g)}
if(il||Ya(c,d,g,!1),h=0!=(g&c.childLanes),il||h){if(null!==Yi.current)return ql(c,d,g);
if(null!==(h=uc)&&0!==(f=We(h,g))&&f!==m.retryLane)throw m.retryLane=f,ta(c,f),$c(h,c,f),al;
return rf(p)||ad(),ql(c,d,g)}
return rf(p)?(d.flags|=192,d.child=c.child,null):(c=m.treeContext,La=sf(p.nextSibling),Ca=d,Ta=!0,Aa=null,Pa=!1,null!==c&&Ma(d,c),(d=Sl(d,f.children)).flags|=134221824,d)}}
return i?(os(),i=a.fallback,s=t.mode,u=(l=e.child).sibling,(a=la(l,{mode:"hidden",children:a.children})).subtreeFlags=1206910976&l.subtreeFlags,null!==u?i=la(u,i):(i=da(i,s,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,dl(null,a),a=t.child,null===(i=e.child.memoizedState)?i=wl(n):(null!==(s=i.cachePool)?(l=si._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=ki(),i={baseLanes:i.baseLanes|n,cachePool:s}),a.memoizedState=i,a.childLanes=xl(e,r,n),t.memoizedState=kl,dl(e.child,a)):(as(t),e=(n=e.child).sibling,(n=la(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}
function Sl(e,t){return(t=_l({mode:"visible",children:t},e.mode)).return=e,e.child=t}
function _l(e,t){return(e=sa(22,e,null,t)).lanes=0,e}
function ql(e,t,n){return Ri(t,e.child,null,n),(e=Sl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}
function El(e,t,n){e.lanes|=t;
var r=e.alternate;
null!==r&&(r.lanes|=t),Za(e.return,t,n)}
function zl(e){for(var t=null;null!==e;){var n=e.alternate;
null!==n&&null===hs(n)&&(t=e),e=e.sibling}
return t}
function Nl(e,t,n,r,a,i){var s=e.memoizedState;
null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a,s.treeForkCount=i)}
function Ml(e){var t=e.child;
for(e.child=null;null!==t;){var n=t.sibling;
t.sibling=e.child,e.child=t,t=n}}
function Cl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;
r=r.children;
var s=us.current;
if(128&t.flags)return cs(0,s),null;
var o=!!(2&s);
if(o?(s=1&s|2,t.flags|=128):s&=1,cs(0,s),"backwards"===a&&null!==e?(Ml(e),sl(e,t,r,n),Ml(e)):sl(e,t,r,n),r=Ta?ka:0,!o&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&El(e,n,t);
else if(19===e.tag)El(e,n,t);
else if(null!==e.child){e.child.return=e,e=e.child;
continue}
if(e===t)break;
for(;null===e.sibling;){if(null===e.return||e.return===t)break e;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
switch(a){case"backwards":null===(n=zl(t.child))?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Ml(t)),Nl(t,!0,a,null,i,r);
break;
case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===hs(e)){t.child=a;
break}
e=a.sibling,a.sibling=n,n=a,a=e}
Nl(t,!0,n,null,i,r);
break;
case"together":Nl(t,!1,null,null,void 0,r);
break;
case"independent":t.memoizedState=null;
break;
default:null===(n=zl(t.child))?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Nl(t,!1,a,n,i,r)}
return t.child}
function Ll(e,t,n){var r=t.pendingProps;
return $a(0,t.type,r.value),sl(e,t,r.children,n),t.child}
function Tl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),yc|=t.lanes,0==(n&t.childLanes)){if(null===e)return null;
if(Ya(e,t,n,!1),0==(n&t.childLanes))return null}
if(null!==e&&t.child!==e.child)throw Error(o(153));
if(null!==t.child){for(n=la(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=la(e,e.pendingProps)).return=t;
n.sibling=null}
return t.child}
function Al(e,t){return 0!=(e.lanes&t)||!(null===(e=e.dependencies)||!Ja(e))}
function Pl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)il=!0;
else{if(!(Al(e,n)||128&t.flags))return il=!1,function(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),$a(0,si,e.memoizedState.cache),Ba();
break;
case 27:case 5:le(t);
break;
case 4:se(t,t.stateNode.containerInfo);
break;
case 10:$a(0,t.type,t.memoizedProps.value);
break;
case 31:if(null!==t.memoizedState)return t.flags|=128,is(t),null;
break;
case 13:var r=t.memoizedState;
if(null!==r){if(null!==r.dehydrated)return as(t),t.flags|=128,null;
r=Ya(e,t,n,!1);
var a=t.child.childLanes;
return r||0!=(n&a)?jl(e,t,n):(as(t),null!==(e=Tl(e,t,n))?e.sibling:null)}as(t);
break;
case 19:if(128&t.flags)return Cl(e,t,n);
if(a=!!(128&e.flags),(r=0!=(n&t.childLanes))||(Ya(e,t,n,!1),r=0!=(n&t.childLanes)),a){if(r)return Cl(e,t,n);
t.flags|=128}
if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),cs(0,us.current),!r)return null;
break;
case 22:return t.lanes=0,cl(e,t,n,t.pendingProps);
case 24:$a(0,si,e.memoizedState.cache)}
return Tl(e,t,n)}(e,t,n);
il=!!(131072&e.flags)}else il=!1,Ta&&1048576&t.flags&&Ea(t,ka,t.index);
switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;
if(e=Ei(t.elementType),t.type=e,"function"!=typeof e){if(null!=e){var a=e.$$typeof;
if(a===A){t.tag=11,t=ol(null,t,e,r,n);
break e}
if(a===R){t.tag=14,t=ll(null,t,e,r,n);
break e}
if(a===T){t.tag=10,t.type=e,t=Ll(null,t,n);
break e}}
throw Error(o(306,t=function e(t){if(null==t)return null;
if("function"==typeof t)return t.$$typeof===W?null:t.displayName||t.name||null;
if("string"==typeof t)return t;
switch(t){case N:return"Fragment";
case C:return"Profiler";
case M:return"StrictMode";
case P:return"Suspense";
case I:return"SuspenseList";
case D:return"Activity";
case K:return"ViewTransition"}
if("object"==typeof t)switch(t.$$typeof){case z:return"Portal";
case T:return t.displayName||"Context";
case L:return(t._context.displayName||"Context")+".Consumer";
case A:var n=t.render;
return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;
case R:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";
case O:n=t._payload,t=t._init;
try{return e(t(n))}catch(e){}}
return null}(e)||e,""))}
oa(e)?(r=Zo(e,r),t.tag=1,t=bl(null,t,e,r,n)):(t.tag=0,t=gl(null,t,e,r,n))}
return t;
case 0:return gl(e,t,t.type,t.pendingProps,n);
case 1:return a=Zo(r=t.type,t.pendingProps),bl(e,t,r,a,n);
case 3:e:{if(se(t,t.stateNode.containerInfo),null===e)throw Error(o(387));
r=t.pendingProps;
var i=t.memoizedState;
a=i.element,Bi(e,t),Vi(t,r,null,n);
var s=t.memoizedState;
if($a(0,si,r=s.cache),r!==i.cache&&Qa(t,[si],n,!0),$i(),r=s.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=yl(e,t,r,n);
break e}
if(r!==a){Ga(a=ga(Error(o(424)),t)),t=yl(e,t,r,n);
break e}
for(La=sf((e=9===(e=t.stateNode.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).firstChild),Ca=t,Ta=!0,Aa=null,Pa=!0,n=Oi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|134221824,n=n.sibling}else{if(Ba(),r===a){t=Tl(e,t,n);
break e}
sl(e,t,r,n)}
t=t.child}
return t;
case 26:return ml(e,t),null===e?(n=yf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ta||(t.stateNode=vh(t.type,t.pendingProps,ae.current,t)):t.memoizedState=yf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;
case 27:return le(t),null===e&&Ta&&(r=t.stateNode=cf(t.type,t.pendingProps,ae.current),Ca=t,Pa=!0,a=La,qh(t.type)?(of=a,La=sf(r.firstChild)):La=a),sl(e,t,t.pendingProps.children,n),ml(e,t),null===e&&(t.flags|=4194304),t.child;
case 5:return null===e&&Ta&&((a=r=La)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[it])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;
return e;
case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence")||a!==n.rel||e.getAttribute("href")!==(null==n.href||""===n.href?null:n.href)||e.getAttribute("crossorigin")!==(null==n.crossOrigin?null:n.crossOrigin)||e.getAttribute("title")!==(null==n.title?null:n.title))break;
return e;
case"style":if(e.hasAttribute("data-precedence"))break;
return e;
case"script":if(((a=e.getAttribute("src"))!==(null==n.src?null:n.src)||e.getAttribute("type")!==(null==n.type?null:n.type)||e.getAttribute("crossorigin")!==(null==n.crossOrigin?null:n.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;
return e;
default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;
var a=null==n.name?null:""+n.name;
if("hidden"===n.type&&e.getAttribute("name")===a)return e}
if(null===(e=sf(e.nextSibling)))break}
return null}(r,t.type,t.pendingProps,Pa))?(t.stateNode=r,Ca=t,La=sf(r.firstChild),Pa=!1,a=!0):a=!1),a||Ra(t)),le(t),a=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,bh(a,i)?r=null:null!==s&&bh(a,s)&&(t.flags|=32),null!==t.memoizedState&&(Gf._currentValue=a=qs(e,t,Ns,null,null,n)),ml(e,t),sl(e,t,r,n),t.child;
case 6:return null===e&&Ta&&((e=n=La)&&(null!==(n=function(e,t,n){if(""===t)return null;
for(;3!==e.nodeType;)if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n||null===(e=sf(e.nextSibling)))return null;
return e}(n,t.pendingProps,Pa))?(t.stateNode=n,Ca=t,La=null,e=!0):e=!1),e||Ra(t)),null;
case 13:return jl(e,t,n);
case 4:return se(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ri(t,null,r,n):sl(e,t,r,n),t.child;
case 11:return ol(e,t,t.type,t.pendingProps,n);
case 7:return r=t.pendingProps,ml(e,t),sl(e,t,r,n),t.child;
case 8:case 12:return sl(e,t,t.pendingProps.children,n),t.child;
case 10:return Ll(e,t,n);
case 9:return a=t.type._context,r=t.pendingProps.children,Xa(t),r=r(a=ei(a)),t.flags|=1,sl(e,t,r,n),t.child;
case 14:return ll(e,t,t.type,t.pendingProps,n);
case 15:return ul(e,t,t.type,t.pendingProps,n);
case 19:return Cl(e,t,n);
case 31:var l=e,u=t,c=n,d=u.pendingProps,h=!!(128&u.flags);
if(u.flags&=-129,null===l){if(Ta){if("hidden"===d.mode)return l=fl(u,d),u.lanes=536870912,l.memoizedState={baseLanes:0,cachePool:null},dl(null,l);
if(is(u),(l=La)?null!==(l=null!==(l=nf(l,Pa))&&"&"===l.data?l:null)&&(u.memoizedState={dehydrated:l,treeContext:null!==ja?{id:Sa,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},(c=fa(l)).return=u,u.child=c,Ca=u,La=null):l=null,null===l)throw Ra(u);
return u.lanes=536870912,null}
return fl(u,d)}
var f=l.memoizedState;
if(null!==f){var p=f.dehydrated;
if(is(u),h)if(256&u.flags)u.flags&=-257,u=pl(l,u,c);
else{if(null===u.memoizedState)throw Error(o(558));
u.child=l.child,u.flags|=128,u=null}else if(il||Ya(l,u,c,!1),h=0!=(c&l.childLanes),il||h){if(null===Yi.current){if(null!==(d=uc)&&0!==(p=We(d,c))&&p!==f.retryLane)throw f.retryLane=p,ta(l,p),$c(d,l,p),al;
ad()}
u=pl(l,u,c)}else l=f.treeContext,La=sf(p.nextSibling),Ca=u,Ta=!0,Aa=null,Pa=!1,null!==l&&Ma(u,l),(u=fl(u,d)).flags|=134221824;
return u}
return(l=la(l.child,{mode:d.mode,children:d.children})).ref=u.ref,u.child=l,l.return=u,l;
case 22:return cl(e,t,n,t.pendingProps);
case 24:return Xa(t),r=ei(si),null===e?(null===(a=bi())&&(a=uc,i=oi(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},Fi(t),$a(0,si,a)):(0!=(e.lanes&n)&&(Bi(e,t),Vi(t,null,null,n),$i()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),$a(0,si,r)):($a(0,si,r=i.cache),r!==a.cache&&Qa(t,[si],n,!0))),sl(e,t,t.pendingProps.children,n),t.child;
case 30:return null===t.stateNode&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),null!=(r=t.pendingProps).name&&"auto"!==r.name?t.flags|=null===e?18882560:18874368:Ta&&za(t),null!==e&&e.memoizedProps.name!==r.name?t.flags|=4194816:ml(e,t),sl(e,t,r.children,n),t.child;
case 29:throw t.pendingProps}
throw Error(o(156,t.tag))}
function Il(e){e.flags|=4}
function Rl(e,t,n,r,a){var i;
if((i=!!(32&e.mode))&&(i=null===n?Lf(t,r):Lf(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;
else{if(!td())throw zi=Si,xi;
e.flags|=8192}}else e.flags&=-16777217}
function Ol(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217;
else if(e.flags|=16777216,!Tf(t)){if(!td())throw zi=Si,xi;
e.flags|=8192}}
function Dl(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Be():536870912,e.lanes|=t,jc|=t)}
function Fl(e,t){if(!Ta)switch(e.tailMode){case"visible":break;
case"collapsed":for(var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null;
break;
default:for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;
null===n?e.tail=null:n.sibling=null}}
function Bl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=1206910976&a.subtreeFlags,r|=1206910976&a.flags,a.return=e,a=a.sibling;
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;
return e.subtreeFlags|=r,e.childLanes=n,t}
function Kl(e,t){switch(Na(t),t.tag){case 3:Va(si),oe();
break;
case 26:case 27:case 5:ue(t);
break;
case 4:oe();
break;
case 31:null!==t.memoizedState&&ls(t);
break;
case 13:ls(t);
break;
case 19:ds(t);
break;
case 10:Va(t.type);
break;
case 22:case 23:ls(t),ts(),null!==e&&ee(vi);
break;
case 24:Va(si)}}
function Gl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;
if(null!==r){var a=r.next;
n=a;
do{if((n.tag&e)===e){r=void 0;
var i=n.create;
n.inst.destroy=r=i()}
n=n.next}while(n!==a)}}catch(e){wd(t,t.return,e)}}
function Ul(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;
if(null!==a){var i=a.next;
r=i;
do{if((r.tag&e)===e){var s=r.inst,o=s.destroy;
if(void 0!==o){s.destroy=void 0,a=t;
try{o()}catch(e){wd(a,n,e)}}}
r=r.next}while(r!==i)}}catch(e){wd(t,t.return,e)}}
function Hl(e){var t=e.updateQueue;
if(null!==t){var n=e.stateNode;
try{Qi(t,n)}catch(t){wd(e,e.return,t)}}}
function Wl(e,t,n){n.props=Zo(e.type,e.memoizedProps),n.state=e.memoizedState;
try{n.componentWillUnmount()}catch(n){wd(e,t,n)}}
function $l(e,t){try{var n=e.ref;
if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;
break;
case 30:var a=e.stateNode,i=Hr(e.memoizedProps,a);
(null===a.ref||a.ref.name!==i)&&(a.ref=Ih(i)),r=a.ref;
break;
case 7:if(null===e.stateNode){var s=new Rh(e);
p(e.child,!1,Jh,s,void 0,void 0),e.stateNode=s}
r=e.stateNode;
break;
default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(n){wd(e,t,n)}}
function Vl(e,t){var n=e.ref,r=e.refCleanup;
if(null!==n)if("function"==typeof r)try{r()}catch(n){wd(e,t,n)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(n){wd(e,t,n)}else n.current=null}
function Zl(e,t){if((5===e.tag||27===e.tag||6===e.tag)&&null===e.alternate&&null!==t)for(var n=0;n<t.length;n++)ef(e.stateNode,t[n])}
function Ql(e){for(var t=e.return;null!==t&&(Xl(t)&&ef(e.stateNode,t.stateNode),!Jl(t));)t=t.return}
function Yl(e){for(var t=e.return;null!==t&&(Xl(t)&&function(e,t){var n=t._eventListeners;
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];
e.removeEventListener(a.type,a.attachedListener,Fh(a.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){"string"==typeof n.rootMargin?(Vh.push({fragmentInstance:t,observer:n,instance:e}),Zh||(Zh=!0,jh(function(){jh(function(e){return function(){Zh=!1;
var e=Vh;
Vh=[];
for(var t=0;t<e.length;t++){var n=e[t];
n.observer.unobserve(n.instance)}}()})}))):n.unobserve(e)}),null!=e.reactFragments&&e.reactFragments.delete(t))}(e.stateNode,t.stateNode),!Jl(t));)t=t.return}
function Jl(e){return 5===e.tag||3===e.tag||27===e.tag}
function Xl(e){return e&&7===e.tag&&null!==e.stateNode}
function eu(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;
try{switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();
break;
case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){wd(e,e.return,t)}}
function tu(e,t,n){try{var r=e.stateNode;
(function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
case"input":var a=null,i=null,s=null,l=null,u=null,c=null,d=null;
for(p in n){var h=n[p];
if(n.hasOwnProperty(p)&&null!=h)switch(p){case"checked":case"value":break;
case"defaultValue":u=h;
default:r.hasOwnProperty(p)||oh(e,t,p,null,r,h)}}
for(var f in r){var p=r[f];
if(h=n[f],r.hasOwnProperty(f)&&(null!=p||null!=h))switch(f){case"type":p!==h&&(wt=!0),i=p;
break;
case"name":p!==h&&(wt=!0),a=p;
break;
case"checked":p!==h&&(wt=!0),c=p;
break;
case"defaultChecked":p!==h&&(wt=!0),d=p;
break;
case"value":p!==h&&(wt=!0),s=p;
break;
case"defaultValue":p!==h&&(wt=!0),l=p;
break;
case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));
break;
default:p!==h&&oh(e,t,f,p,r,h)}}
return void Lt(e,s,l,u,c,d,i,a);
case"select":for(i in p=s=l=f=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;
case"multiple":p=u;
default:r.hasOwnProperty(i)||oh(e,t,i,null,r,u)}
for(a in r)if(i=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=i||null!=u))switch(a){case"value":i!==u&&(wt=!0),f=i;
break;
case"defaultValue":i!==u&&(wt=!0),l=i;
break;
case"multiple":i!==u&&(wt=!0),s=i;
default:i!==u&&oh(e,t,a,i,r,u)}
return t=l,n=s,r=p,void(null!=f?Pt(e,!!n,f,!1):!!r!=!!n&&(null!=t?Pt(e,!!n,t,!0):Pt(e,!!n,n?[]:"",!1)));
case"textarea":for(l in p=f=null,n)if(a=n[l],n.hasOwnProperty(l)&&null!=a&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;
default:oh(e,t,l,null,r,a)}
for(s in r)if(a=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=a||null!=i))switch(s){case"value":a!==i&&(wt=!0),f=a;
break;
case"defaultValue":a!==i&&(wt=!0),p=a;
break;
case"children":break;
case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));
break;
default:a!==i&&oh(e,t,s,a,r,i)}
return void It(e,f,p);
case"option":for(var m in n)f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m)&&("selected"===m?e.selected=!1:oh(e,t,m,null,r,f));
for(u in r)f=r[u],p=n[u],r.hasOwnProperty(u)&&f!==p&&(null!=f||null!=p)&&("selected"===u?(f!==p&&(wt=!0),e.selected=f&&"function"!=typeof f&&"symbol"!=typeof f):oh(e,t,u,f,r,p));
return;
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&oh(e,t,g,null,r,f);
for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(null!=f||null!=p))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));
break;
default:oh(e,t,c,f,r,p)}
return;
default:if(Kt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&lh(e,t,v,void 0,r,f);
for(d in r)f=r[d],p=n[d],r.hasOwnProperty(d)&&f!==p&&(void 0!==f||void 0!==p)&&lh(e,t,d,f,r,p);
return}}
for(var b in n)f=n[b],n.hasOwnProperty(b)&&null!=f&&!r.hasOwnProperty(b)&&oh(e,t,b,null,r,f);
for(h in r)f=r[h],p=n[h],r.hasOwnProperty(h)&&f!==p&&(null!=f||null!=p)&&oh(e,t,h,f,r,p)})(r,e.type,n,t),r[Xe]=t}catch(t){wd(e,e.return,t)}}
function nu(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&qh(e.type)||4===e.tag}
function ru(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||nu(e.return))return null;
e=e.return}
for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&qh(e.type)||2&e.flags||null===e.child||4===e.tag)continue e;
e.child.return=e,e=e.child}
if(!(2&e.flags))return e.stateNode}}
function au(e,t,n,r){var a=e.tag;
if(5===a||6===a)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Zl(e,r),wt=!0;
else if(4!==a&&(27===a&&(Zl(e,r),r=null,qh(e.type)&&(n=e.stateNode)),null!==(e=e.child)))for(au(e,t,n,r),e=e.sibling;null!==e;)au(e,t,n,r),e=e.sibling}
function iu(e){var t=e.stateNode,n=e.memoizedProps;
try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);
uh(t,r,n),t[Je]=e,t[Xe]=n}catch(t){wd(e,e.return,t)}}
var su=!1,ou=null;
function lu(e){(30===e.tag||33554432&e.subtreeFlags)&&(su=!0)}
var uu=null;
function cu(){var e=uu;
return uu=null,e}
var du=0;
function hu(e,t,n,r,a){return du=0,function e(t,n,r,a,i){for(var s=!1;null!==t;){if(5===t.tag){var o=t.stateNode;
if(null!==a){var l=Lh(o);
a.push(l),l.view&&(s=!0)}else s||Lh(o).view&&(s=!0);
su=!0,Nh(o,0===du?n:n+"_"+du,r),du++}else(22!==t.tag||null===t.memoizedState)&&(30===t.tag&&i||e(t.child,n,r,a,i)&&(s=!0));
t=t.sibling}
return s}(e.child,t,n,r,a)}
function fu(e,t){for(;null!==e;)5===e.tag?Mh(e.stateNode,e.memoizedProps):(22!==e.tag||null===e.memoizedState)&&(30===e.tag&&t||fu(e.child,t)),e=e.sibling}
function pu(e){if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if((22!==e.tag||null===e.memoizedState)&&(pu(e),30===e.tag&&18874368&e.flags&&e.stateNode.paired)){var t=e.memoizedProps;
if(null==t.name||"auto"===t.name)throw Error(o(544));
var n=t.name;
"none"!==(t=$r(t.default,t.share))&&(hu(e,n,t,null,!1)||fu(e.child,!1))}
e=e.sibling}}
function mu(e,t){if(30===e.tag){var n=e.stateNode,r=e.memoizedProps,a=Hr(r,n),i=$r(r.default,n.paired?r.share:r.enter);
"none"!==i?hu(e,a,i,null,!1)?(pu(e),n.paired||t||Wc(e,r.onEnter)):fu(e.child,!1):pu(e)}else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)mu(e,t),e=e.sibling;
else pu(e)}
function gu(e){if(null!==ou&&0!==ou.size){var t=ou;
if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&18874368&e.flags){var n=e.memoizedProps,r=n.name;
if(null!=r&&"auto"!==r){var a=t.get(r);
if(void 0!==a){var i=$r(n.default,n.share);
if("none"!==i&&(hu(e,r,i,null,!1)?(a.paired=i=e.stateNode,i.paired=a,Wc(e,n.onShare)):fu(e.child,!1)),t.delete(r),0===t.size)break}}}
gu(e)}
e=e.sibling}}}
function vu(e){if(30===e.tag){var t=e.memoizedProps,n=Hr(t,e.stateNode),r=null!==ou?ou.get(n):void 0,a=$r(t.default,void 0!==r?t.share:t.exit);
"none"!==a&&(hu(e,n,a,null,!1)?void 0!==r?(r.paired=a=e.stateNode,a.paired=r,ou.delete(n),Wc(e,t.onShare)):Wc(e,t.onExit):fu(e.child,!1)),null!==ou&&gu(e)}else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)vu(e),e=e.sibling;
else null!==ou&&gu(e)}
function bu(e){if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&18874368&e.flags){var t=e.stateNode;
null!==t.paired&&(t.paired=null,fu(e.child,!1))}
bu(e)}
e=e.sibling}}
function yu(e){if(30===e.tag)e.stateNode.paired=null,fu(e.child,!1),bu(e);
else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)yu(e),e=e.sibling;
else bu(e)}
function ku(e,t,n,r,a,i,s){for(var o=!1;null!==t;){if(5===t.tag){var l=t.stateNode;
if(null!==i&&du<i.length){var u,c=i[du],d=Lh(l);
if((c.view||d.view)&&(o=!0),u=!(4&e.flags))if(d.clip)u=!0;
else{u=c.rect;
var h=d.rect;
u=u.y!==h.y||u.x!==h.x||u.height!==h.height||u.width!==h.width}
u&&(e.flags|=4),d.abs?d=!c.abs:(c=c.rect,d=d.rect,d=c.height!==d.height||c.width!==d.width),d&&(e.flags|=32)}else e.flags|=32;
!!(4&e.flags)&&Nh(l,0===du?n:n+"_"+du,a),o&&!!(4&e.flags)||(null===uu&&(uu=[]),uu.push(l,0===du?r:r+"_"+du,t.memoizedProps)),du++}else(22!==t.tag||null===t.memoizedState)&&(30===t.tag&&s?e.flags|=32&t.flags:ku(e,t.child,n,r,a,i,s)&&(o=!0));
t=t.sibling}
return o}
var wu=!1,xu=!1,ju=!1,Su=!1,_u="function"==typeof WeakSet?WeakSet:Set,qu=null,Eu=!1,zu=!1,Nu=!1,Mu=!1;
function Cu(e){for(;null!==qu;){var t=qu,n=e,r=t.alternate,a=t.flags;
switch(t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;
case 1:if(1024&a&&null!==r){n=void 0,a=r.memoizedProps,r=r.memoizedState;
var i=t.stateNode;
try{var s=Zo(t.type,a);
n=i.getSnapshotBeforeUpdate(s,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(e){wd(t,t.return,e)}}
break;
case 3:if(1024&a)if(9===(n=(r=t.stateNode.containerInfo).nodeType))tf(r);
else if(1===n)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":tf(r);
break;
default:r.textContent=""}
break;
case 30:n&&null!==r&&(n=Hr(r.memoizedProps,r.stateNode),"none"!==(a=$r((a=t.memoizedProps).default,a.update))&&hu(r,n,a,r.memoizedState=[],!0));
break;
default:if(1024&a)throw Error(o(163))}
if(null!==(r=t.sibling)){r.return=t.return,qu=r;
break}
qu=t.return}}
function Lu(e,t,n){var r=n.flags;
switch(n.tag){case 0:case 11:case 15:$u(e,n),4&r&&Gl(5,n);
break;
case 1:if($u(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(e){wd(n,n.return,e)}else{var a=Zo(n.type,t.memoizedProps);
t=t.memoizedState;
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){wd(n,n.return,e)}}64&r&&Hl(n),512&r&&$l(n,n.return);
break;
case 3:if($u(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}
try{Qi(e,t)}catch(e){wd(n,n.return,e)}}
break;
case 27:null===t&&4&r&&iu(n);
case 26:case 5:$u(e,n),null===t&&4&r&&eu(n),512&r&&$l(n,n.return);
break;
case 12:$u(e,n);
break;
case 31:$u(e,n),4&r&&Ou(e,n);
break;
case 13:$u(e,n),4&r&&Du(e,n),64&r&&null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;
if("$~"===e.data)e._reactRetry=t;
else if("$?"!==e.data||"loading"!==n.readyState)t();
else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};
n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=_d.bind(null,n));
break;
case 22:if(!(r=null!==n.memoizedState||wu)){var i=null!==t&&null!==t.memoizedState||xu;
t=wu,a=xu,wu=r,(xu=i)&&!a?(r=2,!!(8772&n.subtreeFlags)&&(r|=1),function e(t,n,r){for(r=8772&n.subtreeFlags?r:-2&r,n=n.child;null!==n;){var a=n.alternate,i=t,s=n,o=s.flags,l=!!(1&r);
switch(s.tag){case 0:case 11:case 15:e(i,s,r),Gl(4,s);
break;
case 1:if(e(i,s,r),"function"==typeof(i=(a=s).stateNode).componentDidMount)try{i.componentDidMount()}catch(e){wd(a,a.return,e)}
if(null!==(i=(a=s).updateQueue)){var u=a.stateNode;
try{var c=i.shared.hiddenCallbacks;
if(null!==c)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Zi(c[i],u)}catch(e){wd(a,a.return,e)}}
l&&64&o&&Hl(s),$l(s,s.return);
break;
case 27:2&r&&iu(s);
case 5:5!==s.tag&&27!==s.tag||Ql(s),e(i,s,r),l&&null===a&&4&o&&eu(s),$l(s,s.return);
break;
case 6:Ql(s);
break;
case 26:u=s.stateNode,null!==s.memoizedState||null===u||wu||Cf(mf(u.ownerDocument),s.type,u),e(i,s,r),l&&null===a&&4&o&&eu(s),$l(s,s.return);
break;
case 12:e(i,s,r);
break;
case 31:e(i,s,r),l&&4&o&&Ou(i,s);
break;
case 13:e(i,s,r),l&&4&o&&Du(i,s);
break;
case 22:null===s.memoizedState&&e(i,s,r),$l(s,s.return);
break;
case 30:e(i,s,r),$l(s,s.return);
break;
case 7:$l(s,s.return);
default:e(i,s,r)}
n=n.sibling}}(e,n,r)):$u(e,n),wu=t,xu=a}
break;
case 30:$u(e,n),512&r&&$l(n,n.return);
break;
case 7:512&r&&$l(n,n.return);
default:$u(e,n)}}
function Tu(e,t){for(e=e.child;null!==e;)(function e(t,n){switch(t.tag){case 5:case 26:try{var r=t.stateNode;
if(n){var a=r.style;
"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"}else{var i=t.stateNode,s=t.memoizedProps.style,o=null!=s&&s.hasOwnProperty("display")?s.display:null;
i.style.display=null==o||"boolean"==typeof o?"":(""+o).trim()}}catch(e){wd(t,t.return,e)}!function t(n,r){if(67108864&n.subtreeFlags)for(n=n.child;null!==n;){e:{var a=n;
switch(a.tag){case 4:e(a,r);
break e;
case 22:null===a.memoizedState&&t(a,r);
break e;
default:t(a,r)}}
n=n.sibling}}(t,n);
break;
case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,wt=!0}catch(e){wd(t,t.return,e)}
break;
case 18:try{var l=t.stateNode;
n?zh(l,!0):zh(t.stateNode,!1)}catch(e){wd(t,t.return,e)}
break;
case 22:case 23:null===t.memoizedState&&Tu(t,n);
break;
default:Tu(t,n)}})(e,t),e=e.sibling}
var Au=null,Pu=!1;
function Iu(e,t,n){for(n=n.child;null!==n;)Ru(e,t,n),n=n.sibling}
function Ru(e,t,n){if(Ne&&"function"==typeof Ne.onCommitFiberUnmount)try{Ne.onCommitFiberUnmount(ze,n)}catch(e){}
switch(n.tag){case 26:xu||Vl(n,t),Iu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!xu&&(n=n.stateNode).parentNode.removeChild(n);
break;
case 27:xu||Vl(n,t),Yl(n);
var r=Au,a=Pu;
qh(n.type)&&(Au=n.stateNode,Pu=!1),Iu(e,t,n),df(n.stateNode,n.type,n.memoizedProps),Au=r,Pu=a;
break;
case 5:xu||Vl(n,t),Yl(n);
case 6:if(6===n.tag&&Yl(n),r=Au,a=Pu,Au=null,Iu(e,t,n),Pu=a,null!==(Au=r))if(Pu)try{(9===Au.nodeType?Au.body:"HTML"===Au.nodeName?Au.ownerDocument.body:Au).removeChild(n.stateNode),wt=!0}catch(e){wd(n,t,e)}else try{Au.removeChild(n.stateNode),wt=!0}catch(e){wd(n,t,e)}
break;
case 18:null!==Au&&(Pu?(Eh(9===(e=Au).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),xp(e)):Eh(Au,n.stateNode));
break;
case 4:r=Au,a=Pu,Au=n.stateNode.containerInfo,Pu=!0,Iu(e,t,n),Au=r,Pu=a;
break;
case 0:case 11:case 14:case 15:Ul(2,n,t),xu||Ul(4,n,t),Iu(e,t,n);
break;
case 1:xu||(Vl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&Wl(n,t,r)),Iu(e,t,n);
break;
case 21:default:Iu(e,t,n);
break;
case 22:xu=(r=xu)||null!==n.memoizedState,Iu(e,t,n),xu=r;
break;
case 30:Vl(n,t),Iu(e,t,n);
break;
case 7:xu||Vl(n,t),Iu(e,t,n)}}
function Ou(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)){e=e.dehydrated;
try{xp(e)}catch(e){wd(t,t.return,e)}}}
function Du(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{xp(e)}catch(e){wd(t,t.return,e)}}
function Fu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;
return null===t&&(t=e.stateNode=new _u),t;
case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new _u),t;
default:throw Error(o(435,e.tag))}}(e);
t.forEach(function(t){if(!n.has(t)){n.add(t);
var r=qd.bind(null,e,t);
t.then(r,r)}})}
function Bu(e,t,n){var r=t.deletions;
if(null!==r)for(var a=0;a<r.length;a++){var i=r[a],s=e,l=t,u=l;
e:for(;null!==u;){switch(u.tag){case 27:if(qh(u.type)){Au=u.stateNode,Pu=!1;
break e}
break;
case 5:Au=u.stateNode,Pu=!1;
break e;
case 3:case 4:Au=u.stateNode.containerInfo,Pu=!0;
break e}
u=u.return}
if(null===Au)throw Error(o(160));
Ru(s,l,i),Au=null,Pu=!1,null!==(s=i.alternate)&&(s.return=null),i.return=null}
if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Gu(t,e,n),t=t.sibling}
var Ku=null;
function Gu(e,t,n){var r=e.alternate,a=e.flags;
switch(e.tag){case 0:case 11:case 14:case 15:if(4&a&&null!==(r=null!==(r=e.updateQueue)?r.events:null))for(var i=0;i<r.length;i++){var s=r[i];
s.ref.impl=s.nextImpl}
Bu(t,e,n),Uu(e),4&a&&(Ul(3,e,e.return),Gl(3,e),Ul(5,e,e.return));
break;
case 1:Bu(t,e,n),Uu(e),512&a&&(xu||null===r||Vl(r,r.return)),64&a&&wu&&null!==(e=e.updateQueue)&&null!==(t=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?t:n.concat(t));
break;
case 26:if(i=Ku,Bu(t,e,n),Uu(e),512&a&&(xu||null===r||Vl(r,r.return)),4&a)if(a=null!==r?r.memoizedState:null,n=e.memoizedState,null===r)if(null===n)if(null===e.stateNode)if(wu)e.stateNode=vh(e.type,e.memoizedProps,t.containerInfo,e);
else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;
t:switch(t){case"title":(!(r=a.getElementsByTagName("title")[0])||r[it]||r[Je]||"http://www.w3.org/2000/svg"===r.namespaceURI||r.hasAttribute("itemprop"))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector("head > title"))),uh(r,t,n),r[Je]=e,ht(r),t=r;
break e;
case"link":if(i=Mf("link","href",a).get(t+(n.href||"")))for(s=0;s<i.length;s++)if((r=i[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&r.getAttribute("rel")===(null==n.rel?null:n.rel)&&r.getAttribute("title")===(null==n.title?null:n.title)&&r.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(s,1);
break t}
uh(r=a.createElement(t),t,n),a.head.appendChild(r);
break;
case"meta":if(i=Mf("meta","content",a).get(t+(n.content||"")))for(s=0;s<i.length;s++)if((r=i[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&r.getAttribute("name")===(null==n.name?null:n.name)&&r.getAttribute("property")===(null==n.property?null:n.property)&&r.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&r.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(s,1);
break t}
uh(r=a.createElement(t),t,n),a.head.appendChild(r);
break;
default:throw Error(o(468,t))}
r[Je]=e,ht(r),t=r}
e.stateNode=t}else wu||Cf(i,e.type,e.stateNode);
else e.stateNode=_f(i,n,e.memoizedProps);
else a!==n?(null===a?null===(t=r.stateNode)||xu||t.parentNode.removeChild(t):a.count--,null===n?wu||Cf(i,e.type,e.stateNode):_f(i,n,e.memoizedProps)):null===n&&null!==e.stateNode&&tu(e,e.memoizedProps,r.memoizedProps);
break;
case 27:Bu(t,e,n),Uu(e),512&a&&(xu||null===r||Vl(r,r.return)),null!==r&&4&a&&tu(e,e.memoizedProps,r.memoizedProps);
break;
case 5:if(i=ju,ju=!1,Bu(t,e,n),ju=i,Uu(e),512&a&&(xu||null===r||Vl(r,r.return)),32&e.flags){t=e.stateNode;
try{Ot(t,""),wt=!0}catch(t){wd(e,e.return,t)}}4&a&&null!=e.stateNode&&tu(e,t=e.memoizedProps,null!==r?r.memoizedProps:t),1024&a&&(Su=!0);
break;
case 6:if(Bu(t,e,n),Uu(e),4&a){if(null===e.stateNode)throw Error(o(162));
t=e.memoizedProps,n=e.stateNode;
try{n.nodeValue=t,wt=!0}catch(t){wd(e,e.return,t)}}
break;
case 3:if(wt=!1,Nf=null,i=Ku,Ku=mf(t.containerInfo),Bu(t,e,n),Ku=i,Uu(e),4&a&&null!==r&&r.memoizedState.isDehydrated)try{xp(t.containerInfo)}catch(t){wd(e,e.return,t)}
Su&&(Su=!1,function e(t){if(1024&t.subtreeFlags)for(t=t.child;null!==t;){var n=t;
e(n),5===n.tag&&1024&n.flags&&(n=n.stateNode,Yf=!0,n.reset(),Yf=!1),t=t.sibling}}(e)),wt=!1;
break;
case 4:a=ju,ju=wu,r=xt(),i=Ku,Ku=mf(e.stateNode.containerInfo),Bu(t,e,n),Uu(e),Ku=i,wt&&zu&&(Nu=!0),wt=r,ju=a;
break;
case 12:Bu(t,e,n),Uu(e);
break;
case 31:case 19:Bu(t,e,n),Uu(e),4&a&&null!==(t=e.updateQueue)&&(e.updateQueue=null,Fu(e,t));
break;
case 13:Bu(t,e,n),Uu(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==r&&null!==r.memoizedState)&&(Ec=ye()),4&a&&null!==(t=e.updateQueue)&&(e.updateQueue=null,Fu(e,t));
break;
case 22:i=null!==e.memoizedState,s=null!==r&&null!==r.memoizedState;
var l=wu,u=xu,c=ju;
wu=l||i,ju=c||i,xu=u||s,Bu(t,e,n),xu=u,ju=c,wu=l,Uu(e),8192&a&&((t=e.stateNode)._visibility=i?-2&t._visibility:1|t._visibility,!i||null===r||s||wu||xu||(n=wu,r=xu,wu=i||wu,xu=t=s||xu,function e(t,n){for(t=t.child;null!==t;){var r=t;
switch(r.tag){case 0:case 11:case 14:case 15:Ul(4,r,r.return),e(r,n);
break;
case 1:Vl(r,r.return);
var a=r.stateNode;
"function"==typeof a.componentWillUnmount&&Wl(r,r.return,a),e(r,n);
break;
case 27:2&n&&df(r.stateNode,r.type,r.memoizedProps);
case 5:Vl(r,r.return),5!==r.tag&&27!==r.tag||Yl(r),e(r,n);
break;
case 6:Yl(r);
break;
case 26:Vl(r,r.return),a=r.stateNode,null!==r.memoizedState||null===a||xu||a.parentNode.removeChild(a),e(r,n);
break;
case 22:null===r.memoizedState&&e(r,n);
break;
case 30:Vl(r,r.return),e(r,n);
break;
case 7:Vl(r,r.return);
default:e(r,n)}
t=t.sibling}}(e,2),wu=n,xu=r),!i&&ju||Tu(e,i)),4&a&&null!==(t=e.updateQueue)&&null!==(n=t.retryQueue)&&(t.retryQueue=null,Fu(e,n));
break;
case 30:512&a&&(xu||null===r||Vl(r,r.return)),a=xt(),i=zu,s=(335544064&n)===n,l=e.memoizedProps,zu=s&&"none"!==$r(l.default,l.update),Bu(t,e,n),Uu(e),s&&null!==r&&wt&&(e.flags|=4),zu=i,wt=a;
break;
case 21:break;
case 7:512&a&&(xu||null===r||Vl(r,r.return)),r&&null!==r.stateNode&&(r.stateNode._fragmentFiber=e);
default:Bu(t,e,n),Uu(e)}}
function Uu(e){var t=e.flags;
if(2&t){try{for(var n,r=e.return;null!==r;){if(nu(r)){n=r;
break}
r=r.return}
r=null;
for(var a=e.return;null!==a;){if(Xl(a)){var i=a.stateNode;
null===r?r=[i]:r.push(i)}
if(Jl(a))break;
a=a.return}
var s=r;
if(null==n)throw Error(o(160));
switch(n.tag){case 27:var l=n.stateNode;
au(e,ru(e),l,s);
break;
case 5:var u=n.stateNode;
32&n.flags&&(Ot(u,""),n.flags&=-33),au(e,ru(e),u,s);
break;
case 3:case 4:var c=n.stateNode.containerInfo;
!function e(t,n,r,a){var i=t.tag;
if(5===i||6===i)i=t.stateNode,n?(9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).insertBefore(i,n):((n=9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).appendChild(i),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=Wt)),Zl(t,a),wt=!0;
else if(4!==i&&(27===i&&(Zl(t,a),a=null,qh(t.type)&&(r=t.stateNode,n=null)),null!==(t=t.child)))for(e(t,n,r,a),t=t.sibling;null!==t;)e(t,n,r,a),t=t.sibling}(e,ru(e),c,s);
break;
default:throw Error(o(161))}}catch(t){wd(e,e.return,t)}
e.flags&=-3}4096&t&&(e.flags&=-4097)}
function Hu(e,t){if(9270&t.subtreeFlags)for(t=t.child;null!==t;)Wu(t,e),t=t.sibling;
else!function e(t,n){for(t=t.child;null!==t;){if(30===t.tag){var r=t.memoizedProps,a=t.stateNode,i=Hr(r,a),s=$r(r.default,r.update);
if(n)var o=null===(a=a.clones)?null:a.map(Th);
else o=t.memoizedState,t.memoizedState=null;
a=t;
var l=t.child;
du=0,i=ku(a,l,i,i,s,o,!1),4&t.flags&&i&&(n||Wc(t,r.onUpdate))}else 33554432&t.subtreeFlags&&e(t,n);
t=t.sibling}}(t,!1)}
function Wu(e,t){var n=e.alternate;
if(null===n)mu(e,!1);
else switch(e.tag){case 3:if(Mu=Eu=!1,cu(),Hu(t,e),!Eu&&!Nu){if(null!==(e=uu))for(var r=0;r<e.length;r+=3){n=e[r];
var a=e[r+1];
Mh(n,e[r+2]),null!==(n=n.ownerDocument.documentElement)&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}
null!==(e=9===(e=t.containerInfo).nodeType?e.documentElement:e.ownerDocument.documentElement)&&""===e.style.viewTransitionName&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Mu=!0}
uu=null;
break;
case 5:default:Hu(t,e);
break;
case 4:r=Eu,Eu=!1,Hu(t,e),Eu&&(Nu=!0),Eu=r;
break;
case 22:null===e.memoizedState&&(null!==n.memoizedState?mu(e,!1):Hu(t,e));
break;
case 30:r=Eu,a=cu(),Eu=!1,Hu(t,e),Eu&&(e.flags|=4);
var i=e.memoizedProps,s=e.stateNode;
t=Hr(i,s),s=Hr(n.memoizedProps,s);
var o=$r(i.default,i.update);
"none"===o?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,du=0,t=ku(e,n,t,s,o,i,!0),du!==(null===i?0:i.length)&&(e.flags|=32)),4&e.flags&&t?(Wc(e,e.memoizedProps.onUpdate),uu=a):null!==a&&(a.push.apply(a,uu),uu=a),Eu=!!(32&e.flags)||r}}
function $u(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Lu(e,t.alternate,t),t=t.sibling}
function Vu(e,t){var n=null;
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&li(n))}
function Zu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&li(e))}
function Qu(e,t,n,r){var a=(335544064&n)===n;
if(t.subtreeFlags&(a?10262:10256))for(t=t.child;null!==t;)Yu(e,t,n,r),t=t.sibling;
else a&&function e(t){for(t=t.child;null!==t;)30===t.tag?fu(t.child,!1):!!(33554432&t.subtreeFlags)&&e(t),t=t.sibling}(t)}
function Yu(e,t,n,r){var a=(335544064&n)===n;
a&&null===t.alternate&&null!==t.return&&null!==t.return.alternate&&yu(t);
var i=t.flags;
switch(t.tag){case 0:case 11:case 15:Qu(e,t,n,r),2048&i&&Gl(9,t);
break;
case 1:case 31:case 13:default:Qu(e,t,n,r);
break;
case 3:Qu(e,t,n,r),a&&Mu&&("root"===(e=9===(e=e.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).style.viewTransitionName&&(e.style.viewTransitionName=""),null!==(e=e.ownerDocument.documentElement)&&"none"===e.style.viewTransitionName&&(e.style.viewTransitionName="")),2048&i&&(i=null,null!==t.alternate&&(i=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==i&&(t.refCount++,null!=i&&li(i)));
break;
case 12:if(2048&i){Qu(e,t,n,r),i=t.stateNode;
try{var s=t.memoizedProps,o=s.id,l=s.onPostCommit;
"function"==typeof l&&l(o,null===t.alternate?"mount":"update",i.passiveEffectDuration,-0)}catch(e){wd(t,t.return,e)}}else Qu(e,t,n,r);
break;
case 23:break;
case 22:s=t.stateNode,o=t.alternate,null!==t.memoizedState?(a&&null!==o&&null===o.memoizedState&&yu(o),2&s._visibility?Qu(e,t,n,r):Ju(e,t)):(a&&null!==o&&null!==o.memoizedState&&yu(t),2&s._visibility?Qu(e,t,n,r):(s._visibility|=2,function e(t,n,r,a,i){for(i=i&&!!(10256&n.subtreeFlags),n=n.child;null!==n;){var s=n,o=s.flags;
switch(s.tag){case 0:case 11:case 15:e(t,s,r,a,i),Gl(8,s);
break;
case 23:break;
case 22:var l=s.stateNode;
null!==s.memoizedState?2&l._visibility?e(t,s,r,a,i):Ju(t,s):(l._visibility|=2,e(t,s,r,a,i)),i&&2048&o&&Vu(s.alternate,s);
break;
case 24:e(t,s,r,a,i),i&&2048&o&&Zu(s.alternate,s);
break;
default:e(t,s,r,a,i)}
n=n.sibling}}(e,t,n,r,!!(10256&t.subtreeFlags)))),2048&i&&Vu(o,t);
break;
case 24:Qu(e,t,n,r),2048&i&&Zu(t.alternate,t);
break;
case 30:a&&null!==(i=t.alternate)&&(fu(i.child,!0),fu(t.child,!0)),Qu(e,t,n,r)}}
function Ju(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=t,r=n.flags;
switch(n.tag){case 22:Ju(e,n),2048&r&&Vu(n.alternate,n);
break;
case 24:Ju(e,n),2048&r&&Zu(n.alternate,n);
break;
default:Ju(e,n)}
t=t.sibling}}
var Xu=8192;
function ec(e,t,n){if(e.subtreeFlags&Xu)for(e=e.child;null!==e;)tc(e,t,n),e=e.sibling}
function tc(e,t,n){switch(e.tag){case 26:ec(e,t,n),e.flags&Xu&&(null!==e.memoizedState?function(e,t,n,r){if(!("stylesheet"!==n.type||"string"==typeof r.media&&!1===matchMedia(r.media).matches||4&n.state.loading)){if(null===n.instance){var a=kf(r.href),i=t.querySelector(wf(a));
if(i)return null!==(t=i._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=Of.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,void ht(i);
i=t.ownerDocument||t,r=xf(r),(a=ff.get(a))&&Ef(r,a),ht(i=i.createElement("link"));
var s=i;
s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),uh(i,"link",r),n.instance=i}
null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(3&n.state.loading)&&(e.count++,n=Of.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Ku,e.memoizedState,e.memoizedProps):(e=e.stateNode,(335544128&t)===t&&Pf(n,e)));
break;
case 5:ec(e,t,n),e.flags&Xu&&(e=e.stateNode,(335544128&t)===t&&Pf(n,e));
break;
case 3:case 4:var r=Ku;
Ku=mf(e.stateNode.containerInfo),ec(e,t,n),Ku=r;
break;
case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=Xu,Xu=16777216,ec(e,t,n),Xu=r):ec(e,t,n));
break;
case 30:if(0!=(e.flags&Xu)&&null!=(r=e.memoizedProps.name)&&"auto"!==r){var a=e.stateNode;
a.paired=null,null===ou&&(ou=new Map),ou.set(r,a)}
ec(e,t,n);
break;
default:ec(e,t,n)}}
function nc(e){var t=e.alternate;
if(null!==t&&null!==(e=t.child)){t.child=null;
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}
function rc(e){var t=e.deletions;
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];
qu=r,ic(r,e)}
nc(e)}
if(10256&e.subtreeFlags)for(e=e.child;null!==e;)ac(e),e=e.sibling}
function ac(e){switch(e.tag){case 0:case 11:case 15:rc(e),2048&e.flags&&Ul(9,e,e.return);
break;
case 3:case 12:default:rc(e);
break;
case 22:var t=e.stateNode;
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,function e(t){var n=t.deletions;
if(16&t.flags){if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];
qu=a,ic(a,t)}
nc(t)}
for(t=t.child;null!==t;){switch((n=t).tag){case 0:case 11:case 15:Ul(8,n,n.return),e(n);
break;
case 22:2&(r=n.stateNode)._visibility&&(r._visibility&=-3,e(n));
break;
default:e(n)}
t=t.sibling}}(e)):rc(e)}}
function ic(e,t){for(;null!==qu;){var n=qu;
switch(n.tag){case 0:case 11:case 15:Ul(8,n,t);
break;
case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;
null!=r&&r.refCount++}
break;
case 24:li(n.memoizedState.cache)}
if(null!==(r=n.child))r.return=n,qu=r;
else for(n=e;null!==qu;){var a=(r=qu).sibling,i=r.return;
if(function e(t){var n=t.alternate;
null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&ot(n),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(r),r===n){qu=null;
break}
if(null!==a){a.return=i,qu=a;
break}
qu=i}}}
var sc={getCacheForType:function(e){var t=ei(si),n=t.data.get(e);
return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ei(si).controller.signal}},oc="function"==typeof WeakMap?WeakMap:Map,lc=0,uc=null,cc=null,dc=0,hc=0,fc=null,pc=!1,mc=!1,gc=!1,vc=0,bc=0,yc=0,kc=0,wc=0,xc=0,jc=0,Sc=null,_c=null,qc=!1,Ec=0,zc=0,Nc=1/0,Mc=null,Cc=null,Lc=0,Tc=null,Ac=null,Pc=0,Ic=0,Rc=null,Oc=null,Dc=null,Fc=null,Bc=null,Kc=0,Gc=null;
function Uc(){return 2&lc&&0!==dc?dc&-dc:null!==V.T?Fd():Ze()}
function Hc(){if(0===xc)if(536870912&dc&&!Ta)xc=536870912;
else{var e=Pe;
!(3932160&(Pe<<=1))&&(Pe=262144),xc=e}
return null!==(e=ns.current)&&(e.flags|=32),xc}
function Wc(e,t){if(null!=t){var n=e.stateNode,r=n.ref;
null===r&&(r=n.ref=Ih(Hr(e.memoizedProps,n))),null===Fc&&(Fc=[]),Fc.push(t.bind(null,r))}}
function $c(e,t,n){(e===uc&&(2===hc||9===hc)||null!==e.cancelPendingCommit)&&(Xc(e,0),Qc(e,dc,xc,!1)),Ge(e,n),(!(2&lc)||e!==uc)&&(e===uc&&(!(2&lc)&&(kc|=n),4===bc&&Qc(e,dc,xc,!1)),Td(e))}
function Vc(e,t,n){if(6&lc)throw Error(o(327));
for(var r=!n&&!(127&t)&&0==(t&e.expiredLanes)||De(e,t),a=r?function(e,t){var n=lc;
lc|=2;
var r=nd(),a=rd();
uc!==e||dc!==t?(Mc=null,Nc=ye()+500,Xc(e,t)):mc=De(e,t);
e:for(;;)try{if(0!==hc&&null!==cc){t=cc;
var i=fc;
t:switch(hc){case 1:hc=0,fc=null,ld(e,t,i,1);
break;
case 2:case 9:if(_i(i)){hc=0,fc=null,od(t);
break}
t=function(){2!==hc&&9!==hc||uc!==e||(hc=7),Td(e)},i.then(t,t);
break e;
case 3:hc=7;
break e;
case 4:hc=5;
break e;
case 7:_i(i)?(hc=0,fc=null,od(t)):(hc=0,fc=null,ld(e,t,i,7));
break;
case 5:var s=null;
switch(cc.tag){case 26:s=cc.memoizedState;
case 5:case 27:var l=cc;
if(s?Tf(s):l.stateNode.complete){hc=0,fc=null;
var u=l.sibling;
if(null!==u)cc=u;
else{var c=l.return;
null!==c?(cc=c,ud(c)):cc=null}
break t}}
hc=0,fc=null,ld(e,t,i,5);
break;
case 6:hc=0,fc=null,ld(e,t,i,6);
break;
case 8:Jc(),bc=6;
break e;
default:throw Error(o(462))}}
for(;null!==cc&&!ve();)sd(cc);
break}catch(t){ed(e,t)}
return Wa=Ha=null,V.H=r,V.A=a,lc=n,null!==cc?0:(uc=null,dc=0,Jr(),bc)}(e,t):id(e,t,!0),i=r;;){if(0===a)mc&&!r&&Qc(e,t,0,!1);
else{if(n=e.current.alternate,i&&!function(e){for(var t=e;;){var n=t.tag;
if((0===n||11===n||15===n)&&16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;
a=a.value;
try{if(!gr(i(),a))return!1}catch(e){return!1}}
if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;
else{if(t===e)break;
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;
t=t.return}
t.sibling.return=t.return,t=t.sibling}}
return!0}(n)){a=id(e,t,!1),i=!1;
continue}
if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;
else s=0!=(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;
if(0!==s){t=s;
e:{a=Sc;
var l=e.current.memoizedState.isDehydrated;
if(l&&(Xc(e,s).flags|=256),2!==(s=id(e,s,!1))&&6!==s){if(gc&&!l){e.errorRecoveryDisabledLanes|=i,kc|=i,a=4;
break e}
i=_c,_c=a,null!==i&&(null===_c?_c=i:_c.push.apply(_c,i))}
a=s}
if(i=!1,2!==a)continue}}
if(1===a){Xc(e,0),Qc(e,t,0,!0);
break}
e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));
case 4:if((4194048&t)!==t&&(62914560&t)!==t)break;
case 6:Qc(r,t,xc,!pc);
break e;
case 2:_c=null;
break;
case 3:case 5:break;
default:throw Error(o(329))}
if((62914560&t)===t&&10<(a=Ec+300-ye())){if(Qc(r,t,xc,!pc),0!==Oe(r,0,!0))break e;
Pc=t,r.timeoutHandle=kh(Zc.bind(null,r,n,_c,Mc,qc,t,xc,kc,jc,pc,i,"Throttled",-0,0),a)}else Zc(r,n,_c,Mc,qc,t,xc,kc,jc,pc,i,null,-0,0)}}
break}
Td(e)}
function Zc(e,t,n,r,a,i,s,o,l,u,c,d,h,f){e.timeoutHandle=-1;
var p,m,g=t.subtreeFlags,v=(335544064&i)===i;
if(d=null,(v||8192&g||!(16785408&~g))&&(ou=null,tc(t,i,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt}),v&&(g=d,null!=(v=(9===(v=e.containerInfo).nodeType?v:v.ownerDocument).__reactViewTransition)&&(g.count++,g.waitingForViewTransition=!0,g=Of.bind(g),v.finished.then(g,g))),null!==(p=d,m=g=(62914560&i)===i?Ec-ye():(4194048&i)===i?zc-ye():0,p.stylesheets&&0===p.count&&Bf(p,p.stylesheets),g=0<p.count||0<p.imgCount?function(e){var t=setTimeout(function(){if(p.stylesheets&&Bf(p,p.stylesheets),p.unsuspend){var e=p.unsuspend;
p.unsuspend=null,e()}},6e4+m);
0<p.imgBytes&&0===If&&(If=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],i=a.transferSize,s=a.initiatorType,o=a.duration;
if(i&&o&&dh(s)){for(s=0,o=a.responseEnd,r+=1;r<n.length;r++){var l=n[r],u=l.startTime;
if(u>o)break;
var c=l.transferSize,d=l.initiatorType;
c&&dh(d)&&(s+=c*((l=l.responseEnd)<o?1:(o-u)/(l-u)))}
if(--r,t+=8*(i+s)/(a.duration/1e3),10<++e)break}}
if(0<e)return t/e/1e6}
return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}());
var n=setTimeout(function(){if(p.waitingForImages=!1,0===p.count&&(p.stylesheets&&Bf(p,p.stylesheets),p.unsuspend)){var e=p.unsuspend;
p.unsuspend=null,e()}},(p.imgBytes>If?50:800)+m);
return p.unsuspend=e,function(){p.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null)))return Pc=i,e.cancelPendingCommit=g(dd.bind(null,e,t,i,n,r,a,s,o,l,u,c,d,null,h,f)),void Qc(e,i,s,!u);
dd(e,t,i,n,r,a,s,o,l,u,c,d)}
function Qc(e,t,n,r){t=Fe(e,t)&~wc&~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;
for(var a=t;0<a;){var i=31-Ce(a),s=1<<i;
r[i]=-1,a&=~s}0!==n&&Ue(e,n,t)}
function Yc(){return!!(6&lc)||(Ad(0,!1),!1)}
function Jc(){if(null!==cc){if(0===hc)var e=cc.return;
else Wa=Ha=null,Ls(e=cc),Ci=null,Li=0,e=cc;
for(;null!==e;)Kl(e.alternate,e),e=e.return;
cc=null}}
function Xc(e,t){var n=e.timeoutHandle;
return-1!==n&&(e.timeoutHandle=-1,wh(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Pc=0,Jc(),uc=e,cc=n=la(e.current,null),dc=t,hc=0,fc=null,pc=!1,mc=De(e,t),gc=!1,jc=xc=wc=kc=yc=bc=0,_c=Sc=null,qc=!1,vc=Fe(e,t),Jr(),n}
function ed(e,t){ps=null,V.H=Bo,t===wi||t===ji?(t=Ni(),hc=3):t===xi?(t=Ni(),hc=4):hc=t===al?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,fc=t,null===cc&&(bc=1,Xo(e,ga(t,e.current)))}
function td(){var e=ns.current;
return null===e||((4194048&dc)===dc?null===rs:((62914560&dc)===dc||!!(536870912&dc))&&e===rs)}
function nd(){var e=V.H;
return V.H=Bo,null===e?Bo:e}
function rd(){var e=V.A;
return V.A=sc,e}
function ad(){bc=4,pc||(4194048&dc)!==dc&&null!==ns.current||(mc=!0),!(134217727&yc)&&!(134217727&kc)||null===uc||Qc(uc,dc,xc,!1)}
function id(e,t,n){var r=lc;
lc|=2;
var a=nd(),i=rd();
(uc!==e||dc!==t)&&(Mc=null,Xc(e,t)),t=!1;
var s=bc;
e:for(;;)try{if(0!==hc&&null!==cc){var o=cc,l=fc;
switch(hc){case 8:Jc(),s=6;
break e;
case 3:case 2:case 9:case 6:null===ns.current&&(t=!0);
var u=hc;
if(hc=0,fc=null,ld(e,o,l,u),n&&mc){s=0;
break e}
break;
default:u=hc,hc=0,fc=null,ld(e,o,l,u)}}(function(){for(;null!==cc;)sd(cc)})(),s=bc;
break}catch(t){ed(e,t)}
return t&&e.shellSuspendCounter++,Wa=Ha=null,lc=r,V.H=a,V.A=i,null===cc&&(uc=null,dc=0,Jr()),s}
function sd(e){var t=Pl(e.alternate,e,vc);
e.memoizedProps=e.pendingProps,null===t?ud(e):cc=t}
function od(e){var t=e,n=t.alternate;
switch(t.tag){case 15:case 0:t=vl(n,t,t.pendingProps,t.type,void 0,dc);
break;
case 11:t=vl(n,t,t.pendingProps,t.type.render,t.ref,dc);
break;
case 5:Ls(t);
var r=t;
r===Ca&&(Ta?(Da(r),5===r.tag&&null!=r.stateNode&&(La=r.stateNode)):(Da(r),Ta=!0));
default:Kl(n,t),t=Pl(n,t=cc=ua(t,vc),vc)}
e.memoizedProps=e.pendingProps,null===t?ud(e):cc=t}
function ld(e,t,n,r){Wa=Ha=null,Ls(t),Ci=null,Li=0;
var a=t.return;
try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&Ya(t,n,a,!0),null!==(n=ns.current)){switch(n.tag){case 31:case 13:case 19:return null===rs?ad():null===n.alternate&&0===bc&&(bc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Si?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),xd(e,r,a)),!1;
case 22:return n.flags|=65536,r===Si?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),xd(e,r,a)),!1}
throw Error(o(435,n.tag))}
return xd(e,r,a),ad(),!1}
if(Ta)return null!==(t=ns.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ia&&Ga(ga(e=Error(o(422),{cause:r}),n))):(r!==Ia&&Ga(ga(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=ga(r,n),Hi(e,a=tl(e.stateNode,r,a)),4!==bc&&(bc=2)),!1;
var i=Error(o(520),{cause:r});
if(i=ga(i,n),null===Sc?Sc=[i]:Sc.push(i),4!==bc&&(bc=2),null===t)return!0;
r=ga(r,n),n=t;
do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Hi(n,e=tl(n.stateNode,r,e)),!1;
case 1:if(t=n.type,i=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===i||"function"!=typeof i.componentDidCatch||null!==Cc&&Cc.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,rl(a=nl(a),e,n,r),Hi(n,a),!1;
break;
case 22:if(null!==n.memoizedState)return n.flags|=65536,!1}
n=n.return}while(null!==n);
return!1}(e,a,t,n,dc))return bc=1,Xo(e,ga(n,e.current)),void(cc=null)}catch(t){if(null!==a)throw cc=a,t;
return bc=1,Xo(e,ga(n,e.current)),void(cc=null)}32768&t.flags?(Ta||1===r?e=!0:mc||536870912&dc?e=!1:(pc=e=!0,(2===r||9===r||3===r||6===r)&&null!==(r=ns.current)&&13===r.tag&&(r.flags|=16384)),cd(t,e)):ud(t)}
function ud(e){var t=e;
do{if(32768&t.flags)return void cd(t,pc);
e=t.return;
var n=function(e,t,n){var r=t.pendingProps;
switch(Na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Bl(t),null;
case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Va(si),oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(null===e||null===e.child)&&(Fa(t)?Il(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,Ka())),Bl(t),null;
case 26:var a=t.type,i=t.memoizedState;
return null===e?(Il(t),null!==i?(Bl(t),Ol(t,i)):(Bl(t),Rl(t,a,null,r,n))):i?i!==e.memoizedState?(Il(t),Bl(t),Ol(t,i)):(Bl(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&Il(t),Bl(t),Rl(t,a,e,r,n)),null;
case 27:if(ue(t),n=ae.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Il(t);
else{if(!r){if(null===t.stateNode)throw Error(o(166));
return Bl(t),t.subtreeFlags&=-33554433,null}
e=ne.current,Fa(t)?Oa(t):(t.stateNode=e=cf(a,r,n),Il(t))}
return Bl(t),t.subtreeFlags&=-33554433,null;
case 5:if(ue(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Il(t);
else{if(!r){if(null===t.stateNode)throw Error(o(166));
return Bl(t),t.subtreeFlags&=-33554433,null}
if(i=ne.current,Fa(t))Oa(t);
else{var s=ph(ae.current);
switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",a);
break;
case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);
break;
default:switch(a){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",a);
break;
case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);
break;
case"script":(i=s.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);
break;
case"select":i="string"==typeof r.is?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);
break;
default:i="string"==typeof r.is?s.createElement(a,{is:r.is}):s.createElement(a)}}
i[Je]=t,i[Xe]=r;
e:for(s=t.child;null!==s;){if(5===s.tag||6===s.tag)i.appendChild(s.stateNode);
else if(4!==s.tag&&27!==s.tag&&null!==s.child){s.child.return=s,s=s.child;
continue}
if(s===t)break;
for(;null===s.sibling;){if(null===s.return||s.return===t)break e;
s=s.return}
s.sibling.return=s.return,s=s.sibling}
switch(t.stateNode=i,uh(i,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;
break;
case"img":r=!0;
break;
default:r=!1}
r&&Il(t)}}
return Bl(t),t.subtreeFlags&=-33554433,Rl(t,t.type,null===e?null:e.memoizedProps,t.pendingProps,n),null;
case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Il(t);
else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));
if(e=ae.current,Fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Ca))switch(a.tag){case 27:case 5:r=a.memoizedProps}
e[Je]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||sh(e.nodeValue,n)))||Ra(t,!0)}else(e=ph(e).createTextNode(r))[Je]=t,t.stateNode=e}
return Bl(t),null;
case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=Fa(t),null!==n){if(null===e){if(!r)throw Error(o(318));
if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));
e[Je]=t}else Ba(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;
Bl(t),e=!1}else n=Ka(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;
if(!e)return 256&t.flags?(ls(t),t):(ls(t),null);
if(128&t.flags)throw Error(o(558))}
return Bl(t),null;
case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=Fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));
if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));
a[Je]=t}else Ba(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;
Bl(t),a=!1}else a=Ka(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;
if(!a)return 256&t.flags?(ls(t),t):(ls(t),null)}
return ls(t),128&t.flags?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Dl(t,t.updateQueue),Bl(t),null);
case 4:return oe(),null===e&&Qd(t.stateNode.containerInfo),t.flags|=67108864,Bl(t),null;
case 10:return Va(t.type),Bl(t),null;
case 19:if(ds(t),null===(r=t.memoizedState))return Bl(t),null;
if(a=!!(128&t.flags),null===(i=r.rendering))if(a)Fl(r,!1);
else{if(0!==bc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(i=hs(e))){for(t.flags|=128,Fl(r,!1),t.updateQueue=e=i.updateQueue,Dl(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)ua(n,e),n=n.sibling;
return cs(0,1&us.current|2),Ta&&qa(t,r.treeForkCount),t.child}
e=e.sibling}
null!==r.tail&&ye()>Nc&&(t.flags|=128,a=!0,Fl(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=hs(i))){if(t.flags|=128,a=!0,t.updateQueue=e=e.updateQueue,Dl(t,e),Fl(r,!0),null===r.tail&&"collapsed"!==r.tailMode&&"visible"!==r.tailMode&&!i.alternate&&!Ta)return Bl(t),null}else 2*ye()-r.renderingStartTime>Nc&&536870912!==n&&(t.flags|=128,a=!0,Fl(r,!1),t.lanes=4194304);
r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}
if(null!==r.tail){e:{for(n=e=r.tail;null!==n;){if(null!==n.alternate){n=!1;
break e}
n=n.sibling}
n=!0}
return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ye(),e.sibling=null,i=us.current,i=a?1&i|2:1&i,"visible"===r.tailMode||"collapsed"===r.tailMode||!n||Ta?cs(0,i):(n=i,te(ns,t),te(us,n),null===rs&&(rs=t)),Ta&&qa(t,r.treeForkCount),e}
return Bl(t),null;
case 22:case 23:return ls(t),ts(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(Bl(t),6&t.subtreeFlags&&(t.flags|=8192)):Bl(t),null!==(n=t.updateQueue)&&Dl(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&ee(vi),null;
case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Va(si),Bl(t),null;
case 25:return null;
case 30:return t.flags|=33554432,Bl(t),null}
throw Error(o(156,t.tag))}(t.alternate,t,vc);
if(null!==n)return void(cc=n);
if(null!==(t=t.sibling))return void(cc=t);
cc=t=e}while(null!==t);
0===bc&&(bc=5)}
function cd(e,t){do{var n=function(e,t){switch(Na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;
case 3:return Va(si),oe(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;
case 26:case 27:case 5:return ue(t),null;
case 31:if(null!==t.memoizedState){if(ls(t),null===t.alternate)throw Error(o(340));
Ba()}
return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;
case 13:if(ls(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));
Ba()}
return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;
case 19:return ds(t),65536&(e=t.flags)?(t.flags=-65537&e|128,null!==(e=t.memoizedState)&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;
case 4:return oe(),null;
case 10:return Va(t.type),null;
case 22:case 23:return ls(t),ts(),null!==e&&ee(vi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;
case 24:return Va(si),null;
default:return null}}(e.alternate,e);
if(null!==n)return n.flags&=32767,void(cc=n);
if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(cc=e);
cc=e=n}while(null!==e);
bc=6,cc=null}
function dd(e,t,n,r,a,i,s,l,u,c,d,h){e.cancelPendingCommit=null;
do{bd()}while(0!==Lc);
if(6&lc)throw Error(o(327));
if(null!==t){if(t===e.current)throw Error(o(177));
e===uc&&(cc=uc=null,dc=0),Ac=t,Tc=e,Pc=n,Rc=a,Oc=r,function(e,t,n,r,a,i,s){var o,l=t.lanes|t.childLanes;
if(Ic=l,function(e,t,n,r,a,i){var s=e.pendingLanes;
e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;
var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;
for(n=s&~n;0<n;){var c=31-Ce(n),d=1<<c;
o[c]=0,l[c]=-1;
var h=u[c];
if(null!==h)for(u[c]=null,c=0;c<h.length;c++){var f=h[c];
null!==f&&(f.lane&=-536870913)}
n&=~d}0!==r&&Ue(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(s&~t))}(e,n,l|=Yr,r,a,i),Fc=null,(335544064&n)===n?(o=e.transitionTypes,e.transitionTypes=null,Bc=o,r=10262):(Bc=null,r=10256),0!=(t.subtreeFlags&r)||0!=(t.flags&r)?(e.callbackNode=null,e.callbackPriority=0,me(je,function(){return yd(),null})):(e.callbackNode=null,e.callbackPriority=0),su=!1,r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=V.T,V.T=null,a=Z.p,Z.p=2,i=lc,lc|=4;
try{!function(e,t,n){if(e=e.containerInfo,hh=Yf,xr(e=wr(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};
else e:{var a=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();
if(a&&0!==a.rangeCount){r=a.anchorNode;
var i,s=a.anchorOffset,o=a.focusNode;
a=a.focusOffset;
try{r.nodeType,o.nodeType}catch(e){r=null;
break e}
var l=0,u=-1,c=-1,d=0,h=0,f=e,p=null;
t:for(;;){for(;f!==r||0!==s&&3!==f.nodeType||(u=l+s),f!==o||0!==a&&3!==f.nodeType||(c=l+a),3===f.nodeType&&(l+=f.nodeValue.length),null!==(i=f.firstChild);)p=f,f=i;
for(;;){if(f===e)break t;
if(p===r&&++d===s&&(u=l),p===o&&++h===a&&(c=l),null!==(i=f.nextSibling))break;
p=(f=p).parentNode}
f=i}
r=-1===u||-1===c?null:{start:u,end:c}}else r=null}
r=r||{start:0,end:0}}else r=null;
for(fh={focusedElem:e,selectionRange:r},Yf=!1,qu=t,t=(n=(335544064&n)===n)?9270:1024;null!==qu;){if(e=qu,n&&null!==(r=e.deletions))for(s=0;s<r.length;s++)n&&vu(r[s]);
if(null===e.alternate&&2&e.flags)n&&lu(e),Cu(n);
else{if(22===e.tag){if(r=e.alternate,null!==e.memoizedState){null!==r&&null===r.memoizedState&&n&&vu(r),Cu(n);
continue}
if(null!==r&&null!==r.memoizedState){n&&lu(e),Cu(n);
continue}}
r=e.child,0!=(e.subtreeFlags&t)&&null!==r?(r.return=e,qu=r):(n&&function e(t){for(t=t.child;null!==t;){if(30===t.tag){var n=t.memoizedProps,r=Hr(n,t.stateNode);
n=$r(n.default,n.update),t.flags&=-5,"none"!==n&&hu(t,r,n,t.memoizedState=[],!1)}else 33554432&t.subtreeFlags&&e(t);
t=t.sibling}}(e),Cu(n))}}
ou=null}(e,t,n)}finally{lc=i,Z.p=a,V.T=r}}
Lc=1,su?Dc=function(e,t,n,r,a,i,s,o,l){var u=9===t.nodeType?t:t.ownerDocument;
try{var c=u.startViewTransition({update:function(){var t=u.defaultView,n=t.navigation&&t.navigation.transition,s=u.fonts.status;
r();
var o=[];
if("loaded"===s&&(u.documentElement.clientHeight,"loading"===u.fonts.status&&o.push(u.fonts.ready)),s=o.length,null!==e)for(var l=e.suspenseyImages,c=0,d=0;d<l.length;d++){var h=l[d];
if(!h.complete){var f=h.getBoundingClientRect();
if(0<f.bottom&&0<f.right&&f.top<t.innerHeight&&f.left<t.innerWidth){if((c+=Af(h))>If){o.length=s;
break}
h=new Promise(Ah.bind(h)),o.push(h)}}}
return 0<o.length?(t=Promise.race([Promise.all(o),new Promise(function(e){return setTimeout(e,500)})]).then(a,a),(n?Promise.allSettled([n.finished,t]):t).then(i,i)):(a(),n?n.finished.then(i,i):void i())},types:n});
u.__reactViewTransition=c;
var d=[];
return c.ready.then(function(){for(var e=u.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,a=r.pseudoElement;
if(null!=a&&a.startsWith("::view-transition")){d.push(n),n=r.getKeyframes();
for(var i=a=void 0,o=!0,l=0;l<n.length;l++){var c=n[l],h=c.width;
if(void 0===a)a=h;
else if(a!==h){o=!1;
break}
if(h=c.height,void 0===i)i=h;
else if(i!==h){o=!1;
break}
delete c.width,delete c.height,"none"===c.transform&&delete c.transform}
o&&void 0!==a&&void 0!==i&&(r.setKeyframes(n),(o=getComputedStyle(r.target,r.pseudoElement)).width!==a||o.height!==i)&&((o=n[0]).width=a,o.height=i,(o=n[n.length-1]).width=a,o.height=i,r.setKeyframes(n))}}
s()},function(e){u.__reactViewTransition===c&&(u.__reactViewTransition=null);
try{"object"==typeof e&&null!==e&&"InvalidStateError"===e.name&&("View transition was skipped because document visibility state is hidden."===e.message||"Skipping view transition because document visibility state has become hidden."===e.message||"Skipping view transition because viewport size changed."===e.message||"Transition was aborted because of invalid state"===e.message)&&(e=null),null!==e&&l(e)}finally{r(),a(),s()}}),c.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();
u.__reactViewTransition===c&&(u.__reactViewTransition=null),o()}),c}catch(e){return r(),a(),s(),null}}(s,e.containerInfo,Bc,pd,md,fd,gd,yd,hd):(pd(),md(),gd())}(e,t,n,s,l,u,h)}}
function hd(e){0!==Lc&&(0,Tc.onRecoverableError)(e,{componentStack:null})}
function fd(){3===Lc&&(Lc=0,Wu(Ac,Tc),Lc=4)}
function pd(){if(1===Lc){Lc=0;
var e=Tc,t=Ac,n=Pc,r=!!(13878&t.flags);
if(13878&t.subtreeFlags||r){r=V.T,V.T=null;
var a=Z.p;
Z.p=2;
var i=lc;
lc|=4;
try{zu=Nu=!1,Gu(t,e,n),n=fh;
var s=wr(e.containerInfo),o=n.focusedElem,l=n.selectionRange;
if(s!==o&&o&&o.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(o.ownerDocument.documentElement,o)){if(null!==l&&xr(o)){var u=l.start,c=l.end;
if(void 0===c&&(c=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(c,o.value.length);
else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;
if(h.getSelection){var f=h.getSelection(),p=o.textContent.length,m=Math.min(l.start,p),g=void 0===l.end?m:Math.min(l.end,p);
!f.extend&&m>g&&(s=g,g=m,m=s);
var v=kr(o,m),b=kr(o,g);
if(v&&b&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==b.node||f.focusOffset!==b.offset)){var y=d.createRange();
y.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(y),f.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),f.addRange(y))}}}}
for(d=[],f=o;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});
for("function"==typeof o.focus&&o.focus(),o=0;o<d.length;o++){var k=d[o];
k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}
Yf=!!hh,fh=hh=null}finally{lc=i,Z.p=a,V.T=r}}
e.current=t,Lc=2}}
function md(){if(2===Lc){Lc=0;
var e=Tc,t=Ac,n=!!(8772&t.flags);
if(8772&t.subtreeFlags||n){n=V.T,V.T=null;
var r=Z.p;
Z.p=2;
var a=lc;
lc|=4;
try{Lu(e,t.alternate,t)}finally{lc=a,Z.p=r,V.T=n}}
Lc=3}}
function gd(){if(4===Lc||3===Lc){Lc=0;
var e=Dc;
Dc=null,be();
var t=Tc,n=Ac,r=Pc,a=Oc,i=(335544064&r)===r?10262:10256;
if(0!=(n.subtreeFlags&i)||0!=(n.flags&i)?Lc=5:(Lc=0,Ac=Tc=null,vd(t,t.pendingLanes)),0===(i=t.pendingLanes)&&(Cc=null),Ve(r),n=n.stateNode,Ne&&"function"==typeof Ne.onCommitFiberRoot)try{Ne.onCommitFiberRoot(ze,n,void 0,!(128&~n.current.flags))}catch(e){}
if(null!==a){n=V.T,i=Z.p,Z.p=2,V.T=null;
try{for(var s=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];
s(l.value,{componentStack:l.stack})}}finally{V.T=n,Z.p=i}}
if(s=Bc,Bc=null,null!==(a=Fc)&&(Fc=null,null===s&&(s=[]),null!==e))for(l=0;l<a.length;l++)void 0!==(n=(0,a[l])(s))&&e.finished.finally(n);
!!(3&Pc)&&bd(),Td(t),i=t.pendingLanes,261930&r&&42&i?t===Gc?Kc++:(Kc=0,Gc=t):(Kc=0,Gc=null),Ad(0,!1)}}
function vd(e,t){0==(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,li(t))}
function bd(){return null!==Dc&&(Dc.skipTransition(),Dc=null),pd(),md(),gd(),yd()}
function yd(){if(5!==Lc)return!1;
var e=Tc,t=Ic;
Ic=0;
var n=Ve(Pc),r=V.T,a=Z.p;
try{Z.p=32>n?32:n,V.T=null,n=Rc,Rc=null;
var i=Tc,s=Pc;
if(Lc=0,Ac=Tc=null,Pc=0,6&lc)throw Error(o(331));
var l=lc;
if(lc|=4,ac(i.current),Yu(i,i.current,s,n),lc=l,Ad(0,!1),Ne&&"function"==typeof Ne.onPostCommitFiberRoot)try{Ne.onPostCommitFiberRoot(ze,i)}catch(e){}
return!0}finally{Z.p=a,V.T=r,vd(e,t)}}
function kd(e,t,n){t=ga(n,t),null!==(e=Gi(e,t=tl(e.stateNode,t,2),2))&&(Ge(e,2),Td(e))}
function wd(e,t,n){if(3===e.tag)kd(e,e,n);
else for(;null!==t;){if(3===t.tag){kd(t,e,n);
break}
if(1===t.tag){var r=t.stateNode;
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Cc||!Cc.has(r))){e=ga(n,e),null!==(r=Gi(t,n=nl(2),2))&&(rl(n,r,t,e),Ge(r,2),Td(r));
break}}
t=t.return}}
function xd(e,t,n){var r=e.pingCache;
if(null===r){r=e.pingCache=new oc;
var a=new Set;
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));
a.has(n)||(gc=!0,a.add(n),e=jd.bind(null,e,t,n),t.then(e,e))}
function jd(e,t,n){var r=e.pingCache;
null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,uc===e&&(dc&n)===n&&(!(4===bc||3===bc&&(62914560&dc)===dc&&300>ye()-Ec)||2&lc?wc|=n:Xc(e,0),jc===dc&&(jc=0)),Td(e)}
function Sd(e,t){0===t&&(t=Be()),null!==(e=ta(e,t))&&(Ge(e,t),Td(e))}
function _d(e){var t=e.memoizedState,n=0;
null!==t&&(n=t.retryLane),Sd(e,n)}
function qd(e,t){var n=0;
switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;
null!==a&&(n=a.retryLane);
break;
case 19:r=e.stateNode;
break;
case 22:r=e.stateNode._retryCache;
break;
default:throw Error(o(314))}
null!==r&&r.delete(t),Sd(e,n)}
var Ed=null,zd=null,Nd=!1,Md=!1,Cd=!1,Ld=0;
function Td(e){e!==zd&&null===e.next&&(null===zd?Ed=zd=e:zd=zd.next=e),Md=!0,Nd||(Nd=!0,Sh(function(){6&lc?me(we,Pd):Id()}))}
function Ad(e,t){if(!Cd&&Md){Cd=!0;
do{for(var n=!1,r=Ed;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;
if(0===a)var i=0;
else{var s=r.suspendedLanes,o=r.pingedLanes;
i=201326741&(i=(1<<31-Ce(42|e)+1)-1&a&~(s&~o))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Dd(r,i))}else i=dc,!(3&(i=Oe(r,r===uc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||De(r,i)||(n=!0,Dd(r,i));
r=r.next}}while(n);
Cd=!1}}
function Pd(){Id()}
function Id(){Md=Nd=!1;
var e,t=0;
0===Ld||((e=window.event)&&"popstate"===e.type?e===yh||(yh=e,0):(yh=null,1))||(t=Ld);
for(var n=ye(),r=null,a=Ed;null!==a;){var i=a.next,s=Rd(a,n);
0===s?(a.next=null,null===r?Ed=i:r.next=i,null===i&&(zd=r)):(r=a,(0!==t||!!(3&s))&&(Md=!0)),a=i}0!==Lc&&5!==Lc||Ad(t,!1),0!==Ld&&(Ld=0)}
function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var s=31-Ce(i),o=1<<s,l=a[s];
-1===l?(0==(o&n)||0!=(o&r))&&(a[s]=function(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;
default:return-1}}(o,t)):l<=t&&(e.expiredLanes|=o),i&=~o}
if(n=dc,n=Oe(e,e===(t=uc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===hc||9===hc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ge(r),e.callbackNode=null,e.callbackPriority=0;
if(!(3&n)||De(e,n)){if((t=n&-n)===e.callbackPriority)return t;
switch(null!==r&&ge(r),Ve(n)){case 2:case 8:n=xe;
break;
case 32:default:n=je;
break;
case 268435456:n=_e}
return n=me(n,r=Od.bind(null,e)),e.callbackPriority=t,e.callbackNode=n,t}
return null!==r&&null!==r&&ge(r),e.callbackPriority=2,e.callbackNode=null,2}
function Od(e,t){if(0!==Lc&&5!==Lc)return e.callbackNode=null,e.callbackPriority=0,null;
var n=e.callbackNode;
if(bd()&&e.callbackNode!==n)return null;
var r=dc;
return 0===(r=Oe(e,e===uc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Vc(e,r,t),Rd(e,ye()),null!=e.callbackNode&&e.callbackNode===n?Od.bind(null,e):null)}
function Dd(e,t){if(bd())return null;
Vc(e,t,!0)}
function Fd(){if(0===Ld){var e=fi;
0===e&&(e=Ae,!(261888&(Ae<<=1))&&(Ae=256)),Ld=e}
return Ld}
function Bd(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Ht(e)}
for(var Kd=0;Kd<Kr.length;Kd++){var Gd=Kr[Kd];
Gr(Gd.toLowerCase(),"on"+(Gd[0].toUpperCase()+Gd.slice(1)))}
Gr(Ar,"onAnimationEnd"),Gr(Pr,"onAnimationIteration"),Gr(Ir,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Rr,"onTransitionRun"),Gr(Or,"onTransitionStart"),Gr(Dr,"onTransitionCancel"),Gr(Fr,"onTransitionEnd"),vt("onMouseEnter",["mouseout","mouseover"]),vt("onMouseLeave",["mouseout","mouseover"]),vt("onPointerEnter",["pointerout","pointerover"]),vt("onPointerLeave",["pointerout","pointerover"]),gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ud="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ud));
function Wd(e,t){t=!!(4&t);
for(var n=0;n<e.length;n++){var r=e[n],a=r.event;
r=r.listeners;
e:{var i=void 0;
if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,u=o.currentTarget;
if(o=o.listener,l!==i&&a.isPropagationStopped())break e;
i=o,a.currentTarget=u;
try{i(a)}catch(e){Vr(e)}
a.currentTarget=null,i=l}else for(s=0;s<r.length;s++){if(l=(o=r[s]).instance,u=o.currentTarget,o=o.listener,l!==i&&a.isPropagationStopped())break e;
i=o,a.currentTarget=u;
try{i(a)}catch(e){Vr(e)}
a.currentTarget=null,i=l}}}}
function $d(e,t){var n=t[tt];
void 0===n&&(n=t[tt]=new Set);
var r=e+"__bubble";
n.has(r)||(Yd(t,e,2,!1),n.add(r))}
function Vd(e,t,n){var r=0;
t&&(r|=4),Yd(n,e,r,t)}
var Zd="_reactListening"+Math.random().toString(36).slice(2);
function Qd(e){if(!e[Zd]){e[Zd]=!0,pt.forEach(function(t){"selectionchange"!==t&&(Hd.has(t)||Vd(t,!1,e),Vd(t,!0,e))});
var t=9===e.nodeType?e:e.ownerDocument;
null===t||t[Zd]||(t[Zd]=!0,Vd("selectionchange",!1,t))}}
function Yd(e,t,n,r){switch(ap(t)){case 2:var a=Jf;
break;
case 8:a=Xf;
break;
default:a=ep}
n=a.bind(null,t,n,e),a=void 0,nn&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}
function Jd(e,t,n,r,a){var i=r;
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;
var s=r.tag;
if(3===s||4===s){var o=r.stateNode.containerInfo;
if(o===a)break;
if(4===s)for(s=r.return;null!==s;){var l=s.tag;
if((3===l||4===l)&&s.stateNode.containerInfo===a)return;
s=s.return}
for(;null!==o;){if(null===(s=lt(o)))return;
if(5===(l=s.tag)||6===l||26===l||27===l){r=i=s;
continue e}
o=o.parentNode}}
r=r.return}
Xt(function(){var r=i,a=Vt(n),s=[];
e:{var o=Br.get(e);
if(void 0!==o){var l=xn,c=e;
switch(e){case"keypress":if(0===un(n))break e;
case"keydown":case"keyup":l=Rn;
break;
case"focusin":c="focus",l=zn;
break;
case"focusout":c="blur",l=zn;
break;
case"beforeblur":case"afterblur":l=zn;
break;
case"click":if(2===n.button)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=qn;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=En;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Fn;
break;
case Ar:case Pr:case Ir:l=Nn;
break;
case Fr:l=Bn;
break;
case"scroll":case"scrollend":l=Sn;
break;
case"wheel":l=Kn;
break;
case"copy":case"cut":case"paste":l=Mn;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=On;
break;
case"submit":l=Dn;
break;
case"toggle":case"beforetoggle":l=Gn}
var d=!!(4&t),h=!d&&("scroll"===e||"scrollend"===e),f=d?null!==o?o+"Capture":null:o;
d=[];
for(var p,m=r;null!==m;){var g=m;
if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===f||null!=(g=en(m,f))&&d.push(Xd(m,g,p)),h)break;
m=m.return}0<d.length&&(o=new l(o,c,null,n,a),s.push({event:o,listeners:d}))}}
if(!(7&t)){if(o="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===$t||!(c=n.relatedTarget||n.fromElement)||!lt(c)&&!c[et])&&(o||l)&&(c=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,o?(l=n.relatedTarget||n.toElement,o=r,null!==(l=l?lt(l):null)&&(h=u(l),d=l.tag,l!==h||5!==d&&27!==d&&6!==d)&&(l=null)):(o=null,l=r),o!==l&&(d=qn,g="onMouseLeave",f="onMouseEnter",m="mouse",("pointerout"===e||"pointerover"===e)&&(d=On,g="onPointerLeave",f="onPointerEnter",m="pointer"),h=null==o?c:ct(o),p=null==l?c:ct(l),(c=new d(g,m+"leave",o,n,a)).target=h,c.relatedTarget=p,g=null,lt(a)===r&&((d=new d(f,m+"enter",l,n,a)).target=p,d.relatedTarget=h,g=d),h=g,d=o&&l?S(o,l,th):null,null!==o&&nh(s,c,o,d,!1),null!==l&&null!==h&&nh(s,h,l,d,!0))),"select"===(l=(o=r?ct(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var v,b=sr;
else if(er(o))if(or)b=mr;
else{b=fr;
var y=hr}else!(l=o.nodeName)||"input"!==l.toLowerCase()||"checkbox"!==o.type&&"radio"!==o.type?r&&Kt(r.elementType)&&(b=sr):b=pr;
switch(b&&(b=b(e,r))?tr(s,b,n,a):y&&y(e,o,r),y=r?ct(r):window,e){case"focusin":(er(y)||"true"===y.contentEditable)&&(Sr=y,_r=r,qr=null);
break;
case"focusout":qr=_r=Sr=null;
break;
case"mousedown":Er=!0;
break;
case"contextmenu":case"mouseup":case"dragend":Er=!1,zr(s,n,a);
break;
case"selectionchange":if(jr)break;
case"keydown":case"keyup":zr(s,n,a)}
if(Hn)e:{switch(e){case"compositionstart":var k="onCompositionStart";
break e;
case"compositionend":k="onCompositionEnd";
break e;
case"compositionupdate":k="onCompositionUpdate";
break e}
k=void 0}else Jn?Qn(e,n)&&(k="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(k="onCompositionStart");
k&&(Vn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==k?"onCompositionEnd"===k&&Jn&&(v=ln()):(sn="value"in(an=a)?an.value:an.textContent,Jn=!0)),0<(y=eh(r,k)).length&&(k=new Cn(k,e,null,n,a),s.push({event:k,listeners:y}),(v||null!==(v=Yn(n)))&&(k.data=v))),(v=$n?function(e,t){switch(e){case"compositionend":return Yn(t);
case"keypress":return 32!==t.which?null:(Zn=!0," ");
case"textInput":return" "===(e=t.data)&&Zn?null:e;
default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!Hn&&Qn(e,t)?(e=ln(),on=sn=an=null,Jn=!1,e):null;
switch(e){case"paste":default:return null;
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;
if(t.which)return String.fromCharCode(t.which)}
return null;
case"compositionend":return Vn&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(k=eh(r,"onBeforeInput")).length&&(y=new Cn("onBeforeInput","beforeinput",null,n,a),s.push({event:y,listeners:k}),y.data=v);
var w=e;
if("submit"===w&&r&&r.stateNode===a){var x=Bd((a[Xe]||null).action),j=n.submitter;
j&&null!==(w=(w=j[Xe]||null)?Bd(w.formAction):j.getAttribute("formAction"))&&(x=w,j=null);
var _=new xn("action","action",null,n,a);
s.push({event:_,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==Ld){var e=new FormData(a,j);
Eo(r,{pending:!0,data:e,method:a.method,action:x},null,e)}}else"function"==typeof x&&(_.preventDefault(),Eo(r,{pending:!0,data:e=new FormData(a,j),method:a.method,action:x},x,e))},currentTarget:a}]})}}
Wd(s,t)})}
function Xd(e,t,n){return{instance:e,listener:t,currentTarget:n}}
function eh(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;
if(5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=en(e,n))&&r.unshift(Xd(e,a,i)),null!=(a=en(e,t))&&r.push(Xd(e,a,i))),3===e.tag)return r;
e=e.return}
return[]}
function th(e){if(null===e)return null;
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);
return e||null}
function nh(e,t,n,r,a){for(var i=t._reactName,s=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;
if(o=o.tag,null!==l&&l===r)break;
5!==o&&26!==o&&27!==o||null===u||(l=u,a?null!=(u=en(n,i))&&s.unshift(Xd(n,u,l)):a||null!=(u=en(n,i))&&s.push(Xd(n,u,l))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}
var rh=/\r\n?/g,ah=/\u0000|\uFFFD/g;
function ih(e){return("string"==typeof e?e:""+e).replace(rh,"\n").replace(ah,"")}
function sh(e,t){return t=ih(t),ih(e)===t}
function oh(e,t,n,r,a,i){switch(n){case"children":if("string"==typeof r)"body"===t||"textarea"===t&&""===r||Ot(e,r);
else{if("number"!=typeof r&&"bigint"!=typeof r)return;
"body"!==t&&Ot(e,""+r)}
break;
case"className":St(e,"class",r);
break;
case"tabIndex":St(e,"tabindex",r);
break;
case"dir":case"role":case"viewBox":case"width":case"height":St(e,n,r);
break;
case"style":return void Bt(e,r,i);
case"data":if("object"!==t){St(e,"data",r);
break}
case"src":case"href":if(""===r&&("a"!==t||"href"!==n)||null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);
break}
r=Ht(r),e.setAttribute(n,r);
break;
case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
break}
if("function"==typeof i&&("formAction"===n?("input"!==t&&oh(e,t,"name",a.name,a,null),oh(e,t,"formEncType",a.formEncType,a,null),oh(e,t,"formMethod",a.formMethod,a,null),oh(e,t,"formTarget",a.formTarget,a,null)):(oh(e,t,"encType",a.encType,a,null),oh(e,t,"method",a.method,a,null),oh(e,t,"target",a.target,a,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n);
break}
r=Ht(r),e.setAttribute(n,r);
break;
case"onClick":return void(null!=r&&(e.onclick=Wt));
case"onScroll":return void(null!=r&&$d("scroll",e));
case"onScrollEnd":return void(null!=r&&$d("scrollend",e));
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(o(61));
if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));
(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}
break;
case"multiple":e.multiple=r&&"function"!=typeof r&&"symbol"!=typeof r;
break;
case"muted":e.muted=r&&"function"!=typeof r&&"symbol"!=typeof r;
break;
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;
case"xlinkHref":if(null==r||"function"==typeof r||"boolean"==typeof r||"symbol"==typeof r){e.removeAttribute("xlink:href");
break}
n=Ht(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);
break;
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n);
break;
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""):e.removeAttribute(n);
break;
case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n);
break;
case"cols":case"rows":case"size":case"span":null!=r&&"function"!=typeof r&&"symbol"!=typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);
break;
case"rowSpan":case"start":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);
break;
case"popover":$d("beforetoggle",e),$d("toggle",e),jt(e,"popover",r);
break;
case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);
break;
case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);
break;
case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",r);
break;
case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",r);
break;
case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",r);
break;
case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",r);
break;
case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);
break;
case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);
break;
case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);
break;
case"is":jt(e,"is",r);
break;
case"innerText":case"textContent":return;
default:if(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))return;
jt(e,n=Gt.get(n)||n,r)}
wt=!0}
function lh(e,t,n,r,a,i){switch(n){case"style":return void Bt(e,r,i);
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(o(61));
if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));
(null!=i?i.__html:void 0)!==n&&(e.innerHTML=n)}}
break;
case"children":if("string"==typeof r)Ot(e,r);
else{if("number"!=typeof r&&"bigint"!=typeof r)return;
Ot(e,""+r)}
break;
case"onScroll":return void(null!=r&&$d("scroll",e));
case"onScrollEnd":return void(null!=r&&$d("scrollend",e));
case"onClick":return void(null!=r&&(e.onclick=Wt));
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":return;
default:return void(mt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),"function"==typeof(t=null!=(t=e[Xe]||null)?t[n]:null)&&e.removeEventListener(i,t,a),"function"!=typeof r)?(wt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,""):jt(e,n,r)):("function"!=typeof t&&null!==t&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,r,a))))}
wt=!0}
function uh(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
case"img":$d("error",e),$d("load",e);
var r,a=!1,i=!1;
for(r in n)if(n.hasOwnProperty(r)){var s=n[r];
if(null!=s)switch(r){case"src":a=!0;
break;
case"srcSet":i=!0;
break;
case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));
default:oh(e,t,r,s,n,null)}}
return i&&oh(e,t,"srcSet",n.srcSet,n,null),void(a&&oh(e,t,"src",n.src,n,null));
case"input":$d("invalid",e);
var l=r=s=i=null,u=null,c=null;
for(a in n)if(n.hasOwnProperty(a)){var d=n[a];
if(null!=d)switch(a){case"name":i=d;
break;
case"type":s=d;
break;
case"checked":u=d;
break;
case"defaultChecked":c=d;
break;
case"value":r=d;
break;
case"defaultValue":l=d;
break;
case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));
break;
default:oh(e,t,a,d,n,null)}}
return void Tt(e,r,l,u,c,s,i,!1);
case"select":for(i in $d("invalid",e),a=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;
break;
case"defaultValue":s=l;
break;
case"multiple":a=l;
default:oh(e,t,i,l,n,null)}
return t=r,n=s,e.multiple=!!a,void(null!=t?Pt(e,!!a,t,!1):null!=n&&Pt(e,!!a,n,!0));
case"textarea":for(s in $d("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":a=l;
break;
case"defaultValue":i=l;
break;
case"children":r=l;
break;
case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));
break;
default:oh(e,t,s,l,n,null)}
return void Rt(e,a,i,r);
case"option":for(u in n)n.hasOwnProperty(u)&&null!=(a=n[u])&&("selected"===u?e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:oh(e,t,u,a,n,null));
return;
case"dialog":$d("beforetoggle",e),$d("toggle",e),$d("cancel",e),$d("close",e);
break;
case"iframe":case"object":$d("load",e);
break;
case"video":case"audio":for(a=0;a<Ud.length;a++)$d(Ud[a],e);
break;
case"image":$d("error",e),$d("load",e);
break;
case"details":$d("toggle",e);
break;
case"embed":case"source":case"link":$d("error",e),$d("load",e);
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));
default:oh(e,t,c,a,n,null)}
return;
default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&void 0!==(a=n[d])&&lh(e,t,d,a,n,void 0);
return}}
for(l in n)n.hasOwnProperty(l)&&null!=(a=n[l])&&oh(e,t,l,a,n,null)}
var ch={};
function dh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;
default:return!1}}
var hh=null,fh=null;
function ph(e){return 9===e.nodeType?e:e.ownerDocument}
function mh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;
case"http://www.w3.org/1998/Math/MathML":return 2;
default:return 0}}
function gh(e,t){if(0===e)switch(t){case"svg":return 1;
case"math":return 2;
default:return 0}
return 1===e&&"foreignObject"===t?0:e}
function vh(e,t,n,r){return(n=ph(n).createElement(e))[Je]=r,n[Xe]=t,uh(n,e,t),ht(n),n}
function bh(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}
var yh=null,kh="function"==typeof setTimeout?setTimeout:void 0,wh="function"==typeof clearTimeout?clearTimeout:void 0,xh="function"==typeof Promise?Promise:void 0,jh="function"==typeof requestAnimationFrame?requestAnimationFrame:kh,Sh="function"==typeof queueMicrotask?queueMicrotask:void 0!==xh?function(e){return xh.resolve(null).then(e).catch(_h)}:kh;
function _h(e){setTimeout(function(){throw e})}
function qh(e){return"head"===e}
function Eh(e,t){var n=t,r=0;
do{var a=n.nextSibling;
if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void xp(t);
r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;
else if("html"===n)hf(e.ownerDocument.documentElement);
else if("head"===n){hf(n=e.ownerDocument.head);
for(var i=n.firstChild;i;){var s=i.nextSibling,o=i.nodeName;
i[it]||"SCRIPT"===o||"STYLE"===o||"LINK"===o&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=s}}else"body"===n&&hf(e.ownerDocument.body);
n=a}while(n);
xp(t)}
function zh(e,t){var n=e;
e=0;
do{var r=n.nextSibling;
if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;
e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;
n=r}while(n)}
function Nh(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,null!=n&&(e.style.viewTransitionClass=n),"inline"===(n=getComputedStyle(e)).display){if(1===(t=e.getClientRects()).length)var r=1;
else for(var a=r=0;a<t.length;a++){var i=t[a];
0<i.width&&0<i.height&&r++}1===r&&((e=e.style).display=1===t.length?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}
function Mh(e,t){e=e.style;
var n=null!=(t=t.style)?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;
e.viewTransitionName=null==n||"boolean"==typeof n?"":(""+n).trim(),n=null!=t?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=null==n||"boolean"==typeof n?"":(""+n).trim(),"inline-block"===e.display&&(null==t?e.display=e.margin="":(n=t.display,e.display=null==n||"boolean"==typeof n?"":n,null!=(n=t.margin)?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=null==n||"boolean"==typeof n?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=null==t||"boolean"==typeof t?"":t)))}
function Ch(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:"absolute"===t.position||"fixed"===t.position,clip:"none"!==t.clipPath||"visible"!==t.overflow||"none"!==t.filter||"none"!==t.mask||"none"!==t.mask||"0px"!==t.borderRadius,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}
function Lh(e){return Ch(e.getBoundingClientRect(),getComputedStyle(e),e)}
function Th(e){var t=e.getBoundingClientRect();
return Ch(t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height),getComputedStyle(e),e)}
function Ah(e){this.addEventListener("load",e),this.addEventListener("error",e)}
function Ph(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}
function Ih(e){return{name:e,group:new Ph("group",e),imagePair:new Ph("image-pair",e),old:new Ph("old",e),new:new Ph("new",e)}}
function Rh(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}
function Oh(e,t,n,r){return b(e).addEventListener(t,n,r),!1}
function Dh(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}
function Fh(e){return null!=e&&"boolean"!=typeof e&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}
function Bh(e){return null==e?"c=0":"boolean"==typeof e?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}
function Kh(e,t,n,r){if(0===e.length)return-1;
r=Bh(r);
for(var a=0;a<e.length;a++){var i=e[a];
if(i.type===t&&i.listener===n&&Bh(i.optionsOrUseCapture)===r)return a}
return-1}
function Gh(e,t){return 6!==e.tag&&function(e,t){function n(){r=!0}
if(e.ownerDocument.activeElement===e)return!0;
var r=!1;
try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}
return r}(e=b(e),t)}
function Uh(e,t){return t.push(e),!1}
function Hh(e,t){return!(6===e.tag||(e=b(e))!==t&&!e.contains(t)||(t.blur(),0))}
function Wh(e,t){return 6!==e.tag&&(e=b(e),t.observe(e),!1)}
function $h(e,t){return 6!==e.tag&&(e=b(e),t.unobserve(e),!1)}
Ph.prototype.animate=function(e,t){return(t="number"==typeof t?{duration:t}:_({},t)).pseudoElement=this._selector,this._scope.animate(e,t)},Ph.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],a=0;a<n.length;a++){var i=n[a].effect;
null!==i&&i.target===e&&i.pseudoElement===t&&r.push(n[a])}
return r},Ph.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},Rh.prototype.addEventListener=function(e,t,n){var r=null,a=null;
if(null==n||"boolean"==typeof n||null===(r=n.signal||null)||!r.aborted){null===this._eventListeners&&(this._eventListeners=[]);
var i=this._eventListeners;
if(-1===Kh(i,e,t,n)){var s=this,o=t;
null!=n&&"boolean"!=typeof n&&!0===n.once&&(o=function(r){s.removeEventListener(e,t,n),"function"==typeof t?t.call(this,r):t.handleEvent(r)}),null!==r&&(a=s.removeEventListener.bind(s,e,t,n),r.addEventListener("abort",a,{once:!0}),a=r.removeEventListener.bind(r,"abort",a)),r=Fh(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),p(this._fragmentFiber.child,!1,Oh,e,o,r)}
this._eventListeners=i}},Rh.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;
if(null!==r&&-1!==(t=Kh(r,e,t,n))){var a=r[t];
n=a.attachedListener;
var i=a.cleanup;
a=Fh(a.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Dh,e,n,a),r.splice(t,1),null!==i&&i()}},Rh.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);
if(null===t)return!0;
t=b(t);
var n=this._eventListeners;
if(null!==n&&0<n.length||!e.bubbles){var r=9===t.nodeType?t.createComment(""):document.createTextNode("");
if(n)for(var a=0;a<n.length;a++){var i=n[a];
r.addEventListener(i.type,i.attachedListener,Fh(i.optionsOrUseCapture))}
if(t.appendChild(r),e=r.dispatchEvent(e),n)for(a=0;a<n.length;a++)i=n[a],r.removeEventListener(i.type,i.attachedListener,Fh(i.optionsOrUseCapture));
return t.removeChild(r),e}
return t.dispatchEvent(e)},Rh.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Gh,e,void 0,void 0)},Rh.prototype.focusLast=function(e){var t=[];
p(this._fragmentFiber.child,!0,Uh,t,void 0,void 0);
for(var n=t.length-1;0<=n&&!Gh(t[n],e);n--);
},Rh.prototype.blur=function(){var e=m(this._fragmentFiber);
null!==e&&null!==(e=ph(e=b(e)).activeElement)&&p(this._fragmentFiber.child,!1,Hh,e,void 0,void 0)},Rh.prototype.observeUsing=function(e){null===this._observers&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,Wh,e,void 0,void 0)},Rh.prototype.unobserveUsing=function(e){var t=this._observers;
if(null!==t&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,$h,e,void 0,void 0);
for(var n=t=0;n<Vh.length;n++){var r=Vh[n];
r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Vh[t++]=r}
Vh.length=t}};
var Vh=[],Zh=!1;
function Qh(e,t){if(6===e.tag){var n=(e=e.stateNode).ownerDocument.createRange();
n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());
return!1}
function Yh(e,t){var n=e.ownerDocument.createRange();
n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}
function Jh(e,t){return Xh(e=b(e),t),!1}
function Xh(e,t){null==e.reactFragments&&(e.reactFragments=new Set),e.reactFragments.add(t)}
function ef(e,t){var n=t._eventListeners;
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];
e.addEventListener(a.type,a.attachedListener,Fh(a.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){for(var r=0,a=0;a<Vh.length;a++){var i=Vh[a];
(i.fragmentInstance!==t||i.observer!==n||i.instance!==e)&&(Vh[r++]=i)}
Vh.length=r,n.observe(e)}),Xh(e,t))}
function tf(e){var t=e.firstChild;
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;
switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":tf(n),ot(n);
continue;
case"SCRIPT":case"STYLE":continue;
case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}
e.removeChild(n)}}
function nf(e,t){for(;8!==e.nodeType;)if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t||null===(e=sf(e.nextSibling)))return null;
return e}
function rf(e){return"$?"===e.data||"$~"===e.data}
function af(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}
function sf(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;
if(1===t||3===t)break;
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;
if("/$"===t||"/&"===t)return null}}
return e}
Rh.prototype.getClientRects=function(){var e=[];
return p(this._fragmentFiber.child,!1,Qh,e,void 0,void 0),e},Rh.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);
return null===t?this:b(t).getRootNode(e)},Rh.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);
if(null===t)return Node.DOCUMENT_POSITION_DISCONNECTED;
var n=[];
p(this._fragmentFiber.child,!1,Uh,n,void 0,void 0);
var r=b(t);
if(0===n.length){if(n=r,g(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;null!==t;){if(4===t.tag){t=t.stateNode.containerInfo;
break e}
if(3===t.tag||5===t.tag||27===t.tag)break;
t=t.return}
t=null}
null!=t&&(n=t)}
t=this._fragmentFiber;
var a=r=n.compareDocumentPosition(e);
return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=null===(n=v(t)[1])?Node.DOCUMENT_POSITION_PRECEDING:0===(e=b(n).compareDocumentPosition(e))||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING),a|Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}
t=b(n[0]),a=b(n[n.length-1]);
var i=g(this._fragmentFiber)?t.parentElement:r;
if(null==i)return Node.DOCUMENT_POSITION_DISCONNECTED;
r=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;
var s=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;
return o=r&&i&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,(t=r&&t===e||i&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!i&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s)&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||function(e,t,n,r,a){var i=lt(a);
if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;null!==i;){if(7===i.tag&&(i===t||i.alternate===t)){n=!0;
break e}
i=i.return}
n=!1}
return n}
if(e&Node.DOCUMENT_POSITION_CONTAINS){if(null===i)return a===(i=a.ownerDocument)||a===i.documentElement||a===i.body;
e:{for(i=t,t=m(t);null!==i;){if(!(5!==i.tag&&3!==i.tag&&27!==i.tag||i!==t&&i.alternate!==t)){i=!0;
break e}
i=i.return}
i=!1}
return i}
return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(null===(t=S(n,i,j))?t=!1:(p(t,!0,w,i,n),i=y,y=null,t=null!==i)),t):!!(e&Node.DOCUMENT_POSITION_FOLLOWING)&&((t=!!i)&&!(t=i===r)&&(null===(t=S(r,i,j))?t=!1:(p(t,!0,x,i,r),i=y,k=y=null,t=null!==i)),t)}(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},Rh.prototype.scrollIntoView=function(e){if("object"==typeof e)throw Error(o(566));
var t=[];
p(this._fragmentFiber.child,!1,Uh,t,void 0,void 0);
var n=!1!==e;
if(0===t.length){var r=v(this._fragmentFiber);
if(null===(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1]))return;
if(6===r.tag)return void Yh(e=b(r),n);
if(9!==(r=b(r)).nodeType){if(11===r.nodeType)return void(null!==(n="host"in r?r.host:null)&&n.scrollIntoView(e));
r.scrollIntoView(e)}}
for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];
6===a.tag?Yh(a=b(a),n):b(a).scrollIntoView(e),r+=n?-1:1}};
var of=null;
function lf(e){e=e.nextSibling;
for(var t=0;e;){if(8===e.nodeType){var n=e.data;
if("/$"===n||"/&"===n){if(0===t)return sf(e.nextSibling);
t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}
e=e.nextSibling}
return null}
function uf(e){e=e.previousSibling;
for(var t=0;e;){if(8===e.nodeType){var n=e.data;
if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;
t--}else"/$"!==n&&"/&"!==n||t++}
e=e.previousSibling}
return null}
function cf(e,t,n){switch(t=ph(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));
return e;
case"head":if(!(e=t.head))throw Error(o(453));
return e;
case"body":if(!(e=t.body))throw Error(o(454));
return e;
default:throw Error(o(451))}}
function df(e,t,n){for(var r in n){var a=n[r];
n.hasOwnProperty(r)&&null!=a&&oh(e,t,r,null,ch,a)}
null!=n.dangerouslySetInnerHTML&&(e.textContent=""),e.onclick===Wt&&(e.onclick=null),ot(e)}
function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);
ot(e)}
var ff=new Map,pf=new Set;
function mf(e){if("function"==typeof e.getRootNode){var t=e.getRootNode();
if(9===t.nodeType||11===t.nodeType)return t}
return 9===e.nodeType?e:e.ownerDocument}
var gf=Z.d;
Z.d={f:function(){var e=gf.f(),t=Yc();
return e||t},r:function(e){var t=ut(e);
null!==t&&5===t.tag&&"form"===t.type?No(t):gf.r(e)},D:function(e){gf.D(e),bf("dns-prefetch",e,null)},C:function(e,t){gf.C(e,t),bf("preconnect",e,t)},L:function(e,t,n){if(gf.L(e,t,n),vf&&e&&t){var r='link[rel="preload"][as="'+Ct(t)+'"]';
"image"===t&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ct(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(r+='[imagesizes="'+Ct(n.imageSizes)+'"]')):r+='[href="'+Ct(e)+'"]';
var a=r;
switch(t){case"style":a=kf(e);
break;
case"script":a=jf(e)}
if(!(ff.has(a)||(e=_({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),ff.set(a,e),null!==vf.querySelector(r)||"style"===t&&vf.querySelector(wf(a))||"script"===t&&vf.querySelector(Sf(a))))){var i=vf.createElement("link");
uh(i,"link",e),"style"===t&&(i[st]=!0,i.onload=i.onerror=function(){ft(i)}),ht(i),vf.head.appendChild(i)}}},m:function(e,t){if(gf.m(e,t),vf&&e){var n=t&&"string"==typeof t.as?t.as:"script",r='link[rel="modulepreload"][as="'+Ct(n)+'"][href="'+Ct(e)+'"]',a=r;
switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=jf(e)}
if(!ff.has(a)&&(e=_({rel:"modulepreload",href:e},t),ff.set(a,e),null===vf.querySelector(r))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(vf.querySelector(Sf(a)))return}
uh(n=vf.createElement("link"),"link",e),ht(n),vf.head.appendChild(n)}}},X:function(e,t){if(gf.X(e,t),vf&&e){var n=dt(vf).hoistableScripts,r=jf(e),a=n.get(r);
a||((a=vf.querySelector(Sf(r)))||(e=_({src:e,async:!0},t),(t=ff.get(r))&&zf(e,t),ht(a=vf.createElement("script")),uh(a,"link",e),vf.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(r,a))}},S:function(e,t,n){if(gf.S(e,t,n),vf&&e){var r=dt(vf).hoistableStyles,a=kf(e);
t=t||"default";
var i=r.get(a);
if(!i){var s={loading:0,preload:null};
if(i=vf.querySelector(wf(a)))s.loading=5;
else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ff.get(a))&&Ef(e,n);
var o=i=vf.createElement("link");
ht(o),uh(o,"link",e),o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,qf(i,t,vf)}
i={type:"stylesheet",instance:i,count:1,state:s},r.set(a,i)}}},M:function(e,t){if(gf.M(e,t),vf&&e){var n=dt(vf).hoistableScripts,r=jf(e),a=n.get(r);
a||((a=vf.querySelector(Sf(r)))||(e=_({src:e,async:!0,type:"module"},t),(t=ff.get(r))&&zf(e,t),ht(a=vf.createElement("script")),uh(a,"link",e),vf.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(r,a))}}};
var vf="u"<typeof document?null:document;
function bf(e,t,n){if(vf&&"string"==typeof t&&t){var r=Ct(t);
r='link[rel="'+e+'"][href="'+r+'"]',"string"==typeof n&&(r+='[crossorigin="'+n+'"]'),pf.has(r)||(pf.add(r),e={rel:e,crossOrigin:n,href:t},null===vf.querySelector(r)&&(uh(t=vf.createElement("link"),"link",e),ht(t),vf.head.appendChild(t)))}}
function yf(e,t,n,r){var a=(a=ae.current)?mf(a):null;
if(!a)throw Error(o(446));
switch(e){case"meta":case"title":return null;
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(n=kf(n.href),(r=(t=dt(a).hoistableStyles).get(n))||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=kf(n.href);
var i=dt(a).hoistableStyles,s=i.get(e);
if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=a.querySelector(wf(e)))?i._p||(s.instance=i,s.state.loading=5):((i=ff.get(e))||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ff.set(e,i)),function(e,t,n,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(!0!==t[st])return void(r.loading=1)}else(t=e.createElement("link"))[st]=!0,t.onload=t.onerror=ft.bind(null,t),uh(t,"link",n),ht(t),e.head.appendChild(t);
r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}(a,e,i,s.state))),t&&null===r)throw Error(o(528,""));
return s}
if(t&&null!==r)throw Error(o(529,""));
return null;
case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(n=jf(n),(r=(t=dt(a).hoistableScripts).get(n))||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};
default:throw Error(o(444,e))}}
function kf(e){return'href="'+Ct(e)+'"'}
function wf(e){return'link[rel="stylesheet"]['+e+"]"}
function xf(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}
function jf(e){return'[src="'+Ct(e)+'"]'}
function Sf(e){return"script[async]"+e}
function _f(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ct(n.href)+'"]');
if(r)return t.instance=r,ht(r),r;
var a=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});
return ht(r=(e.ownerDocument||e).createElement("style")),uh(r,"style",a),qf(r,n.precedence,e),t.instance=r;
case"stylesheet":a=kf(n.href);
var i=e.querySelector(wf(a));
if(i)return t.state.loading|=4,t.instance=i,ht(i),i;
r=xf(n),(a=ff.get(a))&&Ef(r,a),ht(i=(e.ownerDocument||e).createElement("link"));
var s=i;
return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),uh(i,"link",r),t.state.loading|=4,qf(i,n.precedence,e),t.instance=i;
case"script":return i=jf(n.src),(a=e.querySelector(Sf(i)))?(t.instance=a,ht(a),a):(r=n,(a=ff.get(i))&&zf(r=_({},n),a),ht(a=(e=e.ownerDocument||e).createElement("script")),uh(a,"link",r),e.head.appendChild(a),t.instance=a);
case"void":return null;
default:throw Error(o(443,t.type))}
return"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,qf(r,n.precedence,e)),t.instance}
function qf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,s=0;s<r.length;s++){var o=r[s];
if(o.dataset.precedence===t)i=o;
else if(i!==a)break}
i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}
function Ef(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}
function zf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}
var Nf=null;
function Mf(e,t,n){if(null===Nf){var r=new Map,a=Nf=new Map;
a.set(n,r)}else(r=(a=Nf).get(n))||(r=new Map,a.set(n,r));
if(r.has(e))return r;
for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];
if(!(i[it]||i[Je]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var s=i.getAttribute(t)||"";
s=e+s;
var o=r.get(s);
o?o.push(i):r.set(s,[i])}}
return r}
function Cf(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}
function Lf(e,t){return"img"===e&&null!=t.src&&""!==t.src&&null==t.onLoad&&"lazy"!==t.loading}
function Tf(e){return"stylesheet"!==e.type||!!(3&e.state.loading)}
function Af(e){return(e.width||100)*(e.height||100)*("number"==typeof devicePixelRatio?devicePixelRatio:1)*.25}
function Pf(e,t){"function"==typeof t.decode&&(e.imgCount++,t.complete||(e.imgBytes+=Af(t),e.suspenseyImages.push(t)),e=Df.bind(e),t.decode().then(e,e))}
var If=0;
function Rf(e){if(0===e.count&&(0===e.imgCount||!e.waitingForImages))if(e.stylesheets)Bf(e,e.stylesheets);
else if(e.unsuspend){var t=e.unsuspend;
e.unsuspend=null,t()}}
function Of(){this.count--,Rf(this)}
function Df(){this.imgCount--,Rf(this)}
var Ff=null;
function Bf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Ff=new Map,t.forEach(Kf,e),Ff=null,Of.call(e))}
function Kf(e,t){if(!(4&t.state.loading)){var n=Ff.get(e);
if(n)var r=n.get(null);
else{n=new Map,Ff.set(e,n);
for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var s=a[i];
("LINK"===s.nodeName||"not all"!==s.getAttribute("media"))&&(n.set(s.dataset.precedence,s),r=s)}
r&&n.set(null,r)}
s=(a=t.instance).getAttribute("data-precedence"),(i=n.get(s)||r)===r&&n.set(null,a),n.set(s,a),this.count++,r=Of.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}
var Gf={$$typeof:T,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};
function Uf(e,t,n,r,a,i,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}
function Hf(e,t,n,r,a,i,s,o,l,u,c,d){return e=new Uf(e,t,n,s,l,u,c,d,o),t=1,!0===i&&(t|=24),i=sa(3,null,null,t),e.current=i,i.stateNode=e,(t=oi()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Fi(i),e}
function Wf(e,t,n,r,a,i){a=aa,null===r.context?r.context=a:r.pendingContext=a,(r=Ki(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=Gi(e,r,t))&&($c(n,0,t),Ui(n,e,t))}
function $f(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;
e.retryLane=0!==n&&n<t?n:t}}
function Vf(e,t){$f(e,t),(e=e.alternate)&&$f(e,t)}
function Zf(e){if(13===e.tag||31===e.tag){var t=ta(e,67108864);
null!==t&&$c(t,0,67108864),Vf(e,67108864)}}
function Qf(e){if(13===e.tag||31===e.tag){var t=Uc(),n=ta(e,t=$e(t));
null!==n&&$c(n,0,t),Vf(e,t)}}
var Yf=!0;
function Jf(e,t,n,r){var a=V.T;
V.T=null;
var i=Z.p;
try{Z.p=2,ep(e,t,n,r)}finally{Z.p=i,V.T=a}}
function Xf(e,t,n,r){var a=V.T;
V.T=null;
var i=Z.p;
try{Z.p=8,ep(e,t,n,r)}finally{Z.p=i,V.T=a}}
function ep(e,t,n,r){if(Yf){var a=tp(r);
if(null===a)Jd(e,t,r,np,n),fp(e,r);
else if(function(e,t,n,r,a){switch(t){case"focusin":return sp=pp(sp,e,t,n,r,a),!0;
case"dragenter":return op=pp(op,e,t,n,r,a),!0;
case"mouseover":return lp=pp(lp,e,t,n,r,a),!0;
case"pointerover":var i=a.pointerId;
return up.set(i,pp(up.get(i)||null,e,t,n,r,a)),!0;
case"gotpointercapture":return i=a.pointerId,cp.set(i,pp(cp.get(i)||null,e,t,n,r,a)),!0}
return!1}(a,e,t,n,r))r.stopPropagation();
else if(fp(e,r),4&t&&-1<hp.indexOf(e)){for(;null!==a;){var i=ut(a);
if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var s=Re(i.pendingLanes);
if(0!==s){var o=i;
for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Ce(s);
o.entanglements[1]|=l,s&=~l}
Td(i),!(6&lc)&&(Nc=ye()+500,Ad(0,!1))}}
break;
case 31:case 13:null!==(o=ta(i,2))&&$c(o,0,2),Yc(),Vf(i,2)}
if(null===(i=tp(r))&&Jd(e,t,r,np,n),i===a)break;
a=i}
null!==a&&r.stopPropagation()}else Jd(e,t,r,null,n)}}
function tp(e){return rp(e=Vt(e))}
var np=null;
function rp(e){if(np=null,null!==(e=lt(e))){var t=u(e);
if(null===t)e=null;
else{var n=t.tag;
if(13===n){if(null!==(e=c(t)))return e;
e=null}else if(31===n){if(null!==(e=h(t)))return e;
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;
e=null}else t!==e&&(e=null)}}
return np=e,null}
function ap(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;
case"message":switch(ke()){case we:return 2;
case xe:return 8;
case je:case Se:return 32;
case _e:return 268435456;
default:return 32}
default:return 32}}
var ip=!1,sp=null,op=null,lp=null,up=new Map,cp=new Map,dp=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function fp(e,t){switch(e){case"focusin":case"focusout":sp=null;
break;
case"dragenter":case"dragleave":op=null;
break;
case"mouseover":case"mouseout":lp=null;
break;
case"pointerover":case"pointerout":up.delete(t.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":cp.delete(t.pointerId)}}
function pp(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&null!==(t=ut(t))&&Zf(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a)),e}
function mp(e){var t=lt(e.target);
if(null!==t){var n=u(t);
if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Qe(e.priority,function(){Qf(n)})}else if(31===t){if(null!==(t=h(n)))return e.blockedOn=t,void Qe(e.priority,function(){Qf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}
e.blockedOn=null}
function gp(e){if(null!==e.blockedOn)return!1;
for(var t=e.targetContainers;0<t.length;){var n=tp(e.nativeEvent);
if(null!==n)return null!==(t=ut(n))&&Zf(t),e.blockedOn=n,!1;
var r=new(n=e.nativeEvent).constructor(n.type,n);
$t=r,n.target.dispatchEvent(r),$t=null,t.shift()}
return!0}
function vp(e,t,n){gp(e)&&n.delete(t)}
function bp(){ip=!1,null!==sp&&gp(sp)&&(sp=null),null!==op&&gp(op)&&(op=null),null!==lp&&gp(lp)&&(lp=null),up.forEach(vp),cp.forEach(vp)}
function yp(e,t){e.blockedOn===t&&(e.blockedOn=null,ip||(ip=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bp)))}
var kp=null;
function wp(e){kp!==e&&(kp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){kp===e&&(kp=null);
for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];
if("function"!=typeof r){if(null===rp(r||n))continue;
break}
var i=ut(n);
null!==i&&(e.splice(t,3),t-=3,Eo(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}
function xp(e){function t(t){return yp(t,e)}
null!==sp&&yp(sp,e),null!==op&&yp(op,e),null!==lp&&yp(lp,e),up.forEach(t),cp.forEach(t);
for(var n=0;n<dp.length;n++){var r=dp[n];
r.blockedOn===e&&(r.blockedOn=null)}
for(;0<dp.length&&null===(n=dp[0]).blockedOn;)mp(n),null===n.blockedOn&&dp.shift();
if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],s=a[Xe]||null;
if("function"==typeof i)s||wp(n);
else if(s){var o=null;
if(i&&i.hasAttribute("formAction")){if(a=i,s=i[Xe]||null)o=s.formAction;
else if(null!==rp(a))continue}else o=s.action;
"function"==typeof o?n[r+1]=o:(n.splice(r,3),r-=3),wp(n)}}}
function jp(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}
function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}
function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;
e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}
if("object"==typeof navigation){var r=!1,a=null;
return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}
function Sp(e){this._internalRoot=e}
function _p(e){this._internalRoot=e}
_p.prototype.render=Sp.prototype.render=function(e){var t=this._internalRoot;
if(null===t)throw Error(o(409));
Wf(t.current,Uc(),e,t,null,null)},_p.prototype.unmount=Sp.prototype.unmount=function(){var e=this._internalRoot;
if(null!==e){this._internalRoot=null;
var t=e.containerInfo;
Wf(e.current,2,null,e,null,null),Yc(),t[et]=null}},_p.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ze();
e={blockedOn:null,target:e,priority:t};
for(var n=0;n<dp.length&&0!==t&&t<dp[n].priority;n++);
dp.splice(n,0,e),0===n&&mp(e)}};
var qp=a.version;
if("19.3.1"!==qp)throw Error(o(527,qp,"19.3.1"));
if(Z.findDOMNode=function(e){var t=e._reactInternals;
if(void 0===t){if("function"==typeof e.render)throw Error(o(188));
throw Error(o(268,e=Object.keys(e).join(",")))}
return null===(e=null!==(e=function(e){var t=e.alternate;
if(!t){if(null===(t=u(e)))throw Error(o(188));
return t!==e?null:e}
for(var n=e,r=t;;){var a=n.return;
if(null===a)break;
var i=a.alternate;
if(null===i){if(null!==(r=a.return)){n=r;
continue}
break}
if(a.child===i.child){for(i=a.child;i;){if(i===n)return f(a),e;
if(i===r)return f(a),t;
i=i.sibling}
throw Error(o(188))}
if(n.return!==r.return)n=a,r=i;
else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=i;
break}
if(l===r){s=!0,r=a,n=i;
break}
l=l.sibling}
if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=a;
break}
if(l===r){s=!0,r=i,n=a;
break}
l=l.sibling}
if(!s)throw Error(o(189))}}
if(n.alternate!==r)throw Error(o(190))}
if(3!==n.tag)throw Error(o(188));
return n.stateNode.current===n?e:t}(t))?function e(t){var n=t.tag;
if(5===n||26===n||27===n||6===n)return t;
for(t=t.child;null!==t;){if(null!==(n=e(t)))return n;
t=t.sibling}
return null}(e):null)?null:e.stateNode},"u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ep=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!Ep.isDisabled&&Ep.supportsFiber)try{ze=Ep.inject({bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.3.1"}),Ne=Ep}catch(e){}}
fn=function(e,t){if(!l(e))throw Error(o(299));
var n=!1,r="",a=Qo,i=Yo,s=Jo;
return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=Hf(e,1,!1,null,0,n,r,null,a,i,s,jp),e[et]=t.current,Qd(e),new Sp(t)},pn=function(e,t,n){if(!l(e))throw Error(o(299));
var r=!1,a="",i=Qo,s=Yo,u=Jo,c=null;
return null!=n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.formState&&(c=n.formState)),(t=Hf(e,1,!0,t,0,r,a,c,i,s,u,jp)).context=aa,n=t.current,(a=Ki(r=$e(r=Uc()))).callback=null,Gi(n,a,r),n=r,t.current.lanes=n,Ge(t,n),Td(t),e[et]=t.current,Qd(e),new _p(t)},mn="19.3.1"}),
h("jLEW8",function(e,t){e.exports=d("cLwJN")}),
h("cLwJN",function(e,t){function n(e,t){var n=e.length;
for(e.push(t);0<n;){var r=n-1>>>1,a=e[r];
if(!(0<i(a,t)))break;
e[r]=t,e[n]=a,n=r}}
function r(e){return 0===e.length?null:e[0]}
function a(e){if(0===e.length)return null;
var t=e[0],n=e.pop();
if(n!==t){e[0]=n;
for(var r=0,a=e.length,s=a>>>1;r<s;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];
if(0>i(l,n))u<a&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);
else{if(!(u<a&&0>i(c,n)))break;
e[r]=c,e[u]=n,r=u}}}
return t}
function i(e,t){var n=e.sortIndex-t.sortIndex;
return 0!==n?n:e.id-t.id}
if(s(e.exports,"unstable_now",()=>o,e=>o=e),s(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),s(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),s(e.exports,"unstable_LowPriority",()=>c,e=>c=e),s(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),s(e.exports,"unstable_Profiling",()=>h,e=>h=e),s(e.exports,"unstable_UserBlockingPriority",()=>f,e=>f=e),s(e.exports,"unstable_cancelCallback",()=>p,e=>p=e),s(e.exports,"unstable_forceFrameRate",()=>m,e=>m=e),s(e.exports,"unstable_getCurrentPriorityLevel",()=>g,e=>g=e),s(e.exports,"unstable_next",()=>v,e=>v=e),s(e.exports,"unstable_requestPaint",()=>b,e=>b=e),s(e.exports,"unstable_runWithPriority",()=>y,e=>y=e),s(e.exports,"unstable_scheduleCallback",()=>k,e=>k=e),s(e.exports,"unstable_shouldYield",()=>w,e=>w=e),s(e.exports,"unstable_wrapCallback",()=>x,e=>x=e),o=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o,l,u,c,d,h,f,p,m,g,v,b,y,k,w,x,j,S=performance;
o=function(){return S.now()}}else{var _=Date,q=_.now();
o=function(){return _.now()-q}}
var E=[],z=[],N=1,M=null,C=3,L=!1,T=!1,A=!1,P=!1,I="function"==typeof setTimeout?setTimeout:null,R="function"==typeof clearTimeout?clearTimeout:null,O="u">typeof setImmediate?setImmediate:null;
function D(e){for(var t=r(z);null!==t;){if(null===t.callback)a(z);
else{if(!(t.startTime<=e))break;
a(z),t.sortIndex=t.expirationTime,n(E,t)}
t=r(z)}}
function F(e){if(A=!1,D(e),!T)if(null!==r(E))T=!0,B||(B=!0,j());
else{var t=r(z);
null!==t&&Z(F,t.startTime-e)}}
var B=!1,K=-1,G=5,U=-1;
function H(){return!(!P&&o()-U<G)}
function W(){if(P=!1,B){var e=o();
U=e;
var t=!0;
try{e:{T=!1,A&&(A=!1,R(K),K=-1),L=!0;
var n=C;
try{t:{for(D(e),M=r(E);null!==M&&!(M.expirationTime>e&&H());){var i=M.callback;
if("function"==typeof i){M.callback=null,C=M.priorityLevel;
var s=i(M.expirationTime<=e);
if(e=o(),"function"==typeof s){M.callback=s,D(e),t=!0;
break t}
M===r(E)&&a(E),D(e)}else a(E);
M=r(E)}
if(null!==M)t=!0;
else{var l=r(z);
null!==l&&Z(F,l.startTime-e),t=!1}}
break e}finally{M=null,C=n,L=!1}}}finally{t?j():B=!1}}}
if("function"==typeof O)j=function(){O(W)};
else if("u">typeof MessageChannel){var $=new MessageChannel,V=$.port2;
$.port1.onmessage=W,j=function(){V.postMessage(null)}}else j=function(){I(W,0)};
function Z(e,t){K=I(function(){e(o())},t)}
l=5,u=1,c=4,d=3,h=null,f=2,p=function(e){e.callback=null},m=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<e?Math.floor(1e3/e):5},g=function(){return C},v=function(e){switch(C){case 1:case 2:case 3:var t=3;
break;
default:t=C}
var n=C;
C=t;
try{return e()}finally{C=n}},b=function(){P=!0},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;
default:e=3}
var n=C;
C=e;
try{return t()}finally{C=n}},k=function(e,t,a){var i=o();
switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?i+a:i,e){case 1:var s=-1;
break;
case 2:s=250;
break;
case 5:s=1073741823;
break;
case 4:s=1e4;
break;
default:s=5e3}
return e={id:N++,callback:t,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>i?(e.sortIndex=a,n(z,e),null===r(E)&&e===r(z)&&(A?(R(K),K=-1):A=!0,Z(F,a-i))):(e.sortIndex=s,n(E,e),T||L||(T=!0,B||(B=!0,j()))),e},w=H,x=function(e){var t=C;
return function(){var n=C;
C=t;
try{return e.apply(this,arguments)}finally{C=n}}}}),
h("aIIwE",function(e,t){e.exports=d("70gH3")}),
h("70gH3",function(e,t){s(e.exports,"Activity",()=>n,e=>n=e),s(e.exports,"Children",()=>r,e=>r=e),s(e.exports,"Component",()=>a,e=>a=e),s(e.exports,"Fragment",()=>i,e=>i=e),s(e.exports,"Profiler",()=>o,e=>o=e),s(e.exports,"PureComponent",()=>l,e=>l=e),s(e.exports,"StrictMode",()=>u,e=>u=e),s(e.exports,"Suspense",()=>c,e=>c=e),s(e.exports,"ViewTransition",()=>d,e=>d=e),s(e.exports,"__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",()=>h,e=>h=e),s(e.exports,"__COMPILER_RUNTIME",()=>f,e=>f=e),s(e.exports,"addTransitionType",()=>p,e=>p=e),s(e.exports,"cache",()=>m,e=>m=e),s(e.exports,"cacheSignal",()=>g,e=>g=e),s(e.exports,"cloneElement",()=>v,e=>v=e),s(e.exports,"createContext",()=>b,e=>b=e),s(e.exports,"createElement",()=>y,e=>y=e),s(e.exports,"createRef",()=>k,e=>k=e),s(e.exports,"forwardRef",()=>w,e=>w=e),s(e.exports,"isValidElement",()=>x,e=>x=e),s(e.exports,"lazy",()=>j,e=>j=e),s(e.exports,"memo",()=>S,e=>S=e),s(e.exports,"startTransition",()=>_,e=>_=e),s(e.exports,"unstable_useCacheRefresh",()=>q,e=>q=e),s(e.exports,"use",()=>E,e=>E=e),s(e.exports,"useActionState",()=>z,e=>z=e),s(e.exports,"useCallback",()=>N,e=>N=e),s(e.exports,"useContext",()=>M,e=>M=e),s(e.exports,"useDebugValue",()=>C,e=>C=e),s(e.exports,"useDeferredValue",()=>L,e=>L=e),s(e.exports,"useEffect",()=>T,e=>T=e),s(e.exports,"useEffectEvent",()=>A,e=>A=e),s(e.exports,"useId",()=>P,e=>P=e),s(e.exports,"useImperativeHandle",()=>I,e=>I=e),s(e.exports,"useInsertionEffect",()=>R,e=>R=e),s(e.exports,"useLayoutEffect",()=>O,e=>O=e),s(e.exports,"useMemo",()=>D,e=>D=e),s(e.exports,"useOptimistic",()=>F,e=>F=e),s(e.exports,"useReducer",()=>B,e=>B=e),s(e.exports,"useRef",()=>K,e=>K=e),s(e.exports,"useState",()=>G,e=>G=e),s(e.exports,"useSyncExternalStore",()=>U,e=>U=e),s(e.exports,"useTransition",()=>H,e=>H=e),s(e.exports,"version",()=>W,e=>W=e);
var n,r,a,i,o,l,u,c,d,h,f,p,m,g,v,b,y,k,w,x,j,S,_,q,E,z,N,M,C,L,T,A,P,I,R,O,D,F,B,K,G,U,H,W,$=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ne=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),ie=Symbol.for("react.view_transition"),se=Symbol.iterator,oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,ue={};
function ce(e,t,n){this.props=e,this.context=t,this.refs=ue,this.updater=n||oe}
function de(){}
function he(e,t,n){this.props=e,this.context=t,this.refs=ue,this.updater=n||oe}
ce.prototype.isReactComponent={},ce.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,e,t,"setState")},ce.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},de.prototype=ce.prototype;
var fe=he.prototype=new de;
fe.constructor=he,le(fe,ce.prototype),fe.isPureReactComponent=!0;
var pe=Array.isArray;
function me(){}
var ge={H:null,A:null,T:null,S:null},ve=Object.prototype.hasOwnProperty;
function be(e,t,n){var r=n.ref;
return{$$typeof:$,type:e,key:t,ref:void 0!==r?r:null,props:n}}
function ye(e){return"object"==typeof e&&null!==e&&e.$$typeof===$}
var ke=/\/+/g;
function we(e,t){var n,r;
return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}
function xe(e,t,n){if(null==e)return e;
var r=[],a=0;
return function e(t,n,r,a,i){var s,o,l,u=typeof t;
("undefined"===u||"boolean"===u)&&(t=null);
var c=!1;
if(null===t)c=!0;
else switch(u){case"bigint":case"string":case"number":c=!0;
break;
case"object":switch(t.$$typeof){case $:case V:c=!0;
break;
case re:return e((c=t._init)(t._payload),n,r,a,i)}}
if(c)return i=i(t),c=""===a?"."+we(t,0):a,pe(i)?(r="",null!=c&&(r=c.replace(ke,"$&/")+"/"),e(i,n,r,"",function(e){return e})):null!=i&&(ye(i)&&(s=i,o=r+(null==i.key||t&&t.key===i.key?"":(""+i.key).replace(ke,"$&/")+"/")+c,i=be(s.type,o,s.props)),n.push(i)),1;
c=0;
var d=""===a?".":a+":";
if(pe(t))for(var h=0;h<t.length;h++)u=d+we(a=t[h],h),c+=e(a,n,r,u,i);
else if("function"==typeof(h=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=se&&l[se]||l["@@iterator"])?l:null))for(t=h.call(t),h=0;!(a=t.next()).done;)u=d+we(a=a.value,h++),c+=e(a,n,r,u,i);
else if("object"===u){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;
case"rejected":throw e.reason;
default:switch("string"==typeof e.status?e.then(me,me):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;
case"rejected":throw e.reason}}
throw e}(t),n,r,a,i);
throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}
return c}(e,r,"","",function(e){return t.call(n,e,a++)}),r}
function je(e){if(-1===e._status){var t=(0,e._result)();
t.then(function(n){(0===e._status||-1===e._status)&&(e._status=1,e._result=n,void 0===t.status&&(t.status="fulfilled",t.value=n))},function(n){(0===e._status||-1===e._status)&&(e._status=2,e._result=n,void 0===t.status&&(t.status="rejected",t.reason=n))}),-1===e._status&&(e._status=0,e._result=t)}
if(1===e._status)return e._result.default;
throw e._result}
var Se="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});
if(!window.dispatchEvent(t))return}
console.error(e)};
function _e(e){var t=ge.T,n={};
n.types=null!==t?t.types:null,ge.T=n;
try{var r=e(),a=ge.S;
null!==a&&a(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(me,Se)}catch(e){Se(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),ge.T=t}}
n=ae,r={map:xe,forEach:function(e,t,n){xe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;
return xe(e,function(){t++}),t},toArray:function(e){return xe(e,function(e){return e})||[]},only:function(e){if(!ye(e))throw Error("React.Children.only expected to receive a single React element child.");
return e}},a=ce,i=Z,o=Y,l=he,u=Q,c=te,d=ie,h=ge,f={__proto__:null,c:function(e){return ge.H.useMemoCache(e)}},p=function e(t){var n=ge.T;
if(null!==n){var r=n.types;
null===r?n.types=[t]:-1===r.indexOf(t)&&r.push(t)}else _e(e.bind(null,t))},m=function(e){return function(){return e.apply(null,arguments)}},g=function(){return null},v=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");
var r=le({},e.props),a=e.key;
if(null!=t)for(i in void 0!==t.key&&(a=""+t.key),t)ve.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);
var i=arguments.length-2;
if(1===i)r.children=n;
else if(1<i){for(var s=Array(i),o=0;o<i;o++)s[o]=arguments[o+2];
r.children=s}
return be(e.type,a,r)},b=function(e){return(e={$$typeof:X,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:J,_context:e},e},y=function(e,t,n){var r,a={},i=null;
if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)ve.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);
var s=arguments.length-2;
if(1===s)a.children=n;
else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];
a.children=o}
if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);
return be(e,i,a)},k=function(){return{current:null}},w=function(e){return{$$typeof:ee,render:e}},x=ye,j=function(e){return{$$typeof:re,_payload:{_status:-1,_result:e},_init:je}},S=function(e,t){return{$$typeof:ne,type:e,compare:void 0===t?null:t}},_=_e,q=function(){return ge.H.useCacheRefresh()},E=function(e){return ge.H.use(e)},z=function(e,t,n){return ge.H.useActionState(e,t,n)},N=function(e,t){return ge.H.useCallback(e,t)},M=function(e){return ge.H.useContext(e)},C=function(){},L=function(e,t){return ge.H.useDeferredValue(e,t)},T=function(e,t){return ge.H.useEffect(e,t)},A=function(e){return ge.H.useEffectEvent(e)},P=function(){return ge.H.useId()},I=function(e,t,n){return ge.H.useImperativeHandle(e,t,n)},R=function(e,t){return ge.H.useInsertionEffect(e,t)},O=function(e,t){return ge.H.useLayoutEffect(e,t)},D=function(e,t){return ge.H.useMemo(e,t)},F=function(e,t){return ge.H.useOptimistic(e,t)},B=function(e,t,n){return ge.H.useReducer(e,t,n)},K=function(e){return ge.H.useRef(e)},G=function(e){return ge.H.useState(e)},U=function(e,t,n){return ge.H.useSyncExternalStore(e,t,n)},H=function(){return ge.H.useTransition()},W="19.3.1"}),
h("395Dg",function(e,t){!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=d("2b9p0")}),
h("2b9p0",function(e,t){s(e.exports,"__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",()=>n,e=>n=e),s(e.exports,"browser",()=>r,e=>r=e),s(e.exports,"createPortal",()=>a,e=>a=e),s(e.exports,"flushSync",()=>i,e=>i=e),s(e.exports,"preconnect",()=>o,e=>o=e),s(e.exports,"prefetchDNS",()=>l,e=>l=e),s(e.exports,"preinit",()=>u,e=>u=e),s(e.exports,"preinitModule",()=>c,e=>c=e),s(e.exports,"preload",()=>h,e=>h=e),s(e.exports,"preloadModule",()=>f,e=>f=e),s(e.exports,"requestFormReset",()=>p,e=>p=e),s(e.exports,"unstable_batchedUpdates",()=>m,e=>m=e),s(e.exports,"useFormState",()=>g,e=>g=e),s(e.exports,"useFormStatus",()=>v,e=>v=e),s(e.exports,"version",()=>b,e=>b=e);
var n,r,a,i,o,l,u,c,h,f,p,m,g,v,b,y=d("aIIwE");
function k(e){var t="https://react.dev/errors/"+e;
if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);
for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function w(){}
var x={d:{f:w,r:function(){throw Error(k(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},j=Symbol.for("react.portal"),S=Symbol.for("react.recoverable"),_=Symbol.for("react.optimistic_key"),q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function E(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}
n=x,r=function(e){return{$$typeof:S,_reason:e}},a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;
if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(k(299));
return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;
return{$$typeof:j,key:null==r?null:r===_?_:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},i=function(e){var t=q.T,n=x.p;
try{if(q.T=null,x.p=2,e)return e()}finally{q.T=t,x.p=n,x.d.f()}},o=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,x.d.C(e,t))},l=function(e){"string"==typeof e&&x.d.D(e)},u=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=E(n,t.crossOrigin),a="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;
"style"===n?x.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&x.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},c=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=E(t.as,t.crossOrigin);
x.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0})}}else null==t&&x.d.M(e)},h=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=E(n,t.crossOrigin);
x.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},f=function(e,t){if("string"==typeof e)if(t){var n=E(t.as,t.crossOrigin);
x.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0})}else x.d.m(e)},p=function(e){x.d.r(e)},m=function(e,t){return e(t)},g=function(e,t,n){return q.H.useFormState(e,t,n)},v=function(){return q.H.useHostTransitionStatus()},b="19.3.1"}),
h("9LE87",function(e,t){function n(e,t,n){e.prototype=t.prototype=n,n.constructor=e}
function r(e,t){var n=Object.create(e.prototype);
for(var r in t)n[r]=t[r];
return n}
function a(){}
s(e.exports,"color",()=>k),s(e.exports,"rgb",()=>S),s(e.exports,"hsl",()=>T),s(e.exports,"lab",()=>H),s(e.exports,"hcl",()=>Y),s(e.exports,"cubehelix",()=>te);
var i=1/.7,o="\\s*([+-]?\\d+)\\s*",l="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",c=/^#([0-9a-f]{3,8})$/,d=RegExp(`^rgb\\(${o},${o},${o}\\)$`),h=RegExp(`^rgb\\(${u},${u},${u}\\)$`),f=RegExp(`^rgba\\(${o},${o},${o},${l}\\)$`),p=RegExp(`^rgba\\(${u},${u},${u},${l}\\)$`),m=RegExp(`^hsl\\(${l},${u},${u}\\)$`),g=RegExp(`^hsla\\(${l},${u},${u},${l}\\)$`),v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};
function b(){return this.rgb().formatHex()}
function y(){return this.rgb().formatRgb()}
function k(e){var t,n;
return e=(e+"").trim().toLowerCase(),(t=c.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?w(t):3===n?new _(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?x(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?x(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=d.exec(e))?new _(t[1],t[2],t[3],1):(t=h.exec(e))?new _(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=f.exec(e))?x(t[1],t[2],t[3],t[4]):(t=p.exec(e))?x(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=m.exec(e))?C(t[1],t[2]/100,t[3]/100,1):(t=g.exec(e))?C(t[1],t[2]/100,t[3]/100,t[4]):v.hasOwnProperty(e)?w(v[e]):"transparent"===e?new _(NaN,NaN,NaN,0):null}
function w(e){return new _(e>>16&255,e>>8&255,255&e,1)}
function x(e,t,n,r){return r<=0&&(e=t=n=NaN),new _(e,t,n,r)}
function j(e){return e instanceof a||(e=k(e)),e?new _((e=e.rgb()).r,e.g,e.b,e.opacity):new _}
function S(e,t,n,r){return 1==arguments.length?j(e):new _(e,t,n,null==r?1:r)}
function _(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}
function q(){return`#${M(this.r)}${M(this.g)}${M(this.b)}`}
function E(){let e=z(this.opacity);
return`${1===e?"rgb(":"rgba("}${N(this.r)}, ${N(this.g)}, ${N(this.b)}${1===e?")":`, ${e})`}`}
function z(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}
function N(e){return Math.max(0,Math.min(255,Math.round(e)||0))}
function M(e){return((e=N(e))<16?"0":"")+e.toString(16)}
function C(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new A(e,t,n,r)}
function L(e){if(e instanceof A)return new A(e.h,e.s,e.l,e.opacity);
if(e instanceof a||(e=k(e)),!e)return new A;
if(e instanceof A)return e;
var t=(e=e.rgb()).r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),o=NaN,l=s-i,u=(s+i)/2;
return l?(o=t===s?(n-r)/l+6*(n<r):n===s?(r-t)/l+2:(t-n)/l+4,l/=u<.5?s+i:2-s-i,o*=60):l=u>0&&u<1?0:o,new A(o,l,u,e.opacity)}
function T(e,t,n,r){return 1==arguments.length?L(e):new A(e,t,n,null==r?1:r)}
function A(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}
function P(e){return(e=(e||0)%360)<0?e+360:e}
function I(e){return Math.max(0,Math.min(1,e||0))}
function R(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}
n(a,k,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:b,formatHex:b,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return L(this).formatHsl()},formatRgb:y,toString:y}),n(_,S,r(a,{brighter(e){return e=null==e?i:Math.pow(i,e),new _(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new _(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new _(N(this.r),N(this.g),N(this.b),z(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:q,formatHex:q,formatHex8:function(){return`#${M(this.r)}${M(this.g)}${M(this.b)}${M(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:E,toString:E})),n(A,T,r(a,{brighter(e){return e=null==e?i:Math.pow(i,e),new A(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new A(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;
return new _(R(e>=240?e-240:e+120,a,r),R(e,a,r),R(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new A(P(this.h),I(this.s),I(this.l),z(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=z(this.opacity);
return`${1===e?"hsl(":"hsla("}${P(this.h)}, ${100*I(this.s)}%, ${100*I(this.l)}%${1===e?")":`, ${e})`}`}}));
let O=Math.PI/180,D=180/Math.PI,F=4/29,B=6/29,K=6/29*3*(6/29),G=6/29*(6/29)*(6/29);
function U(e){if(e instanceof W)return new W(e.l,e.a,e.b,e.opacity);
if(e instanceof J)return X(e);
e instanceof _||(e=j(e));
var t,n,r=Q(e.r),a=Q(e.g),i=Q(e.b),s=$((.2225045*r+.7168786*a+.0606169*i)/1);
return r===a&&a===i?t=n=s:(t=$((.4360747*r+.3850649*a+.1430804*i)/.96422),n=$((.0139322*r+.0971045*a+.7141733*i)/.82521)),new W(116*s-16,500*(t-s),200*(s-n),e.opacity)}
function H(e,t,n,r){return 1==arguments.length?U(e):new W(e,t,n,null==r?1:r)}
function W(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}
function $(e){return e>G?Math.pow(e,1/3):e/K+F}
function V(e){return e>B?e*e*e:K*(e-F)}
function Z(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}
function Q(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}
function Y(e,t,n,r){return 1==arguments.length?function(e){if(e instanceof J)return new J(e.h,e.c,e.l,e.opacity);
if(e instanceof W||(e=U(e)),0===e.a&&0===e.b)return new J(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);
var t=Math.atan2(e.b,e.a)*D;
return new J(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}(e):new J(e,t,n,null==r?1:r)}
function J(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}
function X(e){if(isNaN(e.h))return new W(e.l,0,0,e.opacity);
var t=e.h*O;
return new W(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}
n(W,H,r(a,{brighter(e){return new W(this.l+18*(null==e?1:e),this.a,this.b,this.opacity)},darker(e){return new W(this.l-18*(null==e?1:e),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;
return new _(Z(3.1338561*(t=.96422*V(t))-1.6168667*(e=+V(e))-.4906146*(n=.82521*V(n))),Z(-.9787684*t+1.9161415*e+.033454*n),Z(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}})),n(J,Y,r(a,{brighter(e){return new J(this.h,this.c,this.l+18*(null==e?1:e),this.opacity)},darker(e){return new J(this.h,this.c,this.l-18*(null==e?1:e),this.opacity)},rgb(){return X(this).rgb()}}));
var ee=-.6557636667999999;
function te(e,t,n,r){return 1==arguments.length?function(e){if(e instanceof ne)return new ne(e.h,e.s,e.l,e.opacity);
e instanceof _||(e=j(e));
var t=e.r/255,n=e.g/255,r=e.b/255,a=(ee*r+-1.7884503806*t-3.5172982438*n)/(ee+-1.7884503806-3.5172982438),i=r-a,s=-(1.97294*(n-a)- -.29227*i)/.90649,o=Math.sqrt(s*s+i*i)/(1.97294*a*(1-a)),l=o?Math.atan2(s,i)*D-120:NaN;
return new ne(l<0?l+360:l,o,a,e.opacity)}(e):new ne(e,t,n,null==r?1:r)}
function ne(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}
n(ne,te,r(a,{brighter(e){return e=null==e?i:Math.pow(i,e),new ne(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new ne(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*O,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(e),a=Math.sin(e);
return new _(255*(t+n*(-.14861*r+1.78277*a)),255*(t+n*(-.29227*r+-.90649*a)),255*(t+1.97294*r*n),this.opacity)}}))});
var f;
f=d("TLpOh");
var p;
!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),
p=d("iVJPK");
var m=(d("aIIwE"),d("aIIwE"),d("aIIwE")),
g=Object.defineProperty,
v=(e,t)=>g(e,"name",{value:t,configurable:!0}),
b=!!("u">typeof window&&window.document&&window.document.createElement);
function y(e,t,{checkForDefaultPrevented:n=!0}={}){return v(function(r){if(e?.(r),!1===n||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}
function k(e){if(!b)throw Error("Cannot access document outside of the DOM");
return e?.ownerDocument??document}
function w(e){return"IFRAME"===e.tagName}
v(y,"composeEventHandlers"),
v(function(e){if(!b)throw Error("Cannot access window outside of the DOM");
return e?.ownerDocument?.defaultView??window},"getOwnerWindow"),
v(k,"getOwnerDocument"),
v(function e(t,n=!1){let{activeElement:r}=k(t);
if(!r?.nodeName)return null;
if(w(r)&&r.contentDocument)return e(r.contentDocument.body,n);
if(n){let e=r.getAttribute("aria-activedescendant");
if(e){let t=k(r).getElementById(e);
if(t)return t}}
return r},"getActiveElement"),
v(w,"isFrame");
m=d("aIIwE");
var x=Object.defineProperty,
j=(e,t)=>x(e,"name",{value:t,configurable:!0});
function S(e,t){if("function"==typeof e)return e(t);
null!=e&&(e.current=t)}
function _(...e){return t=>{let n=!1,
r=e.map(e=>{let r=S(e,t);
return n||"function"!=typeof r||(n=!0),r});
if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];
"function"==typeof n?n():S(e[t],null)}}}}
function q(...e){return m.useCallback(_(...e),e)}
j(S,"setRef"),
j(_,"composeRefs"),
j(q,"useComposedRefs");
m=d("aIIwE");
var E=Object.defineProperty,
z=(e,t)=>E(e,"name",{value:t,configurable:!0});
function N(e,t=[]){let n=[];
function r(t,r){let a=m.createContext(r);
a.displayName=t+"Context";
let i=n.length;
n=[...n,r];
let s=z(t=>{let{scope:n,children:r,...s}=t,o=n?.[e]?.[i]||a,l=m.useMemo(()=>s,Object.values(s));
return(0,f.jsx)(o.Provider,{value:l,children:r})},"Provider");
function o(n,s,o={}){let{optional:l=!1}=o,
u=s?.[e]?.[i]||a,
c=m.useContext(u);
if(c)return c;
if(void 0!==r)return r;
if(!l)throw Error(`\`${n}\` must be used within \`${t}\``)}
return s.displayName=t+"Provider",
z(o,"useContext"),
[s,o]}
z(r,"createContext");
let a=z(()=>{let t=n.map(e=>m.createContext(e));
return z(function(n){let r=n?.[e]||t;
return m.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},"useScope")},"createScope");
return a.scopeName=e,
[r,M(a,...t)]}
function M(...e){let t=e[0];
if(1===e.length)return t;
let n=z(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));
return z(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]}),{});
return m.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},"useComposedScopes")},"createScope");
return n.scopeName=t.scopeName,
n}
z(function(e,t){let n=m.createContext(t);
n.displayName=e+"Context";
let r=z(e=>{let{children:t,...r}=e,a=m.useMemo(()=>r,Object.values(r));
return(0,f.jsx)(n.Provider,{value:a,children:t})},"Provider");
function a(r,a={}){let{optional:i=!1}=a,s=m.useContext(n);
if(s)return s;
if(void 0!==t)return t;
if(!i)throw Error(`\`${r}\` must be used within \`${e}\``)}
return r.displayName=e+"Provider",z(a,"useContext"),[r,a]},"createContext"),
z(N,"createContextScope"),
z(M,"composeContextScopes");
d("aIIwE"),
m=d("aIIwE");
var C=globalThis?.document?m.useLayoutEffect:()=>{},
L=Object.defineProperty,
T=m[" useId ".trim().toString()]||(()=>{}),
A=0;
function P(e){let[t,n]=m.useState(T());
return C(()=>{e||n(e=>e??String(A++))},[e]),
e||(t?`radix-${t}`:"")}
L(P,"name",{value:"useId",configurable:!0});
d("aIIwE"),
m=d("aIIwE");
var I=Object.defineProperty,
R=m[" useEffectEvent ".trim().toString()],
O=m[" useInsertionEffect ".trim().toString()];
function D(e){if("function"==typeof R)return R(e);
let t=m.useRef(()=>{throw Error("Cannot call an event handler while rendering.")});
return"function"==typeof O?O(()=>{t.current=e}):C(()=>{t.current=e}),
m.useMemo(()=>(...e)=>t.current?.(...e),[])}
I(D,"name",{value:"useEffectEvent",configurable:!0});
var F=Object.defineProperty,
B=(e,t)=>F(e,"name",{value:t,configurable:!0}),
K=m[" useInsertionEffect ".trim().toString()]||C;
function G({prop:e,defaultProp:t,onChange:n=B(()=>{},"onChange"),caller:r}){let[a,i,s]=U({defaultProp:t,onChange:n}),
o=void 0!==e;
return[o?e:a,m.useCallback(t=>{if(o){let n=H(t)?t(e):t;
n!==e&&s.current?.(n)}else i(t)},[o,e,i,s])]}
function U({defaultProp:e,onChange:t}){let[n,r]=m.useState(e),
a=m.useRef(n),
i=m.useRef(t);
return K(()=>{i.current=t},[t]),
m.useEffect(()=>{a.current!==n&&(i.current?.(n),a.current=n)},[n,a]),
[n,r,i]}
function H(e){return"function"==typeof e}
B(G,"useControllableState"),
B(U,"useUncontrolledState"),
B(H,"isFunction");
var W=Symbol("RADIX:SYNC_STATE");
B(function(e,t,n,r){let{prop:a,defaultProp:i,onChange:s,caller:o}=t,l=void 0!==a,u=D(s),c=[{...n,state:i}];
r&&c.push(r);
let[d,h]=m.useReducer((t,n)=>{if(n.type===W)return{...t,state:n.state};
let r=e(t,n);
return l&&!Object.is(r.state,t.state)&&u(r.state),r},...c),f=d.state,p=m.useRef(f);
m.useEffect(()=>{p.current!==f&&(p.current=f,l||u(f))},[f,p,l]);
let g=m.useMemo(()=>void 0!==a?{...d,state:a}:d,[d,a]);
return m.useEffect(()=>{l&&!Object.is(a,d.state)&&h({type:W,state:a})},[a,d.state,l]),[g,h]},"useControllableStateReducer");
d("aIIwE"),
m=d("aIIwE");
var $=d("395Dg"),
V=(m=d("aIIwE"),Object.defineProperty),
Z=(e,t)=>V(e,"name",{value:t,configurable:!0});
function Q(e){let t=m.forwardRef((t,n)=>{let{children:r,...a}=t,i=null,s=!1,o=[];
r=ie(r),m.Children.forEach(r,e=>{if(te(e)){s=!0;
let t="child"in e.props?e.props.child:e.props.children;
for(;re(t)&&"function"==typeof ue;)t=ue(t._payload);
i=J(e,t),o.push(i?.props?.children)}else o.push(e)}),i?i=m.cloneElement(i,void 0,o):!s&&1===m.Children.count(r)&&m.isValidElement(r)&&(i=r);
let l=i?ee(i):void 0,u=q(n,l);
if(!i){if(r||0===r)throw Error(s?le(e):oe(e));
return r}
let c=X(a,i.props??{});
return i.type!==m.Fragment&&(c.ref=n?u:l),m.cloneElement(i,c)});
return t.displayName=`${e}.Slot`,
t}
Z(Q,"createSlot");
var Y=Symbol.for("radix.slottable");
Z(function(e){let t=Z(e=>"child"in e?e.children(e.child):e.children,"Slottable");
return t.displayName=`${e}.Slottable`,t.__radixId=Y,t},"createSlottable");
var J=Z((e,t)=>"child"in e.props?m.isValidElement(t)?m.cloneElement(t,void 0,e.props.children(t.props.children)):null:m.isValidElement(t)?t:null,"getSlottableElementFromSlottable");
function X(e,t){let n={...t};
for(let r in t){let a=e[r],
i=t[r];
/^on[A-Z]/.test(r)?a&&i?n[r]=(...e)=>{let t=i(...e);
return a(...e),
t}:a&&(n[r]=a):"style"===r?n[r]={...a,
...i}:"className"===r?n[r]=[a,i].filter(Boolean).join(" "):"aria-describedby"===r&&(n[r]=se(i,a))}
return{...e,
...n}}
function ee(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,
n=t&&"isReactWarning"in t&&t.isReactWarning;
return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}
function te(e){return m.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===Y}
Z(X,"mergeProps"),
Z(ee,"getElementRef"),
Z(te,"isSlottable");
var ne=Symbol.for("react.lazy");
function re(e){return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===ne&&"_payload"in e&&ae(e._payload)}
function ae(e){return"object"==typeof e&&null!==e&&"then"in e}
function ie(e){let t=e;
for(;re(t)&&"function"==typeof ue;)t=ue(t._payload);
return t}
function se(...e){let t=new Set;
for(let n of e)if("string"==typeof n)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);
return t.size>0?Array.from(t).join(" "):void 0}
Z(re,"isLazyComponent"),
Z(ae,"isPromiseLike"),
Z(ie,"useUnwrappedLazy"),
Z(se,"concatAriaDescribedby");
var oe=Z(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),
le=Z(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),
ue=m[" use ".trim().toString()],
ce=Object.defineProperty,
de=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let n=Q(`Primitive.${t}`),r=m.forwardRef((e,r)=>{let{asChild:a,...i}=e;
return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,f.jsx)(a?n:t,{...i,ref:r})});
return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});
function he(e,t){e&&$.flushSync(()=>e.dispatchEvent(t))}
ce(he,"name",{value:"dispatchDiscreteCustomEvent",configurable:!0});
m=d("aIIwE");
var fe=Object.defineProperty,
pe=m[" useInsertionEffect ".trim().toString()];
function me(e){let t=m.useRef(e);
return"function"==typeof pe?pe(()=>{t.current=e}):C(()=>{t.current=e}),
m.useMemo(()=>(...e)=>t.current?.(...e),[])}
fe(me,"name",{value:"useCallbackRef",configurable:!0});
var ge=Object.defineProperty,
ve=(e,t)=>ge(e,"name",{value:t,configurable:!0}),
be="dismissableLayer.update",
ye=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),
ke=m.forwardRef(ve(function(e,t){let{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:l,...u}=e,c=m.useContext(ye),[d,h]=m.useState(null),p=d?.ownerDocument??globalThis?.document,[,g]=m.useState({}),v=q(t,h),b=Array.from(c.layers),[k]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),w=k?b.indexOf(k):-1,x=d?b.indexOf(d):-1,j=c.layersWithOutsidePointerEventsDisabled.size>0,S=x>=w,_=m.useRef(!1),E=je(e=>{i?.(e),o?.(e),e.defaultPrevented||l?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:_,dismissableSurfaces:c.dismissableSurfaces,shouldHandlePointerDownOutside:m.useCallback(e=>{if(!(e instanceof Node))return!1;
let t=[...c.branches].some(t=>t.contains(e));
return S&&!t},[c.branches,S])}),z=Se(e=>{if(r&&_.current)return;
let t=e.target;
![...c.branches].some(e=>e.contains(t))&&(s?.(e),o?.(e),e.defaultPrevented||l?.())},p),N=!!d&&x===b.length-1,M=me(e=>{"Escape"===e.key&&(a?.(e),!e.defaultPrevented&&l&&(e.preventDefault(),l()))});
return m.useEffect(()=>{if(N)return p.addEventListener("keydown",M,{capture:!0}),()=>p.removeEventListener("keydown",M,{capture:!0})},[p,N,M]),m.useEffect(()=>{if(d)return n&&(0===c.layersWithOutsidePointerEventsDisabled.size&&(Xs=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),_e(),()=>{n&&(c.layersWithOutsidePointerEventsDisabled.delete(d),0===c.layersWithOutsidePointerEventsDisabled.size&&(p.body.style.pointerEvents=Xs))}},[d,p,n,c]),m.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),_e())},[d,c]),m.useEffect(()=>{let e=ve(()=>g({}),"handleUpdate");
return document.addEventListener(be,e),()=>document.removeEventListener(be,e)},[]),(0,f.jsx)(de.div,{...u,ref:v,style:{pointerEvents:j?S?"auto":"none":void 0,...e.style},onFocusCapture:y(e.onFocusCapture,z.onFocusCapture),onBlurCapture:y(e.onBlurCapture,z.onBlurCapture),onPointerDownCapture:y(e.onPointerDownCapture,E.onPointerDownCapture)})},"DismissableLayer"));
function we(){let e=m.useContext(ye),
[t,n]=m.useState(null);
return m.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),
n}
ve(we,"useDismissableLayerSurface");
var xe=ve(()=>!0,"IS_TRUE");
function je(e,t){let{ownerDocument:n=globalThis?.document,
deferPointerDownOutside:r=!1,
isDeferredPointerDownOutsideRef:a,
dismissableSurfaces:i,
shouldHandlePointerDownOutside:s=xe}=t,
o=me(e),
l=m.useRef(!1),
u=m.useRef(!1),
c=m.useRef(new Map),
d=m.useRef(()=>{});
return m.useEffect(()=>{function e(){u.current=!1,a.current=!1,c.current.clear()}
function t(){return Array.from(c.current.values()).some(Boolean)}
function h(e){if(!u.current)return;
let t=e.target;
t instanceof Node&&[...i].some(e=>e.contains(t))||c.current.set(e.type,!0),"click"===e.type&&window.setTimeout(()=>{u.current&&d.current()},0)}
function f(e){u.current&&c.current.set(e.type,!1)}
ve(e,"resetOutsideInteraction"),ve(t,"isOutsideInteractionIntercepted"),ve(h,"handleInteractionCapture"),ve(f,"handleInteractionBubble");
let p=ve(i=>{if(i.target&&!l.current){let h=function(){n.removeEventListener("click",d.current);
let r=t();
e(),r||qe("dismissableLayer.pointerDownOutside",o,f,{discrete:!0})};
if(ve(h,"handleAndDispatchPointerDownOutsideEvent"),!s(i.target))return n.removeEventListener("click",d.current),e(),void(l.current=!1);
let f={originalEvent:i};
u.current=!0,a.current=r&&0===i.button,c.current.clear(),r&&0===i.button?(n.removeEventListener("click",d.current),d.current=h,n.addEventListener("click",d.current,{once:!0})):h()}else n.removeEventListener("click",d.current),e();
l.current=!1},"handlePointerDown"),m=["pointerup","mousedown","mouseup","touchstart","touchend","click"];
for(let e of m)n.addEventListener(e,h,!0),n.addEventListener(e,f);
let g=window.setTimeout(()=>{n.addEventListener("pointerdown",p)},0);
return()=>{for(let e of(window.clearTimeout(g),n.removeEventListener("pointerdown",p),n.removeEventListener("click",d.current),m))n.removeEventListener(e,h,!0),n.removeEventListener(e,f)}},[n,o,r,a,i,s]),
{onPointerDownCapture:ve(()=>l.current=!0,"onPointerDownCapture")}}
function Se(e,t=globalThis?.document){let n=me(e),
r=m.useRef(!1);
return m.useEffect(()=>{let e=ve(e=>{e.target&&!r.current&&qe("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})},"handleFocus");
return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),
{onFocusCapture:ve(()=>r.current=!0,"onFocusCapture"),
onBlurCapture:ve(()=>r.current=!1,"onBlurCapture")}}
function _e(){let e=new CustomEvent(be);
document.dispatchEvent(e)}
function qe(e,t,n,{discrete:r}){let a=n.originalEvent.target,
i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});
t&&a.addEventListener(e,t,{once:!0}),
r?he(a,i):a.dispatchEvent(i)}
ve(je,"usePointerDownOutside"),
ve(Se,"useFocusOutside"),
ve(_e,"dispatchUpdate"),
ve(qe,"handleAndDispatchCustomEvent");
m=d("aIIwE");
var Ee=Object.defineProperty,
ze=(e,t)=>Ee(e,"name",{value:t,configurable:!0}),
Ne="focusScope.autoFocusOnMount",
Me="focusScope.autoFocusOnUnmount",
Ce={bubbles:!1,
cancelable:!0},
Le=m.forwardRef(ze(function(e,t){let{loop:n=!1,trapped:r=!1,branches:a,onMountAutoFocus:i,onUnmountAutoFocus:s,...o}=e,[l,u]=m.useState(null),c=me(i),d=me(s),h=m.useRef(null),p=q(t,u),g=m.useRef(a);
m.useEffect(()=>{g.current=a});
let v=m.useCallback(e=>!(!e||!l?.contains(e)&&!g.current?.some(t=>t.contains(e))),[l]),b=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;
m.useEffect(()=>{if(r){let e=function(e){if(b.paused||!l)return;
let t=e.target;
v(t)?h.current=t:Ke(h.current,{select:!0})},t=function(e){if(b.paused||!l)return;
let t=e.relatedTarget;
null!==t&&(v(t)||Ke(h.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&Ke(l)};
ze(e,"handleFocusIn"),ze(t,"handleFocusOut"),ze(n,"handleMutations"),document.addEventListener("focusin",e),document.addEventListener("focusout",t);
let r=new MutationObserver(n);
return l&&r.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[r,l,b.paused,v]),m.useEffect(()=>{if(l){Ge.add(b);
let e=document.activeElement;
if(!l.contains(e)){let t=new CustomEvent(Ne,Ce);
l.addEventListener(Ne,c),l.dispatchEvent(t),t.defaultPrevented||(Ie(We(Oe(l)),{select:!0}),document.activeElement===e&&Ke(l))}
return()=>{l.removeEventListener(Ne,c);
let t=l.ownerDocument,n=CustomEvent;
setTimeout(()=>{let r=new n(Me,Ce);
l.addEventListener(Me,d),l.dispatchEvent(r),r.defaultPrevented||Ke(e??t.body,{select:!0}),l.removeEventListener(Me,d),Ge.remove(b)},0)}}},[l,c,d,b]);
let y=m.useCallback(e=>{if(!n&&!r||b.paused)return;
let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,a=document.activeElement;
if(t&&a){let t=e.currentTarget,[r,i]=Re(t);
r&&i?e.shiftKey||a!==i?e.shiftKey&&a===r&&(e.preventDefault(),n&&Ke(i,{select:!0})):(e.preventDefault(),n&&Ke(r,{select:!0})):a===t&&e.preventDefault()}},[n,r,b.paused]);
return(0,f.jsx)(de.div,{tabIndex:-1,...o,ref:p,onKeyDown:y})},"FocusScope")),
Te=m.createContext(null);
function Ae({registry:e,children:t}){return e?(0,f.jsx)(Te.Provider,{value:e,children:t}):t}
function Pe(){let[e,t]=m.useState([]);
return{nodes:e,
registry:m.useMemo(()=>({add:ze(e=>t(t=>t.includes(e)?t:[...t,e]),"add"),remove:ze(e=>t(t=>t.filter(t=>t!==e)),"remove")}),[])}}
function Ie(e,{select:t=!1}={}){let n=document.activeElement;
for(let r of e)if(Ke(r,{select:t}),document.activeElement!==n)return}
function Re(e){let t=Oe(e);
return[De(t,e),De(t.reverse(),e)]}
function Oe(e){let t=[],
n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ze(e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});
for(;n.nextNode();)t.push(n.currentNode);
return t}
function De(e,t){let n="function"==typeof t.checkVisibility&&t.checkVisibility({checkVisibilityCSS:!0});
for(let r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):Fe(r,{upTo:t})))return r}
function Fe(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;
for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;
e=e.parentElement}
return!1}
function Be(e){return"INPUT"===e.tagName&&"function"==typeof e.select}
function Ke(e,{select:t=!1}={}){if(e&&e.focus){let n=(e.ownerDocument??document).activeElement;
e.focus({preventScroll:!0}),
e!==n&&Be(e)&&t&&e.select()}}
ze(Ae,"FocusScopeBranchProvider"),
ze(Pe,"useFocusScopeBranchRegistry"),
ze(function(e){let t=m.useContext(Te);
m.useEffect(()=>{if(e&&t)return t.add(e),()=>t.remove(e)},[e,t])},"useFocusScopeBranch"),
ze(Ie,"focusFirst"),
ze(Re,"getTabbableEdges"),
ze(Oe,"getTabbableCandidates"),
ze(De,"findVisible"),
ze(Fe,"isHidden"),
ze(Be,"isSelectableInput"),
ze(Ke,"focus");
var Ge=Ue();
function Ue(){let e=[];
return{add(t){let n=e[0];
t!==n&&n?.pause(),
(e=He(e,t)).unshift(t)},
remove(t){e=He(e,t),
e[0]?.resume()}}}
function He(e,t){let n=[...e],
r=n.indexOf(t);
return-1!==r&&n.splice(r,1),
n}
function We(e){return e.filter(e=>"A"!==e.tagName)}
ze(Ue,"createFocusScopesStack"),
ze(He,"arrayRemove"),
ze(We,"removeLinks");
m=d("aIIwE"),
$=d("395Dg");
var $e=Object.defineProperty,
Ve=m.forwardRef($e(function(e,t){let{container:n,...r}=e,[a,i]=m.useState(!1);
C(()=>i(!0),[]);
let s=n||a&&globalThis?.document?.body;
return s?$.createPortal((0,f.jsx)(de.div,{...r,ref:t}),s):null},"name",{value:"Portal",configurable:!0})),
Ze=(m=d("aIIwE"),Object.defineProperty),
Qe=(e,t)=>Ze(e,"name",{value:t,configurable:!0});
function Ye(e,t){return m.useReducer((e,n)=>t[e][n]??e,e)}
Qe(Ye,"useStateMachine");
var Je=Qe(e=>{let{present:t,children:n}=e,r=Xe(t),a="function"==typeof n?n({present:r.isPresent}):m.Children.only(n),i=tt(r.ref,rt(a));
return"function"==typeof n||r.isPresent?m.cloneElement(a,{ref:i}):null},"Presence");
function Xe(e){let[t,n]=m.useState(),
r=m.useRef(null),
a=m.useRef(e),
i=m.useRef("none"),
s=m.useRef(void 0),
[o,l]=Ye(e?"mounted":"unmounted",{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});
return m.useEffect(()=>{"mounted"===o?(i.current=s.current??nt(r.current),s.current=void 0):i.current="none"},[o]),
C(()=>{let t=r.current,n=a.current;
if(n!==e){let r=i.current,o=nt(t);
e?(s.current=o,l("MOUNT")):l("none"===o||"none"===t?.display?"UNMOUNT":n&&r!==o?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,l]),
C(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,s=Qe(i=>{let s=nt(r.current).includes(CSS.escape(i.animationName));
if(i.target===t&&s&&(l("ANIMATION_END"),!a.current)){let r=t.style.animationFillMode;
t.style.animationFillMode="forwards",e=n.setTimeout(()=>{"forwards"===t.style.animationFillMode&&(t.style.animationFillMode=r)})}},"handleAnimationEnd"),o=Qe(e=>{e.target===t&&(i.current=nt(r.current))},"handleAnimationStart");
return t.addEventListener("animationstart",o),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),()=>{n.clearTimeout(e),t.removeEventListener("animationstart",o),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}}
l("ANIMATION_END")},[t,l]),
{isPresent:["mounted","unmountSuspended"].includes(o),
ref:m.useCallback(e=>{if(e){let t=getComputedStyle(e);
r.current=t,s.current=nt(t)}else r.current=null;
n(e)},[])}}
function et(e,t){if("function"==typeof e)return e(t);
null!=e&&(e.current=t)}
function tt(...e){let t=m.useRef(e);
return t.current=e,
m.useCallback(e=>{let n=t.current,r=!1,a=n.map(t=>{let n=et(t,e);
return r||"function"!=typeof n||(r=!0),n});
if(r)return()=>{for(let e=0;e<a.length;e++){let t=a[e];
"function"==typeof t?t():et(n[e],null)}}},[])}
function nt(e){return e?.animationName||"none"}
function rt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,
n=t&&"isReactWarning"in t&&t.isReactWarning;
return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}
Qe(Xe,"usePresence"),
Qe(et,"setRef"),
Qe(tt,"useStableComposedRefs"),
Qe(nt,"getAnimationName"),
Qe(rt,"getElementRef");
m=d("aIIwE");
var at=Object.defineProperty,
it=(e,t)=>at(e,"name",{value:t,configurable:!0}),
st=0,
ot=null;
function lt(){m.useEffect(()=>{ot||(ot={start:ut(),end:ut()});
let{start:e,end:t}=ot;
return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),st++,()=>{1===st&&(ot?.start.remove(),ot?.end.remove(),ot=null),st=Math.max(0,st-1)}},[])}
function ut(){let e=document.createElement("span");
return e.setAttribute("data-radix-focus-guard",""),
e.tabIndex=0,
e.style.outline="none",
e.style.opacity="0",
e.style.position="fixed",
e.style.pointerEvents="none",
e}
it(function(e){return lt(),e.children},"FocusGuards"),
it(lt,"useFocusGuards"),
it(ut,"createFocusGuard");
var ct=function(){return(ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);
return e}).apply(this,arguments)};
function dt(e,t){var n={};
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;
for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}
return n}"function"==typeof SuppressedError&&SuppressedError;
d("aIIwE"),
m=d("aIIwE");
var ht="right-scroll-bar-position",
ft="width-before-scroll-bar";
function pt(e,t){return"function"==typeof e?e(t):e&&(e.current=t),
e}
d("aIIwE"),
m=d("aIIwE");
var mt="u">typeof window?m.useLayoutEffect:m.useEffect,
gt=new WeakMap,
vt=(void 0===$s&&($s={}),(void 0===Vs&&(Vs=function(e){return e}),Zs=[],Qs=!1,Ys={read:function(){if(Qs)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
return Zs.length?Zs[Zs.length-1]:null},useMedium:function(e){var t=Vs(e,Qs);
return Zs.push(t),function(){Zs=Zs.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(Qs=!0;Zs.length;){var t=Zs;
Zs=[],t.forEach(e)}
Zs={push:function(t){return e(t)},filter:function(){return Zs}}},assignMedium:function(e){Qs=!0;
var t=[];
if(Zs.length){var n=Zs;
Zs=[],n.forEach(e),t=Zs}
var r=function(){var n=t;
t=[],n.forEach(e)},a=function(){return Promise.resolve().then(r)};
a(),Zs={push:function(e){t.push(e),a()},filter:function(e){return t=t.filter(e),Zs}}}}).options=ct({async:!0,ssr:!1},$s),Ys),
bt=function(){},
yt=m.forwardRef(function(e,t){var n,r,a,i,s=m.useRef(null),o=m.useState({onScrollCapture:bt,onWheelCapture:bt,onTouchMoveCapture:bt}),l=o[0],u=o[1],c=e.forwardProps,d=e.children,h=e.className,f=e.removeScrollBar,p=e.enabled,g=e.shards,v=e.sideCar,b=e.noRelative,y=e.noIsolation,k=e.inert,w=e.allowPinchZoom,x=e.as,j=e.gapMode,S=dt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),_=(n=[s,t],r=function(e){return n.forEach(function(t){return pt(t,e)})},(a=(0,m.useState)(function(){return{value:null,callback:r,facade:{get current(){return a.value},set current(e){var t=a.value;
t!==e&&(a.value=e,a.callback(e,t))}}}})[0]).callback=r,i=a.facade,mt(function(){var e=gt.get(i);
if(e){var t=new Set(e),r=new Set(n),a=i.current;
t.forEach(function(e){r.has(e)||pt(e,null)}),r.forEach(function(e){t.has(e)||pt(e,a)})}
gt.set(i,n)},[n]),i),q=ct(ct({},S),l);
return m.createElement(m.Fragment,null,p&&m.createElement(v,{sideCar:vt,removeScrollBar:f,shards:g,noRelative:b,noIsolation:y,inert:k,setCallbacks:u,allowPinchZoom:!!w,lockRef:s,gapMode:j}),c?m.cloneElement(m.Children.only(d),ct(ct({},q),{ref:_})):m.createElement(void 0===x?"div":x,ct({},q,{className:h,ref:_}),d))});
yt.defaultProps={enabled:!0,
removeScrollBar:!0,
inert:!1},
yt.classNames={fullWidth:ft,
zeroRight:ht};
m=d("aIIwE");
var kt=function(e){var t=e.sideCar,
n=dt(e,["sideCar"]);
if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");
var r=t.read();
if(!r)throw Error("Sidecar medium not found");
return m.createElement(r,ct({},n))};
kt.isSideCarExport=!0;
d("aIIwE"),
d("aIIwE"),
m=d("aIIwE");
var wt=function(){var e=function(){var e=0,
t=null;
return{add:function(n){var r,
a;
0==e&&(t=function(){if(!document)return null;
var e=document.createElement("style");
e.type="text/css";
var t="u">typeof __webpack_nonce__?__webpack_nonce__:void 0;
return t&&e.setAttribute("nonce",t),e}())&&((r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)),
e++},
remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}}();
return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},
xt=function(){var e=wt();
return function(t){return e(t.styles,t.dynamic),
null}},
jt={left:0,
top:0,
right:0,
gap:0},
St=function(e){return parseInt(e||"",10)||0},
_t=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return jt;
var t=function(e){var t=window.getComputedStyle(document.body),
n=t["padding"===e?"paddingLeft":"marginLeft"],
r=t["padding"===e?"paddingTop":"marginTop"],
a=t["padding"===e?"paddingRight":"marginRight"];
return[St(n),St(r),St(a)]}(e),
n=document.documentElement.clientWidth,
r=window.innerWidth;
return{left:t[0],
top:t[1],
right:t[2],
gap:Math.max(0,r-n+t[2]-t[0])}},
qt=xt(),
Et="data-scroll-locked",
zt=function(e,t,n,r){var a=e.left,
i=e.top,
s=e.right,
o=e.gap;
return void 0===n&&(n="margin"),
"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(o,"px ").concat(r,";\n  }\n  body[").concat(Et,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(o,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(ht," {\n    right: ").concat(o,"px ").concat(r,";\n  }\n  \n  .").concat(ft," {\n    margin-right: ").concat(o,"px ").concat(r,";\n  }\n  \n  .").concat(ht," .").concat(ht," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(ft," .").concat(ft," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(Et,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(o,"px;\n  }\n")},
Nt=function(){var e=parseInt(document.body.getAttribute(Et)||"0",10);
return isFinite(e)?e:0},
Mt=function(e){var t=e.noRelative,
n=e.noImportant,
r=e.gapMode,
a=void 0===r?"margin":r;
m.useEffect(function(){return document.body.setAttribute(Et,(Nt()+1).toString()),function(){var e=Nt()-1;
e<=0?document.body.removeAttribute(Et):document.body.setAttribute(Et,e.toString())}},[]);
var i=m.useMemo(function(){return _t(a)},[a]);
return m.createElement(qt,{styles:zt(i,!t,a,n?"":"!important")})},
Ct=!1;
if("u">typeof window)try{var Lt=Object.defineProperty({},"passive",{get:function(){return Ct=!0,!0}});
window.addEventListener("test",Lt,Lt),
window.removeEventListener("test",Lt,Lt)}catch(e){Ct=!1}
var Tt=!!Ct&&{passive:!1},
At=function(e,t){if(!(e instanceof Element))return!1;
var n=window.getComputedStyle(e);
return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},
Pt=function(e,t){var n=t.ownerDocument,
r=t;
do{if("u">typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),It(e,r)){var a=Rt(e,r);
if(a[1]>a[2])return!0}
r=r.parentNode}while(r&&r!==n.body);
return!1},
It=function(e,t){return At(t,"v"===e?"overflowY":"overflowX")},
Rt=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},
Ot=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},
Dt=function(e){return[e.deltaX,e.deltaY]},
Ft=function(e){return e&&"current"in e?e.current:e},
Bt=0,
Kt=[],
Gt=(Js=function(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),a=m.useState(Bt++)[0],i=m.useState(xt)[0],s=m.useRef(e);
m.useEffect(function(){s.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));
var t=function(e,t,n){if(n||2==arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);
return e.concat(r||Array.prototype.slice.call(t))}([e.lockRef.current],(e.shards||[]).map(Ft),!0).filter(Boolean);
return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);
var o=m.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!s.current.allowPinchZoom;
var a,i=Ot(e),o=n.current,l="deltaX"in e?e.deltaX:o[0]-i[0],u="deltaY"in e?e.deltaY:o[1]-i[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";
if("touches"in e&&"h"===d&&"range"===c.type)return!1;
var h=window.getSelection(),f=h&&h.anchorNode;
if(f&&(f===c||f.contains(c)))return!1;
var p=Pt(d,c);
if(!p)return!0;
if(p?a=d:(a="v"===d?"h":"v",p=Pt(d,c)),!p)return!1;
if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=a),!a)return!0;
var m=r.current||a;
return function(e,t,n,r,a){var i,s=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),o=s*r,l=n.target,u=t.contains(l),c=!1,d=o>0,h=0,f=0;
do{if(!l)break;
var p=Rt(e,l),m=p[0],g=p[1]-p[2]-s*m;
(m||g)&&It(e,l)&&(h+=g,f+=m);
var v=l.parentNode;
l=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));
return(d&&(a&&1>Math.abs(h)||!a&&o>h)||!d&&(a&&1>Math.abs(f)||!a&&-o>f))&&(c=!0),c}(m,t,e,"h"===m?l:u,!0)},[]),l=m.useCallback(function(e){if(Kt.length&&Kt[Kt.length-1]===i){var n="deltaY"in e?Dt(e):Ot(e),r=t.current.filter(function(t){var r;
return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&((r=t.delta)[0]===n[0]&&r[1]===n[1])})[0];
if(r&&r.should)return void(e.cancelable&&e.preventDefault());
if(!r){var a=(s.current.shards||[]).map(Ft).filter(Boolean).filter(function(t){return t.contains(e.target)});
(a.length>0?o(e,a[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=m.useCallback(function(e,n,r,a){var i={name:e,delta:n,target:r,should:a,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;
return t}(r)};
t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),c=m.useCallback(function(e){n.current=Ot(e),r.current=void 0},[]),d=m.useCallback(function(t){u(t.type,Dt(t),t.target,o(t,e.lockRef.current))},[]),h=m.useCallback(function(t){u(t.type,Ot(t),t.target,o(t,e.lockRef.current))},[]);
m.useEffect(function(){return Kt.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",l,Tt),document.addEventListener("touchmove",l,Tt),document.addEventListener("touchstart",c,Tt),function(){Kt=Kt.filter(function(e){return e!==i}),document.removeEventListener("wheel",l,Tt),document.removeEventListener("touchmove",l,Tt),document.removeEventListener("touchstart",c,Tt)}},[]);
var f=e.removeScrollBar,p=e.inert;
return m.createElement(m.Fragment,null,p?m.createElement(i,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,f?m.createElement(Mt,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},vt.useMedium(Js),kt),
Ut=m.forwardRef(function(e,t){return m.createElement(yt,ct({},e,{ref:t,sideCar:Gt}))});
Ut.classNames=yt.classNames;
var Ht=new WeakMap,
Wt=new WeakMap,
$t={},
Vt=0,
Zt=function(e){return e&&(e.host||Zt(e.parentNode))},
Qt=function(e,t,n){void 0===n&&(n="data-aria-hidden");
var r=Array.from(Array.isArray(e)?e:[e]),
a=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);
return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live], script"))),function(e,t,n,r){var a=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;
var n=Zt(e);
return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});
$t[n]||($t[n]=new WeakMap);
var i=$t[n],s=[],o=new Set,l=new Set(a),u=function(e){!e||o.has(e)||(o.add(e),u(e.parentNode))};
a.forEach(u);
var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(o.has(e))c(e);
else try{var t=e.getAttribute(r),a=null!==t&&"false"!==t,l=(Ht.get(e)||0)+1,u=(i.get(e)||0)+1;
Ht.set(e,l),i.set(e,u),s.push(e),1===l&&a&&Wt.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};
return c(t),o.clear(),Vt++,function(){s.forEach(function(e){var t=Ht.get(e)-1,a=i.get(e)-1;
Ht.set(e,t),i.set(e,a),t||(Wt.has(e)||e.removeAttribute(r),Wt.delete(e)),a||e.removeAttribute(n)}),--Vt||(Ht=new WeakMap,Ht=new WeakMap,Wt=new WeakMap,$t={})}}(r,a,n,"aria-hidden")):function(){return null}},
Yt=Object.defineProperty,
Jt=(e,t)=>Yt(e,"name",{value:t,configurable:!0}),
Xt="Dialog",
[en,tn]=N(Xt),
[nn,rn]=en(Xt),
an=Jt(e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,o=m.useRef(null),l=m.useRef(null),{nodes:u,registry:c}=Pe(),[d,h]=G({prop:r,defaultProp:a??!1,onChange:i,caller:Xt}),[p,g]=m.useState(0),[v,b]=m.useState(0);
return(0,f.jsx)(nn,{scope:t,triggerRef:o,contentRef:l,contentId:P(),titleId:P(),descriptionId:P(),titlePresent:p>0,descriptionPresent:v>0,setTitleCount:g,setDescriptionCount:b,open:d,onOpenChange:h,onOpenToggle:m.useCallback(()=>h(e=>!e),[h]),modal:s,branchNodes:u,branchRegistry:c,children:n})},"Dialog"),
sn="DialogPortal",
[on,ln]=en(sn,{forceMount:void 0}),
un=Jt(e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,i=rn(sn,t);
return(0,f.jsx)(on,{scope:t,forceMount:n,children:m.Children.map(r,e=>(0,f.jsx)(Je,{present:n||i.open,children:(0,f.jsx)(Ve,{asChild:!0,container:a,children:e})}))})},"DialogPortal"),
cn="DialogOverlay",
dn=m.forwardRef(Jt(function(e,t){let n=ln(cn,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=rn(cn,e.__scopeDialog);
return i.modal?(0,f.jsx)(Je,{present:r||i.open,children:(0,f.jsx)(fn,{...a,ref:t})}):null},"DialogOverlay")),
hn=Q("DialogOverlay.RemoveScroll"),
fn=m.forwardRef(Jt(function(e,t){let{__scopeDialog:n,...r}=e,a=rn(cn,n),i=q(t,we());
return(0,f.jsx)(Ut,{as:hn,allowPinchZoom:!0,shards:m.useMemo(()=>[a.contentRef,...a.branchNodes.map(e=>({current:e}))],[a.contentRef,a.branchNodes]),children:(0,f.jsx)(de.div,{"data-state":jn(a.open),...r,ref:i,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),
pn="DialogContent",
mn=m.forwardRef(Jt(function(e,t){let n=ln(pn,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=rn(pn,e.__scopeDialog);
return(0,f.jsx)(Je,{present:r||i.open,children:i.modal?(0,f.jsx)(gn,{...a,ref:t}):(0,f.jsx)(vn,{...a,ref:t})})},"DialogContent")),
gn=m.forwardRef(Jt(function(e,t){let n=rn(pn,e.__scopeDialog),r=m.useRef(null),a=q(t,n.contentRef,r);
return m.useEffect(()=>{let e=r.current;
if(e)return Qt(e)},[]),(0,f.jsx)(bn,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:y(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;
(2===t.button||n)&&e.preventDefault()}),onFocusOutside:y(e.onFocusOutside,e=>e.preventDefault())})},"DialogContentModal")),
vn=m.forwardRef(Jt(function(e,t){let n=rn(pn,e.__scopeDialog),r=m.useRef(!1),a=m.useRef(!1);
return(0,f.jsx)(bn,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"===t.detail.originalEvent.type&&(a.current=!0));
let i=t.target;
n.triggerRef.current?.contains(i)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})},"DialogContentNonModal")),
bn=m.forwardRef(Jt(function(e,t){let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,"aria-describedby":s,children:o,...l}=e,u=rn(pn,n);
return lt(),(0,f.jsx)(Ae,{registry:u.branchRegistry,children:(0,f.jsx)(Le,{asChild:!0,loop:!0,trapped:r,branches:u.branchNodes,onMountAutoFocus:a,onUnmountAutoFocus:i,children:(0,f.jsx)(ke,{role:"dialog",id:u.contentId,"aria-labelledby":u.titlePresent?u.titleId:void 0,"aria-describedby":u.descriptionPresent?xn(s,u.descriptionId):s,"data-state":jn(u.open),...l,ref:t,deferPointerDownOutside:!0,onDismiss:()=>u.onOpenChange(!1),children:o})})})},"DialogContentImpl")),
yn=m.forwardRef(Jt(function(e,t){let{__scopeDialog:n,...r}=e,a=rn("DialogTitle",n),{setTitleCount:i}=a;
return C(()=>(i(e=>e+1),()=>i(e=>e-1)),[i]),(0,f.jsx)(de.h2,{id:a.titleId,...r,ref:t})},"DialogTitle")),
kn=m.forwardRef(Jt(function(e,t){let{__scopeDialog:n,...r}=e,a=rn("DialogDescription",n),{setDescriptionCount:i}=a;
return C(()=>(i(e=>e+1),()=>i(e=>e-1)),[i]),(0,f.jsx)(de.p,{id:a.descriptionId,...r,ref:t})},"DialogDescription")),
wn=m.forwardRef(Jt(function(e,t){let{__scopeDialog:n,...r}=e,a=rn("DialogClose",n);
return(0,f.jsx)(de.button,{type:"button",...r,ref:t,onClick:y(e.onClick,()=>a.onOpenChange(!1))})},"DialogClose"));
function xn(...e){let t=new Set;
for(let n of e)if("string"==typeof n)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);
return t.size>0?Array.from(t).join(" "):void 0}
function jn(e){return e?"open":"closed"}
function Sn(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,r,a="";
if("string"==typeof t||"number"==typeof t)a+=t;
else if("object"==typeof t)if(Array.isArray(t)){var i=t.length;
for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);
return a}(e))&&(r&&(r+=" "),r+=t);
return r}
Jt(xn,"concatAriaDescribedby"),
Jt(jn,"getState");
let _n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e;
d("aIIwE"),
m=d("aIIwE");
let qn=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),
En={xmlns:"http://www.w3.org/2000/svg",
width:24,
height:24,
viewBox:"0 0 24 24",
fill:"none",
stroke:"currentColor",
"stroke-width":2,
"stroke-linecap":"round",
"stroke-linejoin":"round"};
let zn=(0,(m=d("aIIwE")).createContext)({}),
Nn=(0,m.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:a,absoluteStrokeWidth:i,nonScalingStroke:s,className:o="",children:l,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},h)=>{let{size:f=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,nonScalingStroke:v=!1,color:b="currentColor",className:y=""}=(0,m.useContext)(zn)??{},k=!!l||(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;
return!1})(d),[w,x,j=[]]=function(e,t={}){return function(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,a=e.size??e.width??En.width,i=e.size??e.height??En.height,s=e.aliases?.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>`lucide-${e}`)??[],o=[...e.name?[`lucide-${e.name}`]:[],...s],l=t.className?.split(" ").filter(Boolean)??[],u=!1===t.includeDefaultClasses?qn(...l):qn("lucide",...o,...l),c=t.absoluteStrokeWidth?Number(t.strokeWidth??En["stroke-width"])*Number(e.size??e.width??En.width)/Number(t.size??t.width??En.width):t.strokeWidth??En["stroke-width"];
return["svg",{...Object.entries(En).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&null!=t.size&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&null!=t.width&&{[r("width")]:t.width},..."height"in t&&null!=t.height&&{[r("height")]:t.height},[r("stroke-width")]:c,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${a} ${i}`,...!1===t.hasA11yProp?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(e=>{let[n,a,i]=e,s=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...a}:a;
return i?[n,s,i]:[n,s]})]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}(c,{color:e??b,width:n??t??f,height:r??t??f,strokeWidth:a??p,absoluteStrokeWidth:i??g,nonScalingStroke:s??v,className:qn(y,o),hasA11yProp:k,attributes:d});
return(0,m.createElement)(w,{ref:h,...x},[...j.map(([e,t])=>(0,m.createElement)(e,t)),...Array.isArray(l)?l:[l]])}),
Mn={name:"x",
size:24,
node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},
Cn=function(e,t=[],n=[]){let r,
a="string"==typeof e?function(e,t,n=[]){if(null==t)throw Error("[lucide]: iconNode is required when icon name is used");
return{name:e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),
size:24,
node:t,
...n.length>0?{aliases:n}:{}}}(e,t,n):e,
i=(0,m.forwardRef)(({className:e,...t},n)=>(0,m.createElement)(Nn,{ref:n,icon:a,className:e,...t}));
return a.name&&(i.displayName=(r=(e=>{let t="",n=!1;
for(let r of e)"-"===r||"_"===r||r<=" "?n=t.length>0:(0===t.length?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);
return t})(a.name)).charAt(0).toUpperCase()+r.slice(1)),
i}(Mn),
Ln=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),
Tn=[],
An=(e,t,n)=>{if(0==e.length-t)return n.classGroupId;
let r=e[t],
a=n.nextPart.get(r);
if(a){let n=An(e,t+1,a);
if(n)return n}
let i=n.validators;
if(null===i)return;
let s=0===t?e.join("-"):e.slice(t).join("-"),
o=i.length;
for(let e=0;e<o;e++){let t=i[e];
if(t.validator(s))return t.classGroupId}},
Pn=(e,t,n,r)=>{let a=e.length;
for(let i=0;i<a;i++)In(e[i],t,n,r)},
In=(e,t,n,r)=>{"string"==typeof e?Rn(e,t,n):"function"==typeof e?On(e,t,n,r):Dn(e,t,n,r)},
Rn=(e,t,n)=>{(""===e?t:Fn(t,e)).classGroupId=n},
On=(e,t,n,r)=>{Bn(e)?Pn(e(r),t,n,r):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:n,validator:e}))},
Dn=(e,t,n,r)=>{let a=Object.entries(e),
i=a.length;
for(let e=0;e<i;e++){let[i,s]=a[e];
Pn(s,Fn(t,i),n,r)}},
Fn=(e,t)=>{let n=e,
r=t.split("-"),
a=r.length;
for(let e=0;e<a;e++){let t=r[e],
a=n.nextPart.get(t);
a||(a=Ln(),n.nextPart.set(t,a)),
n=a}
return n},
Bn=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,
Kn=[],
Gn=(e,t,n,r,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:a}),
Un=/\s+/,
Hn=e=>{let t;
if("string"==typeof e)return e;
let n="";
for(let r=0;r<e.length;r++)e[r]&&(t=Hn(e[r]))&&(n&&(n+=" "),n+=t);
return n},
Wn=[],
$n=e=>{let t=t=>t[e]||Wn;
return t.isThemeGetter=!0,
t.themeKey=e,
t},
Vn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,
Zn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,
Qn=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
Yn=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
Jn=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
Xn=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
er=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
tr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
nr=e=>Qn.test(e),
rr=e=>!!e&&!Number.isNaN(Number(e)),
ar=e=>!!e&&Number.isInteger(Number(e)),
ir=e=>e.endsWith("%")&&rr(e.slice(0,-1)),
sr=e=>Yn.test(e),
or=()=>!0,
lr=e=>Jn.test(e)&&!Xn.test(e),
ur=()=>!1,
cr=e=>er.test(e),
dr=e=>tr.test(e),
hr=e=>!mr(e)&&!jr(e),
fr=e=>e.startsWith("@container")&&("/"===e[10]&&void 0!==e[11]||"s"===e[11]&&void 0!==e[16]&&e.startsWith("-size/",10)||"n"===e[11]&&void 0!==e[18]&&e.startsWith("-normal/",10)),
pr=e=>Cr(e,Pr,ur),
mr=e=>Vn.test(e),
gr=e=>Cr(e,Ir,lr),
vr=e=>Cr(e,Rr,rr),
br=e=>Cr(e,Dr,or),
yr=e=>Cr(e,Or,ur),
kr=e=>Cr(e,Tr,ur),
wr=e=>Cr(e,Ar,dr),
xr=e=>Cr(e,Fr,cr),
jr=e=>Zn.test(e),
Sr=e=>Lr(e,Ir),
_r=e=>Lr(e,Or),
qr=e=>Lr(e,Tr),
Er=e=>Lr(e,Pr),
zr=e=>Lr(e,Ar),
Nr=e=>Lr(e,Fr,!0),
Mr=e=>Lr(e,Dr,!0),
Cr=(e,t,n)=>{let r=Vn.exec(e);
return!!r&&(r[1]?t(r[1]):n(r[2]))},
Lr=(e,t,n=!1)=>{let r=Zn.exec(e);
return!!r&&(r[1]?t(r[1]):n)},
Tr=e=>"position"===e||"percentage"===e,
Ar=e=>"image"===e||"url"===e,
Pr=e=>"length"===e||"size"===e||"bg-size"===e,
Ir=e=>"length"===e,
Rr=e=>"number"===e,
Or=e=>"family-name"===e,
Dr=e=>"number"===e||"weight"===e,
Fr=e=>"shadow"===e,
Br=((e,...t)=>{let n,r,a,i,s=e=>{let t=r(e);
if(t)return t;
let i=((e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i,postfixLookupClassGroupIds:s}=t,o=[],l=e.trim().split(Un),u="";
for(let e=l.length-1;e>=0;e-=1){let t,c=l[e],{isExternal:d,modifiers:h,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(c);
if(d){u=c+(u.length>0?" "+u:u);
continue}
let g=!!m;
if(g){let e=(t=r(p.substring(0,m)))&&s[t]?r(p):void 0;
e&&e!==t&&(t=e,g=!1)}else t=r(p);
if(!t){if(!g||!(t=r(p))){u=c+(u.length>0?" "+u:u);
continue}
g=!1}
let v=0===h.length?"":1===h.length?h[0]:i(h).join(":"),b=f?v+"!":v,y=b+t;
if(o.indexOf(y)>-1)continue;
o.push(y);
let k=a(t,g);
for(let e=0;e<k.length;++e){let t=k[e];
o.push(b+t)}
u=c+(u.length>0?" "+u:u)}
return u})(e,n);
return a(e,i),i};
return i=o=>{var l;
let u;
return r=(n={cache:(e=>{if(e<1)return{get:()=>{},set:()=>{}};
let t=0,n=Object.create(null),r=Object.create(null),a=(a,i)=>{n[a]=i,++t>e&&(t=0,r=n,n=Object.create(null))};
return{get(e){let t=n[e];
return void 0!==t?t:void 0!==(t=r[e])?(a(e,t),t):void 0},set(e,t){e in n?n[e]=t:a(e,t)}}})((l=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t,n=[],r=0,a=0,i=0,s=e.length;
for(let o=0;o<s;o++){let s=e[o];
if(0===r&&0===a){if(":"===s){n.push(e.slice(i,o)),i=o+1;
continue}
if("/"===s){t=o;
continue}}"["===s?r++:"]"===s?r--:"("===s?a++:")"===s&&a--}
let o=0===n.length?e:e.slice(i),l=o,u=!1;
return o.endsWith("!")?(l=o.slice(0,-1),u=!0):o.startsWith("!")&&(l=o.slice(1),u=!0),Gn(n,u,l,t&&t>i?t-i:void 0)};
if(t){let e=t+":",n=r;
r=t=>t.startsWith(e)?n(t.slice(e.length)):Gn(Kn,!1,t,void 0,!0)}
if(n){let e=r;
r=t=>n({className:t,parseClassName:e})}
return r})(l),sortModifiers:(u=new Map,l.orderSensitiveModifiers.forEach((e,t)=>{u.set(e,1e6+t)}),e=>{let t=[],n=[];
for(let r=0;r<e.length;r++){let a=e[r],i="["===a[0],s=u.has(a);
i||s?(n.length>0&&(n.sort(),t.push(...n),n=[]),t.push(a)):n.push(a)}
return n.length>0&&(n.sort(),t.push(...n)),t}),postfixLookupClassGroupIds:(e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;
if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;
return t})(l),...(e=>{let t=(e=>{let{theme:t,classGroups:n}=e;
return((e,t)=>{let n=Ln();
for(let r in e)Pn(e[r],n,r,t);
return n})(n,t)})(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;
return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var n;
let t,r,a;
return-1===(n=e).slice(1,-1).indexOf(":")?void 0:(r=(t=n.slice(1,-1)).indexOf(":"),(a=t.slice(0,r))?"arbitrary.."+a:void 0)}
let r=e.split("-"),a=+(""===r[0]&&r.length>1);
return An(r,a,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],a=n[e];
if(t){if(a){let e=Array(a.length+t.length);
for(let t=0;t<a.length;t++)e[t]=a[t];
for(let n=0;n<t.length;n++)e[a.length+n]=t[n];
return e}
return t}
return a||Tn}
return n[e]||Tn}}})(l)}).cache.get,a=n.cache.set,i=s,s(o)},(...e)=>i(((...e)=>{let t,n,r=0,a="";
for(;r<e.length;)(t=e[r++])&&(n=Hn(t))&&(a&&(a+=" "),a+=n);
return a})(...e))})(()=>{let e=$n("color"),t=$n("font"),n=$n("text"),r=$n("font-weight"),a=$n("tracking"),i=$n("leading"),s=$n("breakpoint"),o=$n("container"),l=$n("spacing"),u=$n("radius"),c=$n("shadow"),d=$n("inset-shadow"),h=$n("text-shadow"),f=$n("drop-shadow"),p=$n("blur"),m=$n("perspective"),g=$n("aspect"),v=$n("ease"),b=$n("animate"),y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom",jr,mr],k=()=>[jr,mr,l],w=()=>[nr,"full","auto",...k()],x=()=>[ar,"none","subgrid",jr,mr],j=()=>["auto",{span:["full",ar,jr,mr]},ar,jr,mr],S=()=>[ar,"auto",jr,mr],_=()=>["auto","min","max","fr",jr,mr],q=()=>["auto",...k()],E=()=>[nr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],z=()=>[o,nr,"screen","full","dvw","lvw","svw","min","max","fit",...k()],N=()=>[nr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...k()],M=()=>[e,jr,mr],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom",qr,kr,{position:[jr,mr]}],L=()=>["auto","cover","contain",Er,pr,{size:[jr,mr]}],T=()=>[ir,Sr,gr],A=()=>["","none","full",u,jr,mr],P=()=>["",rr,Sr,gr],I=()=>[rr,ir,qr,kr],R=()=>["","none",p,jr,mr],O=()=>["none",rr,jr,mr],D=()=>["none",rr,jr,mr],F=()=>[rr,jr,mr],B=()=>[nr,"full",...k()];
return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[sr],breakpoint:[sr],color:[or],container:[sr],"drop-shadow":[sr],ease:["in","out","in-out"],font:[hr],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[sr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[sr],shadow:[sr],spacing:["px",rr],text:[sr],"text-shadow":[sr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",nr,mr,jr,g]}],container:["container"],"container-type":[{"@container":["","normal","size",jr,mr]}],"container-named":[fr],columns:[{columns:[rr,"auto",mr,jr,o]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{"inset-s":w(),start:w()}],end:[{"inset-e":w(),end:w()}],"inset-bs":[{"inset-bs":w()}],"inset-be":[{"inset-be":w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:["visible","invisible","collapse"],z:[{z:[ar,"auto",jr,mr]}],basis:[{basis:[nr,"full","auto",o,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[rr,nr,"auto","initial","none",mr]}],grow:[{grow:["",rr,jr,mr]}],shrink:[{shrink:["",rr,jr,mr]}],order:[{order:[ar,"first","last","none",jr,mr]}],"grid-cols":[{"grid-cols":x()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":x()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_()}],"auto-rows":[{"auto-rows":_()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe","normal"]}],"justify-items":[{"justify-items":["start","end","center","stretch","center-safe","end-safe","normal"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],"align-items":[{items:["start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],"align-self":[{self:["auto","start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],"place-items":[{"place-items":["start","end","center","stretch","center-safe","end-safe","baseline"]}],"place-self":[{"place-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pbs:[{pbs:k()}],pbe:[{pbe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mbs:[{mbs:q()}],mbe:[{mbe:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:E()}],"inline-size":[{inline:["auto",...z()]}],"min-inline-size":[{"min-inline":["auto",...z()]}],"max-inline-size":[{"max-inline":["none",...z()]}],"block-size":[{block:["auto",...N()]}],"min-block-size":[{"min-block":["auto",...N()]}],"max-block-size":[{"max-block":["none",...N()]}],w:[{w:[o,"screen",...E()]}],"min-w":[{"min-w":[o,"screen","none",...E()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[s]},...E()]}],h:[{h:["screen","lh",...E()]}],"min-h":[{"min-h":["screen","lh","none",...E()]}],"max-h":[{"max-h":["screen","lh","none",...E()]}],"font-size":[{text:["base",n,Sr,gr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Mr,br]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ir,mr]}],"font-family":[{font:[_r,yr,t]}],"font-features":[{"font-features":[mr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,jr,mr]}],"line-clamp":[{"line-clamp":[rr,"none",jr,vr]}],leading:[{leading:["none",i,...k()]}],"list-image":[{"list-image":["none",jr,mr]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",jr,mr]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:M()}],"text-color":[{text:M()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","wavy"]}],"text-decoration-thickness":[{decoration:[rr,"from-font","auto",jr,gr]}],"text-decoration-color":[{decoration:M()}],"underline-offset":[{"underline-offset":[rr,"auto",jr,mr]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"tab-size":[{tab:[ar,jr,mr]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",jr,mr]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",jr,mr]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:C()}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:L()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ar,jr,mr],radial:["",jr,mr],conic:["",ar,jr,mr]},zr,wr]}],"bg-color":[{bg:M()}],"gradient-from-pos":[{from:T()}],"gradient-via-pos":[{via:T()}],"gradient-to-pos":[{to:T()}],"gradient-from":[{from:M()}],"gradient-via":[{via:M()}],"gradient-to":[{to:M()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:P()}],"border-w-x":[{"border-x":P()}],"border-w-y":[{"border-y":P()}],"border-w-s":[{"border-s":P()}],"border-w-e":[{"border-e":P()}],"border-w-bs":[{"border-bs":P()}],"border-w-be":[{"border-be":P()}],"border-w-t":[{"border-t":P()}],"border-w-r":[{"border-r":P()}],"border-w-b":[{"border-b":P()}],"border-w-l":[{"border-l":P()}],"divide-x":[{"divide-x":P()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":P()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:["solid","dashed","dotted","double","hidden","none"]}],"divide-style":[{divide:["solid","dashed","dotted","double","hidden","none"]}],"border-color":[{border:M()}],"border-color-x":[{"border-x":M()}],"border-color-y":[{"border-y":M()}],"border-color-s":[{"border-s":M()}],"border-color-e":[{"border-e":M()}],"border-color-bs":[{"border-bs":M()}],"border-color-be":[{"border-be":M()}],"border-color-t":[{"border-t":M()}],"border-color-r":[{"border-r":M()}],"border-color-b":[{"border-b":M()}],"border-color-l":[{"border-l":M()}],"divide-color":[{divide:M()}],"outline-style":[{outline:["solid","dashed","dotted","double","none","hidden"]}],"outline-offset":[{"outline-offset":[rr,jr,mr]}],"outline-w":[{outline:["",rr,Sr,gr]}],"outline-color":[{outline:M()}],shadow:[{shadow:["","inner","none",c,Nr,xr]}],"shadow-color":[{shadow:M()}],"inset-shadow":[{"inset-shadow":["none",d,Nr,xr]}],"inset-shadow-color":[{"inset-shadow":M()}],"ring-w":[{ring:P()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:M()}],"ring-offset-w":[{"ring-offset":[rr,gr]}],"ring-offset-color":[{"ring-offset":M()}],"inset-ring-w":[{"inset-ring":P()}],"inset-ring-color":[{"inset-ring":M()}],"text-shadow":[{"text-shadow":["none",h,Nr,xr]}],"text-shadow-color":[{"text-shadow":M()}],opacity:[{opacity:[rr,jr,mr]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[rr]}],"mask-image-linear-from-pos":[{"mask-linear-from":I()}],"mask-image-linear-to-pos":[{"mask-linear-to":I()}],"mask-image-linear-from-color":[{"mask-linear-from":M()}],"mask-image-linear-to-color":[{"mask-linear-to":M()}],"mask-image-t-from-pos":[{"mask-t-from":I()}],"mask-image-t-to-pos":[{"mask-t-to":I()}],"mask-image-t-from-color":[{"mask-t-from":M()}],"mask-image-t-to-color":[{"mask-t-to":M()}],"mask-image-r-from-pos":[{"mask-r-from":I()}],"mask-image-r-to-pos":[{"mask-r-to":I()}],"mask-image-r-from-color":[{"mask-r-from":M()}],"mask-image-r-to-color":[{"mask-r-to":M()}],"mask-image-b-from-pos":[{"mask-b-from":I()}],"mask-image-b-to-pos":[{"mask-b-to":I()}],"mask-image-b-from-color":[{"mask-b-from":M()}],"mask-image-b-to-color":[{"mask-b-to":M()}],"mask-image-l-from-pos":[{"mask-l-from":I()}],"mask-image-l-to-pos":[{"mask-l-to":I()}],"mask-image-l-from-color":[{"mask-l-from":M()}],"mask-image-l-to-color":[{"mask-l-to":M()}],"mask-image-x-from-pos":[{"mask-x-from":I()}],"mask-image-x-to-pos":[{"mask-x-to":I()}],"mask-image-x-from-color":[{"mask-x-from":M()}],"mask-image-x-to-color":[{"mask-x-to":M()}],"mask-image-y-from-pos":[{"mask-y-from":I()}],"mask-image-y-to-pos":[{"mask-y-to":I()}],"mask-image-y-from-color":[{"mask-y-from":M()}],"mask-image-y-to-color":[{"mask-y-to":M()}],"mask-image-radial":[{"mask-radial":[jr,mr]}],"mask-image-radial-from-pos":[{"mask-radial-from":I()}],"mask-image-radial-to-pos":[{"mask-radial-to":I()}],"mask-image-radial-from-color":[{"mask-radial-from":M()}],"mask-image-radial-to-color":[{"mask-radial-to":M()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"]}],"mask-image-conic-pos":[{"mask-conic":[rr]}],"mask-image-conic-from-pos":[{"mask-conic-from":I()}],"mask-image-conic-to-pos":[{"mask-conic-to":I()}],"mask-image-conic-from-color":[{"mask-conic-from":M()}],"mask-image-conic-to-color":[{"mask-conic-to":M()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:C()}],"mask-repeat":[{mask:["no-repeat",{repeat:["","x","y","space","round"]}]}],"mask-size":[{mask:L()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",jr,mr]}],filter:[{filter:["","none",jr,mr]}],blur:[{blur:R()}],brightness:[{brightness:[rr,jr,mr]}],contrast:[{contrast:[rr,jr,mr]}],"drop-shadow":[{"drop-shadow":["","none",f,Nr,xr]}],"drop-shadow-color":[{"drop-shadow":M()}],grayscale:[{grayscale:["",rr,jr,mr]}],"hue-rotate":[{"hue-rotate":[rr,jr,mr]}],invert:[{invert:["",rr,jr,mr]}],saturate:[{saturate:[rr,jr,mr]}],sepia:[{sepia:["",rr,jr,mr]}],"backdrop-filter":[{"backdrop-filter":["","none",jr,mr]}],"backdrop-blur":[{"backdrop-blur":R()}],"backdrop-brightness":[{"backdrop-brightness":[rr,jr,mr]}],"backdrop-contrast":[{"backdrop-contrast":[rr,jr,mr]}],"backdrop-grayscale":[{"backdrop-grayscale":["",rr,jr,mr]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[rr,jr,mr]}],"backdrop-invert":[{"backdrop-invert":["",rr,jr,mr]}],"backdrop-opacity":[{"backdrop-opacity":[rr,jr,mr]}],"backdrop-saturate":[{"backdrop-saturate":[rr,jr,mr]}],"backdrop-sepia":[{"backdrop-sepia":["",rr,jr,mr]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",jr,mr]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[rr,"initial",jr,mr]}],ease:[{ease:["linear","initial",v,jr,mr]}],delay:[{delay:[rr,jr,mr]}],animate:[{animate:["none",b,jr,mr]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,jr,mr]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:O()}],"rotate-x":[{"rotate-x":O()}],"rotate-y":[{"rotate-y":O()}],"rotate-z":[{"rotate-z":O()}],scale:[{scale:D()}],"scale-x":[{"scale-x":D()}],"scale-y":[{"scale-y":D()}],"scale-z":[{"scale-z":D()}],"scale-3d":["scale-3d"],skew:[{skew:F()}],"skew-x":[{"skew-x":F()}],"skew-y":[{"skew-y":F()}],transform:[{transform:[jr,mr,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:B()}],"translate-x":[{"translate-x":B()}],"translate-y":[{"translate-y":B()}],"translate-z":[{"translate-z":B()}],"translate-none":["translate-none"],zoom:[{zoom:[ar,jr,mr]}],accent:[{accent:M()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:M()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",jr,mr]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":M()}],"scrollbar-track-color":[{"scrollbar-track":M()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mbs":[{"scroll-mbs":k()}],"scroll-mbe":[{"scroll-mbe":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pbs":[{"scroll-pbs":k()}],"scroll-pbe":[{"scroll-pbe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",jr,mr]}],fill:[{fill:["none",...M()]}],"stroke-w":[{stroke:[rr,Sr,gr,vr]}],stroke:[{stroke:["none",...M()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});
function Kr(...e){return Br(Sn(e))}
let Gr=m.forwardRef(({className:e,...t},n)=>(0,f.jsx)(dn,{className:Kr("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));
Gr.displayName=dn.displayName;
let Ur=(a="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",i={variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}},e=>{var t;
if(null==(null==i?void 0:i.variants))return Sn(a,null==e?void 0:e.class,null==e?void 0:e.className);
let{variants:n,defaultVariants:r}=i,s=Object.keys(n).map(t=>{let a=null==e?void 0:e[t],i=null==r?void 0:r[t];
if(null===a)return null;
let s=_n(a)||_n(i);
return n[t][s]}),o=e&&Object.entries(e).reduce((e,t)=>{let[n,r]=t;
return void 0===r||(e[n]=r),e},{});
return Sn(a,s,null==i||null==(t=i.compoundVariants)?void 0:t.reduce((e,t)=>{let{class:n,className:a,...i}=t;
return Object.entries(i).every(e=>{let[t,n]=e;
return Array.isArray(n)?n.includes({...r,...o}[t]):{...r,...o}[t]===n})?[...e,n,a]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),
Hr=m.forwardRef(({side:e="right",className:t,children:n,...r},a)=>(0,f.jsxs)(un,{children:[(0,f.jsx)(Gr,{}),(0,f.jsxs)(mn,{ref:a,className:Kr(Ur({side:e}),t),...r,children:[(0,f.jsxs)(wn,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,f.jsx)(Cn,{className:"h-4 w-4"}),(0,f.jsx)("span",{className:"sr-only",children:"Close"})]}),n]})]}));
Hr.displayName=mn.displayName;
let Wr=m.forwardRef(({className:e,...t},n)=>(0,f.jsx)(yn,{ref:n,className:Kr("text-lg font-semibold text-foreground",e),...t}));
Wr.displayName=yn.displayName;
let $r=m.forwardRef(({className:e,...t},n)=>(0,f.jsx)(kn,{ref:n,className:Kr("text-sm text-muted-foreground",e),...t}));
function Vr(e,t,n,r){var a=e%10,
i=e%100;
return 1===a&&11!==i?t:a>=2&&a<=4&&(i<12||i>14)?n:r}
$r.displayName=kn.displayName;
var Zr={en:{title:"Etimo",
tagline:function(e){return"Everyday words in "+e+" Slavic, Iranian, Albanian, Greek, Romance, Caucasian, Turkic, Uralic, Mongolic, Germanic and Baltic languages"},
spot:"Word spotlight",
approx:"Solid outline: home region within today's borders. Dashed: places outside it where the language is spoken. Larger cities shown for context.",
seeAll:"See all",
explore:"Explore",
cat:{family:"Family",
cattle:"Animals",
nature:"Nature",
body:"Body",
food:"Food",
home:"Home",
time:"Time",
belief:"Customs"},
nav:{home:"Home",
words:"Words",
lang:"Languages",
mean:"Meanings",
all:"A–Z",
map:"Map",
tree:"Branches"},
ph:{lang:"Search languages",
mean:"Search meanings",
all:"Search"},
scope:function(e){return"in "+e},
words:function(e){return e+(1===e?" word":" words")},
inLangs:function(e,t){return e+(1===e?" word":" words")+" · "+t+(1===t?" language":" languages")},
matching:"Matching words",
none:"Nothing found. Try another spelling.",
showing:function(e,t){return"No exact match for “"+e+"”. Showing “"+t+"”:"},
dym:"Did you mean",
noex:function(e){return"No exact match for “"+e+"”. Closest words:"},
closest:"Similar spellings",
shint:"Type a word in any of the 209 languages, in its own script or in Latin letters, or what it means.",
try_:"Try",
copy:"Copy list",
copied:"Copied",
copyN:function(e){return"Copy "+e+" words"},
more:function(e){return"Show "+e+" more"},
back:"Back",
prev:"Previous",
next:"Next",
source:"Source",
showMap:"Show on map",
openWords:"Open words",
speakers:"Speakers",
spk:"",
status:"Status",
branch:"Branch",
where:"Where",
countries:"Countries",
noSp:"No figure in the sources used",
mapAll:"All",
mapCauc:"Europe",
mapDag:"Balkans",
mapNorth:"Iran",
mapHint:"Tap a pin. Pinch or use + and − to zoom.",
night:"Night mode",
reg:{west:"Western Europe",
ital:"Italy & the Alps",
cee:"Central Europe",
east:"Eastern Europe",
balk:"Balkans",
grk:"Greek world",
iran:"Iran & Kurdistan",
casia:"Caucasus & Central Asia",
nord:"Northern Europe",
cauc:"Caucasus",
dag:"Dagestan",
volga:"Volga & Urals",
casia2:"Anatolia, Iran & Central Asia",
sib:"Siberia, Mongolia & China"},
letter:"Letter",
list:"List",
recent:"Recent",
popular:"Popular words",
unique:"Other forms",
allF:"All",
textSize:"Text size",
contrast:"Contrast",
normal:"Normal",
high:"High",
on:"On",
off:"Off",
copyList:"Copy list",
findIn:function(e){return"Find a word in "+e},
langLabel:"Language",
anL:"Self-name",
top5:"11 families",
sbHint:"Tap a branch to zoom in. Tap a language to see its words.",
branchesT:"Branches",
treeHint:"Tap a branch to open or close it. Tap a language to see its words.",
expand:"Open all",
collapse:"Close all",
uiLang:"Language",
latin:"Latinica",
cyr:"Ćirilica",
pech:"",
sources:"Sources",
year:"year",
estimate:"estimate"},
sr:{title:"Etimo",
tagline:function(e){return"Svakodnevne reči u "+e+" slovenskih, iranskih, albanskih, grčkih, romanskih, kavkaskih, turkijskih, uralskih, mongolskih, germanskih i baltičkih jezika"},
spot:"Reč u fokusu",
approx:"Puna linija: matična oblast u današnjim granicama. Isprekidana: mesta van nje gde se jezik govori. Prikazani su veći gradovi.",
seeAll:"Prikaži sve",
explore:"Istraži",
cat:{family:"Porodica",
cattle:"Životinje",
nature:"Priroda",
body:"Telo",
food:"Hrana",
home:"Dom",
time:"Vreme",
belief:"Običaji"},
nav:{home:"Početna",
words:"Reči",
lang:"Jezici",
mean:"Značenja",
all:"A–Z",
map:"Karta",
tree:"Grane"},
ph:{lang:"Pretraži jezike",
mean:"Pretraži značenja",
all:"Pretraži"},
scope:function(e){return"u kategoriji: "+e},
words:function(e){return e+" "+Vr(e,"reč","reči","reči")},
inLangs:function(e,t){return e+" "+Vr(e,"reč","reči","reči")+" · "+t+" "+Vr(t,"jezik","jezika","jezika")},
matching:"Pronađene reči",
none:"Nema rezultata. Pokušajte sa drugačijim pravopisom.",
showing:function(e,t){return"Nema tačnog poklapanja za „"+e+"“. Prikazano: „"+t+"“"},
dym:"Da li ste mislili",
noex:function(e){return"Nema tačnog poklapanja za „"+e+"“. Najsličnije reči:"},
closest:"Slični oblici",
shint:"Upišite reč na bilo kom od 209 jezika, njegovim pismom ili latinicom, ili njeno značenje.",
try_:"Probajte",
copy:"Kopiraj spisak",
copied:"Kopirano",
copyN:function(e){return"Kopiraj "+e+" "+Vr(e,"reč","reči","reči")},
more:function(e){return"Prikaži još "+e},
back:"Nazad",
prev:"Prethodni",
next:"Sledeći",
source:"Izvor",
showMap:"Prikaži na karti",
openWords:"Otvori reči",
speakers:"Govornici",
spk:"",
status:"Status",
branch:"Grana",
where:"Gde",
countries:"Države",
noSp:"Nema podatka u korišćenim izvorima",
mapAll:"Sve",
mapCauc:"Evropa",
mapDag:"Balkan",
mapNorth:"Iran",
mapHint:"Dodirnite oznaku. Uvećajte prstima ili sa + i −.",
night:"Noćni režim",
reg:{west:"Zapadna Evropa",
ital:"Italija i Alpi",
cee:"Srednja Evropa",
east:"Istočna Evropa",
balk:"Balkan",
grk:"Grčki svet",
iran:"Iran i Kurdistan",
casia:"Kavkaz i Srednja Azija",
nord:"Severna Evropa",
cauc:"Kavkaz",
dag:"Dagestan",
volga:"Volga i Ural",
casia2:"Anadolija, Iran i Srednja Azija",
sib:"Sibir, Mongolija i Kina"},
letter:"Slovo",
list:"Lista",
recent:"Nedavno",
popular:"Popularne reči",
unique:"Ostali oblici",
allF:"Sve",
textSize:"Veličina teksta",
contrast:"Kontrast",
normal:"Normalan",
high:"Visok",
on:"Uključeno",
off:"Isključeno",
copyList:"Kopiraj listu",
findIn:function(e){return"Traži reč u jeziku: "+e},
langLabel:"Jezik",
anL:"Samonaziv",
top5:"11 porodica",
sbHint:"Dodirnite granu da je uvećate. Dodirnite jezik da vidite reči.",
branchesT:"Grane",
treeHint:"Dodirnite granu da je otvorite ili zatvorite. Dodirnite jezik da vidite reči.",
expand:"Otvori sve",
collapse:"Zatvori sve",
uiLang:"Jezik",
latin:"Latinica",
cyr:"Ćirilica",
pech:"",
sources:"Izvori",
year:"godina",
estimate:"procena"},
sq:{title:"Etimo",
tagline:function(e){return"Fjalë të përditshme në "+e+" gjuhë sllave, iraniane, shqipe, greke, romane, kaukaziane, turkike, uraliane, mongole, gjermanike dhe baltike"},
spot:"Fjala në qendër",
approx:"Vija e plotë: rajoni amë brenda kufijve të sotëm. Vija e ndërprerë: vendet jashtë tij ku flitet gjuha. Shfaqen qytetet kryesore.",
seeAll:"Shih të gjitha",
explore:"Eksploro",
cat:{family:"Familja",
cattle:"Kafshët",
nature:"Natyra",
body:"Trupi",
food:"Ushqimi",
home:"Shtëpia",
time:"Koha",
belief:"Zakonet"},
nav:{home:"Kreu",
words:"Fjalët",
lang:"Gjuhët",
mean:"Kuptimet",
all:"A–Z",
map:"Harta",
tree:"Degët"},
ph:{lang:"Kërko gjuhë",
mean:"Kërko kuptime",
all:"Kërko"},
scope:function(e){return"te "+e},
words:function(e){return e+" fjalë"},
inLangs:function(e,t){return e+" fjalë · "+t+" gjuhë"},
matching:"Fjalët që përputhen",
none:"Nuk u gjet asgjë. Provoni një shkrim tjetër.",
showing:function(e,t){return"Nuk ka përputhje të saktë për “"+e+"”. Po shfaqet “"+t+"”:"},
dym:"Mos kërkonit",
noex:function(e){return"Nuk ka përputhje të saktë për “"+e+"”. Fjalët më të afërta:"},
closest:"Shkrime të ngjashme",
shint:"Shkruani një fjalë në cilëndo nga 209 gjuhët, me shkrimin e saj ose me shkronja latine, ose kuptimin e saj.",
try_:"Provoni",
copy:"Kopjo listën",
copied:"U kopjua",
copyN:function(e){return"Kopjo "+e+" fjalë"},
more:function(e){return"Shfaq edhe "+e},
back:"Mbrapa",
prev:"E mëparshmja",
next:"Tjetra",
source:"Burimi",
showMap:"Shfaq në hartë",
openWords:"Hap fjalët",
speakers:"Folës",
spk:"",
status:"Gjendja",
branch:"Dega",
where:"Ku",
countries:"Shtetet",
noSp:"Nuk ka shifër në burimet e përdorura",
mapAll:"Të gjitha",
mapCauc:"Evropa",
mapDag:"Ballkani",
mapNorth:"Irani",
mapHint:"Prekni një shenjë. Zmadhoni me gishta ose me + dhe −.",
night:"Modaliteti i natës",
reg:{west:"Evropa Perëndimore",
ital:"Italia dhe Alpet",
cee:"Evropa Qendrore",
east:"Evropa Lindore",
balk:"Ballkani",
grk:"Bota greke",
iran:"Irani dhe Kurdistani",
casia:"Kaukazi dhe Azia Qendrore",
nord:"Evropa Veriore",
cauc:"Kaukazi",
dag:"Dagestani",
volga:"Vollga dhe Urali",
casia2:"Anadolli, Irani dhe Azia Qendrore",
sib:"Siberia, Mongolia dhe Kina"},
letter:"Shkronja",
list:"Lista",
recent:"Së fundmi",
popular:"Fjalë të njohura",
unique:"Forma të tjera",
allF:"Të gjitha",
textSize:"Madhësia e tekstit",
contrast:"Kontrasti",
normal:"Normal",
high:"I lartë",
on:"Ndezur",
off:"Fikur",
copyList:"Kopjo listën",
findIn:function(e){return"Kërko një fjalë në "+e},
langLabel:"Gjuha",
anL:"Vetëemërtimi",
top5:"11 familje",
sbHint:"Prekni një degë për ta zmadhuar. Prekni një gjuhë për të parë fjalët.",
branchesT:"Degët",
treeHint:"Prekni një degë për ta hapur ose mbyllur. Prekni një gjuhë për të parë fjalët.",
expand:"Hap të gjitha",
collapse:"Mbyll të gjitha",
uiLang:"Gjuha",
latin:"Latinica",
cyr:"Ćirilica",
pech:"",
sources:"Burimet",
year:"viti",
estimate:"vlerësim"}},
Qr={"Air & weather":{sr:"Vazduh i vreme",
sq:"Ajri dhe moti"},
"Animal parts":{sr:"Delovi životinja",
sq:"Pjesët e kafshëve"},
"Animal sounds & care":{sr:"Glasovi i nega životinja",
sq:"Zërat dhe kujdesi për kafshët"},
"Animals & herds":{sr:"Životinje i stada",
sq:"Kafshët dhe kopetë"},
"Art & craft":{sr:"Umetnost i zanat",
sq:"Arti dhe zanati"},
Birds:{sr:"Ptice",
sq:"Zogjtë"},
"Birth & life stages":{sr:"Rođenje i životna doba",
sq:"Lindja dhe etapat e jetës"},
"Blood & bones":{sr:"Krv i kosti",
sq:"Gjaku dhe kockat"},
"Boats & sailing":{sr:"Čamci i plovidba",
sq:"Varkat dhe lundrimi"},
"Body & skin":{sr:"Telo i koža",
sq:"Trupi dhe lëkura"},
"Bread & grain":{sr:"Hleb i žito",
sq:"Buka dhe drithi"},
"Breath & reflexes":{sr:"Disanje i refleksi",
sq:"Frymëmarrja dhe reflekset"},
"Cattle & sheep":{sr:"Goveda i ovce",
sq:"Gjedhët dhe delet"},
"Character & manners":{sr:"Karakter i ponašanje",
sq:"Karakteri dhe sjellja"},
"Children & grandchildren":{sr:"Deca i unuci",
sq:"Fëmijët dhe nipërit e mbesat"},
"Clay & glass":{sr:"Glina i staklo",
sq:"Balta dhe qelqi"},
"Clock & calendar":{sr:"Sat i kalendar",
sq:"Ora dhe kalendari"},
"Cloth & materials":{sr:"Tkanine i materijali",
sq:"Pëlhurat dhe materialet"},
Clothing:{sr:"Odeća",
sq:"Veshjet"},
Colours:{sr:"Boje",
sq:"Ngjyrat"},
Cooking:{sr:"Kuvanje",
sq:"Gatimi"},
"Crops & grain":{sr:"Usevi i žitarice",
sq:"Të mbjellat dhe drithërat"},
"Cutting & breaking":{sr:"Sečenje i lomljenje",
sq:"Prerja dhe thyerja"},
"Day & night":{sr:"Dan i noć",
sq:"Dita dhe nata"},
"Days of the week":{sr:"Dani u nedelji",
sq:"Ditët e javës"},
Directions:{sr:"Pravci",
sq:"Drejtimet"},
Drinks:{sr:"Pića",
sq:"Pijet"},
"Driving & riding":{sr:"Vožnja i jahanje",
sq:"Ngasja dhe kalërimi"},
"Earth & land":{sr:"Zemlja i tlo",
sq:"Toka dhe trualli"},
"Eating & drinking":{sr:"Jelo i piće",
sq:"Ngrënia dhe pirja"},
Farming:{sr:"Zemljoradnja",
sq:"Bujqësia"},
"Fats, salt & sweets":{sr:"Masti, so i slatkiši",
sq:"Yndyrat, kripa dhe ëmbëlsirat"},
Feelings:{sr:"Osećanja",
sq:"Ndjenjat"},
Fire:{sr:"Vatra",
sq:"Zjarri"},
"Fish & sea life":{sr:"Ribe i morski svet",
sq:"Peshqit dhe jeta detare"},
"Forest & stone":{sr:"Šuma i kamen",
sq:"Pylli dhe guri"},
"Friends & guests":{sr:"Prijatelji i gosti",
sq:"Miqtë dhe mysafirët"},
"Fruit & vegetables":{sr:"Voće i povrće",
sq:"Frutat dhe perimet"},
"Furniture & hearth":{sr:"Nameštaj i ognjište",
sq:"Orenditë dhe vatra"},
"Giving & taking":{sr:"Davanje i uzimanje",
sq:"Dhënia dhe marrja"},
Grooming:{sr:"Lična nega",
sq:"Kujdesi personal"},
Handling:{sr:"Rukovanje",
sq:"Trajtimi me duar"},
"Hats, belts & jewellery":{sr:"Šeširi, pojasevi i nakit",
sq:"Kapelet, rripat dhe stolitë"},
"Head & face":{sr:"Glava i lice",
sq:"Koka dhe fytyra"},
"Health & illness":{sr:"Zdravlje i bolest",
sq:"Shëndeti dhe sëmundja"},
"Horses & donkeys":{sr:"Konji i magarci",
sq:"Kuajt dhe gomarët"},
"House & rooms":{sr:"Kuća i prostorije",
sq:"Shtëpia dhe dhomat"},
"Hunting & fishing":{sr:"Lov i ribolov",
sq:"Gjuetia dhe peshkimi"},
"In-laws & step-kin":{sr:"Svojta i pastorčad",
sq:"Krushqit dhe njerkët"},
"Insects & crawlers":{sr:"Insekti i crvi",
sq:"Insektet dhe krimbat"},
"Kin & household":{sr:"Rodbina i domaćinstvo",
sq:"Farefisi dhe familja"},
"Kitchen & tableware":{sr:"Kuhinja i posuđe",
sq:"Kuzhina dhe enët"},
"Law & justice":{sr:"Zakon i pravda",
sq:"Ligji dhe drejtësia"},
"Life & death":{sr:"Život i smrt",
sq:"Jeta dhe vdekja"},
"Light & dark":{sr:"Svetlost i tama",
sq:"Drita dhe errësira"},
"Making & working":{sr:"Izrada i rad",
sq:"Bërja dhe puna"},
Marriage:{sr:"Brak",
sq:"Martesa"},
Meals:{sr:"Obroci",
sq:"Vaktet"},
"Meat & dairy":{sr:"Meso i mlečni proizvodi",
sq:"Mishi dhe bulmeti"},
"Metals & smithing":{sr:"Metali i kovaštvo",
sq:"Metalet dhe farkëtaria"},
"Mind & learning":{sr:"Um i učenje",
sq:"Mendja dhe të nxënët"},
"Money & trade":{sr:"Novac i trgovina",
sq:"Paraja dhe tregtia"},
Months:{sr:"Meseci",
sq:"Muajt"},
Movement:{sr:"Kretanje",
sq:"Lëvizja"},
Numbers:{sr:"Brojevi",
sq:"Numrat"},
Organs:{sr:"Organi",
sq:"Organet"},
"Parents & grandparents":{sr:"Roditelji, babe i dede",
sq:"Prindërit dhe gjyshërit"},
"People & age":{sr:"Ljudi i uzrast",
sq:"Njerëzit dhe mosha"},
"People & ranks":{sr:"Ljudi i staleži",
sq:"Njerëzit dhe shtresat"},
"Pets & small mammals":{sr:"Kućni ljubimci i mali sisari",
sq:"Kafshët shtëpiake dhe gjitarët e vegjël"},
"Pigs & goats":{sr:"Svinje i koze",
sq:"Derrat dhe dhitë"},
"Plants & trees":{sr:"Biljke i drveće",
sq:"Bimët dhe pemët"},
"Posture & placing":{sr:"Položaj i postavljanje",
sq:"Qëndrimi dhe vendosja"},
"Pulling & washing":{sr:"Vučenje i pranje",
sq:"Tërheqja dhe larja"},
"Religion & magic":{sr:"Religija i magija",
sq:"Feja dhe magjia"},
"Reptiles & amphibians":{sr:"Gmizavci i vodozemci",
sq:"Zvarranikët dhe amfibët"},
"Roads & wheels":{sr:"Putevi i točkovi",
sq:"Rrugët dhe rrotat"},
"Roof & building":{sr:"Krov i gradnja",
sq:"Çatia dhe ndërtimi"},
Seasons:{sr:"Godišnja doba",
sq:"Stinët"},
Senses:{sr:"Čula",
sq:"Shqisat"},
Siblings:{sr:"Braća i sestre",
sq:"Vëllezërit dhe motrat"},
"Size & shape":{sr:"Veličina i oblik",
sq:"Madhësia dhe forma"},
"Sky & stars":{sr:"Nebo i zvezde",
sq:"Qielli dhe yjet"},
"Sleep & waking":{sr:"San i buđenje",
sq:"Gjumi dhe zgjimi"},
"Society & rulers":{sr:"Društvo i vladari",
sq:"Shoqëria dhe sundimtarët"},
"Sound & music":{sr:"Zvuk i muzika",
sq:"Tingulli dhe muzika"},
"Speed & duration":{sr:"Brzina i trajanje",
sq:"Shpejtësia dhe kohëzgjatja"},
"Spinning & sewing":{sr:"Predenje i šivenje",
sq:"Tjerrja dhe qepja"},
"Storm & rainbow":{sr:"Oluja i duga",
sq:"Stuhia dhe ylberi"},
Tastes:{sr:"Ukusi",
sq:"Shijet"},
"Time & age":{sr:"Vreme i starost",
sq:"Koha dhe mosha"},
Tools:{sr:"Alati",
sq:"Veglat"},
"Touch & temperature":{sr:"Dodir i temperatura",
sq:"Prekja dhe temperatura"},
"Trunk & limbs":{sr:"Torzo i udovi",
sq:"Trungu dhe gjymtyrët"},
"Tying & binding":{sr:"Vezivanje i spajanje",
sq:"Lidhja dhe shtrëngimi"},
"Uncles, aunts & cousins":{sr:"Stričevi, tetke i rođaci",
sq:"Xhaxhallarët, dajat, hallat, tezet dhe kushërinjtë"},
"Voice & speech":{sr:"Glas i govor",
sq:"Zëri dhe të folurit"},
"War & weapons":{sr:"Rat i oružje",
sq:"Lufta dhe armët"},
Water:{sr:"Voda",
sq:"Uji"},
"Water & flow":{sr:"Voda i tok",
sq:"Uji dhe rrjedha"},
"Weaving & baskets":{sr:"Tkanje i korpe",
sq:"Endja dhe shportat"},
"Wild animals":{sr:"Divlje životinje",
sq:"Kafshët e egra"},
"Writing & books":{sr:"Pisanje i knjige",
sq:"Shkrimi dhe librat"}},
Yr={"Slavic":{"en":"Slavic","sr":"slovenski","sq":"sllave"},"Iranian":{"en":"Iranian","sr":"iranski","sq":"iraniane"},"Albanian":{"en":"Albanian","sr":"albanski","sq":"shqipe"},"Greek":{"en":"Greek","sr":"grčki","sq":"greke"},"Romance":{"en":"Romance","sr":"romanski","sq":"romane"},"Caucasian":{"en":"Caucasian","sr":"kavkaski","sq":"kaukaziane"},"Turkic":{"en":"Turkic","sr":"turkijski","sq":"turkike"},"Uralic":{"en":"Uralic","sr":"uralski","sq":"uraliane"},"Mongolic":{"en":"Mongolic","sr":"mongolski","sq":"mongole"},"Germanic":{"en":"Germanic","sr":"germanski","sq":"gjermanike"},"Baltic":{"en":"Baltic","sr":"baltički","sq":"baltike"}},
Jr={"Germanic":{"sr":"Germanski",
"sq":"Gjermanike"},
"North Germanic":{"sr":"Severnogermanski",
"sq":"Gjermanike veriore"},
"West Scandinavian":{"sr":"Zapadnoskandinavski",
"sq":"Skandinave perëndimore"},
"East Scandinavian":{"sr":"Istočnoskandinavski",
"sq":"Skandinave lindore"},
"West Germanic":{"sr":"Zapadnogermanski",
"sq":"Gjermanike perëndimore"},
"Anglo-Frisian":{"sr":"Anglofrizijski",
"sq":"Anglo-friziane"},
"Frisian":{"sr":"Frizijski",
"sq":"Friziane"},
"Low Franconian":{"sr":"Niskofranački",
"sq":"Frankoniane e ulët"},
"High German":{"sr":"Visokonemački",
"sq":"Gjermanike e lartë"},
"East Germanic":{"sr":"Istočnogermanski",
"sq":"Gjermanike lindore"},
"Baltic":{"sr":"Baltički",
"sq":"Baltike"},
"East Baltic":{"sr":"Istočnobaltički",
"sq":"Baltike lindore"},
"West Baltic":{"sr":"Zapadnobaltički",
"sq":"Baltike perëndimore"},
"Slavic":{"sr":"Slovenski",
"sq":"Sllave"},
"East Slavic":{"sr":"Istočnoslovenski",
"sq":"Sllave lindore"},
"West Slavic":{"sr":"Zapadnoslovenski",
"sq":"Sllave perëndimore"},
"South Slavic":{"sr":"Južnoslovenski",
"sq":"Sllave jugore"},
"Eastern South Slavic":{"sr":"Istočni južnoslovenski",
"sq":"Sllave jugore lindore"},
"Western South Slavic":{"sr":"Zapadni južnoslovenski",
"sq":"Sllave jugore perëndimore"},
"Shtokavian":{"sr":"Štokavski",
"sq":"Shtokave"},
"Czech-Slovak":{"sr":"Češko-slovački",
"sq":"Çeko-sllovake"},
"Lechitic":{"sr":"Lehitski",
"sq":"Lehitike"},
"Sorbian":{"sr":"Lužičkosrpski",
"sq":"Sorbe"},
"Iranian":{"sr":"Iranski",
"sq":"Iraniane"},
"Western Iranian":{"sr":"Zapadnoiranski",
"sq":"Iraniane perëndimore"},
"Eastern Iranian":{"sr":"Istočnoiranski",
"sq":"Iraniane lindore"},
"Southwestern":{"sr":"Jugozapadni",
"sq":"Jugperëndimore"},
"Northwestern":{"sr":"Severozapadni",
"sq":"Veriperëndimore"},
"Northeastern":{"sr":"Severoistočni",
"sq":"Verilindore"},
"Southeastern":{"sr":"Jugoistočni",
"sq":"Juglindore"},
"Pamir":{"sr":"Pamirski",
"sq":"Pamire"},
"Albanian":{"sr":"Albanski",
"sq":"Shqipe"},
"Tosk":{"sr":"Toskijski",
"sq":"Toskërisht"},
"Gheg":{"sr":"Gegijski",
"sq":"Gegnisht"},
"Greek":{"sr":"Grčki",
"sq":"Greke"},
"Modern Greek":{"sr":"Novogrčki",
"sq":"Greke e re"},
"Romance":{"sr":"Romanski",
"sq":"Romane"},
"Gallo-Romance":{"sr":"Galoromanski",
"sq":"Galo-romane"},
"Oïl":{"sr":"Oil (langue d'oïl)",
"sq":"Oïl"},
"Gallo-Italic":{"sr":"Galoitalski",
"sq":"Galo-italike"},
"Lombard":{"sr":"Lombardski",
"sq":"Lombarde"},
"Ibero-Romance":{"sr":"Iberoromanski",
"sq":"Ibero-romane"},
"Italo-Romance":{"sr":"Italoromanski",
"sq":"Italo-romane"},
"Eastern Romance":{"sr":"Istočnoromanski",
"sq":"Romane lindore"},
"Rhaeto-Romance":{"sr":"Retoromanski",
"sq":"Reto-romane"},
"Sardinian":{"sr":"Sardinski",
"sq":"Sardenje"},
"Serbian-Croatian-Bosnian":{"en":"Serbian-Croatian-Bosnian-Montenegrin",
"sr":"Srpsko-hrvatsko-bosansko-crnogorski",
"sq":"Serbo-kroato-boshnjako-malazeze"},
"Macedo-Bulgarian":{"sr":"Makedonsko-bugarski",
"sq":"Maqedono-bullgare"},
"Ukrainian-Rusyn":{"sr":"Ukrajinsko-rusinski",
"sq":"Ukraino-rusine"},
"Polish-Silesian":{"sr":"Poljsko-šleski",
"sq":"Polako-sileziane"},
"Adharic":{"sr":"Adarski",
"sq":"Adharike"},
"Bakhtiari-Southern Lori":{"sr":"Bahtijarsko-južnolurski",
"sq":"Bakhtiare dhe lure jugore"},
"Caspian":{"sr":"Kaspijski",
"sq":"Kaspike"},
"Central Eastern Iranian":{"sr":"Centralni istočnoiranski",
"sq":"Iraniane lindore qendrore"},
"Central Iranian PB":{"sr":"Centralnoiranski (PB)",
"sq":"Iraniane qendrore (PB)"},
"Central Iranian PBS":{"sr":"Centralnoiranski (PBS)",
"sq":"Iraniane qendrore (PBS)"},
"Farsic":{"sr":"Farsijski",
"sq":"Farsike"},
"Farsic-Caucasian Tat":{"sr":"Farsijski i kavkaski tatski",
"sq":"Farsike dhe tate kaukaziane"},
"Gorani":{"sr":"Goranski (iranski)",
"sq":"Gorane (iraniane)"},
"Gurani":{"sr":"Guranski",
"sq":"Gurane"},
"Kurdish":{"sr":"Kurdski",
"sq":"Kurde"},
"Laki-Kurdish":{"sr":"Lakijsko-kurdski",
"sq":"Lake-kurde"},
"Luric":{"sr":"Lurski",
"sq":"Lure"},
"Luric-Dezfulic":{"sr":"Lursko-dezfulski",
"sq":"Lure-dezfulike"},
"Mazanderani-Shahmirzadi":{"sr":"Mazanderansko-šahmirzadski",
"sq":"Mazandarane-shahmirzade"},
"Middle-Modern Persian":{"sr":"Srednje- i novopersijski",
"sq":"Persiane e mesme dhe e re"},
"Modern Ossetic":{"sr":"Savremeni osetinski",
"sq":"Osetishte e sotme"},
"Modern Southwestern Iranian":{"sr":"Savremeni jugozapadnoiranski",
"sq":"Iraniane jugperëndimore e sotme"},
"Northwestern Iranian":{"sr":"Severozapadnoiranski",
"sq":"Iraniane veriperëndimore"},
"Ossetic":{"sr":"Osetinski",
"sq":"Osetishte"},
"Saka-Wakhi":{"sr":"Sakijsko-vahanski",
"sq":"Sake-vakhe"},
"Shughni-Yazgulami":{"sr":"Šugnansko-jazgulamski",
"sq":"Shugnane-jazgulame"},
"Shughnic":{"sr":"Šugnanski",
"sq":"Shugnane"},
"Sogdian-Yagnobi":{"sr":"Sogdijsko-jagnopski",
"sq":"Sogdiane-jagnobe"},
"Sogdic":{"sr":"Sogdijski",
"sq":"Sogdiane"},
"Sogdic-Ossetic":{"sr":"Sogdijsko-osetinski",
"sq":"Sogdiane-osetine"},
"Southwestern Iranian":{"sr":"Jugozapadnoiranski",
"sq":"Iraniane jugperëndimore"},
"Central Greek":{"sr":"Centralnogrčki",
"sq":"Greke qendrore"},
"Koineic Greek":{"sr":"Grčki (koine)",
"sq":"Greke koine"},
"Modern Koineic Greek":{"sr":"Novogrčki (koine)",
"sq":"Greke koine e re"},
"Nuclear Modern Greek":{"sr":"Novogrčki (jezgro)",
"sq":"Greke e re (bërthama)"},
"Pontic-Cappadocian Greek":{"sr":"Pontsko-kapadokijski grčki",
"sq":"Greke ponto-kapadokase"},
"South Greek":{"sr":"Južnogrčki",
"sq":"Greke jugore"},
"Brazil-Portugal Portuguese":{"sr":"Portugalski (Brazil i Portugal)",
"sq":"Portugeze (Brazil dhe Portugali)"},
"Castilic":{"sr":"Kastiljski",
"sq":"Kastiliane"},
"Central Italian Romance":{"sr":"Srednjoitalski romanski",
"sq":"Romane italiane qendrore"},
"Central Oil":{"sr":"Centralni oil",
"sq":"Oïl qendrore"},
"Eastern Romanian":{"sr":"Istočnorumunski",
"sq":"Rumune lindore"},
"Galician Romance":{"sr":"Galicijski romanski",
"sq":"Romane galiciane"},
"Gallo-Italian":{"sr":"Galoitalski",
"sq":"Galo-italike"},
"Gallo-Rhaetian":{"sr":"Galoretski",
"sq":"Galo-retike"},
"Global French":{"sr":"Francuski (globalni)",
"sq":"Frënge (globale)"},
"Italian Romance":{"sr":"Italoromanski",
"sq":"Romane italiane"},
"Italo-Dalmatian":{"sr":"Italo-dalmatski",
"sq":"Italo-dalmate"},
"Italo-Western Romance":{"sr":"Italo-zapadnoromanski",
"sq":"Romane italo-perëndimore"},
"Macro-French":{"sr":"Makrofrancuski",
"sq":"Makrofrënge"},
"Macro-Portuguese":{"sr":"Makroportugalski",
"sq":"Makroportugeze"},
"Megleno-Romanian":{"sr":"Meglenorumunski",
"sq":"Meglenorumune"},
"North Aromanian":{"sr":"Severnoaromunski",
"sq":"Arumune veriore"},
"Northern Romanian":{"sr":"Severnorumunski",
"sq":"Rumune veriore"},
"Northwestern Shifted Romance":{"sr":"Severozapadni romanski (pomereni)",
"sq":"Romane veriperëndimore (të zhvendosura)"},
"Oil":{"en":"Oïl",
"sr":"Oil (langue d'oïl)",
"sq":"Oïl"},
"Piemontese-Lombard":{"sr":"Pijemontsko-lombardski",
"sq":"Piemonteze-lombarde"},
"Shifted Western Romance":{"sr":"Zapadnoromanski (pomereni)",
"sq":"Romane perëndimore (të zhvendosura)"},
"South Aromanian":{"sr":"Južnoaromunski",
"sq":"Arumune jugore"},
"Southern Italian Romance":{"sr":"Južnoitalski romanski",
"sq":"Romane italiane jugore"},
"Southwestern Shifted Romance":{"sr":"Jugozapadni romanski (pomereni)",
"sq":"Romane jugperëndimore (të zhvendosura)"},
"West Ibero-Romance":{"sr":"Zapadni iberoromanski",
"sq":"Ibero-romane perëndimore"},
"Western Romance":{"sr":"Zapadnoromanski",
"sq":"Romane perëndimore"},
"Northwest Caucasian":{"sr":"Severozapadnokavkaski",
"sq":"Kaukaziane veriperëndimore"},
"Nakh-Daghestanian":{"sr":"Nahsko-dagestanski",
"sq":"Nakh-dagestanase"},
"Kartvelian":{"sr":"Kartvelski",
"sq":"Kartveliane"},
"Turkic":{"sr":"Turkijski",
"sq":"Turkike"},
"Mongolic-Khitan":{"sr":"Mongolsko-kitanski",
"sq":"Mongole-kitane"},
"Uralic":{"sr":"Uralski",
"sq":"Uraliane"},
"Abkhaz-Abaza":{"sr":"Abhasko-abazinski",
"sq":"Abkhaze-abaze"},
"Aghul-Lezgi":{"sr":"Agulsko-lezginski",
"sq":"Agule-lezgine"},
"Aghulic":{"sr":"Agulski",
"sq":"Agule"},
"Akhvakhic":{"sr":"Ahvahski",
"sq":"Ahvahe"},
"Andic":{"sr":"Andijski",
"sq":"Andike"},
"Avar-Andic-Tsezic":{"sr":"Avarsko-andijsko-cezki",
"sq":"Avare-andike-ceze"},
"Bagvalal-Tindi":{"sr":"Bagvalalsko-tindinski",
"sq":"Bagvalale-tindine"},
"Baoanic":{"sr":"Baoanski",
"sq":"Baoane"},
"Bashkiric":{"sr":"Baškirski",
"sq":"Bashkire"},
"Bolgar":{"sr":"Bolgarski",
"sq":"Bolgare"},
"Botlikh-Godoberi":{"sr":"Botlihsko-godoberinski",
"sq":"Botlihe-godoberine"},
"Buriat":{"sr":"Burjatski",
"sq":"Buriate"},
"Central Finnic":{"sr":"Srednji baltičkofinski",
"sq":"Finike qendrore"},
"Central Oghuz":{"sr":"Srednjooguski",
"sq":"Oguze qendrore"},
"Central Western Saami":{"sr":"Srednjozapadni samski",
"sq":"Same perëndimore qendrore"},
"Chechen-Ingush":{"sr":"Čečensko-inguški",
"sq":"Çeçene-ingushe"},
"Circassian":{"sr":"Čerkeski",
"sq":"Çerkeze"},
"Coastal Finnic":{"sr":"Primorski baltičkofinski",
"sq":"Finike bregdetare"},
"Common Turkic":{"sr":"Opšti turkijski",
"sq":"Turkike të përbashkëta"},
"Crimeaic":{"sr":"Krimski",
"sq":"Krimease"},
"Crimean Tatar-Urum":{"sr":"Krimskotatarsko-urumski",
"sq":"Tatare të Krimesë-urume"},
"Daghestanian":{"sr":"Dagestanski",
"sq":"Dagestanase"},
"Dargwic":{"sr":"Darginski",
"sq":"Dargine"},
"East Kipchak":{"sr":"Istočni kipčački",
"sq":"Kipçake lindore"},
"East Ladoga":{"sr":"Istočni ladoški",
"sq":"Ladogane lindore"},
"East Oghuz":{"sr":"Istočni oguski",
"sq":"Oguze lindore"},
"East Tsezic":{"sr":"Istočni cezki",
"sq":"Ceze lindore"},
"Eastern Mongolic":{"sr":"Istočni mongolski",
"sq":"Mongole lindore"},
"Eastern Saami":{"sr":"Istočni samski",
"sq":"Same lindore"},
"Eastern Samur":{"sr":"Istočni samurski",
"sq":"Samure lindore"},
"Enets":{"sr":"Enečki",
"sq":"Eneçe"},
"Enets-Nenets":{"sr":"Enečko-nenečki",
"sq":"Eneçe-neneçe"},
"Finnic":{"sr":"Baltičkofinski",
"sq":"Finike"},
"Georgian-Zan":{"sr":"Gruzijsko-zanski",
"sq":"Gjeorgjiane-zane"},
"Georgic":{"sr":"Gruzijska grana",
"sq":"Dega gjeorgjiane"},
"Hungaric":{"sr":"Mađarska grana",
"sq":"Dega hungareze"},
"Kamas-Selkup":{"sr":"Kamasinsko-selkupski",
"sq":"Kamase-selkupe"},
"Kaukasus Kipchak":{"sr":"Kavkaski kipčački",
"sq":"Kipçake kaukaziane"},
"Khalkha-Buriat":{"sr":"Halhasko-burjatski",
"sq":"Halha-buriate"},
"Khantyic":{"sr":"Hantijski",
"sq":"Hantike"},
"Kipchak":{"sr":"Kipčački",
"sq":"Kipçake"},
"Kipchak-Turkestan":{"sr":"Kipčačko-turkestanski",
"sq":"Kipçake-turkestane"},
"Komi":{"sr":"Komi",
"sq":"Komi"},
"Ladogan":{"sr":"Ladoški",
"sq":"Ladogane"},
"Lezgic":{"sr":"Lezginski",
"sq":"Lezgine"},
"Lule-Pite Saami":{"sr":"Lulesko-pitesamski",
"sq":"Same lule-pite"},
"Mainland Eastern Saami":{"sr":"Kopneni istočni samski",
"sq":"Same lindore kontinentale"},
"Mansic":{"sr":"Mansijski",
"sq":"Mansike"},
"Mari":{"sr":"Marijski",
"sq":"Mare"},
"Modern Turkestan":{"sr":"Savremeni turkestanski",
"sq":"Turkestane moderne"},
"Mongolian":{"sr":"Mongolski",
"sq":"Mongole"},
"Mongolic":{"sr":"Mongolski",
"sq":"Mongole"},
"Monguoric":{"sr":"Monguorski",
"sq":"Monguore"},
"Mordvin":{"sr":"Mordvinski",
"sq":"Mordvine"},
"Nakh":{"sr":"Nahski",
"sq":"Nahe"},
"Nenets":{"sr":"Nenečki",
"sq":"Neneçe"},
"Neva":{"sr":"Nevski",
"sq":"Neva"},
"North Finnic":{"sr":"Severni baltičkofinski",
"sq":"Finike veriore"},
"North Kipchak":{"sr":"Severni kipčački",
"sq":"Kipçake veriore"},
"North-Central Mansi":{"sr":"Severnocentralni mansijski",
"sq":"Mansi veriore-qendrore"},
"Northern Altai-Lower Chulym":{"sr":"Severnoaltajsko-donjočulimski",
"sq":"Altaje veriore-çulime e poshtme"},
"Northern Khanty":{"sr":"Severni hantijski",
"sq":"Hanti veriore"},
"Northwest Kipchak":{"sr":"Severozapadni kipčački",
"sq":"Kipçake veriperëndimore"},
"Nuclear Finnish":{"sr":"Uži finski",
"sq":"Finlandishte bërthamore"},
"Nuclear Oghuz":{"sr":"Uži oguski",
"sq":"Oguze bërthamore"},
"Oghuz":{"sr":"Oguski",
"sq":"Oguze"},
"Peninsular Eastern Saami":{"sr":"Poluostrvski istočni samski",
"sq":"Same lindore gadishullore"},
"Permian":{"sr":"Permski",
"sq":"Permike"},
"Saami":{"sr":"Samski",
"sq":"Same"},
"Sakha-Dolgan":{"sr":"Jakutsko-dolganski",
"sq":"Jakute-dolgane"},
"Samoyedic":{"sr":"Samojedski",
"sq":"Samojede"},
"Samur":{"sr":"Samurski",
"sq":"Samure"},
"Sayan":{"sr":"Sajanski",
"sq":"Sajane"},
"Sayan-Yenisei Turkic":{"sr":"Sajansko-jenisejski turkijski",
"sq":"Turke të Sajanit dhe Jeniseit"},
"Shirongol":{"sr":"Širongolski",
"sq":"Shirongole"},
"South Dargwa":{"sr":"Južni darginski",
"sq":"Dargine jugore"},
"South Kipchak":{"sr":"Južni kipčački",
"sq":"Kipçake jugore"},
"South Siberian Turkic":{"sr":"Južnosibirski turkijski",
"sq":"Turke të Siberisë jugore"},
"Southeast Kipchak":{"sr":"Jugoistočni kipčački",
"sq":"Kipçake juglindore"},
"Southern Periphery Mongolic":{"sr":"Mongolski južne periferije",
"sq":"Mongole të periferisë jugore"},
"Southern Samur":{"sr":"Južni samurski",
"sq":"Samure jugore"},
"Southwestern Saami":{"sr":"Jugozapadni samski",
"sq":"Same jugperëndimore"},
"Tabasaran-Aghul-Lezgi":{"sr":"Tabasaransko-agulsko-lezginski",
"sq":"Tabasarane-agule-lezgine"},
"Tsezic":{"sr":"Cezki",
"sq":"Ceze"},
"Turkestan":{"sr":"Turkestanski",
"sq":"Turkestane"},
"Udi-Aghwan":{"sr":"Udinsko-agvanski",
"sq":"Udine-aghvane"},
"Unclassified Kipchak":{"sr":"Neklasifikovani kipčački",
"sq":"Kipçake të paklasifikuara"},
"Uyghuric":{"sr":"Ujgurski",
"sq":"Ujgure"},
"Uzbek":{"sr":"Uzbečki",
"sq":"Uzbeke"},
"West Kipchak":{"sr":"Zapadni kipčački",
"sq":"Kipçake perëndimore"},
"West Oghuz":{"sr":"Zapadni oguski",
"sq":"Oguze perëndimore"},
"West Tsezic":{"sr":"Zapadni cezki",
"sq":"Ceze perëndimore"},
"Western Saami":{"sr":"Zapadni samski",
"sq":"Same perëndimore"},
"Western Samur":{"sr":"Zapadni samurski",
"sq":"Samure perëndimore"},
"Yenisey Turkic":{"sr":"Jenisejski turkijski",
"sq":"Turke të Jeniseit"},
"Zan":{"sr":"Zanski",
"sq":"Zane"}},
Xr={"safe":{"en":"safe",
"sr":"bezbedan",
"sq":"e sigurt"},
"at risk":{"en":"at risk",
"sr":"u riziku",
"sq":"në rrezik"},
"vulnerable":{"en":"vulnerable",
"sr":"ranjiv",
"sq":"e cenueshme"},
"threatened":{"en":"threatened",
"sr":"ugrožen",
"sq":"e kërcënuar"},
"endangered":{"en":"endangered",
"sr":"teško ugrožen",
"sq":"e rrezikuar"},
"severely endangered":{"en":"severely endangered",
"sr":"ozbiljno ugrožen",
"sq":"rëndë e rrezikuar"},
"critically endangered":{"en":"critically endangered",
"sr":"kritično ugrožen",
"sq":"në rrezik kritik"},
"awakening":{"en":"awakening",
"sr":"u obnovi",
"sq":"në ringjallje"},
"dormant":{"en":"dormant",
"sr":"bez živih govornika",
"sq":"pa folës të gjallë"},
"shifting":{"en":"shifting",
"sr":"u povlačenju",
"sq":"në zhvendosje"},
"moribund":{"en":"moribund",
"sr":"na izdisaju",
"sq":"në zhdukje"},
"nearly extinct":{"en":"nearly extinct",
"sr":"skoro izumro",
"sq":"pothuajse e zhdukur"},
"extinct":{"en":"extinct",
"sr":"izumro",
"sq":"e zhdukur"},
"historical":{"en":"historical (extinct)",
"sr":"istorijski (izumro)",
"sq":"historike (e zhdukur)"}},
ea={paper:{sr:"papir",
sq:"letër"},
God:{sr:"Bog",
sq:"Zot"},
religion:{sr:"religija",
sq:"fe"},
holy:{sr:"svet",
sq:"i shenjtë"},
soul:{sr:"duša",
sq:"shpirt"},
heaven:{sr:"raj",
sq:"parajsë"},
hell:{sr:"pakao",
sq:"ferr"},
sin:{sr:"greh",
sq:"mëkat"},
"to believe":{sr:"verovati",
sq:"besoj"},
"house of worship":{sr:"bogomolja",
sq:"faltore"},
church:{sr:"crkva",
sq:"kishë"},
mosque:{sr:"džamija",
sq:"xhami"},
altar:{sr:"oltar",
sq:"altar"},
sacrifice:{sr:"žrtva",
sq:"flijim"},
"to worship":{sr:"obožavati",
sq:"adhuroj"},
"to pray":{sr:"moliti se",
sq:"lutem"},
prayer:{sr:"molitva",
sq:"lutja"},
priest:{sr:"sveštenik",
sq:"prift"},
mullah:{sr:"mula",
sq:"mullah"},
imam:{sr:"imam",
sq:"imam"},
"to preach":{sr:"propovedati",
sq:"predikoj"},
"to bless":{sr:"blagosloviti",
sq:"bekoj"},
"to curse":{sr:"prokleti",
sq:"mallkoj"},
"to fast":{sr:"postiti",
sq:"agjëroj"},
Islam:{sr:"islam",
sq:"islam"},
Muslim:{sr:"musliman",
sq:"mysliman"},
Christian:{sr:"hrišćanin",
sq:"i krishterë"},
Koran:{sr:"Kuran",
sq:"Kuran"},
shaman:{sr:"šaman",
sq:"shaman"},
demon:{sr:"demon",
sq:"demon"},
idol:{sr:"idol",
sq:"idhull"},
magic:{sr:"magija",
sq:"magji"},
witch:{sr:"veštica",
sq:"shtrigë"},
fairy:{sr:"vila",
sq:"zanë"},
ghost:{sr:"duh",
sq:"fantazmë"},
omen:{sr:"predznak",
sq:"ogur"},
"good luck":{sr:"sreća",
sq:"fat i mirë"},
misfortune:{sr:"nesreća",
sq:"fatkeqësi"},
custom:{sr:"običaj",
sq:"zakon"},
"to marry":{sr:"venčati se",
sq:"martohem"},
divorce:{sr:"razvod",
sq:"divorc"},
guest:{sr:"gost",
sq:"mysafir"},
host:{sr:"domaćin",
sq:"i zoti i shtëpisë"},
oath:{sr:"zakletva",
sq:"betim"},
"to swear":{sr:"zakleti se",
sq:"betohem"},
"to bury":{sr:"sahraniti",
sq:"varros"},
grave:{sr:"grob",
sq:"varr"},
man:{sr:"muškarac",
sq:"burrë"},
woman:{sr:"žena",
sq:"grua"},
boy:{sr:"dečak",
sq:"djalë"},
girl:{sr:"devojčica",
sq:"vajzë"},
baby:{sr:"beba",
sq:"foshnjë"},
twins:{sr:"blizanci",
sq:"binjakë"},
"old man":{sr:"starac",
sq:"plak"},
"old woman":{sr:"starica",
sq:"plakë"},
ancestors:{sr:"preci",
sq:"paraardhës"},
descendants:{sr:"potomci",
sq:"pasardhës"},
stepson:{sr:"pastorak",
sq:"djalë i thjeshtër"},
stepdaughter:{sr:"pastorka",
sq:"vajzë e thjeshtër"},
orphan:{sr:"siroče",
sq:"jetim"},
widow:{sr:"udovica",
sq:"e ve"},
widower:{sr:"udovac",
sq:"i ve"},
wedding:{sr:"svadba",
sq:"dasmë"},
sibling:{sr:"brat ili sestra",
sq:"vëlla a motër"},
stable:{sr:"štala",
sq:"stallë"},
ram:{sr:"ovan",
sq:"dash"},
ewe:{sr:"ovca",
sq:"dele"},
lamb:{sr:"jagnje",
sq:"qengj"},
"he-goat":{sr:"jarac",
sq:"cjap"},
"kid (young goat)":{sr:"jare",
sq:"kec"},
stallion:{sr:"pastuv",
sq:"hamshor"},
mare:{sr:"kobila",
sq:"pelë"},
foal:{sr:"ždrebe",
sq:"mëz"},
donkey:{sr:"magarac",
sq:"gomar"},
mule:{sr:"mazga",
sq:"mushkë"},
camel:{sr:"kamila",
sq:"deve"},
dog:{sr:"pas",
sq:"qen"},
rooster:{sr:"petao",
sq:"gjel"},
hen:{sr:"kokoška",
sq:"pulë"},
chicken:{sr:"pile",
sq:"zog pule"},
goose:{sr:"guska",
sq:"patë"},
duck:{sr:"patka",
sq:"rosë"},
horn:{sr:"rog",
sq:"bri"},
tail:{sr:"rep",
sq:"bisht"},
udder:{sr:"vime",
sq:"gji (i kafshës)"},
milk:{sr:"mleko",
sq:"qumësht"},
"to milk":{sr:"musti",
sq:"mjel"},
cheese:{sr:"sir",
sq:"djathë"},
butter:{sr:"maslac",
sq:"gjalpë"},
wool:{sr:"vuna",
sq:"lesh"},
felt:{sr:"filc",
sq:"qeçe"},
hay:{sr:"seno",
sq:"sanë"},
boar:{sr:"vepar",
sq:"derr mashkull"},
"sow (female pig)":{sr:"krmača",
sq:"dosë"},
land:{sr:"kopno",
sq:"tokë"},
soil:{sr:"zemlja",
sq:"dhe"},
sand:{sr:"pesak",
sq:"rërë"},
mud:{sr:"blato",
sq:"baltë"},
plain:{sr:"ravnica",
sq:"fushë"},
island:{sr:"ostrvo",
sq:"ishull"},
shore:{sr:"obala",
sq:"breg"},
water:{sr:"voda",
sq:"ujë"},
wave:{sr:"talas",
sq:"valë"},
swamp:{sr:"močvara",
sq:"moçal"},
waterfall:{sr:"vodopad",
sq:"ujëvarë"},
sky:{sr:"nebo",
sq:"qiell"},
sun:{sr:"sunce",
sq:"diell"},
moon:{sr:"mesec",
sq:"hënë"},
star:{sr:"zvezda",
sq:"yll"},
lightning:{sr:"munja",
sq:"vetëtimë"},
thunder:{sr:"grom",
sq:"bubullimë"},
storm:{sr:"oluja",
sq:"stuhi"},
rainbow:{sr:"duga",
sq:"ylber"},
wind:{sr:"vetar",
sq:"erë"},
cloud:{sr:"oblak",
sq:"re"},
fog:{sr:"magla",
sq:"mjegull"},
rain:{sr:"kiša",
sq:"shi"},
snow:{sr:"sneg",
sq:"borë"},
ice:{sr:"led",
sq:"akull"},
fire:{sr:"vatra",
sq:"zjarr"},
smoke:{sr:"dim",
sq:"tym"},
branch:{sr:"grana",
sq:"degë"},
oak:{sr:"hrast",
sq:"lis"},
beech:{sr:"bukva",
sq:"ah"},
birch:{sr:"breza",
sq:"mështekën"},
pine:{sr:"bor",
sq:"pishë"},
fir:{sr:"jela",
sq:"bredh"},
bark:{sr:"kora drveta",
sq:"lëvore"},
mushroom:{sr:"pečurka",
sq:"kërpudhë"},
nettle:{sr:"kopriva",
sq:"hithër"},
seed:{sr:"seme",
sq:"farë"},
mouse:{sr:"miš",
sq:"mi"},
crow:{sr:"vrana",
sq:"sorrë"},
dove:{sr:"golub",
sq:"pëllumb"},
owl:{sr:"sova",
sq:"buf"},
hawk:{sr:"jastreb",
sq:"skifter"},
nest:{sr:"gnezdo",
sq:"fole"},
insect:{sr:"insekt",
sq:"insekt"},
louse:{sr:"vaš",
sq:"morr"},
flea:{sr:"buva",
sq:"plesht"},
ant:{sr:"mrav",
sq:"milingonë"},
spider:{sr:"pauk",
sq:"merimangë"},
bee:{sr:"pčela",
sq:"bletë"},
"fly (insect)":{sr:"muva",
sq:"mizë"},
mosquito:{sr:"komarac",
sq:"mushkonjë"},
worm:{sr:"crv",
sq:"krimb"},
butterfly:{sr:"leptir",
sq:"flutur"},
frog:{sr:"žaba",
sq:"bretkosë"},
lizard:{sr:"gušter",
sq:"hardhucë"},
turtle:{sr:"kornjača",
sq:"breshkë"},
snail:{sr:"puž",
sq:"kërmill"},
wing:{sr:"krilo",
sq:"krah (zogu)"},
feather:{sr:"pero",
sq:"pendë"},
body:{sr:"telo",
sq:"trup"},
head:{sr:"glava",
sq:"kokë"},
hair:{sr:"kosa",
sq:"flokë"},
beard:{sr:"brada",
sq:"mjekër"},
face:{sr:"lice",
sq:"fytyrë"},
forehead:{sr:"čelo",
sq:"ballë"},
cheek:{sr:"obraz",
sq:"faqe"},
chin:{sr:"brada (deo lica)",
sq:"mjekër (pjesë e fytyrës)"},
eye:{sr:"oko",
sq:"sy"},
eyebrow:{sr:"obrva",
sq:"vetull"},
ear:{sr:"uho",
sq:"vesh"},
nose:{sr:"nos",
sq:"hundë"},
mouth:{sr:"usta",
sq:"gojë"},
lip:{sr:"usna",
sq:"buzë"},
tongue:{sr:"jezik",
sq:"gjuhë"},
tooth:{sr:"zub",
sq:"dhëmb"},
neck:{sr:"vrat",
sq:"qafë"},
throat:{sr:"grlo",
sq:"fyt"},
shoulder:{sr:"rame",
sq:"sup"},
arm:{sr:"ruka",
sq:"krah"},
elbow:{sr:"lakat",
sq:"bërryl"},
hand:{sr:"šaka",
sq:"dorë"},
finger:{sr:"prst",
sq:"gisht"},
fingernail:{sr:"nokat",
sq:"thua"},
leg:{sr:"noga",
sq:"këmbë"},
knee:{sr:"koleno",
sq:"gju"},
foot:{sr:"stopalo",
sq:"shputë"},
toe:{sr:"nožni prst",
sq:"gisht i këmbës"},
back:{sr:"leđa",
sq:"shpinë"},
chest:{sr:"grudi",
sq:"gjoks"},
breast:{sr:"dojka",
sq:"gji"},
belly:{sr:"trbuh",
sq:"bark"},
navel:{sr:"pupak",
sq:"kërthizë"},
stomach:{sr:"želudac",
sq:"stomak"},
skin:{sr:"koža",
sq:"lëkurë"},
flesh:{sr:"meso (na telu)",
sq:"mish (i trupit)"},
blood:{sr:"krv",
sq:"gjak"},
bone:{sr:"kost",
sq:"kockë"},
brain:{sr:"mozak",
sq:"tru"},
heart:{sr:"srce",
sq:"zemër"},
lung:{sr:"pluća",
sq:"mushkëri"},
liver:{sr:"jetra",
sq:"mëlçi"},
kidney:{sr:"bubreg",
sq:"veshkë"},
food:{sr:"hrana",
sq:"ushqim"},
"to eat":{sr:"jesti",
sq:"ha"},
"to drink":{sr:"piti",
sq:"pi"},
hunger:{sr:"glad",
sq:"uri"},
thirst:{sr:"žeđ",
sq:"etje"},
"to cook":{sr:"kuvati",
sq:"gatuaj"},
"to boil":{sr:"ključati",
sq:"ziej"},
"to bake":{sr:"peći",
sq:"pjek"},
bread:{sr:"hleb",
sq:"bukë"},
dough:{sr:"testo",
sq:"brumë"},
flour:{sr:"brašno",
sq:"miell"},
meat:{sr:"meso",
sq:"mish"},
soup:{sr:"čorba",
sq:"supë"},
egg:{sr:"jaje",
sq:"vezë"},
salt:{sr:"so",
sq:"kripë"},
honey:{sr:"med",
sq:"mjaltë"},
sugar:{sr:"šećer",
sq:"sheqer"},
oil:{sr:"ulje",
sq:"vaj"},
fat:{sr:"mast",
sq:"dhjamë"},
vegetables:{sr:"povrće",
sq:"perime"},
bean:{sr:"pasulj",
sq:"fasule"},
fruit:{sr:"voće",
sq:"frutë"},
grape:{sr:"grožđe",
sq:"rrush"},
nut:{sr:"orah",
sq:"arrë"},
apple:{sr:"jabuka",
sq:"mollë"},
berry:{sr:"bobica",
sq:"kokërr (frut)"},
onion:{sr:"luk",
sq:"qepë"},
wine:{sr:"vino",
sq:"verë (pije)"},
beer:{sr:"pivo",
sq:"birrë"},
pot:{sr:"lonac",
sq:"tenxhere"},
kettle:{sr:"kazan",
sq:"kazan"},
bowl:{sr:"činija",
sq:"tas"},
cup:{sr:"šolja",
sq:"filxhan"},
spoon:{sr:"kašika",
sq:"lugë"},
knife:{sr:"nož",
sq:"thikë"},
mill:{sr:"mlin",
sq:"mulli"},
wheat:{sr:"pšenica",
sq:"grurë"},
barley:{sr:"ječam",
sq:"elb"},
maize:{sr:"kukuruz",
sq:"misër"},
grain:{sr:"žito",
sq:"drithë"},
house:{sr:"kuća",
sq:"shtëpi"},
tent:{sr:"šator",
sq:"tendë"},
yard:{sr:"dvorište",
sq:"oborr"},
room:{sr:"soba",
sq:"dhomë"},
door:{sr:"vrata",
sq:"derë"},
lock:{sr:"brava",
sq:"bravë"},
key:{sr:"ključ",
sq:"çelës"},
window:{sr:"prozor",
sq:"dritare"},
floor:{sr:"pod",
sq:"dysheme"},
wall:{sr:"zid",
sq:"mur"},
roof:{sr:"krov",
sq:"çati"},
hearth:{sr:"ognjište",
sq:"vatër"},
stove:{sr:"peć",
sq:"sobë"},
ladder:{sr:"merdevine",
sq:"shkallë"},
bed:{sr:"krevet",
sq:"shtrat"},
pillow:{sr:"jastuk",
sq:"jastëk"},
blanket:{sr:"ćebe",
sq:"batanije"},
chair:{sr:"stolica",
sq:"karrige"},
table:{sr:"sto",
sq:"tryezë"},
lamp:{sr:"lampa",
sq:"llambë"},
candle:{sr:"sveća",
sq:"qiri"},
beam:{sr:"greda",
sq:"tra"},
brick:{sr:"cigla",
sq:"tullë"},
fence:{sr:"ograda",
sq:"gardh"},
clothes:{sr:"odeća",
sq:"rroba"},
shirt:{sr:"košulja",
sq:"këmishë"},
coat:{sr:"kaput",
sq:"pallto"},
trousers:{sr:"pantalone",
sq:"pantallona"},
shoe:{sr:"cipela",
sq:"këpucë"},
boot:{sr:"čizma",
sq:"çizme"},
hat:{sr:"kapa",
sq:"kapelë"},
belt:{sr:"pojas",
sq:"rrip"},
needle:{sr:"igla",
sq:"gjilpërë"},
thread:{sr:"konac",
sq:"pe"},
ring:{sr:"prsten",
sq:"unazë"},
earring:{sr:"minđuša",
sq:"vath"},
comb:{sr:"češalj",
sq:"krehër"},
mirror:{sr:"ogledalo",
sq:"pasqyrë"},
soap:{sr:"sapun",
sq:"sapun"},
cloth:{sr:"tkanina",
sq:"pëlhurë"},
time:{sr:"vreme",
sq:"kohë"},
day:{sr:"dan",
sq:"ditë"},
night:{sr:"noć",
sq:"natë"},
dawn:{sr:"zora",
sq:"agim"},
morning:{sr:"jutro",
sq:"mëngjes"},
noon:{sr:"podne",
sq:"mesditë"},
evening:{sr:"veče",
sq:"mbrëmje"},
today:{sr:"danas",
sq:"sot"},
tomorrow:{sr:"sutra",
sq:"nesër"},
yesterday:{sr:"juče",
sq:"dje"},
week:{sr:"nedelja",
sq:"javë"},
month:{sr:"mesec (kalendarski)",
sq:"muaj"},
year:{sr:"godina",
sq:"vit"},
winter:{sr:"zima",
sq:"dimër"},
"spring (season)":{sr:"proleće",
sq:"pranverë"},
summer:{sr:"leto",
sq:"verë"},
autumn:{sr:"jesen",
sq:"vjeshtë"},
hour:{sr:"sat",
sq:"orë"},
father:{sr:"otac",
sq:"baba"},
mother:{sr:"majka",
sq:"nënë"},
parents:{sr:"roditelji",
sq:"prindër"},
grandfather:{sr:"deda",
sq:"gjysh"},
grandmother:{sr:"baba",
sq:"gjyshe"},
son:{sr:"sin",
sq:"djalë, bir"},
daughter:{sr:"ćerka",
sq:"vajzë, bijë"},
child:{sr:"dete",
sq:"fëmijë"},
brother:{sr:"brat",
sq:"vëlla"},
"older brother":{sr:"stariji brat",
sq:"vëlla i madh"},
"younger brother":{sr:"mlađi brat",
sq:"vëlla i vogël"},
sister:{sr:"sestra",
sq:"motër"},
"older sister":{sr:"starija sestra",
sq:"motër e madhe"},
"younger sister":{sr:"mlađa sestra",
sq:"motër e vogël"},
grandson:{sr:"unuk",
sq:"nip"},
granddaughter:{sr:"unuka",
sq:"mbesë"},
grandchild:{sr:"unuče",
sq:"nip ose mbesë"},
uncle:{sr:"stric, ujak",
sq:"xhaxha, dajë"},
"uncle (mother's brother)":{sr:"ujak",
sq:"dajë"},
"uncle (father's brother)":{sr:"stric",
sq:"xhaxha"},
aunt:{sr:"tetka",
sq:"hallë, teze"},
"aunt (mother's sister)":{sr:"tetka (majčina sestra)",
sq:"teze"},
"aunt (father's sister)":{sr:"tetka (očeva sestra)",
sq:"hallë"},
nephew:{sr:"nećak",
sq:"nip"},
niece:{sr:"nećaka",
sq:"mbesë"},
cousin:{sr:"rođak",
sq:"kushëri"},
husband:{sr:"muž",
sq:"burrë"},
wife:{sr:"žena",
sq:"grua"},
"father-in-law":{sr:"svekar, tast",
sq:"vjehërr"},
"father-in-law (husband's father)":{sr:"svekar",
sq:"vjehërr (babai i burrit)"},
"father-in-law (wife's father)":{sr:"tast",
sq:"vjehërr (babai i gruas)"},
"mother-in-law":{sr:"svekrva, tašta",
sq:"vjehrrë"},
"mother-in-law (husband's mother)":{sr:"svekrva",
sq:"vjehrrë (nëna e burrit)"},
"mother-in-law (wife's mother)":{sr:"tašta",
sq:"vjehrrë (nëna e gruas)"},
"son-in-law":{sr:"zet",
sq:"dhëndër"},
"son-in-law (or sister's husband)":{sr:"zet (ili sestrin muž)",
sq:"dhëndër (edhe burri i motrës)"},
"daughter-in-law":{sr:"snaha",
sq:"nuse"},
"daughter-in-law (or brother's wife)":{sr:"snaha (ili bratova žena)",
sq:"nuse (edhe gruaja e vëllait)"},
stepfather:{sr:"očuh",
sq:"njerk"},
stepmother:{sr:"maćeha",
sq:"njerkë"},
family:{sr:"porodica",
sq:"familje"},
relatives:{sr:"rodbina",
sq:"të afërm"},
cattle:{sr:"goveda",
sq:"gjedhë"},
livestock:{sr:"stoka",
sq:"bagëti"},
cow:{sr:"krava",
sq:"lopë"},
bull:{sr:"bik",
sq:"dem"},
ox:{sr:"vo",
sq:"ka"},
calf:{sr:"tele",
sq:"viç"},
herd:{sr:"stado",
sq:"tufë"},
"to herd":{sr:"čuvati stado",
sq:"ruaj tufën"},
herdsman:{sr:"pastir",
sq:"bari"},
shepherd:{sr:"čoban",
sq:"çoban"},
pasture:{sr:"pašnjak",
sq:"kullotë"},
horse:{sr:"konj",
sq:"kalë"},
sheep:{sr:"ovca",
sq:"dele"},
goat:{sr:"koza",
sq:"dhi"},
pig:{sr:"svinja",
sq:"derr"},
"herd (of horses)":{sr:"krdo (konja)",
sq:"tufë (kuajsh)"},
"horned cattle":{sr:"rogata stoka",
sq:"bagëti me brirë"},
"stud bull":{sr:"priplodni bik",
sq:"dem mbarështimi"},
"cow (children's word)":{sr:"krava (dečja reč)",
sq:"lopë (fjalë fëmijësh)"},
"young cow (about 3 years)":{sr:"junica (oko 3 godine)",
sq:"mëshqerrë (rreth 3 vjeç)"},
mountain:{sr:"planina",
sq:"mal"},
hill:{sr:"brdo",
sq:"kodër"},
cliff:{sr:"litica",
sq:"shkrep"},
valley:{sr:"dolina",
sq:"luginë"},
cave:{sr:"pećina",
sq:"shpellë"},
stone:{sr:"kamen",
sq:"gur"},
rock:{sr:"stena",
sq:"shkëmb"},
field:{sr:"polje",
sq:"fushë"},
meadow:{sr:"livada",
sq:"livadh"},
sea:{sr:"more",
sq:"det"},
lake:{sr:"jezero",
sq:"liqen"},
river:{sr:"reka",
sq:"lumë"},
creek:{sr:"potok",
sq:"përrua"},
brook:{sr:"potok",
sq:"përrua"},
stream:{sr:"tok",
sq:"rrjedhë"},
spring:{sr:"izvor",
sq:"burim"},
well:{sr:"bunar",
sq:"pus"},
forest:{sr:"šuma",
sq:"pyll"},
woods:{sr:"šuma",
sq:"pyll"},
tree:{sr:"drvo",
sq:"pemë"},
flower:{sr:"cvet",
sq:"lule"},
grass:{sr:"trava",
sq:"bar"},
leaf:{sr:"list",
sq:"gjethe"},
plant:{sr:"biljka",
sq:"bimë"},
root:{sr:"koren",
sq:"rrënjë"},
animal:{sr:"životinja",
sq:"kafshë"},
wolf:{sr:"vuk",
sq:"ujk"},
bear:{sr:"medved",
sq:"ari"},
fox:{sr:"lisica",
sq:"dhelpër"},
deer:{sr:"jelen",
sq:"dre"},
hare:{sr:"zec",
sq:"lepur"},
eagle:{sr:"orao",
sq:"shqiponjë"},
bird:{sr:"ptica",
sq:"zog"},
snake:{sr:"zmija",
sq:"gjarpër"},
fish:{sr:"riba",
sq:"peshk"},
person:{
sq:"njeri",
sr:"čovek"},
aged:{
sq:"plak",
sr:"star"},
"to be born":{
sq:"lind",
sr:"roditi se"},
"to bring up":{
sq:"rris",
sr:"odgajati"},
"to live":{
sr:"živeti",
sq:"jetoj"},
"to die":{
sq:"vdes",
sr:"umreti"},
"to kill":{
sq:"vras",
sr:"ubiti"},
alive:{
sq:"gjallë",
sr:"živ"},
death:{
sq:"mortje",
sr:"smrt"},
life:{
sq:"jetë",
sr:"život"},
"bad luck":{
sq:"fatkeqësi",
sr:"nesreća"},
true:{
sq:"vërtetë",
sr:"istinit"},
good:{
sq:"mirë",
sr:"dobar"},
bad:{
sq:"keq",
sr:"loš"},
"to praise":{
sq:"lëvdoj",
sr:"hvaliti"},
beautiful:{
sq:"bukur",
sr:"lep"},
clever:{
sq:"mençur",
sr:"vešt"},
diligent:{
sq:"zellshëm"},
evil:{
sq:"keq"},
skilful:{
sq:"aftë"},
"to laugh":{
sq:"qesh",
sr:"smejati se"},
"to play":{
sq:"loz",
sr:"igrati se"},
love:{
sr:"voleti"},
"to kiss":{
sq:"puth",
sr:"ljubiti"},
sorrow:{
sq:"brengë",
sr:"tuga"},
"to cry":{
sq:"qaj",
sr:"plakati"},
"tear (from eye)":{
sq:"lot",
sr:"suza"},
"to groan":{
sq:"rënkoj",
sr:"stenjati"},
dear:{
sq:"dashur",
sr:"drag"},
desire:{
sq:"epsh",
sr:"želja"},
gentle:{
sq:"butë",
sr:"nežan"},
happiness:{
sq:"lumturi",
sr:"sreća"},
joy:{
sq:"gaz",
sr:"radost"},
laughter:{
sq:"qeshje",
sr:"smeh"},
merry:{
sq:"gëzuar",
sr:"veseo"},
sad:{
sq:"trishtuar",
sr:"tužan"},
"to annoy":{
sq:"zemëroj"},
"to be afraid":{
sq:"kam frikë",
sr:"bojati se"},
"to be annoyed":{
sq:"bëhem verem"},
"to like":{
sq:"dua",
sr:"voleti"},
king:{
sq:"mbret",
sr:"kralj"},
master:{
sq:"mjeshtër",
sr:"gospodar"},
boss:{
sq:"shef",
sr:"šef"},
"people (persons)":{
sq:"botë",
sr:"ljudi"},
worker:{
sq:"punëtor",
sr:"radnik"},
friend:{
sq:"mik",
sr:"prijatelj"},
enemy:{
sq:"armik",
sr:"neprijatelj"},
help:{
sq:"ndihmë",
sr:"pomoći"},
"to hinder":{
sq:"pengoj",
sr:"smetati"},
"to meet":{
sq:"ndesh",
sr:"sresti"},
companion:{
sq:"shok"},
gift:{
sq:"dhuratë",
sr:"poklon"},
"to invite":{
sq:"ftoj",
sr:"pozvati"},
"to visit":{
sq:"vizitoj",
sr:"posetiti"},
flock:{
sq:"kope"},
"crane (bird)":{
sq:"lejlek"},
cuckoo:{
sq:"qyqe",
sr:"kukavica"},
swan:{
sq:"mjellmë"},
elk:{
sq:"dre brilopatë",
sr:"los"},
lair:{
sq:"strofkë"},
squirrel:{
sq:"ketër",
sr:"veverica"},
cat:{
sq:"mace",
sr:"mačka"},
perch:{
sq:"purtekë"},
pike:{
sq:"mlysh",
sr:"štuka"},
claw:{
sq:"kthetër",
sr:"kandža"},
paw:{
sq:"thua",
sr:"šapa"},
swarm:{
sq:"luzmë"},
"to carry":{
sq:"mbaj",
sr:"nositi"},
"to bring":{
sq:"sjell",
sr:"doneti"},
"to send":{
sq:"dërgoj",
sr:"slati"},
"to lead":{
sq:"çoj",
sr:"voditi"},
"to drive":{
sq:"shkoj",
sr:"voziti"},
"to push":{
sq:"shtyj",
sr:"gurati"},
"to hunt":{
sq:"gjuaj",
sr:"loviti"},
"to shoot":{
sq:"shtie",
sr:"ustreliti"},
trap:{
sq:"kurth",
sr:"klopka"},
net:{
sq:"rrjetë",
sr:"mreža"},
noose:{
sq:"nyjë",
sr:"omča"},
"to fish":{
sq:"peshkoj"},
leash:{
sq:"rrip",
sr:"povodac"},
"to bark":{
sq:"leh"},
"to feed":{
sq:"grazhdoj"},
"to roar":{
sq:"gjëmoj"},
"to sting":{
sq:"ther"},
"to water":{
sq:"ujis"},
world:{
sq:"botë",
sr:"svet"},
"earth (soil)":{
sq:"dhe",
sr:"zemlja"},
dust:{
sq:"pluhur",
sr:"prah"},
foam:{
sq:"shkumë",
sr:"pena"},
stick:{
sq:"dajak",
sr:"štap"},
"light (illumination)":{
sq:"dritë",
sr:"svetlo"},
shadow:{
sq:"hije",
sr:"sen"},
bright:{
sq:"me dritë",
sr:"svetao"},
air:{
sq:"ajër",
sr:"vazduh"},
weather:{
sq:"mot",
sr:"vreme"},
ashes:{
sq:"hi",
sr:"pepeo"},
"to burn (intransitive)":{
sq:"digjem",
sr:"goreti"},
"to kindle":{
sq:"ndez",
sr:"paliti"},
"tree trunk":{
sq:"trung",
sr:"stablo"},
"bark (tree)":{
sq:"lëvore",
sr:"kora"},
"to grow":{
sq:"rritem",
sr:"rasti"},
"to flow":{
sq:"rrjedh",
sr:"teći"},
"to sink":{
sq:"humboj",
sr:"potopiti"},
"to swim":{
sq:"notoj",
sr:"plivati"},
"to dive":{
sq:"zhytem",
sr:"roniti"},
"dark (colour)":{
sq:"errët",
sr:"taman"},
white:{
sq:"bardhë",
sr:"beo"},
black:{
sq:"i zi",
sr:"crn"},
red:{
sq:"kuq",
sr:"crven"},
blue:{
sq:"blu",
sr:"plav"},
green:{
sq:"blertë",
sr:"zelen"},
yellow:{
sq:"verdhë",
sr:"žut"},
hard:{
sq:"fortë",
sr:"tvrd"},
soft:{
sq:"butë",
sr:"mek"},
smooth:{
sq:"rrafshët",
sr:"gladak"},
sharp:{
sq:"mprehtë",
sr:"oštar"},
blunt:{
sq:"topitur",
sr:"tup"},
heavy:{
sq:"rëndë",
sr:"težak"},
wet:{
sq:"lagur",
sr:"mokar"},
dry:{
sq:"thatë",
sr:"suh"},
hot:{
sq:"nxehtë",
sr:"vruć"},
warm:{
sq:"ngrohtë",
sr:"topao"},
cold:{
sq:"ftohtë",
sr:"hladan"},
clean:{
sq:"dëlirë",
sr:"čist"},
dirty:{
sq:"ndyrë",
sr:"prljav"},
jaw:{
sq:"nofull",
sr:"vilica"},
vein:{
sq:"venë",
sr:"vena"},
"back (body)":{
sq:"kurriz",
sr:"ledja"},
"palm (of hand)":{
sq:"pëllëmbë",
sr:"dlan"},
thigh:{
sq:"kofshë",
sr:"butina"},
heel:{
sq:"thembër",
sr:"peta"},
footprint:{
sq:"gjurmë",
sr:"otisak stopala"},
"to breathe":{
sq:"marr frymë",
sr:"disati"},
"to cough":{
sq:"kollitem",
sr:"kašljati"},
"to bite":{
sq:"kafshoj",
sr:"gristi"},
"to lick":{
sq:"lëpij",
sr:"lizati"},
"to shiver":{
sq:"trembem",
sr:"drhtati"},
"to bathe":{
sq:"lahem",
sr:"kupati"},
"to sleep":{
sq:"fle",
sr:"spavati"},
"to wake up":{
sq:"zgjohem",
sr:"buditi se"},
strong:{
sq:"fortë",
sr:"jak"},
weak:{
sq:"dobët",
sr:"slab"},
sick:{
sq:"sëmurë",
sr:"bolestan"},
fever:{
sq:"ethe",
sr:"groznica"},
wound:{
sq:"plagë",
sr:"rana"},
doctor:{
sq:"mjek",
sr:"lekar"},
medicine:{
sq:"ilaç",
sr:"lek"},
"rest (noun)":{
sr:"odmoriti se"},
lazy:{
sq:"dembel",
sr:"lenj"},
deaf:{
sq:"shurdhër",
sr:"gluv"},
blind:{
sq:"qorr",
sr:"slep"},
naked:{
sq:"lakuriq",
sr:"go"},
pain:{
sq:"dhimbje",
sr:"bol"},
"to wrap":{
sq:"mbështjell",
sr:"motati"},
"to lift":{
sq:"ngre",
sr:"dići"},
"to fall":{
sq:"bie",
sr:"pasti"},
"to throw":{
sq:"hedh",
sr:"baciti"},
"to shake":{
sq:"lëkund",
sr:"tresti"},
"to fly":{
sq:"fluturoj",
sr:"leteti"},
"to blow":{
sq:"fryj",
sr:"duvati"},
"to jump":{
sq:"kërcej",
sr:"skočiti"},
"to dance":{
sq:"kërcej",
sr:"plesati"},
"to walk":{
sq:"eci",
sr:"hodati"},
"to run":{
sq:"vrapoj",
sr:"trčati"},
"to go":{
sq:"eci",
sr:"ići"},
"to come":{
sq:"vij",
sr:"doći"},
"to leave":{
sq:"vete",
sr:"otići"},
"to disappear":{
sq:"zhdukem",
sr:"nestati"},
"to arrive":{
sq:"arrij",
sr:"stići"},
"to put":{
sq:"vë",
sr:"staviti"},
"to sit":{
sq:"rri",
sr:"sedeti"},
"to stand":{
sq:"rri",
sr:"stajati"},
"to stay":{
sq:"mbetem",
sr:"ostati"},
"to taste":{
sq:"provoj",
sr:"okusiti"},
"to hear":{
sq:"dëgjoj",
sr:"čuti"},
"to listen":{
sq:"veshtoj",
sr:"slušati"},
"to see":{
sq:"shoh",
sr:"videti"},
"to touch":{
sq:"rrok",
sr:"dotaći"},
"to feel":{
sq:"ndiej",
sr:"osetiti"},
raw:{
sq:"gjallë",
sr:"sirov"},
ripe:{
sq:"arrirë",
sr:"zreo"},
rotten:{
sr:"truo"},
"to swallow":{
sq:"gëlltis",
sr:"gutati"},
"to scrape":{
sq:"kruaj",
sr:"strugati"},
"to stir":{
sq:"trazoj",
sr:"mešati"},
coal:{
sq:"qymyr"},
"to fry":{
sq:"fërgoj"},
dish:{
sq:"enë",
sr:"zdela"},
"fork (table)":{
sq:"pirun",
sr:"viljuška"},
bucket:{
sq:"kovë",
sr:"kanta"},
lid:{
sq:"kapak",
sr:"poklopac"},
meal:{
sq:"ngrënie",
sr:"jelo"},
mush:{
sq:"qull"},
slice:{
sq:"fetë"},
"to grind":{
sr:"mleti",
sq:"bluaj"},
"peel (of fruit)":{
sq:"lëkurë"},
"fat (grease)":{
sq:"lyrë",
sr:"mast"},
tea:{
sq:"çaj",
sr:"čaj"},
"to dig":{
sq:"gërmoj",
sr:"kopati"},
spade:{
sq:"lopatë",
sr:"ašov"},
shovel:{
sq:"qyrek",
sr:"lopata"},
"to ripen":{
sq:"piqem"},
"well (water)":{
sq:"pus",
sr:"bunar"},
sweet:{
sq:"ëmbël",
sr:"sladak"},
bitter:{
sq:"hidhur",
sr:"gorak"},
sour:{
sq:"thartë",
sr:"kiseo"},
delicious:{
sq:"shijshëm",
sr:"ukusan"},
flavour:{
sq:"shije"},
hungry:{
sq:"uritur",
sr:"gladan"},
"to put on (clothes)":{
sq:"vesh",
sr:"obući"},
collar:{
sq:"jakë",
sr:"kragna"},
button:{
sq:"kopsë",
sr:"dugme"},
scarf:{
sq:"shami",
sr:"šal"},
sleeve:{
sq:"mëngë",
sr:"rukav"},
"to get dressed":{
sq:"vishem"},
"to take off":{
sq:"heq"},
fur:{
sq:"lëkurë",
sr:"krzno"},
leather:{
sq:"lëkurë",
sr:"koža"},
"to dye":{
sq:"ngjyej",
sr:"farbati"},
bag:{
sq:"çantë",
sr:"torba"},
pouch:{
sq:"qese"},
sack:{
sq:"thes"},
"to spin":{
sq:"dredh",
sr:"presti"},
"to sew":{
sq:"qep",
sr:"šiti"},
"to knit":{
sq:"thur"},
"finger ring":{
sq:"unazë",
sr:"prsten"},
cap:{
sq:"kësulë"},
ribbon:{
sq:"shirit"},
towel:{
sq:"peshqir",
sr:"peškir"},
"to comb":{
sq:"kreh"},
"to decorate":{
sq:"hijeshoj"},
"to dwell":{
sq:"banoj",
sr:"živeti"},
box:{
sq:"kuti",
sr:"kutija"},
gate:{
sq:"portë"},
shelf:{
sq:"raft",
sr:"polica"},
cradle:{
sq:"djep",
sr:"kolevka"},
doll:{
sq:"kukull"},
picture:{
sq:"tablo",
sr:"slika"},
post:{
sq:"shufër",
sr:"stub"},
board:{
sq:"dërrasë",
sr:"daska"},
broom:{
sq:"fshesë",
sr:"metla"},
"nail (metal)":{
sq:"gozhdë",
sr:"ekser"},
glue:{
sr:"lepilo"},
handle:{
sq:"dorak",
sr:"drška"},
pipe:{
sq:"tub",
sr:"cev"},
"to make":{
sq:"bëj",
sr:"raditi"},
work:{
sq:"punë",
sr:"raditi"},
"to build":{
sq:"ndërtoj",
sr:"graditi"},
"to do":{
sq:"bëj",
sr:"činiti"},
"to mend":{
sq:"ndreq",
sr:"popraviti"},
"to produce":{
sq:"prodhoj",
sr:"proizvoditi"},
"to bend":{
sq:"përkul",
sr:"saviti"},
"to tie":{
sq:"lidh",
sr:"vezati"},
knot:{
sq:"komb",
sr:"čvor"},
strap:{
sq:"rrip"},
string:{
sq:"litar"},
"to cut":{
sq:"pres",
sr:"rezati"},
"to chop":{
sq:"grij",
sr:"seći"},
"to break":{
sq:"thyej",
sr:"lomiti"},
"to tear":{
sq:"çjerr",
sr:"kidati"},
"to hit":{
sq:"godas",
sr:"udariti"},
"to knock":{
sq:"trokas"},
"to sharpen":{
sq:"mpreh"},
"to rub":{
sq:"fërkoj",
sr:"trljati"},
"to pull":{
sq:"tërheq",
sr:"vući"},
"to spread out":{
sq:"lyej",
sr:"raširiti"},
"to hang up":{
sq:"var",
sr:"kačiti"},
"to press":{
sq:"shtyp",
sr:"pritiskati"},
"to pour":{
sq:"mbush",
sr:"liti"},
"to wash":{
sq:"laj",
sr:"prati"},
"to sweep":{
sq:"fshij",
sr:"mesti"},
"to clean":{
sq:"qëroj"},
"to rinse":{
sq:"kulloj"},
"to wipe":{
sq:"fshij",
sr:"brisati"},
gold:{
sq:"ar",
sr:"zlato"},
silver:{
sq:"argjend",
sr:"srebro"},
iron:{
sq:"hekur",
sr:"gvoždje"},
clay:{
sq:"argjilë",
sr:"glina"},
glass:{
sq:"qelq",
sr:"staklo"},
paint:{
sq:"bojë",
sr:"boja"},
"to paint":{
sq:"lyej",
sr:"bojiti"},
"to gather":{
sq:"mbledh",
sr:"sabrati"},
"to pick up":{
sq:"ngre",
sr:"podići"},
"to join":{
sq:"bashkoj",
sr:"sastaviti"},
"to separate":{
sq:"ndahem",
sr:"razdvojiti"},
"to divide":{
sq:"ndaj",
sr:"podeliti"},
"to open":{
sq:"hap",
sr:"otvoriti"},
"to close":{
sq:"mbyll",
sr:"zatvoriti"},
"to cover":{
sq:"mbuloj",
sr:"pokriti"},
"to hide":{
sq:"fsheh",
sr:"sakriti"},
"end (extremity)":{
sq:"skaj",
sr:"kraj"},
side:{
sq:"anë",
sr:"strana"},
middle:{
sq:"mes",
sr:"sredina"},
big:{
sq:"madh",
sr:"velik"},
small:{
sq:"vogël",
sr:"mali"},
long:{
sq:"gjatë",
sr:"dug"},
short:{
sq:"shkurtër",
sr:"kratak"},
wide:{
sq:"gjerë",
sr:"širok"},
narrow:{
sq:"ngushtë",
sr:"uzak"},
thick:{
sq:"trashë",
sr:"debeo"},
thin:{
sq:"hollë",
sr:"tanak"},
flat:{
sq:"sheshtë",
sr:"pljosnat"},
straight:{
sr:"prav"},
hook:{
sq:"grep",
sr:"kuka"},
corner:{
sq:"qoshe",
sr:"ugao"},
cross:{
sq:"kryq",
sr:"krst"},
round:{
sq:"rrumbullakët",
sr:"okrugao"},
circle:{
sq:"qark",
sr:"krug"},
line:{
sq:"vijë",
sr:"linija"},
hole:{
sq:"vrimë",
sr:"rupa"},
full:{
sq:"plotë",
sr:"pun"},
empty:{
sq:"bosh",
sr:"prazan"},
piece:{
sq:"pjesë",
sr:"deo"},
half:{
sq:"gjysmë",
sr:"po"},
distance:{
sq:"largim",
sr:"udaljenost"},
length:{
sq:"gjatësi",
sr:"dužina"},
size:{
sq:"madhësi",
sr:"veličina"},
"to add":{
sq:"shtoj",
sr:"dodati"},
"to fill":{
sq:"mbush"},
weight:{
sq:"peshë",
sr:"težina"},
"right (side)":{
sq:"djathtë",
sr:"desni"},
"left (side)":{
sq:"majtë",
sr:"levi"},
near:{
sq:"afërt",
sr:"blizu"},
far:{
sq:"largët",
sr:"daleko"},
east:{
sq:"lindje",
sr:"istok"},
west:{
sq:"perëndim",
sr:"zapad"},
north:{
sq:"veri",
sr:"sever"},
south:{
sq:"jug",
sr:"jug"},
"to measure":{
sq:"mas",
sr:"meriti"},
one:{
sq:"një",
sr:"jedan"},
two:{
sq:"dy",
sr:"dva"},
three:{
sq:"tre",
sr:"tri"},
four:{
sq:"katër",
sr:"četiri"},
five:{
sq:"pesë",
sr:"pet"},
six:{
sq:"gjashtë",
sr:"šest"},
seven:{
sq:"shtatë",
sr:"sedam"},
eight:{
sq:"tetë",
sr:"osam"},
nine:{
sq:"nëntë",
sr:"devet"},
ten:{
sq:"dhjetë",
sr:"deset"},
eleven:{
sq:"njëmbëdhjetë",
sr:"jedanaest"},
twelve:{
sq:"dymbëdhjetë",
sr:"dvanaest"},
twenty:{
sq:"njëzet",
sr:"dvadeset"},
thirty:{
sq:"tridhjetë",
sr:"trideset"},
forty:{
sq:"dyzet",
sr:"četrdeset"},
fifty:{
sq:"pesëdhjetë",
sr:"pedeset"},
sixty:{
sq:"gjashtëdhjetë",
sr:"šezdeset"},
seventy:{
sq:"shtatëdhjetë",
sr:"sedamdeset"},
eighty:{
sq:"tetëdhjetë",
sr:"osamdeset"},
ninety:{
sq:"nëntëdhjetë",
sr:"devedeset"},
hundred:{
sq:"qind",
sr:"sto"},
thousand:{
sq:"mijë",
sr:"hiljada"},
first:{
sq:"parë",
sr:"prvi"},
"second (ordinal)":{
sq:"dytë",
sr:"drugi"},
third:{
sq:"i tretë",
sr:"treći"},
last:{
sq:"fundit",
sr:"poslednji"},
"to count":{
sq:"njeh",
sr:"brojati"},
age:{
sq:"moshë",
sr:"dob"},
new:{
sq:"i ri",
sr:"nov"},
young:{
sq:"i ri",
sr:"mlad"},
old:{
sq:"vjetër",
sr:"star"},
soon:{
sr:"uskoro"},
"to hurry":{
sq:"nxitoj",
sr:"žuriti"},
"to start":{
sq:"filloj",
sr:"početi"},
"to wait":{
sq:"pres",
sr:"čekati"},
Sunday:{
sq:"diel",
sr:"nedelja"},
Monday:{
sq:"hënë",
sr:"ponedeljak"},
Tuesday:{
sq:"martë",
sr:"utorak"},
Wednesday:{
sq:"mërkurë",
sr:"sreda"},
Thursday:{
sq:"enjte",
sr:"četvrtak"},
Friday:{
sq:"premte",
sr:"petak"},
Saturday:{
sq:"shtunë",
sr:"subota"},
January:{
sq:"janar",
sr:"januar"},
February:{
sq:"shkurt",
sr:"februar"},
March:{
sq:"mars",
sr:"mart"},
April:{
sq:"prill",
sr:"april"},
May:{
sq:"maj",
sr:"maj"},
June:{
sq:"qershor",
sr:"jun"},
July:{
sq:"korrik",
sr:"jul"},
August:{
sq:"gusht",
sr:"avgust"},
boat:{
sq:"barkë",
sr:"čamac"},
oar:{
sq:"rrem",
sr:"veslo"},
"to row":{
sq:"vozis",
sr:"veslati"},
road:{
sq:"rrugë",
sr:"put"},
path:{
sq:"ravë",
sr:"staza"},
bridge:{
sq:"urë",
sr:"most"},
"to own":{
sq:"kam",
sr:"posedovati"},
"to take":{
sq:"marr",
sr:"uzeti"},
"to seize":{
sq:"rrëmbej",
sr:"uhvatiti"},
"to hold":{
sq:"mbaj",
sr:"držati"},
"to get":{
sq:"marr",
sr:"dobiti"},
"to keep":{
sq:"ruaj",
sr:"zadržati"},
"to give":{
sq:"jap",
sr:"dati"},
"to look after":{
sq:"ruaj",
sr:"čuvati"},
"to save":{
sq:"shpëtoj",
sr:"spasti"},
"to destroy":{
sq:"prish",
sr:"uništiti"},
"to seek":{
sq:"kërkoj",
sr:"tražiti"},
"to find":{
sq:"gjej",
sr:"naći"},
"to lose":{
sq:"humb",
sr:"gubiti"},
"to work":{
sq:"punoj",
sr:"raditi"},
money:{
sq:"para",
sr:"novac"},
rich:{
sq:"pasur",
sr:"bogat"},
poor:{
sq:"varfër",
sr:"siromašan"},
stingy:{
sq:"kurnac",
sr:"pohlepan"},
"to pay":{
sq:"paguaj",
sr:"platiti"},
"to buy":{
sq:"blej",
sr:"kupiti"},
"to sell":{
sq:"shes",
sr:"prodati"},
shop:{
sq:"dyqan",
sr:"prodavnica"},
price:{
sq:"çmim",
sr:"cena"},
expensive:{
sq:"shtrenjtë",
sr:"skup"},
cheap:{
sq:"lirë",
sr:"jeftin"},
wealth:{
sq:"kamje",
sr:"bogatstvo"},
noise:{
sq:"tingull",
sr:"zvuk"},
silence:{
sq:"qetësi",
sr:"tišina"},
game:{
sq:"lojë",
sr:"igra"},
song:{
sq:"këngë",
sr:"pesma"},
spirit:{
sq:"frymë",
sr:"duh"},
mind:{
sq:"mend",
sr:"um"},
"to think":{
sq:"mendoj",
sr:"misliti"},
"to understand":{
sq:"marr vesh",
sr:"razumeti"},
"to know":{
sq:"di",
sr:"znati"},
foolish:{
sq:"teveqel",
sr:"lud"},
"to learn":{
sq:"mësoj",
sr:"učiti"},
"to teach":{
sq:"arsej",
sr:"učiti"},
teacher:{
sq:"mësues",
sr:"učitelj"},
"to remember":{
sq:"kujtoj",
sr:"setiti se"},
"to forget":{
sq:"harroj",
sr:"zaboraviti"},
"to try":{
sq:"mundohem",
sr:"pokušati"},
memory:{
sq:"kujtesë",
sr:"sećanje"},
thought:{
sq:"ide",
sr:"misao"},
"to notice":{
sq:"vërej",
sr:"primetiti"},
truth:{
sq:"vërtetë",
sr:"istina"},
voice:{
sq:"zë",
sr:"glas"},
"to sing":{
sq:"këndoj",
sr:"pevati"},
"to shout":{
sq:"bërtas",
sr:"vikati"},
"to whistle":{
sq:"fishkëllej",
sr:"zviždati"},
"to howl":{
sq:"ulërij",
sr:"urlati"},
"to speak":{
sq:"flas",
sr:"govoriti"},
"to say":{
sq:"them",
sr:"kazati"},
"to tell a story":{
sq:"rrëfej",
sr:"pričati"},
language:{
sq:"gjuhë",
sr:"jezik"},
word:{
sq:"fjalë",
sr:"reč"},
name:{
sq:"emër",
sr:"ime"},
"to ask (a question)":{
sq:"pyes",
sr:"pitati"},
"to request":{
sq:"lus",
sr:"moliti"},
"to promise":{
sq:"premtoj",
sr:"obećati"},
"to summon":{
sq:"thërras",
sr:"zvati"},
"to call (name)":{
sq:"quaj",
sr:"zvati"},
"to boast":{
sq:"mburrem",
sr:"hvaliti se"},
"call (cry)":{
sq:"thirrmë",
sr:"povik"},
"fairy tale":{
sq:"përrallë",
sr:"bajka"},
message:{
sq:"lajm",
sr:"poruka"},
news:{
sq:"risi",
sr:"vesti"},
story:{
sq:"tregim",
sr:"priča"},
"to chat":{
sq:"bisedoj"},
"to talk":{
sq:"fjalos",
sr:"razgovarati"},
"to translate":{
sq:"përkthej",
sr:"prevesti"},
"to write":{
sq:"shkruaj",
sr:"pisati"},
"to read":{
sq:"lexoj",
sr:"čitati"},
book:{
sq:"libër",
sr:"knjiga"},
"letter (message)":{
sq:"letër",
sr:"pismo"},
newspaper:{
sq:"gazetë",
sr:"novine"},
country:{
sq:"vend",
sr:"zemlja"},
town:{
sq:"qytet",
sr:"grad"},
village:{
sq:"fshat",
sr:"selo"},
"people (nation)":{
sq:"popull",
sr:"narod"},
"to rule":{
sq:"zotëroj",
sr:"vladati"},
border:{
sq:"kufi",
sr:"granica"},
"to fight":{
sr:"boriti se",
sq:"luftoj"},
war:{
sq:"luftë",
sr:"rat"},
bow:{
sq:"hark",
sr:"luk"},
arrow:{
sq:"shigjetë",
sr:"strela"},
gun:{
sq:"pushkë",
sr:"puška"},
"to defend":{
sq:"mbroj",
sr:"braniti"},
"fight (noun)":{
sq:"luftim",
sr:"borba"},
"to beat":{
sq:"rrah",
sr:"tući"},
"to guard":{
sq:"ruaj",
sr:"čuvati"},
"to protect":{
sq:"ruaj",
sr:"zaštititi"},
"to win":{
sq:"fitoj",
sr:"pobediti"},
"to steal":{
sq:"vjedh",
sr:"krasti"},
"to deceive":{
sq:"mashtroj",
sr:"prevariti"},
dirt:{
sq:"baltë",
sr:"prljavština"},
moor:{
sq:"kënetë"},
summit:{
sq:"kulm",
sr:"vrh"},
coast:{
sq:"anëdet",
sr:"obala"},
current:{
sq:"rrymë",
sr:"struja"},
drop:{
sq:"pikë",
sr:"kapljica"},
"source (of a river)":{
sq:"krua",
sr:"izvor"},
"wood (material)":{
sq:"dru",
sr:"drvo"},
"to thunder":{
sq:"gjëmoj"},
chill:{
sq:"të ftohtë"},
frost:{
sq:"ngricë",
sr:"mraz"},
hoarfrost:{
sq:"cikmë",
sr:"inje"},
"to melt":{
sq:"shkrij"},
"to thaw":{
sq:"shkrij"},
heat:{
sq:"vapë",
sr:"vrućina"},
spark:{
sq:"xixë"},
limb:{
sq:"degë",
sr:"grana"},
twig:{
sq:"bisk",
sr:"grančica"},
willow:{
sq:"shelg",
sr:"vrba"},
"to stream":{
sq:"derdh",
sr:"strujati"},
grey:{
sq:"hirtë",
sr:"siv"},
nape:{
sq:"arrëz",
sr:"potiljak"},
moustache:{
sq:"mustaqe",
sr:"brk"},
sinew:{
sq:"dell"},
"fat (person)":{
sq:"dhjamur"},
slim:{
sq:"hollë",
sr:"vitak"},
breath:{
sq:"frymë",
sr:"dah"},
dream:{
sq:"ëndërr",
sr:"san"},
sleep:{
sq:"gjumë",
sr:"san"},
"to fall asleep":{
sq:"bie të fle"},
"to get tired":{
sq:"lodhem"},
"to get up":{
sq:"çohem",
sr:"ustati"},
"to wake":{
sq:"zgjoj",
sr:"probuditi"},
illness:{
sq:"sëmundje",
sr:"bolest"},
"to ache":{
sq:"dhemb"},
"to fall ill":{
sq:"bie i sëmurë"},
"to recover":{
sq:"shërohem",
sr:"oporaviti se"},
"to kick":{
sq:"shtyj"},
bundle:{
sq:"deng",
sr:"zavežljaj"},
heap:{
sq:"grumbull",
sr:"hrpa"},
height:{
sq:"lartësi",
sr:"visina"},
row:{
sq:"radhë",
sr:"red"},
"to decrease":{
sq:"pakësohem",
sr:"smanjiti se"},
"to increase":{
sq:"shtohem",
sr:"povećati se"},
now:{
sr:"sad"},
"end (of time)":{
sq:"fund",
sr:"kraj"},
September:{
sq:"shtator",
sr:"septembar"},
"young man":{
sr:"mladić",
sq:"djalë"},
"young woman":{
sr:"devojka"},
offspring:{
sr:"dete",
sq:"pasardhës"},
"mother's brother":{
sr:"ujak",
sq:"dajë"},
"father's brother":{
sr:"stric",
sq:"xhaxha"},
"mother's sister":{
sr:"tetka",
sq:"teze"},
"father's sister":{
sr:"tetka",
sq:"hallë"},
"father-in-law (of a man)":{
sr:"tast",
sq:"vjehërr"},
"father-in-law (of a woman)":{
sr:"svekar",
sq:"vjehërr"},
"mother-in-law (of a man)":{
sr:"tašta",
sq:"vjehërr"},
"mother-in-law (of a woman)":{
sr:"svekrva",
sq:"vjehërr"},
"son-in-law (of a man)":{
sr:"zet",
sq:"dhëndër"},
"son-in-law (of a woman)":{
sr:"zet",
sq:"dhëndër"},
"daughter-in-law (of a man)":{
sr:"snaha"},
"daughter-in-law (of a woman)":{
sr:"snaha"},
"to beget":{
sq:"bijoj"},
pregnant:{
sr:"trudna",
sq:"shtatzënë"},
"to conceive":{
sr:"začeti"},
drowned:{
sr:"udavljen",
sq:"mbytur"},
corpse:{
sr:"leš",
sq:"kufomë"},
luck:{
sr:"sreća",
sq:"zar"},
proud:{
sr:"ponosan",
sq:"krenar"},
brave:{
sr:"hrabar"},
fear:{
sr:"strah",
sq:"frikë"},
danger:{
sr:"opasnost",
sq:"rrezik"},
"to lie (tell lies)":{
sr:"lagati",
sq:"gënjej"},
deceit:{
sr:"prevara",
sq:"dredhi"},
"to forgive":{
sr:"oprostiti",
sq:"fal"},
"to blame":{sr:"kriviti",
sq:"fajësoj"},
ugly:{
sr:"ružan"},
greedy:{
sr:"lakom"},
happy:{
sr:"radostan",
sq:"gazmor"},
"to embrace":{
sr:"grliti",
sq:"përqafoj"},
pity:{
sr:"sažaliti",
sq:"mëshirë"},
anger:{
sr:"ljutiti",
sq:"inat"},
envy:{
sr:"zavideti",
sq:"smirë"},
shame:{
sr:"stid",
sq:"turp"},
"to hope":{sq:"shpresoj",
sr:"nadati se"},
clan:{
sr:"pleme",
sq:"fis"},
chief:{
sr:"vodja",
sq:"krye"},
queen:{
sr:"kraljica",
sq:"mbretëreshë"},
nobleman:{
sr:"plemić",
sq:"fisnik"},
citizen:{
sr:"gradjanin",
sq:"shtetas"},
slave:{
sr:"rob",
sq:"skllav"},
servant:{
sr:"sluga"},
neighbour:{
sr:"sused"},
stranger:{
sr:"stranac"},
quarrel:{
sr:"razdor",
sq:"zënie"},
sow:{
sr:"krmača"},
"billy goat":{
sr:"jarac",
sq:"cjap"},
fowl:{
sr:"živina",
sq:"shpend"},
seagull:{
sr:"galeb"},
heron:{
sr:"čaplja"},
vulture:{
sr:"strvinar"},
parrot:{
sr:"papagaj",
sq:"papagall"},
bat:{
sr:"slepi miš",
sq:"lakuriq"},
lion:{
sr:"lav",
sq:"luan"},
monkey:{
sr:"majmun",
sq:"majmun"},
elephant:{
sr:"slon",
sq:"elefant"},
rabbit:{
sr:"zec",
sq:"lepur"},
shark:{
sr:"ajkula",
sq:"peshkaqen"},
dolphin:{
sr:"delfin",
sq:"delfin"},
whale:{
sr:"kit",
sq:"balenë"},
stingray:{
sr:"[raja]",
sq:"bishtmi"},
"fish scale":{
sr:"krljušt"},
gill:{
sr:"škrga",
sq:"velëz"},
shell:{
sr:"školjka",
sq:"guaskë"},
beak:{
sr:"kljun",
sq:"sqep"},
nit:{
sr:"gnjida"},
centipede:{
sr:"stonoga"},
scorpion:{
sr:"škorpija"},
cockroach:{
sr:"bubašvaba",
sq:"buburrec"},
"spider web":{
sr:"paučina",
sq:"cergë"},
beeswax:{
sr:"saće",
sq:"dyllë"},
beehive:{
sr:"košnica",
sq:"zgjua"},
wasp:{
sr:"osa",
sq:"grerëz"},
gnat:{
sr:"mušica peskara",
sq:"pickatë"},
firefly:{
sr:"svitac"},
crocodile:{
sr:"krokodil",
sq:"krokodil"},
"to ride":{
sr:"jahati"},
fisherman:{
sr:"ribar",
sq:"peshkatar"},
fishhook:{
sr:"udica",
sq:"grep"},
bait:{
sr:"mamac"},
"to miss":{
sr:"promašiti"},
bay:{
sq:"gji deti",
sr:"zaliv"},
"to shine":{
sq:"ndriçoj",
sr:"blistati"},
"to vomit":{
sr:"povraćati"},
health:{
sq:"shëndet",
sr:"zdrav"},
"to turn over":{
sq:"kthej",
sr:"prevrnuti"},
"to climb":{
sq:"hipi",
sr:"popeti se"},
"to come back":{
sq:"kthehem",
sr:"vratiti se"},
"to flee":{
sq:"arratisem",
sr:"bežati"},
"to enter":{
sq:"futem",
sr:"ući"},
"to smell (perceive)":{
sq:"nuhas",
sr:"mirisati"},
cooked:{
sr:"kuvan"},
unripe:{
sr:"zelen"},
famine:{
sr:"glad",
sq:"uri"},
"to suck":{
sr:"sisati"},
"to chew":{
sr:"žvakati",
sq:"përtyp"},
"to roast":{
sr:"peći",
sq:"pjek"},
oven:{
sr:"peć",
sq:"furrë"},
"to peel":{
sr:"guliti",
sq:"qëroj"},
"cooking pot":{
sr:"lonac",
sq:"tenxhere"},
"frying pan":{
sr:"tava",
sq:"tigan"},
plate:{
sr:"tanjir",
sq:"pjatë"},
pitcher:{
sr:"bokal"},
saucer:{
sr:"tanjirić"},
"knife (table)":{
sr:"nož",
sq:"thikë"},
tongs:{
sr:"klešta",
sq:"mashë"},
breakfast:{
sr:"doručak"},
lunch:{
sr:"ručak",
sq:"drekë"},
dinner:{
sr:"večera",
sq:"darkë"},
"to knead":{
sr:"mesiti",
sq:"gatuaj"},
"mortar (vessel)":{
sr:"stupa",
sq:"dumb"},
pestle:{
sr:"tucak",
sq:"qysqi"},
sausage:{
sr:"kobasica",
sq:"kolloface"},
"egg yolk":{
sr:"žumance"},
potato:{
sr:"krompir",
sq:"patate"},
bunch:{
sr:"svežanj",
sq:"tufë"},
fig:{
sr:"smokva",
sq:"fik"},
olive:{
sr:"maslina",
sq:"ulli"},
coconut:{
sr:"kokos"},
"citrus fruit":{
sq:"agrume",
sr:"citrus"},
"sweet potato":{
sr:"indijski krompir"},
tapioca:{
sr:"[tapioka"},
gourd:{
sr:"tikva",
sq:"susak"},
pumpkin:{
sr:"bundeva",
sq:"kungull"},
pepper:{
sr:"biber",
sq:"piper"},
beverage:{
sr:"piće",
sq:"pije"},
farmer:{
sr:"zemljoradnik",
sq:"bujk"},
garden:{
sr:"bašta",
sq:"bashtinë"},
ditch:{
sr:"rov",
sq:"hendek"},
plow:{
sr:"orati"},
furrow:{
sr:"brazda",
sq:"brazdë"},
hoe:{
sr:"motika",
sq:"shat"},
pitchfork:{
sr:"vile",
sq:"sfurk"},
"to sow":{
sr:"sejati",
sq:"mbjell"},
"to reap":{
sr:"kositi",
sq:"korr"},
sickle:{
sr:"srp",
sq:"drapër"},
"to thresh":{
sr:"mlatiti",
sq:"shij"},
"threshing-floor":{
sr:"gumno",
sq:"lëmë"},
"to plant":{sr:"saditi",
sq:"mbjell"},
harvest:{
sr:"žetva",
sq:"bereqet"},
rye:{
sr:"raž",
sq:"thekër"},
oats:{
sr:"zob",
sq:"tërshërë"},
rice:{
sr:"pirinač",
sq:"oriz"},
salty:{
sr:"slan"},
brackish:{
sr:"slan"},
tailor:{
sr:"krojač"},
cloak:{
sr:"plašt",
sq:"gunë"},
skirt:{
sr:"suknja"},
sock:{
sr:"čarapa",
sq:"çorap"},
shoemaker:{
sr:"obućar",
sq:"këpucar"},
pocket:{
sr:"džep",
sq:"xhep"},
pin:{
sr:"čioda",
sq:"gjilpërë"},
linen:{
sr:"lan",
sq:"lino"},
cotton:{
sr:"pamuk",
sq:"pambuk"},
silk:{
sr:"svila",
sq:"mëndafsh"},
spindle:{
sr:"vreteno"},
"to weave (cloth)":{sr:"tkati",
sq:"end"},
loom:{
sr:"razboj",
sq:"vegjë"},
awl:{
sr:"šilo"},
glove:{
sr:"rukavica",
sq:"dorezë"},
jewel:{
sr:"dragulj",
sq:"xhevahir"},
bracelet:{
sr:"narukvica"},
necklace:{
sr:"ogrlica",
sq:"gjerdan"},
bead:{
sr:"perla",
sq:"rruazë"},
headband:{
sr:"rajf"},
tattoo:{
sr:"tetoviranje",
sq:"tatuazh"},
rag:{
sr:"maramica"},
"brush (hair)":{
sr:"četka",
sq:"furçë"},
braid:{
sr:"pletenica",
sq:"gërshet"},
razor:{
sr:"britva",
sq:"brisk"},
ointment:{
sr:"mast",
sq:"pomadë"},
hut:{
sr:"koliba",
sq:"kolibe"},
doorpost:{
sr:"dovratak",
sq:"shtalkë"},
"door bolt":{
sr:"reza",
sq:"gëthep"},
fireplace:{
sr:"kamin",
sq:"vatër"},
chimney:{
sr:"dimnjak",
sq:"oxhak"},
trough:{
sr:"korito",
sq:"govatë"},
thatch:{
sr:"krovina",
sq:"kashtë"},
rafter:{
sr:"krovna greda",
sq:"kungar"},
arch:{
sr:"luk"},
mason:{
sr:"zidar"},
mortar:{
sr:"malter",
sq:"llaç"},
tobacco:{
sr:"duvan",
sq:"duhan"},
"to smoke (tobacco)":{
sr:"pušiti"},
scissors:{
sr:"makaze"},
axe:{
sr:"sekira",
sq:"sëpatë"},
adze:{
sr:"bradva",
sq:"thadër"},
tool:{
sr:"alat' orudje",
sq:"vegël"},
saw:{
sr:"pila",
sq:"sharë"},
hammer:{
sr:"čekić",
sq:"çekiç"},
carpenter:{
sr:"tesar",
sq:"marangoz"},
"to fold":{
sr:"saviti",
sq:"thyej"},
chain:{
sr:"lanac",
sq:"varg"},
"to stab":{
sr:"bosti",
sq:"ther"},
broken:{
sr:"slomljen"},
"to split":{
sr:"cepati",
sq:"çahem"},
"to skin (an animal)":{
sr:"derati",
sq:"rrjep"},
"to stretch":{
sr:"rastegnuti",
sq:"tendos"},
"to wring":{
sr:"gnječiti",
sq:"shtrydh"},
blacksmith:{
sr:"kovač",
sq:"farkëtar"},
forge:{
sr:"kovati",
sq:"farkë"},
"to cast (metal)":{
sr:"liti"},
copper:{
sr:"bakar",
sq:"bakër"},
"lead (metal)":{
sr:"olovo",
sq:"plumb"},
tin:{
sr:"kalaj",
sq:"kallaj"},
potter:{
sr:"lončar"},
"to weave (basketry)":{sr:"plesti",
sq:"thur"},
mat:{
sr:"rogozina",
sq:"rrogoz"},
top:{
sr:"vrh",
sq:"kulm"},
bottom:{
sr:"dno",
sq:"fund"},
edge:{
sq:"teh",
sr:"ivica"},
tall:{
sr:"visok"},
deep:{
sr:"dubok"},
shallow:{
sr:"plitak"},
crooked:{
sr:"kriv"},
square:{
sr:"kvadrat",
sq:"katror"},
ball:{
sr:"kugla",
sq:"rruzull"},
clock:{
sr:"sat"},
fifteen:{
sr:"petnaest"},
early:{
sr:"rano",
sq:"herët"},
fast:{
sr:"brz"},
slow:{
sr:"spor"},
"to last":{
sr:"trajati"},
ready:{
sr:"spreman",
sq:"gati"},
"to sail":{
sr:"ploviti",
sq:"lundroj"},
raft:{
sr:"splav"},
paddle:{
sr:"veslo"},
rudder:{
sr:"krmilo",
sq:"timon"},
mast:{
sr:"jarbol"},
sail:{
sr:"jedro",
sq:"vel"},
anchor:{
sr:"sidro",
sq:"spirancë"},
harbour:{
sr:"luka",
sq:"liman"},
wheel:{
sr:"točak",
sq:"rrotë"},
axle:{
sr:"osovina"},
yoke:{
sr:"jaram",
sq:"zgjedhë"},
"to have":{
sr:"imati",
sq:"kam"},
"to let go":{
sr:"pustiti",
sq:"lëshoj"},
coin:{
sr:"novčić",
sq:"monedhë"},
beggar:{
sr:"prosjak",
sq:"lypës"},
debt:{
sr:"dug",
sq:"borxh"},
"to earn":{
sr:"zaraditi",
sq:"fitoj"},
"to weigh":{
sr:"vagati",
sq:"peshoj"},
flute:{
sr:"flauta"},
drum:{
sr:"bubanj",
sq:"tambur"},
wise:{
sr:"mudar"},
"to study":{
sr:"učiti",
sq:"studioj"},
pupil:{
sr:"učenik",
sq:"nxënës"},
school:{
sr:"škola",
sq:"shkollë"},
secret:{
sr:"tajna",
sq:"fshehtësi"},
"to explain":{
sr:"objasniti",
sq:"shpjegoj"},
easy:{
sr:"lak"},
difficult:{
sr:"težak"},
"to mumble":{
sr:"mrmljati"},
"to shriek":{
sr:"vriskati",
sq:"klith"},
"to be silent":{
sr:"ćutati",
sq:"hesht"},
"to answer":{
sr:"odgovoriti",
sq:"përgjigjem"},
"to refuse":{
sr:"odbiti",
sq:"kundërshtoj"},
"to forbid":{
sr:"zabraniti"},
"to threaten":{
sr:"pretiti",
sq:"kërcënoj"},
pen:{
sr:"hemijska olovka",
sq:"penë"},
poet:{
sr:"pesnik",
sq:"poet"},
homeland:{
sr:"domovina",
sq:"atdhe"},
"to obey":{
sr:"slušati",
sq:"bindem"},
peace:{
sr:"mir",
sq:"paqe"},
weapons:{
sr:"oružje",
sq:"armë"},
sling:{
sr:"praćka",
sq:"hobe"},
sword:{
sr:"mač",
sq:"shpatë"},
armour:{
sr:"oklop",
sq:"blindë"},
helmet:{
sr:"šlem",
sq:"kaskë"},
shield:{
sr:"štit",
sq:"shqyt"},
tower:{
sr:"toranj",
sq:"kullë"},
defeat:{
sr:"poraziti",
sq:"mundje"},
"to attack":{sr:"napadati",
sq:"sulmoj"},
"to surrender":{
sr:"predati",
sq:"dorëzohem"},
booty:{
sr:"plen"},
ambush:{
sr:"zaseda"},
law:{
sr:"zakon",
sq:"ligj"},
court:{
sr:"sud",
sq:"gjykatë"},
"to judge":{
sr:"suditi",
sq:"gjykoj"},
judgment:{
sr:"presuda",
sq:"gjykim"},
judge:{
sr:"sudija",
sq:"gjykatës"},
defendant:{
sr:"tuženi"},
witness:{
sr:"svedok",
sq:"dëshmitar"},
"to convict":{
sr:"osuditi",
sq:"dënoj"},
"to smile":{
sr:"smešiti se"},
hate:{
sr:"mrzeti"},
fin:{
sr:"peraje"},
grasshopper:{
sr:"skakavac"},
"to trap":{
sq:"kurthoj"},
mainland:{
sq:"kontinent",
sr:"kopno"},
"to blink":{
sr:"trepnuti"},
molar:{
sr:"umnjak",
sq:"dhëmballë"},
spine:{
sr:"kičma"},
wrist:{
sr:"ručni zglob",
sq:"byzylyk"},
"to choke":{
sr:"daviti",
sq:"mbytem"},
"to sieve":{
sr:"cediti"},
"chili pepper":{
sr:"feferon"},
mead:{
sr:"medovina"},
"to cultivate":{
sr:"obraditi",
sq:"lëvroj"},
rake:{
sr:"grablje",
sq:"grabujë"},
"woman's dress":{
sr:"haljina",
sq:"fustan"},
veil:{
sr:"veo",
sq:"vel"},
ornament:{
sr:"ukras",
sq:"stoli"},
"to untie":{
sr:"odvezati",
sq:"zgjidh"},
rope:{
sr:"konopac",
sq:"litar"},
"to strike":{
sr:"udariti"},
"to cut down":{
sr:"seći",
sq:"rrëzoj"},
basket:{
sr:"koš",
sq:"shportë"},
late:{
sr:"kasno",
sq:"vonë"},
afternoon:{
sr:"popodne",
sq:"pasdreke"},
ship:{
sr:"brod",
sq:"anije"},
"to harm":{
sr:"štetiti",
sq:"dëmtoj"},
"to lend":{
sr:"pozajmiti"},
"to borrow":{
sr:"posuditi"},
account:{
sr:"račun",
sq:"llogari"},
"to hire":{
sr:"najmiti"},
wages:{
sr:"plata",
sq:"pagë"},
merchant:{
sr:"trgovac",
sq:"tregtar"},
market:{
sr:"tržište",
sq:"treg"},
"to share":{
sr:"deliti"},
loud:{
sr:"glasan",
sq:"zëmadh"},
rattle:{
sr:"zvečka",
sq:"rrake"},
"to betray":{
sr:"izdati",
sq:"tradhtoj"},
"to whisper":{
sr:"šaptati"},
"to stutter":{
sr:"zamuckivati",
sq:"belbëzoj"},
"to deny":{
sr:"odreći",
sq:"mohoj"},
"to scold":{
sr:"pokoriti",
sq:"qortoj"},
boundary:{
sr:"granica",
sq:"kufi"},
"to command":{
sr:"zapovedati",
sq:"urdhëroj"},
"to permit":{
sr:"dozvoliti",
sq:"lejoj"},
army:{
sr:"vojska",
sq:"ushtri"},
soldier:{
sr:"vojnik",
sq:"ushtar"},
club:{
sr:"buzdovan",
sq:"gëzhdap"},
spear:{
sr:"koplje",
sq:"shtizë"},
fortress:{
sr:"tvrdjava",
sq:"kala"},
victory:{
sr:"pobeda",
sq:"fitore"},
"to retreat":{sr:"povući se",
sq:"tërhiqem"},
guard:{
sr:"čuvar"},
plaintiff:{
sr:"tužilac",
sq:"paditës"},
"to condemn":{
sr:"osuditi",
sq:"dënoj"},
"to acquit":{
sr:"osloboditi",
sq:"shfajësoj"},
"to catch (a ball)":{
sq:"kap",
sr:"hvatati"},
"to begin":{
sq:"filloj",
sr:"početi"},
"to finish":{
sq:"kryej",
sr:"završiti"},
"to stop":{
sq:"përfundoj",
sr:"prestati"},
"fishing net":{
sr:"mreža",
sq:"avarde"},
yam:{
sr:"[jam]"},
rug:{
sr:"tepih",
sq:"sixhade"},
sculptor:{
sr:"kipar",
sq:"gdhendës"},
statue:{
sr:"kip",
sq:"shtatore"},
chisel:{
sr:"dleto",
sq:"daltë"},
"to pile up":{
sr:"slagati",
sq:"grumbulloj"},
"day after tomorrow":{
sr:"prekosutra",
sq:"pasnesër"},
"day before yesterday":{
sr:"prekjuče",
sq:"pardje"},
season:{
sr:"godišnje doba"},
"to owe":{
sr:"dugovati"},
guilty:{
sr:"kriv"},
innocent:{
sr:"nevin"},
"fine (penalty)":{
sr:"globa",
sq:"gjobë"},
prison:{
sr:"zatvor",
sq:"burg"},
"to burn (something)":{
sq:"djeg",
sr:"paliti"},
"to drop":{
sq:"lëshoj",
sr:"pustiti"},
"to look":{
sq:"shikoj",
sr:"gledati"},
"to freeze":{
sq:"ngrij",
sr:"smrznuti se"},
"to rain":{
sq:"bie shi"},
"to burn":{sq:"digjem"},
"to swell":{sq:"ënjtem"},
"to turn":{sq:"kthej",
sr:"okretati"},
"to move":{
sq:"shkundem",
sr:"micati"},
ground:{
sq:"tokë",
sr:"tlo"},
slope:{
sq:"shpat"},
high:{
sr:"visok"},
low:{
sr:"nizak"},
"fish trap":{
sr:"klopka za ribu",
sq:"dajlan"},
earthquake:{
sr:"zemljotres",
sq:"tërmet"},
ocean:{
sr:"okean",
sq:"oqean"},
whirlpool:{
sr:"vrtlog",
sq:"vorbull"},
"spring (water)":{
sr:"izvor"},
darkness:{
sr:"mrak"},
dew:{
sr:"rosa",
sq:"vesë"},
flame:{
sr:"plamen",
sq:"flakë"},
embers:{
sr:"žar",
sq:"prush"},
"to extinguish":{
sr:"gasiti",
sq:"shuaj"},
firewood:{
sr:"drva"},
charcoal:{
sr:"drveni ugljen",
sq:"qymyr"},
acorn:{
sr:"žir"},
grapevine:{
sr:"loza"},
"tree stump":{
sr:"panj",
sq:"kërcu"},
sap:{
sr:"smola",
sq:"limfë"},
"palm tree":{
sr:"palma"},
bamboo:{
sr:"[bambus]",
sq:"bambu"},
"to splash":{
sr:"prskati"},
colour:{
sr:"boja",
sq:"ngjyrë"},
"light (colour)":{
sr:"svetao"},
rough:{
sr:"hrapav"},
"body hair":{
sr:"dlaka"},
dandruff:{
sr:"perut",
sq:"zbokth"},
"temple (head)":{
sr:"slepoočnica",
sq:"tëmth"},
skull:{
sr:"lobanja",
sq:"kafkë"},
eyelid:{
sr:"kapak",
sq:"qepallë"},
eyelash:{
sr:"trepavica",
sq:"qerpik"},
earwax:{
sr:"ušna mast"},
nostril:{
sr:"nozdrva"},
snot:{
sr:"sluz",
sq:"qurra"},
gums:{
sr:"desni",
sq:"trysa"},
rib:{
sr:"rebro",
sq:"brinjë"},
"shoulder blade":{
sr:"lopatica",
sq:"shpatull"},
collarbone:{
sr:"ključnjača"},
armpit:{
sr:"pazuho",
sq:"sqetull"},
thumb:{
sr:"palac",
sq:"pulqer"},
"calf (of leg)":{
sr:"list",
sq:"pulpë"},
ankle:{
sr:"gležanj"},
nipple:{
sr:"bradavica",
sq:"mjelm"},
intestines:{
sr:"crevo",
sq:"zorrë"},
waist:{
sr:"struk"},
hip:{
sr:"kuk",
sq:"këllk"},
buttocks:{
sr:"zadnjica",
sq:"mollaqe"},
spleen:{
sr:"slezina",
sq:"shpretkë"},
"to yawn":{
sr:"zevati",
sq:"gogësij"},
hiccup:{
sr:"štucati"},
"to sneeze":{
sr:"kihati",
sq:"teshtij"},
"to perspire":{
sr:"znojiti se",
sq:"djersij"},
"to spit":{
sr:"pljuvati",
sq:"pështyj"},
"to dribble":{
sr:"balaviti"},
"to snore":{
sr:"hrkati"},
"to dream":{
sr:"sanjati",
sq:"ëndërroj"},
goiter:{
sr:"guša"},
"common cold":{
sr:"prehlada"},
bruise:{
sr:"modrica",
sq:"shembje"},
swelling:{
sr:"oteklina",
sq:"bullungë"},
itch:{
sr:"svrab"},
blister:{
sr:"plih"},
"boil (abscess)":{
sr:"čir",
sq:"çiban"},
pus:{
sr:"gnoj"},
scar:{
sr:"ožiljak"},
"to heal":{sr:"lečiti",
sq:"shëroj"},
poison:{
sr:"otrov",
sq:"helm"},
tired:{
sr:"umoran"},
bald:{
sr:"ćelav"},
lame:{
sr:"hrom"},
mute:{
sr:"nem",
sq:"memec"},
drunk:{
sr:"pijan"},
"to turn around":{
sr:"okrenuti",
sq:"rrotulloj"},
"to roll":{
sr:"kotrljati",
sq:"rrotulloj"},
"to twist":{
sr:"zavrnuti",
sq:"përdredh"},
"to drip":{
sr:"kapati",
sq:"pikoj"},
"to crawl":{
sr:"puziti",
sq:"zvarritem"},
"to kneel":{
sr:"klečati",
sq:"gjunjëzohem"},
"to slide":{
sr:"klizati se",
sq:"rrëshqas"},
"to limp":{
sr:"šepati",
sq:"çaloj"},
"to go up":{
sr:"popeti se"},
"to go down":{
sr:"sići",
sq:"zbres"},
"to go out":{
sr:"izaći",
sq:"dal"},
"to follow":{
sr:"slediti",
sq:"ndjek"},
"to pursue":{
sr:"goniti"},
"to approach":{
sr:"približiti se",
sq:"afrohem"},
"to carve":{
sr:"rezati",
sq:"gdhend"},
"to delay":{
sr:"oklevati",
sq:"vonoj"},
cart:{
sr:"kola",
sq:"karrocë"},
tax:{
sr:"porez",
sq:"tagër"},
"to trade":{
sr:"trgovati",
sq:"këmbej"},
trumpet:{
sr:"truba",
sq:"bori"},
temple:{
sr:"hram"},
sorcerer:{
sr:"vrač",
sq:"magjistar"},
mad:{
sr:"lud"},
"to confess":{
sr:"priznati",
sq:"fajësohem"},
"to announce":{
sr:"objaviti",
sq:"njoftoj"},
prisoner:{
sr:"zarobljenik"},
"to accuse":{
sr:"tužiti",
sq:"akuzoj"},
lagoon:{
sr:"[laguna]"},
"to rise":{
sq:"hapem",
sr:"dići se"}},
ta={"Russian":["Ruski","Rusisht"],"Ukrainian":["Ukrajinski","Ukrainisht"],"Belarusian":["Beloruski","Bjellorusisht"],"Polish":["Poljski","Polonisht"],"Czech":["Češki","Çekisht"],"Slovak":["Slovački","Sllovakisht"],"Slovene":["Slovenački","Sllovenisht"],"Croatian":["Hrvatski","Kroatisht"],"Serbian":["Srpski","Serbisht"],"Bosnian":["Bosanski","Boshnjakisht"],"Montenegrin":["Crnogorski","Malazezisht"],"Bulgarian":["Bugarski","Bullgarisht"],"Macedonian":["Makedonski","Maqedonisht"],"Kashubian":["Kašupski","Kashubisht"],"Rusyn":["Rusinski","Rusinisht"],"Upper Sorbian":["Gornjolužičkosrpski","Sorbishte e sipërme"],"Lower Sorbian":["Donjolužičkosrpski","Sorbishte e poshtme"],"Persian":["Persijski","Persisht"],"Northern Kurdish":["Severni kurdski","Kurdishte veriore"],"Central Kurdish":["Centralni kurdski","Kurdishte qendrore"],"Southern Kurdish":["Južnokurdski","Kurdishte jugore"],"Pashto":["Paštunski","Pashtoisht"],"Ossetic":["Osetinski","Osetisht"],"Digor Ossetic":["Digorski osetinski","Osetishte digore"],"Tat":["Tatski","Tatisht"],"Tati":["Tati","Tati"],"Balochi":["Belučki","Balukisht"],"Hawrami":["Havrami","Havramisht"],"Bakhtiari":["Bahtijarski","Bakhtiarisht"],"Lari":["Larski","Larisht"],"Mazanderani":["Mazanderanski","Mazanderanisht"],"Wakhi":["Vahanski","Vakhisht"],"Sarikoli":["Sarikolski","Sarikolisht"],"Yaghnobi":["Jagnobski","Jagnobisht"],"Kumzari":["Kumzarski","Kumzarisht"],"Albanian":["Albanski","Shqip"],"Gheg Albanian":["Gegijski albanski","Gegnisht"],"Arbëresh":["Arbereški","Arbërisht"],"Greek":["Grčki","Greqisht"],"Cypriot Greek":["Kiparski grčki","Greqishte qipriote"],"Pontic Greek":["Pontski grčki","Greqishte pontike"],"Cappadocian Greek":["Kapadokijski grčki","Greqishte kapadokase"],"Griko":["Griko","Griko"],"French":["Francuski","Frëngjisht"],"Italian":["Italijanski","Italisht"],"Spanish":["Španski","Spanjisht"],"Portuguese":["Portugalski","Portugalisht"],"Romanian":["Rumunski","Rumanisht"],"Catalan":["Katalonski","Katalonisht"],"Friulian":["Friulski","Friulianisht"],"Ladin":["Ladinski","Ladinisht"],"Milanese":["Milanski","Milanezisht"],"Neapolitan":["Napuljski","Napoletanisht"],"Sardinian":["Sardinski","Sardenjisht"],"Walloon":["Valonski","Ualunisht"],"Franco-Provençal":["Frankoprovansalski","Frankoprovansalisht"],"Megleno-Romanian":["Meglenorumunski","Meglenorumanisht"],"Northeastern Gheg":["Severoistočni gegijski","Gegnishtja verilindore"],"Northwestern Gheg":["Severozapadni gegijski","Gegnishtja veriperëndimore"],"Central Gheg":["Centralni gegijski","Gegnishtja qendrore"],"South Gheg":["Južni gegijski","Gegnishtja jugore"],"Transitional Gheg":["Prelazni gegijski","Gegnishtja kalimtare"],"Upper Reka Gheg":["Gornjorečki dijalekat","Gegnishtja e Rekës së Epërme"],"Tosk Albanian":["Toskijski albanski","Toskërisht"],"Labërisht":["Labski","Labërisht"],"Çam Albanian":["Čamski albanski","Çamërisht"],"Arvanitika":["Arvanitski","Arvanitisht"],"Aromanian":["Aromunski","Arumanisht"],"Farsherot":["Faršerotski","Fërshërote"],"Muscopolean":["Moskopoljski","Voskopojare"],"Gopesh–Malovishte":["Gopeško-malovištanski","Gopesh–Malovishte"],"Pindian":["Pindski","Pindiane"],"Gramostean":["Gramoški","Gramoshtiane"],"Megleno-Romanian (northern)":["Severni meglenorumunski","Meglenorumanishtja veriore"],"Megleno-Romanian (central)":["Centralni meglenorumunski","Meglenorumanishtja qendrore"],"Megleno-Romanian (Tsarnarekan)":["Carnarečki meglenorumunski","Meglenorumanishtja e Carnarekës"],"Vlach (Timok Romanian)":["Vlaški (timočki)","Vllahishtja e Timokut"],"Tsakonian":["Cakonski","Cakonisht"],"Adyghe":["Adigejski (zapadnočerkeski)","Adigeisht"],"Kabardian":["Kabardinski (istočnočerkeski)","Kabardisht"],"Abkhaz":["Abhaski","Abhazisht"],"Abaza":["Abazinski","Abazinisht"],"Ubykh":["Ubiški","Ubikisht"],"Svan":["Svanski","Svanisht"],"Mingrelian":["Megrelski","Megrelisht"],"Laz":["Laski","Lazisht"],"Old Georgian":["Starogruzijski","Gjeorgjishtja e vjetër"],"Southern Akhvakh":["Južnoahvaški","Ahvahishtja jugore"],"Chirag":["Čiraški","Çiragisht"],"Kubachi":["Kubačinski","Kubaçisht"],"Kaitag":["Kajtački","Kajtakisht"],"Southwestern Dargwa":["Jugozapadni darginski","Darginishtja jugperëndimore"],"Qushan Aghul":["Kušanski agulski","Agulishtja e Kushanit"],"Aghwan":["Agvanski (kavkaskoalbanski)","Aghvanisht (albanishtja e Kaukazit)"],"Gagauz":["Gagauski","Gagauzisht"],"South Azerbaijani":["Južnoazerbejdžanski","Azerbajxhanishtja jugore"],"Khorasan Turkic":["Horasanski turkijski","Turkishtja e Horasanit"],"Qashqa'i":["Kaškajski","Kashkaisht"],"Rumelian Turkish":["Rumelijski turski","Turqishtja e Rumelisë"],"Salar":["Salarski","Salarisht"],"Uyghur":["Ujgurski","Ujgurisht"],"Ili Turki":["Ilijski turki","Turkishtja e Ilit"],"Ainu (China)":["Ajnu (Kina)","Ajnu (Kinë)"],"Southern Uzbek":["Južnouzbečki","Uzbekishtja jugore"],"Chagatai":["Čagatajski","Çagataisht"],"Siberian Tatar":["Sibirskotatarski","Tatarishtja siberiane"],"Krymchak":["Krimčački","Krimçakisht"],"Kipchak Urum":["Urumski (kipčački)","Urumisht (kipçake)"],"Karaim":["Karaimski","Karaimisht"],"Southern Altai":["Južnoaltajski","Altaishtja jugore"],"Pecheneg":["Pečeneški","Peçenegisht"],"Dolgan":["Dolganski","Dolganisht"],"Northern Altai":["Severnoaltajski","Altaishtja veriore"],"Lower Chulym Turkic":["Čulimski turkijski (donji)","Çulimishtja e poshtme"],"Taiga Sayan Turkic":["Tajgasko-sajanski turkijski","Turkishtja e tajgës së Sajanit"],"Khakas":["Hakaski","Hakasisht"],"Mrassu Shor-Tutal":["Mrasko-šorski (tutalski)","Shorishtja e Mrasit (Tutal)"],"Khalaj":["Halački","Halaxhisht"],"West Yugur":["Zapadnojugurski","Jugurishtja perëndimore"],"Old Turkic":["Staroturkijski","Turkishtja e vjetër"],"Bolgarian":["Volškobugarski","Bullgarishtja e Vollgës"],"Dagur":["Daurski","Daurisht"],"Mogholi":["Mogolski","Mogolisht"],"Middle Mongol":["Srednjomongolski","Mongolishtja e mesme"],"Buryat of China":["Burjatski (Kina)","Buriatisht (Kinë)"],"Buryat of Mongolia":["Burjatski (Mongolija)","Buriatisht (Mongoli)"],"Peripheral Mongolian":["Periferni mongolski","Mongolishtja periferike"],"Khamnigan Mongol":["Hamniganski mongolski","Mongolishtja hamnigane"],"East Yugur":["Istočnojugurski","Jugurishtja lindore"],"Bonan":["Baoanski","Bonanisht"],"Dongxiang":["Dunsjanski","Dongxiangisht"],"Kangjia":["Kangđa","Kangjiaisht"],"Mangghuer":["Mangguerski","Mangguerisht"],"Mongghul":["Mongulski","Mongulisht"],"Aghul":["Agulski","Agulisht"],"Akhvakh":["Ahvaški","Ahvahisht"],"Andi":["Andijski","Andisht"],"Archi":["Arčinski","Arçisht"],"Avar":["Avarski","Avarisht"],"Azerbaijani":["Azerbejdžanski","Azerbajxhanisht"],"Bagvalal":["Bagvalalski","Bagvalalisht"],"Bashkir":["Baškirski","Bashkirisht"],"Bezhta":["Bežtinski","Bezhtisht"],"Botlikh":["Botlihski","Botlihisht"],"Budukh":["Buduški","Budukhisht"],"Buryat":["Burjatski","Burjatisht"],"Chamalal":["Čamalalski","Çamalalisht"],"Chechen":["Čečenski","Çeçenisht"],"Chuvash":["Čuvaški","Çuvashisht"],"Crimean Tatar":["Krimskotatarski","Tatarishte e Krimesë"],"Dargwa":["Darginski","Darginisht"],"Enets":["Enečki","Enecisht"],"Erzya":["Erzjanski","Erzjanisht"],"Estonian":["Estonski","Estonisht"],"Finnish":["Finski","Finlandisht"],"Georgian":["Gruzijski","Gjeorgjisht"],"Godoberi":["Godoberinski","Godoberisht"],"Hill Mari":["Brdski marijski","Marishte malore"],"Hinuq":["Hinuški","Hinukisht"],"Hungarian":["Mađarski","Hungarisht"],"Hunzib":["Hunzipski","Hunzibisht"],"Inari Sami":["Inarski samski","Samishte e Inarit"],"Ingush":["Inguški","Ingushisht"],"Kalmyk":["Kalmički","Kalmikisht"],"Karachay-Balkar":["Karačajsko-balkarski","Karaçaj-ballkarisht"],"Karakalpak":["Karakalpački","Karakalpakisht"],"Karata":["Karatinski","Karatisht"],"Karelian":["Karelski","Karelisht"],"Kazakh":["Kazaški","Kazakisht"],"Khanty":["Hantijski","Hantisht"],"Khinalug":["Hinaluški","Hinalugisht"],"Khwarshi":["Hvaršinski","Hvarshisht"],"Kildin Sami":["Kildinski samski","Samishte e Kildinit"],"Komi":["Komi","Komisht"],"Komi-Permyak":["Komi-permjački","Komi-permjakisht"],"Kryz":["Kriški","Krizisht"],"Kumyk":["Kumički","Kumikisht"],"Kyrgyz":["Kirgiski","Kirgizisht"],"Lak":["Lački","Lakisht"],"Lezgian":["Lezginski","Lezgisht"],"Livonian":["Livonski","Livonisht"],"Livvi Karelian":["Livvikovski karelski","Karelishte livvi"],"Lule Sami":["Lulski samski","Samishte e Lules"],"Mansi":["Mansijski","Mansisht"],"Mari":["Marijski","Marisht"],"Moksha":["Mokšanski","Mokshanisht"],"Mongolian":["Mongolski","Mongolisht"],"Nenets":["Nenečki","Nenecisht"],"Nganasan":["Nganasanski","Nganasanisht"],"Nogai":["Nogajski","Nogaisht"],"Northern Sami":["Severni samski","Samishte veriore"],"Rutul":["Rutulski","Rutulisht"],"Selkup":["Selkupski","Selkupisht"],"Skolt Sami":["Skoltski samski","Samishte skolte"],"Southern Sami":["Južni samski","Samishte jugore"],"Tabasaran":["Tabasaranski","Tabasaranisht"],"Tatar":["Tatarski","Tatarisht"],"Tindi":["Tindinski","Tindisht"],"Tsakhur":["Cahurski","Cahurisht"],"Tsez":["Cezski","Cezisht"],"Tsova-Tush":["Cova-tušinski (bacbijski)","Cova-tushisht (bacbisht)"],"Turkish":["Turski","Turqisht"],"Turkmen":["Turkmenski","Turkmenisht"],"Tuvan":["Tuvinski","Tuvinisht"],"Udi":["Udinski","Udisht"],"Udmurt":["Udmurtski","Udmurtisht"],"Uzbek":["Uzbečki","Uzbekisht"],"Veps":["Vepski","Vepsisht"],"Yakut":["Jakutski","Jakutisht"],"Bavarian":["Bavarski","Bavarisht"],"Crimean Gothic":["Krimski gotski","Gotishtja e Krimesë"],"Danish":["Danski","Danisht"],"Dutch":["Holandski","Holandisht"],"English":["Engleski","Anglisht"],"Faroese":["Farski","Faroisht"],"German":["Nemački","Gjermanisht"],"Gothic":["Gotski","Gotisht"],"Icelandic":["Islandski","Islandisht"],"Latgalian":["Latgalski","Latgalisht"],"Latvian":["Letonski","Letonisht"],"Limburgish":["Limburški","Limburgisht"],"Lithuanian":["Litvanski","Lituanisht"],"Low German":["Niskonemački","Gjermanishte e vendeve të ulëta"],"Luxembourgish":["Luksemburški","Luksemburgisht"],"North Frisian":["Severnofrizijski","Frizianishte veriore"],"Norwegian":["Norveški","Norvegjisht"],"Old Prussian":["Staropruski","Prusishtja e vjetër"],"Samogitian":["Žemaitijski","Samogitisht"],"Sandžak Bosniak":["Sandžački bošnjački","Boshnjakishtja e Sanxhakut"],"Saterland Frisian":["Saterlandski frizijski","Frizianishte e Saterlandit"],"Scots":["Škotski","Skotisht"],"Swedish":["Švedski","Suedisht"],"Swiss German":["Švajcarski nemački","Gjermanishte zvicerane"],"West Frisian":["Zapadnofrizijski","Frizianishte perëndimore"],"Yiddish":["Jidiš","Jidisht"]},
na={"Russia":["Rusija","Rusi"],"Ukraine":["Ukrajina","Ukrainë"],"Belarus":["Belorusija","Bjellorusi"],"Poland":["Poljska","Poloni"],"Czechia":["Češka","Çeki"],"Slovakia":["Slovačka","Sllovaki"],"Slovenia":["Slovenija","Slloveni"],"Croatia":["Hrvatska","Kroaci"],"Serbia":["Srbija","Serbi"],"Bosnia and Herzegovina":["Bosna i Hercegovina","Bosnjë-Hercegovinë"],"Montenegro":["Crna Gora","Mal i Zi"],"Bulgaria":["Bugarska","Bullgari"],"North Macedonia":["Severna Makedonija","Maqedonia e Veriut"],"Pomerania, Poland":["Pomeranija, Poljska","Pomerania, Poloni"],"Carpathians":["Karpati","Karpatet"],"Lusatia, Germany":["Lužica, Nemačka","Luzacia, Gjermani"],"Iran":["Iran","Iran"],"Kurdistan":["Kurdistan","Kurdistan"],"Iran/Iraq":["Iran/Irak","Iran/Irak"],"Afghanistan/Pakistan":["Avganistan/Pakistan","Afganistan/Pakistan"],"North Ossetia":["Severna Osetija","Osetia e Veriut"],"Dagestan/Azerbaijan":["Dagestan/Azerbejdžan","Dagestan/Azerbajxhan"],"Balochistan":["Beludžistan","Balukistan"],"Pamir":["Pamir","Pamir"],"Tajikistan":["Tadžikistan","Taxhikistan"],"Oman":["Oman","Oman"],"Albania":["Albanija","Shqipëri"],"Kosovo/N Albania":["Kosovo/sev. Albanija","Kosovë/Shqipëri e Veriut"],"Italy":["Italija","Itali"],"Greece":["Grčka","Greqi"],"Cyprus":["Kipar","Qipro"],"Black Sea diaspora":["Crnomorska dijaspora","Diaspora e Detit të Zi"],"Cappadocia / Greece":["Kapadokija / Grčka","Kapadoki / Greqi"],"Salento & Calabria, Italy":["Salento i Kalabrija, Italija","Salento dhe Kalabri, Itali"],"France":["Francuska","Francë"],"Spain":["Španija","Spanjë"],"Portugal":["Portugalija","Portugali"],"Romania":["Rumunija","Rumani"],"Catalonia":["Katalonija","Katalonjë"],"Friuli":["Furlanija","Friuli"],"Dolomites":["Dolomiti","Dolomitet"],"Lombardy":["Lombardija","Lombardi"],"Campania":["Kampanija","Kampania"],"Sardinia":["Sardinija","Sardenjë"],"Wallonia":["Valonija","Valoni"],"Savoy/Aosta/Romandy":["Savoja/Aosta/Romandija","Savoja/Aosta/Romandi"],"Meglen":["Meglen","Meglen"],"Adygea":["Adigeja","Adigea"],"Kabardino-Balkaria":["Kabardino-Balkarija","Kabardino-Ballkaria"],"Abkhazia":["Abhazija","Abhazia"],"Karachay-Cherkessia":["Karačajevo-Čerkezija","Karaçaj-Çerkezia"],"Black Sea coast (Sochi)":["Crnomorska obala (Soči)","Bregu i Detit të Zi (Soçi)"],"Svaneti":["Svanetija","Svaneti"],"Samegrelo":["Samegrelo","Samegrelo"],"Rize & Artvin":["Rize i Artvin","Rize dhe Artvin"],"Kartli":["Kartli","Kartli"],"Caucasian Albania":["Kavkaska Albanija","Albania e Kaukazit"],"Gagauzia":["Gagauzija","Gagauzia"],"Iranian Azerbaijan":["Iranski Azerbejdžan","Azerbajxhani iranian"],"Khorasan":["Horasan","Horasani"],"Fars":["Fars","Fars"],"Balkans":["Balkan","Ballkani"],"Qinghai":["Ćinghaj","Qinghai"],"Xinjiang":["Sinkjang","Xinjiang"],"Afghanistan":["Avganistan","Afganistan"],"Central Asia":["Centralna Azija","Azia Qendrore"],"Tsalka":["Calka","Calka"],"Lithuania":["Litvanija","Lituania"],"Altai Republic":["Republika Altaj","Republika e Altait"],"Pontic steppe":["Pontska stepa","Stepa pontike"],"Chulym River":["Reka Čulim","Lumi Çulim"],"Tofalaria":["Tofalarija","Tofalaria"],"Khakassia":["Hakasija","Hakasia"],"Mountain Shoria":["Gorska Šorija","Shoria Malore"],"Central Iran":["Centralni Iran","Irani Qendror"],"Gansu":["Gansu","Gansu"],"Orkhon Valley":["Dolina Orhona","Lugina e Orhonit"],"Volga Bulgaria":["Volška Bugarska","Bullgaria e Vollgës"],"Inner Mongolia":["Unutrašnja Mongolija","Mongolia e Brendshme"],"Mongol Empire":["Mongolsko carstvo","Perandoria Mongole"],"Hulunbuir":["Hulunbuir","Hulunbuir"],"Transbaikalia":["Zabajkalje","Transbajkalia"],"Azerbaijan":["Azerbejdžan","Azerbajxhan"],"Bashkortostan":["Baškortostan","Bashkortostan"],"Buryatia":["Burjatija","Burjati"],"Chechnya":["Čečenija","Çeçeni"],"Chuvashia":["Čuvašija","Çuvashi"],"Crimea":["Krim","Krime"],"Dagestan":["Dagestan","Dagestan"],"Dagestan/Stavropol":["Dagestan/Stavropolj","Dagestan/Stavropol"],"Estonia":["Estonija","Estoni"],"Finland":["Finska","Finlandë"],"Georgia":["Gruzija","Gjeorgji"],"Hungary":["Mađarska","Hungari"],"Ingushetia":["Ingušetija","Ingusheti"],"Kalmykia":["Kalmikija","Kalmiki"],"Karachay-Cherkessia/Kabardino-Balkaria":["Karačajevo-Čerkezija/Kabardino-Balkarija","Karaçaj-Çerkezi/Kabardino-Ballkari"],"Karakalpakstan":["Karakalpakstan","Karakalpakstan"],"Karelia":["Karelija","Kareli"],"Karelia/Leningrad":["Karelija/Lenjingradska oblast","Kareli/Leningrad"],"Kazakhstan":["Kazahstan","Kazakistan"],"Khanty-Mansi Okrug":["Hanti-Mansijski okrug","Okrugu Hanti-Mansi"],"Kola Peninsula":["Kolsko poluostrvo","Gadishulli i Kolës"],"Komi Republic":["Republika Komi","Republika e Komit"],"Kyrgyzstan":["Kirgistan","Kirgizi"],"Latvia":["Letonija","Letoni"],"Mari El":["Marij El","Mari El"],"Mongolia":["Mongolija","Mongoli"],"Mordovia":["Mordovija","Mordovi"],"Nenets/Yamal":["Nenecija/Jamal","Nenecia/Jamali"],"Norway/Sweden/Finland":["Norveška/Švedska/Finska","Norvegji/Suedi/Finlandë"],"Perm Krai":["Permski kraj","Krahina e Permit"],"Sweden/Norway":["Švedska/Norveška","Suedi/Norvegji"],"Tatarstan":["Tatarstan","Tatarstan"],"Taymyr":["Tajmir","Tajmir"],"Turkey":["Turska","Turqi"],"Turkmenistan":["Turkmenistan","Turkmenistan"],"Tuva":["Tuva","Tuva"],"Udmurtia":["Udmurtija","Udmurti"],"Uzbekistan":["Uzbekistan","Uzbekistan"],"Western Siberia":["Zapadni Sibir","Siberia Perëndimore"],"Yakutia":["Jakutija","Jakuti"],"Akrotiri Sovereign Base Area":["Akrotiri (suverena baza)","Akrotiri (bazë sovrane)"],"Algeria":["Alžir","Algjeri"],"Andorra":["Andora","Andorrë"],"Armenia":["Jermenija","Armeni"],"Austria":["Austrija","Austri"],"Bahrain":["Bahrein","Bahrejn"],"Baikonur":["Bajkonur","Bajkonur"],"Bangladesh":["Bangladeš","Bangladesh"],"Belgium":["Belgija","Belgjikë"],"Benin":["Benin","Benin"],"Bhutan":["Butan","Butan"],"Bir Tawil":["Bir Tavil","Bir Tawil"],"Burkina Faso":["Burkina Faso","Burkina-Faso"],"Cambodia":["Kambodža","Kamboxhia"],"Cameroon":["Kamerun","Kamerun"],"Cape Verde":["Zelenortska Ostrva","Kepi i Gjelbër"],"Central African Republic":["Centralnoafrička Republika","Republika e Afrikës Qendrore"],"Chad":["Čad","Çad"],"Czech Republic":["Češka","Çeki"],"Democratic Republic of the Congo":["Kongo - Kinšasa","Kongo-Kinshasa"],"Denmark":["Danska","Danimarkë"],"Dhekelia Cantonment":["Dekelija (suverena baza)","Dhekelia (bazë sovrane)"],"Djibouti":["Džibuti","Xhibuti"],"Egypt":["Egipat","Egjipt"],"Eritrea":["Eritreja","Eritre"],"Ethiopia":["Etiopija","Etiopi"],"Faroe Islands":["Farska Ostrva","Ishujt Faroe"],"Germany":["Nemačka","Gjermani"],"Ghana":["Gana","Ganë"],"Gibraltar":["Gibraltar","Gjibraltar"],"Greenland":["Grenland","Grënlandë"],"Guernsey":["Gernzi","Gernsej"],"Guinea":["Gvineja","Guine"],"Guinea-Bissau":["Gvineja-Bisao","Guine-Bisau"],"Hong Kong":["Hongkong","Hong-Kong"],"Iceland":["Island","Islandë"],"India":["Indija","Indi"],"Indonesia":["Indonezija","Indonezi"],"Iraq":["Irak","Irak"],"Ireland":["Irska","Irlandë"],"Isle of Man":["Ostrvo Man","Ishulli i Manit"],"Israel":["Izrael","Izrael"],"Ivory Coast":["Obala Slonovače","Côte d’Ivoire"],"Japan":["Japan","Japoni"],"Jersey":["Džerzi","Xhersej"],"Jordan":["Jordan","Jordani"],"Kenya":["Kenija","Kenia"],"Kosovo":["Kosovo","Kosovë"],"Kuwait":["Kuvajt","Kuvajt"],"Laos":["Laos","Laos"],"Lebanon":["Liban","Liban"],"Liberia":["Liberija","Liberi"],"Libya":["Libija","Libi"],"Liechtenstein":["Lihtenštajn","Lihtenshtajn"],"Luxembourg":["Luksemburg","Luksemburg"],"Macau":["Makao","Makao"],"Malaysia":["Malezija","Malajzi"],"Maldives":["Maldivi","Maldive"],"Mali":["Mali","Mali"],"Malta":["Malta","Maltë"],"Mauritania":["Mauritanija","Mauritani"],"Moldova":["Moldavija","Moldavi"],"Monaco":["Monako","Monako"],"Morocco":["Maroko","Marok"],"Myanmar":["Mijanmar (Burma)","Mianmar (Burmë)"],"Nepal":["Nepal","Nepal"],"Netherlands":["Holandija","Holandë"],"Niger":["Niger","Niger"],"Nigeria":["Nigerija","Nigeri"],"North Korea":["Severna Koreja","Kore e Veriut"],"Norway":["Norveška","Norvegji"],"Pakistan":["Pakistan","Pakistan"],"Palestine":["Palestina","Palestinë"],"People's Republic of China":["Kina","Kinë"],"Qatar":["Katar","Katar"],"San Marino":["San Marino","San-Marino"],"Saudi Arabia":["Saudijska Arabija","Arabi Saudite"],"Senegal":["Senegal","Senegal"],"Siachen Glacier":["Glečer Sijačen","Akullnaja e Siaçenit"],"Sierra Leone":["Sijera Leone","Sierra-Leone"],"Somalia":["Somalija","Somali"],"Somaliland":["Somaliland","Somaliland"],"South Korea":["Južna Koreja","Kore e Jugut"],"South Sudan":["Južni Sudan","Sudani i Jugut"],"Sri Lanka":["Šri Lanka","Sri-Lankë"],"Sudan":["Sudan","Sudan"],"Sweden":["Švedska","Suedi"],"Switzerland":["Švajcarska","Zvicër"],"Syria":["Sirija","Siri"],"Taiwan":["Tajvan","Tajvan"],"Thailand":["Tajland","Tajlandë"],"The Gambia":["Gambija","Gambi"],"Togo":["Togo","Togo"],"Tunisia":["Tunis","Tunizi"],"Turkish Republic of Northern Cyprus":["Turska Republika Severni Kipar","Republika Turke e Qipros Veriore"],"United Arab Emirates":["Ujedinjeni Arapski Emirati","Emiratet e Bashkuara Arabe"],"United Kingdom":["Ujedinjeno Kraljevstvo","Mbretëria e Bashkuar"],"United Nations Buffer Zone in Cyprus":["Tampon-zona UN na Kipru","Zona tampon e OKB-së në Qipro"],"United States of America":["Sjedinjene Države","SHBA"],"Vatican City":["Vatikan","Vatikan"],"Vietnam":["Vijetnam","Vietnam"],"Western Sahara":["Zapadna Sahara","Saharaja Perëndimore"],"Yemen":["Jemen","Jemen"],"Åland":["Olandska Ostrva","Ishujt Alandë"],"Bavaria (Germany) and Austria":["Bavarska (Nemačka) i Austrija","Bavari (Gjermani) dhe Austri"],"Crimea (until the 18th century)":["Krim (do 18. veka)","Krime (deri në shek. XVIII)"],"Netherlands and Flanders (Belgium)":["Holandija i Flandrija (Belgija)","Holandë dhe Flandër (Belgjikë)"],"England (United Kingdom)":["Engleska (Ujedinjeno Kraljevstvo)","Angli (Mbretëria e Bashkuar)"],"Germany, Austria and Switzerland":["Nemačka, Austrija i Švajcarska","Gjermani, Austri dhe Zvicër"],"Lower Danube and Black Sea (4th–6th century)":["Donje Podunavlje i Crno more (4–6. vek)","Danubi i Poshtëm dhe Deti i Zi (shek. IV–VI)"],"Latgale (Latvia)":["Latgalija (Letonija)","Latgale (Letoni)"],"Limburg (Netherlands and Belgium)":["Limburg (Holandija i Belgija)","Limburg (Holandë dhe Belgjikë)"],"Northern Germany and the eastern Netherlands":["Severna Nemačka i istočna Holandija","Gjermania veriore dhe Holanda lindore"],"North Frisia (Germany)":["Severna Frizija (Nemačka)","Frizia Veriore (Gjermani)"],"Prussia, today Kaliningrad Oblast and northern Poland (until the 17th–18th century)":["Prusija, danas Kalinjingradska oblast i severna Poljska (do 17–18. veka)","Prusia, sot Oblasti i Kaliningradit dhe Polonia veriore (deri në shek. XVII–XVIII)"],"Samogitia (Lithuania)":["Žemaitija (Litvanija)","Samogitia (Lituani)"],"Sandžak (Serbia and Montenegro)":["Sandžak (Srbija i Crna Gora)","Sanxhak (Serbi dhe Mal i Zi)"],"Saterland (Germany)":["Saterland (Nemačka)","Saterland (Gjermani)"],"Lowland Scotland":["Škotska nizija","Ultësira e Skocisë"],"Sweden (and Finland)":["Švedska (i Finska)","Suedi (dhe Finlandë)"],"German-speaking Switzerland":["Nemačka Švajcarska","Zvicra gjermanofone"],"Friesland (Netherlands)":["Frizija (Holandija)","Frizia (Holandë)"],"Central and Eastern Europe (historical home)":["Srednja i Istočna Evropa (istorijski zavičaj)","Europa Qendrore dhe Lindore (atdheu historik)"]};
Zr.en.aboutD="About the data",
Zr.en.cenT="Census by country",
Zr.en.clsT="Status and classification",
Zr.sr.etym="Etimologija",
Zr.sr.etRoot="Rekonstruisani koren",
Zr.sr.etLoan="Pozajmljeno iz",
Zr.sr.cogT="Srodne reči",
Zr.sr.aboutD="O podacima",
Zr.sr.cenT="Popis po državama",
Zr.sr.clsT="Status i klasifikacija",
Zr.sq.etym="Etimologjia",
Zr.sq.etRoot="Rrënja e rindërtuar",
Zr.sq.etLoan="Huazuar nga",
Zr.sq.cogT="Fjalë me të njëjtën rrënjë",
Zr.sq.aboutD="Rreth të dhënave",
Zr.sq.cenT="Regjistrimet sipas shteteve",
Zr.sq.clsT="Statusi dhe klasifikimi",
Zr.en.motion="Motion",
Zr.sr.motion="Animacije",
Zr.sq.motion="Animacionet",
Zr.en.wheel="Wheel",
Zr.en.tree="Tree",
Zr.sr.wheel="Točak",
Zr.sr.tree="Stablo",
Zr.sq.wheel="Rrota",
Zr.sq.tree="Pema",
Zr.en.sbHint2="Tap a family to see the name of every language in it.",
Zr.sr.sbHint2="Dodirni porodicu da vidiš imena svih njenih jezika.",
Zr.sq.sbHint2="Prek një familje për të parë emrat e të gjitha gjuhëve të saj.",
Zr.en.searchT="Dictionary",
Zr.sr.searchT="Rečnik",
Zr.sq.searchT="Fjalor",
Zr.en.explore="Explore",
Zr.sr.explore="Istraži",
Zr.sq.explore="Eksploro",
Zr.en.etym="Etymology",
Zr.en.etRoot="Reconstructed root",
Zr.en.etLoan="Borrowed from",
Zr.en.cogT="Cognates",
Zr.en.loading="Loading…",
Zr.sr.loading="Učitavanje…",
Zr.sq.loading="Po ngarkohet…",
Zr.en.loadErr="Could not load the word data. Reload the page.",
Zr.sr.loadErr="Podaci nisu učitani. Osveži stranicu.",
Zr.sq.loadErr="Të dhënat nuk u ngarkuan. Rifresko faqen.",
Zr.en.similar="Similar form",
Zr.sr.similar="Sličan oblik",
Zr.sq.similar="Formë e ngjashme",
Zr.en.otherL="Other languages",
Zr.sr.otherL="Drugi jezici",
Zr.sq.otherL="Gjuhë të tjera",
Zr.en.copy1="Copy",
Zr.sr.copy1="Kopiraj",
Zr.sq.copy1="Kopjo",
Zr.en.catT={belief:"Customs"},
Zr.sr.catT={belief:"Običaji"},
Zr.sq.catT={belief:"Zakonet"},
Zr.en.fullMap="Full map",
Zr.sr.fullMap="Cela mapa",
Zr.sq.fullMap="Harta e plotë",
Zr.en.homeOf="Home of",
Zr.sr.homeOf="Matična oblast za:",
Zr.sq.homeOf="Vendlindja e:",
Zr.en.crimea="Ukraine (under Russian occupation since 2014)",
Zr.sr.crimea="Ukrajina (pod ruskom okupacijom od 2014)",
Zr.sq.crimea="Ukrainë (nën pushtimin rus që nga 2014)",
Zr.en.famTap="Show only this family",
Zr.sr.famTap="Prikaži samo ovu porodicu",
Zr.sq.famTap="Shfaq vetëm këtë familje",
Zr.en.kagazK="One word · three families",
Zr.sr.kagazK="Jedna reč · tri porodice",
Zr.sq.kagazK="Një fjalë · tri familje",
Zr.en.pauseT="Pause",
Zr.sr.pauseT="Pauza",
Zr.sq.pauseT="Pauzë",
Zr.en.fullscreen="Full screen",
Zr.sr.fullscreen="Ceo ekran",
Zr.sq.fullscreen="Ekran i plotë",
Zr.en.exitFs="Exit full screen",
Zr.sr.exitFs="Izađi iz celog ekrana",
Zr.sq.exitFs="Dil nga ekrani i plotë",
Zr.en.layers="Regions & families",
Zr.sr.layers="Oblasti i porodice",
Zr.sq.layers="Rajonet dhe familjet";
new Set;
let ra={"family":[["People & age",["person","man","woman","boy","young man","girl","young woman","child","baby","aged"]],["Marriage",["husband","wife","to marry","wedding","divorce","orphan","widow","widower"]],["Parents & grandparents",["father","mother","parents","grandfather","old man","grandmother","old woman","ancestors"]],["Children & grandchildren",["son","daughter","offspring","grandson","granddaughter","descendants","grandchild"]],["Siblings",["brother","sister","sibling","twins","older brother","younger brother","older sister","younger sister"]],["Uncles, aunts & cousins",["uncle","mother's brother","father's brother","aunt","mother's sister","father's sister","nephew","niece","cousin","uncle (father's brother)","uncle (mother's brother)","aunt (father's sister)","aunt (mother's sister)"]],["In-laws & step-kin",["father-in-law (of a man)","father-in-law (of a woman)","mother-in-law (of a man)","mother-in-law (of a woman)","son-in-law (of a man)","son-in-law (of a woman)","daughter-in-law (of a man)","daughter-in-law (of a woman)","stepfather","stepmother","stepson","stepdaughter","father-in-law","mother-in-law","son-in-law","daughter-in-law"]],["Kin & household",["relatives","family"]],["Birth & life stages",["to beget","to be born","pregnant","to conceive","to bring up"]],["Life & death",["to live","to die","drowned","to kill","corpse","to bury","grave","alive","death","life"]],["Character & manners",["luck","bad luck","proud","brave","fear","danger","true","to lie (tell lies)","deceit","to forgive","good","bad","to blame","to praise","beautiful","ugly","greedy","clever","diligent","evil","skilful"]],["Feelings",["happy","to laugh","to smile","to play","love","to kiss","to embrace","sorrow","pity","to cry","tear (from eye)","to groan","hate","anger","envy","shame","to hope","dear","desire","gentle","happiness","joy","laughter","merry","sad","to annoy","to be afraid","to be annoyed","to like"]],["People & ranks",["clan","chief","king","queen","nobleman","citizen","master","slave","servant","boss","people (persons)","worker"]],["Friends & guests",["friend","enemy","neighbour","stranger","guest","host","help","to hinder","custom","quarrel","to meet","companion","gift","to invite","to visit"]]],
"cattle":[["Animals & herds",["animal","livestock","pasture","herdsman","stable","cattle","flock","herd","shepherd"]],["Cattle & sheep",["bull","ox","cow","calf","sheep","ram","ewe","lamb"]],["Pigs & goats",["boar","sow","pig","goat","billy goat","kid (young goat)","he-goat","sow (female pig)"]],["Horses & donkeys",["horse","stallion","mare","foal","donkey","mule"]],["Birds",["fowl","rooster","hen","chicken","goose","duck","nest","bird","seagull","heron","eagle","hawk","vulture","parrot","crow","dove","owl","crane (bird)","cuckoo","swan"]],["Wild animals",["bat","wolf","lion","bear","fox","deer","monkey","elephant","camel","elk","hare","lair","squirrel"]],["Pets & small mammals",["dog","rabbit","cat","mouse"]],["Fish & sea life",["fish","shark","dolphin","whale","stingray","perch","pike"]],["Animal parts",["fin","fish scale","gill","shell","horn","tail","beak","claw","wing","feather","udder","paw"]],["Insects & crawlers",["insect","louse","nit","flea","centipede","scorpion","cockroach","ant","spider","spider web","bee","beeswax","beehive","wasp","fly (insect)","gnat","mosquito","worm","snake","firefly","butterfly","grasshopper","snail","swarm"]],["Reptiles & amphibians",["frog","lizard","crocodile","turtle"]],["Driving & riding",["to carry","to bring","to send","to lead","to drive","to ride","to push"]],["Hunting & fishing",["fisherman","fishhook","fishing line","fishing net","fish trap","bait","to hunt","to shoot","to miss","trap","to trap","net","noose","to fish"]],["Animal sounds & care",["leash","to bark","to feed","to herd","to roar","to sting","to water"]]],
"nature":[["Earth & land",["world","land","earth (soil)","dust","mud","sand","mountain","cliff","plain","valley","island","mainland","shore","cave","earthquake","dirt","ground","hill","meadow","moor","slope","summit","rock","soil"]],["Water",["water","sea","foam","ocean","lake","bay","lagoon","reef","wave","tide","river","whirlpool","spring (water)","swamp","waterfall","brook","coast","current","drop","source (of a river)","creek","stream","spring","well"]],["Forest & stone",["forest","tree","wood (material)","stone","stick"]],["Sky & stars",["sky","sun","moon","star"]],["Storm & rainbow",["lightning","thunder","storm","rainbow","to thunder"]],["Light & dark",["light (illumination)","darkness","shadow","dew","to shine","bright"]],["Air & weather",["air","wind","cloud","fog","rain","snow","ice","weather","chill","frost","hoarfrost","to freeze","to melt","to rain","to thaw"]],["Fire",["fire","flame","smoke","ashes","embers","to burn (something)","to burn (intransitive)","to kindle","to extinguish","firewood","charcoal","heat","spark","to burn"]],["Plants & trees",["grass","plant","root","branch","leaf","flower","oak","beech","birch","pine","fir","acorn","grapevine","tree stump","tree trunk","bark (tree)","sap","palm tree","bamboo","nettle","to grow","limb","twig","willow","bark"]],["Water & flow",["to flow","to sink","to float","to swim","to dive","to splash","to stream"]],["Colours",["colour","light (colour)","dark (colour)","white","black","red","blue","green","yellow","grey"]],["Touch & temperature",["hard","soft","rough","smooth","sharp","blunt","heavy","light (weight)","wet","dry","hot","warm","cold","clean","dirty","cool","damp","fresh","to dry"]]],
"body":[["Body & skin",["body","skin","flesh"]],["Head & face",["hair","beard","body hair","dandruff","head","temple (head)","skull","brain","face","forehead","jaw","cheek","chin","eye","eyebrow","eyelid","eyelash","to blink","ear","earwax","nose","nostril","snot","mouth","lip","tongue","tooth","gums","molar","neck","nape","throat","moustache"]],["Blood & bones",["blood","vein","bone","rib","sinew"]],["Trunk & limbs",["back (body)","spine","shoulder","shoulder blade","collarbone","arm","armpit","elbow","wrist","hand","palm (of hand)","finger","thumb","fingernail","leg","thigh","calf (of leg)","knee","foot","ankle","heel","footprint","toe","chest","breast","nipple","navel","stomach","intestines","waist","hip","buttocks","belly","fat (person)","slim","back"]],["Organs",["heart","lung","liver","kidney","spleen"]],["Breath & reflexes",["to breathe","to yawn","hiccup","to cough","to sneeze","to perspire","to spit","to vomit","to bite","to lick","to dribble","to shiver","to bathe","breath"]],["Sleep & waking",["to sleep","to snore","to dream","to wake up","dream","sleep","to fall asleep","to get tired","to get up","to wake"]],["Health & illness",["strong","weak","health","sick","fever","goiter","common cold","wound","bruise","swelling","itch","blister","boil (abscess)","pus","scar","to heal","doctor","medicine","poison","tired","rest (noun)","lazy","bald","lame","deaf","mute","blind","drunk","naked","pain","illness","to ache","to fall ill","to recover","to swell"]],["Movement",["to move","to turn over","to turn around","to wrap","to roll","to drop","to twist","to rise","to lift","to fall","to drip","to throw","to catch (a ball)","to shake","to fly","to blow","to crawl","to kneel","to slide","to jump","to kick","to dance","to walk","to limp","to run","to go","to go up","to climb","to go down","to go out","to come","to come back","to leave","to disappear","to flee","to follow","to pursue","to arrive","to approach","to enter","to step","to take a walk","to turn","walk (noun)"]],["Posture & placing",["to put","to sit","to lie down","to stand","to stay"]],["Senses",["to smell (emit odour)","to sniff","to smell (perceive)","fragrant","stinking","to taste","to hear","to listen","to see","to look","to touch","to pinch","to feel"]]],
"food":[["Eating & drinking",["to eat","food","cooked","raw","ripe","unripe","rotten","to drink","hunger","famine","thirst","to suck","to chew","to swallow","to choke"]],["Cooking",["to cook","to boil","to roast","to bake","oven","to peel","to sieve","to scrape","to stir","coal","to fry"]],["Kitchen & tableware",["cooking pot","kettle","frying pan","dish","plate","bowl","pitcher","cup","saucer","spoon","knife (table)","fork (table)","tongs","bucket","lid","pot"]],["Meals",["meal","breakfast","lunch","dinner","mush","slice"]],["Bread & grain",["bread","dough","to knead","flour","to grind","mill","mortar (vessel)","pestle"]],["Meat & dairy",["meat","sausage","soup","milk","to milk","cheese","butter","egg","egg yolk"]],["Fruit & vegetables",["vegetables","bean","potato","fruit","bunch","fig","grape","nut","olive","coconut","citrus fruit","sweet potato","yam","tapioca","gourd","pumpkin","mushroom","apple","berry","onion","peel (of fruit)"]],["Fats, salt & sweets",["oil","fat (grease)","salt","pepper","chili pepper","honey","sugar","fat"]],["Drinks",["beverage","mead","wine","beer","tea"]],["Farming",["farmer","field","garden","to cultivate","fence","ditch","plow","furrow","to dig","spade","shovel","hoe","pitchfork","rake","to sow","seed","to reap","sickle","to thresh","threshing-floor","hay","to plant","to ripen","well (water)"]],["Crops & grain",["harvest","grain","wheat","barley","rye","oats","maize","rice"]],["Tastes",["sweet","salty","bitter","sour","brackish","delicious","flavour","hungry"]]],
"home":[["Clothing",["to put on (clothes)","clothes","tailor","cloak","woman's dress","coat","shirt","collar","skirt","trousers","sock","shoe","boot","shoemaker","pocket","button","pin","scarf","sleeve","to get dressed","to take off"]],["Cloth & materials",["cloth","wool","linen","cotton","silk","felt","fur","leather","thread","to dye","bag","pouch","sack"]],["Spinning & sewing",["to spin","spindle","to weave (cloth)","loom","to sew","needle","awl","to knit"]],["Hats, belts & jewellery",["hat","belt","glove","veil","ornament","jewel","finger ring","bracelet","necklace","bead","earring","headband","tattoo","cap","ribbon","ring"]],["Grooming",["rag","towel","comb","brush (hair)","braid","razor","ointment","soap","mirror","to comb","to decorate"]],["House & rooms",["to dwell","house","hut","tent","yard","room","door","doorpost","lock","door bolt","key","window","floor","wall","box","gate"]],["Furniture & hearth",["fireplace","stove","chimney","ladder","bed","pillow","blanket","chair","table","lamp","candle","shelf","trough","cradle","doll","picture","hearth"]],["Roof & building",["roof","thatch","rafter","beam","post","board","arch","mason","brick","mortar"]],["Tools",["tobacco","to smoke (tobacco)","knife","scissors","axe","adze","broom","tool","saw","hammer","nail (metal)","glue","handle","pipe"]],["Making & working",["to make","work","carpenter","to build","to do","to mend","to produce"]],["Tying & binding",["to bend","to fold","to tie","to untie","chain","rope","knot","strap","string"]],["Cutting & breaking",["to strike","to cut","to cut down","to chop","to stab","to break","broken","to split","to tear","to skin (an animal)","to hit","to knock","to sharpen"]],["Pulling & washing",["to rub","to stretch","to pull","to spread out","to hang up","to press","to wring","to pour","to wash","to sweep","to clean","to rinse","to wipe"]],["Metals & smithing",["blacksmith","forge","to cast (metal)","gold","silver","copper","iron","lead (metal)","tin"]],["Clay & glass",["potter","clay","glass"]],["Weaving & baskets",["to weave (basketry)","basket","mat","rug"]],["Art & craft",["to carve","sculptor","statue","chisel","paint","to paint"]],["Handling",["to gather","to pick up","to pile up","to join","to separate","to divide","to open","to close","to cover","to hide"]]],
"time":[["Size & shape",["high","low","top","bottom","end (extremity)","edge","side","middle","big","small","long","tall","short","wide","narrow","thick","thin","deep","shallow","flat","straight","crooked","hook","corner","cross","square","round","circle","ball","line","hole","full","empty","piece","half","bundle","distance","heap","height","length","row","size","to add","to decrease","to fill","to increase","weight"]],["Directions",["right (side)","left (side)","near","far","east","west","north","south"]],["Clock & calendar",["to measure","hour","clock","month","year"]],["Numbers",["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","fifteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred","thousand","first","second (ordinal)","third","last","to count"]],["Time & age",["time","age","new","young","old","early","late","now","soon"]],["Speed & duration",["fast","slow","to hurry","to delay","to begin","to last","end (of time)","to finish","to stop","ready","to start","to wait"]],["Day & night",["day","night","dawn","morning","noon","afternoon","evening","today","tomorrow","day after tomorrow","yesterday","day before yesterday"]],["Days of the week",["week","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]],["Seasons",["winter","spring (season)","summer","autumn","season"]],["Months",["January","February","March","April","May","June","July","August","September","October","November","December"]]],
"belief":[["Boats & sailing",["to sail","ship","boat","raft","oar","paddle","to row","rudder","mast","sail","anchor","harbour"]],["Roads & wheels",["road","path","bridge","cart","wheel","axle","yoke"]],["Giving & taking",["to have","to own","to take","to seize","to hold","to get","to keep","to give","to look after","to save","to destroy","to harm","to seek","to find","to lose","to let go","to work"]],["Money & trade",["money","coin","rich","poor","beggar","stingy","to lend","to borrow","to owe","debt","to pay","account","tax","to hire","wages","to earn","to buy","to sell","to trade","merchant","market","shop","price","expensive","cheap","to share","to weigh","wealth"]],["Sound & music",["noise","loud","silence","flute","drum","trumpet","rattle","game","song"]],["Religion & magic",["soul","religion","God","temple","altar","sacrifice","to worship","to pray","priest","holy","to preach","to bless","to curse","to fast","heaven","hell","demon","idol","magic","sorcerer","fairy","ghost","omen","church","sin","spirit","house of worship","mosque","prayer","mullah","imam","Islam","Muslim","Christian","Koran","shaman","witch","good luck","misfortune"]],["Mind & learning",["mind","to think","to believe","to understand","to know","wise","foolish","mad","to learn","to study","to teach","pupil","teacher","school","to remember","to forget","secret","to explain","to betray","easy","difficult","to try","memory","thought","to notice","truth"]],["Voice & speech",["voice","to sing","to shout","to whisper","to mumble","to whistle","to shriek","to howl","to speak","to stutter","to say","to tell a story","to be silent","language","word","name","to ask (a question)","to answer","to confess","to deny","to request","to promise","to refuse","to forbid","to scold","to summon","to call (name)","to announce","to threaten","to boast","call (cry)","fairy tale","message","news","story","to chat","to talk","to translate"]],["Writing & books",["to write","to read","paper","pen","book","poet","letter (message)","newspaper"]],["Society & rulers",["country","homeland","town","village","boundary","people (nation)","to rule","to command","to obey","to permit","border"]],["War & weapons",["to fight","war","peace","army","soldier","weapons","club","sling","bow","arrow","spear","sword","gun","armour","helmet","shield","fortress","tower","victory","defeat","to attack","to defend","to retreat","to surrender","prisoner","guard","booty","ambush","fight (noun)","to beat","to guard","to protect","to win"]],["Law & justice",["law","court","to judge","judgment","judge","plaintiff","defendant","witness","to swear","oath","to accuse","to condemn","to convict","to acquit","guilty","innocent","punishment","fine (penalty)","prison","murder","to steal","to deceive"]]]},
aa=Object.keys(ra),
ia={};
aa.forEach(e=>ra[e].forEach(t=>t[1].forEach(t=>{ia[t]=e})));
let sa={"woods":"forest",
"herd (of horses)":"herd",
"horned cattle":"cattle",
"stud bull":"bull",
"cow (children's word)":"cow",
"young cow (about 3 years)":"cow",
"father-in-law (husband's father)":"father-in-law",
"father-in-law (wife's father)":"father-in-law",
"mother-in-law (husband's mother)":"mother-in-law",
"mother-in-law (wife's mother)":"mother-in-law",
"son-in-law (or sister's husband)":"son-in-law",
"daughter-in-law (or brother's wife)":"daughter-in-law"};
function oa(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
let la=["Slavic","Iranian","Albanian","Greek","Romance","Caucasian","Turkic","Uralic","Mongolic","Germanic","Baltic"],
ua=[],
ca=null,
da={},
ha={},
fa={},
pa=[];
function ma(e){return Object.keys(ia).find(t=>oa(t)===e)}
let ga={ui:"sc"};
try{let e=localStorage.getItem("khl-ui");
["en","sr","sc","sq"].indexOf(e)>-1?ga.ui=e:ga.ui="en"}catch{ga.ui="en"}
let va={A:"А",
B:"Б",
V:"В",
G:"Г",
D:"Д",
"Đ":"Ђ",
E:"Е",
"Ž":"Ж",
Z:"З",
I:"И",
J:"Ј",
K:"К",
L:"Л",
M:"М",
N:"Н",
O:"О",
P:"П",
R:"Р",
S:"С",
T:"Т",
"Ć":"Ћ",
U:"У",
F:"Ф",
H:"Х",
C:"Ц",
"Č":"Ч",
"Š":"Ш"};
function ba(e){return String(e).replace(/D[žŽ]|d[žŽ]|L[jJ]|l[jJ]|N[jJ]|n[jJ]|[A-ZĐŽĆČŠ]|[a-zđžćčš]/g,e=>{let t=e.toLowerCase(),n=e.charAt(0)!==t.charAt(0),r="dž"===t?"џ":"lj"===t?"љ":"nj"===t?"њ":(va[t.toUpperCase()]||e).toLowerCase();
return n?r.toUpperCase():r})}
function ya(){return"sc"===ga.ui?"sr":ga.ui}
function ka(e){return"sc"===ga.ui?ba(e):e}
let wa=null,
xa="";
function ja(){if(xa===ga.ui&&wa)return wa;
let e=Zr[ya()],
t=e;
return"sc"===ga.ui&&(t={},Object.keys(e).forEach(n=>{let r=e[n];
t[n]="function"==typeof r?(...e)=>ba(r(...e)):"object"==typeof r?Object.fromEntries(Object.entries(r).map(e=>[e[0],ba(e[1])])):ba(r)}),t.nav=Object.assign({},t.nav,{all:"A–Z"})),
xa=ga.ui,
wa=t,
t}
let Sa={sr:0,
sq:1};
var _a={"1,127,394 in North Macedonia":["1.127.394 u Severnoj Makedoniji","1.127.394 në Maqedoninë e Veriut"],
"1,723,434 in Slovenia":["1.723.434 u Sloveniji","1.723.434 në Slloveni"],
"1,967,300 in Catalonia":["1.967.300 u Kataloniji","1.967.300 në Katalonjë"],
"215,299 in Montenegro":["215.299 u Crnoj Gori","215.299 në Mal të Zi"],
"3,687,735 in Croatia":["3.687.735 u Hrvatskoj","3.687.735 në Kroaci"],
"4,456,102 in Slovakia":["4.456.102 u Slovačkoj","4.456.102 në Sllovaki"],
"5,037,607 in Bulgaria":["5.037.607 u Bugarskoj","5.037.607 në Bullgari"],
"5,607,558 in Serbia":["5.607.558 u Srbiji","5.607.558 në Serbi"],
"54,907 in Slovakia":["54.907 u Slovačkoj","54.907 në Sllovaki"],
"7,189,000 in Canada":["7.189.000 u Kanadi","7.189.000 në Kanada"],
"733,732 in Cyprus":["733.732 na Kipru","733.732 në Qipro"],
"8,996,475 in Czechia":["8.996.475 u Češkoj","8.996.475 në Çeki"],
"A variety of Lombard (ISO 639-3: lmo); it has no code of its own":["Varijetet lombardskog (ISO 639-3: lmo); nema sopstveni kod","Varietet i lombardishtes (ISO 639-3: lmo); nuk ka kod të vetin"],
Bulgaria:["Bugarska","Bullgari"],
"CYSTAT census, language, government-controlled areas only · also 182 in North Macedonia (2021)":["Popis CYSTAT, jezik, samo područja pod kontrolom vlade · takođe 182 u Severnoj Makedoniji (2021)","Regjistrimi CYSTAT, gjuha, vetëm zonat nën kontrollin e qeverisë · gjithashtu 182 në Maqedoninë e Veriut (2021)"],
"CZSO census, mother tongue, Czech only (9,213,987 with second answers)":["Popis CZSO, maternji jezik, samo češki (9.213.987 sa drugim odgovorima)","Regjistrimi CZSO, gjuha amtare, vetëm çekisht (9.213.987 me përgjigjet e dyta)"],
Canada:["Kanada","Kanada"],
Catalonia:["Katalonija","Katalonjë"],
Classification:["Klasifikacija","Klasifikimi"],
"Co-official in Catalonia, the Balearic Islands and Valencia, and the official language of Andorra":["Službeni, uz španski, u Kataloniji, na Balearskim ostrvima i u Valensiji, i službeni jezik Andore","Bashkëzyrtare në Katalonjë, në Ishujt Balearë dhe në Valencia, dhe gjuha zyrtare e Andorrës"],
"Constitution of Montenegro, Art. 13":["Ustav Crne Gore, čl. 13","Kushtetuta e Malit të Zi, neni 13"],
Croatia:["Hrvatska","Kroaci"],
"Croatian government report to the Council of Europe quoting the DZS census, mother tongue (read through search; the official table was not opened)":["Izveštaj hrvatske vlade Savetu Evrope koji citira popis DZS, maternji jezik (pročitano preko pretrage; zvanična tabela nije otvorena)","Raporti i qeverisë kroate për Këshillin e Evropës që citon regjistrimin DZS, gjuha amtare (lexuar përmes kërkimit; tabela zyrtare nuk u hap)"],
"Cyprus (government-controlled areas)":["Kipar (područja pod kontrolom vlade)","Qipro (zonat nën kontrollin e qeverisë)"],
Czechia:["Češka","Çeki"],
"Glottolog counts Bosnian, Croatian, Montenegrin and Serbian as standard varieties of one language, Serbian-Croatian-Bosnian (hbs); ISO 639-3 gives each standard its own code":["Glottolog smatra bosanski, hrvatski, crnogorski i srpski standardnim varijetetima jednog jezika, srpsko-hrvatsko-bosanskog (hbs); ISO 639-3 daje svakom standardu sopstveni kod","Glottolog i numëron boshnjakishten, kroatishten, malazezishten dhe serbishten si varietete standarde të një gjuhe, serbo-kroato-boshnjakishtes (hbs); ISO 639-3 i jep çdo standardi kodin e vet"],
"Grouped as Rhaeto-Romance in the traditional classification; Glottolog places it under Italian Romance":["U tradicionalnoj klasifikaciji svrstava se među retoromanske; Glottolog ga smešta među italoromanske","Në klasifikimin tradicional grupohet si retoromane; Glottolog e vendos te italo-romanet"],
"IDS gives one Serbo-Croatian list that is not marked by standard; it is shown here and not split further":["IDS daje jednu srpskohrvatsku listu koja nije označena po standardu; ovde je prikazana i nije dalje razdvojena","IDS jep një listë serbokroate që nuk është shënuar sipas standardit; shfaqet këtu dhe nuk ndahet më tej"],
"ISO 639-3":["ISO 639-3","ISO 639-3"],
"Idescat language-use survey, not a census; initial language, age 15 and over":["Anketa Idescat o upotrebi jezika, nije popis; početni jezik, starost 15 i više godina","Anketë e Idescat për përdorimin e gjuhës, jo regjistrim; gjuha fillestare, mosha 15 vjeç e lart"],
"Judeo-Tat and Muslim Tat are counted as one language; its place in Southwestern Iranian is conventional and debated. Not the same as Tati, which is Northwestern":["Judeo-tatski i muslimanski tatski računaju se kao jedan jezik; njegovo mesto u jugozapadnoiranskim jezicima je konvencionalno i sporno. Nije isto što i jezik tati, koji je severozapadnoiranski","Tatishtja judeo dhe tatishtja myslimane numërohen si një gjuhë; vendi i saj te iranishtet jugperëndimore është konvencional dhe i diskutueshëm. Nuk është e njëjtë me gjuhën tati, e cila është veriperëndimore"],
"Kurdish is an official language of Iraq alongside Arabic (Constitution, Art. 4)":["Kurdski je službeni jezik Iraka uz arapski (Ustav, čl. 4)","Kurdishtja është gjuhë zyrtare e Irakut krahas arabishtes (Kushtetuta, neni 4)"],
"Lombard is not among the minority languages named in Italian law 482/1999":["Lombardski nije među manjinskim jezicima navedenim u italijanskom zakonu 482/1999","Lombardishtja nuk është ndër gjuhët e pakicave të përmendura në ligjin italian 482/1999"],
Luxembourg:["Luksemburg","Luksemburg"],
"MONSTAT census, mother tongue":["Popis MONSTAT, maternji jezik","Regjistrimi MONSTAT, gjuha amtare"],
Montenegro:["Crna Gora","Mal i Zi"],
"NSI census, mother tongue · also 1,519 in North Macedonia (2021) and 7,939 in Serbia (2022)":["Popis NSI, maternji jezik · takođe 1.519 u Severnoj Makedoniji (2021) i 7.939 u Srbiji (2022)","Regjistrimi NSI, gjuha amtare · gjithashtu 1.519 në Maqedoninë e Veriut (2021) dhe 7.939 në Serbi (2022)"],
"None of our sources has a Bosnian-only word list. Bosnian shares its Shtokavian base with Croatian and Serbian, see those lists":["Nijedan od naših izvora nema listu reči samo za bosanski. Bosanski deli štokavsku osnovu sa hrvatskim i srpskim, vidi te liste","Asnjë nga burimet tona nuk ka listë fjalësh vetëm për boshnjakishten. Boshnjakishtja ndan bazën shtokave me kroatishten dhe serbishten, shih ato lista"],
"None of our sources has a Montenegrin word list. Montenegrin shares its Shtokavian base with Croatian and Serbian, see those lists":["Nijedan od naših izvora nema listu reči za crnogorski. Crnogorski deli štokavsku osnovu sa hrvatskim i srpskim, vidi te liste","Asnjë nga burimet tona nuk ka listë fjalësh për malazezishten. Malazezishtja ndan bazën shtokave me kroatishten dhe serbishten, shih ato lista"],
"North Macedonia":["Severna Makedonija","Maqedonia e Veriut"],
"NorthEuraLex, which labels its list Croatian":["NorthEuraLex, koji svoju listu označava kao hrvatsku","NorthEuraLex, i cili listën e vet e etiketon si kroatisht"],
"Northern Albanian (ISO 639-3: aln). The standard language is Tosk-based":["Severnoalbanski (ISO 639-3: aln). Standardni jezik zasniva se na toskijskom","Shqipja veriore (ISO 639-3: aln). Gjuha standarde bazohet te toskërishtja"],
"Northwestern Iranian (Gurani group). Not Kurdish by linguistic criteria, though most speakers identify as Kurds":["Severozapadnoiranski (grupa gurani). Po lingvističkim kriterijumima nije kurdski, iako se većina govornika izjašnjava kao Kurdi","Iranishte veriperëndimore (grupi gurani). Sipas kritereve gjuhësore nuk është kurdishte, megjithëse shumica e folësve identifikohen si kurdë"],
"Not among the minority languages named in Italian law 482/1999":["Nije među manjinskim jezicima navedenim u italijanskom zakonu 482/1999","Nuk është ndër gjuhët e pakicave të përmendura në ligjin italian 482/1999"],
"Official in Bulgaria and an official language of the European Union":["Službeni u Bugarskoj i službeni jezik Evropske unije","Zyrtare në Bullgari dhe gjuhë zyrtare e Bashkimit Evropian"],
"Official in Croatia (Constitution, Art. 12) and an official language of the European Union since 1 July 2013":["Službeni u Hrvatskoj (Ustav, čl. 12) i službeni jezik Evropske unije od 1. jula 2013.","Zyrtare në Kroaci (Kushtetuta, neni 12) dhe gjuhë zyrtare e Bashkimit Evropian që nga 1 korriku 2013"],
"Official in Greece and Cyprus, and an official language of the European Union":["Službeni u Grčkoj i na Kipru, i službeni jezik Evropske unije","Zyrtare në Greqi dhe në Qipro, dhe gjuhë zyrtare e Bashkimit Evropian"],
"Official in Montenegro (Constitution 2007, Art. 13), Cyrillic and Latin scripts equal; Serbian, Bosnian, Albanian and Croatian are in official use":["Službeni u Crnoj Gori (Ustav iz 2007, čl. 13), ćirilica i latinica ravnopravne; srpski, bosanski, albanski i hrvatski su u službenoj upotrebi","Zyrtare në Mal të Zi (Kushtetuta e 2007-s, neni 13), alfabetet cirilik dhe latin janë të barabartë; serbishtja, boshnjakishtja, shqipja dhe kroatishtja janë në përdorim zyrtar"],
"Official in Romania and an official language of the European Union. Moldova has replaced the name Moldovan by Romanian in its laws (2023)":["Službeni u Rumuniji i službeni jezik Evropske unije. Moldavija je u svojim zakonima zamenila naziv moldavski nazivom rumunski (2023)","Zyrtare në Rumani dhe gjuhë zyrtare e Bashkimit Evropian. Moldavia e ka zëvendësuar në ligjet e saj emrin moldavisht me rumanisht (2023)"],
"Official in Serbia (Constitution, Art. 10, Cyrillic as official script) and in Kosovo; in official use in Montenegro":["Službeni u Srbiji (Ustav, čl. 10, ćirilica kao službeno pismo) i na Kosovu; u službenoj upotrebi u Crnoj Gori","Zyrtare në Serbi (Kushtetuta, neni 10, cirilikja si alfabet zyrtar) dhe në Kosovë; në përdorim zyrtar në Mal të Zi"],
"Official in Slovenia and an official language of the European Union":["Službeni u Sloveniji i službeni jezik Evropske unije","Zyrtare në Slloveni dhe gjuhë zyrtare e Bashkimit Evropian"],
"Official language of France (Constitution, Art. 2), which states in Art. 75-1 that regional languages belong to its heritage; France has signed but not ratified the European Charter for Regional or Minority Languages":["Službeni jezik Francuske (Ustav, čl. 2), koji u čl. 75-1 navodi da regionalni jezici pripadaju njenom nasleđu; Francuska je potpisala, ali nije ratifikovala Evropsku povelju o regionalnim ili manjinskim jezicima","Gjuha zyrtare e Francës (Kushtetuta, neni 2), e cila në nenin 75-1 shpall se gjuhët rajonale i përkasin trashëgimisë së saj; Franca e ka nënshkruar, por nuk e ka ratifikuar Kartën Evropiane për Gjuhët Rajonale ose të Pakicave"],
"Official language of Iran (Constitution, Art. 15), which also allows regional and tribal languages in the press, media and schools":["Službeni jezik Irana (Ustav, čl. 15), koji dozvoljava i regionalne i plemenske jezike u štampi, medijima i školama","Gjuha zyrtare e Iranit (Kushtetuta, neni 15), e cila lejon gjithashtu gjuhët rajonale dhe fisnore në shtyp, media dhe shkolla"],
"Official language of Italy (law 482/1999, Art. 1); co-official with French in the Aosta Valley":["Službeni jezik Italije (zakon 482/1999, čl. 1); službeni uz francuski u Dolini Aoste","Gjuha zyrtare e Italisë (ligji 482/1999, neni 1); bashkëzyrtare me frëngjishten në Luginën e Aostës"],
"Official language of North Macedonia. Bulgaria states that it regards it as a regional written norm of Bulgarian (declaration of July 2022); the EU Council notes the term is to be read as in North Macedonia's Constitution":["Službeni jezik Severne Makedonije. Bugarska navodi da ga smatra regionalnom pisanom normom bugarskog (deklaracija iz jula 2022); Savet EU napominje da termin treba tumačiti kao u Ustavu Severne Makedonije","Gjuha zyrtare e Maqedonisë së Veriut. Bullgaria deklaron se e konsideron normë rajonale të shkruar të bullgarishtes (deklarata e korrikut 2022); Këshilli i BE-së vëren se termi duhet lexuar si në Kushtetutën e Maqedonisë së Veriut"],
"Official language of Spain (Constitution, Art. 3)":["Službeni jezik Španije (Ustav, čl. 3)","Gjuha zyrtare e Spanjës (Kushtetuta, neni 3)"],
"One of the official languages of Bosnia and Herzegovina, with Croatian and Serbian; in official use in Montenegro (Constitution, Art. 13)":["Jedan od službenih jezika Bosne i Hercegovine, uz hrvatski i srpski; u službenoj upotrebi u Crnoj Gori (Ustav, čl. 13)","Një nga gjuhët zyrtare të Bosnjë-Hercegovinës, krahas kroatishtes dhe serbishtes; në përdorim zyrtar në Mal të Zi (Kushtetuta, neni 13)"],
"Placed in Southwestern Iranian; often described as a mixed language":["Svrstava se među jugozapadnoiranske; često se opisuje kao mešoviti jezik","Vendoset te iranishtet jugperëndimore; shpesh përshkruhet si gjuhë e përzier"],
"Poland's only legally recognised regional language (act of 6 January 2005). ISO 639-3: csb":["Jedini zakonski priznati regionalni jezik Poljske (zakon od 6. januara 2005). ISO 639-3: csb","Gjuha e vetme rajonale e njohur me ligj në Poloni (ligji i 6 janarit 2005). ISO 639-3: csb"],
"Protected as a minority language in Brandenburg (Sorbian law, amended 2014)":["Zaštićen kao manjinski jezik u Brandenburgu (zakon o Lužičkim Srbima, izmenjen 2014)","I mbrojtur si gjuhë pakice në Brandenburg (ligji për sorbët, i ndryshuar më 2014)"],
"Protected as a minority language in Saxony (Sorbian law, 1999)":["Zaštićen kao manjinski jezik u Saksoniji (zakon o Lužičkim Srbima, 1999)","I mbrojtur si gjuhë pakice në Saksoni (ligji për sorbët, 1999)"],
"Protected minority language in Italy (law 482/1999)":["Zaštićeni manjinski jezik u Italiji (zakon 482/1999)","Gjuhë pakice e mbrojtur në Itali (ligji 482/1999)"],
"Protected minority language in Italy (law 482/1999); Sardinia also has its own regional law (22/2018)":["Zaštićeni manjinski jezik u Italiji (zakon 482/1999); Sardinija ima i sopstveni regionalni zakon (22/2018)","Gjuhë pakice e mbrojtur në Itali (ligji 482/1999); Sardenja ka gjithashtu ligjin e vet rajonal (22/2018)"],
"Protected minority language in Italy (law 482/1999, Albanian)":["Zaštićeni manjinski jezik u Italiji (zakon 482/1999, albanski)","Gjuhë pakice e mbrojtur në Itali (ligji 482/1999, shqipja)"],
Quebec:["Kvebek","Kebek"],
"Recognised as a minority language in Slovakia and in Vojvodina, Serbia. Ukraine treats it as a group of Ukrainian dialects. ISO 639-3: rue":["Priznat kao manjinski jezik u Slovačkoj i u Vojvodini, Srbija. Ukrajina ga smatra grupom ukrajinskih dijalekata. ISO 639-3: rue","I njohur si gjuhë pakice në Sllovaki dhe në Vojvodinë, Serbi. Ukraina e trajton si grup dialektesh ukrainase. ISO 639-3: rue"],
"Recognised by the French Community of Belgium (decree of 24 December 1990)":["Priznat od strane Francuske zajednice Belgije (dekret od 24. decembra 1990)","I njohur nga Komuniteti Francez i Belgjikës (dekreti i 24 dhjetorit 1990)"],
"SORS census, mother tongue":["Popis RZS, maternji jezik","Regjistrimi SORS, gjuha amtare"],
"SURS census, mother tongue, the last Slovenian census with a language question; Osrednjeslovenska region 412,027 of 488,364, Pomurska region 107,596 of 120,875 · also 1,302 in Serbia (2022)":["Popis SURS, maternji jezik, poslednji slovenački popis sa pitanjem o jeziku; Osrednjeslovenska regija 412.027 od 488.364, Pomurska regija 107.596 od 120.875 · takođe 1.302 u Srbiji (2022)","Regjistrimi SURS, gjuha amtare, regjistrimi i fundit slloven me pyetje për gjuhën; rajoni Osrednjeslovenska 412.027 nga 488.364, rajoni Pomurska 107.596 nga 120.875 · gjithashtu 1.302 në Serbi (2022)"],
Serbia:["Srbija","Serbi"],
"Slovak census, mother tongue · also 8,725 in Serbia (2022)":["Slovački popis, maternji jezik · takođe 8.725 u Srbiji (2022)","Regjistrimi sllovak, gjuha amtare · gjithashtu 8.725 në Serbi (2022)"],
"Slovak statistical office census, mother tongue · also 150,738 in Czechia (2021) and 38,584 in Serbia (2022)":["Popis slovačkog statističkog zavoda, maternji jezik · takođe 150.738 u Češkoj (2021) i 38.584 u Srbiji (2022)","Regjistrimi i zyrës sllovake të statistikave, gjuha amtare · gjithashtu 150.738 në Çeki (2021) dhe 38.584 në Serbi (2022)"],
Slovakia:["Slovačka","Sllovaki"],
Slovenia:["Slovenija","Slloveni"],
"Slovenia, Osrednjeslovenska":["Slovenija, Osrednjeslovenska","Slloveni, Osrednjeslovenska"],
"Slovenia, Pomurska":["Slovenija, Pomurska","Slloveni, Pomurska"],
"State Statistical Office census, mother tongue · also 8,375 in Serbia (2022)":["Popis Državnog zavoda za statistiku, maternji jezik · takođe 8.375 u Srbiji (2022)","Regjistrimi i Entit Shtetëror të Statistikave, gjuha amtare · gjithashtu 8.375 në Serbi (2022)"],
"State language of Ukraine (Constitution, Art. 10; Law 2704-VIII of 2019)":["Državni jezik Ukrajine (Ustav, čl. 10; Zakon 2704-VIII iz 2019)","Gjuha shtetërore e Ukrainës (Kushtetuta, neni 10; Ligji 2704-VIII i vitit 2019)"],
"Statistics Canada census, mother tongue · also 83,802 in Luxembourg (2021, main language)":["Popis Statistics Canada, maternji jezik · takođe 83.802 u Luksemburgu (2021, glavni jezik)","Regjistrimi i Statistics Canada, gjuha amtare · gjithashtu 83.802 në Luksemburg (2021, gjuha kryesore)"],
Status:["Status","Statusi"],
"The Academy of Athens treats it as a Greek dialect; ISO 639-3 lists it separately as cpg":["Atinska akademija ga smatra grčkim dijalektom; ISO 639-3 ga navodi zasebno kao cpg","Akademia e Athinës e trajton si dialekt grek; ISO 639-3 e rendit veçmas si cpg"],
"The Academy of Athens treats it as a Greek dialect; ISO 639-3 lists it separately as pnt":["Atinska akademija ga smatra grčkim dijalektom; ISO 639-3 ga navodi zasebno kao pnt","Akademia e Athinës e trajton si dialekt grek; ISO 639-3 e rendit veçmas si pnt"],
"Tosk-based Albanian spoken in Italy (ISO 639-3: aae)":["Albanski toskijske osnove koji se govori u Italiji (ISO 639-3: aae)","Shqip me bazë toske, e folur në Itali (ISO 639-3: aae)"],
"Traditionally grouped with Ibero-Romance. Glottolog sets it apart as a sister of both Occitan and West Ibero-Romance":["Tradicionalno se svrstava među iberoromanske. Glottolog ga izdvaja kao sestrinsku granu i okcitanskog i zapadnoiberoromanskog","Tradicionalisht grupohet me romanishten iberike. Glottolog e veçon si degë motër si të oksitanishtes, ashtu edhe të romanishtes iberike perëndimore"],
"Treated as a Greek dialect, spoken in Salento and Calabria; no ISO 639-3 code of its own":["Smatra se grčkim dijalektom, govori se u Salentu i Kalabriji; nema sopstveni ISO 639-3 kod","Trajtohet si dialekt grek, flitet në Salento dhe Kalabri; nuk ka kod ISO 639-3 të vetin"],
"Treated as a variety of Greek; no ISO 639-3 code of its own":["Smatra se varijetetom grčkog; nema sopstveni ISO 639-3 kod","Trajtohet si varietet i greqishtes; nuk ka kod ISO 639-3 të vetin"],
"Unicode CLDR":["Unicode CLDR","Unicode CLDR"],
"Word list":["Lista reči","Lista e fjalëve"],
"bos (member of the hbs macrolanguage)":["bos (član makrojezika hbs)","bos (pjesë e makrogjuhës hbs)"],
"cnr (member of the hbs macrolanguage; code added to ISO 639-2 in 2017)":["cnr (član makrojezika hbs; kod dodat u ISO 639-2 2017. godine)","cnr (pjesë e makrogjuhës hbs; kodi u shtua në ISO 639-2 në vitin 2017)"],
"habitual language, survey, age 15+":["uobičajeni jezik, anketa, starost 15+","gjuha e zakonshme, anketë, mosha 15+"],
"hrv (member of the hbs macrolanguage)":["hrv (član makrojezika hbs)","hrv (pjesë e makrogjuhës hbs)"],
"initial language, survey, age 15+":["početni jezik, anketa, starost 15+","gjuha fillestare, anketë, mosha 15+"],
language:["jezik","gjuha"],
"language usually spoken":["jezik koji se obično govori","gjuha që flitet zakonisht"],
"main language":["glavni jezik","gjuha kryesore"],
"mother tongue":["maternji jezik","gjuha amtare"],
"srp (member of the hbs macrolanguage)":["srp (član makrojezika hbs)","srp (pjesë e makrogjuhës hbs)"]},
qa=new RegExp("(?<![A-Za-z])(Intercontinental\\ Dictionary\\ Series|Fjalor\\ i\\ gjuhës\\ së\\ sotme\\ shqipe|fjalori\\.shkenca\\.org|Apertium\\ hbs\\-eng|Natural\\ Earth|NorthEuraLex|Glottography|Unicode\\ CLDR|langue\\ d'oïl|ISO\\ 639\\-2|Glottolog|Bouckaert|ISO\\ 639\\-3|CC\\ BY\\ 4\\.0|FreeDict|Heggarty|Dellert|Idescat|Carling|Moseley|Gippert|MONSTAT|INSTAT|IE\\-CoR|CYSTAT|Comrie|DiACL|Asher|SURS|SORS|CZSO|DWDS|VIII|CLDR|hbs|NSI|bos|DZS|srp|Key|cnr|IPA|IDS|hrv|Oïl|ISO|aae|aln|lmo)(?![A-Za-z])");
function Ea(e){return"sc"===ga.ui?String(e).split(qa).map((e,t)=>t%2?e:ba(e)).join(""):e}
function za(e){if(null==e||"en"===ya())return e;
let t=_a[e];
return Ea(t&&t[Sa[ya()]]?t[Sa[ya()]]:function(e){return"en"===ya()?e:e.replace(/(\d),(?=\d{3})/g,"$1.")}(String(e).replace(/(\d)\.(\d)/g,"$1,$2")))}
function Na(e){let t=ya();
return"en"===t?({"Labërisht": "Lab Albanian", "Arbëresh": "Arberesh", "Çam Albanian": "Cham Albanian"}[e.lang]||e.lang):ka((ta[e.lang]||[])[Sa[t]]||e.lang)}
window.__Na=Na;
window.__ka=ka;
window.__ya=ya;
function Ma(e){let t=ya();
return"en"===t?e.place:ka((na[e.place]||[])[Sa[t]]||e.place)}
function Ca(e){let t=ka((Yr[e]||{})[ya()]||e);
return t.charAt(0).toUpperCase()+t.slice(1)}
function La(e){let t=ya();
if("en"===t)return/^to \w+$/.test(e)?e.slice(3):e;
let n=ea[e];
return ka(n&&n[t]?n[t]:/^to \w+$/.test(e)?e.slice(3):e)}
function Ta(e){let t=[];
return e.split(", ").forEach(e=>{let n=La(e);
0>t.indexOf(n)&&t.push(n)}),
t.join(", ")}
function Aa(e){let t=Xr[e];
return t&&t[ya()]?ka(t[ya()]):e}
function Pa(e){let t=Jr[e],
l=ya();
return t&&t[l]?ka(t[l]):e}
function Ia(){return{en:"en",
sr:"sr-Latn",
sc:"sr-Cyrl",
sq:"sq"}[ga.ui]}
function Ra(e){let t=ya();
return ka(e+" "+("en"===t?1===e?"language":"languages":"sr"===t?Vr(e,"jezik","jezika","jezika"):"sq"===t?"gjuhë":1===e?"Sprache":"Sprachen"))}
function Oa(e,t){let n=ai(t);
return Na(e)+", "+Ma(e)+" – "+t.word+(n?" ("+n+")":"")+" – "+Ta(t.meaning)}
/* Da: the same result as the old chain of 46 replacements, in one pass (each of those letters maps to a fixed text and no
   result is itself replaced later); text made only of plain letters, digits and spaces skips the rest, and text that is plain
   ASCII after the map skips the accent steps (they cannot change it). Search runs this on every word. */
const DaM={"ß":"ss","æ":"ae","ǣ":"ae","ǽ":"ae","œ":"oe","ł":"l","ƚ":"l","ɬ":"l","đ":"d","ð":"d","ɖ":"d","ø":"o","ǿ":"o","ɵ":"o","þ":"th","ħ":"h","ɦ":"h","ŋ":"n","ɲ":"n","ɳ":"n","ɣ":"g","ɡ":"g","ı":"i","ə":"e","ǝ":"e","ɛ":"e","ʁ":"r","ʀ":"r","ɾ":"r","ɹ":"r","χ":"x","ү":"у","ұ":"у","ө":"о","ң":"н","қ":"к","ҝ":"к","ғ":"г","ҕ":"г","ҳ":"х","һ":"х","ә":"а","ҙ":"з","ҫ":"с","җ":"ж","ӏ":"i","ɨ":"i","ɩ":"i","ɪ":"i","ɑ":"a","ɐ":"a","ɔ":"o","ɒ":"o","β":"b","ɯ":"u","ʉ":"u","ʊ":"u","э":"е","ё":"е","ҥ":"н","ӈ":"н","ӊ":"н","ӄ":"к","ҡ":"к","ҟ":"к","ӆ":"л","ԓ":"л","ӎ":"м","ҷ":"ч","ҹ":"ч","ӌ":"ч","ў":"у","і":"и","ї":"и","ӣ":"и","ʃ":"sh","ɕ":"sh","ʂ":"sh","ʒ":"zh","ʑ":"zh","ʐ":"zh","ɟ":"j","ɫ":"l","ɭ":"l","ɽ":"r","ɻ":"r","ʋ":"v","ɸ":"f","θ":"th"},DaR=/[ßæǣǽœłƚɬđðɖøǿɵþħɦŋɲɳɣɡıəǝɛʁʀɾɹχүұөңқҝғҕҳһәҙҫҗӏɨɩɪɑɐɔɒβɯʉʊэёҥӈӊӄҡҟӆԓӎҷҹӌўіїӣʃɕʂʒʑʐɟɫɭɽɻʋɸθ]/g,DaP=/^[a-z0-9 ]*$/,DaN=/[^\x00-\x7f]/;
function Da(e){let t=String(e||"").toLowerCase();
if(DaP.test(t))return t.replace(/ +/g," ").trim();
t=t.replace(DaR,e=>DaM[e]);
if(!DaN.test(t))return t.replace(/['"`]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();
return t.normalize("NFD").replace(/\p{M}/gu,"").replace(/[\u02b0-\u02ff\u1d2c-\u1dbf\u2018-\u201f'"`´ʼʻˮʔʕʿʾꞌ]/g,"").replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}
function Fa(e){return(e=String(e||"").split(/[,;\/(]/)[0].toLowerCase().replace(/[łɬ]/g,"l").replace(/[øœ]/g,"o").replace(/[đð]/g,"d").replace(/æ/g,"ae").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"")).replace(/ə/g,"e").replace(/ı/g,"i").replace(/ŋ/g,"n").replace(/ħ/g,"h").replace(/ɣ/g,"g").replace(/[^a-z]/g,"")}
function Ba(e,t){let n,
r,
a=e.length,
i=t.length,
s=[];
for(n=0;n<=i;n++)s[n]=n;
for(n=1;n<=a;n++){let a=s[0];
for(s[0]=n,r=1;r<=i;r++){let i=s[r];
s[r]=Math.min(s[r]+1,s[r-1]+1,a+ +(e[n-1]!==t[r-1])),
a=i}}
return s[i]}
function Ka(e,t){if(!e||!t)return!1;
if(e===t)return!0;
let n=Math.max(e.length,t.length);
return n>=4&&Ba(e,t)<=(n>=7?2:1)}
function Ga(e){if(!e._k){let t=new Set,
n=e=>{String(e||"").split(/[,;\/]/).forEach(e=>{let n=Da(e.replace(/\(.*?\)/g,"")).replace(/[^\p{L}\p{N} ]/gu,"").trim();
n&&t.add(n)})};
n(e.e.word),
n(e.e.lat),
n(e.e.orig),
ri(e.e.word)&&n(ni(e.e.word)),
EK.keys(e.e.word).concat(e.e.lat?EK.keys(e.e.lat):[]).forEach(e=>t.add(e)),
e._k=Array.from(t)}
return e._k}
let Ua=e=>e<=3||e<=6?1:e<=9?2:3;
/* Search text of a word (its forms, its meaning and the meaning in the interface language, then its keys) and its meanings
   one by one: worked out once per word and interface language, by the search itself or by the warm-up below. */
function kSrT(e){return e._u!==ga.ui&&(e._u=ga.ui,e._f=Da(e.e.word+" "+(e.e.lat||"")+" "+(e.e.orig||"")+" "+e.e.meaning+" "+Ta(e.e.meaning)),e._s=e._f+" "+Ga(e).join(" ")),e._s}
function kSrM(e){return e._mu!==ga.ui&&(e._mu=ga.ui,e._m=Array.from(new Set((e.e.meaning+", "+Ta(e.e.meaning)).split(/,\s*/).map(e=>Da(e.replace(/\(.*?\)/g,"")).trim()).filter(Boolean)))),e._m}
/* Search warm-up. The first search needs the search text of every word (about 79,000); done in one go that froze the page
   for seconds on a phone. kSrW() prepares it in the background, a few ms at a time, and answers whether all of it is ready;
   kSrW(f) also calls f once it is. It starts over when the word list or the interface language changes. */
let kSrS={p:null,u:null,n:0,on:0,f:[]};
function kSrW(f){let S=kSrS,fresh=()=>{(S.p!==pa||S.u!==ga.ui)&&(S.p=pa,S.u=ga.ui,S.n=0)};
fresh();
if(S.n>=pa.length)return!0;
f&&S.f.push(f);
if(!S.on){S.on=1;
let step=()=>{fresh();
let t=performance.now();
for(;S.n<pa.length&&performance.now()-t<8;){let e=pa[S.n++];kSrT(e),kSrM(e)}
if(S.n<pa.length)setTimeout(step,0);
else{S.on=0;let c=S.f;S.f=[];c.forEach(e=>e())}};
setTimeout(step,0)}
return!1}
function Ha(e){let t=/\s$/.test(String(e)),
n=String(e).trim(),
r=Da(e=n.replace(/([а-яёА-ЯЁ])[IӀӏ1lІі|](?=[а-яёА-ЯЁ]|$)/g,"$1ӏ")),
a=ri(e)?Da(ni(e)):"",
i=n.replace(/([а-яёА-ЯЁ])[IӀӏ1lІі|](?=[а-яёА-ЯЁ]|$)/g,"$1"),
s=[...new Set([r,a,Da(i),ri(i)?Da(ni(i)):""].concat(EK.keys(n)).filter(Boolean))];
if(!r)return{ms:[],
hits:[],
sim:[],
dym:[]};
let o=Object.keys(ia).filter(e=>ha[e].length&&s.some(n=>(" "+Da(e+" "+La(e)).replace(/[()]/g," ")+" ").indexOf(" "+n+(t?" ":""))>-1)).sort((e,t)=>(Da(La(e))!==r)-(Da(La(t))!==r)||Da(La(e)).length-Da(La(t)).length),
l=[];
if(pa.forEach(e=>{let t=kSrT(e);
if(!s.some(e=>t.indexOf(e)>-1))return;
let n=Ga(e),r=kSrM(e),a=6;
for(let e of s)a=n.some(t=>t===e)?Math.min(a,0):r.some(t=>t===e)?Math.min(a,1):n.some(t=>t.startsWith(e))?Math.min(a,2):r.some(t=>t.split(" ").some(t=>t===e))?Math.min(a,3):r.some(t=>t.split(" ").some(t=>t.startsWith(e)))?Math.min(a,4):Math.min(a,5);
l.push([a,e])}),(()=>{let t=e.toLowerCase(),n=e=>String(e.e.word).replace(/[IӀ1]/g,"ӏ").toLowerCase().split(/[,;]\s*/).includes(t)?0:Da(e.e.lat||"").split(" ").includes(r)?1:2;
/* same order as before; each hit's keys are worked out once (not on every comparison), names compared by one collator */
let k=e=>void 0===e[2]?e[2]=n(e[1]):e[2],w=e=>void 0===e[3]?e[3]=Na(e[1].L):e[3],c=new Intl.Collator(Ia());
l.sort((e,t)=>e[0]-t[0]||k(e)-k(t)||String(e[1].e.word).length-String(t[1].e.word).length||c.compare(w(e),w(t)))})(),t){let e=l.filter(e=>0===e[0]||1===e[0]||3===e[0]);
e.length&&(l=e)}
let u=l.map(e=>e[1]),
c=[];
if(u.length<12&&r.length>=2){let e=new Set(u),
t=[];
pa.forEach(n=>{if(e.has(n))return;
let r=9;
for(let e of s){let t=Ua(e.length);
for(let a of Ga(n)){let n=9;
Math.abs(a.length-e.length)<=t?n=Ba(a,e):e.length>=4&&a.length>e.length&&(n=Ba(a.slice(0,e.length),e)+.5),n<=t&&n<r&&(r=n)}}
r<9&&t.push([r,n])}),
t.sort((e,t)=>e[0]-t[0]||Na(e[1].L).localeCompare(Na(t[1].L),Ia())),
c=t.slice(0,40).map(e=>e[1])}
let d=[];
if(!o.length&&r.length>=3){let e=Ua(r.length),
t=[];
Object.keys(ia).forEach(n=>{if(!ha[n].length)return;
let a=9;
[n,La(n)].forEach(t=>{let n=Da(t).replace(/\(.*?\)/g,"").trim();
[n].concat(n.split(/[ ,]+/)).forEach(t=>{if(t.length<3||Math.abs(t.length-r.length)>e)return;
let n=Ba(t,r);
n<a&&(a=n)})}),a<=e&&t.push([a,n])}),
t.sort((e,t)=>e[0]-t[0]),
d=t.slice(0,6).map(e=>e[1])}
return{ms:o,
hits:u,
sim:c,
dym:d}}
function Wa(e){let t=[],
n={};
return e.forEach(e=>{let r=e.L.id;
r in n||(n[r]=t.length,t.push({L:e.L,w:[],l:[],h:e.e}));
let a=t[n[r]];
0>a.w.indexOf(e.e.word)&&a.w.push(e.e.word);
let i=ai(e.e);
i&&0>a.l.indexOf(i)&&a.l.push(i)}),
t}
let $a={"west":["French","Walloon","Franco-Provençal","Catalan","Spanish","Portuguese","Bavarian","Dutch","English","German","Limburgish","Low German","Luxembourgish","North Frisian","Saterland Frisian","Scots","Swiss German","West Frisian"],"ital":["Italian","Friulian","Ladin","Milanese","Neapolitan","Sardinian","Arbëresh","Griko"],"cee":["Polish","Czech","Slovak","Slovene","Kashubian","Rusyn","Upper Sorbian","Lower Sorbian","Hungarian","Yiddish"],"east":["Russian","Ukrainian","Belarusian","Karaim","Crimean Gothic"],"balk":["Croatian","Serbian","Bosnian","Montenegrin","Bulgarian","Macedonian","Romanian","Megleno-Romanian","Albanian","Gheg Albanian","Gagauz","Rumelian Turkish","Sandžak Bosniak"],"grk":["Greek","Cypriot Greek","Pontic Greek","Cappadocian Greek","Griko"],"iran":["Persian","Northern Kurdish","Central Kurdish","Southern Kurdish","Tati","Hawrami","Bakhtiari","Lari","Mazanderani","Kumzari","Balochi"],"casia":["Ossetic","Digor Ossetic","Tat","Pashto","Wakhi","Sarikoli","Yaghnobi"],"nord":["Finnish","Estonian","Karelian","Livvi Karelian","Veps","Livonian","Northern Sami","Lule Sami","Southern Sami","Inari Sami","Skolt Sami","Kildin Sami","Danish","Faroese","Icelandic","Latgalian","Latvian","Lithuanian","Norwegian","Samogitian","Swedish"],"cauc":["Adyghe","Kabardian","Abkhaz","Abaza","Ubykh","Svan","Mingrelian","Laz","Old Georgian","Southern Akhvakh","Chirag","Kubachi","Kaitag","Southwestern Dargwa","Qushan Aghul","Aghwan","Kipchak Urum","Avar","Andi","Akhvakh","Bagvalal","Botlikh","Godoberi","Karata","Tindi","Chamalal","Tsez","Hinuq","Khwarshi","Bezhta","Hunzib","Lak","Dargwa","Lezgian","Tabasaran","Aghul","Rutul","Tsakhur","Archi","Budukh","Kryz","Khinalug","Udi","Chechen","Ingush","Tsova-Tush","Georgian","Azerbaijani","Kumyk","Nogai","Karachay-Balkar"],"dag":["Aghul","Akhvakh","Andi","Archi","Avar","Bagvalal","Bezhta","Botlikh","Chamalal","Chirag","Dargwa","Godoberi","Hinuq","Hunzib","Kaitag","Karata","Khwarshi","Kubachi","Kumyk","Lak","Lezgian","Nogai","Qushan Aghul","Rutul","Southern Akhvakh","Southwestern Dargwa","Tabasaran","Tindi","Tsakhur","Tsez"],"volga":["Bolgarian","Tatar","Bashkir","Chuvash","Mari","Hill Mari","Udmurt","Erzya","Moksha","Komi","Komi-Permyak","Kalmyk"],"casia2":["South Azerbaijani","Khorasan Turkic","Qashqa'i","Uyghur","Ili Turki","Ainu (China)","Southern Uzbek","Chagatai","Krymchak","Pecheneg","Khalaj","Mogholi","Turkish","Crimean Tatar","Turkmen","Uzbek","Kazakh","Kyrgyz","Karakalpak"],"sib":["Salar","Siberian Tatar","Southern Altai","Dolgan","Northern Altai","Lower Chulym Turkic","Taiga Sayan Turkic","Khakas","Mrassu Shor-Tutal","West Yugur","Old Turkic","Dagur","Middle Mongol","Buryat of China","Buryat of Mongolia","Peripheral Mongolian","Khamnigan Mongol","East Yugur","Bonan","Dongxiang","Kangjia","Mangghuer","Mongghul","Yakut","Tuvan","Buryat","Mongolian","Khanty","Mansi","Selkup","Nenets","Enets","Nganasan"]};
function Va(e){return!!e&&e.length<=8&&0>e.indexOf(" ")&&0>e.indexOf("-")}
function Za(){try{return JSON.parse(localStorage.getItem("khl-recent")||"[]").slice(0,6)}catch{return[]}}
function Qa(e){if(!((e=String(e||"").trim()).length<2))try{let t=Za().filter(t=>t.toLowerCase()!==e.toLowerCase());
t.unshift(e),
localStorage.setItem("khl-recent",JSON.stringify(t.slice(0,6)))}catch{}}
function Ya(){return"off"===document.documentElement.getAttribute("data-motion")||!(!window.matchMedia||!matchMedia("(prefers-reduced-motion: reduce)").matches)}
function Ja(e){location.hash==="#"+e?window.dispatchEvent(new HashChangeEvent("hashchange")):location.hash=e}
function Xa(e){if(e.info&&e.info.sz)return e.info.sz;
let t=e.info&&e.info.sp;
if(!t)return 5e3;
let n=t.v.replace(/[,.](?=\d{3})/g,"").match(/\d+/);
return n?+n[0]:5e3}
function ei(e){return String(e).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[e]))}
let ti={"а":"a",
"б":"b",
"в":"v",
"г":"g",
"д":"d",
"е":"e",
"ё":"yo",
"ж":"zh",
"з":"z",
"и":"i",
"й":"y",
"к":"k",
"л":"l",
"м":"m",
"н":"n",
"о":"o",
"п":"p",
"р":"r",
"с":"s",
"т":"t",
"у":"u",
"ф":"f",
"х":"kh",
"ц":"ts",
"ч":"ch",
"ш":"sh",
"щ":"shch",
"ъ":"ʺ",
"ы":"y",
"ь":"ʹ",
"э":"e",
"ю":"yu",
"я":"ya",
"і":"i",
"ј":"j",
"ә":"ä",
"ө":"ö",
"ү":"ü",
"ұ":"u",
"ң":"ng",
"ҥ":"ng",
"ӈ":"ng",
"ғ":"gh",
"ҕ":"gh",
"қ":"q",
"ҡ":"q",
"ӄ":"q",
"ҳ":"h",
"һ":"h",
"ҷ":"j",
"ҫ":"ś",
"ҙ":"ð",
"ӑ":"ă",
"ӗ":"ĕ",
"ӳ":"ű",
"ӱ":"ü",
"ӧ":"ö",
"ӓ":"ä",
"ӹ":"ÿ",
"ӛ":"ä",
"ӥ":"ï",
"ӟ":"dz",
"ӝ":"dzh",
"ӵ":"ch",
"ӣ":"ī",
"ӯ":"ū",
"ӕ":"æ",
"ӏ":"ʼ",
"Ӏ":"ʼ",
"ԓ":"ɬ",
"ӆ":"lʼ",
"ӎ":"mʼ",
"ӊ":"nʼ",
"ҧ":"ph",
"ҭ":"th",
"ҵ":"tch",
"ҟ":"q",
"ҩ":"w",
"ӡ":"dz",
"ҽ":"ch",
"ҿ":"ch"};
function ni(e){return Array.from(e).map(e=>{let t=e.toLowerCase(),n=ti[t];
return null==n?e:e!==t&&n?n.charAt(0).toUpperCase()+n.slice(1):n}).join("")}
function ri(e){return/[\u0400-\u04FF\u0500-\u052F]/.test(e||"")}
function ai(e){if(e.orig)return"⁨"+e.orig+"⁩"+(e.ipa?" · /"+e.ipa+"/":"");
if(/[^\u0000-\u024F\u1E00-\u1EFF\u2000-\u206F]/.test(e.word||"")){let t=e.lat&&e.lat!==e.word?e.lat:"";
return t&&e.ipa?t+" · /"+e.ipa+"/":t||(e.ipa?"/"+e.ipa+"/":"")}
return e.ipa?"/"+e.ipa+"/":""}
m=d("aIIwE");
let ii={book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
words:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>',
lang:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg>',
map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12H5"/><path d="M11 5.5 4.5 12l6.5 6.5"/></svg>',
moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
chev:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>',
copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
wheel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3.5v5M12 15.5v5"/></svg>',
tree:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 4v16M5 8h5M5 14h5M10 14v5h4M10 8h9"/></svg>'};
function si({n:e}){return(0,f.jsx)("span",{className:"icn",dangerouslySetInnerHTML:{__html:ii[e]}})}
function oi(){return(0,f.jsx)("span",{className:"orn","aria-hidden":"true"})}
function li(e,t){let n=e.currentTarget;
Ya()?Ja(t):(n.classList.add("pressed"),setTimeout(()=>{Ja(t),setTimeout(()=>n.classList.remove("pressed"),80)},150))}
function ui({id:e,value:t,onChange:n,ph:r,recent:a=!1,autoFocus:i=!1}){let s=(0,m.useRef)(null);
return(0,m.useEffect)(()=>{i&&s.current&&s.current.focus()},[i]),
(0,f.jsxs)("div",{className:"search",children:[(0,f.jsx)(si,{n:"search"}),(0,f.jsx)("label",{className:"sr",htmlFor:e,children:r}),(0,f.jsx)("input",{ref:s,id:e,type:"search",autoComplete:"off",enterKeyHint:"search",placeholder:r,value:t,onChange:e=>n(e.target.value),onBlur:e=>{a&&Qa(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(a&&Qa(e.target.value),e.target.blur())}}),t?(0,f.jsx)("button",{type:"button",className:"x","aria-label":"×",onClick:()=>{n(""),s.current?.focus()},children:"×"}):null]})}
function ci({list:e,map:t,isMap:n}){let r=ja();
return(0,f.jsxs)("div",{className:"lm",role:"tablist",children:[(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":!n,onClick:()=>Ja(e),children:[(0,f.jsx)(si,{n:"lang"}),(0,f.jsx)("span",{children:r.list})]}),(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":n,onClick:()=>Ja(t),children:[(0,f.jsx)(si,{n:"map"}),(0,f.jsx)("span",{children:r.explore||r.nav.map})]})]})}
function di({s:e,q:t}){if(!t)return(0,f.jsx)(f.Fragment,{children:e});
let n=e.toLowerCase().indexOf(t.toLowerCase());
return n<0?(0,f.jsx)(f.Fragment,{children:e}):(0,f.jsxs)(f.Fragment,{children:[e.slice(0,n),(0,f.jsx)("mark",{children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}
function hi(e,t){return"w"+e.entries.indexOf(t)+"-"+e.id.slice(2)}
function fi({x:e,q:t="",di:DI}){return(0,f.jsx)("button",{type:"button",className:"row","data-i":DI,onClick:()=>{Qa(mi.q||""),Ja(hi(e.L,e.e))},children:(0,f.jsxs)("span",{className:"m",children:[(0,f.jsxs)("span",{className:"t",children:[(0,f.jsx)("span",{className:"dot "+e.L.family}),(0,f.jsx)("span",{children:(0,f.jsx)(di,{s:e.e.word,q:t})}),ai(e.e)?(0,f.jsxs)(f.Fragment,{children:[" ",(0,f.jsx)("span",{className:"pr pri",children:(0,f.jsx)(di,{s:ai(e.e),q:t})})]}):null]}),(0,f.jsxs)("span",{className:"s",children:[(0,f.jsx)(di,{s:Ta(e.e.meaning),q:t})," · ",Na(e.L)]})]})})}
function pi(){let[e,t]=(0,m.useState)(!1);
return{done:e,
copy:function(e){let n=()=>{t(!0),
setTimeout(()=>t(!1),1400)},
r=()=>{let t=document.createElement("textarea");
t.value=e,
document.body.appendChild(t),
t.select();
try{document.execCommand("copy")}catch{}
document.body.removeChild(t)};
try{navigator.clipboard.writeText(e).then(n,()=>{r(),n()})}catch{r(),
n()}}}}
let mi={q:"",
lq:"",
wq:"",
wqL:"",
fam:"all",
reg:"all",
azL:"all",
azn:300,
n:120,
cat:"all",
tv:"wheel",
scroll:{}};
try{let t=localStorage.getItem("khl-tv");
t&&(mi.tv=t)}catch{}
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
function Yh(e){return(0,f.jsxs)("div",{className:"fdw",children:[(0,f.jsx)(FDYh,e),(0,f.jsx)(FDresults,{q:e.q,fam:e.fam})]})}
function FDYh({q:e,fam:t="all",onPick:n}){let r=ja(),
[a,i]=(0,m.useState)(80),
w=kSrW(),
[,wk]=(0,m.useState)(0);
/* results wait for the search warm-up (kSrW) instead of freezing the page while every word is prepared */
(0,m.useEffect)(()=>{if(w)return;let live=1;kSrW(()=>live&&wk(e=>e+1));return()=>{live=0}},[w,r]);
let s=(0,m.useMemo)(()=>w?Ha(e):null,[e,r,w]),
o=s&&!s.hits.length&&s.dym.length?s.dym[0]:null,
l=(0,m.useMemo)(()=>o?Object.assign({},s,{ms:[o],hits:Ha(La(o)).hits}):s,[s,o]);
(0,m.useEffect)(()=>i(80),[e,t]);
if(!l)return null;
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
(0,m.useEffect)(()=>{kSrW()},[]);
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
var lf;
lf=JSON.parse('{"S0":1000,"x0":-1473.9417365861548,"y0":-1753.165358505492,"x1":1481.629643755751,"y1":-278.6023872109487,"W":3400,"H":1696,"R":1.1503697804810527}');
let uf=null,
hf=null,
ff=null,
pf=(e,t)=>{let n=e.bb;
return t[1]>=n[0][1]-.01&&t[1]<=n[1][1]+.01&&(n[0][0]<=n[1][0]?t[0]>=n[0][0]-.01&&t[0]<=n[1][0]+.01:t[0]>=n[0][0]||t[0]<=n[1][0])};
let vf={},
bf={};
function yf(e){let t=e.append("defs");
[["Slavic","--f-slav"],["Iranian","--f-iran"],["Albanian","--f-alba"],["Greek","--f-gree"],["Romance","--f-roma"],["Caucasian","--f-cauc"],["Turkic","--f-turk"],["Uralic","--f-ural"],["Mongolic","--f-mong"],["Germanic","--f-germ"],["Baltic","--f-balt"]].forEach(e=>{let n=t.append("radialGradient").attr("id","g-"+e[0]);
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
Nf=["Slavic","Iranian","Albanian","Greek","Romance","Caucasian","Turkic","Uralic","Mongolic","Germanic","Baltic"];
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
Romance:"--f-roma",Caucasian:"--f-cauc",Turkic:"--f-turk",Uralic:"--f-ural",Mongolic:"--f-mong",Germanic:"--f-germ",Baltic:"--f-balt"}[e];
return t?getComputedStyle(document.documentElement).getPropertyValue(t).trim():""}
function Rf(){let e={Slavic:"slav",
Iranian:"iran",
Albanian:"alba",
Greek:"gree",
Romance:"roma",Caucasian:"cauc",Turkic:"turk",Uralic:"ural",Mongolic:"mong",Germanic:"germ",Baltic:"balt"},
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
Romance:"--f-roma",Caucasian:"--f-cauc",Turkic:"--f-turk",Uralic:"--f-ural",Mongolic:"--f-mong",Germanic:"--f-germ",Baltic:"--f-balt"}[e.family],
n=t&&getComputedStyle(document.documentElement).getPropertyValue(t).trim();
if(!n)return null;
let r=n+e.id;
return Wf[r]||(Wf[r]=Mf(n,$f(e.id))||n)}
function Zf(){return Gf||(Gf=Promise.all([fetch("data/adm2.json").then(e=>e.json()),fetch("data/micro.json").then(e=>e.json()),Df()]).then(([t,m,E])=>{E&&E.so&&(E.so.f.bb=pu(E.so.f));
let F=ef(t,t.objects.d).features;
F.forEach((f,i)=>{f.bb=pu(f),f._i=i,f.properties.n=(f.properties.n||"").replace(/^(городской округ|город|городской)\s+/i,"")});
return Kf={F,M:m,topo:t,E}}).catch(()=>null))}
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
const FDV="c4e86cade7";
/* Full dictionaries + Latin-friendly search. Part 5 of the app script (see src/page.html),
   placed right before the language page component, so it shares the names of the other parts:
   m = React, f = jsx runtime, ja() UI strings, Ja(hash) navigate, Na(L) language name,
   ai(entry) reading, fa id->language, di highlight, Da text fold, Qa remember query, ka/ya locale,
   EK = site/search-key.js (inlined before this script). FDV = search index version (build). */
let FDH = 'h/', FDc = {}, FDsI = null, FDsc = {};
const FDt = k => {
  let t = {
    full: {en: 'Full dictionary', sr: 'Ceo rečnik', sq: 'Fjalori i plotë'},
    words: {en: 'words', sr: 'reči', sq: 'fjalë'},
    open: {en: 'Show the full dictionary', sr: 'Prikaži ceo rečnik', sq: 'Shfaq fjalorin e plotë'},
    loading: {en: 'Loading the dictionary…', sr: 'Učitavanje rečnika…', sq: 'Duke ngarkuar fjalorin…'},
    failed: {en: 'The dictionary could not be loaded. Check the connection and try again.', sr: 'Rečnik nije učitan. Proverite vezu i pokušajte ponovo.', sq: 'Fjalori nuk u ngarkua. Kontrolloni lidhjen dhe provoni përsëri.'},
    retry: {en: 'Try again', sr: 'Pokušaj ponovo', sq: 'Provo përsëri'},
    more: {en: 'Show more', sr: 'Prikaži još', sq: 'Shfaq më shumë'},
    inDict: {en: 'In the full dictionaries', sr: 'U celim rečnicima', sq: 'Në fjalorët e plotë'},
    none: {en: 'No match in the full dictionary.', sr: 'Nema pogotka u celom rečniku.', sq: 'Asnjë përputhje në fjalorin e plotë.'},
    src: {en: 'Source', sr: 'Izvor', sq: 'Burimi'},
    shown: {en: 'shown', sr: 'prikazano', sq: 'të shfaqura'},
    searching: {en: 'Searching the full dictionaries…', sr: 'Pretraga celih rečnika…', sq: 'Duke kërkuar në fjalorët e plotë…'}
  }[k];
  return ka(t[ya()] || t.en);
};
/* Long lists draw only the rows near the screen. kWin(n, key, est) -> {ref, a, b, top, bot}:
   ref goes on the list box; rows a..b-1 are drawn between two spacers (heights top, bot) that stand in for the others, so the page keeps
   its length. The first element of every row carries data-i = row number (rows are measured from it). A row that is not measured
   yet counts as the average measured row (est before any). key names the list: heights stay remembered while it stays the same.
   A sticky heading (class letter) may be the first element of a row: its row starts where the next element starts minus its height.
   An element with data-d is a repeated heading (A-Z); its height is subtracted from the top spacer by the caller (KWD).
   When a measured height moves rows above the screen the scroll position is corrected by the shift, so nothing jumps. */
let KWC = {k: '', w: 0, h: []}, KWD = 0;
/* On a scroll the new rows are drawn at once, in the same frame (the browser sends one scroll event per frame, before it paints):
   a fast drag of the scrollbar never shows an empty screen. React's flushSync; a plain call if it is ever missing. */
const KWF = f => { let s = d("2b9p0").flushSync; s ? s(f) : f(); };
function kWin(n, key, est) {
  let ref = (0, m.useRef)(null), an = (0, m.useRef)(null), cur = (0, m.useRef)(null), [rg, setRg] = (0, m.useState)([0, 40, key]), [, tick] = (0, m.useState)(0);
  if (KWC.k !== key || KWC.w !== innerWidth) KWC = {k: key, w: innerWidth, h: []};
  let r = rg[2] === key ? rg : [0, 40, key], a = Math.min(r[0], n), b = Math.min(r[1], n), avg = () => { let s = 0, c = 0; for (let x of KWC.h) if (x > 0) { s += x; c++; } return c ? s / c : est; }, av = avg(), t = 0, u = 0;
  for (let i = 0; i < n; i++) { let h = KWC.h[i] || av; if (i < a) t += h; else if (i >= b) u += h; }
  cur.current = {r, n, key};
  let cap = () => {
    let el = ref.current;
    if (!el) return;
    for (let e of el.children) if (e.dataset.i != null && !e.classList.contains('letter')) { let q = e.getBoundingClientRect(); if (q.bottom > 0) { an.current = {i: e.dataset.i, y: q.top, s: scrollY}; return; } }
  };
  let calc = now => {
    let el = ref.current, C = cur.current;
    if (!el || !C) return;
    let q = el.getBoundingClientRect(), vh = innerHeight, lo = -q.top - vh * 1.5, hi = -q.top + vh * 2.5, v = avg(), y = 0, x = -1, z = C.n;
    for (let i = 0; i < C.n; i++) { let h = KWC.h[i] || v; if (x < 0 && y + h > lo) x = i; if (y > hi) { z = i; break; } y += h; }
    if (x < 0) x = Math.max(0, C.n - 30);
    x = Math.floor(x / 8) * 8; z = Math.min(C.n, Math.max(Math.ceil(z / 8) * 8, x + 8));
    if (x !== Math.min(C.r[0], C.n) || z !== Math.min(C.r[1], C.n) || C.r[2] !== C.key) { cap(); now ? KWF(() => setRg([x, z, C.key])) : setRg([x, z, C.key]); }
  };
  (0, m.useLayoutEffect)(() => {
    let el = ref.current;
    if (!el) return;
    let A = an.current;
    an.current = null;
    if (A) {
      let e = el.querySelector('[data-i="' + A.i + '"]');
      if (e) { let j = e.getBoundingClientRect().top - (A.y - (scrollY - A.s)); if (Math.abs(j) > 1) scrollTo({top: scrollY + j, behavior: 'instant'}); }
    }
    let rows = [], ch = false, dd = el.querySelector('[data-d]');
    for (let e of el.children) if (e.dataset.i != null) rows.push([+e.dataset.i, e.classList.contains('letter') ? e.nextElementSibling.getBoundingClientRect().top - e.getBoundingClientRect().height : e.getBoundingClientRect().top]);
    let end = el.lastElementChild ? el.lastElementChild.getBoundingClientRect().top : 0;
    rows.forEach((x, j) => { let h = (j + 1 < rows.length ? rows[j + 1][1] : end) - x[1]; if (h > 0 && Math.abs((KWC.h[x[0]] || 0) - h) > .5) { KWC.h[x[0]] = h; ch = true; } });
    if (dd && Math.abs(dd.offsetHeight - KWD) > .5) { KWD = dd.offsetHeight; ch = true; }
    if (ch) { cap(); tick(x => x + 1); } else calc();
  });
  (0, m.useEffect)(() => {
    let q = 0, go = () => { q || (q = requestAnimationFrame(() => { q = 0; calc(); })); }, sc = () => calc(1);
    document.documentElement.style.overflowAnchor = 'none'; /* the browser's own scroll anchoring would correct a second time */
    addEventListener('scroll', sc, {passive: true}); addEventListener('resize', go);
    return () => { document.documentElement.style.overflowAnchor = ''; removeEventListener('scroll', sc); removeEventListener('resize', go); cancelAnimationFrame(q); };
  }, []);
  return {ref, a, b, top: t, bot: u};
}
/* the two spacers of a windowed list */
const kSp = (k, h) => (0, f.jsx)('div', {key: k, 'aria-hidden': true, style: {height: Math.max(0, h), flexShrink: 0}});
/* "Details" fold in the language page's hero (census and dialect list): closed by default, a real button (keyboard), the open state
   is kept per language in mi so a re-render or a return to the page keeps it. Opening is a short fade/rise (CSS .kdet-b). */
function kDet({id, lbl, kids}) {
  let [o, so] = (0, m.useState)(mi.kdetL === id && !!mi.kdet), has = kids.some(Boolean);
  (0, m.useEffect)(() => { mi.kdet = o; mi.kdetL = id; }, [o, id]);
  (0, m.useEffect)(() => { so(mi.kdetL === id && !!mi.kdet); }, [id]);
  if (!has) return null;
  return (0, f.jsxs)('div', {className: 'kdet' + (o ? ' open' : ''), children: [(0, f.jsxs)('button', {type: 'button', className: 'kdet-t', 'aria-expanded': o, 'aria-controls': 'kdet-b', onClick: () => so(!o), children: [lbl, (0, f.jsx)('i', {className: 'kdet-c', 'aria-hidden': true})]}), o ? (0, f.jsx)('div', {id: 'kdet-b', className: 'kdet-b', children: kids}) : null]});
}
const FDnum = n => n.toLocaleString(Ia());
/* one language's dictionary file -> {s, e, k (keys, built on first search)} */
function FDload(L) {
  let fd = L.info && L.info.fd;
  if (!fd) return Promise.resolve(null);
  if (!FDc[L.lang]) FDc[L.lang] = fetch(FDH + 'dict/' + fd[1]).then(r => { if (!r.ok) throw Error(r.status); return r.json(); })
    .catch(e => { delete FDc[L.lang]; throw e; });
  return FDc[L.lang];
}
function FDkeys(D) {
  if (!D.k) D.k = D.e.map(r => { let k = EK.keys(r[0]); if (r[1]) EK.keys(r[1]).forEach(x => k.indexOf(x) < 0 && k.push(x)); return k; });
  if (!D.g) D.g = D.e.map(r => Da(r[3]));
  return D;
}
/* rank of entry for query q (lower is better, 9 = no match): exact same script, exact key, prefix, contains */
function FDrank(word, keys, gloss, q, qk, qp, qd) {
  if (qp && EK.plain(word) === qp) return 0;
  let r = 9;
  for (let k of keys) for (let x of qk) {
    if (k === x) r = Math.min(r, 1); else if (k.startsWith(x)) r = Math.min(r, 3); else if (x.length > 2 && k.indexOf(x) > -1) r = Math.min(r, 5);
  }
  if (r > 2 && qd && gloss) { let g = ' ' + gloss + ' '; if (g.indexOf(' ' + qd + ' ') > -1) r = Math.min(r, 2); else if (g.indexOf(' ' + qd) > -1) r = Math.min(r, 4); else if (qd.length > 2 && g.indexOf(qd) > -1) r = Math.min(r, 6); }
  return r;
}
const FDq = q => { q = String(q || '').trim(); return {q, qk: q ? EK.keys(q) : [], qp: EK.plain(q), qd: Da(q)}; };
/* core word list matching for the language page (adds Latin keys to the original contains test) */
function FDcoreMatch(e, Q) {
  if (!e._ek) { e._ek = EK.keys(e.word); e.lat && EK.keys(e.lat).forEach(x => e._ek.indexOf(x) < 0 && e._ek.push(x)); }
  return e._ek.some(k => Q.qk.some(x => k.startsWith(x) || (x.length > 2 && k.indexOf(x) > -1)));
}
function FDsplitTag(s) { let i = s.lastIndexOf(' · '); return i > -1 ? [s.slice(0, i), s.slice(i + 3)] : [s, '']; }
function FDrow({r, D, open, onTog, q, hl}) {
  let [src, tag] = FDsplitTag(D.s[r[4] || 0] || ''), pr = r[1] ? r[1] + (r[2] ? ' · /' + r[2] + '/' : '') : r[2] ? '/' + r[2] + '/' : '';
  return (0, f.jsxs)('div', {className: 'fdr' + (open ? ' open' : '') + (hl ? ' hlrow' : ''), children: [
    (0, f.jsxs)('button', {type: 'button', className: 'wr', 'aria-expanded': open, onClick: onTog, children: [
      (0, f.jsx)('span', {className: 'wk', children: (0, f.jsx)(di, {s: r[3].replace(/^\s*(\([^()]*\)\s*)+/, ''), q})}),
      (0, f.jsxs)('span', {className: 'wv', children: [(0, f.jsx)('b', {children: (0, f.jsx)(di, {s: r[0], q})}), pr ? (0, f.jsx)('small', {className: 'pr', children: pr}) : null,
        tag ? (0, f.jsx)('small', {className: 'fdtag', children: tag}) : null]})]}),
    open ? (0, f.jsxs)('p', {className: 'fdx', children: [r[3], (0, f.jsx)('br', {}), (0, f.jsxs)('span', {children: [FDt('src'), ': ', src, tag ? ' · ' + tag : '']})]}) : null]});
}
/* "Full dictionary (N words)" section of a language page. q = the page's search text, d = entry to show */
function FDsection({L, q, d}) {
  let fd = L.info && L.info.fd, [st, setSt] = (0, m.useState)(d != null || (q || '').trim().length > 1 ? 'load' : 'idle'),
    [D, setD] = (0, m.useState)(null), [n, setN] = (0, m.useState)(200), [op, setOp] = (0, m.useState)(d != null ? d : -1),
    ref = (0, m.useRef)(null), [dq, setDq] = (0, m.useState)(q || '');
  (0, m.useEffect)(() => { let t = setTimeout(() => setDq(q || ''), 120); return () => clearTimeout(t); }, [q]);
  (0, m.useEffect)(() => { if (st === 'idle' && (q || '').trim().length > 1) setSt('load'); }, [q]);
  (0, m.useEffect)(() => {
    if (st !== 'load') return;
    let live = true;
    FDload(L).then(x => { if (live) { setD(x); setSt('ok'); } }).catch(() => live && setSt('err'));
    return () => { live = false; };
  }, [st, L.lang]);
  (0, m.useEffect)(() => setN(200), [dq]);
  (0, m.useEffect)(() => { if (d != null && D && ref.current) ref.current.scrollIntoView({block: 'center'}); }, [D]);
  let list = (0, m.useMemo)(() => {
    if (!D) return [];
    let Q = FDq(dq);
    if (!Q.q) return D.e.map((r, i) => i);
    FDkeys(D);
    let out = [];
    D.e.forEach((r, i) => { let k = FDrank(r[0], D.k[i], D.g[i], Q.q, Q.qk, Q.qp, Q.qd); k < 9 && out.push([k, i]); });
    out.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return out.map(x => x[1]);
  }, [D, dq]);
  if (!fd) return null;
  let head = (0, f.jsxs)('h3', {className: 'fdh', children: [FDt('full'), (0, f.jsxs)('span', {children: [FDnum(fd[0]), ' ', FDt('words')]})]});
  if (st === 'idle') return (0, f.jsxs)('section', {className: 'fds', children: [head, (0, f.jsx)('button', {type: 'button', className: 'more fdopen', onClick: () => setSt('load'), children: FDt('open') + ' (' + FDnum(fd[0]) + ')'})]});
  if (st === 'load') return (0, f.jsxs)('section', {className: 'fds', 'aria-busy': 'true', children: [head, (0, f.jsxs)('p', {className: 'fdload', children: [(0, f.jsx)('i', {}), FDt('loading')]})]});
  if (st === 'err') return (0, f.jsxs)('section', {className: 'fds', children: [head, (0, f.jsx)('p', {className: 'empty', children: FDt('failed')}), (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setSt('load'), children: FDt('retry')})]});
  let qq = dq.trim(), show = list.slice(0, n), focus = d != null && D.e[d] ? d : null;
  return (0, f.jsxs)('section', {className: 'fds', children: [head,
    focus != null ? (0, f.jsx)('div', {ref, className: 'lrows fdfocus', children: (0, f.jsx)(FDrow, {r: D.e[focus], D, open: !0, hl: !0, onTog: () => {}, q: ''})}) : null,
    qq && !list.length ? (0, f.jsx)('p', {className: 'empty', children: FDt('none')}) : null,
    (0, f.jsx)('div', {className: 'lrows fdrows', children: show.map(i => (0, f.jsx)(FDrow, {r: D.e[i], D, q: qq, open: op === i, onTog: () => setOp(op === i ? -1 : i)}, i))}),
    list.length > n ? (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setN(n + 200), children: FDt('more') + ' (' + FDnum(Math.min(200, list.length - n)) + ' / ' + FDnum(list.length - n) + ')'}) : null]});
}
/* ---------- main search over the dictionary tier (sharded index, one small file per key prefix) */
function FDindex() {
  if (!FDsI) FDsI = fetch(FDH + 'search/' + FDV + '/index.json').then(r => { if (!r.ok) throw Error(r.status); return r.json(); })
    .then(x => (x.split = new Set(x.split), x)).catch(e => { FDsI = null; throw e; });
  return FDsI;
}
const FDhex = p => Array.from(p).map(c => c.codePointAt(0).toString(16)).join('-');
function FDshard(I, k) {
  let p = EK.prefix(k, Math.min(2, Array.from(k).length)), n = Array.from(k).length;
  while (I.split.has(p) && n > Array.from(p).length) p = EK.prefix(k, Array.from(p).length + 1);
  if (!FDsc[p]) FDsc[p] = fetch(FDH + 'search/' + FDV + '/' + FDhex(p) + '.json').then(r => r.ok ? r.json() : {e: [], k: []})
    .then(x => (x.p = p, x)).catch(() => (delete FDsc[p], {e: [], k: [], p}));
  return FDsc[p];
}
function FDsearch(q) {
  let Q = FDq(q);
  if (!Q.qk.length) return Promise.resolve([]);
  return FDindex().then(I => Promise.all(Q.qk.map(k => FDshard(I, k))).then(sh => {
    let best = new Map();
    sh.forEach(S => S.k.forEach(row => {
      let key = S.p + row[0], hitW = Q.qk.some(x => key === x), pre = Q.qk.some(x => key.startsWith(x));
      if (!pre) return;
      for (let j = 1; j < row.length; j++) {
        let v = row[j], mean = v < 0, e = S.e[mean ? ~v : v], word = e[2];
        let r = !mean && Q.qp && EK.plain(word) === Q.qp ? 0 : hitW ? (mean ? 2 : 1) : (mean ? 4 : 3);
        let id = e[0] + ':' + e[1], o = best.get(id);
        if (!o || r < o.r) best.set(id, {r, L: I.langs[e[0]], i: e[1], w: word, p: e[3], g: e[4]});
      }
    }));
    return Array.from(best.values()).sort((a, b) => a.r - b.r || a.w.length - b.w.length || a.w.localeCompare(b.w));
  }));
}
function FDresults({q, fam = 'all'}) {
  let [res, setRes] = (0, m.useState)(null), [n, setN] = (0, m.useState)(60), qq = String(q || '').trim();
  (0, m.useEffect)(() => {
    setN(60);
    if (!qq) { setRes(null); return; }
    let live = true, t = setTimeout(() => FDsearch(qq).then(x => live && setRes({q: qq, x})).catch(() => live && setRes({q: qq, x: []})), 120);
    return () => { live = false; clearTimeout(t); };
  }, [qq]);
  if (!qq) return null;
  if (!res || res.q !== qq) return (0, f.jsx)('p', {className: 'gh fdsg', children: FDt('searching')});
  let lang = x => fa['l-' + oa(x.L)], xs = res.x.filter(x => { let L = lang(x); return L && ('all' === fam || L.family === fam); });
  if (!xs.length) return null;
  return (0, f.jsxs)('div', {className: 'fdsr', children: [(0, f.jsxs)('p', {className: 'gh', children: [FDt('inDict'), ' · ', FDnum(xs.length)]}),
    (0, f.jsx)('div', {className: 'kgrid sgrid', children: xs.slice(0, n).map(x => { let L = lang(x);
      return (0, f.jsxs)('button', {type: 'button', className: 'kt rt', onClick: () => { Qa(qq); Ja('d' + x.i + '-' + L.id.slice(2)); }, children: [
        (0, f.jsx)('span', {className: 'kn', children: (0, f.jsx)(di, {s: x.g, q: qq})}),
        (0, f.jsxs)('span', {className: 'kb', children: [(0, f.jsx)('span', {className: 'kw', children: (0, f.jsx)(di, {s: x.w, q: qq})}),
          x.p ? (0, f.jsx)('span', {className: 'kpr pr', children: x.p}) : null,
          (0, f.jsxs)('span', {className: 'kl', children: [(0, f.jsx)('i', {className: 'dot ' + L.family}), Na(L)]})]})]}, x.L + x.i); })}),
    xs.length > n ? (0, f.jsx)('button', {type: 'button', className: 'more', onClick: () => setN(n + 60), children: FDt('more') + ' (' + FDnum(xs.length - n) + ')'}) : null]});
}

/* phones: a quiet "Dictionary" row on the home page, right above the A–Z tile (the tab bar keeps 3 items) */
(function FDdictRow() {
  let tick = 0;
  const run = () => {
    tick = 0;
    const az = document.querySelector('.ct-grid > .ct.ctz:not(.fdict)');
    if (!az || az.parentNode.querySelector('.fdict')) return;
    const tab = document.querySelector('.tabbar .in > button:nth-child(1)');
    if (!tab) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ct ctz fdict';
    const label = (tab.querySelector('span:not(.icn)') || tab).textContent.trim();
    /* same anatomy as the A–Z tile: header label, then a body with the big glyph line */
    b.innerHTML = '<span class="cn"></span><span class="cw"><span class="cs on"><span class="cx">Aa · Аа · Αα</span><span class="cl">abc · абв · αβγ</span></span></span>';
    b.querySelector('.cn').textContent = label; b.setAttribute('aria-label', label);
    b.addEventListener('click', () => tab.click());
    az.parentNode.insertBefore(b, az);
  };
  new MutationObserver(() => { if (!tick) tick = requestAnimationFrame(run); })
    .observe(document.documentElement, {childList: true, subtree: true});
})();

/* phones: one light/dark button on every page (top-left, beside the back arrow) */
(function FDtheme() {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'fdtheme'; b.setAttribute('aria-label', Ea(({sq: 'Ndriçim i çelët / i errët', sr: 'Svetli / tamni prikaz'})[ya()] || 'Light / dark mode'));
  const isDark = () => {
    const t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  b.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('khl-theme', next); } catch (e) {}
  });
  const add = () => document.body && !document.body.contains(b) && document.body.appendChild(b);
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', add) : add();
})();

/* every word row gets its own copy control: "word /pron/ — translation" (replaces the header copy-list button) */
(function FDrowCopy() {
  let tick = 0;
  const run = () => {
    tick = 0;
    document.querySelectorAll('.wr:not([data-fdcp])').forEach(r => {
      r.setAttribute('data-fdcp', '1');
      const c = document.createElement('span');
      c.className = 'fdcp'; c.setAttribute('role', 'button'); c.setAttribute('tabindex', '0'); c.setAttribute('aria-label', 'Copy');
      r.appendChild(c);
    });
  };
  new MutationObserver(() => { if (!tick) tick = requestAnimationFrame(run); })
    .observe(document.documentElement, {childList: true, subtree: true});
  const copy = (c) => {
    const r = c.closest('.wr'); if (!r) return;
    const t = s => { const e = r.querySelector(s); return e ? e.textContent.trim() : ''; };
    const word = t('.wv b'), pr = t('.wv .pr'), mean = t('.wk');
    const text = [word, pr].filter(Boolean).join(' ') + (mean ? ' — ' + mean : '');
    const done = () => { c.classList.add('ok'); setTimeout(() => c.classList.remove('ok'), 1200); };
    try { navigator.clipboard.writeText(text).then(done, done); } catch (e) {}
  };
  const handler = e => {
    const c = e.target.closest && e.target.closest('.fdcp');
    if (!c) return;
    if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault(); e.stopPropagation();
    if (e.type !== 'pointerdown') copy(c);
  };
  ['pointerdown', 'click', 'keydown'].forEach(ev => document.addEventListener(ev, handler, true));
})();

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
KW=kWin(d.length,e.id+"|"+a+"|"+s.trim(),66),
h=ua.slice().sort((e,t)=>Na(e).localeCompare(Na(t),Ia())),
p=h.indexOf(e),
g=r.sp,
b=new Set;
u.forEach(e=>e.src.forEach(e=>b.add(e)));
let y=Array.from(b).concat(g?[("Unicode CLDR estimate"===g.src?"Unicode CLDR ("+n.estimate+")":za(g.src))+(g.y?" "+g.y:"")]:[]).concat(["Glottolog"]).concat(r.an?[n.anL+": "+za(r.anSrc)]:[]);
return(0,f.jsxs)("div",{className:"view lview",style:window.__hdv?window.__hdv(e):void 0,children:[(0,f.jsxs)("div",{className:"head",children:[(0,f.jsxs)("span",{className:"pill",children:[(0,f.jsx)("span",{className:"dot "+e.family}),Ca(e.family)]}),(0,f.jsx)("h2",{children:Na(e)}),(0,f.jsx)(oi,{}),r.an?(0,f.jsx)("p",{className:"anb",lang:"",children:r.an}):null,(0,f.jsxs)("div",{className:"meta",children:[(0,f.jsx)("span",{children:(0,f.jsx)("b",{children:Ma(e)})}),g?(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:za(g.v)})," ",n.spk]}):null,r.lv?(0,f.jsx)("span",{children:Aa(r.lv)}):null]}),null,(0,f.jsx)(kDet,{id:e.id,lbl:({en:"Details",sq:"Detaje",sr:"Detalji",sc:"Детаљи"})[ya()]||"Details",kids:[(()=>{let C=(r.cen||[]).map(e=>({k:e[0],t:" · "+za(e[1])+" · "+e[2]+", "+za(e[3])})),D=window.__diaOf?window.__diaOf(e.lang):null;
D&&Object.keys(D).forEach(k=>{C.some(c=>c.k===k)||C.push({k:k,t:""})});
return C.length?(0,f.jsx)("div",{className:"cenl",children:C.map((c,t)=>(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:window.__cnm?window.__cnm(c.k,za):za(c.k)}),c.t,D&&D[c.k]?(0,f.jsx)("span",{className:"cdia",children:D[c.k].map(d=>(0,f.jsxs)("span",{className:"cdi",children:[(0,f.jsx)("i",{style:{background:d[1]}}),d[0]]},d[0]))}):null]},t))}):null})(),void 0!==r.dialectOf&&r.cls&&r.cls.length?(0,f.jsx)("div",{className:"clsl",children:r.cls.map((e,t)=>(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:za(e[0])})," · "+za(e[1])]},t))}):null]})]}),(0,f.jsx)("div",{className:"lsearch",children:(0,f.jsx)(ui,{id:"wq",value:s,onChange:o,ph:n.findIn(Na(e))})}),(0,f.jsx)("div",{className:"ltiles",role:"tablist",children:["all",...aa].map(e=>(0,f.jsx)("button",{type:"button",role:"tab","aria-selected":e===a,className:"lt"+(e===a?" on":""),onClick:()=>{mi.cat=e;
try{localStorage.setItem("khl-cat",e)}catch{}
i(e),t&&t()},children:"all"===e?n.allF:n.cat[e]},e))}),(0,f.jsx)("div",{className:"lrows",ref:KW.ref,children:d.length?[kSp("kt",KW.top)].concat(d.slice(KW.a,KW.b).map((t,n)=>(0,f.jsxs)("button",{type:"button",className:"wr","data-i":KW.a+n,onClick:()=>Ja(hi(e,t)),children:[(0,f.jsx)("span",{className:"wk",children:1===t.cs.length&&t.meaning.indexOf(", ")>-1?La(t.cs[0]):Ta(t.meaning)}),(0,f.jsxs)("span",{className:"wv",children:[(0,f.jsx)("b",{children:t.word}),ai(t)?(0,f.jsx)("small",{className:"pr",children:ai(t)}):null]})]},KW.a+n)),[kSp("kb",KW.bot)]):(0,f.jsx)("p",{className:"empty",children:n.none})}),(0,f.jsx)(FDsection,{L:e,q:s,d:FDd}),(0,f.jsx)("button",{type:"button",className:"minimap",ref:l,"aria-label":n.showMap,onClick:()=>Ja("map-"+e.id.slice(2)),children:(0,f.jsxs)("span",{className:"tag",children:[(0,f.jsx)(si,{n:"map"}),n.showMap]})}),(0,f.jsx)(bp,{prev:p>0?[h[p-1].id,Na(h[p-1])]:null,next:p<h.length-1?[h[p+1].id,Na(h[p+1])]:null}),(0,f.jsxs)("p",{className:"note",children:[n.sources,": ",y.join(" · ")]})]})}
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
KW=kWin(Math.min(h.length,i),t+"|"+d,75);
return(0,f.jsxs)("div",{className:"view",children:[(0,f.jsx)("div",{className:"regs",children:["all","west","ital","cee","east","nord","balk","grk","cauc","dag","volga","iran","casia","casia2","sib"].map(r=>(0,f.jsx)("button",{type:"button","aria-pressed":t===r,onClick:()=>{n(r),s(300)},children:"all"===r?e.allF:e.reg[r]},r))}),(0,f.jsxs)("div",{className:"lets",children:[(0,f.jsx)("button",{type:"button","aria-pressed":"all"===d,onClick:()=>{a("all"),s(300)},children:e.allF}),c.map(e=>(0,f.jsx)("button",{type:"button","aria-pressed":d===e,onClick:()=>{a(e),s(300)},children:e},e))]}),(0,f.jsx)("div",{className:"rows",ref:KW.ref,children:[kSp("kt",KW.top-(KW.a>0&&o(h[KW.a])===o(h[KW.a-1])?KWD:0))].concat(KW.a>0&&o(h[KW.a])===o(h[KW.a-1])?[(0,f.jsx)("div",{className:"letter","data-d":1,children:o(h[KW.a]),key:"kd"})]:[],h.slice(KW.a,KW.b).map((e,t)=>{let x=KW.a+t,n=o(e),r=x<1||n!==o(h[x-1]);
return[r?(0,f.jsx)("div",{className:"letter","data-i":x,children:n,key:"h"+x}):null,(0,f.jsx)(fi,{x:e,di:r?void 0:x,key:x})]}).flat(),[kSp("kb",KW.bot)])}),h.length>i?(0,f.jsx)("button",{type:"button",className:"more",onClick:()=>s(i+300),children:e.more(Math.min(300,h.length-i))}):null]})}
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
R=v-3,
PRV=null,LT=0,DN=0;
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
return"a"===q.kind?D?Ms(F,BG)(.32):F:"b"===q.kind?Ms(F,BG)(D?.48:.3):"rim"===q.kind?Ms(c,t.INK)(.5):c};
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
let off="off"===document.documentElement.getAttribute("data-motion"),
red=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches),
dir=null==PD?0:root.depth>PD?1:root.depth<PD?-1:0;
PD=root.depth;
DN++;
/* A3, dive into a family: the outgoing layer and the incoming layer are two groups moved with transform and opacity only.
   Origin = the tapped slice (going in: its place in the old wheel; going back: the family's place in the wheel that returns),
   found from the angles of the layout that was on screen. A second tap before the first has settled drops the leftover
   layers at once, so no half state stays. */
let SP=(arr,nd)=>{let q=arr&&nd&&arr.find(z=>"rim"!==z.kind&&"tick"!==z.kind&&z.d===nd);
for(let n=nd&&nd.parent;arr&&!q&&n;n=n.parent)q=arr.find(z=>"rim"!==z.kind&&"tick"!==z.kind&&z.d===n);
if(!q)return null;
let m=(q.a0+q.a1)/2;
return{sx:Math.sin(m),sy:-Math.cos(m)}},
OR=dir>0?SP(PRV&&PRV.arcs,root):dir<0?SP(arcs,PRV&&PRV.root):null,
WR=OR?(OR.sx>=0?-9:9)+"deg":"-8deg",
setO=(sel,k)=>sel.style("transform-origin",OR?(OR.sx*R*k).toFixed(1)+"px "+(OR.sy*R*k).toFixed(1)+"px":"0px 0px").style("--wr",WR);
if(off||!dir||performance.now()-LT<320)y.selectAll("g.lay,g.lgone").remove();
else{y.selectAll("g.lgone").remove();
let og=y.selectAll("g.lay").attr("class","lgone"+(dir<0?" dn":"")+(red?" wrm":""));
setO(og,dir>0?.6:.55);
setTimeout(()=>og.remove(),red?140:260)}
LT=performance.now();
let G=y.append("g").attr("class","lay"+(TOP?" wtop":"")+(off?"":red?" wrm":dir>0?" win":dir<0?" wout":" wfirst")),
P=G.append("g").selectAll("path").data(arcs).join("path").attr("class",q=>"wa "+q.kind).attr("fill",col).attr("tabindex",0).attr("role","button").attr("aria-label",q=>q.d.data.name+(q.d.data.L?"":" · "+q.d.value)),
SO=off||!dir?0:setO(G,.5),
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
if(!f&&TOP){let rr=q.r1-q.r0-12,fs=Math.min(14,.8*sp*((q.r0+q.r1)/2));
if(fs<8)return;
let g2=best(CAND(q),fs,8,rr,cl);
if(!g2)return;
let dg=ph*180/Math.PI,lf=ph>Math.PI;
LB.append("text").attr("class",cl).call(__lab,col(q)).each(function(){(q.lts=q.lts||[]).push(this)}).attr("dy","0.35em").attr("font-size",g2.f).attr("text-anchor","middle").attr("transform","rotate("+(dg-90)+") translate("+((q.r0+q.r1)/2).toFixed(1)+",0)"+(lf?" rotate(180)":"")).text(g2.t);
return}
if(!f)return;
let tp=Math.cos(ph)>=0,pd=Math.max(9,.55*f.f),rb=TOP?(tp?q.r1-pd-.72*f.f:q.r1-pd):tp?rmid-.33*f.f:rmid+.33*f.f,A0=PT(rb,tp?ph-hw:ph+hw),A1=PT(rb,tp?ph+hw:ph-hw),id=UID+DN+"_"+ix;
LB.append("path").attr("id",id).attr("fill","none").attr("d","M"+FX(A0)+"A"+rb.toFixed(1)+","+rb.toFixed(1)+" 0 0 "+(tp?1:0)+" "+FX(A1));
LB.append("text").attr("class",cl).call(__lab,col(q)).each(function(){(q.lts=q.lts||[]).push(this)}).attr("font-size",f.f).attr("text-anchor","middle").append("textPath").attr("href","#"+id).attr("startOffset","50%").text(f.t)});
P.attr("d",arc);
{let T=0,
B=0;
if(OUTS.length){let FS=g0>560?13:12,
RH=FS+5,
HW=(()=>{let bb=e.getBoundingClientRect(),c=bb.left+bb.width/2;return Math.max(60,Math.min(c-8,innerWidth-c-8))})(),
cv=document.createElement("canvas").getContext("2d");
cv.font="500 "+FS+"px Manrope, system-ui, sans-serif";
let lay=(grp,sgn)=>{let L=grp.map(o=>{let x=R*Math.sin(o.ph),yr=-R*Math.cos(o.ph),w=cv.measureText(o.nm).width+2;
return{...o,x,yr,w}}).sort((a,b)=>Math.abs(a.x)-Math.abs(b.x));
let placed=[];
L.forEach(o=>{let cs=[];
if(Math.abs(o.x)<.35*R){let c=Math.max(-HW+o.w/2,Math.min(HW-o.w/2,o.x));
cs.push({an:"middle",tx:c,a0:c-o.w/2,a1:c+o.w/2})}
if(o.x<0){let a0=Math.min(HW-o.w,Math.max(-HW,o.x-3));
cs.push({an:"start",tx:a0,a0,a1:a0+o.w})}else{let a1=Math.max(-HW+o.w,Math.min(HW,o.x+3));
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
i.style.transform="translate(-50%,-50%)";
/* D2, phones (<64rem): once a family is open, the wheel with its outside names must end above the choice bar (the fixed bar over the
   tab bar). If it would not, the whole drawing is scaled down to the room (svg size only, viewBox unchanged; the empty band above
   the wheel is used first), measured at scroll position 0. The page's own scroll is not involved. */
{let wr=e.parentNode,sc=1;
wr.style.paddingTop="";
if(root.depth&&window.matchMedia&&!matchMedia("(min-width: 64rem)").matches){let pr=document.createElement("div");
pr.style.cssText="position:fixed;visibility:hidden;pointer-events:none;left:0;width:1px;height:54px;bottom:calc(4.5rem + .75rem + env(safe-area-inset-bottom,0px))";
document.body.appendChild(pr);
let bt=pr.getBoundingClientRect().top;
pr.remove();
let rm2=()=>(bt-8-(e.getBoundingClientRect().top+window.scrollY))/H;
sc=Math.min(1,rm2());
if(sc<1){wr.style.paddingTop=".25rem";
sc=Math.max(.3,Math.min(1,rm2()))}}
y.attr("width",g0);
if(sc<1){y.attr("width",(g0*sc).toFixed(1)).attr("height",(H*sc).toFixed(1));
e.style.height=(H*sc).toFixed(1)+"px";
i.style.top=((v+T)*sc).toFixed(1)+"px";
i.style.transform="translate(-50%,-50%) scale("+sc.toFixed(3)+")"}}}
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
PRV={root,arcs};
/* A4d: the first-draw sweep runs once per visit (WSW outlives this wheel), under 900 ms in all */
TOP&&!rm&&!WSW&&(WSW=1,P.filter(".a").classed("wpl",!0).style("animation-delay",(q,j)=>500+40*j+"ms"));
},
destroy(){y.remove(),a&&a.parentNode&&a.parentNode.querySelectorAll(".wbar").forEach(z=>z.remove())}}}
var Ep=null,WSW=0;
function zp(e){if(!Ep)return e;
let t=e.leaves().find(e=>e.data.L&&e.data.L.id===Ep);
return t&&(t.ancestors().find(e=>e.depth===Math.min(2,t.depth-1))||t.parent)||e}
function Np({path:e,go:t,lbl:n,back:bk}){let r=e.slice(1);
return(0,f.jsx)("nav",{className:"kdep","aria-label":n,children:r.map((a,i)=>{let s=i===r.length-1,o=s?e[i]:a;
/* D2: the last item goes back one level; it carries an arrow and the interface's "Back" so it reads as a control */
return s?(0,f.jsxs)("button",{type:"button",className:"kdp cur kdb",style:{"--dc":Mf(If(a.fam),a)||""},"aria-label":(bk||"Back")+" · "+(o.depth?o.data.name:n),title:a.data.name,onClick:()=>t(o),children:[(0,f.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,f.jsx)("path",{d:"M15 6l-6 6 6 6"})}),(0,f.jsx)("span",{children:bk||"Back"})]},i):(0,f.jsx)("button",{type:"button",className:"kdp",style:{"--dc":Mf(If(a.fam),a)||""},"aria-label":o.depth?o.data.name:n,title:a.data.name,onClick:()=>t(o),children:(0,f.jsx)("i",{})},i)})})}
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
Caucasian:n.getPropertyValue("--f-cauc").trim(),Turkic:n.getPropertyValue("--f-turk").trim(),Uralic:n.getPropertyValue("--f-ural").trim(),Mongolic:n.getPropertyValue("--f-mong").trim(),Germanic:n.getPropertyValue("--f-germ").trim(),Baltic:n.getPropertyValue("--f-balt").trim(),BG:n.getPropertyValue("--bg").trim(),
INK:n.getPropertyValue("--ink").trim()};
(0,m.useEffect)(()=>{mi.lq=s},[s]),
(0,m.useEffect)(()=>{if("wheel"===a&&d.current)return g.current=qp(d.current,v,0,e=>{e&&!e.data.L&&c(e)},h.current,p.current,r),()=>{g.current&&g.current.destroy(),g.current=null}},[a,l,t,__tk]),
(0,m.useEffect)(()=>{g.current&&g.current.draw(u)},[u,a,l,t,__tk]),
(0,m.useEffect)(()=>{let e=new MutationObserver(()=>__stk(e=>e+1));
return e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>e.disconnect()},[]);
let b=u.ancestors().reverse(),
y=((u.children||[]).filter(e=>!e.data.L),Da(s.trim()));
u.leaves().map(e=>e.data.L).sort((e,t)=>Na(e).localeCompare(Na(t),Ia())).filter(e=>!y||Da(Na(e)+" "+Ma(e)+" "+e.lang+" "+(e.info&&e.info.an||"")).indexOf(y)>-1);
return(0,f.jsxs)("div",{className:"view"+("tree"===a?" tvtree":""),id:"langs",children:[(0,f.jsx)("div",{className:"lmrow",children:(0,f.jsxs)("div",{className:"lm tvs",role:"tablist",children:[(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":"wheel"===a,onClick:()=>i("wheel"),children:[(0,f.jsx)(si,{n:"wheel"}),(0,f.jsx)("span",{children:r.wheel})]}),(0,f.jsxs)("button",{type:"button",role:"tab","aria-selected":"tree"===a,onClick:()=>i("tree"),children:[(0,f.jsx)(si,{n:"tree"}),(0,f.jsx)("span",{children:r.tree})]})]})}),"tree"===a?(0,f.jsx)(Lp,{s:l}):(0,f.jsxs)("div",{className:"sbwrap",children:[(0,f.jsx)(Mp,{root:l,cur:u,go:c}),(0,f.jsx)(Np,{path:b,go:c,lbl:r.nav.tree,back:r.back}),(0,f.jsx)("div",{className:"sb",ref:d,children:(0,f.jsx)("div",{className:"sbc",ref:p})}),(0,f.jsx)("p",{className:"sbh",ref:h,hidden:!0,children:""})]}),null]})}
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
let GM=null,gT=Fh,gB=0,gC=0,gZ=-1,gOne=1,gFit=0,gMv=!1,gLon=!1;
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
q.attr("data-gl",1),E.remove(),E=Q2.insert("g",":first-child");
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
let N=[];
let M=j.scale()/function(e){return e&&e.__esModule?e.default:e}(lf).S0,C=j.translate(),L="translate("+C[0]+","+C[1]+") scale("+M+")",T=e=>!!(da[e.lang]&&(da[e.lang].d||da[e.lang].h)),R=E.append("g").attr("class","ters"),O=R.append("g").attr("transform",L),D=null;
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

(!ff&&(ff=kAfterMap().then(()=>new Promise(e=>(window.requestIdleCallback||(e=>setTimeout(e,300)))(e,{timeout:1500}))).then(()=>Promise.all([fetch("data/today.json").then(e=>e.json()),kTerrD()])).then(([e])=>{let t=ef(e,e.objects.regions).features,n=ef(e,e.objects.countries).features;
return[...t,...n].forEach(e=>{e.bb=kHitBox(e)}),hf={t:e,R:t,C:n,get mesh(){return this._m||(this._m=af(e,e.objects.regions,(e,t)=>e!==t&&e.properties.c===t.properties.c))}}}).catch(()=>null)),ff).then(e=>{e&&q.node().isConnected&&(nt&&lt(nt),bt(),kKeys())});
try{new ResizeObserver(()=>e.style.setProperty("--ch",(t.hidden?0:t.offsetHeight+10)+"px")).observe(t),new MutationObserver(()=>e.style.setProperty("--ch",(t.hidden?0:t.offsetHeight+10)+"px")).observe(t,{attributes:!0,attributeFilter:["hidden"]})}catch{}
e.addEventListener("focusin",e=>{e.target.closest&&e.target.closest(".kfb")&&t.classList.contains("kpanel")&&!t.hidden&&(t.hidden=!0,Le(null))});
yt=E.append("g").attr("class","adm2l").attr("pointer-events","none"),setTimeout(()=>kAfterMap().then(Zf).then(e=>{e&&q.node().isConnected&&(se=e.F.map((e,t)=>{let n=e.geometry,r="Polygon"===n.type?[n.coordinates]:n.coordinates,a=null,i=-1;
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
$.selectAll("text").data([["Slavic",33,53.5],["Romance",.5,44.6],["Iranian",54,33],["Greek",24.6,37],["Albanian",20.1,41.1],["Uralic",62,63.6],["Turkic",70,47.5],["Caucasian",44.6,44.15],["Mongolic",106,45.2],["Germanic",10.0,55.6],["Baltic",24.5,56.2]]).join("text").attr("class",e=>"regn fam "+e[0]).style("--fk",e=>fA[e[0]]>0&&f1>f0?((Math.log(fA[e[0]])-f0)/(f1-f0)).toFixed(3):0).attr("x",e=>j([e[1],e[2]])[0]).attr("y",e=>j([e[1],e[2]])[1]).text(e=>Ca(e[0]).toLocaleUpperCase());
!function(e,t,n,r,a,i,s){op().then(o=>{if(!o||!e.node().isConnected)return;
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
a&&g.append("g").attr("class","tout "+e).attr("transform",n).append("path").attr("d",a).attr("fill","none").attr("fill-rule","evenodd").attr("vector-effect","non-scaling-stroke")})})}(E,j,L,x,T,G,""),Df().then(e=>{
}),e.querySelectorAll(".mtip").forEach(e=>e.remove());
let Z=document.createElement("div");
Z.className="mtip",Z.hidden=!0,e.appendChild(Z);
let Q=E.append("g").attr("transform",L).append("path").attr("class","zhl").attr("fill-rule","evenodd");
function Y(t,n){if(t.pointerType&&"mouse"!==t.pointerType)return;
let r=Ws(t.sourceEvent||t,e);
Z.innerHTML=n,Z.hidden=!1;
let a=Z.offsetWidth,i=Z.offsetHeight,s="mouse"!==At,o=s?r[0]-a/2:r[0]+14,l=s?r[1]-i-26:r[1]+16;
s?(o=Math.max(8,Math.min(o,e.clientWidth-a-8)),l<58&&(l=r[1]+28)):(o+a>e.clientWidth-8&&(o=r[0]-a-14),l+i>e.clientHeight-8&&(l=r[1]-i-12)),Z.style.transform="translate("+Math.round(o)+"px,"+Math.round(l)+"px)"}
function J(){clearTimeout(Pt),Z.hidden=!0,Z.classList.remove("pin"),Q.attr("d",null)}
q.on("pointerleave",()=>{X||J(),De(null)});
let X=!1,ee={},te=null,ne={},re={},ae=null,ie=null,se=[],oe=new Set;
function le(e){let t,n,r,a=kPl(e);
if(!a)return null;
let s=a.r?a.r.properties.n:"",o=a.c?a.c.properties.n:"",l=a.r&&(t=a.r)&&("Crimea"===t.properties.n||"Sevastopol"===t.properties.n)?h.crimea:"";
(r=[((n=j(e))[0]-C[0])/M,(n[1]-C[1])/M],x.filter(e=>{let t=0;
return function(e){if(ee[e.lang])return ee[e.lang];
let t=da[e.lang]&&da[e.lang].d,n=[];
return t&&(t.split("M").forEach(e=>{e&&n.push(e.replace(/Z/g,"").split("L").map(e=>e.split(",").map(Number)))}),ee[e.lang]=n),n}(e).forEach(e=>{Id(e,r)&&t++}),t%2==1})).map(Na);
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
if(T(e)){let u=U(e);
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
function Ae(){gSync();
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
Ge((Ue(e),de(Ue(e))),n,e)}),E.append("g");
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
gMv||Ve.selectAll("g.pin").attr("transform",e=>"translate("+e._xy[0]+","+e._xy[1]+") scale("+(e===nt?1.4*t:t)+")"),Qe.selectAll("g.city").attr("transform",t=>"translate("+t.x+","+t.y+") scale("+1/Math.pow(e,.9)+")"),function(e){let t=Qe.selectAll("g.city.kp");
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
t&&(t.split("M").forEach(e=>{e&&n.push(e.replace(/Z/g,"").split("L").map(e=>e.split(",").map(Number)))}),ee[e.lang]=n)}
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
function bt(t){Ne(t=t||kV()),ot(t.k),clearTimeout(Mt),Mt=setTimeout(()=>{q.node().isConnected&&!q.node().classList.contains("zooming")&&pe(kV())},90);
let n,r=t.k,a=[],i=vt(r);
q.classed("ov",!i).classed("zin",r>=2.2).classed("kpho",!me()&&!p),p&&(a.push([0,0,b,52]),a.push([0,y-w(),b,y])),function(e){if(!p)return function(e){let t=x.length,n=x.map((e,t)=>t),r=e=>{for(;n[e]!==e;)n[e]=n[n[e]],e=n[e];
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
let kPW=kPh()&&!!p,kOk=kOrd(l,e=>(e.__data__===nt?tt:et).node());
if(l.forEach(e=>{let n=e.__data__;
if(kOk||(n===nt?tt:et).node().appendChild(e),!i||!n.cl&&ft.has(n.id)||rt&&!n.cl&&n.family!==rt&&n!==nt||!Xe&&!rt&&!n.cl&&n!==nt&&t.k<3.4||kn&&!n.cl&&n!==nt&&!kn.has(n))return void(e.style.opacity=0);
let r=n===nt||n.cl?14:12.5,l=t.applyX(n._xy[0]),u=t.applyY(n._xy[1]),h=n.cl?mt(n)*o+5:(n===nt?1.35*s:s)+4,f=kPW?kTw(e,r):e.textContent.length*r*.56,p=[["start",l+h,u+5,[l+h-1,u+5-r,l+h+f+2,u+6]],["end",l-h,u+5,[l-h-f-2,u+5-r,l-h+1,u+6]],["middle",l,u-h-3,[l-f/2-2,u-h-3-r,l+f/2+2,u-h+1]],["middle",l,u+h+r-1,[l-f/2-2,u+h-1,l+f/2+2,u+h+r+2]],["start",l+.7*h,u-.7*h-2,[l+.7*h-1,u-.7*h-2-r,l+.7*h+f+2,u-.7*h+2]],["start",l+.7*h,u+.7*h+r-2,[l+.7*h-1,u+.7*h-2,l+.7*h+f+2,u+.7*h+r+1]],["end",l-.7*h,u-.7*h-2,[l-.7*h-f-2,u-.7*h-2-r,l-.7*h+1,u-.7*h+2]],["end",l-.7*h,u+.7*h+r-2,[l-.7*h-f-2,u+.7*h-2,l-.7*h+1,u+.7*h+r+1]]],m=null;
/* phones without pins (kpho): the name is the marker, centred on its language's point, with room around it; a name that would
   touch one already placed (larger languages are placed first) waits for a closer zoom. The chosen language keeps its pin. */
if(n!==nt&&!n.cl&&q.node().classList.contains("kpho")){let g=f/2+8,v=u+.36*r;p=[["middle",l,v,[l-g,v-r-4,l+g,v+6]]]}
/* D5, phone word view: the width is measured (the estimate was too short, so names ran off the edge), and every name keeps 5 px at the sides and 3 px above and below,
   so fewer fit and none touches another or the screen edge. Desktop is unchanged. */
kPW&&p.forEach(z=>{z[3]=[z[3][0]-5,z[3][1]-3,z[3][2]+5,z[3][3]+3]});
for(let e=0;e<p.length;e++)if(d(p[e][3])&&!c(p[e][3])){m=p[e];
break}
m||n!==nt||(m=p[0],kPW&&(m=kClamp(m))),m?(e.setAttribute("text-anchor",m[0]),e.setAttribute("x",Math.round(m[1])),e.setAttribute("y",Math.round(m[2])),e.__o=[m[1]-l,m[2]-u],a.push(m[3]),e.style.opacity=1):e.style.opacity=0}),$.style("opacity",i?0:null),function(e){let t=Q2.node().getBoundingClientRect(),n=[],r=[],a=(e,n)=>{let r=e.getBoundingClientRect();
return r.width?[r.left-t.left-n,r.top-t.top-n,r.right-t.left+n,r.bottom-t.top+n]:null},i=(e,t)=>t.some(t=>e[0]<t[2]&&e[2]>t[0]&&e[1]<t[3]&&e[3]>t[1]);
Q2.selectAll("text.plabel").each(function(){if("0"===this.style.opacity)return;
let e=a(this,1);
e&&n.push(e)}),"0"!==$.style("opacity")&&$.selectAll("text").each(function(){let e=a(this,2);
e&&n.push(e)}),Qe.selectAll("g.city").each(function(){if(this.classList.remove("kx"),this.classList.contains("kh"))return;
let e=a(this,1);
e&&(i(e,n)||i(e,r)?this.classList.add("kx"):r.push(e))}),st=n.concat(r),it(e.k)}(t),!i){let e=b>=1024?17*1.15:b>=700?13:11;
$.selectAll("text").attr("dx",function(n){let r=t.applyX(j([n[1],n[2]])[0]),a=this.textContent.length*e*1.12/2+8;
return r-a<4?4+a-r:r+a>b-4?b-4-a-r:0})}/* the census names follow what the page has just written (family names have moved by now) */
gNames()}
var yt,kt,wt,xt,jt,St,_t,qt,Et,zt,Mt=0,Ct=null,At="mouse",Pt=0;
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
function kV(){
if(!GM)return gT;
let v=GM.view(),k=v.s/M;
return Fh.translate(b/2-k*(v.x*M+C[0]),y/2-k*(v.y*M+C[1])).scale(k)}
function kGo(T,ms){gT=T;
GM?GM.jump({s:T.k*M,x:((b/2-T.x)/T.k-C[0])/M,y:((y/2-T.y)/T.k-C[1])/M},f?0:ms||0):(kTick(T),clearTimeout(gB),gB=setTimeout(()=>{q.node().isConnected&&bt()},0))}
/* a flight (to a language, a region, a family, a pin, or back home: Wt, Qt, Ut): 400 to 700 ms by how far it goes, the zoom
   steps it takes plus the screens it pans; the engine flies it with the site's easing. 0 stays a jump. */
function kFly(T,ms){let c=ms&&kV();
if(!c)return ms||0;
let z=Math.abs(Math.log2(T.k/c.k)),d=Math.hypot((b/2-T.x)/T.k-(b/2-c.x)/c.k,(y/2-T.y)/T.k-(y/2-c.y)/c.k)*Math.min(T.k,c.k)/Math.max(b,y);
return Math.round(400+300*Math.min(1,(z+d)/3))}
function kTick(T){let t=T.k,z=t>=11?2:t>=6?1:0;
Rt&&Rt.classList.toggle("on",!Gt(T)||!!nt||!!te);
/* GL: while the engine moves the map it also draws the names and dots (gLab below), so the page's own unseen copies are not
   moved or touched at all; they are put right once, at rest (the "end" handler calls kTick again). Moving them would make the
   browser lay out all of them (about 2,600) on every frame, and taking them out of the drawing instead made it rebuild them all
   whenever the map stopped. */
if(gMv&&gLon)return void(Ot=T);
E.attr("transform",T),z!==gZ&&(gZ=z,q.classed("zmid",z>0).classed("zdeep",z>1)),E2.attr("transform",T);
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
/* the chosen name has no free place: slide it sideways until it is inside the screen */
function kClamp(m){let R=m[3],dx=R[0]<4?4-R[0]:R[2]>b-4?b-4-R[2]:0;
return dx?[m[0],m[1]+dx,m[2],[R[0]+dx,R[1],R[2]+dx,R[3]]]:m}
/* a phone (<64rem); me() cannot say it: it is false in the word view on every screen */
function kPh(){return!window.matchMedia||!matchMedia("(min-width: 64rem)").matches}
function kTw(e,r){let k=r+"|"+e.textContent,c=e.__tw;
return c&&c[0]===k?c[1]:(e.__tw=[k,(e.getComputedTextLength?e.getComputedTextLength():0)||e.textContent.length*r*.56])[1]}
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
kGo(TT,f?0:380),setTimeout(show,f?40:440)}
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
(window.__etimoMap?Promise.resolve(window.__etimoMap):import(new URL("h/map-gl.6cd5dfa8ab.js",document.baseURI).href).then(m=>window.__etimoMap=m)).then(m=>m.attach(e,{languages:x,color:Vf,parent:E.node(),px:u=>[u[0]*M+C[0],u[1]*M+C[1]],k:()=>kV().k})).then(g=>{if(clearTimeout(gTm),gDead||!q.node().isConnected)return;
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
function gLabSync(ms){if(!GM||!GM.labels||!q.node().isConnected)return;
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
/* labels keep their place next to their pin while the map moves; they are laid out again when it rests */
function kFollow(T){Q2.selectAll("text.plabel").each(function(d){let o=this.__o;
o&&d&&d._xy&&"0"!==this.style.opacity&&(this.setAttribute("x",(T.applyX(d._xy[0])+o[0]).toFixed(1)),this.setAttribute("y",(T.applyY(d._xy[1])+o[1]).toFixed(1)))})}
/* credits for the map's data (both maps): one small line in the bottom left corner; only the link takes the pointer */
/* map credits: one line on desktop; on phones a small (i) in the map's lower left corner that starts open, folds away at the
   first touch of the map or while a card is open, and opens again when tapped (styles: v65.css) */
if(!e.querySelector(".mcred")){e.insertAdjacentHTML("beforeend",'<div class="mcred open"><button type="button" class="mcb" aria-expanded="true" aria-label="'+({en:"Map credits",sq:"Burimet e hartës",sr:"Izvori mape",sc:"Извори мапе"}[ya()]||"Map credits")+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11v6M12 7.6v.01"/></svg></button><p class="mct"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a> · © EuroGeographics for the administrative boundaries · Relief: Terrain Tiles (USGS, NOAA, Copernicus)</p></div>');
let K=e.querySelector(".mcred"),KB=K.querySelector(".mcb"),ko=o=>{K.classList.toggle("open",o),KB.setAttribute("aria-expanded",String(o))};
KB.onclick=ev=>{ev.stopPropagation();let o=!K.classList.contains("open")||!K.classList.contains("on")&&!!e.querySelector(":scope>.card:not([hidden])");ko(o),K.classList.toggle("on",o)},e.addEventListener("pointerdown",ev=>{K.contains(ev.target)||(ko(!1),K.classList.remove("on"))},{capture:!0,passive:!0})}
let Rt=e.querySelector(".mreset")||(()=>{let t=e,n=document.createElement("button");
n.type="button",n.className="mreset kreset";
let r={en:"Reset",sq:"Rifillo",sr:"Ispočetka",sc:"Испочетка"}[ya()]||"Reset";
return n.setAttribute("aria-label",r),n.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3.2"/></svg>',n.setAttribute("title",r),t.appendChild(n),n})(),Ot=null;
{let w=t=>{"Escape"===t.key&&(!t.target||!/INPUT|TEXTAREA/.test(t.target.tagName))&&(nt||rt||!Gt(kV()))&&Te()},pd=ev=>{At=ev.pointerType};
window.addEventListener("keydown",w),e.addEventListener("pointerdown",pd,!0),zt=()=>{window.removeEventListener("keydown",w),e.removeEventListener("pointerdown",pd,!0),kMo.disconnect(),clearTimeout(gB),clearTimeout(gC),GM&&GM.off(),GM=null}}
let Ft=e.querySelector("#zi"),Bt=e.querySelector("#zo");
Ft&&(Ft.onclick=()=>gZoom(1.8)),Bt&&(Bt.onclick=()=>gZoom(1/1.8));
let Kt=(i=x.map(e=>e._xy[0]),s=x.map(e=>e._xy[1]),o=Math.min(...i),l=Math.max(...i),u=Math.min(...s),(d=Math.max(1,Math.min(1.6,.62*y/Math.max(1,(c=Math.max(...s))-u))))<9?(b<640?phoneHome():Fh):Fh.translate(b/2,y/2+10).scale(d).translate(-(o+l)/2-.06*(l-o),-(u+c)/2)),Gt=e=>.04>Math.abs(e.k-Kt.k)&&30>Math.abs(e.x-Kt.x)&&30>Math.abs(e.y-Kt.y);
/* GL: the first view shows every language area, on every screen; what appears at which scale is unchanged */
Kt=gHome(),gOne=Math.min(1,gFit||Kt.k);
function phoneHome(){let ys=x.filter(e=>e._xy[0]>0&&e._xy[0]<b).map(e=>e._xy[1]),u=Math.min(...ys),c=Math.max(...ys),top=64,free=y-top-12,k=Math.max(1,Math.min(1.15,.8*free/Math.max(1,c-u)));
return Fh.translate(b/2,top+free/2).scale(k).translate(-b/2,-(u+c)/2)}
function Ut(e){kGo(Kt,kFly(Kt,e||620))}
function Ht(e,t){let n=U(e),r=(n[0]+n[2])/2,a=(n[1]+n[3])/2,c=e.info&&e.info.nest?24:10,i=Math.max(n[2]-n[0],b/c),s=Math.max(n[3]-n[1],y/c);
Wt(r-.75*i,a-.75*s,r+.75*i,a+.75*s,t)}
function Wt(e,t,n,r,a,i){let s=ge(),o=b-s,l=y-52-w(),u=Math.max(1,Math.min(i||40,.86/Math.max((n-e)/o,(r-t)/l,1e-6)));
let TT=Fh.translate(s+o/2,52+l/2).scale(u).translate(-(e+n)/2,-(t+r)/2);
kGo(TT,kFly(TT,a))}
function $t(e){nt=e,kn=null,q.classed("hsel",!!e&&!p).attr("data-sf",e&&!p&&e.family||null);
let t=kV().k;
Ve.selectAll("g.pin").classed("sel",t=>t===e).classed("fade",t=>!!e&&!p&&t!==e),ot(t),e&&Ve.selectAll("g.pin").filter(t=>t===e).raise(),$e.selectAll("circle").data(e?[e]:[],e=>e.id).join("circle").attr("class",e=>"ring "+e.family).attr("cx",e=>e._xy[0]).attr("cy",e=>e._xy[1]).attr("r",11.76/Math.pow(t,.96)),R.selectAll("path.terr").remove(),e&&T(e)&&da[e.lang].x&&O.append("path").attr("class","terr dia2 "+e.family).attr("fill-rule","evenodd").attr("d",da[e.lang].x),kn=e&&!p?nearMap(e):null,lt(e),Fe(e),bt(),Ae()}
Rt&&(Rt.onclick=()=>Te()),window.__kMapHome=Te;
let Vt=-1,Zt=null;
function Qt(e,t){let n=1e9;
g.forEach(t=>{if(t!==e){let r=Math.hypot(t._xy[0]-e._xy[0],t._xy[1]-e._xy[1]);
r<n&&(n=r)}});
let r=Math.min(40,Math.max(5,30/Math.max(n,.3))),a=52+(y-52-w())/2;
let TT=Fh.translate(b/2,a).scale(r).translate(-e._xy[0],-e._xy[1]);
kGo(TT,kFly(TT,t))}
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
if(kGo(Kt,0),bt(),rn){an&&nn(an);
let e=j(rn.c),t=Math.max(.8*gOne,Math.min(150,rn.zs/j.scale())),n=y-52-w();
{let TT=Fh.translate(b/2,t>1.01?52+n/2:y/2).scale(t).translate(-e[0],-e[1]);
kGo(TT,0)}}else if(an)nn(an),setTimeout(()=>Ht(an,760),60*!f);
else if(g.length){if(g.length){let e=g.map(e=>e._xy[0]),t=g.map(e=>e._xy[1]);
Yt(0,!1),setTimeout(()=>Wt(Math.min(...e)-12,Math.min(...t)-12,Math.max(...e)+12,Math.max(...t)+12,700),60*!f)}}else ;
f||(Ve.selectAll("g.pin").each(function(e,t){this.style.setProperty("--pi",t%90)}),q.classed("kboot",!0),setTimeout(()=>q.classed("kboot",!1),3600));
gStart();
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
if(!GM)return null;
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
/* The language areas' outlines (h/terr-d.<hash>.json, terr_split() in scripts/build-page.py): the page starts with only their
   boxes and sizes; the outlines come with the region shapes, once the map has drawn, and are put into da. Everything that reads
   an outline (place card, home places, cities of a language) waits for the region shapes, so it has them. */
let kTDp=null;
function kTerrD(){return kTDp||(kTDp=fetch("h/terr-d.4e1c427dad.json").then(r=>r.ok?r.json():{}).then(S=>{for(const k in S)da[k]&&(da[k].d=S[k]);return!0}).catch(()=>(kTDp=null,!1)))}
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
Promise.all(["h/languages.ed813489ff.json","h/world-50s.ebf739ca60.json"].map(e=>fetch(e).then(t=>{if(!t.ok)throw Error(e+" "+t.status);
return t.json()})).concat([fetch("h/terr.04dff13a81.json").then(e=>e.ok?e.json():{}).catch(()=>({}))])).then(([t,n,r])=>{ua=Object.keys(t).map(e=>({lang:e,place:t[e].pl,family:t[e].fam,gc:t[e].gc,entries:[]})),ca=n,Object.keys(ia).forEach(e=>{ha[e]=[]}),ua.forEach(e=>{e.id="l-"+oa(e.lang),e.info=t[e.lang]||{},fa[e.id]=e}),pa=[],da=r||{},window.__lexReady=!1,Hp.innerHTML="",(0,p.createRoot)(Hp).render((0,f.jsx)(Up,{})),
window.__kStart&&fetch(window.__kStart).then(r=>r.ok?r.json():null).then(S=>{S&&!window.__lexReady&&(kLexStart(S),window.__lexStart=!0,window.dispatchEvent(new Event("etimo:lexstart")))}).catch(()=>{}),kLexWhen().then(()=>{let u="h/lexicon.5954b40a7d.json";
return fetch(u).then(t=>{if(!t.ok)throw Error(u+" "+t.status);
return t.json()})}).then(kLexBuild).then(()=>{window.__lexReady=!0,window.dispatchEvent(new Event("etimo:lex"))}).catch(e=>{console.error(e),Hp.querySelector(".boot")&&(Hp.querySelector(".boot").textContent=ja().loadErr)})}).catch(e=>{console.error(e),Hp.innerHTML='<div class="wrap"><p class="boot">'+ja().loadErr+"</p></div>"});
