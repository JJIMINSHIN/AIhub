import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

const Main = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>당신의 미래 애인상을<br />찾아드립니다.</h1>
      <p>내 얼굴형으로 추측하는 <br />나의 미래 애인상은 과연 누가 될까요?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
export default Main;
