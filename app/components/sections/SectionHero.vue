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
    class="relative h-screen flex flex-col justify-center items-center text-center text-neutral-50 bg-cover bg-center"
    :style="{ backgroundImage: `url(${hero.images?.[0]?.src || '/default-hero.jpg'})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl px-md">
      <h2 class="text-lg md:text-xl font-medium mb-2 text-secondary">{{ hero.subtitle }}</h2>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ hero.title }}</h1>
      <p class="text-base md:text-lg mb-6 opacity-90">{{ hero.description }}</p>

      <div class="flex justify-center gap-4 flex-wrap">
        <a
          v-for="link in hero.links"
          :key="link.to"
          :href="link.to"
          :class="[
            'btn',
            link.color === 'primary'
              ? 'btn-primary'
              : link.color === 'secondary'
              ? 'btn-secondary'
              : 'bg-neutral-200 text-neutral-900'
          ]"
        >
          {{ link.label }}
        </a>
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