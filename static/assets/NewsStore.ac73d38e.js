var m=Object.defineProperty;var I=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(I(r,typeof e!="symbol"?e+"":e,t),t);import{g as u}from"./index.d29970db.js";import{B as d,l as p}from"./@rpdg.e35df5be.js";import{f as l}from"./@vue.f0a33739.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,w=(r,e,t,n)=>{for(var s=n>1?void 0:n?v(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&g(e,t,s),s};class c extends d{constructor(){super();o(this,"newsList");o(this,"currentPageIndex",0);o(this,"currentItem")}async getNewsList(e,t=10){this.newsList=await u("/Information/QueryAllEnableInformations?type=0",{pageIndex:e,pageSize:t})}async getNewsDetail(e){this.currentItem=(await u("Information/GetInformationSubjectById",{id:e}))[0],this.currentItem.subjects=await u("Information/InformationById",{informationId:e})}}w([p],c.prototype,"getNewsList",1);w([p],c.prototype,"getNewsDetail",1);const f=new c,P=()=>(l(()=>{f.newsList=void 0,f.currentPageIndex=0}),{newsStore:f});export{P as u};
