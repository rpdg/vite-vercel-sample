import{M as S}from"./MainSectionHead.99c217de.js";import{b as v,p as m}from"./index.9bd4e1af.js";import{y as p}from"./ant-design-vue.f8ac2ba9.js";import{u as w}from"./vue-i18n.df730e9c.js";import{d as P,c as x,l as u,o as _,k as a,i as T,u as f,F as h}from"./@vue.f0a33739.js";import"./vue-router.85e08d32.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";function k(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}var tt=P({name:"MyPoints",setup(){const{t}=w(),{user:n}=v,i=n==null?void 0:n.barcode;let s=x({dataSet1:[],dataSet2:[]});function r(e){let o=0;return e.forEach(g=>o+=~~g.points),o.toString()}let l=u(),c=u();async function b(){return(await m("/operation/GetSetBlockTimePoints",{barcode:i}))[0]["1000"].toString()}async function d(e){return await m("/operation/GetITBMeetingsPoints",{barcode:i,type:e})}_(async()=>{let e=await b(),o=await d(1);o.unshift({itemcontent:t("myPoints.const-row-value"),points:e}),s.dataSet1=o,l.value=r(o),s.dataSet2=await d(2),c.value=r(s.dataSet2)});const j=[{title:t("myPoints.tasks-table-col-1"),align:"center",dataIndex:"itemcontent"},{title:t("myPoints.tasks-table-col-2"),align:"center",width:200,dataIndex:"points"}],y=[{title:t("myPoints.rewards-table-col-1"),align:"center",dataIndex:"itemcontent"},{title:t("myPoints.rewards-table-col-2"),align:"center",width:200,dataIndex:"points"}];return()=>{let e;return a(h,null,[a(S,{redLead:!1},k(e=t("myPoints.my-points"))?e:{default:()=>[e]}),a("p",{class:"mg_tb_20"},[t("myPoints.points-of-tasks"),f(": "),l.value]),a(p,{size:"small",bordered:!0,columns:j,rowKey:"itemcontent",dataSource:s.dataSet1},null),a("p",{class:"mg_tb_20"},[t("myPoints.points-of-rewards"),f(": "),c.value]),a(p,{size:"small",bordered:!0,columns:y,rowKey:"itemcontent",dataSource:s.dataSet2},null)])}}});export{tt as default};
