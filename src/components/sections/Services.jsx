import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaPalette,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { documents } from "@/assets/index.js";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdWeb className="text-2xl" />,
      title: "Landing Pages",
      description:
        "Páginas optimizadas para conversiones, diseñadas para transformar visitantes en clientes reales.",
      solves: "Aumenta la tasa de conversión con diseño estratégico.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Aplicaciones Web",
      description:
        "Sistemas a medida, rápidos y escalables que automatizan y potencian los procesos de tu negocio.",
      solves: "Reduce costos operativos con software a la medida.",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Apps Móviles",
      description:
        "Desarrollo cross-platform y nativo para iOS y Android, llevando tus servicios directamente al bolsillo del usuario.",
      solves: "Fideliza clientes con accesibilidad dondequiera que estén.",
    },
    {
      id: 4,
      icon: <FaPalette className="text-2xl" />,
      title: "Diseño UI/UX",
      description:
        "Interfaces premium, intuitivas y accesibles. Sistemas de diseño pensados en la retención de usuarios.",
      solves: "Reduce la tasa de rebote creando experiencias inmersivas.",
    },
    {
      id: 5,
      icon: <FaChartLine className="text-2xl" />,
      title: "Auditoría SEO",
      description:
        "Estructuramos tu proyecto desde los cimientos para que los motores de búsqueda lo amen de forma orgánica.",
      solves: "Multiplica el tráfico sin depender solo de pauta.",
    },
    {
      id: 6,
      icon: <FaBullhorn className="text-2xl" />,
      title: "Estrategia Digital",
      description:
        "Alineamos tu producto tecnológico con objetivos de marketing claros para maximizar el ROI.",
      solves: "Convierte tu aplicación en el centro de tu negocio.",
    },
  ];

  const handleDownloadSlide = () => {
    const link = document.createElement("a");
    link.href = documents.slide;
    link.download = "Presentacion de Servicios.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPresentation = () => {
    window.open(
      "https://www.canva.com/design/DAG5L63V7Ac/MFg0o1DSFS94R-Y9amAjAg/view",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="services" className="relative bg-transparent py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Encabezado Editorial ── */}
        <div className="max-w-2xl mb-16 lg:mb-24 mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
          <h2 className="font-display font-extrabold text-[var(--color-text)] text-4xl sm:text-5xl tracking-tight mb-6">
            Servicios adaptados a la era digital.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            Desde la concepción de la idea hasta el despliegue en producción. 
            Combino diseño visual exigente con ingeniería de software robusta 
            para crear soluciones que verdaderamente impactan.
          </p>
        </div>

        {/* ── Grilla de Servicios ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col items-center md:items-start text-center md:text-left bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-background-secondary)] flex items-center justify-center text-[var(--color-text)] mb-6 transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                {service.icon}
              </div>
              
              <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-3 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="text-sm font-medium text-[var(--color-text)] bg-[var(--color-background)] px-4 py-2.5 rounded-xl border border-[var(--color-border-subtle)] w-full">
                <span className="text-[var(--color-primary)] mr-2">✦</span>
                {service.solves}
              </div>
            </div>
          ))}
        </div>

        {/* ── Call to action ── */}
        <div className="bg-[#1b1c1c] rounded-[2.5rem] p-10 sm:p-16 text-center animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            ¿Buscas conocer en detalle mi metodología?
          </h2>
          <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto mb-10">
            Revisa la presentación completa ("Deck") sobre mi proceso de trabajo, tecnologías y cómo garantizamos resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              onClick={handleViewPresentation}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-base font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none"
            >
              Ver Presentación interactiva
              <HiArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={handleDownloadSlide}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-[#555555] hover:border-white text-white text-base font-semibold rounded-full transition-all duration-200 focus-visible:outline-none"
            >
              <FaDownload className="w-4 h-4 mr-1" />
              Descargar en PDF
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
