import{a as e,g as t,T as a,v as o,E as r}from"./vendor.7b3e9c73.js";/* empty css              *//* empty css              */import{s as d}from"./index.module.d4154b01.js";var i=Vue.defineComponent({name:"Favourite",setup(){const{t:i}=e();let u=Vue.reactive([{avatar:"//picsum.photos/150/150",name:"To be, or not to be",digest:"To be, or not to be",id:"id--aaa"},{avatar:"//via.placeholder.com/240x240.jpg?text=new2",name:"not to be",digest:"To be, or not to be",id:"id--bbb"}]);return()=>Vue.createVNode(t,{title:i("myItb.dockIcons.favourite"),style:{marginTop:"28px"}},{default:()=>[Vue.createVNode(a,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[Vue.createVNode(a.TabPane,{key:1,tab:i("myItb.favourite.contact")},{default:()=>[Vue.createVNode(o,{itemLayout:"vertical",dataSource:u},{renderItem:({item:e})=>Vue.createVNode(o.Item,{class:d.listItem},{default:()=>[Vue.createVNode(o.Item.Meta,null,{title:()=>Vue.createVNode("div",null,[e.name]),description:()=>Vue.createVNode("div",{class:d.content},[e.digest]),avatar:()=>Vue.createVNode("img",{class:d.avatar,src:e.avatar},null)})],extra:()=>Vue.createVNode(r,{style:{fontSize:"32px",color:"#AB2B2F"}},null)})})]}),Vue.createVNode(a.TabPane,{key:2,tab:i("myItb.favourite.company")},null),Vue.createVNode(a.TabPane,{key:3,tab:i("myItb.favourite.products")},null)]})]})}});export default i;
