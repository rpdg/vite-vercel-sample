import{c}from"./index.1d3976e6.js";import{q as i,B as l,C as p}from"./ant-design-vue.3c113ab5.js";import{u}from"./vue-i18n.f56f8be1.js";import{s}from"./index.module.c5e11e53.js";import{d as j,c as n,o as f,k as t}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./vue-router.82b024de.js";import"./moment.29305b8e.js";import"./@ant-design.838dcc22.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";var F=j({name:"ChatSection",setup(){const{t:d}=u(),{chatStore:o}=c();let a=n({noticeList:[]}),r=n({noticeListHadRead:[]});return f(async()=>{a.noticeList=await o.getSystemNotification({status:0,sendDateTime:"",msgType:"7"}),r.noticeListHadRead=await o.getSystemNotification({status:1,sendDateTime:"",msgType:"7"});let e=a.noticeList.map(m=>({id:m.msg_id}));e.length&&o.batchUpdateMsg(e,1)}),()=>t(p,{title:d("myItb.dockIcons.notification")},{default:()=>[t(i,{itemLayout:"vertical",dataSource:a.noticeList},{renderItem:({item:e})=>t(i.Item,null,{default:()=>[t(i.Item.Meta,null,{title:()=>t("div",null,[t("span",{class:s.noticeTime},[e.createdatetime]),e.msgtitle]),description:()=>t("div",{class:s.content},[t(l,{dot:!0,style:{float:"right"}},null),e.msgcontent])})]})}),t("hr",null,null),t(i,{itemLayout:"vertical",dataSource:r.noticeListHadRead},{renderItem:({item:e})=>t(i.Item,null,{default:()=>[t(i.Item.Meta,null,{title:()=>t("div",null,[t("span",{class:s.noticeTime},[e.createdatetime]),e.msgtitle]),description:()=>t("div",{class:s.content},[e.msgcontent])})]})})]})}});export{F as default};
