import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      url: '',
      saveDirectory: 'abc'
    })
    return { config }
  },
  { persist: true }
)
