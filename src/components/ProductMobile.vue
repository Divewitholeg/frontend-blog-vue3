<script setup lang="ts">
import type { Product } from '@/types'

import ProductCardMobile from './ProductCardMobile.vue'
defineProps<{
  products: Product[]
}>()
</script>
<template>
  <article v-for="prod in products" :key="prod.name" id="prod.name" class="my-3 py-3">
    <ProductCardMobile :prod="prod" />
  </article>
</template>
