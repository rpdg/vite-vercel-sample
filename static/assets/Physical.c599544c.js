import{M as j}from"./MainSectionHead.99c217de.js";import{u as f,a as b}from"./index.967d01f1.js";import{u as g}from"./CalendarStore.8086b4e6.js";import{h as n}from"./moment.29305b8e.js";import{u as v}from"./vue-i18n.df730e9c.js";import{a as _,u as M}from"./vue-router.85e08d32.js";import{E as S}from"./Entry.68938170.js";import{d as h,o as y,c as Y,j as D,k as o,i as H,F as x}from"./@vue.f0a33739.js";import"./ant-design-vue.a99caae8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./MeetingStore.08599848.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function C(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}var ie=h({props:{},setup(){var p;const{t}=v(),d=_();M();const{appStore:m}=b(),{authenStore:l}=f(),{calendarStore:s}=g(),e=(p=l.user)==null?void 0:p.timeZone[0];y(()=>{if(!s.inited){let r=n("2021-11-01");const a={beginDate:n(r).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:n(r).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(a),s.getPhysicalCalendar(a)}});let c=Y({detailMap:s.physicalMapDetail}),i=D(()=>c.detailMap.get(d.params.date));return()=>{var a;let r;return o(x,null,[o(j,{redLead:!1},C(r=t("calendar.physical_exhibition_calendar"))?r:{default:()=>[r]}),o("p",{class:"text_red"},[`${t("calendar.time_zone")} : ${e==null?void 0:e.utc} ${m.isEn?e==null?void 0:e.timezone_en:e==null?void 0:e.timezone_cn}`]),o("div",{class:"bg_white pd_20"},[(a=i==null?void 0:i.value)==null?void 0:a.map(u=>o(S,{detailedMapItem:u,isOnline:0},null))])])}}});export{ie as default};
