var c=Object.defineProperty;var v=(a,e,t)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(v(a,typeof e!="symbol"?e+"":e,t),t);import{B as f,b as F,g as l,p as n,l as p}from"./index.2d426314.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,y=(a,e,t,s)=>{for(var r=s>1?void 0:s?h(e,t):e,i=a.length-1,o;i>=0;i--)(o=a[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&g(e,t,r),r};class d extends f{constructor(){super();u(this,"data");F.token&&this.getFavourites()}async getFavourites(){this.data=await l("Favourite/list")}async add(e){await n("Favourite/AddFavourite",e),await this.getFavourites()}checkAdded(e){if(this.data)switch(e.type){case 0:return this.data.concatList.findIndex(t=>t.employee_id===e.foreignKey)>-1;case 1:return this.data.companyList.findIndex(t=>t.barcode===e.foreignKey)>-1;case 2:return this.data.productList.findIndex(t=>t.id===e.foreignKey)>-1;default:return!1}else return!1}async delete(e){await n("Favourite/RemoveFavourite",e),await this.getFavourites()}async judge(e){return await n("Favourite/JudgeIsFavourite",e)}}y([p],d.prototype,"getFavourites",1);const w=new d;function S(){return{favoriteStore:w}}export{S as u};
