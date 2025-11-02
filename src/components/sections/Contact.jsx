import { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Por favor, ingresa tu nombre";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor, ingresa tu email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un email válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Por favor, ingresa un asunto";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Por favor, escribe un mensaje";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulación de envío (aquí irá tu lógica real)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-xl" />,
      label: "LLAMAR AHORA",
      href: "tel:+123456789",
      color:
        "border-primary/20 hover:bg-background-secondary hover:border-primary/40",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "WHATSAPP",
      href: "https://wa.me/123456789",
      color: "bg-[#25D366] hover:bg-[#20BA5A] text-white border-0",
      external: true,
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "EMAIL DIRECTO",
      href: "mailto:email@ejemplo.com",
      color:
        "border-primary/20 hover:bg-background-secondary hover:border-primary/40",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/robertomattus",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://linkedin.com/in/tu-perfil",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      href: "https://twitter.com/tu-usuario",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-background"
    >
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna Izquierda: Título y Formulario */}
          <div className="flex flex-col space-y-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-text md:text-5xl">
                Trabajemos juntos
              </h1>
              <p className="text-base font-normal leading-normal text-text-secondary">
                Estoy disponible para proyectos remotos. ¡Hablemos!
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Nombre completo */}
                <label className="flex flex-col col-span-2 sm:col-span-1">
                  <p className="pb-2 text-base font-medium leading-normal text-text">
                    Nombre completo
                  </p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-14 w-full rounded-lg border ${
                      errors.name ? "border-red-500" : "border-primary/20"
                    } bg-white p-4 text-base font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.name && (
                    <p className="pt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </label>

                {/* Email */}
                <label className="flex flex-col col-span-2 sm:col-span-1">
                  <p className="pb-2 text-base font-medium leading-normal text-text">
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-14 w-full rounded-lg border ${
                      errors.email ? "border-red-500" : "border-primary/20"
                    } bg-white p-4 text-base font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="tu.email@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="pt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </label>
              </div>

              {/* Asunto */}
              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium leading-normal text-text">
                  Asunto
                </p>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`h-14 w-full rounded-lg border ${
                    errors.subject ? "border-red-500" : "border-primary/20"
                  } bg-white p-4 text-base font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="¿Sobre qué te gustaría hablar?"
                />
                {errors.subject && (
                  <p className="pt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </label>

              {/* Mensaje */}
              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium leading-normal text-text">
                  Mensaje
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`min-h-36 w-full resize-y rounded-lg border ${
                    errors.message ? "border-red-500" : "border-primary/20"
                  } bg-white p-4 text-base font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && (
                  <p className="pt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </label>

              {/* Mensaje de éxito */}
              {submitSuccess && (
                <div className="flex items-center gap-2 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </p>
                </div>
              )}

              {/* Botón Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Columna Derecha: Contacto Directo e Info */}
          <div className="flex flex-col space-y-8 lg:pt-28">
            {/* Contacto Directo */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text">
                O contáctame directamente
              </h3>
              <div className="flex flex-col space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={`flex h-14 items-center justify-center gap-3 rounded-lg border px-5 text-base font-semibold transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg ${
                      method.color ||
                      "border-primary/20 hover:bg-background-secondary"
                    } ${
                      method.color?.includes("text-white") ? "" : "text-text"
                    }`}
                  >
                    {method.icon}
                    {method.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Información Adicional */}
            <div className="space-y-4 pt-4 border-t border-primary/10">
              <div className="flex items-center gap-3 text-text-secondary">
                <FaMapMarkerAlt className="text-2xl text-primary" />
                <span className="text-base font-medium">
                  Playa del Carmen, México
                </span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <FaCalendarCheck className="text-2xl text-primary" />
                <span className="text-base font-medium">
                  Disponible para proyectos remotos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
