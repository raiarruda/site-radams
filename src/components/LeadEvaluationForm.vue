<script setup>
import TermsModal from './TermsModal.vue'
import { useLeadForm } from '../composables/useLeadForm'

const {
  fieldClass,
  form,
  isSubmitting,
  isSuccess,
  isTermsModalOpen,
  handleSubmit,
  openTermsModal,
  closeTermsModal,
  updatePhone,
  updateCep,
} = useLeadForm()
</script>

<template>
  <section class="mt-8 overflow-hidden rounded-2xl shadow-2xl lg:mt-0">
    <header
      class="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 text-center text-base font-bold text-white lg:px-8 lg:py-5 lg:text-lg"
    >
      Comece agora sua avaliacao
    </header>

    <div class="bg-[#f8fafc] px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="name">
              Nome*
            </label>
            <input id="name" v-model="form.name" :class="fieldClass" type="text" required />
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="email">
              E-mail*
            </label>
            <input id="email" v-model="form.email" :class="fieldClass" type="email" required />
          </div>

          <div>
            <label
              class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700"
              for="propertyType"
            >
              Tipo de Imovel*
            </label>
            <select id="propertyType" v-model="form.propertyType" :class="fieldClass" required>
              <option disabled value="">Selecione</option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Comercial</option>
              <option>Terreno</option>
              <option>Rural</option>
            </select>
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="phone">
              Telefone/WhatsApp*
            </label>
            <input
              id="phone"
              :class="fieldClass"
              :value="form.phone"
              type="tel"
              inputmode="numeric"
              placeholder="(00) 00000-0000"
              required
              @input="updatePhone($event.target.value)"
            />
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="builtArea">
              Area Construida (m²)*
            </label>
            <input
              id="builtArea"
              v-model="form.builtArea"
              :class="fieldClass"
              type="number"
              min="0"
              required
            />
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="cep">
              CEP*
            </label>
            <input
              id="cep"
              :class="fieldClass"
              :value="form.cep"
              type="text"
              inputmode="numeric"
              placeholder="00000-000"
              required
              @input="updateCep($event.target.value)"
            />
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="bedrooms">
              Quantidade de Quartos*
            </label>
            <select id="bedrooms" v-model="form.bedrooms" :class="fieldClass" required>
              <option disabled value="">Selecione</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 ou mais</option>
            </select>
          </div>

          <div>
            <label
              class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700"
              for="neighborhood"
            >
              Bairro*
            </label>
            <input id="neighborhood" v-model="form.neighborhood" :class="fieldClass" type="text" required />
          </div>

          <div>
            <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="address">
              Endereco*
            </label>
            <input
              id="address"
              v-model="form.address"
              :class="fieldClass"
              type="text"
              placeholder="Rua, numero"
              required
            />
          </div>

          <div class="md:col-span-2">
            <label
              class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700"
              for="additionalInfo"
            >
              Informacoes Complementares
            </label>
            <textarea
              id="additionalInfo"
              v-model="form.additionalInfo"
              :class="fieldClass"
              rows="3"
            />
          </div>
        </div>

        <label class="flex items-start gap-3 text-xs font-medium text-slate-600">
          <input
            v-model="form.termsAccepted"
            type="checkbox"
            class="mt-0.5 h-4 w-4 rounded border-blue-300 text-[#f97316] focus:ring-orange-400"
            required
          />
          <span>
            Aceito os
            <button
              type="button"
              class="font-bold text-[#f97316] underline decoration-transparent transition hover:decoration-current"
              @click="openTermsModal"
            >
              Termos de Uso
            </button>
          </span>
        </label>

        <button
          class="flex w-full items-center justify-center rounded-lg bg-[#f97316] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#ea6b0e] disabled:cursor-not-allowed disabled:opacity-80"
          type="submit"
          :disabled="isSubmitting"
        >
          <template v-if="isSubmitting">
            <svg
              class="mr-2 h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4Z" />
            </svg>
            Enviando...
          </template>
          <template v-else>QUERO MINHA AVALIACAO GRATUITA</template>
        </button>

        <p class="text-center text-xs font-medium text-slate-500">
          Seus dados estao 100% seguros e protegidos de acordo com a LGPD.
        </p>

        <div
          v-if="isSuccess"
          class="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-medium text-slate-700"
        >
          <svg
            class="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.42l-7.07 7.07a1 1 0 01-1.415 0L4.68 10.24a1 1 0 111.414-1.415l2.832 2.83 6.364-6.363a1 1 0 011.414 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Solicitacao enviada com sucesso! Nossa equipe entrara em contato em breve.</p>
        </div>
      </form>
    </div>

    <TermsModal :open="isTermsModalOpen" @close="closeTermsModal" />
  </section>
</template>
