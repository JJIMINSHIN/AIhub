$(document).ready(() => {
    let noheader = `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/0719/view/index.html" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <img src="https://elice.io/static/dc6054e07cd72edccb4c2f0ceccedb97/53925/elice_logo.webp" ;/>
        </svg>
    </a>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/0719/view/index.html" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/0719/view/posts/list.html" class="nav-link px-2 link-dark">List</a></li>
        
    </ul>
    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" onclick="location.href='/0719/view/user/login.html'">Login</button>
        <button type="button" class="btn btn-primary" onclick="location.href='/0719/view/user/signUp.html'">Sign-up</button>
    </div>
</header>`;

    let yesHeader = `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <img src="https://elice.io/static/dc6054e07cd72edccb4c2f0ceccedb97/53925/elice_logo.webp" />
        </svg>
    </a>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/0719/view/index.html" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/0719/view/posts/list.html" class="nav-link px-2 link-dark">List</a></li>
        
    </ul>
    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-danger me-2" onclick="logout()">LogOut</button>
        
    </div>
</header>`;

    //로그인 여부 확인
    let status = $.cookie("accessToken");


    if(status){
        $(".container").prepend(yesHeader);

    }else{
        $(".container").prepend(noheader);
    }

});


const logout = () =>{
    $.removeCookie("accessToken", {path:'/'});
    location.href="/0719/view/user/login.html";
}