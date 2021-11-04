import{s as a,L as y,a as S}from"./index.3afb4c43.js";import{u as p}from"./vue-i18n.0711e616.js";import{u as x}from"./index.5a197180.js";import{F as l,I as c}from"./ant-design-vue.034afe85.js";import{a as L,u as P}from"./vue-router.8ec3c3d8.js";import{d as g,l as q,c as d,B as D,k as e}from"./@vue.fa05379c.js";import{x as F,J as M}from"./@ant-design.8f5596ac.js";import{S as R}from"./index.5322a967.js";import"./HomeStore.42684304.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./moment.29305b8e.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";var I=g({name:"Login_PasswordFormAuto",props:{username:{type:String,required:!0},passwordMD5:{type:String,required:!0}},setup(t){const{authenStore:n}=x(),i=L(),u=P(),{t:r}=p({useScope:"global"}),f=q(),s=d({username:"",password:"",agreed:!0}),j=d({username:[{required:!0,message:r("login.usernameTip"),trigger:"change"}],password:[{required:!0,message:r("login.passwordTip"),trigger:"change"}]}),{username:w}=t,{passwordMD5:v}=t;s.username=w,s.password=v.split("").reverse().join(""),b();async function b(){var o,m;try{await n.loginWithPasswordMD5(D(s)),u.push((m=(o=i.query)==null?void 0:o.redirect)!=null?m:"/planBooth")}catch(h){console.log("error",h)}}return()=>e(l,{ref:f,model:s,rules:j},{default:()=>[e(l.Item,{name:"username"},{default:()=>[e(c,{value:s.username,"onUpdate:value":o=>s.username=o,placeholder:r("login.username")},{prefix:()=>e(F,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),e(l.Item,{name:"password"},{default:()=>[e(c,{type:"password",value:s.password,"onUpdate:value":o=>s.password=o,placeholder:r("login.password")},{prefix:()=>e(M,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]})]})}}),ne=g({name:"Login",props:{username:{type:String,required:!0},passwordMD5:{type:String,required:!0}},setup(t){const{t:n}=p({useScope:"global"}),i=d({loginWithPassword:!0}),{username:u}=t,{passwordMD5:r}=t;return()=>e(S,null,{default:()=>[e("div",{class:a.outer},[e("div",{class:a.padding},[e(y,null,null)]),e("div",{class:a.form},[e("h1",null,[n("login.loginForm")]),e("div",{class:a.tabs},[e("div",{class:i.loginWithPassword?a.curTab:""},[e("span",null,[n("login.passwordLogin")])]),e("div",{class:i.loginWithPassword?"":a.curTab},[e("span",null,[n("login.smsLogin")])])]),i.loginWithPassword?e(I,{username:u,passwordMD5:r},null):e(R,null,null)])])]})}});export{ne as default};
