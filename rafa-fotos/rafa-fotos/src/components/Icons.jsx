// Ícones simples (SVG) usados no site. Todos herdam a cor do texto (currentColor).

const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false }

export const IconWhatsApp = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12.012 2c-5.508 0-9.988 4.479-9.988 9.987 0 1.763.459 3.486 1.332 5.003L2 22l5.127-1.339a9.923 9.923 0 004.885 1.28h.005c5.507 0 9.987-4.479 9.987-9.987 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm5.836 14.168c-.244.688-1.427 1.315-1.968 1.369-.49.051-1.123.076-3.238-.792-2.702-1.11-4.444-3.864-4.579-4.045-.135-.18-1.097-1.462-1.097-2.788 0-1.326.698-1.977.946-2.242.248-.265.541-.33.721-.33.18 0 .36.002.518.01.168.007.394-.064.617.47.225.534.766 1.87.834 2.008.068.138.113.3.023.48-.09.18-.135.292-.27.45-.135.158-.284.353-.406.474-.135.135-.276.282-.119.552.158.27 1.222 2.01 2.822 3.435 1.282 1.142 2.361 1.496 2.698 1.663.338.168.536.14.736-.09.2-.23.856-.997 1.082-1.34.225-.342.45-.285.755-.172.305.113 1.937.913 2.27 1.078.338.165.563.248.648.39.085.143.085.828-.159 1.516z"/>
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
