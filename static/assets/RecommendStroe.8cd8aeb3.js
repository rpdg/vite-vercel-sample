var f=Object.defineProperty;var h=(r,e,o)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var n=(r,e,o)=>(h(r,typeof e!="symbol"?e+"":e,o),o);import{g as a}from"./index.6838ff5f.js";import{B as b,l as u}from"./@rpdg.c2e06738.js";import{f as y}from"./@vue.c37eb56a.js";var l=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,e,o,i)=>{for(var t=i>1?void 0:i?x(e,o):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(t=(i?m(e,o,t):m(t))||t);return i&&t&&l(e,o,t),t};class c extends b{constructor(){super();n(this,"recommendExhibitiors");n(this,"recommendBuyers")}async getRecommedExhibitiors(e=80){this.recommendExhibitiors=await a(`buyer/GetBuyerWishlist?limit=${e}`)}async getRecommedBuyers(e=80){this.recommendBuyers=await a(`exhibition/GetExhibitionWishlist?limit=${e}`)}}p([u],c.prototype,"getRecommedExhibitiors",1);p([u],c.prototype,"getRecommedBuyers",1);const d=new c,R=()=>(y(()=>{d.recommendExhibitiors=void 0,d.recommendBuyers=void 0}),{recommendStore:d});export{R as u};
