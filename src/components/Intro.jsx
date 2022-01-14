import React from "react";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function Intro() {
    return <div className= "welcome-section animated fadeInLeft slow">
        <h1>   
            <span>Hello!</span>
            <span>My name</span>
            <span>is Elaine.</span>
        </h1>
        <p className="intro-text">I'm a Front End Web Developer</p>

        <div className= "scroll animated infinite fadeInDown slow"> 
            <ArrowDownwardIcon style= {{ fontSize: "2.5em" }} /> 
            <p style= {{ fontSize: "1.25em", fontWeight: "bold" }}>SCROLL DOWN</p>
        </div>

    </div>
};

export default Intro;