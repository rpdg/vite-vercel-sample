import{c as e,d as t,z as n,h as o,r as a,a as s,o as i,b as l,w as r,_ as c,e as d,f as u,u as p,g as m,D as _,A as h,U as g,i as b,M as y,C as f,L as v,j as I,S,I as C,k as E,l as k,m as w,n as P,F as x,p as O,q as T,s as L,t as j,R,v as D,x as A,y as M}from"./vendor.91bb4923.js";var N,F;(F=N||(N={})).Chat="Chat",F.Meeting="Meeting",F.Card="Card",F.Help="Help",F.Favourite="Favourite",F.Coupon="Coupon",F.Notification="Notification",F.Settings="Settings";const V=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},B=class{static get(e,t){let n=V(B.storage.getItem(e));return void 0===n?t:n}static getSession(e,t){let n=V(B.session.getItem(e));return void 0===n?t:n}static set(e,t){void 0!==t&&B.storage.setItem(e,JSON.stringify(t))}static setSession(e,t){void 0!==t&&B.session.setItem(e,JSON.stringify(t))}static remove(e){B.storage.removeItem(e)}static removeSession(e){B.session.removeItem(e)}static clear(e){e?Object.keys(B.storage).forEach((t=>{0===t.indexOf(e)&&B.storage.removeItem(t)})):B.storage.clear()}static clearSession(e){e?Object.keys(B.session).forEach((t=>{0===t.indexOf(e)&&B.session.removeItem(t)})):B.session.clear()}};let H=B;H.storage=localStorage,H.session=sessionStorage;var q={common:{myITB:"My ITB",more:"more",signOut:"Sign Out",failed:"Action failed",success:"Action was successful"},myItb:{dockIcons:{chat:"Chat",requests:"Meeting Requests",business:"Business Card",help:"Help",favourite:"Favourite",coupon:"Coupon Package",notification:"Notification",settings:"Settings"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"},help:{enter:"Enter",contact_sponsor:"Contact the sponsor",want_settle:"I want to settle into",shuttle_bus:"Shuttle bus services",hotel_services:"Hotel services",support:"Service & Support"}},menu:{home:"Home",presentation:"Presentation Hub",partners:"Partners & Sponsors",speakers:"Speakers",news:"News",events:"Events",calendar:"My Calendar",recommend:"Recommend",showFloor:"Show floor"},login:{agreeTip:"User agreement has been reviewed and agreed.",agreement:"",registTip:"No account? Please register here.",registForm:"Business Registration",loginForm:"System login",login:"Log in",username:"Username",usernameTip:"Please input user name",password:"Password",passwordTip:"Please input password"},homePage:{sponsor:"sponsor / partners",speaker:"speaker",presentation:"Presentation Hub / Conference Live",recommended:"recommended",news:"News"},partners:{partners:"Partners",sponsors:"Sponsors"},events:{online:"Online",offline:"Offline"},calendar:{virtual_platform_calendar:"Virtual Platform Calendar",physical_exhibition_calendar:"Physical Exhibition Calendar",my_selected_speech:"My selected speech"},speakers:{speaker:"Speaker",related:"Related speech"}};var U={common:{signOut:"退出登录",myITB:"我的ITB",more:"更多",failed:"操作失败",success:"操作成功"},menu:{home:"首页",partners:"合作伙伴与赞助商",showFloor:"Show floor"},myItb:{dockIcons:{chat:"聊天",requests:"会议邀约",business:"名片",help:"帮助",favourite:"收藏",coupon:"优惠卡包",notification:"提醒",settings:"设置"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"}}};const W=window.navigator.languages?window.navigator.languages[0]:window.navigator.language,z=H.get("itb-user-language",W);var J,$;($=J||(J={})).EN="en-US",$.CN="zh-CN";const K={"en-US":q,"zh-CN":U},G=e({locale:z===J.CN?J.CN:J.EN,fallbackLocale:J.EN,messages:K});const Q=new class{constructor(){return this.switchLanguage=()=>{this.antdLocale=this.isEn?t:n,o.locale(this.antdLocale.locale),G.global.locale=this.isEn?J.EN:J.CN,H.set("itb-user-language",this.isEn?J.EN:J.CN)},this.isEn=z===J.EN,this.antdLocale=this.isEn?t:n,this.leftSideCollapsed=!1,this.rightSideCollapsed=!1,this.myItbModule=N.Chat,a(this)}};function X(){Q.rightSideCollapsed=!Q.rightSideCollapsed}const Y=function(){return{appStore:Q,toggleRightSide:X}};var Z,ee,te,ne,oe={setup(){const{appStore:e}=Y();return{locale:e.antdLocale}}};oe.render=function(e,t,n,o,a,u){const p=s("router-view"),m=c;return i(),l(m,{locale:o.locale},{default:r((()=>[d(p)])),_:1},8,["locale"])},(ee=Z||(Z={})).buyer="buyer",ee.exhibition="exhibition",ee.visitor="visitor",ee.ITB="ITB",ee.BuyerCallCenter="BuyerCallCenter",ee.ExhibitorCallCenter="ExhibitorCallCenter",(ne=te||(te={})).Fully="Fully",ne.Partial="Partial",ne.Free="Free";var ae=new class{constructor(){this.token=H.get("itb-auth-token","fakeToken")}setToken(e){const t=e;H.set("itb-auth-token",t),this.token=t}removeToken(){this.token="",H.clear("itb-auth-token")}get currentUser(){return this.user}get role(){return Z.buyer}},se=u({setup(){let{appStore:e}=Y(),t=p();const{toggleRightSide:n}=Y(),{t:o}=m({useScope:"global"});function a(e){switch(e){case"menu-myITB":n();break;case"menu-logout":ae.removeToken(),t.push("/login")}}return()=>d(_,{overlayStyle:{minWidth:"120px"}},{default:()=>[d("span",{style:{whiteSpace:"nowrap"}},[d(h,{size:"small"},{icon:()=>d(g,null,null)}),d("span",{style:{margin:"0 6px",cursor:"pointer"}},[b("Admin")])])],overlay:()=>d(y,{onClick:({item:e,key:t,keyPath:n})=>{a(t)}},{default:()=>[d(y.Item,{key:"menu-myITB"},{default:()=>[o("common.myITB")],icon:()=>d(f,{style:{opacity:e.rightSideCollapsed?0:1}},null)}),d(y.Divider,null,null),d(y.Item,{key:"menu-logout"},{default:()=>[o("common.signOut")],icon:()=>d(v,null,null)})]})})}});var ie="_headerWrap_1j5t8_1",le="_logo_1j5t8_6",re="_gap_1j5t8_9",ce="_process_1j5t8_12",de=u({name:"Headbar",setup(){const{appStore:e}=Y();function t(e){console.log(e)}return I((()=>e.isEn),e.switchLanguage),()=>d("div",{class:ie},[d("div",{class:le},[b("logo")]),d("section",{class:re},null),d("section",{class:ce},[" ",d(S,{size:20},{default:()=>[d(C.Search,{style:"width: 160px; border-radius: 60px;",onSearch:t},null),d(E,{"checked-children":"En","un-checked-children":"汉",checked:e.isEn,"onUpdate:checked":t=>e.isEn=t},null),d(se,null,null)]})])])}});var ue="_header_c340l_1",pe="_body_c340l_9",me="_bodyLeft_c340l_14",_e="_bodyMain_c340l_21",he="_bodyRight_c340l_27",ge="_bodyRightPad_c340l_30";let be;const ye={},fe=function(e,t){if(!t||0===t.length)return e();if(void 0===be){const e=document.createElement("link").relList;be=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in ye)return;ye[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":be,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},ve=d("div",{style:{padding:"50px",textAlign:"center"}},[d(k,{spin:!0},null)]),Ie=w({loader:()=>fe((()=>import("./index.b564bb06.js")),["assets/index.b564bb06.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css"]),loadingComponent:ve}),Se=w({loader:()=>fe((()=>import("./index.8216e0d9.js")),["assets/index.8216e0d9.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css"]),loadingComponent:ve}),Ce=w({loader:()=>fe((()=>import("./index.7b76e755.js")),["assets/index.7b76e755.js","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:ve}),Ee=w({loader:()=>fe((()=>import("./index.318daac6.js")),["assets/index.318daac6.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css"]),loadingComponent:ve}),ke=w({loader:()=>fe((()=>import("./index.2dabcc99.js")),["assets/index.2dabcc99.js","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/index.6bf839c5.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:ve}),we=w({loader:()=>fe((()=>import("./index.7ff4bacd.js")),["assets/index.7ff4bacd.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.module.d4154b01.js","assets/index.module.a41079b5.css"]),loadingComponent:ve});var Pe=u({props:{module:{type:String,required:!0}},name:"MyItb",setup:e=>()=>function(){let t;if(!ae.token)return d(Ee,null,null);switch(e.module){case N.Chat:t=d(Se,null,null);break;case N.Coupon:t=d(Ie,null,null);break;case N.Favourite:t=d(Ce,null,null);break;case N.Meeting:t=d(ke,null,null);break;case N.Help:t=d(we,null,null);break;default:t=ve}return t}()});var xe="_wrapper_12404_109",Oe="_one_12404_117",Te="_navRoundIcon_12404_123",Le="_navText_12404_126";const je=P({scriptUrl:"//at.alicdn.com/t/font_2697722_uhirjax0hd.js"});var Re=u({props:{label:{type:String,required:!0},iconSymbol:{type:String,required:!0},onClick:{type:Function,required:!1}},name:"MyItbIcon",setup:e=>()=>d("div",{class:Oe,onClick:()=>{e.onClick&&e.onClick()}},[d("div",{class:Te},[d(je,{type:e.iconSymbol,style:{fontSize:"24px"}},null)]),d("span",{class:Le},[e.label])])}),De=u({name:"RightDock",setup(){const{t:e}=m(),{appStore:t}=Y();return()=>d(x,null,[d(O,{title:e("common.myITB"),style:{marginTop:"28px"}},{default:()=>[d("div",{class:xe},[d(Re,{iconSymbol:"icon-comments",label:e("myItb.dockIcons.chat"),onClick:()=>{t.myItbModule=N.Chat}},null),d(Re,{iconSymbol:"icon-training",label:e("myItb.dockIcons.requests"),onClick:()=>{t.myItbModule=N.Meeting}},null),d(Re,{iconSymbol:"icon-tool",label:e("myItb.dockIcons.business"),onClick:()=>{t.myItbModule=N.Card}},null),d(Re,{iconSymbol:"icon-survey",label:e("myItb.dockIcons.help"),onClick:()=>{t.myItbModule=N.Help}},null),d(Re,{iconSymbol:"icon-collection",label:e("myItb.dockIcons.favourite"),onClick:()=>{t.myItbModule=N.Favourite}},null),d(Re,{iconSymbol:"icon-waihuishuju",label:e("myItb.dockIcons.coupon"),onClick:()=>{t.myItbModule=N.Coupon}},null),d(Re,{iconSymbol:"icon-remind",label:e("myItb.dockIcons.notification"),onClick:()=>{t.myItbModule=N.Notification}},null),d(Re,{iconSymbol:"icon-set",label:e("myItb.dockIcons.settings"),onClick:()=>{t.myItbModule=N.Settings}},null)])]}),d(Pe,{module:t.myItbModule},null)])}});const Ae=Object.values({Home:{id:"Home",path:"/home",icon:"icon-home",label:"menu.home"},ShowFloor:{id:"ShowFloor",path:"/showFloor",icon:"icon-online-tracking",label:"menu.showFloor"},Recommend:{id:"Recommend",path:"/recommend",icon:"icon-jiaobiao",label:"menu.recommend"},Presentation:{id:"Presentation",path:"/presentation",icon:"icon-training",label:"menu.presentation"},Partners:{id:"Partners",path:"/partners",icon:"icon-trust",label:"menu.partners"},Events:{id:"Events",path:"/events",icon:"icon-calculator",label:"menu.events"},MyCalendar:{id:"MyCalendar",path:"/calendar",icon:"icon-calendar",label:"menu.calendar"},News:{id:"News",path:"/news",icon:"icon-namecard",label:"menu.news"}});var Me=u({name:"LeftSideMenu",setup(){const{t:e}=m({useScope:"global"});let t=p(),{path:n}=T(),o=a(["/"+n.split("/")[1]]);function s({key:e}){t.push(e)}return t.beforeEach(((e,t)=>{let n="/"+e.fullPath.split("/")[1];o[0]=n})),()=>{let t;return d(y,{mode:"inline",inlineCollapsed:!1,selectedKeys:o,onClick:s},"function"==typeof(n=t=Ae.map((t=>d(y.Item,{key:t.path},{default:()=>[e(t.label)],icon:()=>d(je,{type:t.icon,style:{fontSize:"20px"}},null)}))))||"[object Object]"===Object.prototype.toString.call(n)&&!L(n)?t:{default:()=>[t]});var n}}}),Ne=u({name:"DefaultLayout",setup(e,{slots:t}){let{appStore:n}=Y();return()=>d(j,null,{default:()=>[d(j.Header,{class:ue},{default:()=>[d(de,null,null)]}),d(j,{class:pe},{default:()=>[d(j.Sider,{collapsible:!0,collapsedWidth:60,breakpoint:n.leftSideCollapsed?void 0:"md",width:240,theme:"light",collapsed:n.leftSideCollapsed,"onUpdate:collapsed":e=>n.leftSideCollapsed=e,class:me},{default:()=>[d(Me,null,null)]}),d(j.Content,{class:_e},{default:()=>[d(R,null,null)]}),d(j.Sider,{collapsible:!0,collapsedWidth:.1,breakpoint:n.rightSideCollapsed?void 0:"xl",collapsed:n.rightSideCollapsed,"onUpdate:collapsed":e=>n.rightSideCollapsed=e,reverseArrow:!0,trigger:null,theme:"light",width:394,class:he},{default:()=>[d("div",{class:ge},[d(De,null,null)])]})]})]})}});var Fe=[{name:"MyCalendar",path:"/calendar",component:()=>fe((()=>import("./index.d3cdb726.js")),["assets/index.d3cdb726.js","assets/index.a8d19d73.css","assets/index.912d655b.css","assets/index.07051d1d.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"]),meta:{roles:[Z.buyer,Z.exhibition]}}],Ve=[{name:"Error403",path:"/403",component:()=>fe((()=>import("./403.6b466f39.js")),["assets/403.6b466f39.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.c12ce332.js","assets/index.54405acc.css"])},{name:"Error404",path:"/:pathMatch(.*)*",component:()=>fe((()=>import("./404.845bdfef.js")),["assets/404.845bdfef.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.c12ce332.js","assets/index.54405acc.css"])}],Be=[{name:"Login",path:"/login",component:()=>fe((()=>import("./index.b16fd97a.js")),["assets/index.b16fd97a.js","assets/index.f951ee81.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.module.ec677d03.js","assets/index.module.3e5735ad.css"])},{name:"SignUp",path:"/signUp",component:()=>fe((()=>import("./signUp.7d3f26bc.js")),["assets/signUp.7d3f26bc.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/index.module.ec677d03.js","assets/index.module.3e5735ad.css"])}];const He=[{name:"DefaultLayout",component:Ne,path:"/",redirect:"/home",children:[...[{name:"Home",path:"/home",component:()=>fe((()=>import("./index.8a7aaee0.js")),["assets/index.8a7aaee0.js","assets/index.ffabeefe.css","assets/index.4ea1730f.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"])},{name:"Partners",path:"/partners",component:()=>fe((()=>import("./index.a676df9d.js")),["assets/index.a676df9d.js","assets/index.14b1c1b1.css","assets/index.4ea1730f.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"])},{name:"Events",path:"/events",meta:{roles:[Z.buyer,Z.exhibition]},component:()=>fe((()=>import("./index.7e2d399f.js")),["assets/index.7e2d399f.js","assets/index.11093924.css","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/index.07051d1d.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"])}],...[{name:"SpeakerList",path:"/speakers",component:()=>fe((()=>import("./index.8530a11c.js")),["assets/index.8530a11c.js","assets/index.8e2ef7fc.css","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"])},{name:"SpeakerDetail",path:"/speakers/:speakerId",component:()=>fe((()=>import("./Detail.9558e082.js")),["assets/Detail.9558e082.js","assets/Detail.08f9ece2.css","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"]),props:!0}],...[{name:"Presentation",path:"/presentation",component:()=>fe((()=>import("./index.846833a5.js")),["assets/index.846833a5.js","assets/index.11093924.css","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"]),meta:{}}],...[{name:"ShowFloor-Company",path:"/showFloor",component:()=>fe((()=>import("./index.f23c5ba2.js")),["assets/index.f23c5ba2.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"]),meta:{}},{name:"ShowFloor-Product",path:"/showFloor/product",component:()=>fe((()=>import("./product.e246ba63.js")),["assets/product.e246ba63.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css"])}],...[{name:"NewsIndex",path:"/news",component:()=>fe((()=>import("./index.b841ac59.js")),["assets/index.b841ac59.js","assets/index.ad1fc25e.css","assets/index.912d655b.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"])},{name:"NewsDetail",path:"/news/:newsId",component:()=>fe((()=>import("./Detail.ceae00da.js")),["assets/Detail.ceae00da.js","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css","assets/index.module.58d4ecfc.js","assets/index.module.61d5cbe2.css"]),props:!0}],...[{name:"RecommendIndex",path:"/recommend",component:()=>fe((()=>import("./index.a31357b5.js")),["assets/index.a31357b5.js","assets/index.14b1c1b1.css","assets/vendor.91bb4923.js","assets/vendor.05627a7f.css","assets/MainSectionHead.d9482180.js","assets/MainSectionHead.6159b47b.css"]),meta:{roles:[Z.buyer,Z.exhibition,Z.visitor]}}],...Fe]},...Be,...Ve],qe=D({history:A(),routes:He});qe.beforeEach(((e,t,n)=>{var o;if(null==(o=e.meta)?void 0:o.roles){const{role:t}=ae;t?t&&-1!==e.meta.roles.indexOf(t)?n():n({name:"Error403"}):n({path:"/login",query:{redirect:e.fullPath}})}else n()})),M(oe).use(qe).use(G).mount("#app");
//# sourceMappingURL=index.47a30be6.js.map
