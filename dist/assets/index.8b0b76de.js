var e,t,o=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;import{c as i,d as l,z as c,u,a as d,D as p,A as m,U as h,M as V,C as _,L as g,S as f,I as b,b as y,e as v,f as C,g as N,h as k,i as I,R as E,j as S,k as w}from"./vendor.0458fb05.js";(t=e||(e={})).Chat="Chat",t.Meeting="Meeting",t.Card="Card",t.Help="Help",t.Favourite="Favourite",t.Coupon="Coupon",t.Notification="Notification",t.Settings="Settings";const P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},x=class{static get(e,t){let o=P(x.storage.getItem(e));return void 0===o?t:o}static getSession(e,t){let o=P(x.session.getItem(e));return void 0===o?t:o}static set(e,t){void 0!==t&&x.storage.setItem(e,JSON.stringify(t))}static setSession(e,t){void 0!==t&&x.session.setItem(e,JSON.stringify(t))}static remove(e){x.storage.removeItem(e)}static removeSession(e){x.session.removeItem(e)}static clear(e){e?Object.keys(x.storage).forEach((t=>{0===t.indexOf(e)&&x.storage.removeItem(t)})):x.storage.clear()}static clearSession(e){e?Object.keys(x.session).forEach((t=>{0===t.indexOf(e)&&x.session.removeItem(t)})):x.session.clear()}};let O=x;O.storage=localStorage,O.session=sessionStorage;var T={common:{myITB:"My ITB",more:"more",signOut:"Sign Out",failed:"Action failed",success:"Action was successful"},myItb:{dockIcons:{chat:"Chat",requests:"Meeting Requests",business:"Business Card",help:"Help",favourite:"Favourite",coupon:"Coupon Package",notification:"Notification",settings:"Settings"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"},help:{enter:"Enter",contact_sponsor:"Contact the sponsor",want_settle:"I want to settle into",shuttle_bus:"Shuttle bus services",hotel_services:"Hotel services",support:"Service & Support"}},menu:{home:"Home",presentation:"Presentation Hub",partners:"Partners & Sponsors",speakers:"Speakers",news:"News",events:"Events",calendar:"My Calendar",recommend:"Recommend",showFloor:"Show floor"},login:{agreeTip:"User agreement has been reviewed and agreed.",agreement:"",registTip:"No account? Please register here.",registForm:"Business Registration",loginForm:"System login",login:"Log in",username:"Username",usernameTip:"Please input user name",password:"Password",passwordTip:"Please input password"},homePage:{sponsor:"sponsor / partners",speaker:"speaker",presentation:"Presentation Hub / Conference Live",recommended:"recommended",news:"News"},partners:{partners:"Partners",sponsors:"Sponsors"},events:{online:"Online",offline:"Offline"},calendar:{virtual_platform_calendar:"Virtual Platform Calendar",physical_exhibition_calendar:"Physical Exhibition Calendar",my_selected_speech:"My selected speech"},speakers:{speaker:"Speaker",related:"Related speech"}};var j={common:{signOut:"退出登录",myITB:"我的ITB",more:"更多",failed:"操作失败",success:"操作成功"},menu:{home:"首页",partners:"合作伙伴与赞助商",showFloor:"Show floor"},myItb:{dockIcons:{chat:"聊天",requests:"会议邀约",business:"名片",help:"帮助",favourite:"收藏",coupon:"优惠卡包",notification:"提醒",settings:"设置"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"}}};const L=window.navigator.languages?window.navigator.languages[0]:window.navigator.language,R=O.get("itb-user-language",L);var A,D;(D=A||(A={})).EN="en-US",D.CN="zh-CN";const M={"en-US":T,"zh-CN":j},F=i({locale:R===A.CN?A.CN:A.EN,fallbackLocale:A.EN,messages:M});const B=new class{constructor(){return this.switchLanguage=()=>{this.antdLocale=this.isEn?l:c,moment.locale(this.antdLocale.locale),F.global.locale=this.isEn?A.EN:A.CN,O.set("itb-user-language",this.isEn?A.EN:A.CN)},this.isEn=R===A.EN,this.antdLocale=this.isEn?l:c,this.leftSideCollapsed=!1,this.rightSideCollapsed=!1,this.myItbModule=e.Chat,Vue.reactive(this)}};function H(){B.rightSideCollapsed=!B.rightSideCollapsed}const U=function(){return{appStore:B,toggleRightSide:H}};var q,W,z,J,$={setup(){const{appStore:e}=U();return{locale:e.antdLocale}}};$.render=function(e,t,o,n,a,r){const s=Vue.resolveComponent("router-view"),i=Vue.resolveComponent("a-config-provider");return Vue.openBlock(),Vue.createBlock(i,{locale:n.locale},{default:Vue.withCtx((()=>[Vue.createVNode(s)])),_:1},8,["locale"])},(W=q||(q={})).buyer="buyer",W.exhibition="exhibition",W.visitor="visitor",W.ITB="ITB",W.BuyerCallCenter="BuyerCallCenter",W.ExhibitorCallCenter="ExhibitorCallCenter",(J=z||(z={})).Fully="Fully",J.Partial="Partial",J.Free="Free",axios.defaults.baseURL="/",axios.defaults.timeout=3e4,axios.defaults.headers.post["Content-Type"]="application/json";const K=axios.create();K.interceptors.response.use((e=>{const t=e.data;return t.error?(alert(t.error),Promise.reject(new Error(t.error))):e}),(e=>{var t,o;const n=e.response;if(n&&n.status&&n.data)switch(n.status){case 404:alert(n.data.error);break;default:alert(n.data.Message)}return Promise.reject(new Error(null!=(o=null==(t=null==n?void 0:n.data)?void 0:t.error)?o:"Network error"))}));const{CancelToken:G,isCancel:Q}=axios;async function X(e,t){const o=G.source();try{let i=await K.post(e,t,{cancelToken:o.token});return((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&s(e,o,t[o]);return e})({},i.data).data}catch(i){throw Q(i)&&console.log("Request canceled",i.message),i}}axios;var Y=new class{constructor(){this.token=O.get("itb-auth-token","fakeToken")}async login(e){try{let t=await X("/api/user/login",e);this.setToken(t)}finally{}}setToken(e){const t=e;O.set("itb-auth-token",t),this.token=t}removeToken(){this.token="",O.clear("itb-auth-token")}get currentUser(){return this.user}get role(){return q.buyer}},Z=Vue.defineComponent({setup(){let{appStore:e}=U(),t=u();const{toggleRightSide:o}=U(),{t:n}=d({useScope:"global"});function a(e){switch(e){case"menu-myITB":o();break;case"menu-logout":Y.removeToken(),t.push("/login")}}return()=>Vue.createVNode(p,{overlayStyle:{minWidth:"120px"}},{default:()=>[Vue.createVNode("span",{style:{whiteSpace:"nowrap"}},[Vue.createVNode(m,{size:"small"},{icon:()=>Vue.createVNode(h,null,null)}),Vue.createVNode("span",{style:{margin:"0 6px",cursor:"pointer"}},[Vue.createTextVNode("Visitor")])])],overlay:()=>Vue.createVNode(V,{onClick:({item:e,key:t,keyPath:o})=>{a(t)}},{default:()=>[Vue.createVNode(V.Item,{key:"menu-myITB"},{default:()=>[n("common.myITB")],icon:()=>Vue.createVNode(_,{style:{opacity:e.rightSideCollapsed?0:1}},null)}),Vue.createVNode(V.Divider,null,null),Vue.createVNode(V.Item,{key:"menu-logout"},{default:()=>[n("common.signOut")],icon:()=>Vue.createVNode(g,null,null)})]})})}});var ee="_headerWrap_1j5t8_1",te="_logo_1j5t8_6",oe="_gap_1j5t8_9",ne="_process_1j5t8_12",ae=Vue.defineComponent({name:"Headbar",setup(){const{appStore:e}=U();function t(e){console.log(e)}return Vue.watch((()=>e.isEn),e.switchLanguage),()=>Vue.createVNode("div",{class:ee},[Vue.createVNode("div",{class:te},[Vue.createTextVNode("logo")]),Vue.createVNode("section",{class:oe},null),Vue.createVNode("section",{class:ne},[" ",Vue.createVNode(f,{size:20},{default:()=>[Vue.createVNode(b.Search,{style:"width: 160px; border-radius: 60px;",onSearch:t},null),Vue.createVNode(y,{"checked-children":"En","un-checked-children":"汉",checked:e.isEn,"onUpdate:checked":t=>e.isEn=t},null),Vue.createVNode(Z,null,null)]})])])}});var re="_header_c340l_1",se="_body_c340l_9",ie="_bodyLeft_c340l_14",le="_bodyMain_c340l_21",ce="_bodyRight_c340l_27",ue="_bodyRightPad_c340l_30";let de;const pe={},me=function(e,t){if(!t||0===t.length)return e();if(void 0===de){const e=document.createElement("link").relList;de=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in pe)return;pe[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":de,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},he=Vue.createVNode("div",{style:{padding:"50px",textAlign:"center"}},[Vue.createVNode(v,{spin:!0},null)]),Ve=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.278a70f4.js")),["assets/index.278a70f4.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:he}),_e=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.c4b08679.js")),["assets/index.c4b08679.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:he}),ge=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.f2f124eb.js")),["assets/index.f2f124eb.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:he}),fe=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.3688f053.js")),["assets/index.3688f053.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),loadingComponent:he}),be=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.266d989a.js")),["assets/index.266d989a.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.6bf839c5.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:he}),ye=Vue.defineAsyncComponent({loader:()=>me((()=>import("./index.36c435de.js")),["assets/index.36c435de.js","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:he});var ve=Vue.defineComponent({props:{module:{type:String,required:!0}},name:"MyItb",setup:t=>()=>function(){let o;if(!Y.token)return Vue.createVNode(fe,null,null);switch(t.module){case e.Chat:o=Vue.createVNode(_e,null,null);break;case e.Coupon:o=Vue.createVNode(Ve,null,null);break;case e.Favourite:o=Vue.createVNode(ge,null,null);break;case e.Meeting:o=Vue.createVNode(be,null,null);break;case e.Help:o=Vue.createVNode(ye,null,null);break;default:o=he}return o}()});var Ce="_wrapper_12404_109",Ne="_one_12404_117",ke="_navRoundIcon_12404_123",Ie="_navText_12404_126";const Ee=C({scriptUrl:"//at.alicdn.com/t/font_2697722_uhirjax0hd.js"});var Se=Vue.defineComponent({props:{label:{type:String,required:!0},iconSymbol:{type:String,required:!0},onClick:{type:Function,required:!1}},name:"MyItbIcon",setup:e=>()=>Vue.createVNode("div",{class:Ne,onClick:()=>{e.onClick&&e.onClick()}},[Vue.createVNode("div",{class:ke},[Vue.createVNode(Ee,{type:e.iconSymbol,style:{fontSize:"24px"}},null)]),Vue.createVNode("span",{class:Ie},[e.label])])}),we=Vue.defineComponent({name:"RightDock",setup(){const{t:t}=d(),{appStore:o}=U();return()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(N,{title:t("common.myITB"),style:{marginTop:"28px"}},{default:()=>[Vue.createVNode("div",{class:Ce},[Vue.createVNode(Se,{iconSymbol:"icon-comments",label:t("myItb.dockIcons.chat"),onClick:()=>{o.myItbModule=e.Chat}},null),Vue.createVNode(Se,{iconSymbol:"icon-training",label:t("myItb.dockIcons.requests"),onClick:()=>{o.myItbModule=e.Meeting}},null),Vue.createVNode(Se,{iconSymbol:"icon-tool",label:t("myItb.dockIcons.business"),onClick:()=>{o.myItbModule=e.Card}},null),Vue.createVNode(Se,{iconSymbol:"icon-survey",label:t("myItb.dockIcons.help"),onClick:()=>{o.myItbModule=e.Help}},null),Vue.createVNode(Se,{iconSymbol:"icon-collection",label:t("myItb.dockIcons.favourite"),onClick:()=>{o.myItbModule=e.Favourite}},null),Vue.createVNode(Se,{iconSymbol:"icon-waihuishuju",label:t("myItb.dockIcons.coupon"),onClick:()=>{o.myItbModule=e.Coupon}},null),Vue.createVNode(Se,{iconSymbol:"icon-remind",label:t("myItb.dockIcons.notification"),onClick:()=>{o.myItbModule=e.Notification}},null),Vue.createVNode(Se,{iconSymbol:"icon-set",label:t("myItb.dockIcons.settings"),onClick:()=>{o.myItbModule=e.Settings}},null)])]}),Vue.createVNode(ve,{module:o.myItbModule},null)])}});const Pe=Object.values({Home:{id:"Home",path:"/home",icon:"icon-home",label:"menu.home"},ShowFloor:{id:"ShowFloor",path:"/showFloor",icon:"icon-online-tracking",label:"menu.showFloor"},Recommend:{id:"Recommend",path:"/recommend",icon:"icon-jiaobiao",label:"menu.recommend"},Presentation:{id:"Presentation",path:"/presentation",icon:"icon-training",label:"menu.presentation"},Partners:{id:"Partners",path:"/partners",icon:"icon-trust",label:"menu.partners"},Events:{id:"Events",path:"/events",icon:"icon-calculator",label:"menu.events"},MyCalendar:{id:"MyCalendar",path:"/calendar",icon:"icon-calendar",label:"menu.calendar"},News:{id:"News",path:"/news",icon:"icon-namecard",label:"menu.news"}});var xe=Vue.defineComponent({name:"LeftSideMenu",setup(){const{t:e}=d({useScope:"global"});let t=u(),{path:o}=k(),n=Vue.reactive(["/"+o.split("/")[1]]);function a({key:e}){t.push(e)}return t.beforeEach(((e,t)=>{let o="/"+e.fullPath.split("/")[1];n[0]=o})),()=>{let t;return Vue.createVNode(V,{mode:"inline",inlineCollapsed:!1,selectedKeys:n,onClick:a},"function"==typeof(o=t=Pe.map((t=>Vue.createVNode(V.Item,{key:t.path},{default:()=>[e(t.label)],icon:()=>Vue.createVNode(Ee,{type:t.icon,style:{fontSize:"20px"}},null)}))))||"[object Object]"===Object.prototype.toString.call(o)&&!Vue.isVNode(o)?t:{default:()=>[t]});var o}}}),Oe=Vue.defineComponent({name:"DefaultLayout",setup(e,{slots:t}){let{appStore:o}=U();return()=>Vue.createVNode(I,null,{default:()=>[Vue.createVNode(I.Header,{class:re},{default:()=>[Vue.createVNode(ae,null,null)]}),Vue.createVNode(I,{class:se},{default:()=>[Vue.createVNode(I.Sider,{collapsible:!0,collapsedWidth:60,breakpoint:o.leftSideCollapsed?void 0:"md",width:240,theme:"light",collapsed:o.leftSideCollapsed,"onUpdate:collapsed":e=>o.leftSideCollapsed=e,class:ie},{default:()=>[Vue.createVNode(xe,null,null)]}),Vue.createVNode(I.Content,{class:le},{default:()=>[Vue.createVNode(E,null,null)]}),Vue.createVNode(I.Sider,{collapsible:!0,collapsedWidth:.1,breakpoint:o.rightSideCollapsed?void 0:"xl",collapsed:o.rightSideCollapsed,"onUpdate:collapsed":e=>o.rightSideCollapsed=e,reverseArrow:!0,trigger:null,theme:"light",width:394,class:ce},{default:()=>[Vue.createVNode("div",{class:ue},[Vue.createVNode(we,null,null)])]})]})]})}});var Te=[{name:"MyCalendar",path:"/calendar",component:()=>me((()=>import("./index.da2177a6.js")),["assets/index.da2177a6.js","assets/index.a8d19d73.css","assets/index.5c11ed64.css","assets/index.07051d1d.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{roles:[q.buyer,q.exhibition]}}],je=[{name:"Error403",path:"/403",component:()=>me((()=>import("./403.e783c8b3.js")),["assets/403.e783c8b3.js","assets/index.ebdbe35f.js","assets/index.54405acc.css"])},{name:"Error404",path:"/:pathMatch(.*)*",component:()=>me((()=>import("./404.4f9a78c2.js")),["assets/404.4f9a78c2.js","assets/index.ebdbe35f.js","assets/index.54405acc.css"])}],Le=[{name:"Login",path:"/login",component:()=>me((()=>import("./index.7f59c23d.js")),["assets/index.7f59c23d.js","assets/index.06440388.css","assets/index.module.42e5627f.js","assets/index.module.3e5735ad.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"SignUp",path:"/signUp",component:()=>me((()=>import("./signUp.06efb0f3.js")),["assets/signUp.06efb0f3.js","assets/index.module.42e5627f.js","assets/index.module.3e5735ad.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])}];const Re=[{name:"DefaultLayout",component:Oe,path:"/",redirect:"/home",children:[...[{name:"Home",path:"/home",component:()=>me((()=>import("./index.3109a12e.js")),["assets/index.3109a12e.js","assets/index.ffabeefe.css","assets/index.4ea1730f.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css"])},{name:"Partners",path:"/partners",component:()=>me((()=>import("./index.d566497d.js")),["assets/index.d566497d.js","assets/index.14b1c1b1.css","assets/index.4ea1730f.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"Events",path:"/events",meta:{roles:[q.buyer,q.exhibition]},component:()=>me((()=>import("./index.f5823de5.js")),["assets/index.f5823de5.js","assets/index.11093924.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/index.07051d1d.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])}],...[{name:"SpeakerList",path:"/speakers",component:()=>me((()=>import("./index.b4899bbd.js")),["assets/index.b4899bbd.js","assets/index.8e2ef7fc.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"])},{name:"SpeakerDetail",path:"/speakers/:speakerId",component:()=>me((()=>import("./Detail.2aa53c9b.js")),["assets/Detail.2aa53c9b.js","assets/Detail.08f9ece2.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),props:!0}],...[{name:"Presentation",path:"/presentation",component:()=>me((()=>import("./index.e0b35721.js")),["assets/index.e0b35721.js","assets/index.11093924.css","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{}}],...[{name:"ShowFloor-Company",path:"/showFloor",component:()=>me((()=>import("./index.8bf5ceba.js")),["assets/index.8bf5ceba.js","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{}},{name:"ShowFloor-Product",path:"/showFloor/product",component:()=>me((()=>import("./product.87d2cb6c.js")),[])}],...[{name:"NewsIndex",path:"/news",component:()=>me((()=>import("./index.0ce1e1ef.js")),["assets/index.0ce1e1ef.js","assets/index.ee7aeae6.css","assets/index.5c11ed64.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"])},{name:"NewsDetail",path:"/news/:newsId",component:()=>me((()=>import("./Detail.5ea40f6c.js")),["assets/Detail.5ea40f6c.js","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"]),props:!0}],...[{name:"RecommendIndex",path:"/recommend",component:()=>me((()=>import("./index.f184aa2c.js")),["assets/index.f184aa2c.js","assets/index.14b1c1b1.css","assets/MainSectionHead.073980c9.js","assets/MainSectionHead.6159b47b.css","assets/vendor.0458fb05.js","assets/vendor.043d8025.css"]),meta:{roles:[q.buyer,q.exhibition,q.visitor]}}],...Te]},...Le,...je],Ae=S({history:w(),routes:Re});Ae.beforeEach(((e,t,o)=>{var n;if(null==(n=e.meta)?void 0:n.roles){const{role:t}=Y;t?t&&-1!==e.meta.roles.indexOf(t)?o():o({name:"Error403"}):o({path:"/login",query:{redirect:e.fullPath}})}else o()})),Vue.createApp($).use(Ae).use(F).mount("#app");export{Y as a};
