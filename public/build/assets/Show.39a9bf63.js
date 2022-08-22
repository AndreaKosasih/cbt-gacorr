import{L as gt}from"./Student.5c682182.js";import{u as xt,a0 as Ct,a1 as St,H as kt,L as Rt,m as j,a as Se,o as v,c as p,b as ke,w as Re,d as c,t as g,F as K,p as qe,e as C,g as R,n as Oe,h as P,i as U}from"./app.aa0e9c6c.js";import{S as qt}from"./sweetalert2.all.0b23ba7a.js";import{_ as Ot}from"./_plugin-vue_export-helper.cdc0426e.js";/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const B=1e3,H=60*B,F=60*H,Ne=24*F,Ae="abort",Te="end",Me="progress",Le="start",Pe="visibilitychange";var Nt=xt({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:e=>e>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:e=>e>=0},transform:{type:Function,default:e=>e}},emits:[Ae,Te,Me,Le],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/Ne)},hours(){return Math.floor(this.totalMilliseconds%Ne/F)},minutes(){return Math.floor(this.totalMilliseconds%F/H)},seconds(){return Math.floor(this.totalMilliseconds%H/B)},milliseconds(){return Math.floor(this.totalMilliseconds%B)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/F)},totalMinutes(){return Math.floor(this.totalMilliseconds/H)},totalSeconds(){return Math.floor(this.totalMilliseconds/B)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(Pe,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(Pe,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(Le),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const e=Math.min(this.totalMilliseconds,this.interval);if(e>0){let t,r;const n=s=>{t||(t=s),r||(r=s);const i=s-t;i>=e||i+(s-r)/2>=e?this.progress():this.requestId=requestAnimationFrame(n),r=s};this.requestId=requestAnimationFrame(n)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){!this.counting||(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(Me,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){!this.counting||(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(Ae))},end(){!this.counting||(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(Te))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return Ct(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}}),it={exports:{}},be={exports:{}},at=function(t,r){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return t.apply(r,s)}},At=at,S=Object.prototype.toString;function ye(e){return Array.isArray(e)}function ve(e){return typeof e>"u"}function Tt(e){return e!==null&&!ve(e)&&e.constructor!==null&&!ve(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function ot(e){return S.call(e)==="[object ArrayBuffer]"}function Mt(e){return S.call(e)==="[object FormData]"}function Lt(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ot(e.buffer),t}function Pt(e){return typeof e=="string"}function Ut(e){return typeof e=="number"}function ut(e){return e!==null&&typeof e=="object"}function V(e){if(S.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Dt(e){return S.call(e)==="[object Date]"}function jt(e){return S.call(e)==="[object File]"}function It(e){return S.call(e)==="[object Blob]"}function lt(e){return S.call(e)==="[object Function]"}function Bt(e){return ut(e)&&lt(e.pipe)}function Ht(e){return S.call(e)==="[object URLSearchParams]"}function Ft(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Vt(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function _e(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ye(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function pe(){var e={};function t(s,i){V(e[i])&&V(s)?e[i]=pe(e[i],s):V(s)?e[i]=pe({},s):ye(s)?e[i]=s.slice():e[i]=s}for(var r=0,n=arguments.length;r<n;r++)_e(arguments[r],t);return e}function $t(e,t,r){return _e(t,function(s,i){r&&typeof s=="function"?e[i]=At(s,r):e[i]=s}),e}function Jt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var y={isArray:ye,isArrayBuffer:ot,isBuffer:Tt,isFormData:Mt,isArrayBufferView:Lt,isString:Pt,isNumber:Ut,isObject:ut,isPlainObject:V,isUndefined:ve,isDate:Dt,isFile:jt,isBlob:It,isFunction:lt,isStream:Bt,isURLSearchParams:Ht,isStandardBrowserEnv:Vt,forEach:_e,merge:pe,extend:$t,trim:Ft,stripBOM:Jt},N=y;function Ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var dt=function(t,r,n){if(!r)return t;var s;if(n)s=n(r);else if(N.isURLSearchParams(r))s=r.toString();else{var i=[];N.forEach(r,function(l,o){l===null||typeof l>"u"||(N.isArray(l)?o=o+"[]":l=[l],N.forEach(l,function(u){N.isDate(u)?u=u.toISOString():N.isObject(u)&&(u=JSON.stringify(u)),i.push(Ue(o)+"="+Ue(u))}))}),s=i.join("&")}if(s){var d=t.indexOf("#");d!==-1&&(t=t.slice(0,d)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t},zt=y;function J(){this.handlers=[]}J.prototype.use=function(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};J.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};J.prototype.forEach=function(t){zt.forEach(this.handlers,function(n){n!==null&&t(n)})};var Wt=J,Xt=y,Yt=function(t,r){Xt.forEach(t,function(s,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(t[r]=s,delete t[i])})},ct=function(t,r,n,s,i){return t.config=r,n&&(t.code=n),t.request=s,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t},Q,De;function ft(){if(De)return Q;De=1;var e=ct;return Q=function(r,n,s,i,d){var a=new Error(r);return e(a,n,s,i,d)},Q}var G,je;function Kt(){if(je)return G;je=1;var e=ft();return G=function(r,n,s){var i=s.config.validateStatus;!s.status||!i||i(s.status)?r(s):n(e("Request failed with status code "+s.status,s.config,null,s.request,s))},G}var Z,Ie;function Qt(){if(Ie)return Z;Ie=1;var e=y;return Z=e.isStandardBrowserEnv()?function(){return{write:function(n,s,i,d,a,l){var o=[];o.push(n+"="+encodeURIComponent(s)),e.isNumber(i)&&o.push("expires="+new Date(i).toGMTString()),e.isString(d)&&o.push("path="+d),e.isString(a)&&o.push("domain="+a),l===!0&&o.push("secure"),document.cookie=o.join("; ")},read:function(n){var s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Z}var ee,Be;function Gt(){return Be||(Be=1,ee=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}),ee}var te,He;function Zt(){return He||(He=1,te=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}),te}var re,Fe;function er(){if(Fe)return re;Fe=1;var e=Gt(),t=Zt();return re=function(n,s){return n&&!e(s)?t(n,s):s},re}var ne,Ve;function tr(){if(Ve)return ne;Ve=1;var e=y,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ne=function(n){var s={},i,d,a;return n&&e.forEach(n.split(`
`),function(o){if(a=o.indexOf(":"),i=e.trim(o.substr(0,a)).toLowerCase(),d=e.trim(o.substr(a+1)),i){if(s[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?s[i]=(s[i]?s[i]:[]).concat([d]):s[i]=s[i]?s[i]+", "+d:d}}),s},ne}var se,$e;function rr(){if($e)return se;$e=1;var e=y;return se=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),s;function i(d){var a=d;return r&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=i(window.location.href),function(a){var l=e.isString(a)?i(a):a;return l.protocol===s.protocol&&l.host===s.host}}():function(){return function(){return!0}}(),se}var ie,Je;function z(){if(Je)return ie;Je=1;function e(t){this.message=t}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,ie=e,ie}var ae,ze;function We(){if(ze)return ae;ze=1;var e=y,t=Kt(),r=Qt(),n=dt,s=er(),i=tr(),d=rr(),a=ft(),l=W(),o=z();return ae=function(u){return new Promise(function(m,E){var T=u.data,M=u.headers,L=u.responseType,q;function we(){u.cancelToken&&u.cancelToken.unsubscribe(q),u.signal&&u.signal.removeEventListener("abort",q)}e.isFormData(T)&&delete M["Content-Type"];var h=new XMLHttpRequest;if(u.auth){var _t=u.auth.username||"",Et=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";M.Authorization="Basic "+btoa(_t+":"+Et)}var ge=s(u.baseURL,u.url);h.open(u.method.toUpperCase(),n(ge,u.params,u.paramsSerializer),!0),h.timeout=u.timeout;function xe(){if(!!h){var w="getAllResponseHeaders"in h?i(h.getAllResponseHeaders()):null,O=!L||L==="text"||L==="json"?h.responseText:h.response,k={data:O,status:h.status,statusText:h.statusText,headers:w,config:u,request:h};t(function(Y){m(Y),we()},function(Y){E(Y),we()},k),h=null}}if("onloadend"in h?h.onloadend=xe:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(xe)},h.onabort=function(){!h||(E(a("Request aborted",u,"ECONNABORTED",h)),h=null)},h.onerror=function(){E(a("Network Error",u,null,h)),h=null},h.ontimeout=function(){var O=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",k=u.transitional||l.transitional;u.timeoutErrorMessage&&(O=u.timeoutErrorMessage),E(a(O,u,k.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},e.isStandardBrowserEnv()){var Ce=(u.withCredentials||d(ge))&&u.xsrfCookieName?r.read(u.xsrfCookieName):void 0;Ce&&(M[u.xsrfHeaderName]=Ce)}"setRequestHeader"in h&&e.forEach(M,function(O,k){typeof T>"u"&&k.toLowerCase()==="content-type"?delete M[k]:h.setRequestHeader(k,O)}),e.isUndefined(u.withCredentials)||(h.withCredentials=!!u.withCredentials),L&&L!=="json"&&(h.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&h.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(q=function(w){!h||(E(!w||w&&w.type?new o("canceled"):w),h.abort(),h=null)},u.cancelToken&&u.cancelToken.subscribe(q),u.signal&&(u.signal.aborted?q():u.signal.addEventListener("abort",q))),T||(T=null),h.send(T)})},ae}var oe,Xe;function W(){if(Xe)return oe;Xe=1;var e=y,t=Yt,r=ct,n={"Content-Type":"application/x-www-form-urlencoded"};function s(l,o){!e.isUndefined(l)&&e.isUndefined(l["Content-Type"])&&(l["Content-Type"]=o)}function i(){var l;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(l=We()),l}function d(l,o,f){if(e.isString(l))try{return(o||JSON.parse)(l),e.trim(l)}catch(u){if(u.name!=="SyntaxError")throw u}return(f||JSON.stringify)(l)}var a={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:i(),transformRequest:[function(o,f){return t(f,"Accept"),t(f,"Content-Type"),e.isFormData(o)||e.isArrayBuffer(o)||e.isBuffer(o)||e.isStream(o)||e.isFile(o)||e.isBlob(o)?o:e.isArrayBufferView(o)?o.buffer:e.isURLSearchParams(o)?(s(f,"application/x-www-form-urlencoded;charset=utf-8"),o.toString()):e.isObject(o)||f&&f["Content-Type"]==="application/json"?(s(f,"application/json"),d(o)):o}],transformResponse:[function(o){var f=this.transitional||a.transitional,u=f&&f.silentJSONParsing,b=f&&f.forcedJSONParsing,m=!u&&this.responseType==="json";if(m||b&&e.isString(o)&&o.length)try{return JSON.parse(o)}catch(E){if(m)throw E.name==="SyntaxError"?r(E,this,"E_JSON_PARSE"):E}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return e.forEach(["delete","get","head"],function(o){a.headers[o]={}}),e.forEach(["post","put","patch"],function(o){a.headers[o]=e.merge(n)}),oe=a,oe}var nr=y,sr=W(),ir=function(t,r,n){var s=this||sr;return nr.forEach(n,function(d){t=d.call(s,t,r)}),t},ue,Ye;function ht(){return Ye||(Ye=1,ue=function(t){return!!(t&&t.__CANCEL__)}),ue}var Ke=y,le=ir,ar=ht(),or=W(),ur=z();function de(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ur("canceled")}var lr=function(t){de(t),t.headers=t.headers||{},t.data=le.call(t,t.data,t.headers,t.transformRequest),t.headers=Ke.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Ke.forEach(["delete","get","head","post","put","patch","common"],function(s){delete t.headers[s]});var r=t.adapter||or.adapter;return r(t).then(function(s){return de(t),s.data=le.call(t,s.data,s.headers,t.transformResponse),s},function(s){return ar(s)||(de(t),s&&s.response&&(s.response.data=le.call(t,s.response.data,s.response.headers,t.transformResponse))),Promise.reject(s)})},_=y,mt=function(t,r){r=r||{};var n={};function s(f,u){return _.isPlainObject(f)&&_.isPlainObject(u)?_.merge(f,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function i(f){if(_.isUndefined(r[f])){if(!_.isUndefined(t[f]))return s(void 0,t[f])}else return s(t[f],r[f])}function d(f){if(!_.isUndefined(r[f]))return s(void 0,r[f])}function a(f){if(_.isUndefined(r[f])){if(!_.isUndefined(t[f]))return s(void 0,t[f])}else return s(void 0,r[f])}function l(f){if(f in r)return s(t[f],r[f]);if(f in t)return s(void 0,t[f])}var o={url:d,method:d,data:d,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return _.forEach(Object.keys(t).concat(Object.keys(r)),function(u){var b=o[u]||i,m=b(u);_.isUndefined(m)&&b!==l||(n[u]=m)}),n},ce,Qe;function vt(){return Qe||(Qe=1,ce={version:"0.25.0"}),ce}var dr=vt().version,Ee={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Ee[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var Ge={};Ee.transitional=function(t,r,n){function s(i,d){return"[Axios v"+dr+"] Transitional option '"+i+"'"+d+(n?". "+n:"")}return function(i,d,a){if(t===!1)throw new Error(s(d," has been removed"+(r?" in "+r:"")));return r&&!Ge[d]&&(Ge[d]=!0,console.warn(s(d," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,d,a):!0}};function cr(e,t,r){if(typeof e!="object")throw new TypeError("options must be an object");for(var n=Object.keys(e),s=n.length;s-- >0;){var i=n[s],d=t[i];if(d){var a=e[i],l=a===void 0||d(a,i,e);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+i)}}var fr={assertOptions:cr,validators:Ee},pt=y,hr=dt,Ze=Wt,et=lr,X=mt,bt=fr,A=bt.validators;function D(e){this.defaults=e,this.interceptors={request:new Ze,response:new Ze}}D.prototype.request=function(t,r){if(typeof t=="string"?(r=r||{},r.url=t):r=t||{},!r.url)throw new Error("Provided config url is not valid");r=X(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&bt.assertOptions(n,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(i=i&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var d=[];this.interceptors.response.forEach(function(m){d.push(m.fulfilled,m.rejected)});var a;if(!i){var l=[et,void 0];for(Array.prototype.unshift.apply(l,s),l=l.concat(d),a=Promise.resolve(r);l.length;)a=a.then(l.shift(),l.shift());return a}for(var o=r;s.length;){var f=s.shift(),u=s.shift();try{o=f(o)}catch(b){u(b);break}}try{a=et(o)}catch(b){return Promise.reject(b)}for(;d.length;)a=a.then(d.shift(),d.shift());return a};D.prototype.getUri=function(t){if(!t.url)throw new Error("Provided config url is not valid");return t=X(this.defaults,t),hr(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};pt.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(r,n){return this.request(X(n||{},{method:t,url:r,data:(n||{}).data}))}});pt.forEach(["post","put","patch"],function(t){D.prototype[t]=function(r,n,s){return this.request(X(s||{},{method:t,url:r,data:n}))}});var mr=D,fe,tt;function vr(){if(tt)return fe;tt=1;var e=z();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(d){n=d});var s=this;this.promise.then(function(i){if(!!s._listeners){var d,a=s._listeners.length;for(d=0;d<a;d++)s._listeners[d](i);s._listeners=null}}),this.promise.then=function(i){var d,a=new Promise(function(l){s.subscribe(l),d=l}).then(i);return a.cancel=function(){s.unsubscribe(d)},a},r(function(d){s.reason||(s.reason=new e(d),n(s.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]},t.prototype.unsubscribe=function(n){if(!!this._listeners){var s=this._listeners.indexOf(n);s!==-1&&this._listeners.splice(s,1)}},t.source=function(){var n,s=new t(function(d){n=d});return{token:s,cancel:n}},fe=t,fe}var he,rt;function pr(){return rt||(rt=1,he=function(t){return function(n){return t.apply(null,n)}}),he}var me,nt;function br(){if(nt)return me;nt=1;var e=y;return me=function(r){return e.isObject(r)&&r.isAxiosError===!0},me}var st=y,yr=at,$=mr,_r=mt,Er=W();function yt(e){var t=new $(e),r=yr($.prototype.request,t);return st.extend(r,$.prototype,t),st.extend(r,t),r.create=function(s){return yt(_r(e,s))},r}var x=yt(Er);x.Axios=$;x.Cancel=z();x.CancelToken=vr();x.isCancel=ht();x.VERSION=vt().version;x.all=function(t){return Promise.all(t)};x.spread=pr();x.isAxiosError=br();be.exports=x;be.exports.default=x;(function(e){e.exports=be.exports})(it);const I=St(it.exports),wr={layout:gt,components:{Head:kt,Link:Rt,VueCountdown:Nt},props:{id:Number,page:Number,exam_group:Object,all_questions:Array,question_answered:Number,question_active:Object,answer_order:Array,duration:Object},setup(e){let t=["A","B","C","D","E"];const r=j(0),n=j(e.duration.duration),s=()=>{n.value=n.value-1e3,r.value=r.value+1,n.value>0&&r.value%10==1&&I.put(`/student/exam-duration/update/${e.duration.id}`,{duration:n.value})},i=()=>{I.put(`/student/exam-duration/update/${e.duration.id}`,{duration:n.value}),P.Inertia.get(`/student/exam/${e.id}/${e.page-1}`)},d=()=>{I.put(`/student/exam-duration/update/${e.duration.id}`,{duration:n.value}),P.Inertia.get(`/student/exam/${e.id}/${e.page+1}`)},a=b=>{I.put(`/student/exam-duration/update/${e.duration.id}`,{duration:n.value}),P.Inertia.get(`/student/exam/${e.id}/${b+1}`)},l=(b,m,E)=>{P.Inertia.post("/student/exam-answer",{exam_id:b,exam_session_id:e.exam_group.exam_session.id,question_id:m,answer:E,duration:n.value})},o=j(!1),f=j(!1);return{options:t,duration:n,handleChangeDuration:s,prevPage:i,nextPage:d,clickQuestion:a,submitAnswer:l,showModalEndExam:o,showModalEndTimeExam:f,endExam:()=>{P.Inertia.post("/student/exam-end",{exam_group_id:e.exam_group.id,exam_id:e.exam_group.exam.id,exam_session_id:e.exam_group.exam_session.id}),qt.fire({title:"Success!",text:"Ujian Selesai!.",icon:"success",showConfirmButton:!1,timer:4e3})}}}},gr={class:"row mb-5"},xr={class:"col-md-7"},Cr={class:"card border-0 shadow"},Sr={class:"card-header"},kr={class:"d-flex justify-content-between"},Rr={class:"mb-0"},qr=U("Soal No. "),Or={class:"fw-bold"},Nr={class:"badge bg-info p-2"},Ar=c("i",{class:"fa fa-clock"},null,-1),Tr={class:"card-body"},Mr={key:0},Lr=["innerHTML"],Pr={width:"50",style:{padding:"10px"}},Ur={key:0,class:"btn btn-info btn-sm w-100 shdaow"},Dr=["onClick"],jr={style:{padding:"10px"}},Ir=["innerHTML"],Br={key:1},Hr=c("div",{class:"alert alert-danger border-0 shadow"},[c("i",{class:"fa fa-exclamation-triangle"}),U(" Soal Tidak Ditemukan!. ")],-1),Fr=[Hr],Vr={class:"card-footer"},$r={class:"d-flex justify-content-between"},Jr={class:"text-start"},zr={class:"text-end"},Wr={class:"col-md-5"},Xr={class:"card border-0 shadow"},Yr={class:"card-header text-center"},Kr={class:"badge bg-success p-2"},Qr={class:"card-body",style:{height:"330px","overflow-y":"auto"}},Gr={width:"20%",style:{width:"20%",float:"left"}},Zr={style:{padding:"5px"}},en=["onClick"],tn=["onClick"],rn=["onClick"],nn={class:"card-footer"},sn={class:"modal-dialog"},an={class:"modal-content"},on=c("div",{class:"modal-header"},[c("h5",{class:"modal-title"},"Akhiri Ujian ?")],-1),un=c("div",{class:"modal-body"}," Setelah mengakhiri ujian, Anda tidak dapat kembali ke ujian ini lagi. Yakin akan mengakhiri ujian? ",-1),ln={class:"modal-footer"},dn={class:"modal-dialog"},cn={class:"modal-content"},fn=c("div",{class:"modal-header"},[c("h5",{class:"modal-title"},"Waktu Habis !")],-1),hn=c("div",{class:"modal-body"},[U(" Waktu ujian sudah berakhir!. Klik "),c("strong",{class:"fw-bold"},"Ya"),U(" untuk mengakhiri ujian. ")],-1),mn={class:"modal-footer"};function vn(e,t,r,n,s,i){const d=Se("Head"),a=Se("VueCountdown");return v(),p(K,null,[ke(d,null,{default:Re(()=>[c("title",null,"Ujian Dengan Nomor Soal : "+g(r.page)+" - Aplikasi Ujian Online",1)]),_:1}),c("div",gr,[c("div",xr,[c("div",Cr,[c("div",Sr,[c("div",kr,[c("div",null,[c("h5",Rr,[qr,c("strong",Or,g(r.page),1)])]),c("div",null,[ke(a,{time:n.duration,onProgress:n.handleChangeDuration,onEnd:t[0]||(t[0]=l=>n.showModalEndTimeExam=!0)},{default:Re(({hours:l,minutes:o,seconds:f})=>[c("span",Nr,[Ar,U(" "+g(l)+" jam, "+g(o)+" menit, "+g(f)+" detik.",1)])]),_:1},8,["time","onProgress"])])])]),c("div",Tr,[r.question_active!==null?(v(),p("div",Mr,[c("div",null,[c("p",{innerHTML:r.question_active.question.question},null,8,Lr)]),c("table",null,[c("tbody",null,[(v(!0),p(K,null,qe(r.answer_order,(l,o)=>(v(),p("tr",{key:o},[c("td",Pr,[l==r.question_active.answer?(v(),p("button",Ur,g(n.options[o]),1)):(v(),p("button",{key:1,onClick:C(f=>n.submitAnswer(r.question_active.question.exam.id,r.question_active.question.id,l),["prevent"]),class:"btn btn-outline-info btn-sm w-100 shdaow"},g(n.options[o]),9,Dr))]),c("td",jr,[c("p",{innerHTML:r.question_active.question["option_"+l]},null,8,Ir)])]))),128))])])])):(v(),p("div",Br,Fr))]),c("div",Vr,[c("div",$r,[c("div",Jr,[r.page>1?(v(),p("button",{key:0,onClick:t[1]||(t[1]=C((...l)=>n.prevPage&&n.prevPage(...l),["prevent"])),type:"button",class:"btn btn-gray-400 btn-sm btn-block mb-2"},"Sebelumnya")):R("",!0)]),c("div",zr,[r.page<Object.keys(r.all_questions).length?(v(),p("button",{key:0,onClick:t[2]||(t[2]=C((...l)=>n.nextPage&&n.nextPage(...l),["prevent"])),type:"button",class:"btn btn-gray-400 btn-sm"},"Selanjutnya")):R("",!0)])])])])]),c("div",Wr,[c("div",Xr,[c("div",Yr,[c("div",Kr,g(r.question_answered)+" dikerjakan",1)]),c("div",Qr,[(v(!0),p(K,null,qe(r.all_questions,(l,o)=>(v(),p("div",{key:o},[c("div",Gr,[c("div",Zr,[o+1==r.page?(v(),p("button",{key:0,onClick:C(f=>n.clickQuestion(o),["prevent"]),class:"btn btn-gray-400 btn-sm w-100"},g(o+1),9,en)):R("",!0),o+1!=r.page&&l.answer==0?(v(),p("button",{key:1,onClick:C(f=>n.clickQuestion(o),["prevent"]),class:"btn btn-outline-info btn-sm w-100"},g(o+1),9,tn)):R("",!0),o+1!=r.page&&l.answer!=0?(v(),p("button",{key:2,onClick:C(f=>n.clickQuestion(o),["prevent"]),class:"btn btn-info btn-sm w-100"},g(o+1),9,rn)):R("",!0)])])]))),128))]),c("div",nn,[c("button",{onClick:t[3]||(t[3]=l=>n.showModalEndExam=!0),class:"btn btn-danger btn-md border-0 shadow w-100"},"Akhiri Ujian")])])])]),n.showModalEndExam?(v(),p("div",{key:0,class:Oe(["modal fade",{show:n.showModalEndExam}]),tabindex:"-1","aria-hidden":"true",style:{display:"block"},role:"dialog"},[c("div",sn,[c("div",an,[on,un,c("div",ln,[c("button",{onClick:t[4]||(t[4]=C((...l)=>n.endExam&&n.endExam(...l),["prevent"])),type:"button",class:"btn btn-primary"},"Ya, Akhiri"),c("button",{onClick:t[5]||(t[5]=C(l=>n.showModalEndExam=!1,["prevent"])),type:"button",class:"btn btn-secondary"},"Tutup")])])])],2)):R("",!0),n.showModalEndTimeExam?(v(),p("div",{key:1,class:Oe(["modal fade",{show:n.showModalEndTimeExam}]),"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true",style:{display:"block"},role:"dialog"},[c("div",dn,[c("div",cn,[fn,hn,c("div",mn,[c("button",{onClick:t[6]||(t[6]=C((...l)=>n.endExam&&n.endExam(...l),["prevent"])),type:"button",class:"btn btn-primary"},"Ya")])])])],2)):R("",!0)],64)}const En=Ot(wr,[["render",vn]]);export{En as default};
