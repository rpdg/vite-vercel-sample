import{a as e,g as t,T as a,v as o,G as r,H as s}from"./vendor.7b3e9c73.js";/* empty css              *//* empty css              *//* empty css              */import{s as i}from"./index.module.d4154b01.js";var u=Vue.defineComponent({name:"MeetingRequests",setup(){const{t:u}=e();let d=Vue.reactive([{companyLogo:"//picsum.photos/100/100",avatar:"//picsum.photos/150/150",date:"2021/11/1",time:"10:22am - 11:00am",from:"Tom",digest:"To be, or not to be",id:"id--aaa"}]);return()=>Vue.createVNode(t,{title:u("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[Vue.createVNode(a,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[Vue.createVNode(a.TabPane,{key:1,tab:u("myItb.meetingRequests.online")},{default:()=>[Vue.createVNode(o,{itemLayout:"vertical",dataSource:d},{renderItem:({item:e})=>Vue.createVNode(o.Item,{class:i.listItem},{default:()=>[Vue.createVNode(o.Item.Meta,null,{description:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(r,{color:"#F0AE1C",style:{float:"right",marginRight:0}},{default:()=>[u("myItb.meetingRequests.waiting")],icon:()=>Vue.createVNode(s,null,null)}),Vue.createVNode("div",null,[Vue.createVNode("div",{class:i.short},[e.date]),Vue.createVNode("div",{class:i.short},[e.time]),Vue.createVNode("div",{class:i.short},[u("myItb.meetingRequests.waiting_confirm")])])]),avatar:()=>[Vue.createVNode("img",{class:`${i.avatar} ${i.round}`,src:e.companyLogo},null),Vue.createVNode("img",{class:`${i.avatar} ${i.round}`,src:e.avatar},null)]}),Vue.createVNode("span",{class:i.text_gray},[e.from,Vue.createTextVNode(" "),u("myItb.meetingRequests.invited_surfix")])]})})]}),Vue.createVNode(a.TabPane,{key:2,tab:u("myItb.meetingRequests.offline")},null)]})]})}});export default u;
