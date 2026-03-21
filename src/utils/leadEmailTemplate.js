import { getFirstName, sanitizeDigits } from "./formatters"

export function buildLeadEmailPayload(formData) {
  const phoneDigits = sanitizeDigits(formData.phone)
  const whatsappNumber = `55${phoneDigits}`
  const firstName = getFirstName(formData.name)
  const description = formData.additionalInfo.trim() || "Não informado."
  const subject = `${formData.propertyType} - ${formData.builtArea}m² - ${formData.bedrooms}/4`
  const replySubject = "Recebemos sua solicitação de avaliação"
  const replyBody = [
    `Olá, ${firstName}.`,
    "",
    "Obrigado pelo seu contato.",
    "Recebemos sua solicitação e entraremos em contato em breve.",
    "",
    "Equipe Quanto Vale Meu Imóvel",
  ].join("\n")
  const body = [
    "Novo lead de avaliação de imóvel",
    "",
    "Informações do imóvel",
    `Tipo: ${formData.propertyType}`,
    `Área construída: ${formData.builtArea} m²`,
    `Quartos: ${formData.bedrooms}`,
    "",
    "Localização",
    `CEP: ${formData.cep}`,
    `Bairro: ${formData.neighborhood}`,
    `Endereço: ${formData.address}`,
    "",
    "Dados do cliente",
    `Nome: ${formData.name}`,
    `Email: ${formData.email}`,
    `Telefone: ${formData.phone}`,
    `WhatsApp: https://wa.me/${whatsappNumber}`,
    `Primeiro nome: ${firstName}`,
    "",
    "Descrição",
    description,
    "",
  ].join("\n")

  return {
    subject,
    requestBody: {
      to: "contato@quantovalemeuimovel.imb.br",
      subject,
      body,
      email: formData.email,
      autoReply: true,
      replySubject,
      replyBody,
    },
  }
}
