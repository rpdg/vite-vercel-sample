import{c as d,R as a,L as p}from"./index.144ef6d2.js";import{M as u}from"./MainSectionHead.b9e7274a.js";import{u as f}from"./RecommendStroe.139e55db.js";import{u as j}from"./vue-i18n.0711e616.js";import{d as l}from"./vue-router.8ec3c3d8.js";import{s as n}from"./index.module.af86f0bd.js";import{d as b,I as g,k as e,i as _,F as v}from"./@vue.fa05379c.js";import"./ant-design-vue.0c94ae40.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";function x(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!_(r)}var Q=b({name:"PartnerCompany",setup(){const{t:r}=j();let{recommendStore:s}=f(),{authenStore:i}=d();g(()=>{i.role===a.buyer?s.getRecommedExhibitiors():i.role===a.exhibition&&s.getRecommedBuyers()});function c(){var o,m;if(i.role===a.buyer)return(o=s.recommendExhibitiors)==null?void 0:o.map(t=>e(l,{to:`/exhibitors/${t.barcode}`,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:`/${t.logourl}`},null),e("div",{class:n.title},[t.name]),e("div",{class:"text_gray text_left"},[t.company]),e("div",{class:"text_gray text_left"},[t.job_title])]}));if(i.role===a.exhibition)return(m=s.recommendBuyers)==null?void 0:m.map(t=>e(l,{to:`/buyer/${t.barcode}`,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:`/${t.company_logo}`},null),e("div",{class:n.title},[t.name]),e("div",{class:"text_gray text_left"},[t.company]),e("div",{class:"text_gray text_left"},[t.position])]}))}return()=>{let o;return e(v,null,[e(u,{redLead:!1},x(o=r("menu.recommend"))?o:{default:()=>[o]}),e("div",{class:"gridCols4 pd_20 bg_white"},[s.loading?e(p,null,null):c()])])}}});export{Q as default};
