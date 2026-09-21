import { CHAMADA } from '../config/content'
import { FOTO_CHAMADA_FINAL } from '../config/photos'
import { whatsappLink } from '../lib/whatsapp'
import Reveal from './Reveal'
import { IconWhatsApp } from './Icons'

export default function CtaWhatsApp() {
  return (
    <section className="chamada" aria-labelledby="chamada-titulo">
      <div className="chamada__foto">
        <img src={FOTO_CHAMADA_FINAL.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: FOTO_CHAMADA_FINAL.posicao }} />
      </div>
      <Reveal className="chamada__conteudo">
        <h2 id="chamada-titulo" className="chamada__titulo">{CHAMADA.titulo}</h2>
        <p className="chamada__texto">{CHAMADA.texto}</p>
        <a className="btn btn--ouro btn--grande" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <IconWhatsApp size={20} /> {CHAMADA.botao}
        </a>
        <p className="chamada__nota">{CHAMADA.nota}</p>
      </Reveal>
    </section>
  )
}
