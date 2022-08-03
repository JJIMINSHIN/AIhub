import $ from 'jquery';
import axios from 'axios';
import { useRef, useState } from 'react';

const SignUpForm = ({ }) => {


  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">비밀번호 확인</label>
            <input type="password" className="form-control" id="rePassword" name="rePassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">이름</label>
            <input type="text"  className="form-control" id="name" name="name" />
          </div>
          <button type="button"className="btn btn-primary">회원가입</button>
          {/* <p className='text-danger'>
              {errorMessage}
            </p> */}
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;