import{g as u,p as o}from"./index.701896b1.js";import{B as c,l as p}from"./@rpdg.bcb9de75.js";var C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,b=(a,s,t,r)=>{for(var e=r>1?void 0:r?B(s,t):s,n=a.length-1,d;n>=0;n--)(d=a[n])&&(e=(r?d(s,t,e):d(e))||e);return r&&e&&C(s,t,e),e};class i extends c{constructor(){super()}async getList(){return await u("BusinessCard/BusinessCardList")}async accpetCardExchange(s){return await o("BusinessCard/BusinessCardAdd",{content:s})}async downloadBusinessCard(s){return await o("Task/Addtask",{type:5,foreignId:0,barcode:s})}async denyCardExchange(s){return await o("BusinessCard/BusinessCardRemove",{id:s})}}b([p],i.prototype,"getList",1);const f=new i;var w=f;export{w as b};
