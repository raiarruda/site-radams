import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../constants/emailjs'
import { buildLeadEmailPayload } from '../utils/leadEmailTemplate'

export async function sendLeadEmail(formData) {
  const { templateParams } = buildLeadEmailPayload(formData)

  return emailjs.send(
    EMAILJS_CONFIG.serviceID,
    EMAILJS_CONFIG.templateID,
    templateParams,
    {
      publicKey: EMAILJS_CONFIG.publicKey,
    },
  )
}
