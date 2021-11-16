import{C as c,r as f,S as m,b as g,a as v}from"./index.3f2ac436.js";import{u as j}from"./MeetingStore.71fbc30a.js";import{s as o,O as b,r as d,C as y}from"./ant-design-vue.a99caae8.js";import{u as l}from"./vue-i18n.df730e9c.js";import{J as _}from"./@rpdg.e35df5be.js";import{s}from"./index.module.d1912e43.js";import{d as I}from"./avator_red.2a3a1020.js";import{d as q}from"./itb_logo_gray.5050f3d7.js";import{m as x}from"./@ant-design.dd8d38e4.js";import{d as u,k as t,F as R}from"./@vue.f0a33739.js";import"./vue-router.85e08d32.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";const p={"-1":"#000000",0:"#F0AE1C",1:"#AA2A35"};var S=u({name:"MeetingRequestsItem",props:{item:{type:Object,required:!0}},setup(r){const{t:a}=l(),{item:e}=r,{appStore:i}=v();return()=>t(o.Item,{class:s.listItem,key:e.id},{default:()=>{var n;return[t(o.Item.Meta,null,{description:()=>t(R,null,[t(b,{color:p[-1],style:{float:"right",marginRight:0,cursor:"pointer"},onClick:()=>{_.set(c,e._original),f.push("/calendar/"+(e.is_online===1?"virtual":"physical")+`/${e.date}`)}},{default:()=>[a("myItb.meetingRequests.status_short[2]")],icon:()=>t(x,null,null)}),t("div",null,[t("div",{class:s.short},[e.date]),t("div",{class:s.short},[e.time]),t("div",{class:s.short},[t("span",{style:`color:${p[e.approved]}`},[a(`myItb.meetingRequests.status_long[${e.approved}]`)])])])]),avatar:()=>[t("img",{class:`${s.avatar} ${s.round}`,src:e.companyLogo!=null&&e.companyLogo!=""?`${m}${e.companyLogo}`:q},null),t("img",{class:`${s.avatar} ${s.round}`,src:e.avatar!=null&&e.avatar!=""?`${m}${e.avatar}`:I},null)]}),t("span",{class:s.text_gray},[e._original.initiator_barcode===((n=g.user)==null?void 0:n.barcode)?a("myItb.meetingRequests.invited_surfix2")+(i.isEn?e.name_en:e.name_cn)+" "+a("myItb.meetingRequests.invited_surfix3"):(i.isEn?e.name_en:e.name_cn)+a("myItb.meetingRequests.invited_surfix1")+a("myItb.meetingRequests.invited_surfix3")])]}})}}),te=u({name:"MeetingRequests",setup(){const{t:r}=l(),{meetingStore:a}=j();return()=>t(y,{title:r("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[t(d,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[t(d.TabPane,{key:1,tab:r("myItb.meetingRequests.online")},{default:()=>[t(o,{itemLayout:"vertical",dataSource:a.reuqestsVir},{renderItem:({item:e})=>t(S,{item:e},null)})]})]})]})}});export{te as default};
