var g=Object.defineProperty;var v=(r,t,e)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(v(r,typeof t!="symbol"?t+"":t,e),e);import{g as d,L as I}from"./index.79a872b5.js";import{M as _}from"./MainSectionHead.3a39449d.js";import{B as y,l as h}from"./@rpdg.e35df5be.js";import{f as x,d as S,o as w,k as i,i as D,F as M}from"./@vue.f0a33739.js";import{u as H}from"./vue-i18n.df730e9c.js";import"./ant-design-vue.2e5ee588.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.85e08d32.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var O=Object.defineProperty,B=Object.getOwnPropertyDescriptor,L=(r,t,e,s)=>{for(var o=s>1?void 0:s?B(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(s?a(t,e,o):a(o))||o);return s&&o&&O(t,e,o),o};class f extends y{constructor(){super();u(this,"currentItem")}async getDetail(t){let e=await d("mediaexhibtion/GetMediaExhibitonInfoSubjectById",{id:t});this.currentItem=e[0],this.currentItem.subjects=await d(`mediaexhibtion/MediaExhibitionInfoById?informationId=${t}`)}}L([h],f.prototype,"getDetail",1);const j=new f,P=()=>(x(()=>{j.currentItem=void 0}),{helpStore:j});function C(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!D(r)}var ae=S({name:"HelpDetail",props:{id:{type:Number,required:!0}},setup(r){const{t}=H(),{helpStore:e}=P(),{id:s}=r;return w(async function(){var o;((o=e.currentItem)==null?void 0:o.id)!=s&&e.getDetail(s)}),()=>{var n,a,c,p,m,l;let o;return e.loading?i(I,null,null):i(M,null,[i(_,{redLead:!1},C(o=t("myItb.dockIcons.help"))?o:{default:()=>[o]}),i("div",{class:"pd_20 bg_white"},[((n=e.currentItem)==null?void 0:n.coverpicture)&&i("img",{class:"mg_b_20 cursor_normal",src:(a=e.currentItem)==null?void 0:a.coverpicture},null),i("h2",null,[(c=e.currentItem)==null?void 0:c.title]),i("p",{class:"text_gray"},[(p=e.currentItem)==null?void 0:p.publishbegindate.split(" ")[0]]),i("div",{class:"text_gray"},[((m=e.currentItem)==null?void 0:m.subjects)&&((l=e.currentItem)==null?void 0:l.subjects.map(b=>i("p",{innerHTML:b.content},null)))])])])}}});export{ae as default};
