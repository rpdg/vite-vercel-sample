import{M as f}from"./MainSectionHead.3a39449d.js";import{u as j,a as b}from"./index.d29970db.js";import{u as v}from"./CalendarStore.27f4af56.js";import{h as p}from"./moment.29305b8e.js";import{u as g}from"./vue-i18n.df730e9c.js";import{a as M}from"./vue-router.85e08d32.js";import{E as n}from"./Entry.bd35c79b.js";import{d as _,o as y,c as S,j as Y,k as r,i as h,F as D}from"./@vue.f0a33739.js";import"./ant-design-vue.2e5ee588.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./Config.41849c7b.js";import"./MeetingStore.36c00ce9.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function C(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!h(o)}var se=_({props:{},setup(){var l;const{t:o}=g(),d=M(),{appStore:m}=b(),{authenStore:c}=j(),{calendarStore:s}=v(),t=(l=c.user)==null?void 0:l.timeZone[0];y(()=>{if(!s.inited){let a=p("2021-11-01");const e={beginDate:p(a).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:p(a).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(e),s.getPhysicalCalendar(e)}});let u=S({detailMap:s.virtualMapDetail}),i=Y(()=>{var a;return(a=u.detailMap.get(d.params.date))!=null?a:[]});return()=>{let a;return r(D,null,[r(f,{redLead:!1},C(a=o("calendar.virtual_platform_calendar"))?a:{default:()=>[a]}),r("p",{class:"text_red"},[`${o("calendar.time_zone")} : ${t==null?void 0:t.utc} ${m.isEn?t==null?void 0:t.timezone_en:t==null?void 0:t.timezone_cn}`]),r("div",{class:"bg_white pd_20"},[i.value.filter(e=>e.type==="byItb").map(e=>r(n,{detailedMapItem:e},null)),i.value.filter(e=>e.type==="byMe").map(e=>r(n,{detailedMapItem:e},null)),i.value.filter(e=>e.type==="unconfirmed").map(e=>r(n,{detailedMapItem:e},null)),i.value.filter(e=>e.type==="conference").map(e=>r(n,{detailedMapItem:e},null))])])}}});export{se as default};
