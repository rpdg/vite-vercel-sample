import{u,R as i,L as p}from"./index.bbac38a9.js";import{M as f}from"./MainSectionHead.743546ec.js";import{u as j}from"./RecommendStroe.40dd65cc.js";import{u as g}from"./vue-i18n.532c4af8.js";import{d as n}from"./vue-router.8e73f157.js";import{s as l}from"./index.module.6e348a91.js";import{d as b}from"./avator_red.2a3a1020.js";import{d as v}from"./itb_logo_gray.5050f3d7.js";import{S as m}from"./Config.87ac60ee.js";import{d as y,I as _,k as e,i as h,F as x}from"./@vue.7a36ac42.js";import"./ant-design-vue.14644436.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.4b470cc8.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.dab4d1a7.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";function S(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!h(t)}var oe=y({name:"PartnerCompany",setup(){const{t}=g();let{recommendStore:s}=j(),{authenStore:a}=u();_(()=>{a.role===i.buyer?s.getRecommedExhibitiors():a.role===i.exhibition&&s.getRecommedBuyers()});function c(){var r,d;if(a.role===i.buyer)return(r=s.recommendExhibitiors)==null?void 0:r.map(o=>e(n,{to:`/exhibitors/${o.barcode}`,key:o.barcode,class:"cursor_hand mg_t_20 "},{default:()=>[e("div",{style:"width:100%;"},[e("div",{class:"squareItem2"},[o.logourl!=null&&o.logourl!=""?e("img",{src:`${m}${o.logourl}`},null):e("img",{src:v},null)])]),e("div",{class:l.title},[o.company]),e("div",{class:"text_gray text_left"},[o.countryname])]}));if(a.role===i.exhibition)return(d=s.recommendBuyers)==null?void 0:d.map(o=>e(n,{to:`/buyer/${o.barcode}`,key:o.barcode,class:"cursor_hand mg_t_20"},{default:()=>[e("div",{style:"width:100%;"},[e("div",{class:"squareItem2"},[o.headImageUrl!=null&&o.headImageUrl!=""?e("img",{src:`${m}${o.headImageUrl}`},null):e("img",{src:b},null)])]),e("div",{class:l.title},[o.name]),e("div",{class:"text_gray text_left"},[o.company]),e("div",{class:"text_gray text_left"},[o.position])]}))}return()=>{let r;return e(x,null,[e(f,{redLead:!1},S(r=t("menu.recommend"))?r:{default:()=>[r]}),e("div",{class:"gridCols4 pd_20 bg_white"},[s.loading?e(p,null,null):c()])])}}});export{oe as default};
