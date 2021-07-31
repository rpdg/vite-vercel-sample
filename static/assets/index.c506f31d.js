var e,t,o=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;import{c as s,d as l,z as c,u,a as d,D as p,A as m,U as h,M as _,C as V,L as g,S as f,I as y,b,e as v,f as C,g as N,h as I,i as E,R as k,j as S,k as w}from"./vendor.0458fb05.js";(t=e||(e={})).Chat="Chat",t.Meeting="Meeting",t.Card="Card",t.Help="Help",t.Favourite="Favourite",t.Coupon="Coupon",t.Notification="Notification",t.Settings="Settings";const P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},x=class{static get(e,t){let o=P(x.storage.getItem(e));return void 0===o?t:o}static getSession(e,t){let o=P(x.session.getItem(e));return void 0===o?t:o}static set(e,t){void 0!==t&&x.storage.setItem(e,JSON.stringify(t))}static setSession(e,t){void 0!==t&&x.session.setItem(e,JSON.stringify(t))}static remove(e){x.storage.removeItem(e)}static removeSession(e){x.session.removeItem(e)}static clear(e){e?Object.keys(x.storage).forEach((t=>{0===t.indexOf(e)&&x.storage.removeItem(t)})):x.storage.clear()}static clearSession(e){e?Object.keys(x.session).forEach((t=>{0===t.indexOf(e)&&x.session.removeItem(t)})):x.session.clear()}};let O=x;O.storage=localStorage,O.session=sessionStorage;var j={common:{myITB:"My ITB",more:"more",signOut:"Sign Out",signIn:"Sign In",failed:"Action failed",success:"Action was successful"},myItb:{dockIcons:{chat:"Chat",requests:"Meeting Requests",business:"Business Card",help:"Help",favourite:"Favourite",coupon:"Coupon Package",notification:"Notification",settings:"Settings"},coupon:{unused:"Unuesed",used:"Used",expired:"Expired"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"},help:{enter:"Enter",contact_sponsor:"Contact the sponsor",want_settle:"I want to settle into",shuttle_bus:"Shuttle bus services",hotel_services:"Hotel services",support:"Service & Support"}},menu:{home:"Home",presentation:"Presentation Hub",partners:"Partners & Sponsors",speakers:"Speakers",news:"News",events:"Events",calendar:"My Calendar",recommend:"Recommend",showFloor:"Show floor"},login:{agreeTip:"User agreement has been reviewed and agreed.",agreement:"",registTip:"No account? Please register here.",registForm:"Business Registration",loginForm:"System login",login:"Sign in",username:"Username",usernameTip:"Please input user name",password:"Password",passwordTip:"Please input password"},homePage:{sponsor:"sponsor / partners",speaker:"speaker",presentation:"Presentation Hub / Conference Live",recommended:"recommended",news:"News"},partners:{partners:"Partners",sponsors:"Sponsors"},events:{online:"Online",offline:"Offline"},calendar:{virtual_platform_calendar:"Virtual Platform Calendar",physical_exhibition_calendar:"Physical Exhibition Calendar",my_selected_speech:"My selected speech"},speakers:{speaker:"Speaker",related:"Related speech"}};var T={common:{signOut:"退出登录",myITB:"我的ITB",more:"更多",failed:"操作失败",success:"操作成功"},menu:{home:"首页",partners:"合作伙伴与赞助商",showFloor:"Show floor"},myItb:{dockIcons:{chat:"聊天",requests:"会议邀约",business:"名片",help:"帮助",favourite:"收藏",coupon:"优惠卡包",notification:"提醒",settings:"设置"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"}}};const L=window.navigator.languages?window.navigator.languages[0]:window.navigator.language,R=O.get("itb-user-language",L);var A,D;(D=A||(A={})).EN="en-US",D.CN="zh-CN";const M={"en-US":j,"zh-CN":T},F=s({locale:R===A.CN?A.CN:A.EN,fallbackLocale:A.EN,messages:M});const B=new class{constructor(){return this.switchLanguage=()=>{this.antdLocale=this.isEn?l:c,moment.locale(this.antdLocale.locale),F.global.locale=this.isEn?A.EN:A.CN,O.set("itb-user-language",this.isEn?A.EN:A.CN)},this.isEn=R===A.EN,this.antdLocale=this.isEn?l:c,this.leftSideCollapsed=!1,this.rightSideCollapsed=!1,this.myItbModule=e.Chat,Vue.reactive(this)}};function U(){B.rightSideCollapsed=!B.rightSideCollapsed}const q=function(){return{appStore:B,toggleRightSide:U}};var H={setup(){const{appStore:e}=q();return{locale:e.antdLocale}}};H.render=function(e,t,o,n,a,r){const i=Vue.resolveComponent("router-view"),s=Vue.resolveComponent("a-config-provider");return Vue.openBlock(),Vue.createBlock(s,{locale:n.locale},{default:Vue.withCtx((()=>[Vue.createVNode(i)])),_:1},8,["locale"])},axios.defaults.baseURL="/api",axios.defaults.timeout=3e4,axios.defaults.headers.post["Content-Type"]="application/json";const z=axios.create();z.interceptors.request.use((async e=>{e.headers.lng=-1!=R.indexOf("zh")?"cn":"en";const t=X.token;return t&&(e.headers.Authorization=t),e}),(e=>(console.error(e),Promise.reject(e)))),z.interceptors.response.use((e=>{const t=e.data;return t.error?(console.error(t.error),alert(t.error),Promise.reject(new Error(t.error))):e}),(e=>{var t,o;const n=e.response;return n&&n.status&&n.data&&(n.status,console.error(n.data.Message),alert(n.data.Message)),Promise.reject(new Error(null!=(o=null==(t=null==n?void 0:n.data)?void 0:t.error)?o:"Network error"))}));const{CancelToken:W,isCancel:J}=axios;async function $(e,t){const o=W.source();try{let s=await z.post(e,t,{cancelToken:o.token});return((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&i(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&i(e,o,t[o]);return e})({},s.data).data}catch(s){throw J(s)&&console.log("Request canceled",s.message),s}}axios;var K=Object.defineProperty,G=Object.getOwnPropertyDescriptor;class Q extends class{constructor(){return this.loading=!1,Vue.reactive(this)}}{constructor(){super(),this.token=O.get("itb-auth-token","")}async login(e){let t=await $("/user/login",e);this.token=t,O.set("itb-auth-token",t)}removeToken(){this.token="",O.clear("itb-auth-token")}get userName(){var e,t;return this.user?R===A.CN?null==(e=this.user)?void 0:e.lastName:null==(t=this.user)?void 0:t.firstName:""}get role(){var e;return null==(e=this.user)?void 0:e.roleName}}((e,t,o,n)=>{for(var a,r=n>1?void 0:n?G(t,o):t,i=e.length-1;i>=0;i--)(a=e[i])&&(r=(n?a(t,o,r):a(r))||r);n&&r&&K(t,o,r)})([function(e,t,o){let n=o.value;o.value=async function(...e){try{return this.loading=!0,await n.call(this,...e)}catch(t){throw t}finally{this.loading=!1}}}],Q.prototype,"login",1);var X=new Q,Y=Vue.defineComponent({setup(){let{appStore:e}=q(),t=u();const{toggleRightSide:o}=q(),{t:n}=d({useScope:"global"});function a(e){switch(e){case"menu-myITB":o();break;case"menu-logout":X.token?X.removeToken():t.push("/login")}}return()=>Vue.createVNode(p,{overlayStyle:{minWidth:"120px"}},{default:()=>[Vue.createVNode("span",{style:{whiteSpace:"nowrap"}},[Vue.createVNode(m,{size:"small"},{icon:()=>Vue.createVNode(h,null,null)}),Vue.createVNode("span",{style:{margin:"0 6px",cursor:"pointer"}},[X.userName])])],overlay:()=>Vue.createVNode(_,{onClick:({item:e,key:t,keyPath:o})=>{a(t)}},{default:()=>[Vue.createVNode(_.Item,{key:"menu-myITB"},{default:()=>[n("common.myITB")],icon:()=>Vue.createVNode(V,{style:{opacity:e.rightSideCollapsed?0:1}},null)}),Vue.createVNode(_.Divider,null,null),Vue.createVNode(_.Item,{key:"menu-logout"},{default:()=>[X.token?n("common.signOut"):n("common.signIn")],icon:()=>Vue.createVNode(g,null,null)})]})})}});var Z="_headerWrap_1j5t8_1",ee="_logo_1j5t8_6",te="_gap_1j5t8_9",oe="_process_1j5t8_12",ne=Vue.defineComponent({name:"Headbar",setup(){const{appStore:e}=q();function t(e){console.log(e)}return Vue.watch((()=>e.isEn),e.switchLanguage),()=>Vue.createVNode("div",{class:Z},[Vue.createVNode("div",{class:ee},[Vue.createTextVNode("logo")]),Vue.createVNode("section",{class:te},null),Vue.createVNode("section",{class:oe},[" ",Vue.createVNode(f,{size:20},{default:()=>[Vue.createVNode(y.Search,{style:"width: 160px; border-radius: 60px;",onSearch:t},null),Vue.createVNode(b,{"checked-children":"En","un-checked-children":"汉",checked:e.isEn,"onUpdate:checked":t=>e.isEn=t},null),Vue.createVNode(Y,null,null)]})])])}});var ae="_header_c340l_1",re="_body_c340l_9",ie="_bodyLeft_c340l_14",se="_bodyMain_c340l_21",le="_bodyRight_c340l_27",ce="_bodyRightPad_c340l_30";let ue;const de={},pe=function(e,t){if(!t||0===t.length)return e();if(void 0===ue){const e=document.createElement("link").relList;ue=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in de)return;de[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":ue,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},me=Vue.createVNode("div",{style:{padding:"50px",textAlign:"center"}},[Vue.createVNode(v,{spin:!0},null)]),he=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.0fd25e5f.js")),["assets/index.0fd25e5f.js","assets/index.e85bd5fe.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:me}),_e=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.adeb8745.js")),["assets/index.adeb8745.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:me}),Ve=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.e5177836.js")),["assets/index.e5177836.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.57ccca06.js","assets/index.module.c72e20b5.css"]),loadingComponent:me}),ge=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.08c90d5e.js")),["assets/index.08c90d5e.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:me}),fe=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.63aaa003.js")),["assets/index.63aaa003.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.6bf839c5.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.57ccca06.js","assets/index.module.c72e20b5.css"]),loadingComponent:me}),ye=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.12139c7b.js")),["assets/index.12139c7b.js","assets/index.481ac9c8.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:me}),be=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.e9028f58.js")),["assets/index.e9028f58.js","assets/index.41f7f86a.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.57ccca06.js","assets/index.module.c72e20b5.css"]),loadingComponent:me}),ve=Vue.defineAsyncComponent({loader:()=>pe((()=>import("./index.819e608f.js")),["assets/index.819e608f.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.57ccca06.js","assets/index.module.c72e20b5.css"]),loadingComponent:me});var Ce=Vue.defineComponent({props:{module:{type:String,required:!0}},name:"MyItb",setup:t=>()=>function(){let o;if(!X.token)return Vue.createVNode(ge,null,null);switch(t.module){case e.Chat:o=Vue.createVNode(_e,null,null);break;case e.Coupon:o=Vue.createVNode(he,null,null);break;case e.Favourite:o=Vue.createVNode(Ve,null,null);break;case e.Meeting:o=Vue.createVNode(fe,null,null);break;case e.Help:o=Vue.createVNode(ve,null,null);break;case e.Card:o=Vue.createVNode(ye,null,null);break;case e.Notification:o=Vue.createVNode(be,null,null);break;default:o=Vue.createVNode(Vue.Fragment,null,null)}return o}()});var Ne="_wrapper_12404_109",Ie="_one_12404_117",Ee="_navRoundIcon_12404_123",ke="_navText_12404_126";const Se=C({scriptUrl:"//at.alicdn.com/t/font_2697722_uhirjax0hd.js"});var we=Vue.defineComponent({props:{label:{type:String,required:!0},iconSymbol:{type:String,required:!0},onClick:{type:Function,required:!1}},name:"MyItbIcon",setup:e=>()=>Vue.createVNode("div",{class:Ie,onClick:()=>{e.onClick&&e.onClick()}},[Vue.createVNode("div",{class:Ee},[Vue.createVNode(Se,{type:e.iconSymbol,style:{fontSize:"24px"}},null)]),Vue.createVNode("span",{class:ke},[e.label])])}),Pe=Vue.defineComponent({name:"RightDock",setup(){const{t:t}=d(),{appStore:o}=q();return()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(N,{title:t("common.myITB"),style:{margin:"28px 0 20px"}},{default:()=>[Vue.createVNode("div",{class:Ne},[Vue.createVNode(we,{iconSymbol:"icon-comments",label:t("myItb.dockIcons.chat"),onClick:()=>{o.myItbModule=e.Chat}},null),Vue.createVNode(we,{iconSymbol:"icon-training",label:t("myItb.dockIcons.requests"),onClick:()=>{o.myItbModule=e.Meeting}},null),Vue.createVNode(we,{iconSymbol:"icon-tool",label:t("myItb.dockIcons.business"),onClick:()=>{o.myItbModule=e.Card}},null),Vue.createVNode(we,{iconSymbol:"icon-survey",label:t("myItb.dockIcons.help"),onClick:()=>{o.myItbModule=e.Help}},null),Vue.createVNode(we,{iconSymbol:"icon-collection",label:t("myItb.dockIcons.favourite"),onClick:()=>{o.myItbModule=e.Favourite}},null),Vue.createVNode(we,{iconSymbol:"icon-waihuishuju",label:t("myItb.dockIcons.coupon"),onClick:()=>{o.myItbModule=e.Coupon}},null),Vue.createVNode(we,{iconSymbol:"icon-remind",label:t("myItb.dockIcons.notification"),onClick:()=>{o.myItbModule=e.Notification}},null),Vue.createVNode(we,{iconSymbol:"icon-set",label:t("myItb.dockIcons.settings"),onClick:()=>{o.myItbModule=e.Settings}},null)])]}),Vue.createVNode(Ce,{module:o.myItbModule},null)])}});const xe=Object.values({Home:{id:"Home",path:"/home",icon:"icon-home",label:"menu.home"},ShowFloor:{id:"ShowFloor",path:"/showFloor",icon:"icon-online-tracking",label:"menu.showFloor"},Recommend:{id:"Recommend",path:"/recommend",icon:"icon-jiaobiao",label:"menu.recommend"},Presentation:{id:"Presentation",path:"/presentation",icon:"icon-training",label:"menu.presentation"},Partners:{id:"Partners",path:"/partners",icon:"icon-trust",label:"menu.partners"},Events:{id:"Events",path:"/events",icon:"icon-calculator",label:"menu.events"},MyCalendar:{id:"MyCalendar",path:"/calendar",icon:"icon-calendar",label:"menu.calendar"},News:{id:"News",path:"/news",icon:"icon-namecard",label:"menu.news"}});var Oe,je,Te,Le,Re=Vue.defineComponent({name:"LeftSideMenu",setup(){const{t:e}=d({useScope:"global"});let t=u(),{path:o}=I(),n=Vue.reactive(["/"+o.split("/")[1]]);function a({key:e}){t.push(e)}return t.beforeEach(((e,t)=>{let o="/"+e.fullPath.split("/")[1];n[0]=o})),()=>{let t;return Vue.createVNode(_,{mode:"inline",inlineCollapsed:!1,selectedKeys:n,onClick:a},"function"==typeof(o=t=xe.map((t=>Vue.createVNode(_.Item,{key:t.path},{default:()=>[e(t.label)],icon:()=>Vue.createVNode(Se,{type:t.icon,style:{fontSize:"20px"}},null)}))))||"[object Object]"===Object.prototype.toString.call(o)&&!Vue.isVNode(o)?t:{default:()=>[t]});var o}}}),Ae=Vue.defineComponent({name:"DefaultLayout",setup(e,{slots:t}){let{appStore:o}=q();return()=>Vue.createVNode(E,null,{default:()=>[Vue.createVNode(E.Header,{class:ae},{default:()=>[Vue.createVNode(ne,null,null)]}),Vue.createVNode(E,{class:re},{default:()=>[Vue.createVNode(E.Sider,{collapsible:!0,collapsedWidth:60,breakpoint:o.leftSideCollapsed?void 0:"md",width:240,theme:"light",collapsed:o.leftSideCollapsed,"onUpdate:collapsed":e=>o.leftSideCollapsed=e,class:ie},{default:()=>[Vue.createVNode(Re,null,null)]}),Vue.createVNode(E.Content,{class:se},{default:()=>[Vue.createVNode(k,null,null)]}),Vue.createVNode(E.Sider,{collapsible:!0,collapsedWidth:.1,breakpoint:o.rightSideCollapsed?void 0:"xl",collapsed:o.rightSideCollapsed,"onUpdate:collapsed":e=>o.rightSideCollapsed=e,reverseArrow:!0,trigger:null,theme:"light",width:394,class:le},{default:()=>[Vue.createVNode("div",{class:ce},[Vue.createVNode(Pe,null,null)])]})]})]})}});(je=Oe||(Oe={})).buyer="buyer",je.exhibition="exhibition",je.visitor="visitor",je.ITB="ITB",je.BuyerCallCenter="BuyerCallCenter",je.ExhibitorCallCenter="ExhibitorCallCenter",(Le=Te||(Te={})).Fully="Fully",Le.Partial="Partial",Le.Free="Free";var De=[{name:"MyCalendar",path:"/calendar",component:()=>pe((()=>import("./index.afd357ee.js")),["assets/index.afd357ee.js","assets/index.576bdde3.css","assets/index.41f7f86a.css","assets/index.5c11ed64.css","assets/index.07051d1d.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{roles:[Oe.buyer,Oe.exhibition]}}],Me=[{name:"Error403",path:"/403",component:()=>pe((()=>import("./403.4fc8de54.js")),["assets/403.4fc8de54.js","assets/index.2028f72e.js","assets/index.54405acc.css"])},{name:"Error404",path:"/:pathMatch(.*)*",component:()=>pe((()=>import("./404.5ad37eb7.js")),["assets/404.5ad37eb7.js","assets/index.2028f72e.js","assets/index.54405acc.css"])}],Fe=[{name:"Login",path:"/login",component:()=>pe((()=>import("./index.c4af5a15.js")),["assets/index.c4af5a15.js","assets/index.06440388.css","assets/index.module.ba4ef8ce.js","assets/index.module.3e5735ad.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"SignUp",path:"/signUp",component:()=>pe((()=>import("./signUp.707d73ea.js")),["assets/signUp.707d73ea.js","assets/index.module.ba4ef8ce.js","assets/index.module.3e5735ad.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])}];const Be=[{name:"DefaultLayout",component:Ae,path:"/",redirect:"/home",children:[...[{name:"Home",path:"/home",component:()=>pe((()=>import("./index.c21165e4.js")),["assets/index.c21165e4.js","assets/index.ffabeefe.css","assets/index.4ea1730f.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css"])},{name:"Partners",path:"/partners",component:()=>pe((()=>import("./index.d566497d.js")),["assets/index.d566497d.js","assets/index.14b1c1b1.css","assets/index.4ea1730f.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"Events",path:"/events",meta:{roles:[Oe.buyer,Oe.exhibition]},component:()=>pe((()=>import("./index.f5823de5.js")),["assets/index.f5823de5.js","assets/index.11093924.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/index.07051d1d.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])}],...[{name:"SpeakerList",path:"/speakers",component:()=>pe((()=>import("./index.b4899bbd.js")),["assets/index.b4899bbd.js","assets/index.8e2ef7fc.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"SpeakerDetail",path:"/speakers/:speakerId",component:()=>pe((()=>import("./Detail.2aa53c9b.js")),["assets/Detail.2aa53c9b.js","assets/Detail.08f9ece2.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),props:!0}],...[{name:"Presentation",path:"/presentation",component:()=>pe((()=>import("./index.e0b35721.js")),["assets/index.e0b35721.js","assets/index.11093924.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{}}],...[{name:"ShowFloor-Company",path:"/showFloor",component:()=>pe((()=>import("./index.8bf5ceba.js")),["assets/index.8bf5ceba.js","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{}},{name:"ShowFloor-Product",path:"/showFloor/product",component:()=>pe((()=>import("./product.87d2cb6c.js")),[])}],...[{name:"NewsIndex",path:"/news",component:()=>pe((()=>import("./index.0ce1e1ef.js")),["assets/index.0ce1e1ef.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"])},{name:"NewsDetail",path:"/news/:newsId",component:()=>pe((()=>import("./Detail.5ea40f6c.js")),["assets/Detail.5ea40f6c.js","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"]),props:!0}],...[{name:"RecommendIndex",path:"/recommend",component:()=>pe((()=>import("./index.f184aa2c.js")),["assets/index.f184aa2c.js","assets/index.14b1c1b1.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{roles:[Oe.buyer,Oe.exhibition,Oe.visitor]}}],...De]},...Fe,...Me],Ue=S({history:w(),routes:Be});Ue.beforeEach(((e,t,o)=>{var n;if(null==(n=e.meta)?void 0:n.roles){const{role:t}=X;t?t&&-1!==e.meta.roles.indexOf(t)?o():o({name:"Error403"}):o({path:"/login",query:{redirect:e.fullPath}})}else o()})),Vue.createApp(H).use(Ue).use(F).mount("#app");export{X as a};
