import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './locales';
import router from './router';

let app = createApp(App);

app.use(router)
	.use(i18n)
	.mount('#app');
