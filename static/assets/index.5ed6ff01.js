import{g as a}from"./index.2bff5079.js";import{C as i}from"./ant-design-vue.034afe85.js";import{u as p}from"./vue-i18n.0711e616.js";import{u as m}from"./vue-router.8ec3c3d8.js";import{s as r}from"./index.module.25c2564a.js";import{d as c,k as e}from"./@vue.fa05379c.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var d="/assets/sets1.f67f1c2e.png",u="/assets/sets2.d14e67ac.png",h="/assets/sets3.7c749b5a.png",b="/assets/sets4.10a4cb38.png",g="/assets/sets5.6156a395.png",F=c({name:"HelpSection",setup(){const{t:s}=p(),l=m();async function t(n){let o=await a(`/mediaexhibtion/QueryAllEnableMediaExhibtionInfos?type=1&mediaExhitionInfoTypeId=${n}&pageSize=1000&pageIndex=0`);o.totalRecord>0&&l.push(`/help/${o.results[0].id}`)}return()=>e(i,{title:s("myItb.dockIcons.help")},{default:()=>[e("div",{class:"gridCols2"},[e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${d})`},onClick:()=>{t(1)}},[e("h2",null,[s("myItb.help.contact_sponsor")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${u})`},onClick:()=>{t(2)}},[e("h2",null,[s("myItb.help.want_settle")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${h})`},onClick:()=>{t(3)}},[e("h2",null,[s("myItb.help.shuttle_bus")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${b})`},onClick:()=>{t(4)}},[e("h2",null,[s("myItb.help.hotel_services")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${g})`},onClick:()=>{t(5)}},[e("h2",null,[s("myItb.help.support")]),e("p",null,[s("myItb.help.enter")])])])]})}});export{F as default};
