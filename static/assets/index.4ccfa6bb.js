var v=Object.defineProperty;var b=(r,s,t)=>s in r?v(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var l=(r,s,t)=>(b(r,typeof s!="symbol"?s+"":s,t),t);import{B as _,b as y,g as j,R as h,l as q,a as I}from"./index.6a8d6b90.js";import{k as m,H as R,E as d,C as $}from"./ant-design-vue.d9e2e5cb.js";import{u as p}from"./vue-i18n.0711e616.js";import{s as n}from"./index.module.b3e7dc10.js";import{m as S}from"./@ant-design.8f5596ac.js";import{d as c,k as a,F as x,u as w}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";var M=Object.defineProperty,P=Object.getOwnPropertyDescriptor,L=(r,s,t,e)=>{for(var i=e>1?void 0:e?P(s,t):s,o=r.length-1,u;o>=0;o--)(u=r[o])&&(i=(e?u(s,t,i):u(i))||i);return e&&i&&M(s,t,i),i};class g extends _{constructor(){super();l(this,"reuqestsVir");l(this,"reuqestsPhy");l(this,"roleName");this.roleName=y.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async getMeetingRequests(s){return(await j("/NewSchedule/InviteScheduleList",{isOnline:s})).map(e=>{let i=e.begin_datetime.split(" ")[0],o=`${e.begin_datetime.split(" ")[1]} - ${e.end_datetime.split(" ")[1]}`;return this.roleName===h.buyer?{id:e.id,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:i,time:o,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`}:{id:e.id,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:i,time:o,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`}})}}L([q],g.prototype,"getMeetingRequests",1);const C=new g,T=function(){return{meetingStore:C}};var f=c({name:"MeetingRequestsItem",props:{item:{type:Object,required:!0}},setup(r){const{t:s}=p(),{item:t}=r,{appStore:e}=I();return()=>a(m.Item,{class:n.listItem,key:t.id},{default:()=>[a(m.Item.Meta,null,{description:()=>a(x,null,[a(R,{color:"#F0AE1C",style:{float:"right",marginRight:0}},{default:()=>[s(`myItb.meetingRequests.status_short[${t.approved}]`)],icon:()=>a(S,null,null)}),a("div",null,[a("div",{class:n.short},[t.date]),a("div",{class:n.short},[t.time]),a("div",{class:n.short},[s(`myItb.meetingRequests.status_long[${t.approved}]`)])])]),avatar:()=>[a("img",{class:`${n.avatar} ${n.round}`,src:t.companyLogo},null),a("img",{class:`${n.avatar} ${n.round}`,src:t.avatar},null)]}),a("span",{class:n.text_gray},[e.isEn?t.name_en:t.name_cn,w(" "),s("myItb.meetingRequests.invited_surfix")])]})}}),ne=c({name:"MeetingRequests",setup(){const{t:r}=p(),{meetingStore:s}=T();return()=>a($,{title:r("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[a(d,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[a(d.TabPane,{key:1,tab:r("myItb.meetingRequests.online")},{default:()=>[a(m,{itemLayout:"vertical",dataSource:s.reuqestsVir},{renderItem:({item:t})=>a(f,{item:t},null)})]}),a(d.TabPane,{key:2,tab:r("myItb.meetingRequests.offline")},{default:()=>[a(m,{itemLayout:"vertical",dataSource:s.reuqestsPhy},{renderItem:({item:t})=>a(f,{item:t},null)})]})]})]})}});export{ne as default};
