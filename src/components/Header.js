import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

/**
 * Header component: renders the top navigation and hero section of the portfolio.
 * It contains the candidate's name, tagline and navigation links to different sections.
 */
function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header id="home">
      <nav>
        <div className="logo">Eduardo F. Ortiz</div>
        <ul>
          <li><a href="#about">{language === 'es' ? 'Sobre mí' : 'About'}</a></li>
          <li><a href="#skills">{language === 'es' ? 'Competencias' : 'Skills'}</a></li>
          <li><a href="#experience">{language === 'es' ? 'Experiencia' : 'Experience'}</a></li>
          <li><a href="#education">{language === 'es' ? 'Educación' : 'Education'}</a></li>
          <li><a href="#certifications">{language === 'es' ? 'Certificaciones' : 'Certifications'}</a></li>
          <li><a href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
        </ul>
        <button onClick={toggleLanguage}>{language === 'es' ? 'English' : 'Español'}</button>
      </nav>
      <h1>Eduardo Fernández Ortiz</h1>
      <p className="tagline">{language === 'es' ? 'Director de Proyectos | Líder en Desarrollo de Infraestructuras' : 'Project Director | Leader in Infrastructure Development'}</p>
    </header>
  );
}

export default Header;