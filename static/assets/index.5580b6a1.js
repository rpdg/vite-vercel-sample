import{R as e,L as o,a as r}from"./index.658d5a15.js";import{M as s}from"./MainSectionHead.d966a658.js";import{u as t}from"./RecommendStroe.3eceb834.js";import{u as i}from"./vue-i18n.683f3bc1.js";import{s as a}from"./index.module.34ed03bd.js";import{a7 as m,aq as n,a5 as l,al as d,a4 as c,M as p}from"./@vue.01a79c59.js";import"./ant-design-vue.5c4b791f.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.0bbfcdec.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./moment.fe945fe1.js";import"./vue-router.1edc7a6a.js";import"./nprogress.3e43c680.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";function u(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}var b=m({name:"PartnerCompany",setup(){const{t:m}=i();let{recommendStore:d}=t(),{authenStore:b}=r();return n((()=>{b.role===e.buyer?d.getRecommedExhibitiors():b.role===e.exhibition&&d.getRecommedBuyers()})),()=>{let r,t;return l(p,null,[l(s,{redLead:!1},u(r=m("menu.recommend"))?r:{default:()=>[r]}),l("div",{class:"gridCols4 pd_20 bg_white"},[d.loading?l(o,null,null):b.role===e.buyer?null==(i=d.recommendExhibitiors)?void 0:i.map((e=>l("div",{class:"squareItem"},[l("img",{src:e.company_logo},null)]))):b.role===e.exhibition?null==(n=d.recommendBuyers)?void 0:n.map((e=>l("div",{class:"squareItem"},[l("img",{src:e.logourl},null)]))):void 0]),l(s,{moreLink:"/news/page2"},u(t=m("partners.partners"))?t:{default:()=>[t]}),l("div",{class:"gridCols4 pd_20 bg_white"},[l("div",{class:a.picTextDiv},[l("img",{class:"squareItem",src:"//picsum.photos/120/120"},null),l("div",{class:a.title},[" ",c("To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows")," "])])])]);var i,n}}});export{b as default};
