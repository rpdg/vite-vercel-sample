import{M as f}from"./MainSectionHead.b9e7274a.js";import{S as j,I as v,e as S}from"./ant-design-vue.f84da452.js";import{u as _}from"./SpeakerStore.68556306.js";import{u as b}from"./vue-i18n.0711e616.js";import{d as g}from"./vue-router.8ec3c3d8.js";import{a as k}from"./index.3be6f241.js";import{d as y,l as w,I as L,k as e,i as C,F as h}from"./@vue.fa05379c.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.2067dcee.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./axios.19d3e859.js";const x="_cardSpeaker_b3rnj_1",O="_title_b3rnj_14",I="_content_b3rnj_26";var i={cardSpeaker:x,title:O,content:I};function d(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!C(r)}var se=y({name:"SpeakerList",setup(){const{t:r}=b();let{speakerStore:o}=_();const{appStore:p}=k();let n=w(""),l=[];L(()=>{o.getList()});function m(s,a){return s.name.toLowerCase().indexOf(a.toString().toLowerCase())!=-1||s.company.toLowerCase().indexOf(a.toString().toLowerCase())!=-1}function u(){o.list!=null&&(l=o.list),n.value!=""?o.list=l==null?void 0:l.filter(s=>m(s,n.value)):o.getList()}return()=>{var c;let s,a;return e(h,null,[e(f,{redLead:!1},d(s=r("menu.speakers"))?s:{default:()=>[s]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(j,null,{default:()=>[e(v,{type:"text",placeholder:r("speakers.searchp"),value:n.value,"onUpdate:value":t=>n.value=t},null),e(S,{type:"primary",onClick:u},d(a=r("speakers.search"))?a:{default:()=>[a]})]})]),e("div",{class:`${i.bg_white} ${i.pd_20}`},[e("div",{class:"gridCols4 mg_t_20"},[(c=o.list)==null?void 0:c.map(t=>e(g,{to:`/speakers/${t.id}`,class:i.cardSpeaker},{default:()=>[e("img",{src:t.picture},null),e("div",{class:i.title},[p.isEn?t.name.split("|")[0]:t.name.split("|")[1]]),e("div",{class:i.content},[p.isEn?t.company.split("|")[0]:t.company.split("|")[1]]),e("div",{class:i.content},[p.isEn?t.title.split("|")[0]:t.title.split("|")[1]])]}))])])])}}});export{se as default};
