<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{
  extras: Product
}>()
</script>
<template>
  <article>
    <h2
      class="font-semibold font-sans px-2 text-xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500"
    >
      {{ extras.title }}
    </h2>
    <p v-for="(p, index) in extras.text" :key="index">{{ p }}</p>
    <ul v-for="li in extras.price" :key="li">
      <li>{{ li }}</li>
    </ul>
  </article>
</template>
