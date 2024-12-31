import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./Section.scss";
import projectData from "./project.json"

const Section4 = () => {  

    return (
        <div className="section0 section4">
            <div className="big-font">
              participating <br/>
              project
            </div>
            {projectData.map((project, index) => (
                <a href={project.address} target="_blank" className="s4project address">
                    <div className="s4-left-area">
                        {/* <img className="s4-img" src={project.image} alt={project.title} /> */}
                    </div>
                    <div key={index} className="s4-right-area">
                        <p className="title right-p">{project.title}</p>
                        <div className="right-p2">
                            <p className="p2-1 progress">{project.progress}</p>
                            <ul>
                            <li className="personnel">{project.personnel}</li>
                            <li
                                className="outline"
                                dangerouslySetInnerHTML={{ __html: project.outline }}
                            ></li>
                            <li
                                className="singularity"
                                dangerouslySetInnerHTML={{ __html: project.singularity }}
                            ></li>
                            </ul>
                        </div>
                        <p className="contribution">{project.contribution}</p>                        
                    </div>                
                </a>   
            ))}             
        </div>
    );
};

export default Section4;