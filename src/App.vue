<script setup>
import LeadForm from './components/LeadForm.vue'
import logo from './assets/logo.png'

const imageSlots = [
  {
    title: 'Imagem principal',
    description: 'Destaque da fachada, sala ou vista do imóvel.',
    size: 'large',
  },
  {
    title: 'Ambiente interno',
    description: 'Use este espaço para quartos, cozinha ou varanda.',
    size: 'small',
  },
  {
    title: 'Detalhes do imóvel',
    description: 'Acabamentos, diferenciais ou área de lazer.',
    size: 'small',
  },
]
</script>

<template>
  <main class="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
    <div class="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
      <section
        class="w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
      >
        <div class="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div class="bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-12">
            <img
              :src="logo"
              alt="Logo da empresa"
              class="h-16 w-auto rounded-xl bg-white/90 p-2 shadow-sm"
            />

            <div class="mt-8 max-w-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Avaliação de Imóveis
              </p>
              <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Descubra quanto vale seu imóvel em Salvador
              </h1>
              <p class="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                Receba uma avaliação gratuita e rápida com atendimento personalizado
                para apartamentos, casas e imóveis comerciais.
              </p>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <article
                v-for="slot in imageSlots"
                :key="slot.title"
                :class="
                  slot.size === 'large'
                    ? 'min-h-[220px] sm:col-span-2'
                    : 'min-h-[180px]'
                "
                class="flex flex-col justify-end rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5"
              >
                <div
                  class="mb-4 flex h-full min-h-[72px] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-900/30 text-center text-sm font-medium text-slate-300"
                >
                  Espaço reservado para imagem
                </div>
                <h2 class="text-lg font-semibold text-white">{{ slot.title }}</h2>
                <p class="mt-2 text-sm leading-6 text-slate-300">
                  {{ slot.description }}
                </p>
              </article>
            </div>
          </div>

          <div class="px-6 py-8 sm:px-10 sm:py-12">
            <div class="mx-auto max-w-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Avaliação gratuita em Salvador
              </p>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Quero saber o valor do meu imóvel
              </h2>
              <p class="mt-3 text-base leading-7 text-slate-600">
                Preencha seus dados e entraremos em contato com uma estimativa
                inicial.
              </p>

              <div class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
