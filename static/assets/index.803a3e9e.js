import{b as t}from"./index.c8c7e9ca.js";import{X as a}from"./xgplayer.1ae44471.js";import{u}from"./vue-router.5ade7376.js";import{d as s,l as i,o as l,m as d,k as n}from"./@vue.c37eb56a.js";var y=s({name:"Home",props:{video:{type:String,required:!0},poster:{type:String,required:!1,default:""}},setup(e){t.role,u();let r=i(),o;return l(()=>{o=new a({el:r.value,autoplay:!1,volume:.5,url:e.video,poster:e.poster,videoInit:!0,fluid:!0,fitVideoSize:"auto"})}),d(()=>{o.destroy()}),()=>n("div",{ref:r},null)}});export{y as P};
