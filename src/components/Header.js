import React from 'react';

/**
 * Header component: renders the top navigation and hero section of the portfolio.
 * It contains the candidate's name, tagline and navigation links to different sections.
 */
function Header() {
  return (
    <header id="home">
      <nav>
        <div className="logo">Eduardo F. Ortiz</div>
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Competencias</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#certifications">Certificaciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <h1>Eduardo Fernández Ortiz</h1>
      <p className="tagline">Director de Proyectos | Líder en Desarrollo de Infraestructuras</p>
    </header>
  );
}

export default Header;