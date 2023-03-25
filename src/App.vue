<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { ref, defineAsyncComponent } from 'vue'
import { useContentStore } from './stores/content'
import socialMedia from './data/social.json'

const contentStore = useContentStore()
const lang = ref(localStorage.getItem('lang') || navigator.language.slice(0, 2))
const social = Object.assign(socialMedia)
const LayoutDesktop = defineAsyncComponent(() => import('@/layouts/LayoutDesktop.vue'))
const LayoutMobile = defineAsyncComponent(() => import('@/layouts/LayoutMobile.vue'))
const NavigationDesktop = defineAsyncComponent(() => import('@/components/NavigationDesktop.vue'))
const NavigationMobile = defineAsyncComponent(() => import('@/components/NavigationMobile.vue'))
const BodyMobile = defineAsyncComponent(() => import('@/components/BodyMobile.vue'))
const FooterMobile = defineAsyncComponent(() => import('@/components/FooterMobile.vue'))
const FooterDesktop = defineAsyncComponent(() => import('@/components/FooterDesktop.vue'))
const { width } = useWindowSize()
const setLang = (newLang: string) => {
  lang.value = newLang
  localStorage.setItem('lang', lang.value)
  contentStore.setContent(lang.value)
}
</script>

<template>
  <LayoutMobile v-if="width < 769">
    <template #header>
      <NavigationMobile @changeLang="setLang" />
    </template>
    <template #default>
      <BodyMobile :content="contentStore.getContent" />
    </template>
    <template #footer>
      <FooterMobile :lang="lang" :social="social" />
    </template>
  </LayoutMobile>
  <LayoutDesktop v-else>
    <template #header>
      <NavigationDesktop @changeLang="setLang" />
    </template>
    <template #asideLeft>
      <h1></h1>
    </template>
    <template #default>
      <RouterView :content="contentStore.getContent" />
    </template>
    <template #asideRight>
      <h1></h1>
    </template>
    <template #footer>
      <FooterDesktop :lang="lang" :social="social" />
    </template>
  </LayoutDesktop>
</template>
