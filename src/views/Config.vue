<script lang="ts" setup>
import YrhBanner from '@/components/YrhBanner.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import YrhNav from '@/components/YrhNav.vue'
import YrhAudioMenu from '@/components/config/YrhAudioMenu.vue'
import type { MenuItem } from '@/models/YrhNavItem'
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'

const { bannerText } = storeToRefs(useBannerStore())

const availableRoutes: MenuItem[] = [
  {
    id: 'language',
    label: 'Language',
    bannerText: 'Change terminal language'
  },
  {
    id: 'audio',
    label: 'Audio',
    bannerText: 'Change audio settings'
  }
]

const activeRoute = ref<string | null>('')
function switchActiveRoute(key: string | null) {
  activeRoute.value = key
}

onMounted(() => {
  bannerText.value = null
})
</script>

<template>
  <main class="container grid grid-rows-[auto_1fr_5vh]">
    <YrhHeading> SYSTEM CONFIGURATION </YrhHeading>
    <div class="grid grid-cols-4 items-center">
      <div>
        <YrhNav :items="availableRoutes" @change-nav="switchActiveRoute" />
      </div>
      <Transition name="fade" mode="out-in">
        <YrhAudioMenu v-if="activeRoute === 'language'">test 1</YrhAudioMenu>
        <div v-else-if="activeRoute === 'audio'">test 2</div>
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
