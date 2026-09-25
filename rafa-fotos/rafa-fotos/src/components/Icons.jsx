// Ícones simples (SVG) usados no site. Todos herdam a cor do texto (currentColor).

const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false }

export const IconWhatsApp = ({ size = 22 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    aria-hidden="true" 
    focusable="false"
    style={{ display: 'block', margin: 'auto' }} // Garante centralização perfeita
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.013L0 24l6.135-1.61a11.81 11.81 0 005.91 1.586h.005c6.636 0 12.05-5.414 12.05-12.05a11.82 11.82 0 00-3.53-8.513z"/>
  </svg>
)

export const IconInstagram = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

export const IconMail = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const IconPin = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
)

export const IconClose = ({ size = 24 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}><path d="M5 5l14 14M19 5 5 19" /></svg>
)

export const IconChevron = ({ direction = 'right', size = 26 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5} style={{ transform: direction === 'left' ? 'scaleX(-1)' : undefined }}>
    <path d="m9 5 7 7-7 7" />
  </svg>
)

// Ícones dos diferenciais
export const IconAbertura = ({ size = 40 }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3l3.2 5.5M21 12h-6.4M17.5 19.5 14.3 14M12 21l-3.2-5.5M3 12h6.4M6.5 4.5 9.7 10" />
  </svg>
)

export const IconOlho = ({ size = 40 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
)

export const IconFolha = ({ size = 40 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M5 19c0-8 5-13.5 14-14 .3 9-5 14-13 14" />
    <path d="M5 19c2.5-4 5.5-7 9-9" />
  </svg>
)

export const IconCoracao = ({ size = 40 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />
  </svg>
)

export const ICONES_DIFERENCIAIS = {
  abertura: IconAbertura,
  olho: IconOlho,
  folha: IconFolha,
  coracao: IconCoracao,
}

export const IconCamera = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
)