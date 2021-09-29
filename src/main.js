import { createApp } from 'vue';
import i18n from '@/services/i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
