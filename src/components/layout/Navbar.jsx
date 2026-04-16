import { useState, useEffect } from "react";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";
import { documents } from "@/assets/index.js";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Proyectos", href: "#projects" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── Detectar scroll y calcular progreso ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Bloquear scroll al abrir menú ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = documents.cv;
    link.download = "Curriculum Roberto Mattus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Saltar al contenido (a11y) */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        {/* Barra de progreso coral */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-150 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-label="Progreso de página"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-lg"
            aria-label="Roberto Mattus — Inicio"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm font-display select-none">
              RM
            </span>
            <span className="font-display font-bold text-[var(--color-text)] text-base leading-none">
              Roberto Mattus
            </span>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="listitem"
                className="relative px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200 group rounded-md"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* ── CTA Desktop ── */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-1.5 px-5 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              aria-label="Descargar currículum de Roberto Mattus en PDF"
            >
              <HiDownload className="w-4 h-4" aria-hidden="true" />
              Descargar CV
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button
            id="mobile-menu-button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-high)] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen
              ? <HiX className="w-5 h-5" aria-hidden="true" />
              : <HiMenu className="w-5 h-5" aria-hidden="true" />
            }
          </button>
        </nav>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 md:hidden z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 left-0 right-0 bg-white z-50 md:hidden transition-all duration-400 ease-out shadow-xl ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Header del menú */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--color-border)]">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">
              RM
            </span>
            <span className="font-display font-bold text-[var(--color-text)]">Roberto Mattus</span>
          </a>
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-high)] transition-colors"
            aria-label="Cerrar menú"
          >
            <HiX className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <nav className="px-6 py-6 space-y-1" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)] rounded-xl transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA móvil */}
        <div className="px-6 pb-8">
          <button
            onClick={() => { handleDownloadResume(); closeMenu(); }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold rounded-full transition-colors duration-200"
          >
            <HiDownload className="w-4 h-4" aria-hidden="true" />
            Descargar CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
