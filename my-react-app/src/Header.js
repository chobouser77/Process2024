// 불러오기
import React, { useState , useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import './index.scss';
import './header.scss';
// import reportWebVitals from './reportWebVitals';
// 기능
// import { useRef, useEffect } from "react";

const Header = () => {
  const clockRef = useRef(null);
  const gageRef = useRef(null);
  const topButtonRef = useRef(null);

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

      const timeZonePart = formattedDate.find((part) => part.type === "timeZoneName")?.value || "";

      if (clockRef.current) {
        clockRef.current.innerText = `${datePart} ${timePart} ${timeZonePart}`.trim();
      }
    };

    const interval = setInterval(updateDateTime, 1000);
    updateDateTime();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY; // 현재 스크롤 위치
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight; // 전체 문서 높이에서 윈도우 높이 차
      const scrollRatio = currentScroll / scrollableHeight; // 스크롤 비율 계산

      // gage-pull의 너비 업데이트
      if (gageRef.current) {
        gageRef.current.style.width = `${Math.min(scrollRatio * 100, 100)}%`;
      }

      // top button 표시 여부
      if (topButtonRef.current) {
        if (window.scrollY > 100) {
          topButtonRef.current.style.display = "block";
        } else {
          topButtonRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스닝

    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    };
  }, []); 

  return (
    <div className="container header">
      <div className="time-area">
        <div className="gage">
        <div className="gage-pull" ref={gageRef}></div>
        </div>
        <div id="clock" ref={clockRef}></div>
      </div>
      <div className="h-text">
        Proplie
      </div>
      <div className="h-bt">
        <a href="" className="h-bt-a link" target="_blank">
          <img src="/img/github_icon.png" alt="깃헙" />
        </a>
        <button id='dark-button' className='h-bt-a'>
          <img id='dark-bt' src="/img/moon.png" alt="다크모드 버튼" />
          <img id='light-bt' src="/img/sun.png" alt="라이트모드 버튼" />
        </button>
      </div>

      <button
        id="scrollToTopBtn"
        ref={topButtonRef}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Top
      </button>
    </div>
  );
};

export default Header;

