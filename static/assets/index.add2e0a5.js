import{s as t,L as S,a as k}from"./index.c22fea0d.js";import{u as g}from"./vue-i18n.6a1efd87.js";import{a as L,u as x,d as f}from"./vue-router.b758f417.js";import{u as P,a as T}from"./index.1ff29007.js";import{F as d,I as j,u as I,e as R}from"./ant-design-vue.00c2c9f0.js";import{w as _,H as F}from"./@ant-design.d39a0d88.js";import{d as b,l as O,c,k as e,i as v,B as W}from"./@vue.6f7c75f1.js";import{S as C}from"./index.1d78f1a8.js";import"./HomeStore.7117e1b0.js";import"./@rpdg.f7b1ded6.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";import"./moment.29305b8e.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";function w(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!v(o)}var U=b({name:"Login_PasswordForm",setup(){const{authenStore:o}=P(),{appStore:i}=T(),p=L(),r=x(),{t:n}=g({useScope:"global"}),m=O(),s=c({username:"",password:"",agreed:!0}),h=c({username:[{required:!0,message:n("login.usernameTip"),trigger:"change"}],password:[{required:!0,message:n("login.passwordTip"),trigger:"change"}]});async function y(){var l,u;try{await m.value.validate(),await o.loginWithPassword(W(s)),r.push((u=(l=p.query)==null?void 0:l.redirect)!=null?u:"/home")}catch(a){console.log("error",a)}}return()=>{let l,u;return e(d,{ref:m,model:s,rules:h},{default:()=>[e(d.Item,{name:"username"},{default:()=>[e(j,{value:s.username,"onUpdate:value":a=>s.username=a,placeholder:n("login.username")},{prefix:()=>e(_,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),e(d.Item,{name:"password"},{default:()=>[e(j,{type:"password",value:s.password,"onUpdate:value":a=>s.password=a,placeholder:n("login.password")},{prefix:()=>e(F,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),e(d.Item,{name:"agreed"},{default:()=>[e(I,{checked:s.agreed,"onUpdate:checked":a=>s.agreed=a},{default:()=>[e(f,{to:i.isEn?"/agreementEn":"/agreement"},w(l=n("login.agreeTip"))?l:{default:()=>[l]})]})]}),e(d.Item,null,{default:()=>[e(R,{type:"primary",block:!0,disabled:!s.agreed,loading:o.loading,onClick:y},w(u=n("login.login"))?u:{default:()=>[u]})]})]})}}});function q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!v(o)}var ce=b({name:"Login",setup(){const{t:o}=g({useScope:"global"}),i=c({loginWithPassword:!0});function p(r){i.loginWithPassword=r}return()=>{let r;return e(k,null,{default:()=>[e("div",{class:t.outer},[e("div",{class:t.padding},[e(S,null,null)]),e("div",{class:t.form},[e("h1",null,[o("login.loginForm")]),e("div",{class:t.tabs},[e("div",{class:i.loginWithPassword?t.curTab:"",onClick:()=>{p(!0)}},[e("span",null,[o("login.passwordLogin")])]),e("div",{class:i.loginWithPassword?"":t.curTab,onClick:()=>{p(!1)}},[e("span",null,[o("login.smsLogin")])])]),i.loginWithPassword?e(U,null,null):e(C,null,null)]),e("div",{class:t.padding},[e("p",{class:t.registTip},[e(f,{to:"/signUp"},q(r=o("login.registTip"))?r:{default:()=>[r]})])])])]})}}});export{ce as default};
