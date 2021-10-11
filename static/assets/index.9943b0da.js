import{M as L}from"./MainSectionHead.8ce27b3b.js";import{u as S}from"./index.72e81481.js";import{u as k}from"./ConferenceStore.e000d4a6.js";import{m as d,j as m,q as O}from"./ant-design-vue.45bb77f4.js";import{h as p}from"./moment.29305b8e.js";import{u as x}from"./vue-i18n.8989ea2a.js";import{d as D}from"./vue-router.65bc85cf.js";import{s as f}from"./index.module.af86f0bd.js";import{D as I,U as B}from"./@ant-design.b29a0759.js";import{d as h,l as C,k as e,u as M,c as R,w as H,B as y,I as P,i as U,F as N}from"./@vue.f0f90a02.js";import"./nprogress.8b9ed5b7.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.35d5f340.js";import"./source-map.3671d69c.js";import"./vue.8bc7d658.js";import"./@ctrl.2e36ce53.js";const T="_content_ukpt9_1",V="_title_ukpt9_8",q="_toggler_ukpt9_22";var v={content:T,title:V,toggler:q},F=h({name:"presentationListItem",props:{content:{type:Object,required:!0},shown:{type:Boolean,default:!1}},setup(o){const{content:a,shown:r}=o,n=C(r);function l(){n.value=!n.value}return()=>e("div",{class:v.content},[e("div",{class:v.title},[e("h3",null,[a.title]),e("div",{class:v.toggler,onClick:l},[n.value?e(I,{class:"cursor_hand"},null):e(B,{class:"cursor_hand"},null)])]),e(d,{style:{display:n.value?"block":"none"},itemLayout:"vertical",dataSource:a.children},{renderItem:({item:t})=>e(d.Item,{class:f.verticalListItem},{default:()=>[e(d.Item.Meta,null,{title:()=>e(D,{to:`/conference/${t.activity_content_id}`},{default:()=>[t.actitivity_content_title]}),description:()=>e("div",{class:f.content},[t.actitivity_content_begindate.split(" ")[0]," ",t.actitivity_content_time,M(" "),e("br",null,null),t.location]),avatar:()=>e("img",{class:f.avatar,src:t.coverpicture},null)})]})})])}});function b(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!U(o)}var ve=h({name:"PresentationList",setup(){var j,_;const{t:o}=x();let{conferenceStore:a}=k();const{appStore:r}=S(),n={from:p((j=r.exhibitionDate)==null?void 0:j.onlineBeginDateTime).startOf("month"),to:p((_=r.exhibitionDate)==null?void 0:_.onlineEndDateTime).endOf("month")},l=s=>s<n.from||s>n.to;let t=R({isOnline:!0,month:p(n.from)});return H(t,s=>{a.getPresentationHubList(y(s))}),P(()=>{a.getPresentationHubList(y(t))}),()=>{var g;let s,c,u;return e(N,null,[e(L,{redLead:!1},b(s=o("menu.presentation"))?s:{default:()=>[s]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(m.Group,{value:t.isOnline,"onUpdate:value":i=>t.isOnline=i},{default:()=>[e(m.Button,{value:!0},b(c=o("events.online"))?c:{default:()=>[c]}),e(m.Button,{value:!1},b(u=o("events.offline"))?u:{default:()=>[u]})]}),e("span",{class:"mg_l_20"},[e(O,{disabledDate:l,allowClear:!1,value:t.month,"onUpdate:value":i=>t.month=i},null)])]),e("div",{class:"pd_20 bg_white"},[(g=a.presentationList)==null?void 0:g.map((i,w)=>e(F,{key:i.id,content:i,shown:w===0},null))])])}}});export{ve as default};
