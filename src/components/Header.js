import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import hero from '../assets/hero.png';

/**
 * Header component: renders the top navigation and hero section of the portfolio.
 * It contains the candidate's name, tagline and navigation links to different sections.
 */
function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const headerBg = {
    backgroundImage: `linear-gradient(rgba(0,12,34,0.6), rgba(0,12,34,0.6)), url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <header id="home" style={headerBg}>
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