import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose, onNext, onPrev }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar con tecla ESC y navegar con flechas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Reset image index cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const images = project.images || [project.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Navigation Buttons: Previous/Next Project */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white shadow-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-all duration-300 hover:scale-110 hidden lg:block"
          aria-label="Proyecto anterior"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white shadow-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-all duration-300 hover:scale-110 hidden lg:block"
          aria-label="Proyecto siguiente"
        >
          <FaChevronRight className="text-xl" />
        </button>
      )}

      {/* Modal Container */}
      <div
        className="relative z-50 flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="flex shrink-0 items-center justify-between gap-2 px-4 py-3 border-b border-primary/10 bg-background-secondary/50">
          <div className="flex gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-2 text-text-secondary hover:text-primary hover:bg-white rounded-lg transition-all duration-300"
                title="Proyecto anterior"
              >
                <FaChevronLeft className="text-base" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="p-2 text-text-secondary hover:text-primary hover:bg-white rounded-lg transition-all duration-300"
                title="Proyecto siguiente"
              >
                <FaChevronRight className="text-base" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-primary hover:bg-white rounded-lg transition-all duration-300"
            title="Cerrar"
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto custom-scrollbar">
          {/* Left Column: Carousel/Image */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col gap-4 bg-background-secondary/30">
            {/* Main Image */}
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col shadow-lg border border-primary/10 overflow-hidden group"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              role="img"
              aria-label={project.title}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Pagination Dots */}
            {images.length > 1 && (
              <div className="flex justify-center items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-text-secondary/30 hover:bg-primary/50 w-2"
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex overflow-x-auto gap-3 pb-2 custom-scrollbar">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-40 aspect-video bg-center bg-cover rounded-lg transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-2 border-primary opacity-100 shadow-lg"
                        : "opacity-60 hover:opacity-100 border-2 border-transparent hover:border-primary/30"
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                    aria-label={`Miniatura ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-3 animate-fade-in-up">
              {project.featured && (
                <span className="inline-block w-fit px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  ⭐ Proyecto Destacado
                </span>
              )}
              <h2 className="text-text text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                {project.title}
              </h2>
              <p className="text-text-secondary text-sm font-normal leading-normal">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-text text-base font-semibold leading-tight pb-2">
                  Características Principales
                </h3>
                <div className="border-t border-primary/10 pt-3 space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <label
                      key={index}
                      className="flex gap-x-3 py-1 flex-row cursor-default group"
                    >
                      <div className="relative flex items-center justify-center h-5 w-5 rounded border-2 border-primary bg-primary mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <p className="text-text text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                        {feature}
                      </p>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Role & Tech Stack */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Role */}
              {project.role && (
                <div>
                  <h3 className="text-text text-base font-semibold leading-tight pb-2">
                    Mi Rol
                  </h3>
                  <p className="text-text-secondary text-sm font-normal leading-normal border-t border-primary/10 pt-3">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Technology Stack */}
              <div className={project.role ? "" : "sm:col-span-2"}>
                <h3 className="text-text text-base font-semibold leading-tight pb-2">
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2 border-t border-primary/10 pt-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 py-1.5 px-3 rounded-lg border border-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 pb-4 mt-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-center font-semibold text-white text-sm bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Ver Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-center font-semibold text-text text-sm bg-background-secondary hover:bg-[#181717] hover:text-white border-2 border-primary/10 hover:border-primary/30 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <FaGithub className="w-4 h-4" />
                Ver Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
