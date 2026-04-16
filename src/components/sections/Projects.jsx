import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { projects } from "@/assets/constants/projects.js";

const reversedProjects = [...projects].reverse();

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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
    const nextIndex = (currentProjectIndex + 1) % reversedProjects.length;
    setSelectedProject(reversedProjects[nextIndex]);
    setCurrentProjectIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentProjectIndex - 1 + reversedProjects.length) % reversedProjects.length;
    setSelectedProject(reversedProjects[prevIndex]);
    setCurrentProjectIndex(prevIndex);
  };

  return (
    <section id="projects" className="relative bg-transparent py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Encabezado Editorial ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <h2 className="font-display font-extrabold text-[var(--color-text)] text-4xl sm:text-5xl tracking-tight mb-4">
              Trabajo Reciente
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Una cuidada selección de aplicaciones escalables, interfaces refinadas 
              y arquitecturas que resuelven problemas del mundo real.
            </p>
          </div>
          <div className="shrink-0 flex justify-center md:justify-end">
            <a
              href="https://github.com/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-background-secondary)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] text-sm font-semibold rounded-full transition-colors focus-visible:outline-none"
            >
              <FaGithub className="text-base" />
              Explorar Github
            </a>
          </div>
        </div>

        {/* ── Grilla de Proyectos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {reversedProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openModal(project, index)}
              className="group cursor-pointer flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen (estilo "Monograph") */}
              <div className="overflow-hidden rounded-3xl bg-[var(--color-background)] aspect-[4/3] mb-6 relative shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.title}
                />
                
                {/* Overlay muy sutil en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Título & Top Info */}
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="font-display font-bold text-2xl leading-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                  {project.title}
                </h3>
                <span className="w-8 h-8 rounded-full bg-[var(--color-background-secondary)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-primary-subtle)] transition-colors shrink-0">
                  <FaExternalLinkAlt className="w-3 h-3" />
                </span>
              </div>

              {/* Descripción */}
              <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack (Chips minimalistas) */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="inline-flex px-2 py-1 bg-transparent text-[var(--color-text-secondary)] text-xs font-medium content-center items-center">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </article>
          ))}
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
