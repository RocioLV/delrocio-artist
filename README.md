
# delRocío — Artist Portfolio

A personal artist portfolio and interactive gallery built with React, TypeScript, and Vite.

This project combines an editorial, minimalist visual approach with frontend development practices to create a space for showcasing original artwork.

**[View Live Website](https://rociolv.github.io/delrocio-artist/)** · **[Source Code](https://github.com/RocioLV/delrocio-artist)**

## Features

- Responsive layout for desktop and mobile devices
- Curated gallery of featured artworks
- Artwork collection with technique-based filtering
- Interactive artwork modal with additional details
- Subtle scroll-based animations and hover effects
- Optimized WebP artwork images
- Accessibility considerations, including reduced-motion support

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- Git & GitHub
- GitHub Actions
- GitHub Pages
- Sharp for image optimization

## Getting Started

Clone the repository:

```bash
git clone git@github.com:RocioLV/delrocio-artist.git
cd delrocio-artist
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── FeaturedGallery/
│   ├── Portfolio/
│   ├── ArtworkModal/
│   ├── About/
│   └── Contact/
├── data/
├── types/
└── App.tsx
```

## Technical Decisions

**Component-based architecture:** The interface is divided into reusable React components, separating the gallery, artwork details, navigation, and other sections.

**Typed artwork data:** TypeScript interfaces provide a consistent structure for artwork information, including titles, techniques, images, and optional details.

**Image optimization:** Artwork images are converted to WebP to reduce transfer size while maintaining visual quality.

**Responsive design:** CSS Grid and media queries support different screen sizes while preserving the portfolio's editorial composition.

**Automated deployment:** GitHub Actions installs dependencies, creates a production build, and deploys the application to GitHub Pages on pushes to the main branch.

## Deployment

The current live version is hosted on GitHub Pages with automated deployment through GitHub Actions.

An additional deployment using private Amazon S3 storage and Amazon CloudFront with Origin Access Control (OAC) is planned.

## Author

**Rocío Lorca Villalobos**

Frontend Developer & Artist

[GitHub](https://github.com/RocioLV)
