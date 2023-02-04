import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'
import './assets/tailwind.css'

const app = createApp(App)

app.use(router, VueSplide)
app.mount('#app')
