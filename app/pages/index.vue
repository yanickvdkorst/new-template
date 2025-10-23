<script setup lang="ts">
import { home } from '~/data/homeData'

</script>

<template>
  <div v-if="home">
    <SectionHero :hero="home.hero" />
    <SectionCta :CTA="home.CTA" />
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.hero {
  position: relative;
}
</style>