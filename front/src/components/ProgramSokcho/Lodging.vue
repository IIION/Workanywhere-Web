<template>
  <div class="lodging-container">
    <p class="title">숙소</p>

    <div class="lodging-info">
      <!-- 왼쪽 -->
      <div class="info-text">
        <!-- 숙소 기본 정보 -->
        <div class="header">
          <p class="lodging-header">호텔 · 레지던스</p>
          <p class="lodging-name">체스터톤스 속초</p>
          <p class="lodging-description">동해로 이어지는 청초호가 앞에 위치하여 호수를 산책하고, 뒤로 펼쳐지는 설악산의 풍경을 바라보며 휴식을 즐겨보세요.</p>
        </div>
        <hr noshade>
        <!-- 룸 정보-->
        <div class="room">
          <p class="room-title">스탠다드 더블</p>
          <p class="room-detail">체크인 15:00 / 체크아웃 11:00</p>
          <p class="room-detail">객실 구성 : 침실 1, 욕실 1</p>
          <p class="room-detail">객실 면적 : 28.7m²</p>
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
              <p>책상</p>
            </div>
            <div class="facility-detail">
              <img src="@/assets/ProgramDetailIcons/tv.png">
              <p>TV</p>
            </div>
            <div class="facility-detail">
              <img src="@/assets/ProgramDetailIcons/lock.png">
              <p>금고</p>
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
            <p>피트니스센터</p>
            <p>수영장</p>
            <p>팩스/복사</p>
            <p>골프연습장</p>
            <p>사우나</p>
            <p>정원</p>
            <p>공용 주방 (유료)</p>
            <p>노천탕</p>
            <p>금연객실</p>
            <p>가족객실</p>
            <p>루프탑</p>
            <p>책방</p>
            <p>무료주차</p>
            <p>세탁서비스</p>
            <p>프론트데스크(24시간)</p>
            <p>키즈클럽(유료)</p>
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
      <div class="assets-carousel">
        <carousel :paginationEnabled="false" :per-page="1" :autoplay="true">
          <slide v-for="(img, index) in images" :key="index">
            <img :src="img" class="carousel-image">
          </slide>
        </carousel>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ProgramDetailLodgingVue",
  data: function() {
    return {
      images: [
        require("@/assets/ProgramDetail/lodgingImage1.jpg"),
        require("@/assets/ProgramDetail/lodgingImage2.jpg"),
        require("@/assets/ProgramDetail/lodgingImage3.jpg"),
        require("@/assets/ProgramDetail/lodgingImage4.jpg")
      ]
    }
  }
}
</script>

<style scoped>
.lodging-container {
  padding: 30px 0px 30px 0px;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
}
.lodging-info {
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
.assets-carousel {
  display: none;
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
@media screen and (max-width: 768px) {
  .title {
    text-align: center;
  }
  .assets {
    display: none;
  }
  .assets-carousel {
    display: unset;
    margin: 10px 0px 10px 0px;
  }
  .lodging-info {
    flex-direction: column-reverse;
  }
  .info-text {
    width: 100%;
  }
  .carousel-image {
    height: 300px;
    width: 100%;
  }
}
</style>