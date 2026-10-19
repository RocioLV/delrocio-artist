
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeaturedGallery from './components/FeaturedGallery/FeaturedGallery'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedGallery />
        <Portfolio />
      </main>
    </>
  )
}

export default App
