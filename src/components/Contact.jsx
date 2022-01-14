import React from "react";


function Contact() {
    return <div className= "contact-section">
        <h2 style= {{ color: "#E6EBE0" }}>LET'S GET IN TOUCH</h2>
        <ul className= "contact-links">
            <li> <a href="mailto:elaine.mangulabnan@gmail.com">email</a> </li>
            <li> <a href="https://www.linkedin.com/in/elaine-mangulabnan/" target="_blank" rel="noopener noreferrer">linkedin</a> </li>
            <li> <a href="https://github.com/elainemango" target="_blank" rel="noopener noreferrer">github</a> </li>
            <li> <a href="https://www.freecodecamp.org/elainemango" target="_blank" rel="noopener noreferrer">freecodecamp</a> </li>
        </ul>
    </div>
}

export default Contact;