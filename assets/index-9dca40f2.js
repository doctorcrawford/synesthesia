function By(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Hy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ug={exports:{}},ju={},Ig={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Vy=Symbol.for("react.portal"),Gy=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),Xy=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),qy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),Ky=Symbol.for("react.memo"),Zy=Symbol.for("react.lazy"),Cp=Symbol.iterator;function Qy(n){return n===null||typeof n!="object"?null:(n=Cp&&n[Cp]||n["@@iterator"],typeof n=="function"?n:null)}var Ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,Fg={};function Fo(n,e,t){this.props=n,this.context=e,this.refs=Fg,this.updater=t||Ng}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Fo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function kg(){}kg.prototype=Fo.prototype;function nd(n,e,t){this.props=n,this.context=e,this.refs=Fg,this.updater=t||Ng}var id=nd.prototype=new kg;id.constructor=nd;Og(id,Fo.prototype);id.isPureReactComponent=!0;var Pp=Array.isArray,zg=Object.prototype.hasOwnProperty,rd={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zg.call(e,i)&&!Bg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qa,type:n,key:s,ref:o,props:r,_owner:rd.current}}function Jy(n,e){return{$$typeof:qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sd(n){return typeof n=="object"&&n!==null&&n.$$typeof===qa}function eS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var bp=/\/+/g;function Mc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?eS(""+n.key):e.toString(36)}function jl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case qa:case Vy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Mc(o,0):i,Pp(r)?(t="",n!=null&&(t=n.replace(bp,"$&/")+"/"),jl(r,e,t,"",function(u){return u})):r!=null&&(sd(r)&&(r=Jy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Mc(s,a);o+=jl(s,e,t,l,r)}else if(l=Qy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Mc(s,a++),o+=jl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(n,e,t){if(n==null)return n;var i=[],r=0;return jl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function tS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},Yl={transition:null},nS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:rd};He.Children={map:ol,forEach:function(n,e,t){ol(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ol(n,function(){e++}),e},toArray:function(n){return ol(n,function(e){return e})||[]},only:function(n){if(!sd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=Fo;He.Fragment=Gy;He.Profiler=Xy;He.PureComponent=nd;He.StrictMode=Wy;He.Suspense=$y;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Og({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)zg.call(e,l)&&!Bg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:qa,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:Yy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:jy,_context:n},n.Consumer=n};He.createElement=Hg;He.createFactory=function(n){var e=Hg.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:qy,render:n}};He.isValidElement=sd;He.lazy=function(n){return{$$typeof:Zy,_payload:{_status:-1,_result:n},_init:tS}};He.memo=function(n,e){return{$$typeof:Ky,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=Yl.transition;Yl.transition={};try{n()}finally{Yl.transition=e}};He.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};He.useCallback=function(n,e){return sn.current.useCallback(n,e)};He.useContext=function(n){return sn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};He.useEffect=function(n,e){return sn.current.useEffect(n,e)};He.useId=function(){return sn.current.useId()};He.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return sn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};He.useRef=function(n){return sn.current.useRef(n)};He.useState=function(n){return sn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return sn.current.useTransition()};He.version="18.2.0";Ig.exports=He;var Ae=Ig.exports;const Vg=Hy(Ae),iS=By({__proto__:null,default:Vg},[Ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=Ae,sS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),aS=Object.prototype.hasOwnProperty,lS=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function Gg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)aS.call(e,i)&&!uS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sS,type:n,key:s,ref:o,props:r,_owner:lS.current}}ju.Fragment=oS;ju.jsx=Gg;ju.jsxs=Gg;Ug.exports=ju;var $e=Ug.exports,Ff={},Wg={exports:{}},Un={},Xg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,N){var O=L.length;L.push(N);e:for(;0<O;){var I=O-1>>>1,F=L[I];if(0<r(F,N))L[I]=N,L[O]=F,O=I;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var N=L[0],O=L.pop();if(O!==N){L[0]=O;e:for(var I=0,F=L.length,oe=F>>>1;I<oe;){var ee=2*(I+1)-1,se=L[ee],fe=ee+1,ye=L[fe];if(0>r(se,O))fe<F&&0>r(ye,se)?(L[I]=ye,L[fe]=O,I=fe):(L[I]=se,L[ee]=O,I=ee);else if(fe<F&&0>r(ye,O))L[I]=ye,L[fe]=O,I=fe;else break e}}return N}function r(L,N){var O=L.sortIndex-N.sortIndex;return O!==0?O:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var N=t(u);N!==null;){if(N.callback===null)i(u);else if(N.startTime<=L)i(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=t(u)}}function y(L){if(_=!1,v(L),!x)if(t(l)!==null)x=!0,K(S);else{var N=t(u);N!==null&&W(y,N.startTime-L)}}function S(L,N){x=!1,_&&(_=!1,f(C),C=-1),p=!0;var O=h;try{for(v(N),d=t(l);d!==null&&(!(d.expirationTime>N)||L&&!k());){var I=d.callback;if(typeof I=="function"){d.callback=null,h=d.priorityLevel;var F=I(d.expirationTime<=N);N=n.unstable_now(),typeof F=="function"?d.callback=F:d===t(l)&&i(l),v(N)}else i(l);d=t(l)}if(d!==null)var oe=!0;else{var ee=t(u);ee!==null&&W(y,ee.startTime-N),oe=!1}return oe}finally{d=null,h=O,p=!1}}var T=!1,E=null,C=-1,M=5,w=-1;function k(){return!(n.unstable_now()-w<M)}function j(){if(E!==null){var L=n.unstable_now();w=L;var N=!0;try{N=E(!0,L)}finally{N?U():(T=!1,E=null)}}else T=!1}var U;if(typeof g=="function")U=function(){g(j)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,H=B.port2;B.port1.onmessage=j,U=function(){H.postMessage(null)}}else U=function(){m(j,0)};function K(L){E=L,T||(T=!0,U())}function W(L,N){C=m(function(){L(n.unstable_now())},N)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,K(S))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var O=h;h=N;try{return L()}finally{h=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=h;h=L;try{return N()}finally{h=O}},n.unstable_scheduleCallback=function(L,N,O){var I=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?I+O:I):O=I,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=O+F,L={id:c++,callback:N,priorityLevel:L,startTime:O,expirationTime:F,sortIndex:-1},O>I?(L.sortIndex=O,e(u,L),t(l)===null&&L===t(u)&&(_?(f(C),C=-1):_=!0,W(y,O-I))):(L.sortIndex=F,e(l,L),x||p||(x=!0,K(S))),L},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(L){var N=h;return function(){var O=h;h=N;try{return L.apply(this,arguments)}finally{h=O}}}})(jg);Xg.exports=jg;var cS=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=Ae,Ln=cS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,Ma={};function Ms(n,e){So(n,e),So(n+"Capture",e)}function So(n,e){for(Ma[n]=e,n=0;n<e.length;n++)qg.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,fS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Dp={};function hS(n){return kf.call(Dp,n)?!0:kf.call(Lp,n)?!1:fS.test(n)?Dp[n]=!0:(Lp[n]=!0,!1)}function dS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function pS(n,e,t,i){if(e===null||typeof e>"u"||dS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ht[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ht[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ht[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ht[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ht[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ht[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ht[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ht[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ht[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(od,ad);Ht[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(od,ad);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(od,ad);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function ld(n,e,t,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,t,r,i)&&(t=null),i||r===null?hS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zi=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),Up=Symbol.iterator;function Vo(n){return n===null||typeof n!="object"?null:(n=Up&&n[Up]||n["@@iterator"],typeof n=="function"?n:null)}var ct=Object.assign,Ec;function ta(n){if(Ec===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+n}var Tc=!1;function wc(n,e){if(!n||Tc)return"";Tc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ta(n):""}function mS(n){switch(n.tag){case 5:return ta(n.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return n=wc(n.type,!1),n;case 11:return n=wc(n.type.render,!1),n;case 1:return n=wc(n.type,!0),n;default:return""}}function Vf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qs:return"Fragment";case Ys:return"Portal";case zf:return"Profiler";case ud:return"StrictMode";case Bf:return"Suspense";case Hf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kg:return(n.displayName||"Context")+".Consumer";case $g:return(n._context.displayName||"Context")+".Provider";case cd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fd:return e=n.displayName||null,e!==null?e:Vf(n.type)||"Memo";case ir:e=n._payload,n=n._init;try{return Vf(n(e))}catch{}}return null}function _S(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gS(n){var e=Qg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ll(n){n._valueTracker||(n._valueTracker=gS(n))}function Jg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Gf(n,e){var t=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ip(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(n,e){e=e.checked,e!=null&&ld(n,"checked",e,!1)}function Wf(n,e){e0(n,e);var t=Rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Xf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Xf(n,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Np(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Xf(n,e,t){(e!=="number"||uu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var na=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function jf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Op(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(na(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Rr(t)}}function t0(n,e){var t=Rr(e.value),i=Rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Fp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function n0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?n0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ul,i0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ea(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vS=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(n){vS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ua[e]=ua[n]})});function r0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ua.hasOwnProperty(n)&&ua[n]?(""+e).trim():e+"px"}function s0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=r0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var xS=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(n,e){if(e){if(xS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function $f(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function hd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zf=null,uo=null,co=null;function kp(n){if(n=Za(n)){if(typeof Zf!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Zu(e),Zf(n.stateNode,n.type,e))}}function o0(n){uo?co?co.push(n):co=[n]:uo=n}function a0(){if(uo){var n=uo,e=co;if(co=uo=null,kp(n),e)for(n=0;n<e.length;n++)kp(e[n])}}function l0(n,e){return n(e)}function u0(){}var Ac=!1;function c0(n,e,t){if(Ac)return n(e,t);Ac=!0;try{return l0(n,e,t)}finally{Ac=!1,(uo!==null||co!==null)&&(u0(),a0())}}function Ta(n,e){var t=n.stateNode;if(t===null)return null;var i=Zu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Qf=!1;if(Xi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Qf=!1}function yS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ca=!1,cu=null,fu=!1,Jf=null,SS={onError:function(n){ca=!0,cu=n}};function MS(n,e,t,i,r,s,o,a,l){ca=!1,cu=null,yS.apply(SS,arguments)}function ES(n,e,t,i,r,s,o,a,l){if(MS.apply(this,arguments),ca){if(ca){var u=cu;ca=!1,cu=null}else throw Error(ne(198));fu||(fu=!0,Jf=u)}}function Es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function f0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function zp(n){if(Es(n)!==n)throw Error(ne(188))}function TS(n){var e=n.alternate;if(!e){if(e=Es(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return zp(r),n;if(s===i)return zp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function h0(n){return n=TS(n),n!==null?d0(n):null}function d0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=d0(n);if(e!==null)return e;n=n.sibling}return null}var p0=Ln.unstable_scheduleCallback,Bp=Ln.unstable_cancelCallback,wS=Ln.unstable_shouldYield,AS=Ln.unstable_requestPaint,yt=Ln.unstable_now,RS=Ln.unstable_getCurrentPriorityLevel,dd=Ln.unstable_ImmediatePriority,m0=Ln.unstable_UserBlockingPriority,hu=Ln.unstable_NormalPriority,CS=Ln.unstable_LowPriority,_0=Ln.unstable_IdlePriority,Yu=null,yi=null;function PS(n){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Yu,n,void 0,(n.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:DS,bS=Math.log,LS=Math.LN2;function DS(n){return n>>>=0,n===0?32:31-(bS(n)/LS|0)|0}var cl=64,fl=4194304;function ia(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function du(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ia(a):(s&=o,s!==0&&(i=ia(s)))}else o=t&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-li(e),r=1<<t,i|=n[t],e&=~r;return i}function US(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=US(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function eh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function g0(){var n=cl;return cl<<=1,!(cl&4194240)&&(cl=64),n}function Rc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function $a(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-li(e),n[e]=t}function NS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-li(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function pd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-li(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ke=0;function v0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var x0,md,y0,S0,M0,th=!1,hl=[],mr=null,_r=null,gr=null,wa=new Map,Aa=new Map,sr=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(n,e){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Wo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&md(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function FS(n,e,t,i,r){switch(e){case"focusin":return mr=Wo(mr,n,e,t,i,r),!0;case"dragenter":return _r=Wo(_r,n,e,t,i,r),!0;case"mouseover":return gr=Wo(gr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Wo(wa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Wo(Aa.get(s)||null,n,e,t,i,r)),!0}return!1}function E0(n){var e=es(n.target);if(e!==null){var t=Es(e);if(t!==null){if(e=t.tag,e===13){if(e=f0(t),e!==null){n.blockedOn=e,M0(n.priority,function(){y0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=nh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Kf=i,t.target.dispatchEvent(i),Kf=null}else return e=Za(t),e!==null&&md(e),n.blockedOn=t,!1;e.shift()}return!0}function Vp(n,e,t){ql(n)&&t.delete(e)}function kS(){th=!1,mr!==null&&ql(mr)&&(mr=null),_r!==null&&ql(_r)&&(_r=null),gr!==null&&ql(gr)&&(gr=null),wa.forEach(Vp),Aa.forEach(Vp)}function Xo(n,e){n.blockedOn===e&&(n.blockedOn=null,th||(th=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,kS)))}function Ra(n){function e(r){return Xo(r,n)}if(0<hl.length){Xo(hl[0],n);for(var t=1;t<hl.length;t++){var i=hl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(mr!==null&&Xo(mr,n),_r!==null&&Xo(_r,n),gr!==null&&Xo(gr,n),wa.forEach(e),Aa.forEach(e),t=0;t<sr.length;t++)i=sr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<sr.length&&(t=sr[0],t.blockedOn===null);)E0(t),t.blockedOn===null&&sr.shift()}var fo=Zi.ReactCurrentBatchConfig,pu=!0;function zS(n,e,t,i){var r=Ke,s=fo.transition;fo.transition=null;try{Ke=1,_d(n,e,t,i)}finally{Ke=r,fo.transition=s}}function BS(n,e,t,i){var r=Ke,s=fo.transition;fo.transition=null;try{Ke=4,_d(n,e,t,i)}finally{Ke=r,fo.transition=s}}function _d(n,e,t,i){if(pu){var r=nh(n,e,t,i);if(r===null)Fc(n,e,i,mu,t),Hp(n,i);else if(FS(r,n,e,t,i))i.stopPropagation();else if(Hp(n,i),e&4&&-1<OS.indexOf(n)){for(;r!==null;){var s=Za(r);if(s!==null&&x0(s),s=nh(n,e,t,i),s===null&&Fc(n,e,i,mu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fc(n,e,i,null,t)}}var mu=null;function nh(n,e,t,i){if(mu=null,n=hd(i),n=es(n),n!==null)if(e=Es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=f0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return mu=n,null}function T0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case dd:return 1;case m0:return 4;case hu:case CS:return 16;case _0:return 536870912;default:return 16}default:return 16}}var ar=null,gd=null,$l=null;function w0(){if($l)return $l;var n,e=gd,t=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return $l=r.slice(n,1<i?1-i:void 0)}function Kl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function dl(){return!0}function Gp(){return!1}function In(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:Gp,this.isPropagationStopped=Gp,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=In(ko),Ka=ct({},ko,{view:0,detail:0}),HS=In(Ka),Cc,Pc,jo,qu=ct({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(Cc=n.screenX-jo.screenX,Pc=n.screenY-jo.screenY):Pc=Cc=0,jo=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),Wp=In(qu),VS=ct({},qu,{dataTransfer:0}),GS=In(VS),WS=ct({},Ka,{relatedTarget:0}),bc=In(WS),XS=ct({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=In(XS),YS=ct({},ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),qS=In(YS),$S=ct({},ko,{data:0}),Xp=In($S),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=QS[n])?!!e[n]:!1}function xd(){return JS}var eM=ct({},Ka,{key:function(n){if(n.key){var e=KS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ZS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(n){return n.type==="keypress"?Kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),tM=In(eM),nM=ct({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=In(nM),iM=ct({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),rM=In(iM),sM=ct({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),oM=In(sM),aM=ct({},qu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),lM=In(aM),uM=[9,13,27,32],yd=Xi&&"CompositionEvent"in window,fa=null;Xi&&"documentMode"in document&&(fa=document.documentMode);var cM=Xi&&"TextEvent"in window&&!fa,A0=Xi&&(!yd||fa&&8<fa&&11>=fa),Yp=String.fromCharCode(32),qp=!1;function R0(n,e){switch(n){case"keyup":return uM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function fM(n,e){switch(n){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(qp=!0,Yp);case"textInput":return n=e.data,n===Yp&&qp?null:n;default:return null}}function hM(n,e){if($s)return n==="compositionend"||!yd&&R0(n,e)?(n=w0(),$l=gd=ar=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dM[n.type]:e==="textarea"}function P0(n,e,t,i){o0(i),e=_u(e,"onChange"),0<e.length&&(t=new vd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ha=null,Ca=null;function pM(n){B0(n,0)}function $u(n){var e=Qs(n);if(Jg(e))return n}function mM(n,e){if(n==="change")return e}var b0=!1;if(Xi){var Lc;if(Xi){var Dc="oninput"in document;if(!Dc){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Dc=typeof Kp.oninput=="function"}Lc=Dc}else Lc=!1;b0=Lc&&(!document.documentMode||9<document.documentMode)}function Zp(){ha&&(ha.detachEvent("onpropertychange",L0),Ca=ha=null)}function L0(n){if(n.propertyName==="value"&&$u(Ca)){var e=[];P0(e,Ca,n,hd(n)),c0(pM,e)}}function _M(n,e,t){n==="focusin"?(Zp(),ha=e,Ca=t,ha.attachEvent("onpropertychange",L0)):n==="focusout"&&Zp()}function gM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $u(Ca)}function vM(n,e){if(n==="click")return $u(e)}function xM(n,e){if(n==="input"||n==="change")return $u(e)}function yM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var fi=typeof Object.is=="function"?Object.is:yM;function Pa(n,e){if(fi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!kf.call(e,r)||!fi(n[r],e[r]))return!1}return!0}function Qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jp(n,e){var t=Qp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qp(t)}}function D0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?D0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function U0(){for(var n=window,e=uu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uu(n.document)}return e}function Sd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function SM(n){var e=U0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&D0(t.ownerDocument.documentElement,t)){if(i!==null&&Sd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Jp(t,s);var o=Jp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var MM=Xi&&"documentMode"in document&&11>=document.documentMode,Ks=null,ih=null,da=null,rh=!1;function em(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rh||Ks==null||Ks!==uu(i)||(i=Ks,"selectionStart"in i&&Sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Pa(da,i)||(da=i,i=_u(ih,"onSelect"),0<i.length&&(e=new vd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ks)))}function pl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zs={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Uc={},I0={};Xi&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Ku(n){if(Uc[n])return Uc[n];if(!Zs[n])return n;var e=Zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in I0)return Uc[n]=e[t];return n}var N0=Ku("animationend"),O0=Ku("animationiteration"),F0=Ku("animationstart"),k0=Ku("transitionend"),z0=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,e){z0.set(n,e),Ms(e,[n])}for(var Ic=0;Ic<tm.length;Ic++){var Nc=tm[Ic],EM=Nc.toLowerCase(),TM=Nc[0].toUpperCase()+Nc.slice(1);Ur(EM,"on"+TM)}Ur(N0,"onAnimationEnd");Ur(O0,"onAnimationIteration");Ur(F0,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(k0,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function nm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ES(i,e,void 0,n),n.currentTarget=null}function B0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}}}if(fu)throw n=Jf,fu=!1,Jf=null,n}function tt(n,e){var t=e[uh];t===void 0&&(t=e[uh]=new Set);var i=n+"__bubble";t.has(i)||(H0(e,n,2,!1),t.add(i))}function Oc(n,e,t){var i=0;e&&(i|=4),H0(t,n,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[ml]){n[ml]=!0,qg.forEach(function(t){t!=="selectionchange"&&(wM.has(t)||Oc(t,!1,n),Oc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ml]||(e[ml]=!0,Oc("selectionchange",!1,e))}}function H0(n,e,t,i){switch(T0(e)){case 1:var r=zS;break;case 4:r=BS;break;default:r=_d}t=r.bind(null,e,t,n),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Fc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c0(function(){var u=s,c=hd(t),d=[];e:{var h=z0.get(n);if(h!==void 0){var p=vd,x=n;switch(n){case"keypress":if(Kl(t)===0)break e;case"keydown":case"keyup":p=tM;break;case"focusin":x="focus",p=bc;break;case"focusout":x="blur",p=bc;break;case"beforeblur":case"afterblur":p=bc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rM;break;case N0:case O0:case F0:p=jS;break;case k0:p=oM;break;case"scroll":p=HS;break;case"wheel":p=lM;break;case"copy":case"cut":case"paste":p=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jp}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Ta(g,f),y!=null&&_.push(La(g,y,v)))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Kf&&(x=t.relatedTarget||t.fromElement)&&(es(x)||x[ji]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?es(x):null,x!==null&&(m=Es(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(_=Wp,y="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=jp,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:Qs(p),v=x==null?h:Qs(x),h=new _(y,g+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,es(c)===u&&(_=new _(f,g+"enter",x,t,c),_.target=v,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,f=x,g=0,v=_;v;v=As(v))g++;for(v=0,y=f;y;y=As(y))v++;for(;0<g-v;)_=As(_),g--;for(;0<v-g;)f=As(f),v--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=As(_),f=As(f)}_=null}else _=null;p!==null&&im(d,h,p,_,!1),x!==null&&m!==null&&im(d,m,x,_,!0)}}e:{if(h=u?Qs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=mM;else if($p(h))if(b0)S=xM;else{S=gM;var T=_M}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=vM);if(S&&(S=S(n,u))){P0(d,S,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Xf(h,"number",h.value)}switch(T=u?Qs(u):window,n){case"focusin":($p(T)||T.contentEditable==="true")&&(Ks=T,ih=u,da=null);break;case"focusout":da=ih=Ks=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,em(d,t,c);break;case"selectionchange":if(MM)break;case"keydown":case"keyup":em(d,t,c)}var E;if(yd)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else $s?R0(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(A0&&t.locale!=="ko"&&($s||C!=="onCompositionStart"?C==="onCompositionEnd"&&$s&&(E=w0()):(ar=c,gd="value"in ar?ar.value:ar.textContent,$s=!0)),T=_u(u,C),0<T.length&&(C=new Xp(C,n,null,t,c),d.push({event:C,listeners:T}),E?C.data=E:(E=C0(t),E!==null&&(C.data=E)))),(E=cM?fM(n,t):hM(n,t))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new Xp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}B0(d,e)})}function La(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _u(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(n,t),s!=null&&i.unshift(La(n,s,r)),s=Ta(n,e),s!=null&&i.push(La(n,s,r))),n=n.return}return i}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function im(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ta(t,s),l!=null&&o.unshift(La(t,l,a))):r||(l=Ta(t,s),l!=null&&o.push(La(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var AM=/\r\n?/g,RM=/\u0000|\uFFFD/g;function rm(n){return(typeof n=="string"?n:""+n).replace(AM,`
`).replace(RM,"")}function _l(n,e,t){if(e=rm(e),rm(n)!==e&&t)throw Error(ne(425))}function gu(){}var sh=null,oh=null;function ah(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,PM=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(n){return sm.resolve(null).then(n).catch(bM)}:lh;function bM(n){setTimeout(function(){throw n})}function kc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ra(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ra(e)}function vr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function om(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zo=Math.random().toString(36).slice(2),gi="__reactFiber$"+zo,Da="__reactProps$"+zo,ji="__reactContainer$"+zo,uh="__reactEvents$"+zo,LM="__reactListeners$"+zo,DM="__reactHandles$"+zo;function es(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=om(n);n!==null;){if(t=n[gi])return t;n=om(n)}return e}n=t,t=n.parentNode}return null}function Za(n){return n=n[gi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Zu(n){return n[Da]||null}var ch=[],Js=-1;function Ir(n){return{current:n}}function nt(n){0>Js||(n.current=ch[Js],ch[Js]=null,Js--)}function et(n,e){Js++,ch[Js]=n.current,n.current=e}var Cr={},Kt=Ir(Cr),cn=Ir(!1),ps=Cr;function Mo(n,e){var t=n.type.contextTypes;if(!t)return Cr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function vu(){nt(cn),nt(Kt)}function am(n,e,t){if(Kt.current!==Cr)throw Error(ne(168));et(Kt,e),et(cn,t)}function V0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,_S(n)||"Unknown",r));return ct({},t,i)}function xu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,ps=Kt.current,et(Kt,n),et(cn,cn.current),!0}function lm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=V0(n,e,ps),i.__reactInternalMemoizedMergedChildContext=n,nt(cn),nt(Kt),et(Kt,n)):nt(cn),et(cn,t)}var Fi=null,Qu=!1,zc=!1;function G0(n){Fi===null?Fi=[n]:Fi.push(n)}function UM(n){Qu=!0,G0(n)}function Nr(){if(!zc&&Fi!==null){zc=!0;var n=0,e=Ke;try{var t=Fi;for(Ke=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fi=null,Qu=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(n+1)),p0(dd,Nr),r}finally{Ke=e,zc=!1}}return null}var eo=[],to=0,yu=null,Su=0,kn=[],zn=0,ms=null,Bi=1,Hi="";function qr(n,e){eo[to++]=Su,eo[to++]=yu,yu=n,Su=e}function W0(n,e,t){kn[zn++]=Bi,kn[zn++]=Hi,kn[zn++]=ms,ms=n;var i=Bi;n=Hi;var r=32-li(i)-1;i&=~(1<<r),t+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-li(e)+r|t<<r|i,Hi=s+n}else Bi=1<<s|t<<r|i,Hi=n}function Md(n){n.return!==null&&(qr(n,1),W0(n,1,0))}function Ed(n){for(;n===yu;)yu=eo[--to],eo[to]=null,Su=eo[--to],eo[to]=null;for(;n===ms;)ms=kn[--zn],kn[zn]=null,Hi=kn[--zn],kn[zn]=null,Bi=kn[--zn],kn[zn]=null}var Cn=null,Rn=null,it=!1,ii=null;function X0(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function um(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Cn=n,Rn=vr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Cn=n,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ms!==null?{id:Bi,overflow:Hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Cn=n,Rn=null,!0):!1;default:return!1}}function fh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hh(n){if(it){var e=Rn;if(e){var t=e;if(!um(n,e)){if(fh(n))throw Error(ne(418));e=vr(t.nextSibling);var i=Cn;e&&um(n,e)?X0(i,t):(n.flags=n.flags&-4097|2,it=!1,Cn=n)}}else{if(fh(n))throw Error(ne(418));n.flags=n.flags&-4097|2,it=!1,Cn=n}}}function cm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Cn=n}function gl(n){if(n!==Cn)return!1;if(!it)return cm(n),it=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ah(n.type,n.memoizedProps)),e&&(e=Rn)){if(fh(n))throw j0(),Error(ne(418));for(;e;)X0(n,e),e=vr(e.nextSibling)}if(cm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Rn=vr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Rn=null}}else Rn=Cn?vr(n.stateNode.nextSibling):null;return!0}function j0(){for(var n=Rn;n;)n=vr(n.nextSibling)}function Eo(){Rn=Cn=null,it=!1}function Td(n){ii===null?ii=[n]:ii.push(n)}var IM=Zi.ReactCurrentBatchConfig;function ti(n,e){if(n&&n.defaultProps){e=ct({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Mu=Ir(null),Eu=null,no=null,wd=null;function Ad(){wd=no=Eu=null}function Rd(n){var e=Mu.current;nt(Mu),n._currentValue=e}function dh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){Eu=n,wd=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function jn(n){var e=n._currentValue;if(wd!==n)if(n={context:n,memoizedValue:e,next:null},no===null){if(Eu===null)throw Error(ne(308));no=n,Eu.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return e}var ts=null;function Cd(n){ts===null?ts=[n]:ts.push(n)}function Y0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Cd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yi(n,i)}function Yi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var rr=!1;function Pd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(n,t)}return r=i.interleaved,r===null?(e.next=e,Cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(n,t)}function Zl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pd(n,t)}}function fm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Tu(n,e,t,i){var r=n.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(h=e,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ct({},d,h);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gs|=o,n.lanes=o,n.memoizedState=d}}function hm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var $0=new Yg.Component().refs;function ph(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ct({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ju={isMounted:function(n){return(n=n._reactInternals)?Es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Sr(n),s=Gi(i,r);s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,r),e!==null&&(ui(e,n,r,i),Zl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=rn(),r=Sr(n),s=Gi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,r),e!==null&&(ui(e,n,r,i),Zl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=rn(),i=Sr(n),r=Gi(t,i);r.tag=2,e!=null&&(r.callback=e),e=xr(n,r,i),e!==null&&(ui(e,n,i,t),Zl(e,n,i))}};function dm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(t,i)||!Pa(r,s):!0}function K0(n,e,t){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=fn(e)?ps:Kt.current,i=e.contextTypes,s=(i=i!=null)?Mo(n,r):Cr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ju.enqueueReplaceState(e,e.state,null)}function mh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=$0,Pd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=fn(e)?ps:Kt.current,r.context=Mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ph(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ju.enqueueReplaceState(r,r.state,null),Tu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Yo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===$0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function vl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mm(n){var e=n._init;return e(n._payload)}function Z0(n){function e(f,g){if(n){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Mr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,y){return g===null||g.tag!==6?(g=jc(v,f.mode,y),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,y){var S=v.type;return S===qs?c(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&mm(S)===g.type)?(y=r(g,v.props),y.ref=Yo(f,g,v),y.return=f,y):(y=iu(v.type,v.key,v.props,null,f.mode,y),y.ref=Yo(f,g,v),y.return=f,y)}function u(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Yc(v,f.mode,y),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function c(f,g,v,y,S){return g===null||g.tag!==7?(g=ss(v,f.mode,y,S),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=jc(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return v=iu(g.type,g.key,g.props,null,f.mode,v),v.ref=Yo(f,null,g),v.return=f,v;case Ys:return g=Yc(g,f.mode,v),g.return=f,g;case ir:var y=g._init;return d(f,y(g._payload),v)}if(na(g)||Vo(g))return g=ss(g,f.mode,v,null),g.return=f,g;vl(f,g)}return null}function h(f,g,v,y){var S=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case al:return v.key===S?l(f,g,v,y):null;case Ys:return v.key===S?u(f,g,v,y):null;case ir:return S=v._init,h(f,g,S(v._payload),y)}if(na(v)||Vo(v))return S!==null?null:c(f,g,v,y,null);vl(f,v)}return null}function p(f,g,v,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(g,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,S);case Ys:return f=f.get(y.key===null?v:y.key)||null,u(g,f,y,S);case ir:var T=y._init;return p(f,g,v,T(y._payload),S)}if(na(y)||Vo(y))return f=f.get(v)||null,c(g,f,y,S,null);vl(g,y)}return null}function x(f,g,v,y){for(var S=null,T=null,E=g,C=g=0,M=null;E!==null&&C<v.length;C++){E.index>C?(M=E,E=null):M=E.sibling;var w=h(f,E,v[C],y);if(w===null){E===null&&(E=M);break}n&&E&&w.alternate===null&&e(f,E),g=s(w,g,C),T===null?S=w:T.sibling=w,T=w,E=M}if(C===v.length)return t(f,E),it&&qr(f,C),S;if(E===null){for(;C<v.length;C++)E=d(f,v[C],y),E!==null&&(g=s(E,g,C),T===null?S=E:T.sibling=E,T=E);return it&&qr(f,C),S}for(E=i(f,E);C<v.length;C++)M=p(E,f,C,v[C],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?C:M.key),g=s(M,g,C),T===null?S=M:T.sibling=M,T=M);return n&&E.forEach(function(k){return e(f,k)}),it&&qr(f,C),S}function _(f,g,v,y){var S=Vo(v);if(typeof S!="function")throw Error(ne(150));if(v=S.call(v),v==null)throw Error(ne(151));for(var T=S=null,E=g,C=g=0,M=null,w=v.next();E!==null&&!w.done;C++,w=v.next()){E.index>C?(M=E,E=null):M=E.sibling;var k=h(f,E,w.value,y);if(k===null){E===null&&(E=M);break}n&&E&&k.alternate===null&&e(f,E),g=s(k,g,C),T===null?S=k:T.sibling=k,T=k,E=M}if(w.done)return t(f,E),it&&qr(f,C),S;if(E===null){for(;!w.done;C++,w=v.next())w=d(f,w.value,y),w!==null&&(g=s(w,g,C),T===null?S=w:T.sibling=w,T=w);return it&&qr(f,C),S}for(E=i(f,E);!w.done;C++,w=v.next())w=p(E,f,C,w.value,y),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?C:w.key),g=s(w,g,C),T===null?S=w:T.sibling=w,T=w);return n&&E.forEach(function(j){return e(f,j)}),it&&qr(f,C),S}function m(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case al:e:{for(var S=v.key,T=g;T!==null;){if(T.key===S){if(S=v.type,S===qs){if(T.tag===7){t(f,T.sibling),g=r(T,v.props.children),g.return=f,f=g;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ir&&mm(S)===T.type){t(f,T.sibling),g=r(T,v.props),g.ref=Yo(f,T,v),g.return=f,f=g;break e}t(f,T);break}else e(f,T);T=T.sibling}v.type===qs?(g=ss(v.props.children,f.mode,y,v.key),g.return=f,f=g):(y=iu(v.type,v.key,v.props,null,f.mode,y),y.ref=Yo(f,g,v),y.return=f,f=y)}return o(f);case Ys:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Yc(v,f.mode,y),g.return=f,f=g}return o(f);case ir:return T=v._init,m(f,g,T(v._payload),y)}if(na(v))return x(f,g,v,y);if(Vo(v))return _(f,g,v,y);vl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,v),g.return=f,f=g):(t(f,g),g=jc(v,f.mode,y),g.return=f,f=g),o(f)):t(f,g)}return m}var To=Z0(!0),Q0=Z0(!1),Qa={},Si=Ir(Qa),Ua=Ir(Qa),Ia=Ir(Qa);function ns(n){if(n===Qa)throw Error(ne(174));return n}function bd(n,e){switch(et(Ia,e),et(Ua,n),et(Si,Qa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Yf(e,n)}nt(Si),et(Si,e)}function wo(){nt(Si),nt(Ua),nt(Ia)}function J0(n){ns(Ia.current);var e=ns(Si.current),t=Yf(e,n.type);e!==t&&(et(Ua,n),et(Si,t))}function Ld(n){Ua.current===n&&(nt(Si),nt(Ua))}var ot=Ir(0);function wu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Dd(){for(var n=0;n<Bc.length;n++)Bc[n]._workInProgressVersionPrimary=null;Bc.length=0}var Ql=Zi.ReactCurrentDispatcher,Hc=Zi.ReactCurrentBatchConfig,_s=0,ut=null,wt=null,Ut=null,Au=!1,pa=!1,Na=0,NM=0;function Vt(){throw Error(ne(321))}function Ud(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!fi(n[t],e[t]))return!1;return!0}function Id(n,e,t,i,r,s){if(_s=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=n===null||n.memoizedState===null?zM:BM,n=t(i,r),pa){s=0;do{if(pa=!1,Na=0,25<=s)throw Error(ne(301));s+=1,Ut=wt=null,e.updateQueue=null,Ql.current=HM,n=t(i,r)}while(pa)}if(Ql.current=Ru,e=wt!==null&&wt.next!==null,_s=0,Ut=wt=ut=null,Au=!1,e)throw Error(ne(300));return n}function Nd(){var n=Na!==0;return Na=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ut.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function Yn(){if(wt===null){var n=ut.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var e=Ut===null?ut.memoizedState:Ut.next;if(e!==null)Ut=e,wt=n;else{if(n===null)throw Error(ne(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ut===null?ut.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function Oa(n,e){return typeof e=="function"?e(n):e}function Vc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((_s&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=c,gs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ut.lanes|=s,gs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Gc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function ev(){}function tv(n,e){var t=ut,i=Yn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Od(rv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,Fa(9,iv.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(ne(349));_s&30||nv(t,e,r)}return r}function nv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function iv(n,e,t,i){e.value=t,e.getSnapshot=i,sv(e)&&ov(n)}function rv(n,e,t){return t(function(){sv(e)&&ov(n)})}function sv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!fi(n,t)}catch{return!0}}function ov(n){var e=Yi(n,1);e!==null&&ui(e,n,1,-1)}function _m(n){var e=mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},e.queue=n,n=n.dispatch=kM.bind(null,ut,n),[e.memoizedState,n]}function Fa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function av(){return Yn().memoizedState}function Jl(n,e,t,i){var r=mi();ut.flags|=n,r.memoizedState=Fa(1|e,t,void 0,i===void 0?null:i)}function ec(n,e,t,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Ud(i,o.deps)){r.memoizedState=Fa(e,t,s,i);return}}ut.flags|=n,r.memoizedState=Fa(1|e,t,s,i)}function gm(n,e){return Jl(8390656,8,n,e)}function Od(n,e){return ec(2048,8,n,e)}function lv(n,e){return ec(4,2,n,e)}function uv(n,e){return ec(4,4,n,e)}function cv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function fv(n,e,t){return t=t!=null?t.concat([n]):null,ec(4,4,cv.bind(null,e,n),t)}function Fd(){}function hv(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function dv(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function pv(n,e,t){return _s&21?(fi(t,e)||(t=g0(),ut.lanes|=t,gs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function OM(n,e){var t=Ke;Ke=t!==0&&4>t?t:4,n(!0);var i=Hc.transition;Hc.transition={};try{n(!1),e()}finally{Ke=t,Hc.transition=i}}function mv(){return Yn().memoizedState}function FM(n,e,t){var i=Sr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},_v(n))gv(e,t);else if(t=Y0(n,e,t,i),t!==null){var r=rn();ui(t,n,i,r),vv(t,e,i)}}function kM(n,e,t){var i=Sr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(_v(n))gv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Y0(n,e,r,i),t!==null&&(r=rn(),ui(t,n,i,r),vv(t,e,i))}}function _v(n){var e=n.alternate;return n===ut||e!==null&&e===ut}function gv(n,e){pa=Au=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function vv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pd(n,t)}}var Ru={readContext:jn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},zM={readContext:jn,useCallback:function(n,e){return mi().memoizedState=[n,e===void 0?null:e],n},useContext:jn,useEffect:gm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4194308,4,cv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Jl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Jl(4,2,n,e)},useMemo:function(n,e){var t=mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=FM.bind(null,ut,n),[i.memoizedState,n]},useRef:function(n){var e=mi();return n={current:n},e.memoizedState=n},useState:_m,useDebugValue:Fd,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=_m(!1),e=n[0];return n=OM.bind(null,n[1]),mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ut,r=mi();if(it){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Nt===null)throw Error(ne(349));_s&30||nv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,gm(rv.bind(null,i,s,n),[n]),i.flags|=2048,Fa(9,iv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mi(),e=Nt.identifierPrefix;if(it){var t=Hi,i=Bi;t=(i&~(1<<32-li(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Na++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=NM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},BM={readContext:jn,useCallback:hv,useContext:jn,useEffect:Od,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:dv,useReducer:Vc,useRef:av,useState:function(){return Vc(Oa)},useDebugValue:Fd,useDeferredValue:function(n){var e=Yn();return pv(e,wt.memoizedState,n)},useTransition:function(){var n=Vc(Oa)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},HM={readContext:jn,useCallback:hv,useContext:jn,useEffect:Od,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:dv,useReducer:Gc,useRef:av,useState:function(){return Gc(Oa)},useDebugValue:Fd,useDeferredValue:function(n){var e=Yn();return wt===null?e.memoizedState=n:pv(e,wt.memoizedState,n)},useTransition:function(){var n=Gc(Oa)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function Ao(n,e){try{var t="",i=e;do t+=mS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Wc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function _h(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function xv(n,e,t){t=Gi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Pu||(Pu=!0,Ah=i),_h(n,e)},t}function yv(n,e,t){t=Gi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){_h(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){_h(n,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function vm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new VM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=nE.bind(null,n,e,t),e.then(n,n))}function xm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ym(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gi(-1,1),e.tag=2,xr(t,e,1))),t.lanes|=1),n)}var GM=Zi.ReactCurrentOwner,un=!1;function en(n,e,t,i){e.child=n===null?Q0(e,null,t,i):To(e,n.child,t,i)}function Sm(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=Id(n,e,t,i,s,r),t=Nd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(it&&t&&Md(e),e.flags|=1,en(n,e,i,r),e.child)}function Mm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Sv(n,e,s,i,r)):(n=iu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Pa,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=Mr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Sv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Pa(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,qi(n,e,r)}return gh(n,e,t,i,r)}function Mv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ro,En),En|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,et(ro,En),En|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,et(ro,En),En|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,et(ro,En),En|=i;return en(n,e,r,t),e.child}function Ev(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function gh(n,e,t,i,r){var s=fn(t)?ps:Kt.current;return s=Mo(e,s),ho(e,r),t=Id(n,e,t,i,s,r),i=Nd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(it&&i&&Md(e),e.flags|=1,en(n,e,t,r),e.child)}function Em(n,e,t,i,r){if(fn(t)){var s=!0;xu(e)}else s=!1;if(ho(e,r),e.stateNode===null)eu(n,e),K0(e,t,i),mh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=fn(t)?ps:Kt.current,u=Mo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pm(e,o,i,u),rr=!1;var h=e.memoizedState;o.state=h,Tu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||rr?(typeof c=="function"&&(ph(e,t,c,i),l=e.memoizedState),(a=rr||dm(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,q0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=fn(t)?ps:Kt.current,l=Mo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&pm(e,o,i,l),rr=!1,h=e.memoizedState,o.state=h,Tu(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||cn.current||rr?(typeof p=="function"&&(ph(e,t,p,i),x=e.memoizedState),(u=rr||dm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return vh(n,e,t,i,s,r)}function vh(n,e,t,i,r,s){Ev(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lm(e,t,!1),qi(n,e,s);i=e.stateNode,GM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=To(e,n.child,null,s),e.child=To(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&lm(e,t,!0),e.child}function Tv(n){var e=n.stateNode;e.pendingContext?am(n,e.pendingContext,e.pendingContext!==e.context):e.context&&am(n,e.context,!1),bd(n,e.containerInfo)}function Tm(n,e,t,i,r){return Eo(),Td(r),e.flags|=256,en(n,e,t,i),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function wv(n,e,t){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),et(ot,r&1),n===null)return hh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),n=ss(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=yh(t),e.memoizedState=xh,n):kd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return WM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=ss(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?yh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=xh,i}return s=n.child,n=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function kd(n,e){return e=ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function xl(n,e,t,i){return i!==null&&Td(i),To(e,n.child,null,t),n=kd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function WM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Wc(Error(ne(422))),xl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,n.child,null,o),e.child.memoizedState=yh(o),e.memoizedState=xh,s);if(!(e.mode&1))return xl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Wc(s,i,void 0),xl(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(n,r),ui(i,n,r,-1))}return Wd(),i=Wc(Error(ne(421))),xl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=iE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Rn=vr(r.nextSibling),Cn=e,it=!0,ii=null,n!==null&&(kn[zn++]=Bi,kn[zn++]=Hi,kn[zn++]=ms,Bi=n.id,Hi=n.overflow,ms=e),e=kd(e,i.children),e.flags|=4096,e)}function wm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dh(n.return,e,t)}function Xc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Av(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wm(n,t,e);else if(n.tag===19)wm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(et(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&wu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Xc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&wu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Xc(e,!0,t,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),gs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Mr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Mr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function XM(n,e,t){switch(e.tag){case 3:Tv(e),Eo();break;case 5:J0(e);break;case 1:fn(e.type)&&xu(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Mu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ot,ot.current&1),e.flags|=128,null):t&e.child.childLanes?wv(n,e,t):(et(ot,ot.current&1),n=qi(n,e,t),n!==null?n.sibling:null);et(ot,ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Av(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(n,e,t)}return qi(n,e,t)}var Rv,Sh,Cv,Pv;Rv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sh=function(){};Cv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ns(Si.current);var s=null;switch(t){case"input":r=Gf(n,r),i=Gf(n,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=jf(n,r),i=jf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=gu)}qf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pv=function(n,e,t,i){t!==i&&(e.flags|=4)};function qo(n,e){if(!it)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function jM(n,e,t){var i=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&vu(),Gt(e),null;case 3:return i=e.stateNode,wo(),nt(cn),nt(Kt),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(gl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Ph(ii),ii=null))),Sh(n,e),Gt(e),null;case 5:Ld(e);var r=ns(Ia.current);if(t=e.type,n!==null&&e.stateNode!=null)Cv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Gt(e),null}if(n=ns(Si.current),gl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[Da]=s,n=(e.mode&1)!==0,t){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)tt(ra[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":Ip(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":Op(i,s),tt("invalid",i)}qf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(t){case"input":ll(i),Np(i,s,!0);break;case"textarea":ll(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=n0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gi]=e,n[Da]=i,Rv(n,e,!1,!1),e.stateNode=n;e:{switch(o=$f(t,i),t){case"dialog":tt("cancel",n),tt("close",n),r=i;break;case"iframe":case"object":case"embed":tt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)tt(ra[r],n);r=i;break;case"source":tt("error",n),r=i;break;case"img":case"image":case"link":tt("error",n),tt("load",n),r=i;break;case"details":tt("toggle",n),r=i;break;case"input":Ip(n,i),r=Gf(n,i),tt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),tt("invalid",n);break;case"textarea":Op(n,i),r=jf(n,i),tt("invalid",n);break;default:r=i}qf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ea(n,l):typeof l=="number"&&Ea(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",n):l!=null&&ld(n,s,l,o))}switch(t){case"input":ll(n),Np(n,i,!1);break;case"textarea":ll(n),Fp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=gu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(n&&e.stateNode!=null)Pv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ns(Ia.current),ns(Si.current),gl(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=Cn,n!==null))switch(n.tag){case 3:_l(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Gt(e),null;case 13:if(nt(ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(it&&Rn!==null&&e.mode&1&&!(e.flags&128))j0(),Eo(),e.flags|=98560,s=!1;else if(s=gl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[gi]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else ii!==null&&(Ph(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ot.current&1?At===0&&(At=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return wo(),Sh(n,e),n===null&&ba(e.stateNode.containerInfo),Gt(e),null;case 10:return Rd(e.type._context),Gt(e),null;case 17:return fn(e.type)&&vu(),Gt(e),null;case 19:if(nt(ot),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qo(s,!1);else{if(At!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=wu(n),o!==null){for(e.flags|=128,qo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return et(ot,ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>Ro&&(e.flags|=128,i=!0,qo(s,!1),e.lanes=4194304)}else{if(!i)if(n=wu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Gt(e),null}else 2*yt()-s.renderingStartTime>Ro&&t!==1073741824&&(e.flags|=128,i=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=ot.current,et(ot,i?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return Gd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function YM(n,e){switch(Ed(e),e.tag){case 1:return fn(e.type)&&vu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return wo(),nt(cn),nt(Kt),Dd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ld(e),null;case 13:if(nt(ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Eo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return nt(ot),null;case 4:return wo(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var yl=!1,jt=!1,qM=typeof WeakSet=="function"?WeakSet:Set,he=null;function io(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){mt(n,e,i)}else t.current=null}function Mh(n,e,t){try{t()}catch(i){mt(n,e,i)}}var Am=!1;function $M(n,e){if(sh=pu,n=U0(),Sd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(oh={focusedElem:n,selectionRange:t},pu=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ti(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){mt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return x=Am,Am=!1,x}function ma(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mh(e,t,s)}r=r.next}while(r!==i)}}function tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Eh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function bv(n){var e=n.alternate;e!==null&&(n.alternate=null,bv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[Da],delete e[uh],delete e[LM],delete e[DM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lv(n){return n.tag===5||n.tag===3||n.tag===4}function Rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=gu));else if(i!==4&&(n=n.child,n!==null))for(Th(n,e,t),n=n.sibling;n!==null;)Th(n,e,t),n=n.sibling}function wh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(wh(n,e,t),n=n.sibling;n!==null;)wh(n,e,t),n=n.sibling}var kt=null,ni=!1;function Qi(n,e,t){for(t=t.child;t!==null;)Dv(n,e,t),t=t.sibling}function Dv(n,e,t){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Yu,t)}catch{}switch(t.tag){case 5:jt||io(t,e);case 6:var i=kt,r=ni;kt=null,Qi(n,e,t),kt=i,ni=r,kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?kc(n.parentNode,t):n.nodeType===1&&kc(n,t),Ra(n)):kc(kt,t.stateNode));break;case 4:i=kt,r=ni,kt=t.stateNode.containerInfo,ni=!0,Qi(n,e,t),kt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(t,e,o),r=r.next}while(r!==i)}Qi(n,e,t);break;case 1:if(!jt&&(io(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){mt(t,e,a)}Qi(n,e,t);break;case 21:Qi(n,e,t);break;case 22:t.mode&1?(jt=(i=jt)||t.memoizedState!==null,Qi(n,e,t),jt=i):Qi(n,e,t);break;default:Qi(n,e,t)}}function Cm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new qM),e.forEach(function(i){var r=rE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Kn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,ni=!1;break e;case 3:kt=a.stateNode.containerInfo,ni=!0;break e;case 4:kt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));Dv(s,o,r),kt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uv(e,n),e=e.sibling}function Uv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(e,n),pi(n),i&4){try{ma(3,n,n.return),tc(3,n)}catch(_){mt(n,n.return,_)}try{ma(5,n,n.return)}catch(_){mt(n,n.return,_)}}break;case 1:Kn(e,n),pi(n),i&512&&t!==null&&io(t,t.return);break;case 5:if(Kn(e,n),pi(n),i&512&&t!==null&&io(t,t.return),n.flags&32){var r=n.stateNode;try{Ea(r,"")}catch(_){mt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e0(r,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?s0(r,d):c==="dangerouslySetInnerHTML"?i0(r,d):c==="children"?Ea(r,d):ld(r,c,d,u)}switch(a){case"input":Wf(r,s);break;case"textarea":t0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(_){mt(n,n.return,_)}}break;case 6:if(Kn(e,n),pi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){mt(n,n.return,_)}}break;case 3:if(Kn(e,n),pi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(_){mt(n,n.return,_)}break;case 4:Kn(e,n),pi(n);break;case 13:Kn(e,n),pi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=yt())),i&4&&Cm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(jt=(u=jt)||c,Kn(e,n),jt=u):Kn(e,n),pi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(he=n,c=n.child;c!==null;){for(d=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:ma(4,h,h.return);break;case 1:io(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){mt(i,t,_)}}break;case 5:io(h,h.return);break;case 22:if(h.memoizedState!==null){bm(d);continue}}p!==null?(p.return=h,he=p):bm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",o))}catch(_){mt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){mt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,n),pi(n),i&4&&Cm(n);break;case 21:break;default:Kn(e,n),pi(n)}}function pi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Lv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Rm(n);wh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rm(n);Th(n,a,o);break;default:throw Error(ne(161))}}catch(l){mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function KM(n,e,t){he=n,Iv(n)}function Iv(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=yl;var u=jt;if(yl=o,(jt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Lm(r):l!==null?(l.return=o,he=l):Lm(r);for(;s!==null;)he=s,Iv(s),s=s.sibling;he=r,yl=a,jt=u}Pm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Pm(n)}}function Pm(n){for(;he!==null;){var e=he;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}hm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}jt||e.flags&512&&Eh(e)}catch(h){mt(e,e.return,h)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function bm(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function Lm(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tc(4,e)}catch(l){mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Eh(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Eh(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===n){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var ZM=Math.ceil,Cu=Zi.ReactCurrentDispatcher,zd=Zi.ReactCurrentOwner,Xn=Zi.ReactCurrentBatchConfig,Xe=0,Nt=null,Tt=null,Bt=0,En=0,ro=Ir(0),At=0,ka=null,gs=0,nc=0,Bd=0,_a=null,an=null,Hd=0,Ro=1/0,Ni=null,Pu=!1,Ah=null,yr=null,Sl=!1,lr=null,bu=0,ga=0,Rh=null,tu=-1,nu=0;function rn(){return Xe&6?yt():tu!==-1?tu:tu=yt()}function Sr(n){return n.mode&1?Xe&2&&Bt!==0?Bt&-Bt:IM.transition!==null?(nu===0&&(nu=g0()),nu):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:T0(n.type)),n):1}function ui(n,e,t,i){if(50<ga)throw ga=0,Rh=null,Error(ne(185));$a(n,t,i),(!(Xe&2)||n!==Nt)&&(n===Nt&&(!(Xe&2)&&(nc|=t),At===4&&or(n,Bt)),hn(n,i),t===1&&Xe===0&&!(e.mode&1)&&(Ro=yt()+500,Qu&&Nr()))}function hn(n,e){var t=n.callbackNode;IS(n,e);var i=du(n,n===Nt?Bt:0);if(i===0)t!==null&&Bp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Bp(t),e===1)n.tag===0?UM(Dm.bind(null,n)):G0(Dm.bind(null,n)),PM(function(){!(Xe&6)&&Nr()}),t=null;else{switch(v0(i)){case 1:t=dd;break;case 4:t=m0;break;case 16:t=hu;break;case 536870912:t=_0;break;default:t=hu}t=Vv(t,Nv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Nv(n,e){if(tu=-1,nu=0,Xe&6)throw Error(ne(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=du(n,n===Nt?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Lu(n,i);else{e=i;var r=Xe;Xe|=2;var s=Fv();(Nt!==n||Bt!==e)&&(Ni=null,Ro=yt()+500,rs(n,e));do try{eE();break}catch(a){Ov(n,a)}while(1);Ad(),Cu.current=s,Xe=r,Tt!==null?e=0:(Nt=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=eh(n),r!==0&&(i=r,e=Ch(n,r))),e===1)throw t=ka,rs(n,0),or(n,i),hn(n,yt()),t;if(e===6)or(n,i);else{if(r=n.current.alternate,!(i&30)&&!QM(r)&&(e=Lu(n,i),e===2&&(s=eh(n),s!==0&&(i=s,e=Ch(n,s))),e===1))throw t=ka,rs(n,0),or(n,i),hn(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:$r(n,an,Ni);break;case 3:if(or(n,i),(i&130023424)===i&&(e=Hd+500-yt(),10<e)){if(du(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){rn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=lh($r.bind(null,n,an,Ni),e);break}$r(n,an,Ni);break;case 4:if(or(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZM(i/1960))-i,10<i){n.timeoutHandle=lh($r.bind(null,n,an,Ni),i);break}$r(n,an,Ni);break;case 5:$r(n,an,Ni);break;default:throw Error(ne(329))}}}return hn(n,yt()),n.callbackNode===t?Nv.bind(null,n):null}function Ch(n,e){var t=_a;return n.current.memoizedState.isDehydrated&&(rs(n,e).flags|=256),n=Lu(n,e),n!==2&&(e=an,an=t,e!==null&&Ph(e)),n}function Ph(n){an===null?an=n:an.push.apply(an,n)}function QM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(n,e){for(e&=~Bd,e&=~nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-li(e),i=1<<t;n[t]=-1,e&=~i}}function Dm(n){if(Xe&6)throw Error(ne(327));po();var e=du(n,0);if(!(e&1))return hn(n,yt()),null;var t=Lu(n,e);if(n.tag!==0&&t===2){var i=eh(n);i!==0&&(e=i,t=Ch(n,i))}if(t===1)throw t=ka,rs(n,0),or(n,e),hn(n,yt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,$r(n,an,Ni),hn(n,yt()),null}function Vd(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(Ro=yt()+500,Qu&&Nr())}}function vs(n){lr!==null&&lr.tag===0&&!(Xe&6)&&po();var e=Xe;Xe|=1;var t=Xn.transition,i=Ke;try{if(Xn.transition=null,Ke=1,n)return n()}finally{Ke=i,Xn.transition=t,Xe=e,!(Xe&6)&&Nr()}}function Gd(){En=ro.current,nt(ro)}function rs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,CM(t)),Tt!==null)for(t=Tt.return;t!==null;){var i=t;switch(Ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vu();break;case 3:wo(),nt(cn),nt(Kt),Dd();break;case 5:Ld(i);break;case 4:wo();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:Rd(i.type._context);break;case 22:case 23:Gd()}t=t.return}if(Nt=n,Tt=n=Mr(n.current,null),Bt=En=e,At=0,ka=null,Bd=nc=gs=0,an=_a=null,ts!==null){for(e=0;e<ts.length;e++)if(t=ts[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ts=null}return n}function Ov(n,e){do{var t=Tt;try{if(Ad(),Ql.current=Ru,Au){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Au=!1}if(_s=0,Ut=wt=ut=null,pa=!1,Na=0,zd.current=null,t===null||t.return===null){At=1,ka=e,Tt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=xm(o);if(p!==null){p.flags&=-257,ym(p,o,a,s,e),p.mode&1&&vm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){vm(s,u,e),Wd();break e}l=Error(ne(426))}}else if(it&&a.mode&1){var m=xm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ym(m,o,a,s,e),Td(Ao(l,a));break e}}s=l=Ao(l,a),At!==4&&(At=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=xv(s,l,e);fm(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yv(s,a,e);fm(s,y);break e}}s=s.return}while(s!==null)}zv(t)}catch(S){e=S,Tt===t&&t!==null&&(Tt=t=t.return);continue}break}while(1)}function Fv(){var n=Cu.current;return Cu.current=Ru,n===null?Ru:n}function Wd(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(gs&268435455)&&!(nc&268435455)||or(Nt,Bt)}function Lu(n,e){var t=Xe;Xe|=2;var i=Fv();(Nt!==n||Bt!==e)&&(Ni=null,rs(n,e));do try{JM();break}catch(r){Ov(n,r)}while(1);if(Ad(),Xe=t,Cu.current=i,Tt!==null)throw Error(ne(261));return Nt=null,Bt=0,At}function JM(){for(;Tt!==null;)kv(Tt)}function eE(){for(;Tt!==null&&!wS();)kv(Tt)}function kv(n){var e=Hv(n.alternate,n,En);n.memoizedProps=n.pendingProps,e===null?zv(n):Tt=e,zd.current=null}function zv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=YM(t,e),t!==null){t.flags&=32767,Tt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,Tt=null;return}}else if(t=jM(t,e,En),t!==null){Tt=t;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=n}while(e!==null);At===0&&(At=5)}function $r(n,e,t){var i=Ke,r=Xn.transition;try{Xn.transition=null,Ke=1,tE(n,e,t,i)}finally{Xn.transition=r,Ke=i}return null}function tE(n,e,t,i){do po();while(lr!==null);if(Xe&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(NS(n,s),n===Nt&&(Tt=Nt=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sl||(Sl=!0,Vv(hu,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=Ke;Ke=1;var a=Xe;Xe|=4,zd.current=null,$M(n,t),Uv(t,n),SM(oh),pu=!!sh,oh=sh=null,n.current=t,KM(t),AS(),Xe=a,Ke=o,Xn.transition=s}else n.current=t;if(Sl&&(Sl=!1,lr=n,bu=r),s=n.pendingLanes,s===0&&(yr=null),PS(t.stateNode),hn(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pu)throw Pu=!1,n=Ah,Ah=null,n;return bu&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===Rh?ga++:(ga=0,Rh=n):ga=0,Nr(),null}function po(){if(lr!==null){var n=v0(bu),e=Xn.transition,t=Ke;try{if(Xn.transition=null,Ke=16>n?16:n,lr===null)var i=!1;else{if(n=lr,lr=null,bu=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,he=n.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:ma(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(bv(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var g=n.current;for(he=g;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(S){mt(a,a.return,S)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Xe=r,Nr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Yu,n)}catch{}i=!0}return i}finally{Ke=t,Xn.transition=e}}return!1}function Um(n,e,t){e=Ao(t,e),e=xv(n,e,1),n=xr(n,e,1),e=rn(),n!==null&&($a(n,1,e),hn(n,e))}function mt(n,e,t){if(n.tag===3)Um(n,n,t);else for(;e!==null;){if(e.tag===3){Um(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){n=Ao(t,n),n=yv(e,n,1),e=xr(e,n,1),n=rn(),e!==null&&($a(e,1,n),hn(e,n));break}}e=e.return}}function nE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=rn(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(Bt&t)===t&&(At===4||At===3&&(Bt&130023424)===Bt&&500>yt()-Hd?rs(n,0):Bd|=t),hn(n,e)}function Bv(n,e){e===0&&(n.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var t=rn();n=Yi(n,e),n!==null&&($a(n,e,t),hn(n,t))}function iE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Bv(n,t)}function rE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Bv(n,t)}var Hv;Hv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,XM(n,e,t);un=!!(n.flags&131072)}else un=!1,it&&e.flags&1048576&&W0(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(n,e),n=e.pendingProps;var r=Mo(e,Kt.current);ho(e,t),r=Id(null,e,i,n,r,t);var s=Nd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,xu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Ju,e.stateNode=r,r._reactInternals=e,mh(e,i,n,t),e=vh(null,e,i,!0,s,t)):(e.tag=0,it&&s&&Md(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oE(i),n=ti(i,n),r){case 0:e=gh(null,e,i,n,t);break e;case 1:e=Em(null,e,i,n,t);break e;case 11:e=Sm(null,e,i,n,t);break e;case 14:e=Mm(null,e,i,ti(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),gh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Em(n,e,i,r,t);case 3:e:{if(Tv(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,q0(n,e),Tu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ne(423)),e),e=Tm(n,e,i,t,r);break e}else if(i!==r){r=Ao(Error(ne(424)),e),e=Tm(n,e,i,t,r);break e}else for(Rn=vr(e.stateNode.containerInfo.firstChild),Cn=e,it=!0,ii=null,t=Q0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Eo(),i===r){e=qi(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return J0(e),n===null&&hh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ah(i,r)?o=null:s!==null&&ah(i,s)&&(e.flags|=32),Ev(n,e),en(n,e,o,t),e.child;case 6:return n===null&&hh(e),null;case 13:return wv(n,e,t);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=To(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Sm(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Mu,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!cn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),dh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),dh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=jn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Mm(n,e,i,r,t);case 15:return Sv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),eu(n,e),e.tag=1,fn(i)?(n=!0,xu(e)):n=!1,ho(e,t),K0(e,i,r),mh(e,i,r,t),vh(null,e,i,!0,n,t);case 19:return Av(n,e,t);case 22:return Mv(n,e,t)}throw Error(ne(156,e.tag))};function Vv(n,e){return p0(n,e)}function sE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new sE(n,e,t,i)}function Xd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oE(n){if(typeof n=="function")return Xd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cd)return 11;if(n===fd)return 14}return 2}function Mr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function iu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Xd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qs:return ss(t.children,r,s,e);case ud:o=8,r|=8;break;case zf:return n=Hn(12,t,e,r|2),n.elementType=zf,n.lanes=s,n;case Bf:return n=Hn(13,t,e,r),n.elementType=Bf,n.lanes=s,n;case Hf:return n=Hn(19,t,e,r),n.elementType=Hf,n.lanes=s,n;case Zg:return ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $g:o=10;break e;case Kg:o=9;break e;case cd:o=11;break e;case fd:o=14;break e;case ir:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Hn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ss(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function ic(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=Zg,n.lanes=t,n.stateNode={isHidden:!1},n}function jc(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function Yc(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function aE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jd(n,e,t,i,r,s,o,a,l){return n=new aE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),n}function lE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Gv(n){if(!n)return Cr;n=n._reactInternals;e:{if(Es(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(fn(t))return V0(n,t,e)}return e}function Wv(n,e,t,i,r,s,o,a,l){return n=jd(t,i,!0,n,r,s,o,a,l),n.context=Gv(null),t=n.current,i=rn(),r=Sr(t),s=Gi(i,r),s.callback=e??null,xr(t,s,r),n.current.lanes=r,$a(n,r,i),hn(n,i),n}function rc(n,e,t,i){var r=e.current,s=rn(),o=Sr(r);return t=Gv(t),e.context===null?e.context=t:e.pendingContext=t,e=Gi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xr(r,e,o),n!==null&&(ui(n,r,o,s),Zl(n,r,o)),o}function Du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Yd(n,e){Im(n,e),(n=n.alternate)&&Im(n,e)}function uE(){return null}var Xv=typeof reportError=="function"?reportError:function(n){console.error(n)};function qd(n){this._internalRoot=n}sc.prototype.render=qd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));rc(n,e,null,null)};sc.prototype.unmount=qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;vs(function(){rc(null,n,null,null)}),e[ji]=null}};function sc(n){this._internalRoot=n}sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=S0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<sr.length&&e!==0&&e<sr[t].priority;t++);sr.splice(t,0,n),t===0&&E0(n)}};function $d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function cE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Du(o);s.call(u)}}var o=Wv(e,i,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=o,n[ji]=o.current,ba(n.nodeType===8?n.parentNode:n),vs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Du(l);a.call(u)}}var l=jd(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=l,n[ji]=l.current,ba(n.nodeType===8?n.parentNode:n),vs(function(){rc(e,l,t,i)}),l}function ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Du(o);a.call(l)}}rc(e,o,n,r)}else o=cE(t,e,n,r,i);return Du(o)}x0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ia(e.pendingLanes);t!==0&&(pd(e,t|1),hn(e,yt()),!(Xe&6)&&(Ro=yt()+500,Nr()))}break;case 13:vs(function(){var i=Yi(n,1);if(i!==null){var r=rn();ui(i,n,1,r)}}),Yd(n,1)}};md=function(n){if(n.tag===13){var e=Yi(n,134217728);if(e!==null){var t=rn();ui(e,n,134217728,t)}Yd(n,134217728)}};y0=function(n){if(n.tag===13){var e=Sr(n),t=Yi(n,e);if(t!==null){var i=rn();ui(t,n,e,i)}Yd(n,e)}};S0=function(){return Ke};M0=function(n,e){var t=Ke;try{return Ke=n,e()}finally{Ke=t}};Zf=function(n,e,t){switch(e){case"input":if(Wf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zu(i);if(!r)throw Error(ne(90));Jg(i),Wf(i,r)}}}break;case"textarea":t0(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};l0=Vd;u0=vs;var fE={usingClientEntryPoint:!1,Events:[Za,Qs,Zu,o0,a0,Vd]},$o={findFiberByHostInstance:es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hE={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=h0(n),n===null?null:n.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||uE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Yu=Ml.inject(hE),yi=Ml}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(ne(200));return lE(n,e,null,t)};Un.createRoot=function(n,e){if(!$d(n))throw Error(ne(299));var t=!1,i="",r=Xv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jd(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,ba(n.nodeType===8?n.parentNode:n),new qd(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=h0(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return vs(n)};Un.hydrate=function(n,e,t){if(!oc(e))throw Error(ne(200));return ac(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!$d(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Xv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Wv(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,ba(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new sc(e)};Un.render=function(n,e,t){if(!oc(e))throw Error(ne(200));return ac(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!oc(n))throw Error(ne(40));return n._reactRootContainer?(vs(function(){ac(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Un.unstable_batchedUpdates=Vd;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!oc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return ac(n,e,t,!1,i)};Un.version="18.2.0-next-9e3b772b8-20220608";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(n){console.error(n)}}jv(),Wg.exports=Un;var dE=Wg.exports,Om=dE;Ff.createRoot=Om.createRoot,Ff.hydrateRoot=Om.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="154",Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pE=0,Fm=1,mE=2,Yv=1,_E=2,Ii=3,Pr=0,dn=1,zi=2,Er=0,mo=1,km=2,zm=3,Bm=4,gE=5,js=100,vE=101,xE=102,Hm=103,Vm=104,yE=200,SE=201,ME=202,EE=203,qv=204,$v=205,TE=206,wE=207,AE=208,RE=209,CE=210,PE=0,bE=1,LE=2,bh=3,DE=4,UE=5,IE=6,NE=7,Zd=0,OE=1,FE=2,Wi=0,kE=1,zE=2,BE=3,HE=4,VE=5,Kv=300,Co=301,Po=302,Lh=303,Dh=304,lc=306,Uh=1e3,si=1001,Ih=1002,tn=1003,Gm=1004,qc=1005,Bn=1006,GE=1007,za=1008,Tr=1009,WE=1010,XE=1011,Qd=1012,Zv=1013,ur=1014,cr=1015,Ba=1016,Qv=1017,Jv=1018,os=1020,jE=1021,oi=1023,YE=1024,qE=1025,as=1026,bo=1027,$E=1028,ex=1029,KE=1030,tx=1031,nx=1033,$c=33776,Kc=33777,Zc=33778,Qc=33779,Wm=35840,Xm=35841,jm=35842,Ym=35843,ZE=36196,qm=37492,$m=37496,Km=37808,Zm=37809,Qm=37810,Jm=37811,e_=37812,t_=37813,n_=37814,i_=37815,r_=37816,s_=37817,o_=37818,a_=37819,l_=37820,u_=37821,Jc=36492,QE=36283,c_=36284,f_=36285,h_=36286,ix=3e3,ls=3001,JE=3200,e1=3201,rx=0,t1=1,us="",Fe="srgb",wi="srgb-linear",sx="display-p3",ef=7680,n1=519,i1=512,r1=513,s1=514,o1=515,a1=516,l1=517,u1=518,c1=519,d_=35044,p_="300 es",Nh=1035,Vi=2e3,Uu=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,Iu=180/Math.PI;function Ja(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function f1(n,e){return(n%e+e)%e}function nf(n,e,t){return(1-t)*n+t*e}function m_(n){return(n&n-1)===0&&n!==0}function Oh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function El(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],f=r[6],g=r[1],v=r[4],y=r[7],S=r[2],T=r[5],E=r[8];return s[0]=o*_+a*g+l*S,s[3]=o*m+a*v+l*T,s[6]=o*f+a*y+l*E,s[1]=u*_+c*g+d*S,s[4]=u*m+c*v+d*T,s[7]=u*f+c*y+d*E,s[2]=h*_+p*g+x*S,s[5]=h*m+p*v+x*T,s[8]=h*f+p*y+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new ze;function ox(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const __={};function va(n){n in __||(__[n]=!0,console.warn(n))}function _o(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const h1=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),d1=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function p1(n){return n.convertSRGBToLinear().applyMatrix3(d1)}function m1(n){return n.applyMatrix3(h1).convertLinearToSRGB()}const _1={[wi]:n=>n,[Fe]:n=>n.convertSRGBToLinear(),[sx]:p1},g1={[wi]:n=>n,[Fe]:n=>n.convertLinearToSRGB(),[sx]:m1},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return wi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_1[e],r=g1[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ps;class ax{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Nu("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_o(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_o(t[i]/255)*255):t[i]=_o(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v1=0;class lx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ja(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(of(r[o].image)):s.push(of(r[o]))}else s=of(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function of(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ax.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x1=0;class Pn extends Ts{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=si,r=si,s=Bn,o=za,a=oi,l=Tr,u=Pn.DEFAULT_ANISOTROPY,c=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Ja(),this.name="",this.source=new lx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ls?Fe:us),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uh:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uh:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?ls:ix}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ls?Fe:us}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Kv;Pn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,S=(f+1)/2,T=(c+h)/4,E=(d+_)/4,C=(x+m)/4;return v>y&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=E/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=C/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=E/s,r=C/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-_)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xs extends Ts{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ls?Fe:us),this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ux extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y1 extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*_,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),T=Math.atan2(S,f*g);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const y=a*g;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+_*y,m===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new G,g_=new br;class el{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pi)}else r.boundingBox===null&&r.computeBoundingBox(),bs.copy(r.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Tl.subVectors(this.max,Ko),Ls.subVectors(e.a,Ko),Ds.subVectors(e.b,Ko),Us.subVectors(e.c,Ko),Ji.subVectors(Ds,Ls),er.subVectors(Us,Ds),Br.subVectors(Ls,Us);let t=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Br.z,Br.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Br.z,0,-Br.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Br.y,Br.x,0];return!lf(t,Ls,Ds,Us,Tl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Ls,Ds,Us,Tl))?!1:(wl.crossVectors(Ji,er),t=[wl.x,wl.y,wl.z],lf(t,Ls,Ds,Us,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new G,new G,new G,new G,new G,new G,new G,new G],Pi=new G,bs=new el,Ls=new G,Ds=new G,Us=new G,Ji=new G,er=new G,Br=new G,Ko=new G,Tl=new G,wl=new G,Hr=new G;function lf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hr.fromArray(n,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),u=t.dot(Hr),c=i.dot(Hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const S1=new el,Zo=new G,uf=new G;class Jd{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):S1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(uf)),this.expandByPoint(Zo.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new G,cf=new G,Al=new G,tr=new G,ff=new G,Rl=new G,hf=new G;class M1{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cf.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(cf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Al),a=tr.dot(this.direction),l=-tr.dot(Al),u=tr.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const _=1/c;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cf).addScaledVector(Al,h),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){ff.subVectors(t,e),Rl.subVectors(i,e),hf.crossVectors(ff,Rl);let o=this.direction.dot(hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Rl.crossVectors(tr,Rl));if(l<0)return null;const u=a*this.direction.dot(ff.cross(tr));if(u<0||l+u>o)return null;const c=-a*tr.dot(hf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h+_*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h-_*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+_,t[1]=l*d,t[5]=_*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=_-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+_,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E1,e,T1)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),nr.crossVectors(i,Sn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),nr.crossVectors(i,Sn)),nr.normalize(),Cl.crossVectors(Sn,nr),r[0]=nr.x,r[4]=Cl.x,r[8]=Sn.x,r[1]=nr.y,r[5]=Cl.y,r[9]=Sn.y,r[2]=nr.z,r[6]=Cl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],g=i[3],v=i[7],y=i[11],S=i[15],T=r[0],E=r[4],C=r[8],M=r[12],w=r[1],k=r[5],j=r[9],U=r[13],B=r[2],H=r[6],K=r[10],W=r[14],L=r[3],N=r[7],O=r[11],I=r[15];return s[0]=o*T+a*w+l*B+u*L,s[4]=o*E+a*k+l*H+u*N,s[8]=o*C+a*j+l*K+u*O,s[12]=o*M+a*U+l*W+u*I,s[1]=c*T+d*w+h*B+p*L,s[5]=c*E+d*k+h*H+p*N,s[9]=c*C+d*j+h*K+p*O,s[13]=c*M+d*U+h*W+p*I,s[2]=x*T+_*w+m*B+f*L,s[6]=x*E+_*k+m*H+f*N,s[10]=x*C+_*j+m*K+f*O,s[14]=x*M+_*U+m*W+f*I,s[3]=g*T+v*w+y*B+S*L,s[7]=g*E+v*k+y*H+S*N,s[11]=g*C+v*j+y*K+S*O,s[15]=g*M+v*U+y*W+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],g=d*m*u-_*h*u+_*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*_*u-x*d*u+x*a*p-o*_*p-c*a*f+o*d*f,S=x*d*l-c*_*l-x*a*h+o*_*h+c*a*m-o*d*m,T=t*g+i*v+r*y+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=g*E,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*E,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*E,e[4]=v*E,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*E,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(x*d*s-c*_*s-x*i*p+t*_*p+c*i*f-t*d*f)*E,e[10]=(o*_*s-x*a*s+x*i*u-t*_*u-o*i*f+t*a*f)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=S*E,e[13]=(c*_*r-x*d*r+x*i*h-t*_*h-c*i*m+t*d*m)*E,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,_=o*c,m=o*d,f=a*d,g=l*u,v=l*c,y=l*d,S=i.x,T=i.y,E=i.z;return r[0]=(1-(_+f))*S,r[1]=(p+y)*S,r[2]=(x-v)*S,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+f))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(x+v)*E,r[9]=(m-g)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const u=1/s,c=1/o,d=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Vi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Uu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,_;if(a===Vi)x=(o+s)*d,_=-2*d;else if(a===Uu)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Is=new G,Qn=new Rt,E1=new G(0,0,0),T1=new G(1,1,1),nr=new G,Cl=new G,Sn=new G,v_=new Rt,x_=new br;class uc{constructor(e=0,t=0,i=0,r=uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uc.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w1=0;const y_=new G,Ns=new br,Li=new Rt,Pl=new G,Qo=new G,A1=new G,R1=new br,S_=new G(1,0,0),M_=new G(0,1,0),E_=new G(0,0,1),C1={type:"added"},T_={type:"removed"};class Ot extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new G,t=new uc,i=new br,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Qo,Pl,this.up):Li.lookAt(Pl,Qo,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(Li),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(T_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,A1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,R1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new G(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new G,Di=new G,df=new G,Ui=new G,Os=new G,Fs=new G,w_=new G,pf=new G,mf=new G,_f=new G;let bl=!1;class ri{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Di.subVectors(i,t),df.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Di),l=Jn.dot(df),u=Di.dot(Di),c=Di.dot(df),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui),Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,r,s,o,a,l){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ui),l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Di.subVectors(e,t),Jn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Jn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),Fs.subVectors(s,i),pf.subVectors(e,i);const l=Os.dot(pf),u=Fs.dot(pf);if(l<=0&&u<=0)return t.copy(i);mf.subVectors(e,r);const c=Os.dot(mf),d=Fs.dot(mf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Os,o);_f.subVectors(e,s);const p=Os.dot(_f),x=Fs.dot(_f);if(x>=0&&p<=x)return t.copy(s);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Fs,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return w_.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(w_,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let P1=0;class tl extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=mo,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qv,this.blendDst=$v,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ef,this.stencilZFail=ef,this.stencilZPass=ef,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function gf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Zn.workingColorSpace){if(e=f1(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gf(o,s,e+1/3),this.g=gf(o,s,e),this.b=gf(o,s,e-1/3)}return Zn.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Zn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Fe){Zn.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),ei.h+=e,ei.s+=t,ei.l+=i,this.setHSL(ei.h,ei.s,ei.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ll);const i=nf(ei.h,Ll.h,t),r=nf(ei.s,Ll.s,t),s=nf(ei.l,Ll.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ye;Ye.NAMES=fx;class hx extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,Dl=new ke;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=d_,this.updateRange={offset:0,count:-1},this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=El(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=El(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=El(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=El(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dx extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class px extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ei extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b1=0;const Nn=new Rt,vf=new Ot,ks=new G,Mn=new el,Jo=new el,Dt=new G;class Or extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?px:dx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Mn.min,Jo.min),Mn.expandByPoint(Dt),Dt.addVectors(Mn.max,Jo.max),Mn.expandByPoint(Dt)):(Mn.expandByPoint(Jo.min),Mn.expandByPoint(Jo.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(ks.fromBufferAttribute(e,u),Dt.add(ks)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new G,c[w]=new G;const d=new G,h=new G,p=new G,x=new ke,_=new ke,m=new ke,f=new G,g=new G;function v(w,k,j){d.fromArray(r,w*3),h.fromArray(r,k*3),p.fromArray(r,j*3),x.fromArray(o,w*2),_.fromArray(o,k*2),m.fromArray(o,j*2),h.sub(d),p.sub(d),_.sub(x),m.sub(x);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),g.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(U),u[w].add(f),u[k].add(f),u[j].add(f),c[w].add(g),c[k].add(g),c[j].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,k=y.length;w<k;++w){const j=y[w],U=j.start,B=j.count;for(let H=U,K=U+B;H<K;H+=3)v(i[H+0],i[H+1],i[H+2])}const S=new G,T=new G,E=new G,C=new G;function M(w){E.fromArray(s,w*3),C.copy(E);const k=u[w];S.copy(k),S.sub(E.multiplyScalar(E.dot(k))).normalize(),T.crossVectors(C,k);const U=T.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=U}for(let w=0,k=y.length;w<k;++w){const j=y[w],U=j.start,B=j.count;for(let H=U,K=U+B;H<K;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,d=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new Mi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new Rt,Vr=new M1,Ul=new Jd,R_=new G,zs=new G,Bs=new G,Hs=new G,xf=new G,Il=new G,Nl=new ke,Ol=new ke,Fl=new ke,C_=new G,P_=new G,b_=new G,kl=new G,zl=new G;class ai extends Ot{constructor(e=new Or,t=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Il.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(xf.fromBufferAttribute(d,e),o?Il.addScaledVector(xf,c):Il.addScaledVector(xf.sub(t),c))}t.add(Il)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Ul,R_)===null||Vr.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(A_.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(A_),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,S=v;y<S;y+=3){const T=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);r=Bl(this,f,e,i,u,c,d,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Bl(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,S=v;y<S;y+=3){const T=y,E=y+1,C=y+2;r=Bl(this,f,e,i,u,c,d,T,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=m,v=m+1,y=m+2;r=Bl(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function L1(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(zl);return u<t.near||u>t.far?null:{distance:u,point:zl.clone(),object:n}}function Bl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,zs),n.getVertexPosition(l,Bs),n.getVertexPosition(u,Hs);const c=L1(n,e,t,i,zs,Bs,Hs,kl);if(c){r&&(Nl.fromBufferAttribute(r,a),Ol.fromBufferAttribute(r,l),Fl.fromBufferAttribute(r,u),c.uv=ri.getInterpolation(kl,zs,Bs,Hs,Nl,Ol,Fl,new ke)),s&&(Nl.fromBufferAttribute(s,a),Ol.fromBufferAttribute(s,l),Fl.fromBufferAttribute(s,u),c.uv1=ri.getInterpolation(kl,zs,Bs,Hs,Nl,Ol,Fl,new ke),c.uv2=c.uv1),o&&(C_.fromBufferAttribute(o,a),P_.fromBufferAttribute(o,l),b_.fromBufferAttribute(o,u),c.normal=ri.getInterpolation(kl,zs,Bs,Hs,C_,P_,b_,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new G,materialIndex:0};ri.getNormal(zs,Bs,Hs,d.normal),c.face=d}return c}class nl extends Or{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(u,3)),this.setAttribute("normal",new Ei(c,3)),this.setAttribute("uv",new Ei(d,2));function x(_,m,f,g,v,y,S,T,E,C,M){const w=y/E,k=S/C,j=y/2,U=S/2,B=T/2,H=E+1,K=C+1;let W=0,L=0;const N=new G;for(let O=0;O<K;O++){const I=O*k-U;for(let F=0;F<H;F++){const oe=F*w-j;N[_]=oe*g,N[m]=I*v,N[f]=B,u.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[f]=T>0?1:-1,c.push(N.x,N.y,N.z),d.push(F/E),d.push(1-O/C),W+=1}}for(let O=0;O<C;O++)for(let I=0;I<E;I++){const F=h+I+H*O,oe=h+I+H*(O+1),ee=h+(I+1)+H*(O+1),se=h+(I+1)+H*O;l.push(F,oe,se),l.push(oe,ee,se),L+=6}a.addGroup(p,L,M),p+=L,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Lo(n[t]);for(const r in i)e[r]=i[r]}return e}function D1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mx(n){return n.getRenderTarget()===null?n.outputColorSpace:wi}const U1={clone:Lo,merge:Jt};var I1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I1,this.fragmentShader=N1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=D1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _x extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends _x{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class O1 extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new wn(Vs,Gs,e,t);r.layers=this.layers,this.add(r);const s=new wn(Vs,Gs,e,t);s.layers=this.layers,this.add(s);const o=new wn(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new wn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new wn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new wn(Vs,Gs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Wi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class gx extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Co,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F1 extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ls?Fe:us),this.texture=new gx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nl(5,5,5),s=new ys({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Er});s.uniforms.tEquirect.value=t;const o=new ai(r,s),a=t.minFilter;return t.minFilter===za&&(t.minFilter=Bn),new O1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const yf=new G,k1=new G,z1=new ze;class Kr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yf.subVectors(i,t).cross(k1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||z1.getNormalMatrix(e),r=this.coplanarPoint(yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Jd,Hl=new G;class ep{constructor(e=new Kr,t=new Kr,i=new Kr,r=new Kr,s=new Kr,o=new Kr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],f=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+g).normalize(),i[3].setComponents(l-o,h-c,m-x,y-g).normalize(),i[4].setComponents(l-a,h-d,m-_,y-v).normalize(),t===Vi)i[5].setComponents(l+a,h+d,m+_,y+v).normalize();else if(t===Uu)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function B1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class cc extends Or{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],_=[],m=[];for(let f=0;f<c;f++){const g=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-g,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+u*f,y=g+u*(f+1),S=g+1+u*(f+1),T=g+1+u*f;p.push(v,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,G1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
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
#endif`,J1=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
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
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
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
#endif`,kT=`struct PhysicalMaterial {
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
}`,zT=`
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,VT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,XT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,KT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
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
#endif`,ew=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`#ifdef USE_MORPHTARGETS
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
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
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
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ew=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rw=`#ifdef USE_SKINNING
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
#endif`,Cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,jw=`#define DISTANCE
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
}`,Yw=`#define DISTANCE
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Qw=`#include <common>
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
}`,Jw=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,uA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,fA=`#define TOON
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
}`,hA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,_A=`uniform float rotation;
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
}`,gA=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:H1,alphahash_pars_fragment:V1,alphamap_fragment:G1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:j1,aomap_fragment:Y1,aomap_pars_fragment:q1,begin_vertex:$1,beginnormal_vertex:K1,bsdfs:Z1,iridescence_fragment:Q1,bumpmap_pars_fragment:J1,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:cT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:_T,envmap_fragment:gT,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:DT,envmap_vertex:ST,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:TT,fog_pars_fragment:wT,gradientmap_pars_fragment:AT,lightmap_fragment:RT,lightmap_pars_fragment:CT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:bT,lights_pars_begin:LT,lights_toon_fragment:UT,lights_toon_pars_fragment:IT,lights_phong_fragment:NT,lights_phong_pars_fragment:OT,lights_physical_fragment:FT,lights_physical_pars_fragment:kT,lights_fragment_begin:zT,lights_fragment_maps:BT,lights_fragment_end:HT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:WT,logdepthbuf_vertex:XT,map_fragment:jT,map_pars_fragment:YT,map_particle_fragment:qT,map_particle_pars_fragment:$T,metalnessmap_fragment:KT,metalnessmap_pars_fragment:ZT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:fw,opaque_fragment:hw,packing:dw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:_w,dithering_pars_fragment:gw,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:Ew,skinbase_vertex:Tw,skinning_pars_vertex:ww,skinning_vertex:Aw,skinnormal_vertex:Rw,specularmap_fragment:Cw,specularmap_pars_fragment:Pw,tonemapping_fragment:bw,tonemapping_pars_fragment:Lw,transmission_fragment:Dw,transmission_pars_fragment:Uw,uv_pars_fragment:Iw,uv_pars_vertex:Nw,uv_vertex:Ow,worldpos_vertex:Fw,background_vert:kw,background_frag:zw,backgroundCube_vert:Bw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:jw,distanceRGBA_frag:Yw,equirect_vert:qw,equirect_frag:$w,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Qw,meshbasic_frag:Jw,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:uA,meshtoon_vert:cA,meshtoon_frag:fA,points_vert:hA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:_A,sprite_frag:gA},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},_i={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_i.physical={uniforms:Jt([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Vl={r:0,b:0,g:0};function vA(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let g=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),g=!0),n.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),g=!0;break}(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lc)?(c===void 0&&(c=new ai(new nl(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:Lo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Fe,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ai(new cc(2,2),new ys({name:"BackgroundMaterial",uniforms:Lo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(Vl,mx(n)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function xA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(B,H,K,W,L){let N=!1;if(o){const O=_(W,K,H);u!==O&&(u=O,p(u.object)),N=f(B,W,K,L),N&&g(B,W,K,L)}else{const O=H.wireframe===!0;(u.geometry!==W.id||u.program!==K.id||u.wireframe!==O)&&(u.geometry=W.id,u.program=K.id,u.wireframe=O,N=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(N||c)&&(c=!1,C(B,H,K,W),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,H,K){const W=K.wireframe===!0;let L=a[B.id];L===void 0&&(L={},a[B.id]=L);let N=L[H.id];N===void 0&&(N={},L[H.id]=N);let O=N[W];return O===void 0&&(O=m(h()),N[W]=O),O}function m(B){const H=[],K=[],W=[];for(let L=0;L<r;L++)H[L]=0,K[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:W,object:B,attributes:{},index:null}}function f(B,H,K,W){const L=u.attributes,N=H.attributes;let O=0;const I=K.getAttributes();for(const F in I)if(I[F].location>=0){const ee=L[F];let se=N[F];if(se===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;O++}return u.attributesNum!==O||u.index!==W}function g(B,H,K,W){const L={},N=H.attributes;let O=0;const I=K.getAttributes();for(const F in I)if(I[F].location>=0){let ee=N[F];ee===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),L[F]=se,O++}u.attributes=L,u.attributesNum=O,u.index=W}function v(){const B=u.newAttributes;for(let H=0,K=B.length;H<K;H++)B[H]=0}function y(B){S(B,0)}function S(B,H){const K=u.newAttributes,W=u.enabledAttributes,L=u.attributeDivisors;K[B]=1,W[B]===0&&(n.enableVertexAttribArray(B),W[B]=1),L[B]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),L[B]=H)}function T(){const B=u.newAttributes,H=u.enabledAttributes;for(let K=0,W=H.length;K<W;K++)H[K]!==B[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function E(B,H,K,W,L,N,O){O===!0?n.vertexAttribIPointer(B,H,K,L,N):n.vertexAttribPointer(B,H,K,W,L,N)}function C(B,H,K,W){if(i.isWebGL2===!1&&(B.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=W.attributes,N=K.getAttributes(),O=H.defaultAttributeValues;for(const I in N){const F=N[I];if(F.location>=0){let oe=L[I];if(oe===void 0&&(I==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),I==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const ee=oe.normalized,se=oe.itemSize,fe=t.get(oe);if(fe===void 0)continue;const ye=fe.buffer,ve=fe.type,Ue=fe.bytesPerElement,Je=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||oe.gpuType===Zv);if(oe.isInterleavedBufferAttribute){const be=oe.data,V=be.stride,ft=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Se=0;Se<F.locationSize;Se++)S(F.location+Se,be.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<F.locationSize;Se++)y(F.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Se=0;Se<F.locationSize;Se++)E(F.location+Se,se/F.locationSize,ve,ee,V*Ue,(ft+se/F.locationSize*Se)*Ue,Je)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<F.locationSize;be++)S(F.location+be,oe.meshPerAttribute);B.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<F.locationSize;be++)y(F.location+be);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let be=0;be<F.locationSize;be++)E(F.location+be,se/F.locationSize,ve,ee,se*Ue,se/F.locationSize*be*Ue,Je)}}else if(O!==void 0){const ee=O[I];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(F.location,ee);break;case 3:n.vertexAttrib3fv(F.location,ee);break;case 4:n.vertexAttrib4fv(F.location,ee);break;default:n.vertexAttrib1fv(F.location,ee)}}}}T()}function M(){j();for(const B in a){const H=a[B];for(const K in H){const W=H[K];for(const L in W)x(W[L].object),delete W[L];delete H[K]}delete a[B]}}function w(B){if(a[B.id]===void 0)return;const H=a[B.id];for(const K in H){const W=H[K];for(const L in W)x(W[L].object),delete W[L];delete H[K]}delete a[B.id]}function k(B){for(const H in a){const K=a[H];if(K[B.id]===void 0)continue;const W=K[B.id];for(const L in W)x(W[L].object),delete W[L];delete K[B.id]}}function j(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function yA(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function SA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),S=v&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:T}}function MA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Kr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let S=0;S!==v;++S)y[S]=t[S];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const f=p+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EA(n){let e=new WeakMap;function t(o,a){return a===Lh?o.mapping=Co:a===Dh&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Lh||a===Dh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new F1(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TA extends _x{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,L_=[.125,.215,.35,.446,.526,.582],Jr=20,Sf=new TA,D_=new Ye;let Mf=null;const Zr=(1+Math.sqrt(5))/2,Ws=1/Zr,U_=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Zr,Ws),new G(0,Zr,-Ws),new G(Ws,0,Zr),new G(-Ws,0,Zr),new G(Zr,Ws,0),new G(-Zr,Ws,0)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf),e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Co||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ba,format:oi,colorSpace:wi,depthBuffer:!1},r=N_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wA(s)),this._blurMaterial=AA(s,e,t)}return r}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Sf)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(D_),c.toneMapping=Wi,c.autoClear=!1;const p=new hx({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ai(new nl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(D_),_=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Gl(r,g*v,f>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Co||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=U_[(r-1)%U_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ai(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jr-1),_=s/x,m=isFinite(s)?1+Math.floor(c*_):Jr;m>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const f=[];let g=0;for(let E=0;E<Jr;++E){const C=E/_,M=Math.exp(-C*C/2);f.push(M),E===0?g+=M:E<m&&(g+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],S=3*y*(r>v-so?r-v+so:0),T=4*(this._cubeSize-y);Gl(t,S,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Sf)}}function wA(n){const e=[],t=[],i=[];let r=n;const s=n-so+1+L_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-so?l=L_[o-n+so-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,_=3,m=2,f=1,g=new Float32Array(_*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,C=T>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];g.set(M,_*x*T),v.set(h,m*x*T);const w=[T,T,T,T,T,T];y.set(w,f*x*T)}const S=new Or;S.setAttribute("position",new Mi(g,_)),S.setAttribute("uv",new Mi(v,m)),S.setAttribute("faceIndex",new Mi(y,f)),e.push(S),r>so&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function N_(n,e,t){const i=new xs(n,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AA(n,e,t){const i=new Float32Array(Jr),r=new G(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function O_(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function F_(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function RA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Lh||l===Dh,c=l===Co||l===Po;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new I_(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new I_(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PA(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let v=0,y=g.length;v<y;v+=3){const S=g[v+0],T=g[v+1],E=g[v+2];h.push(S,T,T,E,E,S)}}else{const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const S=v+0,T=v+1,E=v+2;h.push(S,T,T,E,E,S)}}const m=new(ox(h)?px:dx)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function bA(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,x){if(x===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,h*l,x),t.update(p,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function LA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function DA(n,e){return n[0]-e[0]}function UA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function IA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let H=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),S===!0&&(M=3);let w=c.attributes.position.count*M,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const j=new Float32Array(w*k*4*_),U=new ux(j,w,k,_);U.type=cr,U.needsUpdate=!0;const B=M*4;for(let K=0;K<_;K++){const W=T[K],L=E[K],N=C[K],O=w*k*4*K;for(let I=0;I<W.count;I++){const F=I*B;v===!0&&(o.fromBufferAttribute(W,I),j[O+F+0]=o.x,j[O+F+1]=o.y,j[O+F+2]=o.z,j[O+F+3]=0),y===!0&&(o.fromBufferAttribute(L,I),j[O+F+4]=o.x,j[O+F+5]=o.y,j[O+F+6]=o.z,j[O+F+7]=0),S===!0&&(o.fromBufferAttribute(N,I),j[O+F+8]=o.x,j[O+F+9]=o.y,j[O+F+10]=o.z,j[O+F+11]=N.itemSize===4?o.w:1)}}m={count:_,texture:U,size:new ke(w,k)},s.set(c,m),c.addEventListener("dispose",H)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const g=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<x;y++){const S=_[y];S[0]=y,S[1]=h[y]}_.sort(UA);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(DA);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const S=a[y],T=S[0],E=S[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=E,g+=E):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function NA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const xx=new Pn,yx=new ux,Sx=new y1,Mx=new gx,k_=[],z_=[],B_=new Float32Array(16),H_=new Float32Array(9),V_=new Float32Array(4);function Bo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=k_[r];if(s===void 0&&(s=new Float32Array(r),k_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fc(n,e){let t=z_[e];t===void 0&&(t=new Int32Array(e),z_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function zA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function BA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;V_.set(i),n.uniformMatrix2fv(this.addr,!1,V_),Pt(t,i)}}function HA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;H_.set(i),n.uniformMatrix3fv(this.addr,!1,H_),Pt(t,i)}}function VA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;B_.set(i),n.uniformMatrix4fv(this.addr,!1,B_),Pt(t,i)}}function GA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function YA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||xx,r)}function QA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sx,r)}function JA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mx,r)}function eR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yx,r)}function tR(n){switch(n){case 5126:return OA;case 35664:return FA;case 35665:return kA;case 35666:return zA;case 35674:return BA;case 35675:return HA;case 35676:return VA;case 5124:case 35670:return GA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return jA;case 5125:return YA;case 36294:return qA;case 36295:return $A;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return eR}}function nR(n,e){n.uniform1fv(this.addr,e)}function iR(n,e){const t=Bo(e,this.size,2);n.uniform2fv(this.addr,t)}function rR(n,e){const t=Bo(e,this.size,3);n.uniform3fv(this.addr,t)}function sR(n,e){const t=Bo(e,this.size,4);n.uniform4fv(this.addr,t)}function oR(n,e){const t=Bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aR(n,e){const t=Bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lR(n,e){const t=Bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uR(n,e){n.uniform1iv(this.addr,e)}function cR(n,e){n.uniform2iv(this.addr,e)}function fR(n,e){n.uniform3iv(this.addr,e)}function hR(n,e){n.uniform4iv(this.addr,e)}function dR(n,e){n.uniform1uiv(this.addr,e)}function pR(n,e){n.uniform2uiv(this.addr,e)}function mR(n,e){n.uniform3uiv(this.addr,e)}function _R(n,e){n.uniform4uiv(this.addr,e)}function gR(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xx,s[o])}function vR(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sx,s[o])}function xR(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Mx,s[o])}function yR(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yx,s[o])}function SR(n){switch(n){case 5126:return nR;case 35664:return iR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return aR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}class MR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=tR(t.type)}}class ER{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=SR(t.type)}}class TR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function G_(n,e){n.seq.push(e),n.map[e.id]=e}function wR(n,e,t){const i=n.name,r=i.length;for(Ef.lastIndex=0;;){const s=Ef.exec(i),o=Ef.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){G_(t,u===void 0?new MR(a,n,e):new ER(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new TR(a),G_(t,d)),t=d}}}class ru{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);wR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function W_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let AR=0;function RR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function CR(n){switch(n){case wi:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function X_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RR(n.getShaderSource(e),o)}else return r}function PR(n,e){const t=CR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bR(n,e){let t;switch(e){case kE:t="Linear";break;case zE:t="Reinhard";break;case BE:t="OptimizedCineon";break;case HE:t="ACESFilmic";break;case VE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sa).join(`
`)}function DR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function UR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sa(n){return n!==""}function j_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(IR,OR)}const NR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function OR(n,e){let t=Oe[e];if(t===void 0){const i=NR.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}const FR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(n){return n.replace(FR,kR)}function kR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_E?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function BR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Co:case Po:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function VR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case OE:e="ENVMAP_BLENDING_MIX";break;case FE:e="ENVMAP_BLENDING_ADD";break}return e}function GR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zR(t),u=BR(t),c=HR(t),d=VR(t),h=GR(t),p=t.isWebGL2?"":LR(t),x=DR(s),_=r.createProgram();let m,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(sa).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(sa).join(`
`),f.length>0&&(f+=`
`)):(m=[$_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),f=[p,$_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Wi?bR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,PR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=Fh(o),o=j_(o,t),o=Y_(o,t),a=Fh(a),a=j_(a,t),a=Y_(a,t),o=q_(o),a=q_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+o,y=g+f+a,S=W_(r,r.VERTEX_SHADER,v),T=W_(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,S),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(S).trim(),k=r.getShaderInfoLog(T).trim();let j=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,T);else{const B=X_(r,S,"vertex"),H=X_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||k==="")&&(U=!1);U&&(this.diagnostics={runnable:j,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(S),r.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new ru(r,_)),E};let C;return this.getAttributes=function(){return C===void 0&&(C=UR(r,_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let XR=0;class jR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YR(e),t.set(e,i)),i}}class YR{constructor(e){this.id=XR++,this.code=e,this.usedTimes=0}}function qR(n,e,t,i,r,s,o){const a=new cx,l=new jR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,k,j,U){const B=j.fog,H=U.geometry,K=M.isMeshStandardMaterial?j.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),L=W&&W.mapping===lc?W.image.height:null,N=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,I=O!==void 0?O.length:0;let F=0;H.morphAttributes.position!==void 0&&(F=1),H.morphAttributes.normal!==void 0&&(F=2),H.morphAttributes.color!==void 0&&(F=3);let oe,ee,se,fe;if(N){const hi=_i[N];oe=hi.vertexShader,ee=hi.fragmentShader}else oe=M.vertexShader,ee=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ye=n.getRenderTarget(),ve=U.isInstancedMesh===!0,Ue=!!M.map,Je=!!M.matcap,be=!!W,V=!!M.aoMap,ft=!!M.lightMap,Se=!!M.bumpMap,we=!!M.normalMap,Me=!!M.displacementMap,qe=!!M.emissiveMap,Ie=!!M.metalnessMap,Re=!!M.roughnessMap,Ve=M.anisotropy>0,rt=M.clearcoat>0,ht=M.iridescence>0,P=M.sheen>0,A=M.transmission>0,$=Ve&&!!M.anisotropyMap,re=rt&&!!M.clearcoatMap,ie=rt&&!!M.clearcoatNormalMap,b=rt&&!!M.clearcoatRoughnessMap,J=ht&&!!M.iridescenceMap,te=ht&&!!M.iridescenceThicknessMap,Y=P&&!!M.sheenColorMap,pe=P&&!!M.sheenRoughnessMap,xe=!!M.specularMap,ge=!!M.specularColorMap,me=!!M.specularIntensityMap,de=A&&!!M.transmissionMap,Ee=A&&!!M.thicknessMap,Le=!!M.gradientMap,D=!!M.alphaMap,le=M.alphaTest>0,q=!!M.alphaHash,ae=!!M.extensions,ce=!!H.attributes.uv1,je=!!H.attributes.uv2,st=!!H.attributes.uv3;return{isWebGL2:c,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:ee,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ve,instancingColor:ve&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:wi,map:Ue,matcap:Je,envMap:be,envMapMode:be&&W.mapping,envMapCubeUVHeight:L,aoMap:V,lightMap:ft,bumpMap:Se,normalMap:we,displacementMap:h&&Me,emissiveMap:qe,normalMapObjectSpace:we&&M.normalMapType===t1,normalMapTangentSpace:we&&M.normalMapType===rx,metalnessMap:Ie,roughnessMap:Re,anisotropy:Ve,anisotropyMap:$,clearcoat:rt,clearcoatMap:re,clearcoatNormalMap:ie,clearcoatRoughnessMap:b,iridescence:ht,iridescenceMap:J,iridescenceThicknessMap:te,sheen:P,sheenColorMap:Y,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:ge,specularIntensityMap:me,transmission:A,transmissionMap:de,thicknessMap:Ee,gradientMap:Le,opaque:M.transparent===!1&&M.blending===mo,alphaMap:D,alphaTest:le,alphaHash:q,combine:M.combine,mapUv:Ue&&_(M.map.channel),aoMapUv:V&&_(M.aoMap.channel),lightMapUv:ft&&_(M.lightMap.channel),bumpMapUv:Se&&_(M.bumpMap.channel),normalMapUv:we&&_(M.normalMap.channel),displacementMapUv:Me&&_(M.displacementMap.channel),emissiveMapUv:qe&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:Re&&_(M.roughnessMap.channel),anisotropyMapUv:$&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(M.sheenRoughnessMap.channel),specularMapUv:xe&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:me&&_(M.specularIntensityMap.channel),transmissionMapUv:de&&_(M.transmissionMap.channel),thicknessMapUv:Ee&&_(M.thicknessMap.channel),alphaMapUv:D&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(we||Ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:je,vertexUv3s:st,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ue||D),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:F,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Wi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zi,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)w.push(k),w.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(g(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function g(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const w=x[M.type];let k;if(w){const j=_i[w];k=U1.clone(j.uniforms)}else k=M.uniforms;return k}function S(M,w){let k;for(let j=0,U=u.length;j<U;j++){const B=u[j];if(B.cacheKey===w){k=B,++k.usedTimes;break}}return k===void 0&&(k=new WR(n,w,M,s),u.push(k)),k}function T(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function $R(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function KR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function K_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||KR),i.length>1&&i.sort(h||K_),r.length>1&&r.sort(h||K_)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ZR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Z_,n.set(i,[o])):r>=s.length?(o=new Z_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ye};break;case"SpotLight":t={position:new G,direction:new G,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function JR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eC=0;function tC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nC(n,e){const t=new QR,i=JR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new Rt,a=new Rt;function l(c,d){let h=0,p=0,x=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let _=0,m=0,f=0,g=0,v=0,y=0,S=0,T=0,E=0,C=0;c.sort(tC);const M=d===!0?Math.PI:1;for(let k=0,j=c.length;k<j;k++){const U=c[k],B=U.color,H=U.intensity,K=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*H*M,p+=B.g*H*M,x+=B.b*H*M;else if(U.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(U.sh.coefficients[L],H);else if(U.isDirectionalLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const N=U.shadow,O=i.get(U);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,r.directionalShadow[_]=O,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=U.shadow.matrix,y++}r.directional[_]=L,_++}else if(U.isSpotLight){const L=t.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(B).multiplyScalar(H*M),L.distance=K,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,r.spot[f]=L;const N=U.shadow;if(U.map&&(r.spotLightMap[E]=U.map,E++,N.updateMatrices(U),U.castShadow&&C++),r.spotLightMatrix[f]=N.matrix,U.castShadow){const O=i.get(U);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,r.spotShadow[f]=O,r.spotShadowMap[f]=W,T++}f++}else if(U.isRectAreaLight){const L=t.get(U);L.color.copy(B).multiplyScalar(H),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),r.rectArea[g]=L,g++}else if(U.isPointLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*M),L.distance=U.distance,L.decay=U.decay,U.castShadow){const N=U.shadow,O=i.get(U);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=L,m++}else if(U.isHemisphereLight){const L=t.get(U);L.skyColor.copy(U.color).multiplyScalar(H*M),L.groundColor.copy(U.groundColor).multiplyScalar(H*M),r.hemi[v]=L,v++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==g||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==T||w.numSpotMaps!==E)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+E-C,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=C,w.directionalLength=_,w.pointLength=m,w.spotLength=f,w.rectAreaLength=g,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=T,w.numSpotMaps=E,r.version=eC++)}function u(c,d){let h=0,p=0,x=0,_=0,m=0;const f=d.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(y.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Q_(n,e){const t=new nC(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function iC(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Q_(n,e),t.set(s,[l])):o>=a.length?(l=new Q_(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class rC extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sC extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aC=`uniform sampler2D shadow_pass;
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
}`;function lC(n,e,t){let i=new ep;const r=new ke,s=new ke,o=new It,a=new rC({depthPacking:e1}),l=new sC,u={},c=t.maxTextureSize,d={[Pr]:dn,[dn]:Pr,[zi]:zi},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:oC,fragmentShader:aC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Or;x.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ai(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let f=this.type;this.render=function(S,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Er),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=f!==Ii&&this.type===Ii,U=f===Ii&&this.type!==Ii;for(let B=0,H=S.length;B<H;B++){const K=S[B],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const L=W.getFrameExtents();if(r.multiply(L),s.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,W.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,W.mapSize.y=s.y)),W.map===null||j===!0||U===!0){const O=this.type!==Ii?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new xs(r.x,r.y,O),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const N=W.getViewportCount();for(let O=0;O<N;O++){const I=W.getViewport(O);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),k.viewport(o),W.updateMatrices(K,O),i=W.getFrustum(),y(T,E,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Ii&&g(W,E),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(C,M,w)};function g(S,T){const E=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xs(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,E,h,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,E,p,_,null)}function v(S,T,E,C){let M=null;const w=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)M=w;else if(M=E.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=M.uuid,j=T.uuid;let U=u[k];U===void 0&&(U={},u[k]=U);let B=U[j];B===void 0&&(B=M.clone(),U[j]=B),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,C===Ii?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=E}return M}function y(S,T,E,C,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ii)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const j=e.update(S),U=S.material;if(Array.isArray(U)){const B=j.groups;for(let H=0,K=B.length;H<K;H++){const W=B[H],L=U[W.materialIndex];if(L&&L.visible){const N=v(S,L,C,M);n.renderBufferDirect(E,null,j,N,S,W)}}}else if(U.visible){const B=v(S,U,C,M);n.renderBufferDirect(E,null,j,B,S,null)}}const k=S.children;for(let j=0,U=k.length;j<U;j++)y(k[j],T,E,C,M)}}function uC(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const le=new It;let q=null;const ae=new It(0,0,0,0);return{setMask:function(ce){q!==ce&&!D&&(n.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){D=ce},setClear:function(ce,je,st,bt,hi){hi===!0&&(ce*=bt,je*=bt,st*=bt),le.set(ce,je,st,bt),ae.equals(le)===!1&&(n.clearColor(ce,je,st,bt),ae.copy(le))},reset:function(){D=!1,q=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,le=null,q=null,ae=null;return{setTest:function(ce){ce?ye(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ce){le!==ce&&!D&&(n.depthMask(ce),le=ce)},setFunc:function(ce){if(q!==ce){switch(ce){case PE:n.depthFunc(n.NEVER);break;case bE:n.depthFunc(n.ALWAYS);break;case LE:n.depthFunc(n.LESS);break;case bh:n.depthFunc(n.LEQUAL);break;case DE:n.depthFunc(n.EQUAL);break;case UE:n.depthFunc(n.GEQUAL);break;case IE:n.depthFunc(n.GREATER);break;case NE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ae!==ce&&(n.clearDepth(ce),ae=ce)},reset:function(){D=!1,le=null,q=null,ae=null}}}function o(){let D=!1,le=null,q=null,ae=null,ce=null,je=null,st=null,bt=null,hi=null;return{setTest:function(dt){D||(dt?ye(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(dt){le!==dt&&!D&&(n.stencilMask(dt),le=dt)},setFunc:function(dt,di,Zt){(q!==dt||ae!==di||ce!==Zt)&&(n.stencilFunc(dt,di,Zt),q=dt,ae=di,ce=Zt)},setOp:function(dt,di,Zt){(je!==dt||st!==di||bt!==Zt)&&(n.stencilOp(dt,di,Zt),je=dt,st=di,bt=Zt)},setLocked:function(dt){D=dt},setClear:function(dt){hi!==dt&&(n.clearStencil(dt),hi=dt)},reset:function(){D=!1,le=null,q=null,ae=null,ce=null,je=null,st=null,bt=null,hi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,S=null,T=null,E=null,C=null,M=!1,w=null,k=null,j=null,U=null,B=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=W>=2);let N=null,O={};const I=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),oe=new It().fromArray(I),ee=new It().fromArray(F);function se(D,le,q,ae){const ce=new Uint8Array(4),je=n.createTexture();n.bindTexture(D,je),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<q;st++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(le+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return je}const fe={};fe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(n.DEPTH_TEST),l.setFunc(bh),Me(!1),qe(Fm),ye(n.CULL_FACE),Se(Er);function ye(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ve(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ue(D,le){return p[D]!==le?(n.bindFramebuffer(D,le),p[D]=le,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function Je(D,le){let q=_,ae=!1;if(D)if(q=x.get(le),q===void 0&&(q=[],x.set(le,q)),D.isWebGLMultipleRenderTargets){const ce=D.texture;if(q.length!==ce.length||q[0]!==n.COLOR_ATTACHMENT0){for(let je=0,st=ce.length;je<st;je++)q[je]=n.COLOR_ATTACHMENT0+je;q.length=ce.length,ae=!0}}else q[0]!==n.COLOR_ATTACHMENT0&&(q[0]=n.COLOR_ATTACHMENT0,ae=!0);else q[0]!==n.BACK&&(q[0]=n.BACK,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function be(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const V={[js]:n.FUNC_ADD,[vE]:n.FUNC_SUBTRACT,[xE]:n.FUNC_REVERSE_SUBTRACT};if(i)V[Hm]=n.MIN,V[Vm]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(V[Hm]=D.MIN_EXT,V[Vm]=D.MAX_EXT)}const ft={[yE]:n.ZERO,[SE]:n.ONE,[ME]:n.SRC_COLOR,[qv]:n.SRC_ALPHA,[CE]:n.SRC_ALPHA_SATURATE,[AE]:n.DST_COLOR,[TE]:n.DST_ALPHA,[EE]:n.ONE_MINUS_SRC_COLOR,[$v]:n.ONE_MINUS_SRC_ALPHA,[RE]:n.ONE_MINUS_DST_COLOR,[wE]:n.ONE_MINUS_DST_ALPHA};function Se(D,le,q,ae,ce,je,st,bt){if(D===Er){f===!0&&(ve(n.BLEND),f=!1);return}if(f===!1&&(ye(n.BLEND),f=!0),D!==gE){if(D!==g||bt!==M){if((v!==js||T!==js)&&(n.blendEquation(n.FUNC_ADD),v=js,T=js),bt)switch(D){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.ONE,n.ONE);break;case zm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,S=null,E=null,C=null,g=D,M=bt}return}ce=ce||le,je=je||q,st=st||ae,(le!==v||ce!==T)&&(n.blendEquationSeparate(V[le],V[ce]),v=le,T=ce),(q!==y||ae!==S||je!==E||st!==C)&&(n.blendFuncSeparate(ft[q],ft[ae],ft[je],ft[st]),y=q,S=ae,E=je,C=st),g=D,M=!1}function we(D,le){D.side===zi?ve(n.CULL_FACE):ye(n.CULL_FACE);let q=D.side===dn;le&&(q=!q),Me(q),D.blending===mo&&D.transparent===!1?Se(Er):Se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;u.setTest(ae),ae&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function qe(D){D!==pE?(ye(n.CULL_FACE),D!==k&&(D===Fm?n.cullFace(n.BACK):D===mE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),k=D}function Ie(D){D!==j&&(K&&n.lineWidth(D),j=D)}function Re(D,le,q){D?(ye(n.POLYGON_OFFSET_FILL),(U!==le||B!==q)&&(n.polygonOffset(le,q),U=le,B=q)):ve(n.POLYGON_OFFSET_FILL)}function Ve(D){D?ye(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function rt(D){D===void 0&&(D=n.TEXTURE0+H-1),N!==D&&(n.activeTexture(D),N=D)}function ht(D,le,q){q===void 0&&(N===null?q=n.TEXTURE0+H-1:q=N);let ae=O[q];ae===void 0&&(ae={type:void 0,texture:void 0},O[q]=ae),(ae.type!==D||ae.texture!==le)&&(N!==q&&(n.activeTexture(q),N=q),n.bindTexture(D,le||fe[D]),ae.type=D,ae.texture=le)}function P(){const D=O[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function A(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function b(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){oe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function me(D){ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function de(D,le){let q=d.get(le);q===void 0&&(q=new WeakMap,d.set(le,q));let ae=q.get(D);ae===void 0&&(ae=n.getUniformBlockIndex(le,D.name),q.set(D,ae))}function Ee(D,le){const ae=d.get(le).get(D);c.get(le)!==ae&&(n.uniformBlockBinding(le,ae,D.__bindingPointIndex),c.set(le,ae))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,O={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,S=null,T=null,E=null,C=null,M=!1,w=null,k=null,j=null,U=null,B=null,oe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ye,disable:ve,bindFramebuffer:Ue,drawBuffers:Je,useProgram:be,setBlending:Se,setMaterial:we,setFlipSided:Me,setCullFace:qe,setLineWidth:Ie,setPolygonOffset:Re,setScissorTest:Ve,activeTexture:rt,bindTexture:ht,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:pe,texImage3D:xe,updateUBOMapping:de,uniformBlockBinding:Ee,texStorage2D:te,texStorage3D:Y,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:b,compressedTexSubImage3D:J,scissor:ge,viewport:me,reset:Le}}function cC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return f?new OffscreenCanvas(P,A):Nu("canvas")}function v(P,A,$,re){let ie=1;if((P.width>re||P.height>re)&&(ie=re/Math.max(P.width,P.height)),ie<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const b=A?Oh:Math.floor,J=b(ie*P.width),te=b(ie*P.height);_===void 0&&(_=g(J,te));const Y=$?g(J,te):_;return Y.width=J,Y.height=te,Y.getContext("2d").drawImage(P,0,0,J,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+J+"x"+te+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return m_(P.width)&&m_(P.height)}function S(P){return a?!1:P.wrapS!==si||P.wrapT!==si||P.minFilter!==tn&&P.minFilter!==Bn}function T(P,A){return P.generateMipmaps&&A&&P.minFilter!==tn&&P.minFilter!==Bn}function E(P){n.generateMipmap(P)}function C(P,A,$,re,ie=!1){if(a===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let b=A;return A===n.RED&&($===n.FLOAT&&(b=n.R32F),$===n.HALF_FLOAT&&(b=n.R16F),$===n.UNSIGNED_BYTE&&(b=n.R8)),A===n.RG&&($===n.FLOAT&&(b=n.RG32F),$===n.HALF_FLOAT&&(b=n.RG16F),$===n.UNSIGNED_BYTE&&(b=n.RG8)),A===n.RGBA&&($===n.FLOAT&&(b=n.RGBA32F),$===n.HALF_FLOAT&&(b=n.RGBA16F),$===n.UNSIGNED_BYTE&&(b=re===Fe&&ie===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(b=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(b=n.RGB5_A1)),(b===n.R16F||b===n.R32F||b===n.RG16F||b===n.RG32F||b===n.RGBA16F||b===n.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function M(P,A,$){return T(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==Bn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===tn||P===Gm||P===qc?n.NEAREST:n.LINEAR}function k(P){const A=P.target;A.removeEventListener("dispose",k),U(A),A.isVideoTexture&&x.delete(A)}function j(P){const A=P.target;A.removeEventListener("dispose",j),H(A)}function U(P){const A=i.get(P);if(A.__webglInit===void 0)return;const $=P.source,re=m.get($);if(re){const ie=re[A.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(P),Object.keys(re).length===0&&m.delete($)}i.remove(P)}function B(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const $=P.source,re=m.get($);delete re[A.__cacheKey],o.memory.textures--}function H(P){const A=P.texture,$=i.get(P),re=i.get(A);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer($.__webglFramebuffer[ie]),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ie=0;ie<$.__webglColorRenderbuffer.length;ie++)$.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[ie]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ie=0,b=A.length;ie<b;ie++){const J=i.get(A[ie]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(A[ie])}i.remove(A),i.remove(P)}let K=0;function W(){K=0}function L(){const P=K;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),K+=1,P}function N(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function O(P,A){const $=i.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue($,P,A);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function I(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Ue($,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function F(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Ue($,P,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function oe(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Je($,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}const ee={[Uh]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Ih]:n.MIRRORED_REPEAT},se={[tn]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[qc]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[GE]:n.LINEAR_MIPMAP_NEAREST,[za]:n.LINEAR_MIPMAP_LINEAR},fe={[i1]:n.NEVER,[c1]:n.ALWAYS,[r1]:n.LESS,[o1]:n.LEQUAL,[s1]:n.EQUAL,[u1]:n.GEQUAL,[a1]:n.GREATER,[l1]:n.NOTEQUAL};function ye(P,A,$){if($?(n.texParameteri(P,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ee[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==si||A.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==tn&&A.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,fe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===tn||A.minFilter!==qc&&A.minFilter!==za||A.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ba&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function ve(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const re=A.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const b=N(A);if(b!==P.__cacheKey){ie[b]===void 0&&(ie[b]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[b].usedTimes++;const J=ie[P.__cacheKey];J!==void 0&&(ie[P.__cacheKey].usedTimes--,J.usedTimes===0&&B(A)),P.__cacheKey=b,P.__webglTexture=ie[b].texture}return $}function Ue(P,A,$){let re=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=n.TEXTURE_3D);const ie=ve(P,A),b=A.source;t.bindTexture(re,P.__webglTexture,n.TEXTURE0+$);const J=i.get(b);if(b.version!==J.__version||ie===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=S(A)&&y(A.image)===!1;let Y=v(A.image,te,!1,c);Y=ht(A,Y);const pe=y(Y)||a,xe=s.convert(A.format,A.colorSpace);let ge=s.convert(A.type),me=C(A.internalFormat,xe,ge,A.colorSpace);ye(re,A,pe);let de;const Ee=A.mipmaps,Le=a&&A.isVideoTexture!==!0,D=J.__version===void 0||ie===!0,le=M(A,Y,pe);if(A.isDepthTexture)me=n.DEPTH_COMPONENT,a?A.type===cr?me=n.DEPTH_COMPONENT32F:A.type===ur?me=n.DEPTH_COMPONENT24:A.type===os?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:A.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===as&&me===n.DEPTH_COMPONENT&&A.type!==Qd&&A.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ur,ge=s.convert(A.type)),A.format===bo&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,A.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=os,ge=s.convert(A.type))),D&&(Le?t.texStorage2D(n.TEXTURE_2D,1,me,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,me,Y.width,Y.height,0,xe,ge,null));else if(A.isDataTexture)if(Ee.length>0&&pe){Le&&D&&t.texStorage2D(n.TEXTURE_2D,le,me,Ee[0].width,Ee[0].height);for(let q=0,ae=Ee.length;q<ae;q++)de=Ee[q],Le?t.texSubImage2D(n.TEXTURE_2D,q,0,0,de.width,de.height,xe,ge,de.data):t.texImage2D(n.TEXTURE_2D,q,me,de.width,de.height,0,xe,ge,de.data);A.generateMipmaps=!1}else Le?(D&&t.texStorage2D(n.TEXTURE_2D,le,me,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,xe,ge,Y.data)):t.texImage2D(n.TEXTURE_2D,0,me,Y.width,Y.height,0,xe,ge,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Le&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,me,Ee[0].width,Ee[0].height,Y.depth);for(let q=0,ae=Ee.length;q<ae;q++)de=Ee[q],A.format!==oi?xe!==null?Le?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,Y.depth,xe,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,me,de.width,de.height,Y.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,Y.depth,xe,ge,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,me,de.width,de.height,Y.depth,0,xe,ge,de.data)}else{Le&&D&&t.texStorage2D(n.TEXTURE_2D,le,me,Ee[0].width,Ee[0].height);for(let q=0,ae=Ee.length;q<ae;q++)de=Ee[q],A.format!==oi?xe!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,q,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(n.TEXTURE_2D,q,0,0,de.width,de.height,xe,ge,de.data):t.texImage2D(n.TEXTURE_2D,q,me,de.width,de.height,0,xe,ge,de.data)}else if(A.isDataArrayTexture)Le?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,me,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,xe,ge,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,Y.width,Y.height,Y.depth,0,xe,ge,Y.data);else if(A.isData3DTexture)Le?(D&&t.texStorage3D(n.TEXTURE_3D,le,me,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,xe,ge,Y.data)):t.texImage3D(n.TEXTURE_3D,0,me,Y.width,Y.height,Y.depth,0,xe,ge,Y.data);else if(A.isFramebufferTexture){if(D)if(Le)t.texStorage2D(n.TEXTURE_2D,le,me,Y.width,Y.height);else{let q=Y.width,ae=Y.height;for(let ce=0;ce<le;ce++)t.texImage2D(n.TEXTURE_2D,ce,me,q,ae,0,xe,ge,null),q>>=1,ae>>=1}}else if(Ee.length>0&&pe){Le&&D&&t.texStorage2D(n.TEXTURE_2D,le,me,Ee[0].width,Ee[0].height);for(let q=0,ae=Ee.length;q<ae;q++)de=Ee[q],Le?t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe,ge,de):t.texImage2D(n.TEXTURE_2D,q,me,xe,ge,de);A.generateMipmaps=!1}else Le?(D&&t.texStorage2D(n.TEXTURE_2D,le,me,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,ge,Y)):t.texImage2D(n.TEXTURE_2D,0,me,xe,ge,Y);T(A,pe)&&E(re),J.__version=b.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Je(P,A,$){if(A.image.length!==6)return;const re=ve(P,A),ie=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const b=i.get(ie);if(ie.version!==b.__version||re===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const J=A.isCompressedTexture||A.image[0].isCompressedTexture,te=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let q=0;q<6;q++)!J&&!te?Y[q]=v(A.image[q],!1,!0,u):Y[q]=te?A.image[q].image:A.image[q],Y[q]=ht(A,Y[q]);const pe=Y[0],xe=y(pe)||a,ge=s.convert(A.format,A.colorSpace),me=s.convert(A.type),de=C(A.internalFormat,ge,me,A.colorSpace),Ee=a&&A.isVideoTexture!==!0,Le=b.__version===void 0||re===!0;let D=M(A,pe,xe);ye(n.TEXTURE_CUBE_MAP,A,xe);let le;if(J){Ee&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,de,pe.width,pe.height);for(let q=0;q<6;q++){le=Y[q].mipmaps;for(let ae=0;ae<le.length;ae++){const ce=le[ae];A.format!==oi?ge!==null?Ee?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,ce.width,ce.height,ge,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,de,ce.width,ce.height,0,ge,me,ce.data)}}}else{le=A.mipmaps,Ee&&Le&&(le.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,de,Y[0].width,Y[0].height));for(let q=0;q<6;q++)if(te){Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Y[q].width,Y[q].height,ge,me,Y[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,Y[q].width,Y[q].height,0,ge,me,Y[q].data);for(let ae=0;ae<le.length;ae++){const je=le[ae].image[q].image;Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,je.width,je.height,ge,me,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,de,je.width,je.height,0,ge,me,je.data)}}else{Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ge,me,Y[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,ge,me,Y[q]);for(let ae=0;ae<le.length;ae++){const ce=le[ae];Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,ge,me,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,de,ge,me,ce.image[q])}}}T(A,xe)&&E(n.TEXTURE_CUBE_MAP),b.__version=ie.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function be(P,A,$,re,ie){const b=s.convert($.format,$.colorSpace),J=s.convert($.type),te=C($.internalFormat,b,J,$.colorSpace);i.get(A).__hasExternalTextures||(ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,te,A.width,A.height,A.depth,0,b,J,null):t.texImage2D(ie,0,te,A.width,A.height,0,b,J,null)),t.bindFramebuffer(n.FRAMEBUFFER,P),Ve(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ie,i.get($).__webglTexture,0,Re(A)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ie,i.get($).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(P,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let re=n.DEPTH_COMPONENT16;if($||Ve(A)){const ie=A.depthTexture;ie&&ie.isDepthTexture&&(ie.type===cr?re=n.DEPTH_COMPONENT32F:ie.type===ur&&(re=n.DEPTH_COMPONENT24));const b=Re(A);Ve(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b,re,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,b,re,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const re=Re(A);$&&Ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,A.width,A.height):Ve(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const re=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0;ie<re.length;ie++){const b=re[ie],J=s.convert(b.format,b.colorSpace),te=s.convert(b.type),Y=C(b.internalFormat,J,te,b.colorSpace),pe=Re(A);$&&Ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Y,A.width,A.height):Ve(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Y,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Y,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);const re=i.get(A.depthTexture).__webglTexture,ie=Re(A);if(A.depthTexture.format===as)Ve(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(A.depthTexture.format===bo)Ve(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(P){const A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ft(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]=n.createRenderbuffer(),V(A.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),V(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(P,A,$){const re=i.get(P);A!==void 0&&be(re.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),$!==void 0&&Se(P)}function Me(P){const A=P.texture,$=i.get(P),re=i.get(A);P.addEventListener("dispose",j),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=A.version,o.memory.textures++);const ie=P.isWebGLCubeRenderTarget===!0,b=P.isWebGLMultipleRenderTargets===!0,J=y(P)||a;if(ie){$.__webglFramebuffer=[];for(let te=0;te<6;te++)$.__webglFramebuffer[te]=n.createFramebuffer()}else{if($.__webglFramebuffer=n.createFramebuffer(),b)if(r.drawBuffers){const te=P.texture;for(let Y=0,pe=te.length;Y<pe;Y++){const xe=i.get(te[Y]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ve(P)===!1){const te=b?A:[A];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const pe=te[Y];$.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const xe=s.convert(pe.format,pe.colorSpace),ge=s.convert(pe.type),me=C(pe.internalFormat,xe,ge,pe.colorSpace,P.isXRRenderTarget===!0),de=Re(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,me,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,$.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),V($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ye(n.TEXTURE_CUBE_MAP,A,J);for(let te=0;te<6;te++)be($.__webglFramebuffer[te],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te);T(A,J)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){const te=P.texture;for(let Y=0,pe=te.length;Y<pe;Y++){const xe=te[Y],ge=i.get(xe);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),ye(n.TEXTURE_2D,xe,J),be($.__webglFramebuffer,P,xe,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D),T(xe,J)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),ye(te,A,J),be($.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,te),T(A,J)&&E(te),t.unbindTexture()}P.depthBuffer&&Se(P)}function qe(P){const A=y(P)||a,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,ie=$.length;re<ie;re++){const b=$[re];if(T(b,A)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(b).__webglTexture;t.bindTexture(J,te),E(J),t.unbindTexture()}}}function Ie(P){if(a&&P.samples>0&&Ve(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,re=P.height;let ie=n.COLOR_BUFFER_BIT;const b=[],J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let pe=0;pe<A.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){b.push(n.COLOR_ATTACHMENT0+pe),P.depthBuffer&&b.push(J);const xe=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(xe===!1&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[pe]),xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[J]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[J])),Y){const ge=i.get(A[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,$,re,0,0,$,re,ie,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let pe=0;pe<A.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const xe=i.get(A[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Re(P){return Math.min(d,P.samples)}function Ve(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(P){const A=o.render.frame;x.get(P)!==A&&(x.set(P,A),P.update())}function ht(P,A){const $=P.colorSpace,re=P.format,ie=P.type;return P.isCompressedTexture===!0||P.format===Nh||$!==wi&&$!==us&&($===Fe?a===!1?e.has("EXT_sRGB")===!0&&re===oi?(P.format=Nh,P.minFilter=Bn,P.generateMipmaps=!1):A=ax.sRGBToLinear(A):(re!==oi||ie!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=oe,this.rebindTextures=we,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve}function fC(n,e,t){const i=t.isWebGL2;function r(s,o=us){let a;if(s===Tr)return n.UNSIGNED_BYTE;if(s===Qv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Jv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===WE)return n.BYTE;if(s===XE)return n.SHORT;if(s===Qd)return n.UNSIGNED_SHORT;if(s===Zv)return n.INT;if(s===ur)return n.UNSIGNED_INT;if(s===cr)return n.FLOAT;if(s===Ba)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jE)return n.ALPHA;if(s===oi)return n.RGBA;if(s===YE)return n.LUMINANCE;if(s===qE)return n.LUMINANCE_ALPHA;if(s===as)return n.DEPTH_COMPONENT;if(s===bo)return n.DEPTH_STENCIL;if(s===Nh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$E)return n.RED;if(s===ex)return n.RED_INTEGER;if(s===KE)return n.RG;if(s===tx)return n.RG_INTEGER;if(s===nx)return n.RGBA_INTEGER;if(s===$c||s===Kc||s===Zc||s===Qc)if(o===Fe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wm||s===Xm||s===jm||s===Ym)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ym)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ZE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qm||s===$m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qm)return o===Fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$m)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Km||s===Zm||s===Qm||s===Jm||s===e_||s===t_||s===n_||s===i_||s===r_||s===s_||s===o_||s===a_||s===l_||s===u_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Km)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zm)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qm)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jm)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===e_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===t_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===n_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===i_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===r_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===s_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===o_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===a_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===l_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===u_)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jc)return o===Fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===QE||s===c_||s===f_||s===h_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===c_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===f_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===h_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===os?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class hC extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oa extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dC={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pC extends Pn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:as,c!==as&&c!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===as&&(i=ur),i===void 0&&c===bo&&(i=os),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mC extends Ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const _=t.getContextAttributes();let m=null,f=null;const g=[],v=[],y=new wn;y.layers.enable(1),y.viewport=new It;const S=new wn;S.layers.enable(2),S.viewport=new It;const T=[y,S],E=new hC;E.layers.enable(1),E.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=g[I];return F===void 0&&(F=new Tf,g[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=g[I];return F===void 0&&(F=new Tf,g[I]=F),F.getGripSpace()},this.getHand=function(I){let F=g[I];return F===void 0&&(F=new Tf,g[I]=F),F.getHandSpace()};function w(I){const F=v.indexOf(I.inputSource);if(F===-1)return;const oe=g[F];oe!==void 0&&(oe.update(I.inputSource,I.frame,u||o),oe.dispatchEvent({type:I.type,data:I.inputSource}))}function k(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let I=0;I<g.length;I++){const F=v[I];F!==null&&(v[I]=null,g[I].disconnect(F))}C=null,M=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,O.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:p}),f=new xs(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Tr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let F=null,oe=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=_.stencil?bo:as,oe=_.stencil?os:ur);const se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(se),r.updateRenderState({layers:[h]}),f=new xs(h.textureWidth,h.textureHeight,{format:oi,type:Tr,depthTexture:new pC(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const fe=e.properties.get(f);fe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(I){for(let F=0;F<I.removed.length;F++){const oe=I.removed[F],ee=v.indexOf(oe);ee>=0&&(v[ee]=null,g[ee].disconnect(oe))}for(let F=0;F<I.added.length;F++){const oe=I.added[F];let ee=v.indexOf(oe);if(ee===-1){for(let fe=0;fe<g.length;fe++)if(fe>=v.length){v.push(oe),ee=fe;break}else if(v[fe]===null){v[fe]=oe,ee=fe;break}if(ee===-1)break}const se=g[ee];se&&se.connect(oe)}}const U=new G,B=new G;function H(I,F,oe){U.setFromMatrixPosition(F.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const ee=U.distanceTo(B),se=F.projectionMatrix.elements,fe=oe.projectionMatrix.elements,ye=se[14]/(se[10]-1),ve=se[14]/(se[10]+1),Ue=(se[9]+1)/se[5],Je=(se[9]-1)/se[5],be=(se[8]-1)/se[0],V=(fe[8]+1)/fe[0],ft=ye*be,Se=ye*V,we=ee/(-be+V),Me=we*-be;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Me),I.translateZ(we),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const qe=ye+we,Ie=ve+we,Re=ft-Me,Ve=Se+(ee-Me),rt=Ue*ve/Ie*qe,ht=Je*ve/Ie*qe;I.projectionMatrix.makePerspective(Re,Ve,rt,ht,qe,Ie),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function K(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;E.near=S.near=y.near=I.near,E.far=S.far=y.far=I.far,(C!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,M=E.far);const F=I.parent,oe=E.cameras;K(E,F);for(let ee=0;ee<oe.length;ee++)K(oe[ee],F);oe.length===2?H(E,y,S):E.projectionMatrix.copy(y.projectionMatrix),W(I,E,F)};function W(I,F,oe){oe===null?I.matrix.copy(F.matrixWorld):(I.matrix.copy(oe.matrixWorld),I.matrix.invert(),I.matrix.multiply(F.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const ee=I.children;for(let se=0,fe=ee.length;se<fe;se++)ee[se].updateMatrixWorld(!0);I.projectionMatrix.copy(F.projectionMatrix),I.projectionMatrixInverse.copy(F.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Iu*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let L=null;function N(I,F){if(c=F.getViewerPose(u||o),x=F,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ee=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ee=!0);for(let se=0;se<oe.length;se++){const fe=oe[se];let ye=null;if(p!==null)ye=p.getViewport(fe);else{const Ue=d.getViewSubImage(h,fe);ye=Ue.viewport,se===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let ve=T[se];ve===void 0&&(ve=new wn,ve.layers.enable(se),ve.viewport=new It,T[se]=ve),ve.matrix.fromArray(fe.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(fe.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(ye.x,ye.y,ye.width,ye.height),se===0&&(E.matrix.copy(ve.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ee===!0&&E.cameras.push(ve)}}for(let oe=0;oe<g.length;oe++){const ee=v[oe],se=g[oe];ee!==null&&se!==void 0&&se.update(ee,F,u||o)}L&&L(I,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const O=new vx;O.setAnimationLoop(N),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}}function _C(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(x(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",m));const S=v.program;i.updateUBOMapping(g,S);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function c(g){const v=d();g.__bindingPointIndex=v;const y=n.createBuffer(),S=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,S=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,E=y.length;T<E;T++){const C=y[T];if(p(C,T,S)===!0){const M=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let j=0;j<w.length;j++){const U=w[j],B=_(U);typeof U=="number"?(C.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,M+k,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=U.elements[0],C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=U.elements[0],C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=U.elements[0]):(U.toArray(C.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,C.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,y){const S=g.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const T=Array.isArray(S)?S:[S],E=[];for(let C=0;C<T.length;C++)E.push(T[C].clone());y[v]=E}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],E=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const M=T[C];if(M.equals(E[C])===!1)return M.copy(E[C]),!0}}return!1}function x(g){const v=g.uniforms;let y=0;const S=16;let T=0;for(let E=0,C=v.length;E<C;E++){const M=v[E],w={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let j=0,U=k.length;j<U;j++){const B=k[j],H=_(B);w.boundary+=H.boundary,w.storage+=H.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,E>0){T=y%S;const j=S-T;T!==0&&j-w.boundary<0&&(y+=S-T,M.__offset=y)}y+=w.storage}return T=y%S,T>0&&(y+=S-T),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function vC(){const n=Nu("canvas");return n.style.display="block",n}class Ex{constructor(e={}){const{canvas:t=vC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let y=!1,S=0,T=0,E=null,C=-1,M=null;const w=new It,k=new It;let j=null;const U=new Ye(0);let B=0,H=t.width,K=t.height,W=1,L=null,N=null;const O=new It(0,0,H,K),I=new It(0,0,H,K);let F=!1;const oe=new ep;let ee=!1,se=!1,fe=null;const ye=new Rt,ve=new ke,Ue=new G,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return E===null?W:1}let V=i;function ft(R,X){for(let Z=0;Z<R.length;Z++){const z=R[Z],Q=t.getContext(z,X);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ae,!1),V===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),V=ft(X,R),V===null)throw ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Se,we,Me,qe,Ie,Re,Ve,rt,ht,P,A,$,re,ie,b,J,te,Y,pe,xe,ge,me,de,Ee;function Le(){Se=new CA(V),we=new SA(V,Se,e),Se.init(we),me=new fC(V,Se,we),Me=new uC(V,Se,we),qe=new LA(V),Ie=new $R,Re=new cC(V,Se,Me,Ie,we,me,qe),Ve=new EA(v),rt=new RA(v),ht=new B1(V,we),de=new xA(V,Se,ht,we),P=new PA(V,ht,qe,de),A=new NA(V,P,ht,qe),pe=new IA(V,we,Re),J=new MA(Ie),$=new qR(v,Ve,rt,Se,we,de,J),re=new _C(v,Ie),ie=new ZR,b=new iC(Se,we),Y=new vA(v,Ve,rt,Me,A,h,l),te=new lC(v,A,we),Ee=new gC(V,qe,we,Me),xe=new yA(V,Se,qe,we),ge=new bA(V,Se,qe,we),qe.programs=$.programs,v.capabilities=we,v.extensions=Se,v.properties=Ie,v.renderLists=ie,v.shadowMap=te,v.state=Me,v.info=qe}Le();const D=new mC(v,V);this.xr=D,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(H,K,!1))},this.getSize=function(R){return R.set(H,K)},this.setSize=function(R,X,Z=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,K=X,t.width=Math.floor(R*W),t.height=Math.floor(X*W),Z===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(H*W,K*W).floor()},this.setDrawingBufferSize=function(R,X,Z){H=R,K=X,W=Z,t.width=Math.floor(R*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,X,Z,z){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,X,Z,z),Me.viewport(w.copy(O).multiplyScalar(W).floor())},this.getScissor=function(R){return R.copy(I)},this.setScissor=function(R,X,Z,z){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,X,Z,z),Me.scissor(k.copy(I).multiplyScalar(W).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(R){Me.setScissorTest(F=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(R=!0,X=!0,Z=!0){let z=0;if(R){let Q=!1;if(E!==null){const _e=E.texture.format;Q=_e===nx||_e===tx||_e===ex}if(Q){const _e=E.texture.type,Te=_e===Tr||_e===ur||_e===Qd||_e===os||_e===Qv||_e===Jv,Ce=Y.getClearColor(),Pe=Y.getClearAlpha(),Be=Ce.r,De=Ce.g,Ne=Ce.b;Te?(p[0]=Be,p[1]=De,p[2]=Ne,p[3]=Pe,V.clearBufferuiv(V.COLOR,0,p)):(x[0]=Be,x[1]=De,x[2]=Ne,x[3]=Pe,V.clearBufferiv(V.COLOR,0,x))}else z|=V.COLOR_BUFFER_BIT}X&&(z|=V.DEPTH_BUFFER_BIT),Z&&(z|=V.STENCIL_BUFFER_BIT),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ie.dispose(),b.dispose(),Ie.dispose(),Ve.dispose(),rt.dispose(),A.dispose(),de.dispose(),Ee.dispose(),$.dispose(),D.dispose(),D.removeEventListener("sessionstart",dt),D.removeEventListener("sessionend",di),fe&&(fe.dispose(),fe=null),Zt.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=qe.autoReset,X=te.enabled,Z=te.autoUpdate,z=te.needsUpdate,Q=te.type;Le(),qe.autoReset=R,te.enabled=X,te.autoUpdate=Z,te.needsUpdate=z,te.type=Q}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const X=R.target;X.removeEventListener("dispose",ce),je(X)}function je(R){st(R),Ie.remove(R)}function st(R){const X=Ie.get(R).programs;X!==void 0&&(X.forEach(function(Z){$.releaseProgram(Z)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,Z,z,Q,_e){X===null&&(X=Je);const Te=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=Oy(R,X,Z,z,Q);Me.setMaterial(z,Te);let Pe=Z.index,Be=1;z.wireframe===!0&&(Pe=P.getWireframeAttribute(Z),Be=2);const De=Z.drawRange,Ne=Z.attributes.position;let pt=De.start*Be,vt=(De.start+De.count)*Be;_e!==null&&(pt=Math.max(pt,_e.start*Be),vt=Math.min(vt,(_e.start+_e.count)*Be)),Pe!==null?(pt=Math.max(pt,0),vt=Math.min(vt,Pe.count)):Ne!=null&&(pt=Math.max(pt,0),vt=Math.min(vt,Ne.count));const $n=vt-pt;if($n<0||$n===1/0)return;de.setup(Q,z,Ce,Z,Pe);let Ri,St=xe;if(Pe!==null&&(Ri=ht.get(Pe),St=ge,St.setIndex(Ri)),Q.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*be()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Q.isLine){let We=z.linewidth;We===void 0&&(We=1),Me.setLineWidth(We*be()),Q.isLineSegments?St.setMode(V.LINES):Q.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Q.isPoints?St.setMode(V.POINTS):Q.isSprite&&St.setMode(V.TRIANGLES);if(Q.isInstancedMesh)St.renderInstances(pt,$n,Q.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vc=Math.min(Z.instanceCount,We);St.renderInstances(pt,$n,vc)}else St.render(pt,$n)},this.compile=function(R,X){function Z(z,Q,_e){z.transparent===!0&&z.side===zi&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,sl(z,Q,_e),z.side=Pr,z.needsUpdate=!0,sl(z,Q,_e),z.side=zi):sl(z,Q,_e)}m=b.get(R),m.init(),g.push(m),R.traverseVisible(function(z){z.isLight&&z.layers.test(X.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v.useLegacyLights),R.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let _e=0;_e<Q.length;_e++){const Te=Q[_e];Z(Te,R,z)}else Z(Q,R,z)}),g.pop(),m=null};let bt=null;function hi(R){bt&&bt(R)}function dt(){Zt.stop()}function di(){Zt.start()}const Zt=new vx;Zt.setAnimationLoop(hi),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){bt=R,D.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},D.addEventListener("sessionstart",dt),D.addEventListener("sessionend",di),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(X),X=D.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,E),m=b.get(R,g.length),m.init(),g.push(m),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(ye),se=this.localClippingEnabled,ee=J.init(this.clippingPlanes,se),_=ie.get(R,f.length),_.init(),f.push(_),Mp(R,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,N),this.info.render.frame++,ee===!0&&J.beginShadows();const Z=m.state.shadowsArray;if(te.render(Z,R,X),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,R),m.setupLights(v.useLegacyLights),X.isArrayCamera){const z=X.cameras;for(let Q=0,_e=z.length;Q<_e;Q++){const Te=z[Q];Ep(_,R,Te,Te.viewport)}}else Ep(_,R,X);E!==null&&(Re.updateMultisampleRenderTarget(E),Re.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,X),de.resetDefaultState(),C=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Mp(R,X,Z,z){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){z&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Te=A.update(R),Ce=R.material;Ce.visible&&_.push(R,Te,Ce,Z,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const Te=A.update(R),Ce=R.material;if(z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ue.copy(Te.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Ce)){const Pe=Te.groups;for(let Be=0,De=Pe.length;Be<De;Be++){const Ne=Pe[Be],pt=Ce[Ne.materialIndex];pt&&pt.visible&&_.push(R,Te,pt,Z,Ue.z,Ne)}}else Ce.visible&&_.push(R,Te,Ce,Z,Ue.z,null)}}const _e=R.children;for(let Te=0,Ce=_e.length;Te<Ce;Te++)Mp(_e[Te],X,Z,z)}function Ep(R,X,Z,z){const Q=R.opaque,_e=R.transmissive,Te=R.transparent;m.setupLightsView(Z),ee===!0&&J.setGlobalState(v.clippingPlanes,Z),_e.length>0&&Ny(Q,_e,X,Z),z&&Me.viewport(w.copy(z)),Q.length>0&&rl(Q,X,Z),_e.length>0&&rl(_e,X,Z),Te.length>0&&rl(Te,X,Z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ny(R,X,Z,z){const Q=we.isWebGL2;fe===null&&(fe=new xs(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ba:Tr,minFilter:za,samples:Q?4:0})),v.getDrawingBufferSize(ve),Q?fe.setSize(ve.x,ve.y):fe.setSize(Oh(ve.x),Oh(ve.y));const _e=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=Wi,rl(R,Z,z),Re.updateMultisampleRenderTarget(fe),Re.updateRenderTargetMipmap(fe);let Ce=!1;for(let Pe=0,Be=X.length;Pe<Be;Pe++){const De=X[Pe],Ne=De.object,pt=De.geometry,vt=De.material,$n=De.group;if(vt.side===zi&&Ne.layers.test(z.layers)){const Ri=vt.side;vt.side=dn,vt.needsUpdate=!0,Tp(Ne,Z,z,pt,vt,$n),vt.side=Ri,vt.needsUpdate=!0,Ce=!0}}Ce===!0&&(Re.updateMultisampleRenderTarget(fe),Re.updateRenderTargetMipmap(fe)),v.setRenderTarget(_e),v.setClearColor(U,B),v.toneMapping=Te}function rl(R,X,Z){const z=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,_e=R.length;Q<_e;Q++){const Te=R[Q],Ce=Te.object,Pe=Te.geometry,Be=z===null?Te.material:z,De=Te.group;Ce.layers.test(Z.layers)&&Tp(Ce,X,Z,Pe,Be,De)}}function Tp(R,X,Z,z,Q,_e){R.onBeforeRender(v,X,Z,z,Q,_e),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(v,X,Z,z,R,_e),Q.transparent===!0&&Q.side===zi&&Q.forceSinglePass===!1?(Q.side=dn,Q.needsUpdate=!0,v.renderBufferDirect(Z,X,z,Q,R,_e),Q.side=Pr,Q.needsUpdate=!0,v.renderBufferDirect(Z,X,z,Q,R,_e),Q.side=zi):v.renderBufferDirect(Z,X,z,Q,R,_e),R.onAfterRender(v,X,Z,z,Q,_e)}function sl(R,X,Z){X.isScene!==!0&&(X=Je);const z=Ie.get(R),Q=m.state.lights,_e=m.state.shadowsArray,Te=Q.state.version,Ce=$.getParameters(R,Q.state,_e,X,Z),Pe=$.getProgramCacheKey(Ce);let Be=z.programs;z.environment=R.isMeshStandardMaterial?X.environment:null,z.fog=X.fog,z.envMap=(R.isMeshStandardMaterial?rt:Ve).get(R.envMap||z.environment),Be===void 0&&(R.addEventListener("dispose",ce),Be=new Map,z.programs=Be);let De=Be.get(Pe);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Te)return wp(R,Ce),De}else Ce.uniforms=$.getUniforms(R),R.onBuild(Z,Ce,v),R.onBeforeCompile(Ce,v),De=$.acquireProgram(Ce,Pe),Be.set(Pe,De),z.uniforms=Ce.uniforms;const Ne=z.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=J.uniform),wp(R,Ce),z.needsLights=ky(R),z.lightsStateVersion=Te,z.needsLights&&(Ne.ambientLightColor.value=Q.state.ambient,Ne.lightProbe.value=Q.state.probe,Ne.directionalLights.value=Q.state.directional,Ne.directionalLightShadows.value=Q.state.directionalShadow,Ne.spotLights.value=Q.state.spot,Ne.spotLightShadows.value=Q.state.spotShadow,Ne.rectAreaLights.value=Q.state.rectArea,Ne.ltc_1.value=Q.state.rectAreaLTC1,Ne.ltc_2.value=Q.state.rectAreaLTC2,Ne.pointLights.value=Q.state.point,Ne.pointLightShadows.value=Q.state.pointShadow,Ne.hemisphereLights.value=Q.state.hemi,Ne.directionalShadowMap.value=Q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ne.spotShadowMap.value=Q.state.spotShadowMap,Ne.spotLightMatrix.value=Q.state.spotLightMatrix,Ne.spotLightMap.value=Q.state.spotLightMap,Ne.pointShadowMap.value=Q.state.pointShadowMap,Ne.pointShadowMatrix.value=Q.state.pointShadowMatrix);const pt=De.getUniforms(),vt=ru.seqWithValue(pt.seq,Ne);return z.currentProgram=De,z.uniformsList=vt,De}function wp(R,X){const Z=Ie.get(R);Z.outputColorSpace=X.outputColorSpace,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Oy(R,X,Z,z,Q){X.isScene!==!0&&(X=Je),Re.resetTextureUnits();const _e=X.fog,Te=z.isMeshStandardMaterial?X.environment:null,Ce=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:wi,Pe=(z.isMeshStandardMaterial?rt:Ve).get(z.envMap||Te),Be=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,De=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ne=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,vt=!!Z.morphAttributes.color,$n=z.toneMapped?v.toneMapping:Wi,Ri=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Ri!==void 0?Ri.length:0,We=Ie.get(z),vc=m.state.lights;if(ee===!0&&(se===!0||R!==M)){const xn=R===M&&z.id===C;J.setState(z,R,xn)}let Lt=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vc.state.version||We.outputColorSpace!==Ce||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||We.envMap!==Pe||z.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==J.numPlanes||We.numIntersection!==J.numIntersection)||We.vertexAlphas!==Be||We.vertexTangents!==De||We.morphTargets!==Ne||We.morphNormals!==pt||We.morphColors!==vt||We.toneMapping!==$n||we.isWebGL2===!0&&We.morphTargetsCount!==St)&&(Lt=!0):(Lt=!0,We.__version=z.version);let kr=We.currentProgram;Lt===!0&&(kr=sl(z,X,Q));let Ap=!1,Ho=!1,xc=!1;const Qt=kr.getUniforms(),zr=We.uniforms;if(Me.useProgram(kr.program)&&(Ap=!0,Ho=!0,xc=!0),z.id!==C&&(C=z.id,Ho=!0),Ap||M!==R){if(Qt.setValue(V,"projectionMatrix",R.projectionMatrix),we.logarithmicDepthBuffer&&Qt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,Ho=!0,xc=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const xn=Qt.map.cameraPosition;xn!==void 0&&xn.setValue(V,Ue.setFromMatrixPosition(R.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&Qt.setValue(V,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){Qt.setOptional(V,Q,"bindMatrix"),Qt.setOptional(V,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(we.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Qt.setValue(V,"boneTexture",xn.boneTexture,Re),Qt.setValue(V,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yc=Z.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0&&we.isWebGL2===!0)&&pe.update(Q,Z,kr),(Ho||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Qt.setValue(V,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(zr.envMap.value=Pe,zr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Ho&&(Qt.setValue(V,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Fy(zr,xc),_e&&z.fog===!0&&re.refreshFogUniforms(zr,_e),re.refreshMaterialUniforms(zr,z,W,K,fe),ru.upload(V,We.uniformsList,zr,Re)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ru.upload(V,We.uniformsList,zr,Re),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qt.setValue(V,"center",Q.center),Qt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Qt.setValue(V,"normalMatrix",Q.normalMatrix),Qt.setValue(V,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let Sc=0,zy=xn.length;Sc<zy;Sc++)if(we.isWebGL2){const Rp=xn[Sc];Ee.update(Rp,kr),Ee.bind(Rp,kr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kr}function Fy(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ky(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,X,Z){Ie.get(R.texture).__webglTexture=X,Ie.get(R.depthTexture).__webglTexture=Z;const z=Ie.get(R);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const Z=Ie.get(R);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,Z=0){E=R,S=X,T=Z;let z=!0,Q=null,_e=!1,Te=!1;if(R){const Pe=Ie.get(R);Pe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(V.FRAMEBUFFER,null),z=!1):Pe.__webglFramebuffer===void 0?Re.setupRenderTarget(R):Pe.__hasExternalTextures&&Re.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const De=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=De[X],_e=!0):we.isWebGL2&&R.samples>0&&Re.useMultisampledRTT(R)===!1?Q=Ie.get(R).__webglMultisampledFramebuffer:Q=De,w.copy(R.viewport),k.copy(R.scissor),j=R.scissorTest}else w.copy(O).multiplyScalar(W).floor(),k.copy(I).multiplyScalar(W).floor(),j=F;if(Me.bindFramebuffer(V.FRAMEBUFFER,Q)&&we.drawBuffers&&z&&Me.drawBuffers(R,Q),Me.viewport(w),Me.scissor(k),Me.setScissorTest(j),_e){const Pe=Ie.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,Z)}else if(Te){const Pe=Ie.get(R.texture),Be=X||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,Be)}C=-1},this.readRenderTargetPixels=function(R,X,Z,z,Q,_e,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Me.bindFramebuffer(V.FRAMEBUFFER,Ce);try{const Pe=R.texture,Be=Pe.format,De=Pe.type;if(Be!==oi&&me.convert(Be)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===Ba&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==Tr&&me.convert(De)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===cr&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-z&&Z>=0&&Z<=R.height-Q&&V.readPixels(X,Z,z,Q,me.convert(Be),me.convert(De),_e)}finally{const Pe=E!==null?Ie.get(E).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(R,X,Z=0){const z=Math.pow(2,-Z),Q=Math.floor(X.image.width*z),_e=Math.floor(X.image.height*z);Re.setTexture2D(X,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,R.x,R.y,Q,_e),Me.unbindTexture()},this.copyTextureToTexture=function(R,X,Z,z=0){const Q=X.image.width,_e=X.image.height,Te=me.convert(Z.format),Ce=me.convert(Z.type);Re.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,z,R.x,R.y,Q,_e,Te,Ce,X.image.data):X.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,z,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Te,X.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,z,R.x,R.y,Te,Ce,X.image),z===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,X,Z,z,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,Te=R.max.y-R.min.y+1,Ce=R.max.z-R.min.z+1,Pe=me.convert(z.format),Be=me.convert(z.type);let De;if(z.isData3DTexture)Re.setTexture3D(z,0),De=V.TEXTURE_3D;else if(z.isDataArrayTexture)Re.setTexture2DArray(z,0),De=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const Ne=V.getParameter(V.UNPACK_ROW_LENGTH),pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),vt=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),Ri=V.getParameter(V.UNPACK_SKIP_IMAGES),St=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(De,Q,X.x,X.y,X.z,_e,Te,Ce,Pe,Be,St.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(De,Q,X.x,X.y,X.z,_e,Te,Ce,Pe,St.data)):V.texSubImage3D(De,Q,X.x,X.y,X.z,_e,Te,Ce,Pe,Be,St),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ne),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,vt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ri),Q===0&&z.generateMipmaps&&V.generateMipmap(De),Me.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Re.setTextureCube(R,0):R.isData3DTexture?Re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Re.setTexture2DArray(R,0):Re.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){S=0,T=0,E=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?ls:ix}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ls?Fe:wi}}class xC extends Ex{}xC.prototype.isWebGL1Renderer=!0;class yC extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class np extends Or{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new G,h=new G,p=[],x=[],_=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const T=S/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+y,1-v),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const v=c[f][g+1],y=c[f][g],S=c[f+1][g],T=c[f+1][g+1];(f!==0||o>0)&&p.push(v,y,T),(f!==i-1||l<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tx extends tl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rx,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wx extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wf=new Rt,J_=new G,eg=new G;class SC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;J_.setFromMatrixPosition(e.matrixWorld),t.position.copy(J_),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),wf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MC extends SC{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Iu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class EC extends wx{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new MC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TC extends wx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let Wl;class wC{static getContext(){return Wl===void 0&&(Wl=new(window.AudioContext||window.webkitAudioContext)),Wl}static setContext(e){Wl=e}}class Ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tg(){return(typeof performance>"u"?Date:performance).now()}const Wr=new G,ng=new br,AC=new G,Xr=new G;class RC extends Ot{constructor(){super(),this.type="AudioListener",this.context=wC.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ax}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Wr,ng,AC),Xr.set(0,0,-1).applyQuaternion(ng),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Wr.x,r),t.positionY.linearRampToValueAtTime(Wr.y,r),t.positionZ.linearRampToValueAtTime(Wr.z,r),t.forwardX.linearRampToValueAtTime(Xr.x,r),t.forwardY.linearRampToValueAtTime(Xr.y,r),t.forwardZ.linearRampToValueAtTime(Xr.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Wr.x,Wr.y,Wr.z),t.setOrientation(Xr.x,Xr.y,Xr.z,i.x,i.y,i.z)}}let CC=class extends Ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};class ig{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function Oi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Rx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Do={duration:.5,overwrite:!1,delay:0},ip,qt,_t,Vn=1e8,Qe=1/Vn,kh=Math.PI*2,PC=kh/4,bC=0,Cx=Math.sqrt,LC=Math.cos,DC=Math.sin,Ft=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},rp=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},pn=function(e){return e!==!1},sp=function(){return typeof window<"u"},Xl=function(e){return gt(e)||Ft(e)},Px=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,zh=/(?:-?\.?\d|\.)+/gi,bx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Af=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lx=/[+-]=-?[.\d]+/,Dx=/[^,'"\[\]\s]+/gi,UC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,Fn,Bh,op,Dn={},Ou={},Ux,Ix=function(e){return(Ou=Ss(e,Dn))&&gn},ap=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fu=function(e,t){return!t&&console.warn(e)},Nx=function(e,t){return e&&(Dn[e]=t)&&Ou&&(Ou[e]=t)||Dn},Ha=function(){return 0},IC={suppressEvents:!0,isStart:!0,kill:!1},su={suppressEvents:!0,kill:!1},NC={suppressEvents:!0},lp={},wr=[],Hh={},Ox,Tn={},Rf={},rg=30,ou=[],up="",cp=function(e){var t=e[0],i,r;if(Ai(t)||gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ou.length;r--&&!ou[r].targetTest(t););i=ou[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new oy(e[r],i)))||e.splice(r,1);return e},cs=function(e){return e._gsap||cp(Gn(e))[0]._gsap},Fx=function(e,t,i){return(i=e[t])&&gt(i)?e[t]():rp(i)&&e.getAttribute&&e.getAttribute(t)||i},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},go=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},OC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ku=function(){var e=wr.length,t=wr.slice(0),i,r;for(Hh={},wr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},kx=function(e,t,i,r){wr.length&&!qt&&ku(),e.render(t,i,r||qt&&t<0&&(e._initted||e._startAt)),wr.length&&!qt&&ku()},zx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dx).length<2?t:Ft(e)?e.trim():e},Bx=function(e){return e},qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},FC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ss=function(e,t){for(var i in t)e[i]=t[i];return e},sg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ai(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},zu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},xa=function(e){var t=e.parent||at,i=e.keyframes?FC($t(e.keyframes)):qn;if(pn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},kC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hx=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},hc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},zC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vh=function(e,t,i,r){return e._startAt&&(qt?e._startAt.revert(su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},BC=function n(e){return!e||e._ts&&n(e.parent)},og=function(e){return e._repeat?Uo(e._tTime,e=e.duration()+e._rDelay)*e:0},Uo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Bu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dc(e),i._dirty||fs(i,e)),e},Vx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bu(e.rawTime(),t),(!t._dur||il(0,t.totalDuration(),i)-t._tTime>Qe)&&t.render(i,!0)),fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Qe}},vi=function(e,t,i,r){return t.parent&&Lr(t),t._start=zt(($i(i)?i:i||e!==at?On(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hx(e,t,"_first","_last",e._sort?"_start":0),Gh(t)||(e._recent=t),r||Vx(e,t),e._ts<0&&pc(e,e._tTime),e},Gx=function(e,t){return(Dn.ScrollTrigger||ap("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Wx=function(e,t,i,r,s){if(hp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ox!==An.frame)return wr.push(e),e._lazy=[s,r],1},HC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Gh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},VC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&HC(e)&&!(!e._initted&&Gh(e))||(e._ts<0||e._dp._ts<0)&&!Gh(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=il(0,e._tDur,t),c=Uo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Uo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&Wx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Qe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Vh(e,t,i,!0),e._onUpdate&&!i&&Wn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Lr(e,1),!i&&!qt&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Io=function(e,t,i,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&pc(e,e._tTime=e._tDur*a),e.parent&&dc(e),i||fs(e.parent,e),e},ag=function(e){return e instanceof ln?fs(e):Io(e,e._dur)},WC={_start:0,endTime:Ha,totalDuration:Ha},On=function n(e,t,i){var r=e.labels,s=e._recent||WC,o=e.duration()>=Vn?s.endTime(!1):e._dur,a,l,u;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*($t(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ya=function(e,t,i){var r=$i(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;o.immediateRender=pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},il=function(e,t,i){return i<e?e:i>t?t:i},Yt=function(e,t){return!Ft(e)||!(t=UC.exec(e))?"":t[1]},XC=function(e,t,i){return Fr(i,function(r){return il(e,t,r)})},Wh=[].slice,Xx=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==Fn},jC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!t||Xx(r,1)?(s=i).push.apply(s,Gn(r)):i.push(r)})||i},Gn=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):Ft(e)&&!i&&(Bh||!No())?Wh.call((t||op).querySelectorAll(e),0):$t(e)?jC(e,i):Xx(e)?Wh.call(e,0):e?[e]:[]},Xh=function(e){return e=Gn(e)[0]||Fu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gn(t,i.querySelectorAll?i:i===e?Fu("Invalid scope")||op.createElement("div"):e)}},jx=function(e){return e.sort(function(){return .5-Math.random()})},Yx=function(e){if(gt(e))return e;var t=Ai(e)?e:{each:e},i=hs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Ft(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var _=(x||t).length,m=o[_],f,g,v,y,S,T,E,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!M){for(E=-Vn;E<(E=x[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],f=l?Math.min(M,_)*c-.5:r%M,g=M===Vn?0:l?_*d/M-.5:r/M|0,E=0,C=Vn,T=0;T<_;T++)v=T%M-f,y=g-(T/M|0),m[T]=S=u?Math.abs(u==="y"?y:v):Cx(v*v+y*y),S>E&&(E=S),S<C&&(C=S);r==="random"&&jx(m),m.max=E-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Yt(t.amount||t.each)||0,i=i&&_<0?iy(i):i}return _=(m[h]-m.min)/m.max||0,zt(m.b+(i?i(_):_)*m.v)+m.u}},jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+($i(i)?0:Yt(i))}},qx=function(e,t){var i=$t(e),r,s;return!i&&Ai(e)&&(r=i=e.radius||Vn,e.values?(e=Gn(e.values),(s=!$i(e[0]))&&(r*=r)):e=jh(e.increment)),Fr(t,i?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||$i(o)?c:c+Yt(o)}:jh(e))},$x=function(e,t,i,r){return Fr($t(e)?!t:i===!0?!!(i=0):!r,function(){return $t(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},YC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},qC=function(e,t){return function(i){return e(parseFloat(i))+(t||Yt(i))}},$C=function(e,t,i){return Zx(e,t,0,1,i)},Kx=function(e,t,i){return Fr(i,function(r){return e[~~t(r)]})},KC=function n(e,t,i){var r=t-e;return $t(e)?Kx(e,n(0,e.length),t):Fr(i,function(s){return(r+(s-e)%r)%r+e})},ZC=function n(e,t,i){var r=t-e,s=r*2;return $t(e)?Kx(e,n(0,e.length-1),t):Fr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Va=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Dx:zh),i+=e.substr(t,r-t)+$x(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Zx=function(e,t,i,r,s){var o=t-e,a=r-i;return Fr(s,function(l){return i+((l-e)/o*a||0)})},QC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ft(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var _=Math.min(h,~~x);return c[_](x-_)},i=t}else r||(e=Ss($t(e)?[]:{},e));if(!c){for(l in t)fp.call(a,e,l,"get",t[l]);s=function(x){return mp(x,a)||(o?e.p:e)}}}return Fr(i,s)},lg=function(e,t,i){var r=e.labels,s=Vn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(e,t,i){var r=e.vars,s=r[t],o=_t,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&wr.length&&ku(),a&&(_t=a),c=l?s.apply(u,l):s.call(u),_t=o,c},aa=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Wn(e,"onInterrupt"),e},ao,Qx=[],Jx=function(e){if(sp()&&e){e=!e.name&&e.default||e;var t=e.name,i=gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ha,render:mp,add:fp,kill:pP,modifier:dP,rawVars:0},o={targetTest:0,get:0,getSetter:pp,aliases:{},register:0};if(No(),e!==r){if(Tn[t])return;qn(r,qn(zu(e,s),o)),Ss(r.prototype,Ss(s,zu(e,o))),Tn[r.prop=t]=r,e.targetTest&&(ou.push(r),lp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Nx(t,r),e.register&&e.register(gn,r,_n)}else e&&Qx.push(e)},Ze=255,la={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Cf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ze+.5|0},ey=function(e,t,i){var r=e?$i(e)?[e>>16,e>>8&Ze,e&Ze]:0:la.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),la[e])r=la[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ze,r&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(zh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Cf(l+1/3,s,o),r[1]=Cf(l,s,o),r[2]=Cf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(bx),i&&r.length<4&&(r[3]=1),r}else r=e.match(zh)||la.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Ze,o=r[1]/Ze,a=r[2]/Ze,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ty=function(e){var t=[],i=[],r=-1;return e.split(Ar).forEach(function(s){var o=s.match(oo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ug=function(e,t,i){var r="",s=(e+r).match(Ar),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=ey(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=ty(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ar,"1").split(oo),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ar),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ar=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in la)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),JC=/hsl[a]?\(/,ny=function(e){var t=e.join(" "),i;if(Ar.lastIndex=0,Ar.test(t))return i=JC.test(t),e[1]=ug(e[1],i),e[0]=ug(e[0],i,ty(e[1])),!0},Ga,An=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function _(m){var f=n()-r,g=m===!0,v,y,S,T;if(f>e&&(i+=f-t),r+=f,S=r-i,v=S-o,(v>0||g)&&(T=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=v+(v>=s?4:s-v),y=1),g||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](S,h,T,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Ux&&(!Bh&&sp()&&(Fn=Bh=window,op=Fn.document||{},Dn.gsap=gn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(gn.version),Ix(Ou||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),c=Fn.requestAnimationFrame,Qx.forEach(Jx)),l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ga=1,x(2))},sleep:function(){(c?Fn.cancelAnimationFrame:clearTimeout)(l),Ga=0,u=Ha},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,g){var v=f?function(y,S,T,E){m(y,S,T,E),d.remove(v)}:m;return d.remove(m),a[g?"unshift":"push"](v),No(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),No=function(){return!Ga&&An.wake()},Ge={},eP=/^[\d.\-M][\d.\-,\s]/,tP=/["']/g,nP=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(tP,"").trim():+u,r=l.substr(a+1).trim();return t},iP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},rP=function(e){var t=(e+"").split("("),i=Ge[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[nP(t[1])]:iP(e).split(",").map(zx)):Ge._CE&&eP.test(e)?Ge._CE("",e):i},iy=function(e){return function(t){return 1-e(1-t)}},ry=function n(e,t){for(var i=e._first,r;i;)i instanceof ln?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},hs=function(e,t){return e&&(gt(e)?e:Ge[e]||rP(e))||t},ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return mn(e,function(a){Ge[a]=Dn[a]=s,Ge[o=a.toLowerCase()]=i;for(var l in s)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=s[l]}),s},sy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/kh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*DC((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:sy(a);return s=kh/s,l.config=function(u,c){return n(e,u,c)},l},bf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:sy(i);return r.config=function(s){return n(e,s)},r};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;ws("Elastic",Pf("in"),Pf("out"),Pf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ws("Circ",function(n){return-(Cx(1-n*n)-1)});ws("Sine",function(n){return n===1?1:-LC(n*PC)+1});ws("Back",bf("in"),bf("out"),bf());Ge.SteppedEase=Ge.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Qe;return function(a){return((r*il(0,o,a)|0)+s)*i}}};Do.ease=Ge["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return up+=n+","+n+"Params,"});var oy=function(e,t){this.id=bC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fx,this.set=t?t.getSetter:pp},Wa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Io(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Ga||An.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(No(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pc(this,i),!s._dp||s.parent||Vx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Qe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+og(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+og(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Uo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Qe?0:this._rts,this.totalTime(il(-Math.abs(this._delay),this._tDur,r),!0),dc(this),zC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&vi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=NC);var r=qt;return qt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ag(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ag(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(On(this,i),pn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Qe)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=gt(i)?i:Bx,a=function(){var u=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){aa(this)},n}();qn(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var ln=function(n){Rx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pn(i.sortChildren),at&&vi(i.parent||at,Oi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Gx(Oi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ya(0,arguments,this),this},t.from=function(r,s,o){return ya(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ya(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,xa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,On(this,o),1),this},t.call=function(r,s,o){return vi(this,Et.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Et(r,o,On(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,xa(o).immediateRender=pn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,xa(a).immediateRender=pn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:zt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,_,m,f,g,v,y,S,T,E;if(this!==at&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=zt(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),S=Uo(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),T&&_&1&&(h=u-h,E=1),_!==S&&!this._lock){var C=T&&S&1,M=C===(T&&_&1);if(_<S&&(C=!C),a=C?0:c%u?u:c,this._lock=1,this.render(a||(E?0:zt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;ry(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=GC(this,zt(a),zt(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=-Qe);break}}p=x}else{p=this._last;for(var w=r<0?r:h;p;){if(x=p._prev,(p._act||w<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||qt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=w?-Qe:Qe);break}}p=x}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-Qe)._zTime=h>=a?1:-1,this._ts))return this._start=y,dc(this),this.render(r,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Lr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Wn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if($i(s)||(s=On(this,s,r)),!(r instanceof Wa)){if($t(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(gt(r))r=Et.delayedCall(0,r);else return this}return this!==r?vi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Et?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(hc(this,r),r===this._recent&&(this._recent=this._last),fs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=On(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Et.delayedCall(0,s||Ha,o);return a.data="isPause",this._hasPause=1,vi(this,a,On(this,r))},t.removePause=function(r){var s=this._first;for(r=On(this,r);s;)s._start===r&&s.data==="isPause"&&Lr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)fr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gn(r),l=this._first,u=$i(s),c;l;)l instanceof Et?OC(l._targets,a)&&(u?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=On(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=Et.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Qe,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Io(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qn({startAt:{time:On(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),lg(this,On(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),lg(this,On(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return fs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Io(o,o===at&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(at._ts&&(kx(at,Bu(r,at)),Ox=An.frame),An.frame>=rg){rg+=bn.autoSleep||120;var s=at._first;if((!s||!s._ts)&&bn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},e}(Wa);qn(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var sP=function(e,t,i,r,s,o,a){var l=new _n(this._pt,e,t,0,1,hy,null,s),u=0,c=0,d,h,p,x,_,m,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Va(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Af)||[];d=Af.exec(r);)x=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:x.charAt(1)==="="?go(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=Af.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Lx.test(r)||f)&&(l.e=0),this._pt=l,l},fp=function(e,t,i,r,s,o,a,l,u,c){gt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:gt(d)?u?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=gt(d)?u?cP:cy:dp,x;if(Ft(r)&&(~r.indexOf("random(")&&(r=Va(r)),r.charAt(1)==="="&&(x=go(h,r)+(Yt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Yh)return!isNaN(h*r)&&r!==""?(x=new _n(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?hP:fy,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&ap(t,r),sP.call(this,e,t,h,r,p,l||bn.stringFilter,u))},oP=function(e,t,i,r,s){if(gt(e)&&(e=Sa(e,s,t,i,r)),!Ai(e)||e.style&&e.nodeType||$t(e)||Px(e))return Ft(e)?Sa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Sa(e[a],s,t,i,r);return o},ay=function(e,t,i,r,s,o){var a,l,u,c;if(Tn[e]&&(a=new Tn[e]).init(s,a.rawVars?t[e]:oP(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new _n(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ao))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},fr,Yh,hp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,x=r.keyframes,_=r.autoRevert,m=e._dur,f=e._startAt,g=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:g,S=e._overwrite==="auto"&&!ip,T=e.timeline,E,C,M,w,k,j,U,B,H,K,W,L,N;if(T&&(!x||!s)&&(s="none"),e._ease=hs(s,Do.ease),e._yEase=p?iy(hs(p===!0?s:p,Do.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!T&&!!r.runBackwards,!T||x&&!r.stagger){if(B=g[0]?cs(g[0]).harness:0,L=B&&r[B.prop],E=zu(r,lp),f&&(f._zTime<0&&f.progress(1),t<0&&h&&a&&!_?f.render(-1,!0):f.revert(h&&m?su:IC),f._lazy=0),o){if(Lr(e._startAt=Et.set(g,qn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&pn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!_)&&e._startAt.revert(su),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!f){if(t&&(a=!1),M=qn({overwrite:!1,data:"isFromStart",lazy:a&&!f&&pn(l),immediateRender:a,stagger:0,parent:v},E),L&&(M[B.prop]=L),Lr(e._startAt=Et.set(g,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(su):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&pn(l)||l&&!m,C=0;C<g.length;C++){if(k=g[C],U=k._gsap||cp(g)[C]._gsap,e._ptLookup[C]=K={},Hh[U.id]&&wr.length&&ku(),W=y===g?C:y.indexOf(k),B&&(H=new B).init(k,L||E,e,W,y)!==!1&&(e._pt=w=new _n(e._pt,k,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(O){K[O]=w}),H.priority&&(j=1)),!B||L)for(M in E)Tn[M]&&(H=ay(M,E,e,W,k,y))?H.priority&&(j=1):K[M]=w=fp.call(e,k,M,"get",E[M],W,y,0,r.stringFilter);e._op&&e._op[C]&&e.kill(k,e._op[C]),S&&e._pt&&(fr=e,at.killTweensOf(k,K,e.globalTime(t)),N=!e.parent,fr=0),e._pt&&l&&(Hh[U.id]=1)}j&&dy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,x&&t<=0&&T.render(Vn,!0,!0)},aP=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yh=1,e.vars[t]="+=0",hp(e,a),Yh=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=xt(i)+Yt(c.e)),c.b&&(c.b=u.s+Yt(c.b))},lP=function(e,t){var i=e[0]?cs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ss({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},uP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($t(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sa=function(e,t,i,r,s){return gt(e)?e.call(t,i,r,s):Ft(e)&&~e.indexOf("random(")?Va(e):e},ly=up+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uy={};mn(ly+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return uy[n]=1});var Et=function(n){Rx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:xa(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,g=r.parent||at,v=($t(i)||Px(i)?$i(i[0]):"length"in r)?[i]:Gn(i),y,S,T,E,C,M,w,k;if(a._targets=v.length?cp(v):Fu("GSAP target "+i+" not found. https://greensock.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||Xl(u)||Xl(c)){if(r=a.vars,y=a.timeline=new ln({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),y.kill(),y.parent=y._dp=Oi(a),y._start=0,h||Xl(u)||Xl(c)){if(E=v.length,w=h&&Yx(h),Ai(h))for(C in h)~ly.indexOf(C)&&(k||(k={}),k[C]=h[C]);for(S=0;S<E;S++)T=zu(r,uy),T.stagger=0,f&&(T.yoyoEase=f),k&&Ss(T,k),M=v[S],T.duration=+Sa(u,Oi(a),S,M,v),T.delay=(+Sa(c,Oi(a),S,M,v)||0)-a._delay,!h&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(M,T,w?w(S,M,v):0),y._ease=Ge.none;y.duration()?u=c=0:a.timeline=0}else if(x){xa(qn(y.vars.defaults,{ease:"none"})),y._ease=hs(x.ease||r.ease||"none");var j=0,U,B,H;if($t(x))x.forEach(function(K){return y.to(v,K,">")}),y.duration();else{T={};for(C in x)C==="ease"||C==="easeEach"||uP(C,x[C],T,x.easeEach);for(C in T)for(U=T[C].sort(function(K,W){return K.t-W.t}),j=0,S=0;S<U.length;S++)B=U[S],H={ease:B.e,duration:(B.t-(S?U[S-1].t:0))/100*u},H[C]=B.v,y.to(v,H,j),j+=H.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!ip&&(fr=Oi(a),at.killTweensOf(v),fr=0),vi(g,Oi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===zt(g._time)&&pn(d)&&BC(Oi(a))&&g.data!=="nested")&&(a._tTime=-Qe,a.render(Math.max(0,-c)||0)),m&&Gx(Oi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Qe&&!c?l:r<Qe?0:r,h,p,x,_,m,f,g,v,y;if(!u)VC(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=zt(d%_),d===l?(x=this._repeat,h=u):(x=~~(d/_),x&&x===d/_&&(h=u,x--),h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Uo(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=d,this;x!==m&&(v&&this._yEase&&ry(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(zt(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(Wx(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(y||this._ease)(h/u),this._from&&(this.ratio=g=1-g),h&&!a&&!s&&!x&&(Wn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;v&&v.render(r<0?r:!h&&f?-Qe:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Vh(this,r,s,o),Wn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Vh(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Lr(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Wn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Ga||An.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hp(this,l),u=this._ease(l/this._dur),aP(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(pc(this,0),this.parent||Hx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?aa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,fr&&fr.vars.overwrite!==!0)._first||aa(this),this.parent&&o!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gn(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,_,m,f;if((!s||s==="all")&&kC(a,l))return s==="all"&&(this._pt=0),aa(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(_={},mn(s,function(g){return _[g]=1}),s=_),s=lP(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(_ in x)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hc(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&aa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ya(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ya(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return at.killTweensOf(r,s,o)},e}(Wa);qn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(n){Et[n]=function(){var e=new ln,t=Wh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dp=function(e,t,i){return e[t]=i},cy=function(e,t,i){return e[t](i)},cP=function(e,t,i,r){return e[t](r.fp,i)},fP=function(e,t,i){return e.setAttribute(t,i)},pp=function(e,t){return gt(e[t])?cy:rp(e[t])&&e.setAttribute?fP:dp},fy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},mp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},pP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?hc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},mP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},dy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},_n=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||fy,this.d=l||this,this.set=u||dp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=mP,this.m=i,this.mt=s,this.tween=r},n}();mn(up+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return lp[n]=1});Dn.TweenMax=Dn.TweenLite=Et;Dn.TimelineLite=Dn.TimelineMax=ln;at=new ln({sortChildren:!1,defaults:Do,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=ny;var ds=[],au={},_P=[],cg=0,gP=0,Lf=function(e){return(au[e]||_P).map(function(t){return t()})},qh=function(){var e=Date.now(),t=[];e-cg>2&&(Lf("matchMediaInit"),ds.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Fn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Lf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),cg=e,Lf("matchMedia"))},py=function(){function n(t,i){this.selector=i&&Xh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){gt(i)&&(s=r,r=i,i=gt);var o=this,a=function(){var u=_t,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Xh(s)),_t=o,d=r.apply(o,arguments),gt(d)&&o._r.push(d),_t=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===gt?a(o):i?o[i]=a:a},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Et)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=ds.length;a--;)ds[a].id===this.id&&ds.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),vP=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ai(i)||(i={matches:i});var o=new py(0,s||this.scope),a=o.conditions={},l,u,c;_t&&!o.selector&&(o.selector=_t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Fn.matchMedia(i[u]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Hu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Jx(r)})},timeline:function(e){return new ln(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ft(e)&&(e=Gn(e)[0]);var s=cs(e||{}).get,o=i?Bx:zx;return i==="native"&&(i=""),e&&(t?o((Tn[t]&&Tn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Tn[a]&&Tn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gn(e),e.length>1){var r=e.map(function(c){return gn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Tn[t],a=cs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;ao._pt=0,d.init(e,i?c+i:c,ao,0,[e]),d.render(1,d),ao._pt&&mp(1,ao)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=gn.to(e,Ss((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,Do.ease)),sg(Do,e||{})},config:function(e){return sg(bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Tn[a]&&!Dn[a]&&Fu(t+" effect requires "+a+" plugin.")}),Rf[t]=function(a,l,u){return i(Gn(a),qn(l||{},s),u)},o&&(ln.prototype[t]=function(a,l,u){return this.add(Rf[t](a,Ai(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ge[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):Ge},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ln(e),r,s;for(i.smoothChildTiming=pn(e.smoothChildTiming),at.remove(i),i._dp=0,i._time=i._tTime=at._time,r=at._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&vi(i,r,r._start-r._delay),r=s;return vi(at,i,0),i},context:function(e,t){return e?new py(e,t):_t},matchMedia:function(e){return new vP(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||qh()},addEventListener:function(e,t){var i=au[e]||(au[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=au[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:KC,wrapYoyo:ZC,distribute:Yx,random:$x,snap:qx,normalize:$C,getUnit:Yt,clamp:XC,splitColor:ey,toArray:Gn,selector:Xh,mapRange:Zx,pipe:YC,unitize:qC,interpolate:QC,shuffle:jx},install:Ix,effects:Rf,ticker:An,updateRoot:ln.updateRoot,plugins:Tn,globalTimeline:at,core:{PropTween:_n,globals:Nx,Tween:Et,Timeline:ln,Animation:Wa,getCache:cs,_removeLinkedListItem:hc,reverting:function(){return qt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return ip=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Hu[n]=Et[n]});An.add(ln.updateRoot);ao=Hu.to({},{duration:0});var xP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},yP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=xP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Df=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ft(s)&&(l={},mn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}yP(a,s)}}}},gn=Hu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Df("roundProps",jh),Df("modifiers"),Df("snap",qx))||Hu;Et.version=ln.version=gn.version="3.12.2";Ux=1;sp()&&No();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fg,hr,vo,_p,is,hg,gp,SP=function(){return typeof window<"u"},Ki={},Qr=180/Math.PI,xo=Math.PI/180,Xs=Math.atan2,dg=1e8,vp=/([A-Z])/g,MP=/(left|right|width|margin|padding|x)/i,EP=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},my=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_y=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},RP=function(e,t,i){return e.style[t]=i},CP=function(e,t,i){return e.style.setProperty(t,i)},PP=function(e,t,i){return e._gsap[t]=i},bP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},LP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},lt="transform",ci=lt+"Origin",UP=function n(e,t){var i=this,r=this.target,s=r.style;if(e in Ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ki(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:ki(r,e);else return xi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(lt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},gy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gp(),(!s||!s.isStart)&&!i[lt]&&(gy(i),r.uncache=1)}},vy=function(e,t){var i={target:e,props:[],revert:IP,save:UP};return e._gsap||gn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},xy,Kh=function(e,t){var i=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return i.style?i:hr.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(vp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Oo(t)||t,1)||""},pg="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,i){var r=t||is,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(pg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?pg[o]:"")+e},Zh=function(){SP()&&window.document&&(fg=window,hr=fg.document,vo=hr.documentElement,is=Kh("div")||{style:{}},Kh("div"),lt=Oo(lt),ci=lt+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xy=!!Oo("perspective"),gp=gn.core.reverting,_p=1)},Uf=function n(e){var t=Kh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(vo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),vo.removeChild(t),this.style.cssText=s,o},mg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},yy=function(e){var t;try{t=e.getBBox()}catch{t=Uf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Uf||(t=Uf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+mg(e,["x","cx","x1"])||0,y:+mg(e,["y","cy","y1"])||0,width:0,height:0}:t},Sy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yy(e))},Xa=function(e,t){if(t){var i=e.style;t in Ki&&t!==ci&&(t=lt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(vp,"-$1").toLowerCase())):i.removeAttribute(t)}},dr=function(e,t,i,r,s,o){var a=new _n(e._pt,t,i,0,1,o?_y:my);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},_g={deg:1,rad:1,turn:1},NP={grid:1,flex:1},Dr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=is.style,l=MP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,_,m,f;return r===o||!s||_g[r]||_g[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Sy(e),(p||o==="%")&&(Ki[t]||~t.indexOf("adius"))?(x=f?e.getBBox()[l?"width":"height"]:e[c],xt(p?s/x*d:s/100*x)):(a[l?"width":"height"]=d+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hr||!_.appendChild)&&(_=hr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===An.time&&!m.uncache?xt(s/m.width*d):((p||o==="%")&&!NP[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(is),x=is[c],_.removeChild(is),a.position="absolute",l&&p&&(m=cs(_),m.time=An.time,m.width=_[c]),xt(h?x*s/d:x&&s?d/x*s:0))))},ki=function(e,t,i,r){var s;return _p||Zh(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ki[t]&&t!=="transform"?(s=Ya(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gu(Ti(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Vu[t]&&Vu[t](e,t,i)||Ti(e,t)||Fx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Dr(e,t,s,i)+i:s},OP=function(e,t,i,r){if(!i||i==="none"){var s=Oo(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new _n(this._pt,e.style,t,0,1,hy),l=0,u=0,c,d,h,p,x,_,m,f,g,v,y,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Ti(e,t)||r,e.style[t]=i),c=[i,r],ny(c),i=c[0],r=c[1],h=i.match(oo)||[],S=r.match(oo)||[],S.length){for(;d=oo.exec(r);)m=d[0],g=r.substring(l,d.index),x?x=(x+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(x=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=go(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=oo.lastIndex-v.length,v||(v=v||bn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Dr(e,t,_,v)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?_y:my;return Lx.test(r)&&(a.e=0),this._pt=a,a},gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=gg[i]||i,t[1]=gg[r]||r,t.join(" ")},kP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ki[a]&&(l=1,a=a==="transformOrigin"?ci:lt),Xa(i,a);l&&(Xa(i,lt),o&&(o.svg&&i.removeAttribute("transform"),Ya(i,1),o.uncache=1,gy(r)))}},Vu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new _n(e._pt,t,i,0,0,kP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ja=[1,0,0,1,0,0],My={},Ey=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vg=function(e){var t=Ti(e,lt);return Ey(t)?ja:t.substr(7).match(bx).map(xt)},xp=function(e,t){var i=e._gsap||cs(e),r=e.style,s=vg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ja:s):(s===ja&&!e.offsetParent&&e!==vo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,vo.appendChild(e)),s=vg(e),l?r.display=l:Xa(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):vo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qh=function(e,t,i,r,s,o){var a=e._gsap,l=s||xp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],f=l[4],g=l[5],v=t.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,T,E,C,M;i?l!==ja&&(E=p*m-x*_)&&(C=y*(m/E)+S*(-_/E)+(_*g-m*f)/E,M=y*(-x/E)+S*(p/E)-(p*g-x*f)/E,y=C,S=M):(T=yy(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),S=T.y+(~(v[1]||v[0]).indexOf("%")?S/100*T.height:S)),r||r!==!1&&a.smooth?(f=y-u,g=S-c,a.xOffset=d+(f*p+g*_)-f,a.yOffset=h+(f*x+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ci]="0px 0px",o&&(dr(o,a,"xOrigin",u,y),dr(o,a,"yOrigin",c,S),dr(o,a,"xOffset",d,a.xOffset),dr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Ya=function(e,t){var i=e._gsap||new oy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ti(e,ci)||"0",c,d,h,p,x,_,m,f,g,v,y,S,T,E,C,M,w,k,j,U,B,H,K,W,L,N,O,I,F,oe,ee,se;return c=d=h=_=m=f=g=v=y=0,p=x=1,i.svg=!!(e.getCTM&&Sy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),r.scale=r.rotate=r.translate="none"),E=xp(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Qh(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,T=i.yOrigin||0,E!==ja&&(k=E[0],j=E[1],U=E[2],B=E[3],c=H=E[4],d=K=E[5],E.length===6?(p=Math.sqrt(k*k+j*j),x=Math.sqrt(B*B+U*U),_=k||j?Xs(j,k)*Qr:0,g=U||B?Xs(U,B)*Qr+_:0,g&&(x*=Math.abs(Math.cos(g*xo))),i.svg&&(c-=S-(S*k+T*U),d-=T-(S*j+T*B))):(se=E[6],oe=E[7],O=E[8],I=E[9],F=E[10],ee=E[11],c=E[12],d=E[13],h=E[14],C=Xs(se,F),m=C*Qr,C&&(M=Math.cos(-C),w=Math.sin(-C),W=H*M+O*w,L=K*M+I*w,N=se*M+F*w,O=H*-w+O*M,I=K*-w+I*M,F=se*-w+F*M,ee=oe*-w+ee*M,H=W,K=L,se=N),C=Xs(-U,F),f=C*Qr,C&&(M=Math.cos(-C),w=Math.sin(-C),W=k*M-O*w,L=j*M-I*w,N=U*M-F*w,ee=B*w+ee*M,k=W,j=L,U=N),C=Xs(j,k),_=C*Qr,C&&(M=Math.cos(C),w=Math.sin(C),W=k*M+j*w,L=H*M+K*w,j=j*M-k*w,K=K*M-H*w,k=W,H=L),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=xt(Math.sqrt(k*k+j*j+U*U)),x=xt(Math.sqrt(K*K+se*se)),C=Xs(H,K),g=Math.abs(C)>2e-4?C*Qr:0,y=ee?1/(ee<0?-ee:ee):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ey(Ti(e,lt)),W&&e.setAttribute("transform",W))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=xt(p),i.scaleY=xt(x),i.rotation=xt(_)+a,i.rotationX=xt(m)+a,i.rotationY=xt(f)+a,i.skewX=g+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[ci]=Gu(u)),i.xOffset=i.yOffset=0,i.force3D=bn.force3D,i.renderTransform=i.svg?BP:xy?Ty:zP,i.uncache=0,i},Gu=function(e){return(e=e.split(" "))[0]+" "+e[1]},If=function(e,t,i){var r=Yt(t);return xt(parseFloat(t)+parseFloat(Dr(e,"x",i+"px",r)))+r},zP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ty(e,t)},jr="0deg",ea="0px",Yr=") ",Ty=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,m=i.transformPerspective,f=i.force3D,g=i.target,v=i.zOrigin,y="",S=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==jr||c!==jr)){var T=parseFloat(c)*xo,E=Math.sin(T),C=Math.cos(T),M;T=parseFloat(d)*xo,M=Math.cos(T),o=If(g,o,E*M*-v),a=If(g,a,-Math.sin(T)*-v),l=If(g,l,C*M*-v+v)}m!==ea&&(y+="perspective("+m+Yr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==ea||a!==ea||l!==ea)&&(y+=l!==ea||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yr),u!==jr&&(y+="rotate("+u+Yr),c!==jr&&(y+="rotateY("+c+Yr),d!==jr&&(y+="rotateX("+d+Yr),(h!==jr||p!==jr)&&(y+="skew("+h+", "+p+Yr),(x!==1||_!==1)&&(y+="scale("+x+", "+_+Yr),g.style[lt]=y||"translate(0, 0)"},BP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,_=i.yOrigin,m=i.xOffset,f=i.yOffset,g=i.forceCSS,v=parseFloat(o),y=parseFloat(a),S,T,E,C,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=xo,u*=xo,S=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-h,C=Math.cos(l-u)*h,u&&(c*=xo,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,C*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),S*=M,T*=M)),S=xt(S),T=xt(T),E=xt(E),C=xt(C)):(S=d,C=h,T=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Dr(p,"x",o,"px"),y=Dr(p,"y",a,"px")),(x||_||m||f)&&(v=xt(v+x-(x*S+_*E)+m),y=xt(y+_-(x*T+_*C)+f)),(r||s)&&(M=p.getBBox(),v=xt(v+r/100*M.width),y=xt(y+s/100*M.height)),M="matrix("+S+","+T+","+E+","+C+","+v+","+y+")",p.setAttribute("transform",M),g&&(p.style[lt]=M)},HP=function(e,t,i,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*dg)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*dg)%o-~~(u/o)*o)),e._pt=h=new _n(e._pt,t,i,r,u,TP),h.e=c,h.u="deg",e._props.push(i),h},xg=function(e,t){for(var i in t)e[i]=t[i];return e},VP=function(e,t,i){var r=xg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[lt]=t,a=Ya(i,1),Xa(i,lt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[lt],o[lt]=t,a=Ya(i,1),o[lt]=u);for(l in Ki)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Yt(u),x=Yt(c),d=p!==x?Dr(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new _n(e._pt,a,l,d,h-d,$h),e._pt.u=x||0,e._props.push(l));xg(a,r)};mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Vu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return ki(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,_){return p[x]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,d)}});var wy={name:"css",register:Zh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,_,m,f,g,v,y,S,T,E,C;_p||Zh(),this.styles=this.styles||vy(e),C=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Tn[_]&&ay(_,t,i,r,e,s)))){if(p=typeof c,x=Vu[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Va(c)),x)x(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ar.lastIndex=0,Ar.test(u)||(m=Yt(u),f=Yt(c)),f?m!==f&&(u=Dr(e,_,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Ft(u)&&~u.indexOf("random(")&&(u=Va(u)),Yt(u+"")||(u+=bn.units[_]||Yt(ki(e,_))||""),(u+"").charAt(1)==="="&&(u=ki(e,_))):u=ki(e,_),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),_ in xi&&(_==="autoAlpha"&&(h===1&&ki(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,a.visibility),dr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ki,v){if(this.styles.save(_),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ya(e,t.parseTransform),T=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new _n(this._pt,a,lt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new _n(this._pt,S,"scaleY",S.scaleY,(g?go(S.scaleY,g+d):d)-S.scaleY||0,$h),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(ci,0,a[ci]),c=FP(c),S.svg?Qh(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==S.zOrigin&&dr(this,S,"zOrigin",S.zOrigin,f),dr(this,a,_,Gu(u),Gu(c)));continue}else if(_==="svgOrigin"){Qh(e,c,1,T,0,this);continue}else if(_ in My){HP(this,S,_,h,g?go(h,g+c):c);continue}else if(_==="smoothOrigin"){dr(this,S,"smooth",S.smooth,c);continue}else if(_==="force3D"){S[_]=c;continue}else if(_==="transform"){VP(this,c,e);continue}}else _ in a||(_=Oo(_)||_);if(v||(d||d===0)&&(h||h===0)&&!EP.test(c)&&_ in a)m=(u+"").substr((h+"").length),d||(d=0),f=Yt(c)||(_ in bn.units?bn.units[_]:m),m!==f&&(h=Dr(e,_,u,f)),this._pt=new _n(this._pt,v?S:a,_,h,(g?go(h,g+d):d)-h,!v&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?AP:$h),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=wP);else if(_ in a)OP.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){ap(_,c);continue}v||(_ in a?C.push(_,0,a[_]):C.push(_,1,u||e[_])),o.push(_)}}E&&dy(this)},render:function(e,t){if(t.tween._time||!gp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ki,aliases:xi,getSetter:function(e,t,i){var r=xi[t];return r&&r.indexOf(",")<0&&(t=r),t in Ki&&t!==ci&&(e._gsap.x||ki(e,"x"))?i&&hg===i?t==="scale"?bP:PP:(hg=i||{})&&(t==="scale"?LP:DP):e.style&&!rp(e.style[t])?RP:~t.indexOf("-")?CP:pp(e,t)},core:{_removeProperty:Xa,_getMatrix:xp}};gn.utils.checkPrefix=Oo;gn.core.getStyleSaver=vy;(function(n,e,t,i){var r=mn(n+","+e+","+t,function(s){Ki[s]=1});mn(e,function(s){bn.units[s]="deg",My[s]=1}),xi[r[13]]=n+","+e,mn(i,function(s){var o=s.split(":");xi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){bn.units[n]="px"});gn.registerPlugin(wy);var lu=gn.registerPlugin(wy)||gn;lu.core.Tween;class GP{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),u=Math.floor(t+a),c=(3-Math.sqrt(3))/6,d=(l+u)*c,h=l-d,p=u-d,x=e-h,_=t-p;let m,f;x>_?(m=1,f=0):(m=0,f=1);const g=x-m+c,v=_-f+c,y=x-1+2*c,S=_-1+2*c,T=l&255,E=u&255,C=this.perm[T+this.perm[E]]%12,M=this.perm[T+m+this.perm[E+f]]%12,w=this.perm[T+1+this.perm[E+1]]%12;let k=.5-x*x-_*_;k<0?i=0:(k*=k,i=k*k*this.dot(this.grad3[C],x,_));let j=.5-g*g-v*v;j<0?r=0:(j*=j,r=j*j*this.dot(this.grad3[M],g,v));let U=.5-y*y-S*S;return U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[w],y,S)),70*(i+r+s)}noise3d(e,t,i){let r,s,o,a;const l=.3333333333333333,u=(e+t+i)*l,c=Math.floor(e+u),d=Math.floor(t+u),h=Math.floor(i+u),p=1/6,x=(c+d+h)*p,_=c-x,m=d-x,f=h-x,g=e-_,v=t-m,y=i-f;let S,T,E,C,M,w;g>=v?v>=y?(S=1,T=0,E=0,C=1,M=1,w=0):g>=y?(S=1,T=0,E=0,C=1,M=0,w=1):(S=0,T=0,E=1,C=1,M=0,w=1):v<y?(S=0,T=0,E=1,C=0,M=1,w=1):g<y?(S=0,T=1,E=0,C=0,M=1,w=1):(S=0,T=1,E=0,C=1,M=1,w=0);const k=g-S+p,j=v-T+p,U=y-E+p,B=g-C+2*p,H=v-M+2*p,K=y-w+2*p,W=g-1+3*p,L=v-1+3*p,N=y-1+3*p,O=c&255,I=d&255,F=h&255,oe=this.perm[O+this.perm[I+this.perm[F]]]%12,ee=this.perm[O+S+this.perm[I+T+this.perm[F+E]]]%12,se=this.perm[O+C+this.perm[I+M+this.perm[F+w]]]%12,fe=this.perm[O+1+this.perm[I+1+this.perm[F+1]]]%12;let ye=.6-g*g-v*v-y*y;ye<0?r=0:(ye*=ye,r=ye*ye*this.dot3(this.grad3[oe],g,v,y));let ve=.6-k*k-j*j-U*U;ve<0?s=0:(ve*=ve,s=ve*ve*this.dot3(this.grad3[ee],k,j,U));let Ue=.6-B*B-H*H-K*K;Ue<0?o=0:(Ue*=Ue,o=Ue*Ue*this.dot3(this.grad3[se],B,H,K));let Je=.6-W*W-L*L-N*N;return Je<0?a=0:(Je*=Je,a=Je*Je*this.dot3(this.grad3[fe],W,L,N)),32*(r+s+o+a)}noise4d(e,t,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let c,d,h,p,x;const _=(e+t+i+r)*l,m=Math.floor(e+_),f=Math.floor(t+_),g=Math.floor(i+_),v=Math.floor(r+_),y=(m+f+g+v)*u,S=m-y,T=f-y,E=g-y,C=v-y,M=e-S,w=t-T,k=i-E,j=r-C,U=M>w?32:0,B=M>k?16:0,H=w>k?8:0,K=M>j?4:0,W=w>j?2:0,L=k>j?1:0,N=U+B+H+K+W+L,O=o[N][0]>=3?1:0,I=o[N][1]>=3?1:0,F=o[N][2]>=3?1:0,oe=o[N][3]>=3?1:0,ee=o[N][0]>=2?1:0,se=o[N][1]>=2?1:0,fe=o[N][2]>=2?1:0,ye=o[N][3]>=2?1:0,ve=o[N][0]>=1?1:0,Ue=o[N][1]>=1?1:0,Je=o[N][2]>=1?1:0,be=o[N][3]>=1?1:0,V=M-O+u,ft=w-I+u,Se=k-F+u,we=j-oe+u,Me=M-ee+2*u,qe=w-se+2*u,Ie=k-fe+2*u,Re=j-ye+2*u,Ve=M-ve+3*u,rt=w-Ue+3*u,ht=k-Je+3*u,P=j-be+3*u,A=M-1+4*u,$=w-1+4*u,re=k-1+4*u,ie=j-1+4*u,b=m&255,J=f&255,te=g&255,Y=v&255,pe=a[b+a[J+a[te+a[Y]]]]%32,xe=a[b+O+a[J+I+a[te+F+a[Y+oe]]]]%32,ge=a[b+ee+a[J+se+a[te+fe+a[Y+ye]]]]%32,me=a[b+ve+a[J+Ue+a[te+Je+a[Y+be]]]]%32,de=a[b+1+a[J+1+a[te+1+a[Y+1]]]]%32;let Ee=.6-M*M-w*w-k*k-j*j;Ee<0?c=0:(Ee*=Ee,c=Ee*Ee*this.dot4(s[pe],M,w,k,j));let Le=.6-V*V-ft*ft-Se*Se-we*we;Le<0?d=0:(Le*=Le,d=Le*Le*this.dot4(s[xe],V,ft,Se,we));let D=.6-Me*Me-qe*qe-Ie*Ie-Re*Re;D<0?h=0:(D*=D,h=D*D*this.dot4(s[ge],Me,qe,Ie,Re));let le=.6-Ve*Ve-rt*rt-ht*ht-P*P;le<0?p=0:(le*=le,p=le*le*this.dot4(s[me],Ve,rt,ht,P));let q=.6-A*A-$*$-re*re-ie*ie;return q<0?x=0:(q*=q,x=q*q*this.dot4(s[de],A,$,re,ie)),27*(c+d+h+p+x)}}const yg={type:"change"},Nf={type:"start"},Sg={type:"end"};class WP extends Ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ve),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yg),i.update(),s=r.NONE},this.update=function(){const b=new G,J=new br().setFromUnitVectors(e.up,new G(0,1,0)),te=J.clone().invert(),Y=new G,pe=new br,xe=new G,ge=2*Math.PI;return function(){const de=i.object.position;b.copy(de).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&M(E()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ee=i.minAzimuthAngle,Le=i.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Le)&&(Ee<-Math.PI?Ee+=ge:Ee>Math.PI&&(Ee-=ge),Le<-Math.PI?Le+=ge:Le>Math.PI&&(Le-=ge),Ee<=Le?a.theta=Math.max(Ee,Math.min(Le,a.theta)):a.theta=a.theta>(Ee+Le)/2?Math.max(Ee,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),b.setFromSpherical(a),b.applyQuaternion(te),de.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||Y.distanceToSquared(i.object.position)>o||8*(1-pe.dot(i.object.quaternion))>o||xe.distanceToSquared(i.target)>0?(i.dispatchEvent(yg),Y.copy(i.object.position),pe.copy(i.object.quaternion),xe.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",P),i.domElement.removeEventListener("pointerdown",Se),i.domElement.removeEventListener("pointercancel",Me),i.domElement.removeEventListener("wheel",Re),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Me),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ve),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ig,l=new ig;let u=1;const c=new G;let d=!1;const h=new ke,p=new ke,x=new ke,_=new ke,m=new ke,f=new ke,g=new ke,v=new ke,y=new ke,S=[],T={};function E(){return 2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function M(b){l.theta-=b}function w(b){l.phi-=b}const k=function(){const b=new G;return function(te,Y){b.setFromMatrixColumn(Y,0),b.multiplyScalar(-te),c.add(b)}}(),j=function(){const b=new G;return function(te,Y){i.screenSpacePanning===!0?b.setFromMatrixColumn(Y,1):(b.setFromMatrixColumn(Y,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(te),c.add(b)}}(),U=function(){const b=new G;return function(te,Y){const pe=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;b.copy(xe).sub(i.target);let ge=b.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),k(2*te*ge/pe.clientHeight,i.object.matrix),j(2*Y*ge/pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(te*(i.object.right-i.object.left)/i.object.zoom/pe.clientWidth,i.object.matrix),j(Y*(i.object.top-i.object.bottom)/i.object.zoom/pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){h.set(b.clientX,b.clientY)}function W(b){g.set(b.clientX,b.clientY)}function L(b){_.set(b.clientX,b.clientY)}function N(b){p.set(b.clientX,b.clientY),x.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*x.x/J.clientHeight),w(2*Math.PI*x.y/J.clientHeight),h.copy(p),i.update()}function O(b){v.set(b.clientX,b.clientY),y.subVectors(v,g),y.y>0?B(C()):y.y<0&&H(C()),g.copy(v),i.update()}function I(b){m.set(b.clientX,b.clientY),f.subVectors(m,_).multiplyScalar(i.panSpeed),U(f.x,f.y),_.copy(m),i.update()}function F(b){b.deltaY<0?H(C()):b.deltaY>0&&B(C()),i.update()}function oe(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function ee(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(b,J)}}function se(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);_.set(b,J)}}function fe(){const b=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,te=Math.sqrt(b*b+J*J);g.set(0,te)}function ye(){i.enableZoom&&fe(),i.enablePan&&se()}function ve(){i.enableZoom&&fe(),i.enableRotate&&ee()}function Ue(b){if(S.length==1)p.set(b.pageX,b.pageY);else{const te=ie(b),Y=.5*(b.pageX+te.x),pe=.5*(b.pageY+te.y);p.set(Y,pe)}x.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*x.x/J.clientHeight),w(2*Math.PI*x.y/J.clientHeight),h.copy(p)}function Je(b){if(S.length===1)m.set(b.pageX,b.pageY);else{const J=ie(b),te=.5*(b.pageX+J.x),Y=.5*(b.pageY+J.y);m.set(te,Y)}f.subVectors(m,_).multiplyScalar(i.panSpeed),U(f.x,f.y),_.copy(m)}function be(b){const J=ie(b),te=b.pageX-J.x,Y=b.pageY-J.y,pe=Math.sqrt(te*te+Y*Y);v.set(0,pe),y.set(0,Math.pow(v.y/g.y,i.zoomSpeed)),B(y.y),g.copy(v)}function V(b){i.enableZoom&&be(b),i.enablePan&&Je(b)}function ft(b){i.enableZoom&&be(b),i.enableRotate&&Ue(b)}function Se(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",Me)),A(b),b.pointerType==="touch"?rt(b):qe(b))}function we(b){i.enabled!==!1&&(b.pointerType==="touch"?ht(b):Ie(b))}function Me(b){$(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Me)),i.dispatchEvent(Sg),s=r.NONE}function qe(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Rs.DOLLY:if(i.enableZoom===!1)return;W(b),s=r.DOLLY;break;case Rs.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;L(b),s=r.PAN}else{if(i.enableRotate===!1)return;K(b),s=r.ROTATE}break;case Rs.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;K(b),s=r.ROTATE}else{if(i.enablePan===!1)return;L(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nf)}function Ie(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(b);break;case r.DOLLY:if(i.enableZoom===!1)return;O(b);break;case r.PAN:if(i.enablePan===!1)return;I(b);break}}function Re(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Nf),F(b),i.dispatchEvent(Sg))}function Ve(b){i.enabled===!1||i.enablePan===!1||oe(b)}function rt(b){switch(re(b),S.length){case 1:switch(i.touches.ONE){case Cs.ROTATE:if(i.enableRotate===!1)return;ee(),s=r.TOUCH_ROTATE;break;case Cs.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Cs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(),s=r.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nf)}function ht(b){switch(re(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Je(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(b),i.update();break;default:s=r.NONE}}function P(b){i.enabled!==!1&&b.preventDefault()}function A(b){S.push(b)}function $(b){delete T[b.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==b.pointerId){S.splice(J,1);return}}function re(b){let J=T[b.pointerId];J===void 0&&(J=new ke,T[b.pointerId]=J),J.set(b.pageX,b.pageY)}function ie(b){const J=b.pointerId===S[0].pointerId?S[1]:S[0];return T[J.pointerId]}i.domElement.addEventListener("contextmenu",P),i.domElement.addEventListener("pointerdown",Se),i.domElement.addEventListener("pointercancel",Me),i.domElement.addEventListener("wheel",Re,{passive:!1}),this.update()}}function XP(n,e,t,i,r,s,o){var l;const a=e.geometry.attributes.position.count;for(let u=0;u<a;u++){const c=(l=e.geometry.boundingSphere)==null?void 0:l.radius,d=2,h=window.performance.now()/600,p=1e-6,x=e.geometry.attributes.uv.getX(u)*Math.PI*16,_=e.geometry.attributes.uv.getY(u)*Math.PI*16,m=e.geometry.attributes.uv.getZ(u)*Math.PI*16,f=x+h,g=Math.sin(f)*o,v=_+h,y=Math.cos(v)*o,S=u*3,T=u*3+1,E=u*3+2;if(c!==void 0){const C=c/36+r+n.noise3d(x+h*p*7,_+h*p*8,m+h*p*9)*d*s;e.geometry.attributes.position.setX(u,t[S]+i[S]*(C+g+y)),e.geometry.attributes.position.setY(u,t[T]+i[T]*(C+g+y)),e.geometry.attributes.position.setZ(u,t[E]+i[E]*(C+g+y))}}e.geometry.computeVertexNormals(),e.geometry.attributes.position.needsUpdate=!0}function jP(n,e,t){const i=Date.now()/400,r=e.geometry.attributes.position.count,s=2;for(let o=0;o<r;o++){const a=e.geometry.attributes.position.getX(o),l=e.geometry.attributes.position.getY(o),u=Math.sin(a+i),c=Math.cos(l+i),d=(n.noise(a+i*3e-4,l+i*1e-4)+0)*t*s;e.geometry.attributes.position.setZ(o,d+u+c)}e.geometry.computeVertexNormals(),e.geometry.attributes.position.needsUpdate=!0}function YP(n,e,t){return(n-e)/(t-e)}function Of(n,e,t,i,r){const s=YP(n,e,t),o=r-i;return i+s*o}function Mg(n){return n.reduce(function(t,i){return t+i})/n.length}function qP(n){return n.reduce(function(e,t){return Math.max(e,t)})}function $P(n,e){const t=document.getElementById("play-button");if(t)t==null||t.addEventListener("click",()=>{n.state==="suspended"&&n.resume(),t.dataset.playing==="false"?(e.play(),t.dataset.playing="true"):t.dataset.playing==="true"&&(e.pause(),t.dataset.playing="false")},!1),e.addEventListener("ended",()=>{t.dataset.playing="false"},!1);else throw new Error("no audio element")}function KP(n,e){const t=new WP(n,e);return t.enableDamping=!0,t.enablePan=!1,t.enableZoom=!1,t.autoRotate=!0,t.autoRotateSpeed=1,t}function ZP(n,e,t){window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,e.aspect=n.width/n.height,e.updateProjectionMatrix(),t.setSize(n.width,n.height)})}function QP(){const n=new np(10,256,128),e=new Tx({color:"#e6ffa8",wireframe:!0});return[new ai(n,e),n]}function JP(){const n=new cc(800,800,60,60),e=new Tx({color:"#00ff83",wireframe:!0}),t=new ai(n,e),i=new ai(n,e);return[t,i,n]}function eb(){const n=new EC(16777215,1,100);return n.intensity=5.9,n.position.set(-30,40,20),n.castShadow=!0,n}const Eg=new GP,tb=n=>{const e=new yC,t=new oa,i={width:window.innerWidth,height:window.innerHeight},r=new wn(45,i.width/i.height,.1,1e3),s=new Ex;s.setClearColor(0),s.setSize(i.width,i.height),s.setPixelRatio(2),n.appendChild(s.domElement),r.position.set(0,0,100);const o=KP(r,n);ZP(i,r,s);const[a,l,u,c,d,h]=ib(r);$P(a,l);const[p,x]=QP();t.add(p);const[_,m,f]=JP();_.rotation.x=.5*Math.PI,_.position.set(0,30,0),t.add(_),m.rotation.x=.5*Math.PI,m.position.set(0,-30,0),t.add(m);const g=eb();g.lookAt(p.position),e.add(g);const v=new TC(11184810);e.add(v);const y=document.querySelector("#volume");if(y)y.addEventListener("input",()=>{c.gain.value=parseFloat(y.value)},!1);else throw new Error("no volume control");const S=document.querySelector("#panner");if(S)S.addEventListener("input",()=>{d.pan.value=parseFloat(S.value)},!1);else throw new Error("no panner control");const T=lu.timeline({defaults:{duration:1}}),E=lu.timeline({defaults:{duration:3}});T.fromTo(p.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),E.fromTo("nav",{y:"-100%"},{y:"0%"}),E.fromTo(".header-title",{opacity:0},{opacity:1});let C=!1,M=[];window.addEventListener("mousedown",()=>C=!0),window.addEventListener("mouseup",()=>C=!1);const w=(N,O,I)=>"#"+[N,O,I].map(F=>F.toString(16).padStart(2,"0")).join("");window.addEventListener("mousemove",N=>{if(C){M=[Math.round(N.pageX/i.width*255),Math.round(N.pageY/i.height*255),175];const O=new Ye(w(M[0],M[1],M[2]));lu.to(p.material.color,{r:O.r,g:O.g,b:O.b})}});const k=[],j=new G,U=x.attributes.position;for(let N=0;N<U.count;N++)j.fromBufferAttribute(U,N).normalize(),k.push(j.clone());x.userData.nPosSphere=k;const B=new Ax;e.add(t);const H=JSON.parse(JSON.stringify(x.attributes.position.array)),K=JSON.parse(JSON.stringify(x.attributes.normal.array)),W=.2,L=()=>{B.getElapsedTime(),h.getByteFrequencyData(u);const N=u.slice(0,u.length/2-1),O=u.slice(u.length/2-1,u.length-1),I=qP(N),F=Mg(N),oe=Mg(O),ee=I/N.length,se=F/N.length,fe=oe/O.length;XP(Eg,p,H,K,Of(Math.pow(ee,.8),0,1,0,8),Of(fe,0,2,0,4),W),jP(Eg,_,Of(se,0,1,.5,4)),f.computeVertexNormals(),f.attributes.position.needsUpdate=!0,o.update(),requestAnimationFrame(L),s.render(e,r)};L()},nb=()=>{const[n,e]=Ae.useState(!1),t=Ae.useCallback(i=>{i!==null&&!n&&(tb(i),e(!0))},[n]);return $e.jsx("div",{className:"webgL",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},ref:t})};function ib(n){const e=new RC;n.add(e);const t=new CC(e);t.autoplay=!0,t.setLoop(!0);const i=new window.AudioContext,r=document.querySelector("audio"),s=i.createMediaElementSource(r),o=i.createAnalyser(),a=i.createGain(),l={pan:0},u=new StereoPannerNode(i,l);s.connect(a).connect(u).connect(o).connect(i.destination),o.fftSize=1024;const c=o.frequencyBinCount,d=new Uint8Array(c);return[i,r,d,a,u,o]}function rb(){return $e.jsx($e.Fragment,{children:$e.jsx("h1",{className:"header-title",children:"Let's Dance"})})}function sb(){return $e.jsx($e.Fragment,{children:$e.jsxs("nav",{children:[$e.jsx("a",{href:"/",children:"Synesthesia"}),$e.jsx("ul",{})]})})}/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Wu.apply(this,arguments)}var pr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(pr||(pr={}));const Tg="popstate";function ob(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Jh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Ay(r)}return lb(e,t,null,n)}function vn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function yp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ab(){return Math.random().toString(36).substr(2,8)}function wg(n,e){return{usr:n.state,key:n.key,idx:e}}function Jh(n,e,t,i){return t===void 0&&(t=null),Wu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?mc(e):e,{state:t,key:e&&e.key||i||ab()})}function Ay(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function mc(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function lb(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=pr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Wu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=pr.Pop;let m=c(),f=m==null?null:m-u;u=m,l&&l({action:a,location:_.location,delta:f})}function h(m,f){a=pr.Push;let g=Jh(_.location,m,f);t&&t(g,m),u=c()+1;let v=wg(g,u),y=_.createHref(g);try{o.pushState(v,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function p(m,f){a=pr.Replace;let g=Jh(_.location,m,f);t&&t(g,m),u=c();let v=wg(g,u),y=_.createHref(g);o.replaceState(v,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function x(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:Ay(m);return vn(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let _={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Tg,d),l=m,()=>{r.removeEventListener(Tg,d),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return _}var Ag;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ag||(Ag={}));function ub(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?mc(e):e,r=Py(i.pathname||"/",t);if(r==null)return null;let s=Ry(n);cb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=xb(s[a],Mb(r));return o}function Ry(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(vn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=yo([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(vn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ry(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gb(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Cy(s.path))r(s,o,l)}),e}function Cy(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Cy(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function cb(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:vb(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const fb=/^:\w+$/,hb=3,db=2,pb=1,mb=10,_b=-2,Rg=n=>n==="*";function gb(n,e){let t=n.split("/"),i=t.length;return t.some(Rg)&&(i+=_b),e&&(i+=db),t.filter(r=>!Rg(r)).reduce((r,s)=>r+(fb.test(s)?hb:s===""?pb:mb),i)}function vb(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function xb(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let o=0;o<t.length;++o){let a=t[o],l=o===t.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=yb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;s.push({params:i,pathname:yo([r,c.pathname]),pathnameBase:Tb(yo([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=yo([r,c.pathnameBase]))}return s}function yb(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Sb(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Eb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:n}}function Sb(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),yp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return n.endsWith("*")?(i.push("*"),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Mb(n){try{return decodeURI(n)}catch(e){return yp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Eb(n,e){try{return decodeURIComponent(n)}catch(t){return yp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Py(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const yo=n=>n.join("/").replace(/\/\/+/g,"/"),Tb=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function wb(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const by=["post","put","patch","delete"];new Set(by);const Ab=["get",...by];new Set(Ab);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ed(){return ed=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ed.apply(this,arguments)}const Rb=Ae.createContext(null),Cb=Ae.createContext(null),Ly=Ae.createContext(null),_c=Ae.createContext(null),gc=Ae.createContext({outlet:null,matches:[],isDataRoute:!1}),Dy=Ae.createContext(null);function Sp(){return Ae.useContext(_c)!=null}function Pb(){return Sp()||vn(!1),Ae.useContext(_c).location}function bb(n,e){return Lb(n,e)}function Lb(n,e,t){Sp()||vn(!1);let{navigator:i}=Ae.useContext(Ly),{matches:r}=Ae.useContext(gc),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Pb(),u;if(e){var c;let _=typeof e=="string"?mc(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||vn(!1),u=_}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=ub(n,{pathname:h}),x=Ob(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:yo([a,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:yo([a,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),r,t);return e&&x?Ae.createElement(_c.Provider,{value:{location:ed({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pr.Pop}},x):x}function Db(){let n=Bb(),e=wb(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return Ae.createElement(Ae.Fragment,null,Ae.createElement("h2",null,"Unexpected Application Error!"),Ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ae.createElement("pre",{style:r},t):null,s)}const Ub=Ae.createElement(Db,null);class Ib extends Ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?Ae.createElement(gc.Provider,{value:this.props.routeContext},Ae.createElement(Dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nb(n){let{routeContext:e,match:t,children:i}=n,r=Ae.useContext(Rb);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Ae.createElement(gc.Provider,{value:e},i)}function Ob(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var r;if((r=t)!=null&&r.errors)n=t.matches;else return null}let s=n,o=(i=t)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||vn(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;t&&(d=l.route.errorElement||Ub);let h=e.concat(s.slice(0,u+1)),p=()=>{let x;return c?x=d:l.route.Component?x=Ae.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,Ae.createElement(Nb,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:t!=null},children:x})};return t&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?Ae.createElement(Ib,{location:t.location,revalidation:t.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Cg;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(Cg||(Cg={}));var Xu;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(Xu||(Xu={}));function Fb(n){let e=Ae.useContext(Cb);return e||vn(!1),e}function kb(n){let e=Ae.useContext(gc);return e||vn(!1),e}function zb(n){let e=kb(),t=e.matches[e.matches.length-1];return t.route.id||vn(!1),t.route.id}function Bb(){var n;let e=Ae.useContext(Dy),t=Fb(Xu.UseRouteError),i=zb(Xu.UseRouteError);return e||((n=t.errors)==null?void 0:n[i])}function Uy(n){vn(!1)}function Hb(n){let{basename:e="/",children:t=null,location:i,navigationType:r=pr.Pop,navigator:s,static:o=!1}=n;Sp()&&vn(!1);let a=e.replace(/^\/*/,"/"),l=Ae.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=mc(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=i,x=Ae.useMemo(()=>{let _=Py(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:h,key:p},navigationType:r}},[a,u,c,d,h,p,r]);return x==null?null:Ae.createElement(Ly.Provider,{value:l},Ae.createElement(_c.Provider,{children:t,value:x}))}function Vb(n){let{children:e,location:t}=n;return bb(td(e),t)}var Pg;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(Pg||(Pg={}));new Promise(()=>{});function td(n,e){e===void 0&&(e=[]);let t=[];return Ae.Children.forEach(n,(i,r)=>{if(!Ae.isValidElement(i))return;let s=[...e,r];if(i.type===Ae.Fragment){t.push.apply(t,td(i.props.children,s));return}i.type!==Uy&&vn(!1),!i.props.index||!i.props.children||vn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=td(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Gb="startTransition",bg=iS[Gb];function Wb(n){let{basename:e,children:t,future:i,window:r}=n,s=Ae.useRef();s.current==null&&(s.current=ob({window:r,v5Compat:!0}));let o=s.current,[a,l]=Ae.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=Ae.useCallback(d=>{u&&bg?bg(()=>l(d)):l(d)},[l,u]);return Ae.useLayoutEffect(()=>o.listen(c),[o,c]),Ae.createElement(Hb,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var Lg;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(Lg||(Lg={}));var Dg;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));const Xb="/assets/radio-man-991508e8.mp3";function jb(){return $e.jsxs("div",{id:"audio",children:[$e.jsx("audio",{src:Xb}),$e.jsx("label",{children:"Volume"}),$e.jsx("input",{type:"range",id:"volume",min:"0",max:"2",defaultValue:"1",step:"0.01"}),$e.jsx("label",{children:"Panner"}),$e.jsx("input",{type:"range",id:"panner",min:"-1",max:"1",defaultValue:"0",step:"0.01"}),$e.jsx("button",{id:"play-button","data-playing":"false",role:"switch","aria-checked":"false",children:"Play/Pause"})]})}function Yb(){return $e.jsx($e.Fragment,{children:$e.jsxs(Wb,{children:[$e.jsx(sb,{}),$e.jsx(rb,{}),$e.jsx(jb,{}),$e.jsx(Vb,{children:$e.jsx(Uy,{path:"/",element:$e.jsx(nb,{})})})]})})}const Iy=document.getElementById("root");if(Iy===null)throw new Error("Root container missing in index.html");const qb=Ff.createRoot(Iy);qb.render($e.jsx($e.Fragment,{children:$e.jsx(Vg.StrictMode,{children:$e.jsx(Yb,{})})}));
