import{p,S as l}from"./ant-design-vue.04da4757.js";import{a as m}from"./index.c8c7e9ca.js";import{u}from"./vue-i18n.95ef2b18.js";import{u as d}from"./AdStore.f1660115.js";import{d as c,j as b,I as j,k as e,i as f,F as v}from"./@vue.c37eb56a.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.b68099c7.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.c2e06738.js";import"./vue-router.5ade7376.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.9582b89e.js";function g(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}var L=c({name:"Buyer",setup(){const{t}=u(),{appStore:a}=m(),{adStore:s}=d();let n=b(()=>a.isEn?"en":"zh");return j(()=>{s.getAdvertisement("buyercenter_advertisement")}),()=>{let o;return e(v,null,[e("div",{class:"pd_b_20"},[e("p",null,null),e(p,{autoplay:!0},{default:()=>{var i;return[(i=s.ad)==null?void 0:i.map(r=>{if(r.value3===n.value)return e("img",{key:r.id,class:"fullWidthImage","data-id":r.value2,src:r.value1},null)})]}})]),e("div",{class:"bg_white mg_b_20 pd_20"},[e(l,null,g(o=t("buyer.tip"))?o:{default:()=>[o]})]),e("div",{class:"bg_white mg_b_20 pd_20"},[e("div",null,[e("a",{href:"https://365.itb-china.com/website/personalCenter/personalCenter"},[t("buyer.loginTip")])]),e("div",null,[e("a",{href:"https://365.itb-china.com/pages/question/question?id=8&opt=1"},[t("buyer.registTip")])])])])}}});export{L as default};
