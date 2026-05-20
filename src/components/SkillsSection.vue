<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from '../composables/useReveal.js'
useReveal()

const activeTab = ref('languages')

const tabs = [
  { key: 'languages',   label: 'Languages'    },
  { key: 'frameworks',  label: 'Frameworks'   },
  { key: 'tools',       label: 'Tools'        },
  { key: 'soft',        label: 'Soft Skills'  },
]

const skills = {
  languages: [
    { name: 'JavaScript (ES6)', level: 90 },
    { name: 'TypeScript',          level: 80 },
    { name: 'Python',              level: 70 },
    { name: 'HTML & CSS',          level: 95 },
    { name: 'SQL',                 level: 60 },
  ],
  frameworks: [
    { name: 'Vue.js 3 (Composition API)', level: 88 },
    { name: 'React & Next.js',            level: 82 },
    { name: 'Tailwind CSS',               level: 90 },
    { name: 'Node.js / Express',          level: 65 },
    { name: 'Vitest / Jest',              level: 72 },
  ],
  tools: [
    'Vite', 'Git & GitHub', 'Figma', 'VS Code', 'Docker (basics)',
    'Storybook', 'Postman', 'Vercel', 'Netlify', 'Jira', 'Notion',
  ],
  soft: [
    { name: 'Communication',    level: 88 },
    { name: 'Problem Solving',  level: 92 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Time Management',  level: 78 },
    { name: 'Adaptability',     level: 85 },
  ]
}

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animated'))
      }
    })
  }, { threshold: 0.2 })
  const section = document.getElementById('skills')
  if (section) observer.observe(section)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="skills" :style="{ background: 'var(--bg-subtle)' }" class="py-28">
    <div class="max-w-6xl mx-auto px-6">

      <div class="reveal mb-14">
        <p class="section-label mb-3">Skills</p>
        <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
          My technical<br class="hidden sm:block"/> toolkit.
        </h2>
      </div>

      <div class="reveal flex flex-wrap gap-2 mb-10">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          class="font-display font-600 text-sm px-5 py-2 rounded-full border transition-all duration-200"
          :style="activeTab === tab.key
            ? 'background: var(--accent); color: #fff; border-color: var(--accent);'
            : 'background: transparent; color: var(--text-muted); border-color: var(--border);'"
        >{{ tab.label }}</button>
      </div>

      <!-- Bar-based tabs: languages, frameworks, soft -->
      <Transition name="fade-tab" mode="out-in">
        <div v-if="activeTab !== 'tools'" :key="activeTab" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(skill, i) in skills[activeTab]"
            :key="skill.name"
            class="reveal card p-5"
            :class="`reveal-delay-${i < 5 ? i + 1 : 5}`"
          >
            <div class="flex justify-between mb-3">
              <span class="font-display font-600 text-sm" style="color: var(--text)">{{ skill.name }}</span>
              <span class="font-display font-700 text-sm gradient-text">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" :style="{ '--target': skill.level / 100 }"></div>
            </div>
          </div>
        </div>

        <!-- Pill-based: tools -->
        <div v-else key="tools" class="reveal flex flex-wrap gap-3">
          <span
            v-for="tool in skills.tools"
            :key="tool"
            class="card px-5 py-3 font-display font-600 text-sm cursor-default"
            style="color: var(--text)"
          >{{ tool }}</span>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-tab-enter-active, .fade-tab-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.fade-tab-enter-from, .fade-tab-leave-to {
  opacity: 0; transform: translateY(10px);
}

/* Override skill bar fill using custom property set inline */
.skill-bar-fill { transform: scaleX(var(--target, 0)); }
.skill-bar-fill.animated { transform: scaleX(var(--target, 0)) !important; }
</style>
