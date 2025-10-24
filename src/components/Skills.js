import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

/**
 * Skills component: lists key competencies and skills.
 */
function Skills() {
  const { language } = useContext(LanguageContext);

  const skills = {
    es: [
      'Planificación estratégica y ejecución',
      'Gestión de proyectos y programas',
      'Modelos de entrega P3, DB, CMAR, PDB y Alliance',
      'Liderazgo de equipos multidisciplinarios',
      'Compromiso y comunicación con stakeholders',
      'Optimización de costes y value engineering',
      'Negociación y gestión contractual',
      'Evaluación y mitigación de riesgos',
      'Analítica de datos y aplicaciones de IA',
      'Arquitecturas de computación en la nube (AWS y Azure)',
      'Gestión comercial',
      'Ingeniería civil',
      'Mentoría y desarrollo de talento',
      'Innovación y mejora continua'
    ],
    en: [
      'Strategic planning and execution',
      'Project and program management',
      'P3, DB, CMAR, PDB, and Alliance delivery models',
      'Multidisciplinary team leadership',
      'Stakeholder engagement and communication',
      'Cost optimization and value engineering',
      'Negotiation and contract management',
      'Risk assessment and mitigation',
      'Data analytics and AI applications',
      'Cloud computing architectures (AWS and Azure)',
      'Commercial management',
      'Civil engineering',
      'Mentoring and talent development',
      'Innovation and continuous improvement'
    ]
  };

  return (
    <section id="skills">
      <h2>{language === 'es' ? 'Competencias' : 'Skills'}</h2>
      <ul className="skills-grid">
        {skills[language].map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;