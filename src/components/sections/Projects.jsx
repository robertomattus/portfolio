import { useState } from "react";
import { FaGithub } from "react-icons/fa";
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
          {reversedProjects.map((project, index) => (
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
