import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

/**
 * Certifications component: lists professional certifications held by Eduardo.
 */
function Certifications() {
  const { language } = useContext(LanguageContext);

  const certifications = {
    es: [
      'Ingeniero Profesional (P.E.) – Texas, California, Florida, Minnesota, Carolina del Norte, Georgia, Luisiana (EE. UU.)',
      'Ingeniero Profesional (P.Eng.) – Ontario (Canadá)',
      'Project Management Professional (PMP®)',
      'Contratista general de edificaciones comerciales (NASCLA)'
    ],
    en: [
      'Professional Engineer (P.E.) – Texas, California, Florida, Minnesota, North Carolina, Georgia, Louisiana (USA)',
      'Professional Engineer (P.Eng.) – Ontario (Canada)',
      'Project Management Professional (PMP®)',
      'Commercial Building General Contractor (NASCLA)'
    ]
  };

  return (
    <section id="certifications">
      <h2>{language === 'es' ? 'Certificaciones' : 'Certifications'}</h2>
      <ul className="certifications-list">
        {certifications[language].map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;