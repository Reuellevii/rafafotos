import { useEffect, useState } from 'react'
import { NOME_DA_MARCA } from '../config/site'
import { MENU, HERO, DEPOIMENTOS } from '../config/content'
import { whatsappLink } from '../lib/whatsapp'
import { IconWhatsApp } from './Icons'

export default function Header() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)

  // Muda o visual do menu ao rolar a página
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Menu celular: trava a rolagem do fundo, fecha com Esc e ao aumentar a tela
  useEffect(() => {
    if (!aberto) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const aoTeclar = (e) => e.key === 'Escape' && setAberto(false)
    const aoRedimensionar = () => window.innerWidth > 980 && setAberto(false)
    window.addEventListener('keydown', aoTeclar)
    window.addEventListener('resize', aoRedimensionar)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener('keydown', aoTeclar)
      window.removeEventListener('resize', aoRedimensionar)
    }
  }, [aberto])

  const itens = MENU.filter((i) => i.alvo !== '#depoimentos' || DEPOIMENTOS.length > 0)
  const fechar = () => setAberto(false)

  return (
    <header className={`header${rolou || aberto ? ' header--solido' : ''}${aberto ? ' header--aberto' : ''}`}>
      <div className="header__interno">
        <a href="#inicio" className="marca" onClick={fechar} aria-label={`${NOME_DA_MARCA} — voltar ao início`}>
          {NOME_DA_MARCA}
        </a>

        <nav id="menu-principal" className="menu" aria-label="Menu principal">
          <ul>
            {itens.map((i) => (
              <li key={i.alvo}>
                <a href={i.alvo} onClick={fechar}>{i.rotulo}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--ouro menu__whats" href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={fechar}>
            <IconWhatsApp size={18} /> {HERO.botaoWhatsapp}
          </a>
        </nav>

        <button
          type="button"
          className="hamburguer"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
