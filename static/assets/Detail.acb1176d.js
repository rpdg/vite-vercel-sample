import{L as c}from"./index.b4b77939.js";import{M as d}from"./MainSectionHead.3a39449d.js";import{u as j}from"./NewsStore.c7fbdc30.js";import{u as f}from"./vue-i18n.df730e9c.js";import{s as b}from"./index.module.6e348a91.js";import{d as g,I as v,k as t,i as w,F as I}from"./@vue.f0a33739.js";import"./ant-design-vue.5bef4758.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./vue-router.85e08d32.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";function _(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!w(r)}var W=g({name:"NewsDetail",props:{newsId:{type:Number,required:!0}},setup(r){const{t:l}=f();let{newsStore:e}=j();return v(()=>{var s;((s=e.currentItem)==null?void 0:s.id)!=r.newsId&&e.getNewsDetail(r.newsId)}),()=>{var o,i,n,a,m,p;let s;return e.loading?t(c,null,null):t(I,null,[t(d,{redLead:!1},_(s=l("menu.news"))?s:{default:()=>[s]}),t("div",{class:"pd_20 bg_white"},[((o=e.currentItem)==null?void 0:o.coverpicture)&&t("img",{class:`mg_b_20 cursor_normal ${b.newsimg_fordetail}`,src:(i=e.currentItem)==null?void 0:i.coverpicture},null),t("h2",null,[(n=e.currentItem)==null?void 0:n.title]),t("p",{class:"text_gray"},[(a=e.currentItem)==null?void 0:a.publishbegindate.split(" ")[0]]),t("div",{class:"text_gray"},[((m=e.currentItem)==null?void 0:m.subjects)&&((p=e.currentItem)==null?void 0:p.subjects.map(u=>t("p",{innerHTML:u.content},null)))])])])}}});export{W as default};
