import React from 'react';

/**
 * Data describing each professional experience entry. Each object includes
 * the employer, position, location, dates and a list of accomplishments.
 */
const experienceData = [
  {
    company: 'Flatiron Constructors Inc.',
    position: 'Project Director',
    location: 'Washington, DC, USA',
    dates: 'Jun 2023 – Presente',
    tasks: [
      'Gestión comercial del proyecto CMAR del puente ferroviario Susquehanna River de 2.700 millones de dólares',
      'Supervisión de todas las actividades comerciales: contratos, planificación, compras, control de proyecto, comunicaciones, participación de DBE y gestión financiera',
      'Fomento de relaciones sólidas con el cliente mediante comunicación transparente y compromiso con stakeholders'
    ]
  },
  {
    company: 'Acciona Construction USA Corp.',
    position: 'Senior Project Manager',
    location: 'Atlanta, GA, USA',
    dates: 'Jun 2023 – Jun 2024',
    tasks: [
      'Excelencia tanto en la captación como en la entrega de proyectos mayores, mejorando la calidad de las propuestas y asegurando nuevos negocios',
      'Contribución a propuestas para el puente P3 de 2.300 millones de dólares I‑10 Calcasieu River y los carriles exprés SR‑400 P3 de 4.600 millones de dólares',
      'Facilitación de reuniones con stakeholders para asegurar transparencia y mantener relaciones sólidas con el cliente'
    ]
  },
  {
    company: 'SNC Lavalin Inc.',
    position: 'Project Director',
    location: 'Toronto, ON, Canadá',
    dates: 'Feb 2022 – Jun 2023',
    tasks: [
      'Gestión de proyectos valorados en hasta 1.000 millones de dólares, liderando equipos interdisciplinarios de hasta 50 profesionales',
      'Liderazgo de equipos de licitación para proyectos como EHTH Alliance, Scarborough SE PDB y Ontario Line – EGS PDB',
      'Captación de más de 600 millones de dólares en nuevos negocios, contribuyendo a un aumento del 14 % en los ingresos anuales',
      'Implementación de prácticas efectivas de gestión que mejoraron la eficiencia y productividad',
      'Construcción y mantenimiento de relaciones sólidas con clientes y stakeholders'
    ]
  },
  {
    company: 'Ferrovial Construction US & Canada',
    position: 'Technical Manager',
    location: 'Houston, TX, USA',
    dates: 'Oct 2017 – Feb 2022',
    tasks: [
      'Entrega de todos los paquetes de diseño del proyecto Design‑Build Grand Parkway (segmentos H, I‑1 e I‑2) de 950 millones de dólares seis meses antes de lo previsto, ahorrando más de un millón de dólares en costes de ingeniería',
      'Gestión de más de 300 modificaciones de diseño, mejorando la seguridad y rentabilidad del proyecto',
      'Liderazgo y dirección estratégica como director de la oficina técnica de construcción, apoyando al equipo de gestión de EE.UU.',
      'Colaboración estrecha con socios de la joint venture para asegurar el cumplimiento del contrato Design‑Build con TxDOT'
    ]
  },
  {
    company: 'Isolux Corsan USA',
    position: 'Senior Project Manager',
    location: 'Bloomington, IN, USA',
    dates: 'Ago 2014 – Oct 2017',
    tasks: [
      'Supervisión del proyecto P3 I‑69 Section 5 de 400 millones de dólares, abarcando 34 km de autopista interestatal',
      'Gestión de controles de proyecto: alcance, presupuesto, programación, gestión de proveedores y documentación técnica',
      'Colaboración con proveedores y equipos de proyecto, preparación de documentación empresarial y técnica, generación de informes mensuales',
      'Liderazgo de revisiones de proyecto y gestión de riesgos coordinando equipos de construcción e ingeniería'
    ]
  },
  {
    company: 'Team Engineering and Consulting',
    position: 'Technical Director',
    location: 'Bilbao, España',
    dates: 'Jun 2010 – Sep 2014',
    tasks: [
      'Dirección y liderazgo de equipos de diseño y supervisión para proyectos de construcción, túneles, geotecnia y estructuras con una cartera de 1.000 millones de euros',
      'Supervisión del diseño de grandes proyectos de infraestructura con más de 14 km de túneles y 5 km de puentes en ferrocarriles de alta velocidad y autopistas',
      'Expansión del ámbito de la empresa para incluir proyectos de puentes, mejorando las tarifas de diseño en un 20 %',
      'Mentoría, formación y desarrollo de más de 20 ingenieros nuevos'
    ]
  },
  {
    company: 'Fonorte',
    position: 'Senior Project Manager',
    location: 'Bilbao, España',
    dates: 'Nov 2008 – Jun 2010',
    tasks: [
      'Dirección de proyectos de construcción incluyendo mejora de diseño, presupuestos, planificación, subcontratación, compras, control de calidad, seguridad y medio ambiente',
      'Gestión de la construcción del proyecto de ferrocarril de alta velocidad Legutiano a Escoriatza, una joint venture con un presupuesto de 60 millones de euros',
      'Supervisión de las mejoras de alcantarillado de Gernika con un presupuesto de 11 millones de euros'
    ]
  },
  {
    company: 'Sacyr',
    position: 'Project Manager',
    location: 'Girona, España',
    dates: 'Sep 2005 – Nov 2008',
    tasks: [
      'Gestión de la construcción del proyecto de ferrocarril de alta velocidad Cornellà del Terri a Vilademuls con un presupuesto de 80 millones de euros',
      'Supervisión de mejora de diseño, presupuestos, planificación, subcontratación, compras, control de calidad, seguridad y medio ambiente'
    ]
  },
  {
    company: 'Prointec',
    position: 'Construction Supervision Manager',
    location: 'San Sebastián, España',
    dates: 'Ene 2003 – Sep 2005',
    tasks: [
      'Supervisión de la construcción de la carretera Urumea desde Martutene hasta Astigarraga, un proyecto de 6 km con un presupuesto de 67 millones de euros',
      'Gestión de la supervisión de la autopista de peaje AP‑1 de Eibar a Bergara, un tramo de 8 km con un presupuesto de 79 millones de euros'
    ]
  }
];

/**
 * Experience component: iterates through the experienceData array and renders
 * a formatted section for each professional engagement.
 */
function Experience() {
  return (
    <section id="experience">
      <h2>Experiencia</h2>
      {experienceData.map((item) => (
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