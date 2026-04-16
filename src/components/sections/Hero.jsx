import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { images } from "@/assets/index.js";

/* ── Tarjetas flotantes de credenciales ── */
const credentialCards = [
  {
    emoji: "🚀",
    label: "Proyectos entregados",
    value: "5+",
  },
  {
    emoji: "⚡",
    label: "Años de experiencia",
    value: "3+",
  },
  {
    emoji: "📱",
    label: "Apps móviles",
    value: "Web & Mobile",
  },
];

const techStack = [
  { icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />, label: "React" },
  { icon: <SiNextdotjs className="w-4 h-4 text-[var(--color-text)]" />, label: "Next.js" },
  { icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />, label: "TypeScript" },
  { icon: <FaNodeJs className="w-4 h-4 text-[#68A063]" />, label: "Node.js" },
  { icon: <SiMongodb className="w-4 h-4 text-[#4DB33D]" />, label: "MongoDB" },
];

const socialLinks = [
  {
    href: "https://github.com/robertomattus",
    icon: <FaGithub className="w-5 h-5" />,
    label: "Visitar GitHub de Roberto Mattus",
    ariaLabel: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/roberto-mattus-b7b615231",
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "Visitar LinkedIn de Roberto Mattus",
    ariaLabel: "LinkedIn",
  },
  {
    href: "mailto:robertmatt113@gmail.com",
    icon: <FaEnvelope className="w-5 h-5" />,
    label: "Enviar email a Roberto Mattus",
    ariaLabel: "Email",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* ── Container ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 lg:py-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

          {/* ── Columna izquierda: copy ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Eyebrow badge — disponibilidad */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--color-primary-subtle)] border border-[#ffd0d8] rounded-full mb-6 animate-fade-in">
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              <span className="text-[var(--color-primary)] text-xs font-semibold font-display tracking-wide">
                Disponible para proyectos
              </span>
            </div>

            {/* H1 — headline principal */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold text-[var(--color-text)] leading-[1.08] tracking-tight mb-2 animate-fade-in-up"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.02em" }}
            >
              Desarrollo
              <br />
              <span className="text-[var(--color-text-secondary)] font-bold">
                Full Stack
              </span>
            </h1>

            {/* Nombre / subtítulo */}
            <p className="text-[var(--color-text-secondary)] font-display font-medium text-lg mb-6 animate-fade-in-up delay-100">
              Roberto Mattus
            </p>

            {/* Descripción */}
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-sm mb-10 animate-fade-in-up delay-200">
              Transformo ideas en{" "}
              <strong className="text-[var(--color-text)] font-semibold">
                productos digitales
              </strong>{" "}
              escalables y modernos. Aplicaciones web y móviles de alta calidad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up delay-300">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              >
                Ver proyectos
                <HiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[var(--color-text)] text-sm font-semibold rounded-full border border-[var(--color-border)] hover:border-[var(--color-text)] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] focus-visible:ring-offset-2"
              >
                <FaEnvelope className="w-3.5 h-3.5" aria-hidden="true" />
                Contáctame
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-2 animate-fade-in delay-400" role="list" aria-label="Redes sociales">
              {socialLinks.map((social) => (
                <a
                  key={social.ariaLabel}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  role="listitem"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-text)] bg-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Imagen central (sólo desktop) ── */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]">
            <img 
              src={images.avatarHero} 
              alt="Avatar Hero" 
              className="w-[280px] h-auto object-contain opacity-90 animate-float"
              style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.05))" }}
            />
          </div>

          {/* ── Columna derecha: tarjetas flotantes ── */}
          <div className="hidden lg:flex flex-col items-end gap-3 animate-fade-in delay-200 animate-float" aria-hidden="true">
            {/* Tarjetas de credenciales */}
            {credentialCards.map((card, i) => (
              <div
                key={card.label}
                className="bg-white border border-[var(--color-border)] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ width: i === 1 ? "240px" : "210px", marginRight: i === 1 ? "0" : i === 0 ? "16px" : "8px" }}
              >
                <span className="text-xl" role="img" aria-label={card.label}>
                  {card.emoji}
                </span>
                <div>
                  <p className="text-xl font-display font-extrabold text-[var(--color-text)] leading-none mb-0.5">
                    {card.value}
                  </p>
                  <p className="text-[0.65rem] text-[var(--color-text-secondary)] font-medium leading-tight">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}

            {/* Tarjeta de tech stack */}
            <div
              className="bg-white border border-[var(--color-border)] rounded-2xl px-4 py-3 shadow-sm"
              style={{ width: "250px" }}
            >
              <p className="text-[0.65rem] font-semibold text-[var(--color-text-secondary)] uppercase tracking-widest mb-2.5">
                Stack tecnológico
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text)] text-xs font-medium rounded-full border border-[var(--color-border-subtle)]"
                  >
                    {tech.icon}
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <a
            href="#services"
            className="flex flex-col items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-md p-1"
            aria-label="Explorar más secciones"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Explorar
            </span>
            <HiArrowDown
              className="w-4 h-4 animate-bounce-y"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* ── Línea inferior sutil ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-border)]"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
