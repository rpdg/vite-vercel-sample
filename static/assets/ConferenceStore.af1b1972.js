var l=Object.defineProperty;var p=(n,t,e)=>t in n?l(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var d=(n,t,e)=>(p(n,typeof t!="symbol"?t+"":t,e),e);import{B as A,g as a,p as f,l as c}from"./index.03db05d1.js";import{f as w}from"./@vue.5a203696.js";var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,s=(n,t,e,o)=>{for(var i=o>1?void 0:o?C(t,e):t,u=n.length-1,v;u>=0;u--)(v=n[u])&&(i=(o?v(t,e,i):v(i))||i);return o&&i&&h(t,e,i),i};class r extends A{constructor(){super();d(this,"presentationList");d(this,"currentDetail")}async getActivityContentDetail(t){this.currentDetail=(await a("NewActivity/GetActivityContentDetail",{activityContentId:t}))[0],this.currentDetail.speakers=await a("Activity/GetActivityHonoredGuestByActivityContnetId",{activityContentId:t})}async getPresentationHubList(t){this.presentationList=await a("NewActivity/ConferenceAndPresentationHubList",{isOnline:t.isOnline?1:0,date:t.month.format("YYYY-MM")})}async addToSchedule(t){return await a(`NewActivity/AddActivityContentToSchedule?activityContentId=${t}`)}async checkInSchedule(t){return await a(`NewActivity/JudgeActivityContentInSchedule?activityContentId=${t}`)}async evaluate(t,e,o){return await f("NewActivity/AddOrUpActivityContentEvaluate",{rate:t,content:e,meetingId:o})}}s([c],r.prototype,"getActivityContentDetail",1);s([c],r.prototype,"getPresentationHubList",1);s([c],r.prototype,"addToSchedule",1);s([c],r.prototype,"checkInSchedule",1);s([c],r.prototype,"evaluate",1);let y=new r;const O=function(){return w(()=>{y.presentationList=void 0,y.currentDetail=void 0}),{conferenceStore:y}};export{O as u};
