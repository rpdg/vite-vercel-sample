import{L as e}from"./index.09ffdfbb.js";import{M as t}from"./MainSectionHead.8ba49e1e.js";import{u as r}from"./NewsStore.f49a53c9.js";import{u as s}from"./vue-i18n.bbad715b.js";import{a2 as o,al as i,a0 as a,ag as n,I as l}from"./@vue.5723de44.js";import"./ant-design-vue.7939872f.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.503097a2.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.60ec16aa.js";import"./moment.29305b8e.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.0532eeed.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";var m=o({name:"NewsDetail",props:{newsId:{type:Number,required:!0}},setup(o){const{t:m}=s();let{newsStore:p}=r();return i((()=>{var e;(null==(e=p.currentItem)?void 0:e.id)!=o.newsId&&p.getNewsDetail(o.newsId)})),()=>{var r,s,o,i,u,c;let d;return p.loading?a(e,null,null):a(l,null,[a(t,{redLead:!1},(j=d=m("menu.news"),"function"==typeof j||"[object Object]"===Object.prototype.toString.call(j)&&!n(j)?d:{default:()=>[d]})),a("div",{class:"pd_20 bg_white"},[(null==(r=p.currentItem)?void 0:r.coverpicture)&&a("img",{class:"mg_b_20 cursor_normal",src:null==(s=p.currentItem)?void 0:s.coverpicture},null),a("h2",null,[null==(o=p.currentItem)?void 0:o.title]),a("p",{class:"text_gray"},[null==(i=p.currentItem)?void 0:i.publishbegindate.split(" ")[0]]),a("div",{class:"text_gray"},[(null==(u=p.currentItem)?void 0:u.subjects)&&(null==(c=p.currentItem)?void 0:c.subjects.map((e=>a("p",{innerHTML:e.content},null))))])])]);var j}}});export default m;
