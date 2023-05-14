<script lang="ts" setup>
import YrhBanner from '@/components/YrhBanner.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'

const { bannerText } = storeToRefs(useBannerStore())
</script>

<template>
  <main class="container max-h-screen grid grid-rows-[auto_1fr_auto] overflow-auto">
    <YrhHeading> ANDROID DATA </YrhHeading>

    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <YrhBanner>
      <Transition name="fade">
        <span v-if="bannerText">{{ bannerText }}</span>
        <span v-else>&#8203;</span>
      </Transition>
    </YrhBanner>
  </main>
</template>
