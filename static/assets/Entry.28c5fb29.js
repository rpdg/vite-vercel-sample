import{d as z,k as t,F as W,i as A,t as F,z as L}from"./@vue.6f7c75f1.js";import{S as r}from"./Config.41849c7b.js";import{u as N,r as R,U as f,a as V}from"./index.54b33833.js";import{C as B}from"./CalendarStore.8764e888.js";import{u as P}from"./MeetingStore.c0f57892.js";import{d as p}from"./avator_red.2a3a1020.js";import{d as v}from"./itb_logo_gray.5050f3d7.js";import{S as m,e as $,h as w,m as c}from"./ant-design-vue.00c2c9f0.js";import{h as M}from"./moment.29305b8e.js";import{u as G}from"./vue-i18n.6a1efd87.js";import{d}from"./vue-router.b758f417.js";const J="_contentWrap_1wu7g_1",K="_content_1wu7g_1",Q="_img_c1_1wu7g_10",X="_c2_1wu7g_21",Z="_img_c2_1wu7g_26",ee="_c4_1wu7g_42",te="_img_c4_1wu7g_49",ie="_logo_1wu7g_65",le="_logotext_1wu7g_70",se="_divline_1wu7g_77",oe="_divline2_1wu7g_83",ne="_btnMeeting_1wu7g_89",ae="_enewie_1wu7g_93",ce="_code_1wu7g_97";var i={contentWrap:J,content:K,img_c1:Q,c2:X,img_c2:Z,c4:ee,img_c4:te,logo:ie,logotext:le,divline:se,divline2:oe,btnMeeting:ne,enewie:ae,code:ce};function I(g){return typeof g=="function"||Object.prototype.toString.call(g)==="[object Object]"&&!A(g)}var xe=z({props:{detailedMapItem:{type:Object,required:!1}},setup(g){const{t:s}=G(),{appStore:u}=V(),{authenStore:_}=N(),{detailedMapItem:a}=g,{meetingStore:h}=P();let x=-1;R.currentRoute.value.fullPath.indexOf("virtual")>=0?x=1:x=0;function k(e){return!e||e.indexOf("http://")===0||e.indexOf("https://")===0?e:`${r}${e.replace(/\\/g,"/")}`}function Y(e,l){let n;return t("div",{style:"width:100%"},[t("div",null,[t(m,{size:50},{default:()=>[t(d,{to:e.list[0].exhibition_barcode.substr(0,1)==="7"?`/exhibitors/${e.list[0].e_parent_barcode}`:`/exhibitors/${e.list[0].exhibition_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.list[0].e_logoUrl!=null&&e.list[0].e_logoUrl!=""?t("img",{src:`${r}${e.list[0].e_logoUrl}`},null):t("img",{src:v},null)])])]}),t("div",{class:i.divline},null),e.list.map((o,b)=>t(d,{to:`/buyer/${o.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[o.b_company_logo!=null&&o.b_company_logo!=""?t("img",{src:`${r}${o.b_company_logo}`},null):t("img",{src:v},null)])])]}))]})]),t("div",null,[t(m,{size:50},{default:()=>[t("div",{class:i.logotext},[u.isEn?e.list[0].e_company:e.list[0].e_company_cn]),t("div",{class:i.divline2},null),e.list.map((o,b)=>t("div",{class:i.logotext},[u.isEn?o.b_company:o.b_company_cn]))]})]),t("p",null,null),t("div",null,[t(m,{size:50},{default:()=>[t(d,{to:e.list[0].exhibition_barcode.substr(0,1)==="7"?`/exhibitors/${e.list[0].e_parent_barcode}/contact/${e.list[0].exhibition_barcode}`:`/exhibitors/${e.list[0].exhibition_barcode}/contact/${e.list[0].exhibition_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2"},[e.list[0].e_headimageurl!=null&&e.list[0].e_headimageurl!=""?t("img",{src:`${r}${e.list[0].e_headimageurl}`},null):t("img",{src:p},null)])])]}),t("div",{class:i.divline},null),e.list.map((o,b)=>t(d,{to:`/buyer/${o.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[o.b_headimageurl!=null&&o.b_headimageurl!=""?t("img",{src:`${r}${o.b_headimageurl}`},null):t("img",{src:p},null)])])]}))]})]),t("div",null,[t(m,{size:50},{default:()=>[t("div",{class:i.logotext},[u.isEn?e.list[0].e_firstname+" "+e.list[0].e_lastname:e.list[0].e_lastname_cn+e.list[0].e_firstname_cn]),t("div",{class:i.divline2},null),e.list.map((o,b)=>t("div",{class:i.logotext},[u.isEn?o.b_firstname+" "+o.b_lastname:o.b_lastname_cn+o.b_firstname_cn]))]})]),t("div",{class:i.btnMeeting},[e.metting_pwd!=null&&e.metting_pwd!=""?t("span",{class:`text_red text_bold ${i.enewie}`},[s("calendar.meeting.meeting_pwd")+" ",e.metting_pwd]):t("span",{class:`text_red text_bold ${i.enewie}`},null),e.metting_pwd!=null&&e.metting_pwd!=""?t("span",{class:`text_red text_bold ${i.enewie}`},[s("calendar.meeting.meeting_pwd")+" ",e.metting_pwd]):t("span",{class:`text_red text_bold ${i.enewie}`},null),l==="byItb"?t($,{type:"primary",class:i.enewie,onClick:()=>E(j(e))},I(n=s("calendar.meeting.delete"))?n:{default:()=>[n]}):t("span",null,null)])])}function S(e){let l=k(e.activity_coverpicture);return t(d,{to:`/Conference/${e.activity_content_id}`},{default:()=>[t("div",{class:i.img_c1,style:{backgroundImage:`url(${l})`}},null)]})}function C(e){var o;let l,n;return console.log(e),t("div",{style:"width:100%"},[t("div",null,[t(m,{size:50},{default:()=>[t(d,{to:e.exhibition_barcode.substr(0,1)==="7"?`/exhibitors/${e.e_parent_barcode}`:`/exhibitors/${e.exhibition_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.e_logoUrl!=null&&e.e_logoUrl!=""?t("img",{src:`${r}${e.e_logoUrl}`},null):t("img",{src:v},null)])])]}),t("div",{class:i.divline},null),e.buyer_barcode.substr(0,1)==="1"||e.buyer_barcode.substr(0,1)==="4"||e.buyer_barcode.substr(0,1)==="7"?t(d,{to:e.buyer_barcode.substr(0,1)==="7"?`/exhibitors/${e.b_parent_barcode}`:`/exhibitors/${e.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.b_company_logo!=null&&e.b_company_logo!=""?t("img",{src:`${r}${e.b_company_logo}`},null):t("img",{src:v},null)])])]}):t(d,{to:`/buyer/${e.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.b_company_logo!=null&&e.b_company_logo!=""?t("img",{src:`${r}${e.b_company_logo}`},null):t("img",{src:v},null)])])]})]})]),t("div",null,[t(m,{size:50},{default:()=>[t("div",{class:i.logotext},[u.isEn?e.e_company:e.e_company_cn]),t("div",{class:i.divline2},null),t("div",{class:i.logotext},[u.isEn?e.b_company:e.b_company_cn])]})]),t("p",null,null),t("div",null,[t(m,{size:50},{default:()=>[t(d,{to:e.exhibition_barcode.substr(0,1)==="7"?`/exhibitors/${e.e_parent_barcode}/contact/${e.exhibition_barcode}`:`/exhibitors/${e.exhibition_barcode}/contact/${e.exhibition_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2"},[e.e_headimageurl!=null&&e.e_headimageurl!=""?t("img",{src:`${r}${e.e_headimageurl}`},null):t("img",{src:p},null)])])]}),t("div",{class:i.divline},null),e.buyer_barcode.substr(0,1)==="1"||e.buyer_barcode.substr(0,1)==="4"||e.buyer_barcode.substr(0,1)==="7"?t(d,{to:e.buyer_barcode.substr(0,1)==="7"?`/exhibitors/${e.b_parent_barcode}`:`/exhibitors/${e.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.b_headimageurl!=null&&e.b_headimageurl!=""?t("img",{src:`${r}${e.b_headimageurl}`},null):t("img",{src:p},null)])])]}):t(d,{to:`/buyer/${e.buyer_barcode}`},{default:()=>[t("div",{class:i.logo},[t("div",{class:"squareItem2 "},[e.b_headimageurl!=null&&e.b_headimageurl!=""?t("img",{src:`${r}${e.b_headimageurl}`},null):t("img",{src:p},null)])])]})]})]),t("div",null,[t(m,{size:50},{default:()=>[t("div",{class:i.logotext},[u.isEn?e.e_firstname+" "+e.e_lastname:e.e_lastname_cn+e.e_firstname_cn]),t("div",{class:i.divline2},null),t("div",{class:i.logotext},[u.isEn?e.b_firstname+" "+e.b_lastname:e.b_lastname_cn+e.b_firstname_cn])]})]),F(t("div",{class:i.btnMeeting},[t($,{type:"primary",class:i.enewie,onClick:()=>y(e.id,e.begin_datetime)},I(l=s("calendar.meeting.accept"))?l:{default:()=>[l]}),t($,{class:i.enewie,onClick:()=>U(e.id)},I(n=s("calendar.meeting.deny"))?n:{default:()=>[n]})]),[[L,((o=_.user)==null?void 0:o.barcode)!==e.initiator_barcode]])])}function j(e){var n;let l=0;return e.list[0].exhibition_barcode===((n=_.user)==null?void 0:n.barcode)?Number(e.id):(e.list.map(o=>{var b;o.buyer_barcode===((b=_.user)==null?void 0:b.barcode)&&(l=Number(o.id))}),l)}function D(e){if(e.type==="byItb"||e.type==="byMe"){let l=e.entry;return Y(l,e.type)}else if(e.type==="conference"){let l=e.entry;return S(l)}else{let l=e.entry;return C(l)}}function O(e){return t("div",{class:i.content},[e.metting_title])}function H(e){return t("div",{class:i.content},[t("b",null,[e.activity_title]),t("br",null,null),e.actitivity_content_title,t("br",null,null),e.location])}function T(e){}function q(e){if(e.type==="byItb"||e.type==="byMe"){let l=e.entry;return O(l)}else if(e.type==="conference"){let l=e.entry;return H(l)}else return e.entry,T()}function E(e){w.confirm({content:t("div",{innerHTML:s("calendar.meeting.comfirm_title4")+"<br/>"+s("calendar.meeting.comfirm_title")},null),onOk:async()=>{try{await h.deleteMeeting(e,x)?(c.success(s("common.success")),location.reload()):c.error(s("common.failed"))}catch(l){switch(l.message){case"error_msg_01":case"error_msg_02":case"error_msg_03":c.error(s(`calendar.delete_meeting_errors.${l.message}`));break;default:c.error(l.message)}}},okText:s("calendar.blockTime.confirm_okbtn"),onCancel:()=>{},cancelText:s("calendar.blockTime.confirm_cancelbtn")})}function U(e){w.confirm({content:t("div",null,[s("calendar.meeting.comfirm_title2")]),onOk:async()=>{try{let l=-1;await h.accept(e,l)?(c.success(s("common.success")),location.reload()):c.error(s("common.failed"))}catch(l){switch(l.message){case"error_msg_001":c.error(s(`calendar.deny_meeting_errors.${l.message}`));break;default:c.error(l.message)}}},okText:s("calendar.blockTime.confirm_okbtn"),onCancel:()=>{},cancelText:s("calendar.blockTime.confirm_cancelbtn")})}function y(e,l){if(M(f(l,_.minutesOffset,"YYYY-MM-DD HH:mm:ss")).diff(Date.now(),"hour")<=4){c.info(s("calendar.meeting.comfirm_title5"));return}else w.confirm({content:t("div",null,[s("calendar.meeting.comfirm_title3")]),onOk:async()=>{try{let n=1;await h.accept(e,n)?(c.success(s("common.success")),location.reload()):c.error(s("common.failed"))}catch(n){switch(n.message){case"error_msg_001":c.error(s(`calendar.deny_meeting_errors.${n.message}`));break;default:c.error(n.message)}}},okText:s("calendar.blockTime.confirm_okbtn"),onCancel:()=>{},cancelText:s("calendar.blockTime.confirm_cancelbtn")})}return()=>t(W,null,[a&&t("div",{class:"pd_20"},[t("div",{class:"gridCols2"},[t("div",{class:"text_left",style:{color:B[a.color],fontWeight:600}},[s(`calendar.colors_map.${a.color}`)]),t("div",{class:"text_right"},[a.type==="unconfirmed"?f(a.entry.begin_datetime,_.minutesOffset,"YYYY-MM-DD HH:mm:ss")+" - "+f(a.entry.end_datetime,_.minutesOffset,"YYYY-MM-DD HH:mm:ss"):a.type==="conference"?M(a.entry.actitivity_content_begindate).format("YYYY-MM-DD")+" "+a.entry.actitivity_content_time:f(a.entry.begindate,_.minutesOffset,"YYYY-MM-DD HH:mm:ss")+" - "+f(a.entry.enddate,_.minutesOffset,"YYYY-MM-DD HH:mm:ss")])]),t("div",{class:`pd_tb_20 ${i.contentWrap}`},[D(a),q(a)]),t("hr",null,null)])])}});export{xe as E};
