var h=Object.defineProperty;var y=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var n=(r,e,o)=>(y(r,typeof e!="symbol"?e+"":e,o),o);import{B as b,g as a,l as u}from"./index.5a0626d5.js";import{f}from"./@vue.f0f90a02.js";var l=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,e,o,i)=>{for(var t=i>1?void 0:i?x(e,o):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(t=(i?m(e,o,t):m(t))||t);return i&&t&&l(e,o,t),t};class c extends b{constructor(){super();n(this,"recommendExhibitiors");n(this,"recommendBuyers")}async getRecommedExhibitiors(e=1e3){this.recommendExhibitiors=await a(`buyer/GetBuyerWishlist?limit=${e}`)}async getRecommedBuyers(e=1e3){this.recommendBuyers=await a(`exhibition/GetExhibitionWishlist?limit=${e}`)}}p([u],c.prototype,"getRecommedExhibitiors",1);p([u],c.prototype,"getRecommedBuyers",1);const d=new c,E=()=>(f(()=>{d.recommendExhibitiors=void 0,d.recommendBuyers=void 0}),{recommendStore:d});export{E as u};
