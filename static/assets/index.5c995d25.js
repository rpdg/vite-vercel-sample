import{M as l}from"./MainSectionHead.b9e7274a.js";import{g as f,u as j}from"./index.eb742654.js";import{c as b,e as o,f as v,B as n}from"./ant-design-vue.b491a4ce.js";import{h as g}from"./moment.29305b8e.js";import{u as h}from"./vue-i18n.0711e616.js";import{d as y,c as p,o as _,k as e,i as x,u as B,F as c}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";function s(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!x(r)}var W=y({setup(){const{t:r}=h(),{appStore:u}=j();let i=p({tip:""});_(()=>{f("Common/GetMapInfoByKey?key=calendar_tips").then(a=>{i.tip=u.isEn?a[0].value1:a[0].value2})});let d=p({month:g()});function m({current:a}){if(a.date()===10)return e(c,null,[e(n,{color:"#AB2B2F"},null),e(n,{color:"#F0AE1C"},null),e(n,{color:"#000000"},null)])}return()=>{let a;return e(c,null,[e(l,{redLead:!1},s(a=r("menu.calendar"))?a:{default:()=>[a]}),e(b,{message:i.tip,type:"error"},null),e(o,{expandIconPosition:"right",style:{margin:"20px 0"}},{default:()=>[e(o.Panel,null,{default:()=>[e(v,{fullscreen:!0,value:d.month,"onUpdate:value":t=>d.month=t},{dateCellRender:m}),e("div",{class:"pd_20"},[e(n,{color:"#AB2B2F",text:r("calendar.my_selected_speech")},null)])],header:()=>{let t;return e(l,{redLead:!0,inner:!0},s(t=r("calendar.virtual_platform_calendar"))?t:{default:()=>[t]})}})]}),e(o,{expandIconPosition:"right"},{default:()=>[e(o.Panel,null,{default:()=>[B("bbb")],header:()=>{let t;return e(l,{redLead:!0,inner:!0},s(t=r("calendar.physical_exhibition_calendar"))?t:{default:()=>[t]})}})]})])}}});export{W as default};
