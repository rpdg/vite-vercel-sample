import{d as j,l as M,c as O,I as S,k as t,i as w,t as B,z as x,F}from"./@vue.f0a33739.js";import{I as a,b as l,M as d,r as I}from"./index.10146c26.js";import{u as T}from"./FavouriteStore.9532d8a6.js";import{J as _}from"./@rpdg.e35df5be.js";import{h as E,k as c,p as N,m as f}from"./ant-design-vue.2e5ee588.js";import{_ as G}from"./vue-clipboard3.ca4b4e55.js";import{u as K}from"./vue-i18n.1b8a7ba2.js";function y(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!w(e)}var X=j({name:"ContactToolbar",props:{user:{type:Object,required:!0}},setup(e){const{t:o}=K();let{toClipboard:m}=G(),{favoriteStore:s}=T();async function b(){try{await m(window.location.href),N.success({message:o("common.copied")})}catch(i){console.error(i)}}const r=M(!1);function v(){f.info(o("calendar.offline_btn_info"))}function p(){f.info(o("calendar.offline_btn_info"))}let n=O({visibility:!1,isOnlineMeeting:1});function g(){return l.role&&(l.role==="buyer"||l.role==="exhibition")?l.role==="exhibition"&&(e.user.employee_id.substr(0,1)==="2"||e.user.employee_id.substr(0,1)==="3")?!0:l.role==="buyer"&&(e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"):!1}function h(){n.visibility=!1,e.user.IsOnline===1&&(n.visibility=!0),_.set(d,e.user)}function C(){var i;e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"||((i=l.user)==null?void 0:i.roleName)==="exhibition"?(_.set(d,e.user),I.push("/schedule/1")):f.info(o("calendar.offline_btn_info2"))}return S(async()=>{r.value=await s.judge({type:0,foreignKey:e.user.employee_id})}),()=>{let i,u;return t(F,null,[t(E,{visible:n.visibility,title:o("calendar.select_type"),onOk:h,onCancel:()=>{n.visibility=!1}},{default:()=>[t(c.Group,{value:n.isOnlineMeeting,"onUpdate:value":k=>n.isOnlineMeeting=k},{default:()=>[t(c.Button,{key:"1",value:1},y(i=o("calendar.online"))?i:{default:()=>[i]}),t(c.Button,{key:"0",value:0},y(u=o("calendar.offline"))?u:{default:()=>[u]})]})]}),t(a,{type:"icon-namecard",onClick:v},null),t(a,{type:"icon-icon-test",onClick:p},null),B(t(a,{type:"icon-icon-test2",onClick:C},null),[[x,g()]]),t(a,{type:"icon-icon-test1",onClick:b},null),r.value?t(a,{type:"icon-collection-fill",onClick:async()=>{await s.delete({type:0,foreignKey:e.user.employee_id}),r.value=!1}},null):t(a,{type:"icon-collection",onClick:async()=>{await s.add({type:0,foreignKey:e.user.employee_id}),r.value=!0}},null)])}}});const A="_item_10mhg_1",J="_avatar_10mhg_6",R="_profile_10mhg_15",V="_iconBar_10mhg_19",q="_avatar_special_10mhg_36",z="_iconfontcolor_10mhg_41";var Y={item:A,avatar:J,profile:R,iconBar:V,avatar_special:q,iconfontcolor:z};export{X as C,Y as s};
