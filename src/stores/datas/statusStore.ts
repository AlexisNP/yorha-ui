import type { AndroidData } from '@/models/YrhAndroidData'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatusStore = defineStore('statusStore', () => {
  const androidData = ref<AndroidData>({
    designation: '9S',
    funds: 5375,
    exp: 74158,
    hp: 2643,
    maxHp: 2643,
    attackLightBonus: 2338,
    attackLightRaw: 234,
    attackHeavyBonus: 1878,
    attackHeavyRaw: 188,
    attackRangedBonus: 150,
    attackRangedRaw: 15,
    defenseRaw: 734
  })

  return { androidData }
})
