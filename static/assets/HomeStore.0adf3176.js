import{B as a,g as e}from"./index.44160a32.js";import{az as s}from"./@vue.01a79c59.js";const t=new class extends a{constructor(){super()}async getData(a){return await e(`Home/GetHomeInformationByType?type=${a}`)}async getBanner(){this.banners=await this.getData(0)}async getSponor(){this.sponsors=await this.getData(1)}async getVideo(){this.videoes=await this.getData(2)}async getSpeakers(){this.speakers=await this.getData(3),this.speakerList=await e("Home/GetHomeSpeakerForSmallPic")}},o=()=>(s((()=>{t.banners=void 0,t.sponsors=void 0,t.videoes=void 0,t.speakers=void 0})),{homeStore:t});export{o as u};
