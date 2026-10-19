
import { useState } from 'react'
import { artworks } from '../../data/artworks'
import type { Technique } from '../../types/artwork'
import './Portfolio.css'

type Filter = Technique | 'todas'

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

function Portfolio() {
  const [selectedFilter, setSelectedFilter] =
    useState<Filter>('todas')

  // Solo mostramos filtros con obras disponibles
  const availableTechniques = Array.from(
    new Set(artworks.map((artwork) => artwork.technique))
  )

  const filteredArtworks =
    selectedFilter === 'todas'
      ? artworks
      : artworks.filter(
          (artwork) => artwork.technique === selectedFilter
        )

  return (
    <section
      className="portfolio"
      id="obras"
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio__heading">
        <span className="portfolio__eyebrow">
          Portafolio
        </span>

        <h2 id="portfolio-title">Obras</h2>
      </div>

      <div
        className="portfolio__filters"
        role="group"
        aria-label="Filtrar obras por técnica"
      >
        <button
          type="button"
          aria-pressed={selectedFilter === 'todas'}
          onClick={() => setSelectedFilter('todas')}
        >
          Todas
        </button>

        {availableTechniques.map((technique) => (
          <button
            key={technique}
            type="button"
            aria-pressed={selectedFilter === technique}
            onClick={() => setSelectedFilter(technique)}
          >
            {techniqueLabels[technique]}
          </button>
        ))}
      </div>

      <p className="portfolio__count" role="status">
        {filteredArtworks.length}
        {filteredArtworks.length === 1
          ? ' obra'
          : ' obras'}
      </p>

      <div className="portfolio__grid">
        {filteredArtworks.map((artwork) => (
          <figure
            className="portfolio__artwork"
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
              <span>
                {techniqueLabels[artwork.technique]}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
