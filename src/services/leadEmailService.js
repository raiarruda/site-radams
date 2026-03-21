import { buildLeadEmailPayload } from '../utils/leadEmailTemplate'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
const SEND_EMAIL_ENDPOINT = import.meta.env.VITE_SEND_EMAIL_ENDPOINT || '/send-email'

export async function sendLeadEmail(formData) {
  const { requestBody } = buildLeadEmailPayload(formData)
  const response = await fetch(`${API_BASE_URL}${SEND_EMAIL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(requestBody),
  })

  let responseData = null

  try {
    responseData = await response.json()
  } catch {
    responseData = null
  }

  if (!response.ok || !responseData?.ok) {
    const errorMessage =
      responseData?.error || 'Nao foi possivel enviar sua solicitacao no momento.'

    throw new Error(errorMessage)
  }

  return responseData
}
