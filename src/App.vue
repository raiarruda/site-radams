<script setup>
  import LeadForm from "./components/LeadForm.vue"
</script>

<template>
  <main class="min-h-screen bg-slate-100 px-4 py-8">
    <div
      class="mx-auto flex min-h-screen max-w-5xl items-center justify-center"
    >
      <section
        class="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
      >
        <div class="mb-8 flex justify-center">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Logo
          </div>
        </div>

        <div class="mb-8 text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600"
          >
            Avaliação de Imóveis
          </p>
          <h1
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Quanto vale seu imóvel ?
          </h1>
          <p class="mt-3 text-base text-slate-600 sm:text-lg">
            Avaliação de imovéis em Salvador
          </p>
        </div>

        <LeadForm />
      </section>
    </div>
  </main>
</template>
