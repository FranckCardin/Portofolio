//IMPORT HOOK REACT 
import React from "react";
//IMPORT CSS
import "./about.scss";

function About() {
    return (
        /* SECTION ABOUT  */
        <section className="about" id="about">
            <div className="about__profile">
                <h1 className="about__profile_title">
                    Hi, I'm
                    <br />
                    <span>Franck Cardin</span>
                </h1>
                <p className="about__profile_description">
                    <i className="about__profile_description_icon fa-brands fa-react"></i>
                    Développeur Web Front End - Javascript // ReactJS
                </p>
                <p className="about__profile_socialIcons">
                    <a
                        href="https://github.com/FranckCardin"
                        aria-label="GitHub"
                        target="_blank"
                        className="about__profile_socialIcons_link"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/franck-cardin-a30b95a4"
                        aria-label="LinkedIn"
                        target="_blank"
                        className="about__profile_socialIcons_link"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="../../assets/cv/CV.pdf"
                        aria-label="Curriculum Vitae"
                        target="_blank"
                        className="about__profile_socialIcons_link"
                        download = "CV.pdf"
                    >
                        CV
                    </a>
                </p>
            </div>
        </section>
    )
}

export default About;



    

