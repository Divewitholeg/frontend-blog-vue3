<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useContentStore } from '@/stores/content'
import { defineAsyncComponent } from 'vue'
const logo200black = defineAsyncComponent(() => import('@/assets/logo200black.svg'))
const content = useContentStore()
const NavigationLanguageSelect = defineAsyncComponent(
  () => import('@/components/NavigationLanguageSelect.vue')
)
const emit = defineEmits<{ (e: 'changeLang', lang: string): void }>()
const setLang = (lang: string) => {
  emit('changeLang', lang)
}
</script>
<template>
  <div class="flex items-center justify-between mx-5 my-3">
    <div>
      <logo200black
        fill="#431407"
        alt="Oleg Rõbnikov Web Develoment logo"
        width="200"
        height="56"
      />
    </div>
    <div class="flex">
      <div class="" v-for="button in content.getNav" :key="button.text">
        <RouterLink class="btn-primary" :to="button.to">{{ button.text }}</RouterLink>
      </div>
      <NavigationLanguageSelect @change-lang="setLang" />
    </div>
  </div>
</template>
