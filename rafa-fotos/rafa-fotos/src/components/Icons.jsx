// Ícones simples (SVG) usados no site. Todos herdam a cor do texto (currentColor).

const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false }

export const IconWhatsApp = ({ size = 22 }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.5}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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