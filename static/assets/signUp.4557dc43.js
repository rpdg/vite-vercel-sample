import{s,L as a,a as n}from"./index.bcc7d8a5.js";import{a as c}from"./index.9c9ed90c.js";import{u as l}from"./vue-i18n.1b8a7ba2.js";import{d as p}from"./vue-router.4425a21e.js";import{d as m,j as g,k as e,i as d}from"./@vue.f0a33739.js";import"./HomeStore.05cfc066.js";import"./@rpdg.e35df5be.js";import"./ant-design-vue.2e5ee588.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.e0a06ef1.js";var u="/assets/01.fd68ac79.png",j="/assets/02.49cc0213.png",f="/assets/03.7703f5af.png";function b(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!d(t)}var G=m({name:"Login",setup(){const{t}=l({useScope:"global"}),{appStore:r}=c(),i=g(()=>r.isEn?"en":"cn");return()=>{let o;return e(n,null,{default:()=>[e("div",{class:s.outer},[e("div",{class:s.padding},[e(a,null,null)]),e("div",{class:`${s.form} ${s.regForm}`},[e("h1",null,[t("login.registForm")]),e("a",{href:`http://reg.itb-china.com/Pages/web/tradeVisitorsRegister.shtml?language=${i.value}`},[e("img",{src:u,class:s.signPic},null)]),e("a",{href:`http://reg.itb-china.com/Pages/web/buyerRegister.shtml?language=${i.value}`},[e("img",{src:j,class:s.signPic},null)]),e("a",{href:`http://reg.itb-china.com/Pages/web/userExhStatement_new.shtml?language=${i.value}`},[e("img",{src:f,class:s.signPic},null)])]),e("div",{class:s.padding},[e("p",{class:s.registTip},[e(p,{to:"/login"},b(o=t("login.loginTip"))?o:{default:()=>[o]})])])])]})}}});export{G as default};
