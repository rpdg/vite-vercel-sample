var d=Object.defineProperty;var m=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(m(t,typeof e!="symbol"?e+"":e,r),r);import{p as u}from"./index.9bd4e1af.js";import{B as v,l}from"./@rpdg.e35df5be.js";import{f as S}from"./@vue.f0a33739.js";var g=Object.defineProperty,P=Object.getOwnPropertyDescriptor,f=(t,e,r,a)=>{for(var s=a>1?void 0:a?P(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&g(e,r,s),s};class c extends v{constructor(){super();o(this,"list");o(this,"currentPageIndex",0);o(this,"currentItem")}async getList(){this.list=await u("Speaker/list")}async getDetail(e){this.currentItem=await u("Speaker/detail",{id:e})}}f([l],c.prototype,"getList",1);f([l],c.prototype,"getDetail",1);const p=new c,I=()=>(S(()=>{p.list=void 0,p.currentItem=void 0,p.currentPageIndex=0}),{speakerStore:p});export{I as u};
