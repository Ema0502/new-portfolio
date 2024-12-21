import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div className="mb-8">
        <p className={styles.sectionSubText}>MIS HERRAMIENTAS</p>
        <h2 className={styles.sectionHeadText}>Tecnoligías</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="grid place-items-center" key={technology.name}>
            <img className="w-28 h-28" src={technology.icon} alt="Programming Icon" />
            <h2>{technology.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
