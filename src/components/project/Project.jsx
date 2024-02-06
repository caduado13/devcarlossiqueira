import React from "react";
import "./project.css";

function Project({children, darkMode}){
    return(
    <div className={`portifolio__projects_project-container ${darkMode ? "dark-mode": ""}`}>
        {children}
    </div>)
}

export default Project