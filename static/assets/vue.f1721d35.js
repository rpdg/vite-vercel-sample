import{r as m,a as j,b}from"./@vue.c3fad188.js";var h={exports:{}},d={};(function(i){Object.defineProperty(i,"__esModule",{value:!0});var v=j,o=m,c=b;function l(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(n){r[n]=e[n]}),r.default=e,Object.freeze(r)}var O=l(o);const u=Object.create(null);function t(e,r){if(!c.isString(e))if(e.nodeType)e=e.innerHTML;else return c.NOOP;const n=e,s=u[n];if(s)return s;if(e[0]==="#"){const f=document.querySelector(e);e=f?f.innerHTML:""}const{code:_}=v.compile(e,c.extend({hoistStatic:!0,onError:void 0,onWarn:c.NOOP},r)),a=new Function("Vue",_)(O);return a._rc=!0,u[n]=a}o.registerRuntimeCompiler(t),Object.keys(o).forEach(function(e){e!=="default"&&(i[e]=o[e])}),i.compile=t})(d);h.exports=d;export{h as v};
