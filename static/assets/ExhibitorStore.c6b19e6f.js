var v=Object.defineProperty;var d=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var s=(o,t,e)=>(d(o,typeof t!="symbol"?t+"":t,e),e);import{B as h,p,l}from"./index.144ef6d2.js";import{f as x}from"./@vue.fa05379c.js";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=(o,t,e,r)=>{for(var a=r>1?void 0:r?w(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(a=(r?n(t,e,a):n(a))||a);return r&&a&&b(t,e,a),a};class c extends h{constructor(){super();s(this,"data");s(this,"contactInfo")}async getDetail(t){this.data=await p("NewExhibition/Detail",{barcode:t})}async getContactInfo(t){this.contactInfo=await p("NewExhibition/ContactDetail",{barcode:t})}}u([l],c.prototype,"getDetail",1);u([l],c.prototype,"getContactInfo",1);const f=new c,I=()=>(x(()=>{f.data=void 0,f.contactInfo=void 0}),{exhibitiorStore:f});export{I as u};
