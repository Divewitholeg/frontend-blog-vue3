<script setup>
defineProps({
  action: {
    type: String,
    required: true
  }
})
</script>
<template>
  <article>
    <p>{{ action }}</p>
  </article>
</template>
