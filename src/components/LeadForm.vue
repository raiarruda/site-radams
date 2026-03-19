<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const bairro = ref('')
const descricao = ref('')
const sucesso = ref(false)

function enviarFormulario() {
  console.log({
    nome: nome.value,
    email: email.value,
    bairro: bairro.value,
    descricao: descricao.value,
  })

  sucesso.value = true

  nome.value = ''
  email.value = ''
  bairro.value = ''
  descricao.value = ''
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="enviarFormulario">
    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700" for="nome">Nome</label>
      <input
        id="nome"
        v-model="nome"
        type="text"
        required
        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Seu nome completo"
      />
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700" for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="voce@email.com"
      />
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700" for="bairro">Bairro</label>
      <input
        id="bairro"
        v-model="bairro"
        type="text"
        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Ex: Pituba"
      />
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700" for="descricao">
        Descrição
      </label>
      <textarea
        id="descricao"
        v-model="descricao"
        rows="4"
        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Conte um pouco sobre o imóvel, metragem, número de quartos ou diferenciais."
      />
    </div>

    <button
      type="submit"
      class="w-full rounded-2xl bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      Quero saber o valor do meu imóvel
    </button>

    <p
      v-if="sucesso"
      class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
    >
      Recebemos seus dados com sucesso! Em breve entraremos em contato.
    </p>
  </form>
</template>
