import{c as e}from"./index.107c5a15.js";import{a as t,g as a,T as o}from"./vendor.98a6c741.js";var u="_coupon_14bci_1",c="_content_14bci_26",V="_title_14bci_29",d="_num_14bci_35",n="_price_14bci_39",r="_status_14bci_53",l=Vue.defineComponent({name:"CouponItem",setup:()=>(t(),()=>Vue.createVNode("div",{class:u,onClick:()=>{e.current={id:"aaa"}}},[Vue.createVNode("div",{class:c},[Vue.createVNode("div",{class:V},[Vue.createTextVNode("注册奖励")])]),Vue.createVNode("div",{class:n},[Vue.createVNode("div",null,[Vue.createVNode("span",null,[Vue.createTextVNode("¥")]),Vue.createTextVNode(" "),Vue.createVNode("span",{class:d},[Vue.createTextVNode("100")])]),Vue.createVNode("div",null,[Vue.createVNode("div",{class:r},[Vue.createTextVNode("333")])])])]))}),s=Vue.defineComponent({name:"CouponSection",setup(){const{t:u}=t();return()=>e.current?Vue.createVNode("p",null,[Vue.createTextVNode("coupon detail")]):Vue.createVNode(a,{title:u("myItb.dockIcons.coupon")},{default:()=>[Vue.createVNode(o,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[Vue.createVNode(o.TabPane,{key:1,tab:u("myItb.coupon.unused")},{default:()=>[Vue.createVNode(l,null,null)]}),Vue.createVNode(o.TabPane,{key:2,tab:u("myItb.coupon.used")},null),Vue.createVNode(o.TabPane,{key:3,tab:u("myItb.coupon.expired")},null)]})]})}});export{s as default};
