import { useState, useEffect } from "react";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  // Detectar scroll para efectos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/tu-cv.pdf";
    link.download = "Mi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 animate-fade-in transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo con efectos modernos */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#home"
                className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <span className="text-white font-bold text-xl relative z-10">
                    P
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text)] to-[var(--color-primary)]">
                  Portafolio
                </span>
              </a>
            </div>

            {/* Desktop Navigation con efectos */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Desktop Resume Button con gradiente */}
            <div className="hidden md:flex md:items-center">
              <button
                onClick={handleDownloadResume}
                className="group relative bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 hover:cursor-pointer">
                  <HiDownload className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button - ORIGINAL */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-colors duration-200 relative z-50"
                aria-expanded={isMenuOpen}
                aria-label="Menú principal"
              >
                {isMenuOpen ? (
                  <HiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Línea decorativa que aparece al scroll */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </nav>

      {/* Overlay con backdrop oscuro - ORIGINAL */}
      <div
        className={`fixed inset-0 bg-black md:hidden z-40 transition-opacity duration-400 ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu - COMPLETAMENTE ORIGINAL */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white md:hidden z-40 shadow-lg transition-all duration-500 ease-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-6 pb-6 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-all duration-200 text-center ${
                isMenuOpen ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                animationFillMode: "backwards",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div
            className={`pt-2 ${isMenuOpen ? "animate-fade-in-up" : ""}`}
            style={{
              animationDelay: isMenuOpen ? `${navLinks.length * 80}ms` : "0ms",
              animationFillMode: "backwards",
            }}
          >
            <button
              onClick={() => {
                handleDownloadResume();
                setIsMenuOpen(false);
              }}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <HiDownload className="w-5 h-5" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
