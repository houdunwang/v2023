import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore(
  'config',
  () => {
    const config = ref({
      preVideo: '',
      endVideo: ''
    })

    return { config }
  },
  { persist: true }
)
