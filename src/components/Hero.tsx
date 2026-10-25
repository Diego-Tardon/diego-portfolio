
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const technologies = ["React", "TypeScript", "Node.js"]

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-y2k">
      <div className="container">
        <div className="hero-y2k-layout">
          <div className="hero-y2k-content">
            <div className="hero-y2k-tags">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <p className="hero-y2k-eyebrow">
              DESARROLLADOR WEB · FULL STACK JUNIOR
            </p>

            <h1 className="hero-y2k-title">
              Hola, soy
              <span>Diego Tardon.</span>
            </h1>

            <p className="hero-y2k-description">
              Analista Programador enfocado en el desarrollo
              de aplicaciones web, interfaces modernas y
              soluciones funcionales. Experiencia práctica
              y proyectos personales publicados.
            </p>

            <div className="hero-y2k-actions">
              <a
                href="#proyectos"
                className="hero-y2k-primary"
              >
                Mis proyectos
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/Diego-Tardon"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-y2k-secondary"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/diego-tard%C3%B3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-y2k-secondary"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ESTATUA Y2K ANIMADA */}
          <div className="hero-y2k-art">
            <div
              className="y2k-stage"
              role="img"
              aria-label="Estatua clásica azul con objetos cromados y estética Y2K"
            >
              <img
                className="y2k-main-image"
                src="/hero-y2k.png"
                alt=""
                draggable={false}
              />

              <div className="y2k-rainbow" />
              <div className="y2k-shine" />

              <span className="y2k-sparkle sparkle-one" />
              <span className="y2k-sparkle sparkle-two" />
              <span className="y2k-sparkle sparkle-three" />
              <span className="y2k-sparkle sparkle-four" />
            </div>
          </div>
        </div>
      </div>

      <a href="#proyectos" className="hero-y2k-scroll">
        Desliza para explorar
        <ArrowDown size={15} />
      </a>
    </section>
  )
}
