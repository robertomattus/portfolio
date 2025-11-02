import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-xl" /> },
    { name: "React", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Python", icon: <FaPython className="text-xl" /> },
    { name: "Docker", icon: <FaDocker className="text-xl" /> },
    { name: "Figma", icon: <FaFigma className="text-xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
    { name: "REST APIs", icon: <FaCode className="text-xl" /> },
  ];

  return (
    <section id="about" className="relative flex-1 bg-background">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="flex flex-col max-w-6xl w-full flex-1">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-4 items-center mb-12 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              <h1 className="text-text text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                Sobre mí
              </h1>
              <p className="text-text-secondary text-base font-normal leading-normal">
                Un desarrollador apasionado por crear soluciones eficientes y
                modernas.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left Column: Bio and Photo */}
            <div
              className="flex flex-col gap-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Photo and Intro */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32 shrink-0 border-2 border-primary/20 shadow-lg"
                  role="img"
                  aria-label="Fotografía profesional"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop")',
                  }}
                />
                <div className="flex flex-col gap-4">
                  <p className="text-text-secondary text-base font-normal leading-relaxed">
                    Hola, soy un desarrollador de software con una gran pasión
                    por crear aplicaciones web intuitivas y de alto rendimiento.
                    Con experiencia en el desarrollo full-stack, me especializo
                    en la construcción de interfaces de usuario dinámicas con
                    React y en la creación de APIs robustas con Node.js y
                    Python.
                  </p>
                </div>
              </div>

              {/* Additional Bio Text */}
              <p className="text-text-secondary text-base font-normal leading-relaxed">
                Mi filosofía se centra en escribir{" "}
                <span className="text-primary font-semibold">
                  código limpio, escalable y bien documentado
                </span>
                . Disfruto colaborando en equipos ágiles para resolver problemas
                complejos y transformar ideas en productos tangibles. Siempre
                estoy aprendiendo nuevas tecnologías para mantenerme al día con
                las últimas tendencias de la industria.
              </p>

              <p className="text-text-secondary text-base font-normal leading-relaxed">
                Fuera del trabajo, me gusta contribuir a proyectos de{" "}
                <span className="text-accent font-semibold">
                  código abierto
                </span>{" "}
                y explorar nuevos senderos para hacer senderismo, lo cual me
                ayuda a despejar la mente y encontrar inspiración.
              </p>
            </div>

            {/* Right Column: Skills */}
            <div
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-text text-[22px] font-bold leading-tight tracking-tight mb-6">
                Habilidades Técnicas
              </h2>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex flex-1 gap-3 rounded-lg border border-primary/20 bg-white hover:bg-background-secondary p-4 items-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-primary group-hover:text-primary-hover transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-text text-sm font-bold leading-tight group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col gap-2 p-4 bg-white rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-black text-primary">5+</div>
                  <div className="text-sm text-text-secondary">
                    Años de experiencia
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-white rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-black text-primary">20+</div>
                  <div className="text-sm text-text-secondary">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Download CV Button */}
          <div
            className="flex justify-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
