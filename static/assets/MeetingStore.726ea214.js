var v=Object.defineProperty;var f=(r,t,a)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var n=(r,t,a)=>(f(r,typeof t!="symbol"?t+"":t,a),a);import{b as o,p as c,g,U as p,R as m}from"./index.f988d874.js";import{B as h,l as _}from"./@rpdg.e35df5be.js";var y=Object.defineProperty,M=Object.getOwnPropertyDescriptor,d=(r,t,a,e)=>{for(var s=e>1?void 0:e?M(t,a):t,i=r.length-1,l;i>=0;i--)(l=r[i])&&(s=(e?l(t,a,s):l(s))||s);return e&&s&&y(t,a,s),s};class u extends h{constructor(){super();n(this,"reuqestsVir");n(this,"reuqestsPhy");n(this,"roleName");this.roleName=o.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async accept(t,a){return await c("NewSchedule/ApprovedOrDisApprovedSchedule",{inviteScheduleId:t,approved:a})}async deleteMeeting(t,a){return await g("NewSchedule/DeleteSchedule",{id:t,isOnline:a})}async getMeetingRequests(t){return(await g("/NewSchedule/InviteScheduleList",{isOnline:t})).map(e=>{let s=p(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[0],i=`${p(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]} - ${p(e.end_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]}`;return this.roleName===m.buyer?{id:e.id,is_online:t,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:s,time:i,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`,_original:e}:{id:e.id,is_online:t,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:s,time:i,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`,_original:e}})}async addEvaluate(t,a,e,s){return await c("activity/EvaluateActivityOrMetting",{activityEvaluate:{rate:t,content:a},userScore:{subscribeId:e,sourcescore:1e3,isonline:s}})}async getEvaluate(t){var e;return(e=(await c("activity/GetEvaluate",{subscribeId:t}))[0])!=null?e:{rate:3,content:"",subscribe_id:t}}}d([_],u.prototype,"getMeetingRequests",1);d([_],u.prototype,"addEvaluate",1);d([_],u.prototype,"getEvaluate",1);const b=new u,q=function(){return{meetingStore:b}};export{q as u};
