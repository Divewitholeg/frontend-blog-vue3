<script setup lang="ts">
import ProductCardMobileLayoutVue from '@/layouts/ProductCardMobileLayout.vue'
import type { Product } from '@/types'
defineProps<{
  prod: Product
}>()
</script>
<template>
  <ProductCardMobileLayoutVue :active="false">
    <template #caption>
      {{ prod.slogan }}
    </template>
    <template #text>{{ prod.price }}</template>
  </ProductCardMobileLayoutVue>
</template>
