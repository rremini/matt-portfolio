<script setup>
import { ref, reactive } from 'vue'
import { useReveal } from '../composables/useReveal.js'
useReveal()

const form = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref('')  

async function handleSubmit() {
  status.value = 'sending'
  await new Promise(r => setTimeout(r, 1200))
  status.value = 'success'
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => status.value = '', 4000)
  // ────────────────────────────────────────────────────────────
}

const socials = [
  { label: 'GitHub',    href: 'https://github.com/rremini',    icon: 'github'    },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/chayanon-maksakarn-583691410/',  icon: 'linkedin'  },
]
</script>

<template>
  <section id="contact" class="py-28" :style="{ background: 'var(--bg)' }">
    <div class="max-w-6xl mx-auto px-6">

      <div class="reveal mb-14">
        <p class="section-label mb-3">Contact</p>
        <h2 class="font-display text-4xl md:text-5xl font-800 tracking-tight" style="color: var(--text)">
          Contact me.
        </h2>
        <p class="mt-4 max-w-md" style="color: var(--text-muted); font-size: 0.95rem">
          Have a project in mind, a question, or just want to say hi, I'm open to opportunities
          and love connecting with people in the tech community.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">

        <!-- Left: info -->
        <div class="lg:col-span-2 flex flex-col gap-6">

          <!-- Email -->
          <div class="reveal card p-6 flex items-center gap-4">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background: var(--tag-bg)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :style="{ color: 'var(--accent)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p class="font-display font-700 text-sm" style="color: var(--text)">Email</p>
              <a href="mailto:matthew@example.com"
                 class="text-sm transition-colors hover:text-blue-500"
                 style="color: var(--text-muted)">chayanon.maksakarn@gmail.com</a>
            </div>
          </div>

          <!-- Location -->
          <div class="reveal reveal-delay-1 card p-6 flex items-center gap-4">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background: var(--tag-bg)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :style="{ color: 'var(--accent)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p class="font-display font-700 text-sm" style="color: var(--text)">Location</p>
              <p class="text-sm" style="color: var(--text-muted)">KMUTT · School of Information Technology</p>
            </div>
          </div>

          <!-- Social links -->
          <div class="reveal reveal-delay-2 flex flex-col gap-3">
            <p class="font-display font-700 text-sm" style="color: var(--text)">Find me online</p>
            <div class="flex gap-3">
              <a href="https://github.com/rremini" target="_blank" rel="noopener"
                 class="card w-11 h-11 flex items-center justify-center transition-all hover:scale-110"
                 style="color: var(--text-muted)" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/chayanon-maksakarn-583691410/" target="_blank" rel="noopener"
                 class="card w-11 h-11 flex items-center justify-center transition-all hover:scale-110"
                 style="color: var(--text-muted)" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-3 reveal reveal-delay-2">
          <div class="card p-8">
            <h3 class="font-display font-700 text-lg mb-6" style="color: var(--text)">Send a message</h3>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="font-display font-600 text-xs" style="color: var(--text-muted)">Name</label>
                  <input v-model="form.name" type="text" class="form-input" placeholder="Your name" required />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="font-display font-600 text-xs" style="color: var(--text-muted)">Email</label>
                  <input v-model="form.email" type="email" class="form-input" placeholder="your@company.com" required />
                </div>
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="font-display font-600 text-xs" style="color: var(--text-muted)">Subject</label>
                <input v-model="form.subject" type="text" class="form-input" placeholder="Job opportunity / Collaboration / Hello!" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="font-display font-600 text-xs" style="color: var(--text-muted)">Message</label>
                <textarea v-model="form.message" class="form-input" rows="5"
                  placeholder="Tell me about your project, team, or just say hi…" required />
              </div>

              <!-- Submit -->
              <div class="flex items-center gap-4 pt-2">
                <button type="submit" class="btn-primary" :disabled="status === 'sending'">
                  <svg v-if="status !== 'sending'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  <svg v-else class="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
                </button>

                <Transition name="fade-tab">
                  <p v-if="status === 'success'" class="text-sm text-emerald-500 font-display font-600">
                    ✓ Message sent! I'll reply soon.
                  </p>
                  <p v-else-if="status === 'error'" class="text-sm text-red-500 font-display font-600">
                    Something went wrong. Please email me directly.
                  </p>
                </Transition>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-tab-enter-active, .fade-tab-leave-active { transition: opacity 0.3s; }
.fade-tab-enter-from, .fade-tab-leave-to { opacity: 0; }
textarea.form-input { resize: vertical; min-height: 120px; }
button:disabled { opacity: 0.7; cursor: not-allowed; }
</style>
