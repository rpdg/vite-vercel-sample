var d=Object.defineProperty;var p=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(p(e,typeof t!="symbol"?t+"":t,n),n);import{B as f,g as r,l as a}from"./index.5a197180.js";import{f as A}from"./@vue.fa05379c.js";var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(e,t,n,s)=>{for(var i=s>1?void 0:s?w(t,n):t,u=e.length-1,l;u>=0;u--)(l=e[u])&&(i=(s?l(t,n,i):l(i))||i);return s&&i&&h(t,n,i),i};class o extends f{constructor(){super();v(this,"presentationList");v(this,"currentDetail")}async getActivityContentDetail(t){this.currentDetail=(await r("NewActivity/GetActivityContentDetail",{activityContentId:t}))[0],this.currentDetail.speakers=await r("Activity/GetActivityHonoredGuestByActivityContnetId",{activityContentId:t})}async getPresentationHubList(t){this.presentationList=await r("NewActivity/ConferenceAndPresentationHubList",{isOnline:t.isOnline?1:0,date:t.month.format("YYYY-MM")})}async addToSchedule(t){return await r(`NewActivity/AddActivityContentToSchedule?activityContentId=${t}`)}async checkInSchedule(t){return await r(`NewActivity/JudgeActivityContentInSchedule?activityContentId=${t}`)}async evaluate(){}}c([a],o.prototype,"getActivityContentDetail",1);c([a],o.prototype,"getPresentationHubList",1);c([a],o.prototype,"addToSchedule",1);c([a],o.prototype,"checkInSchedule",1);c([a],o.prototype,"evaluate",1);let y=new o;const g=function(){return A(()=>{y.presentationList=void 0,y.currentDetail=void 0}),{conferenceStore:y}};export{g as u};
