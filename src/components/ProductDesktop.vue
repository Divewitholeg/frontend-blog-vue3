<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{
  prod: Product[]
}>()
</script>
<template>
  <article v-for="pr in prod" :key="pr.name" id="pr.name">
    <h2>{{ pr.title }}</h2>
    <blockquote>{{ pr.slogan }}</blockquote>
    <p>{{ pr.price }}</p>
    <p v-for="(p, index) in pr.text" :key="index">{{ p }}</p>
  </article>
</template>
