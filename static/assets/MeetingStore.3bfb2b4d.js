var v=Object.defineProperty;var f=(r,t,a)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var n=(r,t,a)=>(f(r,typeof t!="symbol"?t+"":t,a),a);import{b as o,p as g,g as c,U as p,R as m}from"./index.bf4350c5.js";import{B as y,l as _}from"./@rpdg.8b8261fd.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,d=(r,t,a,e)=>{for(var s=e>1?void 0:e?b(t,a):t,i=r.length-1,u;i>=0;i--)(u=r[i])&&(s=(e?u(t,a,s):u(s))||s);return e&&s&&h(t,a,s),s};class l extends y{constructor(){super();n(this,"reuqestsVir");n(this,"reuqestsPhy");n(this,"roleName");this.roleName=o.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async accept(t,a){return await g("NewSchedule/ApprovedOrDisApprovedSchedule",{inviteScheduleId:t,approved:a})}async deleteMeeting(t,a){return await c("NewSchedule/DeleteSchedule",{id:t,isOnline:a})}async getMeetingRequests(t){return(await c("/NewSchedule/InviteScheduleList",{isOnline:t})).map(e=>{let s=p(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[0],i=`${p(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]} - ${p(e.end_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]}`;return this.roleName===m.buyer?{id:e.id,is_online:t,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:s,time:i,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`,_original:e}:{id:e.id,is_online:t,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:s,time:i,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`,_original:e}})}async addEvaluate(t,a,e,s,i){debugger;return await g("activity/EvaluateActivityOrMetting2",{rate:t,content:a,SubscribeId:e,activitycontentid:0,barcode:s,Type:i,Action:"1"})}async getEvaluate(t){var e;return(e=(await c("NewActivity/GetActivityContentEvaluate",{meetingId:t}))[0])!=null?e:{rate:3,content:""}}}d([_],l.prototype,"getMeetingRequests",1);d([_],l.prototype,"addEvaluate",1);d([_],l.prototype,"getEvaluate",1);const w=new l,q=function(){return{meetingStore:w}};export{q as u};
