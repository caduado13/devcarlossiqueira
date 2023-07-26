import React from "react";
import "./skills.css";
import {FaHtml5, FaNodeJs, FaCss3Alt, FaReact} from "react-icons/fa"
import {SiJavascript, SiMongodb} from "react-icons/si"
import { BsFillMortarboardFill } from "react-icons/bs"
import {PiBooksFill} from "react-icons/pi"
import {MdWorkspacePremium} from "react-icons/md"



function Skills(){
    return(<div className="portifolio__skills section_padding">
        <div className="portifolio__skills-container">
            <h1>Skills</h1>
            <div className="portifolio__skills_techs-container">
                <div className="portifolio__skills_techs-content">
                    <div>
                        <FaHtml5 color="#fff" size={100} className = "tech-icons"/>
                        <p>HTML: Senior Level</p>
                    </div>
                    <MdWorkspacePremium color="#fff" size={100} className = "tech-icons"/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <div>
                    <FaCss3Alt color="#fff" size={100} className = "tech-icons"/>
                        <p>CSS: Senior Level</p>
                    </div>
                    <MdWorkspacePremium color="#fff" size={100} className = "tech-icons"/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <div>
                    <SiJavascript color="#fff" size={100} className = "tech-icons"/>
                        <p>Java Script: Junior Level</p>
                    </div>
                    <BsFillMortarboardFill color="#fff" size={100} className = "tech-icons"/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <div>
                    <FaReact color="#fff" size={100} className = "tech-icons"/>
                        <p>React.JS: Junior Level</p>        
                    </div>
                    <BsFillMortarboardFill color="#fff" size={100} className = "tech-icons"/>
                </div>
                <div className="portifolio__skills_techs-content">
                    
                    <div>
                    <FaNodeJs color="#fff" size={100} className = "tech-icons"/>
                        <p>Node.JS: Entry Level</p>
                    </div>
                    <PiBooksFill color="#fff" size={100} className = "tech-icons"/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <div>
                    <SiMongodb color="#fff" size={100} className = "tech-icons"/>
                        <p>MongoDB: Entry Level</p>
                    </div>
                    <PiBooksFill color="#fff" size={100} className = "tech-icons"/>
                </div> 
            </div>
        </div>
    </div>)
}

export default Skills