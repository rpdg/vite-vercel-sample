import{M as f}from"./MainSectionHead.3a39449d.js";import{u as j,a as b}from"./index.816d9490.js";import{u as v}from"./CalendarStore.d099277e.js";import{h as l}from"./moment.29305b8e.js";import{u as M}from"./vue-i18n.df730e9c.js";import{a as g}from"./vue-router.85e08d32.js";import{E as n}from"./Entry.681c18f6.js";import{d as _,o as y,c as S,j as O,k as r,i as Y,F as h}from"./@vue.f0a33739.js";import"./ant-design-vue.f8ac2ba9.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./MeetingStore.48541425.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function D(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!Y(o)}var oe=_({props:{},setup(){var p;const{t:o}=M(),d=g(),{appStore:m}=b(),{authenStore:c}=j(),{calendarStore:s}=v(),t=(p=c.user)==null?void 0:p.timeZone[0];y(()=>{if(!s.inited){let a=l("2021-11-01");const e={beginDate:l(a).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:l(a).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(e),s.getPhysicalCalendar(e)}});let u=S({detailMap:s.virtualMapDetail}),i=O(()=>{var a;return(a=u.detailMap.get(d.params.date))!=null?a:[]});return()=>{let a;return r(h,null,[r(f,{redLead:!1},D(a=o("calendar.virtual_platform_calendar"))?a:{default:()=>[a]}),r("p",{class:"text_red"},[`${o("calendar.time_zone")} : ${t==null?void 0:t.utc} ${m.isEn?t==null?void 0:t.timezone_en:t==null?void 0:t.timezone_cn}`]),r("div",{class:"bg_white pd_20"},[i.value.filter(e=>e.type==="byItb").map(e=>r(n,{detailedMapItem:e,isOnline:1},null)),i.value.filter(e=>e.type==="byMe").map(e=>r(n,{detailedMapItem:e,isOnline:1},null)),i.value.filter(e=>e.type==="unconfirmed").map(e=>r(n,{detailedMapItem:e,isOnline:1},null)),i.value.filter(e=>e.type==="conference").map(e=>r(n,{detailedMapItem:e,isOnline:1},null))])])}}});export{oe as default};
