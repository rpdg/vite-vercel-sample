var h=Object.defineProperty;var b=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var c=(r,e,o)=>(b(r,typeof e!="symbol"?e+"":e,o),o);import{g as a}from"./index.c8c7e9ca.js";import{B as y,l as u}from"./@rpdg.c2e06738.js";import{f as l}from"./@vue.c37eb56a.js";var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p=(r,e,o,i)=>{for(var t=i>1?void 0:i?f(e,o):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(t=(i?m(e,o,t):m(t))||t);return i&&t&&x(e,o,t),t};class n extends y{constructor(){super();c(this,"recommendExhibitiors");c(this,"recommendBuyers")}async getRecommedExhibitiors(e=80){this.recommendExhibitiors=await a(`buyer/GetBuyerWishlist?limit=${e}`)}async getRecommedBuyers(e=80){this.recommendBuyers=await a(`exhibition/GetExhibitionWishlist?limit=${e}`)}}p([u],n.prototype,"getRecommedExhibitiors",1);p([u],n.prototype,"getRecommedBuyers",1);const d=new n,R=()=>(l(()=>{d.recommendExhibitiors=void 0,d.recommendBuyers=void 0}),{recommendStore:d});export{R as u};
