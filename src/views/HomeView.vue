<script lang="ts" setup>
import { ref } from 'vue'

import YrhBanner from '@/components/YrhBanner.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import YrhNav from '@/components/YrhNav.vue'

import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import type { MenuItem } from '@/models/YrhNavItem'

const { bannerText } = storeToRefs(useBannerStore())

const availableRoutes: MenuItem[] = [
  {
    id: 'current-data',
    label: 'Current Data',
    bannerText: 'Search through current file data',
    href: '/data/items'
  },
  {
    id: 'settings',
    label: 'Settings',
    bannerText: 'Modify personnal data'
  },
  {
    id: 'credits',
    label: 'Credits',
    bannerText: "Search through personnel's archive"
  }
]

const settingsOptions: MenuItem[] = [
  {
    id: 'dark-mode',
    label: 'Dark Mode',
    bannerText: 'Alter the terminal appearance'
  },
  {
    id: 'language',
    label: 'Language',
    bannerText: 'Change terminal language'
  },
  {
    id: 'audio',
    label: 'Audio',
    bannerText: 'Change audio settings'
  },
  {
    id: 'video',
    label: 'Video',
    bannerText: 'Change video settings'
  },
  {
    id: 'controls',
    label: 'Controls',
    bannerText: 'Change keyboard or gamepad controls'
  }
]

const activeRoute = ref<string | null>('')
function switchActiveRoute(key: string | null) {
  activeRoute.value = key
}
</script>

<template>
  <main class="container grid grid-rows-[auto_1fr_5vh]">
    <YrhHeading> YORHA SYSTEM </YrhHeading>
    <div class="grid grid-cols-4 items-center">
      <div>
        <YrhNav :items="availableRoutes" @change-nav="switchActiveRoute" />
      </div>
      <Transition name="fade" mode="out-in">
        <YrhNav v-if="activeRoute === 'settings'" :items="settingsOptions" />
        <YrhNav v-else-if="activeRoute === 'credits'" :items="settingsOptions" />
      </Transition>
    </div>
    <div>
      <YrhBanner>
        <Transition name="fade">
          <span v-if="bannerText">{{ bannerText }}</span>
          <span v-else>&#8203;</span>
        </Transition>
      </YrhBanner>
    </div>
  </main>
</template>
