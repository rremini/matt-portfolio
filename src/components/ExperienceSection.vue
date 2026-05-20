<script setup>

import { useReveal } from '../composables/useReveal.js'
useReveal()

const workExperience = [
  {
    title:    'UX/UI Designer',
    org:      'Freelance',
    period:   'Jun 2024 – Present',
    type:     'Freelance',
    bullets:  [
      'Collaborated with designers in Figma and ran weekly design-review sessions.',
    ],
    accent: '#2563eb',
  },
  {
    title:    'Junior Frontend Developer',
    org:      'DataPulse Analytics',
    period:   'Dec 2023 – Feb 2024',
    type:     'Internship',
    bullets:  [
      'Developed interactive dashboards with REST API integration.',
      'Wrote unit tests with Jest, lifting coverage from 54% to 79%.',
    ],
    accent: '#059669',
  },
  {
    title:    'Graphic Designer',
    org:      'Adobe',
    period:   '2023',
    type:     'Freelance',
    bullets:  [
      'Creating layouts for brochures, posters, business cards, and packaging.',
      'Designing social media assets, website interfaces (UI), and digital advertisements.',
    ],
    accent: '#7c3aed',
  },
]

const achievements = [
  {
    title:  'Config Figma 2026',
    detail: 'Integrating AI innovation into the design process.',
    type:   'Hackathon',
    icon:   '🏆',
  },
  {
    title:  'AWS Certified Cloud Practitioner',
    detail: 'Issued June 2024 · Credential ID: XXXXXXXX',
    type:   'Certification',
    icon:   '☁️',
  },
  {
    title:  'Meta Front-End Developer Certificate',
    detail: 'Coursera · Completed April 2023 with distinction.',
    type:   'Certification',
    icon:   '🎓',
  },
  {
    title:  'SITCAMP 2026 – Mentor',
    detail: 'UX/UI Instructor for design students and junior colleagues.',
    type:   'Speaking',
    icon:   '🎤',
  },
]
</script>

<template>
  <section id="experience" :style="{ background: 'var(--bg-subtle)' }" class="py-28">
    <div class="max-w-6xl mx-auto px-6">

      <div class="reveal mb-14">
        <p class="section-label mb-3">Experience & Achievements</p>
        <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
          Experience
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">

        <div>
          <h3 class="reveal font-display font-700 mb-8 text-lg" style="color: var(--text)">Work & Contributions</h3>
          <div class="flex flex-col gap-10">
            <div
              v-for="(item, i) in workExperience"
              :key="item.title"
              class="timeline-item reveal"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="card p-5 flex flex-col gap-3">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 class="font-display font-700 text-sm" style="color: var(--text)">{{ item.title }}</h4>
                    <p class="font-display font-600 text-xs mt-0.5" :style="`color: ${item.accent}`">{{ item.org }}</p>
                  </div>
                  <div class="flex flex-col items-end gap-1">
                    <span class="pill">{{ item.type }}</span>
                    <span class="text-xs" style="color: var(--text-muted)">{{ item.period }}</span>
                  </div>
                </div>
                <ul class="flex flex-col gap-1.5">
                  <li
                    v-for="b in item.bullets"
                    :key="b"
                    class="text-sm flex items-start gap-2"
                    style="color: var(--text-muted)"
                  >
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" :style="`background: ${item.accent}`" />
                    {{ b }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements grid -->
        <div>
          <h3 class="reveal font-display font-700 mb-8 text-lg" style="color: var(--text)">Hackathons & Certifications</h3>
          <div class="flex flex-col gap-4">
            <div
              v-for="(item, i) in achievements"
              :key="item.title"
              class="reveal card p-5 flex items-start gap-4"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="text-2xl w-10 h-10 flex items-center justify-center rounded-xl shrink-0"
                   style="background: var(--bg-subtle)">
                {{ item.icon }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2 flex-wrap">
                  <h4 class="font-display font-700 text-sm" style="color: var(--text)">{{ item.title }}</h4>
                  <span class="pill shrink-0">{{ item.type }}</span>
                </div>
                <p class="text-xs mt-1 leading-relaxed" style="color: var(--text-muted)">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
