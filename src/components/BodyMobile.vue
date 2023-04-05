<script setup>
import { defineAsyncComponent, shallowRef } from 'vue'
import CardMobileLayout from '@/layouts/CardMobileLayout.vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
const AboutMobileContracted = defineAsyncComponent(() => import('./AboutMobileContracted.vue'))
const AboutMobileExpanded = defineAsyncComponent(() => import('./AboutMobileExpanded.vue'))
const ProductMobile = defineAsyncComponent(() => import('./ProductMobile.vue'))
const ExtrasMobileExpanded = defineAsyncComponent(() => import('./ExtrasMobileExpanded.vue'))
const ExtrasMobileContracted = defineAsyncComponent(() => import('./ExtrasMobileContracted.vue'))
const ActionMobile = defineAsyncComponent(() => import('./ActionMobile.vue'))
const aboutActive = shallowRef(false)
const extrasActive = shallowRef(false)
</script>
<template>
  <section class="mt-20 p-2 pb-10">
    <CardMobileLayout>
      <AboutMobileContracted
        @click="aboutActive = !aboutActive"
        v-if="!aboutActive"
        :self="content.self"
      />
      <AboutMobileExpanded @click="aboutActive = !aboutActive" v-else :self="content.self" />
    </CardMobileLayout>
    <ProductMobile :products="content.prod" />
    <CardMobileLayout>
      <ExtrasMobileContracted
        @click="extrasActive = !aboutActive"
        v-if="!extrasActive"
        :extras="content.extras"
      />
      <ExtrasMobileExpanded @click="extrasActive = !extrasActive" v-else :extras="content.extras" />
    </CardMobileLayout>
    <ActionMobile :action="content.action" />
  </section>
</template>
