<script lang="ts" setup>
import YrhCard from '@/components/YrhCard.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import YrhStatusCard from '@/components/datas/YrhStatusCard.vue'
import ItemSelection from '@/components/datas/items/ItemSelection.vue'
import { useBannerStore } from '@/stores/banner'
import { useItemStore } from '@/stores/datas/itemStore'
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'

const { currentItem, availableItems } = storeToRefs(useItemStore())
const { bannerText } = storeToRefs(useBannerStore())

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

onMounted(() => {
  bannerText.value = 'Select item'
})
</script>

<template>
  <YrhHeading>
    ITEMS
    <template #subtitle> All items </template>
  </YrhHeading>
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
