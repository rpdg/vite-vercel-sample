import{d as D,I as N,j as x,k as e,i as H,t as y,z as L,F as C}from"./@vue.f0a33739.js";import{M}from"./MainSectionHead.3a39449d.js";import{u as $}from"./SpeakerStore.7a078688.js";import{r as p}from"./ant-design-vue.84ff5d3b.js";import{u as z}from"./vue-i18n.df730e9c.js";import{d as F}from"./vue-router.85e08d32.js";import{a as O}from"./index.3c77b06c.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./axios.7aed06b8.js";const T="_detailCard_twbe5_1",V="_avatar_twbe5_10",q="_profile_twbe5_24",A="_name_twbe5_24",B="_bio_twbe5_30",R="_descr_twbe5_36",G="_speechItem_twbe5_42",J="_title_twbe5_61",K="_content_twbe5_64";var t={detailCard:T,avatar:V,profile:q,name:A,bio:B,descr:R,speechItem:G,title:J,content:K};function E(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!H(i)}var we=D({name:"SpeakerDetail",props:{speakerId:{type:Number,required:!0}},setup(i){const{t:l}=z();let{speakerStore:o}=$();const{appStore:n}=O();N(()=>{o.getDetail(i.speakerId)});let r=x(()=>{var a;return(a=o.currentItem)==null?void 0:a.info[0]});function d(a){return Number(a)>0}return()=>{var m,u,f,b,v,_,j,g,w,I,S,h,k;let a,c;return e(C,null,[e(M,{redLead:!1},E(a=l("speakers.speaker"))?a:{default:()=>[a]}),e("div",{class:t.detailCard},[e("img",{class:t.avatar,src:(m=r.value)==null?void 0:m.picture,alt:""},null),e("div",{class:t.profile},[e("h3",{class:t.name},[n.isEn?(u=r.value)==null?void 0:u.name.split("|")[0]:(f=r.value)==null?void 0:f.name.split("|")[1]]),e("p",null,[n.isEn?(b=r.value)==null?void 0:b.company.split("|")[0]:(v=r.value)==null?void 0:v.company.split("|")[1]]),e("p",null,[n.isEn?(_=r.value)==null?void 0:_.title.split("|")[0]:(j=r.value)==null?void 0:j.title.split("|")[1]])]),e("div",{class:t.bio},[l("speakers.bio")]),e("div",{class:t.descr,innerHTML:n.isEn?(g=r.value)==null?void 0:g.intro.split("|")[0]:(w=r.value)==null?void 0:w.intro.split("|")[1]},null)]),y(e(M,{redLead:!0},E(c=l("speakers.related"))?c:{default:()=>[c]}),[[L,d(`${(I=o.currentItem)==null?void 0:I.contentList.length}`)]]),y(e("div",{class:"bg_white pd_20"},[e(p,{itemLayout:"vertical",dataSource:n.isEn?(S=o.currentItem)==null?void 0:S.contentList.filter(s=>s.bgcolor1==="en"):(h=o.currentItem)==null?void 0:h.contentList.filter(s=>s.bgcolor1==="cn")},{renderItem:({item:s})=>e(p.Item,{class:t.speechItem},{default:()=>[e(p.Item.Meta,null,{title:()=>e(F,{to:`/conference/${s.id}`},{default:()=>[s.title]}),description:()=>e(C,null,[e("div",{class:t.content},[s.begindate.substr(0,10)]),e("div",{class:t.content},[s.location])]),avatar:()=>e("img",{class:t.avatar,src:s.bgcolor},null)})]})})]),[[L,d(`${(k=o.currentItem)==null?void 0:k.contentList.length}`)]])])}}});export{we as default};
