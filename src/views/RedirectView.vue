<script setup lang="ts">
import type { Content } from '@/types'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
defineProps<{
  content: Content
}>()
const AboutDesktop = defineAsyncComponent(() => import('@/components/AboutDesktop.vue'))
const ContactsDesktop = defineAsyncComponent(() => import('@/components/ContactsDesktop.vue'))
const route = computed(() => useRoute().params.link)
</script>
<template>
  <div class="">Welcome to {{ route }} page</div>
  <AboutDesktop v-if="route === 'about'" :self="content.about" />
  <ContactsDesktop v-if="route === 'contact'" :contacts="content.contacts" />
</template>
