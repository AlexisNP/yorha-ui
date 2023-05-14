<script lang="ts" setup>
import YrhCard from '@/components/YrhCard.vue'
import ItemSelection from '@/components/datas/items/ItemSelection.vue'
import type { GameItem } from '@/models/YrhGameItem'
import { useItemStore } from '@/stores/datas/itemStore'

const { currentItem } = useItemStore()

const availableItems: GameItem[] = [
  {
    name: 'Melee Attack Up (S)',
    description: 'Weapon attacks do double damage for 15 seconds.',
    numberHeld: 4
  },
  {
    name: 'Melee Attack Up (L)',
    description: 'Weapon attacks do double damage for 30 seconds.',
    numberHeld: 1
  },
  {
    name: 'Melee Defense Up (S)',
    description: 'Melee damage taken is reduced by 50% for 15 seconds.',
    numberHeld: 4
  },
  {
    name: 'Melee Defense Up (L)',
    description: 'Melee damage taken is reduced by 50% for 30 seconds.',
    numberHeld: 1
  },
  {
    name: 'Skill Salve (L)',
    description: 'Skill gauge replenishes twice as fast for 30 seconds',
    numberHeld: 6
  },
  {
    name: 'Impact Bracer (S)',
    description: 'Prevents staggering from an attack for 15 seconds',
    numberHeld: 2
  },
  {
    name: 'Impact Bracer (L)',
    description: 'Prevents staggering from an attack for 30 seconds',
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
    numberHeld: 12
  },
  {
    name: 'Medium Recovery',
    description: 'Restores 75% of HP.',
    numberHeld: 31
  },
  {
    name: 'Full Recovery',
    description: 'Restores all of your HP.',
    numberHeld: 34
  },
  {
    name: 'Visual Cure',
    description: 'Cures visual status ailments.',
    numberHeld: 87
  },
  {
    name: 'Aural Cure',
    description: 'Cures aural status ailments.',
    numberHeld: 60
  },
  {
    name: 'Cure Manipulation',
    description: 'Cure control anomalies.',
    numberHeld: 39
  },
  {
    name: 'Cure All + Heal All',
    description: 'Restores 100% HP and cures all status ailments.',
    numberHeld: 2
  }
]
</script>

<template>
  <section class="grid grid-cols-3 gap-x-10 my-20 overflow-auto">
    <div class="max-h-full overflow-auto">
      <ItemSelection :items="availableItems" />
    </div>
    <div>
      <YrhCard v-if="currentItem">
        <template #title> Item name </template>
      </YrhCard>
    </div>
  </section>
</template>
