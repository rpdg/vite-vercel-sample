var e=Object.defineProperty,t=(t,r,a)=>(((t,r,a)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a})(t,"symbol"!=typeof r?r+"":r,a),a);import{B as r,p as a,l as i}from"./index.08b628cb.js";import{az as s}from"./@vue.545e4a02.js";var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,c=(e,t,r,a)=>{for(var i,s=a>1?void 0:a?n(t,r):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&o(t,r,s),s};class p extends r{constructor(){super(),t(this,"list"),t(this,"currentPageIndex",0),t(this,"currentItem")}async getList(){this.list=await a("Speaker/list")}async getDetail(e){this.currentItem=await a("Speaker/detail",{id:e})}}c([i],p.prototype,"getList",1),c([i],p.prototype,"getDetail",1);const l=new p,u=()=>(s((()=>{l.list=void 0,l.currentItem=void 0,l.currentPageIndex=0})),{speakerStore:l});export{u};
