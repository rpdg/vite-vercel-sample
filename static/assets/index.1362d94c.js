import{c as n,a as d}from"./index.eef7e3b7.js";import{b as c}from"./BussinessCardStore.a95a2c08.js";import{N as l,A as p,O as u,C as j}from"./ant-design-vue.61d2faec.js";import{u as f}from"./vue-i18n.f56f8be1.js";import{d as i,k as e,l as b,o as v,i as g}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./vue-router.82b024de.js";import"./moment.29305b8e.js";import"./@ant-design.148651e0.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";const _="_cardImg_zenez_1",y="_label_zenez_8",C="_name_zenez_12";var o={cardImg:_,label:y,name:C},I=i({name:"BusinessCard",props:{card:{type:Object,required:!0},isEn:{type:Boolean,default:!0}},setup(t){const{card:s,isEn:a}=t;return()=>e("div",null,[e(l,{src:n(`Data/BusinessCard/${s.barcode}.jpg`),class:o.cardImg},null),e("div",{class:o.label},[e(p,{src:n(s.company_logo)},null),e("span",{class:o.name},[a?s.firstname+" "+s.lastname:s.lastname_cn+s.firstname_cn])])])}});function S(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var W=i({name:"BusinessCardSection",setup(){const{t}=f(),{appStore:s}=d(),a=b([]);return v(async()=>{a.value=await c.getList()}),()=>{let r;return e(j,{title:t("myItb.dockIcons.business")},{default:()=>[e("div",{class:"gridCols2"},[e(u,null,S(r=a.value.map(m=>e(I,{card:m,isEn:s.isEn},null)))?r:{default:()=>[r]})])]})}}});export{W as default};
