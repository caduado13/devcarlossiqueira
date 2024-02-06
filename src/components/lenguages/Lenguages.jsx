import React from "react";
import "./lenguages.css"
import {FaHtml5, FaNodeJs, FaCss3Alt, FaReact} from "react-icons/fa"
import {SiJavascript, SiMongodb, SiTypescript, SiRedux} from "react-icons/si"
import {VscGear} from "react-icons/vsc";

function Lenguages({darkMode}){
    return(<div id="technologies" className={`portifolio__technologies-bg ${darkMode ? "dark-mode" : ""} section_padding`}>

        <section className="portifolio__technologies-container">
            <div className="gear1"><VscGear size={50} className = "rotate-center" opacity={0.3} color={darkMode? "#fff":"#000"}/></div>
            <div className="gear2"><VscGear size={50} className = "rotate-center" opacity={0.3} color={darkMode? "#fff":"#000"}/></div>
            <div className="gear3"><VscGear size={50} className = "rotate-center" opacity={0.3} color={darkMode? "#fff":"#000"}/></div>
            <h1 className={`gradient__text ${darkMode ? "dark-mode" : ""}`}>Tools</h1>
            <div className={`rect ${darkMode ? "dark-mode" : ""}`}/>
            <p>Tools I use to make life easier</p>
            <div className="portifolio__technologies_tech-icons">
                <FaHtml5 color="#dd4b25" size={100} className = "tech-icons"/>
                <FaCss3Alt color="#2862e9" size={100} className = "tech-icons"/>
                <SiJavascript color="#f7df1e" size={100} className = "tech-icons"/>
                <SiTypescript color="#2f74c0" size={100} className = "tech-icons"/>
                <FaReact color="#5ed3f3" size={100} className = "tech-icons"/>
                <SiRedux color="#764abc" size={100} className = "tech-icons"/>
                <FaNodeJs color="#7cb73f" size={100} className = "tech-icons"/>
                <SiMongodb color="#10a54e" size={100} className = "tech-icons"/>
            </div>
        </section>
    </div>)
}

export default Lenguages