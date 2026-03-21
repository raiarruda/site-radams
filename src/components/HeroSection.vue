<script setup>
import logo from '../assets/logo.png'
</script>

<template>
  <section
    class="text-center lg:sticky lg:top-8 lg:flex lg:min-h-[calc(100vh-4rem)] lg:flex-col lg:items-center lg:justify-center lg:pt-0"
  >
    <img :src="logo" alt="Logo da AIG" class="mx-auto h-28 w-auto sm:h-32 lg:h-44 xl:h-52" />
    <p
      class="mt-6 text-sm font-medium leading-6 text-slate-100 sm:text-base lg:max-w-xl lg:text-center lg:text-lg lg:leading-8"
    >
      Saiba o valor real do seu imóvel com segurança. Informação qualificada e
      <span class="font-extrabold text-[#f97316]">Parecer Técnico GRATUITO</span>,
      validado por especialistas que conhecem o mercado de Salvador.
    </p>
    <div class="mt-8 hidden max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 text-left lg:block">
      <p class="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
        Avaliação especializada
      </p>
      <p class="mt-4 text-base font-medium leading-7 text-slate-200">
        Preencha o formulário ao lado e receba o contato da equipe AIG para uma
        análise técnica segura, gratuita e alinhada ao mercado de Salvador.
      </p>
    </div>
  </section>
</template>
