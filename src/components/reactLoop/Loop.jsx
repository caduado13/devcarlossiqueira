import React from "react";
import "./loop.css";
import {motion} from "framer-motion"

export default function Loop(){
    return(<div className="circles">
        <motion.div
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        transition = {{duration: 1}}
        ></motion.div>
        <motion.div
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        transition = {{duration: 3}}
        ></motion.div>
        <motion.div
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        transition = {{duration: 5}}
        ></motion.div>
        <span></span>
    </div>)
}