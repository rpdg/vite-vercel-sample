var b=Object.defineProperty;var f=(r,e,o)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var n=(r,e,o)=>(f(r,typeof e!="symbol"?e+"":e,o),o);import{g as u}from"./index.54b33833.js";import{B as h,l as a}from"./@rpdg.f7b1ded6.js";import{f as y}from"./@vue.6f7c75f1.js";var l=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,e,o,i)=>{for(var t=i>1?void 0:i?x(e,o):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(t=(i?m(e,o,t):m(t))||t);return i&&t&&l(e,o,t),t};class c extends h{constructor(){super();n(this,"recommendExhibitiors");n(this,"recommendBuyers")}async getRecommedExhibitiors(e=80){this.recommendExhibitiors=await u(`buyer/GetBuyerWishlist?limit=${e}`)}async getRecommedBuyers(e=80){this.recommendBuyers=await u(`exhibition/GetExhibitionWishlist?limit=${e}`)}}p([a],c.prototype,"getRecommedExhibitiors",1);p([a],c.prototype,"getRecommedBuyers",1);const d=new c,R=()=>(y(()=>{d.recommendExhibitiors=void 0,d.recommendBuyers=void 0}),{recommendStore:d});export{R as u};
