import{f as t,g as e,r as a,e as s,a5 as i,P as o,F as n,a7 as m,a8 as l,i as r,n as d}from"./vendor.41ef0d25.js";/* empty css              *//* empty css              *//* empty css              */import{s as u}from"./index.module.cffa80e3.js";var c=t({name:"MeetingRequests",setup(){const{t:t}=e();let c=a([{companyLogo:"//picsum.photos/100/100",avatar:"//picsum.photos/150/150",date:"2021/11/1",time:"10:22am - 11:00am",from:"Tom",digest:"To be, or not to be",id:"id--aaa"}]);return()=>s(d,{title:t("myItb.dockIcons.requests"),style:{marginTop:"28px"}},{default:()=>[s(i,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[s(i.TabPane,{key:1,tab:t("myItb.meetingRequests.online")},{default:()=>[s(o,{itemLayout:"vertical",dataSource:c},{renderItem:({item:e})=>s(o.Item,{class:u.listItem},{default:()=>[s(o.Item.Meta,null,{description:()=>s(n,null,[s(m,{color:"#F0AE1C",style:{float:"right",marginRight:0}},{default:()=>[t("myItb.meetingRequests.waiting")],icon:()=>s(l,null,null)}),s("div",null,[s("div",{class:u.short},[e.date]),s("div",{class:u.short},[e.time]),s("div",{class:u.short},[t("myItb.meetingRequests.waiting_confirm")])])]),avatar:()=>[s("img",{class:`${u.avatar} ${u.round}`,src:e.companyLogo},null),s("img",{class:`${u.avatar} ${u.round}`,src:e.avatar},null)]}),s("span",{class:u.text_gray},[e.from,r(" "),t("myItb.meetingRequests.invited_surfix")])]})})]}),s(i.TabPane,{key:2,tab:t("myItb.meetingRequests.offline")},null)]})]})}});export{c as default};
