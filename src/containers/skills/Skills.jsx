import React from "react";
import "./skills.css";
import {FaHtml5, FaNodeJs, FaCss3Alt, FaReact} from "react-icons/fa"
import {SiJavascript, SiMongodb} from "react-icons/si"
import ProgressBar from "../../components/progressBar/progressBar";

function Skills(){

    return(<div className="portifolio__skills section_padding">
        <div className="portifolio__skills-container">
            <h1>Skills</h1>
            <div className="portifolio__skills_techs-container">
                <div className="portifolio__skills_techs-content">
                    <FaHtml5 color="#fff" size={100} className = "tech-icons"/>
                    <p>HTML:</p>
                    <ProgressBar progress={"98%"}/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <FaCss3Alt color="#fff" size={100} className = "tech-icons"/>
                    <p>CSS: </p>
                    <ProgressBar progress={"97%"}/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <SiJavascript color="#fff" size={100} className = "tech-icons"/>
                    <p>Java Script: </p>
                    <ProgressBar progress={"90%"}/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <FaReact color="#fff" size={100} className = "tech-icons"/>
                    <p>React.JS: </p>
                    <ProgressBar progress={"90%"}/>        
                </div>
{/*                 <div className="portifolio__skills_techs-content">
                    <FaNodeJs color="#fff" size={100} className = "tech-icons"/>
                    <p>Node.JS: </p>
                    <ProgressBar progress={"90%"}/>
                </div>
                <div className="portifolio__skills_techs-content">
                    <SiMongodb color="#fff" size={100} className = "tech-icons"/>
                    <p>MongoDB: </p>
                    <ProgressBar progress={"90%"}/>
                </div> */}
            </div>
        </div>
    </div>)
}

export default Skills