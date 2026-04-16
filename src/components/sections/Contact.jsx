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
    if (!formData.name.trim()) newErrors.name = "Requerido";
    if (!formData.email.trim()) newErrors.email = "Requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.subject.trim()) newErrors.subject = "Requerido";
    if (!formData.message.trim()) newErrors.message = "Requerido";

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
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", formData.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsSubmitting(false);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "Escríbeme por WhatsApp",
      description: "Respuesta rápida",
      href: "https://wa.me/9842051122",
      external: true,
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Envíame un Email",
      description: "robertmatt113@gmail.com",
      href: "mailto:robertmatt113@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative bg-transparent py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* ── Columna Izquierda: Copy y Métodos ── */}
          <div className="lg:col-span-5 flex flex-col animate-fade-in-up">
            <h2 className="font-display font-bold text-[var(--color-text)] text-4xl sm:text-5xl leading-tight tracking-tight mb-6">
              Hablemos sobre tu<br/>próximo proyecto.
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-12 max-w-md">
              Ya sea una nueva aplicación, una modernización o simplemente explorar cómo podemos colaborar. Me encantaría escuchar lo que tienes en mente.
            </p>

            {/* Alternativas de Contacto */}
            <div className="flex flex-col gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-start bg-[var(--color-background)] rounded-3xl p-6 transition-all duration-300 hover:bg-[var(--color-background-secondary)]"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-text)] shadow-sm mb-4 transition-colors group-hover:text-[var(--color-primary)]">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] text-lg mb-1">{method.label}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">{method.description}</p>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                <FaMapMarkerAlt className="text-xl text-[#aaaaaa]" />
                <span className="text-sm font-medium">Basado en México (GMT-6)</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                <FaCalendarCheck className="text-xl text-[#aaaaaa]" />
                <span className="text-sm font-medium">Aceptando proyectos remotos</span>
              </div>
            </div>
          </div>

          {/* ── Columna Derecha: Formulario ── */}
          <div className="lg:col-span-7 lg:pl-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="bg-white border text-left border-[var(--color-border)] rounded-[2rem] p-8 sm:p-12 shadow-sm">
              <h3 className="font-display font-bold text-[var(--color-text)] text-2xl mb-8">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[var(--color-text)]">Nombre completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[var(--color-background)] rounded-xl px-4 py-3.5 text-[var(--color-text)] outline-none transition-all border ${errors.name ? "border-red-500" : "border-transparent focus:border-[var(--color-primary)]"}`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs px-1">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[var(--color-text)]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[var(--color-background)] rounded-xl px-4 py-3.5 text-[var(--color-text)] outline-none transition-all border ${errors.email ? "border-red-500" : "border-transparent focus:border-[var(--color-primary)]"}`}
                      placeholder="jane@email.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs px-1">{errors.email}</span>}
                  </div>
                </div>

                {/* Asunto */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--color-text)]">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-[var(--color-background)] rounded-xl px-4 py-3.5 text-[var(--color-text)] outline-none transition-all border ${errors.subject ? "border-red-500" : "border-transparent focus:border-[var(--color-primary)]"}`}
                    placeholder="Diseño de Sitio Web / App Móvil"
                  />
                  {errors.subject && <span className="text-red-500 text-xs px-1">{errors.subject}</span>}
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[var(--color-text)]">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-[var(--color-background)] rounded-xl px-4 py-3.5 text-[var(--color-text)] outline-none transition-all border resize-y min-h-[140px] ${errors.message ? "border-red-500" : "border-transparent focus:border-[var(--color-primary)]"}`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  {errors.message && <span className="text-red-500 text-xs px-1">{errors.message}</span>}
                </div>

                {/* Estados de Envío */}
                {submitSuccess && (
                  <div className="px-4 py-3 bg-green-50 text-green-800 rounded-xl border border-green-200 text-sm font-medium">
                    ¡Mensaje enviado con éxito! Te responderé muy pronto.
                  </div>
                )}
                {submitError && (
                  <div className="px-4 py-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-sm font-medium">
                    Error al enviar el mensaje. Por favor intenta otro método.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-text)] text-white text-base font-semibold rounded-full hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-text)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
