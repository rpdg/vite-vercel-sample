import{I as s}from"./index.9456dc5f.js";import{o}from"./ant-design-vue.f8ac2ba9.js";import{u}from"./vue-i18n.df730e9c.js";import{u as l,a as m,R as c}from"./vue-router.85e08d32.js";import{d,c as f,k as e,F as j}from"./@vue.f0a33739.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var A=d({name:"PlanMyTrip",setup(){let r=l(),i=m(),t=f({current:i.fullPath.indexOf("/planTrip/hotel")>-1?1:0});const{t:a}=u();function n(){switch(t.current){case 0:r.push("/planTrip/invitation");break;case 1:r.push("/planTrip/hotel");break}}return()=>e(j,null,[e("div",{class:"pd_tb_20"},[e(o.Group,{value:t.current,"onUpdate:value":p=>t.current=p,onChange:n},{default:()=>[e(o.Button,{value:0},{default:()=>[e(s,{type:"icon-email",style:{fontSize:"20px"}},null),a("planMyTrip.submenu1")]}),e(o.Button,{value:1},{default:()=>[e(s,{type:"icon-company",style:{fontSize:"20px"}},null),a("planMyTrip.submenu2")]})]})]),e(c,null,null)])}});export{A as default};
