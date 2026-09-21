import { whatsappLink } from '../lib/whatsapp'
import { IconWhatsApp } from './Icons'

// Botão redondo fixo no canto inferior direito
export default function WhatsAppFloat() {
  return (
    <a
      className="whats-flutuante"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
    >
      <IconWhatsApp size={30} />
    </a>
  )
}
