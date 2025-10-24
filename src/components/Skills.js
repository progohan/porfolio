import React from 'react';

/**
 * Skills component: lists key competencies and skills.
 */
function Skills() {
  const skills = [
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
  ];
  return (
    <section id="skills">
      <h2>Competencias</h2>
      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;