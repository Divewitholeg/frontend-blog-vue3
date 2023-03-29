<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{
  self: Product
}>()
</script>
<template>
  <article>
    <h1
      class="animate-[bounce_0.5s_ease-in] font-semibold font-sans px-2 text-xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500"
      style="animation-iteration-count: 3"
    >
      {{ self.title }}
    </h1>
    <p v-for="(p, index) in self.text" :key="index" class="my-3 p-2">{{ p }}</p>
  </article>
</template>
