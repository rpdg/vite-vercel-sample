import{S as C}from"./Config.87ac60ee.js";import{C as $}from"./CalendarStore.52e1f009.js";import{u as S}from"./vue-i18n.0711e616.js";import{d as k,k as t,F as j}from"./@vue.fa05379c.js";const x="_contentWrap_eheia_1",W="_content_eheia_1",F="_img_c1_eheia_10",M="_c2_eheia_21",H="_img_c2_eheia_26",O="_c4_eheia_35",E="_img_c4_eheia_42";var r={contentWrap:x,content:W,img_c1:F,c2:M,img_c2:H,c4:O,img_c4:E},G=k({props:{detailedMapItem:{type:Object,required:!1}},setup(_){const{t:s}=S(),{detailedMapItem:c}=_;function i(e){return!e||e.indexOf("http://")===0||e.indexOf("https://")===0?e:`${C}${e.replace(/\\/g,"/")}`}function g(e){var n,a,d,u;if(e.list.length===1){let l=i((n=e.list[0])==null?void 0:n.b_company_logo);return t("div",{class:r.img_c1,style:{backgroundImage:`url(${l})`}},null)}else if(e.list.length===2){let l=i((a=e.list[0])==null?void 0:a.b_company_logo),o=i((d=e.list[1])==null?void 0:d.b_company_logo);return t("div",{class:r.c2},[t("div",{class:r.img_c2,style:{backgroundImage:`url(${l})`}},null),t("div",{class:r.img_c2,style:{backgroundImage:`url(${o})`}},null)])}else{let l=i((u=e.list[0])==null?void 0:u.b_company_logo);return t("div",{class:r.c2},[t("div",{class:r.img_c2,style:{backgroundImage:`url(${l})`}},null),t("div",{class:r.img_c2},[t("div",{class:r.c4},[e.list.map((o,m)=>{if(m>0&&m<4)return t("div",{class:r.img_c4,style:{backgroundImage:`url(${i(o.b_company_logo)})`}},null)})])])])}}function y(e){let n=i(e.activity_coverpicture);return t("div",{class:r.img_c1,style:{backgroundImage:`url(${n})`}},null)}function p(e){let n=i(e.b_headimageurl);return t("div",{class:r.img_c1,style:{backgroundImage:`url(${n})`}},null)}function f(e){if(e.type==="byItb"||e.type==="byMe"){let n=e.entry;return g(n)}else if(e.type==="conference"){let n=e.entry;return y(n)}else{let n=e.entry;return p(n)}}function b(e){return t("div",{class:r.content},[e.metting_title])}function I(e){return t("div",{class:r.content},[e.metting_title||e.activity_title])}function h(e){return t("div",{class:r.content},[s("calendar.colors_map.Gray")])}function v(e){if(e.type==="byItb"||e.type==="byMe"){let n=e.entry;return b(n)}else if(e.type==="conference"){let n=e.entry;return I(n)}else return e.entry,h()}return()=>t(j,null,[c&&t("div",{class:"pd_20"},[t("div",{class:"gridCols2"},[t("div",{class:"text_left",style:{color:$[c.color],fontWeight:600}},[s(`calendar.colors_map.${c.color}`)]),t("div",{class:"text_right"},[c.type==="unconfirmed"?c.entry.begin_datetime:c.entry.begindate])]),t("div",{class:`pd_tb_20 ${r.contentWrap}`},[f(c),v(c)]),t("hr",null,null)])])}});export{G as E};
