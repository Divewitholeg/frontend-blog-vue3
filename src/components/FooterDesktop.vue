<script setup lang="ts">
import type { Social } from '@/types'
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
          link.tags.includes('desktop') && (link.tags.includes('all') || link.tags.includes(lang))
        "
        class="mx-3"
      >
        <a :href="link.url">
          <img :src="`/social/${link.icon}`" :alt="link.name" width="25" height="25"
        /></a>
      </div>
    </div>
  </div>
</template>
