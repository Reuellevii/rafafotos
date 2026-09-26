// Ícones simples (SVG) usados no site. Todos herdam a cor do texto (currentColor).

const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false }

export const IconWhatsApp = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12.012 2c-5.508 0-9.988 4.479-9.988 9.988 0 1.757.457 3.47 1.326 4.977l-1.41 5.151 5.271-1.383c1.455.793 3.097 1.213 4.798 1.213 5.508 0 9.988-4.479 9.988-9.988s-4.48-9.988-9.985-9.988zm5.83 14.286c-.244.686-1.413 1.312-1.978 1.396-.505.075-1.144.106-1.848-.117-.425-.135-.972-.316-1.672-.618-2.943-1.27-4.864-4.234-5.011-4.43-.146-.195-1.2-1.593-1.2-3.037 0-1.444.757-2.155 1.026-2.448.269-.293.586-.366.782-.366l.562.01c.18 0 .422-.007.661.564.244.588.834 2.03.908 2.177.073.146.122.318.024.513-.098.195-.147.317-.293.489-.146.171-.308.382-.44.513-.146.146-.298.306-.128.598.17.292.756 1.248 1.626 2.023 1.118.997 2.062 1.305 2.355 1.451.293.146.464.122.635-.073.171-.195.733-.855.928-1.147.195-.293.391-.244.684-.135.293.108 1.857.875 2.175 1.034.318.159.531.237.604.36.073.123.073.712-.171 1.398z"/>
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