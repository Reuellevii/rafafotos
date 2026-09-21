import { useCallback, useEffect, useRef } from 'react'
import { IconChevron, IconClose } from './Icons'

// Foto ampliada. Recebe a lista atual de fotos, o índice aberto e funções para navegar/fechar.
export default function Lightbox({ fotos, indice, onFechar, onMudar }) {
  const total = fotos.length
  const foto = fotos[indice]
  const btnFechar = useRef(null)
  const caixa = useRef(null)
  const toqueInicial = useRef(null)

  const anterior = useCallback(() => onMudar((indice - 1 + total) % total), [indice, total, onMudar])
  const proxima = useCallback(() => onMudar((indice + 1) % total), [indice, total, onMudar])

  // Trava rolagem do fundo e devolve o foco ao fechar
  useEffect(() => {
    const focoAnterior = document.activeElement
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    btnFechar.current?.focus()
    return () => {
      document.body.style.overflow = overflowAnterior
      if (focoAnterior && focoAnterior.focus) focoAnterior.focus()
    }
  }, [])

  // Teclado: Esc, setas e Tab preso dentro da janela
  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === 'Escape') onFechar()
      else if (e.key === 'ArrowLeft' && total > 1) anterior()
      else if (e.key === 'ArrowRight' && total > 1) proxima()
      else if (e.key === 'Tab') {
        const focaveis = caixa.current?.querySelectorAll('button')
        if (!focaveis || !focaveis.length) return
        const primeiro = focaveis[0]
        const ultimo = focaveis[focaveis.length - 1]
        if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus() }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus() }
      }
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [anterior, proxima, onFechar, total])

  // Pré-carrega a foto anterior e a próxima para a troca ser instantânea
  useEffect(() => {
    if (total < 2) return
    ;[fotos[(indice + 1) % total], fotos[(indice - 1 + total) % total]].forEach((f) => {
      const img = new Image()
      img.src = f.src
    })
  }, [indice, fotos, total])

  // Gesto de arrastar no celular
  const aoTocar = (e) => { toqueInicial.current = e.touches[0].clientX }
  const aoSoltar = (e) => {
    if (toqueInicial.current == null || total < 2) return
    const dx = e.changedTouches[0].clientX - toqueInicial.current
    toqueInicial.current = null
    if (Math.abs(dx) > 50) (dx > 0 ? anterior() : proxima())
  }

  return (
    <div
      ref={caixa}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada: ${foto.titulo}`}
      onClick={(e) => e.target === e.currentTarget && onFechar()}
      onTouchStart={aoTocar}
      onTouchEnd={aoSoltar}
    >
      <button ref={btnFechar} type="button" className="lightbox__btn lightbox__fechar" onClick={onFechar} aria-label="Fechar">
        <IconClose />
      </button>

      {total > 1 && (
        <button type="button" className="lightbox__btn lightbox__seta lightbox__seta--esq" onClick={anterior} aria-label="Foto anterior">
          <IconChevron direction="left" />
        </button>
      )}

      <figure className="lightbox__figura" onClick={(e) => e.target === e.currentTarget && onFechar()}>
        <img key={foto.src} src={foto.src} alt={foto.alt} className="lightbox__img" />
        <figcaption className="lightbox__legenda">
          <span>{foto.titulo}</span>
          <span className="lightbox__contador" aria-live="polite">{indice + 1} / {total}</span>
        </figcaption>
      </figure>

      {total > 1 && (
        <button type="button" className="lightbox__btn lightbox__seta lightbox__seta--dir" onClick={proxima} aria-label="Próxima foto">
          <IconChevron direction="right" />
        </button>
      )}
    </div>
  )
}
