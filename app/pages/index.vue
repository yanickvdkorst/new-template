<script setup lang="ts">
import SectionHero from '@/components/sections/SectionHero.vue'

const { data: home } = await useAsyncData(() =>
  queryCollection('content').path('/').first()
)

import { onMounted } from 'vue'



useSeoMeta({
  title: home.value?.seo?.title,
  description: home.value?.seo?.description
})
</script>

<template>
  <div v-if="home">
    <SectionHero :hero="home.body.hero" />
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.hero {
  position: relative;
}
</style>