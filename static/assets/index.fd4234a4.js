import{I as s}from"./index.d31446cd.js";import{k as r}from"./ant-design-vue.2e5ee588.js";import{u}from"./vue-i18n.1b8a7ba2.js";import{u as l,a as m,R as c}from"./vue-router.4425a21e.js";import{d,c as f,k as e,F as j}from"./@vue.f0a33739.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.e0a06ef1.js";var A=d({name:"PlanMyTrip",setup(){let o=l(),i=m(),t=f({current:i.fullPath.indexOf("/planTrip/hotel")>-1?1:0});const{t:a}=u();function n(){switch(t.current){case 0:o.push("/planTrip/invitation");break;case 1:o.push("/planTrip/hotel");break}}return()=>e(j,null,[e("div",{class:"pd_tb_20"},[e(r.Group,{value:t.current,"onUpdate:value":p=>t.current=p,onChange:n},{default:()=>[e(r.Button,{value:0},{default:()=>[e(s,{type:"icon-email",style:{fontSize:"20px"}},null),a("planMyTrip.submenu1")]}),e(r.Button,{value:1},{default:()=>[e(s,{type:"icon-company",style:{fontSize:"20px"}},null),a("planMyTrip.submenu2")]})]})]),e(c,null,null)])}});export{A as default};
