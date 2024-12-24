// 불러오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './header.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 기능
const Header = () => {
  const clockRef = useRef(null);
  const gageRef = useRef(null);
  const topButtonRef = useRef(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short",
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
      const timeZonePart = formattedDate.find((part) => part.type === "timeZoneName")?.value;

      if (clockRef.current) {
        clockRef.current.innerText = `${datePart} ${timePart} ${timeZonePart}`;
      }
    };

    const interval = setInterval(updateDateTime, 1000);
    updateDateTime();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = window.scrollY / scrollableHeight;
      if (gageRef.current) {
        gageRef.current.style.width = `${scrollRatio * 100}%`;
      }

      if (topButtonRef.current) {
        if (window.scrollY > 100) {
          topButtonRef.current.style.display = "block";
        } else {
          topButtonRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container header">
      <div className="time-area">
        <div className="gage-pull" ref={gageRef}></div> 
        <div id="clock" ref={clockRef}></div>   
      </div>            
      <button id="scrollToTopBtn" ref={topButtonRef} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Top</button>
    </div>
  );
  return (
    <div >
      <div className="time-area">
        <div className="gage">
          <div className="gage-pull"></div>
        </div>
        <div className="time">Profile</div>
      </div>
      <div className="h-text"></div>
      <div className="h-bt">
        <a className='h-bt-a' href="#"><img src="" alt="git hub 이미지" /></a>
        <button id='dark-button'  className='h-bt-a'>
          <img id='dark-bt' className='dark ' src="" alt="다크모드" />
          <img id='light-bt' className='light' src="" alt="라이트모드" />
        </button>
      </div>
    </div>
  );
};

export default Header;