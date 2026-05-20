/**
 * useReveal.js
 * Composable that wires up an IntersectionObserver to add the
 * `.visible` class to every `.reveal` element, triggering the
 * CSS fade-in / slide-up transition defined in styles.css.
 *
 * Usage: call `useReveal()` at the top of any section component.
 */
import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Once revealed, no need to watch further
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe all .reveal elements — queried fresh on mount so
    // dynamically rendered items are caught.
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
