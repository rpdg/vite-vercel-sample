var y=Object.defineProperty;var d=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(d(e,typeof t!="symbol"?t+"":t,n),n);import{B as f,g as s,l as a}from"./index.33d032b7.js";import{f as A}from"./@vue.fa05379c.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(e,t,n,r)=>{for(var i=r>1?void 0:r?C(t,n):t,u=e.length-1,l;u>=0;u--)(l=e[u])&&(i=(r?l(t,n,i):l(i))||i);return r&&i&&w(t,n,i),i};class o extends f{constructor(){super();v(this,"presentationList");v(this,"currentDetail")}async getActivityContentDetail(t){this.currentDetail=(await s("NewActivity/GetActivityContentDetail",{activityContentId:t}))[0],this.currentDetail.speakers=await s("Activity/GetActivityHonoredGuestByActivityContnetId",{activityContentId:t})}async getPresentationHubList(t){this.presentationList=await s("NewActivity/ConferenceAndPresentationHubList",{isOnline:t.isOnline?1:0,date:t.month.format("YYYY-MM")})}async addToSchedule(t){return await s(`NewActivity/AddActivityContentToSchedule?activityContentId=${t}`)}async evaluate(){}}c([a],o.prototype,"getActivityContentDetail",1);c([a],o.prototype,"getPresentationHubList",1);c([a],o.prototype,"addToSchedule",1);c([a],o.prototype,"evaluate",1);let p=new o;const S=function(){return A(()=>{p.presentationList=void 0,p.currentDetail=void 0}),{conferenceStore:p}};export{S as u};
