import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradiente de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col items-center justify-center">
          {/* Badge compacto */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary font-medium text-xs">
              Disponible para trabajar
            </span>
          </div>

          {/* Nombre más compacto */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-text via-primary to-accent">
              Ingeniero en desarrollo de software
            </span>
          </h1>

          {/* Título compacto */}
          <div
            className="flex items-center justify-center gap-2 mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-text-secondary font-light">
              Roberto Mattus
            </h2>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Descripción compacta */}
          <p
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transformo ideas en{" "}
            <span className="text-primary font-semibold">
              experiencias digitales excepcionales
            </span>
            . Soluciones web modernas y escalables.
          </p>

          {/* Botones compactos */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#projects"
              className="group relative px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver proyectos
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group relative px-6 py-2.5 bg-white/80 backdrop-blur-sm hover:bg-white text-primary text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary transform hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">
                Contáctame
                <FaEnvelope className="text-sm transform group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>

          {/* Social Icons compactos */}
          <div
            className="flex justify-center items-center gap-4 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-text-secondary/50"></div>

            <a
              href="https://github.com/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-text-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaGithub size={20} className="relative z-10" />
            </a>

            <a
              href="https://linkedin.com/in/robertomattus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-text-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaLinkedin size={20} className="relative z-10" />
            </a>

            <a
              href="mailto:roberto@example.com"
              className="group relative p-2 text-text-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaEnvelope size={20} className="relative z-10" />
            </a>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-text-secondary/50"></div>
          </div>

          {/* Scroll indicator compacto */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-text-secondary hover:text-primary transition-colors duration-300 animate-fade-in cursor-pointer group"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-xs font-medium">Explorar</span>
            <HiArrowDown
              size={20}
              className="animate-bounce group-hover:text-primary transition-colors"
            />
          </a>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
