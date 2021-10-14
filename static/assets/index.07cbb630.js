import{a as C,u as k,d as v,L as N,U as O}from"./index.e8021e5e.js";import{u as h}from"./vue-i18n.0711e616.js";import{p}from"./Image.f0a737d7.js";import{I as D,g as H,B as $,G as x}from"./ant-design-vue.0721aa65.js";import{d as g,k as e,u as B,l as L,o as E,c as T,i as Y,n as q}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";const A="_chatList_lw0gu_1",G="_chatItem_lw0gu_1",R="_avata_lw0gu_12",V="_content_lw0gu_19",J="_time_lw0gu_23",P="_msg_lw0gu_29",z="_chatSection_lw0gu_43",W="_targetUserInfo_lw0gu_46",F="_info_lw0gu_57",K="_chatMsgBox_lw0gu_61",Q="_invite_lw0gu_69",X="_invite_title_lw0gu_81",Z="_invite_content_lw0gu_84",ee="_bubble_lw0gu_96",te="_left_lw0gu_110",ae="_right_lw0gu_125",se="_sender_lw0gu_141";var a={chatList:A,chatItem:G,avata:R,content:V,time:J,msg:P,chatSection:z,targetUserInfo:W,info:F,chatMsgBox:K,invite:Q,invite_title:X,invite_content:Z,bubble:ee,left:te,right:ae,sender:se},ne=g({name:"ChattingMessage",props:{msg:{type:Object,required:!0},selfBarCode:{type:String,required:!0}},setup(i){const{msg:r,selfBarCode:n}=i;return()=>e("div",{key:r.id,class:`${a.bubble} ${r.to_barcode===n?a.left:a.right}`},[e("p",null,[r.msgcontent])])}}),re=g({props:{msg:{type:Object,required:!0},targetUserName:String},setup(i){const{t:r}=h(),{msg:n,targetUserName:s}=i;let c=JSON.parse(n.msgcontent);return()=>e("div",{class:`pd_20 ${a.invite}`,key:n.id},[e("p",{class:a.invite_title},[s,B(" "),r("myItb.chat.invite_you_attend")]),e("div",{class:a.invite_content},[e("img",{src:p(n.from_HeadImageUrl),alt:""},null),e("img",{src:p(n.to_HeadImageUrl),alt:""},null),e("div",{class:"text_gray mg_l_20"},[e("p",{class:"text_12"},[`${c.beginDate.substr(0,10)}`,e("br",null,null),`${c.beginDate.substr(11,5)} ~ ${c.endDate.substr(11,5)}`]),e("p",null,null)])])])}});function oe(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!Y(i)}var ie=g({name:"Chat",setup(){var y,j,M,U;const{t:i}=h(),{appStore:r}=k(),{authenStore:n}=C(),{chatStore:s}=v(),c=L(""),_=L(),f=n.user.barcode;E(async()=>{await s.getChattingMessages(s.targetUser.employee_id),d()});function d(){let u=_.value;u.scrollTop=u.scrollHeight}async function t(){c.value&&(await s.sendChattingMessage(c.value),c.value="",q(d))}function o(u){return u.map(l=>{if(l.msgtype<2)return e(ne,{key:l.id,msg:l,selfBarCode:f},null);if(l.msgtype<6)return e(re,{msg:l,targetUserName:b.name,key:l.id},null);if(l.msgtype===6)return e("div",{class:`pd_20 ${a.invite}`},[B("\u540D\u7247")])})}let b=T({name:r.isEn?((y=s.targetUser)==null?void 0:y.firstname)+" "+((j=s.targetUser)==null?void 0:j.lastname):""+((M=s.targetUser)==null?void 0:M.lastname_cn)+((U=s.targetUser)==null?void 0:U.firstname_cn)});return()=>{var u,l,I,S,w;return e("section",{class:a.chatSection,key:(u=s.targetUser)==null?void 0:u.employee_id},[e("div",{class:a.targetUserInfo},[e("img",{class:a.avata,src:p((l=s.targetUser)==null?void 0:l.HeadImageUrl)},null),e("div",{class:a.info},[e("h4",null,[b.name]),e("div",null,[(I=s.targetUser)==null?void 0:I.job_title]),e("div",null,[r.isEn?(S=s.targetUser)==null?void 0:S.company:(w=s.targetUser)==null?void 0:w.company_cn])])]),e("div",{ref:_,class:a.chatMsgBox},[s.chattingMsgs&&o(s.chattingMsgs)]),e("div",{class:a.sender},[e(D,{type:"text",value:c.value,"onUpdate:value":m=>c.value=m},{suffix:()=>{let m;return e(H,{style:{backgroundColor:"black",color:"white"},onClick:t},oe(m=i("myItb.chat.send"))?m:{default:()=>[m]})}})])])}}}),ce=g({name:"MsgList",setup(){var d;const{appStore:i}=k(),{authenStore:r}=C(),{chatStore:n}=v(),s=(d=r.user)==null?void 0:d.barcode;E(()=>{n.chattingMsgs=n.targetUser=void 0,n.lastMessages?n.getLastMessages():n.refreshMsgList()});function c(t){let o={job_title:t.job_title,employee_id:t.barcode,HeadImageUrl:t.HeadImageUrl,firstname_cn:t.firstname_cn,firstname:t.firstname,lastname_cn:t.lastname_cn,lastname:t.lastname,company:t.company,company_cn:t.company_cn,IsOnline:0};n.chatWith(o)}function _(t){if(t.msgtype===0)return e("span",null,[t.msgcontent]);if(t.msgcontent.indexOf('{"')===0)return e("span",null,[JSON.parse(t.msgcontent).fromBarCode])}function f(t){return t.length>0?t.map(o=>e("div",{key:o.barcode,class:a.chatItem,onClick:()=>{c(o)}},[e("img",{class:a.avata,src:p(o.HeadImageUrl),onClick:()=>{c(o)}},null),e("div",{class:a.content},[e("span",{class:a.time},[O(o.last_message.createdatetime,r.minutesOffset,"YYYY-MM-DD")]),e($,{dot:o.last_message.from_barcode!=s&&o.last_message.status===0},{default:()=>[e("h4",null,[i.isEn?o.firstname+" "+o.lastname:o.lastname_cn+o.firstname_cn," "])]}),e("div",{class:a.msg},[_(o.last_message)])])])):e(x,{image:x.PRESENTED_IMAGE_SIMPLE},null)}return()=>e("div",{class:a.chatList},[n.lastMessages?f(n.lastMessages):e(N,null,null)])}}),He=g({name:"ChatSection",setup(){const{t:i}=h(),{chatStore:r}=v();return()=>e("div",{class:"ant-card ant-card-bordered"},[e("div",{class:"ant-card-head",style:"border-bottom-color: #e0e0e0;"},[e("div",{class:"ant-card-head-wrapper"},[e("div",{class:"ant-card-head-title",onClick:()=>{r.chattingMsgs=r.targetUser=void 0,r.viewState=0}},[i("myItb.dockIcons.chat")])])]),e("div",{class:"ant-card-body",style:"padding: 2px;"},[r.viewState===0?e(ce,null,null):e(ie,null,null)])])}});export{He as default};
