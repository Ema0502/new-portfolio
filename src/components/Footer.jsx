import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-transparent py-4 pt-16">
      <div className="text-center">
        <img
          className="w-12 h-auto md:w-16 mb-2 md:mb-0 mx-auto pb-4"
          src={logo}
          alt="Logo..."
        />
        <span className="text-sm md:text-base text-gray-700">
          Potenciando la excelencia tecnológica y escalando la Vanguardia
          Digital, explora una selección exclusiva de habilidades y tecnologías
          en el desarrollo full stack que redefinen la elegancia y el
          rendimiento en el mundo digital.
        </span>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-700 pt-4">Copyright ® 2025 | JR</p>
      </div>
    </footer>
  );
};

export default Footer;
