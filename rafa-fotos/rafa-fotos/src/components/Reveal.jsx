import { useReveal } from '../lib/useReveal'

// Envolve qualquer conteúdo para ele aparecer suavemente ao entrar na tela.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...resto }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...resto}>
      {children}
    </Tag>
  )
}
