var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;import{c as i,r,d as s,z as l,a as c,o as p,b as u,w as d,_ as m,e as h,f,u as y,g as b,D as _,A as g,U as v,M as I,C as w,L as C,h as E,i as S,S as P,I as k,j as x,k as T,l as O,F as R,m as j,n as A,p as D,q as L,s as N,R as M,t as V,v as B,x as F}from"./vendor.01f72b52.js";var q,H;(H=q||(q={})).Chat="Chat",H.Meeting="Meeting",H.Card="Card",H.Help="Help",H.Favourite="Favourite",H.Coupon="Coupon",H.Notification="Notification",H.Settings="Settings";const U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},z=class{static get(e,t){let o=U(z.storage.getItem(e));return void 0===o?t:o}static getSession(e,t){let o=U(z.session.getItem(e));return void 0===o?t:o}static set(e,t){void 0!==t?z.storage.setItem(e,JSON.stringify(t)):z.storage.removeItem(e)}static setSession(e,t){void 0!==t?z.session.setItem(e,JSON.stringify(t)):z.session.removeItem(e)}static remove(e){z.storage.removeItem(e)}static removeSession(e){z.session.removeItem(e)}static clear(e){e?Object.keys(z.storage).forEach((t=>{0===t.indexOf(e)&&z.storage.removeItem(t)})):z.storage.clear()}static clearSession(e){e?Object.keys(z.session).forEach((t=>{0===t.indexOf(e)&&z.session.removeItem(t)})):z.session.clear()}};let W=z;W.storage=localStorage,W.session=sessionStorage;var J={common:{myITB:"My ITB",more:"more",signOut:"Sign Out",signIn:"Sign In",failed:"Action failed",success:"Action was successful"},myItb:{dockIcons:{chat:"Chat",requests:"Meeting Requests",business:"Business Card",help:"Help",favourite:"Favourite",coupon:"Coupon Package",notification:"Notification",settings:"Settings"},coupon:{unused:"Unuesed",used:"Used",expired:"Expired"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"},help:{enter:"Enter",contact_sponsor:"Contact the sponsor",want_settle:"I want to settle into",shuttle_bus:"Shuttle bus services",hotel_services:"Hotel services",support:"Service & Support"}},menu:{home:"Home",presentation:"Presentation Hub",partners:"Partners & Sponsors",speakers:"Speakers",news:"News",events:"Events",calendar:"My Calendar",recommend:"Recommend",showFloor:"Show Floor",planTrip:"Plan my trip"},login:{agreeTip:"User agreement has been reviewed and agreed.",agreement:"",registTip:"No account? Please register here.",registForm:"Business Registration",loginForm:"System login",login:"Sign in",username:"Username",usernameTip:"Please input user name",password:"Password",passwordTip:"Please input password"},homePage:{sponsor:"sponsor / partners",speaker:"speaker",presentation:"Presentation Hub / Conference Live",recommended:"recommended",news:"News"},partners:{partners:"Partners",sponsors:"Sponsors"},events:{online:"Online",offline:"Offline"},calendar:{virtual_platform_calendar:"Virtual Platform Calendar",physical_exhibition_calendar:"Physical Exhibition Calendar",my_selected_speech:"My selected speech"},speakers:{speaker:"Speaker",related:"Related speech"},exhibitor:{detail:"Exhibitor detail",video:"Company video",products:"Products",contact:"Contact"},planMyTrip:{countryname:"Country",username:"Name on passport",position:"Position",gender:"Gender",gendercontent:["Male","Female"],dateofbirth:"Birthday",dateofbirthTip:"Please input your birthday.",nationality:"Nationality",passportnumber:"Passport Number",passportvalidity:"Passport Expiration Date",passportvalidityTip:"Please input your passport expiration date.",employer:"Company",residence:"Period of Stay in China",status:"Status",createtime:"Submit Time",statustype:["Applied","Approval","Deny"],list:"Current Status",serviceApply:"Online Apply",serviceApplylist:"Invitation letter info",sendApply:"Submit",reset:"Reset",errortimeinfo:"The priod of stay needs to be within May 3-10",operation:"Operation",operationbutton:"Download",formtitle:"Visa Invitation Letter Application",forminfo1:"Declare:",forminfo2:"A letter of invitation will be issued by the organizer to facilitate visa application.",forminfo3:"Please check and approach the Embassy with the invitation to get the visa. We will provide the letter of invitation free of charge by email.",formatattention:"I have read and accepted the below:",formatattention2:"By submitting this visa application form I confirm that all of the above data is correct.",formatattention3:"I also commit towards MB Exhibitions Shanghai Ltd (ITB China organizer) that I will leave the People's Republic of China (PRC) immediately after my ITB China related visit in the PRC is over.",submitinfo:"Your application has been successfully submitted, and we will approve it within three working days. After that, you can download the invitation letter in PDF format on this page.",topinfo1:"Before your business trip to China, you need to apply for a visa which requires an invitation letter.",topinfo2:"We are able to provide you with a invitation letter by entering the requested information below. After approval you will be able to download it directly from this page.Should you need further help regarding your invitation letter, please contact us at {email}.",topinfo3:"Due to the Coronavirus epidemic, the process regarding visa application varies from country to country, so exhibitors are advised to consult their local embassies."}};var $={common:{signOut:"退出登录",myITB:"我的ITB",more:"更多",failed:"操作失败",success:"操作成功"},menu:{home:"首页",partners:"合作伙伴与赞助商",showFloor:"Show floor"},myItb:{dockIcons:{chat:"聊天",requests:"会议邀约",business:"名片",help:"帮助",favourite:"收藏",coupon:"优惠卡包",notification:"提醒",settings:"设置"},favourite:{contact:"Contact",products:"Products",company:"Company"},meetingRequests:{online:"Online",offline:"Offline",waiting:"Waiting",waiting_confirm:"Waiting to confirm",invited_surfix:" invited you to attend an online meeting"}},planMyTrip:{countryname:"Country",username:"Name on passport",position:"Position",gender:"Gender",gendercontent:["Male","Female"],dateofbirth:"Birthday",dateofbirthTip:"Please input your birthday.",nationality:"Nationality",passportnumber:"Passport Number",passportvalidity:"Passport Expiration Date",passportvalidityTip:"Please input your passport expiration date.",employer:"Company",residence:"Period of Stay in China",status:"Status",createtime:"Submit Time",statustype:["Applied","Approval","Deny"],list:"Current Status",serviceApply:"Online Apply",serviceApplylist:"Invitation letter info",sendApply:"Submit",reset:"Reset",errortimeinfo:"The priod of stay needs to be within May 3-10",operation:"操作",operationbutton:"下载",formtitle:"Visa Invitation Letter Application",forminfo1:"Declare:",forminfo2:"A letter of invitation will be issued by the organizer to facilitate visa application.",forminfo3:"Please check and approach the Embassy with the invitation to get the visa. We will provide the letter of invitation free of charge by email.",formatattention:"I have read and accepted the below:",formatattention2:"By submitting this visa application form I confirm that all of the above data is correct.",formatattention3:"I also commit towards MB Exhibitions Shanghai Ltd (ITB China organizer) that I will leave the People's Republic of China (PRC) immediately after my ITB China related visit in the PRC is over.",submitinfo:"Your application has been successfully submitted, and we will approve it within three working days. After that, you can download the invitation letter in PDF format on this page.",topinfo1:"Before your business trip to China, you need to apply for a visa which requires an invitation letter.",topinfo2:"如有疑问，请及时与我们联系 {email}.",topinfo3:"Due to the Coronavirus epidemic, the process regarding visa application varies from country to country, so exhibitors are advised to consult their local embassies."}};const G=window.navigator.languages?window.navigator.languages[0]:window.navigator.language,Y=W.get("itb-user-language",G);var K,Q;(Q=K||(K={})).EN="en-US",Q.CN="zh-CN";const X={"en-US":J,"zh-CN":$},Z=i({locale:Y===K.CN?K.CN:K.EN,fallbackLocale:K.EN,messages:X});function ee(e){return function(t,o){let n;Object.defineProperty(t,o,{get:()=>n,set:function(t){n=t,console.log("[JsonStorage]",o,t),W.set(e,t)},enumerable:!0,configurable:!0})}}function te(e,t,o){let n=o.value;o.value=async function(...e){try{return this.loading=!0,await n.call(this,...e)}catch(t){throw t}finally{this.loading=!1}}}class oe{constructor(){return this.loading=!1,r(this)}}const ne=new class extends oe{constructor(){super(),this.switchLanguage=()=>{this.antdLocale=this.isEn?s:l,moment.locale(this.antdLocale.locale),Z.global.locale=this.isEn?K.EN:K.CN,W.set("itb-user-language",this.isEn?K.EN:K.CN)},this.isEn=Y===K.EN,this.antdLocale=this.isEn?s:l,this.leftSideCollapsed=!1,this.rightSideCollapsed=!1,this.myItbModule=q.Chat}};function ae(){ne.rightSideCollapsed=!ne.rightSideCollapsed}const ie=function(){return{appStore:ne,toggleRightSide:ae}};var re={setup(){const{appStore:e}=ie();return{locale:e.antdLocale}}};re.render=function(e,t,o,n,a,i){const r=c("router-view"),s=m;return p(),u(s,{locale:n.locale},{default:d((()=>[h(r)])),_:1},8,["locale"])},axios.defaults.baseURL="/api",axios.defaults.timeout=3e4,axios.defaults.headers.post["Content-Type"]="application/json";const se=axios.create();se.interceptors.request.use((async e=>{e.headers.lng=-1!=Y.indexOf("zh")?"cn":"en";const t=ye.token;return t&&(e.headers.Authorization=t),e}),(e=>(console.error(e),Promise.reject(e)))),se.interceptors.response.use((e=>{const t=e.data;return t.error?(console.error(t.error),alert(t.error),Promise.reject(new Error(t.error))):e}),(e=>{var t,o;const n=e.response;if(n&&n.status&&n.data)switch(n.status){case 401:ye.removeToken(),dt.push({path:"/login",query:{redirect:dt.currentRoute.value.fullPath}});break;default:console.error(n.data.error),alert(n.data.error)}return Promise.reject(new Error(null!=(o=null==(t=null==n?void 0:n.data)?void 0:t.error)?o:"Network error"))}));const{CancelToken:le,isCancel:ce}=axios;async function pe(e,t){const o=le.source();try{return ue(await se.post(e,t,{cancelToken:o.token}))}catch(n){throw ce(n)&&console.log("Request canceled",n.message),n}}function ue(e){return((e,i)=>{for(var r in i||(i={}))o.call(i,r)&&a(e,r,i[r]);if(t)for(var r of t(i))n.call(i,r)&&a(e,r,i[r]);return e})({},e.data).data}axios;var de=Object.defineProperty,me=Object.getOwnPropertyDescriptor,he=(e,t,o,n)=>{for(var a,i=n>1?void 0:n?me(t,o):t,r=e.length-1;r>=0;r--)(a=e[r])&&(i=(n?a(t,o,i):a(i))||i);return n&&i&&de(t,o,i),i};class fe extends oe{constructor(){super(),this.token=W.get("itb-auth-token",""),this.user=W.get("itb-user-profile")}async login(e){let t=await pe("/user/login",e);this.token=`Bearer ${t}`,this.user=await async function(e,t){const o=le.source();try{return ue(await se.get(e,{params:t,cancelToken:o.token}))}catch(n){throw ce(n)&&console.log("Request canceled",n.message),n}}("/user/getcurrentuserInfo")}removeToken(){this.token="",this.user=void 0}get userName(){var e,t;if(this.user)return Y===K.CN?null==(e=this.user)?void 0:e.lastName:null==(t=this.user)?void 0:t.firstName}get role(){var e;return null==(e=this.user)?void 0:e.roleName}}he([ee("itb-user-profile")],fe.prototype,"user",2),he([ee("itb-auth-token")],fe.prototype,"token",2),he([te],fe.prototype,"login",1);var ye=new fe,be=f({setup(){let{appStore:e}=ie(),t=y();const{toggleRightSide:o}=ie(),{t:n}=b({useScope:"global"});function a(e){switch(e){case"menu-myITB":o();break;case"menu-logout":ye.token?ye.removeToken():t.push("/login")}}return()=>h(_,{overlayStyle:{minWidth:"120px"}},{default:()=>[h("span",{style:{whiteSpace:"nowrap"}},[h(g,{size:"small"},{icon:()=>h(v,null,null)}),h("span",{style:{margin:"0 6px",cursor:"pointer"}},[ye.userName])])],overlay:()=>h(I,{onClick:({item:e,key:t,keyPath:o})=>{a(t)}},{default:()=>[h(I.Item,{key:"menu-myITB"},{default:()=>[n("common.myITB")],icon:()=>h(w,{style:{opacity:e.rightSideCollapsed?0:1}},null)}),h(I.Divider,null,null),h(I.Item,{key:"menu-logout"},{default:()=>[ye.token?n("common.signOut"):n("common.signIn")],icon:()=>h(C,null,null)})]})})}});var _e="_headerWrap_1j5t8_1",ge="_logo_1j5t8_6",ve="_gap_1j5t8_9",Ie="_process_1j5t8_12",we=f({name:"Headbar",setup(){const{appStore:e}=ie();function t(e){console.log(e)}return E((()=>e.isEn),e.switchLanguage),()=>h("div",{class:_e},[h("div",{class:ge},[S("logo")]),h("section",{class:ve},null),h("section",{class:Ie},[" ",h(P,{size:20},{default:()=>[h(k.Search,{style:"width: 160px; border-radius: 60px;",onSearch:t},null),h(x,{"checked-children":"En","un-checked-children":"汉",checked:e.isEn,"onUpdate:checked":t=>e.isEn=t},null),h(be,null,null)]})])])}});var Ce="_header_c340l_1",Ee="_body_c340l_9",Se="_bodyLeft_c340l_14",Pe="_bodyMain_c340l_21",ke="_bodyRight_c340l_27",xe="_bodyRightPad_c340l_30";let Te;const Oe={},Re=function(e,t){if(!t||0===t.length)return e();if(void 0===Te){const e=document.createElement("link").relList;Te=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in Oe)return;Oe[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":Te,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},je=h("div",{style:{padding:"50px",textAlign:"center"}},[h(T,{spin:!0},null)]),Ae=O({loader:()=>Re((()=>import("./index.857ad0f9.js")),["assets/index.857ad0f9.js","assets/index.3cea6d13.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),loadingComponent:je}),De=O({loader:()=>Re((()=>import("./index.ae12726a.js")),["assets/index.ae12726a.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),loadingComponent:je}),Le=O({loader:()=>Re((()=>import("./index.2c6c2170.js")),["assets/index.2c6c2170.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.cffa80e3.js","assets/index.module.bfbd1586.css"]),loadingComponent:je}),Ne=O({loader:()=>Re((()=>import("./index.a9a4f2ee.js")),["assets/index.a9a4f2ee.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),loadingComponent:je}),Me=O({loader:()=>Re((()=>import("./index.a2e0cbb2.js")),["assets/index.a2e0cbb2.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/index.6bf839c5.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.cffa80e3.js","assets/index.module.bfbd1586.css"]),loadingComponent:je}),Ve=O({loader:()=>Re((()=>import("./index.7820eae7.js")),["assets/index.7820eae7.js","assets/index.789f00c7.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),loadingComponent:je}),Be=O({loader:()=>Re((()=>import("./index.6e9fec96.js")),["assets/index.6e9fec96.js","assets/index.41f7f86a.css","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.cffa80e3.js","assets/index.module.bfbd1586.css"]),loadingComponent:je}),Fe=O({loader:()=>Re((()=>import("./index.ab67590d.js")),["assets/index.ab67590d.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.cffa80e3.js","assets/index.module.bfbd1586.css"]),loadingComponent:je});var qe=f({props:{module:{type:String,required:!0}},name:"MyItb",setup:e=>()=>function(){let t;if(!ye.token)return h(Ne,null,null);switch(e.module){case q.Chat:t=h(De,null,null);break;case q.Coupon:t=h(Ae,null,null);break;case q.Favourite:t=h(Le,null,null);break;case q.Meeting:t=h(Me,null,null);break;case q.Help:t=h(Fe,null,null);break;case q.Card:t=h(Ve,null,null);break;case q.Notification:t=h(Be,null,null);break;default:t=h(R,null,null)}return t}()});var He=new class extends oe{constructor(){super()}};var Ue="_wrapper_1at5t_1",ze="_one_1at5t_9",We="_navRoundIcon_1at5t_15",Je="_navText_1at5t_18";const $e=j({scriptUrl:"//at.alicdn.com/t/font_2697722_wml06aqmtr8.js"});var Ge=f({props:{label:{type:String,required:!0},iconSymbol:{type:String,required:!0},onClick:{type:Function,required:!1}},name:"MyItbIcon",setup:e=>()=>h("div",{class:ze,onClick:()=>{e.onClick&&e.onClick()}},[h("div",{class:We},[h($e,{type:e.iconSymbol,style:{fontSize:"24px"}},null)]),h("span",{class:Je},[e.label])])}),Ye=f({name:"RightDock",setup(){const{t:e}=b(),{appStore:t}=ie();return()=>h(R,null,[h(A,{title:e("common.myITB"),style:{margin:"28px 0 20px"}},{default:()=>[h("div",{class:Ue},[h(Ge,{iconSymbol:"icon-comments",label:e("myItb.dockIcons.chat"),onClick:()=>{t.myItbModule=q.Chat}},null),h(Ge,{iconSymbol:"icon-training",label:e("myItb.dockIcons.requests"),onClick:()=>{t.myItbModule=q.Meeting}},null),h(Ge,{iconSymbol:"icon-tool",label:e("myItb.dockIcons.business"),onClick:()=>{t.myItbModule=q.Card}},null),h(Ge,{iconSymbol:"icon-survey",label:e("myItb.dockIcons.help"),onClick:()=>{t.myItbModule=q.Help}},null),h(Ge,{iconSymbol:"icon-collection",label:e("myItb.dockIcons.favourite"),onClick:()=>{t.myItbModule=q.Favourite}},null),h(Ge,{iconSymbol:"icon-waihuishuju",label:e("myItb.dockIcons.coupon"),onClick:()=>{He.current=void 0,t.myItbModule=q.Coupon}},null),h(Ge,{iconSymbol:"icon-remind",label:e("myItb.dockIcons.notification"),onClick:()=>{t.myItbModule=q.Notification}},null),h(Ge,{iconSymbol:"icon-set",label:e("myItb.dockIcons.settings"),onClick:()=>{t.myItbModule=q.Settings}},null)])]}),h(qe,{module:t.myItbModule},null)])}});const Ke=Object.values({Home:{id:"Home",path:"/home",icon:"icon-home",label:"menu.home"},ShowFloor:{id:"ShowFloor",path:"/showFloor",icon:"icon-online-tracking",label:"menu.showFloor"},Recommend:{id:"Recommend",path:"/recommend",icon:"icon-jiaobiao",label:"menu.recommend"},Presentation:{id:"Presentation",path:"/presentation",icon:"icon-training",label:"menu.presentation"},Partners:{id:"Partners",path:"/partners",icon:"icon-trust",label:"menu.partners"},Events:{id:"Events",path:"/events",icon:"icon-calculator",label:"menu.events"},MyCalendar:{id:"MyCalendar",path:"/calendar",icon:"icon-calendar",label:"menu.calendar"},News:{id:"News",path:"/news",icon:"icon-namecard",label:"menu.news"},PlanMyTrip:{id:"PlanMyTrip",path:"/planTrip",icon:"icon-logistics-icon",label:"menu.planTrip"}});var Qe,Xe,Ze,et,tt=f({name:"LeftSideMenu",setup(){const{t:e}=b({useScope:"global"});let t=y(),{path:o}=D(),n=r(["/"+o.split("/")[1]]);function a({key:e}){t.push(e)}return t.beforeEach(((e,t)=>{let o="/"+e.path.split("/")[1];n[0]=o})),()=>{let t;return h(I,{mode:"inline",inlineCollapsed:!1,selectedKeys:n,onClick:a},"function"==typeof(o=t=Ke.map((t=>h(I.Item,{key:t.path},{default:()=>[e(t.label)],icon:()=>h($e,{type:t.icon,style:{fontSize:"20px"}},null)}))))||"[object Object]"===Object.prototype.toString.call(o)&&!L(o)?t:{default:()=>[t]});var o}}}),ot=f({name:"DefaultLayout",setup(e,{slots:t}){let{appStore:o}=ie();return()=>h(N,null,{default:()=>[h(N.Header,{class:Ce},{default:()=>[h(we,null,null)]}),h(N,{class:Ee},{default:()=>[h(N.Sider,{collapsible:!0,collapsedWidth:60,breakpoint:o.leftSideCollapsed?void 0:"md",width:240,theme:"light",collapsed:o.leftSideCollapsed,"onUpdate:collapsed":e=>o.leftSideCollapsed=e,class:Se},{default:()=>[h(tt,null,null)]}),h(N.Content,{class:Pe},{default:()=>[h(M,null,null)]}),h(N.Sider,{collapsible:!0,collapsedWidth:.1,breakpoint:o.rightSideCollapsed?void 0:"xl",collapsed:o.rightSideCollapsed,"onUpdate:collapsed":e=>o.rightSideCollapsed=e,reverseArrow:!0,trigger:null,theme:"light",width:394,class:ke},{default:()=>[h("div",{class:xe},[h(Ye,null,null)])]})]})]})}});(Xe=Qe||(Qe={})).buyer="buyer",Xe.exhibition="exhibition",Xe.visitor="visitor",Xe.ITB="ITB",Xe.BuyerCallCenter="BuyerCallCenter",Xe.ExhibitorCallCenter="ExhibitorCallCenter",(et=Ze||(Ze={})).Fully="Fully",et.Partial="Partial",et.Free="Free";var nt=[{name:"MyCalendar",path:"/calendar",component:()=>Re((()=>import("./index.8ae1fdd3.js")),["assets/index.8ae1fdd3.js","assets/index.576bdde3.css","assets/index.41f7f86a.css","assets/index.5c11ed64.css","assets/index.07051d1d.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),meta:{roles:[Qe.buyer,Qe.exhibition]}}],at=[{name:"Error403",path:"/403",component:()=>Re((()=>import("./403.efdcd608.js")),["assets/403.efdcd608.js","assets/index.d4263bee.js","assets/index.54405acc.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])},{name:"Error404",path:"/:pathMatch(.*)*",component:()=>Re((()=>import("./404.19c164b5.js")),["assets/404.19c164b5.js","assets/index.d4263bee.js","assets/index.54405acc.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])}];var it=[{name:"ExhibitorDetail",path:"/exhibitors/:exhibitorId",component:()=>Re((()=>import("./Detail.41f62649.js")),["assets/Detail.41f62649.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/index.72ff5454.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"]),props:!0}],rt=[{name:"Home",path:"/home",component:()=>Re((()=>import("./index.54982bd0.js")),["assets/index.54982bd0.js","assets/index.768fc871.css","assets/index.4ea1730f.css","assets/index.72ff5454.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css"])},{name:"Partners",path:"/partners",component:()=>Re((()=>import("./index.7546121b.js")),["assets/index.7546121b.js","assets/index.4ea1730f.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"])},{name:"Events",path:"/events",meta:{roles:[Qe.buyer,Qe.exhibition]},component:()=>Re((()=>import("./index.60e5a784.js")),["assets/index.60e5a784.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/index.07051d1d.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"])}],st=[{name:"Login",path:"/login",component:()=>Re((()=>import("./index.67c282c7.js")),["assets/index.67c282c7.js","assets/index.06440388.css","assets/index.module.5d8c2a1b.js","assets/index.module.0b2c74c0.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])},{name:"SignUp",path:"/signUp",component:()=>Re((()=>import("./signUp.3ff60c79.js")),["assets/signUp.3ff60c79.js","assets/index.module.5d8c2a1b.js","assets/index.module.0b2c74c0.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])}];var lt=[{name:"NewsIndex",path:"/news",component:()=>Re((()=>import("./index.8908a099.js")),["assets/index.8908a099.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"])},{name:"NewsDetail",path:"/news/:newsId",component:()=>Re((()=>import("./Detail.164aa7a6.js")),["assets/Detail.164aa7a6.js","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),props:!0}];var ct={name:"PlanMyTrip",component:()=>Re((()=>import("./index.40787b3e.js")),["assets/index.40787b3e.js","assets/index.07051d1d.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),path:"/planTrip",children:[{name:"PlanMyTripInvitation",path:"/planTrip/invitation",component:()=>Re((()=>import("./Invitation.60fc31db.js")),["assets/Invitation.60fc31db.js","assets/Invitation.657bf577.css","assets/index.06440388.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/index.07051d1d.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),meta:{roles:[Qe.buyer,Qe.exhibition]}},{name:"PlanMyTripHotel",path:"/planTrip/hotel",component:()=>Re((()=>import("./Hotel.e7d2153e.js")),["assets/Hotel.e7d2153e.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),meta:{roles:[Qe.buyer,Qe.exhibition]}}]};const pt=[{name:"DefaultLayout",component:ot,path:"/",redirect:"/home",children:[...rt,...[{name:"SpeakerList",path:"/speakers",component:()=>Re((()=>import("./index.a48e8972.js")),["assets/index.a48e8972.js","assets/index.71f7c551.css","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])},{name:"SpeakerDetail",path:"/speakers/:speakerId",component:()=>Re((()=>import("./Detail.9391b71b.js")),["assets/Detail.9391b71b.js","assets/Detail.0e7e92f5.css","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),props:!0}],...[{name:"Presentation",path:"/presentation",component:()=>Re((()=>import("./index.f8f3fe04.js")),["assets/index.f8f3fe04.js","assets/index.2dfb7501.css","assets/index.5c11ed64.css","assets/index.4e7c4fd8.css","assets/index.8c56470d.css","assets/index.6bf839c5.css","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"]),meta:{}}],...[{name:"ShowFloor-Company",path:"/showFloor",component:()=>Re((()=>import("./index.85bf9676.js")),["assets/index.85bf9676.js","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"]),meta:{}},{name:"ShowFloor-Product",path:"/showFloor/product",component:()=>Re((()=>import("./product.0a340253.js")),["assets/product.0a340253.js","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css"])}],...it,...lt,...[{name:"RecommendIndex",path:"/recommend",component:()=>Re((()=>import("./index.6ee1825f.js")),["assets/index.6ee1825f.js","assets/MainSectionHead.2316d09c.js","assets/MainSectionHead.6159b47b.css","assets/vendor.01f72b52.js","assets/vendor.ca9d189c.css","assets/index.module.34ed03bd.js","assets/index.module.7c9559f9.css"]),meta:{roles:[Qe.buyer,Qe.exhibition,Qe.visitor]}}],...nt,ct]},...st,...at],ut=V({history:B(),routes:pt});ut.beforeEach(((e,t,o)=>{var n;if(null==(n=e.meta)?void 0:n.roles){const{role:t}=ye;t?t&&-1!==e.meta.roles.indexOf(t)?o():o({path:"/403"}):o({path:"/login",query:{redirect:e.fullPath}})}else o()}));var dt=ut;F(re).use(dt).use(Z).mount("#app");export{oe as B,$e as I,ye as a,He as c,te as l,pe as p};
