<script lang="ts" setup>
import YrhButton from './YrhButton.vue'

const emit = defineEmits<{
  (e: 'set-active-item', key: string): void
  (e: 'remove-active-item'): void
}>()

function handleActiveBtn(e: Event, key: string) {
  if (document.activeElement && e.type === 'mouseenter') {
    ;(document.activeElement as HTMLElement).blur()
  }
  emit('set-active-item', key)
}

function handleInactiveState() {
  if (document.activeElement && document.activeElement.tagName !== 'BUTTON') {
    emit('remove-active-item')
  }
}
</script>

<template>
  <menu>
    <li>
      <YrhButton
        has-square
        @mouseenter="handleActiveBtn($event, 'current-data')"
        @focus="handleActiveBtn($event, 'current-data')"
        @mouseleave="handleInactiveState"
        @blur="handleInactiveState"
      >
        Current Data
      </YrhButton>
    </li>
    <li>
      <YrhButton
        has-square
        @mouseenter="handleActiveBtn($event, 'settings')"
        @focus="handleActiveBtn($event, 'settings')"
        @mouseleave="handleInactiveState"
        @blur="handleInactiveState"
      >
        Settings
      </YrhButton>
    </li>
    <li>
      <YrhButton
        has-square
        @mouseenter="handleActiveBtn($event, 'credits')"
        @focus="handleActiveBtn($event, 'credits')"
        @mouseleave="handleInactiveState"
        @blur="handleInactiveState"
      >
        Credits
      </YrhButton>
    </li>
  </menu>
</template>

<style lang="scss" scoped>
menu {
  li {
    @apply mb-3;
  }
}
</style>
