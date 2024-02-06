import React, { useState } from "react";
import "./navbar.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { perfilUrl } from "../../containers/projects/imports";



function Navbar({darkMode}){
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => (
        <>
            <li><a href="#projects"className={` ${darkMode ? "dark-mode": ""}`}>Projects</a></li>
            <li><a href="#technologies"className={` ${darkMode ? "dark-mode": ""}`}>Technologies</a></li>
            <li><a href="#about"className={` ${darkMode ? "dark-mode": ""}`}>About</a></li>
            <li><a href="#contact"className={` ${darkMode ? "dark-mode": ""}`}>Contact</a></li>
        </>
    )
    
    const MenuSocial = () => (
        <>
            <li>
                <a href="mailto:caduadosiqueira@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdEmail fontSize={30}  className="icons-social" color={!darkMode ? "#151515" : "#F1FAEE"}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/dev-carlos-siqueira" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin fontSize={30} className="icons-social" color={!darkMode ? "#151515" : "#F1FAEE"}/>
                    </a>
                </li>
            <li>
                <a href="https://github.com/caduado13" target="_blank" rel="noopener noreferrer" >
                    <FaGithub fontSize={30} className="icons-social" color={!darkMode ? "#151515" : "#F1FAEE"}/>
                </a>
            </li>
        </>)
    return(<div>
        <header className={`portifolio__navbar portifolio__navbar__bg ${darkMode ? "dark-mode": ""}`}>
            <img src={perfilUrl} alt="" />
            <ul className="menu-desk">
                <Menu/>
            </ul>
            <ul className="menu-desk-socials">
                <MenuSocial/>
            </ul>
            <div className = "portifolio__navbar-mobile">
                {toggleMenu
                ? <RiCloseLine size = {30} onClick={()=>{setToggleMenu(false)}}/>
                : <RiMenu3Line size = {30} onClick={()=>{setToggleMenu(true)}}/>
                }{toggleMenu && (
                    <div className="portifolio__navbar_popup-container">
                        <ul className="menu">
                            <Menu/>
                        </ul>
                        <ul className="menu-socials">
                            <MenuSocial/>
                        </ul>
                    </div>
                )}
            </div> 
        </header>
    </div>)
}


export default Navbar