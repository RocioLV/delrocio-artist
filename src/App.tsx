import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeaturedGallery from './components/FeaturedGallery/FeaturedGallery'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
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
