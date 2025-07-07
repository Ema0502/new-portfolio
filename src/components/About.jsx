import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p>
        Soy Full Stack Developer con una sólida trayectoria en la creación de
        soluciones tecnológicas. A lo largo de mi carrera he trabajado con
        arquitecturas MFE, microservicios y aplicaciones
        monolíticas, lo que me ha permitido desarrollar una visión integral en
        el diseño y construcción de sistemas escalables y eficientes.
      </p>

      <p className="mt-4">
        Mi experiencia en proyectos reales me ha brindado la oportunidad de:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Aplicar buenas prácticas de desarrollo (S.O.L.I.D., CI/CD, pruebas unitarias).</li>
        <li>Optimizar procesos de despliegue y mantenimiento mediante prácticas DevOps.</li>
        <li>Colaborar de manera efectiva en equipos multidisciplinarios, coordinando con diseñadores (Figma), testers y product owners.</li>
      </ul>

      <p className="mt-4">
        Me apasiona resolver problemas complejos a través de la programación y
        siempre busco aprender y mejorar. Si puedo
        aportar en tu proyecto, no dudes en contactarme.
      </p>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
