import { NOME_DA_MARCA, INSTAGRAM_URL, WHATSAPP_NUMBER } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { IconInstagram, IconWhatsApp } from './Icons'

export default function Footer() {
  const urlWhatsapp = whatsappLink()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grade">
        <div className="footer__marca">
          <h3>{NOME_DA_MARCA}</h3>
          <p>Fotografia profissional para transformar momentos em memórias.</p>
          <p className="footer__cidade">Orós, Ceará</p>
        </div>

        <nav className="footer__navegacao" aria-label="Navegação do Rodapé">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="footer__redes">
          <ul>
            {INSTAGRAM_URL && (
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <IconInstagram size={18} /> Instagram
                </a>
              </li>
            )}
            {WHATSAPP_NUMBER && (
              <li>
                <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp size={18} /> WhatsApp
                </a>
              </li>
            )}
            <li>
              <a href="https://banlek.com/rafafotosoros" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg> Banlek
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__direitos">
        <hr className="footer__divisor" />
        <p>&copy; {new Date().getFullYear()} {NOME_DA_MARCA}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
