<template>
  <section class="CTA">
    <div class="flex flex-row gap-4 py-10 max-w-5xl">
        <!-- Left content -->
        <div class="flex-1">
        <span class="text-lg md:text-xl font-medium">{{ CTA.subtitle }}</span>
        <h1 class="text-4xl md:text-6xl font-bold">{{ CTA.title }}</h1>
        </div>

        <!-- Right content -->
        <p class="flex-1 text-base md:text-lg">
        {{ CTA.description }}
        </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  CTA: {
    subtitle: string
    title: string
    description: string
  }
}>()
</script>