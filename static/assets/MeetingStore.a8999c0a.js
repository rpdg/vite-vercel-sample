var v=Object.defineProperty;var h=(r,t,a)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var n=(r,t,a)=>(h(r,typeof t!="symbol"?t+"":t,a),a);import{b as o,p as c,g as p,U as _,R as m}from"./index.c8c7e9ca.js";import{B as f,l as d}from"./@rpdg.c2e06738.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,g=(r,t,a,e)=>{for(var s=e>1?void 0:e?w(t,a):t,i=r.length-1,u;i>=0;i--)(u=r[i])&&(s=(e?u(t,a,s):u(s))||s);return e&&s&&y(t,a,s),s};class l extends f{constructor(){super();n(this,"reuqestsVir");n(this,"reuqestsPhy");n(this,"roleName");this.roleName=o.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async accept(t,a){return await c("NewSchedule/ApprovedOrDisApprovedSchedule",{inviteScheduleId:t,approved:a})}async deleteMeeting(t,a){return await p("NewSchedule/DeleteSchedule",{id:t,isOnline:a})}async deleteSelfMeeting(t){return await p("NewSchedule/DeleteInviteSchedule",{id:t})}async getMeetingRequests(t){return(await p("/NewSchedule/InviteScheduleList",{isOnline:t})).map(e=>{let s=_(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[0],i=`${_(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]} - ${_(e.end_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]}`;return this.roleName===m.buyer?{id:e.id,is_online:t,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:s,time:i,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`,_original:e}:{id:e.id,is_online:t,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:s,time:i,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`,_original:e}})}async addEvaluate(t,a,e,s){return await c("activity/EvaluateActivityOrMetting",{activityEvaluate:{rate:t,content:a},userScore:{subscribeId:e,sourcescore:1e3,isonline:s}})}async getEvaluate(t){var e;return(e=(await c("activity/GetEvaluate",{subscribeId:t}))[0])!=null?e:{rate:3,content:"",subscribe_id:t}}}g([d],l.prototype,"getMeetingRequests",1);g([d],l.prototype,"addEvaluate",1);g([d],l.prototype,"getEvaluate",1);const M=new l,D=function(){return{meetingStore:M}};export{D as u};
