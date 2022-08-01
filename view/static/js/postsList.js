$(document).ready(() => {
  getList();
});

const getList = () => {

  $('.postsList').empty(); //.postLost클래스 내부에 있는 html 삭제

  //ajax 서버한테 클라이언트가 요청/
  $.ajax({
    methods: 'GET',
    url: 'http://localhost:3000/posts/',
    headers: {
      accessToken: $.cookie("accessToken")
    },
    success: (res) => {
      res.map((it, index) => {
        let listData;
        console.log(it)
        if (sessionStorage.getItem("email") === it.author.email) {
          listData = `<tr>
              <th scope="row">${index + 1}</th>
              <td>${it.title}</td>
              <td>${it.author.name}</td>
              <td>
                
                <button type="button" onclick="updatePost('${it.shortId}')" class="btn btn-outline-secondary">수정</button>
                <button type="button" onclick ="deletePost('${it.shortId}')" class="btn btn-outline-primary">삭제</button>
              </td>
             
            </tr>`;
        } else {
          listData = `<tr>
            <th scope="row">${index + 1}</th>
            <td>${it.title}</td>
            <td>${it.author.name}</td>
            <td></td>
          </tr>`;
        }


        $(".postsList").append(listData);
      })
    },
    error: (res) => {
      alert(res.responseJSON.message);
      location.href("/0719/user/login.html"); 22
    }
  });
}

const deletePost = (shortId) => {
  console.log(shortId);

  $.ajax({
    type: 'GET',
    url: `http://localhost:3000/posts/${shortId}/delete`,  //'http://localhost:3000/posts/' + shortId +'/delete',
    headers: {
      accessToken: $.cookie("accessToken")
    },
    success: (res) => {
      alert(res.result);
      getList();
    }
  });
}

const updatePost = async (shortId) => {
  console.log(shortId);

  // console.log('authData0', authData)

  window.localStorage.setItem("shortId", shortId);
  location.href="/0719/view/posts/updateEdit.html"


}
