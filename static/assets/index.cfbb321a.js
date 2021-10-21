import{d as M,k as e,c as w,o as B,i as O,t as R,z as T,F as H}from"./@vue.fa05379c.js";import{M as y}from"./MainSectionHead.b9e7274a.js";import{u as $,a as P}from"./index.d2d4ce4a.js";import{C as m,u as A}from"./CalendarStore.1a1b0cef.js";import{B as p,c as L,e as D,f as b,g as C}from"./ant-design-vue.034afe85.js";import{h as o}from"./moment.29305b8e.js";import{u as Y}from"./vue-i18n.0711e616.js";import{u as E}from"./vue-router.8ec3c3d8.js";import{s as I}from"./index.module.ac491f04.js";import{k as U,R as V}from"./@ant-design.8f5596ac.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";var S=M({name:"CalendarBadgeTips",props:{online:{type:Boolean,required:!0}},setup(n){const{t:a}=Y();return()=>e("div",{class:"pd_20 gridCols2 text_left"},[e(p,{color:m.Red,text:a("calendar.tips.1")},null),e(p,{color:m.Blue,text:a("calendar.tips.7")},null),e(p,{color:m.Yellow,text:n.online==!0?a("calendar.tips.3"):a("calendar.tips.6")},null),e(p,{color:m.Black,text:n.online==!0?a("calendar.tips.2"):a("calendar.tips.8")},null),e(p,{color:m.Gray,text:n.online==!0?a("calendar.tips.4"):a("calendar.tips.5")},null)])}});function h(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!O(n)}var be=M({setup(){const{t:n}=Y(),{appStore:a}=P(),j=E(),{calendarStore:c}=A();let f=o("2021-11-01"),{authenStore:v}=$(),d=w({tip:"",virtualMoment:o(f)});B(()=>{if(!c.inited){const l={beginDate:o(f).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:o(f).endOf("year").format("YYYY-MM-DD HH:mm:ss")};c.getVirtualCalendar(l),c.getPhysicalCalendar(l)}c.getTextTip(a.isEn).then(l=>{d.tip=l})});function g(l,{current:u}){let i=u.format("YYYY-MM-DD"),t=l?c.virtualMap:c.physicalMap;if(t.has(i))return t.get(i).map(s=>e(p,{color:`${m[s]}`,key:`${l}-${i}-${s}`},null))}function _(l,u){let i=o(u).format("YYYY-MM-DD");j.push(`/calendar/${l?"virtual":"physical"}/${i}`)}function k(){return!!(v.role&&(v.role=="buyer"||v.role=="exhibition"))}return()=>{let l,u,i;return e(H,null,[e(y,{redLead:!1},h(l=n("menu.calendar"))?l:{default:()=>[l]}),e(L,{message:d.tip,type:"error"},null),e("br",null,null),R(e("div",{class:"bg_white pd_20 mg_b_20"},[e(D,{type:"primary",onClick:()=>j.push("/calendar/blockTime/0")},h(u=n("calendar.btn_add_block_time"))?u:{default:()=>[u]}),e(D,{class:I.enewie,type:"primary",onClick:()=>window.open("https://lm.enewie.com/meeting")},h(i=n("calendar.btn_add_enewie"))?i:{default:()=>[i]})]),[[T,k()]]),e(b,{expandIconPosition:"right",style:{margin:"20px 0"}},{default:()=>[e(b.Panel,{key:"1"},{default:()=>{var t,s;return[e(C,{fullscreen:!0,value:d.virtualMoment,"onUpdate:value":r=>d.virtualMoment=r,validRange:[o((t=a.exhibitionDate)==null?void 0:t.onlineBeginDateTime).startOf("day"),o((s=a.exhibitionDate)==null?void 0:s.onlineEndDateTime).endOf("day")],onSelect:r=>{_(!0,r)}},{headerRender:({value:r,onChange:x})=>e("h3",{class:"text_center"},[e(U,{class:"cursor_hand",style:{visibility:d.virtualMoment.month()<11?"hidden":"visible"},onClick:()=>{x(r.clone().month(10))}},null)," ",o.months()[d.virtualMoment.month()]," ",e(V,{class:"cursor_hand",style:{visibility:d.virtualMoment.month()===11?"hidden":"visible"},onClick:()=>{x(r.clone().month(11))}},null)]),dateCellRender:r=>g(!0,r)}),e(S,{online:!0},null)]},header:()=>{let t;return e(y,{redLead:!0,inner:!0},h(t=n("calendar.virtual_platform_calendar"))?t:{default:()=>[t]})}})]}),e(b,{expandIconPosition:"right"},{default:()=>[e(b.Panel,{key:"2"},{default:()=>{var t,s;return[e(C,{fullscreen:!0,value:f,"onUpdate:value":r=>f=r,validRange:[o((t=a.exhibitionDate)==null?void 0:t.beginDate).startOf("day"),o((s=a.exhibitionDate)==null?void 0:s.endDate).endOf("day")],onSelect:r=>{_(!1,r)}},{headerRender:()=>e("h3",{class:"text_center"},[o.months()[10]]),dateCellRender:r=>g(!1,r)}),e(S,{online:!1},null)]},header:()=>{let t;return e(y,{redLead:!0,inner:!0},h(t=n("calendar.physical_exhibition_calendar"))?t:{default:()=>[t]})}})]})])}}});export{be as default};
