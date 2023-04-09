<script setup lang="ts">
import type { Social } from '@/types'
import SvgLoader from './SvgLoader.vue'
defineProps<{
  lang: string
  social: Social[]
}>()
</script>
<template>
  <div class="flex justify-center my-2">
    <div v-for="link in social" :key="link.url">
      <div
        v-if="
          link.tags.includes('mobile') && (link.tags.includes('all') || link.tags.includes(lang))
        "
        class="mx-3"
      >
        <a :href="link.url">
          <SvgLoader :name="link.icon" :alt="link.name" fill="#4a044e" width="25" height="25"
        /></a>
      </div>
    </div>
  </div>
</template>
