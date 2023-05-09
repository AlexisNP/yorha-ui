import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBannerStore = defineStore('bannerStore', () => {
  const bannerText = ref<string | null>(null)

  return { bannerText }
})
