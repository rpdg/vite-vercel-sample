import{b as u}from"./index.967d01f1.js";import{X as s}from"./xgplayer.1ae44471.js";import{u as l}from"./vue-router.85e08d32.js";import{d as i,l as n,o as d,m as p,k as f}from"./@vue.f0a33739.js";var j=i({name:"Home",props:{video:{type:String,required:!0},poster:{type:String,required:!1,default:""}},setup(r){const t=u.role,a=l();let o=n(),e;return d(()=>{e=new s({el:o.value,autoplay:!1,volume:.5,url:r.video,poster:r.poster,videoInit:!0,fluid:!0,fitVideoSize:"auto"}),t||e.on("play",()=>{e.pause(),a.push("/login")})}),p(()=>{e.destroy()}),()=>f("div",{ref:o},null)}});export{j as P};
