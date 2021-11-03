import{J as B,M as L,u as V,R as m,a as G,r as J}from"./index.2d426314.js";import{M as v}from"./MainSectionHead.8ce27b3b.js";import{u as P}from"./CalendarStore.e318d4fc.js";import{F as u,R as k,h as p,I as z,i as O,T as R,e as q,m as f}from"./ant-design-vue.84b208bc.js";import{h as D}from"./moment.29305b8e.js";import{u as K}from"./vue-i18n.8989ea2a.js";import{s as i}from"./index.module.6e348a91.js";import{s as _}from"./index.module.ac491f04.js";import{d as Q,c as T,w as W,k as e,i as X,u as Z,F as ee}from"./@vue.f0f90a02.js";import{m as ae}from"./@ant-design.b29a0759.js";import"./vue-router.65bc85cf.js";import"./nprogress.8b9ed5b7.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.35d5f340.js";import"./source-map.3671d69c.js";import"./vue.8bc7d658.js";import"./@ctrl.2e36ce53.js";function g(d){return typeof d=="function"||Object.prototype.toString.call(d)==="[object Object]"&&!X(d)}var xe=Q({props:{isOnline:{type:Number,required:!0}},name:"Schedule",setup(d){var S;const{isOnline:y}=d,r=B.get(L);r||alert("error");const{t:s}=K(),{appStore:n}=G(),{authenStore:l}=V(),{calendarStore:F}=P(),a=(S=l.user)==null?void 0:S.timeZone[0];let t=T({topic:s("calendar.schedule_meeting.topic_text",{a:n.isEn?r.company:r.company_cn,b:n.isEn?r.company:r.company_cn}),startDate:D(),endDate:D(),warning:!1,showChooser:!1,destination:null,product:null});w();function w(){t.endDate=D(t.startDate).add(30,"minute")}W(()=>t.startDate,w);async function A(){try{await F.addSchedule({IsOnline:y,ToBarcode:r.employee_id,BeginDateTime:t.startDate.format("YYYY-MM-DD HH:mm:00"),EndDateTime:t.endDate.format("YYYY-MM-DD HH:mm:00")})?(f.success(s("common.success")),J.push("/recommends")):f.error(s("common.failed"))}catch(o){switch(o.message){case"message_error_01":case"message_error_02":case"message_error_03":case"error_msg_001":f.error(s(`calendar.invite_errors[${o.message}]`));break;default:f.error(o.message)}}}return()=>{var I,H,E,C,Y,x,M,N,U,$;let o,b,h,j;return e(ee,null,[e(v,{redLead:!1},g(o=s("calendar.schedule_meeting.title"))?o:{default:()=>[o]}),e("div",{class:"pd_20 bg_white"},[e(u,null,{default:()=>[y===0&&e(k,{gutter:20},{default:()=>[e(p,{span:12},{default:()=>[e("span",{class:_.label},[s("calendar.schedule_meeting.topic")]),e(u.Item,null,{default:()=>[e(z,{type:"text",disabled:!0,value:t.topic},null)]})]}),e(p,{span:12},{default:()=>[e("span",{class:_.label},[s("calendar.schedule_meeting.my_time_zone")]),e(u.Item,null,{default:()=>[e(z,{disabled:!0,type:"text",value:`${a==null?void 0:a.utc} ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`},null)]})]})]}),e(k,{gutter:20},{default:()=>[e(p,{span:12},{default:()=>[e("span",{class:_.label},[s("calendar.schedule_meeting.start")]),e(u.Item,{name:"startDatetime"},{default:()=>[e(O,{value:t.startDate,"onUpdate:value":c=>t.startDate=c,allowClear:!1},null),e(R,{format:"HH:mm",value:t.startDate,"onUpdate:value":c=>t.startDate=c,allowClear:!1},null)]})]}),e(p,{span:12},{default:()=>[e("span",{class:_.label},[s("calendar.schedule_meeting.end")]),e(u.Item,{name:"endDatetime"},{default:()=>[e(O,{value:t.endDate,"onUpdate:value":c=>t.endDate=c,disabled:!0},null),e(R,{value:t.endDate,"onUpdate:value":c=>t.endDate=c,format:"HH:mm",disabled:!0},null)]})]})]}),e("hr",null,null),e("p",null,[s("calendar.time_zone")," ",`(${a==null?void 0:a.utc}) ${n.isEn?a==null?void 0:a.timezone_en:a==null?void 0:a.timezone_cn}`]),e("p",null,[e(ae,null,null),Z(" "),t.startDate.format("YYYY-MM-DD HH:mm")])]})]),e(v,null,g(b=s("calendar.schedule_meeting.contactor"))?b:{default:()=>[b]}),e("div",{class:`pd_20 bg_white  ${i.contactListItem}`},[e("img",{src:((I=l.user)==null?void 0:I.roleName)===m.buyer?r.HeadImageUrl:(H=l.user)==null?void 0:H.headImageUrl,class:i.avatar},null),e("div",{class:i.profile},[((E=l.user)==null?void 0:E.roleName)===m.buyer?n.isEn?r.company:r.company_cn:n.isEn?(C=l.user)==null?void 0:C.company:(Y=l.user)==null?void 0:Y.companyCn])]),e(v,null,g(h=s("calendar.schedule_meeting.buyer"))?h:{default:()=>[h]}),e("div",{class:`pd_20 bg_white  ${i.contactListItem}`},[e("img",{src:((x=l.user)==null?void 0:x.roleName)===m.buyer?(M=l.user)==null?void 0:M.headImageUrl:r.HeadImageUrl,class:i.avatar},null),e("div",{class:i.profile},[((N=l.user)==null?void 0:N.roleName)===m.buyer?n.isEn?(U=l.user)==null?void 0:U.company:($=l.user)==null?void 0:$.companyCn:n.isEn?r.company:r.company_cn])]),e("p",{class:"pd_t_20"},[e(q,{type:"primary",onClick:A,style:{width:"150px"}},g(j=s("calendar.schedule_meeting.schedule"))?j:{default:()=>[j]})])])}}});export{xe as default};
