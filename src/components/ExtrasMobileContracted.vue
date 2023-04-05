<script setup>
defineProps({
  extras: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <article>
    <h2
      class="animate-[bounce_0.5s_ease-in] font-semibold font-sans px-2 text-xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500"
      style="animation-iteration-count: 3"
    >
      {{ extras.title }}
    </h2>
    <p v-for="(p, index) in extras.text" :key="index" class="line-clamp-1">{{ p }}</p>
    <ul v-for="li in extras.price" :key="li">
      <li>{{ li }}</li>
    </ul>
  </article>
</template>
