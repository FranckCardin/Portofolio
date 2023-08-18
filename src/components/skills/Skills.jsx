//IMPORT HOOK REACT 
import React from "react";
//IMPORT DATA
import { skillsData } from "../data/data";
import { toolsData } from "../data/data";
//IMPORT CSS
import "./skills.scss";


function Skills(){
    return (
        /* SECTION SKILLS */
        <>
        <section className="skills" id="skills">
            <h2 className="skills__title">Compétences</h2>
            
            <div className="skills_container">
                <div className="skills__content">
                    {skillsData.map((skill) => (
                        <div className="skills__content_skill" key={skill.id}>
                            <img className ="skills__content_skill_img" src={skill.img} alt={skill.title}/>
                            <div className="skills__content_skill_info">
                                <h3 className="skills__content_skill_info_title">{skill.title}</h3>
                                <p className="skills__content_skill_info_status">{skill.status}</p>                    
                            </div>
                        </div>
                    ))}
                    </div>
                    
                    <hr className="skills_hr"/>

                    <div className="skills__content">
                    {toolsData.map((tool) => (
                        <div className="skills__content_tool" key={tool.id}>
                            <img className ="skills__content_tool_img" src={tool.img} alt={tool.title}/>
                            <div className="skills__content_tool_info">
                                <h3 className="skills__content_tool_info_title">{tool.title}</h3>
                                <p className="skills__content_tool_info_status">{tool.status}</p>                    
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills;