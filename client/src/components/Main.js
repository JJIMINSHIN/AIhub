import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Main.css';

const Main = () => {

  // view를 변경하기 위한 useState

  const onButtonEvent = ({ onChangeSignInData }) => {
    if(onChangeSignInData){
      window.location.href='main.html'
    }else{
      window.location.href='/login'
    }
  }
  return (

    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className='wrap'>
          <div className='text_container'>
            <h1>당신의 미래 애인상을<br />찾아드립니다.</h1>
            <p>내 얼굴형으로 추측하는 <br />나의 미래 애인상은 과연 누가 될까요?</p>
            <div className='hero-btns'>
              <button type='button' onClick={onButtonEvent}
                className='btns'
                // buttonStyle='btn--outline'
                // buttonSize='btn--large'
              >
                GET STARTED
              </button>
        </div>
          </div>
        </div>
    </div>
     
  );

  }
export default Main;
