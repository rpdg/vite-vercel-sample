import{M as e}from"./MainSectionHead.d966a658.js";import{u as t}from"./SpeakerStore.1008e005.js";import{u as r}from"./vue-i18n.683f3bc1.js";import{d as s}from"./vue-router.1edc7a6a.js";import{a7 as a,aq as i,a5 as o,al as p,M as c}from"./@vue.01a79c59.js";import"./index.045352a5.js";import"./ant-design-vue.31eace5e.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.0bbfcdec.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./axios.a57df465.js";import"./nprogress.3e43c680.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";var m={cardSpeaker:"_cardSpeaker_b3rnj_1",title:"_title_b3rnj_14",content:"_content_b3rnj_26"};var n=a({name:"SpeakerList",setup(){const{t:a}=r();let{speakerStore:n}=t();return i((()=>{n.getList()})),()=>{var t;let r;return o(c,null,[o(e,{redLead:!1},(i=r=a("menu.speakers"),"function"==typeof i||"[object Object]"===Object.prototype.toString.call(i)&&!p(i)?r:{default:()=>[r]})),o("div",{class:`${m.bg_white} ${m.pd_20}`},[o("div",{class:"gridCols4 mg_t_20"},[null==(t=n.list)?void 0:t.map((e=>o(s,{to:`/speakers/${e.id}`,class:m.cardSpeaker},{default:()=>[o("img",{src:e.picture},null),o("div",{class:m.title},[e.name]),o("div",{class:m.content},[e.company]),o("div",{class:m.content},[e.title])]})))])])]);var i}}});export{n as default};
