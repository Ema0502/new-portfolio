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
  jqueryIcon,
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
  swaggerIcon
} from "../assets";
import imgDogo from "../assets/img/Captura de pantalla (54).png";
import imgPokemon from "../assets/img/Captura de pantalla (56).png";
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
    name: "Azure DevOps",
    icon: azureDevopsIcon,
  },
  {
    name: "Visual Studio",
    icon: visualstudioIcon,
  },
  {
    name: "Visual Studio Code",
    icon: visualstudiocodeIcon,
  },
];

const experiences = [
  {
    title: "Atención al cliente",
    company_name: "Graphic Ronnin",
    icon: programmingIcon,
    iconBg: "#383E56",
    date: "2016 - 2019",
    points: [
      "Atención al público, mantenimiento de hardware y software, asistencia en tareas de diseño gráfico con Photoshop, Corel Draw, Gigapixel Ai, entre otros.",
    ],
  },
  {
    title: "Técnico en Reparación PC",
    company_name: "Servicio Técnico JR",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Solucionar problemas al mal funcionamiento de Sistemas y equipos de computación. Reparación de hardware, instalación de Sistema Operativo, mantenimiento, reparación, actualización y optimización con programas y drivers.",
    ],
  },
  {
    title: "Técnico y Administrativo",
    company_name: "E-commerce de Construcción",
    icon: programmingIcon,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Me dediqué a atender al público de manera amigable y efectiva, asegurándome de que cada cliente se sintiera valorado y bienvenido. También llevé a cabo tareas administrativas, como la gestión de archivos y la coordinación de agendas, además de resolver consultas técnicas de los clientes.",
    ],
  },
  {
    title: "Desarrollador Full stack",
    company_name: "Proyecto E-commerce de Autos",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Implementación LocalStorage con JWT, manejo de encriptación de la información utilizando Bcrypt, implementación y manejo del CRUD al servidor, participación de la creación de una ApiRest para los datos utilizados, entre otras tareas individual y grupalmente.",
    ],
  },
  {
    title: "Full stack Junior",
    company_name: "Pasante Full Stack en E-commerce",
    icon: programmingIcon,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Desempeñé un papel como Desarrollador en un Ecommerce especializado en chapas. Mis responsabilidades incluyeron el desarrollo y mantenimiento de aplicaciones web, la implementación de soluciones técnicas para mejorar la experiencia del usuario, así como la colaboración en el diseño. Participé en la integración de servicios, la resolución de problemas para garantizar un rendimiento óptimo del sitio.",
    ],
  },
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
        name: "Nodejs",
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
        name: "Nodejs",
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
