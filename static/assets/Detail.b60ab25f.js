import{M as o}from"./MainSectionHead.b9e7274a.js";import{s as a}from"./index.module.6e348a91.js";import{S as _,e as v}from"./ant-design-vue.034afe85.js";import{u as g}from"./vue-i18n.0711e616.js";import{d as n}from"./vue-router.8ec3c3d8.js";import{d as y,k as e,i as f,u as t,F as j}from"./@vue.fa05379c.js";import{m as h}from"./@ant-design.8f5596ac.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";const x="_btn_1k4ij_1",S="_deny_1k4ij_4",L="_bannerWrap_1k4ij_9",k="_banner_1k4ij_9",C="_grid4_1k4ij_18";var i={btn:x,deny:S,bannerWrap:L,banner:k,grid4:C};function l(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!f(s)}var X=y({props:{id:{type:Number,required:!0},isOnline:{type:Number,required:!0}},setup(s){const{t:r}=g();return()=>{let c,d,m,u,p,b;return e(j,null,[e(o,{redLead:!1},l(c=r(`calendar.meeting.${s.isOnline===1?"online_meeting":"offline_meeting"}`))?c:{default:()=>[c]}),s.isOnline===0&&e("div",{class:"gridCols2",style:{gridGap:"2px"}},[e("div",{style:{backgroundColor:"red",height:"240px"}},[t("a")]),e("div",{style:{backgroundColor:"blue",height:"240px"}},[t("a")])]),s.isOnline===1&&e("div",{class:`gridCols2 ${i.bannerWrap}`},[e("div",{style:{backgroundColor:"red",height:"240px"}},[t("a")]),e("div",{class:`${i.banner} ${i.grid4}`},[e("div",null,[t("1")]),e("div",null,[t("2")]),e("div",null,[t("3")])])]),e("div",{class:"bg_white pd_20 mg_tb_20"},[r("calendar.time_zone"),t(" "),e("br",null,null),e(h,null,null),e("hr",null,null),e(_,{size:"small",class:"pd_t_20"},{default:()=>[e(v,{type:"primary",class:i.btn},l(d=r("calendar.meeting.accept"))?d:{default:()=>[d]}),e(v,{type:"primary",class:`${i.btn} ${i.deny}`},l(m=r("calendar.meeting.deny"))?m:{default:()=>[m]})]})]),e(o,{redLead:!0},l(u=r("exhibitor.company"))?u:{default:()=>[u]}),e("div",{class:a.contactList},[e("div",{class:a.contactListItem},[e("img",{class:a.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:a.profile},[e(n,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[t("company name")])]}),e("div",{class:"text_gray"},[t("desc")])])])]),e(o,{redLead:!0},l(p=r("exhibitor.contact"))?p:{default:()=>[p]}),e("div",{class:a.contactList},[e("div",{class:a.contactListItem},[e("img",{class:a.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:a.profile},[e(n,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[t("name")])]}),e("div",{class:"text_gray"},[t("company name")]),e("div",{class:"text_gray"},[t("job_title")])])])]),e(o,{redLead:!0},l(b=r("exhibitor.buyer.detail"))?b:{default:()=>[b]}),e("div",{class:"gridCols2 bg_white"},[e("div",{class:a.contactList},[e("div",{class:a.contactListItem},[e("img",{class:a.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:a.profile},[e(n,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[t("name")])]}),e("div",{class:"text_gray"},[t("company name")]),e("div",{class:"text_gray"},[t("job_title")])])])]),e("div",{class:a.contactList},[e("div",{class:a.contactListItem},[e("img",{class:a.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:a.profile},[e(n,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[t("name")])]}),e("div",{class:"text_gray"},[t("company name")]),e("div",{class:"text_gray"},[t("job_title")])])])])])])}}});export{X as default};
