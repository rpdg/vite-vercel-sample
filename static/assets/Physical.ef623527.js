import{M as j}from"./MainSectionHead.53603ad0.js";import{u as f,a as b}from"./index.9e180452.js";import{u as g}from"./CalendarStore.0053e5ca.js";import{h as n}from"./moment.29305b8e.js";import{u as v}from"./vue-i18n.1b8a7ba2.js";import{a as _,u as M}from"./vue-router.4425a21e.js";import{E as S}from"./Entry.64286551.js";import{d as h,o as y,c as Y,j as D,k as o,i as C,F as H}from"./@vue.f0a33739.js";import"./ant-design-vue.2e5ee588.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.e0a06ef1.js";import"./Config.41849c7b.js";import"./MeetingStore.233f5fb8.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function x(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}var ne=h({props:{},setup(){var p;const{t}=v(),m=_();M();const{appStore:d}=b(),{authenStore:c}=f(),{calendarStore:s}=g(),e=(p=c.user)==null?void 0:p.timeZone[0];y(()=>{if(!s.inited){let a=n("2021-11-01");const r={beginDate:n(a).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:n(a).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(r),s.getPhysicalCalendar(r)}});let l=Y({detailMap:s.physicalMapDetail}),i=D(()=>l.detailMap.get(m.params.date));return()=>{var r;let a;return o(H,null,[o(j,{redLead:!1},x(a=t("calendar.physical_exhibition_calendar"))?a:{default:()=>[a]}),o("p",{class:"text_red"},[`${t("calendar.time_zone")} : ${e==null?void 0:e.utc} ${d.isEn?e==null?void 0:e.timezone_en:e==null?void 0:e.timezone_cn}`]),o("div",{class:"bg_white pd_20"},[(r=i==null?void 0:i.value)==null?void 0:r.map(u=>o(S,{detailedMapItem:u},null))])])}}});export{ne as default};
