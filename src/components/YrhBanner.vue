<template>
  <div class="banner shadow-sharpest bg-y-beige-300 py-3 px-9">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;

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
    opacity: 0.9;
  }

  &::after {
    display: block;
    position: absolute;
    content: '';
    bottom: 5px;
    right: 5px;
    height: 8px;
    width: 8px;
    background-color: var(--color-y-beige-900);
    opacity: 0.9;
  }
}
</style>
