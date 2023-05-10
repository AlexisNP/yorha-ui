<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper" class="py-16 px-8">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  position: relative;
  min-height: 100dvh;
  min-height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 1fr;
  isolation: isolate;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.12) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 0.12) 100%
  );

  &::after,
  &::before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 50%;
    content: '';

    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }

  &::before {
    left: 0;
    background-image: url('/yorha-bg-left.svg');
    background-position: left;
  }
  &::after {
    right: 0;
    background-image: url('/yorha-bg-right.svg');
    background-position: right;
  }
}
</style>
