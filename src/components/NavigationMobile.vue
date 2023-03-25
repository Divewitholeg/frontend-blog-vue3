<script setup lang="ts">
import NavigationLanguageSelect from './NavigationLanguageSelect.vue'
const emit = defineEmits(['changeLang'])
const setLang = (lang: string) => {
  emit('changeLang', lang)
}
</script>
<template>
  <div class="flex items-center justify-between mx-5 my-3">
    <img
      src="@/assets/logo200black.svg"
      alt="Oleg Rõbnikov Web Develoment"
      width="200"
      height="50"
    />

    <NavigationLanguageSelect @change-lang="setLang" />
  </div>
</template>
