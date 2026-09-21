import { DEPOIMENTOS, DEPOIMENTOS_TITULO, DEPOIMENTOS_SELO_DEMO } from '../config/content'
import Reveal from './Reveal'

const iniciais = (nome) =>
  nome.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('')

// Cartão de depoimento: reutilizável
function CartaoDepoimento({ item, atraso }) {
  return (
    <Reveal as="figure" className="depoimento" delay={atraso}>
      {item.demo && <span className="depoimento__demo">{DEPOIMENTOS_SELO_DEMO}</span>}
      <blockquote>{item.texto}</blockquote>
      <figcaption className="depoimento__autor">
        {item.foto ? (
          <img src={item.foto} alt="" width="48" height="48" loading="lazy" className="depoimento__avatar" />
        ) : (
          <span className="depoimento__avatar depoimento__avatar--iniciais" aria-hidden="true">{iniciais(item.nome)}</span>
        )}
        <span>
          <strong>{item.nome}</strong>
          <span className="depoimento__tipo">{item.tipo}</span>
        </span>
      </figcaption>
    </Reveal>
  )
}

export default function Testimonials() {
  if (!DEPOIMENTOS.length) return null
  return (
    <section id="depoimentos" className="depoimentos" aria-labelledby="depoimentos-titulo">
      <div className="container">
        <Reveal className="cabecalho-secao">
          <h2 id="depoimentos-titulo" className="titulo-secao">{DEPOIMENTOS_TITULO}</h2>
        </Reveal>
        <div className="depoimentos__grade">
          {DEPOIMENTOS.map((d, i) => (
            <CartaoDepoimento key={`${d.nome}-${i}`} item={d} atraso={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
