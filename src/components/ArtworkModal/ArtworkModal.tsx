
import { useEffect, useRef } from 'react'
import type { Artwork, Technique } from '../../types/artwork'
import './ArtworkModal.css'

interface ArtworkModalProps {
  artwork: Artwork
  onClose: () => void
}

const techniqueLabels: Record<Technique, string> = {
  carboncillo: 'Carboncillo',
  oleo: 'Óleo',
  acrilico: 'Acrílico',
  lapices: 'Lápices',
  pasteles: 'Pasteles',
  acuarela: 'Acuarela',
  mixta: 'Técnicas mixtas',
  gouache: 'Gouache',
}

function ArtworkModal({
  artwork,
  onClose,
}: ArtworkModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!dialog.open) {
      dialog.showModal()
    }

    return () => {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="artwork-modal"
      aria-label={`Vista ampliada: ${artwork.title}`}
      onClose={() => {
        if (dialogRef.current && !dialogRef.current.open) {
          onClose()
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close()
        }
      }}
    >
      <div className="artwork-modal__content">
        <button
          type="button"
          className="artwork-modal__close"
          aria-label="Cerrar vista ampliada"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>

        <img src={artwork.image} alt={artwork.title} />

        <div className="artwork-modal__info">
          <h2>{artwork.title}</h2>

          <p>{techniqueLabels[artwork.technique]}</p>

          {artwork.year != null && (
            <p>{artwork.year}</p>
          )}

          {artwork.dimensions && (
            <p>{artwork.dimensions}</p>
          )}

          {artwork.description && (
            <p className="artwork-modal__description">
              {artwork.description}
            </p>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default ArtworkModal
