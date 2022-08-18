import React,{useState,useRef,useEffect} from 'react'
// import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import styled from "styled-components";
import {TopContainer,TopTitle,TopImage,BgImg,
  ImageText} from "../components/styledComponents"
// import { render } from "react-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import {BsArrowCounterclockwise} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import KakaoShareBtn from '../components/KakaoSharedBtn';


import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

// const URL = 'https://teachablemachine.withgoogle.com/models/F1nMeBJwX/';
const URL = 'https://teachablemachine.withgoogle.com/models/KAoZrcPlp/';
const modelURL = URL + 'model.json';
const metadataURL = URL + 'metadata.json';

let model

const Container = styled.div`
  margin-left:auto;
  margin-right:auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  position:relative;
  /* justify-content:space-evenly; */
  
  /* position:relative; */
  @media (min-width: 800px) {
    width: 600px;
    height: 100vh;
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;


const ImageUploadContainer=styled.input`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    display:none;
`;

const ImageContainer=styled.div`
    position:relative;
    width: 70%;
    height: 28%;
    display:flex;
    background-color:rgba(0, 0, 0, 0.07);
    border-radius:10px;
    /* border:3px dashed #535c68; */
    justify-content:center;
    align-items:center;
    box-shadow: 0px 0px 25px #576574;
    z-index:5;
    flex-direction:column;
    box-shadow: 0px 3px 20px 10px rgba(0, 0, 0, 0.10);
  `;


const Image=styled.img`
    width:90%;
    height:90%;
    border-radius:10px;
`;

const Title=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  color:#224976;
  @media (min-width: 800px) {
    font-size:25px;
  }
`;

const MiddleContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:5%;
`;

const ResultContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

const ReulstScore=styled.h1`
    color:#fed06e;
    font-size:20px;
    font-weight:bolder;
    margin-right:5px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;
const ReulstName=styled.h1`
    color:white;
    font-size:20px;
    font-weight:bolder;
    background-color:#304967;
    margin-left:5px;
    padding:5px 7px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;

const KeyText=styled.h1`
    text-align: center;
    color: #193354;
    font-size:15px;
    font-weight:bolder;
    margin-top:-10px;
    @media (min-width: 800px) {
      font-size:20px;
  }
`;

const SubText=styled.h1`
    text-align: center;
    color: #929292;
    font-size:15px;
    font-weight:bolder;
    margin-top:-10px;
    @media (min-width: 800px) {
      font-size:25px;
  }
`;

const BottomContainer=styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
  margin-top:10%;
`;

const BottomBtn=styled.button`
   background-color:${pros=>pros.name==="share"?"#183557":"#2E2E2E"};
   padding:10px 15px;
   border-radius:10px;
   color:${pros=>pros.name==="share"?"#ffffff":"#ffffff"};
   font-size:15px;
   font-weight:bolder;
   border-width:0px;
   display:flex;
   justify-content:space-evenly;
   align-items:center;
   flex-direction:row;
   @media (min-width: 800px) {
    font-size:20px;
    padding:15px 20px;
  }
`;

const MoreInfoBtn=styled.button`
    background-color:#2E2E2E;
    padding:10px 15px;
    border-radius:10px;
    color:white;
    font-size:15px;
    font-weight:bolder;
    border-width:0px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width: 800px) {
      font-size:20px;
      padding:15px 20px;
    }
`;

const TopStartLoading=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  color:#0f3457;
  margin-top:3%;
  margin-bottom:30px;
  @media (min-width: 800px) {
    font-size:30px;
  }
`;

const TopStart=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  color:#0f3457;
  margin-top:3%;
  @media (min-width: 800px) {
    font-size:30px;
  }
`;

const CommentMsg=styled.h1`
  font-size:13px;
  font-weight:bolder;
  color:#858585;
  width:70%;
  /* position:relative;
  top:20px; */
  @media (min-width: 800px) {
    font-size:22px;
  }
`;

const BottomImg=styled.img`
    width:100%;
    height:30%;
    /* position:absolute;
    bottom:0px; */
    object-fit: contain;
    @media (min-width: 800px) {
      height:27%;
  }
`;

const RestResultRow=styled.div`
  width:100%;
  display:flex;
  flex-direction:"row";
  justify-content:space-evenly;
  align-items:center;
`;

const RestResultCol=styled.div`
  display:flex;
  flex-direction:"row";
  justify-content:center;
  align-items:center;
`;

const RestResultScore=styled.h1`
    text-align: center;
    color: #ebc877;
    font-size:17px;
    font-weight:bolder;
    margin-right:10px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;

const RestResultRank=styled.h1`
    text-align: center;
    color: #585858;
    font-size:17px;
    font-weight:bolder;
    margin-right:5px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;

const RestResultName=styled.h1`
    text-align: #909090;
    color: #585858;
    font-size:17px;
    font-weight:bolder;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;




const Main2 = ({history}) => {
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일
    const [loading,setLoading]=useState(false);
    const [showResult,setShowResult]=useState(false);
    const [predictionArr,setPredictionArr]=useState([]);
    const [result,setResult]=useState(null);
    const [keyword,setKeyword]=useState(null);

    const KakaoLoadOne=()=>{
      let ins = document.createElement('ins');
      let scr = document.createElement('script');
  
      ins.className = 'kakao_ad_area';
      ins.style = "display:none; width:100%;";
      scr.async = 'true';
      scr.type = "text/javascript";
      scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
      ins.setAttribute('data-ad-width', '300');
      ins.setAttribute('data-ad-height', '250');
      ins.setAttribute('data-ad-unit', '광고 단위 id');
  
      document.querySelector('.adfitOne').appendChild(ins);
      document.querySelector('.adfitOne').appendChild(scr);
    }

    const KakaoLoadTwo=()=>{
      let ins = document.createElement('ins');
      let scr = document.createElement('script');
      ins.className = 'kakao_ad_area';
      ins.style = "display:none; width:100%;";
      scr.async = 'true';
      scr.type = "text/javascript";
      scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";

      ins.setAttribute('data-ad-width', '320');
      ins.setAttribute('data-ad-height', '100');
      ins.setAttribute('data-ad-unit', '광고 단위 id');
  
      document.querySelector('.adfitTwo').appendChild(ins);
      document.querySelector('.adfitTwo').appendChild(scr);

    }


    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      document.body.appendChild(script);
      KakaoLoadOne();
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    //react-router 사용
    const navigate=useNavigate();
    // input 태그를 클릭하는 것과 같은 효과를 주기 위해서 사용
    const inputRef=useRef();
    
  // Load the image model and setup the webcam
    async function init() {

      // let isIos = false; 
      // // fix when running demo in ios, video will be frozen;
      // if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
      //   isIos = true;
      // }
      // load the model and metadata
      // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
      // or files from your local hard drive
      // Note: the pose library adds "tmImage" object to your window (window.tmImage)
      model = await tmImage.load(modelURL, metadataURL);
      //총 클래스 수
      let maxPredictions;
      maxPredictions = model.getTotalClasses();
  }
  
    async function predict() {
        let resultRand;
        let image = document.getElementById("face-image")
        const prediction = await model.predict(image, false);
        console.log(prediction)
        prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
        console.log(prediction[0].className);
        let resultTitle, resultExplain, resultCeleb;
        if (document.getElementById("gender").checked) {
            switch (prediction[0].className) {
                //사용자: 남자
                case "강아지상":
                    resultTitle = "귀여운 순둥이 강아지상"
                    resultExplain = "강쥐상"
                    resultCeleb = "강아지상 연예인: 박보영, 박은빈, 안유진, 우기"
                    resultRand = femaleDogRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "고양이상":
                    resultTitle = "츤데레 매력쟁이 고양이상"
                    resultExplain = "고양이"
                    resultCeleb = "고양이상 연예인: 제니, 채령, 해란"
                    resultRand = femaleCatRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "사슴상":
                    resultTitle = "초롱초롱한 매력의 사슴상"
                    resultExplain = "사슴상"
                    resultCeleb = "사슴상 연예인: 미연, 윤아, 재이"
                    resultRand = femaleDeerRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "여우상":
                    resultTitle = "따뜻한 나쁜남자 여우상"
                    resultExplain = "여우"
                    resultCeleb = "여우상 연예인: 공승연, 민효린, 유라"
                    resultRand = femaleFoxRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "토끼상":
                    resultTitle = "천진난만한 매력의 토끼상"
                    resultExplain = "토끼"
                    resultCeleb = "토끼상 연예인: 나연, 수지, 아이린"
                    resultRand = femaleRabbitRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                default:
                    resultTitle = "알수없음"
                    resultExplain = ""
                    resultCeleb = ""
            }
        } else {
            //사용자: 여자
            switch (prediction[0].className) {
                case "강아지상":
                    resultTitle = "귀여운 순둥이 강아지상"
                    resultExplain = "강쥐상"
                    resultCeleb = "강아지상 연예인: 강태오, 김민규, 박보검"
                    resultRand = maleDogRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "고양이상":
                    resultTitle = "츤데레 매력쟁이 고양이상"
                    resultExplain = "고양이"
                    resultCeleb = "고양이상 연예인: 강동원, 우도환, 이종석"
                    resultRand = maleCatRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "사슴상":
                    resultTitle = "초롱초롱한 매력의 사슴상"
                    resultExplain = "사슴상"
                    resultCeleb = "사슴상 연예인: 안효섭, 이도현, 차은우"
                    resultRand = maleDeerRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "여우상":
                    resultTitle = "따뜻한 나쁜남자 여우상"
                    resultExplain = "여우"
                    resultCeleb = "여우상 연예인: 강기영, 이준기, 황민현"
                    resultRand = maleFoxRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                case "토끼상":
                    resultTitle = "천진난만한 매력의 토끼상"
                    resultExplain = "토끼"
                    resultCeleb = "토끼상 연예인: 수호, 유승호, 정국"
                    resultRand = maleRabbitRand;
                    $('#result-image').attr('src', resultRand);
                    break;
                default:
                    resultTitle = "알수없음"
                    resultExplain = ""
                    resultCeleb = ""
            }
        }
        let title = "<div className='" + prediction[0].className + "-animal-title'>" + resultTitle + "</div>"
        let explain = "<div className='animal-explain pt-2'>" + resultExplain + "</div>"
        let celeb = "<div className='" + prediction[0].className + "-animal-celeb pt-2 pb-2'>" + resultCeleb + "</div>"
        $('.result-message').html(title + explain + celeb);
        let barWidth;
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) > 0.1) {
                barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
            } else if (prediction[i].probability.toFixed(2) >= 0.01) {
                barWidth = "4%"
            } else {
                barWidth = "2%"
            }
            let labelTitle;
            switch (prediction[i].className) {
                case "강아지상":
                    labelTitle = "강아지상"
                    break;
                case "고양이상":
                    labelTitle = "고양이상"
                    break;
                case "토끼상":
                    labelTitle = "토끼상"
                    break;
                case "곰상":
                    labelTitle = "곰상"
                    break;
                case "사슴상":
                    labelTitle = "사슴상"
                    break;
                case "여우상":
                    labelTitle = "여우상"
                    break;
                default:
                    labelTitle = "알수없음"
            }
            let label = "<div className='animal-label d-flex align-items-center'>" + labelTitle + "</div>"
            let bar = "<div className='bar-container position-relative container'><div className='" + prediction[i].className + "-box'></div><div className='d-flex justify-content-center align-items-center " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span className='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
            labelContainer.childNodes[i].innerHTML = label + bar;
        }
    }
  
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

    const handleShare=()=>{
      if (navigator.share) {
        navigator.share({
            title: '나의 미래 애인상은?',
            // text: 'Hello World',
            url: 'https://politictest.netlify.app/',
        });
    }else{
        alert("공유하기가 지원되지 않는 브라우저 입니다.")
    }

    }


  return (
    <Container>
      <TopContainer>
          <TopTitle>나와 닮은 정치인은?</TopTitle>
          <TopImage src={require("../assets/loading.png")}></TopImage>
      </TopContainer>

      {showResult?<TopStart>분석결과는?</TopStart>:<TopStartLoading>{loading?"잠시만 기다려주세요!":"사진을 업로드 해주세요!"}</TopStartLoading>}
      <ImageContainer onClick={()=>{
          inputRef.current.click();
      }}>
        <ImageUploadContainer ref={inputRef} onChange={handleChangeFile} type="file" accept="image/*" />
        {/* {imgBase64?<Image id="srcImg" src={imgBase64}></Image>: 
        <>
          <BgImg src={require("../assets/someone.png")}></BgImg>
          <ImageText>GIVE ME A YOUR PICTURE!</ImageText>
        </>
        } */}
      </ImageContainer>
      {!loading&&result===null?<>
      <CommentMsg>※업로드 된 사진은 별도로 수집, 보존
                  하지않고 얼굴인식 용도에만 사용됩니다.</CommentMsg>
      <div className='adfitOne'></div>
      <BottomImg src={require('../assets/png/beforeLoading.png')}></BottomImg>
      </>:null}

      {loading&&result===null?
      <>
        <Dots size={45} color="#224976"></Dots>
        <Title>분석중...</Title>
        <BottomImg src={require('../assets/png/NowLoading.png')}></BottomImg>
        </>
      :null
    }
    {showResult&&result!==null?
        <>
        <MiddleContainer>
            <FaArrowAltCircleDown size={40} color="#323232"></FaArrowAltCircleDown>
            <ResultContainer>
                <ReulstScore>{showResult?`${(predictionArr[0].probability*100).toFixed(1)}%`:null}</ReulstScore>
                <ReulstName>{showResult?predictionArr[0].className:null}</ReulstName>
            </ResultContainer>
            <KeyText>{keyword}</KeyText>
            <SubText>{predictionArr[0].probability*100>80?"도플갱어 아니신가요?":predictionArr[0].probability*100>50?"형제자매가 확실합니다.":predictionArr[0].probability*100>20?"닮았다는 소리 들어보셨죠?":"3초 닮은꼴"}</SubText>
            <MoreInfoBtn onClick={()=>{
              if(predictionArr[0].className=="트럼프"){
                window.open(`https://ko.wikipedia.org/wiki/도널드_트럼프`,'_blank')
                return null
              }else if(predictionArr[0].className=="마크롱"){
                window.open(`https://ko.wikipedia.org/wiki/에마뉘엘_마크롱`,'_blank')
                return null
              }
              window.open(`https://ko.wikipedia.org/wiki/${predictionArr[0].className}`,'_blank')
            }}>더보기</MoreInfoBtn>
        </MiddleContainer>
        <ImageContainer>
            <Image id="srcImg" src={require(`../assets/${result}.jpg`)}></Image>
        </ImageContainer>
        <div className='adfitTwo'></div>    
        <RestResultRow>
          <RestResultCol>
            <RestResultScore>{showResult?`${(predictionArr[1].probability*100).toFixed(1)}%`:null}</RestResultScore>
            <RestResultRank>2위</RestResultRank>
            <RestResultName>{showResult?predictionArr[1].className:null}</RestResultName>
          </RestResultCol>
          <RestResultCol>
            <RestResultScore>{showResult?`${(predictionArr[2].probability*100).toFixed(1)}%`:null}</RestResultScore>
            <RestResultRank>3위</RestResultRank>
            <RestResultName>{showResult?predictionArr[2].className:null}</RestResultName>
          </RestResultCol>
        </RestResultRow>
        </>
      :null}
      {showResult?<BottomContainer>
        <KakaoShareBtn name={predictionArr[0].className}></KakaoShareBtn>
        <BottomBtn onClick={()=>{handleShare()}} name={"share"}><MdIosShare size={30} color="#ffffff"></MdIosShare></BottomBtn>
        <BottomBtn onClick={()=>{navigate("/") }} name={"retry"}><BsArrowCounterclockwise size={30} color="white" style={{marginRight:5}}></BsArrowCounterclockwise>다시하기</BottomBtn>
      </BottomContainer>:null
      }

    </Container>
  )
}


export default Main