<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelectorAll('.hero-reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120)
  })
})

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- ── Hero ──────────────────────────────────────────── -->
  <section id="hero" class="min-h-screen flex items-center relative overflow-hidden pt-16"
    :style="{ background: 'var(--bg)' }">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #2563eb 0%, transparent 70%);" />
    <div class="absolute bottom-0 -left-24 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #059669 0%, transparent 70%);" />

    <div class="max-w-6xl mx-auto px-6 py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      <!-- Left: text content -->
      <div class="flex flex-col gap-6 order-2 md:order-1">

        <!-- Availability badge -->
        <div class="reveal hero-reveal inline-flex items-center gap-2 self-start">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span class="font-display text-xs font-600 tracking-widest uppercase" style="color: var(--text-muted)">
            Open to opportunities
          </span>
        </div>

        <!-- Name -->
        <h1
          class="reveal hero-reveal font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-none tracking-tight"
          style="color: var(--text)">
          Chayanon<br />
          <span class="gradient-text">Maksakarn</span>
        </h1>

        <!-- Role -->
        <p class="reveal hero-reveal font-display text-lg font-500" style="color: var(--text-muted)">
          Frontend Developer · UX/UI Designer
        </p>

        <!-- Short intro -->
        <p class="reveal hero-reveal max-w-md leading-relaxed" style="color: var(--text-muted); font-size: 0.95rem;">
          School of Information Technology student at KMUTT with a strong passion for UX/UI Design and Frontend
          Development, dedicated to bridging the gap between design and code.
        </p>

        <!-- CTAs -->
        <div class="reveal hero-reveal flex flex-wrap gap-3 pt-2">
          <a href="#projects" class="btn-primary" @click.prevent="scrollTo('#projects')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" class="btn-outline" @click.prevent="scrollTo('#contact')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </a>
        </div>
      </div>

      <!-- Right: avatar -->
          <div class="order-1 md:order-2 flex justify-center md:justify-end w-full">
            <div class="relative w-64 md:w-80 lg:w-96 flex justify-center">

              <img src="../assets/images/chayanon-img.png" alt="Chayanon Maksakarn"
                class="relative z-10 w-full h-auto object-contain reveal hero-reveal drop-shadow-2xl" />

              <div
                class="absolute bottom-4 -left-6 md:-left-10 z-20 card px-4 py-2 flex items-center gap-2 shadow-lg reveal hero-reveal">
                <span class="font-display text-2xl font-800 gradient-text">2+</span>
                <span class="font-display text-xs font-600 leading-tight"
                  style="color: var(--text-muted)">Years<br />Experience</span>
              </div>

              <div
                class="absolute top-10 -right-6 md:-right-10 z-20 card px-4 py-2 flex items-center gap-2 shadow-lg reveal hero-reveal reveal-delay-2">
                <span class="font-display text-2xl font-800 gradient-text">12+</span>
                <span class="font-display text-xs font-600 leading-tight"
                  style="color: var(--text-muted)">Projects<br />Shipped</span>
              </div>

            </div>
          </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style="color: var(--text-muted)">
      <span class="font-display text-xs tracking-widest uppercase">Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </section>
</template>
