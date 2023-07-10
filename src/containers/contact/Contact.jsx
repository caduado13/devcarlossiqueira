import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser"

function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");

    function sendEmail(e){
        e.preventDefault()
        if(name === "" || email === "" || message === ""){
            alert("Por favor prencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }
        emailjs.send("service_xxn68jk", "template_wwlux6t", templateParams, "bK7ubGthRRFUMzLkF").then(()=>{
                alert("Email, enviado com sucesso!")
                setEmail("")
                setMessage("")
                setName("")
            }
        )
    }


    return(<div id="contact">
        <section className="portifolio__contact">
            <h1>Contact</h1>   
            <div className="rect3"/>
            <form onSubmit={sendEmail}>
                <div className="portifolio__contact_inputs">
                    <label htmlFor="name">Name:</label>
                    <input type="text"  id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <label htmlFor="txt-area">Message: </label>
                    <textarea id="txt-area" onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
                </div>
                <div className="portifolio__contact_buttons">
                    <p className="hover-underline-animation">
                        <button className="portifolio__contact-btn">Send email</button>
                    </p>
                </div>
            </form>
           
        </section>
    </div>)
}

export default Contact