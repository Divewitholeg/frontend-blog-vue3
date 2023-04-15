<template>
  <article class="my-3">
    <TransitionGroup
      mode="out-in"
      enter-from-class="duration-100 opacity-0 translate-y-5"
      enter-active-class="duration-300 opacity-30"
      enter-to-class="duration-200 opacity-100 rotate-180 top-0"
      leave-from-class="duration-100 opacity-100"
      leave-active-class="duration-200 opacity-50 "
      leave-to-class="duration-200 opacity-0 translate-y-5 top-0"
    >
      <slot />
    </TransitionGroup>
  </article>
</template>
