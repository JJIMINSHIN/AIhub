import React, { useState, useEffect } from 'react'
import './SignInForm.css'
import $ from "jquery";
import axios from "axios";
import port from './../data/port.json';
import { useNavigate } from "react-router-dom";




const SignInForm = () => {


  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  const onChangeSignInData = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    console.log(signInData);
  }, [setSignInData]);


  const navigate = useNavigate();



  const onLoginButton = () => {
    if (signInData.email === "") {
      alert("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }

    if (signInData.password === "") {
      alert("비밀번호를 입력해주세요.");
      $("#password").focus();
      return;
    }

    sendSignInData().then(res => {
      console.log(res.data.result);
      alert('로그인이 완료되었습니다.');
      window.location.href='/main.html'
      // navigate('/main')
    }).catch(e=>{
      throw new Error(e)
    })
  }

  const onSignUp = () => {
    navigate('/signup')
  }

  const sendSignInData = async () => {
    return await axios.post(port.url + '/login', signInData);
  }

  return (
    <div className='signinform_container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='wrap'>
        <div className='signin_box'>
          <h1>SIGN IN</h1>
          <form>
            <div><input name="email" type="text" id='email' placeholder="이메일" value={signInData.email} onChange={onChangeSignInData} className="loginregister__input" /></div>
            <div><input name="password" type="password" id='password' placeholder="비밀번호" value={signInData.password} onChange={onChangeSignInData} className="loginregister__input" /></div>
            <div className='SignUpContainer'>
              <span>아직 회원이 아니신가요?</span>
              <button className='signup_register_btn' onClick={onSignUp}>회원가입</button>
            </div>

          </form>
        </div>
        {/* <Link to='/futureHubby' className='btn-mobile'> */}
          <div><button type="button" onClick={onLoginButton} className="loginregister__button">로그인</button></div>
        {/* </Link> */}
      </div>
    </div>

  );
}

export default SignInForm;