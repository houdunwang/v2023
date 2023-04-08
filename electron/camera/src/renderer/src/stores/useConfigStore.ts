import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'counter',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '0px',
      borderColor: 'red',
      rounded: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  {
    persist: true
  }
)
