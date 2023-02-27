import React from "react";
import "./projects.css"
import { Project } from "../../components";
import { projectData } from "./projectsData";



function Projects(){
    return(<div className="portifolio__projects-bg section_padding" id="projects">
        <section className="portifolio__projects ">
            <h1 className="gradient__text">Projects</h1>
            <div className="rect"/>
            <div className="flex-grid">
            <div className="portifolio__projects-content">
                {projectData.map((item, index)=> (
                    <Project title={item.title} desc = {item.desc} image = {item.imgUrl} key = {item.title + index} />
                ))}
            </div>
            </div>
        </section>
    </div>)
}

export default Projects