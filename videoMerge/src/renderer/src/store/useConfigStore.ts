import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('config', () => {
  const config = ref({
    a: 322
  })

  return { config }
})
