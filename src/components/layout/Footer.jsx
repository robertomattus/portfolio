import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-lg font-semibold">Portfolio</h3>
            </div>
            <p className="text-gray-300 text-sm leading-normal">
              Desarrollador Full Stack especializado en crear experiencias web
              excepcionales y soluciones innovadoras.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
              Enlaces
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Proyectos", "Sobre mí", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="group text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-0 h-px bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] group-hover:w-4 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
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
            <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></span>
              Contacto
            </h4>
            <p className="text-gray-300 text-sm leading-normal mb-4">
              ¿Tienes un proyecto en mente? Trabajemos juntos.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 overflow-hidden"
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
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

        {/* Footer bottom - Copyright y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-medium">
            © {currentYear} Roberto Mattus.
          </p>

          {/* Redes sociales con efectos modernos */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs font-medium mr-1">
              Sígueme:
            </span>
            <a
              href="https://github.com/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-mattus-b7b615231"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://www.instagram.com/robert.mattus?igsh=MXdpYmJrazRsNHlzNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="Twitter"
            >
              <FaInstagram className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:robertmatt113@gmail.com"
              className="group relative w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[var(--color-primary)]"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
