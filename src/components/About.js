import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

/**
 * About component: provides a brief professional summary.
 * The content is based on the opening summary of Eduardo's CV.
 */
function About() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="about">
      <h2>{language === 'es' ? 'Sobre mí' : 'About Me'}</h2>
      <p>
        {language === 'es'
          ? `Con más de 20 años de experiencia internacional, he liderado
        proyectos de infraestructura multimillonarios en Norteamérica y
        Europa. Mi trayectoria abarca modelos de entrega P3, Diseño-Construcción
        (Design-Build), CMAR y colaborativos, obteniendo resultados
        sobresalientes mediante la optimización de costes, la gestión de equipos
        de alto rendimiento y el enfoque en la excelencia operativa. Busco
        oportunidades ejecutivas para impulsar el crecimiento empresarial y la
        excelencia operativa dentro de una empresa constructora dinámica.`
          : `With over 20 years of international experience, I have led
        multi-billion dollar infrastructure projects in North America and
        Europe. My background spans P3, Design-Build, CMAR, and collaborative
        delivery models, achieving outstanding results through cost optimization,
        high-performance team management, and a focus on operational excellence.
        I am seeking executive opportunities to drive business growth and
        operational excellence within a dynamic construction company.`}
      </p>
    </section>
  );
}

export default About;