<script lang="ts" setup>
import { computed } from 'vue'
import YrhCard from '@/components/YrhCard.vue'
import ItemSelection from '@/components/datas/items/ItemSelection.vue'
import type { GameItem } from '@/models/YrhGameItem'
import { useItemStore } from '@/stores/datas/itemStore'
import { storeToRefs } from 'pinia'

const { currentItem } = storeToRefs(useItemStore())

const availableItems: GameItem[] = [
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
]

const currentItemImage = computed(() => {
  switch (currentItem.value?.category) {
    case 'enhancement':
      return '/images/item-enhancement-md.png'

    case 'restorative':
      return '/images/item-restorative-md.png'

    default:
      return null
  }
})
</script>

<template>
  <section class="grid grid-cols-3 gap-x-10 my-14 overflow-auto">
    <div class="items-container max-h-full overflow-auto">
      <ItemSelection :items="availableItems" />
    </div>
    <div>
      <YrhCard v-if="currentItem">
        <template #title> {{ currentItem.name }} </template>
        <template #image>
          <img v-if="currentItemImage" :src="currentItemImage" height="80" width="80" alt="" />
        </template>
        <template #content> {{ currentItem.description }} </template>
        <template #footer>
          <div class="text-right">Number held : {{ currentItem.numberHeld }}/99</div>
        </template>
      </YrhCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.items-container {
  @apply relative overflow-x-hidden;

  &::before,
  &::after {
    content: '';
    height: 0.1rem;
    @apply block sticky ml-11 w-full h-2 left-14 -right-14 z-10 bg-y-beige-300;
    border-color: rgba(45, 44, 33, 0.33);
  }

  &::before {
    @apply top-0 border-b-2;
  }
  &::after {
    @apply bottom-0 border-t-2;
  }
}
</style>
