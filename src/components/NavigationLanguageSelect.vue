<script setup lang="ts">
import langSelection from '@/data/lang.json'

defineEmits(['changeLang'])
const langs = Object.assign(langSelection)
</script>
<template>
  <div>
    <select class="p-1 text-sm rounded-lg text-gray-700">
      <option
        class="block px-4 py-2 hover:bg-gray-100"
        v-for="language in langs"
        :key="language.text"
        @click="$emit('changeLang', language.value)"
      >
        {{ language.flag }} {{ language.text }}
      </option>
    </select>
  </div>
</template>
