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
  <section class="hero relative h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
    <div class="max-w-4xl px-6">
      <h2 class="text-lg md:text-xl font-medium mb-2">{{ hero.subtitle }}</h2>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ hero.title }}</h1>
      <p class="text-base md:text-lg mb-6">{{ hero.description }}</p>
      <div class="flex justify-center gap-4">
        <a
          v-for="link in hero.links"
          :key="link.to"
          :href="link.to"
          :class="['px-6 py-3 rounded-md font-semibold', link.color === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900']"
        >
          {{ link.label }}
        </a>
      </div>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          v-for="img in hero.images"
          :key="img.src"
          :src="img.src"
          :alt="img.alt"
          class="w-full h-48 object-cover rounded-md"
        />
      </div>
    </div>
  </section>
</template>