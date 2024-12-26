import React, { useState , useEffect } from "react";
import emailjs from 'emailjs-com';
import link from "./link.json";
import "./index.scss";
import "./footer.scss";

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contents, setContents] = useState('');
  const firstLinks = link.slice(0, 3); 
  
  useEffect(() => {
    emailjs.init('6cTZbho42pl72tmT9'); 
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const sanitizeInput = (input) => {
    const element = document.createElement('div');
    if (input) {
      element.innerText = input;
      element.textContent = input;
    }
    return element.innerHTML;
  };
  const sendEmail = (e) => {
    e.preventDefault();      
    // 이메일 형식 검사
    if (!isValidEmail(email)) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }
  
    // 입력값 필터링
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedContents = sanitizeInput(contents);
  
    const templateParams = {
      from_name: sanitizedName,
      from_email: sanitizedEmail,
      message: sanitizedContents,
    };
    // 서비스 id , 템플릿 id
    emailjs.send('service_mkg5ybh', 'template_waitjs2', templateParams)
      .then((response) => {
        console.log('이메일 전송 성공:', response);
        alert('이메일이 성공적으로 전송되었습니다!');
      }, (error) => {
        console.log('이메일 전송 실패:', error);
        alert('이메일 전송에 실패했습니다.');
      });
  };
  

  return (
    <div className="contanal footer"> 
      <div className="f-left">
        <span className="f-l-1">I worked hard in</span>
        <span className="f-l-2">cooperation</span>
      </div>
      <div className="f-right">
        <div className="r-top">
          <div className="r-t t-1">
            신입 웹 퍼블리셔 지망생 <br/>
            이희준 프로필 포트폴리오. <br />
            Figma로 레이아웃 디자인.<br/>
            TailwindCSS 혹은 Bootstrap 으로 <br/>
            프로토타이핑 작업후, <br/>
            CSS / SCSS 로 반응형 레이아웃 작업 후,<br/>
            AOS , Swiper 등으로 동적 움직임 작업 <br/>
            Vercel.app 을 통해 배포 작업.<br/>
          </div>
          <div className="r-t t-2">
            <p className="t-2-1">contant</p>
            <p className="t-2-2">
              gl8310239@gmail.com <br/>
              +82-10-5420-0537
            </p>
          </div>
          <nav className="r-t t-3">
            <p className="t-3-1">portfolio</p>
            <ul className="t-3-2">
              {firstLinks.map((link, index) => {            
                return (
                  <li key={index}>
                    <a target="_blank" href={link.href}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="r-bottom">
          <div className="r-b-1">
              <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button id="send" onClick={sendEmail}>send</button>
          </div>
          <input id="contents" className="r-b-2" type="text" placeholder="Please enter the contents" value={contents} onChange={(e) => setContents(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
