import { useState } from 'react'
import { CONTATO } from '../config/content'
import { NOME_DA_MARCA, INSTAGRAM_URL, EMAIL, CIDADE } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { salvarLead } from '../lib/leads'
import Reveal from './Reveal'
import { IconInstagram, IconMail, IconPin, IconWhatsApp } from './Icons'

const VAZIO = { nome: '', whatsapp: '', email: '', servico: '', data: '', cidade: '', mensagem: '', empresa: '' }

// Data de hoje no formato aaaa-mm-dd (para bloquear datas passadas)
const hojeISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

// Máscara de telefone brasileiro: (88) 99999-9999
function mascaraTelefone(valor) {
  const n = valor.replace(/\D/g, '').slice(0, 11)
  if (n.length <= 2) return n
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`
}

// Regras de validação de cada campo (devolve o texto do erro ou '')
const REGRAS = {
  nome: (v) => (v.trim().length < 2 ? 'Informe seu nome.' : ''),
  whatsapp: (v) => {
    const n = v.replace(/\D/g, '')
    return n.length < 10 || n.length > 11 ? 'Informe um WhatsApp válido, com DDD.' : ''
  },
  email: (v) => (v.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Informe um e-mail válido.' : ''),
  servico: (v) => (!v ? 'Escolha o tipo de serviço.' : ''),
  data: (v) => (v && v < hojeISO() ? 'Escolha uma data a partir de hoje.' : ''),
  cidade: () => '',
  mensagem: (v) => (v.length > 1000 ? 'A mensagem pode ter até 1000 caracteres.' : ''),
}

function validar(dados) {
  const erros = {}
  Object.keys(REGRAS).forEach((campo) => {
    const msg = REGRAS[campo](dados[campo])
    if (msg) erros[campo] = msg
  })
  return erros
}

const formatarData = (iso) => (iso ? iso.split('-').reverse().join('/') : '')

// Texto que vai para o WhatsApp com os dados preenchidos
function montarMensagem(d) {
  const linhas = [
    `Olá, Rafa! Meu nome é ${d.nome.trim()} e gostaria de solicitar atendimento.`,
    '',
    `Serviço: ${d.servico}`,
    d.data && `Data desejada: ${formatarData(d.data)}`,
    d.cidade.trim() && `Cidade: ${d.cidade.trim()}`,
    `WhatsApp: ${d.whatsapp}`,
    d.email.trim() && `E-mail: ${d.email.trim()}`,
    d.mensagem.trim() && `Mensagem: ${d.mensagem.trim()}`,
  ]
  return linhas.filter((l) => l !== '' ? Boolean(l) : true).join('\n')
}

// Campo reutilizável (rótulo + campo + mensagem de erro)
function Campo({ id, rotulo, erro, obrigatorio, children }) {
  return (
    <div className={`campo${erro ? ' campo--erro' : ''}`}>
      <label htmlFor={id}>
        {rotulo}
        {obrigatorio && <span className="campo__obrigatorio" aria-hidden="true"> *</span>}
      </label>
      {children}
      {erro && <p id={`${id}-erro`} className="campo__erro" role="alert">{erro}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [dados, setDados] = useState(VAZIO)
  const [erros, setErros] = useState({})
  const [status, setStatus] = useState('parado') // parado | enviando | enviado | falhou
  const [linkEnvio, setLinkEnvio] = useState('')

  const propsCampo = (id) => ({
    id,
    name: id,
    value: dados[id],
    'aria-invalid': erros[id] ? 'true' : undefined,
    'aria-describedby': erros[id] ? `${id}-erro` : undefined,
    onChange: (e) => {
      const valor = id === 'whatsapp' ? mascaraTelefone(e.target.value) : e.target.value
      setDados((d) => ({ ...d, [id]: valor }))
      if (erros[id]) setErros((er) => ({ ...er, [id]: REGRAS[id](valor) }))
    },
    onBlur: () => setErros((er) => ({ ...er, [id]: REGRAS[id](dados[id]) })),
  })

  async function aoEnviar(e) {
    e.preventDefault()
    if (dados.empresa) return // campo escondido: só robôs preenchem

    const novosErros = validar(dados)
    setErros(novosErros)
    const primeiro = Object.keys(novosErros)[0]
    if (primeiro) {
      document.getElementById(primeiro)?.focus()
      return
    }

    setStatus('enviando')
    const link = whatsappLink(montarMensagem(dados))
    setLinkEnvio(link)

    // Abre o WhatsApp já com o pedido preenchido
    if (link.startsWith('http')) window.open(link, '_blank', 'noopener,noreferrer')

    // Salva no Supabase (só acontece se ele estiver configurado — veja src/lib/leads.js)
    try {
      await salvarLead(dados)
    } catch (erro) {
      console.error('Não foi possível salvar o pedido:', erro)
    }

    setStatus('enviado')
    setDados(VAZIO)
  }

  return (
    <section id="contato" className="contato" aria-labelledby="contato-titulo">
      <div className="container contato__grade">
        <Reveal className="contato__info">
          <h2 id="contato-titulo" className="titulo-secao">{CONTATO.titulo}</h2>
          <p className="subtitulo-secao">{CONTATO.texto}</p>
          <ul className="contato__lista">
            <li><IconWhatsApp size={20} /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a></li>
            {INSTAGRAM_URL && (
              <li><IconInstagram size={20} /><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            )}
            {EMAIL && <li><IconMail size={20} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}
            {CIDADE && <li><IconPin size={20} /><span>{CIDADE}</span></li>}
          </ul>
        </Reveal>

        <Reveal className="contato__formulario" delay={100}>
          {status === 'enviado' ? (
            <div className="sucesso" role="status">
              <h3>Pedido pronto para enviar</h3>
              <p>
                Abrimos o WhatsApp com os seus dados preenchidos. Basta tocar em enviar para que {NOME_DA_MARCA} receba sua mensagem.
              </p>
              {linkEnvio.startsWith('http') && (
                <a className="btn btn--escuro" href={linkEnvio} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp size={18} /> Abrir o WhatsApp novamente
                </a>
              )}
              <button type="button" className="link-botao" onClick={() => setStatus('parado')}>
                Preencher outro pedido
              </button>
            </div>
          ) : (
            <form onSubmit={aoEnviar} noValidate>
              <div className="campo-escondido" aria-hidden="true">
                <label htmlFor="empresa">Não preencha este campo</label>
                <input id="empresa" name="empresa" tabIndex={-1} autoComplete="off" value={dados.empresa} onChange={(e) => setDados((d) => ({ ...d, empresa: e.target.value }))} />
              </div>

              <div className="formulario__linha">
                <Campo id="nome" rotulo="Nome" erro={erros.nome} obrigatorio>
                  <input type="text" autoComplete="name" {...propsCampo('nome')} />
                </Campo>
                <Campo id="whatsapp" rotulo="WhatsApp" erro={erros.whatsapp} obrigatorio>
                  <input type="tel" inputMode="tel" autoComplete="tel" placeholder="(88) 99999-9999" {...propsCampo('whatsapp')} />
                </Campo>
              </div>

              <div className="formulario__linha">
                <Campo id="email" rotulo="E-mail" erro={erros.email}>
                  <input type="email" autoComplete="email" {...propsCampo('email')} />
                </Campo>
                <Campo id="servico" rotulo="Tipo de serviço" erro={erros.servico} obrigatorio>
                  <select {...propsCampo('servico')}>
                    <option value="">Selecione</option>
                    {CONTATO.tiposDeServico.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Campo>
              </div>

              <div className="formulario__linha">
                <Campo id="data" rotulo="Data desejada" erro={erros.data}>
                  <input type="date" min={hojeISO()} {...propsCampo('data')} />
                </Campo>
                <Campo id="cidade" rotulo="Cidade" erro={erros.cidade}>
                  <input type="text" autoComplete="address-level2" {...propsCampo('cidade')} />
                </Campo>
              </div>

              <Campo id="mensagem" rotulo="Mensagem" erro={erros.mensagem}>
                <textarea rows={4} placeholder="Conte um pouco sobre o que você quer registrar" {...propsCampo('mensagem')} />
              </Campo>

              <button type="submit" className="btn btn--escuro btn--grande formulario__enviar" disabled={status === 'enviando'}>
                {status === 'enviando' ? 'Enviando...' : CONTATO.botao}
              </button>
              <p className="formulario__nota">Campos com * são obrigatórios.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
