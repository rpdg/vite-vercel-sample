import{u as H,L as N,I as O}from"./index.f988d874.js";import{P}from"./index.29da4561.js";import{M as d}from"./MainSectionHead.3a39449d.js";import{u as z}from"./ConferenceStore.7d681639.js";import{s as u}from"./index.module.6e348a91.js";import{e as m,F as c,R as U,T as W,n as $,m as k}from"./ant-design-vue.84ff5d3b.js";import{_ as q}from"./vue-clipboard3.ca4b4e55.js";import{u as B}from"./vue-i18n.df730e9c.js";import{d as J}from"./vue-router.85e08d32.js";import{d as K,o as E,j as G,l as L,c as I,k as e,u as F,i as Q,F as X}from"./@vue.f0a33739.js";import{K as Y,J as Z}from"./@ant-design.a109b705.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.1ae44471.js";import"./clipboard.18fc16a5.js";function l(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!Q(s)}const ee=c.useForm;var Ve=K({name:"ConferenceDetail",props:{id:{type:Number,required:!0}},setup(s){var w,x;const{t:o}=B();let{conferenceStore:i}=z(),{authenStore:g}=H(),{toClipboard:A}=q();const R=async()=>{try{await A(window.location.href),$.success({message:o("common.copied")})}catch(t){console.error(t)}};E(()=>{i.getActivityContentDetail(s.id),g.token&&i.checkInSchedule(s.id).then(t=>a.isAdded=t)});let n=G(()=>i.currentDetail);const _=L(),a=I({rate:3,content:"",Action:"1",barcode:(x=(w=g.user)==null?void 0:w.barcode)!=null?x:"",Type:"2",SubscribeId:"",activitycontentid:"",isAdded:void 0}),h=I({}),{resetFields:T}=ee(a,h),S=L(o("conference.rateValues").split(","));async function V(){try{await _.value.validate(),i.evaluate(a.rate,a.content,s.id)}catch(t){}}async function D(){try{await i.addToSchedule(s.id)==="ok"&&k.success(o("common.success"))}catch(t){t.message==="error_msg_02"&&k.error("")}}function M(t){return t?t.toString().indexOf("lm.enewie.com")>0?e("iframe",{src:t,class:"specialWidthVideo"},null):e(P,{video:t},null):e("p",null,null)}return()=>{var C;let t,f,p,v,j,b,y;return n.value?e(X,null,[e(d,{redLead:!1},null),e("img",{src:n.value.activityCoverPicture,class:"specialWidthImage mg_b_20 cursor_normal"},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(Y,{class:"pd_r_10 cursor_hand",onClick:R},null)]),e("h3",null,[n.value.title]),e("div",{class:"text_gray mg_tb_20",innerHTML:n.value.content},null),e("p",null,[e(O,{type:"icon-clock"},null),F(" "),n.value.begindate.split(" ")[0],F(" "),n.value.time]),e("hr",null,null),a.isAdded===!1&&e(m,{type:"primary",onClick:D},l(t=o("conference.addTo"))?t:{default:()=>[t]}),a.isAdded===!0&&e(m,null,l(f=o("conference.added"))?f:{default:()=>[f]})]),e(d,{redLead:!0},l(p=o("conference.playback"))?p:{default:()=>[p]}),M(`${n.value.content_video}`),e(d,{redLead:!0},l(v=o("conference.speaker"))?v:{default:()=>[v]}),e("div",{class:u.contactList},[(C=n.value.speakers)==null?void 0:C.map(r=>e("div",{key:r.id,class:u.contactListItem},[e("img",{class:u.avatar,src:r.picture},null),e("div",{class:u.profile},[e(J,{to:`/speakers/${r.id}`},{default:()=>[e("h4",null,[r.name])]}),e("div",{class:"text_gray"},[r.company]),e("div",{class:"text_gray"},[r.title])])]))]),e(d,{redLead:!0},l(j=o("conference.evaluation"))?j:{default:()=>[j]}),e("div",{class:"bg_white pd_20"},[e(c,{ref:_,model:a,rules:h},{default:()=>[e(c.Item,null,{default:()=>[e(U,{value:a.rate,"onUpdate:value":r=>a.rate=r,tooltips:S.value},{character:()=>e(Z,null,null)}),e("span",{class:"ant-rate-text"},[S.value[a.rate-1]])]}),e(c.Item,null,{default:()=>[e(W,{value:a.content,"onUpdate:value":r=>a.content=r,placeholder:o("conference.comment"),allowClear:!0,autoSize:{minRows:3,maxRows:6}},null)]}),e(c.Item,null,{default:()=>[e(m,{type:"primary",onClick:V},l(b=o("common.submit"))?b:{default:()=>[b]}),e(m,{onClick:T,style:"margin-left: 10px"},l(y=o("common.reset"))?y:{default:()=>[y]})]})]})])]):e(N,null,null)}}});export{Ve as default};
