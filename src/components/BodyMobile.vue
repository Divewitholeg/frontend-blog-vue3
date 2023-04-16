<script setup lang="ts">
import type { Content } from '@/types'
import { defineAsyncComponent, shallowRef } from 'vue'
import AboutMobileContracted from './AboutMobileContracted.vue'
import ProductCardMobileContracted from './ProductCardMobileContracted.vue'
defineProps<{
  content: Content
}>()
const AboutMobileExpanded = defineAsyncComponent(() => import('./AboutMobileExpanded.vue'))
const ProductMobile = defineAsyncComponent(() => import('./ProductMobile.vue'))
const ExtrasMobileExpanded = defineAsyncComponent(() => import('./ExtrasMobileExpanded.vue'))
const ExtrasMobileContracted = defineAsyncComponent(() => import('./ExtrasMobileContracted.vue'))
const ActionMobile = defineAsyncComponent(() => import('./ActionMobile.vue'))
const CardMobileLayout = defineAsyncComponent(() => import('@/layouts/CardMobileLayout.vue'))
const GoogleMapMobile = defineAsyncComponent(() => import('./GoogleMapMobile.vue'))
const aboutActive = shallowRef(false)
const extrasActive = shallowRef(false)
</script>
<template>
  <Suspense>
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
        <ExtrasMobileExpanded
          @click="extrasActive = !extrasActive"
          v-else
          :extras="content.extras"
        />
      </CardMobileLayout>
      <ActionMobile :action="content.action" />
      <GoogleMapMobile />
    </section>
    <template #fallback>
      <section class="mt-20 p-2 pb-10">
        <AboutMobileContracted :self="content.self" />

        <article v-for="prod in content.prod" :key="prod.name" id="prod.name" class="my-3 py-3">
          <ProductCardMobileContracted :prod="prod" />
        </article>
      </section>
    </template>
  </Suspense>
</template>
