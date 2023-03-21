<script setup lang="ts">
defineProps<{
  action: string
}>()
</script>
<template>
  <article>
    <p>{{ action }}</p>
  </article>
</template>
