import React from "react";
import "./project.css";

function Project({children}){
    return(
    <div className="portifolio__projects_project-container">
        {children}
    </div>)
}

export default Project