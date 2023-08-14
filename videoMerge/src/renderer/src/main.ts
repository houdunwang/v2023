import { createApp } from 'vue'
import App from './App.vue'
import '@renderer/assets/tailwind.css'
import router from '@renderer/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
