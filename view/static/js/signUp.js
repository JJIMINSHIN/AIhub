const signUp = () =>{
    if(!$('#email').val()){
        alert("이메일을 입력해주세요.");
        $('#email').focus();
        return;
    }
    if(!$('#password').val()){
        alert("비밀번호를 입력해주세요.");
        $('#password').focus();
        return;
    }
    if(!$('#rePassword').val()){
        alert("비밀번호 한번 더 입력해주세요.");
        $('#rePassword').focus();
        return;
    }
    if(!$('#name').val()){
        alert("이름을 입력해주세요.");
        $('#name').focus();
        return;
    }

    if($('#password').val() !== $('#rePassword').val()){
        alert("비밀번호를 다시 확인해 주세요");
        $('#password').val("");
        $('#rePassword').val("");
        $('#password').focus();
        return;
    }

    // input값 가져오기
    let signUpdata = $("#signUpForm").serialize();
    console.log(signUpdata);

    // 회원가입
    $.ajax({
        type:'POST',
        url: "http://localhost:3000/user/signUp",
        data: signUpdata,
        success : (res) =>{
            alert(res.result); //응답처리
            location.href="/0719/view/user/login.html"
        },error:(err) =>{
            alert(err.responseJSON.error);
            // 비워주기
            $('#email').val("");
            $('#password').val("");
            $('#rePassword').val("");
            $('#name').val("");
            $('#email').focus();
            
        }
    });

}