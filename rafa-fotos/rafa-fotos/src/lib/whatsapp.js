import { WHATSAPP_NUMBER, MENSAGEM_WHATSAPP_PADRAO } from '../config/site'

// Monta o link que abre uma conversa no WhatsApp já com a mensagem escrita.
// Se WHATSAPP_NUMBER estiver vazio, o botão leva ao formulário de contato.
export function whatsappLink(mensagem = MENSAGEM_WHATSAPP_PADRAO) {
  const numero = String(WHATSAPP_NUMBER || '').replace(/\D/g, '')
  if (!numero) return '#contato'
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export const whatsappAtivo = () => String(WHATSAPP_NUMBER || '').replace(/\D/g, '').length > 0
