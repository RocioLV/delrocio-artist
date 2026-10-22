
import type { Artwork } from '../types/artwork'

import acuarelaFrutas from '../assets/optimized/acuarela-frutas.webp'
import gouachePaisaje from '../assets/optimized/gouache-paisaje.webp'
import gouachePaisaje2 from '../assets/optimized/gouache-paisaje2.webp'
import gouachePaisaje3 from '../assets/optimized/gouache-paisaje3.webp'
import gouacheSagradaFamilia from '../assets/optimized/gouache-sagradafamilia.webp'
import pastelFlor from '../assets/optimized/pastel-flor.webp'
import pastelPaisaje from '../assets/optimized/pastel-paisaje.webp'

export const artworks: Artwork[] = [
  {
    id: 'obra-01',
    title: 'Obra-01',
    image: acuarelaFrutas,
    technique: 'acuarela',
    year: 2025,
    dimensions: '30 × 40 cm',
    description: 'Descripción de la obra.',
    featured: false,
  },
  {
    id: 'obra-02',
    title: 'Obra 02',
    image: gouachePaisaje,
    technique: 'gouache',
    year: 2025,
    dimensions: '30 × 40 cm',
    description: 'Descripción de la obra.',   
    featured: true,
  },
  {
    id: 'obra-03',
    title: 'Obra 03',
    image: gouachePaisaje2,
    technique: 'gouache',
    year: 2025,
    dimensions: '30 × 40 cm',
    description: 'Descripción de la obra.',
    featured: true,
  },
  {
    id: 'obra-04',
    title: 'Obra 04',
    image: pastelFlor,
    technique: 'pasteles',
    featured: true,
  },
  {
    id: 'obra-05',
    title: 'Obra 05',
    image: gouacheSagradaFamilia,
    technique: 'gouache',
    featured: true,
  },
  {
    id: 'obra-06',
    title: 'Obra 06',
    image: gouachePaisaje3,
    technique: 'gouache',
    featured: false,
  },
  {
    id: 'obra-07',
    title: 'Obra 07',
    image: pastelPaisaje,
    technique: 'pasteles',
    featured: false,
  },
]
