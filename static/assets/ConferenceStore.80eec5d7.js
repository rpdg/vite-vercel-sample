var d=Object.defineProperty;var l=(n,t,e)=>t in n?d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var v=(n,t,e)=>(l(n,typeof t!="symbol"?t+"":t,e),e);import{g as a,p as f}from"./index.2b4c8188.js";import{B as A,l as c}from"./@rpdg.f7b2a17f.js";import{f as w}from"./@vue.6f7c75f1.js";var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,s=(n,t,e,r)=>{for(var i=r>1?void 0:r?C(t,e):t,u=n.length-1,p;u>=0;u--)(p=n[u])&&(i=(r?p(t,e,i):p(i))||i);return r&&i&&h(t,e,i),i};class o extends A{constructor(){super();v(this,"presentationList");v(this,"currentDetail")}async getActivityContentDetail(t){this.currentDetail=(await a("NewActivity/GetActivityContentDetail",{activityContentId:t}))[0],this.currentDetail.speakers=await a("Activity/GetActivityHonoredGuestByActivityContnetId",{activityContentId:t})}async getPresentationHubList(t){this.presentationList=await a("NewActivity/ConferenceAndPresentationHubList",{isOnline:t.isOnline?1:0,date:t.month.format("YYYY-MM")})}async addToSchedule(t){return await a(`NewActivity/AddActivityContentToSchedule?activityContentId=${t}`)}async checkInSchedule(t){return await a(`NewActivity/JudgeActivityContentInSchedule?activityContentId=${t}`)}async evaluate(t,e,r){return await f("NewActivity/AddOrUpActivityContentEvaluate",{rate:t,content:e,meetingId:r})}}s([c],o.prototype,"getActivityContentDetail",1);s([c],o.prototype,"getPresentationHubList",1);s([c],o.prototype,"addToSchedule",1);s([c],o.prototype,"checkInSchedule",1);s([c],o.prototype,"evaluate",1);let y=new o;const b=function(){return w(()=>{y.presentationList=void 0,y.currentDetail=void 0}),{conferenceStore:y}};export{b as u};
