import{M as e}from"./MainSectionHead.d97c93d4.js";import{f as t,g as a,r as o,e as i,q as r,P as d,H as s,F as c}from"./vendor.3c3a65db.js";/* empty css              *//* empty css              *//* empty css              */import{s as n}from"./index.module.34ed03bd.js";var l=t({name:"NewsList",setup(){const{t:t}=a();let l=o([{coverpicture:"//via.placeholder.com/240x240.jpg?text=new1",title:"To be, or not to be",digest:"To be, or not to be",id:"id--aaa"},{coverpicture:"//via.placeholder.com/240x240.jpg?text=new2",title:"not to be",digest:"To be, or not to be",id:"id--bbb"}]);return()=>{let a;return i(c,null,[i(e,{redLead:!1},(o=a=t("menu.news"),"function"==typeof o||"[object Object]"===Object.prototype.toString.call(o)&&!r(o)?a:{default:()=>[a]})),i("div",{class:"pd_20 bg_white"},[i(d,{itemLayout:"vertical",dataSource:l},{renderItem:({item:e})=>i(d.Item,{class:n.verticalListItem},{default:()=>[i(d.Item.Meta,null,{title:()=>i(s,{to:`/news/${e.id}`},{default:()=>[e.title]}),description:()=>i("div",{class:n.content},[e.digest]),avatar:()=>i("img",{class:n.avatar,src:e.coverpicture},null)})]})})])]);var o}}});export{l as default};
