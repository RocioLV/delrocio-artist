
export type Technique =
  | 'carboncillo'
  | 'oleo'
  | 'acrilico'
  | 'lapices'
  | 'pasteles'
  | 'acuarela'
  | 'mixta'
  | 'gouache'

export interface Artwork {
  id: string
  title: string
  image: string
  technique: Technique
  year?: number
  dimensions?: string
  description?: string
  featured: boolean
}
