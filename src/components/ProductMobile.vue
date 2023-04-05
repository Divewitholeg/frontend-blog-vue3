<script setup>
import ProductCardMobile from './ProductCardMobile.vue'
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <article v-for="prod in products" :key="prod.name" id="prod.name" class="my-3 py-3">
    <ProductCardMobile :prod="prod" />
  </article>
</template>
