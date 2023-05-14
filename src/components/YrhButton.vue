<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useElementHover, useFocus } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()

const hoverSfx = new Audio('/sounds/btn-hover.mp3')
const clickSfx = new Audio('/sounds/btn-click.mp3')

const btnRef = ref<HTMLElement | null>()
const isBtnHovered = useElementHover(btnRef)
const { focused: isBtnFocused } = useFocus(btnRef)

const emit = defineEmits(['clicked'])

const props = defineProps<{
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  isActive?: boolean
  hasSquare?: boolean
  hasArrow?: boolean | 'force'
  noBg?: boolean
}>()

const attributes = {
  href: props.href,
  target: props.target,
  rel: props.rel,
  disabled: props.disabled
}

const isInternalLink = computed(() => props.href && props.href.charAt(0) === '/')

const elementTag = computed(() => {
  if (props.href) {
    if (isInternalLink.value) {
      return 'button'
    }
    return 'a'
  }
  return 'button'
})

const shouldArrowDisplay = computed(
  () => isBtnFocused.value || isBtnHovered.value || props.hasArrow === 'force'
)

function playHoverSfx() {
  hoverSfx.play()
}

function handleClick(e: MouseEvent) {
  clickSfx.play()
  emit('clicked')

  if (props.href && isInternalLink) {
    router.push(props.href)
  }
}

function handleMouseOver() {
  if (!isBtnFocused.value) {
    playHoverSfx()
  }
}

function handleFocusin() {
  if (!isBtnHovered.value) {
    playHoverSfx()
  }
}
</script>

<template>
  <component
    ref="btnRef"
    :is="elementTag"
    v-bind="attributes"
    class="btn inline-block w-full p-1 px-2 text-left"
    :class="{
      active: isActive,
      'bg-y-beige-500 hover:shadow-md focus-visible:shadow-md': !noBg,
      'text-y-beige-700': noBg
    }"
    @mousedown="handleClick"
    @keyup.enter="handleClick"
    @keyup.space="handleClick"
    @focusin="handleFocusin"
    @mouseover="handleMouseOver"
  >
    <Transition name="fade" :duration="{ enter: 100, leave: 100 }">
      <img
        v-if="shouldArrowDisplay"
        src="/yorha-cursor.svg"
        height="32"
        width="32"
        class="absolute top-1/2 -translate-y-1/2 -left-11 scale-90 pointer-events-none transition-all"
        :class="{ 'invert-[.33] opacity-60': props.hasArrow === 'force' }"
        alt=""
      />
    </Transition>
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
