import{a as p,R as a,L as u}from"./index.67f3b9b1.js";import{M as f}from"./MainSectionHead.b9e7274a.js";import{u as j}from"./RecommendStroe.20e94175.js";import{p as l}from"./Image.f0a737d7.js";import{u as b}from"./vue-i18n.0711e616.js";import{d as c}from"./vue-router.8ec3c3d8.js";import{s as n}from"./index.module.af86f0bd.js";import{d as g,I as y,k as e,i as v,F as x}from"./@vue.fa05379c.js";import"./ant-design-vue.0721aa65.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";function _(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!v(r)}var Y=g({name:"PartnerCompany",setup(){const{t:r}=b();let{recommendStore:s}=j(),{authenStore:i}=p();y(()=>{i.role===a.buyer?s.getRecommedExhibitiors():i.role===a.exhibition&&s.getRecommedBuyers()});function d(){var t,m;if(i.role===a.buyer)return(t=s.recommendExhibitiors)==null?void 0:t.map(o=>e(c,{to:`/exhibitors/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:l(o.logourl)},null),e("div",{class:n.title},[o.company]),e("div",{class:"text_gray text_left"},[o.countryname])]}));if(i.role===a.exhibition)return(m=s.recommendBuyers)==null?void 0:m.map(o=>e(c,{to:`/buyer/${o.barcode}`,key:o.barcode,class:`cursor_hand mg_t_20 ${n.picTextDiv}`},{default:()=>[e("img",{class:"squareItem",src:l(o.headImageUrl)},null),e("div",{class:n.title},[o.name]),e("div",{class:"text_gray text_left"},[o.company]),e("div",{class:"text_gray text_left"},[o.position])]}))}return()=>{let t;return e(x,null,[e(f,{redLead:!1},_(t=r("menu.recommend"))?t:{default:()=>[t]}),e("div",{class:"gridCols4 pd_20 bg_white",style:{"content-visibility":"auto"}},[s.loading?e(u,null,null):d()])])}}});export{Y as default};
