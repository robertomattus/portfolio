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
import { HiDownload } from "react-icons/hi";
import { images } from "@/assets/index.js";
import { documents } from "@/assets/index.js";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-lg" /> },
    { name: "React", icon: <FaReact className="text-lg" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-lg" /> },
    { name: "Python", icon: <FaPython className="text-lg" /> },
    { name: "Docker", icon: <FaDocker className="text-lg" /> },
    { name: "Figma", icon: <FaFigma className="text-lg" /> },
    { name: "Git", icon: <FaGitAlt className="text-lg" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-lg" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-lg" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg" /> },
    { name: "REST APIs", icon: <FaCode className="text-lg" /> },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = documents.cv;
    link.download = "Curriculum Roberto Mattus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative flex-1 bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-4 px-4 pb-8 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-text sm:text-4xl">
                Sobre mí
              </h1>
              <p className="text-base font-normal leading-normal text-justify text-text-secondary">
                Un desarrollador apasionado por crear soluciones eficientes y
                modernas.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4">
            {/* Left Column: Bio and Photo */}
            <div
              className="flex flex-col gap-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Photo and Intro */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={images.profileImage}
                  alt="Fotografía profesional"
                  className="aspect-square object-cover rounded-xl min-h-32 w-32 shrink-0 border-2 border-primary/20 shadow-lg self-center sm:self-start"
                />
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-normal leading-normal text-justify text-text-secondary">
                    Hola, soy un desarrollador de software con una gran pasión
                    por crear aplicaciones web y moviles intuitivas y de alto
                    rendimiento. Con experiencia en el desarrollo full-stack, me
                    especializo en la construcción de interfaces de usuario
                    dinámicas con React y en la creación de APIs robustas con
                    Node.js y Python.
                  </p>
                </div>
              </div>

              {/* Additional Bio Text */}
              <p className="text-sm font-normal leading-normal text-justify text-text-secondary">
                Mi filosofía se centra en escribir{" "}
                <span className="text-primary font-semibold">
                  código limpio, escalable y bien documentado
                </span>
                . Disfruto colaborando en equipos ágiles para resolver problemas
                complejos y transformar ideas en productos tangibles. Siempre
                estoy aprendiendo nuevas tecnologías para mantenerme al día con
                las últimas tendencias de la industria.
              </p>

              <p className="text-sm font-normal leading-normal text-justify text-text-secondary">
                Fuera del trabajo, me gusta contribuir a proyectos de{" "}
                <span className="text-accent font-semibold">
                  código abierto
                </span>{" "}
                y practicar karate, una disciplina que me ayuda a mantenerme
                centrado, determinado y en paz, además de ser una fuente
                constante de inspiración.
              </p>
            </div>

            {/* Right Column: Skills */}
            <div
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-xl font-semibold leading-tight tracking-tight text-text mb-6">
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
                    <h3 className="text-sm font-medium leading-tight text-text group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col gap-2 p-4 items-center text-center bg-white rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm">
                  <div className="text-2xl font-black text-primary">2+</div>
                  <div className="text-xs font-medium text-text-secondary">
                    Años de experiencia
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4 items-center text-center bg-white rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm">
                  <div className="text-2xl font-black text-primary">20+</div>
                  <div className="text-xs font-medium text-text-secondary">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Download documents.cv Button */}
          <div
            className="flex justify-center mt-12 px-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={handleDownloadResume}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <HiDownload className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                Descargar CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
