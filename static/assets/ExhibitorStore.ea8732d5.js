var d=Object.defineProperty;var y=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{p as b,g as l}from"./index.5d9ffdba.js";import{B as g,l as c}from"./@rpdg.e35df5be.js";import{f as h}from"./@vue.f0a33739.js";var v=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(o,t,e,a)=>{for(var r=a>1?void 0:a?I(t,e):t,s=o.length-1,f;s>=0;s--)(f=o[s])&&(r=(a?f(t,e,r):f(r))||r);return a&&r&&v(t,e,r),r};class i extends g{constructor(){super();n(this,"data");n(this,"contactInfo");n(this,"buyerInfo")}async getDetail(t){this.data=await b("NewExhibition/Detail",{barcode:t})}async getContactInfo(t){this.contactInfo=await b("NewExhibition/ContactDetail",{barcode:t})}async getBuyerInfo(t){let e=await l(`buyer/GetBuyerByBarCode?barcode=${t}`);this.buyerInfo=e}}p([c],i.prototype,"getDetail",1);p([c],i.prototype,"getContactInfo",1);p([c],i.prototype,"getBuyerInfo",1);const u=new i,D=()=>(h(()=>{u.data=void 0,u.contactInfo=void 0}),{exhibitiorStore:u});export{D as u};
