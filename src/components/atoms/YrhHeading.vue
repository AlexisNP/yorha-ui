<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="flex items-end">
    <h1 class="text-4xl tracking-wider">
      <slot />
    </h1>
    <span v-if="slots.subtitle" class="ml-2 text-lg font-medium">
      <slot name="subtitle" />
    </span>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 5px 5px 0px var(--color-y-beige-500);
}
</style>
