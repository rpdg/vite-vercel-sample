import{u as H,L as N,I as L}from"./index.7a06c7bd.js";import{P as O}from"./index.18f5eb05.js";import{M as d}from"./MainSectionHead.b9e7274a.js";import{u as P}from"./ConferenceStore.fbb4330e.js";import{s as u}from"./index.module.6e348a91.js";import{e as m,F as c,x as z,y as U,m as F}from"./ant-design-vue.034afe85.js";import{u as W}from"./vue-i18n.0711e616.js";import{d as $}from"./vue-router.8ec3c3d8.js";import{O as q}from"./@ant-design.8f5596ac.js";import{d as B,o as E,j as G,l as k,c as A,k as e,i as J,u as _,F as K}from"./@vue.fa05379c.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.1ae44471.js";function s(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!J(n)}const Q=c.useForm;var Ie=B({name:"ConferenceDetail",props:{id:{type:Number,required:!0}},setup(n){var w,C;const{t:o}=W();let{conferenceStore:i}=P(),{authenStore:R}=H();E(()=>{i.getActivityContentDetail(n.id),i.checkInSchedule(n.id).then(t=>a.isAdded=t)});let l=G(()=>i.currentDetail);const h=k(),a=A({rate:3,content:"",Action:"1",barcode:(C=(w=R.user)==null?void 0:w.barcode)!=null?C:"",Type:"2",SubscribeId:"",activitycontentid:"",isAdded:void 0}),x=A({}),{resetFields:T}=Q(a,x),S=k(o("conference.rateValues").split(","));async function V(){try{await h.value.validate(),i.evaluate(a.rate,a.content,n.id)}catch(t){}}async function D(){try{await i.addToSchedule(n.id)==="ok"&&F.success(o("common.success"))}catch(t){t.message==="error_msg_02"&&F.error("")}}function M(t){return t?t.toString().indexOf("lm.enewie.com")>0?e("iframe",{src:t,class:"specialWidthVideo"},null):e(O,{video:t},null):e("p",null,null)}return()=>{var I;let t,f,p,v,j,y,b,g;return l.value?e(K,null,[e(d,{redLead:!1},s(t=o("conference.detail"))?t:{default:()=>[t]}),e("img",{src:l.value.activityCoverPicture,class:"specialWidthImage mg_b_20 cursor_normal"},null),e("div",{class:"pd_20 bg_white"},[e("h3",null,[l.value.title]),e("div",{class:"text_gray mg_tb_20",innerHTML:l.value.content},null),e("p",null,[e(L,{type:"icon-clock"},null),_(" "),l.value.begindate.split(" ")[0],_(" "),l.value.time]),e("p",null,[e(L,{type:"icon-map"},null),_(" "),l.value.location]),e("hr",null,null),a.isAdded===!0&&e(m,{type:"primary",onClick:D},s(f=o("conference.addTo"))?f:{default:()=>[f]}),a.isAdded===!1&&e(m,null,s(p=o("conference.added"))?p:{default:()=>[p]})]),e(d,{redLead:!0},s(v=o("conference.playback"))?v:{default:()=>[v]}),M(`${l.value.video}`),e(d,{redLead:!0},s(j=o("conference.speaker"))?j:{default:()=>[j]}),e("div",{class:u.contactList},[(I=l.value.speakers)==null?void 0:I.map(r=>e("div",{key:r.id,class:u.contactListItem},[e("img",{class:u.avatar,src:r.picture},null),e("div",{class:u.profile},[e($,{to:`/speakers/${r.id}`},{default:()=>[e("h4",null,[r.name])]}),e("div",{class:"text_gray"},[r.company]),e("div",{class:"text_gray"},[r.title])])]))]),e(d,{redLead:!0},s(y=o("conference.evaluation"))?y:{default:()=>[y]}),e("div",{class:"bg_white pd_20"},[e(c,{ref:h,model:a,rules:x},{default:()=>[e(c.Item,null,{default:()=>[e(z,{value:a.rate,"onUpdate:value":r=>a.rate=r,tooltips:S.value},{character:()=>e(q,null,null)}),e("span",{class:"ant-rate-text"},[S.value[a.rate-1]])]}),e(c.Item,null,{default:()=>[e(U,{value:a.content,"onUpdate:value":r=>a.content=r,placeholder:o("conference.comment"),allowClear:!0,autoSize:{minRows:3,maxRows:6}},null)]}),e(c.Item,null,{default:()=>[e(m,{type:"primary",onClick:V},s(b=o("common.submit"))?b:{default:()=>[b]}),e(m,{onClick:T,style:"margin-left: 10px"},s(g=o("common.reset"))?g:{default:()=>[g]})]})]})])]):e(N,null,null)}}});export{Ie as default};
