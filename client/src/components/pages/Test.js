import React from 'react';
import '../../../src/App.css';
const Test = () => {

 

  return (
    <>
      <main>
        <nav className="p-3 container navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand">애인상 테스트</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">애인상 테스트
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="yotube-top-link"> 니은팀</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="section">
          <h1 className="title">애인상 테스트</h1>
          <h2 className="subtitle">얼굴로 보는 인공지능 애인상 테스트</h2>
          <h2 className="sr-only">나는 어떤 동물과 닮았을까? 나의 애인상 찾기를 해보세요!</h2>
          <h3 className="sr-only">대표 애인상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다.</h3>
          <h4 className="sr-only">본 서비스는 Google의 인공지능 teachable machine 2.0을 활용하였습니다.</h4>
          <p className="sr-only">얼굴로 보는 인공지능 애인상 테스트, 나와 닮은 애인상을 찾아보세요! 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다.
            회원가입도 필요없이 화면에서 바로 확인해보세요! 사진 데이터는 그 어디에도 전송되지 않습니다. 인공지능이 보는 나의 동물상 테스트 한번 해보세요! 강아지상? 고양이상? 여우상? 사슴상? 토끼상?
            곰상? 공룡상? 얼굴상 테스트를 통해 나와 닮은 동물 찾기를 할 수 있습니다.</p>
        </section>
       

      </main>
      <footer className="footer pt-5 container d-flex justify-content-center">
        <div>
          <p>&copy; 니은팀 2022. All Rights Reserved. </p>
        </div>
      </footer>


    </>
  );

}
export default Test;