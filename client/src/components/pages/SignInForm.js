import React, { useState, useEffect } from 'react'
import './SignInForm.css'
import { Link } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";
import port from './../data/port.json'

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
    }, [signInData]);



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
      console.log(res);
      alert(res.data.result);
      window.location.reload();
      window.location.href='/futureHubby'
    }).catch(e => {
      console.log(e)
    })
  }

  const onSignUp = () => {
    window.location.href = '/signup'
  }

  const sendSignInData = async () => {
    return await axios.post(port.url + '/user/login', signInData);
  }

  return (
    <div className="loginregister">
      <h1>SIGN IN</h1>
      <form>
        <div><input name="email" type="email" id='email' placeholder="이메일" value={signInData.email} onChange={onChangeSignInData} className="loginregister__input" /></div>
        <div><input name="password" type="password" id='password' placeholder="비밀번호" value={signInData.password} onChange={onChangeSignInData} className="loginregister__input" /></div>
        <div className='SignUpContainer'>
          <span>아직 회원이 아니신가요?</span>
          <Link to='/SignUpForm'>
            <button onClick={onSignUp}>회원가입</button>
          </Link>
        </div>
        <Link to='/' className='btn-mobile'>
          <div><button type="submit" onClick={onLoginButton} className="loginregister__button">로그인</button></div>
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;