<script setup>
/**
 * App.vue  ─  Root component
 *
 * Orchestrates the single-page portfolio layout:
 *   NavBar → Hero → About → Skills → Projects → Experience → Contact → Footer
 *
 * Dark mode state lives here and is passed down via prop / emitted event.
 */
import { ref, watch, onMounted } from 'vue'

import NavBar          from './components/NavBar.vue'
import HeroSection     from './components/HeroSection.vue'
import AboutSection    from './components/AboutSection.vue'
import SkillsSection   from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection  from './components/ContactSection.vue'
import FooterSection   from './components/FooterSection.vue'

// ── Dark mode ─────────────────────────────────────────────
// Persist preference in localStorage; respect OS setting on first visit.
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const savedTheme  = localStorage.getItem('theme')
const darkMode    = ref(savedTheme ? savedTheme === 'dark' : prefersDark)

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

function toggleDark() {
  darkMode.value = !darkMode.value
}

watch(darkMode, (val) => {
  applyTheme(val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
}, { immediate: true })

onMounted(() => applyTheme(darkMode.value))
</script>

<template>
  <!-- Wrap everything in a div so Vue has a single root -->
  <div id="layout">
    <!-- ── Navigation ── -->
    <NavBar :dark-mode="darkMode" @toggle-dark="toggleDark" />

    <!-- ── Main content ── -->
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- ── Footer ── -->
    <FooterSection />
  </div>
</template>

<style>
/* Global reset — everything else lives in assets/styles.css */
#layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
</style>
