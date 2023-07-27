import {FaHtml5, FaNodeJs, FaCss3Alt, FaReact} from "react-icons/fa"
import {SiJavascript, SiMongodb, SiTypescript, SiRedux} from "react-icons/si"


export const data = [
    {
        title: "HTML: Senior level",
        icon: <FaHtml5 color="#fff" size={100} className = "tech-icons"/>,
        level: "senior"
    },{
        title: "CSS: Senior level",
        icon: <FaCss3Alt color="#fff" size={100} className = "tech-icons"/>,
        level: "senior"
    },{
        title: "Java Script: Junior level",
        icon: <SiJavascript color="#fff" size={100} className = "tech-icons"/>,
        level: "junior"
    },{
        title: "Typescript: Junior level",
        icon: <SiTypescript color="#fff" size={100} className = "tech-icons"/>,
        level: "junior"
    },{
        title: "React.JS: Junior level",
        icon: <FaReact color="#fff" size={100} className = "tech-icons"/>,
        level: "junior"
    },{
        title: "Redux/toolkit: Junior level",
        icon: <SiRedux color="#fff" size={100} className = "tech-icons"/>,
        level: "junior"
    },{
        title: "Node.JS: Entry level",
        icon: <FaNodeJs color="#fff" size={100} className = "tech-icons"/>,
        level: "entry"
    },{
        title: "MongoDB: Entry level",
        icon: <SiMongodb color="#fff" size={100} className = "tech-icons"/>,
        level: "entry"
    },
]