var m=Object.defineProperty;var I=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(I(r,typeof e!="symbol"?e+"":e,t),t);import{g as c}from"./index.e9b15ac0.js";import{B as l,l as p}from"./@rpdg.e35df5be.js";import{f as d}from"./@vue.f0a33739.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,w=(r,e,t,n)=>{for(var s=n>1?void 0:n?v(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&g(e,t,s),s};class u extends l{constructor(){super();o(this,"newsList");o(this,"currentPageIndex",0);o(this,"currentItem")}async getNewsList(e,t=10){this.newsList=await c("/Information/QueryAllEnableInformations?type=0",{pageIndex:e,pageSize:t})}async getNewsDetail(e){this.currentItem=(await c("Information/GetInformationSubjectById",{id:e}))[0],this.currentItem.subjects=await c("Information/InformationById",{informationId:e})}}w([p],u.prototype,"getNewsList",1);w([p],u.prototype,"getNewsDetail",1);const f=new u,P=()=>(d(()=>{f.newsList=void 0,f.currentPageIndex=0}),{newsStore:f});export{P as u};
