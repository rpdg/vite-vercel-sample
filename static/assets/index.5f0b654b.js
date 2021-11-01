import{M as f}from"./MainSectionHead.743546ec.js";import{S as j,I as b,e as v}from"./ant-design-vue.14644436.js";import{u as S}from"./SpeakerStore.0e35889a.js";import{u as _}from"./vue-i18n.532c4af8.js";import{d as g}from"./vue-router.8e73f157.js";import{a as k}from"./index.bbac38a9.js";import{d as y,l as w,I as L,k as e,i as C,F as h}from"./@vue.7a36ac42.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.4b470cc8.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.dab4d1a7.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";const x="_cardSpeaker_b3rnj_1",O="_title_b3rnj_14",I="_content_b3rnj_26";var i={cardSpeaker:x,title:O,content:I};function d(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!C(r)}var re=y({name:"SpeakerList",setup(){const{t:r}=_();let{speakerStore:a}=S();const{appStore:l}=k();let n=w(""),p=[];L(()=>{a.getList()});function m(s,o){return s.name.toLowerCase().indexOf(o.toString().toLowerCase())!=-1||s.company.toLowerCase().indexOf(o.toString().toLowerCase())!=-1}function u(){a.list!=null&&(p=a.list),n.value!=""?a.list=p==null?void 0:p.filter(s=>m(s,n.value)):a.getList()}return()=>{var c;let s,o;return e(h,null,[e(f,{redLead:!1},d(s=r("menu.speakers"))?s:{default:()=>[s]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(j,null,{default:()=>[e(b,{type:"text",placeholder:r("speakers.searchp"),value:n.value,"onUpdate:value":t=>n.value=t},null),e(v,{type:"primary",onClick:u},d(o=r("speakers.search"))?o:{default:()=>[o]})]})]),e("div",{class:`${i.bg_white} ${i.pd_20}`},[e("div",{class:"gridCols4 mg_t_20"},[(c=a.list)==null?void 0:c.map(t=>e(g,{to:`/speakers/${t.id}`,class:i.cardSpeaker},{default:()=>[e("img",{src:t.picture},null),e("div",{class:i.title},[l.isEn?t.name.split("|")[0]:t.name.split("|")[1]]),e("div",{class:i.content},[l.isEn?t.company.split("|")[0]:t.company.split("|")[1]]),e("div",{class:i.content},[l.isEn?t.title.split("|")[0]:t.title.split("|")[1]])]}))])])])}}});export{re as default};
