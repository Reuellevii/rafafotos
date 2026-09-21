// ============================================================================
//  FOTOGRAFIAS  —  aqui ficam TODAS as fotos do site
// ============================================================================
//
//  COMO ADICIONAR UMA FOTO NOVA (3 passos):
//   1. Coloque o arquivo .jpg na pasta  public/images/portfolio/
//   2. Copie um dos blocos { ... } da lista FOTOGRAFIAS abaixo e cole no final
//   3. Troque o "src" pelo nome do seu arquivo e ajuste título, texto e categorias
//
//  Campos:
//   src         caminho da foto (sempre começando com /images/portfolio/)
//   alt         descrição da foto (ajuda acessibilidade e Google)
//   titulo      texto que aparece ao passar o mouse e na foto ampliada
//   categorias  uma ou mais entre: 'Casamentos','Ensaios','Gestantes','Família','Infantil','Eventos'
//   width/height tamanho real do arquivo em pixels (evita "pulos" na tela). Se não souber, use 1200 e 1800.
//   ratio       (opcional) proporção da miniatura na galeria, ex.: '4 / 5', '1 / 1', '3 / 2'.
//               Serve só para dar ritmo editorial à galeria; a foto ampliada sempre aparece inteira.
//   posicao     (opcional) enquadramento da miniatura, ex.: 'center 30%'
// ============================================================================

// Categorias exibidas nos filtros (a ordem aqui é a ordem na tela).
export const CATEGORIAS = ['Casamentos', 'Ensaios', 'Gestantes', 'Família', 'Infantil', 'Eventos']

// false = categorias que ainda não têm nenhuma foto ficam escondidas dos filtros.
// true  = todas as categorias aparecem sempre.
export const MOSTRAR_CATEGORIAS_VAZIAS = false

// Foto principal (primeira tela) — versão computador e versão celular
export const FOTO_HERO = {
  desktop: '/images/hero/hero.jpg',
  mobile: '/images/hero/hero-mobile.jpg',
  alt: 'Bebê sorrindo em ensaio fotográfico profissional',
}

// Retrato do Rafa Fotos ("Por trás das lentes")
export const FOTO_FOTOGRAFO = {
  src: '/images/fotografo/rafa-fotos.jpg',
  alt: 'Retrato do fotógrafo Rafa Fotos com sua câmera profissional',
  width: 1164,
  height: 1600,
}

// Foto de fundo da chamada final para o WhatsApp
export const FOTO_CHAMADA_FINAL = {
  src: '/images/portfolio/infantil-aviador-03.jpg',
  posicao: 'center 30%',
}

// Portfólio
export const FOTOGRAFIAS = [
  {
    src: '/images/portfolio/gestante-familia-01.jpg',
    alt: 'Gestante e sua filha, de branco, se olhando com carinho em estúdio',
    titulo: 'Ensaio gestante em família',
    categorias: ['Gestantes', 'Família', 'Ensaios'],
    width: 1200, height: 1800, ratio: '4 / 5', posicao: 'center 52%',
  },
  {
    src: '/images/portfolio/infantil-aviador-02.jpg',
    alt: 'Bebê vestido de aviador olhando curioso ao lado de um avião de madeira',
    titulo: 'Bebê aviador',
    categorias: ['Infantil'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/gestante-casal-01.jpg',
    alt: 'Casal grávido de rosa com as testas encostadas',
    titulo: 'Casal gestante',
    categorias: ['Gestantes', 'Ensaios'],
    width: 1200, height: 1800, ratio: '4 / 5', posicao: 'center 35%',
  },
  {
    src: '/images/portfolio/infantil-biblico-03.jpg',
    alt: 'Bebê sorrindo apoiado em um banquinho, com trigo, pães, uvas e cruz de madeira ao fundo',
    titulo: 'Bebê em cenário de trigo',
    categorias: ['Infantil'],
    width: 1800, height: 1200,
  },
  {
    src: '/images/portfolio/familia-azul-01.jpg',
    alt: 'Família em tons de azul com o bebê entre o pai e a mãe',
    titulo: 'Família em azul',
    categorias: ['Família', 'Ensaios'],
    width: 1200, height: 1800, ratio: '3 / 4', posicao: 'center 40%',
  },
  {
    src: '/images/portfolio/infantil-aviador-04.jpg',
    alt: 'Bebê aviador rindo, com capacete e macacão bege',
    titulo: 'Sorriso de aviador',
    categorias: ['Infantil'],
    width: 1200, height: 1800, ratio: '1 / 1', posicao: 'center 28%',
  },
  {
    src: '/images/portfolio/gestante-familia-04.jpg',
    alt: 'Família com filho nos ombros do pai e a mãe gestante em vestido claro',
    titulo: 'Gestante com a família',
    categorias: ['Gestantes', 'Família'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/infantil-biblico-02.jpg',
    alt: 'Bebê sorrindo, de turbante bege, apoiado em um banquinho ao lado de uma Bíblia aberta',
    titulo: 'Acompanhamento infantil',
    categorias: ['Infantil'],
    width: 1200, height: 1800, ratio: '3 / 4', posicao: 'center 40%',
  },
  {
    src: '/images/portfolio/gestante-familia-03.jpg',
    alt: 'Pai ouvindo a barriga da gestante enquanto a filha e a mãe encostam os narizes',
    titulo: 'Espera pelo irmãozinho',
    categorias: ['Gestantes', 'Família'],
    width: 1200, height: 1800, ratio: '3 / 4', posicao: 'center 35%',
  },
  {
    src: '/images/portfolio/infantil-aviador-01.jpg',
    alt: 'Bebê aviador sorrindo em cenário de mapa antigo e bússola',
    titulo: 'Pequeno explorador',
    categorias: ['Infantil'],
    width: 1200, height: 1800, ratio: '3 / 4', posicao: 'center 45%',
  },
  {
    src: '/images/portfolio/familia-azul-02.jpg',
    alt: 'Pais em azul e branco beijando o filho pequeno',
    titulo: 'Beijo de pai',
    categorias: ['Família', 'Ensaios'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/gestante-familia-02.jpg',
    alt: 'Família de três de branco e jeans em ensaio de gestante',
    titulo: 'Família de branco',
    categorias: ['Gestantes', 'Família'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/infantil-aviador-03.jpg',
    alt: 'Bebê aviador de olhos claros segurando a asa de um avião de madeira',
    titulo: 'Olhar de aviador',
    categorias: ['Infantil'],
    width: 1200, height: 1800, ratio: '4 / 5', posicao: 'center 30%',

  },
  {
    src: '/images/portfolio/infantil-biblico-01.jpg',
    alt: 'Bebê sentado sobre um tapete com uma Bíblia aberta, pães e uvas',
    titulo: 'Bebê e a Bíblia',
    categorias: ['Infantil'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/newborn-01.jpg',
    alt: 'Bebê recém-nascido dormindo em ensaio newborn',
    titulo: 'Ensaio Newborn',
    categorias: ['Newborn'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/newborn-02.jpg',
    alt: 'Detalhes delicados em ensaio newborn',
    titulo: 'Ensaio Newborn',
    categorias: ['Newborn'],
    width: 1200, height: 1800,
  },
  {
    src: '/images/portfolio/newborn-03.jpg',
    alt: 'Ensaio fotográfico de recém-nascido',
    titulo: 'Ensaio Newborn',
    categorias: ['Newborn'],
    width: 1200, height: 1800,
  },
]