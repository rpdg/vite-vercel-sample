var f=Object.defineProperty;var v=(r,s,t)=>s in r?f(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var l=(r,s,t)=>(v(r,typeof s!="symbol"?s+"":s,t),t);import{B as _,b as y,g as j,R as h,l as q,u as I}from"./index.156122b3.js";import{m,H as R,l as p,C as $}from"./ant-design-vue.45bb77f4.js";import{u as d}from"./vue-i18n.8989ea2a.js";import{s as n}from"./index.module.b3e7dc10.js";import{m as S}from"./@ant-design.b29a0759.js";import{d as c,k as a,F as x,u as w}from"./@vue.f0f90a02.js";import"./vue-router.65bc85cf.js";import"./moment.29305b8e.js";import"./nprogress.8b9ed5b7.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.35d5f340.js";import"./source-map.3671d69c.js";import"./vue.8bc7d658.js";import"./@ctrl.2e36ce53.js";var M=Object.defineProperty,P=Object.getOwnPropertyDescriptor,L=(r,s,t,e)=>{for(var i=e>1?void 0:e?P(s,t):s,o=r.length-1,u;o>=0;o--)(u=r[o])&&(i=(e?u(s,t,i):u(i))||i);return e&&i&&M(s,t,i),i};class g extends _{constructor(){super();l(this,"reuqestsVir");l(this,"reuqestsPhy");l(this,"roleName");this.roleName=y.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async getMeetingRequests(s){return(await j("/NewSchedule/InviteScheduleList",{isOnline:s})).map(e=>{let i=e.begin_datetime.split(" ")[0],o=`${e.begin_datetime.split(" ")[1]} - ${e.end_datetime.split(" ")[1]}`;return this.roleName===h.buyer?{id:e.id,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:i,time:o,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`}:{id:e.id,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:i,time:o,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`}})}}L([q],g.prototype,"getMeetingRequests",1);const C=new g,T=function(){return{meetingStore:C}};var b=c({name:"MeetingRequestsItem",props:{item:{type:Object,required:!0}},setup(r){const{t:s}=d(),{item:t}=r,{appStore:e}=I();return()=>a(m.Item,{class:n.listItem,key:t.id},{default:()=>[a(m.Item.Meta,null,{description:()=>a(x,null,[a(R,{color:"#F0AE1C",style:{float:"right",marginRight:0}},{default:()=>[s(`myItb.meetingRequests.status_short[${t.approved}]`)],icon:()=>a(S,null,null)}),a("div",null,[a("div",{class:n.short},[t.date]),a("div",{class:n.short},[t.time]),a("div",{class:n.short},[s(`myItb.meetingRequests.status_long[${t.approved}]`)])])]),avatar:()=>[a("img",{class:`${n.avatar} ${n.round}`,src:t.companyLogo},null),a("img",{class:`${n.avatar} ${n.round}`,src:t.avatar},null)]}),a("span",{class:n.text_gray},[e.isEn?t.name_en:t.name_cn,w(" "),s("myItb.meetingRequests.invited_surfix")])]})}}),ne=c({name:"MeetingRequests",setup(){const{t:r}=d(),{meetingStore:s}=T();return()=>a($,{title:r("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[a(p,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[a(p.TabPane,{key:1,tab:r("myItb.meetingRequests.online")},{default:()=>[a(m,{itemLayout:"vertical",dataSource:s.reuqestsVir},{renderItem:({item:t})=>a(b,{item:t},null)})]}),a(p.TabPane,{key:2,tab:r("myItb.meetingRequests.offline")},{default:()=>[a(m,{itemLayout:"vertical",dataSource:s.reuqestsPhy},{renderItem:({item:t})=>a(b,{item:t},null)})]})]})]})}});export{ne as default};
