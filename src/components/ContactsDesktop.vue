<script setup lang="ts">
import type { Contacts } from '@/types'
defineProps<{
  contacts: Contacts
}>()
</script>

<template>
  <h1>{{ contacts.title }}</h1>
  <blockquote>{{ contacts.reg }}</blockquote>
  <p v-for="p in contacts.text" :key="p">{{ p }}</p>
  <h2>Address:</h2>
  <p>
    {{ contacts.address.street }},<br />
    {{ contacts.address.zip }},<br />
    {{ contacts.address.city }},<br />
    {{ contacts.address.country }}
  </p>
</template>
