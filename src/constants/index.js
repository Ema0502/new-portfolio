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
import imgToolkit from "../assets/img/Captura de pantalla 2025-02-01 171640.png";
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
    title: "Desarrollador Full stack",
    company_name: "Background S.A.S.",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "nov/2024 - actualidad",
    points: [
      "Participé en el análisis, desarrollo y refactorización de una aplicación monolítica en Angular con estilos gestionados mediante SCSS, implementando buenas prácticas de arquitectura y optimización de rendimiento.",
      "Implementé y optimicé componentes reutilizables, aplicando principios de diseño S.O.L.I.D. y patrones de diseño para mejorar la calidad y la escalabilidad del frontend.",
      "Desarrollé funcionalidades backend en C# y .NET Core, gestionando lógica de negocio y acceso a datos en SQL Server dentro de la misma solución monolítica.",
      "Documenté endpoints y flujos de datos con Swagger, y validé integraciones mediante Postman, garantizando una API clara y confiable.",
      "Colaboré con el equipo de DevOps para configurar pipelines de CI/CD, favoreciendo despliegues automatizados y reduciendo el tiempo de entrega.",
      "Participé en reuniones diarias y demos de Sprint usando Scrum, coordinándome con diseñadores que trabajaban en Figma y con el equipo en Jira y Microsoft Teams.",
      "Entorno: C#, .NET Core, Angular, SCSS, SQL Server, Arquitectura Monolítica, Swagger, Postman, Figma, GitLab, Agile/Scrum, DevOps."
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Background S.A.S.",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "feb/2024 - nov/2024",
    points: [
      "Participé en el análisis, desarrollo y refactorización de micro-frontends utilizando Angular, Tailwind CSS y Bootstrap, implementando buenas prácticas de arquitectura y optimización de rendimiento.",
      "Desarrollé y mantuve APIs RESTful en C# y .NET Core integradas con SQL Server, contribuyendo a la modernización del backend basado en .NET Framework 4.8 y adoptando arquitecturas de microservicios escalables.",
      "Realicé pruebas unitarias y utilicé herramientas como Swagger y Postman para documentar y garantizar la calidad de las APIs desarrolladas.",
      "Colaboré con equipos multidisciplinarios para definir requisitos, integrar diseños elaborados en Figma y asegurar la interoperabilidad entre los nuevos módulos y los sistemas existentes.",
      "Participé en ceremonias ágiles (Scrum), colaborando en la planificación de sprints y gestión de tareas utilizando Jira y Microsoft Teams.",
      "Apliqué prácticas de DevOps para optimizar los procesos de integración y despliegue continuo.",
      "Entorno: C#, .NET Core, .NET Framework 4.8, Angular, Tailwind CSS, Bootstrap, Azure, SQL Server, Microservicios, Swagger, Postman, Figma, GitLab, Agile/Scrum."
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Background S.A.S.",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "ene/2024 - feb/2024",
    points: [
      "Participé en el desarrollo de una aplicación en Power Apps con una interfaz intuitiva para la carga de imágenes y archivos PDF.",
      "Configuré flujos en Power Automate que orquestan el envío de los documentos cargados hacia Azure Document Intelligence para su procesamiento inteligente.",
      "Implementé la integración con Azure para que Document Intelligence lea el contenido de los PDFs, almacene una copia en la nube (Azure Blob Storage) y devuelva los datos extraídos en formato JSON.",
      "Construí la lógica en Power Apps para recibir y mostrar dinámicamente el JSON retornado por Power Automate, garantizando al usuario una experiencia fluida y eficiente.",
      "Colaboré con el equipo de infraestructura en la creación de pipelines de CI/CD y la gestión de recursos en Azure, asegurando despliegues automatizados y entornos estables.",
      "Entorno: Power Apps, Power Automate, Azure Document Intelligence, Azure Blob Storage, JSON, CI/CD en Azure, Agile/Scrum."
    ],
  },
  {
    title: "Técnico en Reparación PC",
    company_name: "Servicio Técnico JR",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "ene/2018 - ene/2023",
    points: [
      "Encargado de diagnosticar y solucionar problemas relacionados con el mal funcionamiento de sistemas y equipos de computación. Realizo reparaciones de hardware, instalación y actualización de sistemas operativos, así como mantenimiento y optimización de equipos mediante programas y controladores adecuados.",
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
    name: "JR Toolkit",
    description:
      "El toolkit ofrece una colección de componentes reutilizables como botones, tablas y formularios. Los usuarios pueden importarlos fácilmente para acelerar el desarrollo y mantener consistencia visual.",
    tags: [
      {
        name: "TypeScrit",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: imgToolkit,
    source_code_link: "https://github.com/Ema0502/jr-toolkit",
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
