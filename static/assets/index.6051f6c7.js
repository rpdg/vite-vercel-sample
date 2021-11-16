import{s as t,L as S,a as L}from"./index.7a26bfa8.js";import{u as g}from"./vue-i18n.f56f8be1.js";import{a as k,u as x,d as f}from"./vue-router.82b024de.js";import{u as P,a as T}from"./index.eef7e3b7.js";import{F as d,I as b,w as I,e as R}from"./ant-design-vue.61d2faec.js";import{A as _,N as F}from"./@ant-design.148651e0.js";import{d as j,l as O,c as m,k as e,i as v,B as W}from"./@vue.b2913f50.js";import{S as C}from"./index.8fa7bbf6.js";import"./HomeStore.4f01a80c.js";import"./@rpdg.8b8261fd.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./moment.29305b8e.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@ctrl.2e36ce53.js";function w(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!v(o)}var U=j({name:"Login_PasswordForm",setup(){const{authenStore:o}=P(),{appStore:n}=T(),p=k(),r=x(),{t:i}=g({useScope:"global"}),c=O(),s=m({username:"",password:"",agreed:!0}),h=m({username:[{required:!0,message:i("login.usernameTip"),trigger:"change"}],password:[{required:!0,message:i("login.passwordTip"),trigger:"change"}]});async function y(){var l,u;try{await c.value.validate(),await o.loginWithPassword(W(s)),r.push((u=(l=p.query)==null?void 0:l.redirect)!=null?u:"/home")}catch(a){console.log("error",a)}}return()=>{let l,u;return e(d,{ref:c,model:s,rules:h},{default:()=>[e(d.Item,{name:"username"},{default:()=>[e(b,{value:s.username,"onUpdate:value":a=>s.username=a,placeholder:i("login.username")},{prefix:()=>e(_,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),e(d.Item,{name:"password"},{default:()=>[e(b,{type:"password",value:s.password,"onUpdate:value":a=>s.password=a,placeholder:i("login.password")},{prefix:()=>e(F,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),e(d.Item,{name:"agreed"},{default:()=>[e(I,{checked:s.agreed,"onUpdate:checked":a=>s.agreed=a},{default:()=>[e(f,{to:n.isEn?"/agreementEn":"/agreement"},w(l=i("login.agreeTip"))?l:{default:()=>[l]})]})]}),e(d.Item,null,{default:()=>[e(R,{type:"primary",block:!0,disabled:!s.agreed,loading:o.loading,onClick:y},w(u=i("login.login"))?u:{default:()=>[u]})]})]})}}});function q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!v(o)}var pe=j({name:"Login",setup(){const{t:o}=g({useScope:"global"}),n=m({loginWithPassword:!0});function p(r){n.loginWithPassword=r}return()=>{let r;return e(L,null,{default:()=>[e("div",{class:t.outer},[e("div",{class:t.padding},[e(S,null,null)]),e("div",{class:t.form},[e("h1",null,[o("login.loginForm")]),e("div",{class:t.tabs},[e("div",{class:n.loginWithPassword?t.curTab:"",onClick:()=>{p(!0)}},[e("span",null,[o("login.passwordLogin")])]),e("div",{class:n.loginWithPassword?"":t.curTab,onClick:()=>{p(!1)}},[e("span",null,[o("login.smsLogin")])])]),n.loginWithPassword?e(U,null,null):e(C,null,null)]),e("div",{class:t.padding},[e("p",{class:t.registTip},[e(f,{to:"/signUp"},q(r=o("login.registTip"))?r:{default:()=>[r]})])])])]})}}});export{pe as default};
