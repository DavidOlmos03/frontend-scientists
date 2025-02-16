import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import 'flowbite';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App)

app.use(router)

app.use(createPinia())
app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app')
// createApp(App).mount('#app')
