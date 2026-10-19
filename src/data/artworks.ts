
import type { Artwork } from '../types/artwork'

import acuarelaFrutas from '../assets/acuarela-frutas.jpg'
import gouachePaisaje from '../assets/gouache-paisaje.jpg'
import gouachePaisaje2 from '../assets/gouache-paisaje2.jpg'
import gouachePaisaje3 from '../assets/gouache-paisaje3.jpg'
import gouacheSagradaFamilia from '../assets/gouache-sagradafamilia.jpg'
import pastelFlor from '../assets/pastel-flor.jpg'
import pastelPaisaje from '../assets/pastel-paisaje.jpg'

export const artworks: Artwork[] = [
  {
    id: 'obra-01',
    title: 'Obra 01',
    image: acuarelaFrutas,
    technique: 'acuarela',
    featured: false,
  },
  {
    id: 'obra-02',
    title: 'Obra 02',
    image: gouachePaisaje,
    technique: 'gouache',
    featured: true,
  },
  {
    id: 'obra-03',
    title: 'Obra 03',
    image: gouachePaisaje2,
    technique: 'gouache',
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
