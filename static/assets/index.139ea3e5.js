import{M as e}from"./MainSectionHead.0ba94413.js";import{f as t}from"./ant-design-vue.1a5f19ce.js";import{u as o}from"./vue-i18n.ad14b06d.js";import{d as r}from"./vue-router.1edc7a6a.js";import{s as i}from"./index.module.34ed03bd.js";import{a7 as a,r as s,a5 as d,al as c,M as m}from"./@vue.01a79c59.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.bd6efab4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.8b519310.js";import"./source-map.3671d69c.js";import"./vue.7ab0c62a.js";var l=a({name:"NewsList",setup(){const{t:a}=o();let l=s([{coverpicture:"//via.placeholder.com/240x240.jpg?text=new1",title:"To be, or not to be",digest:"To be, or not to be",id:"id--aaa"},{coverpicture:"//via.placeholder.com/240x240.jpg?text=new2",title:"not to be",digest:"To be, or not to be",id:"id--bbb"}]);return()=>{let o;return d(m,null,[d(e,{redLead:!1},(s=o=a("menu.news"),"function"==typeof s||"[object Object]"===Object.prototype.toString.call(s)&&!c(s)?o:{default:()=>[o]})),d("div",{class:"pd_20 bg_white"},[d(t,{itemLayout:"vertical",dataSource:l},{renderItem:({item:e})=>d(t.Item,{class:i.verticalListItem},{default:()=>[d(t.Item.Meta,null,{title:()=>d(r,{to:`/news/${e.id}`},{default:()=>[e.title]}),description:()=>d("div",{class:i.content},[e.digest]),avatar:()=>d("img",{class:i.avatar,src:e.coverpicture},null)})]})})])]);var s}}});export{l as default};
