import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./Section.scss";

const Section3 = () => {
    const skil = [
      { "title" : "Language" , "text" : [ "HTML" , "CSS" , "SCSS" , "JavaScript" ] },
      { "title" : "JS Library " , "text" : [ "jQuery" , "AOS" , "Gsap(공부중)" , "React(공부중)" ] },
      { "title" : "cooperation" , "text" : [ "Git / Github"] },
      { "title" : "Style Library" , "text" : [ "TaliwindCss" , "BootstrapCss(공부중)"] },
      { "title" : "Distribution" , "text" : [ "Vercel" ] },
      { "title" : "Design" , "text" : [ "Figma" , "Photoshop" , "illustrator"] }
    ]

    return (
        <div className="section0 section3">
            <p className="big-font yoso">Tech Stacks</p>
            <div className="right-div">
              {skil.map((item, index) => (
                <div key={index} className="s3-r yoso">
                  <p className="s3-r-1">{item.title}</p>
                  <div className="s3-r-2">
                    {item.text.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </div>
                </div>
              ))}               
            </div>
        </div>
    );
};

export default Section3;