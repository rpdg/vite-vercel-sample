import{d as _,k as e,c as S,o as k,i as B,t as O,z as R,F as w}from"./@vue.fa05379c.js";import{M as v}from"./MainSectionHead.b9e7274a.js";import{u as T,a as H}from"./index.9e11243e.js";import{C as c,u as $}from"./CalendarStore.c48ba767.js";import{B as m,c as P,e as A,f,g as M}from"./ant-design-vue.034afe85.js";import{h as o}from"./moment.29305b8e.js";import{u as D}from"./vue-i18n.0711e616.js";import{u as L}from"./vue-router.8ec3c3d8.js";import{k as E,R as I}from"./@ant-design.8f5596ac.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";var C=_({name:"CalendarBadgeTips",props:{online:{type:Boolean,required:!0}},setup(l){const{t:r}=D();return()=>e("div",{class:"pd_20 gridCols2 text_left"},[e(m,{color:c.Red,text:r("calendar.tips.1")},null),e(m,{color:c.Blue,text:r("calendar.tips.7")},null),e(m,{color:c.Yellow,text:l.online==!0?r("calendar.tips.3"):r("calendar.tips.6")},null),e(m,{color:c.Black,text:l.online==!0?r("calendar.tips.2"):r("calendar.tips.8")},null),e(m,{color:c.Gray,text:l.online==!0?r("calendar.tips.4"):r("calendar.tips.5")},null)])}});function h(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!B(l)}var pe=_({setup(){const{t:l}=D(),{appStore:r}=H(),y=L(),{calendarStore:u}=$();let p=o("2021-11-01"),{authenStore:b}=T(),s=S({tip:"",virtualMoment:o(p)});k(()=>{if(!u.inited){const n={beginDate:o(p).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:o(p).endOf("year").format("YYYY-MM-DD HH:mm:ss")};u.getVirtualCalendar(n),u.getPhysicalCalendar(n)}u.getTextTip(r.isEn).then(n=>{s.tip=n})});function j(n,{current:d}){let t=d.format("YYYY-MM-DD"),i=n?u.virtualMap:u.physicalMap;if(i.has(t))return i.get(t).map(a=>e(m,{color:`${c[a]}`,key:`${n}-${t}-${a}`},null))}function g(n,d){let t=o(d).format("YYYY-MM-DD");y.push(`/calendar/${n?"virtual":"physical"}/${t}`)}function Y(){return!!(b.role&&(b.role=="buyer"||b.role=="exhibition"))}return()=>{let n,d;return e(w,null,[e(v,{redLead:!1},h(n=l("menu.calendar"))?n:{default:()=>[n]}),e(P,{message:s.tip,type:"error"},null),e("br",null,null),O(e("div",{class:"bg_white pd_20 mg_b_20"},[e(A,{type:"primary",onClick:()=>y.push("/calendar/blockTime/0")},h(d=l("calendar.btn_add_block_time"))?d:{default:()=>[d]})]),[[R,Y()]]),e(f,{expandIconPosition:"right",style:{margin:"20px 0"}},{default:()=>[e(f.Panel,{key:"1"},{default:()=>{var t,i;return[e(M,{fullscreen:!0,value:s.virtualMoment,"onUpdate:value":a=>s.virtualMoment=a,validRange:[o((t=r.exhibitionDate)==null?void 0:t.onlineBeginDateTime).startOf("day"),o((i=r.exhibitionDate)==null?void 0:i.onlineEndDateTime).endOf("day")],onSelect:a=>{g(!0,a)}},{headerRender:({value:a,onChange:x})=>e("h3",{class:"text_center"},[e(E,{class:"cursor_hand",style:{visibility:s.virtualMoment.month()<11?"hidden":"visible"},onClick:()=>{x(a.clone().month(10))}},null)," ",o.months()[s.virtualMoment.month()]," ",e(I,{class:"cursor_hand",style:{visibility:s.virtualMoment.month()===11?"hidden":"visible"},onClick:()=>{x(a.clone().month(11))}},null)]),dateCellRender:a=>j(!0,a)}),e(C,{online:!0},null)]},header:()=>{let t;return e(v,{redLead:!0,inner:!0},h(t=l("calendar.virtual_platform_calendar"))?t:{default:()=>[t]})}})]}),e(f,{expandIconPosition:"right"},{default:()=>[e(f.Panel,{key:"2"},{default:()=>{var t,i;return[e(M,{fullscreen:!0,value:p,"onUpdate:value":a=>p=a,validRange:[o((t=r.exhibitionDate)==null?void 0:t.beginDate).startOf("day"),o((i=r.exhibitionDate)==null?void 0:i.endDate).endOf("day")],onSelect:a=>{g(!1,a)}},{headerRender:()=>e("h3",{class:"text_center"},[o.months()[10]]),dateCellRender:a=>j(!1,a)}),e(C,{online:!1},null)]},header:()=>{let t;return e(v,{redLead:!0,inner:!0},h(t=l("calendar.physical_exhibition_calendar"))?t:{default:()=>[t]})}})]})])}}});export{pe as default};
