import { useMemo, useState } from 'react'
import { PORTFOLIO } from '../config/content'
import { CATEGORIAS, FOTOGRAFIAS, MOSTRAR_CATEGORIAS_VAZIAS } from '../config/photos'
import { INSTAGRAM_URL } from '../config/site'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import { IconInstagram } from './Icons'

export default function Portfolio() {
  const [filtro, setFiltro] = useState(PORTFOLIO.rotuloTodos)
  const [aberta, setAberta] = useState(null) // índice da foto aberta no lightbox

  // Só mostra categorias que têm foto (a menos que a configuração diga o contrário)
  const categorias = useMemo(
    () => [
      PORTFOLIO.rotuloTodos,
      ...CATEGORIAS.filter((c) => MOSTRAR_CATEGORIAS_VAZIAS || FOTOGRAFIAS.some((f) => f.categorias.includes(c))),
    ],
    [],
  )

  const visiveis = useMemo(
    () => (filtro === PORTFOLIO.rotuloTodos ? FOTOGRAFIAS : FOTOGRAFIAS.filter((f) => f.categorias.includes(filtro))),
    [filtro],
  )

  const mudarFiltro = (c) => {
    setFiltro(c)
    setAberta(null)
  }

  return (
    <section id="portfolio" className="portfolio" aria-labelledby="portfolio-titulo">
      <div className="container">
        <Reveal className="portfolio__topo">
          <div>
            <h2 id="portfolio-titulo" className="titulo-secao">{PORTFOLIO.titulo}</h2>
            <p className="subtitulo-secao">{PORTFOLIO.subtitulo}</p>
          </div>
          <div className="filtros" role="group" aria-label="Filtrar fotografias por categoria">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                className={`filtro${filtro === c ? ' filtro--ativo' : ''}`}
                aria-pressed={filtro === c}
                onClick={() => mudarFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="galeria" key={filtro}>
          {visiveis.map((f, i) => (
            <li key={f.src} className="galeria__item" style={{ animationDelay: `${Math.min(i, 8) * 55}ms` }}>
              <button type="button" className="galeria__botao" onClick={() => setAberta(i)} aria-label={`Ampliar foto: ${f.titulo}`}>
                <img
                  src={f.src}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: f.ratio || `${f.width} / ${f.height}`, objectPosition: f.posicao || 'center' }}
                />
                <span className="galeria__legenda">
                  <span className="galeria__titulo">{f.titulo}</span>
                  <span className="galeria__cat">{f.categorias[0]}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {INSTAGRAM_URL && (
          <Reveal className="portfolio__rodape">
            <a className="link-sutil link-sutil--escuro" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <IconInstagram size={18} /> Veja mais trabalhos no Instagram
            </a>
          </Reveal>
        )}
      </div>

      {aberta !== null && visiveis[aberta] && (
        <Lightbox fotos={visiveis} indice={aberta} onFechar={() => setAberta(null)} onMudar={setAberta} />
      )}
    </section>
  )
}
