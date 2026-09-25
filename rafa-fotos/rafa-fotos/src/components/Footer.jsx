import { HERO } from '../config/content'
import { whatsappLink } from '../lib/whatsapp'
import { IconWhatsApp } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__conteudo">
        <div className="footer__coluna">
          <h2 className="footer__logo">Rafa Fotos</h2>
          <p className="footer__descricao">
            Fotografia profissional para transformar momentos em memórias.
          </p>
          <p className="footer__cidade">Orós, Ceará</p>
        </div>

        <div className="footer__coluna">
          <nav className="footer__nav" aria-label="Navegação do rodapé">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="footer__coluna">
          <div className="footer__sociais">
            <a
              href="https://www.instagram.com/rafafotosoros"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <IconWhatsApp size={18} />
              <span>WhatsApp</span>
            </a>

            <a
              href={HERO.banlekUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Banlek</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__direitos">
        <p>© 2026 Rafa Fotos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}