import{L as l}from"./index.1d3976e6.js";import{M as u}from"./MainSectionHead.dad211bc.js";import{u as j}from"./NewsStore.cff8dc57.js";import{u as f}from"./vue-i18n.f56f8be1.js";import{s as b}from"./index.module.6e348a91.js";import{d as g,I as v,k as t,i as w,F as I}from"./@vue.b2913f50.js";import"./ant-design-vue.3c113ab5.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.838dcc22.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.8b8261fd.js";import"./vue-router.82b024de.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";function _(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!w(r)}var W=g({name:"NewsDetail",props:{newsId:{type:Number,required:!0}},setup(r){const{t:c}=f();let{newsStore:e}=j();return v(()=>{var s;((s=e.currentItem)==null?void 0:s.id)!=r.newsId&&e.getNewsDetail(r.newsId)}),()=>{var o,i,n,a,m,d;let s;return e.loading?t(l,null,null):t(I,null,[t(u,{redLead:!1},_(s=c("menu.news"))?s:{default:()=>[s]}),t("div",{class:"pd_20 bg_white"},[((o=e.currentItem)==null?void 0:o.coverpicture)&&t("img",{class:`mg_b_20 cursor_normal ${b.newsimg_fordetail}`,src:(i=e.currentItem)==null?void 0:i.coverpicture},null),t("h2",null,[(n=e.currentItem)==null?void 0:n.title]),t("p",{class:"text_gray"},[(a=e.currentItem)==null?void 0:a.publishbegindate.split(" ")[0]]),t("div",{class:"text_gray"},[((m=e.currentItem)==null?void 0:m.subjects)&&((d=e.currentItem)==null?void 0:d.subjects.map(p=>t("p",{innerHTML:p.content},null)))])])])}}});export{W as default};
