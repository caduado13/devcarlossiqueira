import React from "react";
import "./header.css";
import Loop from "../../components/reactLoop/Loop";

import {motion} from "framer-motion";

const Title = ({text, duration}) =>(
    <>
        <motion.h1 className="gradient__text"
                initial = {{opacity: 0, scale: 0.5}}
                animate ={{opacity: 1, scale: 1}}
                transition = {{duration: duration}}
        >{text}</motion.h1>
    </>
)
const Par = ({text, duration}) =>(
    <>
        <motion.p 
                initial = {{opacity: 0, scale: 0.5}}
                animate ={{opacity: 1, scale: 1}}
                transition = {{duration: duration}}
        >{text}</motion.p>
    </>
)


function Header(){

        return(<div className="portifolio__header-background section_padding">
        <section className="portifolio__header_section">
            <div className="portifolio__header_section-title">
                <Title text={"Hello, i'm Carlos Eduardo"} duration = {1}/>
                <Title text={"Wellcome to my personal portifoilio"} duration = {2}/>
                <Par text={"I developed this web page to challenge myself and show my evolution in react.js, I show you a little about the projects I've done, a little about myself and my contacts"} duration = {3}/>
            </div>
            <div className="portifolio__header_section-image">
                <div className="portifolio__header_section-image_info1 slit-in-vertical">
                    <p>Developed by: <span>&copy;Carlos Siqueira</span></p>
                </div>
                <div className="portifolio__header_section-image_info2">
                    <p>Lenguage: <span>React.js</span></p>
                </div>
                <Loop></Loop>
            </div>
        </section>
    </div>)     
}

export default Header