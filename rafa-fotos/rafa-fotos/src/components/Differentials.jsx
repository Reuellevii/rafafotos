import { DIFERENCIAIS } from '../config/content'
import { ICONES_DIFERENCIAIS } from './Icons'
import Reveal from './Reveal'

export default function Differentials() {
  return (
    <section className="diferenciais" aria-labelledby="diferenciais-titulo">
      <div className="container">
        <Reveal>
          <h2 id="diferenciais-titulo" className="titulo-secao titulo-secao--largo">{DIFERENCIAIS.titulo}</h2>
        </Reveal>
        <ul className="diferenciais__grade">
          {DIFERENCIAIS.itens.map((d, i) => {
            const Icone = ICONES_DIFERENCIAIS[d.icone]
            return (
              <Reveal as="li" key={d.titulo} className="diferencial" delay={i * 70}>
                <span className="diferencial__icone">{Icone && <Icone />}</span>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
