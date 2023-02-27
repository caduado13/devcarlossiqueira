import React from "react";
import "./contact.css"

function Contact(){
    return(<div id="contact">
        <section className="portifolio__contact">
            <h1>Contact</h1>
            <div className="rect3"/>
            <div className="portifolio__contact_inputs">
                <label htmlFor="name">Name:</label>
                <input type="text"  id="name"/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email"/>
                <label htmlFor="txt-area">Message: </label>
                <textarea id="txt-area"></textarea>
            </div>
            <div className="portifolio__contact_buttons">
                <p className="hover-underline-animation">
                    <button className="portifolio__contact-btn">Send email</button>
                </p>
            </div>
        </section>
    </div>)
}

export default Contact