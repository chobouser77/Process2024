import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import "./header.scss";

const Header = () => {
  const [dateTime, setDateTime] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const headerRef = useRef(null); 

  // 날짜 및 시간 업데이트
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
      };

      const formattedDate = new Intl.DateTimeFormat("ko-KR", options).formatToParts(now);
      const datePart = formattedDate
        .filter((part) => ["year", "month", "day"].includes(part.type))
        .map((part) => part.value)
        .join(". ");
      const timePart = formattedDate
        .filter((part) => ["hour", "minute", "second"].includes(part.type))
        .map((part) => part.value)
        .join(":");

      setDateTime(`${datePart} ${timePart}`);
    };

    const interval = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(interval);
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // if (headerRef.current) {
      //   if (currentScrollY > lastScrollY && currentScrollY > 50) {
      //     headerRef.current.classList.add("show"); // 스크롤 다운 시 추가
      //   } else {
      //     headerRef.current.classList.remove("show"); // 스크롤 업 시 제거
      //   }
      // }

      // 스크롤 진행률 업데이트
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = currentScrollY / scrollableHeight;
      setScrollWidth(Math.min(scrollRatio * 100, 100));

      // Top 버튼 표시 여부
      setShowTopButton(currentScrollY > 100);

      lastScrollY = currentScrollY; // 이전 스크롤 위치 업데이트
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container header" ref={headerRef}>      
      <div className="time-area">
        <div className="gage">
          <div className="gage-pull" style={{ width: `${scrollWidth}%` }}></div>
        </div>
        <div id="clock">{dateTime}</div>
      </div>
      
      <div className="h-text">Proplie</div>

      <div className="h-bt">
        <a href="https://github.com/chobouser77" className="h-bt-a link" target="_blank" rel="noopener noreferrer">
          <img src="/img/github_icon.png" alt="깃헙" />
        </a>

        <button id="dark-button" className="h-bt-a">
          <img id="dark-bt" src="/img/moon.png" alt="다크모드 버튼" />
          <img id="light-bt" src="/img/sun.png" alt="라이트모드 버튼" />
        </button>
      </div>
      {/* {showTopButton && (
        <button
          id="scrollToTopBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      )} */}
    </div>
  );
};

export default Header;
