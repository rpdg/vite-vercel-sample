import{L as u,a as j}from"./index.1e4cf29d.js";import{M as f}from"./MainSectionHead.7e49931e.js";import{u as b}from"./NewsStore.41785eac.js";import{u as g}from"./vue-i18n.97207468.js";import{d as w,I as v,k as e,i as y,F as h}from"./@vue.c3fad188.js";import"./ant-design-vue.5d68287d.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.f49dba90.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.2a67823e.js";import"./vue-router.c781243b.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.f1721d35.js";var I="/assets/ExhibitorNewsBanner_en.98e12e16.jpg",x="/assets/ExhibitorNewsBanner_zh.50399575.jpg",N="/assets/ITBChinaNews_en.bc08b295.jpg",_="/assets/ITBChinaNews_zh.aab8723e.jpg";function S(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!y(s)}var ee=w({name:"NewsDetail",props:{newsId:{type:Number,required:!0}},setup(s){const{t:l}=g();let{newsStore:t}=b();const{appStore:c}=j();return v(()=>{var r;((r=t.currentItem)==null?void 0:r.id)!=s.newsId&&t.getNewsDetail(s.newsId).then(()=>{})}),()=>{var i,o,n,a,p,m;let r;return t.loading?e(u,null,null):e(h,null,[e(f,{redLead:!1},S(r=l("menu.news"))?r:{default:()=>[r]}),e("div",{class:"pd_20 bg_white",style:{textAlign:"center"}},[e("div",{style:{width:"61.8%",margin:"auto"}},[c.isEn?e("img",{style:{aspectRatio:"800/160",width:"100%",marginBottom:"40px"},src:((i=t.currentItem)==null?void 0:i.type)?I:N},null):e("img",{style:{aspectRatio:"800/160",width:"100%",marginBottom:"40px"},src:((o=t.currentItem)==null?void 0:o.type)?x:_},null),e("h2",null,[(n=t.currentItem)==null?void 0:n.title]),e("p",{class:"text_gray"},[(a=t.currentItem)==null?void 0:a.publishbegindate.split(" ")[0]]),e("div",{class:"text_gray",style:{textAlign:"left",fontSize:"16px"}},[((p=t.currentItem)==null?void 0:p.subjects)&&((m=t.currentItem)==null?void 0:m.subjects.map(d=>e("p",{innerHTML:d.content},null)))])])])])}}});export{ee as default};
