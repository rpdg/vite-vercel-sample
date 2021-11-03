import{J as q,M as K,u as Q,R as m,a as T,r as W}from"./index.3be6f241.js";import{M as y}from"./MainSectionHead.b9e7274a.js";import{u as X}from"./CalendarStore.7351ce93.js";import{F as u,R as B,h as p,I as L,i as V,T as G,e as Z,m as f}from"./ant-design-vue.f84da452.js";import{h as I}from"./moment.29305b8e.js";import{u as ee}from"./vue-i18n.0711e616.js";import{s as i}from"./index.module.6e348a91.js";import{s as g}from"./index.module.ac491f04.js";import{S as _}from"./Config.87ac60ee.js";import{d as h}from"./avator_red.ac077e2d.js";import{d as ae,c as te,w as se,k as e,i as re,u as le,F as ne}from"./@vue.fa05379c.js";import{m as oe}from"./@ant-design.2067dcee.js";import"./vue-router.8ec3c3d8.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";function j(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!re(c)}var Re=ae({props:{isOnline:{type:Number,required:!0}},name:"Schedule",setup(c){var w;const{isOnline:S}=c,t=q.get(K);t||alert("error");const{t:l}=ee(),{appStore:n}=T(),{authenStore:s}=Q(),{calendarStore:J}=X(),a=(w=s.user)==null?void 0:w.timeZone[0];console.log(t),console.log(s.user);let r=te({topic:l("calendar.schedule_meeting.topic_text",{a:n.isEn?t.company:t.company_cn,b:n.isEn?t.company:t.company_cn}),startDate:I(),endDate:I(),warning:!1,showChooser:!1,destination:null,product:null});H();function H(){r.endDate=I(r.startDate).add(30,"minute")}se(()=>r.startDate,H);async function P(){try{await J.addSchedule({IsOnline:S,ToBarcode:t.employee_id,BeginDateTime:r.startDate.format("YYYY-MM-DD HH:mm:00"),EndDateTime:r.endDate.format("YYYY-MM-DD HH:mm:00")})?(f.success(l("common.success")),W.push("/recommends")):f.error(l("common.failed"))}catch(o){switch(o.message){case"message_error_01":case"message_error_02":case"message_error_03":case"error_msg_001":f.error(l(`calendar.invite_errors[${o.message}]`));break;default:f.error(o.message)}}}return()=>{var U,C,E,Y,x,M,N,$,k,z,O,R,A,F;let o,b,v,D;return e(ne,null,[e(y,{redLead:!1},j(o=l("calendar.schedule_meeting.title"))?o:{default:()=>[o]}),e("div",{class:"pd_20 bg_white"},[e(u,null,{default:()=>[S===1&&e(B,{gutter:20},{default:()=>[e(p,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.topic")]),e(u.Item,null,{default:()=>[e(L,{type:"text",disabled:!0,value:r.topic},null)]})]}),e(p,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.my_time_zone")]),e(u.Item,null,{default:()=>[e(L,{disabled:!0,type:"text",value:`${a==null?void 0:a.utc} ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`},null)]})]})]}),e(B,{gutter:20},{default:()=>[e(p,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.start")]),e(u.Item,{name:"startDatetime"},{default:()=>[e(V,{value:r.startDate,"onUpdate:value":d=>r.startDate=d,allowClear:!1},null),e(G,{format:"HH:mm",value:r.startDate,"onUpdate:value":d=>r.startDate=d,allowClear:!1},null)]})]}),e(p,{span:12},{default:()=>[e("span",{class:g.label},[l("calendar.schedule_meeting.end")]),e(u.Item,{name:"endDatetime"},{default:()=>[e(V,{value:r.endDate,"onUpdate:value":d=>r.endDate=d,disabled:!0},null),e(G,{value:r.endDate,"onUpdate:value":d=>r.endDate=d,format:"HH:mm",disabled:!0},null)]})]})]}),e("hr",null,null),e("p",null,[l("calendar.time_zone")," ",`(${a==null?void 0:a.utc}) ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`]),e("p",null,[e(oe,null,null),le(" "),r.startDate.format("YYYY-MM-DD HH:mm")])]})]),e(y,null,j(b=l("calendar.schedule_meeting.contactor"))?b:{default:()=>[b]}),e("div",{class:`pd_20 bg_white  ${i.contactListItem}`},[e("img",{src:((U=s.user)==null?void 0:U.roleName)===m.buyer?t.HeadImageUrl!=null&&t.HeadImageUrl!=""?_+t.HeadImageUrl:h:((C=s.user)==null?void 0:C.headImageUrl)!=null&&((E=s.user)==null?void 0:E.headImageUrl)!=""?_+((Y=s.user)==null?void 0:Y.headImageUrl):h,class:i.avatar},null),e("div",{class:i.profile},[((x=s.user)==null?void 0:x.roleName)===m.buyer?n.isEn?t.company:t.company_cn:n.isEn?(M=s.user)==null?void 0:M.company:(N=s.user)==null?void 0:N.companyCn])]),e(y,null,j(v=l("calendar.schedule_meeting.buyer"))?v:{default:()=>[v]}),e("div",{class:`pd_20 bg_white  ${i.contactListItem}`},[e("img",{src:(($=s.user)==null?void 0:$.roleName)===m.buyer?((k=s.user)==null?void 0:k.headImageUrl)!=null&&((z=s.user)==null?void 0:z.headImageUrl)!=""?_+((O=s.user)==null?void 0:O.headImageUrl):h:t.HeadImageUrl!=null&&t.HeadImageUrl!=""?_+t.HeadImageUrl:h,class:i.avatar},null),e("div",{class:i.profile},[((R=s.user)==null?void 0:R.roleName)===m.buyer?n.isEn?(A=s.user)==null?void 0:A.company:(F=s.user)==null?void 0:F.companyCn:n.isEn?t.company:t.company_cn])]),e("p",{class:"pd_t_20"},[e(Z,{type:"primary",onClick:P,style:{width:"150px"}},j(D=l("calendar.schedule_meeting.schedule"))?D:{default:()=>[D]})])])}}});export{Re as default};
