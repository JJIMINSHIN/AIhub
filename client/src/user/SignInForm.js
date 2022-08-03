import $ from 'jquery';
import axios from 'axios';
import port from './../../data/port.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useCookies} from 'react-cookie'


const SingInForm = ({ signInData, onChangeSignInData }) => {

  const [cookies, setCookies, removeCookie] = useCookies(['userData']);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();

  const onClickLoginButton =  () => {
    if (signInData.email === '') {
      alert('이메일을 입력해주세요');
      $("#email").focus();
      return;
    }

    if (signInData.password === '') {
      alert('비밀번호를 입력해주세요.');
      $("#password").focus();
      return;
    }

    sendSignInData().then(res =>{
      console.log(res);
      setCookies('userData', res.data,{path:'/'});
      alert('로그인이 완료되었습니다.');
      navigate("/review/list")
    }).catch(e=>{
      console.log(e);
      setErrorMessage(e.response.data.fail)
    }).finally(()=>{
      console.log(cookies.userData);
    })
  }

  const sendSignInData = async () => {
    //db접속
    return await axios.post(port.url + '/user/login', signInData) //요청할 url, 보내고 싶은 데이터 넣기

  }

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" value={signInData.email} onChange={onChangeSignInData} className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={signInData.password} onChange={onChangeSignInData} className="form-control" id="password" name="password" />
          </div>
          <div className='mb-3'>
            <p className='text-danger'>
              {errorMessage}
            </p>
          </div>

          <button type="button"
            onClick={onClickLoginButton} className="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default SingInForm;