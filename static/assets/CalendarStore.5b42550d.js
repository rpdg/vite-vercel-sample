var b=Object.defineProperty;var w=(n,l,t)=>l in n?b(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t;var s=(n,l,t)=>(w(n,typeof l!="symbol"?l+"":l,t),t);import{p as o,U as D,b as M,g as B}from"./index.3f2ac436.js";import{B as v,l as C}from"./@rpdg.e35df5be.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,g=(n,l,t,e)=>{for(var a=e>1?void 0:e?T(l,t):l,i=n.length-1,u;i>=0;i--)(u=n[i])&&(a=(e?u(l,t,a):u(a))||a);return e&&a&&S(l,t,a),a};const Y={Red:"#AB2B2F",Blue:"#2878FF",Yellow:"#F0B422",Black:"#020202",Gray:"#CDCDCF"};class h extends v{constructor(){super();s(this,"virtualMap");s(this,"virtualMapDetail");s(this,"physicalMap");s(this,"physicalMapDetail");s(this,"blockTimeSlots");s(this,"inited",!1);s(this,"loadedTimes",0);this.virtualMap=new Map,this.virtualMapDetail=new Map,this.physicalMap=new Map,this.physicalMapDetail=new Map}async addBlockTime(l){return l.Type>0&&(l.BeginDateTime=l.BeginDateTime.substr(11,5),l.EndDateTime=l.EndDateTime.substr(11,5)),await o("NewQualifyDate/Add",l)}async getBlockTime(l){this.blockTimeSlots=await o("NewQualifyDate/list",{isOnline:l})}async delBlockTime(l){return await o("NewQualifyDate/remove",{id:l})}putColorNum(l,t,e,a,i,u,f){let c=l?this.virtualMap:this.physicalMap,r=D(t,M.minutesOffset,"YYYY-MM-DD");c.has(r)||c.set(r,[]);let y=c.get(r);y.includes(e)||y.push(e);let d=l?this.virtualMapDetail:this.physicalMapDetail;d.has(r)||d.set(r,[]);let p=d.get(r);a&&p.push({color:e,type:"unconfirmed",entry:a}),i&&p.push({color:e,type:"byMe",entry:i}),u&&p.push({color:e,type:"conference",entry:u}),f&&p.push({color:e,type:"byItb",entry:f})}async getVirtualCalendar(l){let t=await o("NewSchedule/GetUserVirtualCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!0,e.begindate,"Blue",null,null,e,null):this.putColorNum(!0,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!0,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!0,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!0,e.begin_datetime,"Gray",e,null,null,null)})}async getPhysicalCalendar(l){let t=await o("NewSchedule/GetUserPhysicalExhibitionCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!1,e.begindate,"Blue",null,null,e,null):this.putColorNum(!1,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!1,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!1,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!1,e.begin_datetime,"Gray",e,null,null,null)})}async addSchedule(l){return await o("NewSchedule/AddInviteSchedule",l)}async getTextTip(l){let t=await B("Common/GetMapInfoByKey?key=calendar_tips");return l?t[0].value1:t[0].value2}}g([C],h.prototype,"getVirtualCalendar",1);g([C],h.prototype,"getPhysicalCalendar",1);const N=new h,G=function(){return{calendarStore:N}};export{Y as C,G as u};
