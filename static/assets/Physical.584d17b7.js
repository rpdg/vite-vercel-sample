import{M as j}from"./MainSectionHead.dad211bc.js";import{u as f,a as b}from"./index.1d3976e6.js";import{u as g}from"./CalendarStore.90e40c45.js";import{h as n}from"./moment.29305b8e.js";import{u as v}from"./vue-i18n.f56f8be1.js";import{a as _,u as M}from"./vue-router.82b024de.js";import{E as S}from"./Entry.ed189d50.js";import{d as h,o as y,c as Y,j as D,k as a,i as C,F as H}from"./@vue.b2913f50.js";import"./ant-design-vue.3c113ab5.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.838dcc22.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.8b8261fd.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./Config.41849c7b.js";import"./MeetingStore.6afc2655.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function x(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}var ne=h({props:{},setup(){var d;const{t}=v(),p=_();M();const{appStore:m}=b(),{authenStore:c}=f(),{calendarStore:s}=g(),e=(d=c.user)==null?void 0:d.timeZone[0];y(()=>{if(!s.inited){let r=n("2021-11-01");const o={beginDate:n(r).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:n(r).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(o),s.getPhysicalCalendar(o)}});let l=Y({detailMap:s.physicalMapDetail}),i=D(()=>l.detailMap.get(p.params.date));return()=>{var o;let r;return a(H,null,[a(j,{redLead:!1},x(r=t("calendar.physical_exhibition_calendar"))?r:{default:()=>[r]}),a("p",{class:"text_red"},[`${t("calendar.time_zone")} : ${e==null?void 0:e.utc} ${m.isEn?e==null?void 0:e.timezone_en:e==null?void 0:e.timezone_cn}`]),a("div",{class:"bg_white pd_20"},[(o=i==null?void 0:i.value)==null?void 0:o.map(u=>a(S,{detailedMapItem:u},null))])])}}});export{ne as default};
