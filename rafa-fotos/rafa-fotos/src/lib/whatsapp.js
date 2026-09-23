import { WHATSAPP_NUMBER, MENSAGEM_WHATSAPP_PADRAO } from '../config/site'

export function whatsappLink(mensagem = MENSAGEM_WHATSAPP_PADRAO) {
  const numero = String(WHATSAPP_NUMBER || '').replace(/\D/g, '')
  if (!numero) return '#contato'
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export const whatsappAtivo = () => String(WHATSAPP_NUMBER || '').replace(/\D/g, '').length > 0