import React from "react";

const Test = () => {
    return (
        <>
            <nav class="p-3 container navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand">애인상 테스트</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">애인상 테스트
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" id="yotube-top-link" > 니은팀</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section class="section">
                <h1 class="title">애인상 테스트</h1>
                <h2 class="subtitle">얼굴로 보는 인공지능 애인상 테스트</h2>
                <h2 class="sr-only">나는 어떤 동물과 닮았을까? 나의 애인상 찾기를 해보세요!</h2>
                <h3 class="sr-only">대표 애인상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다.</h3>
                <h4 class="sr-only">본 서비스는 Google의 인공지능 teachable machine 2.0을 활용하였습니다.</h4>
                <p class="sr-only">얼굴로 보는 인공지능 애인상 테스트, 나와 닮은 애인상을 찾아보세요! 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다. 회원가입도 필요없이 화면에서 바로 확인해보세요! 사진 데이터는 그 어디에도 전송되지 않습니다. 인공지능이 보는 나의 동물상 테스트 한번 해보세요! 강아지상? 고양이상? 여우상? 사슴상? 토끼상? 곰상? 공룡상? 얼굴상 테스트를 통해 나와 닮은 동물 찾기를 할 수 있습니다.</p>
            </section>
            <section class="youtube pb-3" id="yotube-mid-link">
                <div class="container mt-3 youtube-cover d-flex flex-row-reverse align-items-center">
                    <img src="img/youtube-copy.jpg" alt="youtube-icon" class="youtube-icon" />
                        <a href="https://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg" class="youtube-link">By 팀니은</a>
                </div>
            </section>
            <h3 class="pb-2 d-flex justify-content-center">성별을 선택하세요</h3>
            <section class="d-flex justify-content-center">
                <p class="d-flex align-items-center pr-3">여자</p>
                <div>
                    <input type="checkbox" id="gender" />
                        <label for="gender">
                            <span class="knob">
                                <i></i>
                            </span>
                        </label>
                </div>
                <p class="d-flex align-items-center pl-3">남자</p>
            </section>
            <script class="jsbin" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
            <div class="mt-3 container file-upload">
                <div class="image-upload-wrap">
                    <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                    <div class="drag-text">
                        <img src="img/upload.svg" class="mt-5 pt-5 upload" />
                            <h3 class="mb-5 pb-5 pt-4  upload-text">얼굴 사진을 올려놓거나 눌러서 업로드하세요!</h3>
                    </div>
                </div>
                <div class="file-upload-content">
                    <img class="file-upload-image rounded-circle" id="face-image" src="#" alt="your image" />
                    <a class="heart" style="font-size: 27px; color: rgb(255, 193, 220);">♥</a>
                    <img class="file-result-image rounded-circle" id="result-image" src="" alt="result image" />
                    <div id="loading" class="animated bounce">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <p class="text-center">AI가 당신의 동물상을 분석중입니다.</p>
                    </div>
                    <p class="result-message"></p>
                    <div id="label-container" class="d-flex flex-column justify-content-around"></div>
                    <div id="addThis" class="addthis_inline_share_toolbox_6lz1"></div>
                    <div class="pt-3 image-title-wrap">
                        <button type="button p-2" class="try-again-btn" onclick="window.location.reload();">
                            <span class="try-again-text">다른 사진으로 재시도</span>
                        </button>
                    </div>
                </div>
            </div>
            <footer class="footer pt-5 container d-flex justify-content-center">
                <div>
                    <p>&copy; 니은팀 2022. All Rights Reserved. </p>
                </div>
            </footer>

        </>
    );

}

export default Test;