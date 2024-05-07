import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppConfig = defineStore('appConfig', () => {
  const globalSound = ref<number>(0.5)

  return { globalSound }
})
