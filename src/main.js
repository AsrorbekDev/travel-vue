import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import './style.css';
import router from "./router/index.js";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
    .use(router)
    .mount('#app')
