import $ from 'jquery';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {useCookies} from 'react-cookie'
import port from './../data/port.json'
import { useNavigate } from 'react-router-dom';



const SingInForm = ({}) => {

  const [signInData, setSignInData] = useState({
    email:'',
    password: ''
  });
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState();

  const onClickLoginButton = () =>{
    if(signInData.email === ''){
      alert('이메일을 입력해주세요.');
      $('#email').focus();
      return;
    }

    if(signInData.password === ''){
      alert('비밀번호를 입력해주세요.');
      $('#password').focus();
      return;
    }

    sendSignInData().then(res =>{
      console.log(res);
      alert('로그인이 완료되었습니다.');
      window.location.href='/'
      
    }).catch(e =>{
      setErrorMessage(e.response.data.fail)
    })
  }

  const onChangeSignInData =(e) =>{
    setSignInData({
      ...signInData,
      [e.target.name] : e.target.value
    })
  };
  useEffect(()=>{
    console.log(signInData);
}, [setSignInData]);


const sendSignInData = async() =>{
  return await axios.post(port.url +'/user/login', signInData)
}

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일</label>
            <input type="email" value={signInData.email} onChange={onChangeSignInData} className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input type="password" value={signInData.password} onChange={onChangeSignInData} className="form-control" id="password" name="password" />
          </div>
          <div className='mb-3'>
           
          </div>

          <button type="button" onClick={onClickLoginButton} className="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default SingInForm;