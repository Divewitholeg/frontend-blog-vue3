<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { defineAsyncComponent } from 'vue'
import { useContentStore } from './stores/content'

const contentStore = useContentStore()

const LayoutDesktop = defineAsyncComponent(() => import('@/layouts/LayoutDesktop.vue'))
const LayoutMobile = defineAsyncComponent(() => import('@/layouts/LayoutMobile.vue'))
const NavigationDesktop = defineAsyncComponent(() => import('@/components/NavigationDesktop.vue'))
const NavigationMobile = defineAsyncComponent(() => import('@/components/NavigationMobile.vue'))
const BodyMobile = defineAsyncComponent(() => import('@/components/BodyMobile.vue'))
const FooterMobile = defineAsyncComponent(() => import('@/components/FooterMobile.vue'))
const { width } = useWindowSize()
</script>

<template>
  <LayoutMobile v-if="width < 769">
    <template #header>
      <NavigationMobile />
    </template>
    <template #default>
      <BodyMobile :content="contentStore.getContent" />
    </template>
    <template #footer>
      <FooterMobile />
    </template>
  </LayoutMobile>
  <LayoutDesktop v-else>
    <template #header>
      <NavigationDesktop />
    </template>
    <template #asideLeft>
      <h1>This is an aside</h1>
    </template>
    <template #default>
      <RouterView :content="contentStore.getContent" />
    </template>
    <template #asideRight>
      <h1>This is an aside</h1>
    </template>
    <template #footer>
      <h1>This is a footer</h1>
    </template>
  </LayoutDesktop>
</template>
