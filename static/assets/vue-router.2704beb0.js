import{h as H,K as Ze,E as X,j as I,c as we,d as Ae,p as ce,l as Je,w as et,L as Se,n as tt}from"./@vue.92a87908.js";/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ke=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",j=e=>ke?Symbol(e):"_vr_"+e,nt=j("rvlm"),Ce=j("rvd"),Z=j("r"),ie=j("rl"),le=j("rvl"),q=typeof window!="undefined";function rt(e){return e.__esModule||ke&&e[Symbol.toStringTag]==="Module"}const A=Object.assign;function ue(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Q=()=>{},st=/\/$/,ot=e=>e.replace(st,"");function fe(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("?"),a=t.indexOf("#",g>-1?g:0);return g>-1&&(r=t.slice(0,g),l=t.slice(g+1,a>-1?a:t.length),s=e(l)),a>-1&&(r=r||t.slice(0,a),d=t.slice(a,t.length)),r=lt(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function be(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ct(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&_e(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _e(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!it(e[n],t[n]))return!1;return!0}function it(e,t){return Array.isArray(e)?Oe(e,t):Array.isArray(t)?Oe(t,e):e===t}function Oe(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],!(s===1||d==="."))if(d==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var D;(function(e){e.pop="pop",e.push="push"})(D||(D={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function ut(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ot(e)}const ft=/^[^#]+#/;function ht(e,t){return e.replace(ft,"#")+t}function dt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const J=()=>({left:window.pageXOffset,top:window.pageYOffset});function pt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=dt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xe(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function mt(e,t){he.set(e,t)}function gt(e){const t=he.get(e);return he.delete(e),t}let yt=()=>location.protocol+"//"+location.host;function Me(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(g);return a[0]!=="/"&&(a="/"+a),be(a,"")}return be(n,e)+r+s}function vt(e,t,n,r){let s=[],l=[],d=null;const g=({state:i})=>{const y=Me(e,location),v=n.value,C=t.value;let k=0;if(i){if(n.value=y,t.value=i,d&&d===v){d=null;return}k=C?i.position-C.position:0}else r(y);s.forEach(w=>{w(n.value,v,{delta:k,type:D.pop,direction:k?k>0?F.forward:F.back:F.unknown})})};function a(){d=n.value}function u(i){s.push(i);const y=()=>{const v=s.indexOf(i);v>-1&&s.splice(v,1)};return l.push(y),y}function c(){const{history:i}=window;!i.state||i.replaceState(A({},i.state,{scroll:J()}),"")}function f(){for(const i of l)i();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",c),{pauseListeners:a,listen:u,destroy:f}}function Ne(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?J():null}}function Rt(e){const{history:t,location:n}=window,r={value:Me(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(a,u,c){const f=e.indexOf("#"),i=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:yt()+e+a;try{t[c?"replaceState":"pushState"](u,"",i),s.value=u}catch(y){console.error(y),n[c?"replace":"assign"](i)}}function d(a,u){const c=A({},t.state,Ne(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});l(a,c,!0),r.value=a}function g(a,u){const c=A({},s.value,t.state,{forward:a,scroll:J()});l(c.current,c,!0);const f=A({},Ne(r.value,a,null),{position:c.position+1},u);l(a,f,!1),r.value=a}return{location:r,state:s,push:g,replace:d}}function Et(e){e=ut(e);const t=Rt(e),n=vt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=A({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function cn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Et(e)}function Pt(e){return typeof e=="string"||e&&typeof e=="object"}function Ie(e){return typeof e=="string"||typeof e=="symbol"}const L={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Le=j("nf");var Te;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Te||(Te={}));function G(e,t){return A(new Error,{type:e,[Le]:!0},t)}function B(e,t){return e instanceof Error&&Le in e&&(t==null||!!(e.type&t))}const $e="[^/]+?",wt={sensitive:!1,strict:!1,start:!0,end:!0},At=/[.+*?^${}()[\]/\\]/g;function St(e,t){const n=A({},wt,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const i=u[f];let y=40+(n.sensitive?.25:0);if(i.type===0)f||(s+="/"),s+=i.value.replace(At,"\\$&"),y+=40;else if(i.type===1){const{value:v,repeatable:C,optional:k,regexp:w}=i;l.push({name:v,repeatable:C,optional:k});const P=w||$e;if(P!==$e){y+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+x.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=k&&u.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),s+=O,y+=20,k&&(y+=-8),C&&(y+=-20),P===".*"&&(y+=-50)}c.push(y)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(u){const c=u.match(d),f={};if(!c)return null;for(let i=1;i<c.length;i++){const y=c[i]||"",v=l[i-1];f[v.name]=y&&v.repeatable?y.split("/"):y}return f}function a(u){let c="",f=!1;for(const i of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const y of i)if(y.type===0)c+=y.value;else if(y.type===1){const{value:v,repeatable:C,optional:k}=y,w=v in u?u[v]:"";if(Array.isArray(w)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(w)?w.join("/"):w;if(!P)if(k)i.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=P}}return c}return{re:d,score:r,keys:l,parse:g,stringify:a}}function kt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ct(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=kt(r[n],s[n]);if(l)return l;n++}return s.length-r.length}const bt={type:0,value:""},_t=/[a-zA-Z0-9_]/;function Ot(e){if(!e)return[[]];if(e==="/")return[[bt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,a,u="",c="";function f(){!u||(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function i(){u+=a}for(;g<e.length;){if(a=e[g++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&f(),d()):a===":"?(f(),n=1):i();break;case 4:i(),n=r;break;case 1:a==="("?n=2:_t.test(a)?i():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),d(),s}function xt(e,t,n){const r=St(Ot(e.path),n),s=A(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Mt(e,t){const n=[],r=new Map;t=Be({strict:!1,end:!0,sensitive:!1},t);function s(c){return r.get(c)}function l(c,f,i){const y=!i,v=It(c);v.aliasOf=i&&i.record;const C=Be(t,c),k=[v];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const x of O)k.push(A({},v,{components:i?i.record.components:v.components,path:x,aliasOf:i?i.record:v}))}let w,P;for(const O of k){const{path:x}=O;if(f&&x[0]!=="/"){const $=f.record.path,N=$[$.length-1]==="/"?"":"/";O.path=f.record.path+(x&&N+x)}if(w=xt(O,f,C),i?i.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),y&&c.name&&!He(w)&&d(c.name)),"children"in v){const $=v.children;for(let N=0;N<$.length;N++)l($[N],w,i&&i.children[N])}i=i||w,a(w)}return P?()=>{d(P)}:Q}function d(c){if(Ie(c)){const f=r.get(c);f&&(r.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(d),f.alias.forEach(d))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(d),c.alias.forEach(d))}}function g(){return n}function a(c){let f=0;for(;f<n.length&&Ct(c,n[f])>=0;)f++;n.splice(f,0,c),c.record.name&&!He(c)&&r.set(c.record.name,c)}function u(c,f){let i,y={},v,C;if("name"in c&&c.name){if(i=r.get(c.name),!i)throw G(1,{location:c});C=i.record.name,y=A(Nt(f.params,i.keys.filter(P=>!P.optional).map(P=>P.name)),c.params),v=i.stringify(y)}else if("path"in c)v=c.path,i=n.find(P=>P.re.test(v)),i&&(y=i.parse(v),C=i.record.name);else{if(i=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!i)throw G(1,{location:c,currentLocation:f});C=i.record.name,y=A({},f.params,c.params),v=i.stringify(y)}const k=[];let w=i;for(;w;)k.unshift(w.record),w=w.parent;return{name:C,path:v,params:y,matched:k,meta:Tt(k)}}return e.forEach(c=>l(c)),{addRoute:l,resolve:u,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function Nt(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function It(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Lt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Lt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function He(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tt(e){return e.reduce((t,n)=>A(t,n.meta),{})}function Be(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const je=/#/g,$t=/&/g,Ht=/\//g,Bt=/=/g,jt=/\?/g,qe=/\+/g,qt=/%5B/g,zt=/%5D/g,ze=/%5E/g,Gt=/%60/g,Ge=/%7B/g,Kt=/%7C/g,Ke=/%7D/g,Vt=/%20/g;function de(e){return encodeURI(""+e).replace(Kt,"|").replace(qt,"[").replace(zt,"]")}function Ut(e){return de(e).replace(Ge,"{").replace(Ke,"}").replace(ze,"^")}function pe(e){return de(e).replace(qe,"%2B").replace(Vt,"+").replace(je,"%23").replace($t,"%26").replace(Gt,"`").replace(Ge,"{").replace(Ke,"}").replace(ze,"^")}function Qt(e){return pe(e).replace(Bt,"%3D")}function Dt(e){return de(e).replace(je,"%23").replace(jt,"%3F")}function Ft(e){return e==null?"":Dt(e).replace(Ht,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Wt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(qe," "),d=l.indexOf("="),g=ee(d<0?l:l.slice(0,d)),a=d<0?null:ee(l.slice(d+1));if(g in t){let u=t[g];Array.isArray(u)||(u=t[g]=[u]),u.push(a)}else t[g]=a}return t}function Ve(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(l=>l&&pe(l)):[r&&pe(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Yt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function W(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function T(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const a=f=>{f===!1?g(G(4,{from:n,to:t})):f instanceof Error?g(f):Pt(f)?g(G(2,{from:t,to:f})):(l&&r.enterCallbacks[s]===l&&typeof f=="function"&&l.push(f),d())},u=e.call(r&&r.instances[s],t,n,a);let c=Promise.resolve(u);e.length<3&&(c=c.then(a)),c.catch(f=>g(f))})}function me(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Xt(g)){const u=(g.__vccOpts||g)[t];u&&s.push(T(u,n,r,l,d))}else{let a=g();s.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const c=rt(u)?u.default:u;l.components[d]=c;const i=(c.__vccOpts||c)[t];return i&&T(i,n,r,l,d)()}))}}return s}function Xt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=H(Z),n=H(ie),r=I(()=>t.resolve(X(e.to))),s=I(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],f=n.matched;if(!c||!f.length)return-1;const i=f.findIndex(z.bind(null,c));if(i>-1)return i;const y=Qe(a[u-2]);return u>1&&Qe(c)===y&&f[f.length-1].path!==y?f.findIndex(z.bind(null,a[u-2])):i}),l=I(()=>s.value>-1&&tn(n.params,r.value.params)),d=I(()=>s.value>-1&&s.value===n.matched.length-1&&_e(n.params,r.value.params));function g(a={}){return en(a)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(Q):Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const Zt=Ae({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=we(Ue(e)),{options:r}=H(Z),s=I(()=>({[De(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[De(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Se("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),Jt=Zt;function en(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const De=(e,t,n)=>e!=null?e:t!=null?t:n,nn=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=H(le),s=I(()=>e.route||r.value),l=H(Ce,0),d=I(()=>s.value.matched[l]);ce(Ce,l+1),ce(nt,d),ce(le,s);const g=Je();return et(()=>[g.value,d.value,e.name],([a,u,c],[f,i,y])=>{u&&(u.instances[c]=a,i&&i!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=i.leaveGuards),u.updateGuards.size||(u.updateGuards=i.updateGuards))),a&&u&&(!i||!z(u,i)||!f)&&(u.enterCallbacks[c]||[]).forEach(v=>v(a))},{flush:"post"}),()=>{const a=s.value,u=d.value,c=u&&u.components[e.name],f=e.name;if(!c)return Fe(n.default,{Component:c,route:a});const i=u.props[e.name],y=i?i===!0?a.params:typeof i=="function"?i(a):i:null,C=Se(c,A({},y,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[f]=null)},ref:g}));return Fe(n.default,{Component:C,route:a})||C}}});function Fe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const rn=nn;function ln(e){const t=Mt(e.routes,e),n=e.parseQuery||Wt,r=e.stringifyQuery||Ve,s=e.history,l=W(),d=W(),g=W(),a=Ze(L);let u=L;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ue.bind(null,o=>""+o),f=ue.bind(null,Ft),i=ue.bind(null,ee);function y(o,p){let h,m;return Ie(o)?(h=t.getRecordMatcher(o),m=p):m=o,t.addRoute(m,h)}function v(o){const p=t.getRecordMatcher(o);p&&t.removeRoute(p)}function C(){return t.getRoutes().map(o=>o.record)}function k(o){return!!t.getRecordMatcher(o)}function w(o,p){if(p=A({},p||a.value),typeof o=="string"){const R=fe(n,o,p.path),_=t.resolve({path:R.path},p),U=s.createHref(R.fullPath);return A(R,_,{params:i(_.params),hash:ee(R.hash),redirectedFrom:void 0,href:U})}let h;if("path"in o)h=A({},o,{path:fe(n,o.path,p.path).path});else{const R=A({},o.params);for(const _ in R)R[_]==null&&delete R[_];h=A({},o,{params:f(o.params)}),p.params=f(p.params)}const m=t.resolve(h,p),S=o.hash||"";m.params=c(i(m.params));const b=at(r,A({},o,{hash:Ut(S),path:m.path})),E=s.createHref(b);return A({fullPath:b,hash:S,query:r===Ve?Yt(o.query):o.query||{}},m,{redirectedFrom:void 0,href:E})}function P(o){return typeof o=="string"?fe(n,o,a.value.path):A({},o)}function O(o,p){if(u!==o)return G(8,{from:p,to:o})}function x(o){return V(o)}function $(o){return x(A(P(o),{replace:!0}))}function N(o){const p=o.matched[o.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let m=typeof h=="function"?h(o):h;return typeof m=="string"&&(m=m.includes("?")||m.includes("#")?m=P(m):{path:m},m.params={}),A({query:o.query,hash:o.hash,params:o.params},m)}}function V(o,p){const h=u=w(o),m=a.value,S=o.state,b=o.force,E=o.replace===!0,R=N(h);if(R)return V(A(P(R),{state:S,force:b,replace:E}),p||h);const _=h;_.redirectedFrom=p;let U;return!b&&ct(r,m,h)&&(U=G(16,{to:_,from:m}),Pe(m,m,!0,!1)),(U?Promise.resolve(U):ge(_,m)).catch(M=>B(M)?M:re(M,_,m)).then(M=>{if(M){if(B(M,2))return V(A(P(M.to),{state:S,force:b,replace:E}),p||_)}else M=ve(_,m,!0,E,S);return ye(_,m,M),M})}function We(o,p){const h=O(o,p);return h?Promise.reject(h):Promise.resolve()}function ge(o,p){let h;const[m,S,b]=sn(o,p);h=me(m.reverse(),"beforeRouteLeave",o,p);for(const R of m)R.leaveGuards.forEach(_=>{h.push(T(_,o,p))});const E=We.bind(null,o,p);return h.push(E),K(h).then(()=>{h=[];for(const R of l.list())h.push(T(R,o,p));return h.push(E),K(h)}).then(()=>{h=me(S,"beforeRouteUpdate",o,p);for(const R of S)R.updateGuards.forEach(_=>{h.push(T(_,o,p))});return h.push(E),K(h)}).then(()=>{h=[];for(const R of o.matched)if(R.beforeEnter&&!p.matched.includes(R))if(Array.isArray(R.beforeEnter))for(const _ of R.beforeEnter)h.push(T(_,o,p));else h.push(T(R.beforeEnter,o,p));return h.push(E),K(h)}).then(()=>(o.matched.forEach(R=>R.enterCallbacks={}),h=me(b,"beforeRouteEnter",o,p),h.push(E),K(h))).then(()=>{h=[];for(const R of d.list())h.push(T(R,o,p));return h.push(E),K(h)}).catch(R=>B(R,8)?R:Promise.reject(R))}function ye(o,p,h){for(const m of g.list())m(o,p,h)}function ve(o,p,h,m,S){const b=O(o,p);if(b)return b;const E=p===L,R=q?history.state:{};h&&(m||E?s.replace(o.fullPath,A({scroll:E&&R&&R.scroll},S)):s.push(o.fullPath,S)),a.value=o,Pe(o,p,h,E),Ee()}let te;function Ye(){te=s.listen((o,p,h)=>{const m=w(o),S=N(m);if(S){V(A(S,{replace:!0}),m).catch(Q);return}u=m;const b=a.value;q&&mt(xe(b.fullPath,h.delta),J()),ge(m,b).catch(E=>B(E,4|8)?E:B(E,2)?(V(E.to,m).then(R=>{B(R,4|16)&&!h.delta&&h.type===D.pop&&s.go(-1,!1)}).catch(Q),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(E,m,b))).then(E=>{E=E||ve(m,b,!1),E&&(h.delta?s.go(-h.delta,!1):h.type===D.pop&&B(E,4|16)&&s.go(-1,!1)),ye(m,b,E)}).catch(Q)})}let ne=W(),Re=W(),Y;function re(o,p,h){Ee(o);const m=Re.list();return m.length?m.forEach(S=>S(o,p,h)):console.error(o),Promise.reject(o)}function Xe(){return Y&&a.value!==L?Promise.resolve():new Promise((o,p)=>{ne.add([o,p])})}function Ee(o){Y||(Y=!0,Ye(),ne.list().forEach(([p,h])=>o?h(o):p()),ne.reset())}function Pe(o,p,h,m){const{scrollBehavior:S}=e;if(!q||!S)return Promise.resolve();const b=!h&&gt(xe(o.fullPath,0))||(m||!h)&&history.state&&history.state.scroll||null;return tt().then(()=>S(o,p,b)).then(E=>E&&pt(E)).catch(E=>re(E,o,p))}const se=o=>s.go(o);let oe;const ae=new Set;return{currentRoute:a,addRoute:y,removeRoute:v,hasRoute:k,getRoutes:C,resolve:w,options:e,push:x,replace:$,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Re.add,isReady:Xe,install(o){const p=this;o.component("RouterLink",Jt),o.component("RouterView",rn),o.config.globalProperties.$router=p,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>X(a)}),q&&!oe&&a.value===L&&(oe=!0,x(s.location).catch(S=>{}));const h={};for(const S in L)h[S]=I(()=>a.value[S]);o.provide(Z,p),o.provide(ie,we(h)),o.provide(le,a);const m=o.unmount;ae.add(o),o.unmount=function(){ae.delete(o),ae.size<1&&(u=L,te&&te(),a.value=L,oe=!1,Y=!1),m()}}}}function K(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function sn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(u=>z(u,g))?r.push(g):n.push(g));const a=e.matched[d];a&&(t.matched.find(u=>z(u,a))||s.push(a))}return[n,r,s]}function un(){return H(Z)}function fn(){return H(ie)}export{rn as R,fn as a,cn as b,ln as c,Jt as d,un as u};
