import{M as e}from"./MainSectionHead.073980c9.js";import{a as t,l as a,m as r,n,B as o}from"./vendor.0458fb05.js";/* empty css              *//* empty css              *//* empty css              */function d(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Vue.isVNode(e)}var l=Vue.defineComponent({setup(){const{t:l}=t();let u=Vue.reactive({month:moment()});function c({current:e}){if(10===e.date())return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(o,{color:"#AB2B2F"},null),Vue.createVNode(o,{color:"#F0AE1C"},null),Vue.createVNode(o,{color:"#000000"},null)])}return()=>{let t;return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(e,{redLead:!1},d(t=l("menu.calendar"))?t:{default:()=>[t]}),Vue.createVNode(a,{message:"Warning Text",type:"error"},null),Vue.createVNode(r,{expandIconPosition:"right",style:{margin:"20px 0"}},{default:()=>[Vue.createVNode(r.Panel,null,{default:()=>[Vue.createVNode(n,{fullscreen:!1,value:u.month,"onUpdate:value":e=>u.month=e},{dateCellRender:c}),Vue.createVNode("div",{style:{padding:"20px"}},[Vue.createVNode(o,{color:"#AB2B2F",text:l("calendar.my_selected_speech")},null)])],header:()=>{let t;return Vue.createVNode(e,{redLead:!0,style:{margin:"0"}},d(t=l("calendar.virtual_platform_calendar"))?t:{default:()=>[t]})}})]}),Vue.createVNode(r,{expandIconPosition:"right"},{default:()=>[Vue.createVNode(r.Panel,null,{default:()=>[Vue.createTextVNode("bbb")],header:()=>{let t;return Vue.createVNode(e,{redLead:!0,style:{margin:"0"}},d(t=l("calendar.physical_exhibition_calendar"))?t:{default:()=>[t]})}})]})])}}});export{l as default};
