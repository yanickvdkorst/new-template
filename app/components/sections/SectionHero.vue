<script setup lang="ts">
defineProps<{
  hero: {
    subtitle: string
    title: string
    description: string
    links: { label: string; to: string; color: string }[]
    images: { src: string; alt: string }[]
  }
}>()
</script>
<template>
  <section
    class="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
    :style="{ backgroundImage: `url(${hero.images?.[0]?.src || '/default-hero.jpg'})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 max-w-4xl px-6">
      <label class="text-lg md:text-xl font-medium mb-2">{{ hero.subtitle }}</label>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ hero.title }}</h1>
      <p class="text-base md:text-lg mb-6">{{ hero.description }}</p>
      <div class="flex justify-center gap-4">
       <UiButton
          v-for="link in hero.links"
          :key="link.to"
          :to="link.to"
          :variant="link.color as 'primary' | 'secondary'"

        >
          {{ link.label }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  position: relative;
  background-size: cover;
  background-position: center;
}
</style>