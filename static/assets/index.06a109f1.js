import{g as n}from"./index.54b33833.js";import{C as l}from"./ant-design-vue.00c2c9f0.js";import{u as p}from"./vue-i18n.6a1efd87.js";import{u as m}from"./vue-router.b758f417.js";import{s as r}from"./index.module.c5e11e53.js";import{d,k as e}from"./@vue.6f7c75f1.js";import"./@rpdg.f7b1ded6.js";import"./moment.29305b8e.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";var c="/assets/sets1.f67f1c2e.png",u="/assets/sets2.d14e67ac.png",f="/assets/sets5.6156a395.png",D=d({name:"HelpSection",setup(){const{t:s}=p(),i=m();async function t(a){let o=await n(`/mediaexhibtion/QueryAllEnableMediaExhibtionInfos?type=1&mediaExhitionInfoTypeId=${a}&pageSize=1000&pageIndex=0`);o.totalRecord>0&&(console.log(o.results),i.push(`/help/${o.results[0].id}`))}return()=>e(l,{title:s("myItb.dockIcons.help")},{default:()=>[e("div",{class:"gridCols2"},[e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${c})`},onClick:()=>{t(1)}},[e("h2",null,[s("myItb.help.contact_sponsor")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${u})`},onClick:()=>{t(2)}},[e("h2",null,[s("myItb.help.want_settle")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${f})`},onClick:()=>{t(5)}},[e("h2",null,[s("myItb.help.support")]),e("p",null,[s("myItb.help.enter")])])])]})}});export{D as default};
