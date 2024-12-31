import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

function App() {
  const [currentSection, setCurrentSection] = useState(1); // 현재 섹션 상태
  const isScrolling = useRef(false); // 스크롤 상태를 추적
  const section4Ref = useRef(null); // 섹션 4를 참조
  const ALLOWED_OFFSET = 150; // 허용 오차 (단위: px)

  const handleScroll = (e) => {
    // 현재 스크롤 중이라면 처리하지 않음
    if (isScrolling.current) return;

    // 섹션 4의 위치가 top: 0 근처일 때만 스크롤을 허용
    const section4Rect = section4Ref.current?.getBoundingClientRect();
    if (
      section4Rect &&
      Math.abs(section4Rect.top) > ALLOWED_OFFSET &&
      e.deltaY < 0 &&
      currentSection === 4
    ) {
      return; // 섹션 4가 상단에 오지 않으면 위로 스크롤 안 됨
    }

    // 스크롤 시작 플래그 설정
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 'down' : 'up';

    if (direction === 'down' && currentSection < 4) {
      setCurrentSection((prev) => prev + 1);
    } else if (direction === 'up' && currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
    }

    // 일정 시간이 지난 후 다시 스크롤 가능하도록 설정
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // 500ms 후 스크롤 허용
  };

  useEffect(() => {
    // currentSection 변경 시 해당 섹션으로 이동
    scrollToSection(currentSection);
  }, [currentSection]);

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(`section-${section}`);
    if (!sectionElement) return;

    window.scrollTo({
      top: sectionElement.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection]);
  // 요소 fade in out
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate'); 
            }, 100);
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        rootMargin: '0px 0px 0% 0px',
        threshold: 0.4,
      }
    );

    const targets = document.querySelectorAll('.yoso');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);
  

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
