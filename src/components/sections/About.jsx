import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { images, documents } from "@/assets/index.js";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
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
    <section
      id="about"
      className="relative flex items-center min-h-[100svh] bg-transparent py-16 sm:py-24 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* ── Columna Izquierda: Imagen y Perfil (4 columnas en Desktop) ── */}
          <div className="lg:col-span-5 flex flex-col gap-10 animate-fade-in-up">
            <div className="relative">
              <img
                src={images.avatarAbout}
                alt="Roberto Mattus"
                className="w-full h-auto aspect-[3/4] object-cover rounded-3xl z-10 relative"
              />
              <div className="absolute top-4 -right-4 w-full h-full rounded-3xl border border-[var(--color-border)] pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-white pointer-events-none -z-10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[var(--color-border-subtle)] text-center">
                <p className="font-display font-extrabold text-2xl text-[var(--color-text)] mb-1">
                  2+
                </p>
                <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Años exp.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[var(--color-border-subtle)] text-center">
                <p className="font-display font-extrabold text-2xl text-[var(--color-text)] mb-1">
                  25+
                </p>
                <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Proyectos
                </p>
              </div>
            </div>
          </div>

          {/* ── Columna Derecha: Texto y Biografía (7 columnas en Desktop) ── */}
          <div
            className="lg:col-span-7 lg:pl-6 flex flex-col text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0eded] rounded-full mb-5 w-fit mx-auto lg:mx-0">
              <span className="text-[var(--color-text)] text-[0.65rem] font-semibold tracking-wide uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="font-display font-bold text-[var(--color-text)] text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
              Innovación ágil para problemas complejos.
            </h2>

            <div className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-none">
              <p className="mb-5">
                Soy un ingeniero de software especializado en el ecosistema de
                JavaScript y TypeScript, con pasión por la construcción de
                interfaces de usuario altamente interactivas y backend
                resilients. Creo profundamente que el buen código no solo es
                funcional, sino que también depara una excelente experiencia
                tanto para el desarrollador futuro como para el usuario final.
              </p>
              <p className="mb-5">
                Mi enfoque une{" "}
                <strong className="text-[var(--color-text)] font-semibold">
                  prácticas modernas de desarrollo
                </strong>{" "}
                (arquitecturas limpias, componentes autónomos, tipado estricto)
                con fundamentos sólidos de{" "}
                <strong className="text-[var(--color-text)] font-semibold">
                  diseño UI/UX
                </strong>
                . Me aseguro de que los productos se sientan fluidos en cada
                microinteracción y mantengan su rendimiento incluso al escalar.
              </p>
              <p>
                Colaboro estrechamente con fundadores, diseñadores y product
                managers. Fuera del código, me encuentras apoyando proyectos de
                código abierto o practicando artes marciales, lo cual me aporta
                una disciplina fundamental para mantener la concentración.
              </p>
            </div>

            <button
              onClick={handleDownloadResume}
              className="inline-flex w-fit items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 mb-12 mx-auto lg:mx-0"
            >
              Descargar CV Completo
              <HiDownload className="w-4 h-4 ml-1" />
            </button>

            {/* Stack Core */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-6">
                Core Stack & Toolkit
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-[var(--color-text)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)] shadow-sm hover:border-[var(--color-text)] transition-colors"
                  >
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
