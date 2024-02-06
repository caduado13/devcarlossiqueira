import React from "react";
import "./about.css"
import { AboutImg } from "../../containers/projects/imports"

function About({darkMode}){
    return(<div id="about" className={`portifolio__about-bg ${darkMode ? "dark-mode" : ""} section_padding`}>
        <section className="portifolio__about">
            <div className="portifolio__about-image">
                <img src={AboutImg} alt="about"/>
            </div>
            <div className={`portifolio__about-content ${darkMode ? "dark-mode" : ""}`}>
                <h1 className={`${darkMode ? "dark-mode" : ""}`}>About me</h1>
                <div className={`path-about-h1 ${darkMode ? "dark-mode" : ""}`}></div>
                <p>I'm 24 years old, since i was a child, I have always been passionate about solving problems involving logic. Found in programming the way to challenge me every day. I'm looking for evolution, whether it's programming or learning a new language.</p>
            </div>
        </section>
    </div>)
}

export default About