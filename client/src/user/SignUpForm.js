import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useState, useEffect } from 'react';
import port from './../data/port.json'



const SignUpForm = () => {


  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: ''
  });

  useEffect(() => {
    console.log(signUpData)
  }, [signUpData])


  const [errorMessage, setErrorMessage] = useState();

  const onChangeSignUData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value

    })
  };


  const onClickSignUpButton = () => {

    if (signUpData.email === '') {
      alert('이메일을 입력해주세요.');
      $('#email').focus();
      return;
    }
    if (signUpData.password === '') {
      alert('비밀번호를 입력해주세요.');
      $('#password').focus();
      return;
    }
    if (signUpData.rePassword === '') {
      alert('비밀번호를 다시 입력해주세요.');
      $('#rePassword').focus();
      return;
    }
    if (signUpData.name === '') {
      alert('이름을 입력해주세요.');
      $('#name').focus();
      return;
    }

    if (signUpData.password !== signUpData.rePassword) {

      alert('비밀번호가 같지 않습니다.');
      setSignUpData({
        ...signUpData,
        password: '',
        rePassword: ''
      });
      $("#password").focus();
      return;
    }

    sendSingUpData().then(res => {
      console.log(res);
      alert(res.data.result);
      window.location.href = '/user/login';
    }).catch(e => {
      console.log(e);
      setErrorMessage(e.response.data.fail);
    })


  }

  const sendSingUpData = async () => {
    return await axios.post(port.url + '/user/signup', signUpData);
  }

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일</label>
            <input type="email" value={signUpData.email} onChange={onChangeSignUData} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input type="password" value={signUpData.password} onChange={onChangeSignUData} className="form-control" id="password" name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">비밀번호 확인</label>
            <input type="password" value={signUpData.rePassword} onChange={onChangeSignUData} className="form-control" id="rePassword" name="rePassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">이름</label>
            <input type="text" value={signUpData.name} onChange={onChangeSignUData} className="form-control" id="name" name="name" />
          </div>
          <div className="mb-3">
            <p className="text-danger">
              {errorMessage}
            </p>
          </div>
          <button type="button" onClick={onClickSignUpButton} className="btn btn-primary">회원가입</button>

        </form>
      </div>
    </div>
  );
}

export default SignUpForm;