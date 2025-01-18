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
  nodejs,
  mongodb,
  git,
  docker,
  programmingIcon,
  cSharpIcon,
  dotnetIcon,
  expressIcon,
  postgreSqlIcon,
  sequelizeIcon,
  ajaxIcon,
  gitHubIcon,
  webpackIcon,
  awsIcon,
  netlifyIcon,
  visualstudioIcon,
  visualstudiocodeIcon,
  jestIcon,
  sqlServerIcon,
  entityFrameworkIcon,
  aspnetcoreIcon,
  angularIcon,
  rxjsIcon,
  bootstrapIcon,
  azureDevopsIcon,
  tailwindIcon,
  pythonIcon,
  graphqlIcon,
  swaggerIcon,
  powerAppsIcon,
  powerAutomateIcon,
  aiBuilderIcon,
  aiDocumentIntelligenceIcon
} from "../assets";
import imgDogo from "../assets/img/Captura de pantalla (54).png";
import imgEncodedText from "../assets/img/Captura de pantalla 2024-02-01 171640.png";
import imgToDo from "../assets/img/Captura de pantalla 2024-01-31 155313.png";
import imgVehiBuy from "../assets/img/Captura de pantalla 2023-09-27 153019.png";
import imgSwagger from "../assets/img/Sin título-1.jpg";
import imgClient from "../assets/img/Sin título-2.jpg";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrolador Web",
    icon: web,
  },
  {
    title: "Diseñador Gráfico",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Creador Contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Python",
    icon: pythonIcon,
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
    name: "C#",
    icon: cSharpIcon,
  },
  {
    name: "Angular",
    icon: angularIcon,
  },
  {
    name: "RxJs",
    icon: rxjsIcon,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "WebPack",
    icon: webpackIcon,
  },
  {
    name: "Ajax",
    icon: ajaxIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "Node Js",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: expressIcon,
  },
  {
    name: "PostgreSQL",
    icon: postgreSqlIcon,
  },
  {
    name: "Sequelize",
    icon: sequelizeIcon,
  },
  {
    name: "Entity Framework",
    icon: entityFrameworkIcon,
  },
  {
    name: "SQL Server",
    icon: sqlServerIcon,
  },
  {
    name: ".NET",
    icon: dotnetIcon,
  },
  {
    name: "ASP.NET Core",
    icon: aspnetcoreIcon,
  },
  {
    name: "Swagger",
    icon: swaggerIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: gitHubIcon,
  },
  {
    name: "Jest",
    icon: jestIcon,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Power Apps",
    icon: powerAppsIcon,
  },
  {
    name: "Power Automate",
    icon: powerAutomateIcon,
  },
  {
    name: "ai Builder",
    icon: aiBuilderIcon,
  },
  {
    name: "AI Document Intelligence",
    icon: aiDocumentIntelligenceIcon,
  }
];

const experiences = [
  {
    title: "Técnico en Reparación PC",
    company_name: "Servicio Técnico JR",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Encargado de diagnosticar y solucionar problemas relacionados con el mal funcionamiento de sistemas y equipos de computación. Realizo reparaciones de hardware, instalación y actualización de sistemas operativos, así como mantenimiento y optimización de equipos mediante programas y controladores adecuados.",
    ],
  },
  {
    title: "Full stack Junior",
    company_name: "Pasante Full Stack en E-commerce",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Como Desarrollador en un Ecommerce especializado en chapas, fui responsable del desarrollo y mantenimiento de aplicaciones web, implementando soluciones técnicas para optimizar la experiencia del usuario. Colaboré en el diseño de nuevas funcionalidades, la integración de servicios y la resolución de problemas para asegurar el rendimiento y la estabilidad del sitio.",
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Plataforma Integral de RRHH",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Poseo experiencia en Power Apps, Power Automate y Azure Document Intelligence para la creación de soluciones automatizadas con AI. He participado en la creación de una aplicación en Power Apps con una interfaz de usuario donde los usuarios cargan archivos imagenes y archivos PDF. A través de Power Automate, gestioné el flujo de datos, enviando los archivos cargados a Azure Document Intelligence para su procesamiento. Azure se encarga de leer el contenido del PDF, guarda una copia en la nube y devuelve los datos extraídos en formato JSON. Finalmente, Power Apps muestra el JSON retornado por Power Automate, proporcionando al usuario la información procesada de manera eficiente.",
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Innovation and Strategy",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "He trabajado con tecnologías avanzadas en el desarrollo tanto de frontend como de backend. En el frontend, he utilizado Angular, Tailwind CSS y Bootstrap para crear interfaces de usuario modernas y responsivas, incorporando Micro Frontends (MFE) para una arquitectura modular. En el backend, he trabajado con C# y .NET para desarrollar APIs RESTful y gestionar bases de datos con SQL Server, además de implementar arquitecturas basadas en microservicios para soluciones más escalables. Cuento con experiencia en herramientas como Swagger y Postman para pruebas y documentación de APIs, y participo en proyectos ágiles con Scrum, utilizando Jira y Microsoft Teams para la gestión y colaboración. También tengo conocimientos en prácticas DevOps y en colaboración con equipos de diseño a través de Figma."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Resolvió rápidamente los problemas de mi PC, fue profesional, amable y resolvió todas mis inquietudes de manera clara. Mi computadora funciona como nueva, ¡gracias por su servicio de calidad y atención al cliente excepcional!",
    name: "Sofía Rodríguez",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Capturó perfectamente mi visión creativa y la transformó en un diseño visualmente impactante. Profesionalismo, creatividad y atención al cliente de primer nivel. ¡Gracias por hacer que mi visión cobrara vida!",
    name: "Santiago Díaz",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Desde el diseño de la interfaz hasta la implementación del backend, cada fase fue manejada con profesionalismo y destreza técnica. Una persona apasionada y comprometida que realmente entiende el desarrollo integral.",
    name: "Fernanda López",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce VehiBuy",
    description:
      "Un sitio web para comprar y vender autos. Vendedores pueden listar, fijar precios y gestionar transacciones seguras. Compradores exploran opciones, comparan y compran en línea con comunicación y pagos seguros.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Express Js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreeSQL",
        color: "orange-text-gradient",
      },
    ],
    image: imgVehiBuy,
    source_code_link:
      "https://github.com/GeroPazPapa1/Proyecto-Final-De-La-Graduacion",
  },
  {
    name: "ToDo Ts",
    description:
      "Permite la gestión de tareas, permite a los usuarios organizar y administrar sus actividades diarias de manera eficiente. Los usuarios pueden crear listas de tareas o tacharlas para indicar que están en progreso o canceladas",
    tags: [
      {
        name: "Vite/React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: imgToDo,
    source_code_link: "https://github.com/Ema0502/ToDo-App-Ts",
  },
  {
    name: "Core Api",
    description:
      "Esta API facilita la gestión de datos entre diferentes capas de la aplicación. Los controladores manejan las solicitudes HTTP, mientras que AutoMapper se encarga de mapear automáticamente los objetos entre las entidades del modelo y los DTOs.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Swagger",
        color: "green-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "orange-text-gradient",
      },
    ],
    image: imgSwagger,
    source_code_link: "https://github.com/Ema0502/WebApplication1",
  },
  {
    name: "E-commerce Client",
    description:
      "Este ecommerce permite a los usuarios crear cuentas, explorar productos, agregarlos al carrito y realizar compras de manera fácil y segura. La interfaz es muy intuitiva y sencilla para los usuarios.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "RxJs",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "AuthGuard",
        color: "orange-text-gradient",
      },
    ],
    image: imgClient,
    source_code_link: "https://github.com/Ema0502/new-project-ng",
  },
  {
    name: "Encoded Text",
    description:
      "El sitio ofrece una herramienta para encriptar y desencriptar mensajes de forma segura. Los usuarios ingresan su mensaje, eligen un método de encriptación y comparten el mensaje encriptado y viceversa",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: imgEncodedText,
    source_code_link: "https://github.com/Ema0502/Encoded-Text",
  },
  {
    name: "Dogs App",
    description:
      "Permite a los usuarios agregar, editar y eliminar perros de una lista con detalles como nombre, raza y edad. La interfaz es intuitiva, con botones claramente etiquetados para una gestión rápida.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Express Js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreeSQL",
        color: "orange-text-gradient",
      },
    ],
    image: imgDogo,
    source_code_link: "https://github.com/Ema0502/PI-Dogs-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
