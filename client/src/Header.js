import Main from "./Main";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./user/SignUpForm";

function Header() {

  const onClickLoginButton = () =>{
    window.location.href='/login'
  }
  const onClickSignUPButton = () =>{
    window.location.href='/signup'
  }


  return (

    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">

      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" className="nav-link px-2 link-secondary">메인</a></li>
        <li><a href="/list" className="nav-link px-2 link-dark"> 커뮤니티</a></li>
        <li><a href="/myaccount" className="nav-link px-2 link-dark"> 내정보 </a></li>

      </ul>

      <div className="col-md-3 text-end">
        <button onClick={onClickLoginButton} className="btn btn-primary my-2">로그인</button> &nbsp;
        <button onClick={onClickSignUPButton}  className="btn btn-secondary my-2"style={{marginRight:'20%'}}>회원가입</button>
      </div>
    </header>


  );
}

export default Header;
