<script setup lang="ts">
import langSelection from '@/data/lang.json'
import { useContentStore } from '@/stores/content'

const langs = Object.assign(langSelection)

const setLang = (lang: string) => {
  localStorage.setItem('lang', lang)
  useContentStore().setContent(lang)
}
</script>
<template>
  <div>
    <select class="p-1 text-sm rounded-lg text-gray-700">
      <option
        class="block px-4 py-2 hover:bg-gray-100"
        v-for="language in langs"
        :key="language.text"
        @click="setLang(language.value)"
      >
        {{ language.flag }} {{ language.text }}
      </option>
    </select>
  </div>
</template>
