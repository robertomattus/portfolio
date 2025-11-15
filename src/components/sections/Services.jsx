import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaPalette,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdWeb className="text-xl" />,
      title: "Landing Page",
      description:
        "Creación de páginas web diseñadas específicamente para convertir visitantes en clientes potenciales.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-xl" />,
      title: "Aplicaciones Web",
      description:
        "Desarrollo de soluciones web a medida que se adaptan y crecen junto con tu negocio.",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="text-xl" />,
      title: "Aplicaciones Móviles",
      description:
        "Creación de aplicaciones fáciles de usar y atractivas para teléfonos iPhone y Android.",
    },
    {
      id: 4,
      icon: <FaBullhorn className="text-xl" />,
      title: "Marketing",
      description:
        "Estrategias digitales y de marca para aumentar tu visibilidad y atraer más clientes en internet.",
    },
    {
      id: 5,
      icon: <FaPalette className="text-xl" />,
      title: "UI/UX Design",
      description:
        "Diseño de interfaces visuales y experiencias que hacen que tus productos digitales sean fáciles y agradables de usar.",
    },
    {
      id: 6,
      icon: <FaChartLine className="text-xl" />,
      title: "SEO",
      description:
        "Optimización de tu sitio web para que aparezca en los primeros resultados de Google y otros buscadores.",
    },
  ];

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
                className="flex flex-col items-center gap-4 rounded-lg border border-primary/20 bg-white hover:bg-background-secondary p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-primary group-hover:text-primary-hover transition-colors">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-center font-semibold leading-tight text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-normal leading-normal text-center text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
