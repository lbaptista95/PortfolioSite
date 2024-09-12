import React from "react"
import Skills from "./sections/Skills";
import AppMain from "./components/AppMain"
import About from "./sections/About"
import SignUp from "./sections/SignUp"
import Projects from "./sections/Projects"

export default function AppSections() {
  return (
    <div>
      <AppMain />
      <section id="about">
        <About/>        
      </section>
      <section id="skills">
        <Skills/>        
      </section>
      <section id="projects">
        <Projects/>        
      </section>
    </div>

  )
}
