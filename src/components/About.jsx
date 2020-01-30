import React from "react";
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';


function About() {
    return <div className= "about-section">
        <h2 style= {{ fontSize: 50 }}>ABOUT ME</h2>
        <div className="about-container">
            <div>
                <PersonIcon style={{ fontSize: 50 }} />
                <h3>GETTING PERSONAL</h3>
                <p>Quietly confident, enthusiastic, inspired, and a big dreamer. Always striving to be a better version of myself.</p>
                <p>
                    I enjoy watching anime, reading, cheering on the Baltimore Ravens, and planning the next travel adventure. I'm a big Marvel fan and you'll see me at all the midnight
                    premieres for the movies. When I have time, I enjoy playing flag football, volleyball, golf, and tennis. 
                </p>
            </div>
            <div>
                <ComputerIcon style={{ fontSize: 50 }} />
                <h3>SELF-TAUGHT</h3>
                <p>
                    In July 2019, I left my job to study full-time and pursue my dream of becoming a developer. <strong>Why?</strong> I wanted a career where I could
                    combine my passion for continuous learning and be challenged. I enjoy the process of building something that was once just an idea. Udemy, freeCodeCamp, Codecademy, and YouTube have been my best teachers these past couple of months. 
                </p>
                <p>
                    Proficient in HTML, CSS, and JavaScript. Working knowledge of MongoDB, jQuery, React, Node JS, EJS, JSX, API, XML, Git, SQL, and Python. 
                </p>
            </div>
            <div>
                <SchoolIcon style={{ fontSize: 50 }} />
                <h3>EDUCATION</h3>
                <p>
                    I received my Bachelor of Science in Health Administration & Policy with a concentration in Health Systems Management from George Mason University in 2017.
                </p>
                <p>Achievements: Deans List 2015-2017. President and Treasurer of the Filipino Cultural Association. External Vice President of the Asian Pacific American Coalition.</p>
            </div>
            <div>
                <WorkIcon style={{ fontSize: 50 }} />
                <h3>WORK EXPERIENCE</h3>
                <p>A quick learner, independent, organized employee.</p>
                <p>
                    Over two years of professional work experience. Held two full-time jobs since graduating as an Office Manager in a surgeon's office 
                    and a Development Coordinator at a non-profit organization. Please see resume for specific details on previous roles.
                </p>
            </div>
        </div>  
    </div>
};

export default About;

