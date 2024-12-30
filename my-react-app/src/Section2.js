import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./Section.scss";

const Section2 = () => {
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const handleMove = (e , cardRef) => {
      const { offsetX: x, offsetY: y } = e.nativeEvent;
      const roX = (2 / 30) * y - 20;
      const roY = (-4 / 30) * x + 20;

      cardRef.current.style.transform = `perspective(350px) rotateX(${roX}deg) rotateY(${roY}deg)`;
      // overlayRef.current.style.cssText = `background-position: ${(x + y) / 5}%; filter: opacity(${x / 200}) brightness(1.2)`;
    }
    const handleOut = (cardRef) => {
      // overlayRef.current.style.cssText = 'opacity(0); background-position: 0%';
      cardRef.current.style.transform = 'perspective(350px) rotateX(0deg) rotateY(0deg)';
    };



    return (
        <div className="section section2">
            <p className="big-font">
              Experience
            </p>
            <div className="right-div">
                <div ref={cardRef1} className="s2-r s2-r1" onMouseMove={(e) => handleMove(e, cardRef1)} onMouseOut={() => handleOut(cardRef1)}>
                    <p className="s2-r-1">Experience</p>
                    <ul className="s2-r-2">
                      <li>학원에서의 팀 프로젝트에서 디자이너와의 Figma 협업을 통한, 사용법과 확인해야 할 내용들 확인</li>
                      <li>학원에서의 팀 프로젝트에서 다른 퍼블리셔와의 Git 협업을 통해 일어 날 수 있는 충돌과 오류를 경험하고 해결</li>
                      <li>다른 개발자와의 협업을 통해 Figma , Git 협업을 통해 실제 일어날 법한 다양한 의견 충돌과 기획 경험 및 공부함</li>
                    </ul>
                </div>
                <div ref={cardRef2} className="s2-r s2-r2" onMouseMove={(e) => handleMove(e, cardRef2)} onMouseOut={() => handleOut(cardRef2)}>
                    <p className="s2-r-1">Study</p>
                    <ul className="s2-r-2">
                      <li>HTML 을 통한 마크업과 CSS 를 이용한 스타일링 JavaScript를 통한 동적 처리 를 공부함</li>
                      <li>실무에서 많이 쓰고 있는 Tailwind를 통하여 스타일링 공부</li>
                      <li>jQuery를 공부하여 JS 간소화</li>
                      <li>FIgma 공부를 통 와이어프레임 설계 및 레아이아웃 디자인</li>
                      <li>AOS.js , wow.js 를 통해 애니메이션 라이브러리 공부</li>
                      <li>현재 ( SCSS , GSAP 라이브러리 , React 순으로 공부 예정)</li>                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Section2;