const Main = () =>{

    const startNowButton = () =>{
        window.location.href='/login'
    }
    return(
        <div>
            <h1>당신의 미래 애인상을 알려드립니다.</h1>
            <button type="button" onClick={startNowButton}>Start now</button>
        </div>
    );
}

export default Main;