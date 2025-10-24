import React from 'react';

/**
 * Certifications component: lists professional certifications held by Eduardo.
 */
function Certifications() {
  const certifications = [
    'Ingeniero Profesional (P.E.) – Texas, California, Florida, Minnesota, Carolina del Norte, Georgia, Luisiana (EE. UU.)',
    'Ingeniero Profesional (P.Eng.) – Ontario (Canadá)',
    'Project Management Professional (PMP®)',
    'Contratista general de edificaciones comerciales (NASCLA)'
  ];

  return (
    <section id="certifications">
      <h2>Certificaciones</h2>
      <ul className="certifications-list">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;