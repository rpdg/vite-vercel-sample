import{s,L as n,a as l}from"./index.d5ed3bcb.js";import{a as c}from"./index.701896b1.js";import{u as p}from"./vue-i18n.28a5a3dd.js";import{d as r}from"./vue-router.2704beb0.js";import{d as g,j as d,k as e,i as m}from"./@vue.92a87908.js";import"./ant-design-vue.3fff3ad8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.754a3742.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.bcb9de75.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.18c06692.js";var u="/assets/00.a5ca6610.png",b="/assets/01.3c68b5f4.png",f="/assets/02.fb7badc4.png",j="/assets/03.846836cd.png";function v(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!m(t)}var G=g({name:"Login",setup(){const{t}=p({useScope:"global"}),{appStore:o}=c(),a=d(()=>o.isEn?"en":"cn");return()=>{let i;return e(l,null,{default:()=>[e("div",{class:s.outer},[e("div",{class:s.padding},[e(n,null,null)]),e("div",{class:`${s.form} ${s.regForm}`},[e("h1",null,[t("login.registForm")]),e(r,{to:"/fastPass",class:s.none_underline},{default:()=>[e("div",{class:s.signPic,style:{backgroundImage:`url(${u})`}},[t("login.fastPass")])]}),e("a",{class:s.none_underline,target:"_blank",href:`http://reg.itb-china.com/Pages/web/tradeVisitorsRegister.shtml?language=${a.value}`},[e("div",{class:s.signPic,style:{backgroundImage:`url(${b})`}},[t("login.visitor")])]),e("a",{class:s.none_underline,target:"_blank",href:`http://reg.itb-china.com/Pages/web/buyerRegister.shtml?language=${a.value}`},[e("div",{class:s.signPic,style:{backgroundImage:`url(${f})`}},[t("login.buyer")])]),e("a",{class:s.none_underline,target:"_blank",href:`http://reg.itb-china.com/Pages/web/userExhStatement_new.shtml?language=${a.value}`},[e("div",{class:s.signPic,style:{backgroundImage:`url(${j})`}},[t("login.exhibitor")])])]),e("div",{class:s.padding},[e("p",{class:s.registTip},[e(r,{to:"/login"},v(i=t("login.loginTip"))?i:{default:()=>[i]})])])])]})}}});export{G as default};
