<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{
  extras: Product
}>()
</script>
<template>
  <article>
    <h2>{{ extras.title }}</h2>
    <p v-for="(p, index) in extras.text" :key="index">{{ p }}</p>
    <ul v-for="li in extras.price" :key="li">
      <li>{{ li }}</li>
    </ul>
  </article>
</template>
