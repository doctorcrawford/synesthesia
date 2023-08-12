function Yy(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function qy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var k_={exports:{}},Ku={},z_={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Ky=Symbol.for("react.fragment"),Zy=Symbol.for("react.strict_mode"),Qy=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),eS=Symbol.for("react.context"),tS=Symbol.for("react.forward_ref"),nS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),rS=Symbol.for("react.lazy"),Dp=Symbol.iterator;function sS(n){return n===null||typeof n!="object"?null:(n=Dp&&n[Dp]||n["@@iterator"],typeof n=="function"?n:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H_=Object.assign,V_={};function Bo(n,e,t){this.props=n,this.context=e,this.refs=V_,this.updater=t||B_}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Bo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function G_(){}G_.prototype=Bo.prototype;function od(n,e,t){this.props=n,this.context=e,this.refs=V_,this.updater=t||B_}var ad=od.prototype=new G_;ad.constructor=od;H_(ad,Bo.prototype);ad.isPureReactComponent=!0;var Up=Array.isArray,W_=Object.prototype.hasOwnProperty,ld={current:null},X_={key:!0,ref:!0,__self:!0,__source:!0};function j_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W_.call(e,i)&&!X_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:n,key:s,ref:o,props:r,_owner:ld.current}}function oS(n,e){return{$$typeof:Qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ud(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qa}function aS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ip=/\/+/g;function Ac(n,e){return typeof n=="object"&&n!==null&&n.key!=null?aS(""+n.key):e.toString(36)}function Kl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qa:case $y:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ac(o,0):i,Up(r)?(t="",n!=null&&(t=n.replace(Ip,"$&/")+"/"),Kl(r,e,t,"",function(u){return u})):r!=null&&(ud(r)&&(r=oS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ip,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Up(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ac(s,a);o+=Kl(s,e,t,l,r)}else if(l=sS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ac(s,a++),o+=Kl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(n,e,t){if(n==null)return n;var i=[],r=0;return Kl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function lS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},Zl={transition:null},uS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:ld};Ve.Children={map:cl,forEach:function(n,e,t){cl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return cl(n,function(){e++}),e},toArray:function(n){return cl(n,function(e){return e})||[]},only:function(n){if(!ud(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=Bo;Ve.Fragment=Ky;Ve.Profiler=Qy;Ve.PureComponent=od;Ve.StrictMode=Zy;Ve.Suspense=nS;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=H_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ld.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)W_.call(e,l)&&!X_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Qa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(n){return n={$$typeof:eS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Jy,_context:n},n.Consumer=n};Ve.createElement=j_;Ve.createFactory=function(n){var e=j_.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:tS,render:n}};Ve.isValidElement=ud;Ve.lazy=function(n){return{$$typeof:rS,_payload:{_status:-1,_result:n},_init:lS}};Ve.memo=function(n,e){return{$$typeof:iS,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=Zl.transition;Zl.transition={};try{n()}finally{Zl.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(n,e){return sn.current.useCallback(n,e)};Ve.useContext=function(n){return sn.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return sn.current.useEffect(n,e)};Ve.useId=function(){return sn.current.useId()};Ve.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return sn.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};Ve.useRef=function(n){return sn.current.useRef(n)};Ve.useState=function(n){return sn.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return sn.current.useTransition()};Ve.version="18.2.0";z_.exports=Ve;var xe=z_.exports;const Wi=qy(xe),cS=Yy({__proto__:null,default:Wi},[xe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=xe,hS=Symbol.for("react.element"),dS=Symbol.for("react.fragment"),pS=Object.prototype.hasOwnProperty,mS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gS={key:!0,ref:!0,__self:!0,__source:!0};function Y_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)pS.call(e,i)&&!gS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hS,type:n,key:s,ref:o,props:r,_owner:mS.current}}Ku.Fragment=dS;Ku.jsx=Y_;Ku.jsxs=Y_;k_.exports=Ku;var fe=k_.exports,Hf={},q_={exports:{}},Un={},$_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,N){var F=L.length;L.push(N);e:for(;0<F;){var I=F-1>>>1,O=L[I];if(0<r(O,N))L[I]=N,L[F]=O,F=I;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var N=L[0],F=L.pop();if(F!==N){L[0]=F;e:for(var I=0,O=L.length,oe=O>>>1;I<oe;){var ee=2*(I+1)-1,se=L[ee],de=ee+1,Me=L[de];if(0>r(se,F))de<O&&0>r(Me,se)?(L[I]=Me,L[de]=F,I=de):(L[I]=se,L[ee]=F,I=ee);else if(de<O&&0>r(Me,F))L[I]=Me,L[de]=F,I=de;else break e}}return N}function r(L,N){var F=L.sortIndex-N.sortIndex;return F!==0?F:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var N=t(u);N!==null;){if(N.callback===null)i(u);else if(N.startTime<=L)i(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=t(u)}}function y(L){if(g=!1,v(L),!x)if(t(l)!==null)x=!0,K(S);else{var N=t(u);N!==null&&W(y,N.startTime-L)}}function S(L,N){x=!1,g&&(g=!1,f(R),R=-1),p=!0;var F=h;try{for(v(N),d=t(l);d!==null&&(!(d.expirationTime>N)||L&&!k());){var I=d.callback;if(typeof I=="function"){d.callback=null,h=d.priorityLevel;var O=I(d.expirationTime<=N);N=n.unstable_now(),typeof O=="function"?d.callback=O:d===t(l)&&i(l),v(N)}else i(l);d=t(l)}if(d!==null)var oe=!0;else{var ee=t(u);ee!==null&&W(y,ee.startTime-N),oe=!1}return oe}finally{d=null,h=F,p=!1}}var E=!1,T=null,R=-1,M=5,w=-1;function k(){return!(n.unstable_now()-w<M)}function j(){if(T!==null){var L=n.unstable_now();w=L;var N=!0;try{N=T(!0,L)}finally{N?U():(E=!1,T=null)}}else E=!1}var U;if(typeof _=="function")U=function(){_(j)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,H=B.port2;B.port1.onmessage=j,U=function(){H.postMessage(null)}}else U=function(){m(j,0)};function K(L){T=L,E||(E=!0,U())}function W(L,N){R=m(function(){L(n.unstable_now())},N)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,K(S))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var F=h;h=N;try{return L()}finally{h=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=h;h=L;try{return N()}finally{h=F}},n.unstable_scheduleCallback=function(L,N,F){var I=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?I+F:I):F=I,L){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=F+O,L={id:c++,callback:N,priorityLevel:L,startTime:F,expirationTime:O,sortIndex:-1},F>I?(L.sortIndex=F,e(u,L),t(l)===null&&L===t(u)&&(g?(f(R),R=-1):g=!0,W(y,F-I))):(L.sortIndex=O,e(l,L),x||p||(x=!0,K(S))),L},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(L){var N=h;return function(){var F=h;h=N;try{return L.apply(this,arguments)}finally{h=F}}}})(K_);$_.exports=K_;var _S=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=xe,Ln=_S;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q_=new Set,Aa={};function ws(n,e){To(n,e),To(n+"Capture",e)}function To(n,e){for(Aa[n]=e,n=0;n<e.length;n++)Q_.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,vS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Op={};function xS(n){return Vf.call(Op,n)?!0:Vf.call(Np,n)?!1:vS.test(n)?Op[n]=!0:(Np[n]=!0,!1)}function yS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function SS(n,e,t,i){if(e===null||typeof e>"u"||yS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ht[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ht[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ht[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ht[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ht[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ht[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ht[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ht[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ht[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function fd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(cd,fd);Ht[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(cd,fd);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(cd,fd);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function hd(n,e,t,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SS(e,t,r,i)&&(t=null),i||r===null?xS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ji=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),e0=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function Xo(n){return n===null||typeof n!="object"?null:(n=Fp&&n[Fp]||n["@@iterator"],typeof n=="function"?n:null)}var ct=Object.assign,Cc;function sa(n){if(Cc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+n}var Rc=!1;function Pc(n,e){if(!n||Rc)return"";Rc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?sa(n):""}function MS(n){switch(n.tag){case 5:return sa(n.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return n=Pc(n.type,!1),n;case 11:return n=Pc(n.type.render,!1),n;case 1:return n=Pc(n.type,!0),n;default:return""}}function jf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zs:return"Fragment";case Ks:return"Portal";case Gf:return"Profiler";case dd:return"StrictMode";case Wf:return"Suspense";case Xf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case e0:return(n.displayName||"Context")+".Consumer";case J_:return(n._context.displayName||"Context")+".Provider";case pd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case md:return e=n.displayName||null,e!==null?e:jf(n.type)||"Memo";case sr:e=n._payload,n=n._init;try{return jf(n(e))}catch{}}return null}function ES(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function n0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TS(n){var e=n0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hl(n){n._valueTracker||(n._valueTracker=TS(n))}function i0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=n0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function du(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yf(n,e){var t=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function kp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=br(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(n,e){e=e.checked,e!=null&&hd(n,"checked",e,!1)}function qf(n,e){r0(n,e);var t=br(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?$f(n,e.type,t):e.hasOwnProperty("defaultValue")&&$f(n,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function zp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function $f(n,e,t){(e!=="number"||du(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var oa=Array.isArray;function fo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+br(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Kf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(oa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:br(t)}}function s0(n,e){var t=br(e.value),i=br(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function o0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?o0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var dl,a0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ca(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(n){wS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),da[e]=da[n]})});function l0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||da.hasOwnProperty(n)&&da[n]?(""+e).trim():e+"px"}function u0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=l0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var AS=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(n,e){if(e){if(AS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Jf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function gd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var th=null,ho=null,po=null;function Vp(n){if(n=tl(n)){if(typeof th!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=tc(e),th(n.stateNode,n.type,e))}}function c0(n){ho?po?po.push(n):po=[n]:ho=n}function f0(){if(ho){var n=ho,e=po;if(po=ho=null,Vp(n),e)for(n=0;n<e.length;n++)Vp(e[n])}}function h0(n,e){return n(e)}function d0(){}var bc=!1;function p0(n,e,t){if(bc)return n(e,t);bc=!0;try{return h0(n,e,t)}finally{bc=!1,(ho!==null||po!==null)&&(d0(),f0())}}function Ra(n,e){var t=n.stateNode;if(t===null)return null;var i=tc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var nh=!1;if(Yi)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){nh=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{nh=!1}function CS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var pa=!1,pu=null,mu=!1,ih=null,RS={onError:function(n){pa=!0,pu=n}};function PS(n,e,t,i,r,s,o,a,l){pa=!1,pu=null,CS.apply(RS,arguments)}function bS(n,e,t,i,r,s,o,a,l){if(PS.apply(this,arguments),pa){if(pa){var u=pu;pa=!1,pu=null}else throw Error(ne(198));mu||(mu=!0,ih=u)}}function As(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function m0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(n){if(As(n)!==n)throw Error(ne(188))}function LS(n){var e=n.alternate;if(!e){if(e=As(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Gp(r),n;if(s===i)return Gp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function g0(n){return n=LS(n),n!==null?_0(n):null}function _0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_0(n);if(e!==null)return e;n=n.sibling}return null}var v0=Ln.unstable_scheduleCallback,Wp=Ln.unstable_cancelCallback,DS=Ln.unstable_shouldYield,US=Ln.unstable_requestPaint,yt=Ln.unstable_now,IS=Ln.unstable_getCurrentPriorityLevel,_d=Ln.unstable_ImmediatePriority,x0=Ln.unstable_UserBlockingPriority,gu=Ln.unstable_NormalPriority,NS=Ln.unstable_LowPriority,y0=Ln.unstable_IdlePriority,Zu=null,yi=null;function OS(n){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Zu,n,void 0,(n.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:zS,FS=Math.log,kS=Math.LN2;function zS(n){return n>>>=0,n===0?32:31-(FS(n)/kS|0)|0}var pl=64,ml=4194304;function aa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _u(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=t&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-li(e),r=1<<t,i|=n[t],e&=~r;return i}function BS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=BS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function rh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function S0(){var n=pl;return pl<<=1,!(pl&4194240)&&(pl=64),n}function Lc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ja(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-li(e),n[e]=t}function VS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-li(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function vd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-li(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ke=0;function M0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var E0,xd,T0,w0,A0,sh=!1,gl=[],_r=null,vr=null,xr=null,Pa=new Map,ba=new Map,ar=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(n,e){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Yo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&xd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function WS(n,e,t,i,r){switch(e){case"focusin":return _r=Yo(_r,n,e,t,i,r),!0;case"dragenter":return vr=Yo(vr,n,e,t,i,r),!0;case"mouseover":return xr=Yo(xr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Yo(Pa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,Yo(ba.get(s)||null,n,e,t,i,r)),!0}return!1}function C0(n){var e=is(n.target);if(e!==null){var t=As(e);if(t!==null){if(e=t.tag,e===13){if(e=m0(t),e!==null){n.blockedOn=e,A0(n.priority,function(){T0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=oh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);eh=i,t.target.dispatchEvent(i),eh=null}else return e=tl(t),e!==null&&xd(e),n.blockedOn=t,!1;e.shift()}return!0}function jp(n,e,t){Ql(n)&&t.delete(e)}function XS(){sh=!1,_r!==null&&Ql(_r)&&(_r=null),vr!==null&&Ql(vr)&&(vr=null),xr!==null&&Ql(xr)&&(xr=null),Pa.forEach(jp),ba.forEach(jp)}function qo(n,e){n.blockedOn===e&&(n.blockedOn=null,sh||(sh=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,XS)))}function La(n){function e(r){return qo(r,n)}if(0<gl.length){qo(gl[0],n);for(var t=1;t<gl.length;t++){var i=gl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(_r!==null&&qo(_r,n),vr!==null&&qo(vr,n),xr!==null&&qo(xr,n),Pa.forEach(e),ba.forEach(e),t=0;t<ar.length;t++)i=ar[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ar.length&&(t=ar[0],t.blockedOn===null);)C0(t),t.blockedOn===null&&ar.shift()}var mo=Ji.ReactCurrentBatchConfig,vu=!0;function jS(n,e,t,i){var r=Ke,s=mo.transition;mo.transition=null;try{Ke=1,yd(n,e,t,i)}finally{Ke=r,mo.transition=s}}function YS(n,e,t,i){var r=Ke,s=mo.transition;mo.transition=null;try{Ke=4,yd(n,e,t,i)}finally{Ke=r,mo.transition=s}}function yd(n,e,t,i){if(vu){var r=oh(n,e,t,i);if(r===null)Hc(n,e,i,xu,t),Xp(n,i);else if(WS(r,n,e,t,i))i.stopPropagation();else if(Xp(n,i),e&4&&-1<GS.indexOf(n)){for(;r!==null;){var s=tl(r);if(s!==null&&E0(s),s=oh(n,e,t,i),s===null&&Hc(n,e,i,xu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(n,e,i,null,t)}}var xu=null;function oh(n,e,t,i){if(xu=null,n=gd(i),n=is(n),n!==null)if(e=As(n),e===null)n=null;else if(t=e.tag,t===13){if(n=m0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return xu=n,null}function R0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case _d:return 1;case x0:return 4;case gu:case NS:return 16;case y0:return 536870912;default:return 16}default:return 16}}var ur=null,Sd=null,Jl=null;function P0(){if(Jl)return Jl;var n,e=Sd,t=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Jl=r.slice(n,1<i?1-i:void 0)}function eu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _l(){return!0}function Yp(){return!1}function In(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Yp,this.isPropagationStopped=Yp,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=In(Ho),el=ct({},Ho,{view:0,detail:0}),qS=In(el),Dc,Uc,$o,Qu=ct({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$o&&($o&&n.type==="mousemove"?(Dc=n.screenX-$o.screenX,Uc=n.screenY-$o.screenY):Uc=Dc=0,$o=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),qp=In(Qu),$S=ct({},Qu,{dataTransfer:0}),KS=In($S),ZS=ct({},el,{relatedTarget:0}),Ic=In(ZS),QS=ct({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),JS=In(QS),eM=ct({},Ho,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tM=In(eM),nM=ct({},Ho,{data:0}),$p=In(nM),iM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sM[n])?!!e[n]:!1}function Ed(){return oM}var aM=ct({},el,{key:function(n){if(n.key){var e=iM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=eu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(n){return n.type==="keypress"?eu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?eu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lM=In(aM),uM=ct({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=In(uM),cM=ct({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),fM=In(cM),hM=ct({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),dM=In(hM),pM=ct({},Qu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=In(pM),gM=[9,13,27,32],Td=Yi&&"CompositionEvent"in window,ma=null;Yi&&"documentMode"in document&&(ma=document.documentMode);var _M=Yi&&"TextEvent"in window&&!ma,b0=Yi&&(!Td||ma&&8<ma&&11>=ma),Zp=String.fromCharCode(32),Qp=!1;function L0(n,e){switch(n){case"keyup":return gM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function vM(n,e){switch(n){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(Qp=!0,Zp);case"textInput":return n=e.data,n===Zp&&Qp?null:n;default:return null}}function xM(n,e){if(Qs)return n==="compositionend"||!Td&&L0(n,e)?(n=P0(),Jl=Sd=ur=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!yM[n.type]:e==="textarea"}function U0(n,e,t,i){c0(i),e=yu(e,"onChange"),0<e.length&&(t=new Md("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ga=null,Da=null;function SM(n){W0(n,0)}function Ju(n){var e=to(n);if(i0(e))return n}function MM(n,e){if(n==="change")return e}var I0=!1;if(Yi){var Nc;if(Yi){var Oc="oninput"in document;if(!Oc){var em=document.createElement("div");em.setAttribute("oninput","return;"),Oc=typeof em.oninput=="function"}Nc=Oc}else Nc=!1;I0=Nc&&(!document.documentMode||9<document.documentMode)}function tm(){ga&&(ga.detachEvent("onpropertychange",N0),Da=ga=null)}function N0(n){if(n.propertyName==="value"&&Ju(Da)){var e=[];U0(e,Da,n,gd(n)),p0(SM,e)}}function EM(n,e,t){n==="focusin"?(tm(),ga=e,Da=t,ga.attachEvent("onpropertychange",N0)):n==="focusout"&&tm()}function TM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ju(Da)}function wM(n,e){if(n==="click")return Ju(e)}function AM(n,e){if(n==="input"||n==="change")return Ju(e)}function CM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var fi=typeof Object.is=="function"?Object.is:CM;function Ua(n,e){if(fi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Vf.call(e,r)||!fi(n[r],e[r]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,e){var t=nm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nm(t)}}function O0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?O0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function F0(){for(var n=window,e=du();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=du(n.document)}return e}function wd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function RM(n){var e=F0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&O0(t.ownerDocument.documentElement,t)){if(i!==null&&wd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=im(t,s);var o=im(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PM=Yi&&"documentMode"in document&&11>=document.documentMode,Js=null,ah=null,_a=null,lh=!1;function rm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;lh||Js==null||Js!==du(i)||(i=Js,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Ua(_a,i)||(_a=i,i=yu(ah,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Js)))}function vl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var eo={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Fc={},k0={};Yi&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ec(n){if(Fc[n])return Fc[n];if(!eo[n])return n;var e=eo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in k0)return Fc[n]=e[t];return n}var z0=ec("animationend"),B0=ec("animationiteration"),H0=ec("animationstart"),V0=ec("transitionend"),G0=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(n,e){G0.set(n,e),ws(e,[n])}for(var kc=0;kc<sm.length;kc++){var zc=sm[kc],bM=zc.toLowerCase(),LM=zc[0].toUpperCase()+zc.slice(1);Or(bM,"on"+LM)}Or(z0,"onAnimationEnd");Or(B0,"onAnimationIteration");Or(H0,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(V0,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function om(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,bS(i,e,void 0,n),n.currentTarget=null}function W0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,u),s=l}}}if(mu)throw n=ih,mu=!1,ih=null,n}function tt(n,e){var t=e[dh];t===void 0&&(t=e[dh]=new Set);var i=n+"__bubble";t.has(i)||(X0(e,n,2,!1),t.add(i))}function Bc(n,e,t){var i=0;e&&(i|=4),X0(t,n,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[xl]){n[xl]=!0,Q_.forEach(function(t){t!=="selectionchange"&&(DM.has(t)||Bc(t,!1,n),Bc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[xl]||(e[xl]=!0,Bc("selectionchange",!1,e))}}function X0(n,e,t,i){switch(R0(e)){case 1:var r=jS;break;case 4:r=YS;break;default:r=yd}t=r.bind(null,e,t,n),r=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Hc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}p0(function(){var u=s,c=gd(t),d=[];e:{var h=G0.get(n);if(h!==void 0){var p=Md,x=n;switch(n){case"keypress":if(eu(t)===0)break e;case"keydown":case"keyup":p=lM;break;case"focusin":x="focus",p=Ic;break;case"focusout":x="blur",p=Ic;break;case"beforeblur":case"afterblur":p=Ic;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fM;break;case z0:case B0:case H0:p=JS;break;case V0:p=dM;break;case"scroll":p=qS;break;case"wheel":p=mM;break;case"copy":case"cut":case"paste":p=tM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kp}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Ra(_,f),y!=null&&g.push(Na(_,y,v)))),m)break;_=_.return}0<g.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==eh&&(x=t.relatedTarget||t.fromElement)&&(is(x)||x[qi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?is(x):null,x!==null&&(m=As(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(g=qp,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=Kp,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:to(p),v=x==null?h:to(x),h=new g(y,_+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,is(c)===u&&(g=new g(f,_+"enter",x,t,c),g.target=v,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,f=x,_=0,v=g;v;v=Ps(v))_++;for(v=0,y=f;y;y=Ps(y))v++;for(;0<_-v;)g=Ps(g),_--;for(;0<v-_;)f=Ps(f),v--;for(;_--;){if(g===f||f!==null&&g===f.alternate)break t;g=Ps(g),f=Ps(f)}g=null}else g=null;p!==null&&am(d,h,p,g,!1),x!==null&&m!==null&&am(d,m,x,g,!0)}}e:{if(h=u?to(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=MM;else if(Jp(h))if(I0)S=AM;else{S=TM;var E=EM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=wM);if(S&&(S=S(n,u))){U0(d,S,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&$f(h,"number",h.value)}switch(E=u?to(u):window,n){case"focusin":(Jp(E)||E.contentEditable==="true")&&(Js=E,ah=u,_a=null);break;case"focusout":_a=ah=Js=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,rm(d,t,c);break;case"selectionchange":if(PM)break;case"keydown":case"keyup":rm(d,t,c)}var T;if(Td)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qs?L0(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(b0&&t.locale!=="ko"&&(Qs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qs&&(T=P0()):(ur=c,Sd="value"in ur?ur.value:ur.textContent,Qs=!0)),E=yu(u,R),0<E.length&&(R=new $p(R,n,null,t,c),d.push({event:R,listeners:E}),T?R.data=T:(T=D0(t),T!==null&&(R.data=T)))),(T=_M?vM(n,t):xM(n,t))&&(u=yu(u,"onBeforeInput"),0<u.length&&(c=new $p("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}W0(d,e)})}function Na(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(n,t),s!=null&&i.unshift(Na(n,s,r)),s=Ra(n,e),s!=null&&i.push(Na(n,s,r))),n=n.return}return i}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function am(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ra(t,s),l!=null&&o.unshift(Na(t,l,a))):r||(l=Ra(t,s),l!=null&&o.push(Na(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var UM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function lm(n){return(typeof n=="string"?n:""+n).replace(UM,`
`).replace(IM,"")}function yl(n,e,t){if(e=lm(e),lm(n)!==e&&t)throw Error(ne(425))}function Su(){}var uh=null,ch=null;function fh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,NM=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,OM=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(n){return um.resolve(null).then(n).catch(FM)}:hh;function FM(n){setTimeout(function(){throw n})}function Vc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),La(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);La(e)}function yr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function cm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),_i="__reactFiber$"+Vo,Oa="__reactProps$"+Vo,qi="__reactContainer$"+Vo,dh="__reactEvents$"+Vo,kM="__reactListeners$"+Vo,zM="__reactHandles$"+Vo;function is(n){var e=n[_i];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qi]||t[_i]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cm(n);n!==null;){if(t=n[_i])return t;n=cm(n)}return e}n=t,t=n.parentNode}return null}function tl(n){return n=n[_i]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function to(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function tc(n){return n[Oa]||null}var ph=[],no=-1;function Fr(n){return{current:n}}function nt(n){0>no||(n.current=ph[no],ph[no]=null,no--)}function et(n,e){no++,ph[no]=n.current,n.current=e}var Lr={},Kt=Fr(Lr),cn=Fr(!1),_s=Lr;function wo(n,e){var t=n.type.contextTypes;if(!t)return Lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function Mu(){nt(cn),nt(Kt)}function fm(n,e,t){if(Kt.current!==Lr)throw Error(ne(168));et(Kt,e),et(cn,t)}function j0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,ES(n)||"Unknown",r));return ct({},t,i)}function Eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,_s=Kt.current,et(Kt,n),et(cn,cn.current),!0}function hm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=j0(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,nt(cn),nt(Kt),et(Kt,n)):nt(cn),et(cn,t)}var ki=null,nc=!1,Gc=!1;function Y0(n){ki===null?ki=[n]:ki.push(n)}function BM(n){nc=!0,Y0(n)}function kr(){if(!Gc&&ki!==null){Gc=!0;var n=0,e=Ke;try{var t=ki;for(Ke=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,nc=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),v0(_d,kr),r}finally{Ke=e,Gc=!1}}return null}var io=[],ro=0,Tu=null,wu=0,kn=[],zn=0,vs=null,Hi=1,Vi="";function Zr(n,e){io[ro++]=wu,io[ro++]=Tu,Tu=n,wu=e}function q0(n,e,t){kn[zn++]=Hi,kn[zn++]=Vi,kn[zn++]=vs,vs=n;var i=Hi;n=Vi;var r=32-li(i)-1;i&=~(1<<r),t+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-li(e)+r|t<<r|i,Vi=s+n}else Hi=1<<s|t<<r|i,Vi=n}function Ad(n){n.return!==null&&(Zr(n,1),q0(n,1,0))}function Cd(n){for(;n===Tu;)Tu=io[--ro],io[ro]=null,wu=io[--ro],io[ro]=null;for(;n===vs;)vs=kn[--zn],kn[zn]=null,Vi=kn[--zn],kn[zn]=null,Hi=kn[--zn],kn[zn]=null}var Rn=null,Cn=null,it=!1,ii=null;function $0(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function dm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=yr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=vs!==null?{id:Hi,overflow:Vi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Rn=n,Cn=null,!0):!1;default:return!1}}function mh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gh(n){if(it){var e=Cn;if(e){var t=e;if(!dm(n,e)){if(mh(n))throw Error(ne(418));e=yr(t.nextSibling);var i=Rn;e&&dm(n,e)?$0(i,t):(n.flags=n.flags&-4097|2,it=!1,Rn=n)}}else{if(mh(n))throw Error(ne(418));n.flags=n.flags&-4097|2,it=!1,Rn=n}}}function pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function Sl(n){if(n!==Rn)return!1;if(!it)return pm(n),it=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!fh(n.type,n.memoizedProps)),e&&(e=Cn)){if(mh(n))throw K0(),Error(ne(418));for(;e;)$0(n,e),e=yr(e.nextSibling)}if(pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=yr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=Rn?yr(n.stateNode.nextSibling):null;return!0}function K0(){for(var n=Cn;n;)n=yr(n.nextSibling)}function Ao(){Cn=Rn=null,it=!1}function Rd(n){ii===null?ii=[n]:ii.push(n)}var HM=Ji.ReactCurrentBatchConfig;function ti(n,e){if(n&&n.defaultProps){e=ct({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Au=Fr(null),Cu=null,so=null,Pd=null;function bd(){Pd=so=Cu=null}function Ld(n){var e=Au.current;nt(Au),n._currentValue=e}function _h(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function go(n,e){Cu=n,Pd=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function jn(n){var e=n._currentValue;if(Pd!==n)if(n={context:n,memoizedValue:e,next:null},so===null){if(Cu===null)throw Error(ne(308));so=n,Cu.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return e}var rs=null;function Dd(n){rs===null?rs=[n]:rs.push(n)}function Z0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Dd(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var or=!1;function Ud(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function tu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vd(n,t)}}function mm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ru(n,e,t,i){var r=n.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,g=a;switch(h=e,p=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ct({},d,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=o,n.lanes=o,n.memoizedState=d}}function gm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var J0=new Z_.Component().refs;function vh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ct({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ic={isMounted:function(n){return(n=n._reactInternals)?As(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Er(n),s=Xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(ui(e,n,r,i),tu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Er(n),s=Xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(ui(e,n,r,i),tu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=rn(),i=Er(n),r=Xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(n,r,i),e!==null&&(ui(e,n,i,t),tu(e,n,i))}};function _m(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(t,i)||!Ua(r,s):!0}function ev(n,e,t){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=fn(e)?_s:Kt.current,i=e.contextTypes,s=(i=i!=null)?wo(n,r):Lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function vm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ic.enqueueReplaceState(e,e.state,null)}function xh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=J0,Ud(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=fn(e)?_s:Kt.current,r.context=wo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ic.enqueueReplaceState(r,r.state,null),Ru(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ko(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===J0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Ml(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xm(n){var e=n._init;return e(n._payload)}function tv(n){function e(f,_){if(n){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Tr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,y){return _===null||_.tag!==6?(_=Kc(v,f.mode,y),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,y){var S=v.type;return S===Zs?c(f,_,v.props.children,y,v.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&xm(S)===_.type)?(y=r(_,v.props),y.ref=Ko(f,_,v),y.return=f,y):(y=au(v.type,v.key,v.props,null,f.mode,y),y.ref=Ko(f,_,v),y.return=f,y)}function u(f,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Zc(v,f.mode,y),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,y,S){return _===null||_.tag!==7?(_=ls(v,f.mode,y,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Kc(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return v=au(_.type,_.key,_.props,null,f.mode,v),v.ref=Ko(f,null,_),v.return=f,v;case Ks:return _=Zc(_,f.mode,v),_.return=f,_;case sr:var y=_._init;return d(f,y(_._payload),v)}if(oa(_)||Xo(_))return _=ls(_,f.mode,v,null),_.return=f,_;Ml(f,_)}return null}function h(f,_,v,y){var S=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(f,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return v.key===S?l(f,_,v,y):null;case Ks:return v.key===S?u(f,_,v,y):null;case sr:return S=v._init,h(f,_,S(v._payload),y)}if(oa(v)||Xo(v))return S!==null?null:c(f,_,v,y,null);Ml(f,v)}return null}function p(f,_,v,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(_,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return f=f.get(y.key===null?v:y.key)||null,l(_,f,y,S);case Ks:return f=f.get(y.key===null?v:y.key)||null,u(_,f,y,S);case sr:var E=y._init;return p(f,_,v,E(y._payload),S)}if(oa(y)||Xo(y))return f=f.get(v)||null,c(_,f,y,S,null);Ml(_,y)}return null}function x(f,_,v,y){for(var S=null,E=null,T=_,R=_=0,M=null;T!==null&&R<v.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var w=h(f,T,v[R],y);if(w===null){T===null&&(T=M);break}n&&T&&w.alternate===null&&e(f,T),_=s(w,_,R),E===null?S=w:E.sibling=w,E=w,T=M}if(R===v.length)return t(f,T),it&&Zr(f,R),S;if(T===null){for(;R<v.length;R++)T=d(f,v[R],y),T!==null&&(_=s(T,_,R),E===null?S=T:E.sibling=T,E=T);return it&&Zr(f,R),S}for(T=i(f,T);R<v.length;R++)M=p(T,f,R,v[R],y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),_=s(M,_,R),E===null?S=M:E.sibling=M,E=M);return n&&T.forEach(function(k){return e(f,k)}),it&&Zr(f,R),S}function g(f,_,v,y){var S=Xo(v);if(typeof S!="function")throw Error(ne(150));if(v=S.call(v),v==null)throw Error(ne(151));for(var E=S=null,T=_,R=_=0,M=null,w=v.next();T!==null&&!w.done;R++,w=v.next()){T.index>R?(M=T,T=null):M=T.sibling;var k=h(f,T,w.value,y);if(k===null){T===null&&(T=M);break}n&&T&&k.alternate===null&&e(f,T),_=s(k,_,R),E===null?S=k:E.sibling=k,E=k,T=M}if(w.done)return t(f,T),it&&Zr(f,R),S;if(T===null){for(;!w.done;R++,w=v.next())w=d(f,w.value,y),w!==null&&(_=s(w,_,R),E===null?S=w:E.sibling=w,E=w);return it&&Zr(f,R),S}for(T=i(f,T);!w.done;R++,w=v.next())w=p(T,f,R,w.value,y),w!==null&&(n&&w.alternate!==null&&T.delete(w.key===null?R:w.key),_=s(w,_,R),E===null?S=w:E.sibling=w,E=w);return n&&T.forEach(function(j){return e(f,j)}),it&&Zr(f,R),S}function m(f,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Zs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:e:{for(var S=v.key,E=_;E!==null;){if(E.key===S){if(S=v.type,S===Zs){if(E.tag===7){t(f,E.sibling),_=r(E,v.props.children),_.return=f,f=_;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===sr&&xm(S)===E.type){t(f,E.sibling),_=r(E,v.props),_.ref=Ko(f,E,v),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}v.type===Zs?(_=ls(v.props.children,f.mode,y,v.key),_.return=f,f=_):(y=au(v.type,v.key,v.props,null,f.mode,y),y.ref=Ko(f,_,v),y.return=f,f=y)}return o(f);case Ks:e:{for(E=v.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=Zc(v,f.mode,y),_.return=f,f=_}return o(f);case sr:return E=v._init,m(f,_,E(v._payload),y)}if(oa(v))return x(f,_,v,y);if(Xo(v))return g(f,_,v,y);Ml(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,v),_.return=f,f=_):(t(f,_),_=Kc(v,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var Co=tv(!0),nv=tv(!1),nl={},Si=Fr(nl),Fa=Fr(nl),ka=Fr(nl);function ss(n){if(n===nl)throw Error(ne(174));return n}function Id(n,e){switch(et(ka,e),et(Fa,n),et(Si,nl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Zf(e,n)}nt(Si),et(Si,e)}function Ro(){nt(Si),nt(Fa),nt(ka)}function iv(n){ss(ka.current);var e=ss(Si.current),t=Zf(e,n.type);e!==t&&(et(Fa,n),et(Si,t))}function Nd(n){Fa.current===n&&(nt(Si),nt(Fa))}var ot=Fr(0);function Pu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Od(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var nu=Ji.ReactCurrentDispatcher,Xc=Ji.ReactCurrentBatchConfig,xs=0,ut=null,wt=null,Ut=null,bu=!1,va=!1,za=0,VM=0;function Vt(){throw Error(ne(321))}function Fd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!fi(n[t],e[t]))return!1;return!0}function kd(n,e,t,i,r,s){if(xs=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=n===null||n.memoizedState===null?jM:YM,n=t(i,r),va){s=0;do{if(va=!1,za=0,25<=s)throw Error(ne(301));s+=1,Ut=wt=null,e.updateQueue=null,nu.current=qM,n=t(i,r)}while(va)}if(nu.current=Lu,e=wt!==null&&wt.next!==null,xs=0,Ut=wt=ut=null,bu=!1,e)throw Error(ne(300));return n}function zd(){var n=za!==0;return za=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ut.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function Yn(){if(wt===null){var n=ut.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var e=Ut===null?ut.memoizedState:Ut.next;if(e!==null)Ut=e,wt=n;else{if(n===null)throw Error(ne(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ut===null?ut.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function Ba(n,e){return typeof e=="function"?e(n):e}function jc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=c,ys|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ut.lanes|=s,ys|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Yc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function rv(){}function sv(n,e){var t=ut,i=Yn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Bd(lv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,Ha(9,av.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(ne(349));xs&30||ov(t,e,r)}return r}function ov(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function av(n,e,t,i){e.value=t,e.getSnapshot=i,uv(e)&&cv(n)}function lv(n,e,t){return t(function(){uv(e)&&cv(n)})}function uv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!fi(n,t)}catch{return!0}}function cv(n){var e=$i(n,1);e!==null&&ui(e,n,1,-1)}function ym(n){var e=mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},e.queue=n,n=n.dispatch=XM.bind(null,ut,n),[e.memoizedState,n]}function Ha(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function fv(){return Yn().memoizedState}function iu(n,e,t,i){var r=mi();ut.flags|=n,r.memoizedState=Ha(1|e,t,void 0,i===void 0?null:i)}function rc(n,e,t,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Fd(i,o.deps)){r.memoizedState=Ha(e,t,s,i);return}}ut.flags|=n,r.memoizedState=Ha(1|e,t,s,i)}function Sm(n,e){return iu(8390656,8,n,e)}function Bd(n,e){return rc(2048,8,n,e)}function hv(n,e){return rc(4,2,n,e)}function dv(n,e){return rc(4,4,n,e)}function pv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function mv(n,e,t){return t=t!=null?t.concat([n]):null,rc(4,4,pv.bind(null,e,n),t)}function Hd(){}function gv(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _v(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function vv(n,e,t){return xs&21?(fi(t,e)||(t=S0(),ut.lanes|=t,ys|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function GM(n,e){var t=Ke;Ke=t!==0&&4>t?t:4,n(!0);var i=Xc.transition;Xc.transition={};try{n(!1),e()}finally{Ke=t,Xc.transition=i}}function xv(){return Yn().memoizedState}function WM(n,e,t){var i=Er(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},yv(n))Sv(e,t);else if(t=Z0(n,e,t,i),t!==null){var r=rn();ui(t,n,i,r),Mv(t,e,i)}}function XM(n,e,t){var i=Er(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(yv(n))Sv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Z0(n,e,r,i),t!==null&&(r=rn(),ui(t,n,i,r),Mv(t,e,i))}}function yv(n){var e=n.alternate;return n===ut||e!==null&&e===ut}function Sv(n,e){va=bu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Mv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vd(n,t)}}var Lu={readContext:jn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},jM={readContext:jn,useCallback:function(n,e){return mi().memoizedState=[n,e===void 0?null:e],n},useContext:jn,useEffect:Sm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,iu(4194308,4,pv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return iu(4194308,4,n,e)},useInsertionEffect:function(n,e){return iu(4,2,n,e)},useMemo:function(n,e){var t=mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=WM.bind(null,ut,n),[i.memoizedState,n]},useRef:function(n){var e=mi();return n={current:n},e.memoizedState=n},useState:ym,useDebugValue:Hd,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=ym(!1),e=n[0];return n=GM.bind(null,n[1]),mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ut,r=mi();if(it){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Nt===null)throw Error(ne(349));xs&30||ov(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sm(lv.bind(null,i,s,n),[n]),i.flags|=2048,Ha(9,av.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mi(),e=Nt.identifierPrefix;if(it){var t=Vi,i=Hi;t=(i&~(1<<32-li(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=VM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},YM={readContext:jn,useCallback:gv,useContext:jn,useEffect:Bd,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:_v,useReducer:jc,useRef:fv,useState:function(){return jc(Ba)},useDebugValue:Hd,useDeferredValue:function(n){var e=Yn();return vv(e,wt.memoizedState,n)},useTransition:function(){var n=jc(Ba)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1},qM={readContext:jn,useCallback:gv,useContext:jn,useEffect:Bd,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:_v,useReducer:Yc,useRef:fv,useState:function(){return Yc(Ba)},useDebugValue:Hd,useDeferredValue:function(n){var e=Yn();return wt===null?e.memoizedState=n:vv(e,wt.memoizedState,n)},useTransition:function(){var n=Yc(Ba)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1};function Po(n,e){try{var t="",i=e;do t+=MS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function qc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function yh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $M=typeof WeakMap=="function"?WeakMap:Map;function Ev(n,e,t){t=Xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Uu||(Uu=!0,bh=i),yh(n,e)},t}function Tv(n,e,t){t=Xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){yh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){yh(n,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $M;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=u1.bind(null,n,e,t),e.then(n,n))}function Em(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Tm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xi(-1,1),e.tag=2,Sr(t,e,1))),t.lanes|=1),n)}var KM=Ji.ReactCurrentOwner,un=!1;function en(n,e,t,i){e.child=n===null?nv(e,null,t,i):Co(e,n.child,t,i)}function wm(n,e,t,i,r){t=t.render;var s=e.ref;return go(e,r),i=kd(n,e,t,i,s,r),t=zd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(it&&t&&Ad(e),e.flags|=1,en(n,e,i,r),e.child)}function Am(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,wv(n,e,s,i,r)):(n=au(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ua,t(o,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=Tr(s,i),n.ref=e.ref,n.return=e,e.child=n}function wv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ua(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return Sh(n,e,t,i,r)}function Av(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ao,En),En|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,et(ao,En),En|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,et(ao,En),En|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,et(ao,En),En|=i;return en(n,e,r,t),e.child}function Cv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Sh(n,e,t,i,r){var s=fn(t)?_s:Kt.current;return s=wo(e,s),go(e,r),t=kd(n,e,t,i,s,r),i=zd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(it&&i&&Ad(e),e.flags|=1,en(n,e,t,r),e.child)}function Cm(n,e,t,i,r){if(fn(t)){var s=!0;Eu(e)}else s=!1;if(go(e,r),e.stateNode===null)ru(n,e),ev(e,t,i),xh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=fn(t)?_s:Kt.current,u=wo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vm(e,o,i,u),or=!1;var h=e.memoizedState;o.state=h,Ru(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||or?(typeof c=="function"&&(vh(e,t,c,i),l=e.memoizedState),(a=or||_m(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Q0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=fn(t)?_s:Kt.current,l=wo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&vm(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,Ru(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||cn.current||or?(typeof p=="function"&&(vh(e,t,p,i),x=e.memoizedState),(u=or||_m(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Mh(n,e,t,i,s,r)}function Mh(n,e,t,i,r,s){Cv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hm(e,t,!1),Ki(n,e,s);i=e.stateNode,KM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Co(e,n.child,null,s),e.child=Co(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&hm(e,t,!0),e.child}function Rv(n){var e=n.stateNode;e.pendingContext?fm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(n,e.context,!1),Id(n,e.containerInfo)}function Rm(n,e,t,i,r){return Ao(),Rd(r),e.flags|=256,en(n,e,t,i),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pv(n,e,t){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),et(ot,r&1),n===null)return gh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,i,0,null),n=ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Th(t),e.memoizedState=Eh,n):Vd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=ls(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Th(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Eh,i}return s=n.child,n=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vd(n,e){return e=ac({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function El(n,e,t,i){return i!==null&&Rd(i),Co(e,n.child,null,t),n=Vd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ZM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=qc(Error(ne(422))),El(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ac({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,n.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=Eh,s);if(!(e.mode&1))return El(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=qc(s,i,void 0),El(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),ui(i,n,r,-1))}return qd(),i=qc(Error(ne(421))),El(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=c1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Cn=yr(r.nextSibling),Rn=e,it=!0,ii=null,n!==null&&(kn[zn++]=Hi,kn[zn++]=Vi,kn[zn++]=vs,Hi=n.id,Vi=n.overflow,vs=e),e=Vd(e,i.children),e.flags|=4096,e)}function Pm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),_h(n.return,e,t)}function $c(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function bv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,t,e);else if(n.tag===19)Pm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(et(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),$c(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}$c(e,!0,t,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ys|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Tr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Tr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QM(n,e,t){switch(e.tag){case 3:Rv(e),Ao();break;case 5:iv(e);break;case 1:fn(e.type)&&Eu(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Au,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ot,ot.current&1),e.flags|=128,null):t&e.child.childLanes?Pv(n,e,t):(et(ot,ot.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);et(ot,ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return bv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Av(n,e,t)}return Ki(n,e,t)}var Lv,wh,Dv,Uv;Lv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wh=function(){};Dv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ss(Si.current);var s=null;switch(t){case"input":r=Yf(n,r),i=Yf(n,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Kf(n,r),i=Kf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Su)}Qf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Uv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Zo(n,e){if(!it)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function JM(n,e,t){var i=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&Mu(),Gt(e),null;case 3:return i=e.stateNode,Ro(),nt(cn),nt(Kt),Od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Sl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Uh(ii),ii=null))),wh(n,e),Gt(e),null;case 5:Nd(e);var r=ss(ka.current);if(t=e.type,n!==null&&e.stateNode!=null)Dv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Gt(e),null}if(n=ss(Si.current),Sl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[Oa]=s,n=(e.mode&1)!==0,t){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)tt(la[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":kp(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":Bp(i,s),tt("invalid",i)}Qf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,n),r=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(t){case"input":hl(i),zp(i,s,!0);break;case"textarea":hl(i),Hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=o0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[_i]=e,n[Oa]=i,Lv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Jf(t,i),t){case"dialog":tt("cancel",n),tt("close",n),r=i;break;case"iframe":case"object":case"embed":tt("load",n),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)tt(la[r],n);r=i;break;case"source":tt("error",n),r=i;break;case"img":case"image":case"link":tt("error",n),tt("load",n),r=i;break;case"details":tt("toggle",n),r=i;break;case"input":kp(n,i),r=Yf(n,i),tt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),tt("invalid",n);break;case"textarea":Bp(n,i),r=Kf(n,i),tt("invalid",n);break;default:r=i}Qf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?u0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ca(n,l):typeof l=="number"&&Ca(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",n):l!=null&&hd(n,s,l,o))}switch(t){case"input":hl(n),zp(n,i,!1);break;case"textarea":hl(n),Hp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+br(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?fo(n,!!i.multiple,s,!1):i.defaultValue!=null&&fo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Su)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(n&&e.stateNode!=null)Uv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ss(ka.current),ss(Si.current),Sl(e)){if(i=e.stateNode,t=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==t)&&(n=Rn,n!==null))switch(n.tag){case 3:yl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Gt(e),null;case 13:if(nt(ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(it&&Cn!==null&&e.mode&1&&!(e.flags&128))K0(),Ao(),e.flags|=98560,s=!1;else if(s=Sl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[_i]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else ii!==null&&(Uh(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ot.current&1?At===0&&(At=3):qd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Ro(),wh(n,e),n===null&&Ia(e.stateNode.containerInfo),Gt(e),null;case 10:return Ld(e.type._context),Gt(e),null;case 17:return fn(e.type)&&Mu(),Gt(e),null;case 19:if(nt(ot),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zo(s,!1);else{if(At!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pu(n),o!==null){for(e.flags|=128,Zo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return et(ot,ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>bo&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Gt(e),null}else 2*yt()-s.renderingStartTime>bo&&t!==1073741824&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=ot.current,et(ot,i?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return Yd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function e1(n,e){switch(Cd(e),e.tag){case 1:return fn(e.type)&&Mu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ro(),nt(cn),nt(Kt),Od(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(nt(ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ao()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return nt(ot),null;case 4:return Ro(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var Tl=!1,jt=!1,t1=typeof WeakSet=="function"?WeakSet:Set,he=null;function oo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){mt(n,e,i)}else t.current=null}function Ah(n,e,t){try{t()}catch(i){mt(n,e,i)}}var bm=!1;function n1(n,e){if(uh=vu,n=F0(),wd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ch={focusedElem:n,selectionRange:t},vu=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:ti(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){mt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return x=bm,bm=!1,x}function xa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ah(e,t,s)}r=r.next}while(r!==i)}}function sc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ch(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Iv(n){var e=n.alternate;e!==null&&(n.alternate=null,Iv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[_i],delete e[Oa],delete e[dh],delete e[kM],delete e[zM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Nv(n){return n.tag===5||n.tag===3||n.tag===4}function Lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Nv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Rh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Su));else if(i!==4&&(n=n.child,n!==null))for(Rh(n,e,t),n=n.sibling;n!==null;)Rh(n,e,t),n=n.sibling}function Ph(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ph(n,e,t),n=n.sibling;n!==null;)Ph(n,e,t),n=n.sibling}var kt=null,ni=!1;function er(n,e,t){for(t=t.child;t!==null;)Ov(n,e,t),t=t.sibling}function Ov(n,e,t){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Zu,t)}catch{}switch(t.tag){case 5:jt||oo(t,e);case 6:var i=kt,r=ni;kt=null,er(n,e,t),kt=i,ni=r,kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?Vc(n.parentNode,t):n.nodeType===1&&Vc(n,t),La(n)):Vc(kt,t.stateNode));break;case 4:i=kt,r=ni,kt=t.stateNode.containerInfo,ni=!0,er(n,e,t),kt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ah(t,e,o),r=r.next}while(r!==i)}er(n,e,t);break;case 1:if(!jt&&(oo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){mt(t,e,a)}er(n,e,t);break;case 21:er(n,e,t);break;case 22:t.mode&1?(jt=(i=jt)||t.memoizedState!==null,er(n,e,t),jt=i):er(n,e,t);break;default:er(n,e,t)}}function Dm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new t1),e.forEach(function(i){var r=f1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Kn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,ni=!1;break e;case 3:kt=a.stateNode.containerInfo,ni=!0;break e;case 4:kt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));Ov(s,o,r),kt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fv(e,n),e=e.sibling}function Fv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(e,n),pi(n),i&4){try{xa(3,n,n.return),sc(3,n)}catch(g){mt(n,n.return,g)}try{xa(5,n,n.return)}catch(g){mt(n,n.return,g)}}break;case 1:Kn(e,n),pi(n),i&512&&t!==null&&oo(t,t.return);break;case 5:if(Kn(e,n),pi(n),i&512&&t!==null&&oo(t,t.return),n.flags&32){var r=n.stateNode;try{Ca(r,"")}catch(g){mt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&r0(r,s),Jf(a,o);var u=Jf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?u0(r,d):c==="dangerouslySetInnerHTML"?a0(r,d):c==="children"?Ca(r,d):hd(r,c,d,u)}switch(a){case"input":qf(r,s);break;case"textarea":s0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?fo(r,!!s.multiple,s.defaultValue,!0):fo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(g){mt(n,n.return,g)}}break;case 6:if(Kn(e,n),pi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){mt(n,n.return,g)}}break;case 3:if(Kn(e,n),pi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(g){mt(n,n.return,g)}break;case 4:Kn(e,n),pi(n);break;case 13:Kn(e,n),pi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=yt())),i&4&&Dm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(jt=(u=jt)||c,Kn(e,n),jt=u):Kn(e,n),pi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(he=n,c=n.child;c!==null;){for(d=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:xa(4,h,h.return);break;case 1:oo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){mt(i,t,g)}}break;case 5:oo(h,h.return);break;case 22:if(h.memoizedState!==null){Im(d);continue}}p!==null?(p.return=h,he=p):Im(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l0("display",o))}catch(g){mt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){mt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,n),pi(n),i&4&&Dm(n);break;case 21:break;default:Kn(e,n),pi(n)}}function pi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Nv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=Lm(n);Ph(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lm(n);Rh(n,a,o);break;default:throw Error(ne(161))}}catch(l){mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function i1(n,e,t){he=n,kv(n)}function kv(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Tl;var u=jt;if(Tl=o,(jt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Nm(r):l!==null?(l.return=o,he=l):Nm(r);for(;s!==null;)he=s,kv(s),s=s.sibling;he=r,Tl=a,jt=u}Um(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Um(n)}}function Um(n){for(;he!==null;){var e=he;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}gm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&La(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}jt||e.flags&512&&Ch(e)}catch(h){mt(e,e.return,h)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function Im(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function Nm(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{sc(4,e)}catch(l){mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===n){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var r1=Math.ceil,Du=Ji.ReactCurrentDispatcher,Gd=Ji.ReactCurrentOwner,Xn=Ji.ReactCurrentBatchConfig,je=0,Nt=null,Tt=null,Bt=0,En=0,ao=Fr(0),At=0,Va=null,ys=0,oc=0,Wd=0,ya=null,an=null,Xd=0,bo=1/0,Oi=null,Uu=!1,bh=null,Mr=null,wl=!1,cr=null,Iu=0,Sa=0,Lh=null,su=-1,ou=0;function rn(){return je&6?yt():su!==-1?su:su=yt()}function Er(n){return n.mode&1?je&2&&Bt!==0?Bt&-Bt:HM.transition!==null?(ou===0&&(ou=S0()),ou):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:R0(n.type)),n):1}function ui(n,e,t,i){if(50<Sa)throw Sa=0,Lh=null,Error(ne(185));Ja(n,t,i),(!(je&2)||n!==Nt)&&(n===Nt&&(!(je&2)&&(oc|=t),At===4&&lr(n,Bt)),hn(n,i),t===1&&je===0&&!(e.mode&1)&&(bo=yt()+500,nc&&kr()))}function hn(n,e){var t=n.callbackNode;HS(n,e);var i=_u(n,n===Nt?Bt:0);if(i===0)t!==null&&Wp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wp(t),e===1)n.tag===0?BM(Om.bind(null,n)):Y0(Om.bind(null,n)),OM(function(){!(je&6)&&kr()}),t=null;else{switch(M0(i)){case 1:t=_d;break;case 4:t=x0;break;case 16:t=gu;break;case 536870912:t=y0;break;default:t=gu}t=jv(t,zv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zv(n,e){if(su=-1,ou=0,je&6)throw Error(ne(327));var t=n.callbackNode;if(_o()&&n.callbackNode!==t)return null;var i=_u(n,n===Nt?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Nu(n,i);else{e=i;var r=je;je|=2;var s=Hv();(Nt!==n||Bt!==e)&&(Oi=null,bo=yt()+500,as(n,e));do try{a1();break}catch(a){Bv(n,a)}while(1);bd(),Du.current=s,je=r,Tt!==null?e=0:(Nt=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=rh(n),r!==0&&(i=r,e=Dh(n,r))),e===1)throw t=Va,as(n,0),lr(n,i),hn(n,yt()),t;if(e===6)lr(n,i);else{if(r=n.current.alternate,!(i&30)&&!s1(r)&&(e=Nu(n,i),e===2&&(s=rh(n),s!==0&&(i=s,e=Dh(n,s))),e===1))throw t=Va,as(n,0),lr(n,i),hn(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Qr(n,an,Oi);break;case 3:if(lr(n,i),(i&130023424)===i&&(e=Xd+500-yt(),10<e)){if(_u(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){rn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=hh(Qr.bind(null,n,an,Oi),e);break}Qr(n,an,Oi);break;case 4:if(lr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*r1(i/1960))-i,10<i){n.timeoutHandle=hh(Qr.bind(null,n,an,Oi),i);break}Qr(n,an,Oi);break;case 5:Qr(n,an,Oi);break;default:throw Error(ne(329))}}}return hn(n,yt()),n.callbackNode===t?zv.bind(null,n):null}function Dh(n,e){var t=ya;return n.current.memoizedState.isDehydrated&&(as(n,e).flags|=256),n=Nu(n,e),n!==2&&(e=an,an=t,e!==null&&Uh(e)),n}function Uh(n){an===null?an=n:an.push.apply(an,n)}function s1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(n,e){for(e&=~Wd,e&=~oc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-li(e),i=1<<t;n[t]=-1,e&=~i}}function Om(n){if(je&6)throw Error(ne(327));_o();var e=_u(n,0);if(!(e&1))return hn(n,yt()),null;var t=Nu(n,e);if(n.tag!==0&&t===2){var i=rh(n);i!==0&&(e=i,t=Dh(n,i))}if(t===1)throw t=Va,as(n,0),lr(n,e),hn(n,yt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qr(n,an,Oi),hn(n,yt()),null}function jd(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(bo=yt()+500,nc&&kr())}}function Ss(n){cr!==null&&cr.tag===0&&!(je&6)&&_o();var e=je;je|=1;var t=Xn.transition,i=Ke;try{if(Xn.transition=null,Ke=1,n)return n()}finally{Ke=i,Xn.transition=t,je=e,!(je&6)&&kr()}}function Yd(){En=ao.current,nt(ao)}function as(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,NM(t)),Tt!==null)for(t=Tt.return;t!==null;){var i=t;switch(Cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mu();break;case 3:Ro(),nt(cn),nt(Kt),Od();break;case 5:Nd(i);break;case 4:Ro();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:Ld(i.type._context);break;case 22:case 23:Yd()}t=t.return}if(Nt=n,Tt=n=Tr(n.current,null),Bt=En=e,At=0,Va=null,Wd=oc=ys=0,an=ya=null,rs!==null){for(e=0;e<rs.length;e++)if(t=rs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}rs=null}return n}function Bv(n,e){do{var t=Tt;try{if(bd(),nu.current=Lu,bu){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bu=!1}if(xs=0,Ut=wt=ut=null,va=!1,za=0,Gd.current=null,t===null||t.return===null){At=1,Va=e,Tt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Em(o);if(p!==null){p.flags&=-257,Tm(p,o,a,s,e),p.mode&1&&Mm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){Mm(s,u,e),qd();break e}l=Error(ne(426))}}else if(it&&a.mode&1){var m=Em(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tm(m,o,a,s,e),Rd(Po(l,a));break e}}s=l=Po(l,a),At!==4&&(At=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ev(s,l,e);mm(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Tv(s,a,e);mm(s,y);break e}}s=s.return}while(s!==null)}Gv(t)}catch(S){e=S,Tt===t&&t!==null&&(Tt=t=t.return);continue}break}while(1)}function Hv(){var n=Du.current;return Du.current=Lu,n===null?Lu:n}function qd(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(ys&268435455)&&!(oc&268435455)||lr(Nt,Bt)}function Nu(n,e){var t=je;je|=2;var i=Hv();(Nt!==n||Bt!==e)&&(Oi=null,as(n,e));do try{o1();break}catch(r){Bv(n,r)}while(1);if(bd(),je=t,Du.current=i,Tt!==null)throw Error(ne(261));return Nt=null,Bt=0,At}function o1(){for(;Tt!==null;)Vv(Tt)}function a1(){for(;Tt!==null&&!DS();)Vv(Tt)}function Vv(n){var e=Xv(n.alternate,n,En);n.memoizedProps=n.pendingProps,e===null?Gv(n):Tt=e,Gd.current=null}function Gv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=e1(t,e),t!==null){t.flags&=32767,Tt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,Tt=null;return}}else if(t=JM(t,e,En),t!==null){Tt=t;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=n}while(e!==null);At===0&&(At=5)}function Qr(n,e,t){var i=Ke,r=Xn.transition;try{Xn.transition=null,Ke=1,l1(n,e,t,i)}finally{Xn.transition=r,Ke=i}return null}function l1(n,e,t,i){do _o();while(cr!==null);if(je&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(VS(n,s),n===Nt&&(Tt=Nt=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wl||(wl=!0,jv(gu,function(){return _o(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=Ke;Ke=1;var a=je;je|=4,Gd.current=null,n1(n,t),Fv(t,n),RM(ch),vu=!!uh,ch=uh=null,n.current=t,i1(t),US(),je=a,Ke=o,Xn.transition=s}else n.current=t;if(wl&&(wl=!1,cr=n,Iu=r),s=n.pendingLanes,s===0&&(Mr=null),OS(t.stateNode),hn(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uu)throw Uu=!1,n=bh,bh=null,n;return Iu&1&&n.tag!==0&&_o(),s=n.pendingLanes,s&1?n===Lh?Sa++:(Sa=0,Lh=n):Sa=0,kr(),null}function _o(){if(cr!==null){var n=M0(Iu),e=Xn.transition,t=Ke;try{if(Xn.transition=null,Ke=16>n?16:n,cr===null)var i=!1;else{if(n=cr,cr=null,Iu=0,je&6)throw Error(ne(331));var r=je;for(je|=4,he=n.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:xa(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(Iv(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var _=n.current;for(he=_;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sc(9,a)}}catch(S){mt(a,a.return,S)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(je=r,kr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Zu,n)}catch{}i=!0}return i}finally{Ke=t,Xn.transition=e}}return!1}function Fm(n,e,t){e=Po(t,e),e=Ev(n,e,1),n=Sr(n,e,1),e=rn(),n!==null&&(Ja(n,1,e),hn(n,e))}function mt(n,e,t){if(n.tag===3)Fm(n,n,t);else for(;e!==null;){if(e.tag===3){Fm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){n=Po(t,n),n=Tv(e,n,1),e=Sr(e,n,1),n=rn(),e!==null&&(Ja(e,1,n),hn(e,n));break}}e=e.return}}function u1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=rn(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(Bt&t)===t&&(At===4||At===3&&(Bt&130023424)===Bt&&500>yt()-Xd?as(n,0):Wd|=t),hn(n,e)}function Wv(n,e){e===0&&(n.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var t=rn();n=$i(n,e),n!==null&&(Ja(n,e,t),hn(n,t))}function c1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Wv(n,t)}function f1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Wv(n,t)}var Xv;Xv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,QM(n,e,t);un=!!(n.flags&131072)}else un=!1,it&&e.flags&1048576&&q0(e,wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ru(n,e),n=e.pendingProps;var r=wo(e,Kt.current);go(e,t),r=kd(null,e,i,n,r,t);var s=zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ud(e),r.updater=ic,e.stateNode=r,r._reactInternals=e,xh(e,i,n,t),e=Mh(null,e,i,!0,s,t)):(e.tag=0,it&&s&&Ad(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ru(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=d1(i),n=ti(i,n),r){case 0:e=Sh(null,e,i,n,t);break e;case 1:e=Cm(null,e,i,n,t);break e;case 11:e=wm(null,e,i,n,t);break e;case 14:e=Am(null,e,i,ti(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Sh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Cm(n,e,i,r,t);case 3:e:{if(Rv(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Q0(n,e),Ru(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Po(Error(ne(423)),e),e=Rm(n,e,i,t,r);break e}else if(i!==r){r=Po(Error(ne(424)),e),e=Rm(n,e,i,t,r);break e}else for(Cn=yr(e.stateNode.containerInfo.firstChild),Rn=e,it=!0,ii=null,t=nv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ao(),i===r){e=Ki(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return iv(e),n===null&&gh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,fh(i,r)?o=null:s!==null&&fh(i,s)&&(e.flags|=32),Cv(n,e),en(n,e,o,t),e.child;case 6:return n===null&&gh(e),null;case 13:return Pv(n,e,t);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Co(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),wm(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Au,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!cn.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),_h(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),_h(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,t),r=jn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Am(n,e,i,r,t);case 15:return wv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),ru(n,e),e.tag=1,fn(i)?(n=!0,Eu(e)):n=!1,go(e,t),ev(e,i,r),xh(e,i,r,t),Mh(null,e,i,!0,n,t);case 19:return bv(n,e,t);case 22:return Av(n,e,t)}throw Error(ne(156,e.tag))};function jv(n,e){return v0(n,e)}function h1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new h1(n,e,t,i)}function $d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function d1(n){if(typeof n=="function")return $d(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pd)return 11;if(n===md)return 14}return 2}function Tr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function au(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")$d(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Zs:return ls(t.children,r,s,e);case dd:o=8,r|=8;break;case Gf:return n=Hn(12,t,e,r|2),n.elementType=Gf,n.lanes=s,n;case Wf:return n=Hn(13,t,e,r),n.elementType=Wf,n.lanes=s,n;case Xf:return n=Hn(19,t,e,r),n.elementType=Xf,n.lanes=s,n;case t0:return ac(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case J_:o=10;break e;case e0:o=9;break e;case pd:o=11;break e;case md:o=14;break e;case sr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Hn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ls(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function ac(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=t0,n.lanes=t,n.stateNode={isHidden:!1},n}function Kc(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function Zc(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function p1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kd(n,e,t,i,r,s,o,a,l){return n=new p1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),n}function m1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Yv(n){if(!n)return Lr;n=n._reactInternals;e:{if(As(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(fn(t))return j0(n,t,e)}return e}function qv(n,e,t,i,r,s,o,a,l){return n=Kd(t,i,!0,n,r,s,o,a,l),n.context=Yv(null),t=n.current,i=rn(),r=Er(t),s=Xi(i,r),s.callback=e??null,Sr(t,s,r),n.current.lanes=r,Ja(n,r,i),hn(n,i),n}function lc(n,e,t,i){var r=e.current,s=rn(),o=Er(r);return t=Yv(t),e.context===null?e.context=t:e.pendingContext=t,e=Xi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Sr(r,e,o),n!==null&&(ui(n,r,o,s),tu(n,r,o)),o}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Zd(n,e){km(n,e),(n=n.alternate)&&km(n,e)}function g1(){return null}var $v=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qd(n){this._internalRoot=n}uc.prototype.render=Qd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));lc(n,e,null,null)};uc.prototype.unmount=Qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ss(function(){lc(null,n,null,null)}),e[qi]=null}};function uc(n){this._internalRoot=n}uc.prototype.unstable_scheduleHydration=function(n){if(n){var e=w0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ar.length&&e!==0&&e<ar[t].priority;t++);ar.splice(t,0,n),t===0&&C0(n)}};function Jd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function _1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ou(o);s.call(u)}}var o=qv(e,i,n,0,null,!1,!1,"",zm);return n._reactRootContainer=o,n[qi]=o.current,Ia(n.nodeType===8?n.parentNode:n),Ss(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ou(l);a.call(u)}}var l=Kd(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=l,n[qi]=l.current,Ia(n.nodeType===8?n.parentNode:n),Ss(function(){lc(e,l,t,i)}),l}function fc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ou(o);a.call(l)}}lc(e,o,n,r)}else o=_1(t,e,n,r,i);return Ou(o)}E0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=aa(e.pendingLanes);t!==0&&(vd(e,t|1),hn(e,yt()),!(je&6)&&(bo=yt()+500,kr()))}break;case 13:Ss(function(){var i=$i(n,1);if(i!==null){var r=rn();ui(i,n,1,r)}}),Zd(n,1)}};xd=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=rn();ui(e,n,134217728,t)}Zd(n,134217728)}};T0=function(n){if(n.tag===13){var e=Er(n),t=$i(n,e);if(t!==null){var i=rn();ui(t,n,e,i)}Zd(n,e)}};w0=function(){return Ke};A0=function(n,e){var t=Ke;try{return Ke=n,e()}finally{Ke=t}};th=function(n,e,t){switch(e){case"input":if(qf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=tc(i);if(!r)throw Error(ne(90));i0(i),qf(i,r)}}}break;case"textarea":s0(n,t);break;case"select":e=t.value,e!=null&&fo(n,!!t.multiple,e,!1)}};h0=jd;d0=Ss;var v1={usingClientEntryPoint:!1,Events:[tl,to,tc,c0,f0,jd]},Qo={findFiberByHostInstance:is,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x1={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=g0(n),n===null?null:n.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Zu=Al.inject(x1),yi=Al}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(e))throw Error(ne(200));return m1(n,e,null,t)};Un.createRoot=function(n,e){if(!Jd(n))throw Error(ne(299));var t=!1,i="",r=$v;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kd(n,1,!1,null,null,t,!1,i,r),n[qi]=e.current,Ia(n.nodeType===8?n.parentNode:n),new Qd(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=g0(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return Ss(n)};Un.hydrate=function(n,e,t){if(!cc(e))throw Error(ne(200));return fc(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!Jd(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=$v;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=qv(e,null,n,1,t??null,r,!1,s,o),n[qi]=e.current,Ia(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new uc(e)};Un.render=function(n,e,t){if(!cc(e))throw Error(ne(200));return fc(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!cc(n))throw Error(ne(40));return n._reactRootContainer?(Ss(function(){fc(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1};Un.unstable_batchedUpdates=jd;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!cc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return fc(n,e,t,!1,i)};Un.version="18.2.0-next-9e3b772b8-20220608";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(n){console.error(n)}}Kv(),q_.exports=Un;var y1=q_.exports,Bm=y1;Hf.createRoot=Bm.createRoot,Hf.hydrateRoot=Bm.hydrateRoot;function S1(){return fe.jsx(fe.Fragment,{children:fe.jsx("h1",{className:"header-title",children:"Let's Dance"})})}function M1(){return fe.jsx(fe.Fragment,{children:fe.jsxs("nav",{children:[fe.jsx("a",{href:"/",children:"Synesthesia"}),fe.jsx("ul",{})]})})}/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Fu.apply(this,arguments)}var fr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(fr||(fr={}));const Hm="popstate";function E1(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ih("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Zv(r)}return w1(e,t,null,n)}function _n(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ep(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function T1(){return Math.random().toString(36).substr(2,8)}function Vm(n,e){return{usr:n.state,key:n.key,idx:e}}function Ih(n,e,t,i){return t===void 0&&(t=null),Fu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?hc(e):e,{state:t,key:e&&e.key||i||T1()})}function Zv(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function hc(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function w1(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=fr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=fr.Pop;let m=c(),f=m==null?null:m-u;u=m,l&&l({action:a,location:g.location,delta:f})}function h(m,f){a=fr.Push;let _=Ih(g.location,m,f);t&&t(_,m),u=c()+1;let v=Vm(_,u),y=g.createHref(_);try{o.pushState(v,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,f){a=fr.Replace;let _=Ih(g.location,m,f);t&&t(_,m),u=c();let v=Vm(_,u),y=g.createHref(_);o.replaceState(v,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function x(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:Zv(m);return _n(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let g={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Hm,d),l=m,()=>{r.removeEventListener(Hm,d),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return g}var Gm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Gm||(Gm={}));function A1(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?hc(e):e,r=ex(i.pathname||"/",t);if(r==null)return null;let s=Qv(n);C1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=O1(s[a],z1(r));return o}function Qv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_n(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=vo([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(_n(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:I1(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Jv(s.path))r(s,o,l)}),e}function Jv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Jv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function C1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:N1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const R1=/^:\w+$/,P1=3,b1=2,L1=1,D1=10,U1=-2,Wm=n=>n==="*";function I1(n,e){let t=n.split("/"),i=t.length;return t.some(Wm)&&(i+=U1),e&&(i+=b1),t.filter(r=>!Wm(r)).reduce((r,s)=>r+(R1.test(s)?P1:s===""?L1:D1),i)}function N1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function O1(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let o=0;o<t.length;++o){let a=t[o],l=o===t.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=F1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;s.push({params:i,pathname:vo([r,c.pathname]),pathnameBase:H1(vo([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=vo([r,c.pathnameBase]))}return s}function F1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=k1(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=B1(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:n}}function k1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ep(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return n.endsWith("*")?(i.push("*"),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function z1(n){try{return decodeURI(n)}catch(e){return ep(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function B1(n,e){try{return decodeURIComponent(n)}catch(t){return ep(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function ex(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const vo=n=>n.join("/").replace(/\/\/+/g,"/"),H1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function V1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const tx=["post","put","patch","delete"];new Set(tx);const G1=["get",...tx];new Set(G1);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nh(){return Nh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Nh.apply(this,arguments)}const W1=xe.createContext(null),X1=xe.createContext(null),nx=xe.createContext(null),dc=xe.createContext(null),pc=xe.createContext({outlet:null,matches:[],isDataRoute:!1}),ix=xe.createContext(null);function tp(){return xe.useContext(dc)!=null}function j1(){return tp()||_n(!1),xe.useContext(dc).location}function Y1(n,e){return q1(n,e)}function q1(n,e,t){tp()||_n(!1);let{navigator:i}=xe.useContext(nx),{matches:r}=xe.useContext(pc),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=j1(),u;if(e){var c;let g=typeof e=="string"?hc(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||_n(!1),u=g}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=A1(n,{pathname:h}),x=J1(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:vo([a,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:vo([a,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,t);return e&&x?xe.createElement(dc.Provider,{value:{location:Nh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:fr.Pop}},x):x}function $1(){let n=iE(),e=V1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),t?xe.createElement("pre",{style:r},t):null,s)}const K1=xe.createElement($1,null);class Z1 extends xe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?xe.createElement(pc.Provider,{value:this.props.routeContext},xe.createElement(ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q1(n){let{routeContext:e,match:t,children:i}=n,r=xe.useContext(W1);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),xe.createElement(pc.Provider,{value:e},i)}function J1(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var r;if((r=t)!=null&&r.errors)n=t.matches;else return null}let s=n,o=(i=t)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||_n(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;t&&(d=l.route.errorElement||K1);let h=e.concat(s.slice(0,u+1)),p=()=>{let x;return c?x=d:l.route.Component?x=xe.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,xe.createElement(Q1,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:t!=null},children:x})};return t&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?xe.createElement(Z1,{location:t.location,revalidation:t.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Xm;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(Xm||(Xm={}));var ku;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(ku||(ku={}));function eE(n){let e=xe.useContext(X1);return e||_n(!1),e}function tE(n){let e=xe.useContext(pc);return e||_n(!1),e}function nE(n){let e=tE(),t=e.matches[e.matches.length-1];return t.route.id||_n(!1),t.route.id}function iE(){var n;let e=xe.useContext(ix),t=eE(ku.UseRouteError),i=nE(ku.UseRouteError);return e||((n=t.errors)==null?void 0:n[i])}function rx(n){_n(!1)}function rE(n){let{basename:e="/",children:t=null,location:i,navigationType:r=fr.Pop,navigator:s,static:o=!1}=n;tp()&&_n(!1);let a=e.replace(/^\/*/,"/"),l=xe.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=hc(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=i,x=xe.useMemo(()=>{let g=ex(u,a);return g==null?null:{location:{pathname:g,search:c,hash:d,state:h,key:p},navigationType:r}},[a,u,c,d,h,p,r]);return x==null?null:xe.createElement(nx.Provider,{value:l},xe.createElement(dc.Provider,{children:t,value:x}))}function sE(n){let{children:e,location:t}=n;return Y1(Oh(e),t)}var jm;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(jm||(jm={}));new Promise(()=>{});function Oh(n,e){e===void 0&&(e=[]);let t=[];return xe.Children.forEach(n,(i,r)=>{if(!xe.isValidElement(i))return;let s=[...e,r];if(i.type===xe.Fragment){t.push.apply(t,Oh(i.props.children,s));return}i.type!==rx&&_n(!1),!i.props.index||!i.props.children||_n(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Oh(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const oE="startTransition",Ym=cS[oE];function aE(n){let{basename:e,children:t,future:i,window:r}=n,s=xe.useRef();s.current==null&&(s.current=E1({window:r,v5Compat:!0}));let o=s.current,[a,l]=xe.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=xe.useCallback(d=>{u&&Ym?Ym(()=>l(d)):l(d)},[l,u]);return xe.useLayoutEffect(()=>o.listen(c),[o,c]),xe.createElement(rE,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var qm;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(qm||(qm={}));var $m;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})($m||($m={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="154",bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lE=0,Km=1,uE=2,sx=1,cE=2,Ni=3,Dr=0,dn=1,Bi=2,wr=0,xo=1,Zm=2,Qm=3,Jm=4,fE=5,$s=100,hE=101,dE=102,eg=103,tg=104,pE=200,mE=201,gE=202,_E=203,ox=204,ax=205,vE=206,xE=207,yE=208,SE=209,ME=210,EE=0,TE=1,wE=2,Fh=3,AE=4,CE=5,RE=6,PE=7,ip=0,bE=1,LE=2,ji=0,DE=1,UE=2,IE=3,NE=4,OE=5,lx=300,Lo=301,Do=302,kh=303,zh=304,mc=306,Bh=1e3,si=1001,Hh=1002,tn=1003,ng=1004,Qc=1005,Bn=1006,FE=1007,Ga=1008,Ar=1009,kE=1010,zE=1011,rp=1012,ux=1013,hr=1014,dr=1015,Wa=1016,cx=1017,fx=1018,us=1020,BE=1021,oi=1023,HE=1024,VE=1025,cs=1026,Uo=1027,GE=1028,hx=1029,WE=1030,dx=1031,px=1033,Jc=33776,ef=33777,tf=33778,nf=33779,ig=35840,rg=35841,sg=35842,og=35843,XE=36196,ag=37492,lg=37496,ug=37808,cg=37809,fg=37810,hg=37811,dg=37812,pg=37813,mg=37814,gg=37815,_g=37816,vg=37817,xg=37818,yg=37819,Sg=37820,Mg=37821,rf=36492,jE=36283,Eg=36284,Tg=36285,wg=36286,mx=3e3,fs=3001,YE=3200,qE=3201,gx=0,$E=1,hs="",ke="srgb",wi="srgb-linear",_x="display-p3",sf=7680,KE=519,ZE=512,QE=513,JE=514,eT=515,tT=516,nT=517,iT=518,rT=519,Ag=35044,Cg="300 es",Vh=1035,Gi=2e3,zu=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=Math.PI/180,Bu=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function sT(n,e){return(n%e+e)%e}function af(n,e,t){return(1-t)*n+t*e}function Rg(n){return(n&n-1)===0&&n!==0}function Gh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],_=r[1],v=r[4],y=r[7],S=r[2],E=r[5],T=r[8];return s[0]=o*g+a*_+l*S,s[3]=o*m+a*v+l*E,s[6]=o*f+a*y+l*T,s[1]=u*g+c*_+d*S,s[4]=u*m+c*v+d*E,s[7]=u*f+c*y+d*T,s[2]=h*g+p*_+x*S,s[5]=h*m+p*v+x*E,s[8]=h*f+p*y+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lf.makeScale(e,t)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new Be;function vx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Pg={};function Ma(n){n in Pg||(Pg[n]=!0,console.warn(n))}function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const oT=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),aT=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lT(n){return n.convertSRGBToLinear().applyMatrix3(aT)}function uT(n){return n.applyMatrix3(oT).convertLinearToSRGB()}const cT={[wi]:n=>n,[ke]:n=>n.convertSRGBToLinear(),[_x]:lT},fT={[wi]:n=>n,[ke]:n=>n.convertLinearToSRGB(),[_x]:uT},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return wi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cT[e],r=fT[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ds;class xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Hu("canvas")),Ds.width=e.width,Ds.height=e.height;const i=Ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hT=0;class yx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=il(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cf(r[o].image)):s.push(cf(r[o]))}else s=cf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dT=0;class Pn extends Cs{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=si,r=si,s=Bn,o=Ga,a=oi,l=Ar,u=Pn.DEFAULT_ANISOTROPY,c=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=il(),this.name="",this.source=new yx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===fs?ke:hs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?fs:mx}set encoding(e){Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?ke:hs}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=lx;Pn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,S=(f+1)/2,E=(c+h)/4,T=(d+g)/4,R=(x+m)/4;return v>y&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=T/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=R/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=R/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-g)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ms extends Cs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?ke:hs),this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sx extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pT extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*g,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,f*_);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+g*y,m===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new G,bg=new Ur;class rl{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox),Us.applyMatrix4(e.matrixWorld),this.union(Us);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else r.boundingBox===null&&r.computeBoundingBox(),Us.copy(r.boundingBox),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Rl.subVectors(this.max,Jo),Is.subVectors(e.a,Jo),Ns.subVectors(e.b,Jo),Os.subVectors(e.c,Jo),tr.subVectors(Ns,Is),nr.subVectors(Os,Ns),Gr.subVectors(Is,Os);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Gr.z,Gr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Gr.z,0,-Gr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Gr.y,Gr.x,0];return!hf(t,Is,Ns,Os,Rl)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Is,Ns,Os,Rl))?!1:(Pl.crossVectors(tr,nr),t=[Pl.x,Pl.y,Pl.z],hf(t,Is,Ns,Os,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new G,new G,new G,new G,new G,new G,new G,new G],bi=new G,Us=new rl,Is=new G,Ns=new G,Os=new G,tr=new G,nr=new G,Gr=new G,Jo=new G,Rl=new G,Pl=new G,Wr=new G;function hf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wr.fromArray(n,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),u=t.dot(Wr),c=i.dot(Wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const mT=new rl,ea=new G,df=new G;class sp{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(df)),this.expandByPoint(ea.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new G,pf=new G,bl=new G,ir=new G,mf=new G,Ll=new G,gf=new G;class gT{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(pf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bl),a=ir.dot(this.direction),l=-ir.dot(bl),u=ir.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pf).addScaledVector(bl,h),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){mf.subVectors(t,e),Ll.subVectors(i,e),gf.crossVectors(mf,Ll);let o=this.direction.dot(gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(ir,Ll));if(l<0)return null;const u=a*this.direction.dot(mf.cross(ir));if(u<0||l+u>o)return null;const c=-a*ir.dot(gf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h+g*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_T,e,vT)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),rr.crossVectors(i,Sn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),rr.crossVectors(i,Sn)),rr.normalize(),Dl.crossVectors(Sn,rr),r[0]=rr.x,r[4]=Dl.x,r[8]=Sn.x,r[1]=rr.y,r[5]=Dl.y,r[9]=Sn.y,r[2]=rr.z,r[6]=Dl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],S=i[15],E=r[0],T=r[4],R=r[8],M=r[12],w=r[1],k=r[5],j=r[9],U=r[13],B=r[2],H=r[6],K=r[10],W=r[14],L=r[3],N=r[7],F=r[11],I=r[15];return s[0]=o*E+a*w+l*B+u*L,s[4]=o*T+a*k+l*H+u*N,s[8]=o*R+a*j+l*K+u*F,s[12]=o*M+a*U+l*W+u*I,s[1]=c*E+d*w+h*B+p*L,s[5]=c*T+d*k+h*H+p*N,s[9]=c*R+d*j+h*K+p*F,s[13]=c*M+d*U+h*W+p*I,s[2]=x*E+g*w+m*B+f*L,s[6]=x*T+g*k+m*H+f*N,s[10]=x*R+g*j+m*K+f*F,s[14]=x*M+g*U+m*W+f*I,s[3]=_*E+v*w+y*B+S*L,s[7]=_*T+v*k+y*H+S*N,s[11]=_*R+v*j+y*K+S*F,s[15]=_*M+v*U+y*W+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-x*d*u+x*a*p-o*g*p-c*a*f+o*d*f,S=x*d*l-c*g*l-x*a*h+o*g*h+c*a*m-o*d*m,E=t*_+i*v+r*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*T,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*T,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*T,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(x*d*s-c*g*s-x*i*p+t*g*p+c*i*f-t*d*f)*T,e[10]=(o*g*s-x*a*s+x*i*u-t*g*u-o*i*f+t*a*f)*T,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*T,e[12]=S*T,e[13]=(c*g*r-x*d*r+x*i*h-t*g*h-c*i*m+t*d*m)*T,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,g=o*c,m=o*d,f=a*d,_=l*u,v=l*c,y=l*d,S=i.x,E=i.y,T=i.z;return r[0]=(1-(g+f))*S,r[1]=(p+y)*S,r[2]=(x-v)*S,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(x+v)*T,r[9]=(m-_)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fs.set(r[0],r[1],r[2]).length();const o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const u=1/s,c=1/o,d=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Gi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===zu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,g;if(a===Gi)x=(o+s)*d,g=-2*d;else if(a===zu)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fs=new G,Qn=new Ct,_T=new G(0,0,0),vT=new G(1,1,1),rr=new G,Dl=new G,Sn=new G,Lg=new Ct,Dg=new Ur;class gc{constructor(e=0,t=0,i=0,r=gc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gc.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xT=0;const Ug=new G,ks=new Ur,Di=new Ct,Ul=new G,ta=new G,yT=new G,ST=new Ur,Ig=new G(1,0,0),Ng=new G(0,1,0),Og=new G(0,0,1),MT={type:"added"},Fg={type:"removed"};class Ot extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new G,t=new gc,i=new Ur,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Be}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Ig,e)}rotateY(e){return this.rotateOnAxis(Ng,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ig,e)}translateY(e){return this.translateOnAxis(Ng,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ul.copy(e):Ul.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ta,Ul,this.up):Di.lookAt(Ul,ta,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Di),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,yT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,ST,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new G(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new G,Ui=new G,_f=new G,Ii=new G,zs=new G,Bs=new G,kg=new G,vf=new G,xf=new G,yf=new G;let Il=!1;class ri{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Ui.subVectors(i,t),_f.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Ui),l=Jn.dot(_f),u=Ui.dot(Ui),c=Ui.dot(_f),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,i,r,s,o,a,l){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii),l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ui.subVectors(e,t),Jn.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zs.subVectors(r,i),Bs.subVectors(s,i),vf.subVectors(e,i);const l=zs.dot(vf),u=Bs.dot(vf);if(l<=0&&u<=0)return t.copy(i);xf.subVectors(e,r);const c=zs.dot(xf),d=Bs.dot(xf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(zs,o);yf.subVectors(e,s);const p=zs.dot(yf),x=Bs.dot(yf);if(x>=0&&p<=x)return t.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Bs,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return kg.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(kg,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ET=0;class sl extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=il(),this.name="",this.type="Material",this.blending=xo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ox,this.blendDst=ax,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=KE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sf,this.stencilZFail=sf,this.stencilZPass=sf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Sf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Zn.workingColorSpace){if(e=sT(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Sf(o,s,e+1/3),this.g=Sf(o,s,e),this.b=Sf(o,s,e-1/3)}return Zn.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const i=Ex[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=uf(e.r),this.g=uf(e.g),this.b=uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Zn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ke){Zn.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),ei.h+=e,ei.s+=t,ei.l+=i,this.setHSL(ei.h,ei.s,ei.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Nl);const i=af(ei.h,Nl.h,t),r=af(ei.s,Nl.s,t),s=af(ei.l,Nl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new qe;qe.NAMES=Ex;class Tx extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,Ol=new ze;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ag,this.updateRange={offset:0,count:-1},this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ag&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wx extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ax extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ei extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let TT=0;const Nn=new Ct,Mf=new Ot,Hs=new G,Mn=new rl,na=new rl,Dt=new G;class zr extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Ax:wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Mn.min,na.min),Mn.expandByPoint(Dt),Dt.addVectors(Mn.max,na.max),Mn.expandByPoint(Dt)):(Mn.expandByPoint(na.min),Mn.expandByPoint(na.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(Hs.fromBufferAttribute(e,u),Dt.add(Hs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new G,c[w]=new G;const d=new G,h=new G,p=new G,x=new ze,g=new ze,m=new ze,f=new G,_=new G;function v(w,k,j){d.fromArray(r,w*3),h.fromArray(r,k*3),p.fromArray(r,j*3),x.fromArray(o,w*2),g.fromArray(o,k*2),m.fromArray(o,j*2),h.sub(d),p.sub(d),g.sub(x),m.sub(x);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(U),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(U),u[w].add(f),u[k].add(f),u[j].add(f),c[w].add(_),c[k].add(_),c[j].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,k=y.length;w<k;++w){const j=y[w],U=j.start,B=j.count;for(let H=U,K=U+B;H<K;H+=3)v(i[H+0],i[H+1],i[H+2])}const S=new G,E=new G,T=new G,R=new G;function M(w){T.fromArray(s,w*3),R.copy(T);const k=u[w];S.copy(k),S.sub(T.multiplyScalar(T.dot(k))).normalize(),E.crossVectors(R,k);const U=E.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=U}for(let w=0,k=y.length;w<k;++w){const j=y[w],U=j.start,B=j.count;for(let H=U,K=U+B;H<K;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,d=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new Mi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zg=new Ct,Xr=new gT,Fl=new sp,Bg=new G,Vs=new G,Gs=new G,Ws=new G,Ef=new G,kl=new G,zl=new ze,Bl=new ze,Hl=new ze,Hg=new G,Vg=new G,Gg=new G,Vl=new G,Gl=new G;class ai extends Ot{constructor(e=new zr,t=new Tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Ef.fromBufferAttribute(d,e),o?kl.addScaledVector(Ef,c):kl.addScaledVector(Ef.sub(t),c))}t.add(kl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Fl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Fl,Bg)===null||Xr.origin.distanceToSquared(Bg)>(e.far-e.near)**2))&&(zg.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(zg),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=v;y<S;y+=3){const E=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);r=Wl(this,f,e,i,u,c,d,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Wl(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=v;y<S;y+=3){const E=y,T=y+1,R=y+2;r=Wl(this,f,e,i,u,c,d,E,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=m,v=m+1,y=m+2;r=Wl(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wT(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Gl);return u<t.near||u>t.far?null:{distance:u,point:Gl.clone(),object:n}}function Wl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Vs),n.getVertexPosition(l,Gs),n.getVertexPosition(u,Ws);const c=wT(n,e,t,i,Vs,Gs,Ws,Vl);if(c){r&&(zl.fromBufferAttribute(r,a),Bl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,u),c.uv=ri.getInterpolation(Vl,Vs,Gs,Ws,zl,Bl,Hl,new ze)),s&&(zl.fromBufferAttribute(s,a),Bl.fromBufferAttribute(s,l),Hl.fromBufferAttribute(s,u),c.uv1=ri.getInterpolation(Vl,Vs,Gs,Ws,zl,Bl,Hl,new ze),c.uv2=c.uv1),o&&(Hg.fromBufferAttribute(o,a),Vg.fromBufferAttribute(o,l),Gg.fromBufferAttribute(o,u),c.normal=ri.getInterpolation(Vl,Vs,Gs,Ws,Hg,Vg,Gg,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new G,materialIndex:0};ri.getNormal(Vs,Gs,Ws,d.normal),c.face=d}return c}class ol extends zr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(u,3)),this.setAttribute("normal",new Ei(c,3)),this.setAttribute("uv",new Ei(d,2));function x(g,m,f,_,v,y,S,E,T,R,M){const w=y/T,k=S/R,j=y/2,U=S/2,B=E/2,H=T+1,K=R+1;let W=0,L=0;const N=new G;for(let F=0;F<K;F++){const I=F*k-U;for(let O=0;O<H;O++){const oe=O*w-j;N[g]=oe*_,N[m]=I*v,N[f]=B,u.push(N.x,N.y,N.z),N[g]=0,N[m]=0,N[f]=E>0?1:-1,c.push(N.x,N.y,N.z),d.push(O/T),d.push(1-F/R),W+=1}}for(let F=0;F<R;F++)for(let I=0;I<T;I++){const O=h+I+H*F,oe=h+I+H*(F+1),ee=h+(I+1)+H*(F+1),se=h+(I+1)+H*F;l.push(O,oe,se),l.push(oe,ee,se),L+=6}a.addGroup(p,L,M),p+=L,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Io(n[t]);for(const r in i)e[r]=i[r]}return e}function AT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cx(n){return n.getRenderTarget()===null?n.outputColorSpace:wi}const CT={clone:Io,merge:Jt};var RT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RT,this.fragmentShader=PT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=AT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rx extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Rx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(of*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,js=1;class bT extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new wn(Xs,js,e,t);r.layers=this.layers,this.add(r);const s=new wn(Xs,js,e,t);s.layers=this.layers,this.add(s);const o=new wn(Xs,js,e,t);o.layers=this.layers,this.add(o);const a=new wn(Xs,js,e,t);a.layers=this.layers,this.add(a);const l=new wn(Xs,js,e,t);l.layers=this.layers,this.add(l);const u=new wn(Xs,js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=ji,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Px extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LT extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?ke:hs),this.texture=new Px(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ol(5,5,5),s=new Es({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:wr});s.uniforms.tEquirect.value=t;const o=new ai(r,s),a=t.minFilter;return t.minFilter===Ga&&(t.minFilter=Bn),new bT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Tf=new G,DT=new G,UT=new Be;class Jr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Tf.subVectors(i,t).cross(DT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Tf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||UT.getNormalMatrix(e),r=this.coplanarPoint(Tf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new sp,Xl=new G;class op{constructor(e=new Jr,t=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+_).normalize(),i[3].setComponents(l-o,h-c,m-x,y-_).normalize(),i[4].setComponents(l-a,h-d,m-g,y-v).normalize(),t===Gi)i[5].setComponents(l+a,h+d,m+g,y+v).normalize();else if(t===zu)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function IT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class _c extends zr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,y=_+u*(f+1),S=_+1+u*(f+1),E=_+1+u*f;p.push(v,y,E),p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.widthSegments,e.heightSegments)}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Aw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ow=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bw=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_A=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:NT,alphahash_pars_fragment:OT,alphamap_fragment:FT,alphamap_pars_fragment:kT,alphatest_fragment:zT,alphatest_pars_fragment:BT,aomap_fragment:HT,aomap_pars_fragment:VT,begin_vertex:GT,beginnormal_vertex:WT,bsdfs:XT,iridescence_fragment:jT,bumpmap_pars_fragment:YT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:KT,clipping_planes_vertex:ZT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:ew,color_vertex:tw,common:nw,cube_uv_reflection_fragment:iw,defaultnormal_vertex:rw,displacementmap_pars_vertex:sw,displacementmap_vertex:ow,emissivemap_fragment:aw,emissivemap_pars_fragment:lw,colorspace_fragment:uw,colorspace_pars_fragment:cw,envmap_fragment:fw,envmap_common_pars_fragment:hw,envmap_pars_fragment:dw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:Aw,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:_w,fog_fragment:vw,fog_pars_fragment:xw,gradientmap_pars_fragment:yw,lightmap_fragment:Sw,lightmap_pars_fragment:Mw,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Tw,lights_pars_begin:ww,lights_toon_fragment:Cw,lights_toon_pars_fragment:Rw,lights_phong_fragment:Pw,lights_phong_pars_fragment:bw,lights_physical_fragment:Lw,lights_physical_pars_fragment:Dw,lights_fragment_begin:Uw,lights_fragment_maps:Iw,lights_fragment_end:Nw,logdepthbuf_fragment:Ow,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:zw,map_fragment:Bw,map_pars_fragment:Hw,map_particle_fragment:Vw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Ww,metalnessmap_pars_fragment:Xw,morphcolor_vertex:jw,morphnormal_vertex:Yw,morphtarget_pars_vertex:qw,morphtarget_vertex:$w,normal_fragment_begin:Kw,normal_fragment_maps:Zw,normal_pars_fragment:Qw,normal_pars_vertex:Jw,normal_vertex:eA,normalmap_pars_fragment:tA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:rA,iridescence_pars_fragment:sA,opaque_fragment:oA,packing:aA,premultiplied_alpha_fragment:lA,project_vertex:uA,dithering_fragment:cA,dithering_pars_fragment:fA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:vA,skinning_pars_vertex:xA,skinning_vertex:yA,skinnormal_vertex:SA,specularmap_fragment:MA,specularmap_pars_fragment:EA,tonemapping_fragment:TA,tonemapping_pars_fragment:wA,transmission_fragment:AA,transmission_pars_fragment:CA,uv_pars_fragment:RA,uv_pars_vertex:PA,uv_vertex:bA,worldpos_vertex:LA,background_vert:DA,background_frag:UA,backgroundCube_vert:IA,backgroundCube_frag:NA,cube_vert:OA,cube_frag:FA,depth_vert:kA,depth_frag:zA,distanceRGBA_vert:BA,distanceRGBA_frag:HA,equirect_vert:VA,equirect_frag:GA,linedashed_vert:WA,linedashed_frag:XA,meshbasic_vert:jA,meshbasic_frag:YA,meshlambert_vert:qA,meshlambert_frag:$A,meshmatcap_vert:KA,meshmatcap_frag:ZA,meshnormal_vert:QA,meshnormal_frag:JA,meshphong_vert:eC,meshphong_frag:tC,meshphysical_vert:nC,meshphysical_frag:iC,meshtoon_vert:rC,meshtoon_frag:sC,points_vert:oC,points_frag:aC,shadow_vert:lC,shadow_frag:uC,sprite_vert:cC,sprite_frag:fC},ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gi={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};gi.physical={uniforms:Jt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const jl={r:0,b:0,g:0};function hC(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let _=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0),n.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===mc)?(c===void 0&&(c=new ai(new ol(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:Io(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==ke,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ai(new _c(2,2),new Es({name:"BackgroundMaterial",uniforms:Io(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(jl,Cx(n)),i.buffers.color.setClear(jl.r,jl.g,jl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function dC(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(B,H,K,W,L){let N=!1;if(o){const F=g(W,K,H);u!==F&&(u=F,p(u.object)),N=f(B,W,K,L),N&&_(B,W,K,L)}else{const F=H.wireframe===!0;(u.geometry!==W.id||u.program!==K.id||u.wireframe!==F)&&(u.geometry=W.id,u.program=K.id,u.wireframe=F,N=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(N||c)&&(c=!1,R(B,H,K,W),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function g(B,H,K){const W=K.wireframe===!0;let L=a[B.id];L===void 0&&(L={},a[B.id]=L);let N=L[H.id];N===void 0&&(N={},L[H.id]=N);let F=N[W];return F===void 0&&(F=m(h()),N[W]=F),F}function m(B){const H=[],K=[],W=[];for(let L=0;L<r;L++)H[L]=0,K[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:W,object:B,attributes:{},index:null}}function f(B,H,K,W){const L=u.attributes,N=H.attributes;let F=0;const I=K.getAttributes();for(const O in I)if(I[O].location>=0){const ee=L[O];let se=N[O];if(se===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;F++}return u.attributesNum!==F||u.index!==W}function _(B,H,K,W){const L={},N=H.attributes;let F=0;const I=K.getAttributes();for(const O in I)if(I[O].location>=0){let ee=N[O];ee===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),L[O]=se,F++}u.attributes=L,u.attributesNum=F,u.index=W}function v(){const B=u.newAttributes;for(let H=0,K=B.length;H<K;H++)B[H]=0}function y(B){S(B,0)}function S(B,H){const K=u.newAttributes,W=u.enabledAttributes,L=u.attributeDivisors;K[B]=1,W[B]===0&&(n.enableVertexAttribArray(B),W[B]=1),L[B]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),L[B]=H)}function E(){const B=u.newAttributes,H=u.enabledAttributes;for(let K=0,W=H.length;K<W;K++)H[K]!==B[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function T(B,H,K,W,L,N,F){F===!0?n.vertexAttribIPointer(B,H,K,L,N):n.vertexAttribPointer(B,H,K,W,L,N)}function R(B,H,K,W){if(i.isWebGL2===!1&&(B.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=W.attributes,N=K.getAttributes(),F=H.defaultAttributeValues;for(const I in N){const O=N[I];if(O.location>=0){let oe=L[I];if(oe===void 0&&(I==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),I==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const ee=oe.normalized,se=oe.itemSize,de=t.get(oe);if(de===void 0)continue;const Me=de.buffer,ye=de.type,Ie=de.bytesPerElement,Je=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||oe.gpuType===ux);if(oe.isInterleavedBufferAttribute){const Le=oe.data,V=Le.stride,ft=oe.offset;if(Le.isInstancedInterleavedBuffer){for(let Ee=0;Ee<O.locationSize;Ee++)S(O.location+Ee,Le.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)y(O.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ee=0;Ee<O.locationSize;Ee++)T(O.location+Ee,se/O.locationSize,ye,ee,V*Ie,(ft+se/O.locationSize*Ee)*Ie,Je)}else{if(oe.isInstancedBufferAttribute){for(let Le=0;Le<O.locationSize;Le++)S(O.location+Le,oe.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<O.locationSize;Le++)y(O.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Le=0;Le<O.locationSize;Le++)T(O.location+Le,se/O.locationSize,ye,ee,se*Ie,se/O.locationSize*Le*Ie,Je)}}else if(F!==void 0){const ee=F[I];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(O.location,ee);break;case 3:n.vertexAttrib3fv(O.location,ee);break;case 4:n.vertexAttrib4fv(O.location,ee);break;default:n.vertexAttrib1fv(O.location,ee)}}}}E()}function M(){j();for(const B in a){const H=a[B];for(const K in H){const W=H[K];for(const L in W)x(W[L].object),delete W[L];delete H[K]}delete a[B]}}function w(B){if(a[B.id]===void 0)return;const H=a[B.id];for(const K in H){const W=H[K];for(const L in W)x(W[L].object),delete W[L];delete H[K]}delete a[B.id]}function k(B){for(const H in a){const K=a[H];if(K[B.id]===void 0)continue;const W=K[B.id];for(const L in W)x(W[L].object),delete W[L];delete K[B.id]}}function j(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function pC(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function mC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),S=v&&y,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:E}}function gC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Jr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,v=_*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let S=0;S!==v;++S)y[S]=t[S];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function _C(n){let e=new WeakMap;function t(o,a){return a===kh?o.mapping=Lo:a===zh&&(o.mapping=Do),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===kh||a===zh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new LT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vC extends Rx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=4,Wg=[.125,.215,.35,.446,.526,.582],ns=20,wf=new vC,Xg=new qe;let Af=null;const es=(1+Math.sqrt(5))/2,Ys=1/es,jg=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,es,Ys),new G(0,es,-Ys),new G(Ys,0,es),new G(-Ys,0,es),new G(es,Ys,0),new G(-es,Ys,0)];class Yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Af=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Af),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Wa,format:oi,colorSpace:wi,depthBuffer:!1},r=qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xC(s)),this._blurMaterial=yC(s,e,t)}return r}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,wf)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Xg),c.toneMapping=ji,c.autoClear=!1;const p=new Tx({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ai(new ol,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Xg),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Yl(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jg[(r-1)%jg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ai(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const f=[];let _=0;for(let T=0;T<ns;++T){const R=T/g,M=Math.exp(-R*R/2);f.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],S=3*y*(r>v-lo?r-v+lo:0),E=4*(this._cubeSize-y);Yl(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(d,wf)}}function xC(n){const e=[],t=[],i=[];let r=n;const s=n-lo+1+Wg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-lo?l=Wg[o-n+lo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(M,g*x*E),v.set(h,m*x*E);const w=[E,E,E,E,E,E];y.set(w,f*x*E)}const S=new zr;S.setAttribute("position",new Mi(_,g)),S.setAttribute("uv",new Mi(v,m)),S.setAttribute("faceIndex",new Mi(y,f)),e.push(S),r>lo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qg(n,e,t){const i=new Ms(n,e,t);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yC(n,e,t){const i=new Float32Array(ns),r=new G(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function $g(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Kg(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===kh||l===zh,c=l===Lo||l===Do;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Yg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Yg(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EC(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let v=0,y=_.length;v<y;v+=3){const S=_[v+0],E=_[v+1],T=_[v+2];h.push(S,E,E,T,T,S)}}else{const _=x.array;g=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const S=v+0,E=v+1,T=v+2;h.push(S,E,E,T,T,S)}}const m=new(vx(h)?Ax:wx)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function TC(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,x){if(x===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,h*l,x),t.update(p,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function wC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AC(n,e){return n[0]-e[0]}function CC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function RC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let H=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),S===!0&&(M=3);let w=c.attributes.position.count*M,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const j=new Float32Array(w*k*4*g),U=new Sx(j,w,k,g);U.type=dr,U.needsUpdate=!0;const B=M*4;for(let K=0;K<g;K++){const W=E[K],L=T[K],N=R[K],F=w*k*4*K;for(let I=0;I<W.count;I++){const O=I*B;v===!0&&(o.fromBufferAttribute(W,I),j[F+O+0]=o.x,j[F+O+1]=o.y,j[F+O+2]=o.z,j[F+O+3]=0),y===!0&&(o.fromBufferAttribute(L,I),j[F+O+4]=o.x,j[F+O+5]=o.y,j[F+O+6]=o.z,j[F+O+7]=0),S===!0&&(o.fromBufferAttribute(N,I),j[F+O+8]=o.x,j[F+O+9]=o.y,j[F+O+10]=o.z,j[F+O+11]=N.itemSize===4?o.w:1)}}m={count:g,texture:U,size:new ze(w,k)},s.set(c,m),c.addEventListener("dispose",H)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==x){g=[];for(let y=0;y<x;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<x;y++){const S=g[y];S[0]=y,S[1]=h[y]}g.sort(CC);for(let y=0;y<8;y++)y<x&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(AC);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const S=a[y],E=S[0],T=S[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+y)!==m[E]&&c.setAttribute("morphTarget"+y,m[E]),f&&c.getAttribute("morphNormal"+y)!==f[E]&&c.setAttribute("morphNormal"+y,f[E]),r[y]=T,_+=T):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function PC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Lx=new Pn,Dx=new Sx,Ux=new pT,Ix=new Px,Zg=[],Qg=[],Jg=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function Go(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zg[r];if(s===void 0&&(s=new Float32Array(r),Zg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vc(n,e){let t=Qg[e];t===void 0&&(t=new Int32Array(e),Qg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function DC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function UC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function IC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;t_.set(i),n.uniformMatrix2fv(this.addr,!1,t_),Pt(t,i)}}function NC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;e_.set(i),n.uniformMatrix3fv(this.addr,!1,e_),Pt(t,i)}}function OC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Jg.set(i),n.uniformMatrix4fv(this.addr,!1,Jg),Pt(t,i)}}function FC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function zC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function BC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function HC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function GC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function XC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Lx,r)}function jC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ux,r)}function YC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ix,r)}function qC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dx,r)}function $C(n){switch(n){case 5126:return bC;case 35664:return LC;case 35665:return DC;case 35666:return UC;case 35674:return IC;case 35675:return NC;case 35676:return OC;case 5124:case 35670:return FC;case 35667:case 35671:return kC;case 35668:case 35672:return zC;case 35669:case 35673:return BC;case 5125:return HC;case 36294:return VC;case 36295:return GC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return qC}}function KC(n,e){n.uniform1fv(this.addr,e)}function ZC(n,e){const t=Go(e,this.size,2);n.uniform2fv(this.addr,t)}function QC(n,e){const t=Go(e,this.size,3);n.uniform3fv(this.addr,t)}function JC(n,e){const t=Go(e,this.size,4);n.uniform4fv(this.addr,t)}function eR(n,e){const t=Go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tR(n,e){const t=Go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nR(n,e){const t=Go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iR(n,e){n.uniform1iv(this.addr,e)}function rR(n,e){n.uniform2iv(this.addr,e)}function sR(n,e){n.uniform3iv(this.addr,e)}function oR(n,e){n.uniform4iv(this.addr,e)}function aR(n,e){n.uniform1uiv(this.addr,e)}function lR(n,e){n.uniform2uiv(this.addr,e)}function uR(n,e){n.uniform3uiv(this.addr,e)}function cR(n,e){n.uniform4uiv(this.addr,e)}function fR(n,e,t){const i=this.cache,r=e.length,s=vc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lx,s[o])}function hR(n,e,t){const i=this.cache,r=e.length,s=vc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ux,s[o])}function dR(n,e,t){const i=this.cache,r=e.length,s=vc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ix,s[o])}function pR(n,e,t){const i=this.cache,r=e.length,s=vc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dx,s[o])}function mR(n){switch(n){case 5126:return KC;case 35664:return ZC;case 35665:return QC;case 35666:return JC;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return rR;case 35668:case 35672:return sR;case 35669:case 35673:return oR;case 5125:return aR;case 36294:return lR;case 36295:return uR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=$C(t.type)}}class _R{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=mR(t.type)}}class vR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function n_(n,e){n.seq.push(e),n.map[e.id]=e}function xR(n,e,t){const i=n.name,r=i.length;for(Cf.lastIndex=0;;){const s=Cf.exec(i),o=Cf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){n_(t,u===void 0?new gR(a,n,e):new _R(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new vR(a),n_(t,d)),t=d}}}class lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function i_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let yR=0;function SR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function MR(n){switch(n){case wi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function r_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SR(n.getShaderSource(e),o)}else return r}function ER(n,e){const t=MR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function TR(n,e){let t;switch(e){case DE:t="Linear";break;case UE:t="Reinhard";break;case IE:t="OptimizedCineon";break;case NE:t="ACESFilmic";break;case OE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ua).join(`
`)}function AR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ua(n){return n!==""}function s_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(RR,bR)}const PR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bR(n,e){let t=Fe[e];if(t===void 0){const i=PR.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const LR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(LR,DR)}function DR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function IR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function OR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ip:e="ENVMAP_BLENDING_MULTIPLY";break;case bE:e="ENVMAP_BLENDING_MIX";break;case LE:e="ENVMAP_BLENDING_ADD";break}return e}function FR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UR(t),u=IR(t),c=NR(t),d=OR(t),h=FR(t),p=t.isWebGL2?"":wR(t),x=AR(s),g=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ua).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ua).join(`
`),f.length>0&&(f+=`
`)):(m=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),f=[p,l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ji?TR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ER("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=Wh(o),o=s_(o,t),o=o_(o,t),a=Wh(a),a=s_(a,t),a=o_(a,t),o=a_(o),a=a_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+o,y=_+f+a,S=i_(r,r.VERTEX_SHADER,v),E=i_(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,S),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),w=r.getShaderInfoLog(S).trim(),k=r.getShaderInfoLog(E).trim();let j=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,S,E);else{const B=r_(r,S,"vertex"),H=r_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||k==="")&&(U=!1);U&&(this.diagnostics={runnable:j,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(S),r.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new lu(r,g)),T};let R;return this.getAttributes=function(){return R===void 0&&(R=CR(r,g)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}let zR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HR(e),t.set(e,i)),i}}class HR{constructor(e){this.id=zR++,this.code=e,this.usedTimes=0}}function VR(n,e,t,i,r,s,o){const a=new Mx,l=new BR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,k,j,U){const B=j.fog,H=U.geometry,K=M.isMeshStandardMaterial?j.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),L=W&&W.mapping===mc?W.image.height:null,N=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const F=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,I=F!==void 0?F.length:0;let O=0;H.morphAttributes.position!==void 0&&(O=1),H.morphAttributes.normal!==void 0&&(O=2),H.morphAttributes.color!==void 0&&(O=3);let oe,ee,se,de;if(N){const hi=gi[N];oe=hi.vertexShader,ee=hi.fragmentShader}else oe=M.vertexShader,ee=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const Me=n.getRenderTarget(),ye=U.isInstancedMesh===!0,Ie=!!M.map,Je=!!M.matcap,Le=!!W,V=!!M.aoMap,ft=!!M.lightMap,Ee=!!M.bumpMap,Ce=!!M.normalMap,Te=!!M.displacementMap,$e=!!M.emissiveMap,Ne=!!M.metalnessMap,Re=!!M.roughnessMap,Ge=M.anisotropy>0,rt=M.clearcoat>0,ht=M.iridescence>0,P=M.sheen>0,A=M.transmission>0,$=Ge&&!!M.anisotropyMap,re=rt&&!!M.clearcoatMap,ie=rt&&!!M.clearcoatNormalMap,b=rt&&!!M.clearcoatRoughnessMap,J=ht&&!!M.iridescenceMap,te=ht&&!!M.iridescenceThicknessMap,Y=P&&!!M.sheenColorMap,me=P&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ve=!!M.specularColorMap,ge=!!M.specularIntensityMap,pe=A&&!!M.transmissionMap,we=A&&!!M.thicknessMap,De=!!M.gradientMap,D=!!M.alphaMap,le=M.alphaTest>0,q=!!M.alphaHash,ae=!!M.extensions,ce=!!H.attributes.uv1,Ye=!!H.attributes.uv2,st=!!H.attributes.uv3;return{isWebGL2:c,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:ee,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ye,instancingColor:ye&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:wi,map:Ie,matcap:Je,envMap:Le,envMapMode:Le&&W.mapping,envMapCubeUVHeight:L,aoMap:V,lightMap:ft,bumpMap:Ee,normalMap:Ce,displacementMap:h&&Te,emissiveMap:$e,normalMapObjectSpace:Ce&&M.normalMapType===$E,normalMapTangentSpace:Ce&&M.normalMapType===gx,metalnessMap:Ne,roughnessMap:Re,anisotropy:Ge,anisotropyMap:$,clearcoat:rt,clearcoatMap:re,clearcoatNormalMap:ie,clearcoatRoughnessMap:b,iridescence:ht,iridescenceMap:J,iridescenceThicknessMap:te,sheen:P,sheenColorMap:Y,sheenRoughnessMap:me,specularMap:Se,specularColorMap:ve,specularIntensityMap:ge,transmission:A,transmissionMap:pe,thicknessMap:we,gradientMap:De,opaque:M.transparent===!1&&M.blending===xo,alphaMap:D,alphaTest:le,alphaHash:q,combine:M.combine,mapUv:Ie&&g(M.map.channel),aoMapUv:V&&g(M.aoMap.channel),lightMapUv:ft&&g(M.lightMap.channel),bumpMapUv:Ee&&g(M.bumpMap.channel),normalMapUv:Ce&&g(M.normalMap.channel),displacementMapUv:Te&&g(M.displacementMap.channel),emissiveMapUv:$e&&g(M.emissiveMap.channel),metalnessMapUv:Ne&&g(M.metalnessMap.channel),roughnessMapUv:Re&&g(M.roughnessMap.channel),anisotropyMapUv:$&&g(M.anisotropyMap.channel),clearcoatMapUv:re&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(M.sheenRoughnessMap.channel),specularMapUv:Se&&g(M.specularMap.channel),specularColorMapUv:ve&&g(M.specularColorMap.channel),specularIntensityMapUv:ge&&g(M.specularIntensityMap.channel),transmissionMapUv:pe&&g(M.transmissionMap.channel),thicknessMapUv:we&&g(M.thicknessMap.channel),alphaMapUv:D&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||Ge),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:Ye,vertexUv3s:st,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ie||D),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:O,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:ji,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bi,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)w.push(k),w.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const w=x[M.type];let k;if(w){const j=gi[w];k=CT.clone(j.uniforms)}else k=M.uniforms;return k}function S(M,w){let k;for(let j=0,U=u.length;j<U;j++){const B=u[j];if(B.cacheKey===w){k=B,++k.usedTimes;break}}return k===void 0&&(k=new kR(n,w,M,s),u.push(k)),k}function E(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function GR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function WR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||WR),i.length>1&&i.sort(h||u_),r.length>1&&r.sort(h||u_)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function XR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new c_,n.set(i,[o])):r>=s.length?(o=new c_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function YR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qR=0;function $R(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KR(n,e){const t=new jR,i=YR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new Ct,a=new Ct;function l(c,d){let h=0,p=0,x=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let g=0,m=0,f=0,_=0,v=0,y=0,S=0,E=0,T=0,R=0;c.sort($R);const M=d===!0?Math.PI:1;for(let k=0,j=c.length;k<j;k++){const U=c[k],B=U.color,H=U.intensity,K=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*H*M,p+=B.g*H*M,x+=B.b*H*M;else if(U.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(U.sh.coefficients[L],H);else if(U.isDirectionalLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const N=U.shadow,F=i.get(U);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,r.directionalShadow[g]=F,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=U.shadow.matrix,y++}r.directional[g]=L,g++}else if(U.isSpotLight){const L=t.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(B).multiplyScalar(H*M),L.distance=K,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,r.spot[f]=L;const N=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,N.updateMatrices(U),U.castShadow&&R++),r.spotLightMatrix[f]=N.matrix,U.castShadow){const F=i.get(U);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,r.spotShadow[f]=F,r.spotShadowMap[f]=W,E++}f++}else if(U.isRectAreaLight){const L=t.get(U);L.color.copy(B).multiplyScalar(H),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=L,_++}else if(U.isPointLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*M),L.distance=U.distance,L.decay=U.decay,U.castShadow){const N=U.shadow,F=i.get(U);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,F.shadowCameraNear=N.camera.near,F.shadowCameraFar=N.camera.far,r.pointShadow[m]=F,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=L,m++}else if(U.isHemisphereLight){const L=t.get(U);L.skyColor.copy(U.color).multiplyScalar(H*M),L.groundColor.copy(U.groundColor).multiplyScalar(H*M),r.hemi[v]=L,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==E||w.numSpotMaps!==T)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,w.directionalLength=g,w.pointLength=m,w.spotLength=f,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=E,w.numSpotMaps=T,r.version=qR++)}function u(c,d){let h=0,p=0,x=0,g=0,m=0;const f=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(y.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function f_(n,e){const t=new KR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function ZR(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new f_(n,e),t.set(s,[l])):o>=a.length?(l=new f_(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class QR extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JR extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n2(n,e,t){let i=new op;const r=new ze,s=new ze,o=new It,a=new QR({depthPacking:qE}),l=new JR,u={},c=t.maxTextureSize,d={[Dr]:dn,[dn]:Dr,[Bi]:Bi},h=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:e2,fragmentShader:t2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new zr;x.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ai(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sx;let f=this.type;this.render=function(S,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),k=n.state;k.setBlending(wr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=f!==Ni&&this.type===Ni,U=f===Ni&&this.type!==Ni;for(let B=0,H=S.length;B<H;B++){const K=S[B],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const L=W.getFrameExtents();if(r.multiply(L),s.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,W.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,W.mapSize.y=s.y)),W.map===null||j===!0||U===!0){const F=this.type!==Ni?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Ms(r.x,r.y,F),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const N=W.getViewportCount();for(let F=0;F<N;F++){const I=W.getViewport(F);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),k.viewport(o),W.updateMatrices(K,F),i=W.getFrustum(),y(E,T,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Ni&&_(W,T),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(R,M,w)};function _(S,E){const T=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ms(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,T,h,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,T,p,g,null)}function v(S,E,T,R){let M=null;const w=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)M=w;else if(M=T.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=M.uuid,j=E.uuid;let U=u[k];U===void 0&&(U={},u[k]=U);let B=U[j];B===void 0&&(B=M.clone(),U[j]=B),M=B}if(M.visible=E.visible,M.wireframe=E.wireframe,R===Ni?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=T}return M}function y(S,E,T,R,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ni)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const j=e.update(S),U=S.material;if(Array.isArray(U)){const B=j.groups;for(let H=0,K=B.length;H<K;H++){const W=B[H],L=U[W.materialIndex];if(L&&L.visible){const N=v(S,L,R,M);n.renderBufferDirect(T,null,j,N,S,W)}}}else if(U.visible){const B=v(S,U,R,M);n.renderBufferDirect(T,null,j,B,S,null)}}const k=S.children;for(let j=0,U=k.length;j<U;j++)y(k[j],E,T,R,M)}}function i2(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const le=new It;let q=null;const ae=new It(0,0,0,0);return{setMask:function(ce){q!==ce&&!D&&(n.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){D=ce},setClear:function(ce,Ye,st,bt,hi){hi===!0&&(ce*=bt,Ye*=bt,st*=bt),le.set(ce,Ye,st,bt),ae.equals(le)===!1&&(n.clearColor(ce,Ye,st,bt),ae.copy(le))},reset:function(){D=!1,q=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,le=null,q=null,ae=null;return{setTest:function(ce){ce?Me(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ce){le!==ce&&!D&&(n.depthMask(ce),le=ce)},setFunc:function(ce){if(q!==ce){switch(ce){case EE:n.depthFunc(n.NEVER);break;case TE:n.depthFunc(n.ALWAYS);break;case wE:n.depthFunc(n.LESS);break;case Fh:n.depthFunc(n.LEQUAL);break;case AE:n.depthFunc(n.EQUAL);break;case CE:n.depthFunc(n.GEQUAL);break;case RE:n.depthFunc(n.GREATER);break;case PE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ae!==ce&&(n.clearDepth(ce),ae=ce)},reset:function(){D=!1,le=null,q=null,ae=null}}}function o(){let D=!1,le=null,q=null,ae=null,ce=null,Ye=null,st=null,bt=null,hi=null;return{setTest:function(dt){D||(dt?Me(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(dt){le!==dt&&!D&&(n.stencilMask(dt),le=dt)},setFunc:function(dt,di,Zt){(q!==dt||ae!==di||ce!==Zt)&&(n.stencilFunc(dt,di,Zt),q=dt,ae=di,ce=Zt)},setOp:function(dt,di,Zt){(Ye!==dt||st!==di||bt!==Zt)&&(n.stencilOp(dt,di,Zt),Ye=dt,st=di,bt=Zt)},setLocked:function(dt){D=dt},setClear:function(dt){hi!==dt&&(n.clearStencil(dt),hi=dt)},reset:function(){D=!1,le=null,q=null,ae=null,ce=null,Ye=null,st=null,bt=null,hi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,S=null,E=null,T=null,R=null,M=!1,w=null,k=null,j=null,U=null,B=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=W>=2);let N=null,F={};const I=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),oe=new It().fromArray(I),ee=new It().fromArray(O);function se(D,le,q,ae){const ce=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(D,Ye),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<q;st++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(le+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ye}const de={};de[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(de[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(n.DEPTH_TEST),l.setFunc(Fh),Te(!1),$e(Km),Me(n.CULL_FACE),Ee(wr);function Me(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ie(D,le){return p[D]!==le?(n.bindFramebuffer(D,le),p[D]=le,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function Je(D,le){let q=g,ae=!1;if(D)if(q=x.get(le),q===void 0&&(q=[],x.set(le,q)),D.isWebGLMultipleRenderTargets){const ce=D.texture;if(q.length!==ce.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,st=ce.length;Ye<st;Ye++)q[Ye]=n.COLOR_ATTACHMENT0+Ye;q.length=ce.length,ae=!0}}else q[0]!==n.COLOR_ATTACHMENT0&&(q[0]=n.COLOR_ATTACHMENT0,ae=!0);else q[0]!==n.BACK&&(q[0]=n.BACK,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Le(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const V={[$s]:n.FUNC_ADD,[hE]:n.FUNC_SUBTRACT,[dE]:n.FUNC_REVERSE_SUBTRACT};if(i)V[eg]=n.MIN,V[tg]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(V[eg]=D.MIN_EXT,V[tg]=D.MAX_EXT)}const ft={[pE]:n.ZERO,[mE]:n.ONE,[gE]:n.SRC_COLOR,[ox]:n.SRC_ALPHA,[ME]:n.SRC_ALPHA_SATURATE,[yE]:n.DST_COLOR,[vE]:n.DST_ALPHA,[_E]:n.ONE_MINUS_SRC_COLOR,[ax]:n.ONE_MINUS_SRC_ALPHA,[SE]:n.ONE_MINUS_DST_COLOR,[xE]:n.ONE_MINUS_DST_ALPHA};function Ee(D,le,q,ae,ce,Ye,st,bt){if(D===wr){f===!0&&(ye(n.BLEND),f=!1);return}if(f===!1&&(Me(n.BLEND),f=!0),D!==fE){if(D!==_||bt!==M){if((v!==$s||E!==$s)&&(n.blendEquation(n.FUNC_ADD),v=$s,E=$s),bt)switch(D){case xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.ONE,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,S=null,T=null,R=null,_=D,M=bt}return}ce=ce||le,Ye=Ye||q,st=st||ae,(le!==v||ce!==E)&&(n.blendEquationSeparate(V[le],V[ce]),v=le,E=ce),(q!==y||ae!==S||Ye!==T||st!==R)&&(n.blendFuncSeparate(ft[q],ft[ae],ft[Ye],ft[st]),y=q,S=ae,T=Ye,R=st),_=D,M=!1}function Ce(D,le){D.side===Bi?ye(n.CULL_FACE):Me(n.CULL_FACE);let q=D.side===dn;le&&(q=!q),Te(q),D.blending===xo&&D.transparent===!1?Ee(wr):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;u.setTest(ae),ae&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function $e(D){D!==lE?(Me(n.CULL_FACE),D!==k&&(D===Km?n.cullFace(n.BACK):D===uE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),k=D}function Ne(D){D!==j&&(K&&n.lineWidth(D),j=D)}function Re(D,le,q){D?(Me(n.POLYGON_OFFSET_FILL),(U!==le||B!==q)&&(n.polygonOffset(le,q),U=le,B=q)):ye(n.POLYGON_OFFSET_FILL)}function Ge(D){D?Me(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function rt(D){D===void 0&&(D=n.TEXTURE0+H-1),N!==D&&(n.activeTexture(D),N=D)}function ht(D,le,q){q===void 0&&(N===null?q=n.TEXTURE0+H-1:q=N);let ae=F[q];ae===void 0&&(ae={type:void 0,texture:void 0},F[q]=ae),(ae.type!==D||ae.texture!==le)&&(N!==q&&(n.activeTexture(q),N=q),n.bindTexture(D,le||de[D]),ae.type=D,ae.texture=le)}function P(){const D=F[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function A(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function b(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){oe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function ge(D){ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function pe(D,le){let q=d.get(le);q===void 0&&(q=new WeakMap,d.set(le,q));let ae=q.get(D);ae===void 0&&(ae=n.getUniformBlockIndex(le,D.name),q.set(D,ae))}function we(D,le){const ae=d.get(le).get(D);c.get(le)!==ae&&(n.uniformBlockBinding(le,ae,D.__bindingPointIndex),c.set(le,ae))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,F={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,S=null,E=null,T=null,R=null,M=!1,w=null,k=null,j=null,U=null,B=null,oe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:ye,bindFramebuffer:Ie,drawBuffers:Je,useProgram:Le,setBlending:Ee,setMaterial:Ce,setFlipSided:Te,setCullFace:$e,setLineWidth:Ne,setPolygonOffset:Re,setScissorTest:Ge,activeTexture:rt,bindTexture:ht,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:me,texImage3D:Se,updateUBOMapping:pe,uniformBlockBinding:we,texStorage2D:te,texStorage3D:Y,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:b,compressedTexSubImage3D:J,scissor:ve,viewport:ge,reset:De}}function r2(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return f?new OffscreenCanvas(P,A):Hu("canvas")}function v(P,A,$,re){let ie=1;if((P.width>re||P.height>re)&&(ie=re/Math.max(P.width,P.height)),ie<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const b=A?Gh:Math.floor,J=b(ie*P.width),te=b(ie*P.height);g===void 0&&(g=_(J,te));const Y=$?_(J,te):g;return Y.width=J,Y.height=te,Y.getContext("2d").drawImage(P,0,0,J,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+J+"x"+te+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Rg(P.width)&&Rg(P.height)}function S(P){return a?!1:P.wrapS!==si||P.wrapT!==si||P.minFilter!==tn&&P.minFilter!==Bn}function E(P,A){return P.generateMipmaps&&A&&P.minFilter!==tn&&P.minFilter!==Bn}function T(P){n.generateMipmap(P)}function R(P,A,$,re,ie=!1){if(a===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let b=A;return A===n.RED&&($===n.FLOAT&&(b=n.R32F),$===n.HALF_FLOAT&&(b=n.R16F),$===n.UNSIGNED_BYTE&&(b=n.R8)),A===n.RG&&($===n.FLOAT&&(b=n.RG32F),$===n.HALF_FLOAT&&(b=n.RG16F),$===n.UNSIGNED_BYTE&&(b=n.RG8)),A===n.RGBA&&($===n.FLOAT&&(b=n.RGBA32F),$===n.HALF_FLOAT&&(b=n.RGBA16F),$===n.UNSIGNED_BYTE&&(b=re===ke&&ie===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(b=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(b=n.RGB5_A1)),(b===n.R16F||b===n.R32F||b===n.RG16F||b===n.RG32F||b===n.RGBA16F||b===n.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function M(P,A,$){return E(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==Bn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===tn||P===ng||P===Qc?n.NEAREST:n.LINEAR}function k(P){const A=P.target;A.removeEventListener("dispose",k),U(A),A.isVideoTexture&&x.delete(A)}function j(P){const A=P.target;A.removeEventListener("dispose",j),H(A)}function U(P){const A=i.get(P);if(A.__webglInit===void 0)return;const $=P.source,re=m.get($);if(re){const ie=re[A.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(P),Object.keys(re).length===0&&m.delete($)}i.remove(P)}function B(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const $=P.source,re=m.get($);delete re[A.__cacheKey],o.memory.textures--}function H(P){const A=P.texture,$=i.get(P),re=i.get(A);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer($.__webglFramebuffer[ie]),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ie=0;ie<$.__webglColorRenderbuffer.length;ie++)$.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[ie]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ie=0,b=A.length;ie<b;ie++){const J=i.get(A[ie]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(A[ie])}i.remove(A),i.remove(P)}let K=0;function W(){K=0}function L(){const P=K;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),K+=1,P}function N(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function F(P,A){const $=i.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie($,P,A);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function I(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Ie($,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function O(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Ie($,P,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function oe(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Je($,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}const ee={[Bh]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Hh]:n.MIRRORED_REPEAT},se={[tn]:n.NEAREST,[ng]:n.NEAREST_MIPMAP_NEAREST,[Qc]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[FE]:n.LINEAR_MIPMAP_NEAREST,[Ga]:n.LINEAR_MIPMAP_LINEAR},de={[ZE]:n.NEVER,[rT]:n.ALWAYS,[QE]:n.LESS,[eT]:n.LEQUAL,[JE]:n.EQUAL,[iT]:n.GEQUAL,[tT]:n.GREATER,[nT]:n.NOTEQUAL};function Me(P,A,$){if($?(n.texParameteri(P,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ee[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==si||A.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==tn&&A.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,de[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===tn||A.minFilter!==Qc&&A.minFilter!==Ga||A.type===dr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Wa&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function ye(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const re=A.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const b=N(A);if(b!==P.__cacheKey){ie[b]===void 0&&(ie[b]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[b].usedTimes++;const J=ie[P.__cacheKey];J!==void 0&&(ie[P.__cacheKey].usedTimes--,J.usedTimes===0&&B(A)),P.__cacheKey=b,P.__webglTexture=ie[b].texture}return $}function Ie(P,A,$){let re=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=n.TEXTURE_3D);const ie=ye(P,A),b=A.source;t.bindTexture(re,P.__webglTexture,n.TEXTURE0+$);const J=i.get(b);if(b.version!==J.__version||ie===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=S(A)&&y(A.image)===!1;let Y=v(A.image,te,!1,c);Y=ht(A,Y);const me=y(Y)||a,Se=s.convert(A.format,A.colorSpace);let ve=s.convert(A.type),ge=R(A.internalFormat,Se,ve,A.colorSpace);Me(re,A,me);let pe;const we=A.mipmaps,De=a&&A.isVideoTexture!==!0,D=J.__version===void 0||ie===!0,le=M(A,Y,me);if(A.isDepthTexture)ge=n.DEPTH_COMPONENT,a?A.type===dr?ge=n.DEPTH_COMPONENT32F:A.type===hr?ge=n.DEPTH_COMPONENT24:A.type===us?ge=n.DEPTH24_STENCIL8:ge=n.DEPTH_COMPONENT16:A.type===dr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===cs&&ge===n.DEPTH_COMPONENT&&A.type!==rp&&A.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=hr,ve=s.convert(A.type)),A.format===Uo&&ge===n.DEPTH_COMPONENT&&(ge=n.DEPTH_STENCIL,A.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=us,ve=s.convert(A.type))),D&&(De?t.texStorage2D(n.TEXTURE_2D,1,ge,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,ge,Y.width,Y.height,0,Se,ve,null));else if(A.isDataTexture)if(we.length>0&&me){De&&D&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let q=0,ae=we.length;q<ae;q++)pe=we[q],De?t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe.width,pe.height,Se,ve,pe.data):t.texImage2D(n.TEXTURE_2D,q,ge,pe.width,pe.height,0,Se,ve,pe.data);A.generateMipmaps=!1}else De?(D&&t.texStorage2D(n.TEXTURE_2D,le,ge,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,Se,ve,Y.data)):t.texImage2D(n.TEXTURE_2D,0,ge,Y.width,Y.height,0,Se,ve,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){De&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,we[0].width,we[0].height,Y.depth);for(let q=0,ae=we.length;q<ae;q++)pe=we[q],A.format!==oi?Se!==null?De?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,Y.depth,Se,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ge,pe.width,pe.height,Y.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,Y.depth,Se,ve,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,ge,pe.width,pe.height,Y.depth,0,Se,ve,pe.data)}else{De&&D&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let q=0,ae=we.length;q<ae;q++)pe=we[q],A.format!==oi?Se!==null?De?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe.width,pe.height,Se,ve,pe.data):t.texImage2D(n.TEXTURE_2D,q,ge,pe.width,pe.height,0,Se,ve,pe.data)}else if(A.isDataArrayTexture)De?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Se,ve,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,Y.width,Y.height,Y.depth,0,Se,ve,Y.data);else if(A.isData3DTexture)De?(D&&t.texStorage3D(n.TEXTURE_3D,le,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Se,ve,Y.data)):t.texImage3D(n.TEXTURE_3D,0,ge,Y.width,Y.height,Y.depth,0,Se,ve,Y.data);else if(A.isFramebufferTexture){if(D)if(De)t.texStorage2D(n.TEXTURE_2D,le,ge,Y.width,Y.height);else{let q=Y.width,ae=Y.height;for(let ce=0;ce<le;ce++)t.texImage2D(n.TEXTURE_2D,ce,ge,q,ae,0,Se,ve,null),q>>=1,ae>>=1}}else if(we.length>0&&me){De&&D&&t.texStorage2D(n.TEXTURE_2D,le,ge,we[0].width,we[0].height);for(let q=0,ae=we.length;q<ae;q++)pe=we[q],De?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se,ve,pe):t.texImage2D(n.TEXTURE_2D,q,ge,Se,ve,pe);A.generateMipmaps=!1}else De?(D&&t.texStorage2D(n.TEXTURE_2D,le,ge,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ve,Y)):t.texImage2D(n.TEXTURE_2D,0,ge,Se,ve,Y);E(A,me)&&T(re),J.__version=b.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Je(P,A,$){if(A.image.length!==6)return;const re=ye(P,A),ie=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const b=i.get(ie);if(ie.version!==b.__version||re===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const J=A.isCompressedTexture||A.image[0].isCompressedTexture,te=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let q=0;q<6;q++)!J&&!te?Y[q]=v(A.image[q],!1,!0,u):Y[q]=te?A.image[q].image:A.image[q],Y[q]=ht(A,Y[q]);const me=Y[0],Se=y(me)||a,ve=s.convert(A.format,A.colorSpace),ge=s.convert(A.type),pe=R(A.internalFormat,ve,ge,A.colorSpace),we=a&&A.isVideoTexture!==!0,De=b.__version===void 0||re===!0;let D=M(A,me,Se);Me(n.TEXTURE_CUBE_MAP,A,Se);let le;if(J){we&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,pe,me.width,me.height);for(let q=0;q<6;q++){le=Y[q].mipmaps;for(let ae=0;ae<le.length;ae++){const ce=le[ae];A.format!==oi?ve!==null?we?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,ce.width,ce.height,ve,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,ce.width,ce.height,ve,ge,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,pe,ce.width,ce.height,0,ve,ge,ce.data)}}}else{le=A.mipmaps,we&&De&&(le.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,pe,Y[0].width,Y[0].height));for(let q=0;q<6;q++)if(te){we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Y[q].width,Y[q].height,ve,ge,Y[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,pe,Y[q].width,Y[q].height,0,ve,ge,Y[q].data);for(let ae=0;ae<le.length;ae++){const Ye=le[ae].image[q].image;we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Ye.width,Ye.height,ve,ge,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,pe,Ye.width,Ye.height,0,ve,ge,Ye.data)}}else{we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,ge,Y[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,pe,ve,ge,Y[q]);for(let ae=0;ae<le.length;ae++){const ce=le[ae];we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,ve,ge,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,pe,ve,ge,ce.image[q])}}}E(A,Se)&&T(n.TEXTURE_CUBE_MAP),b.__version=ie.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Le(P,A,$,re,ie){const b=s.convert($.format,$.colorSpace),J=s.convert($.type),te=R($.internalFormat,b,J,$.colorSpace);i.get(A).__hasExternalTextures||(ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,te,A.width,A.height,A.depth,0,b,J,null):t.texImage2D(ie,0,te,A.width,A.height,0,b,J,null)),t.bindFramebuffer(n.FRAMEBUFFER,P),Ge(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ie,i.get($).__webglTexture,0,Re(A)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ie,i.get($).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(P,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let re=n.DEPTH_COMPONENT16;if($||Ge(A)){const ie=A.depthTexture;ie&&ie.isDepthTexture&&(ie.type===dr?re=n.DEPTH_COMPONENT32F:ie.type===hr&&(re=n.DEPTH_COMPONENT24));const b=Re(A);Ge(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b,re,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,b,re,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const re=Re(A);$&&Ge(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,A.width,A.height):Ge(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const re=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0;ie<re.length;ie++){const b=re[ie],J=s.convert(b.format,b.colorSpace),te=s.convert(b.type),Y=R(b.internalFormat,J,te,b.colorSpace),me=Re(A);$&&Ge(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Y,A.width,A.height):Ge(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Y,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Y,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const re=i.get(A.depthTexture).__webglTexture,ie=Re(A);if(A.depthTexture.format===cs)Ge(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(A.depthTexture.format===Uo)Ge(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ft(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]=n.createRenderbuffer(),V(A.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),V(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,A,$){const re=i.get(P);A!==void 0&&Le(re.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),$!==void 0&&Ee(P)}function Te(P){const A=P.texture,$=i.get(P),re=i.get(A);P.addEventListener("dispose",j),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=A.version,o.memory.textures++);const ie=P.isWebGLCubeRenderTarget===!0,b=P.isWebGLMultipleRenderTargets===!0,J=y(P)||a;if(ie){$.__webglFramebuffer=[];for(let te=0;te<6;te++)$.__webglFramebuffer[te]=n.createFramebuffer()}else{if($.__webglFramebuffer=n.createFramebuffer(),b)if(r.drawBuffers){const te=P.texture;for(let Y=0,me=te.length;Y<me;Y++){const Se=i.get(te[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ge(P)===!1){const te=b?A:[A];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const me=te[Y];$.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const Se=s.convert(me.format,me.colorSpace),ve=s.convert(me.type),ge=R(me.internalFormat,Se,ve,me.colorSpace,P.isXRRenderTarget===!0),pe=Re(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,$.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),V($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Me(n.TEXTURE_CUBE_MAP,A,J);for(let te=0;te<6;te++)Le($.__webglFramebuffer[te],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te);E(A,J)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){const te=P.texture;for(let Y=0,me=te.length;Y<me;Y++){const Se=te[Y],ve=i.get(Se);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),Me(n.TEXTURE_2D,Se,J),Le($.__webglFramebuffer,P,Se,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D),E(Se,J)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),Me(te,A,J),Le($.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,te),E(A,J)&&T(te),t.unbindTexture()}P.depthBuffer&&Ee(P)}function $e(P){const A=y(P)||a,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,ie=$.length;re<ie;re++){const b=$[re];if(E(b,A)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(b).__webglTexture;t.bindTexture(J,te),T(J),t.unbindTexture()}}}function Ne(P){if(a&&P.samples>0&&Ge(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,re=P.height;let ie=n.COLOR_BUFFER_BIT;const b=[],J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let me=0;me<A.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let me=0;me<A.length;me++){b.push(n.COLOR_ATTACHMENT0+me),P.depthBuffer&&b.push(J);const Se=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(Se===!1&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[me]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[J]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[J])),Y){const ve=i.get(A[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,$,re,0,0,$,re,ie,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let me=0;me<A.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,te.__webglColorRenderbuffer[me]);const Se=i.get(A[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Re(P){return Math.min(d,P.samples)}function Ge(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(P){const A=o.render.frame;x.get(P)!==A&&(x.set(P,A),P.update())}function ht(P,A){const $=P.colorSpace,re=P.format,ie=P.type;return P.isCompressedTexture===!0||P.format===Vh||$!==wi&&$!==hs&&($===ke?a===!1?e.has("EXT_sRGB")===!0&&re===oi?(P.format=Vh,P.minFilter=Bn,P.generateMipmaps=!1):A=xx.sRGBToLinear(A):(re!==oi||ie!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=Ce,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ge}function s2(n,e,t){const i=t.isWebGL2;function r(s,o=hs){let a;if(s===Ar)return n.UNSIGNED_BYTE;if(s===cx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===fx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===kE)return n.BYTE;if(s===zE)return n.SHORT;if(s===rp)return n.UNSIGNED_SHORT;if(s===ux)return n.INT;if(s===hr)return n.UNSIGNED_INT;if(s===dr)return n.FLOAT;if(s===Wa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===BE)return n.ALPHA;if(s===oi)return n.RGBA;if(s===HE)return n.LUMINANCE;if(s===VE)return n.LUMINANCE_ALPHA;if(s===cs)return n.DEPTH_COMPONENT;if(s===Uo)return n.DEPTH_STENCIL;if(s===Vh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===GE)return n.RED;if(s===hx)return n.RED_INTEGER;if(s===WE)return n.RG;if(s===dx)return n.RG_INTEGER;if(s===px)return n.RGBA_INTEGER;if(s===Jc||s===ef||s===tf||s===nf)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ig||s===rg||s===sg||s===og)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ig)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===og)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===XE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ag||s===lg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ag)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ug||s===cg||s===fg||s===hg||s===dg||s===pg||s===mg||s===gg||s===_g||s===vg||s===xg||s===yg||s===Sg||s===Mg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ug)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_g)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mg)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rf)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===jE||s===Eg||s===Tg||s===wg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class o2 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a2={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class l2 extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:cs,c!==cs&&c!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===cs&&(i=hr),i===void 0&&c===Uo&&(i=us),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class u2 extends Cs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],v=[],y=new wn;y.layers.enable(1),y.viewport=new It;const S=new wn;S.layers.enable(2),S.viewport=new It;const E=[y,S],T=new o2;T.layers.enable(1),T.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=_[I];return O===void 0&&(O=new Rf,_[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=_[I];return O===void 0&&(O=new Rf,_[I]=O),O.getGripSpace()},this.getHand=function(I){let O=_[I];return O===void 0&&(O=new Rf,_[I]=O),O.getHandSpace()};function w(I){const O=v.indexOf(I.inputSource);if(O===-1)return;const oe=_[O];oe!==void 0&&(oe.update(I.inputSource,I.frame,u||o),oe.dispatchEvent({type:I.type,data:I.inputSource}))}function k(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let I=0;I<_.length;I++){const O=v[I];O!==null&&(v[I]=null,_[I].disconnect(O))}R=null,M=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),f=new Ms(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,oe=null,ee=null;g.depth&&(ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=g.stencil?Uo:cs,oe=g.stencil?us:hr);const se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(se),r.updateRenderState({layers:[h]}),f=new Ms(h.textureWidth,h.textureHeight,{format:oi,type:Ar,depthTexture:new l2(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const de=e.properties.get(f);de.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),F.setContext(r),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(I){for(let O=0;O<I.removed.length;O++){const oe=I.removed[O],ee=v.indexOf(oe);ee>=0&&(v[ee]=null,_[ee].disconnect(oe))}for(let O=0;O<I.added.length;O++){const oe=I.added[O];let ee=v.indexOf(oe);if(ee===-1){for(let de=0;de<_.length;de++)if(de>=v.length){v.push(oe),ee=de;break}else if(v[de]===null){v[de]=oe,ee=de;break}if(ee===-1)break}const se=_[ee];se&&se.connect(oe)}}const U=new G,B=new G;function H(I,O,oe){U.setFromMatrixPosition(O.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const ee=U.distanceTo(B),se=O.projectionMatrix.elements,de=oe.projectionMatrix.elements,Me=se[14]/(se[10]-1),ye=se[14]/(se[10]+1),Ie=(se[9]+1)/se[5],Je=(se[9]-1)/se[5],Le=(se[8]-1)/se[0],V=(de[8]+1)/de[0],ft=Me*Le,Ee=Me*V,Ce=ee/(-Le+V),Te=Ce*-Le;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Te),I.translateZ(Ce),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const $e=Me+Ce,Ne=ye+Ce,Re=ft-Te,Ge=Ee+(ee-Te),rt=Ie*ye/Ne*$e,ht=Je*ye/Ne*$e;I.projectionMatrix.makePerspective(Re,Ge,rt,ht,$e,Ne),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function K(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;T.near=S.near=y.near=I.near,T.far=S.far=y.far=I.far,(R!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,M=T.far);const O=I.parent,oe=T.cameras;K(T,O);for(let ee=0;ee<oe.length;ee++)K(oe[ee],O);oe.length===2?H(T,y,S):T.projectionMatrix.copy(y.projectionMatrix),W(I,T,O)};function W(I,O,oe){oe===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(oe.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const ee=I.children;for(let se=0,de=ee.length;se<de;se++)ee[se].updateMatrixWorld(!0);I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Bu*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let L=null;function N(I,O){if(c=O.getViewerPose(u||o),x=O,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ee=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,ee=!0);for(let se=0;se<oe.length;se++){const de=oe[se];let Me=null;if(p!==null)Me=p.getViewport(de);else{const Ie=d.getViewSubImage(h,de);Me=Ie.viewport,se===0&&(e.setRenderTargetTextures(f,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(f))}let ye=E[se];ye===void 0&&(ye=new wn,ye.layers.enable(se),ye.viewport=new It,E[se]=ye),ye.matrix.fromArray(de.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(de.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),se===0&&(T.matrix.copy(ye.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ee===!0&&T.cameras.push(ye)}}for(let oe=0;oe<_.length;oe++){const ee=v[oe],se=_[oe];ee!==null&&se!==void 0&&se.update(ee,O,u||o)}L&&L(I,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),x=null}const F=new bx;F.setAnimationLoop(N),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}}function c2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function f2(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const S=v.program;i.updateUBOMapping(_,S);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function c(_){const v=d();_.__bindingPointIndex=v;const y=n.createBuffer(),S=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const R=y[E];if(p(R,E,S)===!0){const M=R.__offset,w=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let j=0;j<w.length;j++){const U=w[j],B=g(U);typeof U=="number"?(R.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,M+k,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=U.elements[0],R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=U.elements[0],R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=U.elements[0]):(U.toArray(R.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,R.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y){const S=_.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const E=Array.isArray(S)?S:[S],T=[];for(let R=0;R<E.length;R++)T.push(E[R].clone());y[v]=T}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],T=Array.isArray(S)?S:[S];for(let R=0;R<E.length;R++){const M=E[R];if(M.equals(T[R])===!1)return M.copy(T[R]),!0}}return!1}function x(_){const v=_.uniforms;let y=0;const S=16;let E=0;for(let T=0,R=v.length;T<R;T++){const M=v[T],w={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let j=0,U=k.length;j<U;j++){const B=k[j],H=g(B);w.boundary+=H.boundary,w.storage+=H.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,T>0){E=y%S;const j=S-E;E!==0&&j-w.boundary<0&&(y+=S-E,M.__offset=y)}y+=w.storage}return E=y%S,E>0&&(y+=S-E),_.__size=y,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function h2(){const n=Hu("canvas");return n.style.display="block",n}class Nx{constructor(e={}){const{canvas:t=h2(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=ji,this.toneMappingExposure=1;const v=this;let y=!1,S=0,E=0,T=null,R=-1,M=null;const w=new It,k=new It;let j=null;const U=new qe(0);let B=0,H=t.width,K=t.height,W=1,L=null,N=null;const F=new It(0,0,H,K),I=new It(0,0,H,K);let O=!1;const oe=new op;let ee=!1,se=!1,de=null;const Me=new Ct,ye=new ze,Ie=new G,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?W:1}let V=i;function ft(C,X){for(let Z=0;Z<C.length;Z++){const z=C[Z],Q=t.getContext(z,X);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${np}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ae,!1),V===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),V=ft(X,C),V===null)throw ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,Ce,Te,$e,Ne,Re,Ge,rt,ht,P,A,$,re,ie,b,J,te,Y,me,Se,ve,ge,pe,we;function De(){Ee=new MC(V),Ce=new mC(V,Ee,e),Ee.init(Ce),ge=new s2(V,Ee,Ce),Te=new i2(V,Ee,Ce),$e=new wC(V),Ne=new GR,Re=new r2(V,Ee,Te,Ne,Ce,ge,$e),Ge=new _C(v),rt=new SC(v),ht=new IT(V,Ce),pe=new dC(V,Ee,ht,Ce),P=new EC(V,ht,$e,pe),A=new PC(V,P,ht,$e),me=new RC(V,Ce,Re),J=new gC(Ne),$=new VR(v,Ge,rt,Ee,Ce,pe,J),re=new c2(v,Ne),ie=new XR,b=new ZR(Ee,Ce),Y=new hC(v,Ge,rt,Te,A,h,l),te=new n2(v,A,Ce),we=new f2(V,$e,Ce,Te),Se=new pC(V,Ee,$e,Ce),ve=new TC(V,Ee,$e,Ce),$e.programs=$.programs,v.capabilities=Ce,v.extensions=Ee,v.properties=Ne,v.renderLists=ie,v.shadowMap=te,v.state=Te,v.info=$e}De();const D=new u2(v,V);this.xr=D,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(H,K,!1))},this.getSize=function(C){return C.set(H,K)},this.setSize=function(C,X,Z=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,K=X,t.width=Math.floor(C*W),t.height=Math.floor(X*W),Z===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(H*W,K*W).floor()},this.setDrawingBufferSize=function(C,X,Z){H=C,K=X,W=Z,t.width=Math.floor(C*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,Z,z){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,Z,z),Te.viewport(w.copy(F).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(I)},this.setScissor=function(C,X,Z,z){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,X,Z,z),Te.scissor(k.copy(I).multiplyScalar(W).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(C){Te.setScissorTest(O=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(C=!0,X=!0,Z=!0){let z=0;if(C){let Q=!1;if(T!==null){const _e=T.texture.format;Q=_e===px||_e===dx||_e===hx}if(Q){const _e=T.texture.type,Ae=_e===Ar||_e===hr||_e===rp||_e===us||_e===cx||_e===fx,Pe=Y.getClearColor(),be=Y.getClearAlpha(),He=Pe.r,Ue=Pe.g,Oe=Pe.b;Ae?(p[0]=He,p[1]=Ue,p[2]=Oe,p[3]=be,V.clearBufferuiv(V.COLOR,0,p)):(x[0]=He,x[1]=Ue,x[2]=Oe,x[3]=be,V.clearBufferiv(V.COLOR,0,x))}else z|=V.COLOR_BUFFER_BIT}X&&(z|=V.DEPTH_BUFFER_BIT),Z&&(z|=V.STENCIL_BUFFER_BIT),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ie.dispose(),b.dispose(),Ne.dispose(),Ge.dispose(),rt.dispose(),A.dispose(),pe.dispose(),we.dispose(),$.dispose(),D.dispose(),D.removeEventListener("sessionstart",dt),D.removeEventListener("sessionend",di),de&&(de.dispose(),de=null),Zt.stop()};function le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=$e.autoReset,X=te.enabled,Z=te.autoUpdate,z=te.needsUpdate,Q=te.type;De(),$e.autoReset=C,te.enabled=X,te.autoUpdate=Z,te.needsUpdate=z,te.type=Q}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const X=C.target;X.removeEventListener("dispose",ce),Ye(X)}function Ye(C){st(C),Ne.remove(C)}function st(C){const X=Ne.get(C).programs;X!==void 0&&(X.forEach(function(Z){$.releaseProgram(Z)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Z,z,Q,_e){X===null&&(X=Je);const Ae=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=Gy(C,X,Z,z,Q);Te.setMaterial(z,Ae);let be=Z.index,He=1;z.wireframe===!0&&(be=P.getWireframeAttribute(Z),He=2);const Ue=Z.drawRange,Oe=Z.attributes.position;let pt=Ue.start*He,vt=(Ue.start+Ue.count)*He;_e!==null&&(pt=Math.max(pt,_e.start*He),vt=Math.min(vt,(_e.start+_e.count)*He)),be!==null?(pt=Math.max(pt,0),vt=Math.min(vt,be.count)):Oe!=null&&(pt=Math.max(pt,0),vt=Math.min(vt,Oe.count));const $n=vt-pt;if($n<0||$n===1/0)return;pe.setup(Q,z,Pe,Z,be);let Ri,St=Se;if(be!==null&&(Ri=ht.get(be),St=ve,St.setIndex(Ri)),Q.isMesh)z.wireframe===!0?(Te.setLineWidth(z.wireframeLinewidth*Le()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Q.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),Te.setLineWidth(Xe*Le()),Q.isLineSegments?St.setMode(V.LINES):Q.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Q.isPoints?St.setMode(V.POINTS):Q.isSprite&&St.setMode(V.TRIANGLES);if(Q.isInstancedMesh)St.renderInstances(pt,$n,Q.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mc=Math.min(Z.instanceCount,Xe);St.renderInstances(pt,$n,Mc)}else St.render(pt,$n)},this.compile=function(C,X){function Z(z,Q,_e){z.transparent===!0&&z.side===Bi&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,ul(z,Q,_e),z.side=Dr,z.needsUpdate=!0,ul(z,Q,_e),z.side=Bi):ul(z,Q,_e)}m=b.get(C),m.init(),_.push(m),C.traverseVisible(function(z){z.isLight&&z.layers.test(X.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v.useLegacyLights),C.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let _e=0;_e<Q.length;_e++){const Ae=Q[_e];Z(Ae,C,z)}else Z(Q,C,z)}),_.pop(),m=null};let bt=null;function hi(C){bt&&bt(C)}function dt(){Zt.stop()}function di(){Zt.start()}const Zt=new bx;Zt.setAnimationLoop(hi),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(C){bt=C,D.setAnimationLoop(C),C===null?Zt.stop():Zt.start()},D.addEventListener("sessionstart",dt),D.addEventListener("sessionend",di),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(X),X=D.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,T),m=b.get(C,_.length),m.init(),_.push(m),Me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(Me),se=this.localClippingEnabled,ee=J.init(this.clippingPlanes,se),g=ie.get(C,f.length),g.init(),f.push(g),Ap(C,X,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(L,N),this.info.render.frame++,ee===!0&&J.beginShadows();const Z=m.state.shadowsArray;if(te.render(Z,C,X),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(g,C),m.setupLights(v.useLegacyLights),X.isArrayCamera){const z=X.cameras;for(let Q=0,_e=z.length;Q<_e;Q++){const Ae=z[Q];Cp(g,C,Ae,Ae.viewport)}}else Cp(g,C,X);T!==null&&(Re.updateMultisampleRenderTarget(T),Re.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,X),pe.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Ap(C,X,Z,z){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){z&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const Ae=A.update(C),Pe=C.material;Pe.visible&&g.push(C,Ae,Pe,Z,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){const Ae=A.update(C),Pe=C.material;if(z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Pe)){const be=Ae.groups;for(let He=0,Ue=be.length;He<Ue;He++){const Oe=be[He],pt=Pe[Oe.materialIndex];pt&&pt.visible&&g.push(C,Ae,pt,Z,Ie.z,Oe)}}else Pe.visible&&g.push(C,Ae,Pe,Z,Ie.z,null)}}const _e=C.children;for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++)Ap(_e[Ae],X,Z,z)}function Cp(C,X,Z,z){const Q=C.opaque,_e=C.transmissive,Ae=C.transparent;m.setupLightsView(Z),ee===!0&&J.setGlobalState(v.clippingPlanes,Z),_e.length>0&&Vy(Q,_e,X,Z),z&&Te.viewport(w.copy(z)),Q.length>0&&ll(Q,X,Z),_e.length>0&&ll(_e,X,Z),Ae.length>0&&ll(Ae,X,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Vy(C,X,Z,z){const Q=Ce.isWebGL2;de===null&&(de=new Ms(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Wa:Ar,minFilter:Ga,samples:Q?4:0})),v.getDrawingBufferSize(ye),Q?de.setSize(ye.x,ye.y):de.setSize(Gh(ye.x),Gh(ye.y));const _e=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=ji,ll(C,Z,z),Re.updateMultisampleRenderTarget(de),Re.updateRenderTargetMipmap(de);let Pe=!1;for(let be=0,He=X.length;be<He;be++){const Ue=X[be],Oe=Ue.object,pt=Ue.geometry,vt=Ue.material,$n=Ue.group;if(vt.side===Bi&&Oe.layers.test(z.layers)){const Ri=vt.side;vt.side=dn,vt.needsUpdate=!0,Rp(Oe,Z,z,pt,vt,$n),vt.side=Ri,vt.needsUpdate=!0,Pe=!0}}Pe===!0&&(Re.updateMultisampleRenderTarget(de),Re.updateRenderTargetMipmap(de)),v.setRenderTarget(_e),v.setClearColor(U,B),v.toneMapping=Ae}function ll(C,X,Z){const z=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,_e=C.length;Q<_e;Q++){const Ae=C[Q],Pe=Ae.object,be=Ae.geometry,He=z===null?Ae.material:z,Ue=Ae.group;Pe.layers.test(Z.layers)&&Rp(Pe,X,Z,be,He,Ue)}}function Rp(C,X,Z,z,Q,_e){C.onBeforeRender(v,X,Z,z,Q,_e),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(v,X,Z,z,C,_e),Q.transparent===!0&&Q.side===Bi&&Q.forceSinglePass===!1?(Q.side=dn,Q.needsUpdate=!0,v.renderBufferDirect(Z,X,z,Q,C,_e),Q.side=Dr,Q.needsUpdate=!0,v.renderBufferDirect(Z,X,z,Q,C,_e),Q.side=Bi):v.renderBufferDirect(Z,X,z,Q,C,_e),C.onAfterRender(v,X,Z,z,Q,_e)}function ul(C,X,Z){X.isScene!==!0&&(X=Je);const z=Ne.get(C),Q=m.state.lights,_e=m.state.shadowsArray,Ae=Q.state.version,Pe=$.getParameters(C,Q.state,_e,X,Z),be=$.getProgramCacheKey(Pe);let He=z.programs;z.environment=C.isMeshStandardMaterial?X.environment:null,z.fog=X.fog,z.envMap=(C.isMeshStandardMaterial?rt:Ge).get(C.envMap||z.environment),He===void 0&&(C.addEventListener("dispose",ce),He=new Map,z.programs=He);let Ue=He.get(be);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===Ae)return Pp(C,Pe),Ue}else Pe.uniforms=$.getUniforms(C),C.onBuild(Z,Pe,v),C.onBeforeCompile(Pe,v),Ue=$.acquireProgram(Pe,be),He.set(be,Ue),z.uniforms=Pe.uniforms;const Oe=z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=J.uniform),Pp(C,Pe),z.needsLights=Xy(C),z.lightsStateVersion=Ae,z.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.directionalShadowMap.value=Q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotShadowMap.value=Q.state.spotShadowMap,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMap.value=Q.state.pointShadowMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const pt=Ue.getUniforms(),vt=lu.seqWithValue(pt.seq,Oe);return z.currentProgram=Ue,z.uniformsList=vt,Ue}function Pp(C,X){const Z=Ne.get(C);Z.outputColorSpace=X.outputColorSpace,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Gy(C,X,Z,z,Q){X.isScene!==!0&&(X=Je),Re.resetTextureUnits();const _e=X.fog,Ae=z.isMeshStandardMaterial?X.environment:null,Pe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wi,be=(z.isMeshStandardMaterial?rt:Ge).get(z.envMap||Ae),He=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ue=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Oe=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,vt=!!Z.morphAttributes.color,$n=z.toneMapped?v.toneMapping:ji,Ri=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Ri!==void 0?Ri.length:0,Xe=Ne.get(z),Mc=m.state.lights;if(ee===!0&&(se===!0||C!==M)){const xn=C===M&&z.id===R;J.setState(z,C,xn)}let Lt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Mc.state.version||Xe.outputColorSpace!==Pe||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==be||z.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==J.numPlanes||Xe.numIntersection!==J.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Ue||Xe.morphTargets!==Oe||Xe.morphNormals!==pt||Xe.morphColors!==vt||Xe.toneMapping!==$n||Ce.isWebGL2===!0&&Xe.morphTargetsCount!==St)&&(Lt=!0):(Lt=!0,Xe.__version=z.version);let Hr=Xe.currentProgram;Lt===!0&&(Hr=ul(z,X,Q));let bp=!1,Wo=!1,Ec=!1;const Qt=Hr.getUniforms(),Vr=Xe.uniforms;if(Te.useProgram(Hr.program)&&(bp=!0,Wo=!0,Ec=!0),z.id!==R&&(R=z.id,Wo=!0),bp||M!==C){if(Qt.setValue(V,"projectionMatrix",C.projectionMatrix),Ce.logarithmicDepthBuffer&&Qt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Wo=!0,Ec=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const xn=Qt.map.cameraPosition;xn!==void 0&&xn.setValue(V,Ie.setFromMatrixPosition(C.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&Qt.setValue(V,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){Qt.setOptional(V,Q,"bindMatrix"),Qt.setOptional(V,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(Ce.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Qt.setValue(V,"boneTexture",xn.boneTexture,Re),Qt.setValue(V,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tc=Z.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&Ce.isWebGL2===!0)&&me.update(Q,Z,Hr),(Wo||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,Qt.setValue(V,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vr.envMap.value=be,Vr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Wo&&(Qt.setValue(V,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Wy(Vr,Ec),_e&&z.fog===!0&&re.refreshFogUniforms(Vr,_e),re.refreshMaterialUniforms(Vr,z,W,K,de),lu.upload(V,Xe.uniformsList,Vr,Re)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(lu.upload(V,Xe.uniformsList,Vr,Re),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qt.setValue(V,"center",Q.center),Qt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Qt.setValue(V,"normalMatrix",Q.normalMatrix),Qt.setValue(V,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let wc=0,jy=xn.length;wc<jy;wc++)if(Ce.isWebGL2){const Lp=xn[wc];we.update(Lp,Hr),we.bind(Lp,Hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hr}function Wy(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Xy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,X,Z){Ne.get(C.texture).__webglTexture=X,Ne.get(C.depthTexture).__webglTexture=Z;const z=Ne.get(C);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const Z=Ne.get(C);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Z=0){T=C,S=X,E=Z;let z=!0,Q=null,_e=!1,Ae=!1;if(C){const be=Ne.get(C);be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(V.FRAMEBUFFER,null),z=!1):be.__webglFramebuffer===void 0?Re.setupRenderTarget(C):be.__hasExternalTextures&&Re.rebindTextures(C,Ne.get(C.texture).__webglTexture,Ne.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ue=Ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=Ue[X],_e=!0):Ce.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?Q=Ne.get(C).__webglMultisampledFramebuffer:Q=Ue,w.copy(C.viewport),k.copy(C.scissor),j=C.scissorTest}else w.copy(F).multiplyScalar(W).floor(),k.copy(I).multiplyScalar(W).floor(),j=O;if(Te.bindFramebuffer(V.FRAMEBUFFER,Q)&&Ce.drawBuffers&&z&&Te.drawBuffers(C,Q),Te.viewport(w),Te.scissor(k),Te.setScissorTest(j),_e){const be=Ne.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,be.__webglTexture,Z)}else if(Ae){const be=Ne.get(C.texture),He=X||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,be.__webglTexture,Z||0,He)}R=-1},this.readRenderTargetPixels=function(C,X,Z,z,Q,_e,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){Te.bindFramebuffer(V.FRAMEBUFFER,Pe);try{const be=C.texture,He=be.format,Ue=be.type;if(He!==oi&&ge.convert(He)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ue===Wa&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Ar&&ge.convert(Ue)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===dr&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-z&&Z>=0&&Z<=C.height-Q&&V.readPixels(X,Z,z,Q,ge.convert(He),ge.convert(Ue),_e)}finally{const be=T!==null?Ne.get(T).__webglFramebuffer:null;Te.bindFramebuffer(V.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,X,Z=0){const z=Math.pow(2,-Z),Q=Math.floor(X.image.width*z),_e=Math.floor(X.image.height*z);Re.setTexture2D(X,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,C.x,C.y,Q,_e),Te.unbindTexture()},this.copyTextureToTexture=function(C,X,Z,z=0){const Q=X.image.width,_e=X.image.height,Ae=ge.convert(Z.format),Pe=ge.convert(Z.type);Re.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,z,C.x,C.y,Q,_e,Ae,Pe,X.image.data):X.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,z,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ae,X.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,z,C.x,C.y,Ae,Pe,X.image),z===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Z,z,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=C.max.x-C.min.x+1,Ae=C.max.y-C.min.y+1,Pe=C.max.z-C.min.z+1,be=ge.convert(z.format),He=ge.convert(z.type);let Ue;if(z.isData3DTexture)Re.setTexture3D(z,0),Ue=V.TEXTURE_3D;else if(z.isDataArrayTexture)Re.setTexture2DArray(z,0),Ue=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const Oe=V.getParameter(V.UNPACK_ROW_LENGTH),pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),vt=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),Ri=V.getParameter(V.UNPACK_SKIP_IMAGES),St=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(Ue,Q,X.x,X.y,X.z,_e,Ae,Pe,be,He,St.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ue,Q,X.x,X.y,X.z,_e,Ae,Pe,be,St.data)):V.texSubImage3D(Ue,Q,X.x,X.y,X.z,_e,Ae,Pe,be,He,St),V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,vt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ri),Q===0&&z.generateMipmaps&&V.generateMipmap(Ue),Te.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,Te.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?fs:mx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?ke:wi}}class d2 extends Nx{}d2.prototype.isWebGL1Renderer=!0;class p2 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lp extends zr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new G,h=new G,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(E+y,1-v),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const v=c[f][_+1],y=c[f][_],S=c[f+1][_],E=c[f+1][_+1];(f!==0||o>0)&&p.push(v,y,E),(f!==i-1||l<Math.PI)&&p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ox extends sl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gx,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fx extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pf=new Ct,h_=new G,d_=new G;class m2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),t.position.copy(h_),d_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d_),t.updateMatrixWorld(),Pf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g2 extends m2{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Bu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _2 extends Fx{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new g2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class v2 extends Fx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let ql;class x2{static getContext(){return ql===void 0&&(ql=new(window.AudioContext||window.webkitAudioContext)),ql}static setContext(e){ql=e}}class kx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=p_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=p_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function p_(){return(typeof performance>"u"?Date:performance).now()}const Yr=new G,m_=new Ur,y2=new G,qr=new G;class S2 extends Ot{constructor(){super(),this.type="AudioListener",this.context=x2.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new kx}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Yr,m_,y2),qr.set(0,0,-1).applyQuaternion(m_),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yr.x,r),t.positionY.linearRampToValueAtTime(Yr.y,r),t.positionZ.linearRampToValueAtTime(Yr.z,r),t.forwardX.linearRampToValueAtTime(qr.x,r),t.forwardY.linearRampToValueAtTime(qr.y,r),t.forwardZ.linearRampToValueAtTime(qr.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Yr.x,Yr.y,Yr.z),t.setOrientation(qr.x,qr.y,qr.z,i.x,i.y,i.z)}}class M2 extends Ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class g_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function zx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},up,qt,gt,Vn=1e8,Qe=1/Vn,Xh=Math.PI*2,E2=Xh/4,T2=0,Bx=Math.sqrt,w2=Math.cos,A2=Math.sin,Ft=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},Zi=function(e){return typeof e=="number"},cp=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},pn=function(e){return e!==!1},fp=function(){return typeof window<"u"},$l=function(e){return _t(e)||Ft(e)},Hx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,jh=/(?:-?\.?\d|\.)+/gi,Vx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gx=/[+-]=-?[.\d]+/,Wx=/[^,'"\[\]\s]+/gi,C2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,Fn,Yh,hp,Dn={},Vu={},Xx,jx=function(e){return(Vu=Ts(e,Dn))&&vn},dp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gu=function(e,t){return!t&&console.warn(e)},Yx=function(e,t){return e&&(Dn[e]=t)&&Vu&&(Vu[e]=t)||Dn},Xa=function(){return 0},R2={suppressEvents:!0,isStart:!0,kill:!1},uu={suppressEvents:!0,kill:!1},P2={suppressEvents:!0},pp={},Cr=[],qh={},qx,Tn={},Lf={},__=30,cu=[],mp="",gp=function(e){var t=e[0],i,r;if(Ai(t)||_t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=cu.length;r--&&!cu[r].targetTest(t););i=cu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new vy(e[r],i)))||e.splice(r,1);return e},ds=function(e){return e._gsap||gp(Gn(e))[0]._gsap},$x=function(e,t,i){return(i=e[t])&&_t(i)?e[t]():cp(i)&&e.getAttribute&&e.getAttribute(t)||i},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},So=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},b2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wu=function(){var e=Cr.length,t=Cr.slice(0),i,r;for(qh={},Cr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Kx=function(e,t,i,r){Cr.length&&!qt&&Wu(),e.render(t,i,r||qt&&t<0&&(e._initted||e._startAt)),Cr.length&&!qt&&Wu()},Zx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wx).length<2?t:Ft(e)?e.trim():e},Qx=function(e){return e},qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},L2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ts=function(e,t){for(var i in t)e[i]=t[i];return e},v_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ai(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ea=function(e){var t=e.parent||at,i=e.keyframes?L2($t(e.keyframes)):qn;if(pn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},D2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Jx=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ir=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},U2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$h=function(e,t,i,r){return e._startAt&&(qt?e._startAt.revert(uu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},I2=function n(e){return!e||e._ts&&n(e.parent)},x_=function(e){return e._repeat?Oo(e._tTime,e=e.duration()+e._rDelay)*e:0},Oo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},ju=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},Sc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yc(e),i._dirty||ps(i,e)),e},ey=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ju(e.rawTime(),t),(!t._dur||al(0,t.totalDuration(),i)-t._tTime>Qe)&&t.render(i,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Qe}},vi=function(e,t,i,r){return t.parent&&Ir(t),t._start=zt((Zi(i)?i:i||e!==at?On(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jx(e,t,"_first","_last",e._sort?"_start":0),Kh(t)||(e._recent=t),r||ey(e,t),e._ts<0&&Sc(e,e._tTime),e},ty=function(e,t){return(Dn.ScrollTrigger||dp("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},ny=function(e,t,i,r,s){if(vp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qx!==An.frame)return Cr.push(e),e._lazy=[s,r],1},N2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Kh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},O2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&N2(e)&&!(!e._initted&&Kh(e))||(e._ts<0||e._dp._ts<0)&&!Kh(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=al(0,e._tDur,t),c=Oo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Oo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&ny(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Qe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&$h(e,t,i,!0),e._onUpdate&&!i&&Wn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ir(e,1),!i&&!qt&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},F2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Fo=function(e,t,i,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Sc(e,e._tTime=e._tDur*a),e.parent&&yc(e),i||ps(e.parent,e),e},y_=function(e){return e instanceof ln?ps(e):Fo(e,e._dur)},k2={_start:0,endTime:Xa,totalDuration:Xa},On=function n(e,t,i){var r=e.labels,s=e._recent||k2,o=e.duration()>=Vn?s.endTime(!1):e._dur,a,l,u;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*($t(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ta=function(e,t,i){var r=Zi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;o.immediateRender=pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},Br=function(e,t){return e||e===0?t(e):t},al=function(e,t,i){return i<e?e:i>t?t:i},Yt=function(e,t){return!Ft(e)||!(t=C2.exec(e))?"":t[1]},z2=function(e,t,i){return Br(i,function(r){return al(e,t,r)})},Zh=[].slice,iy=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==Fn},B2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!t||iy(r,1)?(s=i).push.apply(s,Gn(r)):i.push(r)})||i},Gn=function(e,t,i){return gt&&!t&&gt.selector?gt.selector(e):Ft(e)&&!i&&(Yh||!ko())?Zh.call((t||hp).querySelectorAll(e),0):$t(e)?B2(e,i):iy(e)?Zh.call(e,0):e?[e]:[]},Qh=function(e){return e=Gn(e)[0]||Gu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gn(t,i.querySelectorAll?i:i===e?Gu("Invalid scope")||hp.createElement("div"):e)}},ry=function(e){return e.sort(function(){return .5-Math.random()})},sy=function(e){if(_t(e))return e;var t=Ai(e)?e:{each:e},i=ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Ft(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var g=(x||t).length,m=o[g],f,_,v,y,S,E,T,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!M){for(T=-Vn;T<(T=x[M++].getBoundingClientRect().left)&&M<g;);M--}for(m=o[g]=[],f=l?Math.min(M,g)*c-.5:r%M,_=M===Vn?0:l?g*d/M-.5:r/M|0,T=0,R=Vn,E=0;E<g;E++)v=E%M-f,y=_-(E/M|0),m[E]=S=u?Math.abs(u==="y"?y:v):Bx(v*v+y*y),S>T&&(T=S),S<R&&(R=S);r==="random"&&ry(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Yt(t.amount||t.each)||0,i=i&&g<0?my(i):i}return g=(m[h]-m.min)/m.max||0,zt(m.b+(i?i(g):g)*m.v)+m.u}},Jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Zi(i)?0:Yt(i))}},oy=function(e,t){var i=$t(e),r,s;return!i&&Ai(e)&&(r=i=e.radius||Vn,e.values?(e=Gn(e.values),(s=!Zi(e[0]))&&(r*=r)):e=Jh(e.increment)),Br(t,i?_t(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Zi(o)?c:c+Yt(o)}:Jh(e))},ay=function(e,t,i,r){return Br($t(e)?!t:i===!0?!!(i=0):!r,function(){return $t(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},H2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},V2=function(e,t){return function(i){return e(parseFloat(i))+(t||Yt(i))}},G2=function(e,t,i){return uy(e,t,0,1,i)},ly=function(e,t,i){return Br(i,function(r){return e[~~t(r)]})},W2=function n(e,t,i){var r=t-e;return $t(e)?ly(e,n(0,e.length),t):Br(i,function(s){return(r+(s-e)%r)%r+e})},X2=function n(e,t,i){var r=t-e,s=r*2;return $t(e)?ly(e,n(0,e.length-1),t):Br(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ja=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Wx:jh),i+=e.substr(t,r-t)+ay(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},uy=function(e,t,i,r,s){var o=t-e,a=r-i;return Br(s,function(l){return i+((l-e)/o*a||0)})},j2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ft(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var g=Math.min(h,~~x);return c[g](x-g)},i=t}else r||(e=Ts($t(e)?[]:{},e));if(!c){for(l in t)_p.call(a,e,l,"get",t[l]);s=function(x){return Sp(x,a)||(o?e.p:e)}}}return Br(i,s)},S_=function(e,t,i){var r=e.labels,s=Vn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(e,t,i){var r=e.vars,s=r[t],o=gt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Cr.length&&Wu(),a&&(gt=a),c=l?s.apply(u,l):s.call(u),gt=o,c},fa=function(e){return Ir(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Wn(e,"onInterrupt"),e},co,cy=[],fy=function(e){if(fp()&&e){e=!e.name&&e.default||e;var t=e.name,i=_t(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Xa,render:Sp,add:_p,kill:lP,modifier:aP,rawVars:0},o={targetTest:0,get:0,getSetter:yp,aliases:{},register:0};if(ko(),e!==r){if(Tn[t])return;qn(r,qn(Xu(e,s),o)),Ts(r.prototype,Ts(s,Xu(e,o))),Tn[r.prop=t]=r,e.targetTest&&(cu.push(r),pp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yx(t,r),e.register&&e.register(vn,r,gn)}else e&&cy.push(e)},Ze=255,ha={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Df=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ze+.5|0},hy=function(e,t,i){var r=e?Zi(e)?[e>>16,e>>8&Ze,e&Ze]:0:ha.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ha[e])r=ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ze,r&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(jh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Df(l+1/3,s,o),r[1]=Df(l,s,o),r[2]=Df(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Vx),i&&r.length<4&&(r[3]=1),r}else r=e.match(jh)||ha.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Ze,o=r[1]/Ze,a=r[2]/Ze,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},dy=function(e){var t=[],i=[],r=-1;return e.split(Rr).forEach(function(s){var o=s.match(uo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},M_=function(e,t,i){var r="",s=(e+r).match(Rr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=hy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=dy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Rr,"1").split(uo),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Rr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Rr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ha)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Y2=/hsl[a]?\(/,py=function(e){var t=e.join(" "),i;if(Rr.lastIndex=0,Rr.test(t))return i=Y2.test(t),e[1]=M_(e[1],i),e[0]=M_(e[0],i,dy(e[1])),!0},Ya,An=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function g(m){var f=n()-r,_=m===!0,v,y,S,E;if(f>e&&(i+=f-t),r+=f,S=r-i,v=S-o,(v>0||_)&&(E=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](S,h,E,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Xx&&(!Yh&&fp()&&(Fn=Yh=window,hp=Fn.document||{},Dn.gsap=vn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(vn.version),jx(Vu||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),c=Fn.requestAnimationFrame,cy.forEach(fy)),l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ya=1,x(2))},sleep:function(){(c?Fn.cancelAnimationFrame:clearTimeout)(l),Ya=0,u=Xa},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,_){var v=f?function(y,S,E,T){m(y,S,E,T),d.remove(v)}:m;return d.remove(m),a[_?"unshift":"push"](v),ko(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),ko=function(){return!Ya&&An.wake()},We={},q2=/^[\d.\-M][\d.\-,\s]/,$2=/["']/g,K2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace($2,"").trim():+u,r=l.substr(a+1).trim();return t},Z2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Q2=function(e){var t=(e+"").split("("),i=We[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[K2(t[1])]:Z2(e).split(",").map(Zx)):We._CE&&q2.test(e)?We._CE("",e):i},my=function(e){return function(t){return 1-e(1-t)}},gy=function n(e,t){for(var i=e._first,r;i;)i instanceof ln?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ms=function(e,t){return e&&(_t(e)?e:We[e]||Q2(e))||t},Rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return mn(e,function(a){We[a]=Dn[a]=s,We[o=a.toLowerCase()]=i;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},_y=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Xh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*A2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:_y(a);return s=Xh/s,l.config=function(u,c){return n(e,u,c)},l},If=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:_y(i);return r.config=function(s){return n(e,s)},r};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;Rs("Elastic",Uf("in"),Uf("out"),Uf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Rs("Circ",function(n){return-(Bx(1-n*n)-1)});Rs("Sine",function(n){return n===1?1:-w2(n*E2)+1});Rs("Back",If("in"),If("out"),If());We.SteppedEase=We.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Qe;return function(a){return((r*al(0,o,a)|0)+s)*i}}};No.ease=We["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return mp+=n+","+n+"Params,"});var vy=function(e,t){this.id=T2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$x,this.set=t?t.getSetter:yp},qa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fo(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),Ya||An.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Fo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,i),!s._dp||s.parent||ey(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Qe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+x_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+x_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Oo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?ju(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Qe?0:this._rts,this.totalTime(al(-Math.abs(this._delay),this._tDur,r),!0),yc(this),U2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&vi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ju(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=P2);var r=qt;return qt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,y_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,y_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(On(this,i),pn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Qe)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=_t(i)?i:Qx,a=function(){var u=r.then;r.then=null,_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){fa(this)},n}();qn(qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var ln=function(n){zx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pn(i.sortChildren),at&&vi(i.parent||at,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ty(Fi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ta(0,arguments,this),this},t.from=function(r,s,o){return Ta(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ta(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,On(this,o),1),this},t.call=function(r,s,o){return vi(this,Et.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Et(r,o,On(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ea(o).immediateRender=pn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ea(a).immediateRender=pn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:zt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,g,m,f,_,v,y,S,E,T;if(this!==at&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=zt(c%m),c===l?(g=this._repeat,h=u):(g=~~(c/m),g&&g===c/m&&(h=u,g--),h>u&&(h=u)),S=Oo(this._tTime,m),!a&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),E&&g&1&&(h=u-h,T=1),g!==S&&!this._lock){var R=E&&S&1,M=R===(E&&g&1);if(g<S&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(T?0:zt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;gy(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=F2(this,zt(a),zt(h)),_&&(c-=h-(h=_._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=-Qe);break}}p=x}else{p=this._last;for(var w=r<0?r:h;p;){if(x=p._prev,(p._act||w<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||qt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=w?-Qe:Qe);break}}p=x}}if(_&&!s&&(this.pause(),_.render(h>=a?0:-Qe)._zTime=h>=a?1:-1,this._ts))return this._start=y,yc(this),this.render(r,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ir(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Wn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Zi(s)||(s=On(this,s,r)),!(r instanceof qa)){if($t(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(_t(r))r=Et.delayedCall(0,r);else return this}return this!==r?vi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Et?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(xc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=On(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Et.delayedCall(0,s||Xa,o);return a.data="isPause",this._hasPause=1,vi(this,a,On(this,r))},t.removePause=function(r){var s=this._first;for(r=On(this,r);s;)s._start===r&&s.data==="isPause"&&Ir(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)pr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gn(r),l=this._first,u=Zi(s),c;l;)l instanceof Et?b2(l._targets,a)&&(u?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=On(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=Et.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Qe,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Fo(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qn({startAt:{time:On(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),S_(this,On(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),S_(this,On(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ps(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Fo(o,o===at&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(at._ts&&(Kx(at,ju(r,at)),qx=An.frame),An.frame>=__){__+=bn.autoSleep||120;var s=at._first;if((!s||!s._ts)&&bn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},e}(qa);qn(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var J2=function(e,t,i,r,s,o,a){var l=new gn(this._pt,e,t,0,1,Ty,null,s),u=0,c=0,d,h,p,x,g,m,f,_;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=ja(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),h=i.match(bf)||[];d=bf.exec(r);)x=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:x.charAt(1)==="="?So(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=bf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Gx.test(r)||f)&&(l.e=0),this._pt=l,l},_p=function(e,t,i,r,s,o,a,l,u,c){_t(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:_t(d)?u?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=_t(d)?u?rP:My:xp,x;if(Ft(r)&&(~r.indexOf("random(")&&(r=ja(r)),r.charAt(1)==="="&&(x=So(h,r)+(Yt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||ed)return!isNaN(h*r)&&r!==""?(x=new gn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?oP:Ey,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&dp(t,r),J2.call(this,e,t,h,r,p,l||bn.stringFilter,u))},eP=function(e,t,i,r,s){if(_t(e)&&(e=wa(e,s,t,i,r)),!Ai(e)||e.style&&e.nodeType||$t(e)||Hx(e))return Ft(e)?wa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=wa(e[a],s,t,i,r);return o},xy=function(e,t,i,r,s,o){var a,l,u,c;if(Tn[e]&&(a=new Tn[e]).init(s,a.rawVars?t[e]:eP(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new gn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==co))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},pr,ed,vp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,x=r.keyframes,g=r.autoRevert,m=e._dur,f=e._startAt,_=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:_,S=e._overwrite==="auto"&&!up,E=e.timeline,T,R,M,w,k,j,U,B,H,K,W,L,N;if(E&&(!x||!s)&&(s="none"),e._ease=ms(s,No.ease),e._yEase=p?my(ms(p===!0?s:p,No.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||x&&!r.stagger){if(B=_[0]?ds(_[0]).harness:0,L=B&&r[B.prop],T=Xu(r,pp),f&&(f._zTime<0&&f.progress(1),t<0&&h&&a&&!g?f.render(-1,!0):f.revert(h&&m?uu:R2),f._lazy=0),o){if(Ir(e._startAt=Et.set(_,qn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&pn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!g)&&e._startAt.revert(uu),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!f){if(t&&(a=!1),M=qn({overwrite:!1,data:"isFromStart",lazy:a&&!f&&pn(l),immediateRender:a,stagger:0,parent:v},T),L&&(M[B.prop]=L),Ir(e._startAt=Et.set(_,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(uu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&pn(l)||l&&!m,R=0;R<_.length;R++){if(k=_[R],U=k._gsap||gp(_)[R]._gsap,e._ptLookup[R]=K={},qh[U.id]&&Cr.length&&Wu(),W=y===_?R:y.indexOf(k),B&&(H=new B).init(k,L||T,e,W,y)!==!1&&(e._pt=w=new gn(e._pt,k,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(F){K[F]=w}),H.priority&&(j=1)),!B||L)for(M in T)Tn[M]&&(H=xy(M,T,e,W,k,y))?H.priority&&(j=1):K[M]=w=_p.call(e,k,M,"get",T[M],W,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(k,e._op[R]),S&&e._pt&&(pr=e,at.killTweensOf(k,K,e.globalTime(t)),N=!e.parent,pr=0),e._pt&&l&&(qh[U.id]=1)}j&&wy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,x&&t<=0&&E.render(Vn,!0,!0)},tP=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ed=1,e.vars[t]="+=0",vp(e,a),ed=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=xt(i)+Yt(c.e)),c.b&&(c.b=u.s+Yt(c.b))},nP=function(e,t){var i=e[0]?ds(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ts({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},iP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($t(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wa=function(e,t,i,r,s){return _t(e)?e.call(t,i,r,s):Ft(e)&&~e.indexOf("random(")?ja(e):e},yy=mp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sy={};mn(yy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Sy[n]=1});var Et=function(n){zx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ea(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,_=r.parent||at,v=($t(i)||Hx(i)?Zi(i[0]):"length"in r)?[i]:Gn(i),y,S,E,T,R,M,w,k;if(a._targets=v.length?gp(v):Gu("GSAP target "+i+" not found. https://greensock.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||$l(u)||$l(c)){if(r=a.vars,y=a.timeline=new ln({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Fi(a),y._start=0,h||$l(u)||$l(c)){if(T=v.length,w=h&&sy(h),Ai(h))for(R in h)~yy.indexOf(R)&&(k||(k={}),k[R]=h[R]);for(S=0;S<T;S++)E=Xu(r,Sy),E.stagger=0,f&&(E.yoyoEase=f),k&&Ts(E,k),M=v[S],E.duration=+wa(u,Fi(a),S,M,v),E.delay=(+wa(c,Fi(a),S,M,v)||0)-a._delay,!h&&T===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),y.to(M,E,w?w(S,M,v):0),y._ease=We.none;y.duration()?u=c=0:a.timeline=0}else if(x){Ea(qn(y.vars.defaults,{ease:"none"})),y._ease=ms(x.ease||r.ease||"none");var j=0,U,B,H;if($t(x))x.forEach(function(K){return y.to(v,K,">")}),y.duration();else{E={};for(R in x)R==="ease"||R==="easeEach"||iP(R,x[R],E,x.easeEach);for(R in E)for(U=E[R].sort(function(K,W){return K.t-W.t}),j=0,S=0;S<U.length;S++)B=U[S],H={ease:B.e,duration:(B.t-(S?U[S-1].t:0))/100*u},H[R]=B.v,y.to(v,H,j),j+=H.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!up&&(pr=Fi(a),at.killTweensOf(v),pr=0),vi(_,Fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===zt(_._time)&&pn(d)&&I2(Fi(a))&&_.data!=="nested")&&(a._tTime=-Qe,a.render(Math.max(0,-c)||0)),m&&ty(Fi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Qe&&!c?l:r<Qe?0:r,h,p,x,g,m,f,_,v,y;if(!u)O2(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=zt(d%g),d===l?(x=this._repeat,h=u):(x=~~(d/g),x&&x===d/g&&(h=u,x--),h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Oo(this._tTime,g),h===a&&!o&&this._initted)return this._tTime=d,this;x!==m&&(v&&this._yEase&&gy(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(zt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(ny(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(h/u),this._from&&(this.ratio=_=1-_),h&&!a&&!s&&!x&&(Wn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;v&&v.render(r<0?r:!h&&f?-Qe:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&$h(this,r,s,o),Wn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&$h(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ir(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Wn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Ya||An.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vp(this,l),u=this._ease(l/this._dur),tP(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(Sc(this,0),this.parent||Jx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,pr&&pr.vars.overwrite!==!0)._first||fa(this),this.parent&&o!==this.timeline.totalDuration()&&Fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gn(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,g,m,f;if((!s||s==="all")&&D2(a,l))return s==="all"&&(this._pt=0),fa(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(g={},mn(s,function(_){return g[_]=1}),s=g),s=nP(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(g in x)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xc(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&fa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ta(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ta(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return at.killTweensOf(r,s,o)},e}(qa);qn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(n){Et[n]=function(){var e=new ln,t=Zh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var xp=function(e,t,i){return e[t]=i},My=function(e,t,i){return e[t](i)},rP=function(e,t,i,r){return e[t](r.fp,i)},sP=function(e,t,i){return e.setAttribute(t,i)},yp=function(e,t){return _t(e[t])?My:cp(e[t])&&e.setAttribute?sP:xp},Ey=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},oP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ty=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Sp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},aP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},lP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},uP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},wy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},gn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ey,this.d=l||this,this.set=u||xp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=uP,this.m=i,this.mt=s,this.tween=r},n}();mn(mp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return pp[n]=1});Dn.TweenMax=Dn.TweenLite=Et;Dn.TimelineLite=Dn.TimelineMax=ln;at=new ln({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=py;var gs=[],fu={},cP=[],E_=0,fP=0,Nf=function(e){return(fu[e]||cP).map(function(t){return t()})},td=function(){var e=Date.now(),t=[];e-E_>2&&(Nf("matchMediaInit"),gs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Fn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Nf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),E_=e,Nf("matchMedia"))},Ay=function(){function n(t,i){this.selector=i&&Qh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){_t(i)&&(s=r,r=i,i=_t);var o=this,a=function(){var u=gt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Qh(s)),gt=o,d=r.apply(o,arguments),_t(d)&&o._r.push(d),gt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===_t?a(o):i?o[i]=a:a},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Et)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),hP=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ai(i)||(i={matches:i});var o=new Ay(0,s||this.scope),a=o.conditions={},l,u,c;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Fn.matchMedia(i[u]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(td):l.addEventListener("change",td)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return fy(r)})},timeline:function(e){return new ln(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ft(e)&&(e=Gn(e)[0]);var s=ds(e||{}).get,o=i?Qx:Zx;return i==="native"&&(i=""),e&&(t?o((Tn[t]&&Tn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Tn[a]&&Tn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gn(e),e.length>1){var r=e.map(function(c){return vn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Tn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;co._pt=0,d.init(e,i?c+i:c,co,0,[e]),d.render(1,d),co._pt&&Sp(1,co)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=vn.to(e,Ts((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,No.ease)),v_(No,e||{})},config:function(e){return v_(bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Tn[a]&&!Dn[a]&&Gu(t+" effect requires "+a+" plugin.")}),Lf[t]=function(a,l,u){return i(Gn(a),qn(l||{},s),u)},o&&(ln.prototype[t]=function(a,l,u){return this.add(Lf[t](a,Ai(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){We[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):We},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ln(e),r,s;for(i.smoothChildTiming=pn(e.smoothChildTiming),at.remove(i),i._dp=0,i._time=i._tTime=at._time,r=at._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&vi(i,r,r._start-r._delay),r=s;return vi(at,i,0),i},context:function(e,t){return e?new Ay(e,t):gt},matchMedia:function(e){return new hP(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||td()},addEventListener:function(e,t){var i=fu[e]||(fu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=fu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:W2,wrapYoyo:X2,distribute:sy,random:ay,snap:oy,normalize:G2,getUnit:Yt,clamp:z2,splitColor:hy,toArray:Gn,selector:Qh,mapRange:uy,pipe:H2,unitize:V2,interpolate:j2,shuffle:ry},install:jx,effects:Lf,ticker:An,updateRoot:ln.updateRoot,plugins:Tn,globalTimeline:at,core:{PropTween:gn,globals:Yx,Tween:Et,Timeline:ln,Animation:qa,getCache:ds,_removeLinkedListItem:xc,reverting:function(){return qt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return up=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yu[n]=Et[n]});An.add(ln.updateRoot);co=Yu.to({},{duration:0});var dP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},pP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=dP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Of=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ft(s)&&(l={},mn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}pP(a,s)}}}},vn=Yu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Of("roundProps",Jh),Of("modifiers"),Of("snap",oy))||Yu;Et.version=ln.version=vn.version="3.12.2";Xx=1;fp()&&ko();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var T_,mr,Mo,Mp,os,w_,Ep,mP=function(){return typeof window<"u"},Qi={},ts=180/Math.PI,Eo=Math.PI/180,qs=Math.atan2,A_=1e8,Tp=/([A-Z])/g,gP=/(left|right|width|margin|padding|x)/i,_P=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Cy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ry=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SP=function(e,t,i){return e.style[t]=i},MP=function(e,t,i){return e.style.setProperty(t,i)},EP=function(e,t,i){return e._gsap[t]=i},TP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},wP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},AP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},lt="transform",ci=lt+"Origin",CP=function n(e,t){var i=this,r=this.target,s=r.style;if(e in Qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=zi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:zi(r,e);else return xi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(lt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},Py=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},RP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ep(),(!s||!s.isStart)&&!i[lt]&&(Py(i),r.uncache=1)}},by=function(e,t){var i={target:e,props:[],revert:RP,save:CP};return e._gsap||vn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Ly,id=function(e,t){var i=mr.createElementNS?mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mr.createElement(e);return i.style?i:mr.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Tp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,zo(t)||t,1)||""},C_="O,Moz,ms,Ms,Webkit".split(","),zo=function(e,t,i){var r=t||os,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(C_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?C_[o]:"")+e},rd=function(){mP()&&window.document&&(T_=window,mr=T_.document,Mo=mr.documentElement,os=id("div")||{style:{}},id("div"),lt=zo(lt),ci=lt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ly=!!zo("perspective"),Ep=vn.core.reverting,Mp=1)},Ff=function n(e){var t=id("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Mo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Mo.removeChild(t),this.style.cssText=s,o},R_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dy=function(e){var t;try{t=e.getBBox()}catch{t=Ff.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ff||(t=Ff.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+R_(e,["x","cx","x1"])||0,y:+R_(e,["y","cy","y1"])||0,width:0,height:0}:t},Uy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dy(e))},$a=function(e,t){if(t){var i=e.style;t in Qi&&t!==ci&&(t=lt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Tp,"-$1").toLowerCase())):i.removeAttribute(t)}},gr=function(e,t,i,r,s,o){var a=new gn(e._pt,t,i,0,1,o?Ry:Cy);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},P_={deg:1,rad:1,turn:1},PP={grid:1,flex:1},Nr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=os.style,l=gP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,g,m,f;return r===o||!s||P_[r]||P_[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Uy(e),(p||o==="%")&&(Qi[t]||~t.indexOf("adius"))?(x=f?e.getBBox()[l?"width":"height"]:e[c],xt(p?s/x*d:s/100*x)):(a[l?"width":"height"]=d+(h?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===mr||!g.appendChild)&&(g=mr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===An.time&&!m.uncache?xt(s/m.width*d):((p||o==="%")&&!PP[Ti(g,"display")]&&(a.position=Ti(e,"position")),g===e&&(a.position="static"),g.appendChild(os),x=os[c],g.removeChild(os),a.position="absolute",l&&p&&(m=ds(g),m.time=An.time,m.width=g[c]),xt(h?x*s/d:x&&s?d/x*s:0))))},zi=function(e,t,i,r){var s;return Mp||rd(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(s=Za(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$u(Ti(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qu[t]&&qu[t](e,t,i)||Ti(e,t)||$x(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Nr(e,t,s,i)+i:s},bP=function(e,t,i,r){if(!i||i==="none"){var s=zo(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new gn(this._pt,e.style,t,0,1,Ty),l=0,u=0,c,d,h,p,x,g,m,f,_,v,y,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Ti(e,t)||r,e.style[t]=i),c=[i,r],py(c),i=c[0],r=c[1],h=i.match(uo)||[],S=r.match(uo)||[],S.length){for(;d=uo.exec(r);)m=d[0],_=r.substring(l,d.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=So(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=uo.lastIndex-v.length,v||(v=v||bn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Nr(e,t,g,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ry:Cy;return Gx.test(r)&&(a.e=0),this._pt=a,a},b_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=b_[i]||i,t[1]=b_[r]||r,t.join(" ")},DP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Qi[a]&&(l=1,a=a==="transformOrigin"?ci:lt),$a(i,a);l&&($a(i,lt),o&&(o.svg&&i.removeAttribute("transform"),Za(i,1),o.uncache=1,Py(r)))}},qu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new gn(e._pt,t,i,0,0,DP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],Iy={},Ny=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},L_=function(e){var t=Ti(e,lt);return Ny(t)?Ka:t.substr(7).match(Vx).map(xt)},wp=function(e,t){var i=e._gsap||ds(e),r=e.style,s=L_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==Mo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Mo.appendChild(e)),s=L_(e),l?r.display=l:$a(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sd=function(e,t,i,r,s,o){var a=e._gsap,l=s||wp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],f=l[4],_=l[5],v=t.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,E,T,R,M;i?l!==Ka&&(T=p*m-x*g)&&(R=y*(m/T)+S*(-g/T)+(g*_-m*f)/T,M=y*(-x/T)+S*(p/T)-(p*_-x*f)/T,y=R,S=M):(E=Dy(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),S=E.y+(~(v[1]||v[0]).indexOf("%")?S/100*E.height:S)),r||r!==!1&&a.smooth?(f=y-u,_=S-c,a.xOffset=d+(f*p+_*g)-f,a.yOffset=h+(f*x+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ci]="0px 0px",o&&(gr(o,a,"xOrigin",u,y),gr(o,a,"yOrigin",c,S),gr(o,a,"xOffset",d,a.xOffset),gr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Za=function(e,t){var i=e._gsap||new vy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ti(e,ci)||"0",c,d,h,p,x,g,m,f,_,v,y,S,E,T,R,M,w,k,j,U,B,H,K,W,L,N,F,I,O,oe,ee,se;return c=d=h=g=m=f=_=v=y=0,p=x=1,i.svg=!!(e.getCTM&&Uy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),r.scale=r.rotate=r.translate="none"),T=wp(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),sd(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,T)),S=i.xOrigin||0,E=i.yOrigin||0,T!==Ka&&(k=T[0],j=T[1],U=T[2],B=T[3],c=H=T[4],d=K=T[5],T.length===6?(p=Math.sqrt(k*k+j*j),x=Math.sqrt(B*B+U*U),g=k||j?qs(j,k)*ts:0,_=U||B?qs(U,B)*ts+g:0,_&&(x*=Math.abs(Math.cos(_*Eo))),i.svg&&(c-=S-(S*k+E*U),d-=E-(S*j+E*B))):(se=T[6],oe=T[7],F=T[8],I=T[9],O=T[10],ee=T[11],c=T[12],d=T[13],h=T[14],R=qs(se,O),m=R*ts,R&&(M=Math.cos(-R),w=Math.sin(-R),W=H*M+F*w,L=K*M+I*w,N=se*M+O*w,F=H*-w+F*M,I=K*-w+I*M,O=se*-w+O*M,ee=oe*-w+ee*M,H=W,K=L,se=N),R=qs(-U,O),f=R*ts,R&&(M=Math.cos(-R),w=Math.sin(-R),W=k*M-F*w,L=j*M-I*w,N=U*M-O*w,ee=B*w+ee*M,k=W,j=L,U=N),R=qs(j,k),g=R*ts,R&&(M=Math.cos(R),w=Math.sin(R),W=k*M+j*w,L=H*M+K*w,j=j*M-k*w,K=K*M-H*w,k=W,H=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=xt(Math.sqrt(k*k+j*j+U*U)),x=xt(Math.sqrt(K*K+se*se)),R=qs(H,K),_=Math.abs(R)>2e-4?R*ts:0,y=ee?1/(ee<0?-ee:ee):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ny(Ti(e,lt)),W&&e.setAttribute("transform",W))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=xt(p),i.scaleY=xt(x),i.rotation=xt(g)+a,i.rotationX=xt(m)+a,i.rotationY=xt(f)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[ci]=$u(u)),i.xOffset=i.yOffset=0,i.force3D=bn.force3D,i.renderTransform=i.svg?IP:Ly?Oy:UP,i.uncache=0,i},$u=function(e){return(e=e.split(" "))[0]+" "+e[1]},kf=function(e,t,i){var r=Yt(t);return xt(parseFloat(t)+parseFloat(Nr(e,"x",i+"px",r)))+r},UP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Oy(e,t)},$r="0deg",ia="0px",Kr=") ",Oy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,_=i.target,v=i.zOrigin,y="",S=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==$r||c!==$r)){var E=parseFloat(c)*Eo,T=Math.sin(E),R=Math.cos(E),M;E=parseFloat(d)*Eo,M=Math.cos(E),o=kf(_,o,T*M*-v),a=kf(_,a,-Math.sin(E)*-v),l=kf(_,l,R*M*-v+v)}m!==ia&&(y+="perspective("+m+Kr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==ia||a!==ia||l!==ia)&&(y+=l!==ia||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),u!==$r&&(y+="rotate("+u+Kr),c!==$r&&(y+="rotateY("+c+Kr),d!==$r&&(y+="rotateX("+d+Kr),(h!==$r||p!==$r)&&(y+="skew("+h+", "+p+Kr),(x!==1||g!==1)&&(y+="scale("+x+", "+g+Kr),_.style[lt]=y||"translate(0, 0)"},IP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),S,E,T,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Eo,u*=Eo,S=Math.cos(l)*d,E=Math.sin(l)*d,T=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=Eo,M=Math.tan(u-c),M=Math.sqrt(1+M*M),T*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),S*=M,E*=M)),S=xt(S),E=xt(E),T=xt(T),R=xt(R)):(S=d,R=h,E=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Nr(p,"x",o,"px"),y=Nr(p,"y",a,"px")),(x||g||m||f)&&(v=xt(v+x-(x*S+g*T)+m),y=xt(y+g-(x*E+g*R)+f)),(r||s)&&(M=p.getBBox(),v=xt(v+r/100*M.width),y=xt(y+s/100*M.height)),M="matrix("+S+","+E+","+T+","+R+","+v+","+y+")",p.setAttribute("transform",M),_&&(p.style[lt]=M)},NP=function(e,t,i,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ts:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*A_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*A_)%o-~~(u/o)*o)),e._pt=h=new gn(e._pt,t,i,r,u,vP),h.e=c,h.u="deg",e._props.push(i),h},D_=function(e,t){for(var i in t)e[i]=t[i];return e},OP=function(e,t,i){var r=D_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[lt]=t,a=Za(i,1),$a(i,lt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[lt],o[lt]=t,a=Za(i,1),o[lt]=u);for(l in Qi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Yt(u),x=Yt(c),d=p!==x?Nr(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new gn(e._pt,a,l,d,h-d,nd),e._pt.u=x||0,e._props.push(l));D_(a,r)};mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});qu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return zi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,g){return p[x]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var Fy={name:"css",register:rd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,g,m,f,_,v,y,S,E,T,R;Mp||rd(),this.styles=this.styles||by(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Tn[g]&&xy(g,t,i,r,e,s)))){if(p=typeof c,x=qu[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=ja(c)),x)x(this,e,g,c,i)&&(T=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Rr.lastIndex=0,Rr.test(u)||(m=Yt(u),f=Yt(c)),f?m!==f&&(u=Nr(e,g,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Ft(u)&&~u.indexOf("random(")&&(u=ja(u)),Yt(u+"")||(u+=bn.units[g]||Yt(zi(e,g))||""),(u+"").charAt(1)==="="&&(u=zi(e,g))):u=zi(e,g),h=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),g in xi&&(g==="autoAlpha"&&(h===1&&zi(e,"visibility")==="hidden"&&d&&(h=0),R.push("visibility",0,a.visibility),gr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Qi,v){if(this.styles.save(g),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new gn(this._pt,a,lt,0,1,S.renderTransform,S,0,-1),y.dep=1),g==="scale")this._pt=new gn(this._pt,S,"scaleY",S.scaleY,(_?So(S.scaleY,_+d):d)-S.scaleY||0,nd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(ci,0,a[ci]),c=LP(c),S.svg?sd(e,c,0,E,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==S.zOrigin&&gr(this,S,"zOrigin",S.zOrigin,f),gr(this,a,g,$u(u),$u(c)));continue}else if(g==="svgOrigin"){sd(e,c,1,E,0,this);continue}else if(g in Iy){NP(this,S,g,h,_?So(h,_+c):c);continue}else if(g==="smoothOrigin"){gr(this,S,"smooth",S.smooth,c);continue}else if(g==="force3D"){S[g]=c;continue}else if(g==="transform"){OP(this,c,e);continue}}else g in a||(g=zo(g)||g);if(v||(d||d===0)&&(h||h===0)&&!_P.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Yt(c)||(g in bn.units?bn.units[g]:m),m!==f&&(h=Nr(e,g,u,f)),this._pt=new gn(this._pt,v?S:a,g,h,(_?So(h,_+d):d)-h,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?yP:nd),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=xP);else if(g in a)bP.call(this,e,g,u,_?_+c:c);else if(g in e)this.add(e,g,u||e[g],_?_+c:c,r,s);else if(g!=="parseTransform"){dp(g,c);continue}v||(g in a?R.push(g,0,a[g]):R.push(g,1,u||e[g])),o.push(g)}}T&&wy(this)},render:function(e,t){if(t.tween._time||!Ep())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:xi,getSetter:function(e,t,i){var r=xi[t];return r&&r.indexOf(",")<0&&(t=r),t in Qi&&t!==ci&&(e._gsap.x||zi(e,"x"))?i&&w_===i?t==="scale"?TP:EP:(w_=i||{})&&(t==="scale"?wP:AP):e.style&&!cp(e.style[t])?SP:~t.indexOf("-")?MP:yp(e,t)},core:{_removeProperty:$a,_getMatrix:wp}};vn.utils.checkPrefix=zo;vn.core.getStyleSaver=by;(function(n,e,t,i){var r=mn(n+","+e+","+t,function(s){Qi[s]=1});mn(e,function(s){bn.units[s]="deg",Iy[s]=1}),xi[r[13]]=n+","+e,mn(i,function(s){var o=s.split(":");xi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){bn.units[n]="px"});vn.registerPlugin(Fy);var hu=vn.registerPlugin(Fy)||vn;hu.core.Tween;class FP{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),u=Math.floor(t+a),c=(3-Math.sqrt(3))/6,d=(l+u)*c,h=l-d,p=u-d,x=e-h,g=t-p;let m,f;x>g?(m=1,f=0):(m=0,f=1);const _=x-m+c,v=g-f+c,y=x-1+2*c,S=g-1+2*c,E=l&255,T=u&255,R=this.perm[E+this.perm[T]]%12,M=this.perm[E+m+this.perm[T+f]]%12,w=this.perm[E+1+this.perm[T+1]]%12;let k=.5-x*x-g*g;k<0?i=0:(k*=k,i=k*k*this.dot(this.grad3[R],x,g));let j=.5-_*_-v*v;j<0?r=0:(j*=j,r=j*j*this.dot(this.grad3[M],_,v));let U=.5-y*y-S*S;return U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[w],y,S)),70*(i+r+s)}noise3d(e,t,i){let r,s,o,a;const l=.3333333333333333,u=(e+t+i)*l,c=Math.floor(e+u),d=Math.floor(t+u),h=Math.floor(i+u),p=1/6,x=(c+d+h)*p,g=c-x,m=d-x,f=h-x,_=e-g,v=t-m,y=i-f;let S,E,T,R,M,w;_>=v?v>=y?(S=1,E=0,T=0,R=1,M=1,w=0):_>=y?(S=1,E=0,T=0,R=1,M=0,w=1):(S=0,E=0,T=1,R=1,M=0,w=1):v<y?(S=0,E=0,T=1,R=0,M=1,w=1):_<y?(S=0,E=1,T=0,R=0,M=1,w=1):(S=0,E=1,T=0,R=1,M=1,w=0);const k=_-S+p,j=v-E+p,U=y-T+p,B=_-R+2*p,H=v-M+2*p,K=y-w+2*p,W=_-1+3*p,L=v-1+3*p,N=y-1+3*p,F=c&255,I=d&255,O=h&255,oe=this.perm[F+this.perm[I+this.perm[O]]]%12,ee=this.perm[F+S+this.perm[I+E+this.perm[O+T]]]%12,se=this.perm[F+R+this.perm[I+M+this.perm[O+w]]]%12,de=this.perm[F+1+this.perm[I+1+this.perm[O+1]]]%12;let Me=.6-_*_-v*v-y*y;Me<0?r=0:(Me*=Me,r=Me*Me*this.dot3(this.grad3[oe],_,v,y));let ye=.6-k*k-j*j-U*U;ye<0?s=0:(ye*=ye,s=ye*ye*this.dot3(this.grad3[ee],k,j,U));let Ie=.6-B*B-H*H-K*K;Ie<0?o=0:(Ie*=Ie,o=Ie*Ie*this.dot3(this.grad3[se],B,H,K));let Je=.6-W*W-L*L-N*N;return Je<0?a=0:(Je*=Je,a=Je*Je*this.dot3(this.grad3[de],W,L,N)),32*(r+s+o+a)}noise4d(e,t,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let c,d,h,p,x;const g=(e+t+i+r)*l,m=Math.floor(e+g),f=Math.floor(t+g),_=Math.floor(i+g),v=Math.floor(r+g),y=(m+f+_+v)*u,S=m-y,E=f-y,T=_-y,R=v-y,M=e-S,w=t-E,k=i-T,j=r-R,U=M>w?32:0,B=M>k?16:0,H=w>k?8:0,K=M>j?4:0,W=w>j?2:0,L=k>j?1:0,N=U+B+H+K+W+L,F=o[N][0]>=3?1:0,I=o[N][1]>=3?1:0,O=o[N][2]>=3?1:0,oe=o[N][3]>=3?1:0,ee=o[N][0]>=2?1:0,se=o[N][1]>=2?1:0,de=o[N][2]>=2?1:0,Me=o[N][3]>=2?1:0,ye=o[N][0]>=1?1:0,Ie=o[N][1]>=1?1:0,Je=o[N][2]>=1?1:0,Le=o[N][3]>=1?1:0,V=M-F+u,ft=w-I+u,Ee=k-O+u,Ce=j-oe+u,Te=M-ee+2*u,$e=w-se+2*u,Ne=k-de+2*u,Re=j-Me+2*u,Ge=M-ye+3*u,rt=w-Ie+3*u,ht=k-Je+3*u,P=j-Le+3*u,A=M-1+4*u,$=w-1+4*u,re=k-1+4*u,ie=j-1+4*u,b=m&255,J=f&255,te=_&255,Y=v&255,me=a[b+a[J+a[te+a[Y]]]]%32,Se=a[b+F+a[J+I+a[te+O+a[Y+oe]]]]%32,ve=a[b+ee+a[J+se+a[te+de+a[Y+Me]]]]%32,ge=a[b+ye+a[J+Ie+a[te+Je+a[Y+Le]]]]%32,pe=a[b+1+a[J+1+a[te+1+a[Y+1]]]]%32;let we=.6-M*M-w*w-k*k-j*j;we<0?c=0:(we*=we,c=we*we*this.dot4(s[me],M,w,k,j));let De=.6-V*V-ft*ft-Ee*Ee-Ce*Ce;De<0?d=0:(De*=De,d=De*De*this.dot4(s[Se],V,ft,Ee,Ce));let D=.6-Te*Te-$e*$e-Ne*Ne-Re*Re;D<0?h=0:(D*=D,h=D*D*this.dot4(s[ve],Te,$e,Ne,Re));let le=.6-Ge*Ge-rt*rt-ht*ht-P*P;le<0?p=0:(le*=le,p=le*le*this.dot4(s[ge],Ge,rt,ht,P));let q=.6-A*A-$*$-re*re-ie*ie;return q<0?x=0:(q*=q,x=q*q*this.dot4(s[pe],A,$,re,ie)),27*(c+d+h+p+x)}}const U_={type:"change"},zf={type:"start"},I_={type:"end"};class kP extends Cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ge),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(U_),i.update(),s=r.NONE},this.update=function(){const b=new G,J=new Ur().setFromUnitVectors(e.up,new G(0,1,0)),te=J.clone().invert(),Y=new G,me=new Ur,Se=new G,ve=2*Math.PI;return function(){const pe=i.object.position;b.copy(pe).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&M(T()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=i.minAzimuthAngle,De=i.maxAzimuthAngle;return isFinite(we)&&isFinite(De)&&(we<-Math.PI?we+=ve:we>Math.PI&&(we-=ve),De<-Math.PI?De+=ve:De>Math.PI&&(De-=ve),we<=De?a.theta=Math.max(we,Math.min(De,a.theta)):a.theta=a.theta>(we+De)/2?Math.max(we,a.theta):Math.min(De,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),b.setFromSpherical(a),b.applyQuaternion(te),pe.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||Y.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||Se.distanceToSquared(i.target)>0?(i.dispatchEvent(U_),Y.copy(i.object.position),me.copy(i.object.quaternion),Se.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",P),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",Te),i.domElement.removeEventListener("wheel",Re),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Te),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ge),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new g_,l=new g_;let u=1;const c=new G;let d=!1;const h=new ze,p=new ze,x=new ze,g=new ze,m=new ze,f=new ze,_=new ze,v=new ze,y=new ze,S=[],E={};function T(){return 2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function M(b){l.theta-=b}function w(b){l.phi-=b}const k=function(){const b=new G;return function(te,Y){b.setFromMatrixColumn(Y,0),b.multiplyScalar(-te),c.add(b)}}(),j=function(){const b=new G;return function(te,Y){i.screenSpacePanning===!0?b.setFromMatrixColumn(Y,1):(b.setFromMatrixColumn(Y,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(te),c.add(b)}}(),U=function(){const b=new G;return function(te,Y){const me=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;b.copy(Se).sub(i.target);let ve=b.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),k(2*te*ve/me.clientHeight,i.object.matrix),j(2*Y*ve/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(te*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),j(Y*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){h.set(b.clientX,b.clientY)}function W(b){_.set(b.clientX,b.clientY)}function L(b){g.set(b.clientX,b.clientY)}function N(b){p.set(b.clientX,b.clientY),x.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*x.x/J.clientHeight),w(2*Math.PI*x.y/J.clientHeight),h.copy(p),i.update()}function F(b){v.set(b.clientX,b.clientY),y.subVectors(v,_),y.y>0?B(R()):y.y<0&&H(R()),_.copy(v),i.update()}function I(b){m.set(b.clientX,b.clientY),f.subVectors(m,g).multiplyScalar(i.panSpeed),U(f.x,f.y),g.copy(m),i.update()}function O(b){b.deltaY<0?H(R()):b.deltaY>0&&B(R()),i.update()}function oe(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function ee(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(b,J)}}function se(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);g.set(b,J)}}function de(){const b=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,te=Math.sqrt(b*b+J*J);_.set(0,te)}function Me(){i.enableZoom&&de(),i.enablePan&&se()}function ye(){i.enableZoom&&de(),i.enableRotate&&ee()}function Ie(b){if(S.length==1)p.set(b.pageX,b.pageY);else{const te=ie(b),Y=.5*(b.pageX+te.x),me=.5*(b.pageY+te.y);p.set(Y,me)}x.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*x.x/J.clientHeight),w(2*Math.PI*x.y/J.clientHeight),h.copy(p)}function Je(b){if(S.length===1)m.set(b.pageX,b.pageY);else{const J=ie(b),te=.5*(b.pageX+J.x),Y=.5*(b.pageY+J.y);m.set(te,Y)}f.subVectors(m,g).multiplyScalar(i.panSpeed),U(f.x,f.y),g.copy(m)}function Le(b){const J=ie(b),te=b.pageX-J.x,Y=b.pageY-J.y,me=Math.sqrt(te*te+Y*Y);v.set(0,me),y.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),B(y.y),_.copy(v)}function V(b){i.enableZoom&&Le(b),i.enablePan&&Je(b)}function ft(b){i.enableZoom&&Le(b),i.enableRotate&&Ie(b)}function Ee(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",Te)),A(b),b.pointerType==="touch"?rt(b):$e(b))}function Ce(b){i.enabled!==!1&&(b.pointerType==="touch"?ht(b):Ne(b))}function Te(b){$(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Te)),i.dispatchEvent(I_),s=r.NONE}function $e(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case bs.DOLLY:if(i.enableZoom===!1)return;W(b),s=r.DOLLY;break;case bs.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;L(b),s=r.PAN}else{if(i.enableRotate===!1)return;K(b),s=r.ROTATE}break;case bs.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;K(b),s=r.ROTATE}else{if(i.enablePan===!1)return;L(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zf)}function Ne(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(b);break;case r.DOLLY:if(i.enableZoom===!1)return;F(b);break;case r.PAN:if(i.enablePan===!1)return;I(b);break}}function Re(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(zf),O(b),i.dispatchEvent(I_))}function Ge(b){i.enabled===!1||i.enablePan===!1||oe(b)}function rt(b){switch(re(b),S.length){case 1:switch(i.touches.ONE){case Ls.ROTATE:if(i.enableRotate===!1)return;ee(),s=r.TOUCH_ROTATE;break;case Ls.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(),s=r.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zf)}function ht(b){switch(re(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Je(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(b),i.update();break;default:s=r.NONE}}function P(b){i.enabled!==!1&&b.preventDefault()}function A(b){S.push(b)}function $(b){delete E[b.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==b.pointerId){S.splice(J,1);return}}function re(b){let J=E[b.pointerId];J===void 0&&(J=new ze,E[b.pointerId]=J),J.set(b.pageX,b.pageY)}function ie(b){const J=b.pointerId===S[0].pointerId?S[1]:S[0];return E[J.pointerId]}i.domElement.addEventListener("contextmenu",P),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",Te),i.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}function zP(n,e){const t=new S2;n.add(t);const i=new M2(t);i.autoplay=!0,i.setLoop(!0);const r=document.querySelector("audio"),s=e.createMediaElementSource(r),o=e.createAnalyser(),a=e.createGain(),l={pan:0},u=new StereoPannerNode(e,l);s.connect(a).connect(u).connect(o).connect(e.destination),o.fftSize=1024;const c=o.frequencyBinCount;return[new Uint8Array(c),a,u,o]}function BP(n,e,t,i,r,s,o){var l;const a=e.geometry.attributes.position.count;for(let u=0;u<a;u++){const c=(l=e.geometry.boundingSphere)==null?void 0:l.radius,d=2,h=window.performance.now()/600,p=1e-6,x=e.geometry.attributes.uv.getX(u)*Math.PI*16,g=e.geometry.attributes.uv.getY(u)*Math.PI*16,m=e.geometry.attributes.uv.getZ(u)*Math.PI*16,f=x+h,_=Math.sin(f)*o,v=g+h,y=Math.cos(v)*o,S=u*3,E=u*3+1,T=u*3+2;if(c!==void 0){const R=c/36+r+n.noise3d(x+h*p*7,g+h*p*8,m+h*p*9)*d*s;e.geometry.attributes.position.setX(u,t[S]+i[S]*(R+_+y)),e.geometry.attributes.position.setY(u,t[E]+i[E]*(R+_+y)),e.geometry.attributes.position.setZ(u,t[T]+i[T]*(R+_+y))}}e.geometry.computeVertexNormals(),e.geometry.attributes.position.needsUpdate=!0}function HP(n,e,t){const i=Date.now()/400,r=e.geometry.attributes.position.count,s=2;for(let o=0;o<r;o++){const a=e.geometry.attributes.position.getX(o),l=e.geometry.attributes.position.getY(o),u=Math.sin(a+i),c=Math.cos(l+i),d=(n.noise(a+i*3e-4,l+i*1e-4)+0)*t*s;e.geometry.attributes.position.setZ(o,d+u+c)}e.geometry.computeVertexNormals(),e.geometry.attributes.position.needsUpdate=!0}function VP(n,e,t){return(n-e)/(t-e)}function Bf(n,e,t,i,r){const s=VP(n,e,t),o=r-i;return i+s*o}function N_(n){return n.reduce(function(t,i){return t+i})/n.length}function GP(n){return n.reduce(function(e,t){return Math.max(e,t)})}function WP(n,e){const t=new kP(n,e);return t.enableDamping=!0,t.enablePan=!1,t.enableZoom=!1,t.autoRotate=!0,t.autoRotateSpeed=1,t}function XP(n,e,t){window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.aspect=n.width/n.height,e.updateProjectionMatrix(),t.setSize(n.width,n.height)})}function jP(){const n=new lp(10,256,128),e=new Ox({color:"#e6ffa8",wireframe:!0});return[new ai(n,e),n]}function YP(){const n=new _c(800,800,60,60),e=new Ox({color:"#00ff83",wireframe:!0}),t=new ai(n,e),i=new ai(n,e);return[t,i,n]}function qP(){const n=new _2(16777215,1,100);return n.intensity=5.9,n.position.set(-30,40,20),n.castShadow=!0,n}const O_=new FP,$P=(n,e)=>{const t=new p2,i=new ca,r={width:window.innerWidth,height:window.innerHeight},s=new wn(45,r.width/r.height,.1,1e3),o=new Nx;o.setClearColor(0),o.setSize(r.width,r.height),o.setPixelRatio(2),n.appendChild(o.domElement),s.position.set(0,0,100);const a=WP(s,n);XP(r,s,o);const[l,u,c,d]=zP(s,e),[h,p]=jP();i.add(h);const[x,g,m]=YP();x.rotation.x=.5*Math.PI,x.position.set(0,30,0),i.add(x),g.rotation.x=.5*Math.PI,g.position.set(0,-30,0),i.add(g);const f=qP();f.lookAt(h.position),t.add(f);const _=new v2(11184810);t.add(_);const v=document.querySelector("#volume");if(v)v.addEventListener("input",()=>{u.gain.value=parseFloat(v.value)},!1);else throw new Error("no volume control");const y=document.querySelector("#panner");if(y)y.addEventListener("input",()=>{c.pan.value=parseFloat(y.value)},!1);else throw new Error("no panner control");const S=hu.timeline({defaults:{duration:1}}),E=hu.timeline({defaults:{duration:3}});S.fromTo(h.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),E.fromTo("nav",{y:"-100%"},{y:"0%"}),E.fromTo(".header-title",{opacity:0},{opacity:1});let T=!1,R=[];window.addEventListener("mousedown",()=>T=!0),window.addEventListener("mouseup",()=>T=!1);const M=(L,N,F)=>"#"+[L,N,F].map(I=>I.toString(16).padStart(2,"0")).join("");window.addEventListener("mousemove",L=>{if(T){R=[Math.round(L.pageX/r.width*255),Math.round(L.pageY/r.height*255),175];const N=new qe(M(R[0],R[1],R[2]));hu.to(h.material.color,{r:N.r,g:N.g,b:N.b})}});const w=[],k=new G,j=p.attributes.position;for(let L=0;L<j.count;L++)k.fromBufferAttribute(j,L).normalize(),w.push(k.clone());p.userData.nPosSphere=w;const U=new kx;t.add(i);const B=JSON.parse(JSON.stringify(p.attributes.position.array)),H=JSON.parse(JSON.stringify(p.attributes.normal.array)),K=.2,W=()=>{U.getElapsedTime(),d.getByteFrequencyData(l);const L=l.slice(0,l.length/2-1),N=l.slice(l.length/2-1,l.length-1),F=GP(L),I=N_(L),O=N_(N),oe=F/L.length,ee=I/L.length,se=O/N.length;BP(O_,h,B,H,Bf(Math.pow(oe,.8),0,1,0,8),Bf(se,0,2,0,4),K),HP(O_,x,Bf(ee,0,1,.5,4)),m.computeVertexNormals(),m.attributes.position.needsUpdate=!0,a.update(),requestAnimationFrame(W),o.render(t,s)};W()},KP=({audioContext:n})=>{const[e,t]=xe.useState(!1),i=xe.useCallback(r=>{r!==null&&!e&&($P(r,n),t(!0))},[e]);return fe.jsx("div",{className:"webgL",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},ref:i})},ky="/synesthesia/assets/radio-man-991508e8.mp3",ZP="/synesthesia/assets/radio-man-thumbnail-fb944eeb.png",QP="/synesthesia/assets/ronnie-b-5dd809b9.mp3",ra=[{title:"Radio Man ft. An",src:ky,author:"KNXN ft. An",thumbnail:ZP},{title:"Ronnie B",src:QP,author:"KNXN"}];var zy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},F_=Wi.createContext&&Wi.createContext(zy),Pr=globalThis&&globalThis.__assign||function(){return Pr=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Pr.apply(this,arguments)},JP=globalThis&&globalThis.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};function By(n){return n&&n.map(function(e,t){return Wi.createElement(e.tag,Pr({key:t},e.attr),By(e.child))})}function Ci(n){return function(e){return Wi.createElement(eb,Pr({attr:Pr({},n.attr)},e),By(n.child))}}function eb(n){var e=function(t){var i=n.attr,r=n.size,s=n.title,o=JP(n,["attr","size","title"]),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),Wi.createElement("svg",Pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:Pr(Pr({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Wi.createElement("title",null,s),n.children)};return F_!==void 0?Wi.createElement(F_.Consumer,null,function(t){return e(t)}):e(zy)}function tb(n){return Ci({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M14 11V2h1v9h-1zM6 3v10H5V3h1z"}},{tag:"path",attr:{d:"M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"}}]})(n)}const nb=({currentTrack:n,audioRef:e,setDuration:t,progressBarRef:i,handleNext:r})=>{const s=()=>{if(e.current&&i.current){const o=e.current.duration;t(o),i.current.max=o.toString()}};return fe.jsxs("div",{children:[fe.jsx("audio",{src:n.src,ref:e,onLoadedMetadata:s,onEnded:r}),fe.jsxs("div",{className:"audio-info",children:[fe.jsx("div",{className:"audio-image",children:n.thumbnail?fe.jsx("img",{src:n.thumbnail,alt:"audio avatar"}):fe.jsx("div",{className:"icon-wrapper",children:fe.jsx("span",{className:"audio-icon",children:fe.jsx(tb,{})})})}),fe.jsxs("div",{className:"text",children:[fe.jsx("p",{className:"title",children:n.title}),fe.jsx("p",{children:n.author})]})]})]})};function ib(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224 432h-80V80h80zm144 0h-80V80h80z"}}]})(n)}function rb(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 400L256 256l240-144v288zm-240 0L16 256l240-144v288z"}}]})(n)}function sb(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M16 400l240-144L16 112v288zm240 0l240-144-240-144v288z"}}]})(n)}function ob(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96 448l320-192L96 64v384z"}}]})(n)}function ab(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z"}}]})(n)}function lb(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z"}}]})(n)}function ub(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"}}]})(n)}function cb(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z"}}]})(n)}function fb(n){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"}},{tag:"path",attr:{d:"M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"}}]})(n)}const hb=({audioRef:n,audioContext:e,progressBarRef:t,duration:i,setTimeProgress:r,tracks:s,trackIndex:o,setTrackIndex:a,setCurrentTrack:l,handleNext:u})=>{const[c,d]=xe.useState(!1),h=xe.useRef(0),[p,x]=xe.useState(60),[g,m]=xe.useState(!1);e.resume();const f=()=>{e.state==="suspended"&&e.resume(),d(E=>!E)},_=()=>{n.current&&(n.current.currentTime+=15)},v=()=>{n.current&&(n.current.currentTime-=15)},y=()=>{if(o===0){const E=s.length-1;a(E),l(s[E])}else a(o-1),l(s[o-1])},S=xe.useCallback(()=>{var T;const E=(T=n.current)==null?void 0:T.currentTime;E&&t.current!==null&&(r(E),t.current.style.setProperty("--range-progress",`${E/i*100}%`)),h.current&&(h.current=requestAnimationFrame(S))},[n,i,t,r]);return xe.useEffect(()=>{n.current&&(c?n.current.play():n.current.pause()),h.current=requestAnimationFrame(S)},[c,n,S]),xe.useEffect(()=>{n.current&&(n.current.volume=p/100,n.current.muted=g)},[p,n,g]),fe.jsxs("div",{className:"controls-wrapper",children:[fe.jsxs("div",{className:"controls",children:[fe.jsx("button",{onClick:y,children:fe.jsx(ab,{})}),fe.jsx("button",{onClick:v,children:fe.jsx(rb,{})}),fe.jsx("button",{onClick:f,children:c?fe.jsx(ib,{}):fe.jsx(ob,{})}),fe.jsx("button",{onClick:_,children:fe.jsx(sb,{})}),fe.jsx("button",{onClick:u,children:fe.jsx(lb,{})})]}),fe.jsxs("div",{className:"volume",children:[fe.jsx("button",{onClick:()=>m(E=>!E),children:g||p<5?fe.jsx(fb,{}):p<40?fe.jsx(cb,{}):fe.jsx(ub,{})}),fe.jsx("input",{type:"range",min:0,max:100,value:p,onChange:E=>x(Number(E.target.value)),style:{background:`linear-gradient(to right, #f50 ${p}%, #ccc ${p}%)`}})]})]})},db=({progressBarRef:n,audioRef:e,timeProgress:t,duration:i})=>{const r=()=>{e.current&&n.current&&(e.current.currentTime=Number(n.current.value))},s=o=>{if(o&&!isNaN(o)){const a=Math.floor(o/60),l=a<10?`0${a}`:`${a}`,u=Math.floor(o%60),c=u<10?`0${u}`:`${u}`;return`${l}:${c}`}};return fe.jsxs("div",{className:"progress",children:[fe.jsx("span",{className:"time current",children:t?s(t):"00:00"}),fe.jsx("input",{type:"range",ref:n,defaultValue:"0",value:t,onChange:r}),fe.jsx("span",{className:"time",children:s(i)})]})};function pb({audioContext:n}){const[e,t]=xe.useState(0),[i,r]=xe.useState(ra[e]),[s,o]=xe.useState(0),[a,l]=xe.useState(0),u=xe.useRef(null),c=xe.useRef(null),d=()=>{e>=ra.length-1?(t(0),r(ra[0])):(t(e+1),r(ra[e+1]))};return fe.jsxs("div",{className:"audio-player",children:[fe.jsxs("div",{className:"inner",children:[fe.jsx(nb,{currentTrack:i,audioRef:u,setDuration:l,progressBarRef:c,handleNext:d}),fe.jsx(hb,{audioRef:u,audioContext:n,progressBarRef:c,duration:a,setTimeProgress:o,tracks:ra,trackIndex:e,setTrackIndex:t,setCurrentTrack:r,handleNext:d}),fe.jsx(db,{progressBarRef:c,audioRef:u,timeProgress:s,duration:a})]}),fe.jsx("audio",{src:ky}),fe.jsxs("div",{id:"volume-panner",children:[fe.jsx("label",{children:"Volume"}),fe.jsx("input",{type:"range",id:"volume",min:"0",max:"2",defaultValue:"1",step:"0.01"}),fe.jsx("label",{children:"Panner"}),fe.jsx("input",{type:"range",id:"panner",min:"-1",max:"1",defaultValue:"0",step:"0.01"}),fe.jsx("br",{})]})]})}function mb(){const n=new window.AudioContext;return fe.jsxs(fe.Fragment,{children:[fe.jsx(pb,{audioContext:n}),fe.jsx(KP,{audioContext:n})]})}function gb(){return fe.jsx(fe.Fragment,{children:fe.jsxs(aE,{children:[fe.jsx(M1,{}),fe.jsx(S1,{}),fe.jsx(sE,{children:fe.jsx(rx,{path:"/synesthesia",element:fe.jsx(mb,{})})})]})})}const Hy=document.getElementById("root");if(Hy===null)throw new Error("Root container missing in index.html");const _b=Hf.createRoot(Hy);_b.render(fe.jsx(fe.Fragment,{children:fe.jsx(Wi.StrictMode,{children:fe.jsx(gb,{})})}));
