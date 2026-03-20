<script setup>
import { ref } from 'vue'
import logo from './assets/logo.png'

const form = {
  name: ref(''),
  mobile: ref(''),
  email: ref(''),
  propertyType: ref(''),
  phone: ref(''),
  builtArea: ref(''),
  cep: ref(''),
  bedrooms: ref(''),
  neighborhood: ref(''),
  address: ref(''),
  additionalInfo: ref(''),
  termsAccepted: ref(false),
}

const isSubmitting = ref(false)
const isSuccess = ref(false)
const isTermsModalOpen = ref(false)

const fieldClass =
  'w-full rounded border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400'

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) {
    return digits ? `(${digits}` : ''
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function formatCep(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8)

  if (digits.length <= 5) {
    return digits
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

function handlePhoneInput(event, target) {
  form[target].value = formatPhone(event.target.value)
}

function handleCepInput(event) {
  form.cep.value = formatCep(event.target.value)
}

function handleSubmit() {
  isSubmitting.value = true
  isSuccess.value = false

  window.setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
  }, 1500)
}

function openTermsModal() {
  isTermsModalOpen.value = true
}

function closeTermsModal() {
  isTermsModalOpen.value = false
}
</script>

<template>
  <main class="min-h-screen bg-[#0d1a3a] px-4 py-8 text-white">
    <div class="mx-auto max-w-lg lg:max-w-6xl">
      <div class="lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-10 lg:items-start">
        <section class="text-center lg:sticky lg:top-8 lg:flex lg:min-h-[calc(100vh-4rem)] lg:flex-col lg:items-center lg:justify-center lg:pt-0">
          <img :src="logo" alt="Logo da AIG" class="mx-auto h-28 w-auto sm:h-32 lg:h-44 xl:h-52" />
          <p class="mt-6 text-sm font-medium leading-6 text-slate-100 sm:text-base lg:max-w-xl lg:text-center lg:text-lg lg:leading-8">
            Saiba o valor real do seu imóvel com segurança. Informação qualificada e
            <span class="font-extrabold text-[#f97316]">Parecer Técnico GRATUITO</span>,
            validado por especialistas que conhecem o mercado de Salvador.
          </p>
          <div class="mt-8 hidden max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 text-left lg:block">
            <p class="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
              Avaliação especializada
            </p>
            <p class="mt-4 text-base font-medium leading-7 text-slate-200">
              Preencha o formulário ao lado e receba o contato da equipe AIG para
              uma análise técnica segura, gratuita e alinhada ao mercado de
              Salvador.
            </p>
          </div>
        </section>

        <section class="mt-8 overflow-hidden rounded-2xl shadow-2xl lg:mt-0">
          <header
            class="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 text-center text-base font-bold text-white lg:px-8 lg:py-5 lg:text-lg"
          >
            Comece agora sua avaliação
          </header>

          <div class="bg-[#f8fafc] px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="name">Nome*</label>
                <input
                  id="name"
                  v-model="form.name.value"
                  :class="fieldClass"
                  type="text"
                  required
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="mobile">Celular*</label>
                <input
                  id="mobile"
                  :class="fieldClass"
                  :value="form.mobile.value"
                  type="tel"
                  inputmode="numeric"
                  placeholder="(00) 00000-0000"
                  required
                  @input="handlePhoneInput($event, 'mobile')"
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="email">E-mail*</label>
                <input
                  id="email"
                  v-model="form.email.value"
                  :class="fieldClass"
                  type="email"
                  required
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="propertyType">
                  Tipo de Imóvel*
                </label>
                <select
                  id="propertyType"
                  v-model="form.propertyType.value"
                  :class="fieldClass"
                  required
                >
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
                  :value="form.phone.value"
                  type="tel"
                  inputmode="numeric"
                  placeholder="(00) 00000-0000"
                  required
                  @input="handlePhoneInput($event, 'phone')"
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="builtArea">
                  Área Construída (m²)*
                </label>
                <input
                  id="builtArea"
                  v-model="form.builtArea.value"
                  :class="fieldClass"
                  type="number"
                  min="0"
                  required
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="cep">CEP*</label>
                <input
                  id="cep"
                  :class="fieldClass"
                  :value="form.cep.value"
                  type="text"
                  inputmode="numeric"
                  placeholder="00000-000"
                  required
                  @input="handleCepInput"
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="bedrooms">
                  Quantidade de Quartos*
                </label>
                <select
                  id="bedrooms"
                  v-model="form.bedrooms.value"
                  :class="fieldClass"
                  required
                >
                  <option disabled value="">Selecione</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5 ou mais</option>
                </select>
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="neighborhood">Bairro</label>
                <input
                  id="neighborhood"
                  v-model="form.neighborhood.value"
                  :class="fieldClass"
                  type="text"
                />
              </div>

              <div>
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="address">Endereço*</label>
                <input
                  id="address"
                  v-model="form.address.value"
                  :class="fieldClass"
                  type="text"
                  placeholder="Rua, número"
                  required
                />
              </div>

              <div class="md:col-span-2">
                <label class="mb-1 block text-xs font-semibold tracking-[0.02em] text-slate-700" for="additionalInfo">
                  Informações Complementares
                </label>
                <textarea
                  id="additionalInfo"
                  v-model="form.additionalInfo.value"
                  :class="fieldClass"
                  rows="3"
                />
              </div>
            </div>

              <label class="flex items-start gap-3 text-xs font-medium text-slate-600">
                <input
                  v-model="form.termsAccepted.value"
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
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4Z"
                    />
                  </svg>
                  Enviando...
                </template>
                <template v-else>QUERO MINHA AVALIAÇÃO GRATUITA</template>
              </button>

              <p class="text-center text-xs font-medium text-slate-500">
                🔒 Seus dados estão 100% seguros e protegidos de acordo com a LGPD.
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
                <p>
                  Solicitação enviada com sucesso! Nossa equipe entrará em contato em
                  breve.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>

      <footer class="pt-8 text-center text-xs text-[#475569]">
        © 2025 AIG – Avaliação de Imóveis Gratuita. Todos os direitos reservados.
      </footer>
    </div>

    <div
      v-if="isTermsModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
      @click.self="closeTermsModal"
    >
      <div class="w-full max-w-xl rounded-2xl bg-white p-6 text-slate-800 shadow-2xl">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900">Termos de Uso</h2>
            <p class="mt-1 text-sm font-medium text-slate-500">
              Condições para envio dos dados à equipe AIG.
            </p>
          </div>
          <button
            type="button"
            class="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
            @click="closeTermsModal"
          >
            Fechar
          </button>
        </div>

        <div class="mt-5 space-y-4 text-sm font-medium leading-7 text-slate-600">
          <p>
            Ao prosseguir, você autoriza a AIG a utilizar as informações enviadas
            exclusivamente para contato, análise inicial do imóvel e envio da
            avaliação gratuita solicitada.
          </p>
          <p>
            Seus dados não serão comercializados e serão tratados com medidas de
            segurança compatíveis com a LGPD, respeitando finalidade, necessidade e
            confidencialidade.
          </p>
          <p>
            Você pode solicitar atualização ou remoção das suas informações a
            qualquer momento entrando em contato com a equipe responsável pelo
            atendimento.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
