import{M as f}from"./MainSectionHead.713b3d1f.js";import{u as j,a as b}from"./index.fb345625.js";import{u as g}from"./CalendarStore.7b206b87.js";import{h as n}from"./moment.29305b8e.js";import{u as v}from"./vue-i18n.1e3f796f.js";import{a as _,u as M}from"./vue-router.b7316d96.js";import{E as S}from"./Entry.3157b1f5.js";import{d as h,o as y,c as Y,j as D,k as o,i as H,F as x}from"./@vue.ca0c2fb5.js";import"./ant-design-vue.fcf1ac88.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.45c2fd2e.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.9741c2f9.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.08638ec1.js";import"./MeetingStore.58327b04.js";import"./avator_red.2a3a1020.js";import"./itb_logo_gray.5050f3d7.js";function C(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}var ie=h({props:{},setup(){var p;const{t}=v(),m=_();M();const{appStore:c}=b(),{authenStore:d}=j(),{calendarStore:s}=g(),e=(p=d.user)==null?void 0:p.timeZone[0];y(()=>{if(!s.inited){let r=n("2021-11-01");const a={beginDate:n(r).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:n(r).endOf("year").format("YYYY-MM-DD HH:mm:ss")};s.getVirtualCalendar(a),s.getPhysicalCalendar(a)}});let l=Y({detailMap:s.physicalMapDetail}),i=D(()=>l.detailMap.get(m.params.date));return()=>{var a;let r;return o(x,null,[o(f,{redLead:!1},C(r=t("calendar.physical_exhibition_calendar"))?r:{default:()=>[r]}),o("p",{class:"text_red"},[`${t("calendar.time_zone")} : ${e==null?void 0:e.utc} ${c.isEn?e==null?void 0:e.timezone_en:e==null?void 0:e.timezone_cn}`]),o("div",{class:"bg_white pd_20"},[(a=i==null?void 0:i.value)==null?void 0:a.map(u=>o(S,{detailedMapItem:u,isOnline:0},null))])])}}});export{ie as default};
