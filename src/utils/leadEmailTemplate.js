import { getFirstName, sanitizeDigits } from './formatters'

export function buildLeadEmailPayload(formData) {
  const phoneDigits = sanitizeDigits(formData.phone)
  const whatsappNumber = `55${phoneDigits}`
  const firstName = getFirstName(formData.name)
  const description = formData.additionalInfo.trim() || 'Nao informado.'
  const subject = `${formData.propertyType} - ${formData.neighborhood} - ${formData.builtArea}m²`

  const messageHtml = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 20px; color: #0d1a3a;">📍 Novo lead de avaliacao de imovel</h2>
      <div style="margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px; font-size: 16px; color: #1e3a8a;">🏠 Informacoes do imovel</h3>
        <p style="margin: 0;"><strong>Tipo:</strong> ${formData.propertyType}</p>
        <p style="margin: 0;"><strong>Area:</strong> ${formData.builtArea} m²</p>
        <p style="margin: 0;"><strong>Quartos:</strong> ${formData.bedrooms}</p>
      </div>
      <div style="margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px; font-size: 16px; color: #1e3a8a;">📍 Localizacao</h3>
        <p style="margin: 0;"><strong>CEP:</strong> ${formData.cep}</p>
        <p style="margin: 0;"><strong>Bairro:</strong> ${formData.neighborhood}</p>
        <p style="margin: 0;"><strong>Endereco:</strong> ${formData.address}</p>
      </div>
      <div style="margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px; font-size: 16px; color: #1e3a8a;">👤 Dados do cliente</h3>
        <p style="margin: 0;"><strong>Nome:</strong> ${formData.name}</p>
        <div style="margin-top: 12px;">
          <p style="margin: 0 0 4px;"><strong>Email:</strong></p>
          <p style="margin: 0;"><a href="mailto:${formData.email}">${formData.email}</a></p>
        </div>
        <div style="margin-top: 12px;">
          <p style="margin: 0 0 4px;"><strong>Telefone:</strong> ${formData.phone}</p>
          <p style="margin: 0;">
            <a href="https://wa.me/${whatsappNumber}">Conversar no WhatsApp com ${firstName}</a>
          </p>
        </div>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="margin: 0 0 8px;">----------------------------------------</p>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="margin: 0;"><strong>📌 Acao recomendada:</strong></p>
        <p style="margin: 4px 0 0;">Entrar em contato o quanto antes.</p>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="margin: 0 0 8px;"><strong>Descricao:</strong></p>
        <p style="margin: 0;">${description}</p>
      </div>
    </div>
  `

  return {
    subject,
    templateParams: {
      subject,
      message_html: messageHtml,
      nome: formData.name,
      email: formData.email,
      telefone: formData.phone,
      telefone_limpo: phoneDigits,
      whatsapp_link: `https://wa.me/${whatsappNumber}`,
      whatsapp_label: `Conversar no WhatsApp com ${firstName}`,
      tipo: formData.propertyType,
      bairro: formData.neighborhood,
      metros: formData.builtArea,
      descricao: description,
    },
  }
}
