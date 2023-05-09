<script lang="ts" setup>
import { computed, ref } from 'vue'

import YrhBanner from '@/components/YrhBanner.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import YrhMainNav from '@/components/YrhMainNav.vue'

const activeItem = ref<string | null>()

function handleActiveItem(key: string) {
  activeItem.value = key
}
function handleInactiveMenu() {
  activeItem.value = null
}

const activeItemDescription = computed(() => {
  switch (activeItem.value) {
    case 'current-data':
      return 'Search through current file data'
    case 'settings':
      return 'Modify personnal data'
    case 'credits':
      return 'Obtain personnel archives'
    default:
      return 'Unknown data'
  }
})
</script>

<template>
  <main class="container grid grid-rows-[auto_1fr_5vh]">
    <YrhHeading> YORHA SYSTEM </YrhHeading>
    <div class="grid grid-cols-4 items-center">
      <div>
        <YrhMainNav
          @set-active-item="handleActiveItem"
          @remove-active-item="handleInactiveMenu"
        ></YrhMainNav>
      </div>
    </div>
    <div>
      <YrhBanner>
        <Transition name="fade">
          <span v-if="activeItem">{{ activeItemDescription }}</span>
          <span v-else>&#8203;</span>
        </Transition>
      </YrhBanner>
    </div>
  </main>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
