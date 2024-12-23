import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './header.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 기능

function Header() {
  return (
    <div className="container header">
      <div className="time-area">
        <div className="gage">
          <div className="gage-pull"></div>
        </div>
        <div className="time"></div>
      </div>
      <div className="h-text"></div>
      <div className="h-bt">
        <a className='h-bt-a' href="#"><img src="" alt="git hub 이미지" /></a>
        <button id='dark-button'  className='h-bt-a'>
          <img className='dark' src="" alt="다크모드" />
          <img className='light' src="" alt="라이트모드" />
        </button>
      </div>
    </div>
  );
}
