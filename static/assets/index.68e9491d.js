import{I as e}from"./index.02123d76.js";import{R as t}from"./ant-design-vue.0b90b305.js";import{u as r,a,R as i}from"./vue-router.1edc7a6a.js";import{a7 as o,r as s,aq as n,a5 as p,a4 as l,M as u}from"./@vue.01a79c59.js";import"./vue-i18n.683f3bc1.js";import"./@intlify.c2b61631.js";import"./nprogress.3e43c680.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";import"./moment.fe945fe1.js";import"./@ant-design.bd6efab4.js";import"./@ctrl.2e36ce53.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";var m=o({name:"PlanMyTrip",setup(){let o=r(),m=a(),c=s({current:0});function f(){switch(c.current){case 0:o.push("/planTrip/invitation");break;case 1:o.push("/planTrip/hotel")}}return n((()=>{"/planTrip"===m.fullPath&&o.push("/planTrip/invitation")})),()=>p(u,null,[p("div",{class:"pd_tb_20"},[p(t.Group,{value:c.current,"onUpdate:value":e=>c.current=e,onChange:f},{default:()=>[p(t.Button,{value:0},{default:()=>[p(e,{type:"icon-email",style:{fontSize:"20px"}},null),l("Plan My Trip")]}),p(t.Button,{value:1},{default:()=>[p(e,{type:"icon-company",style:{fontSize:"20px"}},null),l("Book Hotel")]})]})]),p(i,null,null)])}});export{m as default};
