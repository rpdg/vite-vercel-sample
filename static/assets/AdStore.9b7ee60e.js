var s=Object.defineProperty;var a=(t,e,o)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>(a(t,typeof e!="symbol"?e+"":e,o),o);import{g as n}from"./index.0bceb754.js";import{B as d}from"./@rpdg.e35df5be.js";class c extends d{constructor(){super();r(this,"ad")}async getAdvertisement(e){this.ad=await n(`Common/GetMapInfoByKey?key=${e}`)}}let i=new c;const f=function(){return{adStore:i}};export{f as u};
