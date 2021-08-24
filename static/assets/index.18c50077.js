import{L as e,I as t}from"./index.08b628cb.js";import{P as a}from"./index.fee4b973.js";import{M as r}from"./MainSectionHead.9ad27d43.js";import{u as o}from"./ConferenceStore.3484314f.js";import{s as i}from"./index.module.896cc485.js";import{k as l}from"./ant-design-vue.ed23f4fc.js";import{u as s}from"./vue-i18n.31829591.js";import{d as n}from"./vue-router.d53e7fc8.js";import{a7 as c,aq as d,c as m,a5 as p,al as u,a4 as f,M as v}from"./@vue.545e4a02.js";import"./@ant-design.5ba6d8e8.js";import"./@ctrl.2e36ce53.js";import"./nprogress.3e43c680.js";import"./moment.fe945fe1.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e7efe5af.js";import"./source-map.3671d69c.js";import"./vue.e5ab7692.js";import"./xgplayer.7ff2548f.js";function j(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}var b=c({name:"ConferenceDetail",props:{id:{type:Number,required:!0}},setup(c){const{t:u}=s();let{conferenceStore:b}=o();d((()=>{b.getActivityContentDetail(c.id)}));let g=m((()=>b.currentDetail));return()=>{var o;let s,c,d,m,b;return g.value?p(v,null,[p(r,{redLead:!1},j(s=u("conference.detail"))?s:{default:()=>[s]}),p("img",{src:g.value.activityCoverPicture,class:"fullWidthImage mg_b_20 cursor_normal"},null),p("div",{class:"pd_20 bg_white"},[p("h3",null,[g.value.title]),p("div",{class:"text_gray mg_tb_20"},[g.value.content]),p("p",null,[p(t,{type:"icon-clock"},null),f(" "),g.value.begindate.split(" ")[0],f(" "),g.value.time]),p("p",null,[p(t,{type:"icon-map"},null),f(" "),g.value.location]),p("hr",null,null),p(l,{type:"primary"},j(c=u("conference.addTo"))?c:{default:()=>[c]})]),p(r,{redLead:!0},j(d=u("conference.playback"))?d:{default:()=>[d]}),g.value.video&&p(a,{video:g.value.video},null),p(r,{redLead:!0},j(m=u("conference.speaker"))?m:{default:()=>[m]}),p("div",{class:i.contactList},[null==(o=g.value.speakers)?void 0:o.map((e=>p("div",{class:i.contactListItem},[p("img",{class:i.avatar,src:e.picture},null),p("div",{class:i.profile},[p(n,{to:`/speakers/${e.id}`},{default:()=>[p("h4",null,[e.name])]}),p("div",{class:"text_gray"},[e.company]),p("div",{class:"text_gray"},[e.title])])])))]),p(r,{redLead:!0},j(b=u("conference.evaluation"))?b:{default:()=>[b]})]):p(e,null,null)}}});export{b as default};
