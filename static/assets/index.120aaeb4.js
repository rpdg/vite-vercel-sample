import{c as p,e as C,U as h,b as D,r as H,u as O,S as w,a as L,L as F}from"./index.0bceb754.js";import{u as y}from"./vue-i18n.df730e9c.js";import{d as N}from"./avator_red.2a3a1020.js";import{I as Y,g as I,b as G,B as J,N as E}from"./ant-design-vue.a99caae8.js";import{b as q}from"./BussinessCardStore.2b41328a.js";import{d as f,k as e,i as P,u as U,l as A,o as T,f as W,c as K,n as Q}from"./@vue.f0a33739.js";import{h as R}from"./moment.29305b8e.js";import"./@rpdg.e35df5be.js";import"./vue-router.85e08d32.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";const X="_chatList_adv2z_1",Z="_chatItem_adv2z_1",ee="_avata_adv2z_12",te="_content_adv2z_19",ae="_time_adv2z_23",se="_msg_adv2z_29",ne="_chatSection_adv2z_43",re="_targetUserInfo_adv2z_46",ie="_info_adv2z_57",ce="_chatMsgBox_adv2z_62",oe="_invite_adv2z_70",le="_refused_adv2z_82",de="_fromMe_adv2z_86",ue="_invite_title_adv2z_89",me="_invite_content_adv2z_92",_e="_imgPhoto_adv2z_104",ge="_bubble_adv2z_108",pe="_left_adv2z_122",fe="_right_adv2z_137",ve="_sender_adv2z_153",be="_titlecursor_adv2z_158";var s={chatList:X,chatItem:Z,avata:ee,content:te,time:ae,msg:se,chatSection:ne,targetUserInfo:re,info:ie,chatMsgBox:ce,invite:oe,refused:le,fromMe:de,invite_title:ue,invite_content:me,imgPhoto:_e,bubble:ge,left:pe,right:fe,sender:ve,titlecursor:be};function V(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!P(o)}var he=f({props:{msg:{type:Object,required:!0},targetUserName:String,selfBarCode:String},setup(o){const{t:r}=y(),{chatStore:i}=C(),{msg:t,targetUserName:c,selfBarCode:m}=o;let l=JSON.parse(t.msgcontent);async function g(){await q.accpetCardExchange(t.from_barcode),await i.updateMessageAccept(t.id,1),await i.sendChattingMessage(r("myItb.chat.request_business_card_successfully")),i.getChattingMessages(m),location.reload()}async function v(){await q.denyCardExchange(t.id),await i.updateMessageAccept(t.id,0),i.getChattingMessages(m),location.reload()}return()=>{if(t.from_barcode===o.selfBarCode)return e("div",{key:`${t.id}-${t.scheduleaccept}`,class:`pd_20 ${s.invite}  ${s.fromMe}`},[e("p",{class:s.invite_title},[r("myItb.chat.request_business_card_from_you",{name:c})]),e(Y,{src:p(`Data/BusinessCard/${l.FromBarcode}.jpg`),class:s.imgPhoto},null),e("p",{class:"pd_t_20 text_center"},[r(`myItb.chat.request_business_card_status[${t.scheduleaccept}]`)])]);{let u,a;return e("div",{key:`${t.id}-${t.scheduleaccept}`,class:`pd_20 ${s.invite}`},[e("p",{class:s.invite_title},[r("myItb.chat.request_business_card_to_you",{name:c})]),e(Y,{src:p(`Data/BusinessCard/${l.FromBarcode}.jpg`),class:`bg_white pd_20 ${s.imgPhoto}`},null),t.scheduleaccept===-1&&e("p",{class:"pd_t_20 text_right gridCols2",style:{gridGap:"8px"}},[e(I,{onClick:v,block:!0},V(u=r("common.no"))?u:{default:()=>[u]}),e(I,{onClick:g,type:"primary",block:!0},V(a=r("common.yes"))?a:{default:()=>[a]})]),t.scheduleaccept!=-1&&e("p",{class:"pd_t_20 text_center"},[r(`myItb.chat.request_business_card_status[${t.scheduleaccept}]`)])])}}}}),ye=f({name:"ChattingMessage",props:{msg:{type:Object,required:!0},selfBarCode:{type:String,required:!0}},setup(o){const{msg:r,selfBarCode:i}=o;return()=>e("div",{key:r.id,class:`${s.bubble} ${r.to_barcode===i?s.left:s.right}`},[e("p",null,[r.msgcontent])])}}),Me=f({props:{msg:{type:Object,required:!0},targetUserName:String,selfBarCode:String},setup(o){const{t:r}=y(),{msg:i,targetUserName:t}=o;let c=JSON.parse(i.msgcontent);return c.beginDate=h(c.beginDate,D.minutesOffset),c.endDate=h(c.endDate,D.minutesOffset),()=>i.from_barcode===o.selfBarCode?e("div",{class:`pd_20 ${s.invite} ${s.fromMe}`,key:`${i.id}-${i.scheduleaccept}`,onClick:()=>{H.push(`/calendar/${c.isOnline?"virtual":"physical"}/${c.beginDate.split(" ")[0].replace(/\//g,"-")}`)}},[e("p",{class:s.invite_title},[r("myItb.chat.you_invite_attend"),U(" "),t,U(" "),r("myItb.chat.you_invite_attend2")]),e("div",{class:s.invite_content},[e("img",{src:p(i.from_HeadImageUrl),alt:""},null),e("img",{src:p(i.to_HeadImageUrl),alt:""},null),e("div",{class:"text_gray mg_l_20"},[e("p",{class:"text_12"},[`${c.beginDate.substr(0,10)}`,e("br",null,null),`${c.beginDate.substr(11,5)} ~ ${c.endDate.substr(11,5)}`]),e("p",null,null)])])]):e("div",{class:`pd_20 ${s.invite}`,key:`${i.id}-${i.scheduleaccept}`,onClick:()=>{H.push(`/calendar/${c.isOnline?"virtual":"physical"}/${c.beginDate.split(" ")[0].replace(/\//g,"-")}`)}},[e("p",{class:s.invite_title},[t,U(" "),r("myItb.chat.invite_you_attend")]),e("div",{class:s.invite_content},[e("img",{src:p(i.from_HeadImageUrl),alt:""},null),e("img",{src:p(i.to_HeadImageUrl),alt:""},null),e("div",{class:"text_gray mg_l_20"},[e("p",{class:"text_12"},[`${c.beginDate.substr(0,10)}`,e("br",null,null),`${c.beginDate.substr(11,5)} ~ ${c.endDate.substr(11,5)}`]),e("p",null,null)])])])}});function Ce(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!P(o)}var Ue=f({name:"Chat",setup(){var n,M,j,S;const{t:o}=y(),{appStore:r}=L(),{authenStore:i}=O(),{chatStore:t}=C(),c=A(""),m=A(),l=i.user.barcode;T(async()=>{t.targetUser&&(await t.getChattingMessages(l),t.startLongPullMessages(l),g())}),W(()=>{t.stopLongPullMessages()});function g(){let _=m.value;_.scrollTop=_.scrollHeight}async function v(){c.value&&(await t.sendChattingMessage(c.value),c.value="",Q(g))}function u(_){return _.map(d=>{if(d.msgtype<2)return e(ye,{key:d.id,msg:d,selfBarCode:l},null);if(d.msgtype<6)return e(Me,{key:d.id,msg:d,targetUserName:a.name,selfBarCode:l},null);if(d.msgtype===6)return e(he,{key:d.id,msg:d,targetUserName:a.name,selfBarCode:l},null)})}let a=K({name:r.isEn?((n=t.targetUser)==null?void 0:n.firstname)+" "+((M=t.targetUser)==null?void 0:M.lastname):""+((j=t.targetUser)==null?void 0:j.lastname_cn)+((S=t.targetUser)==null?void 0:S.firstname_cn)});return()=>{var _,d,$,k,B,x,z;return e("section",{class:s.chatSection,key:(_=t.targetUser)==null?void 0:_.employee_id},[e("div",{class:s.targetUserInfo},[((d=t.targetUser)==null?void 0:d.HeadImageUrl)!=null&&(($=t.targetUser)==null?void 0:$.HeadImageUrl)!=""?e("img",{class:s.avata,src:`${w}${(k=t.targetUser)==null?void 0:k.HeadImageUrl}`},null):e("img",{class:s.avata,src:N},null),e("div",{class:s.info},[e("h4",null,[a.name]),e("div",{style:{wordBreak:"break-all"}},[r.isEn?(B=t.targetUser)==null?void 0:B.company:(x=t.targetUser)==null?void 0:x.company_cn]),e("div",null,[(z=t.targetUser)==null?void 0:z.job_title])])]),e("div",{ref:m,class:s.chatMsgBox},[t.chattingMsgs&&u(t.chattingMsgs)]),e("div",{class:s.sender},[e(G,{type:"text",value:c.value,"onUpdate:value":b=>c.value=b},{suffix:()=>{let b;return e(I,{style:{backgroundColor:"black",color:"white"},onClick:v},Ce(b=o("myItb.chat.send"))?b:{default:()=>[b]})}})])])}}}),Ie=f({name:"MsgList",setup(){var u;const{t:o}=y(),{appStore:r}=L(),{authenStore:i}=O(),{chatStore:t}=C(),c=(u=i.user)==null?void 0:u.barcode;function m(a){return r.isEn||a.firstname_cn===""&&a.lastname_cn===""?a.firstname+" "+a.lastname:a.lastname_cn+a.firstname_cn}T(()=>{t.chattingMsgs=t.targetUser=void 0,t.lastMessages?t.getLastMessages():t.refreshMsgList()});function l(a){let n={job_title:a.job_title,employee_id:a.barcode,HeadImageUrl:a.HeadImageUrl,firstname_cn:a.firstname_cn,firstname:a.firstname,lastname_cn:a.lastname_cn,lastname:a.lastname,logoUrl:a.logoUrl,company:a.company,company_cn:a.company_cn,IsOnline:0};t.chatWith(n)}function g(a){let n=a.last_message;if(n.msgtype===0)return e("span",null,[n.msgcontent]);if(n.msgtype===1)return e("span",null,[o("myItb.messages.reply_message")]);if(n.msgtype>1&&n.msgtype<6)return e("span",null,[o("myItb.messages.invite_message")]);if(n.msgtype===6)return e("span",null,[o("myItb.messages.card_message")])}function v(a){return a.length>0?a.sort(function(n,M){return R(h(M.last_message.createdatetime,i.minutesOffset,"YYYY-MM-DD HH:mm:ss")).diff(R(h(n.last_message.createdatetime,i.minutesOffset,"YYYY-MM-DD HH:mm:ss")),"hour")}).map(n=>e("div",{key:n.barcode,class:s.chatItem,onClick:()=>{l(n)}},[n.HeadImageUrl!=null&&n.HeadImageUrl!=""?e("img",{class:s.avata,src:`${w}${n.HeadImageUrl}`,onClick:()=>{l(n)}},null):e("img",{class:s.avata,src:N,onClick:()=>{l(n)}},null),e("div",{class:s.content},[e("span",{class:s.time},[h(n.last_message.createdatetime,i.minutesOffset,"YYYY-MM-DD HH:mm")]),e(J,{dot:n.last_message.from_barcode!=c&&n.last_message.status===0},{default:()=>[e("h4",null,[m(n),U(" ")])]}),e("div",{class:s.msg},[g(n)])])])):e(E,{image:E.PRESENTED_IMAGE_SIMPLE},null)}return()=>e("div",{class:s.chatList},[t.lastMessages?v(t.lastMessages):e(F,null,null)])}}),Xe=f({name:"ChatSection",setup(){const{t:o}=y(),{chatStore:r}=C();return()=>e("div",{class:"ant-card ant-card-bordered"},[e("div",{class:"ant-card-head",style:"border-bottom-color: #e0e0e0;"},[e("div",{class:"ant-card-head-wrapper"},[e("div",{class:`${s.titlecursor} ant-card-head-title`,onClick:()=>{r.chattingMsgs=r.targetUser=void 0,r.viewState=0}},[o("myItb.dockIcons.chat")])])]),e("div",{class:"ant-card-body",style:"padding: 2px;"},[r.viewState===0?e(Ie,null,null):e(Ue,null,null)])])}});export{Xe as default};
