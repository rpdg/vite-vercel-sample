import{I as s}from"./index.bbac38a9.js";import{k as r}from"./ant-design-vue.14644436.js";import{u}from"./vue-i18n.532c4af8.js";import{u as l,a as m,R as c}from"./vue-router.8e73f157.js";import{d,c as j,k as e,F as f}from"./@vue.7a36ac42.js";import"./@rpdg.dab4d1a7.js";import"./moment.29305b8e.js";import"./@ant-design.4b470cc8.js";import"./@ctrl.2e36ce53.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";var A=d({name:"PlanMyTrip",setup(){let o=l(),i=m(),t=j({current:i.fullPath.indexOf("/planTrip/hotel")>-1?1:0});const{t:a}=u();function n(){switch(t.current){case 0:o.push("/planTrip/invitation");break;case 1:o.push("/planTrip/hotel");break}}return()=>e(f,null,[e("div",{class:"pd_tb_20"},[e(r.Group,{value:t.current,"onUpdate:value":p=>t.current=p,onChange:n},{default:()=>[e(r.Button,{value:0},{default:()=>[e(s,{type:"icon-email",style:{fontSize:"20px"}},null),a("planMyTrip.submenu1")]}),e(r.Button,{value:1},{default:()=>[e(s,{type:"icon-company",style:{fontSize:"20px"}},null),a("planMyTrip.submenu2")]})]})]),e(c,null,null)])}});export{A as default};
