import { createRouter, createWebHistory } from 'vue-router'
import Clock from '@renderer/views/Clock.vue'
import Config from '@renderer/views/Config.vue'

const routes = [
  { name: 'clock', path: '/:any(.*)*', component: Clock },
  { name: 'config', path: '/config', component: Config }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
