<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>
<template>
  <div
    :class="!active ? ['h-[70vh]'] : ['h-[20vh]', 'transform', '-rotate-6']"
    class="flex items-center mx-auto px-1 w-[80vw] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg shadow-slate-500 shadow-lg"
  >
    <div
      :class="!active ? ['h-[68vh]', 'overflow-y-scroll'] : 'h-[18vh]'"
      class="relative mx-auto [&>div]:my-3 [&>div]:leading-7 w-[75vw] bg-gradient-to-r from-rose-100 to-teal-100 shadow-white shadow-inner rounded-lg"
    >
      <div
        class="animate-[bounce_0.5s_ease-in] font-semibold font-sans px-2 text-xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500"
        style="animation-iteration-count: 3"
      >
        <span>
          <slot name="caption" />
        </span>
      </div>
      <div :class="{ 'text-lg ml-5 font-extralight': active }">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
