var e=Object.defineProperty,r=(r,t,i)=>(((r,t,i)=>{t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i})(r,"symbol"!=typeof t?t+"":t,i),i);import{B as t,g as i,l as o}from"./index.fb38be39.js";import{au as s}from"./@vue.5723de44.js";var m=Object.defineProperty,n=Object.getOwnPropertyDescriptor,c=(e,r,t,i)=>{for(var o,s=i>1?void 0:i?n(r,t):r,c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i?o(r,t,s):o(s))||s);return i&&s&&m(r,t,s),s};class a extends t{constructor(){super(),r(this,"recommendExhibitiors"),r(this,"recommendBuyers")}async getRecommedExhibitiors(){this.recommendExhibitiors=await i("exhibition/GetExhibitionWishlist")}async getRecommedBuyers(){this.recommendBuyers=await i("buyer/GetBuyerWishlist")}}c([o],a.prototype,"getRecommedExhibitiors",1),c([o],a.prototype,"getRecommedBuyers",1);const d=new a,b=()=>(s((()=>{d.recommendExhibitiors=void 0,d.recommendBuyers=void 0})),{recommendStore:d});export{b as u};
