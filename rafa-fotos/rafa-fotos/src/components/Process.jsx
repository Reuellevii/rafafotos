import { ETAPAS } from '../config/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="etapas" aria-labelledby="etapas-titulo">
      <div className="container">
        <Reveal>
          <h2 id="etapas-titulo" className="titulo-secao titulo-secao--largo">{ETAPAS.titulo}</h2>
        </Reveal>
        {/* A linha que liga as etapas é desenhada em CSS (.etapas__lista) */}
        <ol className="etapas__lista">
          {ETAPAS.itens.map((e, i) => (
            <Reveal as="li" key={e.titulo} className="etapa" delay={i * 90}>
              <span className="etapa__numero">{String(i + 1).padStart(2, '0')}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
