//IMPORT HOOK REACT 
import React from "react";
//IMPORT DATA PROJECTS
import { projectData } from '../data/data.js';
//IMPORT CSS 
import './projects.scss';
//

function Projects(){
    return (
        <>
        {/* SECTION PROJECTS */}
        <hr className="projects__hr" />
        <section className="projects" id="projects">
            <h2 className="projects__title">Projets</h2>
            <div className="projects__grid">
                {projectData.map((project) => (
                    <div className="projects__card" key={project.id}>
                        <div className="projects__card_header">
                            <h3 className="projects__card_header_title">{project.title}</h3>
                            <img className="projects__card_header_img" src={project.img} alt={project.title} />                        
                        </div>
                        <div className="projects__card_body">
                            <p className="projects__card_body_description">{project.description}</p>
                            {project.task.map((paragraph, index) => (
                                    <p key={index} className="projects__card_body_task">{paragraph}</p>
                                ))}
                        </div>
                        <div className="projects__card_footer">
                            <div className="projects__card_footer_langage">
                                {project.langage.map((paragraph, index) => (
                                    <p key={index} className="projects__card_footer_langage_content">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="projects__card_link">
                            {project.gitHubPageLink ? ( 
                                <a href={project.gitHubPageLink} aria-label="GitHub Pages"
                                target="_blank"><i className="projects__card_link_site fa-solid fa-link"></i></a>
                            ) : ('')}
                            <a href={project.gitHubRepoLink} aria-label="GitHub Repositories"
                    target="_blank"><i className="projects__card_link_github fa-brands fa-github"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;