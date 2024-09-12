import React from "react"

export default function AppHeader() {

    function handleScrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

    }

    return (
        <div className="app-header">
            <div className="app-header-left" onClick={() => handleScrollToSection("/")}>
                <h1>Luís Baptista</h1>
                <h1>|</h1>
                <h1 style={{ fontWeight: 'lighter' }}> Software Developer</h1>
            </div>
            <div className="app-header-right">
                <div className="app-header-button" onClick={() => handleScrollToSection("about")}>Home</div>
                <div className="app-header-button" onClick={() => handleScrollToSection("skills")}>Skills</div>
                <div className="app-header-button" onClick={() => handleScrollToSection("projects")}>Projects</div>                
            </div>
        </div>
    )
}