
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Reveal from "./components/Reveal"

import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>
      </main>

      <Contact />
    </>
  )
}
