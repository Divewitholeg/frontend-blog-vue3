<script setup>
defineProps({
  social: {
    type: Array,
    required: true
  },
  lang: {
    type: String,
    required: true
  }
})
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
          <img :src="`/social/${link.icon}`" :alt="link.name" width="30" height="30"
        /></a>
      </div>
    </div>
  </div>
</template>
