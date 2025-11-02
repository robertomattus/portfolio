import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="text-gray-600" size={20} />
        </button>

        {/* Contenido con scroll */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Galería de imágenes */}
          <div className="relative h-80 bg-gradient-to-br from-primary/20 to-accent/20">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navegación de imágenes */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Contenido del modal */}
          <div className="p-8">
            {/* Badge destacado */}
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-4">
                Proyecto Destacado
              </span>
            )}

            {/* Título */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {project.title}
            </h2>

            {/* Descripción completa */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Role */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Mi Rol
              </h3>
              <p className="text-primary font-medium">{project.role}</p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Características Principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Stack Tecnológico
              </h3>
              <div className="space-y-3">
                {project.techStack.frontend && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      Frontend
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.backend && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      Backend
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.other && (
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      Otras Tecnologías
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.other.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaGithub size={20} />
                Ver Código
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaExternalLinkAlt size={18} />
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
