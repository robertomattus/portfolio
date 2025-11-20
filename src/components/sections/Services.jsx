import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaPalette,
  FaChartLine,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { documents } from "@/assets/index.js";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdWeb className="text-xl" />,
      title: "Landing Page",
      description:
        "Creación de páginas web diseñadas específicamente para convertir visitantes en clientes potenciales.",
      solves:
        "¿Tienes tráfico pero pocas conversiones? Una landing optimizada puede aumentar tus ventas hasta un 300%.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-xl" />,
      title: "Aplicaciones Web",
      description:
        "Desarrollo de soluciones web a medida que se adaptan y crecen junto con tu negocio.",
      solves:
        "¿Procesos manuales que consumen tiempo? Automatiza tu negocio y reduce costos operativos.",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="text-xl" />,
      title: "Aplicaciones Móviles",
      description:
        "Creación de aplicaciones fáciles de usar y atractivas para teléfonos iPhone y Android.",
      solves:
        "¿Tus clientes necesitan acceso desde cualquier lugar? Lleva tu servicio al bolsillo de tus usuarios.",
    },
    {
      id: 4,
      icon: <FaBullhorn className="text-xl" />,
      title: "Marketing",
      description:
        "Estrategias digitales y de marca para aumentar tu visibilidad y atraer más clientes en internet.",
      solves:
        "¿Inviertes en publicidad sin resultados claros? Optimiza tu presupuesto con estrategias basadas en datos.",
    },
    {
      id: 5,
      icon: <FaPalette className="text-xl" />,
      title: "UI/UX Design",
      description:
        "Diseño de interfaces visuales y experiencias que hacen que tus productos digitales sean fáciles y agradables de usar.",
      solves:
        "¿Los usuarios abandonan tu sitio rápidamente? Un diseño intuitivo reduce la tasa de rebote hasta un 50%.",
    },
    {
      id: 6,
      icon: <FaChartLine className="text-xl" />,
      title: "SEO",
      description:
        "Optimización de tu sitio web para que aparezca en los primeros resultados de Google y otros buscadores.",
      solves:
        "¿Nadie encuentra tu negocio online? El 75% de usuarios nunca pasan de la primera página de Google.",
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
      "https://www.canva.com/design/DAG5L63V7Ac/MFg0o1DSFS94R-Y9amAjAg/view?utm_content=DAG5L63V7Ac&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haeef436b5a",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="services" className="relative flex-1 bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-4 px-4 pb-8 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-text sm:text-4xl">
                Mis Servicios
              </h1>
              <p className="text-base font-normal leading-normal text-justify text-text-secondary">
                Soluciones creativas y técnicas para llevar tu proyecto al
                siguiente nivel.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="items-center flex flex-col gap-4 rounded-lg border border-primary/20 bg-white hover:bg-background-secondary p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-primary group-hover:text-primary-hover transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-base font-semibold leading-tight text-text group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-center text-sm font-normal leading-normal text-text-secondary">
                  {service.description}
                </p>

                <div className="mt-2 pt-4 border-t border-primary/10">
                  <p className="text-center text-sm font-medium leading-relaxed text-primary/80 italic">
                    💡 {service.solves}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-6 p-4">
            <div className="p-6 md:p-8 bg-white border border-secondary/20 rounded-lg shadow-lg text-center animate-fade-in-up">
              <h2 className="text-xl font-bold text-text mb-3 sm:text-2xl">
                ¿Quieres saber más?
              </h2>
              <p className="text-base text-text-secondary mb-6 max-w-3xl mx-auto">
                Descarga o visualiza mi presentación completa para conocer en
                detalle cómo puedo ayudarte a escalar tu proyecto.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Botón para Ver Presentación */}
                <button
                  onClick={handleViewPresentation}
                  className="cursor-pointer group relative inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaEye className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    Ver Presentación
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={handleDownloadSlide}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-primary text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary transform hover:-translate-y-0.5 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaDownload className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                    Descargar (PDF)
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
