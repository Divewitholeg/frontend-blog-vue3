<script setup lang="ts">
import ProductCardMobileSlowLayout from '@/layouts/ProductCardMobileSlowLayout.vue'
import type { Product } from '@/types'
defineProps<{
  prod: Product
}>()
</script>
<template>
  <ProductCardMobileSlowLayout>
    <template #caption>
      {{ prod.title }}
    </template>
    <template #text
      ><div v-for="p in prod.text" :key="p" class="m-2 p-2">{{ p }}</div></template
    >
  </ProductCardMobileSlowLayout>
</template>
