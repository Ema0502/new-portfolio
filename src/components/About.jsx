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

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy Full Stack Developer con enfoque en el Back-end y una sólida trayectoria en la creación de soluciones tecnológicas. A lo largo de mi carrera he trabajado con arquitecturas de Micro Frontends (MFE), microservicios y aplicaciones monolíticas, lo que me ha permitido desarrollar una visión integral en el diseño y construcción de sistemas escalables y eficientes. Mi experiencia en proyectos reales me ha brindado la oportunidad de aplicar buenas prácticas, optimizar procesos y colaborar de manera efectiva en equipos multidisciplinarios. Me apasiona resolver problemas complejos a través de la programación y siempre busco aprender y mejorar en cada reto que enfrento. Si puedo aportar en tu proyecto, no dudes en contactarme.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
