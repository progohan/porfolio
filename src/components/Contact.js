import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { icon, config } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Prevent FontAwesome from adding its default CSS since we style the icons manually
config.autoAddCss = false;

/**
 * Contact component: displays contact information with corresponding icons.
 */
function Contact() {
  const { language } = useContext(LanguageContext);
  const phoneIcon = icon(faPhone, { styles: { color: '#2b2e4a' } }).html.join('');
  const emailIcon = icon(faEnvelope, { styles: { color: '#2b2e4a' } }).html.join('');
  const locationIcon = icon(faMapMarkerAlt, { styles: { color: '#2b2e4a' } }).html.join('');
  const linkedinIcon = icon(faLinkedin, { styles: { color: '#2b2e4a' } }).html.join('');

  return (
    <section id="contact">
      <h2>{language === 'es' ? 'Contacto' : 'Contact'}</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span dangerouslySetInnerHTML={{ __html: locationIcon }} />
          <span>Washington, DC, USA</span>
        </div>
        <div className="contact-item">
          <span dangerouslySetInnerHTML={{ __html: phoneIcon }} />
          <span>+1&nbsp;410&nbsp;746&nbsp;4264</span>
        </div>
        <div className="contact-item">
          <span dangerouslySetInnerHTML={{ __html: emailIcon }} />
          <span>
            <a href="mailto:efernandezortiz@ciccp.es">efernandezortiz@ciccp.es</a>
          </span>
        </div>
        <div className="contact-item">
          <span dangerouslySetInnerHTML={{ __html: linkedinIcon }} />
          <span>
            <a
              href="https://www.linkedin.com/in/eduardo-fernandez-ortiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;