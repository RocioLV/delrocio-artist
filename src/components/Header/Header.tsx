
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <a href="#inicio" className="site-logo">
        delRocío
      </a>

      <nav aria-label="Navegación principal">
        <ul className="nav-list">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#obras">Obras</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
