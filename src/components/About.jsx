import React from "react";
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';


function About() {
    return <div>
        <h2>ABOUT ME</h2> 
        <div className="about-container">
            <div>
                <PersonIcon style={{ fontSize: 50 }} />
                <h3>GETTING PERSONAL</h3>
                <p>Quietly confident, enthusiastic, inspired, naturally curious, and a big dreamer. I made a career switch into the tech field and am a self-taught developer. I enjoy the process of building something that was once just an idea.</p>
                <p>During my downtime, I can be found watching anime, reading, painting, cheering on the Baltimore Ravens, or planning my next travel adventure. I'm a big Marvel fan and you'll see me at all the midnight premieres for the movies. I also like playing golf, volleyball, and tennis.</p>
            </div>
            <div>
                <ComputerIcon style={{ fontSize: 50 }} />
                <h3>TECHNICAL SKILLS</h3>
                <p><strong>Programming Languages:</strong> JavaScript, HTML, CSS</p>
                <p><strong>Libraries & Frameworks:</strong> Node.js, jQuery, Bootstrap, Express.js, React, AngularJS</p>
                <p><strong>Other Technologies:</strong> Git, WordPress, Drupal, Heroku, MongoDB, EveryAction, Luminate Online, Engaging Networks, Salesforce Marketing Cloud, Salsa Classic, Google Tag Manager, Google Optimize</p>
                <p>Working knowledge of JSON, PHP, SQL, Python, and Java. Familiar with Agile/Scrum methodology.</p>
            </div>
            <div>
                <WorkIcon style={{ fontSize: 50 }} />
                <h3>WORK EXPERIENCE</h3>
                <p>A quick learner, independent, organized employee.</p>
                <p>Over four years of professional work experience. I've been employed at a digital marketing agency since 2020 as a full-time Web Developer. I've also been working as a freelance web developer on a volunteer basis for 2 years. Prior to making a career switch, I worked as an Office Manager in a surgeon's office and a Development Coordinator at a non-profit organization. Please contact me for a copy of my resume.</p>
            </div>
            <div>
                <SchoolIcon style={{ fontSize: 50 }} />
                <h3>EDUCATION</h3>
                <p>I successfully completed two web development bootcamps on Udemy as well as multiple courses on FreeCodeCamp and Codecademy.</p>
                <p>I have a Bachelor of Science in Health Administration & Policy with a concentration in Health Systems Management from George Mason University.</p>
            </div>
        </div>  
    </div>
};

export default About;