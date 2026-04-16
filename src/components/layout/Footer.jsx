import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const footerLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://github.com/robertomattus",
    icon: <FaGithub className="w-4 h-4" />,
    label: "GitHub de Roberto Mattus",
  },
  {
    href: "https://www.linkedin.com/in/roberto-mattus-b7b615231",
    icon: <FaLinkedin className="w-4 h-4" />,
    label: "LinkedIn de Roberto Mattus",
  },
  {
    href: "https://www.instagram.com/robert.mattus?igsh=MXdpYmJrazRsNHlzNg%3D%3D&utm_source=qr",
    icon: <FaInstagram className="w-4 h-4" />,
    label: "Instagram de Roberto Mattus",
  },
  {
    href: "mailto:robertmatt113@gmail.com",
    icon: <FaEnvelope className="w-4 h-4" />,
    label: "Email: robertmatt113@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#1b1c1c] text-white"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* ── Línea coral superior ── */}
      <div className="h-px bg-[var(--color-primary)]" aria-hidden="true" />

      {/* ── Grid principal ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Columna 1 — Marca */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-lg"
              aria-label="Roberto Mattus — Inicio"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)] text-white font-bold font-display text-xs shrink-0">
                RM
              </span>
              <span className="font-display font-bold text-white text-[0.95rem] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                Roberto Mattus
              </span>
            </a>
            <p className="text-[#aaaaaa] text-sm leading-relaxed max-w-xs">
              Full Stack Developer — Transformando ideas en experiencias
              digitales que marcan la diferencia.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <nav aria-label="Navegación del pie de página">
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Navegación
            </h2>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.label} role="listitem">
                  <a
                    href={link.href}
                    className="text-[#aaaaaa] hover:text-white text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3 — Conecta */}
          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Conecta
            </h2>
            <p className="text-[#aaaaaa] text-sm leading-relaxed mb-6">
              ¿Tienes un proyecto en mente? Hablemos.
            </p>

            {/* Icono social grid 2×2 */}
            <div
              className="grid grid-cols-2 gap-2 w-fit"
              role="list"
              aria-label="Redes sociales"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  role="listitem"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#333333] text-[#aaaaaa] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1c1c]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-10 mb-5 h-px bg-[#333333]" aria-hidden="true" />

        {/* ── Barra inferior ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#717171] text-xs">
          <p>© {currentYear} Roberto Mattus. Todos los derechos reservados.</p>
          <p>
            Diseñado con{" "}
            <span className="text-[var(--color-primary)]" aria-label="amor">
              ♥
            </span>{" "}
            en México
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
