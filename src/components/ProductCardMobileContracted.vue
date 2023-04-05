<script setup>
import ProductCardMobileLayoutVue from '@/layouts/ProductCardMobileLayout.vue'

defineProps({
  active: {
    type: Boolean,
    required: true
  },
  prod: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <ProductCardMobileLayoutVue :active="false">
    <template #caption>
      {{ prod.slogan }}
    </template>
    <template #text>{{ prod.price }}</template>
  </ProductCardMobileLayoutVue>
</template>
