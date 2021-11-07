import{C as h,a as S}from"./index.d29970db.js";import{M as c}from"./MainSectionHead.3a39449d.js";import{u as C}from"./MeetingStore.36c00ce9.js";import{p as n}from"./Image.174dcbe6.js";import{J as I}from"./@rpdg.e35df5be.js";import{s as t}from"./index.module.6e348a91.js";import{S as L,e as y}from"./ant-design-vue.2e5ee588.js";import{u as k}from"./vue-i18n.df730e9c.js";import{d as b}from"./vue-router.85e08d32.js";import{d as $,k as e,i as N,u as o,F as O}from"./@vue.f0a33739.js";import{m as w}from"./@ant-design.20fa5911.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";import"./Config.41849c7b.js";const M="_btn_1jr3j_1",U="_deny_1jr3j_4",A="_bannerWrap_1jr3j_9",B="_banner_1jr3j_9",E="_grid4_1jr3j_18",H="_logo_1jr3j_28";var a={btn:M,deny:U,bannerWrap:A,banner:B,grid4:E,logo:H};function l(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!N(r)}var _e=$({props:{id:{type:Number,required:!0},isOnline:{type:Number,required:!0}},setup(r){const j="#FE495B",x="#003587",{t:i}=k(),{meetingStore:v}=C(),{appStore:f}=S(),s=I.get(h);return()=>{let d,m,p,u,g,_;return e(O,null,[e(c,{redLead:!1},l(d=i(`calendar.meeting.${r.isOnline===1?"online_meeting":"offline_meeting"}`))?d:{default:()=>[d]}),r.isOnline===0&&e("div",{class:"gridCols2",style:{gridGap:"2px"}},[e("div",{class:a.logo,style:{backgroundColor:j,height:"240px",backgroundImage:`url(${n(s.e_logoUrl)})`}},null),e("div",{class:a.logo,style:{backgroundColor:x,height:"240px",backgroundImage:`url(${n(s.b_company_logo)})`}},null)]),r.isOnline===1&&e("div",{class:`gridCols2 ${a.bannerWrap}`},[e("div",{class:a.logo,style:{backgroundColor:j,height:"240px",backgroundImage:`url(${n(s.b_company_logo)})`}},null),e("div",{class:`${a.banner} ${a.grid4}`},[e("div",{class:a.logo},[o("1")]),e("div",{class:a.logo},[o("2")]),e("div",{class:a.logo},[o("3")])])]),e("div",{class:"bg_white pd_20 mg_tb_20"},[i("calendar.time_zone"),o(" "),e("br",null,null),e(w,null,null),e("hr",null,null),e(L,{size:"small",class:"pd_t_20"},{default:()=>[e(y,{type:"primary",class:a.btn,onClick:()=>{v.accept(s.id,1)}},l(m=i("calendar.meeting.accept"))?m:{default:()=>[m]}),e(y,{type:"primary",class:`${a.btn} ${a.deny}`,onClick:()=>{v.accept(s.id,-1)}},l(p=i("calendar.meeting.deny"))?p:{default:()=>[p]})]})]),e(c,{redLead:!0},l(u=i("exhibitor.company"))?u:{default:()=>[u]}),e("div",{class:t.contactList},[e("div",{class:t.contactListItem},[e("img",{class:t.avatar,src:n(s.e_logoUrl)},null),e("div",{class:t.profile},[e(b,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[f.isEn?s.e_company:s.e_company_cn])]}),e("div",{class:"text_gray clip_2_line"},[s.e_company_msg])])])]),e(c,{redLead:!0},l(g=i("exhibitor.contact"))?g:{default:()=>[g]}),e("div",{class:t.contactList},[e("div",{class:t.contactListItem},[e("img",{class:t.avatar,src:n(s.e_headimageurl)},null),e("div",{class:t.profile},[e("h4",null,[s.e_firstname,o(" "),s.e_lastname]),e("div",{class:"text_gray"},[f.isEn?s.e_company:s.e_company_cn]),e("div",{class:"text_gray"},[s.e_job_title])])])]),e(c,{redLead:!0},l(_=i("exhibitor.buyer.detail"))?_:{default:()=>[_]}),e("div",{class:"gridCols2 bg_white"},[e("div",{class:t.contactList},[e("div",{class:t.contactListItem},[e("img",{class:t.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:t.profile},[e(b,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[o("name")])]}),e("div",{class:"text_gray"},[o("company name")]),e("div",{class:"text_gray"},[o("job_title")])])])]),e("div",{class:t.contactList},[e("div",{class:t.contactListItem},[e("img",{class:t.avatar,src:"{StaticAssetsServer}{usr.HeadImageUrl}"},null),e("div",{class:t.profile},[e(b,{to:"/exhibitors/{props.barcode}/contact/{usr.employee_id}"},{default:()=>[e("h4",null,[o("name")])]}),e("div",{class:"text_gray"},[o("company name")]),e("div",{class:"text_gray"},[o("job_title")])])])])])])}}});export{_e as default};
