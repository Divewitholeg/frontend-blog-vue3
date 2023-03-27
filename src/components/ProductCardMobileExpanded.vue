<script setup lang="ts">
import ProductCardMobileLayoutVue from '@/layouts/ProductCardMobileLayout.vue'
import type { Product } from '@/types'
defineProps<{
  prod: Product
}>()
</script>
<template>
  <ProductCardMobileLayoutVue :active="true">
    <template #caption>
      {{ prod.title }}
    </template>
    <template #text
      ><div v-for="p in prod.text" :key="p" class="m-2 p-2">{{ p }}</div></template
    >
  </ProductCardMobileLayoutVue>
</template>
