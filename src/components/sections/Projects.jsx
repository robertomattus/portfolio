import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal"; // Importamos el nuevo componente

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Array de proyectos - ACTUALIZADO con más información
  const projects = [
    {
      id: 1,
      title: "Proyecto E-commerce",
      description:
        "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.",
      fullDescription:
        "Plataforma completa de comercio electrónico desarrollada con tecnologías modernas. Incluye sistema de autenticación, gestión de productos, carrito de compras, procesamiento de pagos con Stripe, y un panel de administración completo para gestionar inventario y pedidos.",
      image: "/projects/ecommerce.jpg",
      images: [
        "/projects/ecommerce.jpg",
        "/projects/ecommerce-2.jpg",
        "/projects/ecommerce-3.jpg",
      ], // Imágenes adicionales
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/usuario/proyecto",
      demo: "https://proyecto-demo.com",
      featured: true,
      keyFeatures: [
        "Sistema de autenticación y autorización",
        "Carrito de compras con persistencia",
        "Integración con pasarela de pagos Stripe",
        "Panel de administración completo",
        "Gestión de inventario en tiempo real",
        "Sistema de búsqueda y filtros avanzados",
      ],
      role: "Full Stack Developer",
      techStack: {
        frontend: ["React", "Redux", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB"],
        other: ["Stripe API", "JWT", "Cloudinary"],
      },
    },
    {
      id: 2,
      title: "App de Tareas",
      description:
        "Aplicación de gestión de tareas con autenticación, categorías y recordatorios.",
      fullDescription:
        "Aplicación web para gestión de tareas personales y profesionales con sistema de categorías, etiquetas, recordatorios y colaboración en tiempo real.",
      image: "/projects/tasks.jpg",
      images: ["/projects/tasks.jpg", "/projects/tasks-2.jpg"],
      technologies: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/usuario/proyecto",
      demo: "https://proyecto-demo.com",
      featured: false,
      keyFeatures: [
        "Gestión de tareas con drag & drop",
        "Sistema de categorías y etiquetas",
        "Recordatorios por email",
        "Colaboración en tiempo real",
        "Vista de calendario integrada",
      ],
      role: "Frontend Developer",
      techStack: {
        frontend: ["React", "Context API", "Tailwind CSS"],
        backend: ["Firebase"],
        other: ["Firebase Auth", "Firestore", "Cloud Functions"],
      },
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Panel de control con gráficos interactivos y análisis de datos en tiempo real.",
      fullDescription:
        "Dashboard analítico completo para visualización de datos empresariales con gráficos interactivos, reportes personalizables y actualizaciones en tiempo real.",
      image: "/projects/dashboard.jpg",
      images: [
        "/projects/dashboard.jpg",
        "/projects/dashboard-2.jpg",
        "/projects/dashboard-3.jpg",
      ],
      technologies: ["Next.js", "TypeScript", "Chart.js"],
      github: "https://github.com/usuario/proyecto",
      demo: "https://proyecto-demo.com",
      featured: true,
      keyFeatures: [
        "Visualización de datos en tiempo real",
        "Múltiples tipos de gráficos interactivos",
        "Exportación de reportes en PDF",
        "Filtros y segmentación avanzada",
        "Dashboard personalizable",
        "Integración con múltiples fuentes de datos",
      ],
      role: "Frontend Developer & Data Visualization Specialist",
      techStack: {
        frontend: ["Next.js", "TypeScript", "Chart.js", "D3.js"],
        backend: ["Next.js API Routes"],
        other: ["WebSockets", "Redis", "PostgreSQL"],
      },
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Espera a que termine la animación
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
      className="relative min-h-screen py-20 overflow-hidden bg-background"
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium text-xs">
              Proyectos destacados
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-text via-primary to-accent">
              Mis Proyectos
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-base sm:text-lg text-text-secondary">
              Explora mi trabajo reciente
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project, index)}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 transform hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-lg">
                  Destacado
                </div>
              )}

              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl opacity-20">📱</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Indicador de "Ver más" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-primary px-4 py-2 rounded-lg font-semibold text-sm">
                    Ver detalles →
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay decorativo */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Botón para ver más proyectos (opcional) */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="https://github.com/robertomattus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm hover:bg-white text-primary font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1"
          >
            Ver más proyectos en GitHub
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

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
