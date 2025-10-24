import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { educationData } from '../data';

/**
 * Education component: displays formal degrees and postgraduate programs
 * based on the CV. Items are grouped into degrees and postgraduate courses.
 */
function Education() {
  const { language } = useContext(LanguageContext);
  const { degrees, postgrads } = educationData[language];

  return (
    <section id="education">
      <h2>{language === 'es' ? 'Educación' : 'Education'}</h2>
      <h3>{language === 'es' ? 'Grados y Másteres' : 'Degrees and Masters'}</h3>
      <ul className="education-list">
        {degrees.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong> — {item.institution} ({item.year})
          </li>
        ))}
      </ul>
      <h3>{language === 'es' ? 'Programas de Posgrado' : 'Postgraduate Programs'}</h3>
      <ul className="education-list">
        {postgrads.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong> — {item.institution} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;