// ============================================================================
//  TEXTOS DO SITE  —  para mudar qualquer texto, edite este arquivo
// ============================================================================

// Menu (o item "Depoimentos" some sozinho se a lista DEPOIMENTOS estiver vazia)
export const MENU = [
  { rotulo: 'Início', alvo: '#inicio' },
  { rotulo: 'Sobre', alvo: '#sobre' },
  { rotulo: 'Portfólio', alvo: '#portfolio' },
  { rotulo: 'Serviços', alvo: '#servicos' },
  { rotulo: 'Depoimentos', alvo: '#depoimentos' },
  { rotulo: 'Contato', alvo: '#contato' },
]

export const HERO = {
  titulo: 'Momentos que merecem ser lembrados para sempre.',
  texto:
    'Fotografia profissional para transformar momentos especiais em memórias que permanecem.',
  botaoPortfolio: 'Conheça meu trabalho',
  botaoWhatsapp: 'Falar no WhatsApp',
}

export const SOBRE = {
  titulo: 'Por trás das lentes',
  saudacao: 'Olá, eu sou o Rafa Fotos.',
  paragrafos: [
    'Trabalho há mais de 20 anos com fotografia e, desde o início, sempre fui apaixonado pela arte de registrar histórias através das imagens.',
    'Nasci em Orós, no interior do Ceará, e foi nesse lugar que começou minha trajetória na fotografia.',
    'Ao longo dos anos, a fotografia se tornou muito mais do que uma profissão. Tornou-se uma forma de guardar momentos, sentimentos e histórias que podem ser revividos através de uma imagem.',
    'Meu objetivo é entregar fotografias que tenham significado, qualidade e personalidade, sempre buscando registrar cada momento de forma natural e especial.',
  ],
  selo: 'anos de experiência',
}

export const PORTFOLIO = {
  titulo: 'Meu trabalho',
  subtitulo: 'Algumas histórias que tive o privilégio de registrar.',
  rotuloTodos: 'Todos',
}

// ---------------------------------------------------------------------------
// SERVIÇOS  (sem preços e sem pacotes)
//  - "imagem": foto do cartão (pasta public/images/servicos/)
//  - "mensagem": texto que abre no WhatsApp ao clicar em "Quero saber mais"
//  - Para trocar a foto de um serviço: substitua o arquivo na pasta, mantendo o mesmo nome.
//
//  ⚠ FOTOS TEMPORÁRIAS — SUBSTITUIR: "casamentos", "newborn" e "eventos" ainda não têm
//    fotos próprias do portfólio. Estão usando fotos de outros ensaios só para ocupar o lugar.
//    Troque os arquivos servicos/casamentos.jpg, servicos/newborn.jpg e servicos/eventos.jpg.
// ---------------------------------------------------------------------------
export const SERVICOS_TITULO = 'Serviços'
export const SERVICOS_SUBTITULO = 'Cada ocasião pede um olhar diferente. Estes são os registros que faço.'
export const SERVICOS_BOTAO = 'Quero saber mais'

export const SERVICOS = [
  {
    id: 'casamentos',
    titulo: 'Casamentos',
    descricao:
      'Registro dos momentos mais importantes do seu grande dia, com fotografias espontâneas, emocionantes e atemporais.',
    imagem: '/images/servicos/casamentos.jpg', // TEMPORÁRIA — substituir
    alt: 'Casal em abraço afetuoso, de rosa, em estúdio',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre o serviço de fotografia de casamento.',
  },
  {
    id: 'ensaios',
    titulo: 'Ensaios',
    descricao:
      'Ensaios individuais, de casal e familiares, planejados para revelar a personalidade e a conexão de cada pessoa.',
    imagem: '/images/servicos/ensaios.jpg',
    alt: 'Família em tons de azul durante ensaio',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre os ensaios fotográficos (individual, casal ou família).',
  },
  {
    id: 'gestante',
    titulo: 'Gestante',
    descricao: 'Registros delicados e emocionantes de uma das fases mais especiais da vida.',
    imagem: '/images/servicos/gestante.jpg',
    alt: 'Gestante e sua filha em ensaio de estúdio',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre o ensaio de gestante.',
  },
  {
    id: 'newborn',
    titulo: 'Newborn',
    descricao: 'Fotografias cuidadosas para preservar os primeiros momentos do bebê.',
    imagem: '/images/servicos/newborn.jpg', // TEMPORÁRIA — substituir
    alt: 'Bebê sorrindo em ensaio de acompanhamento',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre o ensaio newborn.',
  },
  {
    id: 'infantil',
    titulo: 'Infantil',
    descricao: 'Ensaios e registros infantis leves, naturais e divertidos.',
    imagem: '/images/servicos/infantil.jpg',
    alt: 'Bebê vestido de aviador em ensaio temático',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre a fotografia infantil.',
  },
  {
    id: 'eventos',
    titulo: 'Eventos',
    descricao: 'Cobertura fotográfica profissional para eventos e ocasiões especiais.',
    imagem: '/images/servicos/eventos.jpg', // TEMPORÁRIA — substituir
    alt: 'Família em azul e branco em momento de carinho',
    mensagem: 'Olá, Rafa! Gostaria de saber mais sobre a cobertura fotográfica de eventos.',
  },
]

export const DIFERENCIAIS = {
  titulo: 'Mais do que fotografias. Histórias para guardar.',
  itens: [
    {
      icone: 'abertura',
      titulo: '+20 anos de experiência',
      texto: 'Experiência construída ao longo de anos dedicados à fotografia.',
    },
    {
      icone: 'olho',
      titulo: 'Olhar atento aos detalhes',
      texto: 'Cada momento possui detalhes únicos. Meu trabalho é perceber e registrar esses momentos.',
    },
    {
      icone: 'folha',
      titulo: 'Fotografias naturais',
      texto: 'Prioridade para registros espontâneos e autênticos.',
    },
    {
      icone: 'coracao',
      titulo: 'Atendimento personalizado',
      texto: 'Cada cliente possui uma história diferente e merece uma experiência personalizada.',
    },
  ],
}

export const ETAPAS = {
  titulo: 'Do primeiro contato à entrega das suas memórias',
  itens: [
    { titulo: 'Converse comigo', texto: 'Entre em contato pelo WhatsApp e conte um pouco sobre o que você deseja registrar.' },
    { titulo: 'Planejamento', texto: 'Vamos conversar sobre o ensaio, evento ou momento que será fotografado.' },
    { titulo: 'O grande dia', texto: 'Chega o momento de registrar sua história com naturalidade e cuidado.' },
    { titulo: 'Suas fotografias', texto: 'Você recebe suas fotografias com todo o cuidado e qualidade.' },
  ],
}

// ---------------------------------------------------------------------------
// DEPOIMENTOS
//  Os 3 abaixo são APENAS DEMONSTRATIVOS (demo: true) e aparecem no site com o selo
//  "Depoimento demonstrativo". Quando tiver depoimentos reais:
//   1. Apague os blocos demonstrativos
//   2. Adicione os reais no mesmo formato, SEM a linha "demo: true"
//   3. (Opcional) "foto": '/images/depoimentos/nome.jpg' — coloque a foto nessa pasta
//  Se a lista ficar vazia ([]), a seção inteira (e o item do menu) some do site.
// ---------------------------------------------------------------------------
export const DEPOIMENTOS_TITULO = 'O que meus clientes dizem'
export const DEPOIMENTOS_SELO_DEMO = 'Depoimento demonstrativo'

export const DEPOIMENTOS = [
  {
    nome: 'ines.araujo2',
    tipo: 'Ensaio estúdio',
    foto: '',
    texto: 'Rafael, eu que te agradeço por ter sido um profissional tão paciente! Amei cada detalhe do meu ensaio fotográfico. Ficou simplesmente incrível! Grata por toda atenção e cuidado em cada momento. Você fez toda a diferença com seu profissionalismo!',
    demo: true,
  },
  {
    nome: 'michelly_hayane',
    tipo: 'Acompanhamento',
    foto: '',
    texto: 'Obrigada pelo trabalho e acompanhamento durante esse 1 ano da nossa Melinda. Trabalho e paciência sem igual com a nossa bebê! Que Deus continue abençoando sua profissão linda.',
    demo: true,
  },
  {
    nome: 'rafaelakaeliny',
    tipo: 'Ensaio infantil',
    foto: '',
    texto: 'Minha princesa 😍 Obrigado pelo excelente trabalho.',
    demo: true,
  },
]

export const CHAMADA = {
  titulo: 'Vamos registrar sua história?',
  texto: 'Conte para mim o que você deseja fotografar e vamos conversar sobre o seu projeto.',
  botao: 'Falar comigo pelo WhatsApp',
  nota: 'Responderei sua mensagem e retornarei o mais breve possível.',
}

export const CONTATO = {
  titulo: 'Solicite seu atendimento',
  texto:
    'Preencha os dados abaixo. Ao enviar, abriremos o WhatsApp com o seu pedido já preenchido para você só confirmar.',
  botao: 'Solicitar atendimento',
  // Opções do campo "Tipo de serviço"
  tiposDeServico: ['Casamentos', 'Ensaios', 'Gestante', 'Newborn', 'Infantil', 'Eventos', 'Outro'],
}

export const RODAPE = {
  descricao: 'Fotografia profissional para transformar momentos em memórias.',
  links: [
    { rotulo: 'Início', alvo: '#inicio' },
    { rotulo: 'Sobre', alvo: '#sobre' },
    { rotulo: 'Portfólio', alvo: '#portfolio' },
    { rotulo: 'Serviços', alvo: '#servicos' },
    { rotulo: 'Contato', alvo: '#contato' },
  ],
  direitos: '© 2026 Rafa Fotos. Todos os direitos reservados.',
}
