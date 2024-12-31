import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./Section.scss";
import projectData from "./project.json"

const Section4 = () => {  
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add('scaled'); 
                }, 100);
              } else {
                entry.target.classList.remove('scaled');
              }
            });
          },
          {
            rootMargin: '100% 0px 10% 0px',
            threshold: 0.95,
          }
        );
    
        const targets = document.querySelectorAll('.s4project');
        targets.forEach((target) => observer.observe(target));
    
        return () => {
          targets.forEach((target) => observer.unobserve(target));
          observer.disconnect();
        };
      }, []);

    return (
        <div className="section0 section4">
            <div className="big-font yoso">
              participating <br/>
              project
            </div>
            {projectData.map((project, index) => (
                <a href={project.address} target="_blank" className="s4project address">
                    <div className="s4-left-area">
                        {/* <img className="s4-img" src={project.image} alt={project.title} /> */}
                    </div>
                    <div key={index} className="s4-right-area">
                        <p className="title right-p">Title : {project.title}</p>
                        <div className="right-p2">
                            <p className="p2-1 progress">{project.progress}</p>
                            <ul>
                            <li className="personnel">작업인원 : {project.personnel}</li>
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