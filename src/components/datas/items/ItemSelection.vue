<script lang="ts" setup>
import YrhButton from '@/components/YrhButton.vue'
import type { GameItem } from '@/models/YrhGameItem'

const props = defineProps<{
  items: GameItem[]
}>()
</script>

<template>
  <div class="relative pl-11">
    <menu class="py-4 bg-y-beige-300 max-h-full shadow-sharpest">
      <li v-for="item in props.items" :key="item.name" class="mb-2 last:mb-0">
        <YrhButton no-bg has-arrow>
          <span class="flex justify-between">
            <span>{{ item.name }}</span>
            <span v-if="item.numberHeld">{{ item.numberHeld }}</span>
          </span>
        </YrhButton>
      </li>
    </menu>
  </div>
</template>

<style lang="scss" scoped>
menu {
  // &::before,
  // &::after {
  //   position: absolute;
  //   right: 0.5rem;
  //   left: 0.5rem;
  //   display: block;
  //   content: '';
  //   height: 0.1rem;
  //   background-color: var(--color-y-beige-900);
  //   opacity: 0.25;
  // }

  // &::before {
  //   top: 0;
  // }
  // &::after {
  //   bottom: 0;
  // }

  &::before {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 15px;
    border-left-width: 8px;
    border-right-width: 2px;
    border-color: var(--color-y-beige-900);
    opacity: 0.25;
  }
}
</style>
