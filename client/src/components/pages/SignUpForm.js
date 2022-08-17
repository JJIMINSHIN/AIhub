import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import './SignUpForm.css';
import { Link } from 'react-router-dom';
import port from './../data/port.json'



const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: ''
  });

  useEffect(() => {
    console.log(signUpData);
  }, [setSignUpData]);

  const onChangeSignUData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value

    })
  }

  const onClickSignUpButton = () => {
    if (signUpData.email === '') {
      alert('이메일을 입력해주세요');
      $('#email').focus();
      return;
    }
    if (signUpData.password === '') {
      alert('비밀번호를 입력해주세요.');
      $("#password").focus();
      return;
    }

    if (signUpData.rePassword === '') {
      alert('비밀번호를 다시 확인해주세요.');
      $("#rePassword").focus();
      return;
    }
    if (signUpData.name === '') {
      alert('이름을 입력해주세요.');
      $("#name").focus();
      return;
    }
    
    if(signUpData.password !== signUpData.rePassword){
      alert('비밀번호가 같지 않습니다.');
      setSignUpData({
        ...signUpData,
        password: '',
        rePassword: ''
      });
      $("#password").focus();
      return;
    }

    sendSignUpData().then(res =>{
      console.log(res);
      alert(res.data.result);
      window.location.reload();
      window.location.href='/login'
    }).catch(e =>{
      console.log(e)
    })
  }

  //회원가입 router와 연결
  const sendSignUpData = async () =>{
    return await axios.post(port.url + "/user/signup", signUpData);
  }
  return (
    <div className='signupform_container'>
    <video src='/videos/main_yellow.mp4' autoPlay loop muted />
    <div className='wrap'>
      <div className='signup_box'>
        <h1>SIGN UP</h1>
        <form>
          <div><input name="email" id='email' type="email" placeholder="이메일" value={signUpData.email} onChange={onChangeSignUData} className="loginregister__input" /></div>
          <div><input name="password" id='password' type="password" placeholder="비밀번호" value={signUpData.password} onChange={onChangeSignUData} className="loginregister__input" /></div>
          <div><input name="rePassword" id='rePassword' type="password" placeholder="비밀번호 확인" value={signUpData.rePassword} onChange={onChangeSignUData} className="loginregister__input" /></div>
          <div><input name="name" id='name' type="text" placeholder="이름" value={signUpData.name} onChange={onChangeSignUData} className="loginregister__input" /></div>
          <Link to='/SignInForm' className='btn-mobile'>
            <div><button className="signup_btn" type="submit" onClick={onClickSignUpButton}>계정 생성하기</button></div>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};



export default SignUpForm;