import{M as e}from"./MainSectionHead.7703edc9.js";import{f as t}from"./ant-design-vue.0b90b305.js";import{u as o}from"./vue-i18n.683f3bc1.js";import{d as r}from"./vue-router.1edc7a6a.js";import{s as i}from"./index.module.34ed03bd.js";import{a7 as s,r as a,a5 as c,al as d,M as m}from"./@vue.01a79c59.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.bd6efab4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./nprogress.3e43c680.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";var l=s({name:"NewsList",setup(){const{t:s}=o();let l=a([{coverpicture:"//via.placeholder.com/240x240.jpg?text=new1",title:"To be, or not to be",digest:"To be, or not to be",id:"id--aaa"},{coverpicture:"//via.placeholder.com/240x240.jpg?text=new2",title:"not to be",digest:"To be, or not to be",id:"id--bbb"}]);return()=>{let o;return c(m,null,[c(e,{redLead:!1},(a=o=s("menu.news"),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?o:{default:()=>[o]})),c("div",{class:"pd_20 bg_white"},[c(t,{itemLayout:"vertical",dataSource:l},{renderItem:({item:e})=>c(t.Item,{class:i.verticalListItem},{default:()=>[c(t.Item.Meta,null,{title:()=>c(r,{to:`/news/${e.id}`},{default:()=>[e.title]}),description:()=>c("div",{class:i.content},[e.digest]),avatar:()=>c("img",{class:i.avatar,src:e.coverpicture},null)})]})})])]);var a}}});export{l as default};
