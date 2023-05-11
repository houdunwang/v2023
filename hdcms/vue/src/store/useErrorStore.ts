import { defineStore } from 'pinia'

export default defineStore('error', {
  state: () => {
    return {
      errors: {} as Record<string, any>,
    }
  },
  getters: {
    getError(state) {
      return (name: string) => state.errors[name]
    },
    hasError(state) {
      return Object.keys(state.errors).length > 0
    },
  },
  actions: {
    resetError() {
      this.errors = {}
    },
    setErrors(errors: Record<'message', { field: string; message: string }[]>) {
      errors.message.forEach(({ field, message }) => {
        this.errors[field] = message
      })
    },
    clearError(name: string) {
      if (this.errors[name]) {
        delete this.errors[name]
      }
    },
  },
})
