import { NOME_DA_MARCA, INSTAGRAM_URL, EMAIL, CIDADE } from '../config/site'
import { RODAPE, DEPOIMENTOS } from '../config/content'
import { whatsappLink } from '../lib/whatsapp'
import { IconInstagram, IconWhatsApp } from './Icons'

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container rodape__grade">
        <div className="rodape__marca">
          <p className="marca marca--rodape">{NOME_DA_MARCA}</p>
          <p>{RODAPE.descricao}</p>
          {CIDADE && <p className="rodape__cidade">{CIDADE}</p>}
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="rodape__links">
            {RODAPE.links
              .filter((l) => l.alvo !== '#depoimentos' || DEPOIMENTOS.length > 0)
              .map((l) => (
                <li key={l.alvo}><a href={l.alvo}>{l.rotulo}</a></li>
              ))}
          </ul>
        </nav>

        <ul className="rodape__redes">
          {INSTAGRAM_URL && (
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><IconInstagram size={20} /> Instagram</a>
            </li>
          )}
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><IconWhatsApp size={20} /> WhatsApp</a>
          </li>
          <li>
            <a href="https://banlek.com/rafafotosoros" target="_blank" rel="noopener noreferrer">
              Banlek
            </a>
          </li>
          {EMAIL && (
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          )}
        </ul>
      </div>
      <div className="container rodape__direitos">
        <p>{RODAPE.direitos}</p>
      </div>
    </footer>
  )
}
