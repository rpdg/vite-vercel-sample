import{u as t}from"./@ant-design.503097a2.js";import{u as o}from"./vue-i18n.bbad715b.js";import{R as e}from"./ant-design-vue.7939872f.js";import{u as a,a as s,R as n}from"./vue-router.0532eeed.js";import{a2 as r,r as i,al as l,a0 as p,I as u}from"./@vue.5723de44.js";import"./@ctrl.2e36ce53.js";import"./@intlify.c2b61631.js";import"./nprogress.3e43c680.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.60ec16aa.js";import"./moment.29305b8e.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";const m=t({scriptUrl:"//at.alicdn.com/t/font_2806694_vh79zcizxe.js"});var c=r({name:"PlanMyBooth",setup(){let t=a(),r=s(),c=i({current:r.fullPath.indexOf("/planBooth/BoothDesign")>-1?1:0});const{t:d}=o();function j(){switch(c.current){case 0:t.push("/planBooth/boothActivity");break;case 1:t.push("/planBooth/boothDesign")}}return l((()=>{"/planBooth"===r.fullPath&&t.push("/planBooth/boothActivity")})),()=>p(u,null,[p("div",{class:"pd_tb_20"},[p(e.Group,{value:c.current,"onUpdate:value":t=>c.current=t,onChange:j},{default:()=>[p(e.Button,{value:0},{default:()=>[p(m,{type:"icon-Moneymanagement",style:{fontSize:"20px"}},null),d("planBooth.submenu1")]}),p(e.Button,{value:1},{default:()=>[p(m,{type:"icon-component",style:{fontSize:"20px"}},null),d("planBooth.submenu2")]})]})]),p(n,null,null)])}});export default c;
