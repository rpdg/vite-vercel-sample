import{I as e}from"./index.92850b98.js";import{R as t}from"./ant-design-vue.ed23f4fc.js";import{u as r,a,R as i}from"./vue-router.d53e7fc8.js";import{a7 as o,r as s,aq as n,a5 as p,a4 as l,M as u}from"./@vue.545e4a02.js";import"./vue-i18n.4205327f.js";import"./@intlify.c2b61631.js";import"./nprogress.3e43c680.js";import"./source-map.3671d69c.js";import"./vue.e5ab7692.js";import"./@ant-design.5ba6d8e8.js";import"./@ctrl.2e36ce53.js";import"./moment.fe945fe1.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";var m=o({name:"PlanMyTrip",setup(){let o=r(),m=a(),f=s({current:m.fullPath.indexOf("/planTrip/hotel")>-1?1:0});function c(){switch(f.current){case 0:o.push("/planTrip/invitation");break;case 1:o.push("/planTrip/hotel")}}return n((()=>{"/planTrip"===m.fullPath&&o.push("/planTrip/invitation")})),()=>p(u,null,[p("div",{class:"pd_tb_20"},[p(t.Group,{value:f.current,"onUpdate:value":e=>f.current=e,onChange:c},{default:()=>[p(t.Button,{value:0},{default:()=>[p(e,{type:"icon-email",style:{fontSize:"20px"}},null),l("Plan My Trip")]}),p(t.Button,{value:1},{default:()=>[p(e,{type:"icon-company",style:{fontSize:"20px"}},null),l("Book Hotel")]})]})]),p(i,null,null)])}});export{m as default};
