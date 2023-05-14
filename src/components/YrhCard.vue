<template>
  <article class="h-full grid grid-rows-[auto_1fr_1fr_auto] gap-3 bg-y-beige-300">
    <header class="px-3 py-1 bg-y-beige-700">
      <span class="tracking-wider text-lg text-y-beige-400">
        <slot name="title" />
      </span>
    </header>

    <figure class="mx-3 bg-y-beige-500 grid place-items-center">
      <slot name="image" />
    </figure>

    <div class="mx-3">
      <slot name="content" />
    </div>

    <footer class="mx-3">
      <slot name="footer" />
    </footer>
  </article>
</template>
