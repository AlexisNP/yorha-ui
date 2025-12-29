<script lang="ts" setup>
import { useSlots } from 'vue'
const slots = useSlots()

const props = defineProps<{
  breatheBottom?: boolean
}>()
</script>

<template>
  <article
    class="h-full grid grid-rows-[auto_1fr_1fr_auto] gap-4 bg-y-beige-300"
    :class="{ 'pb-4': props.breatheBottom }"
  >
    <header class="px-4 py-1 bg-y-beige-700">
      <span class="tracking-wider text-lg text-y-beige-400">
        <slot name="title" />
      </span>
    </header>

    <figure v-if="slots.image" class="mx-4 after:content-[''] after:block after:w-full after:h-[0.1rem] after:my-3 after:bg-y-beige-500">
      <div class="h-full bg-y-beige-500 relative *:absolute *:top-1/2 *:left-1/2 *:-translate-1/2">
        <slot name="image" />
      </div>
    </figure>

    <div class="mx-4">
      <slot name="content" />
    </div>

    <footer v-if="slots.footer" class="mx-4">
      <slot name="footer" />
    </footer>
  </article>
</template>

<style lang="scss" scoped>
figure {
  &::after {
    content: '';
  }
}
</style>
