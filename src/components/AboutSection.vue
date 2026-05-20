<script setup>

import { onMounted } from 'vue'
import { useReveal } from '../composables/useReveal.js'

import sitKMUTT from '../assets/images/SIT-BLACK.png' 
import fccLogo from '../assets/images/nk.png'

useReveal()

const education = [
  {
    degree: 'School of Information Technology', 
    school: 'KMUTT',
    year: '2024 – Present',
    note: 'GPA 3.1',
    logo: sitKMUTT 
  },
  {
    degree: 'English - Japanese Program',
    school: 'Matthayom Wat Nongkhaem School',
    year: '2021 – 2024',
    note: 'GPAX 3.5',
    logo: fccLogo 
  }
]

const interests = ['UX Audit', 'UI Design', 'Frontend','Backend', 'Artist', 'Graphic Designer']
</script>

<template>
  <section id="about" class="py-28" :style="{ background: 'var(--bg)' }">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="reveal mb-14">
        <p class="section-label mb-3">About Me</p>
        <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
          EXECUTED WITH INTENT
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Bio (2/3 width) -->
        <div class="lg:col-span-2 flex flex-col gap-8">
          <div class="reveal reveal-delay-1">
            <p class="text-base leading-loose" style="color: var(--text-muted)">
              Hey! I'm Chayanon, a frontend developer and IT student who loves turning complex problems
              into elegant, pixel-perfect solutions. I work primarily with
              Aspiring UX/UI Designer and Frontend Developer currently pursuing an IT degree at KMUTT. Passionate about crafting intuitive, user-centered digital experiences through clean design and efficient front-end implementation
            </p>
          </div>

          <!-- Career Goals -->
          <div class="reveal reveal-delay-3 card p-6">
            <h3 class="font-display font-700 mb-3" style="color: var(--text)">Career Goals</h3>
            <p class="text-sm leading-loose" style="color: var(--text-muted)">
              My goal is to join a product-focused developer team where I can contribute to large-scale
              frontend architecture, mentor junior developers, and grow toward a senior or lead role. Long-term,
              I'm excited about the intersection of design systems and developer tooling.
            </p>
          </div>

          <!-- Interests -->
          <div class="reveal reveal-delay-4">
            <h3 class="font-display font-700 mb-4" style="color: var(--text)">Personal Interests</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in interests" :key="item" class="pill">{{ item }}</span>
            </div>
          </div>
        </div>

<div class="flex flex-col gap-6">
          <h3 class="reveal font-display font-700" style="color: var(--text)">Education</h3>
          <div
            v-for="(edu, i) in education"
            :key="edu.degree"
            class="reveal card p-5"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="flex items-start gap-4">
              
              <div v-if="edu.logo" 
                   class="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center p-1.5 border"
                   style="background: var(--bg-card); border-color: var(--border)">
                <img :src="edu.logo" :alt="edu.school" class="w-full h-full object-contain" />
              </div>

              <div class="flex-1 min-w-0">
                <p class="font-display font-700 text-sm mb-1" style="color: var(--text)">{{ edu.degree }}</p>
                <p class="font-display text-xs font-500 mb-2" style="color: var(--accent)">{{ edu.school }}</p>
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <p class="text-xs shrink-0" style="color: var(--text-muted)">{{ edu.year }}</p>
                  <span class="pill text-xs">{{ edu.note }}</span>
                </div>
              </div>
              
            </div>
          </div>

          <!-- Fun stats -->
          <div class="reveal reveal-delay-3 card p-5 grid grid-cols-2 gap-4">
            <div v-for="stat in [{ n: '12+', l: 'Projects' }, { n: '3', l: 'Internships' }, { n: '5', l: 'Hackathons' }, { n: '2K+', l: 'Commits' }]"
                 :key="stat.l" class="text-center">
              <p class="font-display text-2xl font-800 gradient-text">{{ stat.n }}</p>
              <p class="text-xs" style="color: var(--text-muted)">{{ stat.l }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
