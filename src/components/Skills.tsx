
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"
import type { IconType } from "react-icons"

type Skill = {
  name: string
  Icon: IconType
  color: string
}

const skills: Skill[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "Express", Icon: SiExpress, color: "#EDECF3" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#75A5D0" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#EDECF3" },
  { name: "VS Code", Icon: VscVscode, color: "#2297E8" },
  { name: "Vite", Icon: SiVite, color: "#B497F6" },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              03 / TECNOLOGÍAS
            </span>

            <h2>
              Mis <span>habilidades.</span>
            </h2>
          </div>

          <p>
            Tecnologías y herramientas que utilizo
            para desarrollar mis proyectos web.
          </p>
        </div>

        <div className="skills-compact-grid">
          {skills.map(({ name, Icon, color }) => (
            <div className="skill-compact-card" key={name}>
              <Icon
                size={31}
                color={color}
                aria-hidden="true"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
