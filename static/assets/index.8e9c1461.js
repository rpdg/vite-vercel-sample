import{g as l}from"./index.1d3976e6.js";import{C as a}from"./ant-design-vue.3c113ab5.js";import{u as p}from"./vue-i18n.f56f8be1.js";import{u as m}from"./vue-router.82b024de.js";import{s as r}from"./index.module.c5e11e53.js";import{d,k as e}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./moment.29305b8e.js";import"./@ant-design.838dcc22.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";var c="/assets/sets1.f67f1c2e.png",u="/assets/sets2.d14e67ac.png",b="/assets/sets5.6156a395.png",D=d({name:"HelpSection",setup(){const{t:s}=p(),i=m();async function t(n){let o=await l(`/mediaexhibtion/QueryAllEnableMediaExhibtionInfos?type=1&mediaExhitionInfoTypeId=${n}&pageSize=1000&pageIndex=0`);o.totalRecord>0&&(console.log(o.results),i.push(`/help/${o.results[0].id}`))}return()=>e(a,{title:s("myItb.dockIcons.help")},{default:()=>[e("div",{class:"gridCols2"},[e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${c})`},onClick:()=>{t(1)}},[e("h2",null,[s("myItb.help.contact_sponsor")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${u})`},onClick:()=>{t(2)}},[e("h2",null,[s("myItb.help.want_settle")]),e("p",null,[s("myItb.help.enter")])]),e("div",{class:`cursor_hand ${r.helpItem}`,style:{backgroundImage:`url(${b})`},onClick:()=>{t(5)}},[e("h2",null,[s("myItb.help.support")]),e("p",null,[s("myItb.help.enter")])])])]})}});export{D as default};
