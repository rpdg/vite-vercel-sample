var h=Object.defineProperty;var y=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var c=(r,e,o)=>(y(r,typeof e!="symbol"?e+"":e,o),o);import{B as b,g as d,l as u}from"./index.dfc4aa1c.js";import{f}from"./@vue.fa05379c.js";var l=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,e,o,i)=>{for(var t=i>1?void 0:i?x(e,o):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(t=(i?m(e,o,t):m(t))||t);return i&&t&&l(e,o,t),t};class n extends b{constructor(){super();c(this,"recommendExhibitiors");c(this,"recommendBuyers")}async getRecommedExhibitiors(e=1e3){this.recommendExhibitiors=await d(`buyer/GetBuyerWishlist?limit=${e}`)}async getRecommedBuyers(e=1e3){this.recommendBuyers=await d(`exhibition/GetExhibitionWishlist?limit=${e}`)}}p([u],n.prototype,"getRecommedExhibitiors",1);p([u],n.prototype,"getRecommedBuyers",1);const a=new n,E=()=>(f(()=>{a.recommendExhibitiors=void 0,a.recommendBuyers=void 0}),{recommendStore:a});export{E as u};
