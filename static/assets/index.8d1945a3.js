import{M as c}from"./MainSectionHead.b9e7274a.js";import{u as p}from"./NewsStore.e9f82edc.js";import{o as r,P as u}from"./ant-design-vue.034afe85.js";import{u as j}from"./vue-i18n.0711e616.js";import{d as f}from"./vue-router.8ec3c3d8.js";import{s as a}from"./index.module.6e348a91.js";import{d as g,I as v,k as e,i as b,F as w}from"./@vue.fa05379c.js";import"./index.316ce18f.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";function L(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!b(s)}var T=g({name:"NewsList",setup(){const{t:s}=j();let{newsStore:o}=p(),n=10;return v(async()=>{await o.getNewsList(0,n)}),()=>{var m,l;let i;return e(w,null,[e(c,{redLead:!1},L(i=s("menu.news"))?i:{default:()=>[i]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(r,{itemLayout:"vertical",dataSource:(m=o.newsList)==null?void 0:m.results,loading:o.loading},{renderItem:({item:t})=>e(r.Item,{class:a.verticalListItem},{default:()=>[e(r.Item.Meta,null,{title:()=>e(f,{to:`/news/${t.id}`},{default:()=>[t.title]}),description:()=>e("div",{class:a.content},[t.digest]),avatar:()=>e("img",{class:a.newsimg_forlist,src:t.coverpicture},null)})]})})]),e(u,{pageSize:n,total:(l=o.newsList)==null?void 0:l.totalRecord,onChange:(t,d)=>{o.getNewsList(t-1,d)}},null)])}}});export{T as default};
