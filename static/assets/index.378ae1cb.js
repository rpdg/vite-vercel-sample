import{d as _,k as e,c as B,l as O,o as R,i as $,t as M,z as D,F as H}from"./@vue.f0a33739.js";import{M as b}from"./MainSectionHead.3a39449d.js";import{u as T,a as K}from"./index.816d9490.js";import{C as c,u as P}from"./CalendarStore.d099277e.js";import{B as m,c as U,e as A,f as h,g as C}from"./ant-design-vue.f8ac2ba9.js";import{h as i}from"./moment.29305b8e.js";import{u as Y}from"./vue-i18n.df730e9c.js";import{u as L}from"./vue-router.85e08d32.js";import{s as E}from"./index.module.ac491f04.js";import{k as I,R as V}from"./@ant-design.a109b705.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";var S=_({name:"CalendarBadgeTips",props:{online:{type:Boolean,required:!0}},setup(l){const{t:r}=Y();return()=>e("div",{class:"pd_20 gridCols2 text_left"},[e(m,{color:c.Red,text:r("calendar.tips.1")},null),e(m,{color:c.Blue,text:r("calendar.tips.7")},null),e(m,{color:c.Yellow,text:l.online==!0?r("calendar.tips.3"):r("calendar.tips.6")},null),e(m,{color:c.Black,text:l.online==!0?r("calendar.tips.2"):r("calendar.tips.8")},null),e(m,{color:c.Gray,text:l.online==!0?r("calendar.tips.4"):r("calendar.tips.5")},null)])}});function y(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!$(l)}var be=_({setup(){const{t:l}=Y(),{appStore:r}=K(),w=L(),{calendarStore:u}=P();let p=i("2021-11-01"),{authenStore:f}=T(),s=B({tip:"",virtualMoment:i(p)});const v=O(["1"]);R(()=>{if(!u.inited){const n={beginDate:i(p).startOf("year").format("YYYY-MM-DD HH:mm:ss"),endDate:i(p).endOf("year").format("YYYY-MM-DD HH:mm:ss")};u.getVirtualCalendar(n),u.getPhysicalCalendar(n)}u.getTextTip(r.isEn).then(n=>{s.tip=n})});function j(n,{current:d}){let t=d.format("YYYY-MM-DD"),o=n?u.virtualMap:u.physicalMap;if(o.has(t))return o.get(t).map(a=>e(m,{color:`${c[a]}`,key:`${n}-${t}-${a}`},null))}function g(n,d){let t=i(d).format("YYYY-MM-DD");w.push(`/calendar/${n?"virtual":"physical"}/${t}`)}function k(){return!!(f.role&&(f.role=="buyer"||f.role=="exhibition"))}return()=>{let n,d;return e(H,null,[e(b,{redLead:!1},y(n=l("menu.calendar"))?n:{default:()=>[n]}),e(U,{message:s.tip,type:"error"},null),e("br",null,null),M(e("div",{class:"bg_white pd_20 mg_b_20"},[e(A,{class:E.enewie,type:"primary",onClick:()=>{var t;return window.open(`https://lm.enewie.com/meeting?user=${(t=f.user)==null?void 0:t.email}`)}},y(d=l("calendar.btn_add_enewie"))?d:{default:()=>[d]})]),[[D,k()]]),e(h,{expandIconPosition:"right",style:{margin:"20px 0"},activeKey:v.value,"onUpdate:activeKey":t=>v.value=t},{default:()=>[e(h.Panel,{key:"1"},{default:()=>{var t,o;return[e(C,{fullscreen:!0,value:s.virtualMoment,"onUpdate:value":a=>s.virtualMoment=a,validRange:[i((t=r.exhibitionDate)==null?void 0:t.onlineBeginDateTime).startOf("day"),i((o=r.exhibitionDate)==null?void 0:o.onlineEndDateTime).endOf("day")],onSelect:a=>{g(!0,a)}},{headerRender:({value:a,onChange:x})=>e("h3",{class:"text_center"},[e(I,{class:"cursor_hand",style:{visibility:s.virtualMoment.month()<11?"hidden":"visible"},onClick:()=>{x(a.clone().month(10))}},null)," ",i.months()[s.virtualMoment.month()]," ",e(V,{class:"cursor_hand",style:{visibility:s.virtualMoment.month()===11?"hidden":"visible"},onClick:()=>{x(a.clone().month(11))}},null)]),dateCellRender:a=>j(!0,a)}),e(S,{online:!0},null)]},header:()=>{let t;return e(b,{redLead:!0,inner:!0},y(t=l("calendar.virtual_platform_calendar"))?t:{default:()=>[t]})}})]}),M(e(h,{expandIconPosition:"right",activeKey:v.value,"onUpdate:activeKey":t=>v.value=t},{default:()=>[e(h.Panel,{key:"2"},{default:()=>{var t,o;return[e(C,{fullscreen:!0,value:p,"onUpdate:value":a=>p=a,validRange:[i((t=r.exhibitionDate)==null?void 0:t.beginDate).startOf("day"),i((o=r.exhibitionDate)==null?void 0:o.endDate).endOf("day")],onSelect:a=>{g(!1,a)}},{headerRender:()=>e("h3",{class:"text_center"},[i.months()[10]]),dateCellRender:a=>j(!1,a)}),e(S,{online:!1},null)]},header:()=>{let t;return e(b,{redLead:!0,inner:!0},y(t=l("calendar.physical_exhibition_calendar"))?t:{default:()=>[t]})}})]}),[[D,!1]])])}}});export{be as default};
