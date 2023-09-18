<script lang="ts" setup>
import { computed } from 'vue'
import YrhCard from '@/components/YrhCard.vue'
import ItemSelection from '@/components/datas/items/ItemSelection.vue'
import { useItemStore } from '@/stores/datas/itemStore'
import { storeToRefs } from 'pinia'
import YrhStatusCard from '@/components/datas/YrhStatusCard.vue'

const { currentItem, availableItems } = storeToRefs(useItemStore())

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
    <div class="items-container max-h-full overflow-hidden">
      <ItemSelection :items="availableItems" />
    </div>
    <div class="max-h-full">
      <Transition name="fade" mode="out-in">
        <YrhCard v-if="currentItem" breathe-bottom>
          <template #title> {{ currentItem.name }} </template>
          <template #image>
            <img v-if="currentItemImage" :src="currentItemImage" height="100" width="100" alt="" />
          </template>
          <template #content> {{ currentItem.description }} </template>
          <template #footer>
            <div class="text-right">
              Number held :
              <span>{{ currentItem.numberHeld }}&nbsp;/&nbsp;99</span>
            </div>
          </template>
        </YrhCard>
      </Transition>
    </div>
    <div class="max-h-full overflow-hidden">
      <div class="h-full max-h-full y-scrollbar overflow-y-auto">
        <YrhStatusCard />
      </div>
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
