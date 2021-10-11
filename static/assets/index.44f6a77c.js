import{M as f}from"./MainSectionHead.b9e7274a.js";import{u as C}from"./index.a49591cc.js";import{C as n,u as S}from"./CalendarStore.94048e03.js";import{B as s,c as _,e as u,f as y}from"./ant-design-vue.b491a4ce.js";import{h as i}from"./moment.29305b8e.js";import{u as M}from"./vue-i18n.0711e616.js";import{d as b,k as t,c as D,o as B,i as k,F as H}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var Y=b({name:"CalendarBadgeTips",props:{online:{type:Boolean,required:!0}},setup(r){const{t:o}=M();return()=>t("div",{class:"pd_20 gridCols2 text_left"},[t(s,{color:n.Red,text:o("calendar.tips.1")},null),t(s,{color:n.Blue,text:o("calendar.tips.7")},null),t(s,{color:n.Yellow,text:o("calendar.tips.3")},null),t(s,{color:n.Black,text:o("calendar.tips.2")},null),t(s,{color:n.Gray,text:o("calendar.tips.4")},null)])}});function j(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!k(r)}var re=b({setup(){const{t:r}=M(),{appStore:o}=C(),{calendarStore:d}=S();let p=i("2021/11/01"),l=D({tip:"",month:i(),virtualMap:d.virtualMap,physicalMap:d.physicalMap});B(()=>{const a={beginDate:i(p).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:i(p).endOf("year").format("YYYY-MM-DD HH:mm:ss")};d.getVirtualCalendar(a),d.getPhysicalCalendar(a),d.getTextTip(o.isEn).then(e=>{l.tip=e})});function v(a,{current:e}){var h;let c=e.format("YYYY/MM/DD"),m=a?l.virtualMap:l.physicalMap;if(m.has(c))return(h=m.get(c))==null?void 0:h.map(x=>t(s,{color:`${n[x]}`},null))}function g(a,e){let c=e.format("YYYY/MM/DD");(a?l.virtualMap:l.physicalMap).has(c)&&alert("ok")}return()=>{let a;return t(H,null,[t(f,{redLead:!1},j(a=r("menu.calendar"))?a:{default:()=>[a]}),t(_,{message:l.tip,type:"error"},null),t(u,{expandIconPosition:"right",style:{margin:"20px 0"},activeKey:"1"},{default:()=>[t(u.Panel,{key:"1"},{default:()=>[t(y,{fullscreen:!0,value:l.month,"onUpdate:value":e=>l.month=e,onSelect:e=>{g(!0,e)}},{dateCellRender:e=>v(!0,e)}),t(Y,{online:!0},null)],header:()=>{let e;return t(f,{redLead:!0,inner:!0},j(e=r("calendar.virtual_platform_calendar"))?e:{default:()=>[e]})}})]}),t(u,{expandIconPosition:"right"},{default:()=>[t(u.Panel,{key:"2"},{default:()=>[t(y,{fullscreen:!0,value:p,"onUpdate:value":e=>p=e,validRange:[i("2021/11/24 00:00:00"),i("2021/11/26 23:59:59")],onSelect:e=>{g(!1,e)}},{headerRender:()=>t("div",null,null),dateCellRender:e=>v(!1,e)}),t(Y,{online:!1},null)],header:()=>{let e;return t(f,{redLead:!0,inner:!0},j(e=r("calendar.physical_exhibition_calendar"))?e:{default:()=>[e]})}})]})])}}});export{re as default};
