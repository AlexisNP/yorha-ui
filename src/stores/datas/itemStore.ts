import type { GameItem } from '@/models/YrhGameItem'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useItemStore = defineStore('itemStore', () => {
  const availableItems: Ref<GameItem[]> = ref([
    {
      name: 'Melee Attack Up (S)',
      description: 'Weapon attacks do double damage for 15 seconds.',
      category: 'enhancement',
      numberHeld: 4
    },
    {
      name: 'Melee Attack Up (L)',
      description: 'Weapon attacks do double damage for 30 seconds.',
      category: 'enhancement',
      numberHeld: 1
    },
    {
      name: 'Melee Defense Up (S)',
      description: 'Melee damage taken is reduced by 50% for 15 seconds.',
      category: 'enhancement',
      numberHeld: 4
    },
    {
      name: 'Melee Defense Up (L)',
      description: 'Melee damage taken is reduced by 50% for 30 seconds.',
      category: 'enhancement',
      numberHeld: 1
    },
    // {
    //   name: 'Skill Salve (L)',
    //   description: 'Skill gauge replenishes twice as fast for 30 seconds',
    //   category: 'support',
    //   numberHeld: 6
    // },
    {
      name: 'Impact Bracer (S)',
      description: 'Prevents staggering from an attack for 15 seconds',
      category: 'enhancement',
      numberHeld: 2
    },
    {
      name: 'Impact Bracer (L)',
      description: 'Prevents staggering from an attack for 30 seconds',
      category: 'enhancement',
      numberHeld: 34
    },
    {
      name: "Popola's Booze",
      description:
        'Increases the power of weapon-based attacks by 50% for 30 seconds. Also restores 100% HP.',
      numberHeld: 1
    },
    {
      name: 'Small Recovery',
      description: 'Restores 25% of HP.',
      category: 'restorative',
      numberHeld: 12
    },
    {
      name: 'Medium Recovery',
      description: 'Restores 75% of HP.',
      category: 'restorative',
      numberHeld: 31
    },
    {
      name: 'Full Recovery',
      description: 'Restores all of your HP.',
      category: 'restorative',
      numberHeld: 34
    },
    {
      name: 'Visual Cure',
      description: 'Cures visual status ailments.',
      category: 'restorative',
      numberHeld: 87
    },
    {
      name: 'Aural Cure',
      description: 'Cures aural status ailments.',
      category: 'restorative',
      numberHeld: 60
    },
    {
      name: 'Cure Manipulation',
      description: 'Cure control anomalies.',
      category: 'restorative',
      numberHeld: 39
    },
    {
      name: 'Cure All + Heal All',
      description: 'Restores 100% HP and cures all status ailments.',
      category: 'restorative',
      numberHeld: 2
    }
  ])

  const currentItem = ref<GameItem | null>(availableItems.value[0])

  return { currentItem, availableItems }
})
