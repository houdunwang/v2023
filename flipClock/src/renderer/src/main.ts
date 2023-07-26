import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
