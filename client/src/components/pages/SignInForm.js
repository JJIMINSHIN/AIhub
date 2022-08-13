import React, {useState} from 'react'
import './SignInForm.css'
import { Link } from 'react-router-dom';
import Home from './Home';
import SignUpForm from './SignUpForm';

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onLoginButton = () =>{
    window.location.href='/'
  }

  const onSignUp = () => {
    window.location.href='/SignUpForm'
  }


  return (
      <div className="loginregister">
        <h1>SIGN IN</h1>
        <form>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
            <div className='SignUpContainer'>
              <span>아직 회원이 아니신가요?</span>
              <Link to='/SignUpForm'>
                <button onClick={onSignUp}>회원가입</button>
              </Link>
            </div>
            <Link to='/Home' className='btn-mobile'>
              <div><button type="submit" onSubmit={onSubmit} onClick={onLoginButton} className="loginregister__button">로그인</button></div>
            </Link>
        </form>
      </div>
    );
  }

export default SignInForm;