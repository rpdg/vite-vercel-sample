import{M as p}from"./MainSectionHead.a516428a.js";import{u as c}from"./NewsStore.64edc5b5.js";import{o as r,P as u}from"./ant-design-vue.938704eb.js";import{u as j}from"./vue-i18n.6a1efd87.js";import{d as f}from"./vue-router.b758f417.js";import{s as a}from"./index.module.6e348a91.js";import{d as g,I as b,k as e,i as v,F as w}from"./@vue.6f7c75f1.js";import"./index.e49b5388.js";import"./@rpdg.0f7d050c.js";import"./moment.29305b8e.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";function L(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!v(s)}var U=g({name:"NewsList",setup(){const{t:s}=j();let{newsStore:o}=c(),n=10;return b(async()=>{await o.getNewsList(0,n)}),()=>{var m,d;let i;return e(w,null,[e(p,{redLead:!1},L(i=s("menu.news"))?i:{default:()=>[i]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(r,{itemLayout:"vertical",dataSource:(m=o.newsList)==null?void 0:m.results,loading:o.loading},{renderItem:({item:t})=>e(r.Item,{class:a.verticalListItem},{default:()=>[e(r.Item.Meta,null,{title:()=>e(f,{to:`/news/${t.id}`},{default:()=>[t.title]}),description:()=>e("div",{class:a.content},[t.digest]),avatar:()=>e("img",{class:a.newsimg_forlist,src:t.coverpicture},null)})]})})]),e(u,{pageSize:n,total:(d=o.newsList)==null?void 0:d.totalRecord,onChange:(t,l)=>{o.getNewsList(t-1,l)}},null)])}}});export{U as default};
