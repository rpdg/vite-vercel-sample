var m=Object.defineProperty;var d=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var a=(t,e,r)=>(d(t,typeof e!="symbol"?e+"":e,r),r);import{p as u}from"./index.9e180452.js";import{B as v,l}from"./@rpdg.e35df5be.js";import{f as S}from"./@vue.f0a33739.js";var g=Object.defineProperty,P=Object.getOwnPropertyDescriptor,f=(t,e,r,o)=>{for(var s=o>1?void 0:o?P(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(o?i(e,r,s):i(s))||s);return o&&s&&g(e,r,s),s};class c extends v{constructor(){super();a(this,"list");a(this,"currentPageIndex",0);a(this,"currentItem")}async getList(){this.list=await u("Speaker/list")}async getDetail(e){this.currentItem=await u("Speaker/detail",{id:e})}}f([l],c.prototype,"getList",1);f([l],c.prototype,"getDetail",1);const p=new c,I=()=>(S(()=>{p.list=void 0,p.currentItem=void 0,p.currentPageIndex=0}),{speakerStore:p});export{I as u};
