import{u,R as i,L as p}from"./index.316ce18f.js";import{M as f}from"./MainSectionHead.b9e7274a.js";import{u as j}from"./RecommendStroe.4e4e24d7.js";import{p as l}from"./Image.bfd5119e.js";import{u as g}from"./vue-i18n.0711e616.js";import{d as m}from"./vue-router.8ec3c3d8.js";import{s as n}from"./index.module.6e348a91.js";import{d as b}from"./avator_red.ac077e2d.js";import{d as v}from"./itb_logo_gray.16279932.js";import{d as y,I as _,k as e,i as x,F as h}from"./@vue.fa05379c.js";import"./ant-design-vue.034afe85.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";function S(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var re=y({name:"PartnerCompany",setup(){const{t}=g();let{recommendStore:s}=j(),{authenStore:a}=u();_(()=>{a.role===i.buyer?s.getRecommedExhibitiors():a.role===i.exhibition&&s.getRecommedBuyers()});function c(){var r,d;if(a.role===i.buyer)return(r=s.recommendExhibitiors)==null?void 0:r.map(o=>e(m,{to:`/exhibitors/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("div",{class:"squareItem2"},[o.logourl!=null&&o.logourl!=""?e("img",{src:l(o.logourl)},null):e("img",{src:v},null)]),e("div",{class:n.title},[o.company]),e("div",{class:"text_gray text_left"},[o.countryname])]}));if(a.role===i.exhibition)return(d=s.recommendBuyers)==null?void 0:d.map(o=>e(m,{to:`/buyer/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("div",{class:"squareItem2"},[o.headImageUrl!=null&&o.headImageUrl!=""?e("img",{src:l(o.headImageUrl)},null):e("img",{src:b},null)]),e("div",{class:n.title},[o.name]),e("div",{class:"text_gray text_left"},[o.company]),e("div",{class:"text_gray text_left"},[o.position])]}))}return()=>{let r;return e(h,null,[e(f,{redLead:!1},S(r=t("menu.recommend"))?r:{default:()=>[r]}),e("div",{class:"gridCols4 pd_20 bg_white"},[s.loading?e(p,null,null):c()])])}}});export{re as default};
