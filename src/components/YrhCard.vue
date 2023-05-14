<script lang="ts" setup>
import { useSlots } from 'vue'
const slots = useSlots()
</script>

<template>
  <article class="h-full grid grid-rows-[auto_1fr_1fr_auto] gap-4 bg-y-beige-300 pb-4">
    <header class="px-4 py-1 bg-y-beige-700">
      <span class="tracking-wider text-lg text-y-beige-400">
        <slot name="title" />
      </span>
    </header>

    <figure class="mx-4 bg-y-beige-500 grid place-items-center">
      <slot name="image" />
    </figure>

    <div class="mx-4 pt-1 border-t-2 border-y-beige-500">
      <slot name="content" />
    </div>

    <footer class="mx-4">
      <slot name="footer" />
    </footer>
  </article>
</template>
