var M=Object.defineProperty;var g=(s,l,t)=>l in s?M(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t;var n=(s,l,t)=>(g(s,typeof l!="symbol"?l+"":l,t),t);import{p as o,U as b,b as w,g as B}from"./index.9c9ed90c.js";import{B as Y,l as D}from"./@rpdg.e35df5be.js";import{h as m}from"./moment.29305b8e.js";var v=Object.defineProperty,S=Object.getOwnPropertyDescriptor,C=(s,l,t,e)=>{for(var a=e>1?void 0:e?S(l,t):l,i=s.length-1,u;i>=0;i--)(u=s[i])&&(a=(e?u(l,t,a):u(a))||a);return e&&a&&v(l,t,a),a};const j={Red:"#AB2B2F",Blue:"#2878FF",Yellow:"#F0B422",Black:"#020202",Gray:"#CDCDCF"};class d extends Y{constructor(){super();n(this,"virtualMap");n(this,"virtualMapDetail");n(this,"physicalMap");n(this,"physicalMapDetail");n(this,"blockTimeSlots");n(this,"inited",!1);n(this,"loadedTimes",0);this.virtualMap=new Map,this.virtualMapDetail=new Map,this.physicalMap=new Map,this.physicalMapDetail=new Map}async addBlockTime(l){return l.Type>0&&(l.BeginDateTime=l.BeginDateTime.substr(11,5),l.EndDateTime=l.EndDateTime.substr(11,5)),await o("NewQualifyDate/Add",l)}async getBlockTime(l){this.blockTimeSlots=await o("NewQualifyDate/list",{isOnline:l})}async delBlockTime(l){return await o("NewQualifyDate/remove",{id:l})}putColorNum(l,t,e,a,i,u,f){let c=l?this.virtualMap:this.physicalMap,r=b(m(t,["YYYY/MM/DD","YYYY-MM-DD"]).format("YYYY-MM-DD"),w.minutesOffset,"YYYY-MM-DD");c.has(r)||c.set(r,[]);let y=c.get(r);y.includes(e)||y.push(e);let h=l?this.virtualMapDetail:this.physicalMapDetail;h.has(r)||h.set(r,[]);let p=h.get(r);a&&p.push({color:e,type:"unconfirmed",entry:a}),i&&p.push({color:e,type:"byMe",entry:i}),u&&p.push({color:e,type:"conference",entry:u}),f&&p.push({color:e,type:"byItb",entry:f})}async getVirtualCalendar(l){let t=await o("NewSchedule/GetUserVirtualCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!0,e.begindate,"Blue",null,null,e,null):this.putColorNum(!0,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!0,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!0,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!0,e.begin_datetime,"Gray",e,null,null,null)})}async getPhysicalCalendar(l){let t=await o("NewSchedule/GetUserPhysicalExhibitionCalendar",l);++this.loadedTimes>1&&(this.inited=!0),t.conferenceList.forEach(e=>{e.type.toString()==="1"?this.putColorNum(!1,e.begindate,"Blue",null,null,e,null):this.putColorNum(!1,e.begindate,"Red",null,null,e,null)}),t.scheduleByMy.forEach(e=>{this.putColorNum(!1,e.begindate,"Black",null,e,null,null)}),t.scheduleByItb.forEach(e=>{this.putColorNum(!1,e.begindate,"Yellow",null,null,null,e)}),t.scheduleByUnConfirm.forEach(e=>{this.putColorNum(!1,e.begin_datetime,"Gray",e,null,null,null)})}async addSchedule(l){return await o("NewSchedule/AddInviteSchedule",l)}async getTextTip(l){let t=await B("Common/GetMapInfoByKey?key=calendar_tips");return l?t[0].value1:t[0].value2}}C([D],d.prototype,"getVirtualCalendar",1);C([D],d.prototype,"getPhysicalCalendar",1);const T=new d,k=function(){return{calendarStore:T}};export{j as C,k as u};
