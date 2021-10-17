var g=Object.defineProperty;var M=(n,l,t)=>l in n?g(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t;var s=(n,l,t)=>(M(n,typeof l!="symbol"?l+"":l,t),t);import{B as b,p as o,g as w,l as C}from"./index.d765f8b3.js";import{h as B}from"./moment.29305b8e.js";var v=Object.defineProperty,T=Object.getOwnPropertyDescriptor,D=(n,l,t,e)=>{for(var a=e>1?void 0:e?T(l,t):l,i=n.length-1,u;i>=0;i--)(u=n[i])&&(a=(e?u(l,t,a):u(a))||a);return e&&a&&v(l,t,a),a};const E={Red:"#AB2B2F",Blue:"#2878FF",Yellow:"#F0B422",Black:"#020202",Gray:"#CDCDCF"};class d extends b{constructor(){super();s(this,"virtualMap");s(this,"virtualMapDetail");s(this,"physicalMap");s(this,"physicalMapDetail");s(this,"blockTimeSlots");s(this,"inited",!1);s(this,"loadedTimes",0);this.virtualMap=new Map,this.virtualMapDetail=new Map,this.physicalMap=new Map,this.physicalMapDetail=new Map}async addBlockTime(l){return l.Type>0&&(l.BeginDateTime=l.BeginDateTime.substr(11,5),l.EndDateTime=l.EndDateTime.substr(11,5)),await o("NewQualifyDate/Add",l)}async getBlockTime(l){this.blockTimeSlots=await o("NewQualifyDate/list",{isOnline:l})}async delBlockTime(l){return await o("NewQualifyDate/remove",{id:l})}putColorNum(l,t,e,a,i,u,f){let h=l?this.virtualMap:this.physicalMap,r=B(t,["YYYY/MM/DD","YYYY-MM-DD"]).format("YYYY-MM-DD");h.has(r)||h.set(r,[]);let y=h.get(r);y.includes(e)||y.push(e);let c=l?this.virtualMapDetail:this.physicalMapDetail;c.has(r)||c.set(r,[]);let p=c.get(r);a&&p.push({color:e,type:"unconfirmed",entry:a}),i&&p.push({color:e,type:"byMe",entry:i}),u&&p.push({color:e,type:"conference",entry:u}),f&&p.push({color:e,type:"byItb",entry:f})}async getVirtualCalendar(l){let t=await o("NewSchedule/GetUserVirtualCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!0,e.begindate,"Blue",null,null,e,null):this.putColorNum(!0,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!0,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!0,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!0,e.begin_datetime,"Gray",e,null,null,null)})}async getPhysicalCalendar(l){let t=await o("NewSchedule/GetUserPhysicalExhibitionCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!1,e.begindate,"Blue",null,null,e,null):this.putColorNum(!1,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!1,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!1,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!1,e.begin_datetime,"Gray",e,null,null,null)})}async addSchedule(l){return await o("NewSchedule/AddInviteSchedule",l)}async getTextTip(l){let t=await w("Common/GetMapInfoByKey?key=calendar_tips");return l?t[0].value1:t[0].value2}}D([C],d.prototype,"getVirtualCalendar",1);D([C],d.prototype,"getPhysicalCalendar",1);const Y=new d,P=function(){return{calendarStore:Y}};export{E as C,P as u};
