import{e as c}from"./index.701896b1.js";import{s,B as l,C as p}from"./ant-design-vue.3fff3ad8.js";import{u}from"./vue-i18n.28a5a3dd.js";import{s as i}from"./index.module.d1912e43.js";import{d as f,c as n,o as j,k as t}from"./@vue.92a87908.js";import"./@rpdg.bcb9de75.js";import"./vue-router.2704beb0.js";import"./moment.29305b8e.js";import"./@ant-design.754a3742.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.18c06692.js";var F=f({name:"ChatSection",setup(){const{t:d}=u(),{chatStore:a}=c();let o=n({noticeList:[]}),r=n({noticeListHadRead:[]});return j(async()=>{o.noticeList=await a.getSystemNotification({status:0,sendDateTime:"",msgType:"7"}),r.noticeListHadRead=await a.getSystemNotification({status:1,sendDateTime:"",msgType:"7"});let e=o.noticeList.map(m=>({id:m.msg_id}));e.length&&a.batchUpdateMsg(e,1)}),()=>t(p,{title:d("myItb.dockIcons.notification")},{default:()=>[t(s,{itemLayout:"vertical",dataSource:o.noticeList},{renderItem:({item:e})=>t(s.Item,null,{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",null,[t("span",{class:i.noticeTime},[e.createdatetime]),e.msgtitle]),description:()=>t("div",{class:i.content},[t(l,{dot:!0,style:{float:"right"}},null),e.msgcontent])})]})}),t("hr",null,null),t(s,{itemLayout:"vertical",dataSource:r.noticeListHadRead},{renderItem:({item:e})=>t(s.Item,null,{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",null,[t("span",{class:i.noticeTime},[e.createdatetime]),e.msgtitle]),description:()=>t("div",{class:i.content},[e.msgcontent])})]})})]})}});export{F as default};
