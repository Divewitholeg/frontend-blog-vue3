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
  <ProductCardMobileLayoutVue :active="true">
    <template #caption>
      {{ prod.title }}
    </template>
    <template #text
      ><div v-for="p in prod.text" :key="p" class="m-2 p-2">{{ p }}</div></template
    >
  </ProductCardMobileLayoutVue>
</template>
