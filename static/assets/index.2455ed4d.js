import{u as i}from"./HomeStore.f629f3c7.js";import{u as l}from"./vue-i18n.91e137c0.js";import{d as c,o as p,k as o,u as _}from"./@vue.5a203696.js";import{e as u,a as d}from"./index.03db05d1.js";const m="_fullBg_p8a9s_1",h="_wapper_p8a9s_12",f="_pannel_p8a9s_18",b="_rightSection_p8a9s_28",w="_p1_p8a9s_39",S="_p2_p8a9s_42",v="_h1_p8a9s_46",L="_row_p8a9s_51";var n={fullBg:m,wapper:h,pannel:f,rightSection:b,p1:w,p2:S,h1:v,row:L},$=c({name:"LoginLayout",setup(t,{slots:s}){const{t:e}=l({useScope:"global"});let{homeStore:g}=i();return p(()=>{g.getSponor()}),()=>{var a;return o("div",{class:n.fullBg},[o("div",{class:n.wapper},[o("div",{class:n.pannel},[(a=s.default)==null?void 0:a.call(s)]),o("section",{class:n.rightSection},[o("p",{class:n.p1},[e("login.registraionDate"),_(" ")]),o("p",{class:n.p2},[e("login.lastUpdate")]),o("p",{class:n.h1},[e("login.welcome")])])])])}}});const x="_logo_111gc_1",T="_outer_111gc_24",y="_padding_111gc_31",P="_registTip_111gc_40",j="_form_111gc_62",B="_regForm_111gc_67",E="_tabs_111gc_73",H="_curTab_111gc_87",M="_signPic_111gc_101",N="_threetexts_111gc_120";var r={logo:x,switch:"_switch_111gc_7",outer:T,padding:y,registTip:P,form:j,regForm:B,tabs:E,curTab:H,signPic:M,threetexts:N},A=c({name:"LoginPanelHead",setup(){const{t}=l({useScope:"global"}),{appStore:s}=d();function e(){s.isEn=!s.isEn,s.switchLanguage()}return()=>o("h3",null,[o("img",{src:u,class:r.logo},null),o("div",{style:{flex:"1"}},[o("span",null,[o("b",null,[t("login.logoMsg1")])]),o("br",null,null),o("span",null,[t("login.logoMsg2")]),o("br",null,null),o("span",null,[t("login.logoMsg3")]),o("br",null,null)]),o("div",{class:r.switch,onClick:e},[s.isEn?"EN":"CN"])])}});export{A as L,$ as a,r as s};
