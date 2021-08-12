import{g as e}from"./vue-i18n.ad14b06d.js";import{S as t}from"./source-map.3671d69c.js";
/*!
  * shared v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const n="undefined"!=typeof window;const r=/\{([0-9a-zA-Z]+)\}/g;function o(e,...t){return 1===t.length&&h(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(r,((e,n)=>t.hasOwnProperty(n)?t[n]:""))}const a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,s=(e,t,n)=>c({l:e,k:t,s:n}),c=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),l=e=>"number"==typeof e&&isFinite(e),u=e=>"[object Date]"===C(e),i=e=>"[object RegExp]"===C(e),f=e=>b(e)&&0===Object.keys(e).length;function m(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const p=Object.assign;let _;const d=()=>_||(_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function E(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const L=Object.prototype.hasOwnProperty;const T=Array.isArray,N=e=>"function"==typeof e,A=e=>"string"==typeof e,g=e=>"boolean"==typeof e,h=e=>null!==e&&"object"==typeof e,k=Object.prototype.toString,C=e=>k.call(e),b=e=>"[object Object]"===C(e),I=e=>null==e?"":T(e)||b(e)&&e.toString===k?JSON.stringify(e,null,2):String(e);var O=e(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",assign:p,createEmitter:function(){const e=new Map;return{events:e,on(t,n){const r=e.get(t);r&&r.push(n)||e.set(t,[n])},off(t,n){const r=e.get(t);r&&r.splice(r.indexOf(n)>>>0,1)},emit(t,n){(e.get(t)||[]).slice().map((e=>e(n))),(e.get("*")||[]).slice().map((e=>e(t,n)))}}},escapeHtml:E,format:o,friendlyJSONstringify:c,generateCodeFrame:function(e,t=0,n=e.length){const r=e.split(/\r?\n/);let o=0;const a=[];for(let s=0;s<r.length;s++)if(o+=r[s].length+1,o>=t){for(let e=s-2;e<=s+2||n>o;e++){if(e<0||e>=r.length)continue;const c=e+1;a.push(`${c}${" ".repeat(3-String(c).length)}|  ${r[e]}`);const l=r[e].length;if(e===s){const e=t-(o-l)+1,r=Math.max(1,n>o?l-e:n-t);a.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>s){if(n>o){const e=Math.max(Math.min(n-o,l),1);a.push("   |  "+"^".repeat(e))}o+=l+1}}break}return a.join("\n")},generateFormatCacheKey:s,getGlobalThis:d,hasOwn:function(e,t){return L.call(e,t)},inBrowser:n,isArray:T,isBoolean:g,isDate:u,isEmptyObject:f,isFunction:N,isNumber:l,isObject:h,isPlainObject:b,isPromise:e=>h(e)&&N(e.then)&&N(e.catch),isRegExp:i,isString:A,isSymbol:e=>"symbol"==typeof e,makeSymbol:e=>a?Symbol(e):e,mark:undefined,measure:undefined,objectToString:k,toDisplayString:I,toTypeString:C,warn:m}));
/*!
  * message-compiler v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const y={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function S(e,t,n={}){const{domain:r,messages:o,args:a}=n,s=new SyntaxError(String(e));return s.code=e,t&&(s.location=t),s.domain=r,s}function D(e){throw e}const P={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function F(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const R=String.fromCharCode(8232),v=String.fromCharCode(8233);function M(e){const t=e;let n=0,r=1,o=1,a=0;const s=e=>"\r"===t[e]&&"\n"===t[e+1],c=e=>t[e]===v,l=e=>t[e]===R,u=e=>s(e)||(e=>"\n"===t[e])(e)||c(e)||l(e),i=e=>s(e)||c(e)||l(e)?"\n":t[e];function f(){return a=0,u(n)&&(r++,o=0),s(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>a,charAt:i,currentChar:()=>i(n),currentPeek:()=>i(n+a),next:f,peek:function(){return s(n+a)&&a++,a++,t[n+a]},reset:function(){n=0,r=1,o=1,a=0},resetPeek:function(e=0){a=e},skipToPeek:function(){const e=n+a;for(;e!==n;)f();a=0}}}const x=void 0;function w(e,t={}){const n=!1!==t.location,r=M(e),o=()=>r.index(),a=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},s=a(),c=o(),l={currentType:14,offset:c,startLoc:s,endLoc:s,lastType:14,lastOffset:c,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},u=()=>l,{onError:i}=t;function f(e,t,n,...r){const o=u();if(t.column+=n,t.offset+=n,i){const n=S(e,F(o.startLoc,t),{domain:"tokenizer",args:r});i(n)}}function m(e,t,r){e.endLoc=a(),e.currentType=t;const o={type:t};return n&&(o.loc=F(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const p=e=>m(e,14);function _(e,t){return e.currentChar()===t?(e.next(),t):(f(y.EXPECTED_TOKEN,a(),0,t),"")}function d(e){let t="";for(;" "===e.currentPeek()||"\n"===e.currentPeek();)t+=e.currentPeek(),e.peek();return t}function E(e){const t=d(e);return e.skipToPeek(),t}function L(e){if(e===x)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function T(e,t){const{currentType:n}=t;if(2!==n)return!1;d(e);const r=function(e){if(e===x)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function N(e){d(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function A(e,t=!0){const n=(t=!1,r="",o=!1)=>{const a=e.currentPeek();return"{"===a?"%"!==r&&t:"@"!==a&&a?"%"===a?(e.peek(),n(t,"%",!0)):"|"===a?!("%"!==r&&!o)||!(" "===r||"\n"===r):" "===a?(e.peek(),n(!0," ",o)):"\n"!==a||(e.peek(),n(!0,"\n",o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function g(e,t){const n=e.currentChar();return n===x?x:t(n)?(e.next(),n):null}function h(e){return g(e,(e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}))}function k(e){return g(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57}))}function C(e){return g(e,(e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}))}function b(e){let t="",n="";for(;t=k(e);)n+=t;return n}function I(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return O(e,t,4);case"U":return O(e,t,6);default:return f(y.UNKNOWN_ESCAPE_SEQUENCE,a(),0,t),""}}function O(e,t,n){_(e,t);let r="";for(let o=0;o<n;o++){const n=C(e);if(!n){f(y.INVALID_UNICODE_ESCAPE_SEQUENCE,a(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function D(e){E(e);const t=_(e,"|");return E(e),t}function P(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&f(y.NOT_ALLOW_NEST_PLACEHOLDER,a(),0),e.next(),n=m(t,2,"{"),E(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&f(y.EMPTY_PLACEHOLDER,a(),0),e.next(),n=m(t,3,"}"),t.braceNest--,t.braceNest>0&&E(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&f(y.UNTERMINATED_CLOSING_BRACE,a(),0),n=R(e,t)||p(t),t.braceNest=0,n;default:let r=!0,o=!0,s=!0;if(N(e))return t.braceNest>0&&f(y.UNTERMINATED_CLOSING_BRACE,a(),0),n=m(t,1,D(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return f(y.UNTERMINATED_CLOSING_BRACE,a(),0),t.braceNest=0,v(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;d(e);const r=L(e.currentPeek());return e.resetPeek(),r}(e,t))return n=m(t,5,function(e){E(e);let t="",n="";for(;t=h(e);)n+=t;return e.currentChar()===x&&f(y.UNTERMINATED_CLOSING_BRACE,a(),0),n}(e)),E(e),n;if(o=T(e,t))return n=m(t,6,function(e){E(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${b(e)}`):t+=b(e),e.currentChar()===x&&f(y.UNTERMINATED_CLOSING_BRACE,a(),0),t}(e)),E(e),n;if(s=function(e,t){const{currentType:n}=t;if(2!==n)return!1;d(e);const r="'"===e.currentPeek();return e.resetPeek(),r}(e,t))return n=m(t,7,function(e){E(e),_(e,"'");let t="",n="";const r=e=>"'"!==e&&"\n"!==e;for(;t=g(e,r);)n+="\\"===t?I(e):t;const o=e.currentChar();return"\n"===o||o===x?(f(y.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,a(),0),"\n"===o&&(e.next(),_(e,"'")),n):(_(e,"'"),n)}(e)),E(e),n;if(!r&&!o&&!s)return n=m(t,13,function(e){E(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&" "!==e&&"\n"!==e;for(;t=g(e,r);)n+=t;return n}(e)),f(y.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,n.value),E(e),n}return n}function R(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||"\n"!==o&&" "!==o||f(y.INVALID_LINKED_FORMAT,a(),0),o){case"@":return e.next(),r=m(t,8,"@"),t.inLinked=!0,r;case".":return E(e),e.next(),m(t,9,".");case":":return E(e),e.next(),m(t,10,":");default:return N(e)?(r=m(t,1,D(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8!==n)return!1;d(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;d(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(E(e),R(e,t)):function(e,t){const{currentType:n}=t;if(9!==n)return!1;d(e);const r=L(e.currentPeek());return e.resetPeek(),r}(e,t)?(E(e),m(t,12,function(e){let t="",n="";for(;t=h(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?L(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||" "===t||!t)&&("\n"===t?(e.peek(),r()):L(t))},o=r();return e.resetPeek(),o}(e,t)?(E(e),"{"===o?P(e,t)||r:m(t,11,function(e){const t=(n=!1,r)=>{const o=e.currentChar();return"{"!==o&&"%"!==o&&"@"!==o&&"|"!==o&&o?" "===o?r:"\n"===o?(r+=o,e.next(),t(n,r)):(r+=o,e.next(),t(!0,r)):r};return t(!1,"")}(e))):(8===n&&f(y.INVALID_LINKED_FORMAT,a(),0),t.braceNest=0,t.inLinked=!1,v(e,t))}}function v(e,t){let n={type:14};if(t.braceNest>0)return P(e,t)||p(t);if(t.inLinked)return R(e,t)||p(t);const r=e.currentChar();switch(r){case"{":return P(e,t)||p(t);case"}":return f(y.UNBALANCED_CLOSING_BRACE,a(),0),e.next(),m(t,3,"}");case"@":return R(e,t)||p(t);default:if(N(e))return n=m(t,1,D(e)),t.braceNest=0,t.inLinked=!1,n;if(A(e))return m(t,0,function(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"}"!==r&&"@"!==r&&r?"%"===r?A(e)?(n+=r,e.next(),t(n)):n:"|"===r?n:" "===r||"\n"===r?A(e)?(n+=r,e.next(),t(n)):N(e)?n:(n+=r,e.next(),t(n)):(n+=r,e.next(),t(n)):n};return t("")}(e));if("%"===r)return e.next(),m(t,4,"%")}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:s}=l;return l.lastType=e,l.lastOffset=t,l.lastStartLoc=n,l.lastEndLoc=s,l.offset=o(),l.startLoc=a(),r.currentChar()===x?m(l,14):v(r,l)},currentOffset:o,currentPosition:a,context:u}}const U=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function W(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function $(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,o,...a){const s=e.currentPosition();if(s.offset+=o,s.column+=o,n){const e=S(t,F(r,s),{domain:"parser",args:a});n(e)}}function o(e,n,r){const o={type:e,start:n,end:n};return t&&(o.loc={start:r,end:r}),o}function a(e,n,r,o){e.end=n,o&&(e.type=o),t&&e.loc&&(e.loc.end=r)}function s(e,t){const n=e.context(),r=o(3,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(5,r,s);return c.index=parseInt(t,10),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(4,r,s);return c.key=t,e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function u(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:s}=n,c=o(9,r,s);return c.value=t.replace(U,W),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function i(e){const t=e.context(),n=o(6,t.offset,t.startLoc);let s=e.nextToken();if(9===s.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:s,lastStartLoc:c}=n,l=o(8,s,c);return 12!==t.type?(r(e,y.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),l.value="",a(l,s,c),{nextConsumeToken:t,node:l}):(null==t.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,X(t)),l.value=t.value||"",a(l,e.currentOffset(),e.currentPosition()),{node:l})}(e);n.modifier=t.node,s=t.nextConsumeToken||e.nextToken()}switch(10!==s.type&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(s)),s=e.nextToken(),2===s.type&&(s=e.nextToken()),s.type){case 11:null==s.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(s)),n.key=function(e,t){const n=e.context(),r=o(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}(e,s.value||"");break;case 5:null==s.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(s)),n.key=l(e,s.value||"");break;case 6:null==s.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(s)),n.key=c(e,s.value||"");break;case 7:null==s.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(s)),n.key=u(e,s.value||"");break;default:r(e,y.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const i=e.context(),f=o(7,i.offset,i.startLoc);return f.value="",a(f,i.offset,i.startLoc),n.key=f,a(n,i.offset,i.startLoc),{nextConsumeToken:s,node:n}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function f(e){const t=e.context(),n=o(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let f=null;do{const o=f||e.nextToken();switch(f=null,o.type){case 0:null==o.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(o)),n.items.push(s(e,o.value||""));break;case 6:null==o.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(o)),n.items.push(c(e,o.value||""));break;case 5:null==o.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(o)),n.items.push(l(e,o.value||""));break;case 7:null==o.value&&r(e,y.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,X(o)),n.items.push(u(e,o.value||""));break;case 8:const a=i(e);n.items.push(a.node),f=a.nextConsumeToken||null}}while(14!==t.currentType&&1!==t.currentType);return a(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function m(e){const t=e.context(),{offset:n,startLoc:s}=t,c=f(e);return 14===t.currentType?c:function(e,t,n,s){const c=e.context();let l=0===s.items.length;const u=o(1,t,n);u.cases=[],u.cases.push(s);do{const t=f(e);l||(l=0===t.items.length),u.cases.push(t)}while(14!==c.currentType);return l&&r(e,y.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),a(u,e.currentOffset(),e.currentPosition()),u}(e,n,s,c)}return{parse:function(n){const s=w(n,p({},e)),c=s.context(),l=o(0,c.offset,c.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=m(s),14!==c.currentType&&r(s,y.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,n[c.offset]||""),a(l,s.currentOffset(),s.currentPosition()),l}}}function X(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function V(e,t){for(let n=0;n<e.length;n++)K(e[n],t)}function K(e,t){switch(e.type){case 1:V(e.cases,t),t.helper("plural");break;case 2:V(e.items,t);break;case 6:K(e.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function Y(e,t={}){const n=function(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&K(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function j(e,n){const{sourceMap:r,filename:o,breakLineCode:a,needIndent:s}=n,c={source:e.loc.source,filename:o,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:a,needIndent:s,indentLevel:0};function l(e,t){var n,r;c.code+=e,c.map&&(t&&t.loc&&t.loc!==P&&(n=t.loc.start,r=function(e){switch(e.type){case 3:return e.value;case 5:return e.index.toString();case 4:return e.key;case 9:case 8:case 7:return e.value;default:return}}(t),c.map.addMapping({name:r,source:c.filename,original:{line:n.line,column:n.column-1},generated:{line:c.line,column:c.column-1}})),function(e,t,n=t.length){let r=0,o=-1;for(let a=0;a<n;a++)10===t.charCodeAt(a)&&(r++,o=a);e.offset+=n,e.line+=r,e.column=-1===o?e.column+n:n-o}(c,e))}function u(e,t=!0){const n=t?a:"";l(s?n+"  ".repeat(e):n)}return r&&(c.map=new t,c.map.setSourceContent(o,c.source)),{context:()=>c,push:l,indent:function(e=!0){const t=++c.indentLevel;e&&u(t)},deindent:function(e=!0){const t=--c.indentLevel;e&&u(t)},newline:function(){u(c.indentLevel)},helper:e=>`_${e}`,needIndent:()=>c.needIndent}}function G(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?G(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(G(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let a=0;a<o&&(G(e,t.items[a]),a!==o-1);a++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),G(e,t.key),t.modifier&&(e.push(", "),G(e,t.modifier)),e.push(")")}(e,t);break;case 8:case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:case 3:e.push(JSON.stringify(t.value),t)}}function B(e,t={}){const n=p({},t),r=$(n).parse(e);return Y(r,n),((e,t={})=>{const n=A(t.mode)?t.mode:"normal",r=A(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,a=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",s=t.needIndent?t.needIndent:"arrow"!==n,c=e.helpers||[],l=j(e,{mode:n,filename:r,sourceMap:o,breakLineCode:a,needIndent:s});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),c.length>0&&(l.push(`const { ${c.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),l.newline()),l.push("return "),G(l,e),l.deindent(s),l.push("}");const{code:u,map:i}=l.context();return{ast:e,code:u,map:i?i.toJSON():void 0}})(r,n)}
/*!
  * devtools-if v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const H="i18n:init",z="function:translate",J=[];
/*!
  * core-base v9.2.0-beta.2
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */J[0]={w:[0],i:[3,0],"[":[4],o:[7]},J[1]={w:[1],".":[2],"[":[4],o:[7]},J[2]={w:[2],i:[3,0],0:[3,0]},J[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},J[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},J[5]={"'":[4,0],o:8,l:[5,0]},J[6]={'"':[4,0],o:8,l:[6,0]};const Q=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function q(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Z(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,Q.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}function ee(e){const t=[];let n,r,o,a,s,c,l,u=-1,i=0,f=0;const m=[];function p(){const t=e[u+1];if(5===i&&"'"===t||6===i&&'"'===t)return u++,o="\\"+t,m[0](),!0}for(m[0]=()=>{void 0===r?r=o:r+=o},m[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},m[2]=()=>{m[0](),f++},m[3]=()=>{if(f>0)f--,i=4,m[0]();else{if(f=0,void 0===r)return!1;if(r=Z(r),!1===r)return!1;m[1]()}};null!==i;)if(u++,n=e[u],"\\"!==n||!p()){if(a=q(n),l=J[i],s=l[a]||l.l||8,8===s)return;if(i=s[0],void 0!==s[1]&&(c=m[s[1]],c&&(o=n,!1===c())))return;if(7===i)return t}}const te=new Map;function ne(e,t){return h(e)?e[t]:null}const re=e=>e,oe=e=>"",ae=e=>0===e.length?"":e.join(""),se=I;function ce(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function le(e={}){const t=e.locale,n=function(e){const t=l(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(l(e.named.count)||l(e.named.n))?l(e.named.count)?e.named.count:l(e.named.n)?e.named.n:t:t}(e),r=h(e.pluralRules)&&A(t)&&N(e.pluralRules[t])?e.pluralRules[t]:ce,o=h(e.pluralRules)&&A(t)&&N(e.pluralRules[t])?ce:void 0,a=e.list||[],s=e.named||{};l(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,s);function c(t){const n=N(e.messages)?e.messages(t):!!h(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):oe)}const u=b(e.processor)&&N(e.processor.normalize)?e.processor.normalize:ae,i=b(e.processor)&&N(e.processor.interpolate)?e.processor.interpolate:se,f={list:e=>a[e],named:e=>s[e],plural:e=>e[r(n,e.length,o)],linked:(t,n)=>{const r=c(t)(f);return A(n)?(o=n,e.modifiers?e.modifiers[o]:re)(r):r;var o},message:c,type:b(e.processor)&&A(e.processor.type)?e.processor.type:"text",interpolate:i,normalize:u};return f}let ue=null;function ie(e,t,n){ue&&ue.emit(H,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const fe=me(z);function me(e){return t=>ue&&ue.emit(e,t)}const pe={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},_e={[pe.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[pe.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[pe.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[pe.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[pe.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[pe.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function de(e,t,n){return[...new Set([n,...T(t)?t:h(t)?Object.keys(t):A(t)?[t]:[n]])]}function Ee(e,t,n){let r=!0;for(let o=0;o<t.length&&g(r);o++){const a=t[o];A(a)&&(r=Le(e,t[o],n))}return r}function Le(e,t,n){let r;const o=t.split("-");do{r=Te(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function Te(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(T(n)||b(n))&&n[o]&&(r=n[o])}return r}const Ne="en-US";let Ae,ge,he;let ke=null;const Ce=()=>ke;let be=0;function Ie(e,t,n,r,o){const{missing:a,onWarn:s}=e;if(null!==a){const r=a(e,n,t,o);return A(r)?r:t}return t}const Oe=e=>e;let ye=Object.create(null);let Se=y.__EXTEND_POINT__;const De=()=>Se++,Pe={INVALID_ARGUMENT:Se,INVALID_DATE_ARGUMENT:De(),INVALID_ISO_DATE_ARGUMENT:De(),__EXTEND_POINT__:De()};function Fe(e){return S(e,null,void 0)}const Re=()=>"",ve=e=>N(e);function Me(e,t,n,r,o,a){const{messageCompiler:c,warnHtmlMessage:l}=e;if(ve(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}const u=c(r,function(e,t,n,r,o,a){return{warnHtmlMessage:o,onError:e=>{throw a&&a(e),e},onCacheKey:e=>s(t,n,e)}}(0,n,o,0,l,a));return u.locale=n,u.key=t,u.source=r,u}function xe(...e){const[t,n,r]=e,o={};if(!A(t)&&!l(t)&&!ve(t))throw Fe(Pe.INVALID_ARGUMENT);const a=l(t)?String(t):(ve(t),t);return l(n)?o.plural=n:A(n)?o.default=n:b(n)&&!f(n)?o.named=n:T(n)&&(o.list=n),l(r)?o.plural=r:A(r)?o.default=r:b(r)&&p(o,r),[a,o]}function we(...e){const[t,n,r,o]=e;let a,s={},c={};if(A(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Fe(Pe.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();a=new Date(n);try{a.toISOString()}catch(i){throw Fe(Pe.INVALID_ISO_DATE_ARGUMENT)}}else if(u(t)){if(isNaN(t.getTime()))throw Fe(Pe.INVALID_DATE_ARGUMENT);a=t}else{if(!l(t))throw Fe(Pe.INVALID_ARGUMENT);a=t}return A(n)?s.key=n:b(n)&&(s=n),A(r)?s.locale=r:b(r)&&(c=r),b(o)&&(c=o),[s.key||"",a,s,c]}function Ue(...e){const[t,n,r,o]=e;let a={},s={};if(!l(t))throw Fe(Pe.INVALID_ARGUMENT);const c=t;return A(n)?a.key=n:b(n)&&(a=n),A(r)?a.locale=r:b(r)&&(s=r),b(o)&&(s=o),[a.key||"",c,a,s]}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(d().__INTLIFY_PROD_DEVTOOLS__=!1);var We=e(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",CoreErrorCodes:Pe,CoreWarnCodes:pe,DEFAULT_LOCALE:Ne,DEFAULT_MESSAGE_DATA_TYPE:"text",MISSING_RESOLVE_VALUE:"",NOT_REOSLVED:-1,VERSION:"9.2.0-beta.2",clearCompileCache:function(){ye=Object.create(null)},clearDateTimeFormat:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},clearNumberFormat:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},compileToFunction:function(e,t={}){{const n=(t.onCacheKey||Oe)(e),r=ye[n];if(r)return r;let o=!1;const a=t.onError||D;t.onError=e=>{o=!0,a(e)};const{code:s}=B(e,t),c=new Function(`return ${s}`)();return o?c:ye[n]=c}},createCoreContext:function(e={}){const t=A(e.version)?e.version:"9.2.0-beta.2",n=A(e.locale)?e.locale:Ne,r=T(e.fallbackLocale)||b(e.fallbackLocale)||A(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,o=b(e.messages)?e.messages:{[n]:{}},a=b(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},s=b(e.numberFormats)?e.numberFormats:{[n]:{}},c=p({},e.modifiers||{},{upper:e=>A(e)?e.toUpperCase():e,lower:e=>A(e)?e.toLowerCase():e,capitalize:e=>A(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}),l=e.pluralRules||{},u=N(e.missing)?e.missing:null,f=!g(e.missingWarn)&&!i(e.missingWarn)||e.missingWarn,_=!g(e.fallbackWarn)&&!i(e.fallbackWarn)||e.fallbackWarn,d=!!e.fallbackFormat,E=!!e.unresolving,L=N(e.postTranslation)?e.postTranslation:null,k=b(e.processor)?e.processor:null,C=!g(e.warnHtmlMessage)||e.warnHtmlMessage,I=!!e.escapeParameter,O=N(e.messageCompiler)?e.messageCompiler:Ae,y=N(e.messageResolver)?e.messageResolver:ge||ne,S=N(e.localeFallbacker)?e.localeFallbacker:he||de,D=N(e.onWarn)?e.onWarn:m,P=e,F=h(P.__datetimeFormatters)?P.__datetimeFormatters:new Map,R=h(P.__numberFormatters)?P.__numberFormatters:new Map,v=h(P.__meta)?P.__meta:{};be++;const M={version:t,cid:be,locale:n,fallbackLocale:r,messages:o,modifiers:c,pluralRules:l,missing:u,missingWarn:f,fallbackWarn:_,fallbackFormat:d,unresolving:E,postTranslation:L,processor:k,warnHtmlMessage:C,escapeParameter:I,messageCompiler:O,messageResolver:y,localeFallbacker:S,onWarn:D,__meta:v};return M.datetimeFormats=a,M.numberFormats=s,M.__datetimeFormatters=F,M.__numberFormatters=R,__INTLIFY_PROD_DEVTOOLS__&&ie(M,t,v),M},createCoreError:Fe,createMessageContext:le,datetime:function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:a,localeFallbacker:s}=e,{__datetimeFormatters:c}=e,[l,u,i,m]=we(...t);g(i.missingWarn)?i.missingWarn:e.missingWarn,g(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn;const _=!!i.part,d=A(i.locale)?i.locale:e.locale,E=s(e,o,d);if(!A(l)||""===l)return new Intl.DateTimeFormat(d).format(u);let L,T={},N=null;for(let f=0;f<E.length&&(L=E[f],T=n[L]||{},N=T[l],!b(N));f++)Ie(e,l,L,0,"datetime format");if(!b(N)||!A(L))return r?-1:l;let h=`${L}__${l}`;f(m)||(h=`${h}__${JSON.stringify(m)}`);let k=c.get(h);return k||(k=new Intl.DateTimeFormat(L,p({},N,m)),c.set(h,k)),_?k.formatToParts(u):k.format(u)},fallbackWithLocaleChain:function(e,t,n){const r=A(n)?n:Ne,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let a=o.__localeChainCache.get(r);if(!a){a=[];let e=[n];for(;T(e);)e=Ee(a,e,t);const s=T(t)||!b(t)?t:t.default?t.default:null;e=A(s)?[s]:s,T(e)&&Ee(a,e,!1),o.__localeChainCache.set(r,a)}return a},fallbackWithSimple:de,getAdditionalMeta:Ce,getDevToolsHook:function(){return ue},getWarnMessage:function(e,...t){return o(_e[e],...t)},handleMissing:Ie,initI18nDevTools:ie,isMessageFunction:ve,isTranslateFallbackWarn:function(e,t){return e instanceof RegExp?e.test(t):e},isTranslateMissingWarn:function(e,t){return e instanceof RegExp?e.test(t):e},number:function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:a,localeFallbacker:s}=e,{__numberFormatters:c}=e,[l,u,i,m]=Ue(...t);g(i.missingWarn)?i.missingWarn:e.missingWarn,g(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn;const _=!!i.part,d=A(i.locale)?i.locale:e.locale,E=s(e,o,d);if(!A(l)||""===l)return new Intl.NumberFormat(d).format(u);let L,T={},N=null;for(let f=0;f<E.length&&(L=E[f],T=n[L]||{},N=T[l],!b(N));f++)Ie(e,l,L,0,"number format");if(!b(N)||!A(L))return r?-1:l;let h=`${L}__${l}`;f(m)||(h=`${h}__${JSON.stringify(m)}`);let k=c.get(h);return k||(k=new Intl.NumberFormat(L,p({},N,m)),c.set(h,k)),_?k.formatToParts(u):k.format(u)},parse:ee,parseDateTimeArgs:we,parseNumberArgs:Ue,parseTranslateArgs:xe,registerLocaleFallbacker:function(e){he=e},registerMessageCompiler:function(e){Ae=e},registerMessageResolver:function(e){ge=e},resolveValue:function(e,t){if(!h(e))return null;let n=te.get(t);if(n||(n=ee(t),n&&te.set(t,n)),!n)return null;const r=n.length;let o=e,a=0;for(;a<r;){const e=o[n[a]];if(void 0===e)return null;o=e,a++}return o},resolveWithKeyValue:ne,setAdditionalMeta:e=>{ke=e},setDevToolsHook:function(e){ue=e},translate:function(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:o,fallbackLocale:a,messages:s}=e,[c,u]=xe(...t),i=(g(u.missingWarn)?u.missingWarn:e.missingWarn,g(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,g(u.escapeParameter)?u.escapeParameter:e.escapeParameter),f=!!u.resolvedMessage,m=A(u.default)||g(u.default)?g(u.default)?c:u.default:n?c:"",_=n||""!==m,d=A(u.locale)?u.locale:e.locale;i&&function(e){T(e.list)?e.list=e.list.map((e=>A(e)?E(e):e)):h(e.named)&&Object.keys(e.named).forEach((t=>{A(e.named[t])&&(e.named[t]=E(e.named[t]))}))}(u);let[L,k,C]=f?[c,d,s[d]||{}]:function(e,t,n,r,o,a){const{messages:s,onWarn:c,messageResolver:l,localeFallbacker:u}=e,i=u(e,r,n);let f,m={},p=null;const _="translate";for(let d=0;d<i.length&&(f=i[d],m=s[f]||{},null===(p=l(m,t))&&(p=m[t]),!A(p)&&!N(p));d++){const n=Ie(e,t,f,0,_);n!==t&&(p=n)}return[p,f,m]}(e,c,d,a),b=c;if(f||A(L)||ve(L)||_&&(L=m,b=L),!(f||(A(L)||ve(L))&&A(k)))return o?-1:c;let I=!1;const O=ve(L)?L:Me(e,c,k,L,b,(()=>{I=!0}));if(I)return L;const y=function(e,t,n){return t(n)}(0,O,le(function(e,t,n,r){const{modifiers:o,pluralRules:a,messageResolver:s}=e,c={locale:t,modifiers:o,pluralRules:a,messages:r=>{const o=s(n,r);if(A(o)){let n=!1;const a=Me(e,r,t,o,r,(()=>{n=!0}));return n?Re:a}return ve(o)?o:Re}};e.processor&&(c.processor=e.processor);r.list&&(c.list=r.list);r.named&&(c.named=r.named);l(r.plural)&&(c.pluralIndex=r.plural);return c}(e,k,C,u))),S=r?r(y):y;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:A(c)?c:ve(L)?L.key:"",locale:k||(ve(L)?L.locale:""),format:A(L)?L:ve(L)?L.source:"",message:S};t.meta=p({},e.__meta,Ce()||{}),fe(t)}return S},translateDevTools:fe,updateFallbackLocale:function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},CompileErrorCodes:y,createCompileError:S}));export{We as a,O as r};
