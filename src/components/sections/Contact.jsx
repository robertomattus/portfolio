import { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaPaperPlane,
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
  const [submitError, setSubmitError] = useState(false);

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
    setSubmitError(false);
    setSubmitSuccess(false);

    try {
      // Crear FormData para Web3Forms
      const formDataToSend = new FormData();

      // Access Key de Web3Forms
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

      // Campos del formulario
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      // Opcional: Personalizar el asunto del email que recibirás
      formDataToSend.append("from_name", formData.name);

      // Enviar a Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
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
      } else {
        throw new Error(result.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsSubmitting(false);
      setSubmitError(true);

      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-lg" />,
      label: "LLAMAR AHORA",
      href: "tel:+529842051122",
      color:
        "border-primary/20 hover:bg-background-secondary hover:border-primary/40",
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      label: "WHATSAPP",
      href: "https://wa.me/9842051122",
      color: "bg-[#25D366] hover:bg-[#20BA5A] text-white border-0",
      external: true,
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      label: "EMAIL DIRECTO",
      href: "mailto:robertmatt113@gmail.com",
      color:
        "border-primary/20 hover:bg-background-secondary hover:border-primary/40",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex-1 px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-4 px-4 pb-8 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-text sm:text-4xl">
              Trabajemos juntos
            </h1>
            <p className="text-base font-normal leading-normal text-text-secondary">
              Estoy disponible para proyectos remotos. ¡Hablemos!
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 p-4">
          {/* Columna Izquierda: Formulario */}
          <div
            className="flex flex-col animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Nombre completo */}
                <label className="flex flex-col col-span-2 sm:col-span-1">
                  <p className="pb-2 text-sm font-medium leading-normal text-text">
                    Nombre completo
                  </p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 w-full rounded-lg border ${
                      errors.name ? "border-red-500" : "border-primary/20"
                    } bg-white p-3 text-sm font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.name && (
                    <p className="pt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </label>

                {/* Email */}
                <label className="flex flex-col col-span-2 sm:col-span-1">
                  <p className="pb-2 text-sm font-medium leading-normal text-text">
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-12 w-full rounded-lg border ${
                      errors.email ? "border-red-500" : "border-primary/20"
                    } bg-white p-3 text-sm font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                    placeholder="tu.email@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="pt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </label>
              </div>

              {/* Asunto */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium leading-normal text-text">
                  Asunto
                </p>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`h-12 w-full rounded-lg border ${
                    errors.subject ? "border-red-500" : "border-primary/20"
                  } bg-white p-3 text-sm font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="¿Sobre qué te gustaría hablar?"
                />
                {errors.subject && (
                  <p className="pt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </label>

              {/* Mensaje */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium leading-normal text-text">
                  Mensaje
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`min-h-32 w-full resize-y rounded-lg border ${
                    errors.message ? "border-red-500" : "border-primary/20"
                  } bg-white p-3 text-sm font-normal text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                  placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && (
                  <p className="pt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </label>

              {/* Mensaje de éxito */}
              {submitSuccess && (
                <div className="flex items-center gap-2 p-3 bg-green-100 border border-green-300 text-green-800 rounded-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-medium">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </p>
                </div>
              )}

              {/* Mensaje de error */}
              {submitError && (
                <div className="flex items-center gap-2 p-3 bg-red-100 border border-red-300 text-red-800 rounded-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-medium">
                    Error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}

              {/* Botón Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 disabled:transform-none overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
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
                      <FaPaperPlane className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>

          {/* Columna Derecha: Contacto Directo e Info */}
          <div
            className="flex flex-col space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Contacto Directo */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold leading-tight text-text">
                O contáctame directamente
              </h3>
              <div className="flex flex-col space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={`group relative flex h-12 items-center justify-center gap-2 rounded-lg border-2 px-6 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg overflow-hidden ${
                      method.color ||
                      "border-primary/20 hover:border-primary bg-white/80 backdrop-blur-sm hover:bg-white"
                    } ${
                      method.color?.includes("text-white")
                        ? "text-white"
                        : "text-text"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="transform group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </span>
                      {method.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Información Adicional */}
            <div className="space-y-4 pt-4 border-t border-primary/10">
              <div className="flex items-center gap-3 text-text-secondary">
                <FaMapMarkerAlt className="text-xl text-primary flex-shrink-0" />
                <span className="text-sm font-medium">México</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <FaCalendarCheck className="text-xl text-primary flex-shrink-0" />
                <span className="text-sm font-medium">
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
