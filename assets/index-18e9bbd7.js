/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function se(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),category:document.querySelectorAll(".menu-list"),ulRef:document.querySelector(".menu")}}function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:ve}=Object.prototype,{getPrototypeOf:oe}=Object,$=(e=>t=>{const n=ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>$(t)===e),z=e=>t=>typeof t===e,{isArray:x}=Array,B=z("undefined");function Ve(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Te=R("ArrayBuffer");function We(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Te(e.buffer),t}const Ke=z("string"),E=z("function"),Le=z("number"),J=e=>e!==null&&typeof e=="object",Ge=e=>e===!0||e===!1,D=e=>{if($(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=R("Date"),Qe=R("File"),Ye=R("Blob"),Ze=R("FileList"),et=e=>J(e)&&E(e.pipe),tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=$(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},nt=R("URLSearchParams"),rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xe=e=>!B(e)&&e!==Pe;function ee(){const{caseless:e}=xe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ne(t,s)||s;D(t[o])&&D(r)?t[o]=ee(t[o],r):D(r)?t[o]=ee({},r):x(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,o)=>{n&&E(s)?e[o]=Oe(s,n):e[o]=s},{allOwnKeys:r}),e),ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),it=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},at=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},lt=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},dt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pt=R("HTMLFormElement"),ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mt=R("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},yt=e=>{Ce(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return x(e)?r(e):r(String(e).split(t)),n},gt=()=>{},Et=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",de="0123456789",ke={DIGIT:de,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+de},wt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function St(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const At=e=>{const t=new Array(10),n=(r,s)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=x(r)?[]:{};return F(r,(i,l)=>{const d=n(i,s+1);!B(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Rt=R("AsyncFunction"),Ot=e=>e&&(J(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:x,isArrayBuffer:Te,isBuffer:Ve,isFormData:tt,isArrayBufferView:We,isString:Ke,isNumber:Le,isBoolean:Ge,isObject:J,isPlainObject:D,isUndefined:B,isDate:Xe,isFile:Qe,isBlob:Ye,isRegExp:mt,isFunction:E,isStream:et,isURLSearchParams:nt,isTypedArray:ut,isFileList:Ze,forEach:F,merge:ee,extend:st,trim:rt,stripBOM:ot,inherits:it,toFlatObject:at,kindOf:$,kindOfTest:R,endsWith:ct,toArray:lt,forEachEntry:ft,matchAll:dt,isHTMLForm:pt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Ce,freezeMethods:yt,toObjectSet:bt,toCamelCase:ht,noop:gt,toFiniteNumber:Et,findKey:Ne,global:Pe,isContextDefined:xe,ALPHABET:ke,generateString:wt,isSpecCompliantForm:St,toJSONObject:At,isAsyncFn:Rt,isThenable:Ot};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(m,Fe);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Tt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function _e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=_e(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Lt(e){return a.isArray(e)&&!e.some(te)}const Nt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,O){let w=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Lt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(w=a.toArray(f)))return h=_e(h),w.forEach(function(j,Je){!(a.isUndefined(j)||j===null)&&t.append(i===!0?pe([h],Je,o):i===null?h:h+"[]",c(j))}),!1}return te(f)?!0:(t.append(pe(O,h,o),c(f)),!1)}const p=[],g=Object.assign(Nt,{defaultVisitor:u,convertValue:c,isVisitable:te});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(w,N){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(N)?N.trim():N,h,g))===!0&&y(w,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&v(e,this,t)}const je=ie.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=xt,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ct=typeof URLSearchParams<"u"?URLSearchParams:ie,kt=typeof FormData<"u"?FormData:null,Bt=typeof Blob<"u"?Blob:null,Ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_t=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:Ct,FormData:kt,Blob:Bt},isStandardBrowserEnv:Ft,isStandardBrowserWebWorkerEnv:_t,protocols:["http","https","file","blob","url","data"]};function jt(e,t){return v(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Dt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ht(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ht(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Dt(r),s,n,0)}),n}return null}const Ut={"Content-Type":void 0};function Mt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return jt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return v(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Mt(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(Ut)});const ae=V,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function $t(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,c){const u=C(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=H(l))}const i=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!zt(t)?i(It(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return $t(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=H(s),delete n[o];return}const l=t?Jt(o):String(o).trim();l!==o&&delete n[o],n[l]=H(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=C(i);r[l]||(vt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const T=W;function X(e,t){const n=this||ae,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Me(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!Kt(t)?Gt(e,t):t}const Xt=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Yt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function be(e,t){let n=0;const r=Yt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Zt=typeof XMLHttpRequest<"u",en=Zt&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=qe(e.baseURL,e.url);c.open(e.method.toUpperCase(),De(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Vt(function(w){n(w),d()},function(w){r(w),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||He;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const y=(e.withCredentials||Xt(u))&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new _(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=Qt(u);if(g&&A.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},U={http:Tt,xhr:en};a.forEach(U,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?U[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(U,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:U};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function ge(e){return Q(e),e.headers=T.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Me(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Ee=e=>e instanceof T?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(Ee(c),Ee(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||s,g=p(e[u],t[u],u);a.isUndefined(g)&&p!==l||(n[u]=g)}),n}const Ie="1.4.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ie+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function nn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:nn,validators:ce},L=ne.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,g;if(!d){const f=[ge.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),g=f.length,u=Promise.resolve(n);p<g;)u=u.then(f[p++],f[p++]);return u}g=l.length;let y=n;for(p=0;p<g;){const f=l[p++],h=l[p++];try{y=f(y)}catch(O){h.call(this,O);break}}try{u=ge.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=P(this.defaults,t);const n=qe(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const M=I;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new _(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const rn=le;function sn(e){return function(n){return e.apply(null,n)}}function on(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const an=re;function $e(e){const t=new M(e),n=Oe(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(P(e,s))},n}const b=$e(ae);b.Axios=M;b.CanceledError=_;b.CancelToken=rn;b.isCancel=Me;b.VERSION=Ie;b.toFormData=v;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=sn;b.isAxiosError=on;b.mergeConfig=P;b.AxiosHeaders=T;b.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=an;b.default=b;const ue=b;async function Se(e){try{return(await ue.get(`https://books-backend.p.goit.global/books/category?category=${e}`)).data}catch(t){console.log("catch error",t)}}async function Y(){console.log("fetching Top Books =>");try{const e=await ue.get("https://books-backend.p.goit.global/books/top-books");return console.log(e.data),e.data}catch(e){console.log("catch error",e)}}async function cn(){try{return(await ue.get("https://books-backend.p.goit.global/books/category-list")).data}catch(e){console.log("catch error",e)}}function Ae(e){return`  <a class="gallery-book-link" href="">
              <div class="gallery-book-card">
                <img class="gallery-book-cover" src="${e.book_image}"></img>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </a>`}function Z(e){return`  <a class="gallery-book-home-link" href="">
              <div class="gallery-book-card">
                <img class="gallery-book-cover" src="${e.book_image}"></img>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </a>`}const{galleryRef:k}=se();function q(e){if(k.innerHTML="",e.target.innerHTML==="See more"){k.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),k.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const s=e.target.dataset.category.split(" ").join("%20");Se(s).then(o=>o.map(i=>t.insertAdjacentHTML("beforeend",Ae(i))));return}if(e.target.innerHTML==="All categories"){ze();return}k.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.split(" ").pop()}</span></h2>`),k.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const n=e.target.innerHTML.split(" ").join("%20");Se(n).then(r=>r.map(s=>t.insertAdjacentHTML("beforeend",Ae(s))))}const{galleryRef:S}=se();function ze(){document.documentElement.clientWidth<768?(S.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),Y().then(e=>{for(let n of e)S.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),S.insertAdjacentHTML("beforeend",Z(n.books[0])),S.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",q)})):document.documentElement.clientWidth<1440?(S.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),Y().then(e=>{for(let r of e){S.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${r.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const s=t[t.length-1];for(let o=0;o<3;o++)s.insertAdjacentHTML("beforeend",Z(r.books[o]));S.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${r.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let r=0;r<n.length;r++)n[r].addEventListener("click",q)})):(S.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),Y().then(e=>{for(let r of e){S.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${r.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const s=t[t.length-1];for(let o=0;o<5;o++)s.insertAdjacentHTML("beforeend",Z(r.books[o]));S.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${r.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let r=0;r<n.length;r++)n[r].addEventListener("click",q)}))}const{ulRef:Re}=se();cn().then(e=>{for(let t of e)Re.insertAdjacentHTML("beforeend",`<li class="menu-category">${t.list_name}</li>`);Re.addEventListener("click",q)});ze();
