var e=Object.defineProperty,s=(s,t,a)=>(((s,t,a)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a})(s,"symbol"!=typeof t?t+"":t,a),a);import{B as t,g as a}from"./index.97328964.js";import{au as i}from"./@vue.5cfa5b05.js";const o=new class extends t{constructor(){super(),s(this,"banners"),s(this,"sponsors"),s(this,"videoes"),s(this,"speakers"),s(this,"speakerList")}async getData(e){return await a(`Home/GetHomeInformationByType?type=${e}`)}async getBanner(){this.banners=await this.getData(0)}async getSponor(){this.sponsors=await this.getData(1)}async getVideo(){this.videoes=await this.getData(2)}async getSpeakers(){this.speakers=await this.getData(3),this.speakerList=await a("Home/GetHomeSpeakerForSmallPic")}},r=()=>(i((()=>{o.banners=void 0,o.sponsors=void 0,o.videoes=void 0,o.speakers=void 0})),{homeStore:o});export{r as u};
