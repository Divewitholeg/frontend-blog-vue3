<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
const AboutDesktop = defineAsyncComponent(() => import('@/components/AboutDesktop.vue'))
const ContactsDesktop = defineAsyncComponent(() => import('@/components/ContactsDesktop.vue'))
const route = computed(() => useRoute().params.link)
</script>
<template>
  <AboutDesktop v-if="route === 'about'" :self="content.about" />
  <ContactsDesktop v-if="route === 'contact'" :contacts="content.contacts" />
</template>
