<script setup>
import HeroSection from './components/HeroSection.vue'
import LeadEvaluationForm from './components/LeadEvaluationForm.vue'
</script>

<template>
  <main class="min-h-screen bg-[#0d1a3a] px-4 py-8 text-white">
    <div class="mx-auto max-w-lg lg:max-w-6xl">
      <div class="lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-10 lg:items-start">
        <HeroSection />
        <LeadEvaluationForm />
      </div>

      <footer class="pt-8 text-center text-xs text-[#475569]">
        © 2025 AIG - Avaliacao de Imoveis Gratuita. Todos os direitos reservados.
      </footer>
    </div>
  </main>
</template>
