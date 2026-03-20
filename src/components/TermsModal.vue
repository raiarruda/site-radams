<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
    @click.self="emit('close')"
  >
    <div class="w-full max-w-xl rounded-2xl bg-white p-6 text-slate-800 shadow-2xl">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold text-slate-900">Termos de Uso</h2>
          <p class="mt-1 text-sm font-medium text-slate-500">
            Condicoes para envio dos dados a equipe AIG.
          </p>
        </div>
        <button
          type="button"
          class="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
          @click="emit('close')"
        >
          Fechar
        </button>
      </div>

      <div class="mt-5 space-y-4 text-sm font-medium leading-7 text-slate-600">
        <p>
          Ao prosseguir, voce autoriza a AIG a utilizar as informacoes enviadas
          exclusivamente para contato, analise inicial do imovel e envio da
          avaliacao gratuita solicitada.
        </p>
        <p>
          Seus dados nao serao comercializados e serao tratados com medidas de
          seguranca compativeis com a LGPD, respeitando finalidade, necessidade e
          confidencialidade.
        </p>
        <p>
          Voce pode solicitar atualizacao ou remocao das suas informacoes a
          qualquer momento entrando em contato com a equipe responsavel pelo
          atendimento.
        </p>
      </div>
    </div>
  </div>
</template>
