<script setup lang="ts">
import type { Product } from '@/types'
import { ref } from 'vue'
import ProductCardMobileContracted from './ProductCardMobileContracted.vue'
import ProductCardMobileExpanded from './ProductCardMobileExpanded.vue'
defineProps<{
  prod: Product
}>()
const active = ref(true)
</script>
<template>
  <article class="my-3">
    <TransitionGroup
      enter-from-class="duration-100 opacity-0 translate-y-5 "
      enter-active-class="duration-300 opacity-30 "
      enter-to-class="duration-200 opacity-100 rotate-180 "
      leave-from-class="duration-100 opacity-100"
      leave-active-class="duration-200 opacity-50 "
      leave-to-class="duration-200 opacity-0 translate-y-5"
      appear
    >
      <ProductCardMobileContracted
        v-if="active"
        :active="active"
        @click="active = !active"
        :prod="prod"
      />
      <ProductCardMobileExpanded v-else :active="active" @click="active = !active" :prod="prod" />
    </TransitionGroup>
  </article>
</template>
