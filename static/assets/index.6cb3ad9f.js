import{M as e}from"./MainSectionHead.f1eef1e4.js";import{a as t,t as o,v as a,o as r}from"./vendor.7b3e9c73.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */var c="_mg_b_20_1hhhq_72",i="_pd_20_1hhhq_76",n="_bg_white_1hhhq_84",d="_eventsItem_1hhhq_88",u="_content_1hhhq_88",l="_avatar_1hhhq_112";var s=Vue.defineComponent({name:"Login",setup(){const{t:s}=t();let V=Vue.reactive({month:moment()});Vue.watch(V,(e=>{console.group(Vue.toRaw(e))}));let m=Vue.reactive([{coverpicture:"//via.placeholder.com/240x140.jpg?text=content-1",title:"To be, or not to be",digest:"To be, or not to be",id:"id--aaa"},{coverpicture:"//via.placeholder.com/240x140.jpg?text=content-2",title:"not to be",digest:"To be, or not to be",id:"id--bbb"}]);return()=>{let t;return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(e,{redLead:!1},(h=t=s("menu.presentation"),"function"==typeof h||"[object Object]"===Object.prototype.toString.call(h)&&!Vue.isVNode(h)?t:{default:()=>[t]})),Vue.createVNode("div",{class:`${i} ${n} ${c}`},[Vue.createVNode(o,{allowClear:!1,value:V.month,"onUpdate:value":e=>V.month=e},null)]),Vue.createVNode("div",{class:`${i} ${n}`},[Vue.createVNode(a,{itemLayout:"vertical",dataSource:m},{renderItem:({item:e})=>Vue.createVNode(a.Item,{class:d},{default:()=>[Vue.createVNode(a.Item.Meta,null,{title:()=>Vue.createVNode(r,{to:`/news/${e.id}`},{default:()=>[e.title]}),description:()=>Vue.createVNode("div",{class:u},[e.digest]),avatar:()=>Vue.createVNode("img",{class:l,src:e.coverpicture},null)})]})})])]);var h}}});export default s;
