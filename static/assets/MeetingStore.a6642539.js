var u=Object.defineProperty;var d=(r,t,a)=>t in r?u(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var i=(r,t,a)=>(d(r,typeof t!="symbol"?t+"":t,a),a);import{b as g,p as h,g as p,R as b}from"./index.bbac38a9.js";import{B as v,l as _}from"./@rpdg.dab4d1a7.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(r,t,a,e)=>{for(var s=e>1?void 0:e?m(t,a):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(e?o(t,a,s):o(s))||s);return e&&s&&f(t,a,s),s};class l extends v{constructor(){super();i(this,"reuqestsVir");i(this,"reuqestsPhy");i(this,"roleName");this.roleName=g.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async accept(t,a){await h("NewSchedule/ApprovedOrDisApprovedSchedule",{inviteScheduleId:t,approved:a})}async deleteMeeting(t,a){return await p("NewSchedule/DeleteSchedule",{id:t,isOnline:a})}async getMeetingRequests(t){return(await p("/NewSchedule/InviteScheduleList",{isOnline:t})).map(e=>{let s=e.begin_datetime.split(" ")[0],n=`${e.begin_datetime.split(" ")[1]} - ${e.end_datetime.split(" ")[1]}`;return this.roleName===b.buyer?{id:e.id,is_online:t,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:s,time:n,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`,_original:e}:{id:e.id,is_online:t,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:s,time:n,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`,_original:e}})}}c([_],l.prototype,"accept",1);c([_],l.prototype,"getMeetingRequests",1);const y=new l,$=function(){return{meetingStore:y}};export{$ as u};
