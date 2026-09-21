import { SOBRE } from '../config/content'
import { FOTO_FOTOGRAFO } from '../config/photos'
import { ANOS_DE_EXPERIENCIA, INSTAGRAM_URL } from '../config/site'
import Reveal from './Reveal'
import { IconInstagram } from './Icons'

export default function About() {
  return (
    <section id="sobre" className="sobre" aria-labelledby="sobre-titulo">
      <div className="container sobre__grade">
        <Reveal as="figure" className="sobre__figura">
          <img
            src={FOTO_FOTOGRAFO.src}
            alt={FOTO_FOTOGRAFO.alt}
            width={FOTO_FOTOGRAFO.width}
            height={FOTO_FOTOGRAFO.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sobre__selo">
            <span className="sobre__selo-numero">{ANOS_DE_EXPERIENCIA}</span>
            <span className="sobre__selo-texto">{SOBRE.selo}</span>
          </figcaption>
        </Reveal>

        <Reveal className="sobre__texto" delay={120}>
          <h2 id="sobre-titulo" className="titulo-secao">{SOBRE.titulo}</h2>
          <p className="sobre__saudacao">{SOBRE.saudacao}</p>
          {SOBRE.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {INSTAGRAM_URL && (
            <a className="link-sutil" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <IconInstagram size={18} /> Acompanhe meu dia a dia no Instagram
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
