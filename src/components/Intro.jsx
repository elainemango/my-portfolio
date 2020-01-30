import React from "react";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function Intro() {
    return <div className= "welcome-section animated fadeInLeft slow">
        <h1>   
            <span>Hello!</span>
            <span>My name</span>
            <span>is Elaine.</span>
        </h1>
        <p >I'm a Front End Developer.</p>

        <div className= "scroll animated infinite flash slower"> 
            <ArrowDownwardIcon style= {{ fontSize: 30 }} /> 
            <p style= {{ fontSize: 10 }}>SCROLL DOWN</p>
        </div>

    </div>
};

export default Intro;
