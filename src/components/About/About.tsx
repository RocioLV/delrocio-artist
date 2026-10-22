
import './About.css'

function About() {
  return (
    <section
      className="about"
      id="sobre-mi"
      aria-labelledby="about-title"
    >
      <div className="about__container">
        <div className="about__visual">
          <div className="about__placeholder">
            <span>Fotografía de la artista</span>
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow">
            La artista
          </span>

          <h2 id="about-title">Sobre mí</h2>

          <p>
         Rocío Lorca dibuja y pinta desde que tiene memoria. Siempre curiosa por explorar nuevas técnicas, materiales y formas de expresión, ha encontrado en el arte un espacio para experimentar, descubrir y crear.
         
         Después de años dibujando y pintando, decide abrir este pequeño espacio para compartir sus obras, sus exploraciones y todo aquello que va tomando forma en el camino.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
