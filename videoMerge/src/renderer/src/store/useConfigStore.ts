import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore(
  'config',
  () => {
    const config = ref({
      name: 'abc'
    })

    return { config }
  },
  { persist: true }
)
