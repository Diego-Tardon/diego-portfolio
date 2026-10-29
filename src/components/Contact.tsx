
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <a href="#inicio" className="logo">
            Diego Tardon<span>.</span>
          </a>

        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Diego-Tardon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/diego-tard%C3%B3n/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
        </div>

        <a
          href="mailto:dtardon.acruces@gmail.com?subject=Contacto%20desde%20tu%20portfolio"
          className="footer-email"
        >
          <Mail size={18} />
          <span>dtardon.acruces@gmail.com</span>
          <ArrowUpRight size={15} />
        </a>

        <div className="footer-right">
          <span>
            © {new Date().getFullYear()}
          </span>

          <a href="#inicio" aria-label="Volver arriba">
            <ArrowUp size={19} />
          </a>
        </div>

      </div>
    </footer>
  )
}
