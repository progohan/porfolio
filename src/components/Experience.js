import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { experienceData } from '../data';

/**
 * Experience component: iterates through the experienceData array and renders
 * a formatted section for each professional engagement.
 */
function Experience() {
  const { language } = useContext(LanguageContext);
  const data = experienceData[language];

  return (
    <section id="experience">
      <h2>{language === 'es' ? 'Experiencia' : 'Experience'}</h2>
      {data.map((item) => (
        <div key={item.company + item.dates} className="experience-item">
          <h3>{item.company}</h3>
          <div className="position">{item.position}</div>
          <div className="date-location">{item.dates} | {item.location}</div>
          <ul>
            {item.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;