import{L as e,s as a}from"./index.module.42e5627f.js";import{a as r}from"./index.8b0b76de.js";import{h as o,u as t,a as u,F as d,I as l,U as s,w as n,x as i,o as c,y as V}from"./vendor.0458fb05.js";function p(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Vue.isVNode(e)}var g=Vue.defineComponent({name:"Login",setup(g,{slots:m}){const f=o(),N=t(),{t:v}=u({useScope:"global"}),b=Vue.ref(),w=Vue.reactive({username:"",password:"",agreed:!0}),h=Vue.reactive({user:[{required:!0,message:v("login.usernameTip"),trigger:"blur"}],password:[{required:!0,message:v("login.passwordTip"),trigger:"blur"}]});async function y(){var e,a;try{await b.value.validate(),await r.login(Vue.toRaw(w)),N.push(null!=(a=null==(e=f.query)?void 0:e.redirect)?a:"/home")}catch(o){console.log("error",o)}}return()=>{let r,o,t;return Vue.createVNode(e,null,{default:()=>[Vue.createVNode("div",{class:a.outer},[Vue.createVNode("div",{class:a.padding},[Vue.createVNode("h3",null,[Vue.createTextVNode("China 2021 plus")])]),Vue.createVNode("div",{class:a.form},[Vue.createVNode("h1",null,[v("login.loginForm")]),Vue.createVNode(d,{ref:b,model:w,rules:h},{default:()=>[Vue.createVNode(d.Item,{name:"username"},{default:()=>[Vue.createVNode(l,{value:w.username,"onUpdate:value":e=>w.username=e,placeholder:v("login.username")},{prefix:()=>Vue.createVNode(s,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),Vue.createVNode(d.Item,{name:"password"},{default:()=>[Vue.createVNode(l,{type:"password",value:w.password,"onUpdate:value":e=>w.password=e,placeholder:v("login.password")},{prefix:()=>Vue.createVNode(n,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),Vue.createVNode(d.Item,{name:"agreed"},{default:()=>[Vue.createVNode(i,{checked:w.agreed,"onUpdate:checked":e=>w.agreed=e},{default:()=>[Vue.createVNode(c,{to:"/agreement"},p(r=v("login.agreeTip"))?r:{default:()=>[r]})]})]}),Vue.createVNode(d.Item,null,{default:()=>[Vue.createVNode(V,{type:"primary",block:!0,disabled:!w.agreed,onClick:y},p(o=v("login.login"))?o:{default:()=>[o]})]})]}),Vue.createVNode("p",{class:a.registTip},[Vue.createVNode(c,{to:"/signUp"},p(t=v("login.registTip"))?t:{default:()=>[t]})])]),Vue.createVNode("div",{class:a.padding},null)])]})}}});export{g as default};
