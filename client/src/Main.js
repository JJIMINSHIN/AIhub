import SingInForm from "./user/SignInForm";
import SignUpForm from "./user/SignUpForm";
import { useEffect, useState } from "react";


const Main = () => {

    // const [view, setView] = useState({
    //     signIn: false,
    //     signUp: false
    // });

    // // 로그인 입력받을 데이터 props로 넘겨줌
    // const [signInData, setSignInData] =  useState({
    //     email : '',
    //     password:''
    // });

    // const onChangeSignInData = (e) => {
    //     setSignInData({
    //         ...signInData,
    //         [e.target.name]: e.target.value
    //     })
    // };

    // // useEffect(()=>{
    // //     console.log(signInData);
    // // }, [setSignInData]);


    // const [signUpData, setSignUpData] =  useState({
    //     email : '',
    //     password:'',
    //     rePassword:'',
    //     name: ''
    // });

    // useEffect(()=>{
    //     console.log(signUpData);
    // }, [setSignUpData]);

    // const onChangeSignUData = (e) =>{
    //     setSignUpData({
    //         ...signUpData,
    //         [e.target.name]: e.target.value

    //     })
    // };


    return (
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">영화</h1>
                        <p className="lead text-muted">상세내용</p>
                        <p>
                            <button  className="btn btn-primary my-2">로그인</button> &nbsp;
                            <button className="btn btn-secondary my-2">회원가입</button>
                        </p>
                    </div>
                </div>
            </section>
            {/* {
                //javascript 사용
                view.signIn ? ( <SingInForm  signInData={signInData} onChangeSignInData={onChangeSignInData}/>) : (<></>)
            }
             {
                //javascript 사용
                view.signUp ? ( <SignUpForm signUpData={signUpData} onChangeSignUData={onChangeSignUData} />) : (<></>)
            } */}

        </main>
    ) //return
};

export default Main;