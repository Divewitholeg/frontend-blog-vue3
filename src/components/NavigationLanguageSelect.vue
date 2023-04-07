<script setup lang="ts">
import type { Language } from '@/types'
import langSelection from '@/data/lang.json'
import { ref } from 'vue'

const lang = ref(localStorage.getItem('lang') || navigator.language.slice(0, 2))
const currentFlag = ref(langSelection.find((l) => l.value === lang.value)?.flag)
const currentText = ref(langSelection.find((l) => l.value === lang.value)?.text)
const emit = defineEmits<{ (e: 'changeLang', lang: string): void }>()
const langs: Language[] = Object.assign(langSelection)
</script>
<template>
  <div>
    <select
      @change="emit('changeLang', lang)"
      v-model="lang"
      class="p-1 text-sm rounded-lg text-gray-700"
    >
      <option class="block px-4 py-2 hover:bg-gray-100" disabled>
        {{ currentFlag }} {{ currentText }}
      </option>
      <option
        class="block px-4 py-2 hover:bg-gray-100"
        v-for="language in langs"
        :key="language.text"
        :value="language.value"
      >
        {{ language.flag }} {{ language.text }}
      </option>
    </select>
  </div>
</template>
