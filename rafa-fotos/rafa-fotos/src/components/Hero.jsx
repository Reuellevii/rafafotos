import { HERO } from '../config/content'
import { FOTO_HERO } from '../config/photos'
import { whatsappLink } from '../lib/whatsapp'
import { IconWhatsApp } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <picture className="hero__foto">
        <source media="(max-width: 700px)" srcSet={FOTO_HERO.mobile} />
        <img src={FOTO_HERO.desktop} alt={FOTO_HERO.alt} fetchPriority="high" decoding="async" />
      </picture>
      <div className="hero__sombra" aria-hidden="true" />

      <div className="container hero__conteudo">
        <h1 id="hero-titulo" className="hero__titulo">{HERO.titulo}</h1>
        <p className="hero__texto">{HERO.texto}</p>
        <div className="hero__botoes">
          <a className="btn btn--ouro" href="#portfolio">{HERO.botaoPortfolio}</a>
          <a className="btn btn--contorno" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp size={18} /> {HERO.botaoWhatsapp}
          </a>
        </div>
      </div>

      <a href="#sobre" className="hero__rolar" aria-label="Rolar para a próxima seção">
        <span className="hero__rolar-linha" aria-hidden="true" />
      </a>
    </section>
  )
}
