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
    class="hero relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
    :style="{ backgroundImage: `url(${hero.images?.[0]?.src || '/default-hero.jpg'})` }"  >
    <div class="bg-black/50 w-full h-full absolute top-0 left-0"></div>
    <div class="relative max-w-4xl px-6 z-10">
      <h2 class="text-lg md:text-xl font-medium mb-2">{{ hero.subtitle }}</h2>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ hero.title }}</h1>
      <p class="text-base md:text-lg mb-6">{{ hero.description }}</p>
      <div class="flex justify-center gap-4">
        <a
          v-for="link in hero.links"
          :key="link.to"
          :href="link.to"
          :class="[
            'px-6 py-3 rounded-md font-semibold',
            link.color === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
          ]"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  z-index: 0;
}
</style>