
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
          Conversemos
        </h2>

        <p>
          Para consultas sobre las obras,
          colaboraciones o cualquier otra
          información, puedes escribirme.
        </p>

        <a
          className="contact__email"
          href="mailto:correo@ejemplo.com"
        >
          correo@ejemplo.com
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
