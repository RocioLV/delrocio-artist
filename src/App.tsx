
import { useEffect } from 'react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeaturedGallery from './components/FeaturedGallery/FeaturedGallery'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import './App.css'

function App() {
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(
      '.featured-gallery__intro, .portfolio__heading, .about__content h2, .contact h2'
    )

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'is-visible',
            entry.isIntersecting
          )
        })
      },
      {
        threshold: 0.15,
      }
    )

    headings.forEach((heading) => {
      heading.classList.add('section-reveal')
      observer.observe(heading)
    })

    return () => {
      observer.disconnect()
      headings.forEach((heading) => {
        heading.classList.remove(
          'section-reveal',
          'is-visible'
        )
      })
    }
  }, [])

  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedGallery />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
