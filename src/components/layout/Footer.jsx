import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[var(--color-text)] to-[var(--color-text)]/95 text-white animate-fade-in overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
      </div>

      {/* Línea decorativa superior */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>

      {/* Contenedor principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold">Portfolio</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desarrollador Full Stack especializado en crear experiencias web
              excepcionales y soluciones innovadoras.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
              Enlaces
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="group text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
              Servicios
            </h4>
            <ul className="space-y-2">
              {[
                "Desarrollo Web",
                "UI/UX Design",
                "Consultoría",
                "Mantenimiento",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
              Contacto
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              ¿Tienes un proyecto en mente? Trabajemos juntos.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                Contáctame
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Footer bottom - Copyright y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {currentYear} Roberto Mattus. Todos los derechos reservados.
          </p>

          {/* Redes sociales con efectos modernos */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm mr-2">Sígueme:</span>
            <a
              href="https://github.com/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://linkedin.com/in/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://twitter.com/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:roberto@example.com"
              className="group relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
