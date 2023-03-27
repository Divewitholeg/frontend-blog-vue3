<script setup lang="ts">
import type { Content } from '@/types'
import { defineAsyncComponent } from 'vue'
defineProps<{
  content: Content
}>()
const AboutMobile = defineAsyncComponent(() => import('./AboutMobile.vue'))
const ProductMobile = defineAsyncComponent(() => import('./ProductMobile.vue'))
const ExtrasMobile = defineAsyncComponent(() => import('./ExtrasMobile.vue'))
const ActionMobile = defineAsyncComponent(() => import('./ActionMobile.vue'))
</script>
<template>
  <section class="mt-20 p-2 pb-10">
    <AboutMobile :self="content.self" />
    <ProductMobile :products="content.prod" />
    <ExtrasMobile :extras="content.extras" />
    <ActionMobile :action="content.action" />
  </section>
</template>
