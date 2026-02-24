import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { images } from "@/assets/index.js";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Pilates Web App",
      description:
        "Aplicación web para gestión de clases de pilates con reservas y panel de administración.",
      fullDescription:
        "Aplicación web para estudios de pilates que permite a los usuarios iniciar sesión con google, ver y reservar clases, visualizar posts y gestionar sus reservas. El panel de administración permite a los administradores iniciar sesion con google (valida rol de administrador para accesar), gestionar clases, posts y usuarios.",
      image: images.pilates,
      images: [
        images.pilates1,
        images.pilates2,
        images.pilates3,
        images.pilates4,
      ],
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Clerk",
        "Cloudinary",
      ],
      github: "https://github.com/robertomattus/pilates",
      demo: "https://demo-pilates-app.vercel.app/",
      featured: true,
      keyFeatures: [
        "Autenticación y autorización con Google",
        "Gestión de usuarios y control de roles (admin/usuario)",
        "Reserva de clases con control de disponibilidad",
        "Visualización de clases y posts informativos",
        "Panel de administración completo para gestionar clases, posts y usuarios",
        "Validación de acceso para administradores mediante rol verificado",
        "Diseño responsivo y experiencia optimizada para dispositivos móviles",
        "Base de datos en tiempo real para actualizaciones instantáneas de reservas",
      ],
      role: "Full Stack Developer",
    },
    {
      id: 2,
      title: "Food Delivery Web App",
      description:
        "Aplicación web de delivery de comida con carrito de compras, sistema de pedidos y panel de administración.",
      fullDescription:
        "Aplicación web de delivery de comida que permite a los usuarios registrarse e iniciar sesión, explorar el menú de productos, agregar artículos al carrito y realizar pedidos. Los clientes pueden ingresar su dirección de entrega y elegir entre pago en efectivo o tarjeta. El panel de administración permite gestionar el catálogo de productos y supervisar todas las órdenes en tiempo real.",
      image: images.foodDelivery,
      images: [
        images.foodDel1,
        images.foodDel2,
        images.foodDel3,
        images.foodDel4,
      ],
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "Stripe Payments",
      ],
      github: "https://github.com/robertomattus/food-delivery-frontend",
      demo: "https://food-delivery-frontend-jet.vercel.app",
      featured: false,
      keyFeatures: [
        "Sistema de autenticación con correo electrónico y contraseña",
        "Catálogo de productos con menú interactivo",
        "Carrito de compras con gestión de cantidades y totales",
        "Sistema de checkout con captura de dirección de entrega",
        "Múltiples métodos de pago (efectivo y tarjeta)",
        "Gestión completa de pedidos y seguimiento de estado",
        "Panel de administración para gestionar productos y órdenes",
        "Diseño responsivo optimizado para ordenar desde cualquier dispositivo",
        "Actualización en tiempo real del estado de las órdenes",
      ],
      role: "Full Stack Developer",
    },
    {
      id: 3,
      title: "QR Generator Web App",
      description:
        "Aplicación web para generar códigos QR personalizados con diferentes formatos y estilos.",
      fullDescription:
        "Aplicación web que permite a los usuarios generar códigos QR personalizados con diferentes formatos, estilos y opciones de personalización. Los usuarios pueden ingresar texto o URL, seleccionar el estilo del código QR, y descargarlo en diferentes formatos como PNG o SVG. El sistema incluye un panel de administración para gestionar las configuraciones predeterminadas del generador.",
      image: images.qr,
      images: [images.qr, images.qr1],
      technologies: ["React", "Javascript", "Tailwind CSS"],
      github: "https://github.com/robertomattus/QR-Generator.git",
      demo: "https://qr-generatorl.vercel.app/",
      featured: false,
      keyFeatures: [
        "Generación de códigos QR personalizados",
        "Opciones de personalización de estilo y formato",
        "Descarga de códigos QR en PNG y SVG",
      ],
      role: "Frontend Developer",
    },
    {
      id: 4,
      title: "Lazyena Landing Page",
      description: "Landing page corporativa para Grupo Lazyena",
      fullDescription:
        "Landing page corporativa desarrollada para Grupo Lazyena S.C., empresa especializada en la operación, mantenimiento y diseño de plantas de tratamiento de aguas residuales. El sitio presenta información institucional como historia, misión, visión, valores, servicios y principales clientes, permitiendo a los usuarios conocer la empresa, sus soluciones industriales y establecer contacto directo para cotizaciones y asesoría técnica. La página fue diseñada con enfoque empresarial, navegación clara y diseño responsivo para mejorar la presencia digital de la compañía.",
      image: images.lazyena,
      images: [
        images.lazyena1,
        images.lazyena2,
        images.lazyena3,
        images.lazyena4,
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/robertomattus/lazyena-landing",
      demo: "https://lazyena.vercel.app/",
      featured: false,
      keyFeatures: [
        "Sección institucional con historia, misión, visión y valores empresariales",
        "Presentación estructurada de servicios industriales especializados",
        "Diseño corporativo enfocado en empresas del sector ambiental e industrial",
        "Sección de clientes y logros relevantes de la empresa",
        "Información de contacto y medios de comunicación directa",
        "Navegación intuitiva optimizada para experiencia de usuario",
        "Diseño completamente responsivo para dispositivos móviles y escritorio",
        "Optimización visual para fortalecer la presencia digital empresarial",
        "Arquitectura frontend moderna basada en componentes reutilizables",
      ],
      role: "Frontend Developer",
    },
    {
      id: 5,
      title: "Analyze Landing Page",
      description:
        "Landing page corporativa para Analyze Testing Group, laboratorio acreditado especializado en análisis de calidad de agua y servicios ambientales.",

      fullDescription:
        "Landing page corporativa desarrollada para Analyze Testing Group, un laboratorio de ensayo acreditado bajo la norma NMX-EC-17025-IMNC-2018 y aprobado por CONAGUA para realizar análisis de calidad de agua. El sitio web presenta información institucional de la empresa, incluyendo su historia, misión, visión, valores, certificaciones, servicios especializados y sectores industriales atendidos.\n\nLa plataforma fue diseñada como una página informativa moderna orientada a fortalecer la presencia digital del laboratorio, facilitar el acceso a información clave para clientes potenciales y comunicar su experiencia en muestreo y análisis de aguas residuales. Incluye secciones estructuradas para servicios normativos NOM-SEMARNAT, logros y acreditaciones, principales clientes y medios de contacto.\n\nEl proyecto prioriza una experiencia de usuario clara y profesional mediante un diseño responsivo, navegación intuitiva y optimización SEO básica, permitiendo que la empresa comunique su propuesta de valor, estándares de calidad y compromiso ambiental de manera efectiva.",

      image: images.analyze,
      images: [
        images.analyze1,
        images.analyze2,
        images.analyze3,
        images.analyze4,
      ],
      technologies: ["React", "Javascript", "Tailwind CSS"],
      github: "https://github.com/robertomattus/analyze-landing-page",
      demo: "https://analyze-page.vercel.app/",
      featured: false,
      keyFeatures: [
        "Diseño corporativo enfocado en identidad empresarial",
        "Secciones informativas sobre historia, misión, visión y valores",
        "Presentación clara de servicios bajo normas NOM-SEMARNAT",
        "Diseño responsivo optimizado para dispositivos móviles",
        "Formulario de contacto con validación de datos",
        "Integración de ubicación y datos de contacto del laboratorio",
        "Optimización SEO básica para visibilidad empresarial",
      ],
      role: "Frontend Developer",
    },

    {
      id: 6,
      title: "Dashboard Skeleton",
      description:
        "Panel de control con gráficos interactivos y análisis de datos en tiempo real.",
      fullDescription:
        "Dashboard analítico completo para visualización de datos empresariales con gráficos interactivos, reportes personalizables y actualizaciones en tiempo real.",
      image: images.dashboard,
      images: [images.dashboard1, images.dashboard2],
      technologies: ["React", "Javascript", "Tailwind CSS"],
      github: "https://github.com/robertomattus/skeleton-dashboard",
      demo: "https://dashboard-skeleton-mtt.vercel.app",
      featured: false,
      keyFeatures: [
        "Visualización de datos en tiempo real",
        "Múltiples tipos de gráficos interactivos",
        "Dashboard personalizable",
        "Integración con múltiples fuentes de datos",
      ],
      role: "Full Stack Developer & Data Visualization Specialist",
    },
    {
      id: 7,
      title: "Netflix Clone",
      description:
        "Réplica de la interfaz de Netflix con sistema de autenticación, catálogo de películas y gestión de favoritos.",
      fullDescription:
        "Proyecto frontend que replica la experiencia de usuario de Netflix, presentando una interfaz moderna y responsiva con sistema de inicio de sesión, navegación por catálogo de contenido, y funcionalidad de favoritos. Desarrollado para demostrar habilidades en diseño de interfaces complejas, gestión de estado y creación de experiencias de usuario fluidas e intuitivas.",
      image: images.netflix,
      images: [images.netflix1, images.netflix2],
      technologies: ["React", "Javascript", "Tailwind CSS"],
      github: "https://github.com/robertomattus/netflix-clone",
      demo: "https://netflix-clone-beta-sooty.vercel.app",
      featured: false,
      keyFeatures: [
        "Interfaz de usuario moderna inspirada en Netflix",
        "Sistema de autenticación con formularios de login y registro",
        "Catálogo de películas con diseño tipo carrusel",
        "Funcionalidad de agregar y remover favoritos",
        "Navegación fluida entre secciones",
        "Diseño responsivo optimizado para múltiples dispositivos",
        "Gestión de estado del cliente para persistencia de favoritos",
        "Componentes reutilizables y código escalable",
      ],
      role: "Frontend Developer",
    },
  ];

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleNext = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setCurrentProjectIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    setCurrentProjectIndex(prevIndex);
  };

  return (
    <section
      id="projects"
      className="relative flex-1 px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-4 px-4 pb-8 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-text sm:text-4xl">
              Proyectos Recientes
            </h1>
            <p className="text-base font-normal leading-normal text-text-secondary">
              Una selección de proyectos que muestran mis habilidades en
              desarrollo y diseño.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openModal(project, index)}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="overflow-hidden">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.title}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold leading-normal text-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-normal leading-normal text-text-secondary mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button - Ver más proyectos */}
        <div className="flex justify-center mt-12 px-4 animate-fade-in">
          <a
            href="https://github.com/robertomattus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#181717] text-text hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary/10 hover:border-primary/30 transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Projects;
