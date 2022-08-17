import React from 'react';
import '../App.css';
import { Button } from './Button';
import { useState } from "react";
import './Main.css';
import SignInForm from './pages/SignInForm'
import SignUpForm from './pages/SignUpForm'

const Main = () => {

  // view를 변경하기 위한 useState
  const [view, setView] = useState({
    signIn: false,
    signUp: false
  });

  // 로그인 입력받을 데이터를 props로 넘겨줌
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  // 로그인 data를 입력받는 함수
  const onChangeSignInData = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    })
  }

  // 회원가입 입력받을 데이터를 props로 넘겨줌
  const [signUpData, setSignUpdata] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: ""
  });

  // 회원가입 data를 입력받는 함수
  const onChangeSignUpData = (e) => {
    setSignUpdata({
      ...signUpData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main>
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>당신의 미래 애인상을<br />찾아드립니다.</h1>
        <p>내 얼굴형으로 추측하는 <br />나의 미래 애인상은 과연 누가 될까요?</p>
        <div className='hero-btns'>
          <Button onClick={() => {
            setView({
              signIn: true,
              signUp: false
            })
          }}
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </div>
      </div>
      {
        view.signIn ? (<SignInForm signInData={signInData}
          onChangeSignInData={onChangeSignInData} />) : (<></>)
      }
      {
        view.signUp ? (<SignUpForm signUpData={signUpData} setSignUpdata={setSignUpdata}
          onChangeSignUpData={onChangeSignUpData} />) : (<></>)
      }      
    </main>
  );
}
export default Main;
