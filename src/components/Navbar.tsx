
import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a
          href="#inicio"
          className="logo"
          onClick={() => setOpen(false)}
        >
          Diego Tardon<span>.</span>
        </a>

        <nav
          className="nav-links"
          aria-label="Navegación principal"
        >
          {links.slice(0, 3).map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="nav-contact">
          Contacto
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Navegación móvil"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}

          <div className="mobile-menu-bottom">
            DESARROLLADOR WEB · FULL STACK
          </div>
        </nav>
      )}
    </header>
  )
}
