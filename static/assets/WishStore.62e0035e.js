var d=Object.defineProperty;var x=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var o=(i,e,s)=>(x(i,typeof e!="symbol"?e+"":e,s),s);import{u as c,R as m,g as a}from"./index.1e4cf29d.js";import{B as y,l as f}from"./@rpdg.2a67823e.js";import{f as W}from"./@vue.c3fad188.js";var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(i,e,s,t)=>{for(var r=t>1?void 0:t?g(e,s):e,l=i.length-1,n;l>=0;l--)(n=i[l])&&(r=(t?n(e,s,r):n(r))||r);return t&&r&&b(e,s,r),r};class u extends y{constructor(){super();o(this,"min",0);o(this,"max",0);o(this,"selected",0);o(this,"goWish",!1);o(this,"isCurrentStage",!1)}async getWishListResult(){let{authenStore:e}=c(),s=e.role==m.buyer,t;s?t=await a("buyer/BuyerWishListResult"):t=await a("exhibition/ExhibitionWishListResult"),this.min=t.min,this.max=t.max,this.selected=t.selected,this.goWish=this.selected<this.min&&this.isCurrentStage}async getWishListSelected(){let{authenStore:e}=c(),s=e.role==m.buyer,t;return s?t=await a("buyer/GetBuyerChooseExhibitionWishList"):t=await a("exhibition/ExhibitionChooseWishListResult"),t}}p([f],u.prototype,"getWishListResult",1);p([f],u.prototype,"getWishListSelected",1);const h=new u,R=()=>(W(()=>{h.min=0,h.max=0,h.selected=0}),{wishStore:h});export{R as u};
