import{M as B}from"./MainSectionHead.dad211bc.js";import{a as j,u as I}from"./index.4fa8ec46.js";import{u as h}from"./CalendarStore.a7e2fe17.js";import{i as k,j as _,F as D,k as H,l as c,e as M,m as f,o as T,p as P,q as w,h as A}from"./ant-design-vue.f71b2c4d.js";import{h as d}from"./moment.29305b8e.js";import{u as Y}from"./vue-i18n.f56f8be1.js";import{s as g}from"./index.module.ac491f04.js";import{P as U,b as $}from"./@ant-design.148651e0.js";import{d as C,c as S,k as e,u as b,i as O,F as V}from"./@vue.b2913f50.js";import"./vue-router.82b024de.js";import"./@rpdg.8b8261fd.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./@ctrl.2e36ce53.js";var z=C({setup(){var o,n;const{t:l}=Y(),{appStore:s}=j(),{calendarStore:m}=h(),i={from:d((o=s.exhibitionDate)==null?void 0:o.beginDate).startOf("day"),to:d((n=s.exhibitionDate)==null?void 0:n.endDate).endOf("day")},v=r=>r<i.from||r>i.to;let a=S({startDate:d(i.from).add(9,"hour"),endDate:d(i.from).add(9,"hour")});function p(){a.endDate=d(a.startDate)}function u(){a.endDate=d(a.startDate).add(1,"hour")}async function y(){let r={IsOnline:0,Type:0,BeginDateTime:a.startDate.format("YYYY-MM-DD HH:mm"),EndDateTime:a.endDate.format("YYYY-MM-DD HH:mm"),WeekValue:""};try{await m.addBlockTime(r)?(f.success(l("common.success")),m.getBlockTime(0)):f.error(l("common.failed"))}catch(t){switch(t.message){case"error_message_01":f.error(l(`calendar.blocktime_errors.${t.message}`));break;default:f.error(t.message)}}}return()=>e(D,null,{default:()=>[e(k,{gutter:20},{default:()=>[e(_,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.start")]),e(D.Item,{name:"startDatetime"},{default:()=>[e(H,{disabledDate:v,value:a.startDate,"onUpdate:value":r=>a.startDate=r,allowClear:!1,onChange:p},null),e(c,{format:"HH:mm","minute-Step":"60",value:a.startDate,"onUpdate:value":r=>a.startDate=r,allowClear:!1,onChange:u},null)]})]}),e(_,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.end")]),e(D.Item,{name:"endDatetime"},{default:()=>[e(H,{disabledDate:v,value:a.endDate,"onUpdate:value":r=>a.endDate=r,allowClear:!1},null),e(c,{value:a.endDate,"onUpdate:value":r=>a.endDate=r,format:"HH:mm",allowClear:!1},null)]})]})]}),e("hr",null,null),e("p",null,[l("calendar.blockTime.descriptionInPhysical")]),e(M,{type:"primary",onClick:y},{default:()=>[e(U,null,null),b(" "),l("calendar.btn_add_block_time")]})]})}});function x(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!O(l)}var E=C({setup(){var u,y;const{t:l}=Y(),{calendarStore:s}=h(),{appStore:m}=j(),i={from:d((u=m.exhibitionDate)==null?void 0:u.onlineBeginDateTime).startOf("day"),to:d((y=m.exhibitionDate)==null?void 0:y.onlineEndDateTime).endOf("day")},v=o=>o<i.from||o>i.to;let a=S({startDate:d(i.from),endDate:d(i.from),startDate2:d(i.from),endDate2:d(i.from),startDate3:d(i.from),endDate3:d(i.from),type:1,weekDay:1,weekDays:d.weekdays().map((o,n)=>({value:n,label:o}))});async function p(){console.log(a.type);let o,n;a.type==1?(o=a.startDate.format("YYYY-MM-DD HH:mm"),n=a.endDate.format("YYYY-MM-DD HH:mm")):a.type==0?(o=a.startDate2.format("YYYY-MM-DD HH:mm"),n=a.startDate2.format("YYYY-MM-DD")+" "+a.endDate2.format("HH:mm")):a.type==2&&(o=a.startDate3.format("YYYY-MM-DD HH:mm"),n=a.endDate3.format("YYYY-MM-DD HH:mm"));let r={IsOnline:1,Type:a.type,BeginDateTime:o,EndDateTime:n,WeekValue:a.type===2?a.weekDay.toString():""};try{await s.addBlockTime(r)?(f.success(l("common.success")),s.getBlockTime(1)):f.error(l("common.failed"))}catch(t){switch(t.message){case"error_message_01":f.error(l(`calendar.blocktime_errors.${t.message}`));break;default:f.error(t.message)}}}return()=>{let o,n,r;return e(D,null,{default:()=>[e(T.Group,{value:a.type,"onUpdate:value":t=>a.type=t,style:"width: 100%;"},{default:()=>[e(k,{gutter:20},{default:()=>[e(_,{span:12},{default:()=>[e("p",{class:g.label},[e(T,{value:1},x(o=l("calendar.blockTime.every_day"))?o:{default:()=>[o]})]),e(D.Item,{name:"startDatetime"},{default:()=>[e(k,null,{default:()=>[e(c,{format:"HH:mm",value:a.startDate,"onUpdate:value":t=>a.startDate=t,allowClear:!1},null),b("\xA0 \xA0"),e(c,{format:"HH:mm",value:a.endDate,"onUpdate:value":t=>a.endDate=t,allowClear:!1},null)]})]})]}),e(_,{span:12},{default:()=>[e("p",{class:g.label},[e(T,{value:2,class:"mg_r_20"},x(n=l("calendar.blockTime.every_week_repeat"))?n:{default:()=>[n]}),e(P,{size:"small",style:"width:100px",value:a.weekDay,"onUpdate:value":t=>a.weekDay=t,options:a.weekDays},null)]),e(D.Item,{name:"endDatetime"},{default:()=>[e(k,null,{default:()=>[e(c,{value:a.startDate3,"onUpdate:value":t=>a.startDate3=t,format:"HH:mm",allowClear:!1},null),b("\xA0 \xA0"),e(c,{value:a.endDate3,"onUpdate:value":t=>a.endDate3=t,format:"HH:mm",allowClear:!1},null)]})]})]})]}),e(k,{gutter:20},{default:()=>[e(_,{span:20},{default:()=>[e("p",{class:g.label},[e(T,{value:0},x(r=l("calendar.blockTime.special_day"))?r:{default:()=>[r]})]),e(D.Item,{name:"startDatetime"},{default:()=>[e(k,null,{default:()=>[e(H,{disabledDate:v,value:a.startDate2,"onUpdate:value":t=>a.startDate2=t,allowClear:!1},null),e(c,{format:"HH:mm",value:a.startDate2,"onUpdate:value":t=>a.startDate2=t,allowClear:!1},null),b("\xA0 \xA0"),e(c,{format:"HH:mm",value:a.endDate2,"onUpdate:value":t=>a.endDate2=t,allowClear:!1},null)]})]})]})]})]}),e("hr",null,null),e(M,{type:"primary",onClick:p},{default:()=>[e(U,null,null),b(" "),l("calendar.btn_add_block_time")]})]})}}});function F(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!O(l)}var ve=C({props:{isOnline:{type:Number,required:!0}},setup(l){var o;const{t:s}=Y(),{calendarStore:m}=h(),{appStore:i}=j(),{authenStore:v}=I(),a=(o=v.user)==null?void 0:o.timeZone[0];let p=S({activeTab:1});u();function u(){m.getBlockTime(p.activeTab)}async function y(n){A.confirm({content:e("div",null,[s("calendar.blockTime.comfirm_title")]),onOk:async()=>{await m.delBlockTime(n)&&u()},okText:s("calendar.blockTime.confirm_okbtn"),onCancel:()=>{},cancelText:s("calendar.blockTime.confirm_cancelbtn")})}return()=>{var r;let n;return e(V,null,[e(B,{redLead:!1},F(n=s("calendar.blockTime.title"))?n:{default:()=>[n]}),e("p",null,[`${s("calendar.time_zone")}: ${a==null?void 0:a.utc} 
                ${i.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`]),e("div",{class:"text_red text_bold",innerHTML:s("calendar.blockTime.description")},null),e("br",null,null),e("div",{class:"bg_white pd_20"},[e(w,{activeKey:p.activeTab,"onUpdate:activeKey":t=>p.activeTab=t,onChange:u},{default:()=>[e(w.TabPane,{key:1,tab:s("calendar.blockTime.tab_vir")},{default:()=>[e(E,null,null)]}),e(w.TabPane,{key:0,tab:s("calendar.blockTime.tab_phy")},{default:()=>[e(z,null,null)]})]})]),(r=m.blockTimeSlots)==null?void 0:r.map(t=>e("div",{class:"bg_white pd_20 mg_tb_20",key:t.id},[e("div",{class:"cursor_hand fl_right",onClick:()=>{y(t.id)}},[e($,null,null)]),e("p",null,[s("calendar.schedule_meeting.my_blocktime")]),e("p",null,[s(`calendar.blockTime.type[${t.type}]`)," ",t.type===2?d.weekdays()[~~t.week_value]:"",b(" "),t.begindate,b(" ~")," ",t.type===0?t.enddate.substr(11,5):t.enddate])]))])}}});export{ve as default};
