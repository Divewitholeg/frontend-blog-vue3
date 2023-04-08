<script setup lang="ts">
import type { Content } from '@/types'
import { defineAsyncComponent, shallowRef } from 'vue'
import AboutMobileSlow from './AboutMobileSlow.vue'
import ProductCardMobileSlow from './ProductCardMobileSlow.vue'
defineProps<{
  content: Content
  width: number
}>()
const AboutMobileContracted = defineAsyncComponent(() => import('./AboutMobileContracted.vue'))
const AboutMobileExpanded = defineAsyncComponent(() => import('./AboutMobileExpanded.vue'))
const ProductMobile = defineAsyncComponent(() => import('./ProductMobile.vue'))
const ExtrasMobileExpanded = defineAsyncComponent(() => import('./ExtrasMobileExpanded.vue'))
const ExtrasMobileContracted = defineAsyncComponent(() => import('./ExtrasMobileContracted.vue'))
const ActionMobile = defineAsyncComponent(() => import('./ActionMobile.vue'))
const CardMobileLayout = defineAsyncComponent(() => import('@/layouts/CardMobileLayout.vue'))
const ExtrasMobileSlow = defineAsyncComponent(() => import('./ExtrasMobileSlow.vue'))
const aboutActive = shallowRef(false)
const extrasActive = shallowRef(false)
</script>
<template>
  <section v-if="width > 412" class="mt-20 p-2 pb-10">
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
  <section v-else class="mt-20 p-2 pb-10">
    <AboutMobileSlow :self="content.self" />

    <article v-for="prod in content.prod" :key="prod.name" id="prod.name" class="my-3 py-3">
      <ProductCardMobileSlow :prod="prod" />
    </article>

    <ExtrasMobileSlow :extras="content.extras" />

    <ActionMobile :action="content.action" />
  </section>
</template>
