var m=Object.defineProperty;var I=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);import{B as l,g as c,l as w}from"./index.2bff5079.js";import{f as g}from"./@vue.fa05379c.js";var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=(s,e,t,n)=>{for(var r=n>1?void 0:n?y(e,t):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(r=(n?i(e,t,r):i(r))||r);return n&&r&&v(e,t,r),r};class u extends l{constructor(){super();o(this,"newsList");o(this,"currentPageIndex",0);o(this,"currentItem")}async getNewsList(e,t=10){this.newsList=await c("/Information/QueryAllEnableInformations?type=0",{pageIndex:e,pageSize:t})}async getNewsDetail(e){this.currentItem=(await c("Information/GetInformationSubjectById",{id:e}))[0],this.currentItem.subjects=await c("Information/InformationById",{informationId:e})}}p([w],u.prototype,"getNewsList",1);p([w],u.prototype,"getNewsDetail",1);const f=new u,N=()=>(g(()=>{f.newsList=void 0,f.currentPageIndex=0}),{newsStore:f});export{N as u};
