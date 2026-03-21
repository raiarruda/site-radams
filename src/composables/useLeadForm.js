import { computed, ref } from "vue"
import { sendLeadEmail } from "../services/leadEmailService"
import { formatCep, formatPhone } from "../utils/formatters"

function createInitialFormData() {
  return {
    name: "",
    email: "",
    propertyType: "",
    phone: "",
    builtArea: "",
    cep: "",
    bedrooms: "",
    neighborhood: "",
    address: "",
    additionalInfo: "",
    termsAccepted: false,
  }
}

export function useLeadForm() {
  const form = ref(createInitialFormData())
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const submitError = ref("")
  const isTermsModalOpen = ref(false)

  const fieldClass = computed(
    () =>
      "w-full rounded border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400",
  )

  function updatePhone(value) {
    form.value.phone = formatPhone(value)
  }

  function updateEmail(value) {
    form.value.email = value
      .replace(/\s+/g, "")
      .replace(/,/g, ".")
      .toLowerCase()
  }

  function updateCep(value) {
    form.value.cep = formatCep(value)
  }

  function resetForm() {
    form.value = createInitialFormData()
  }

  async function handleSubmit() {
    isSubmitting.value = true
    isSuccess.value = false
    submitError.value = ""

    try {
      await sendLeadEmail(form.value)
      //    resetForm()
      isSuccess.value = true
    } catch (error) {
      submitError.value =
        error instanceof Error ? error.message : "Erro ao enviar formulario."
      console.log("Erro ao enviar lead para a API:", error)
    } finally {
      isSubmitting.value = false
    }
  }

  function openTermsModal() {
    isTermsModalOpen.value = true
  }

  function closeTermsModal() {
    isTermsModalOpen.value = false
  }

  return {
    fieldClass,
    form,
    isSubmitting,
    isSuccess,
    submitError,
    isTermsModalOpen,
    handleSubmit,
    openTermsModal,
    closeTermsModal,
    updateEmail,
    updatePhone,
    updateCep,
  }
}
