import React from 'react';

/**
 * Education component: displays formal degrees and postgraduate programs
 * based on the CV. Items are grouped into degrees and postgraduate courses.
 */
function Education() {
  const degrees = [
    {
      title: 'Grado en Derecho (en curso)',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2024 (previsto)'
    },
    {
      title: 'Máster en Derecho Internacional de los Negocios',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2022'
    },
    {
      title: 'Máster en Ingeniería Matemática y Computacional',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2021'
    },
    {
      title: 'Máster en Business Intelligence',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2020'
    },
    {
      title: 'Executive MBA en el sector de la Construcción',
      institution: 'EOI Business School, España',
      year: '2006'
    },
    {
      title: 'Máster en Ingeniería Civil',
      institution: 'Universidad de Cantabria, España',
      year: '2002'
    }
  ];

  const postgrads = [
    {
      title: 'Programa de posgrado en Cloud Computing (AWS & Azure)',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2022'
    },
    {
      title: 'Programa de posgrado en Big Data e Inteligencia Artificial',
      institution: 'Universidad Internacional de La Rioja, España',
      year: '2021'
    },
    {
      title: 'Especialización en Estructuras Metálicas y Mixtas',
      institution: 'Zigurat Global Institute of Technology',
      year: '2012'
    }
  ];

  return (
    <section id="education">
      <h2>Educación</h2>
      <h3>Grados y Másteres</h3>
      <ul className="education-list">
        {degrees.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong> — {item.institution} ({item.year})
          </li>
        ))}
      </ul>
      <h3>Programas de Posgrado</h3>
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