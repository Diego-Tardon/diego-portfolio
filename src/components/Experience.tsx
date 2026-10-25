
import {
  BriefcaseBusiness,
  GraduationCap,
  FolderCode,
  Database,
} from "lucide-react"

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="section experience-section"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              02 / TRAYECTORIA
            </span>

            <h2>
              Experiencia y <span>formación.</span>
            </h2>
          </div>

          <p>
            Formación académica, experiencia práctica
            y proyectos de desarrollo de software.
          </p>
        </div>

        <div className="career-grid">
          <article className="career-card">
            <div className="career-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <span className="career-label">
              EXPERIENCIA LABORAL
            </span>

            <h3>Desarrollador Web Practicante</h3>
            <p className="career-place">
              Consultorio DAS Penco
            </p>

            <p className="career-description">
              Desarrollo de un sistema web para visualizar
              permisos y vacaciones, utilizando bases
              de datos relacionales e interfaces adaptables.
            </p>

            <div className="tech-tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </article>

          <article className="career-card">
            <div className="career-icon">
              <GraduationCap size={25} />
            </div>

            <span className="career-label">
              FORMACIÓN ACADÉMICA
            </span>

            <h3>Analista Programador</h3>

            <p className="career-place">
              Instituto Profesional Virginio Gómez
            </p>

            <p className="career-description">
              Formación académica en programación,
              desarrollo de sistemas y tecnologías
              de software.
            </p>

            <div className="tech-tags">
              <span>2023 – 2025</span>
              <span>Programación</span>
            </div>
          </article>

          <article className="career-card career-projects">
            <div className="career-icon">
              <FolderCode size={25} />
            </div>

            <span className="career-label">
              DESARROLLO INDEPENDIENTE
            </span>

            <h3>Proyectos personales</h3>

            <p className="career-place">
              Aplicaciones web publicadas
            </p>

            <p className="career-description">
              Desarrollo de aplicaciones y sitios web
              para gestión de soporte TI, presentación
              de servicios y accesibilidad.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Supabase</span>
            </div>
          </article>

          <article className="career-card career-focus">
            <div className="career-icon">
              <Database size={25} />
            </div>

            <span className="career-label">
              ESPECIALIZACIÓN
            </span>

            <h3>Desarrollo Full Stack</h3>

            <p className="career-place">
              Frontend · Backend · Bases de datos
            </p>

            <p className="career-description">
              Desarrollo de interfaces, integración
              de servicios y gestión de información
              en aplicaciones web.
            </p>

            <a href="#habilidades" className="career-link">
              Explorar tecnologías
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
