var e=Object.defineProperty,t=(t,r,a)=>(((t,r,a)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a})(t,"symbol"!=typeof r?r+"":r,a),a);import{B as r,p as a,l as i}from"./index.247a591d.js";import{au as s}from"./@vue.5723de44.js";var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=(e,t,r,a)=>{for(var i,s=a>1?void 0:a?n(t,r):t,p=e.length-1;p>=0;p--)(i=e[p])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&o(t,r,s),s};class c extends r{constructor(){super(),t(this,"list"),t(this,"currentPageIndex",0),t(this,"currentItem")}async getList(){this.list=await a("Speaker/list")}async getDetail(e){this.currentItem=await a("Speaker/detail",{id:e})}}p([i],c.prototype,"getList",1),p([i],c.prototype,"getDetail",1);const l=new c,u=()=>(s((()=>{l.list=void 0,l.currentItem=void 0,l.currentPageIndex=0})),{speakerStore:l});export{u};
