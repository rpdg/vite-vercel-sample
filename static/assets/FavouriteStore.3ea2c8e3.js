var c=Object.defineProperty;var f=(a,e,t)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(f(a,typeof e!="symbol"?e+"":e,t),t);import{b as v,g as p,p as n}from"./index.f988d874.js";import{B as F,l as g}from"./@rpdg.e35df5be.js";var l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,y=(a,e,t,s)=>{for(var r=s>1?void 0:s?h(e,t):e,i=a.length-1,o;i>=0;i--)(o=a[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&l(e,t,r),r};class d extends F{constructor(){super();u(this,"data");v.token&&this.getFavourites()}async getFavourites(){this.data=await p("Favourite/list")}async add(e){await n("Favourite/AddFavourite",e),await this.getFavourites()}checkAdded(e){if(this.data)switch(e.type){case 0:return this.data.concatList.findIndex(t=>t.employee_id===e.foreignKey)>-1;case 1:return this.data.companyList.findIndex(t=>t.barcode===e.foreignKey)>-1;case 2:return this.data.productList.findIndex(t=>t.id===e.foreignKey)>-1;default:return!1}else return!1}async delete(e){await n("Favourite/RemoveFavourite",e),await this.getFavourites()}async judge(e){return await n("Favourite/JudgeIsFavourite",e)}}y([g],d.prototype,"getFavourites",1);const w=new d;function j(){return{favoriteStore:w}}export{j as u};
