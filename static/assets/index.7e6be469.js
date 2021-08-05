import{L as e,s as a}from"./index.module.b868b7ef.js";import{a as r}from"./index.107c5a15.js";import{h as o,u as t,a as d,F as u,I as l,U as s,G as n,H as c,o as i,J as V}from"./vendor.98a6c741.js";function g(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Vue.isVNode(e)}var p=Vue.defineComponent({name:"Login",setup(p,{slots:m}){const f=o(),N=t(),{t:v}=d({useScope:"global"}),h=Vue.ref(),w=Vue.reactive({username:"",password:"",agreed:!0}),b=Vue.reactive({username:[{required:!0,message:v("login.usernameTip"),trigger:"change"}],password:[{required:!0,message:v("login.passwordTip"),trigger:"change"}]});async function y(){var e,a;try{await h.value.validate(),await r.login(Vue.toRaw(w)),N.push(null!=(a=null==(e=f.query)?void 0:e.redirect)?a:"/home")}catch(o){console.log("error",o)}}return()=>{let o,t,d;return Vue.createVNode(e,null,{default:()=>[Vue.createVNode("div",{class:a.outer},[Vue.createVNode("div",{class:a.padding},[Vue.createVNode("h3",null,[Vue.createTextVNode("China 2021 plus")])]),Vue.createVNode("div",{class:a.form},[Vue.createVNode("h1",null,[v("login.loginForm")]),Vue.createVNode(u,{ref:h,model:w,rules:b},{default:()=>[Vue.createVNode(u.Item,{name:"username"},{default:()=>[Vue.createVNode(l,{value:w.username,"onUpdate:value":e=>w.username=e,placeholder:v("login.username")},{prefix:()=>Vue.createVNode(s,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),Vue.createVNode(u.Item,{name:"password"},{default:()=>[Vue.createVNode(l,{type:"password",value:w.password,"onUpdate:value":e=>w.password=e,placeholder:v("login.password")},{prefix:()=>Vue.createVNode(n,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),Vue.createVNode(u.Item,{name:"agreed"},{default:()=>[Vue.createVNode(c,{checked:w.agreed,"onUpdate:checked":e=>w.agreed=e},{default:()=>[Vue.createVNode(i,{to:"/agreement"},g(o=v("login.agreeTip"))?o:{default:()=>[o]})]})]}),Vue.createVNode(u.Item,null,{default:()=>[Vue.createVNode(V,{type:"primary",block:!0,disabled:!w.agreed,loading:r.loading,onClick:y},g(t=v("login.login"))?t:{default:()=>[t]})]})]}),Vue.createVNode("p",{class:a.registTip},[Vue.createVNode(i,{to:"/signUp"},g(d=v("login.registTip"))?d:{default:()=>[d]})])]),Vue.createVNode("div",{class:a.padding},null)])]})}}});export{p as default};
