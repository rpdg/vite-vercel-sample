import{b as e,R as o,L as t}from"./index.fb38be39.js";import{M as r}from"./MainSectionHead.8ba49e1e.js";import{u as i}from"./RecommendStroe.af957cd6.js";import{u as s}from"./vue-i18n.bbad715b.js";import{s as a}from"./index.module.ba9314b5.js";import{a2 as m,al as l,a0 as n,ag as c,I as d}from"./@vue.5723de44.js";import"./ant-design-vue.5d3dfc69.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.eb6e5cf6.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.60ec16aa.js";import"./moment.29305b8e.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.0532eeed.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";var p=m({name:"PartnerCompany",setup(){const{t:m}=s();let{recommendStore:p}=i(),{authenStore:u}=e();return l((()=>{u.role===o.buyer?p.getRecommedExhibitiors():u.role===o.exhibition&&p.getRecommedBuyers()})),()=>{let e;return n(d,null,[n(r,{redLead:!1},(l=e=m("menu.recommend"),"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!c(l)?e:{default:()=>[e]})),n("div",{class:"gridCols4 pd_20 bg_white"},[p.loading?n(t,null,null):u.role===o.buyer?null==(i=p.recommendExhibitiors)?void 0:i.map((e=>n("div",{class:a.picTextDiv},[n("img",{class:"squareItem",src:e.company_logo},null),n("div",{class:a.title},[e.name]),n("div",{class:"text_gray"},[e.company])]))):u.role===o.exhibition?null==(s=p.recommendBuyers)?void 0:s.map((e=>n("div",{class:a.picTextDiv},[n("img",{class:"squareItem",src:e.logourl},null),n("div",{class:a.title},[e.name]),n("div",{class:"text_gray"},[e.company]),n("div",{class:"text_gray"},[e.job_title])]))):void 0])]);var i,s,l}}});export default p;
