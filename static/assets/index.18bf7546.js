import{b as u}from"./index.ae657a86.js";import{X as s}from"./xgplayer.7c524c7c.js";import{u as l}from"./vue-router.82b024de.js";import{d as i,l as n,o as p,m as d,k as f}from"./@vue.b2913f50.js";var g=i({name:"Home",props:{video:{type:String,required:!0},poster:{type:String,required:!1,default:""}},setup(r){const t=u.role,a=l();let o=n(),e;return p(()=>{e=new s({el:o.value,autoplay:!1,volume:.5,url:r.video,poster:r.poster,videoInit:!0,fluid:!0,fitVideoSize:"auto"}),t||e.on("play",()=>{e.pause(),a.push("/login")})}),d(()=>{e.destroy()}),()=>f("div",{ref:o},null)}});export{g as P};
