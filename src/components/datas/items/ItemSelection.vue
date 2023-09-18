<script lang="ts" setup>
import YrhButton from '@/components/YrhButton.vue'
import type { GameItem } from '@/models/YrhGameItem'
import { useItemStore } from '@/stores/datas/itemStore'
import { storeToRefs } from 'pinia'

const { currentItem } = storeToRefs(useItemStore())

const props = defineProps<{
  items: GameItem[]
}>()

function handleSelectedItem(item: GameItem) {
  currentItem.value = item
}
</script>

<template>
  <div class="h-full relative pl-11">
    <menu
      class="h-[calc(100%-16px)] overflow-auto py-2 bg-y-beige-300 max-h-full shadow-sharpest y-scrollbar"
    >
      <li v-for="item in props.items" :key="item.name" class="mb-2 last:mb-0">
        <YrhButton
          no-bg
          :has-arrow="item.name === currentItem?.name ? 'force' : true"
          @clicked="handleSelectedItem(item)"
          :is-active="item.name === currentItem?.name"
        >
          <span class="flex justify-between">
            <span class="flex items-center">
              <span v-if="item.category">
                <img
                  :src="`/images/item-${item.category}-icon.png`"
                  class="pr-2"
                  height="24"
                  width="24"
                  alt=""
                />
              </span>
              <span>{{ item.name }}</span>
            </span>
            <span v-if="item.numberHeld">{{ item.numberHeld }}</span>
          </span>
        </YrhButton>
      </li>
    </menu>
  </div>
</template>

<style lang="scss" scoped>
menu {
  &::before {
    @apply block absolute -top-2 -bottom-2 left-0 w-4;
    content: '';
    border-left-width: 8px;
    border-right-width: 2px;
    border-color: var(--color-y-beige-900);
    opacity: 0.25;
  }
}
</style>
