import{M as e}from"./MainSectionHead.7703edc9.js";import{f as a}from"./ant-design-vue.0b90b305.js";import{u as t}from"./vue-i18n.683f3bc1.js";import{a7 as o,r,a5 as s,al as i,a4 as c,aJ as l,M as p}from"./@vue.01a79c59.js";import"./vue-router.1edc7a6a.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.bd6efab4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./nprogress.3e43c680.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";var n={detailCard:"_detailCard_1coar_1",avatar:"_avatar_1coar_10",profile:"_profile_1coar_21",name:"_name_1coar_21",bio:"_bio_1coar_27",descr:"_descr_1coar_32",speechItem:"_speechItem_1coar_38",title:"_title_1coar_50",content:"_content_1coar_53"};function d(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!i(e)}var m=o({name:"SpeakerDetail",props:{speakerId:{type:String,required:!0}},setup(o){const{t:i}=t();let m=r([{pic:"//via.placeholder.com/240x240.jpg?text=speech",title:"To be, or not to be",company:"To be, or not to be",id:"id--aaa",name:"Joooy"},{pic:"//via.placeholder.com/240x240.jpg?text=speech",title:"To be, or not to be",company:"To be, or not to be",id:"id--aaa",name:"Joooy"}]);return()=>{let t,o;return s(p,null,[s(e,{redLead:!1},d(t=i("speakers.speaker"))?t:{default:()=>[t]}),s("div",{class:n.detailCard},[s("img",{class:n.avatar,src:"//via.placeholder.com/240x240.jpg?text=speaker",alt:""},null),s("div",{class:n.profile},[s("h3",{class:n.name},[c("Name Here")]),s("p",null,[c("Company")]),s("p",null,[c("Title")])]),s(l("dir"),{class:n.bio},{default:()=>[c("Speaker Bio")]}),s("div",{class:n.descr},[c("To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows")])]),s(e,{redLead:!0},d(o=i("speakers.related"))?o:{default:()=>[o]}),s("div",{class:`${n.pd_20} ${n.bg_white}`},[s(a,{itemLayout:"vertical",dataSource:m},{renderItem:({item:e})=>s(a.Item,{class:n.speechItem},{default:()=>[s(a.Item.Meta,{title:e.name},{description:()=>s(p,null,[s("div",{class:n.content},[e.company]),s("div",{class:n.content},[e.title])]),avatar:()=>s("img",{class:n.avatar,src:e.pic},null)})]})})])])}}});export{m as default};
