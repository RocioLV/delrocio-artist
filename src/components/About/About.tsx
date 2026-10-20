
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
            Este espacio estará dedicado a presentar
            a la artista, su trayectoria y su relación
            con las distintas técnicas pictóricas.
          </p>

          <p>
            Próximamente incorporaremos una biografía
            personal y una descripción de su trabajo,
            utilizando información proporcionada
            directamente por ella.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
