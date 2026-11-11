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
