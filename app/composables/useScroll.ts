// composables/useScroll.ts
import { ref, onMounted, onUnmounted } from "vue"

export function useScrollY() {
  const scrollY = ref(0)
  const update = () => (scrollY.value = window.scrollY)

  onMounted(() => window.addEventListener("scroll", update))
  onUnmounted(() => window.removeEventListener("scroll", update))

  return { scrollY }
}