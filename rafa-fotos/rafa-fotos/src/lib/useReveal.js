import { useEffect, useRef } from 'react'

// Faz o elemento aparecer suavemente quando entra na tela (uma única vez).
// Se o visitante prefere menos movimento, nada é animado.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzir || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
