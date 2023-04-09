<script setup lang="ts">
import NavigationLanguageSelect from './NavigationLanguageSelect.vue'
import { defineAsyncComponent } from 'vue'
const logo200black = defineAsyncComponent(() => import('@/assets/logo200black.svg'))
const emit = defineEmits<{ (e: 'changeLang', lang: string): void }>()
const setLang = (lang: string) => {
  emit('changeLang', lang)
}
</script>
<template>
  <div class="flex items-center justify-between mx-5 my-3">
    <logo200black fill="#4a044e" width="200" height="50" />

    <NavigationLanguageSelect @change-lang="setLang" />
  </div>
</template>
