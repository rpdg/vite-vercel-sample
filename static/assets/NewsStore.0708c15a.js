var m=Object.defineProperty;var I=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);import{B as l,g as u,l as f}from"./index.5a0626d5.js";import{f as d}from"./@vue.f0f90a02.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(s,e,t,n)=>{for(var r=n>1?void 0:n?v(e,t):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=(n?i(e,t,r):i(r))||r);return n&&r&&g(e,t,r),r};class c extends l{constructor(){super();o(this,"newsList");o(this,"currentPageIndex",0);o(this,"currentItem")}async getNewsList(e,t=10){this.newsList=await u("/Information/QueryAllEnableInformations?type=0",{pageIndex:e,pageSize:t})}async getNewsDetail(e){this.currentItem=(await u("Information/GetInformationSubjectById",{id:e}))[0],this.currentItem.subjects=await u("Information/InformationById",{informationId:e})}}p([f],c.prototype,"getNewsList",1);p([f],c.prototype,"getNewsDetail",1);const w=new c,P=()=>(d(()=>{w.newsList=void 0,w.currentPageIndex=0}),{newsStore:w});export{P as u};
