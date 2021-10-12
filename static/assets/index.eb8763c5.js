import{M as f}from"./MainSectionHead.b9e7274a.js";import{u as _}from"./index.a8543105.js";import{C as d,u as S}from"./CalendarStore.fc31b712.js";import{B as c,c as D,e as m,f as M}from"./ant-design-vue.2cc4281c.js";import{h as l}from"./moment.29305b8e.js";import{u as g}from"./vue-i18n.0711e616.js";import{u as R}from"./vue-router.8ec3c3d8.js";import{d as b,k as t,c as k,o as O,i as B,F as H}from"./@vue.fa05379c.js";import{k as P,R as w}from"./@ant-design.8f5596ac.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";var x=b({name:"CalendarBadgeTips",props:{online:{type:Boolean,required:!0}},setup(o){const{t:s}=g();return()=>t("div",{class:"pd_20 gridCols2 text_left"},[t(c,{color:d.Red,text:s("calendar.tips.1")},null),t(c,{color:d.Blue,text:s("calendar.tips.7")},null),t(c,{color:d.Yellow,text:s("calendar.tips.3")},null),t(c,{color:d.Black,text:s("calendar.tips.2")},null),t(c,{color:d.Gray,text:s("calendar.tips.4")},null)])}});function h(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!B(o)}var se=b({setup(){const{t:o}=g(),{appStore:s}=_(),Y=R(),{calendarStore:i}=S();let u=l("2021-11-01"),r=k({tip:"",virtualMoment:l(u),virtualMap:i.virtualMap,physicalMap:i.physicalMap});O(()=>{if(!i.inited){const a={beginDate:l(u).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:l(u).endOf("year").format("YYYY-MM-DD HH:mm:ss")};i.getVirtualCalendar(a),i.getPhysicalCalendar(a)}i.getTextTip(s.isEn).then(a=>{r.tip=a})});function v(a,{current:e}){var y;let n=e.format("YYYY-MM-DD"),p=a?r.virtualMap:r.physicalMap;if(p.has(n))return(y=p.get(n))==null?void 0:y.map(C=>t(c,{color:`${d[C]}`},null))}function j(a,e){let n=l(e).format("YYYY-MM-DD"),p=a?r.virtualMap:r.physicalMap;(!a||p.has(n))&&Y.push(`/calendar/${a?"virtual":"physical"}/${n}`)}return()=>{let a;return t(H,null,[t(f,{redLead:!1},h(a=o("menu.calendar"))?a:{default:()=>[a]}),t(D,{message:r.tip,type:"error"},null),t(m,{expandIconPosition:"right",style:{margin:"20px 0"},activeKey:"1"},{default:()=>[t(m.Panel,{key:"1"},{default:()=>[t(M,{fullscreen:!0,value:r.virtualMoment,"onUpdate:value":e=>r.virtualMoment=e,validRange:[l("2021/11/01").startOf("month"),l("2021/12/31").endOf("year")],onSelect:e=>{j(!0,e)}},{headerRender:({value:e,onChange:n})=>t("h3",{class:"text_center"},[t(P,{class:"cursor_hand",style:{visibility:r.virtualMoment.month()===10?"hidden":"visible"},onClick:()=>{n(e.clone().month(10))}},null)," ",l.months()[r.virtualMoment.month()]," ",t(w,{class:"cursor_hand",style:{visibility:r.virtualMoment.month()===11?"hidden":"visible"},onClick:()=>{n(e.clone().month(11))}},null)]),dateCellRender:e=>v(!0,e)}),t(x,{online:!0},null)],header:()=>{let e;return t(f,{redLead:!0,inner:!0},h(e=o("calendar.virtual_platform_calendar"))?e:{default:()=>[e]})}})]}),t(m,{expandIconPosition:"right"},{default:()=>[t(m.Panel,{key:"2"},{default:()=>[t(M,{fullscreen:!0,value:u,"onUpdate:value":e=>u=e,validRange:[l("2021/11/24 00:00:00"),l("2021/11/26 23:59:59")],onSelect:e=>{j(!1,e)}},{headerRender:()=>t("h3",{class:"text_center"},[l.months()[10]]),dateCellRender:e=>v(!1,e)}),t(x,{online:!1},null)],header:()=>{let e;return t(f,{redLead:!0,inner:!0},h(e=o("calendar.physical_exhibition_calendar"))?e:{default:()=>[e]})}})]})])}}});export{se as default};
