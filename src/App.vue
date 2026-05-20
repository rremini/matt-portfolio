<script setup>

import { ref, watch, onMounted } from 'vue'

import NavBar          from './components/NavBar.vue'
import HeroSection     from './components/HeroSection.vue'
import AboutSection    from './components/AboutSection.vue'
import SkillsSection   from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection  from './components/ContactSection.vue'
import FooterSection   from './components/FooterSection.vue'

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
  <div id="layout">
    <NavBar :dark-mode="darkMode" @toggle-dark="toggleDark" />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

<style>
#layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
</style>
