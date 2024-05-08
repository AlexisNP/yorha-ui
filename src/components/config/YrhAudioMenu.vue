<script setup lang="ts">
import YrhAudioSlider from './YrhAudioSlider.vue'
</script>

<template>
  <menu class="pl-11">
    <li>
      <YrhAudioSlider>Volume</YrhAudioSlider>
    </li>
  </menu>
</template>

<style lang="scss" scoped>
menu {
  position: relative;

  li:not(:first-child) {
    @apply mt-3;
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
