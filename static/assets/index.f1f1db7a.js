import{M as e}from"./MainSectionHead.d966a658.js";import{u as t}from"./NewsStore.f2925ae6.js";import{g as s,P as a}from"./ant-design-vue.31eace5e.js";import{u as i}from"./vue-i18n.683f3bc1.js";import{d as o}from"./vue-router.1edc7a6a.js";import{s as r}from"./index.module.34ed03bd.js";import{a7 as m,aq as n,a5 as l,al as d,M as c}from"./@vue.01a79c59.js";import"./index.045352a5.js";import"./moment.29305b8e.js";import"./axios.a57df465.js";import"./@ant-design.0bbfcdec.js";import"./@ctrl.2e36ce53.js";import"./nprogress.3e43c680.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";var p=m({name:"NewsList",setup(){const{t:m}=i();let{newsStore:p}=t();return n((async()=>{await p.getNewsList(0,10)})),()=>{var t,i;let n;return l(c,null,[l(e,{redLead:!1},(u=n=m("menu.news"),"function"==typeof u||"[object Object]"===Object.prototype.toString.call(u)&&!d(u)?n:{default:()=>[n]})),l("div",{class:"pd_20 bg_white mg_b_20"},[l(s,{itemLayout:"vertical",dataSource:null==(t=p.newsList)?void 0:t.results,loading:p.loading},{renderItem:({item:e})=>l(s.Item,{class:r.verticalListItem},{default:()=>[l(s.Item.Meta,null,{title:()=>l(o,{to:`/news/${e.id}`},{default:()=>[e.title]}),description:()=>l("div",{class:r.content},[e.digest]),avatar:()=>l("img",{class:r.avatar,src:e.coverpicture},null)})]})})]),l(a,{pageSize:10,total:null==(i=p.newsList)?void 0:i.totalRecord,onChange:(e,t)=>{p.getNewsList(e-1,t)}},null)]);var u}}});export{p as default};
