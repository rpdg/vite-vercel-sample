import{u as _}from"./HomeStore.21f576f5.js";import{u as c}from"./vue-i18n.532c4af8.js";import{d as l,o as g,k as o,u as p}from"./@vue.7a36ac42.js";import{l as u,a as d}from"./index.dd6cbf3a.js";const m="_fullBg_p8a9s_1",f="_wapper_p8a9s_12",h="_pannel_p8a9s_18",w="_rightSection_p8a9s_28",S="_p1_p8a9s_39",b="_p2_p8a9s_42",v="_h1_p8a9s_46",L="_row_p8a9s_51";var e={fullBg:m,wapper:f,pannel:h,rightSection:w,p1:S,p2:b,h1:v,row:L},$=l({name:"LoginLayout",setup(t,{slots:s}){const{t:n}=c({useScope:"global"});let{homeStore:i}=_();return g(()=>{i.getSponor()}),()=>{var a;return o("div",{class:e.fullBg},[o("div",{class:e.wapper},[o("div",{class:e.pannel},[(a=s.default)==null?void 0:a.call(s)]),o("section",{class:e.rightSection},[o("p",{class:e.p1},[n("login.registraionDate"),p(" ")]),o("p",{class:e.p2},[n("login.lastUpdate")]),o("p",{class:e.h1},[n("login.welcome")])])])])}}});const x="_logo_111gc_1",T="_outer_111gc_24",y="_padding_111gc_31",P="_registTip_111gc_40",j="_form_111gc_62",B="_regForm_111gc_67",E="_tabs_111gc_73",H="_curTab_111gc_87",N="_signPic_111gc_101",C="_threetexts_111gc_120";var r={logo:x,switch:"_switch_111gc_7",outer:T,padding:y,registTip:P,form:j,regForm:B,tabs:E,curTab:H,signPic:N,threetexts:C},A=l({name:"LoginPanelHead",setup(){const{t}=c({useScope:"global"}),{appStore:s}=d();function n(){s.isEn=!s.isEn,s.switchLanguage()}return()=>o("h3",null,[o("img",{src:u,class:r.logo},null),o("div",{style:{flex:"1"}},[o("span",null,[o("b",null,[t("login.logoMsg1")])]),o("br",null,null),o("span",null,[t("login.logoMsg3")]),o("br",null,null)]),o("div",{class:r.switch,onClick:n},[s.isEn?"EN":"CN"])])}});export{A as L,$ as a,r as s};
