<script lang="ts" setup>
import { computed, ref } from 'vue'

import YrhBanner from '@/components/YrhBanner.vue'
import YrhHeading from '@/components/YrhHeading.vue'
import YrhMainNav from '@/components/YrhMainNav.vue'

import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'

const { bannerText } = storeToRefs(useBannerStore())
</script>

<template>
  <main class="container grid grid-rows-[auto_1fr_5vh]">
    <YrhHeading> YORHA SYSTEM </YrhHeading>
    <div class="grid grid-cols-4 items-center">
      <div>
        <YrhMainNav />
      </div>
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
