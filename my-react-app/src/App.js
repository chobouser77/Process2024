import React, { useState, useEffect, useRef } from 'react';
import Header from './Header.js';
import Footer from './Footer';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';

function App() {
  const [currentSection, setCurrentSection] = useState(1);  // 현재 섹션 상태
  const isScrolling = useRef(false); // 스크롤 상태를 추적
  const section4Ref = useRef(null); // 섹션 4를 참조
  const ALLOWED_OFFSET = 100; // 허용 오차 (단위: px)

  const handleScroll = (e) => {
    // 섹션 4에서 top이 0에 근접하지 않으면 위로 스크롤을 막기
    if (
      currentSection === 4 &&
      section4Ref.current &&
      Math.abs(section4Ref.current.getBoundingClientRect().top) > ALLOWED_OFFSET &&
      e.deltaY < 0
    ) {
      return; // 섹션 4의 top이 허용 오차를 벗어나면 위로 스크롤 작동을 중지
    }

    // 이미 스크롤 중일 경우 추가로 처리하지 않도록 막기
    if (isScrolling.current) return;

    isScrolling.current = true; // 스크롤 시작

    // 아래로 스크롤
    if (e.deltaY > 0 && currentSection < 4) {
      setCurrentSection(prev => Math.min(prev + 1, 4)); // 현재 섹션 + 1
    } 
    // 위로 스크롤
    else if (e.deltaY < 0 && currentSection > 1) { 
      setCurrentSection(prev => Math.max(prev - 1, 1)); // 현재 섹션 - 1
    }

    // 일정 시간이 지난 후 스크롤 상태 리셋
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // 500ms 후 스크롤을 다시 허용
  };

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(`section-${section}`);
    window.scrollTo({
      top: sectionElement.offsetTop,
      behavior: 'smooth',  // 부드러운 스크롤 효과
    });
  };

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection]);

  return (
    <div className="App" onWheel={handleScroll}>
      <Header />
      <div id="section-1" className="section">
        <Section1 />
      </div>
      <div id="section-2" className="section">
        <Section2 />
      </div>
      <div id="section-3" className="section">
        <Section3 />
      </div>
      <div ref={section4Ref} id="section-4" className="section">
        <Section4 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
