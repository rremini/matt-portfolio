<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  darkMode: Boolean
})
const emit = defineEmits(['toggle-dark'])

const scrolled   = ref(false)
const menuOpen   = ref(false)
const activeSection = ref('hero')

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
  // Highlight active section
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

function scrollTo(href) {
  menuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'shadow-sm backdrop-blur-md' : ''"
    :style="{ background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent' }"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <a href="#hero" @click.prevent="scrollTo('#hero')"
         class="font-display text-xl font-800 tracking-tight gradient-text select-none">
        matt.
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="nav-link"
            :class="{ active: activeSection === link.href.slice(1) }"
            @click.prevent="scrollTo(link.href)"
          >{{ link.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          @click="emit('toggle-dark')"
          class="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
          :style="{ background: 'var(--bg-subtle)', color: 'var(--text-muted)' }"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm14.95-6.95a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM6.757 17.243a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm12.02 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM6.757 6.757a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7Z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/>
          </svg>
        </button>

        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
          :style="{ background: 'var(--bg-subtle)' }"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path v-if="!menuOpen" d="M3 6h18M3 12h18M3 18h18"/>
            <path v-else d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="slide-down">
      <div
        v-if="menuOpen"
        class="md:hidden px-6 pb-4 pt-2 flex flex-col gap-4"
        :style="{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav-link py-2"
          @click.prevent="scrollTo(link.href)"
        >{{ link.label }}</a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
