var c=Object.defineProperty;var d=(r,t,s)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var i=(r,t,s)=>(d(r,typeof t!="symbol"?t+"":t,s),s);import{b as o,p as g,g as p,U as u,R as m}from"./index.9e180452.js";import{B as f,l as h}from"./@rpdg.e35df5be.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,M=(r,t,s,e)=>{for(var a=e>1?void 0:e?b(t,s):t,n=r.length-1,l;n>=0;n--)(l=r[n])&&(a=(e?l(t,s,a):l(a))||a);return e&&a&&v(t,s,a),a};class _ extends f{constructor(){super();i(this,"reuqestsVir");i(this,"reuqestsPhy");i(this,"roleName");this.roleName=o.role,this.init()}async init(){this.reuqestsVir=await this.getMeetingRequests(1),this.reuqestsPhy=await this.getMeetingRequests(0)}async accept(t,s){return await g("NewSchedule/ApprovedOrDisApprovedSchedule",{inviteScheduleId:t,approved:s})}async deleteMeeting(t,s){return await p("NewSchedule/DeleteSchedule",{id:t,isOnline:s})}async getMeetingRequests(t){return(await p("/NewSchedule/InviteScheduleList",{isOnline:t})).map(e=>{let a=u(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[0],n=`${u(e.begin_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]} - ${u(e.end_datetime,o.minutesOffset,"YYYY-MM-DD HH:mm:ss").split(" ")[1]}`;return this.roleName===m.buyer?{id:e.id,is_online:t,approved:e.approved,companyLogo:e.e_logoUrl,avatar:e.e_headimageurl,date:a,time:n,name_cn:`${e.e_lastname_cn}${e.e_firstname_cn}`,name_en:`${e.e_firstname} ${e.e_lastname}`,_original:e}:{id:e.id,is_online:t,approved:e.approved,companyLogo:e.b_company_logo,avatar:e.b_headimageurl,date:a,time:n,name_cn:`${e.b_lastname_cn}${e.b_firstname_cn}`,name_en:`${e.b_firstname} ${e.b_lastname}`,_original:e}})}}M([h],_.prototype,"getMeetingRequests",1);const Y=new _,q=function(){return{meetingStore:Y}};export{q as u};
