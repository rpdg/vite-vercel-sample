import{M as k}from"./MainSectionHead.dad211bc.js";import{a as S}from"./index.eef7e3b7.js";import{u as O}from"./ConferenceStore.430af185.js";import{r as u,o as g,v as x}from"./ant-design-vue.61d2faec.js";import{h as m}from"./moment.29305b8e.js";import{u as D}from"./vue-i18n.f56f8be1.js";import{d as I}from"./vue-router.82b024de.js";import{s as p}from"./index.module.6e348a91.js";import{D as C,U as M}from"./@ant-design.148651e0.js";import{d as h,l as B,k as e,u as R,c as H,w as P,B as y,I as U,i as N,F as T}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./@ctrl.2e36ce53.js";const V="_content_ukpt9_1",E="_title_ukpt9_8",F="_toggler_ukpt9_22";var f={content:V,title:E,toggler:F},w=h({name:"presentationListItem",props:{content:{type:Object,required:!0},shown:{type:Boolean,default:!1}},setup(n){const{content:a,shown:r}=n,s=B(r);function l(){s.value=!s.value}return()=>e("div",{class:f.content},[e("div",{class:f.title},[e("h3",null,[a.title]),e("div",{class:f.toggler,onClick:l},[s.value?e(C,{class:"cursor_hand"},null):e(M,{class:"cursor_hand"},null)])]),e(u,{style:{display:s.value?"block":"none"},itemLayout:"vertical",dataSource:a.children},{renderItem:({item:t})=>e(u.Item,{class:p.verticalListItem},{default:()=>[e(u.Item.Meta,null,{title:()=>e(I,{to:`/conference/${t.activity_content_id}`},{default:()=>[t.actitivity_content_title]}),description:()=>e("div",{class:p.content},[t.actitivity_content_begindate.split(" ")[0]," ",t.actitivity_content_time,R(" "),e("br",null,null),t.location]),avatar:()=>e("img",{class:p.avatar,src:t.coverpicture},null)})]})})])}});function L(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}var be=h({name:"PresentationList",setup(){var v,b;const{t:n}=D();let{conferenceStore:a}=O();const{appStore:r}=S(),s={from:m((v=r.exhibitionDate)==null?void 0:v.onlineBeginDateTime).startOf("month"),to:m((b=r.exhibitionDate)==null?void 0:b.onlineEndDateTime).endOf("month")},l=i=>i<s.from||i>s.to;let t=H({isOnline:!0,month:m(s.from)});return P(t,i=>{a.getPresentationHubList(y(i))}),U(()=>{a.getPresentationHubList(y(t))}),()=>{var j,_;let i,c;return e(T,null,[e(k,{redLead:!1},L(i=n("menu.presentation"))?i:{default:()=>[i]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(g.Group,{value:t.isOnline,"onUpdate:value":o=>t.isOnline=o},{default:()=>[e(g.Button,{value:!0},L(c=n("events.online"))?c:{default:()=>[c]})]}),e("span",{class:"mg_l_20"},[e(x,{disabledDate:l,allowClear:!1,value:t.month,"onUpdate:value":o=>t.month=o},null)])]),e("div",{class:"pd_20 bg_white"},[r.isEn?(j=a.presentationList)==null?void 0:j.filter(o=>o.bgcolor==="en").map((o,d)=>e(w,{key:o.id,content:o,shown:d===0},null)):(_=a.presentationList)==null?void 0:_.filter(o=>o.bgcolor==="cn").map((o,d)=>e(w,{key:o.id,content:o,shown:d===0},null))])])}}});export{be as default};
