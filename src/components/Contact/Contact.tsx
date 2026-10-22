
import './Contact.css'

function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <span className="contact__eyebrow">
          Contacto
        </span>

        <h2 id="contact-title">
          Por aquí nos encontramos
        </h2>

        <p>
          Por una obra, una idea o simplemente para saludar.
        </p>

        <a
          className="contact__email"
          href="mailto:lorcavillalobos@gmail.com"
        >
          lorcavillalobos@gmail.com
        </a>

        <div className="contact__social">
          <span>Redes sociales</span>

          {/* Agregaremos los enlaces reales próximamente */}
        </div>
      </div>
    </section>
  )
}

export default Contact
