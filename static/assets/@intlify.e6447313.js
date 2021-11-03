import{g as Ce}from"./vue-i18n.91e137c0.js";import{S as Lt}from"./source-map.3671d69c.js";/*!
  * shared v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Tt=typeof window!="undefined";let Nt,pt;const gt=/\{([0-9a-zA-Z]+)\}/g;function Ie(e,...t){return t.length===1&&$(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(gt,(r,s)=>t.hasOwnProperty(s)?t[s]:"")}const At=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ht=e=>At?Symbol(e):e,Se=(e,t,r)=>Oe({l:e,k:t,s:r}),Oe=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),v=e=>typeof e=="number"&&isFinite(e),ke=e=>se(e)==="[object Date]",me=e=>se(e)==="[object RegExp]",ae=e=>M(e)&&Object.keys(e).length===0;function De(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const B=Object.assign;let be;const ye=()=>be||(be=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function de(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Ct=Object.prototype.hasOwnProperty;function It(e,t){return Ct.call(e,t)}const V=Array.isArray,U=e=>typeof e=="function",S=e=>typeof e=="string",W=e=>typeof e=="boolean",St=e=>typeof e=="symbol",$=e=>e!==null&&typeof e=="object",Ot=e=>$(e)&&U(e.then)&&U(e.catch),_e=Object.prototype.toString,se=e=>_e.call(e),M=e=>se(e)==="[object Object]",Pe=e=>e==null?"":V(e)||M(e)&&e.toString===_e?JSON.stringify(e,null,2):String(e),Me=2;function kt(e,t=0,r=e.length){const s=e.split(/\r?\n/);let c=0;const l=[];for(let f=0;f<s.length;f++)if(c+=s[f].length+1,c>=t){for(let L=f-Me;L<=f+Me||r>c;L++){if(L<0||L>=s.length)continue;const u=L+1;l.push(`${u}${" ".repeat(3-String(u).length)}|  ${s[L]}`);const N=s[L].length;if(L===f){const h=t-(c-N)+1,C=Math.max(1,r>c?N-h:r-t);l.push("   |  "+" ".repeat(h)+"^".repeat(C))}else if(L>f){if(r>c){const h=Math.max(Math.min(r-c,N),1);l.push("   |  "+"^".repeat(h))}c+=N+1}}break}return l.join(`
`)}function Dt(){const e=new Map;return{events:e,on(r,s){const c=e.get(r);c&&c.push(s)||e.set(r,[s])},off(r,s){const c=e.get(r);c&&c.splice(c.indexOf(s)>>>0,1)},emit(r,s){(e.get(r)||[]).slice().map(c=>c(s)),(e.get("*")||[]).slice().map(c=>c(r,s))}}}var bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",assign:B,createEmitter:Dt,escapeHtml:de,format:Ie,friendlyJSONstringify:Oe,generateCodeFrame:kt,generateFormatCacheKey:Se,getGlobalThis:ye,hasOwn:It,inBrowser:Tt,isArray:V,isBoolean:W,isDate:ke,isEmptyObject:ae,isFunction:U,isNumber:v,isObject:$,isPlainObject:M,isPromise:Ot,isRegExp:me,isString:S,isSymbol:St,makeSymbol:ht,mark:Nt,measure:pt,objectToString:_e,toDisplayString:Pe,toTypeString:se,warn:De}),Bn=Ce(bt);/*!
  * message-compiler v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const I={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};I.EXPECTED_TOKEN+"",I.INVALID_TOKEN_IN_PLACEHOLDER+"",I.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER+"",I.UNKNOWN_ESCAPE_SEQUENCE+"",I.INVALID_UNICODE_ESCAPE_SEQUENCE+"",I.UNBALANCED_CLOSING_BRACE+"",I.UNTERMINATED_CLOSING_BRACE+"",I.EMPTY_PLACEHOLDER+"",I.NOT_ALLOW_NEST_PLACEHOLDER+"",I.INVALID_LINKED_FORMAT+"",I.MUST_HAVE_MESSAGES_IN_PLURAL+"",I.UNEXPECTED_EMPTY_LINKED_MODIFIER+"",I.UNEXPECTED_EMPTY_LINKED_KEY+"",I.UNEXPECTED_LEXICAL_ANALYSIS+"";function le(e,t,r={}){const{domain:s,messages:c,args:l}=r,f=e,L=new SyntaxError(String(f));return L.code=e,t&&(L.location=t),L.domain=s,L}function yt(e){throw e}const Pt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Mt(e,t,r){return{line:e,column:t,offset:r}}function Ee(e,t,r){const s={start:e,end:t};return r!=null&&(s.source=r),s}const H=" ",Rt="\r",w=`
`,Ft=String.fromCharCode(8232),Ut=String.fromCharCode(8233);function wt(e){const t=e;let r=0,s=1,c=1,l=0;const f=k=>t[k]===Rt&&t[k+1]===w,L=k=>t[k]===w,u=k=>t[k]===Ut,N=k=>t[k]===Ft,h=k=>f(k)||L(k)||u(k)||N(k),C=()=>r,A=()=>s,b=()=>c,y=()=>l,D=k=>f(k)||u(k)||N(k)?w:t[k],_=()=>D(r),o=()=>D(r+l);function m(){return l=0,h(r)&&(s++,c=0),f(r)&&r++,r++,c++,t[r]}function T(){return f(r+l)&&l++,l++,t[r+l]}function E(){r=0,s=1,c=1,l=0}function g(k=0){l=k}function p(){const k=r+l;for(;k!==r;)m();l=0}return{index:C,line:A,column:b,peekOffset:y,charAt:D,currentChar:_,currentPeek:o,next:m,peek:T,reset:E,resetPeek:g,skipToPeek:p}}const j=void 0,Re="'",vt="tokenizer";function Wt(e,t={}){const r=t.location!==!1,s=wt(e),c=()=>s.index(),l=()=>Mt(s.line(),s.column(),s.index()),f=l(),L=c(),u={currentType:14,offset:L,startLoc:f,endLoc:f,lastType:14,lastOffset:L,lastStartLoc:f,lastEndLoc:f,braceNest:0,inLinked:!1,text:""},N=()=>u,{onError:h}=t;function C(n,a,i,...d){const O=N();if(a.column+=i,a.offset+=i,h){const P=Ee(O.startLoc,a),Y=le(n,P,{domain:vt,args:d});h(Y)}}function A(n,a,i){n.endLoc=l(),n.currentType=a;const d={type:a};return r&&(d.loc=Ee(n.startLoc,n.endLoc)),i!=null&&(d.value=i),d}const b=n=>A(n,14);function y(n,a){return n.currentChar()===a?(n.next(),a):(C(I.EXPECTED_TOKEN,l(),0,a),"")}function D(n){let a="";for(;n.currentPeek()===H||n.currentPeek()===w;)a+=n.currentPeek(),n.peek();return a}function _(n){const a=D(n);return n.skipToPeek(),a}function o(n){if(n===j)return!1;const a=n.charCodeAt(0);return a>=97&&a<=122||a>=65&&a<=90||a===95}function m(n){if(n===j)return!1;const a=n.charCodeAt(0);return a>=48&&a<=57}function T(n,a){const{currentType:i}=a;if(i!==2)return!1;D(n);const d=o(n.currentPeek());return n.resetPeek(),d}function E(n,a){const{currentType:i}=a;if(i!==2)return!1;D(n);const d=n.currentPeek()==="-"?n.peek():n.currentPeek(),O=m(d);return n.resetPeek(),O}function g(n,a){const{currentType:i}=a;if(i!==2)return!1;D(n);const d=n.currentPeek()===Re;return n.resetPeek(),d}function p(n,a){const{currentType:i}=a;if(i!==8)return!1;D(n);const d=n.currentPeek()===".";return n.resetPeek(),d}function k(n,a){const{currentType:i}=a;if(i!==9)return!1;D(n);const d=o(n.currentPeek());return n.resetPeek(),d}function x(n,a){const{currentType:i}=a;if(!(i===8||i===12))return!1;D(n);const d=n.currentPeek()===":";return n.resetPeek(),d}function R(n,a){const{currentType:i}=a;if(i!==10)return!1;const d=()=>{const P=n.currentPeek();return P==="{"?o(n.peek()):P==="@"||P==="%"||P==="|"||P===":"||P==="."||P===H||!P?!1:P===w?(n.peek(),d()):o(P)},O=d();return n.resetPeek(),O}function F(n){D(n);const a=n.currentPeek()==="|";return n.resetPeek(),a}function z(n,a=!0){const i=(O=!1,P="",Y=!1)=>{const Q=n.currentPeek();return Q==="{"?P==="%"?!1:O:Q==="@"||!Q?P==="%"?!0:O:Q==="%"?(n.peek(),i(O,"%",!0)):Q==="|"?P==="%"||Y?!0:!(P===H||P===w):Q===H?(n.peek(),i(!0,H,Y)):Q===w?(n.peek(),i(!0,w,Y)):!0},d=i();return a&&n.resetPeek(),d}function ne(n,a){const i=n.currentChar();return i===j?j:a(i)?(n.next(),i):null}function ge(n){return ne(n,i=>{const d=i.charCodeAt(0);return d>=97&&d<=122||d>=65&&d<=90||d>=48&&d<=57||d===95||d===36})}function st(n){return ne(n,i=>{const d=i.charCodeAt(0);return d>=48&&d<=57})}function lt(n){return ne(n,i=>{const d=i.charCodeAt(0);return d>=48&&d<=57||d>=65&&d<=70||d>=97&&d<=102})}function Ae(n){let a="",i="";for(;a=st(n);)i+=a;return i}function ot(n){const a=i=>{const d=n.currentChar();return d==="{"||d==="}"||d==="@"||!d?i:d==="%"?z(n)?(i+=d,n.next(),a(i)):i:d==="|"?i:d===H||d===w?z(n)?(i+=d,n.next(),a(i)):F(n)?i:(i+=d,n.next(),a(i)):(i+=d,n.next(),a(i))};return a("")}function ct(n){_(n);let a="",i="";for(;a=ge(n);)i+=a;return n.currentChar()===j&&C(I.UNTERMINATED_CLOSING_BRACE,l(),0),i}function it(n){_(n);let a="";return n.currentChar()==="-"?(n.next(),a+=`-${Ae(n)}`):a+=Ae(n),n.currentChar()===j&&C(I.UNTERMINATED_CLOSING_BRACE,l(),0),a}function ut(n){_(n),y(n,"'");let a="",i="";const d=P=>P!==Re&&P!==w;for(;a=ne(n,d);)a==="\\"?i+=ft(n):i+=a;const O=n.currentChar();return O===w||O===j?(C(I.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,l(),0),O===w&&(n.next(),y(n,"'")),i):(y(n,"'"),i)}function ft(n){const a=n.currentChar();switch(a){case"\\":case"'":return n.next(),`\\${a}`;case"u":return he(n,a,4);case"U":return he(n,a,6);default:return C(I.UNKNOWN_ESCAPE_SEQUENCE,l(),0,a),""}}function he(n,a,i){y(n,a);let d="";for(let O=0;O<i;O++){const P=lt(n);if(!P){C(I.INVALID_UNICODE_ESCAPE_SEQUENCE,l(),0,`\\${a}${d}${n.currentChar()}`);break}d+=P}return`\\${a}${d}`}function mt(n){_(n);let a="",i="";const d=O=>O!=="{"&&O!=="}"&&O!==H&&O!==w;for(;a=ne(n,d);)i+=a;return i}function dt(n){let a="",i="";for(;a=ge(n);)i+=a;return i}function _t(n){const a=(i=!1,d)=>{const O=n.currentChar();return O==="{"||O==="%"||O==="@"||O==="|"||!O||O===H?d:O===w?(d+=O,n.next(),a(i,d)):(d+=O,n.next(),a(!0,d))};return a(!1,"")}function ie(n){_(n);const a=y(n,"|");return _(n),a}function ue(n,a){let i=null;switch(n.currentChar()){case"{":return a.braceNest>=1&&C(I.NOT_ALLOW_NEST_PLACEHOLDER,l(),0),n.next(),i=A(a,2,"{"),_(n),a.braceNest++,i;case"}":return a.braceNest>0&&a.currentType===2&&C(I.EMPTY_PLACEHOLDER,l(),0),n.next(),i=A(a,3,"}"),a.braceNest--,a.braceNest>0&&_(n),a.inLinked&&a.braceNest===0&&(a.inLinked=!1),i;case"@":return a.braceNest>0&&C(I.UNTERMINATED_CLOSING_BRACE,l(),0),i=re(n,a)||b(a),a.braceNest=0,i;default:let O=!0,P=!0,Y=!0;if(F(n))return a.braceNest>0&&C(I.UNTERMINATED_CLOSING_BRACE,l(),0),i=A(a,1,ie(n)),a.braceNest=0,a.inLinked=!1,i;if(a.braceNest>0&&(a.currentType===5||a.currentType===6||a.currentType===7))return C(I.UNTERMINATED_CLOSING_BRACE,l(),0),a.braceNest=0,fe(n,a);if(O=T(n,a))return i=A(a,5,ct(n)),_(n),i;if(P=E(n,a))return i=A(a,6,it(n)),_(n),i;if(Y=g(n,a))return i=A(a,7,ut(n)),_(n),i;if(!O&&!P&&!Y)return i=A(a,13,mt(n)),C(I.INVALID_TOKEN_IN_PLACEHOLDER,l(),0,i.value),_(n),i;break}return i}function re(n,a){const{currentType:i}=a;let d=null;const O=n.currentChar();switch((i===8||i===9||i===12||i===10)&&(O===w||O===H)&&C(I.INVALID_LINKED_FORMAT,l(),0),O){case"@":return n.next(),d=A(a,8,"@"),a.inLinked=!0,d;case".":return _(n),n.next(),A(a,9,".");case":":return _(n),n.next(),A(a,10,":");default:return F(n)?(d=A(a,1,ie(n)),a.braceNest=0,a.inLinked=!1,d):p(n,a)||x(n,a)?(_(n),re(n,a)):k(n,a)?(_(n),A(a,12,dt(n))):R(n,a)?(_(n),O==="{"?ue(n,a)||d:A(a,11,_t(n))):(i===8&&C(I.INVALID_LINKED_FORMAT,l(),0),a.braceNest=0,a.inLinked=!1,fe(n,a))}}function fe(n,a){let i={type:14};if(a.braceNest>0)return ue(n,a)||b(a);if(a.inLinked)return re(n,a)||b(a);const d=n.currentChar();switch(d){case"{":return ue(n,a)||b(a);case"}":return C(I.UNBALANCED_CLOSING_BRACE,l(),0),n.next(),A(a,3,"}");case"@":return re(n,a)||b(a);default:if(F(n))return i=A(a,1,ie(n)),a.braceNest=0,a.inLinked=!1,i;if(z(n))return A(a,0,ot(n));if(d==="%")return n.next(),A(a,4,"%");break}return i}function Et(){const{currentType:n,offset:a,startLoc:i,endLoc:d}=u;return u.lastType=n,u.lastOffset=a,u.lastStartLoc=i,u.lastEndLoc=d,u.offset=c(),u.startLoc=l(),s.currentChar()===j?A(u,14):fe(s,u)}return{nextToken:Et,currentOffset:c,currentPosition:l,context:N}}const $t="parser",xt=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Kt(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const s=parseInt(t||r,16);return s<=55295||s>=57344?String.fromCodePoint(s):"\uFFFD"}}}function Vt(e={}){const t=e.location!==!1,{onError:r}=e;function s(o,m,T,E,...g){const p=o.currentPosition();if(p.offset+=E,p.column+=E,r){const k=Ee(T,p),x=le(m,k,{domain:$t,args:g});r(x)}}function c(o,m,T){const E={type:o,start:m,end:m};return t&&(E.loc={start:T,end:T}),E}function l(o,m,T,E){o.end=m,E&&(o.type=E),t&&o.loc&&(o.loc.end=T)}function f(o,m){const T=o.context(),E=c(3,T.offset,T.startLoc);return E.value=m,l(E,o.currentOffset(),o.currentPosition()),E}function L(o,m){const T=o.context(),{lastOffset:E,lastStartLoc:g}=T,p=c(5,E,g);return p.index=parseInt(m,10),o.nextToken(),l(p,o.currentOffset(),o.currentPosition()),p}function u(o,m){const T=o.context(),{lastOffset:E,lastStartLoc:g}=T,p=c(4,E,g);return p.key=m,o.nextToken(),l(p,o.currentOffset(),o.currentPosition()),p}function N(o,m){const T=o.context(),{lastOffset:E,lastStartLoc:g}=T,p=c(9,E,g);return p.value=m.replace(xt,Kt),o.nextToken(),l(p,o.currentOffset(),o.currentPosition()),p}function h(o){const m=o.nextToken(),T=o.context(),{lastOffset:E,lastStartLoc:g}=T,p=c(8,E,g);return m.type!==12?(s(o,I.UNEXPECTED_EMPTY_LINKED_MODIFIER,T.lastStartLoc,0),p.value="",l(p,E,g),{nextConsumeToken:m,node:p}):(m.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,G(m)),p.value=m.value||"",l(p,o.currentOffset(),o.currentPosition()),{node:p})}function C(o,m){const T=o.context(),E=c(7,T.offset,T.startLoc);return E.value=m,l(E,o.currentOffset(),o.currentPosition()),E}function A(o){const m=o.context(),T=c(6,m.offset,m.startLoc);let E=o.nextToken();if(E.type===9){const g=h(o);T.modifier=g.node,E=g.nextConsumeToken||o.nextToken()}switch(E.type!==10&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(E)),E=o.nextToken(),E.type===2&&(E=o.nextToken()),E.type){case 11:E.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(E)),T.key=C(o,E.value||"");break;case 5:E.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(E)),T.key=u(o,E.value||"");break;case 6:E.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(E)),T.key=L(o,E.value||"");break;case 7:E.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(E)),T.key=N(o,E.value||"");break;default:s(o,I.UNEXPECTED_EMPTY_LINKED_KEY,m.lastStartLoc,0);const g=o.context(),p=c(7,g.offset,g.startLoc);return p.value="",l(p,g.offset,g.startLoc),T.key=p,l(T,g.offset,g.startLoc),{nextConsumeToken:E,node:T}}return l(T,o.currentOffset(),o.currentPosition()),{node:T}}function b(o){const m=o.context(),T=m.currentType===1?o.currentOffset():m.offset,E=m.currentType===1?m.endLoc:m.startLoc,g=c(2,T,E);g.items=[];let p=null;do{const R=p||o.nextToken();switch(p=null,R.type){case 0:R.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(R)),g.items.push(f(o,R.value||""));break;case 6:R.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(R)),g.items.push(L(o,R.value||""));break;case 5:R.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(R)),g.items.push(u(o,R.value||""));break;case 7:R.value==null&&s(o,I.UNEXPECTED_LEXICAL_ANALYSIS,m.lastStartLoc,0,G(R)),g.items.push(N(o,R.value||""));break;case 8:const F=A(o);g.items.push(F.node),p=F.nextConsumeToken||null;break}}while(m.currentType!==14&&m.currentType!==1);const k=m.currentType===1?m.lastOffset:o.currentOffset(),x=m.currentType===1?m.lastEndLoc:o.currentPosition();return l(g,k,x),g}function y(o,m,T,E){const g=o.context();let p=E.items.length===0;const k=c(1,m,T);k.cases=[],k.cases.push(E);do{const x=b(o);p||(p=x.items.length===0),k.cases.push(x)}while(g.currentType!==14);return p&&s(o,I.MUST_HAVE_MESSAGES_IN_PLURAL,T,0),l(k,o.currentOffset(),o.currentPosition()),k}function D(o){const m=o.context(),{offset:T,startLoc:E}=m,g=b(o);return m.currentType===14?g:y(o,T,E,g)}function _(o){const m=Wt(o,B({},e)),T=m.context(),E=c(0,T.offset,T.startLoc);return t&&E.loc&&(E.loc.source=o),E.body=D(m),T.currentType!==14&&s(m,I.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,o[T.offset]||""),l(E,m.currentOffset(),m.currentPosition()),E}return{parse:_}}function G(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function Gt(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:l=>(r.helpers.add(l),l)}}function Fe(e,t){for(let r=0;r<e.length;r++)Le(e[r],t)}function Le(e,t){switch(e.type){case 1:Fe(e.cases,t),t.helper("plural");break;case 2:Fe(e.items,t);break;case 6:Le(e.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Xt(e,t={}){const r=Gt(e);r.helper("normalize"),e.body&&Le(e.body,r);const s=r.context();e.helpers=Array.from(s.helpers)}function Ht(e,t){const{sourceMap:r,filename:s,breakLineCode:c,needIndent:l}=t,f={source:e.loc.source,filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:c,needIndent:l,indentLevel:0},L=()=>f;function u(_,o){f.code+=_,f.map&&(o&&o.loc&&o.loc!==Pt&&D(o.loc.start,qt(o)),Zt(f,_))}function N(_,o=!0){const m=o?c:"";u(l?m+"  ".repeat(_):m)}function h(_=!0){const o=++f.indentLevel;_&&N(o)}function C(_=!0){const o=--f.indentLevel;_&&N(o)}function A(){N(f.indentLevel)}const b=_=>`_${_}`,y=()=>f.needIndent;function D(_,o){f.map.addMapping({name:o,source:f.filename,original:{line:_.line,column:_.column-1},generated:{line:f.line,column:f.column-1}})}return r&&(f.map=new Lt,f.map.setSourceContent(s,f.source)),{context:L,push:u,indent:h,deindent:C,newline:A,helper:b,needIndent:y}}function Yt(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),ee(e,t.key),t.modifier&&(e.push(", "),ee(e,t.modifier)),e.push(")")}function Bt(e,t){const{helper:r,needIndent:s}=e;e.push(`${r("normalize")}([`),e.indent(s());const c=t.items.length;for(let l=0;l<c&&(ee(e,t.items[l]),l!==c-1);l++)e.push(", ");e.deindent(s()),e.push("])")}function jt(e,t){const{helper:r,needIndent:s}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(s());const c=t.cases.length;for(let l=0;l<c&&(ee(e,t.cases[l]),l!==c-1);l++)e.push(", ");e.deindent(s()),e.push("])")}}function Jt(e,t){t.body?ee(e,t.body):e.push("null")}function ee(e,t){const{helper:r}=e;switch(t.type){case 0:Jt(e,t);break;case 1:jt(e,t);break;case 2:Bt(e,t);break;case 6:Yt(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const Qt=(e,t={})=>{const r=S(t.mode)?t.mode:"normal",s=S(t.filename)?t.filename:"message.intl",c=!!t.sourceMap,l=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,f=t.needIndent?t.needIndent:r!=="arrow",L=e.helpers||[],u=Ht(e,{mode:r,filename:s,sourceMap:c,breakLineCode:l,needIndent:f});u.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),u.indent(f),L.length>0&&(u.push(`const { ${L.map(C=>`${C}: _${C}`).join(", ")} } = ctx`),u.newline()),u.push("return "),ee(u,e),u.deindent(f),u.push("}");const{code:N,map:h}=u.context();return{ast:e,code:N,map:h?h.toJSON():void 0}};function qt(e){switch(e.type){case 3:return e.value;case 5:return e.index.toString();case 4:return e.key;case 9:return e.value;case 8:return e.value;case 7:return e.value;default:return}}function Zt(e,t,r=t.length){let s=0,c=-1;for(let l=0;l<r;l++)t.charCodeAt(l)===10&&(s++,c=l);return e.offset+=r,e.line+=s,e.column=c===-1?e.column+r:r-c,e}function zt(e,t={}){const r=B({},t),c=Vt(r).parse(e);return Xt(c,r),Qt(c,r)}/*!
  * devtools-if v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Ue={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const J=[];J[0]={w:[0],i:[3,0],["["]:[4],o:[7]};J[1]={w:[1],["."]:[2],["["]:[4],o:[7]};J[2]={w:[2],i:[3,0],["0"]:[3,0]};J[3]={i:[3,0],["0"]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};J[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};J[5]={["'"]:[4,0],o:8,l:[5,0]};J[6]={['"']:[4,0],o:8,l:[6,0]};const en=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function tn(e){return en.test(e)}function nn(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function rn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function an(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:tn(t)?nn(t):"*"+t}function we(e){const t=[];let r=-1,s=0,c=0,l,f,L,u,N,h,C;const A=[];A[0]=()=>{f===void 0?f=L:f+=L},A[1]=()=>{f!==void 0&&(t.push(f),f=void 0)},A[2]=()=>{A[0](),c++},A[3]=()=>{if(c>0)c--,s=4,A[0]();else{if(c=0,f===void 0||(f=an(f),f===!1))return!1;A[1]()}};function b(){const y=e[r+1];if(s===5&&y==="'"||s===6&&y==='"')return r++,L="\\"+y,A[0](),!0}for(;s!==null;)if(r++,l=e[r],!(l==="\\"&&b())){if(u=rn(l),C=J[s],N=C[u]||C.l||8,N===8||(s=N[0],N[1]!==void 0&&(h=A[N[1]],h&&(L=l,h()===!1))))return;if(s===7)return t}}const ve=new Map;function We(e,t){return $(e)?e[t]:null}function sn(e,t){if(!$(e))return null;let r=ve.get(t);if(r||(r=we(t),r&&ve.set(t,r)),!r)return null;const s=r.length;let c=e,l=0;for(;l<s;){const f=c[r[l]];if(f===void 0)return null;c=f,l++}return c}const ln=e=>e,on=e=>"",$e="text",cn=e=>e.length===0?"":e.join(""),un=Pe;function xe(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function fn(e){const t=v(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(v(e.named.count)||v(e.named.n))?v(e.named.count)?e.named.count:v(e.named.n)?e.named.n:t:t}function mn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Ke(e={}){const t=e.locale,r=fn(e),s=$(e.pluralRules)&&S(t)&&U(e.pluralRules[t])?e.pluralRules[t]:xe,c=$(e.pluralRules)&&S(t)&&U(e.pluralRules[t])?xe:void 0,l=_=>_[s(r,_.length,c)],f=e.list||[],L=_=>f[_],u=e.named||{};v(e.pluralIndex)&&mn(r,u);const N=_=>u[_];function h(_){const o=U(e.messages)?e.messages(_):$(e.messages)?e.messages[_]:!1;return o||(e.parent?e.parent.message(_):on)}const C=_=>e.modifiers?e.modifiers[_]:ln,A=M(e.processor)&&U(e.processor.normalize)?e.processor.normalize:cn,b=M(e.processor)&&U(e.processor.interpolate)?e.processor.interpolate:un,y=M(e.processor)&&S(e.processor.type)?e.processor.type:$e,D={list:L,named:N,plural:l,linked:(_,o)=>{const m=h(_)(D);return S(o)?C(o)(m):m},message:h,type:y,interpolate:b,normalize:A};return D}let te=null;function dn(e){te=e}function _n(){return te}function Ve(e,t,r){te&&te.emit(Ue.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:r})}const Ge=En(Ue.FunctionTranslate);function En(e){return t=>te&&te.emit(e,t)}const q={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},Ln={[q.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[q.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[q.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[q.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[q.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[q.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function Tn(e,...t){return Ie(Ln[e],...t)}function Xe(e,t,r){return[...new Set([r,...V(t)?t:$(t)?Object.keys(t):S(t)?[t]:[r]])]}function Nn(e,t,r){const s=S(r)?r:Te,c=e;c.__localeChainCache||(c.__localeChainCache=new Map);let l=c.__localeChainCache.get(s);if(!l){l=[];let f=[r];for(;V(f);)f=He(l,f,t);const L=V(t)||!M(t)?t:t.default?t.default:null;f=S(L)?[L]:L,V(f)&&He(l,f,!1),c.__localeChainCache.set(s,l)}return l}function He(e,t,r){let s=!0;for(let c=0;c<t.length&&W(s);c++){const l=t[c];S(l)&&(s=pn(e,t[c],r))}return s}function pn(e,t,r){let s;const c=t.split("-");do{const l=c.join("-");s=gn(e,l,r),c.splice(-1,1)}while(c.length&&s===!0);return s}function gn(e,t,r){let s=!1;if(!e.includes(t)&&(s=!0,t)){s=t[t.length-1]!=="!";const c=t.replace(/!/g,"");e.push(c),(V(r)||M(r))&&r[c]&&(s=r[c])}return s}const Ye="9.2.0-beta.2",oe=-1,Te="en-US",An="";function hn(){return{upper:e=>S(e)?e.toUpperCase():e,lower:e=>S(e)?e.toLowerCase():e,capitalize:e=>S(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let Be;function Cn(e){Be=e}let je;function In(e){je=e}let Je;function Sn(e){Je=e}let Qe=null;const On=e=>{Qe=e},qe=()=>Qe;let Ze=0;function kn(e={}){const t=S(e.version)?e.version:Ye,r=S(e.locale)?e.locale:Te,s=V(e.fallbackLocale)||M(e.fallbackLocale)||S(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,c=M(e.messages)?e.messages:{[r]:{}},l=M(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},f=M(e.numberFormats)?e.numberFormats:{[r]:{}},L=B({},e.modifiers||{},hn()),u=e.pluralRules||{},N=U(e.missing)?e.missing:null,h=W(e.missingWarn)||me(e.missingWarn)?e.missingWarn:!0,C=W(e.fallbackWarn)||me(e.fallbackWarn)?e.fallbackWarn:!0,A=!!e.fallbackFormat,b=!!e.unresolving,y=U(e.postTranslation)?e.postTranslation:null,D=M(e.processor)?e.processor:null,_=W(e.warnHtmlMessage)?e.warnHtmlMessage:!0,o=!!e.escapeParameter,m=U(e.messageCompiler)?e.messageCompiler:Be,T=U(e.messageResolver)?e.messageResolver:je||We,E=U(e.localeFallbacker)?e.localeFallbacker:Je||Xe,g=U(e.onWarn)?e.onWarn:De,p=e,k=$(p.__datetimeFormatters)?p.__datetimeFormatters:new Map,x=$(p.__numberFormatters)?p.__numberFormatters:new Map,R=$(p.__meta)?p.__meta:{};Ze++;const F={version:t,cid:Ze,locale:r,fallbackLocale:s,messages:c,modifiers:L,pluralRules:u,missing:N,missingWarn:h,fallbackWarn:C,fallbackFormat:A,unresolving:b,postTranslation:y,processor:D,warnHtmlMessage:_,escapeParameter:o,messageCompiler:m,messageResolver:T,localeFallbacker:E,onWarn:g,__meta:R};return F.datetimeFormats=l,F.numberFormats=f,F.__datetimeFormatters=k,F.__numberFormatters=x,__INTLIFY_PROD_DEVTOOLS__&&Ve(F,t,R),F}function Dn(e,t){return e instanceof RegExp?e.test(t):e}function bn(e,t){return e instanceof RegExp?e.test(t):e}function ce(e,t,r,s,c){const{missing:l,onWarn:f}=e;if(l!==null){const L=l(e,r,t,c);return S(L)?L:t}else return t}function yn(e,t,r){const s=e;s.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}const Pn=e=>e;let Ne=Object.create(null);function Mn(){Ne=Object.create(null)}function Rn(e,t={}){{const s=(t.onCacheKey||Pn)(e),c=Ne[s];if(c)return c;let l=!1;const f=t.onError||yt;t.onError=N=>{l=!0,f(N)};const{code:L}=zt(e,t),u=new Function(`return ${L}`)();return l?u:Ne[s]=u}}let ze=I.__EXTEND_POINT__;const pe=()=>ze++,X={INVALID_ARGUMENT:ze,INVALID_DATE_ARGUMENT:pe(),INVALID_ISO_DATE_ARGUMENT:pe(),__EXTEND_POINT__:pe()};function Z(e){return le(e,null,void 0)}X.INVALID_ARGUMENT+"",X.INVALID_DATE_ARGUMENT+"",X.INVALID_ISO_DATE_ARGUMENT+"";const et=()=>"",K=e=>U(e);function Fn(e,...t){const{fallbackFormat:r,postTranslation:s,unresolving:c,fallbackLocale:l,messages:f}=e,[L,u]=nt(...t),N=W(u.missingWarn)?u.missingWarn:e.missingWarn,h=W(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,C=W(u.escapeParameter)?u.escapeParameter:e.escapeParameter,A=!!u.resolvedMessage,b=S(u.default)||W(u.default)?W(u.default)?L:u.default:r?L:"",y=r||b!=="",D=S(u.locale)?u.locale:e.locale;C&&Un(u);let[_,o,m]=A?[L,D,f[D]||{}]:wn(e,L,D,l,h,N),T=L;if(!A&&!(S(_)||K(_))&&y&&(_=b,T=_),!A&&(!(S(_)||K(_))||!S(o)))return c?oe:L;let E=!1;const g=()=>{E=!0},p=K(_)?_:tt(e,L,o,_,T,g);if(E)return _;const k=$n(e,o,m,u),x=Ke(k),R=vn(e,p,x),F=s?s(R):R;if(__INTLIFY_PROD_DEVTOOLS__){const z={timestamp:Date.now(),key:S(L)?L:K(_)?_.key:"",locale:o||(K(_)?_.locale:""),format:S(_)?_:K(_)?_.source:"",message:F};z.meta=B({},e.__meta,qe()||{}),Ge(z)}return F}function Un(e){V(e.list)?e.list=e.list.map(t=>S(t)?de(t):t):$(e.named)&&Object.keys(e.named).forEach(t=>{S(e.named[t])&&(e.named[t]=de(e.named[t]))})}function wn(e,t,r,s,c,l){const{messages:f,onWarn:L,messageResolver:u,localeFallbacker:N}=e,h=N(e,s,r);let C={},A,b=null;const y="translate";for(let D=0;D<h.length&&(A=h[D],C=f[A]||{},(b=u(C,t))===null&&(b=C[t]),!(S(b)||U(b)));D++){const _=ce(e,t,A,l,y);_!==t&&(b=_)}return[b,A,C]}function tt(e,t,r,s,c,l){const{messageCompiler:f,warnHtmlMessage:L}=e;if(K(s)){const N=s;return N.locale=N.locale||r,N.key=N.key||t,N}const u=f(s,Wn(e,r,c,s,L,l));return u.locale=r,u.key=t,u.source=s,u}function vn(e,t,r){return t(r)}function nt(...e){const[t,r,s]=e,c={};if(!S(t)&&!v(t)&&!K(t))throw Z(X.INVALID_ARGUMENT);const l=v(t)?String(t):(K(t),t);return v(r)?c.plural=r:S(r)?c.default=r:M(r)&&!ae(r)?c.named=r:V(r)&&(c.list=r),v(s)?c.plural=s:S(s)?c.default=s:M(s)&&B(c,s),[l,c]}function Wn(e,t,r,s,c,l){return{warnHtmlMessage:c,onError:f=>{throw l&&l(f),f},onCacheKey:f=>Se(t,r,f)}}function $n(e,t,r,s){const{modifiers:c,pluralRules:l,messageResolver:f}=e,u={locale:t,modifiers:c,pluralRules:l,messages:N=>{const h=f(r,N);if(S(h)){let C=!1;const b=tt(e,N,t,h,N,()=>{C=!0});return C?et:b}else return K(h)?h:et}};return e.processor&&(u.processor=e.processor),s.list&&(u.list=s.list),s.named&&(u.named=s.named),v(s.plural)&&(u.pluralIndex=s.plural),u}function xn(e,...t){const{datetimeFormats:r,unresolving:s,fallbackLocale:c,onWarn:l,localeFallbacker:f}=e,{__datetimeFormatters:L}=e,[u,N,h,C]=rt(...t),A=W(h.missingWarn)?h.missingWarn:e.missingWarn;W(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn;const b=!!h.part,y=S(h.locale)?h.locale:e.locale,D=f(e,c,y);if(!S(u)||u==="")return new Intl.DateTimeFormat(y).format(N);let _={},o,m=null;const T="datetime format";for(let p=0;p<D.length&&(o=D[p],_=r[o]||{},m=_[u],!M(m));p++)ce(e,u,o,A,T);if(!M(m)||!S(o))return s?oe:u;let E=`${o}__${u}`;ae(C)||(E=`${E}__${JSON.stringify(C)}`);let g=L.get(E);return g||(g=new Intl.DateTimeFormat(o,B({},m,C)),L.set(E,g)),b?g.formatToParts(N):g.format(N)}function rt(...e){const[t,r,s,c]=e;let l={},f={},L;if(S(t)){const u=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!u)throw Z(X.INVALID_ISO_DATE_ARGUMENT);const N=u[3]?u[3].trim().startsWith("T")?`${u[1].trim()}${u[3].trim()}`:`${u[1].trim()}T${u[3].trim()}`:u[1].trim();L=new Date(N);try{L.toISOString()}catch(h){throw Z(X.INVALID_ISO_DATE_ARGUMENT)}}else if(ke(t)){if(isNaN(t.getTime()))throw Z(X.INVALID_DATE_ARGUMENT);L=t}else if(v(t))L=t;else throw Z(X.INVALID_ARGUMENT);return S(r)?l.key=r:M(r)&&(l=r),S(s)?l.locale=s:M(s)&&(f=s),M(c)&&(f=c),[l.key||"",L,l,f]}function Kn(e,t,r){const s=e;for(const c in r){const l=`${t}__${c}`;!s.__datetimeFormatters.has(l)||s.__datetimeFormatters.delete(l)}}function Vn(e,...t){const{numberFormats:r,unresolving:s,fallbackLocale:c,onWarn:l,localeFallbacker:f}=e,{__numberFormatters:L}=e,[u,N,h,C]=at(...t),A=W(h.missingWarn)?h.missingWarn:e.missingWarn;W(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn;const b=!!h.part,y=S(h.locale)?h.locale:e.locale,D=f(e,c,y);if(!S(u)||u==="")return new Intl.NumberFormat(y).format(N);let _={},o,m=null;const T="number format";for(let p=0;p<D.length&&(o=D[p],_=r[o]||{},m=_[u],!M(m));p++)ce(e,u,o,A,T);if(!M(m)||!S(o))return s?oe:u;let E=`${o}__${u}`;ae(C)||(E=`${E}__${JSON.stringify(C)}`);let g=L.get(E);return g||(g=new Intl.NumberFormat(o,B({},m,C)),L.set(E,g)),b?g.formatToParts(N):g.format(N)}function at(...e){const[t,r,s,c]=e;let l={},f={};if(!v(t))throw Z(X.INVALID_ARGUMENT);const L=t;return S(r)?l.key=r:M(r)&&(l=r),S(s)?l.locale=s:M(s)&&(f=s),M(c)&&(f=c),[l.key||"",L,l,f]}function Gn(e,t,r){const s=e;for(const c in r){const l=`${t}__${c}`;!s.__numberFormatters.has(l)||s.__numberFormatters.delete(l)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ye().__INTLIFY_PROD_DEVTOOLS__=!1);var Xn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",CoreErrorCodes:X,CoreWarnCodes:q,DEFAULT_LOCALE:Te,DEFAULT_MESSAGE_DATA_TYPE:$e,MISSING_RESOLVE_VALUE:An,NOT_REOSLVED:oe,VERSION:Ye,clearCompileCache:Mn,clearDateTimeFormat:Kn,clearNumberFormat:Gn,compileToFunction:Rn,createCoreContext:kn,createCoreError:Z,createMessageContext:Ke,datetime:xn,fallbackWithLocaleChain:Nn,fallbackWithSimple:Xe,getAdditionalMeta:qe,getDevToolsHook:_n,getWarnMessage:Tn,handleMissing:ce,initI18nDevTools:Ve,isMessageFunction:K,isTranslateFallbackWarn:Dn,isTranslateMissingWarn:bn,number:Vn,parse:we,parseDateTimeArgs:rt,parseNumberArgs:at,parseTranslateArgs:nt,registerLocaleFallbacker:Sn,registerMessageCompiler:Cn,registerMessageResolver:In,resolveValue:sn,resolveWithKeyValue:We,setAdditionalMeta:On,setDevToolsHook:dn,translate:Fn,translateDevTools:Ge,updateFallbackLocale:yn,CompileErrorCodes:I,createCompileError:le}),jn=Ce(Xn);export{jn as a,Bn as r};
