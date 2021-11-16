import{M as k}from"./MainSectionHead.99c217de.js";import{a as S}from"./index.9bd4e1af.js";import{u as O}from"./ConferenceStore.2962db59.js";import{r as u,o as g,v as x}from"./ant-design-vue.f8ac2ba9.js";import{h as m}from"./moment.29305b8e.js";import{u as D}from"./vue-i18n.df730e9c.js";import{d as I}from"./vue-router.85e08d32.js";import{s as _}from"./index.module.6e348a91.js";import{D as C,U as M}from"./@ant-design.a109b705.js";import{d as h,l as B,k as e,u as R,c as H,w as P,B as y,I as U,i as N,F as T}from"./@vue.f0a33739.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";const V="_content_ukpt9_1",E="_title_ukpt9_8",F="_toggler_ukpt9_22";var p={content:V,title:E,toggler:F},w=h({name:"presentationListItem",props:{content:{type:Object,required:!0},shown:{type:Boolean,default:!1}},setup(n){const{content:a,shown:r}=n,s=B(r);function l(){s.value=!s.value}return()=>e("div",{class:p.content},[e("div",{class:p.title},[e("h3",null,[a.title]),e("div",{class:p.toggler,onClick:l},[s.value?e(C,{class:"cursor_hand"},null):e(M,{class:"cursor_hand"},null)])]),e(u,{style:{display:s.value?"block":"none"},itemLayout:"vertical",dataSource:a.children},{renderItem:({item:o})=>e(u.Item,{class:_.verticalListItem},{default:()=>[e(u.Item.Meta,null,{title:()=>e(I,{to:`/conference/${o.activity_content_id}`},{default:()=>[o.actitivity_content_title]}),description:()=>e("div",{class:_.content},[o.actitivity_content_begindate.split(" ")[0]," ",R(" "),e("br",null,null),o.location]),avatar:()=>e("img",{style:"width:120px;",src:o.actitivity_content_bgcolor},null)})]})})])}});function L(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}var be=h({name:"PresentationList",setup(){var f,v;const{t:n}=D();let{conferenceStore:a}=O();const{appStore:r}=S(),s={from:m((f=r.exhibitionDate)==null?void 0:f.onlineBeginDateTime).startOf("month"),to:m((v=r.exhibitionDate)==null?void 0:v.onlineEndDateTime).endOf("month")},l=i=>i<s.from||i>s.to;let o=H({isOnline:!0,month:m(s.from)});return P(o,i=>{a.getPresentationHubList(y(i))}),U(()=>{a.getPresentationHubList(y(o))}),()=>{var b,j;let i,c;return e(T,null,[e(k,{redLead:!1},L(i=n("menu.presentation"))?i:{default:()=>[i]}),e("div",{class:"pd_20 bg_white mg_b_20"},[e(g.Group,{value:o.isOnline,"onUpdate:value":t=>o.isOnline=t},{default:()=>[e(g.Button,{value:!0},L(c=n("events.online"))?c:{default:()=>[c]})]}),e("span",{class:"mg_l_20"},[e(x,{disabledDate:l,allowClear:!1,value:o.month,"onUpdate:value":t=>o.month=t},null)])]),e("div",{class:"pd_20 bg_white"},[r.isEn?(b=a.presentationList)==null?void 0:b.filter(t=>t.bgcolor==="en").map((t,d)=>e(w,{key:t.id,content:t,shown:d===0},null)):(j=a.presentationList)==null?void 0:j.filter(t=>t.bgcolor==="cn").map((t,d)=>e(w,{key:t.id,content:t,shown:d===0},null))])])}}});export{be as default};
