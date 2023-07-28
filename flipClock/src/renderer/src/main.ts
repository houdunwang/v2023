import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
