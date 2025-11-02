const About = () => {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
    Backend: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
    Tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"],
    Soft: [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Comunicación",
      "Adaptabilidad",
    ],
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12">
          {/* Sección de introducción */}
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <span className="text-primary font-medium text-xs">Sobre Mí</span>
            </div>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-text via-primary to-accent">
                Construyendo experiencias digitales excepcionales
              </span>
            </h2>

            {/* Descripción */}
            <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p>
                Soy un ingeniero en desarrollo de software apasionado por crear
                soluciones tecnológicas innovadoras que{" "}
                <span className="text-primary font-semibold">
                  transformen ideas en realidad
                </span>
                .
              </p>

              <p>
                Con experiencia en desarrollo full-stack, me especializo en
                construir aplicaciones web modernas, escalables y centradas en
                el usuario. Mi enfoque combina{" "}
                <span className="text-accent font-semibold">código limpio</span>
                ,{" "}
                <span className="text-accent font-semibold">
                  mejores prácticas
                </span>{" "}
                y un diseño intuitivo.
              </p>
            </div>
          </div>

          {/* Sección de habilidades */}
          <div className="space-y-8 animate-fade-in">
            {/* Título de habilidades */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-text">
                Habilidades & Tecnologías
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            {/* Grid de habilidades */}
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <div
                  key={category}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Decoración de fondo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Contenido */}
                  <div className="relative space-y-4">
                    {/* Título de categoría */}
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      <h4 className="text-lg font-bold text-primary">
                        {category}
                      </h4>
                      <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
                    </div>

                    {/* Lista de habilidades */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-background to-background-secondary text-text-secondary text-sm font-medium rounded-lg border border-primary/10 hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decoración esquina */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats opcionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-in">
            {[
              { value: "5+", label: "Años de experiencia" },
              { value: "20+", label: "Proyectos completados" },
              { value: "10+", label: "Clientes satisfechos" },
              { value: "100%", label: "Dedicación" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default About;
