import{M as b}from"./MainSectionHead.b9e7274a.js";import{u as g}from"./SpeakerStore.1339c8c4.js";import{o as l}from"./ant-design-vue.034afe85.js";import{u as k}from"./vue-i18n.0711e616.js";import{d as w}from"./vue-router.8ec3c3d8.js";import{d as I,I as S,j as y,k as e,i as h,F as v,u as L}from"./@vue.fa05379c.js";import"./index.388fe986.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";const M="_detailCard_twbe5_1",C="_avatar_twbe5_10",x="_profile_twbe5_24",N="_name_twbe5_24",D="_bio_twbe5_30",H="_descr_twbe5_36",V="_speechItem_twbe5_42",F="_title_twbe5_61",O="_content_twbe5_64";var t={detailCard:M,avatar:C,profile:x,name:N,bio:D,descr:H,speechItem:V,title:F,content:O};function j(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!h(s)}var ce=I({name:"SpeakerDetail",props:{speakerId:{type:Number,required:!0}},setup(s){const{t:i}=k();let{speakerStore:n}=g();S(()=>{n.getDetail(s.speakerId)});let o=y(()=>{var a;return(a=n.currentItem)==null?void 0:a.info[0]});return()=>{var d,p,m,u,f,_;let a,c;return e(v,null,[e(b,{redLead:!1},j(a=i("speakers.speaker"))?a:{default:()=>[a]}),e("div",{class:t.detailCard},[e("img",{class:t.avatar,src:(d=o.value)==null?void 0:d.picture,alt:""},null),e("div",{class:t.profile},[e("h3",{class:t.name},[(p=o.value)==null?void 0:p.name]),e("p",null,[(m=o.value)==null?void 0:m.company]),e("p",null,[(u=o.value)==null?void 0:u.title])]),e("div",{class:t.bio},[i("speakers.bio")]),e("div",{class:t.descr,innerHTML:(f=o.value)==null?void 0:f.intro},null)]),e(b,{redLead:!0},j(c=i("speakers.related"))?c:{default:()=>[c]}),e("div",{class:"bg_white pd_20"},[e(l,{itemLayout:"vertical",dataSource:(_=n.currentItem)==null?void 0:_.contentList},{renderItem:({item:r})=>e(l.Item,{class:t.speechItem},{default:()=>[e(l.Item.Meta,null,{title:()=>e(w,{to:`/conference/${r.id}`},{default:()=>[r.title]}),description:()=>e(v,null,[e("div",{class:t.content},[r.begindate.substr(0,10),L(" "),r.time]),e("div",{class:t.content},[r.location])]),avatar:()=>e("img",{class:t.avatar,src:r.coverpicture},null)})]})})])])}}});export{ce as default};
