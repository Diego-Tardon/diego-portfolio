
import { useState } from "react"
import { ArrowUpRight, ExternalLink, ImageOff } from "lucide-react"
import { FaGithub } from "react-icons/fa"


const projects = [
  {
    id: "01",
    title: "JyJ",
    subtitle: "Sitio web comercial",
    description:
      "Sitio web orientado a presentar servicios, mostrar información comercial y facilitar el contacto de los clientes.",
    technologies: ["Desarrollo web", "Responsive", "UI"],
    image: "/projects/jyj.png",
    website: "https://jyj.onrender.com",
    domain: "jyj.onrender.com",
    theme: "jyj",
  },
  {
    id: "02",
    title: "NEXDESK",
    subtitle: "Gestión de soporte TI",
    description:
      "Sistema web de gestión de tickets de soporte técnico, diseñado para organizar solicitudes y administrar procesos de atención.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/nexdesk.png",
    website: "https://nexdesk-um3y.onrender.com",
    domain: "nexdesk-um3y.onrender.com",
    theme: "nexdesk",
  },
  {
    id: "03",
    title: "Campus Inclusivo",
    subtitle: "Plataforma de accesibilidad",
    description:
      "Plataforma web para reportar barreras de accesibilidad, consultar información y facilitar una experiencia universitaria inclusiva.",
    technologies: ["HTML", "CSS", "JavaScript", "Accesibilidad"],
    image: "/projects/campus.png",
    website: "https://campus-inclusivo.onrender.com",
    domain: "campus-inclusivo.onrender.com",
    theme: "campus",
  },
]


function ProjectPreview({
  image,
  title,
}: {
  image: string
  title: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="project-preview">
      {!failed ? (
        <img
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="project-image-fallback">
          <ImageOff size={30} />
          <strong>{title}</strong>
          <span>Captura pendiente</span>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              01 / TRABAJOS SELECCIONADOS
            </span>

            <h2>
              Mis <span>proyectos.</span>
            </h2>
          </div>

          <p>
            Aplicaciones y sitios web desarrollados
            y publicados. Explora los proyectos
            y conoce su funcionamiento.
          </p>
        </div>

        <div className="portfolio-projects">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`portfolio-project-card ${project.theme}`}
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-media"
                aria-label={`Visitar ${project.title}`}
              >
                <div className="browser-header">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-address">
                    {project.domain}
                  </div>

                  <ExternalLink size={14} />
                </div>

                <ProjectPreview
                  image={project.image}
                  title={project.title}
                />

                <div className="project-hover-link">
                  Ver sitio web
                  <ArrowUpRight size={18} />
                </div>
              </a>

              <div className="portfolio-project-details">
                <div className="portfolio-project-top">
                  <span className="portfolio-project-number">
                    {project.id} / 03
                  </span>
                  <span className="portfolio-project-subtitle">
                    {project.subtitle}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  className="portfolio-project-visit"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorar proyecto
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://github.com/Diego-Tardon"
          target="_blank"
          rel="noopener noreferrer"
          className="github-more"
        >
          <FaGithub size={20} />
          Ver más en GitHub
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}
