import{I as c,b as a,c as B,M as b,r as L,d as w,a as N}from"./index.2167a810.js";import{u as q}from"./FavouriteStore.f7b8364b.js";import{p as m}from"./Image.174dcbe6.js";import{J as g}from"./@rpdg.c2e06738.js";import{f as p,j as y,n as v,m as _}from"./ant-design-vue.04da4757.js";import{_ as x}from"./vue-clipboard3.ca4b4e55.js";import{u as J}from"./vue-i18n.95ef2b18.js";import{d as U,l as E,c as A,I as G,k as n,i as H,F as K}from"./@vue.c37eb56a.js";function h(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!H(e)}var ae=U({name:"ContactToolbar",props:{user:{type:Object,required:!0}},setup(e){const{t:i}=J();let{toClipboard:C}=x(),{favoriteStore:d}=q();const{chatStore:f}=w(),{appStore:F}=N();async function T(){try{await C(window.location.href),v.success({message:i("common.copied")})}catch(t){console.error(t)}}const u=E(!1);function j(){var t,s;((t=a.user)==null?void 0:t.barcode)&&((s=a.user)==null?void 0:s.barcode.length)>7?_.info(i("calendar.quickvisitor.denyinfo")):p.confirm({title:i("common.confirm"),content:i("myItb.chat.request_business_card"),onOk(){const o=a.user,r=e.user;let O={FromBarcode:o.barcode,FromCompany:o.company,FromCompany_cn:o.companyCn,FromCompanyLogo:m(o.companyLogo),FromFirstname:o.firstName,FromLastname:o.lastName,FromFirstname_cn:o.firstname_cn,FromLastname_cn:o.lastname_cn,FromHeadImage:m(o.headImageUrl),FromJobTitle:"",ToBarcode:r.employee_id,ToCompany:r.company,ToCompany_cn:r.company_cn,ToCompanyLogo:m(r.logoUrl),ToFirstname:r.firstname,ToLastname:r.lastname,ToFirstname_cn:r.firstname_cn,ToLastname_cn:r.lastname_cn,ToHeadImage:m(r.HeadImageUrl),ToJobTitle:r.job_title};f.chatWith(e.user),f.sendChattingMessage(JSON.stringify(O),6).then(()=>{v.success({message:i("myItb.chat.request_business_card_waiting")})},()=>{})}})}function I(){var t,s;((t=a.user)==null?void 0:t.barcode)&&((s=a.user)==null?void 0:s.barcode.length)>7?_.info(i("calendar.quickvisitor.denyinfo")):(F.myItbModule=B.Chat,f.chatWith(e.user))}let l=A({visibility:!1,isOnlineMeeting:1});function k(){return a.role&&(a.role==="buyer"||a.role==="exhibition")?a.role==="exhibition"&&(e.user.employee_id.substr(0,1)==="2"||e.user.employee_id.substr(0,1)==="3")?!0:a.role==="buyer"&&(e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"):!1}function S(){l.visibility=!1,e.user.IsOnline===1&&(l.visibility=!0),g.set(b,e.user)}function M(){var t;e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"||((t=a.user)==null?void 0:t.roleName)==="exhibition"?(g.set(b,e.user),L.push("/schedule/1")):_.info(i("calendar.offline_btn_info2"))}return G(async()=>{u.value=await d.judge({type:0,foreignKey:e.user.employee_id})}),()=>{let t,s;return n(K,null,[n(p,{visible:l.visibility,title:i("calendar.select_type"),onOk:S,onCancel:()=>{l.visibility=!1}},{default:()=>[n(y.Group,{value:l.isOnlineMeeting,"onUpdate:value":o=>l.isOnlineMeeting=o},{default:()=>[n(y.Button,{key:"1",value:1},h(t=i("calendar.online"))?t:{default:()=>[t]}),n(y.Button,{key:"0",value:0},h(s=i("calendar.offline"))?s:{default:()=>[s]})]})]}),n(c,{type:"icon-namecard",onClick:j},null),n(c,{type:"icon-icon-test",onClick:I},null),k()&&n(c,{type:"icon-icon-test2",onClick:M},null),n(c,{type:"icon-icon-test1",onClick:T},null),u.value?n(c,{type:"icon-collection-fill",onClick:async()=>{await d.delete({type:0,foreignKey:e.user.employee_id}),u.value=!1}},null):n(c,{type:"icon-collection",onClick:async()=>{await d.add({type:0,foreignKey:e.user.employee_id}),u.value=!0}},null)])}}});const R="_item_10mhg_1",V="_avatar_10mhg_6",W="_profile_10mhg_15",z="_iconBar_10mhg_19",D="_avatar_special_10mhg_36",P="_iconfontcolor_10mhg_41";var ne={item:R,avatar:V,profile:W,iconBar:z,avatar_special:D,iconfontcolor:P};export{ae as C,ne as s};
