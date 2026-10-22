
import paisaje from '../../assets/pastel-paisaje.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* Imagen ambiental difuminada */}
      <div className="hero__ambient" aria-hidden="true">
        <img src={paisaje} alt="" />
      </div>

      <div className="hero__layout">

        <div className="hero__content">
          <span className="hero__eyebrow">
            Pintura · Dibujo · Exploración
          </span>

          <h1>delRocío</h1>

          <p>
            Un espacio para explorar distintas formas
            de mirar, crear y experimentar con el arte.
          </p>

          <a className="hero__link" href="#obras">
            Descubrir obras
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>

        {/* Obra protagonista */}
        <div className="hero__visual">
          <img
            src={paisaje}
            alt="Paisaje en tonos pastel con flores y vegetación"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="hero__footer">
        <span>Una galería personal</span>
        <a href="#obras">Desliza para explorar ↓</a>
      </div>
    </section>
  )
}

export default Hero
