import{M as L}from"./MainSectionHead.a516428a.js";import{a as S}from"./index.3b9f59ff.js";import{u as O}from"./ConferenceStore.3f9f6ccf.js";import{o as u,k as g,t as x}from"./ant-design-vue.00c2c9f0.js";import{h as m}from"./moment.29305b8e.js";import{u as D}from"./vue-i18n.6a1efd87.js";import{d as I}from"./vue-router.b758f417.js";import{s as p}from"./index.module.6e348a91.js";import{D as C,U as M}from"./@ant-design.d39a0d88.js";import{d as h,l as B,k as e,u as R,c as H,w as P,B as y,I as U,i as N,F as T}from"./@vue.6f7c75f1.js";import"./@rpdg.f7b2a17f.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";import"./@ctrl.2e36ce53.js";const V="_content_ukpt9_1",E="_title_ukpt9_8",F="_toggler_ukpt9_22";var f={content:V,title:E,toggler:F},w=h({name:"presentationListItem",props:{content:{type:Object,required:!0},shown:{type:Boolean,default:!1}},setup(n){const{content:i,shown:r}=n,s=B(r);function l(){s.value=!s.value}return()=>e("div",{class:f.content},[e("div",{class:f.title},[e("h3",null,[i.title]),e("div",{class:f.toggler,onClick:l},[s.value?e(C,{class:"cursor_hand"},null):e(M,{class:"cursor_hand"},null)])]),e(u,{style:{display:s.value?"block":"none"},itemLayout:"vertical",dataSource:i.children},{renderItem:({item:t})=>e(u.Item,{class:p.verticalListItem},{default:()=>[e(u.Item.Meta,null,{title:()=>e(I,{to:`/conference/${t.activity_content_id}`},{default:()=>[t.actitivity_content_title]}),description:()=>e("div",{class:p.content},[t.actitivity_content_begindate.split(" ")[0]," ",t.actitivity_content_time,R(" "),e("br",null,null),t.location]),avatar:()=>e("img",{class:p.avatar,src:t.coverpicture},null)})]})})])}});function k(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}var je=h({name:"PresentationList",setup(){var v,j;const{t:n}=D();let{conferenceStore:i}=O();const{appStore:r}=S(),s={from:m((v=r.exhibitionDate)==null?void 0:v.onlineBeginDateTime).startOf("month"),to:m((j=r.exhibitionDate)==null?void 0:j.onlineEndDateTime).endOf("month")},l=a=>a<s.from||a>s.to;let t=H({isOnline:!0,month:m(s.from)});return P(t,a=>{i.getPresentationHubList(y(a))}),U(()=>{i.getPresentationHubList(y(t))}),()=>{var b,_;let a,c;return e(T,null,[e(L,{redLead:!1},k(a=n("menu.presentation"))?a:{default:()=>[a]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(g.Group,{value:t.isOnline,"onUpdate:value":o=>t.isOnline=o},{default:()=>[e(g.Button,{value:!0},k(c=n("events.online"))?c:{default:()=>[c]})]}),e("span",{class:"mg_l_20"},[e(x,{disabledDate:l,allowClear:!1,value:t.month,"onUpdate:value":o=>t.month=o},null)])]),e("div",{class:"pd_20 bg_white"},[r.isEn?(b=i.presentationList)==null?void 0:b.filter(o=>o.bgcolor==="en").map((o,d)=>e(w,{key:o.id,content:o,shown:d===0},null)):(_=i.presentationList)==null?void 0:_.filter(o=>o.bgcolor==="cn").map((o,d)=>e(w,{key:o.id,content:o,shown:d===0},null))])])}}});export{je as default};
