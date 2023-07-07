import { createRouter, createWebHistory } from 'vue-router'
import Home from '@renderer/views/home.vue'
import Setting from '@renderer/views/setting.vue'

const routes = [
  { name: 'home', path: '/:any(.*)*', component: Home },
  { name: 'setting', path: '/setting', component: Setting }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
