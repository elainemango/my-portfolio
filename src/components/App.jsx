import React from "react";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import project from "../project";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return <div> 
        <Intro />
        <About />
        <h2 style= {{ fontSize: 50 }}>PROJECTS</h2>
        <dl className= "projects-container">
            {project.map(item =>
                <Projects
                    key= {item.id}
                    img= {item.img}
                    title= {item.title}
                    description= {item.description}
                    link= {item.link}
                    code= {item.code}
                />
            )}
        </dl>
        <Contact />
        <Footer />
    </div>
}

export default App;