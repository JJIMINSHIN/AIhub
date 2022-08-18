import React, { useRef, useState } from 'react';
import '../../../src/App.css';
import * as tmImage from '@teachablemachine/image';
import $ from 'jquery';
// import {
//   femaleDogRand, femaleCatRand, femaleDeerRand, femaleFoxRand, femaleRabbitRand,
//   maleDogRand, maleCatRand, maleDeerRand, maleFoxRand, maleRabbitRand
// } from './../../random.js';
import { useNavigate } from "react-router-dom";
import './../../style.css'
import { Link } from 'react-router-dom';



let model ;
const URL = "https://teachablemachine.withgoogle.com/models/f7y2kT2ZB/";
const urlFemale = "https://teachablemachine.withgoogle.com/models/4FxEnem2x/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";


const Test = () => {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [predictionArr, setPredictionArr] = useState([]);
  const [result, setResult] = useState(null);
  const [labelTitle, setlabelTitle] = useState(null);
const [resultTitle, setResultTitle] = useState(null);
const [resultExplain, setResultExplain] = useState(null);

  const navigate = useNavigate();
  const inputRef = useRef();
const [checkgender,setCheckgender] = useState("female");
 
   
    //총 클래스 수
    let maxPredictions;
    maxPredictions = model.getTotalClasses();

  

async function init(){
  
  model = await tmImage.load(modelURL, metadataURL);
  let maxPredictions;
  maxPredictions = model.getTotalClasses();
}
// init 끝
  async function predict() {
    model = await tmImage.load(modelURL, metadataURL);

    let image = document.getElementById("face-image")
    const prediction = await model.predict(tmImage, false);
    console.log(prediction)
  
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    console.log(prediction[0].className);
  
  setPredictionArr(prediction)
  setShowResult(true)
  setLoading(false)
  setResult(prediction[0].className)
  
    let resultTitle, resultExplain, resultCeleb;
      switch (prediction[0].className) {
        //사용자: 남자
        case "강아지상":
          resultTitle("귀여운 순둥이 강아지상") 
          resultExplain("강쥐상") 
          resultCeleb("강아지상 연예인: 박보영, 박은빈, 안유진, 우기") 
          // resultRand = femaleDogRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "고양이상":
          resultTitle("츤데레 매력쟁이 고양이상")
          resultExplain("고양이") 
          resultCeleb("고양이상 연예인: 제니, 채령, 해란") 
          // resultRand = femaleCatRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "사슴상":
          resultTitle("초롱초롱한 매력의 사슴상") 
          resultExplain("사슴상") 
          resultCeleb("사슴상 연예인: 미연, 윤아, 재이") 
          // resultRand = femaleDeerRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "여우상":
          resultTitle("따뜻한 나쁜남자 여우상")
          resultExplain("여우") 
          resultCeleb("여우상 연예인: 공승연, 민효린, 유라") 
          // resultRand = femaleFoxRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "토끼상":
          resultTitle("천진난만한 매력의 토끼상") 
          resultExplain("토끼") 
          resultCeleb("토끼상 연예인: 나연, 수지, 아이린") 
          // resultRand = femaleRabbitRand;
          // $('#result-image').attr('src', resultRand);
          break;
        default:
          resultTitle("알수없음") 
          resultExplain("") 
          resultCeleb("") 
      }
  
      //사용자: 여자
      switch (prediction[0].className) {
        case "강아지상":
          resultTitle("귀여운 순둥이 강아지상") 
          resultExplain("강쥐상") 
          resultCeleb("강아지상 연예인: 강태오, 김민규, 박보검") 
          // resultRand = maleDogRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "고양이상":
          resultTitle("츤데레 매력쟁이 고양이상") 
          resultExplain("고양이") 
          resultCeleb("고양이상 연예인: 강동원, 우도환, 이종석") 
          // resultRand = maleCatRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "사슴상":
          resultTitle("초롱초롱한 매력의 사슴상") 
          resultExplain("사슴상") 
          resultCeleb("사슴상 연예인: 안효섭, 이도현, 차은우") 
          // resultRand = maleDeerRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "여우상":
          resultTitle("따뜻한 나쁜남자 여우상") 
          resultExplain("여우") 
          resultCeleb("여우상 연예인: 강기영, 이준기, 황민현") 
          // resultRand = maleFoxRand;
          // $('#result-image').attr('src', resultRand);
          break;
        case "토끼상":
          resultTitle("천진난만한 매력의 토끼상") 
          resultExplain("토끼") 
          resultCeleb("토끼상 연예인: 수호, 유승호, 정국") 
          // resultRand = maleRabbitRand;
          // $('#result-image').attr('src', resultRand);
          break;
        default:
          resultTitle("알수없음") 
          resultExplain("") 
          resultCeleb("") 
      }
      



      switch (prediction[0].className) {
        case "강아지상":
          labelTitle("강아지상")
          break;
        case "고양이상":
          labelTitle("고양이상")
          break;
        case "토끼상":
          labelTitle("토끼상")
          break;
        case "곰상":
          labelTitle("곰상")
          break;
        case "사슴상":
          labelTitle("사슴상")
          break;
        case "여우상":
          labelTitle("여우상")
          break;
        default:
          labelTitle("알수없음")
          break;
      } 
    }
  
  //파일 읽기
  const handleChangeFile = (event) => {
    setLoading(true);
    setShowResult(false)
    setPredictionArr(null);
    setResult(null);

    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
      init().then(
        console.log("init 모델"),
        predict()
      );

    }
  }

  return (
    <>
      <main>
        <nav className="p-3 container navbar navbar-expand-lg navbar-light">
          <Link to='/' className="navbar-brand">애인상 테스트</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">애인상 테스트
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/" id="yotube-top-link"> 니은팀</a>
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
        <section className="d-flex justify-content-center">
          <p className="d-flex align-items-center pr-3">여자</p>
          <div>
            <input type="checkbox" id="gender" />
            <label htmlFor="gender">
              <span className="knob">
                <i></i>
              </span>
            </label>
          </div>
          <p className="d-flex align-items-center pl-3">남자</p>
        </section>
        <div className="mt-3 container file-upload">
          <div className="image-upload-wrap">
            <input className="file-upload-input" type='file' onChange={handleChangeFile()} accept="image/*" />
            <div className="drag-text">
              <img src="img/upload.svg" className="mt-5 pt-5 upload" alt="d" />
                <h3 className="mb-5 pb-5 pt-4  upload-text">얼굴 사진을 올려놓거나 눌러서 업로드하세요!</h3>
            </div>
          </div>
          <div className="file-upload-content">
            {/* <img className="file-upload-image rounded-circle" id="face-image" src="#" alt="your image" alt="" /> */}
            {/* <a className="heart" href="/d" style="font-size: 27px; color: rgb(255, 193, 220);" >♥</a> */}
            {/* <img className="file-result-image rounded-circle" id="result-image" src="adfad" alt="result image" alt="d" /> */}
            <div id="loading" className="animated bounce">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="text-center">AI가 당신의 동물상을 분석중입니다.</p>
            </div>
            <p className="result-message"></p>
            <div id="label-container" className="d-flex flex-column justify-content-around"></div>
            <div id="addThis" className="addthis_inline_share_toolbox_6lz1"></div>
            <div className="pt-3 image-title-wrap">
              <button type="button p-2" className="try-again-btn" onClick="window.location.reload();">
                <span className="try-again-text">다른 사진으로 재시도</span>
              </button>
            </div>
          </div>
        </div>


      </main>
      <footer className="footer pt-5 container d-flex justify-content-center">
        <div>
          <p>&copy; 니은팀 2022. All Rights Reserved. </p>
        </div>
      </footer>
    </>
  );

} 

export default Test
