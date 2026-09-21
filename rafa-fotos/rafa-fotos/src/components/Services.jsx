import { SERVICOS, SERVICOS_TITULO, SERVICOS_SUBTITULO, SERVICOS_BOTAO } from '../config/content'
import { whatsappLink } from '../lib/whatsapp'
import Reveal from './Reveal'

// Um cartão de serviço: reutilizável. Cada serviço abre o WhatsApp com a sua própria mensagem.
function CartaoServico({ servico, atraso }) {
  return (
    <Reveal as="article" className="servico" delay={atraso}>
      <div className="servico__foto">
        <img src={servico.imagem} alt={servico.alt} width="733" height="1100" loading="lazy" decoding="async" />
      </div>
      <h3 className="servico__titulo">{servico.titulo}</h3>
      <p className="servico__texto">{servico.descricao}</p>
      <a
        className="servico__botao"
        href={whatsappLink(servico.mensagem)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${SERVICOS_BOTAO} sobre ${servico.titulo} (abre o WhatsApp)`}
      >
        {SERVICOS_BOTAO}
      </a>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="servicos" aria-labelledby="servicos-titulo">
      <div className="container">
        <Reveal className="cabecalho-secao">
          <h2 id="servicos-titulo" className="titulo-secao">{SERVICOS_TITULO}</h2>
          <p className="subtitulo-secao">{SERVICOS_SUBTITULO}</p>
        </Reveal>
        <div className="servicos__grade">
          {SERVICOS.map((s, i) => (
            <CartaoServico key={s.id} servico={s} atraso={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
