import{c as n,a as c}from"./index.9456dc5f.js";import{b as d}from"./BussinessCardStore.9d72789a.js";import{J as l,A as p,O as u,C as j}from"./ant-design-vue.f8ac2ba9.js";import{u as f}from"./vue-i18n.df730e9c.js";import{d as i,k as e,l as b,o as v,i as g}from"./@vue.f0a33739.js";import"./@rpdg.e35df5be.js";import"./vue-router.85e08d32.js";import"./moment.29305b8e.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";const _="_cardImg_zenez_1",y="_label_zenez_8",C="_name_zenez_12";var o={cardImg:_,label:y,name:C},I=i({name:"BusinessCard",props:{card:{type:Object,required:!0},isEn:{type:Boolean,default:!0}},setup(a){const{card:s,isEn:t}=a;return()=>e("div",null,[e(l,{src:n(`Data/BusinessCard/${s.barcode}.jpg`),class:o.cardImg},null),e("div",{class:o.label},[e(p,{src:n(s.company_logo)},null),e("span",{class:o.name},[t?s.firstname+" "+s.lastname:s.lastname_cn+s.firstname_cn])])])}});function S(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!g(a)}var W=i({name:"BusinessCardSection",setup(){const{t:a}=f(),{appStore:s}=c(),t=b([]);return v(async()=>{t.value=await d.getList()}),()=>{let r;return e(j,{title:a("myItb.dockIcons.business")},{default:()=>[e("div",{class:"gridCols2"},[e(u,null,S(r=t.value.map(m=>e(I,{card:m,isEn:s.isEn},null)))?r:{default:()=>[r]})])]})}}});export{W as default};
