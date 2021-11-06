import{u as W,M as X,R as p,S as f,a as Z,r as ee}from"./index.f988d874.js";import{M as S}from"./MainSectionHead.3a39449d.js";import{u as ae}from"./CalendarStore.4e4537de.js";import{J as te}from"./@rpdg.e35df5be.js";import{F as c,i as J,j as g,I as P,k as q,l as T,e as se,m as _}from"./ant-design-vue.84ff5d3b.js";import{h as i}from"./moment.29305b8e.js";import{u as re}from"./vue-i18n.df730e9c.js";import{s as u}from"./index.module.6e348a91.js";import{s as b}from"./index.module.ac491f04.js";import{d as h}from"./avator_red.2a3a1020.js";import{d as le,c as ne,w as oe,k as e,i as de,u as ie,F as ue}from"./@vue.f0a33739.js";import{m as me}from"./@ant-design.a109b705.js";import"./vue-router.85e08d32.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";function j(m){return typeof m=="function"||Object.prototype.toString.call(m)==="[object Object]"&&!de(m)}var Le=le({props:{isOnline:{type:Number,required:!0}},name:"Schedule",setup(m){var E,x,C;const{t:l}=re(),{appStore:n}=Z(),{authenStore:t}=W(),{calendarStore:K}=ae(),a=(E=t.user)==null?void 0:E.timeZone[0],{isOnline:H}=m,s=te.get(X),w={from:i((x=n.exhibitionDate)==null?void 0:x.onlineBeginDateTime).startOf("day"),to:i((C=n.exhibitionDate)==null?void 0:C.onlineEndDateTime).endOf("day")},v=i().startOf("day").add(1,"day");let r=ne({topic:l("calendar.schedule_meeting.topic_text",{a:n.isEn?s.company:s.company_cn,b:n.isEn?s.company:s.company_cn}),startDate:v.diff(i(w.from),"day")>=0?v:i(w.from).add(1,"day"),endDate:v,warning:!1,showChooser:!1,destination:null,product:null});U();function U(){r.endDate=i(r.startDate).add(30,"minute")}oe(()=>r.startDate,U);async function Q(){try{await K.addSchedule({IsOnline:H,ToBarcode:s.employee_id,BeginDateTime:r.startDate.format("YYYY-MM-DD HH:mm:00"),EndDateTime:r.endDate.format("YYYY-MM-DD HH:mm:00")})?(_.success(l("common.success")),ee.push("/calendar")):_.error(l("common.failed"))}catch(o){switch(o.message){case"message_error_01":case"message_error_02":case"message_error_03":case"error_msg_001":case"error_msg_002":_.error(l(`calendar.invite_errors.${o.message}`));break;default:_.error(o.message)}}}return()=>{var Y,M,N,O,k,$,z,A,R,B,F,L,V,G;let o,D,y,I;return e(ue,null,[e(S,{redLead:!1},j(o=l("calendar.schedule_meeting.title"))?o:{default:()=>[o]}),e("div",{class:"pd_20 bg_white"},[e(c,null,{default:()=>[H===1&&e(J,{gutter:20},{default:()=>[e(g,{span:12},{default:()=>[e("span",{class:b.label},[l("calendar.schedule_meeting.topic")]),e(c.Item,null,{default:()=>[e(P,{type:"text",disabled:!0,value:r.topic},null)]})]}),e(g,{span:12},{default:()=>[e("span",{class:b.label},[l("calendar.schedule_meeting.my_time_zone")]),e(c.Item,null,{default:()=>[e(P,{disabled:!0,type:"text",value:`${a==null?void 0:a.utc} ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`},null)]})]})]}),e(J,{gutter:20},{default:()=>[e(g,{span:12},{default:()=>[e("span",{class:b.label},[l("calendar.schedule_meeting.start")]),e(c.Item,{name:"startDatetime"},{default:()=>[e(q,{value:r.startDate,"onUpdate:value":d=>r.startDate=d,allowClear:!1},null),e(T,{format:"HH:mm",value:r.startDate,"onUpdate:value":d=>r.startDate=d,minuteStep:30,allowClear:!1},null)]})]}),e(g,{span:12},{default:()=>[e("span",{class:b.label},[l("calendar.schedule_meeting.end")]),e(c.Item,{name:"endDatetime"},{default:()=>[e(q,{value:r.endDate,"onUpdate:value":d=>r.endDate=d,disabled:!0},null),e(T,{value:r.endDate,"onUpdate:value":d=>r.endDate=d,format:"HH:mm",disabled:!0},null)]})]})]}),e("hr",null,null),e("p",null,[l("calendar.time_zone")," ",`(${a==null?void 0:a.utc}) ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`]),e("p",null,[e(me,null,null),ie(" "),r.startDate.format("YYYY-MM-DD HH:mm")])]})]),e(S,null,j(D=l("calendar.schedule_meeting.contactor"))?D:{default:()=>[D]}),e("div",{class:`pd_20 bg_white  ${u.contactListItem}`},[e("img",{src:((Y=t.user)==null?void 0:Y.roleName)===p.buyer?s.HeadImageUrl!=null&&s.HeadImageUrl!=""?f+s.HeadImageUrl:h:((M=t.user)==null?void 0:M.headImageUrl)!=null&&((N=t.user)==null?void 0:N.headImageUrl)!=""?f+((O=t.user)==null?void 0:O.headImageUrl):h,class:u.avatar},null),e("div",{class:u.profile},[((k=t.user)==null?void 0:k.roleName)===p.buyer?n.isEn?s.company:s.company_cn:n.isEn?($=t.user)==null?void 0:$.company:(z=t.user)==null?void 0:z.companyCn])]),e(S,null,j(y=l("calendar.schedule_meeting.buyer"))?y:{default:()=>[y]}),e("div",{class:`pd_20 bg_white  ${u.contactListItem}`},[e("img",{src:((A=t.user)==null?void 0:A.roleName)===p.buyer?((R=t.user)==null?void 0:R.headImageUrl)!=null&&((B=t.user)==null?void 0:B.headImageUrl)!=""?f+((F=t.user)==null?void 0:F.headImageUrl):h:s.HeadImageUrl!=null&&s.HeadImageUrl!=""?f+s.HeadImageUrl:h,class:u.avatar},null),e("div",{class:u.profile},[((L=t.user)==null?void 0:L.roleName)===p.buyer?n.isEn?(V=t.user)==null?void 0:V.company:(G=t.user)==null?void 0:G.companyCn:n.isEn?s.company:s.company_cn])]),e("p",{class:"pd_t_20"},[e(se,{type:"primary",onClick:Q,style:{width:"150px"}},j(I=l("calendar.schedule_meeting.schedule"))?I:{default:()=>[I]})])])}}});export{Le as default};
