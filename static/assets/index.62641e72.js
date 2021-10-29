import{u as $,a as H,d as U,L as O,U as A}from"./index.3be6f241.js";import{u as v}from"./vue-i18n.0711e616.js";import{S as L}from"./Config.87ac60ee.js";import{I as T,e as Y,B as q,E as D}from"./ant-design-vue.f84da452.js";import{d as g,k as e,u as b,l as E,o as w,c as R,i as V,n as G}from"./@vue.fa05379c.js";import{p as h}from"./Image.bfd5119e.js";import{d as N}from"./avator_red.ac077e2d.js";import"./vue-router.8ec3c3d8.js";import"./moment.29305b8e.js";import"./@ant-design.2067dcee.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./BlankGif.8ca146ab.js";const P="_chatList_lgocs_1",z="_chatItem_lgocs_1",J="_avata_lgocs_12",W="_content_lgocs_19",F="_time_lgocs_23",K="_msg_lgocs_29",Q="_chatSection_lgocs_43",X="_targetUserInfo_lgocs_46",Z="_info_lgocs_57",ee="_chatMsgBox_lgocs_61",te="_invite_lgocs_69",se="_fromMe_lgocs_81",ae="_invite_title_lgocs_84",ne="_invite_content_lgocs_87",re="_bubble_lgocs_99",oe="_left_lgocs_113",ie="_right_lgocs_128",le="_sender_lgocs_144";var s={chatList:P,chatItem:z,avata:J,content:W,time:F,msg:K,chatSection:Q,targetUserInfo:X,info:Z,chatMsgBox:ee,invite:te,fromMe:se,invite_title:ae,invite_content:ne,bubble:re,left:oe,right:ie,sender:le},ce=g({name:"ChattingMessage",props:{msg:{type:Object,required:!0},selfBarCode:{type:String,required:!0}},setup(r){const{msg:o,selfBarCode:i}=r;return()=>e("div",{key:o.id,class:`${s.bubble} ${o.to_barcode===i?s.left:s.right}`},[e("p",null,[o.msgcontent])])}}),de=g({props:{msg:{type:Object,required:!0},targetUserName:String,selfBarCode:String},setup(r){const{t:o}=v(),{msg:i,targetUserName:t}=r;let l=JSON.parse(i.msgcontent);return()=>i.from_barcode===r.selfBarCode?e("div",{class:`pd_20 ${s.invite} ${s.fromMe}`,key:i.id},[e("p",{class:s.invite_title},[o("myItb.chat.you_invite_attend"),b(" "),t]),e("div",{class:s.invite_content},[e("img",{src:h(i.from_HeadImageUrl),alt:""},null),e("img",{src:h(i.to_HeadImageUrl),alt:""},null),e("div",{class:"text_gray mg_l_20"},[e("p",{class:"text_12"},[`${l.beginDate.substr(0,10)}`,e("br",null,null),`${l.beginDate.substr(11,5)} ~ ${l.endDate.substr(11,5)}`]),e("p",null,null)])])]):e("div",{class:`pd_20 ${s.invite}`,key:i.id,onClick:()=>{}},[e("p",{class:s.invite_title},[t,b(" "),o("myItb.chat.invite_you_attend")]),e("div",{class:s.invite_content},[e("img",{src:h(i.from_HeadImageUrl),alt:""},null),e("img",{src:h(i.to_HeadImageUrl),alt:""},null),e("div",{class:"text_gray mg_l_20"},[e("p",{class:"text_12"},[`${l.beginDate.substr(0,10)}`,e("br",null,null),`${l.beginDate.substr(11,5)} ~ ${l.endDate.substr(11,5)}`]),e("p",null,null)])])])}});function me(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!V(r)}var ue=g({name:"Chat",setup(){var a,j,I,M;const{t:r}=v(),{appStore:o}=H(),{authenStore:i}=$(),{chatStore:t}=U(),l=E(""),_=E(),m=i.user.barcode;w(async()=>{t.targetUser&&(await t.getChattingMessages(t.targetUser.employee_id),p())});function p(){let d=_.value;d.scrollTop=d.scrollHeight}async function y(){l.value&&(await t.sendChattingMessage(l.value),l.value="",G(p))}function f(d){return d.map(c=>{if(c.msgtype<2)return e(ce,{key:c.id,msg:c,selfBarCode:m},null);if(c.msgtype<6)return e(de,{key:c.id,msg:c,targetUserName:n.name,selfBarCode:m},null);if(c.msgtype===6)return e("div",{key:c.id,class:`pd_20 ${s.invite}`},[b("\u540D\u7247")])})}let n=R({name:o.isEn?((a=t.targetUser)==null?void 0:a.firstname)+" "+((j=t.targetUser)==null?void 0:j.lastname):""+((I=t.targetUser)==null?void 0:I.lastname_cn)+((M=t.targetUser)==null?void 0:M.firstname_cn)});return()=>{var d,c,S,C,k,x,B;return e("section",{class:s.chatSection,key:(d=t.targetUser)==null?void 0:d.employee_id},[e("div",{class:s.targetUserInfo},[((c=t.targetUser)==null?void 0:c.HeadImageUrl)!=null&&((S=t.targetUser)==null?void 0:S.HeadImageUrl)!=""?e("img",{class:s.avata,src:`${L}${(C=t.targetUser)==null?void 0:C.HeadImageUrl}`},null):e("img",{class:s.avata,src:N},null),e("div",{class:s.info},[e("h4",null,[n.name]),e("div",null,[o.isEn?(k=t.targetUser)==null?void 0:k.company:(x=t.targetUser)==null?void 0:x.company_cn]),e("div",null,[(B=t.targetUser)==null?void 0:B.job_title])])]),e("div",{ref:_,class:s.chatMsgBox},[t.chattingMsgs&&f(t.chattingMsgs)]),e("div",{class:s.sender},[e(T,{type:"text",value:l.value,"onUpdate:value":u=>l.value=u},{suffix:()=>{let u;return e(Y,{style:{backgroundColor:"black",color:"white"},onClick:y},me(u=r("myItb.chat.send"))?u:{default:()=>[u]})}})])])}}}),ge=g({name:"MsgList",setup(){var f;const{t:r}=v(),{appStore:o}=H(),{authenStore:i}=$(),{chatStore:t}=U(),l=(f=i.user)==null?void 0:f.barcode;function _(n){return o.isEn?n.firstname+" "+n.lastname:n.lastname_cn+n.firstname_cn}w(()=>{t.chattingMsgs=t.targetUser=void 0,t.lastMessages?t.getLastMessages():t.refreshMsgList()});function m(n){let a={job_title:n.job_title,employee_id:n.barcode,HeadImageUrl:n.HeadImageUrl,firstname_cn:n.firstname_cn,firstname:n.firstname,lastname_cn:n.lastname_cn,lastname:n.lastname,company:n.company,company_cn:n.company_cn,IsOnline:0};t.chatWith(a)}function p(n){let a=n.last_message;if(a.msgtype===0)return e("span",null,[a.msgcontent]);if(a.msgtype===1)return e("span",null,[r("myItb.messages.reply_message")]);if(a.msgtype>1&&a.msgtype<6)return e("span",null,[r("myItb.messages.invite_message")]);if(a.msgtype===6)return e("span",null,[r("myItb.messages.card_message")])}function y(n){return n.length>0?n.map(a=>e("div",{key:a.barcode,class:s.chatItem,onClick:()=>{m(a)}},[a.HeadImageUrl!=null&&a.HeadImageUrl!=""?e("img",{class:s.avata,src:`${L}${a.HeadImageUrl}`,onClick:()=>{m(a)}},null):e("img",{class:s.avata,src:N,onClick:()=>{m(a)}},null),e("div",{class:s.content},[e("span",{class:s.time},[A(a.last_message.createdatetime,i.minutesOffset,"YYYY-MM-DD")]),e(q,{dot:a.last_message.from_barcode!=l&&a.last_message.status===0},{default:()=>[e("h4",null,[_(a),b(" ")])]}),e("div",{class:s.msg},[p(a)])])])):e(D,{image:D.PRESENTED_IMAGE_SIMPLE},null)}return()=>e("div",{class:s.chatList},[t.lastMessages?y(t.lastMessages):e(O,null,null)])}}),Re=g({name:"ChatSection",setup(){const{t:r}=v(),{chatStore:o}=U();return()=>e("div",{class:"ant-card ant-card-bordered"},[e("div",{class:"ant-card-head",style:"border-bottom-color: #e0e0e0;"},[e("div",{class:"ant-card-head-wrapper"},[e("div",{class:"ant-card-head-title",onClick:()=>{o.chattingMsgs=o.targetUser=void 0,o.viewState=0}},[r("myItb.dockIcons.chat")])])]),e("div",{class:"ant-card-body",style:"padding: 2px;"},[o.viewState===0?e(ge,null,null):e(ue,null,null)])])}});export{Re as default};
