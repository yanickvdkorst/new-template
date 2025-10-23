<script setup lang="ts">
defineProps<{
  to: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <a
    :href="to"
    :class="[
      'px-6 py-3 rounded-md font-semibold transition-colors duration-200',
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    ]"
  >
    <slot />
  </a>
</template>