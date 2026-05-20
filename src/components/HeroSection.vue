<script setup>
/**
 * HeroSection.vue
 * Full-viewport hero with name, title, intro, avatar placeholder,
 * and CTA buttons. Uses CSS grid for a split layout on desktop.
 */
import { onMounted } from 'vue'

onMounted(() => {
  // Stagger entrance
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
  <section
    id="hero"
    class="min-h-screen flex items-center relative overflow-hidden pt-16"
    :style="{ background: 'var(--bg)' }"
  >
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
        <h1 class="reveal hero-reveal font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-none tracking-tight"
            style="color: var(--text)">
          Chayanon<br/>
          <span class="gradient-text">Maksakarn</span>
        </h1>

        <!-- Role -->
        <p class="reveal hero-reveal font-display text-lg font-500" style="color: var(--text-muted)">
          Frontend Developer · UX/UI Designer
        </p>

        <!-- Short intro -->
        <p class="reveal hero-reveal max-w-md leading-relaxed" style="color: var(--text-muted); font-size: 0.95rem;">
          School of Information Technology student at KMUTT with a strong passion for UX/UI Design and Frontend Development, dedicated to bridging the gap between design and code.
        </p>

        <!-- CTAs -->
        <div class="reveal hero-reveal flex flex-wrap gap-3 pt-2">
          <a href="#projects" class="btn-primary" @click.prevent="scrollTo('#projects')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            View Projects
          </a>
          <a href="#contact" class="btn-outline" @click.prevent="scrollTo('#contact')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact Me
          </a>
        </div>
      </div>

      <!-- Right: avatar -->
      <div class="order-1 md:order-2 flex justify-center md:justify-end">
        <div class="relative">
          <!-- Decorative ring -->
          <div class="absolute inset-0 rounded-full"
               style="background: conic-gradient(from 0deg, var(--accent), var(--accent-alt), var(--accent)); padding: 3px; border-radius: 50%;">
            <div class="w-full h-full rounded-full" style="background: var(--bg);" />
          </div>

          <!-- Avatar placeholder -->
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
               style="border-color: var(--bg); background: var(--bg-subtle);">
            <!-- Replace <img> src with your actual photo path -->
            <div class="w-full h-full flex flex-col items-center justify-center gap-2" style="color: var(--text-muted)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z"/>
              </svg>
              <span class="text-xs opacity-40 font-display font-600">Your Photo Here</span>
            </div>
          </div>

          <!-- Floating badge: Years experience -->
          <div class="absolute -bottom-3 -left-3 card px-4 py-2 flex items-center gap-2 shadow-lg reveal hero-reveal">
            <span class="font-display text-2xl font-800 gradient-text">2+</span>
            <span class="font-display text-xs font-600 leading-tight" style="color: var(--text-muted)">Years<br/>Experience</span>
          </div>

          <!-- Floating badge: Projects -->
          <div class="absolute -top-2 -right-4 card px-4 py-2 flex items-center gap-2 shadow-lg reveal hero-reveal reveal-delay-2">
            <span class="font-display text-2xl font-800 gradient-text">12+</span>
            <span class="font-display text-xs font-600 leading-tight" style="color: var(--text-muted)">Projects<br/>Shipped</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         style="color: var(--text-muted)">
      <span class="font-display text-xs tracking-widest uppercase">Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  </section>
</template>
