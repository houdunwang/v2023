import { createRouter, createWebHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Config from '@renderer/views/Config.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'config', path: '/config', component: Config }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
