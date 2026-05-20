<script setup>

import { ref } from 'vue'
import { useReveal } from '../composables/useReveal.js'

import khangkanImg from '../assets/images/khangkan.png'
import supaclickImg from '../assets/images/supaclick-img.png'
import spectrumImg from '../assets/images/spectrum-img.png'
import sitcampImg from '../assets/images/sitcamp-img.png'

useReveal()

const projects = [
  {
    title:       'Khangkan',
    description: 'Digital Safe Space ในรูปแบบ Web Application  เพื่อช่วยให้ นักเรียน - นักศึกษา มีพื้นที่ ที่ปลอดภัยในการจัดการกับ ความเครียด ความกดดัน และปัญหาสุขภาพจิตต่างๆ โดยเราจะมุ่งเน้นไปที่การสร้างความเข้าใจที่ถูกต้องและต้องเข้าถึงง่าย ',
    role:        'Frontend + Vue',
    tech:        ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia', 'Node.js'],
    live:        'https://int-250-ga-1-hiew-khao-hor-ying-kha-five.vercel.app',
    repo:        'https://github.com/rremini/INT250-GA1-HiewKhaoHorYing-KhangKan',
    featured:    true,
    accent:      '#2563eb',
    image:       khangkanImg,
  },
  {
    title:       'SupaClick',
    description: ' The most chaotic clicking game in the galaxy. Tap the right emojis, dodge the bombs, and climb the leaderboard! ',
    role:        'Frontend + Vue',
    tech:        ['Vue 3', 'TailwindCSS', 'Vite', 'npm'],
    live:        'https://int-250-ga-1-hiew-khao-hor-ying-sup.vercel.app',
    repo:        'https://github.com/rremini/INT250-GA1-HiewKhaoHorYing-SupaClick',
    featured:    false,
    accent:      '#059669',
    image:       supaclickImg,
  },
  {
    title:       'Spectrum',
    description: 'A Fashion-Tech startup developing a Personal Color analysis app to provide tailored styling recommendations based on skin tone, body shape, and hair color.',
    role:        'Frontend + React',
    tech:        ['React', 'Tailwind', 'FastAPI'],
    live:        'https://sprectrum.vercel.app',
    repo:        'https://github.com/rremini/Sprectrum-Personal-Color-Testing',
    featured:    false,
    accent:      '#7c3aed',
    image:       spectrumImg,
  },
  {
    title:       'SITCAMP Portfolio Template',
    description: 'ผลงานออกแบบบน Figma ชิ้นนี้ โปรเจกต์นี้เป็นส่วนหนึ่งของ Workshop ในค่าย SIT CAMP 2026 น้อง ๆ ที่เข้าร่วมค่ายสามารถนำไฟล์นี้ไปใช้งานได้ “ฟรี” และสามารถนำไปประยุกต์ใช้เป็นผลงานเพื่อใส่ใน Portfolio ของตนเองได้ รวมถึงอนุญาติให้แก้ไขเนื้อหาภายในโปรเจกต์นี้ได้ตามอิสระ',
    role:        'Mentor',
    tech:        ['Figma', 'TailwindCSS', 'HTML+CSS'],
    live:        'https://www.figma.com/community/file/1629646397327588796',
    repo:        'https://www.figma.com/design/IGhWlrCSc1AVLlIBfJCA3F/SIT-CAMP--Porttfolio?node-id=201-1796&t=JIeQCUd1FUkogmBW-1',
    featured:    false,
    accent:      '#d97706',
    image:       sitcampImg,
  },
]
</script>

<template>
  <section id="projects" class="py-28" :style="{ background: 'var(--bg)' }">
    <div class="max-w-6xl mx-auto px-6">

      <div class="reveal mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p class="section-label mb-3">Projects</p>
          <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
            All Projects.
          </h2>
        </div>
        <a href="https://github.com/rremini" target="_blank" rel="noopener" class="btn-outline self-start sm:self-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
          </svg>
          All Repos
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="reveal card flex flex-col overflow-hidden"
          :class="`reveal-delay-${i + 1}`"
          :style="project.featured ? 'md:col-span-2' : ''"
        >
          <!-- Image placeholder -->
          <div
            class="relative h-48 w-full overflow-hidden"
            :style="`border-bottom: 1px solid var(--border);`"
          >
            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            
            <div 
              v-else 
              class="w-full h-full flex items-center justify-center text-white"
              :style="`background: linear-gradient(135deg, ${project.accent}22 0%, ${project.accent}44 100%);`"
            >
              <div class="flex flex-col items-center gap-2 opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" :style="`color: ${project.accent}`" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span class="text-xs font-display font-600" :style="`color: ${project.accent}`">Project Preview</span>
              </div>
            </div>

            <span v-if="project.featured"
                  class="absolute top-3 right-3 pill z-10"
                  style="background: rgba(0,0,0,0.4); color: #fff; backdrop-filter: blur(6px);">
              ⭐ Featured
            </span>
          </div>

          <!-- Card body -->
          <div class="flex flex-col gap-4 p-6 flex-1">
            <div>
              <h3 class="font-display text-xl font-700 mb-1" style="color: var(--text)">{{ project.title }}</h3>
              <p class="font-display text-xs font-600" :style="`color: ${project.accent}`">{{ project.role }}</p>
            </div>
            <p class="text-sm leading-relaxed flex-1" style="color: var(--text-muted)">{{ project.description }}</p>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.tech" :key="tech" class="pill">{{ tech }}</span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3 pt-1">
              <a :href="project.live" target="_blank" rel="noopener" class="btn-primary py-2 px-4 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
              <a :href="project.repo" target="_blank" rel="noopener" class="btn-outline py-2 px-4 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                Source
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
