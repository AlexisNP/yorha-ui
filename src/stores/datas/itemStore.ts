import type { GameItem } from '@/models/YrhGameItem'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemStore = defineStore('itemStore', () => {
  const currentItem = ref<GameItem | null>(null)

  return { currentItem }
})
