import{J as U,a as F,R as i,u as Y}from"./index.b87777dc.js";import{M as g}from"./MainSectionHead.b9e7274a.js";import{F as u,R as H,g as b,I as k,h as L,i as V}from"./ant-design-vue.01c85282.js";import{h as M}from"./moment.29305b8e.js";import{u as A}from"./vue-i18n.0711e616.js";import{s as o}from"./index.module.af86f0bd.js";import{d as B,c as J,k as e,i as q,u as P,F as G}from"./@vue.fa05379c.js";import{m as K}from"./@ant-design.8f5596ac.js";import"./vue-router.8ec3c3d8.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";const Q="_label_1h9tg_1";var j={label:Q};function d(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!q(c)}var Ie=B({props:{isOnline:{type:Number,required:!0}},name:"Schedule",setup(c){var y;const{isOnline:h}=c,a=U.get("current_meeting_target");a||alert("error");const{t:l}=A(),{appStore:r}=Y(),{authenStore:s}=F(),t=(y=s.user)==null?void 0:y.timeZone[0];let n=J({topic:l("calendar.schedule_meeting.topic_text",{a:r.isEn?a.company:a.company_cn,b:r.isEn?a.company:a.company_cn}),startDate:M(),endDate:M(),warning:!1,showChooser:!1,destination:null,product:null});v();function v(){n.endDate=n.startDate.add(30,"minute")}function O(){console.log({isOnline:h,toBarcode:a.employee_id,messageId:null})}return()=>{var I,S,w,D,x,C,E,N,z,$;let p,m,f,_;return e(G,null,[e(g,{redLead:!1},d(p=l("calendar.schedule_meeting.title"))?p:{default:()=>[p]}),e("div",{class:"pd_20 bg_white"},[e(u,null,{default:()=>[h===0&&e(H,{gutter:20},{default:()=>[e(b,{span:12},{default:()=>[e("span",{class:j.label},[l("calendar.schedule_meeting.topic")]),e(u.Item,null,{default:()=>[e(k,{type:"text",disabled:!0,value:n.topic},null)]})]}),e(b,{span:12},{default:()=>[e("span",{class:j.label},[l("calendar.schedule_meeting.my_time_zone")]),e(u.Item,null,{default:()=>[e(k,{disabled:!0,type:"text",value:`${t==null?void 0:t.utc} ${r.isEn?t==null?void 0:t.timezone_en:t==null?void 0:t.timezone_cn}`},null)]})]})]}),e(H,{gutter:20},{default:()=>[e(b,{span:12},{default:()=>[e("span",{class:j.label},[l("calendar.schedule_meeting.start")]),e(u.Item,{name:"startDatetime"},{default:()=>[e(L,{value:n.startDate,"onUpdate:value":R=>n.startDate=R,allowClear:!1,onChange:v},null)]})]})]}),e("hr",null,null),e("p",null,[l("calendar.time_zone")," ",`(${t==null?void 0:t.utc}) ${r.isEn?t==null?void 0:t.timezone_en:t==null?void 0:t.timezone_cn}`]),e("p",null,[e(K,null,null),P(" "),n.startDate.format("YYYY-MM-DD HH:mm")])]})]),e(g,null,d(m=l("calendar.schedule_meeting.contactor"))?m:{default:()=>[m]}),e("div",{class:`pd_20 bg_white  ${o.contactListItem}`},[e("img",{src:((I=s.user)==null?void 0:I.roleName)===i.buyer?a.HeadImageUrl:(S=s.user)==null?void 0:S.headImageUrl,class:o.avatar},null),e("div",{class:o.profile},[((w=s.user)==null?void 0:w.roleName)===i.buyer?r.isEn?a.company:a.company_cn:r.isEn?(D=s.user)==null?void 0:D.company:(x=s.user)==null?void 0:x.companyCn])]),e(g,null,d(f=l("calendar.schedule_meeting.buyer"))?f:{default:()=>[f]}),e("div",{class:`pd_20 bg_white  ${o.contactListItem}`},[e("img",{src:((C=s.user)==null?void 0:C.roleName)===i.buyer?(E=s.user)==null?void 0:E.headImageUrl:a.HeadImageUrl,class:o.avatar},null),e("div",{class:o.profile},[((N=s.user)==null?void 0:N.roleName)===i.buyer?r.isEn?(z=s.user)==null?void 0:z.company:($=s.user)==null?void 0:$.companyCn:r.isEn?a.company:a.company_cn])]),e("p",{class:"pd_t_20"},[e(V,{type:"primary",onClick:O,style:{width:"150px"}},d(_=l("calendar.schedule_meeting.schedule"))?_:{default:()=>[_]})])])}}});export{Ie as default};
