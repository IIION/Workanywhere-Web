<template>
    <div class="container">
      <p class="title">숙소</p>
  
      <div class="info">
        <!-- 왼쪽 -->
        <div class="info-text">
          <!-- 숙소 기본 정보 -->
          <div class="header">
            <p class="lodging-header">리조트</p>
            <p class="lodging-name">탑스텐 동강 시스타</p>
            <p class="lodging-description">유러피안 스타일의 숙소에서 산 속 자연과 동강을 바라보며 온전한 쉼과 일을 이곳에서 즐겨보세요</p>
          </div>
          <hr noshade>
          <!-- 룸 정보-->
          <div class="room">
            <p class="room-title">디럭스룸</p>
            <p class="room-detail">체크인 15:00 / 체크아웃 11:00</p>
            <p class="room-detail">객실 구성 : 침실2, 욕실2, 거실1, 주방1</p>
            <p class="room-detail">객실 면적 : 107.89m²</p>
          </div>
          <div class="room">
            <p class="room-title">패밀리룸</p>
            <p class="room-detail">체크인 15:00 / 체크아웃 11:00</p>
            <p class="room-detail">객실 구성 : 침실1, 욕실1, 거실1, 주방1</p>
            <p class="room-detail">객실 면적 : 78.39m²</p>
          </div>
          <hr noshade>
          <!-- 시설 정보 -->
          <div class="facility">
            <p class="facility-title">객실 시설</p>
            <div class="facility-details">
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/sofa.png">
                <p>소파</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/wifi.png">
                <p>WIFI</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/shower.png">
                <p>샤워부스</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/washingmachine.png">
                <p>세탁기</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/table.png">
                <p>식탁</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/tv.png">
                <p>TV</p>
              </div>
              <div class="facility-detail">
                <img src="@/assets/ProgramDetailIcons/refrigerator.png">
                <p>냉장고</p>
              </div>
            </div>
          </div>
          <hr noshade>
  
          <!-- 시설, 서비스 정보 -->
          <div class="service">
            <p class="service-title">시설, 서비스</p>
            <div class="service-details">
              <p>골프장</p>
              <p>커피숍</p>
              <p>로봇카페</p>
              <p>편의점</p>
              <p>노래방</p>
              <p>무료주차</p>
              <p>가족객실</p>
              <p>세탁서비스</p>
              <p>낚시</p>
              <p>탁구</p>
              <p>키즈 프렌들리 뷔페</p>
              <p>팩스/복사</p>
              <p>ATM/현금인출기</p>
            </div>
          </div>
  
          <hr noshade style="margin-bottom: 0;">
        </div>
        
  
        <!-- 오른쪽 보더 레디우스 25px-->
        <div class="assets">
          <!-- 위 대표사진 -->
          <div class="represent-assets">
            <img src="@/assets/ProgramDetail/lodgingImage1.jpg" class="represent-asset">
          </div>
  
          <!-- 아래 3장 -->
          <div class="sub-assets">
            <img src="@/assets/ProgramDetail/lodgingImage2.jpg" class="sub-asset">
            <img src="@/assets/ProgramDetail/lodgingImage3.jpg" class="sub-asset">
            <img src="@/assets/ProgramDetail/lodgingImage4.jpg" class="sub-asset">
          </div>
  
        </div>
  
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgramDetailLodgingVue"
  }
  </script>
  
  <style scoped>
  .container {
    padding: 30px 0px 30px 0px;
  }
  .title {
    text-align: left;
    font-weight: 700;
    font-size: 2rem;
  }
  .info {
    display: flex;
  }
  .info-text {
    text-align: left;
    width: 45%;
  }
  .assets {
    width: 55%;
    margin-left: 3%;
  }
  .lodging-header {
    font-size: 1.1rem;
    color: #666666;
    margin-top: 0;
  }
  .lodging-name {
    font-weight: 700;
    font-size: 2rem;
    margin: 0;
  }
  .lodging-description {
    font-size: 1.5rem;
    line-height: 25px;
  }
  
  hr {
    border: 0;
    background-color: #B1B1B1;
    /* border-color: #B1B1B1; */
    height: 1px;
  }
  .room {
    margin-bottom: 15px;
  }
  .room-title {
    font-weight: 500;
    font-size: 1.4rem;
  }
  .room-detail {
    font-size: 1.1rem;
    color: #666666;
    margin-top: 0;
  }
  .facility-title {
    font-weight: 500;
    font-size: 1.4rem;
  }
  .facility-details {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 5px;
    margin-right: 5px;
    overflow-x: auto;
  }
  .facility-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50px;
  }
  .facility-detail > p {
    font-size: 1.1rem;
    color: #666666;
  }
  .service-title {
    font-weight: 500;
    font-size: 1.4rem;
  }
  .service-details {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  .service-details > p {
    margin: 3px 0px 3px 0px;
    font-size: 1.1rem;
    color: #666666;
  }
  .represent-assets {
    height: 68%;
    margin-bottom: 0.5%;
  }
  .represent-asset {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }
  .sub-assets {
    height: 32%;
    display: flex;
    justify-content: space-between;
  }
  .sub-asset {
    width: 33%;
    object-fit: cover;
  }
  .sub-asset:nth-child(1) {
    border-radius: 0px 0px 0px 20px;
  }
  .sub-asset:nth-child(3) {
    border-radius: 0px 0px 20px 0px;
  }
  
  </style>