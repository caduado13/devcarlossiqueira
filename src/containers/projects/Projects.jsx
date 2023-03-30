import React from "react";
import "./projects.css"
import { Project } from "../../components";
import { projectData } from "./projectsData";
import Description from "./projetcs-comp/Description"
import Img from "./projetcs-comp/Img"
import Title from "./projetcs-comp/Title"
import Tag from "./projetcs-comp/Tag";


function Projects(){
    return(<div className="portifolio__projects-bg section_padding" id="projects">
        <section className="portifolio__projects ">
            <h1 className="gradient__text main-h1">Projects</h1>
            <div className="rect"/>
            <div className="flex-grid">
            <div className="portifolio__projects-content">
                {projectData.map(({title, desc, image, tags, source, visit, id}) =>(
                    <Project key={id}>
                        <div>
                            <Img img={image}/>
                        </div>
                        <div className="portifolio__projects-content_project-content">
                            <Title title={title} />
                            <Description desc={desc} />
                            <ul className="portifolio__projects-content_project-content_list">
                                {tags.map((tag, index) =>(
                                    <Tag tag={tag} key ={index}/>
                                ))}
                            </ul>
                            <div className="portifolio__projects-content_project-content_btns" >
                                <a href={visit} rel="noreferrer" target = "_blank"><button>Visit</button></a>
                                <a href={source} rel="noreferrer" target = "_blank"><button>Git Hub</button></a>    
                            </div>
                        </div>
                    </Project>
                ))}  
            </div>
            </div>
        </section>
    </div>)
}

export default Projects