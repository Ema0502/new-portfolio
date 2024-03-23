import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cSharpIcon,
  css3Icon,
  dotnetIcon,
  expressIcon,
  html5Icon,
  javaScriptIcon,
  noseJsIcon,
  postgreSqlIcon,
  reactJsIcon,
  reduxIcon,
  sequelizeIcon,
  typeScriptIcon,
  gitHubIcon,
  gitIcon,
  dockerIcon,
  ajaxIcon,
  jqueryIcon,
  webpackIcon,
  mongoDbIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Atención al cliente",
    company_name: "Graphic Ronnin",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2016 - 2019",
    points: [
      "Atención al público, mantenimiento de hardware y software, asistencia en tareas de diseño gráfico con Photoshop, Corel Draw, Gigapixel Ai, entre otros.",
    ],
  },
  {
    title: "Técnico en Reparación PC",
    company_name: "Servicio Técnico JR",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Solucionar problemas al mal funcionamiento de Sistemas y equipos de computación. Reparación de hardware, instalación de Sistema Operativo, mantenimiento, reparación, actualización y optimización con programas y drivers.",
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "E-commerce de Construcción",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Atención al publico, asistencia en tareas administrativas y consultas tecnicas.",
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Proyecto E-commerce de Autos",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Implementación LocalStorage con JWT, manejo de encriptación de la información utilizando Bcrypt, implementación y manejo del CRUD al servidor, participación de la creación de una ApiRest para los datos utilizados, entre otras tareas individual y grupalmente.",
    ],
  },
  {
    title: "Full stack Junior",
    company_name: "Pasante Full Stack en E-commerce",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Desempeñé un papel integral como Desarrollador en un Ecommerce especializado en chapas. Mis responsabilidades incluyeron el desarrollo y mantenimiento de aplicaciones web, la implementación de soluciones técnicas para mejorar la experiencia del usuario, así como la colaboración en el diseño. Potencié el manejo de frameworks como React y Node.js. Además, participé en la integración de servicios, la resolución de problemas para garantizar un rendimiento óptimo del sitio.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Resolvió rápidamente los problemas de mi PC, fue profesional, amable y resolvió todas mis inquietudes de manera clara. Mi computadora funciona como nueva, ¡gracias por su servicio de calidad y atención al cliente excepcional!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Capturó perfectamente mi visión creativa y la transformó en un diseño visualmente impactante. Cada detalle fue cuidadosamente considerado, y el resultado final superó mis expectativas. Profesionalismo, creatividad y atención al cliente de primer nivel. ¡Gracias por hacer que mi visión cobrara vida de una manera tan asombrosa!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Desde el diseño de la interfaz hasta la implementación del backend, cada fase fue manejada con profesionalismo y destreza técnica. La aplicación resultante no solo cumple con todas mis expectativas, sino que va más allá. Una persona apasionada y comprometida que realmente entiende el desarrollo integral.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
