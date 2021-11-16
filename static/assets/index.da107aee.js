import{M as R}from"./MainSectionHead.99c217de.js";import{U as s,b as o,p as f}from"./index.3f2ac436.js";import{G as c}from"./ant-design-vue.a99caae8.js";import{u as T}from"./vue-i18n.df730e9c.js";import{d as z,c as O,l as _,o as B,k as n,F as a,u as r,i as M}from"./@vue.f0a33739.js";import"./vue-router.85e08d32.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";function D(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!M(e)}var st=z({name:"MyPoints",setup(){const{t:e}=T(),{user:d}=o,u=d==null?void 0:d.barcode,w=2,j=-1;let l=O({dataSet0:[],dataSet1:[],dataSet2:[],dataSet3:[]});function b(t){let i=0;return t.forEach(m=>i+=~~m.points),i.toString()}function S(t){let i=0;return t.forEach(m=>i+=~~m.points),i.toString()}let p=_(),y=_();async function P(){return await f("/operation/GetSetBlockTimePoints",{barcode:u})}async function g(t){return await f("/operation/GetITBMeetingsPoints",{barcode:u,type:t})}async function x(){return await f("/Tools/MeetingDetailsByBarcode",{barcode:u,role:w,type:j})}B(async()=>{let t=await P();l.dataSet0=t;let i=await g(1);l.dataSet1=i,p.value=(Number(S(t))+Number(b(i))).toString(),l.dataSet2=await g(2),y.value=b(l.dataSet2),l.dataSet3=await x()});const h=[{title:e("myPoints.rewards-table-col-1"),align:"center",customRender:function({record:t}){return e("myPoints.const-row-value")}},{title:e("myPoints.tasks-table-col-5"),align:"center",dataIndex:"points",width:"10%"}],k=[{title:e("myPoints.tasks-table-col-1"),align:"center",dataIndex:"exhibition_barcode",width:"20%"},{title:e("myPoints.tasks-table-col-2"),align:"center",dataIndex:"company",customRender:function({record:t}){return n(a,null,[t.company,n("br",null,null),t.company_cn])}},{title:e("myPoints.tasks-table-col-3"),align:"center",dataIndex:"firstname",customRender:function({record:t}){return n(a,null,[t.firstname,r(" "),t.lastname,n("br",null,null),t.lastname_cn,t.firstname_cn])},width:"20%"},{title:e("myPoints.tasks-table-col-4"),align:"center",dataIndex:"begindate",customRender:function({record:t}){return n(a,null,[s(t.begindate,o.minutesOffset),n("br",null,null),s(t.enddate,o.minutesOffset)])},width:"10%"},{title:e("myPoints.tasks-table-col-5"),align:"center",dataIndex:"points",width:"10%"}],v=[{title:e("myPoints.tasks-table-col-1"),align:"center",dataIndex:"exhibition_barcode",width:"20%"},{title:e("myPoints.tasks-table-col-2"),align:"center",dataIndex:"company",customRender:function({record:t}){return n(a,null,[t.company,n("br",null,null),t.company_cn])}},{title:e("myPoints.tasks-table-col-3"),align:"center",dataIndex:"firstname",customRender:function({record:t}){return n(a,null,[t.firstname,r(" "),t.lastname,n("br",null,null),t.lastname_cn,t.firstname_cn])},width:"20%"},{title:e("myPoints.tasks-table-col-4"),align:"center",dataIndex:"begindate",customRender:function({record:t}){return n(a,null,[s(t.begindate,o.minutesOffset),n("br",null,null),s(t.enddate,o.minutesOffset)])},width:"10%"},{title:e("myPoints.tasks-table-col-5"),align:"center",dataIndex:"points",width:"10%"}],I=[{title:e("myPoints.delete-table-col-0"),align:"center",dataIndex:"exhibition_barcode",width:"20%"},{title:e("myPoints.delete-table-col-2"),align:"center",customRender:function({record:t}){return n(a,null,[t.e_company,n("br",null,null),t.e_company_cn])}},{title:e("myPoints.delete-table-col-3"),align:"center",customRender:function({record:t}){return n(a,null,[t.e_firstname,r(" "),t.e_lastname,n("br",null,null),t.e_lastname_cn,t.e_firstname_cn])},width:"20%"},{title:e("myPoints.delete-table-col-4"),align:"center",customRender:function({record:t}){return n(a,null,[s(t.begindate,o.minutesOffset),n("br",null,null),s(t.enddate,o.minutesOffset)])},width:"10%"},{title:e("myPoints.delete-table-col-6"),align:"center",customRender:function({record:t}){return n(a,null,[t.type===1?e("calendar.colors_map.Yellow"):e("calendar.colors_map.Black")])},width:"10%"},{title:e("myPoints.delete-table-col-5"),align:"center",dataIndex:"operation_user_barcode",width:"10%"}];return()=>{let t;return n(a,null,[n(R,{redLead:!1},D(t=e("myPoints.my-points"))?t:{default:()=>[t]}),n("p",{class:"mg_tb_20",style:"font-weight:bold;font-size:12pt;text-decoration:underline;"},[e("myPoints.points-of-tasks"),r(": "),p.value]),n(c,{size:"small",bordered:!0,columns:h,rowKey:"id",dataSource:l.dataSet0,pagination:!1},null),n("p",{class:"mg_tb_20"},[r("\xA0")]),n(c,{size:"small",bordered:!0,columns:k,rowKey:"id",dataSource:l.dataSet1,pagination:!1},null),n("p",{class:"mg_tb_20",style:"font-weight:bold;font-size:12pt;text-decoration:underline;"},[e("myPoints.points-of-rewards"),r(": "),y.value]),n(c,{size:"small",bordered:!0,columns:v,rowKey:"id",dataSource:l.dataSet2,pagination:!1},null),n("p",{class:"mg_tb_20",style:"font-weight:bold;font-size:12pt;text-decoration:underline;"},[e("myPoints.points-of-delete")]),n(c,{size:"small",bordered:!0,columns:I,rowKey:"id",dataSource:l.dataSet3,pagination:!1},null)])}}});export{st as default};
