import React, { useState } from "react";
import "./navbar.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { perfilUrl } from "../../containers/projects/imports";



function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => (
        <>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </>
    )
    
    const MenuSocial = () => (
        <>
            <li><a href="#"><MdEmail fontSize={25}/></a></li>
            <li><a href="www.linkedin.com/in/carlos-eduardo-siqueira-306673153" target={"_blank"}><FaLinkedin fontSize={25}/></a></li>
            <li><a href="https://github.com/caduado13" target={"_blank"}><FaGithub fontSize={25}/></a></li>
        </>)
    return(<div>
        <header className="portifolio__navbar portifolio__navbar__bg">
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