var e=Object.defineProperty,t=(t,r,i)=>(((t,r,i)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i})(t,"symbol"!=typeof r?r+"":r,i),i);import{B as r,p as i,l as s}from"./index.6cfe8211.js";import{au as a}from"./@vue.5723de44.js";var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,c=(e,t,r,i)=>{for(var s,a=i>1?void 0:i?n(t,r):t,c=e.length-1;c>=0;c--)(s=e[c])&&(a=(i?s(t,r,a):s(a))||a);return i&&a&&o(t,r,a),a};class p extends r{constructor(){super(),t(this,"list"),t(this,"currentPageIndex",0),t(this,"currentItem")}async getList(){this.list=await i("Speaker/list")}async getDetail(e){this.currentItem=await i("Speaker/detail",{id:e})}}c([s],p.prototype,"getList",1),c([s],p.prototype,"getDetail",1);const l=new p,u=()=>(a((()=>{l.list=void 0,l.currentItem=void 0,l.currentPageIndex=0})),{speakerStore:l});export{u};
