import{e as c,l as p,a as g}from"./index.2167a810.js";import{u as l}from"./vue-i18n.95ef2b18.js";import{d as _,o as u,k as n,u as h}from"./@vue.c37eb56a.js";const f="_fullBg_p8a9s_1",d="_wapper_p8a9s_12",m="_pannel_p8a9s_18",b="_rightSection_p8a9s_28",w="_p1_p8a9s_39",S="_p2_p8a9s_42",v="_h1_p8a9s_46",L="_row_p8a9s_51";var s={fullBg:f,wapper:d,pannel:m,rightSection:b,p1:w,p2:S,h1:v,row:L},$=_({name:"LoginLayout",setup(t,{slots:o}){const{t:e}=l({useScope:"global"});let{homeStore:i}=c();return u(()=>{i.getSponor()}),()=>{var a;return n("div",{class:s.fullBg},[n("div",{class:s.wapper},[n("div",{class:s.pannel},[(a=o.default)==null?void 0:a.call(o)]),n("section",{class:s.rightSection},[n("p",{class:s.p1},[e("login.registraionDate"),h(" ")]),n("p",{class:s.p2},[e("login.lastUpdate")]),n("p",{class:s.h1},[e("login.welcome")])])])])}}});const x="_logo_hfnt8_1",T="_outer_hfnt8_24",y="_padding_hfnt8_31",P="_registTip_hfnt8_40",B="_form_hfnt8_62",E="_regForm_hfnt8_67",N="_tabs_hfnt8_73",j="_curTab_hfnt8_87",C="_none_underline_hfnt8_101",F="_signPic_hfnt8_105",H="_threetexts_hfnt8_136";var r={logo:x,switch:"_switch_hfnt8_7",outer:T,padding:y,registTip:P,form:B,regForm:E,tabs:N,curTab:j,none_underline:C,signPic:F,threetexts:H},A=_({name:"LoginPanelHead",setup(){const{t}=l({useScope:"global"}),{appStore:o}=g();function e(){o.isEn=!o.isEn,o.switchLanguage()}return()=>n("h3",null,[n("img",{src:p,class:r.logo},null),n("div",{style:{flex:"1"}},[n("span",null,[n("b",null,[t("login.logoMsg1")])]),n("br",null,null),n("span",null,[t("login.logoMsg3")]),n("br",null,null)]),n("div",{class:r.switch,onClick:e},[o.isEn?"EN":"CN"])])}});export{A as L,$ as a,r as s};
