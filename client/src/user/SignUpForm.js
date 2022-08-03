import $ from 'jquery';
import axios from 'axios';
import { useRef, useState } from 'react';
import port from './../../data/port.json';

const SignUpForm = ({ signUpData, onChangeSignUData, setSignUpData }) => {

  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState();


  const onClickSignUpButton = () => {
    if (signUpData.email === '') {
      alert('이메일을 입력해주세요');
      emailRef.current.focus();
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

    if (signUpData.password !== signUpData.rePassword) {

      alert('비밀번호가 같지 않습니다.');
      setSignUpData({
        ...signUpData,
        password: '',
        rePassword: ''
      });
      // $('#password').val('');
      // $('#rePassword').val('');
      $("#password").focus();
      return;
    }
    sendSingUpData().then(res => {
      console.log(res);
      alert(res.data.result);
      window.location.reload();
    }).catch(e => {
      console.log(e);
      setErrorMessage(e.response.data.fail)
    })

  }

  const sendSingUpData = async () => {
    return await axios.post(port.url + '/user/signUp', signUpData);
  }

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" ref={emailRef} value={signUpData.email} onChange={onChangeSignUData} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={signUpData.password} onChange={onChangeSignUData} className="form-control" id="password" name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">Password</label>
            <input type="password" value={signUpData.rePassword} onChange={onChangeSignUData} className="form-control" id="rePassword" name="rePassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" value={signUpData.name} onChange={onChangeSignUData} className="form-control" id="name" name="name" />
          </div>
          <button type="button" onClick={onClickSignUpButton} className="btn btn-primary">회원가입</button>
          <p className='text-danger'>
              {errorMessage}
            </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;