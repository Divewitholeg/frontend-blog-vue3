<script setup>
import ProductDesktop from '@/components/ProductDesktop.vue'
import ExtrasDesktop from '@/components/ExtrasDesktop.vue'
import ActionDesktop from '@/components/ActionDesktop.vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <h1>
    {{ content.self.title }}
  </h1>
  <ProductDesktop :prod="content.prod" />
  <ExtrasDesktop :extras="content.extras" />
  <ActionDesktop :action="content.action" />
</template>
