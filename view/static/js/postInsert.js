const InsertPost= () =>{
   //유효성검사
   if(!$("#title").val()){
        alert("제목을 입력해주세요");
        $("#title").focus();
        return;
   }
   if(!$("#content").val()){
    alert("내용을 입력해주세요");
    $("#content").focus();
    return;
    }

    //form태그 내의 input들을 자동으로 읽어와 queryString형으로 변환
    let formData = $('#insertForm').serialize();

    formData += '&email='+sessionStorage.getItem("email")

    $.ajax({
        
        type: 'POST',
        url: 'http://localhost:3000/posts/',
        headers : {
            accessToken : $.cookie("accessToken")
          },
        data : formData, //url에 formData 보내기
        success: (res) =>{ //응답받기
            alert(res.result);
            location.href="/0719/view/posts/list.html"
            return;
        }
    });
}