
import { useEffect, useRef } from 'react'
import type { Artwork } from '../../types/artwork'
import './ArtworkModal.css'

interface ArtworkModalProps {
  artwork: Artwork
  onClose: () => void
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
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar vista ampliada"
        >
          ×
        </button>

        <img
          src={artwork.image}
          alt={artwork.title}
        />

        <div className="artwork-modal__info">
          <h2>{artwork.title}</h2>
          <p>{artwork.technique}</p>

          {artwork.year && <p>{artwork.year}</p>}

          {artwork.dimensions && (
            <p>{artwork.dimensions}</p>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default ArtworkModal
