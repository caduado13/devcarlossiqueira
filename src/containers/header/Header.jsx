import React from "react";
import "./header.css";
import Loop from "../../components/reactLoop/Loop";
import { FaFileDownload } from "react-icons/fa";

function Header({darkMode}){
        const publicDir = process.env.PUBLIC_URL

        return(<div className={`portifolio__header-background ${darkMode ? "dark-mode": ""} section_padding`}>
        <section className="portifolio__header_section">
        
            <div className="portifolio__header_section-title">
                <h1 className={`gradient__text ${darkMode ? "dark-mode": ""}`}>Hello, i'm Carlos Eduardo</h1>
                <h1 className={`gradient__text ${darkMode ? "dark-mode": ""}`}>Wellcome to my personal portifoilio</h1>
                <p>I developed this web page to challenge myself and show my evolution in react.js, I show you a little about the projects I've done, a little about myself and my contacts</p>
                <div className="curriculum-download_div">
                    <a href={`${publicDir}/Carlos_Siqueira_CV.pdf`} download={"Carlos_Siqueira_CV.pdf"} className={`curriculum-download gradient__text ${darkMode ? "dark-mode": ""}`} id="download_cv"><FaFileDownload size={25} color="gray" /> Download my curriculum</a>
                </div>
            </div>
            <div className="portifolio__header_section-image">
                <div className={`portifolio__header_section-image_info1 ${darkMode ? "dark-mode": ""} slit-in-vertical`}>
                    <p className={` ${darkMode ? "dark-mode": ""}`}>Developed by: <span>&copy;Carlos Siqueira</span></p>
                </div>
                <div className={`portifolio__header_section-image_info2 ${darkMode ? "dark-mode": ""}`}>
                    <p className={` ${darkMode ? "dark-mode": ""}`}>Lenguage: <span>React.js</span></p>
                </div>
                <Loop></Loop>
            </div>
        </section>
    </div>)     
}

export default Header