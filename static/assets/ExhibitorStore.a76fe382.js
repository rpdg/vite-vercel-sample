var b=Object.defineProperty;var l=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{B as d,p as y,g as h,l as f}from"./index.a49591cc.js";import{f as v}from"./@vue.fa05379c.js";var I=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(o,t,e,r)=>{for(var a=r>1?void 0:r?g(t,e):t,s=o.length-1,c;s>=0;s--)(c=o[s])&&(a=(r?c(t,e,a):c(a))||a);return r&&a&&I(t,e,a),a};class i extends d{constructor(){super();n(this,"data");n(this,"contactInfo");n(this,"buyerInfo")}async getDetail(t){this.data=await y("NewExhibition/Detail",{barcode:t})}async getContactInfo(t){this.contactInfo=await y("NewExhibition/ContactDetail",{barcode:t})}async getBuyerInfo(t){let e=await h(`buyer/GetBuyerByBarCode?barcode=${t}`);this.buyerInfo=e}}p([f],i.prototype,"getDetail",1);p([f],i.prototype,"getContactInfo",1);p([f],i.prototype,"getBuyerInfo",1);const u=new i,D=()=>(v(()=>{u.data=void 0,u.contactInfo=void 0}),{exhibitiorStore:u});export{D as u};
