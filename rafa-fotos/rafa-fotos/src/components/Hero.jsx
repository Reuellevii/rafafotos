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
          <a className="btn btn--contorno" href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center' }}>
            <IconWhatsApp size={18} /> <span>{HERO.botaoWhatsapp}</span>
          </a>
          <a className="btn btn--contorno" href={HERO.banlekUrl} target="_blank" rel="noopener noreferrer">
            {HERO.botaoBanlek}
          </a>
        </div>

        {/* Localização ajustada: +10% opacidade, um pouco mais abaixo e ligeiramente maior */}
        <div style={{ marginTop: '18px', display: 'flex', alignItems: 'center' }}>
          <a
            href="https://maps.app.goo.gl/EnFxiZwRVCq2Hkqy7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.45)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.75 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Localização</span>
          </a>
        </div>
      </div>

      <a href="#sobre" className="hero__rolar" aria-label="Rolar para a próxima seção">
        <span className="hero__rolar-linha" aria-hidden="true" />
      </a>
    </section>
  )
}