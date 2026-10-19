
import { useEffect, useRef } from 'react'
import { artworks } from '../../data/artworks'
import './FeaturedGallery.css'

function FeaturedGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  const featuredArtworks = artworks
    .filter((artwork) => artwork.featured)
    .slice(0, 3)

  useEffect(() => {
    const gallery = galleryRef.current

    if (!gallery) return

    const items = gallery.querySelectorAll(
      '.featured-gallery__artwork'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'is-active',
            entry.isIntersecting
          )
        })
      },
      {
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0.15,
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="featured-gallery"
      id="destacadas"
      aria-labelledby="featured-title"
    >
      <div className="featured-gallery__intro">
        <span className="featured-gallery__eyebrow">
          Galería
        </span>

        <h2 id="featured-title">
          Obras seleccionadas
        </h2>
      </div>

      <div
        className="featured-gallery__grid"
        ref={galleryRef}
      >
        {featuredArtworks.map((artwork) => (
          <figure
            className="featured-gallery__artwork"
            key={artwork.id}
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              loading="lazy"
              decoding="async"
            />

            <figcaption>
              <span>{artwork.title}</span>
              <span>{artwork.technique}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default FeaturedGallery
