import{d as T,I as $,o as N,j as O,l as y,c as h,k as e,t as _,z as S,u as E,i as H,F as R}from"./@vue.f0a33739.js";import{u as W,L as z,I as B,a as P}from"./index.d755f037.js";import{P as q}from"./index.21593692.js";import{M as w}from"./MainSectionHead.99c217de.js";import{u as G}from"./ConferenceStore.d113756d.js";import{s as d}from"./index.module.6e348a91.js";import{t as J,g as x,F as K,n as Q,m as C}from"./ant-design-vue.a99caae8.js";import{_ as U}from"./vue-clipboard3.ca4b4e55.js";import{u as X}from"./vue-i18n.df730e9c.js";import{d as Y}from"./vue-router.85e08d32.js";import{M as Z}from"./@ant-design.dd8d38e4.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.1ae44471.js";import"./clipboard.18fc16a5.js";function u(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!H(i)}const ee=K.useForm;var De=T({name:"ConferenceDetail",props:{id:{type:Number,required:!0}},setup(i){var v,j;const{t:a}=X();let{conferenceStore:r}=G(),{authenStore:g}=W(),{toClipboard:A}=U();const{appStore:m}=P(),I=async()=>{try{await A(window.location.href),Q.success({message:a("common.copied")})}catch(t){console.error(t)}};$(()=>{r.getConferenceAdvertisement()}),N(()=>{r.getActivityContentDetail(i.id),g.token&&r.checkInSchedule(i.id).then(t=>c.isAdded=t)});let n=O(()=>r.currentDetail);y();const c=h({rate:3,content:"",Action:"1",barcode:(j=(v=g.user)==null?void 0:v.barcode)!=null?j:"",Type:"2",SubscribeId:"",activitycontentid:"",isAdded:void 0}),L=h({});ee(c,L),y(a("conference.rateValues").split(","));async function k(){try{await r.addToSchedule(i.id)==="ok"&&C.success(a("common.success"))}catch(t){t.message==="error_msg_02"&&C.error("")}}function F(t,l){return t?t.toString().indexOf("lm.enewie.com")>0?e("iframe",{src:t,class:"specialWidthVideo"},null):e(q,{video:t,poster:l},null):e("p",null,null)}function M(t){let s=t.target.dataset.id;if(s==""||s==null||s==null)return!1;window.open("#/exhibitors/"+s)}function V(t){return!!(t&&t!="")}function D(t){return t==null||t===""}return()=>{var b;let t,l,s,f;return n.value?e(R,null,[e("p",null,null),_(e(J,{autoplay:!0},{default:()=>{var o;return[(o=r.conferenceAd)==null?void 0:o.map(p=>e("img",{key:p.id,class:"fullWidthImage","data-id":p.value2,src:p.value1,onClick:M},null))]}}),[[S,V(`${n.value.content_video}`)]]),_(e("img",{src:n.value.bgcolor,class:"specialWidthImage mg_b_20 cursor_normal"},null),[[S,D(`${n.value.content_video}`)]]),e("p",null,null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(Z,{class:"pd_r_10 cursor_hand",onClick:I},null)]),e("h3",null,[n.value.title]),e("div",{class:"text_gray mg_tb_20",innerHTML:n.value.content},null),e("p",null,[e(B,{type:"icon-clock"},null),E(" "),n.value.begindate.split(" ")[0]]),e("hr",null,null),c.isAdded===!1&&e(x,{type:"primary",onClick:k},u(t=a("conference.addTo"))?t:{default:()=>[t]}),c.isAdded===!0&&e(x,null,u(l=a("conference.added"))?l:{default:()=>[l]})]),e(w,{redLead:!0},u(s=a("conference.playback"))?s:{default:()=>[s]}),F(`${n.value.content_video}`,`${n.value.bgcolor}`),e(w,{redLead:!0},u(f=a("conference.speaker"))?f:{default:()=>[f]}),e("div",{class:d.contactList},[(b=n.value.speakers)==null?void 0:b.map(o=>e("div",{key:o.id,class:d.contactListItem},[e("img",{class:d.avatar,src:o.picture},null),e("div",{class:d.profile},[e(Y,{to:`/speakers/${o.id}`},{default:()=>[e("h4",null,[m.isEn?o.name.split("|")[0]:o.name.split("|")[1]])]}),e("div",{class:"text_gray"},[m.isEn?o.company.split("|")[0]:o.company.split("|")[1]]),e("div",{class:"text_gray"},[m.isEn?o.title.split("|")[0]:o.title.split("|")[1]])])]))])]):e(z,null,null)}}});export{De as default};
