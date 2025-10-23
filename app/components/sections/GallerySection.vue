<script setup lang="ts">
import { projects } from "@/data/projects"
</script>

<template>
  <section class="grid grid-cols-2 gap-6 p-10">
    <div v-for="project in projects" :key="project.id">
      <img :src="project.image" :alt="project.title" class="rounded-2xl shadow" />
      <h2 class="mt-2 text-lg font-bold">{{ project.title }}</h2>
    </div>
  </section>
</template>