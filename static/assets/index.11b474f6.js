import{a as p,R as a,L as u}from"./index.0e7fb9f4.js";import{M as f}from"./MainSectionHead.b9e7274a.js";import{u as j}from"./RecommendStroe.075b90c6.js";import{p as c}from"./Image.f0a737d7.js";import{u as b}from"./vue-i18n.0711e616.js";import{d}from"./vue-router.8ec3c3d8.js";import{s as n}from"./index.module.6e348a91.js";import{d as g,I as y,k as e,i as v,F as x}from"./@vue.fa05379c.js";import"./ant-design-vue.034afe85.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";function _(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!v(t)}var Y=g({name:"PartnerCompany",setup(){const{t}=b();let{recommendStore:s}=j(),{authenStore:i}=p();y(()=>{i.role===a.buyer?s.getRecommedExhibitiors():i.role===a.exhibition&&s.getRecommedBuyers()});function l(){var r,m;if(i.role===a.buyer)return(r=s.recommendExhibitiors)==null?void 0:r.map(o=>e(d,{to:`/exhibitors/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:c(o.logourl)},null),e("div",{class:n.title},[o.company]),e("div",{class:"text_gray text_left"},[o.countryname])]}));if(i.role===a.exhibition)return(m=s.recommendBuyers)==null?void 0:m.map(o=>e(d,{to:`/buyer/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:c(o.headImageUrl)},null),e("div",{class:n.title},[o.name]),e("div",{class:"text_gray text_left"},[o.company]),e("div",{class:"text_gray text_left"},[o.position])]}))}return()=>{let r;return e(x,null,[e(f,{redLead:!1},_(r=t("menu.recommend"))?r:{default:()=>[r]}),e("div",{class:"gridCols4 pd_20 bg_white"},[s.loading?e(u,null,null):l()])])}}});export{Y as default};
