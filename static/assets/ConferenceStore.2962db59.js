var y=Object.defineProperty;var l=(n,t,e)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>(l(n,typeof t!="symbol"?t+"":t,e),e);import{g as a,p as f}from"./index.9bd4e1af.js";import{B as A,l as s}from"./@rpdg.e35df5be.js";import{f as w}from"./@vue.f0a33739.js";var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(n,t,e,r)=>{for(var i=r>1?void 0:r?C(t,e):t,u=n.length-1,d;u>=0;u--)(d=n[u])&&(i=(r?d(t,e,i):d(i))||i);return r&&i&&h(t,e,i),i};class o extends A{constructor(){super();p(this,"presentationList");p(this,"currentDetail")}async getActivityContentDetail(t){this.currentDetail=(await a("NewActivity/GetActivityContentDetail",{activityContentId:t}))[0],this.currentDetail.speakers=await a("Activity/GetActivityHonoredGuestByActivityContnetId",{activityContentId:t})}async getPresentationHubList(t){this.presentationList=await a("NewActivity/ConferenceAndPresentationHubList",{isOnline:t.isOnline?1:0,date:t.month.format("YYYY-MM")})}async addToSchedule(t){return await a(`NewActivity/AddActivityContentToSchedule?activityContentId=${t}`)}async checkInSchedule(t){return await a(`NewActivity/JudgeActivityContentInSchedule?activityContentId=${t}`)}async evaluate(t,e,r){return await f("NewActivity/AddOrUpActivityContentEvaluate",{rate:t,content:e,meetingId:r})}}c([s],o.prototype,"getActivityContentDetail",1);c([s],o.prototype,"getPresentationHubList",1);c([s],o.prototype,"addToSchedule",1);c([s],o.prototype,"checkInSchedule",1);c([s],o.prototype,"evaluate",1);let v=new o;const b=function(){return w(()=>{v.presentationList=void 0,v.currentDetail=void 0}),{conferenceStore:v}};export{b as u};
