import{M as e}from"./MainSectionHead.f1eef1e4.js";import{a as t,v as a}from"./vendor.7b3e9c73.js";/* empty css              *//* empty css              */var r="_detailCard_8nbfr_46",o="_avatar_8nbfr_46",c="_pd_20_8nbfr_76",d="_bg_white_8nbfr_84",n="_speechItem_8nbfr_88",i="_content_8nbfr_88",s="_descr_8nbfr_88",V="_profile_8nbfr_88",l="_name_8nbfr_119",u="_bio_8nbfr_122";function p(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Vue.isVNode(e)}var m=Vue.defineComponent({name:"SpeakerDetail",props:{speakerId:{type:String,required:!0}},setup(m){const{t:_}=t();let b=Vue.reactive([{pic:"//via.placeholder.com/240x240.jpg?text=speech",title:"To be, or not to be",company:"To be, or not to be",id:"id--aaa",name:"Joooy"},{pic:"//via.placeholder.com/240x240.jpg?text=speech",title:"To be, or not to be",company:"To be, or not to be",id:"id--aaa",name:"Joooy"}]);return()=>{let t,m;return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(e,{redLead:!1},p(t=_("speakers.speaker"))?t:{default:()=>[t]}),Vue.createVNode("div",{class:r},[Vue.createVNode("img",{class:o,src:"//via.placeholder.com/240x240.jpg?text=speaker",alt:""},null),Vue.createVNode("div",{class:V},[Vue.createVNode("h3",{class:l},[Vue.createTextVNode("Name Here")]),Vue.createVNode("p",null,[Vue.createTextVNode("Company")]),Vue.createVNode("p",null,[Vue.createTextVNode("Title")])]),Vue.createVNode(Vue.resolveComponent("dir"),{class:u},{default:()=>[Vue.createTextVNode("Speaker Bio")]}),Vue.createVNode("div",{class:s},[Vue.createTextVNode("To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows")])]),Vue.createVNode(e,{redLead:!0},p(m=_("speakers.related"))?m:{default:()=>[m]}),Vue.createVNode("div",{class:`${c} ${d}`},[Vue.createVNode(a,{itemLayout:"vertical",dataSource:b},{renderItem:({item:e})=>Vue.createVNode(a.Item,{class:n},{default:()=>[Vue.createVNode(a.Item.Meta,{title:e.name},{description:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode("div",{class:i},[e.company]),Vue.createVNode("div",{class:i},[e.title])]),avatar:()=>Vue.createVNode("img",{class:o,src:e.pic},null)})]})})])])}}});export default m;
