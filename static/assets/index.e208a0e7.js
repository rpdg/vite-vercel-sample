import{g as n}from"./index.e49b5388.js";import{C as p}from"./ant-design-vue.938704eb.js";import{u as i}from"./vue-i18n.6a1efd87.js";import{u as m}from"./vue-router.b758f417.js";import{s as r}from"./index.module.25c2564a.js";import{d,k as e}from"./@vue.6f7c75f1.js";import"./@rpdg.0f7d050c.js";import"./moment.29305b8e.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";var c="/assets/sets1.f67f1c2e.png",u="/assets/sets2.d14e67ac.png",b="/assets/sets3.7c749b5a.png",h="/assets/sets4.10a4cb38.png",g="/assets/sets5.6156a395.png",G=d({name:"HelpSection",setup(){const{t:s}=i(),l=m();async function t(a){let o=await n(`/mediaexhibtion/QueryAllEnableMediaExhibtionInfos?type=1&mediaExhitionInfoTypeId=${a}&pageSize=1000&pageIndex=0`);o.totalRecord>0&&l.push(`/help/${o.results[0].id}`)}return()=>e(p,{title:s("myItb.dockIcons.help")},{default:()=>[e("div",{class:"gridCols2"},[e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${c})`},onClick:()=>{t(1)}},[e("h2",null,[s("myItb.help.contact_sponsor")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${u})`},onClick:()=>{t(2)}},[e("h2",null,[s("myItb.help.want_settle")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${b})`},onClick:()=>{t(3)}},[e("h2",null,[s("myItb.help.shuttle_bus")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${h})`},onClick:()=>{t(4)}},[e("h2",null,[s("myItb.help.hotel_services")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${g})`},onClick:()=>{t(5)}},[e("h2",null,[s("myItb.help.support")]),e("p",null,[s("myItb.help.enter")])])])]})}});export{G as default};
