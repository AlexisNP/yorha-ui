<script lang="ts" setup>
import { useSound } from '@vueuse/sound'
import { computed } from 'vue'

import buttonSfx from '@/assets/sounds/btn-hover.mp3'

const { play, stop } = useSound(buttonSfx)

const props = defineProps<{
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  isActive?: boolean
  hasSquare?: boolean
}>()

const attributes = {
  href: props.href,
  target: props.target,
  rel: props.rel,
  disabled: props.disabled
}

const elementTag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="elementTag"
    v-bind="attributes"
    class="btn w-full p-1 px-2 text-left bg-y-beige-500 hover:shadow-md focus-visible:shadow-md"
    :class="{ active: isActive }"
    @focus="play"
    @mouseover="play"
    @mouseleave="stop"
  >
    <span class="mr-1" v-if="hasSquare">
      <font-awesome-icon :icon="['fas', 'square']" />
    </span>
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.btn {
  position: relative;
  isolation: isolate;

  transition-property: color;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0;

  & + & {
    margin-top: 1rem;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    height: 100%;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 0%;
    transition-property: width;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    background-color: var(--color-y-beige-700);
    z-index: -1;
  }

  &::before {
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    transition-property: border-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    border-top: 0.05rem solid transparent;
    border-bottom: 0.05rem solid transparent;
  }

  &:not(:focus, :hover, .active) {
    transition-delay: 0.15s;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover,
  &.active {
    color: var(--color-y-beige-400);

    &::before {
      height: calc(100% + 0.35rem);
      border-top-color: var(--color-y-beige-700);
      border-bottom-color: var(--color-y-beige-700);
    }

    &::after {
      width: 100%;
    }
  }
}
</style>
