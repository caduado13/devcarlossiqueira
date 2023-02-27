import React from "react";
import "./project.css";

function Project({image, title, desc}){
    return(<div className="portifolio__projects_project-container">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="portifolio__projects_project-list">
            <p><span></span></p>
            <p><span></span></p>
            <p><span></span></p>
        </div>
        <div className="portifolio__projects_project-buttons">
            <button><a>Visit</a></button>
            <button><a>GitHub</a></button>
        </div>
    </div>)
}

export default Project