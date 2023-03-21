<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{
  self: Product
}>()
</script>
<template>
  <article>
    <h1>Oleg Rõbnikov Web Development</h1>
    <p v-for="(p, index) in self.text" :key="index" class="my-3 p-2">{{ p }}</p>
  </article>
</template>
