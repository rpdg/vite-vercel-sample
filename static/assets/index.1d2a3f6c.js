import{I as s}from"./index.5a0626d5.js";import{j as o}from"./ant-design-vue.6d320070.js";import{u}from"./vue-i18n.8989ea2a.js";import{u as l,a as m,R as d}from"./vue-router.65bc85cf.js";import{d as c,c as f,k as e,F as j}from"./@vue.f0f90a02.js";import"./moment.29305b8e.js";import"./@ant-design.b29a0759.js";import"./@ctrl.2e36ce53.js";import"./nprogress.8b9ed5b7.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.35d5f340.js";import"./source-map.3671d69c.js";import"./vue.8bc7d658.js";var q=c({name:"PlanMyTrip",setup(){let r=l(),i=m(),t=f({current:i.fullPath.indexOf("/planTrip/hotel")>-1?1:0});const{t:a}=u();function n(){switch(t.current){case 0:r.push("/planTrip/invitation");break;case 1:r.push("/planTrip/hotel");break}}return()=>e(j,null,[e("div",{class:"pd_tb_20"},[e(o.Group,{value:t.current,"onUpdate:value":p=>t.current=p,onChange:n},{default:()=>[e(o.Button,{value:0},{default:()=>[e(s,{type:"icon-email",style:{fontSize:"20px"}},null),a("planMyTrip.submenu1")]}),e(o.Button,{value:1},{default:()=>[e(s,{type:"icon-company",style:{fontSize:"20px"}},null),a("planMyTrip.submenu2")]})]})]),e(d,null,null)])}});export{q as default};
