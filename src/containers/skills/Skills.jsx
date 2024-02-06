import React from "react";
import "./skills.css";
import { BsFillMortarboardFill } from "react-icons/bs"
import {PiBooksFill} from "react-icons/pi"
import {MdWorkspacePremium} from "react-icons/md";

import Item from "./Item";
import { data } from "./skillsData";

const componentLevel = (level) => {
    let content;
    switch (level) {
        case "entry":
            content = <PiBooksFill color="#fff" size={100} className = "tech-icons"/>
            break;
        case "junior":
            content = <BsFillMortarboardFill color="#fff" size={100} className = "tech-icons"/>
            break;
        case "senior":
            content = <MdWorkspacePremium color="#fff" size={100} className = "tech-icons"/>
            break;
        default:
            break;
    }
    return (
        <div>
            {content}
        </div>
    )
}

function Skills({darkMode}){
    return(<div className={`portifolio__skills ${darkMode ? "dark-mode" : ""} section_padding`}>
        <div className={`portifolio__skills-container ${darkMode ? "dark-mode" : ""}`}>
            <h1>Skills</h1>
            <div className="portifolio__skills_techs-container">
                {data.map((data, index) =>(
                    <Item 
                        key={index}
                        title={data.title} 
                        iconLenguage={data.icon}
                        iconLevel={componentLevel(data.level)}
                    />
                ))}
            </div>
        </div>
    </div>)
}

export default Skills