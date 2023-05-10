<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import YrhButton from './YrhButton.vue'

import { useBannerStore } from '@/stores/banner'
import type { MenuItem } from '@/models/YrhNavItem'
const { bannerText } = storeToRefs(useBannerStore())

const props = defineProps<{
  items?: MenuItem[]
}>()

const emit = defineEmits<{
  (e: 'change-nav', key: string | null): void
}>()

const clickedKey = ref<string | null>(null)
const activeKey = ref<string | null>(null)

function handleClickedKey(e: Event, item: MenuItem) {
  clickedKey.value = item.id
  emit('change-nav', item.id)
}

function handleActiveBtn(e: Event, item: MenuItem) {
  if (document.activeElement && e.type === 'mouseenter') {
    ;(document.activeElement as HTMLElement).blur()
  }
  activeKey.value = item.id
  bannerText.value = item.bannerText
}

function handleInactiveState() {
  if (document.activeElement && document.activeElement.tagName !== 'BUTTON') {
    bannerText.value = null
  }
  activeKey.value = null
}
</script>

<template>
  <div class="relative">
    <menu v-if="props.items">
      <li
        v-for="item in props.items"
        :key="item.id"
        class="transition-all"
        :class="item.id === clickedKey ? 'w-full' : 'w-11/12'"
      >
        <YrhButton
          has-square
          :has-arrow="item.id === clickedKey ? 'force' : true"
          :is-active="item.id === clickedKey"
          @mouseenter="handleActiveBtn($event, item)"
          @focus="handleActiveBtn($event, item)"
          @mouseleave="handleInactiveState"
          @blur="handleInactiveState"
          @clicked="handleClickedKey($event, item)"
        >
          {{ item.label }}
        </YrhButton>
      </li>
    </menu>
  </div>
</template>

<style lang="scss" scoped>
menu {
  position: relative;
  @apply pl-9;

  li {
    @apply mb-3;
  }

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
