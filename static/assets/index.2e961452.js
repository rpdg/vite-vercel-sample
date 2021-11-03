import{C as p,r as c,a as g}from"./index.bbac38a9.js";import{u as f}from"./MeetingStore.a6642539.js";import{o,H as j,n as i,C as v}from"./ant-design-vue.14644436.js";import{u as n}from"./vue-i18n.532c4af8.js";import{S as m}from"./Config.87ac60ee.js";import{J as b}from"./@rpdg.dab4d1a7.js";import{s}from"./index.module.25c2564a.js";import{m as y}from"./@ant-design.4b470cc8.js";import{d as l,k as e,F as I,u as S}from"./@vue.7a36ac42.js";import"./vue-router.8e73f157.js";import"./moment.29305b8e.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";import"./@ctrl.2e36ce53.js";const $={"-1":"#000000",0:"#F0AE1C",1:"#AA2A35"};var u=l({name:"MeetingRequestsItem",props:{item:{type:Object,required:!0}},setup(r){const{t:a}=n(),{item:t}=r,{appStore:d}=g();return()=>e(o.Item,{class:s.listItem,key:t.id},{default:()=>[e(o.Item.Meta,null,{description:()=>e(I,null,[e(j,{color:$[t.approved],style:{float:"right",marginRight:0,cursor:"pointer"},onClick:()=>{t.approved===0&&(b.set(p,t._original),c.push(`/meeting/${t.is_online}/${t.id}`))}},{default:()=>[a(`myItb.meetingRequests.status_short[${t.approved}]`)],icon:()=>e(y,null,null)}),e("div",null,[e("div",{class:s.short},[t.date]),e("div",{class:s.short},[t.time]),e("div",{class:s.short},[a(`myItb.meetingRequests.status_long[${t.approved}]`)])])]),avatar:()=>[e("img",{class:`${s.avatar} ${s.round}`,src:`${m}${t.companyLogo}`},null),e("img",{class:`${s.avatar} ${s.round}`,src:`${m}${t.avatar}`},null)]}),e("span",{class:s.text_gray},[d.isEn?t.name_en:t.name_cn,S(" "),a("myItb.meetingRequests.invited_surfix")])]})}}),X=l({name:"MeetingRequests",setup(){const{t:r}=n(),{meetingStore:a}=f();return()=>e(v,{title:r("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[e(i,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[e(i.TabPane,{key:1,tab:r("myItb.meetingRequests.online")},{default:()=>[e(o,{itemLayout:"vertical",dataSource:a.reuqestsVir},{renderItem:({item:t})=>e(u,{item:t},null)})]}),e(i.TabPane,{key:2,tab:r("myItb.meetingRequests.offline")},{default:()=>[e(o,{itemLayout:"vertical",dataSource:a.reuqestsPhy},{renderItem:({item:t})=>e(u,{item:t},null)})]})]})]})}});export{X as default};
