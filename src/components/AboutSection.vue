<script setup>
/**
 * AboutSection.vue
 * Biography, education, interests, and career goals.
 */
import { onMounted } from 'vue'
import { useReveal } from '../composables/useReveal.js'
useReveal()

const education = [
  {
    degree: 'BSc Computer Science',
    school: 'University of Technology',
    year: '2022 – 2026',
    note: 'GPA 3.8 / 4.0 · Dean\'s List'
  },
  {
    degree: 'Frontend Fundamentals',
    school: 'freeCodeCamp & Scrimba',
    year: '2021',
    note: 'Responsive Web Design · JS Algorithms'
  }
]

const interests = ['Open Source', 'UI Design', 'Coffee', 'Hiking', 'Photography', 'Game Dev']
</script>

<template>
  <section id="about" class="py-28" :style="{ background: 'var(--bg)' }">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="reveal mb-14">
        <p class="section-label mb-3">About Me</p>
        <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
          Crafting interfaces<br class="hidden sm:block"/> with intent.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Bio (2/3 width) -->
        <div class="lg:col-span-2 flex flex-col gap-8">
          <div class="reveal reveal-delay-1">
            <p class="text-base leading-loose" style="color: var(--text-muted)">
              Hey! I'm Matthew — a frontend developer and CS student who loves turning complex problems
              into elegant, pixel-perfect solutions. I work primarily with
              <strong style="color: var(--text)">Vue.js</strong> and
              <strong style="color: var(--text)">React</strong>, and I care deeply about performance,
              accessibility, and developer experience.
            </p>
          </div>
          <div class="reveal reveal-delay-2">
            <p class="text-base leading-loose" style="color: var(--text-muted)">
              When I'm not writing code, I'm usually sketching UI wireframes, contributing to open-source
              projects, or exploring new dev tools. I believe great software is both technically sound
              <em>and</em> a joy to use.
            </p>
          </div>

          <!-- Career Goals -->
          <div class="reveal reveal-delay-3 card p-6">
            <h3 class="font-display font-700 mb-3" style="color: var(--text)">Career Goals</h3>
            <p class="text-sm leading-loose" style="color: var(--text-muted)">
              My goal is to join a product-focused engineering team where I can contribute to large-scale
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

        <!-- Education sidebar -->
        <div class="flex flex-col gap-6">
          <h3 class="reveal font-display font-700" style="color: var(--text)">Education</h3>
          <div
            v-for="(edu, i) in education"
            :key="edu.degree"
            class="reveal card p-5"
            :class="`reveal-delay-${i + 1}`"
          >
            <p class="font-display font-700 text-sm mb-1" style="color: var(--text)">{{ edu.degree }}</p>
            <p class="font-display text-xs font-500 mb-2" style="color: var(--accent)">{{ edu.school }}</p>
            <div class="flex items-center justify-between">
              <p class="text-xs" style="color: var(--text-muted)">{{ edu.year }}</p>
              <span class="pill text-xs">{{ edu.note }}</span>
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
