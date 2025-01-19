import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import 'flowbite';


const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(createPinia())
// createApp(App).mount('#app')
