import{d as c}from"./index.eef7e3b7.js";import{r as i,B as l,C as p}from"./ant-design-vue.61d2faec.js";import{u}from"./vue-i18n.f56f8be1.js";import{s}from"./index.module.c5e11e53.js";import{d as f,c as n,o as j,k as e}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./vue-router.82b024de.js";import"./moment.29305b8e.js";import"./@ant-design.148651e0.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";var F=f({name:"ChatSection",setup(){const{t:d}=u(),{chatStore:o}=c();let a=n({noticeList:[]}),r=n({noticeListHadRead:[]});return j(async()=>{a.noticeList=await o.getSystemNotification({status:0,sendDateTime:"",msgType:"7"}),r.noticeListHadRead=await o.getSystemNotification({status:1,sendDateTime:"",msgType:"7"});let t=a.noticeList.map(m=>({id:m.msg_id}));t.length&&o.batchUpdateMsg(t,1)}),()=>e(p,{title:d("myItb.dockIcons.notification")},{default:()=>[e(i,{itemLayout:"vertical",dataSource:a.noticeList},{renderItem:({item:t})=>e(i.Item,null,{default:()=>[e(i.Item.Meta,null,{title:()=>e("div",null,[e("span",{class:s.noticeTime},[t.createdatetime]),t.msgtitle]),description:()=>e("div",{class:s.content},[e(l,{dot:!0,style:{float:"right"}},null),t.msgcontent])})]})}),e("hr",null,null),e(i,{itemLayout:"vertical",dataSource:r.noticeListHadRead},{renderItem:({item:t})=>e(i.Item,null,{default:()=>[e(i.Item.Meta,null,{title:()=>e("div",null,[e("span",{class:s.noticeTime},[t.createdatetime]),t.msgtitle]),description:()=>e("div",{class:s.content},[t.msgcontent])})]})})]})}});export{F as default};
