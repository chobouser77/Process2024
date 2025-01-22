import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./Section.scss";

const Section1 = () => {
    return (
        <div className="section0 section1">
            <p className="big-font yoso">
                Always <br/>
                ready
            </p>
            <div className="right-div yoso">
                <div className="s1-r s1-r1">
                    퍼블리셔에서 더 나아가 프론트엔드 까지<br/>
                    관심이 있는 신입 이희준 입니다.
                </div>
                <div className="s1-r s1-r2">
                    <p>
                        2024년 UI / UX 국비과정을 통해 퍼블리싱에 흥미가 생겨 코딩을 더 공부하게 되었고,<br/>
                        퍼블리셔, 더 나아가 프론트엔드를 목표로 현재 React 까지 공부 중 입니다.
                    </p>
                    <p> 
                        html , css , js 를 기반으로 퍼블리싱을 진행하고 다양한 프로젝트를 통해<br/>
                        디자이너 , 개발자와 협업 하는 법을 배웠으며 ,<br/>
                        scss 혹은 다양한 라이브러리를 활용하여 이펙트를 줄 수 있으며,<br/>
                        그 밖에도 다양한 도전을 하고자 합니다.
                    </p>  
                </div>
            </div>
        </div>
    );
};

export default Section1;