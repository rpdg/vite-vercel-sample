import{d as N,I as x,j as D,k as e,i as H,t as y,z as L,F as C,u as T}from"./@vue.f0a33739.js";import{M}from"./MainSectionHead.3a39449d.js";import{u as V}from"./SpeakerStore.662160af.js";import{q as p}from"./ant-design-vue.d54a5a56.js";import{u as $}from"./vue-i18n.df730e9c.js";import{d as q}from"./vue-router.85e08d32.js";import{a as z}from"./index.6e402105.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.08538744.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./axios.7aed06b8.js";const F="_detailCard_twbe5_1",O="_avatar_twbe5_10",A="_profile_twbe5_24",B="_name_twbe5_24",R="_bio_twbe5_30",G="_descr_twbe5_36",J="_speechItem_twbe5_42",K="_title_twbe5_61",P="_content_twbe5_64";var r={detailCard:F,avatar:O,profile:A,name:B,bio:R,descr:G,speechItem:J,title:K,content:P};function E(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!H(i)}var Ie=N({name:"SpeakerDetail",props:{speakerId:{type:Number,required:!0}},setup(i){const{t:l}=$();let{speakerStore:o}=V();const{appStore:n}=z();x(()=>{o.getDetail(i.speakerId)});let s=D(()=>{var a;return(a=o.currentItem)==null?void 0:a.info[0]});function d(a){return Number(a)>0}return()=>{var m,u,f,v,b,_,j,g,w,I,S,h,k;let a,c;return e(C,null,[e(M,{redLead:!1},E(a=l("speakers.speaker"))?a:{default:()=>[a]}),e("div",{class:r.detailCard},[e("img",{class:r.avatar,src:(m=s.value)==null?void 0:m.picture,alt:""},null),e("div",{class:r.profile},[e("h3",{class:r.name},[n.isEn?(u=s.value)==null?void 0:u.name.split("|")[0]:(f=s.value)==null?void 0:f.name.split("|")[1]]),e("p",null,[n.isEn?(v=s.value)==null?void 0:v.company.split("|")[0]:(b=s.value)==null?void 0:b.company.split("|")[1]]),e("p",null,[n.isEn?(_=s.value)==null?void 0:_.title.split("|")[0]:(j=s.value)==null?void 0:j.title.split("|")[1]])]),e("div",{class:r.bio},[l("speakers.bio")]),e("div",{class:r.descr,innerHTML:n.isEn?(g=s.value)==null?void 0:g.intro.split("|")[0]:(w=s.value)==null?void 0:w.intro.split("|")[1]},null)]),y(e(M,{redLead:!0},E(c=l("speakers.related"))?c:{default:()=>[c]}),[[L,d(`${(I=o.currentItem)==null?void 0:I.contentList.length}`)]]),y(e("div",{class:"bg_white pd_20"},[e(p,{itemLayout:"vertical",dataSource:n.isEn?(S=o.currentItem)==null?void 0:S.contentList.filter(t=>t.bgcolor1==="en"):(h=o.currentItem)==null?void 0:h.contentList.filter(t=>t.bgcolor1==="cn")},{renderItem:({item:t})=>e(p.Item,{class:r.speechItem},{default:()=>[e(p.Item.Meta,null,{title:()=>e(q,{to:`/conference/${t.id}`},{default:()=>[t.title]}),description:()=>e(C,null,[e("div",{class:r.content},[t.begindate.substr(0,10),T(" "),t.time]),e("div",{class:r.content},[t.location])]),avatar:()=>e("img",{class:r.avatar,src:t.coverpicture},null)})]})})]),[[L,d(`${(k=o.currentItem)==null?void 0:k.contentList.length}`)]])])}}});export{Ie as default};
