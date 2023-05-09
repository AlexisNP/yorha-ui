<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import YrhButton from './YrhButton.vue'

import { useBannerStore } from '@/stores/banner'

const { bannerText } = storeToRefs(useBannerStore())

const activeKey = ref<string | null>(null)

function handleActiveBtn(e: Event, key: string) {
  if (document.activeElement && e.type === 'mouseenter') {
    ;(document.activeElement as HTMLElement).blur()
  }
  activeKey.value = key
  bannerText.value = handleBannerUpdate(key)
}

function handleInactiveState() {
  if (document.activeElement && document.activeElement.tagName !== 'BUTTON') {
    bannerText.value = null
  }
  activeKey.value = null
}

function handleBannerUpdate(key: string) {
  switch (key) {
    case 'current-data':
      return 'Search through current file data'
    case 'settings':
      return 'Modify personnal data'
    case 'credits':
      return 'Obtain personnel archives'
    default:
      return 'Unknown data'
  }
}
</script>

<template>
  <div class="relative">
    <menu>
      <li>
        <YrhButton
          has-square
          has-arrow
          @mouseenter="handleActiveBtn($event, 'current-data')"
          @focus="handleActiveBtn($event, 'current-data')"
          @mouseleave="handleInactiveState"
          @blur="handleInactiveState"
        >
          Current Data
        </YrhButton>
      </li>
      <li>
        <YrhButton
          has-square
          has-arrow
          @mouseenter="handleActiveBtn($event, 'settings')"
          @focus="handleActiveBtn($event, 'settings')"
          @mouseleave="handleInactiveState"
          @blur="handleInactiveState"
        >
          Settings
        </YrhButton>
      </li>
      <li>
        <YrhButton
          has-square
          has-arrow
          @mouseenter="handleActiveBtn($event, 'credits')"
          @focus="handleActiveBtn($event, 'credits')"
          @mouseleave="handleInactiveState"
          @blur="handleInactiveState"
        >
          Credits
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
