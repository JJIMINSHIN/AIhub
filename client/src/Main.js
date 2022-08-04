import SingInForm from "./user/SignInForm";
import SignUpForm from "./user/SignUpForm";
import { useEffect, useState } from "react";


const Main = () => {




    return (
        <div className="ai">
            <div className="left" style={{ width: '50%', height: '100%', float: 'left', backgroundColor: 'violet', color: 'white' }}>
                이부분 css빼서 left, right로 나눠주세용
                여기가 left
            </div>

            <div className="right" style={{ width: '50%', height: '100%', float: 'right', backgroundColor: 'lightskyblue', color: 'white' }}>
                여기가 right
            </div>

        </div>

    ) //return
};

export default Main;