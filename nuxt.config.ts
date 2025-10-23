import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  alias: {
    '@': resolve(__dirname, './app'),
  },

  components: [
    { path: '@/components/ui', prefix: 'Ui' },
    { path: '@/components/layout', prefix: 'Layout' },
    { path: '@/components/sections', prefix: 'Section' },
  ],

  imports: {
    dirs: ['composables', 'store'],
  },

  modules: ['@pinia/nuxt', '@nuxt/content'],

  css: ['@/assets/styles/main.scss'],
})