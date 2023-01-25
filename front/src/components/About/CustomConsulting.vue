<template>
  <div class="diy-container">
    <p class="diy-title">우리 회사에 맞는 워케이션을</p>
    <p class="diy-title">찾고 계신가요?</p>
    <div class="diy-subtitles">
      <p>
        조직의 환경 및 인원, 예산에 맞는 숙소, 업무공간, 프로그램, 이동수단 등을
        구성하여 우리 기업에 꼭 맞는
      </p>
      <p style="color: #ff4e31;">One-Stop Curation Service</p>
      <p>를 제공합니다.</p>
    </div>

    <div class="card-set">
      <div class="card">
        <div class="image-container">
          <img src="@/assets/About/about1.jpg" />
        </div>
        <p class="card-title">편안한 휴식을 위한 숙소</p>
        <p class="card-description">
          워크애니웨어가 직접 사전검증한 호텔, 리조트부터 펜션까지 지역/인원별로
          맞춤 숙소를 추천해드려요
        </p>
      </div>

      <div class="card">
        <div class="image-container">
          <img src="@/assets/About/about2.jpg" />
        </div>
        <p class="card-title">최적화된 업무 환경</p>
        <p class="card-description">
          휴가지에서도 업무의 효율성을 높여주는 업무 공간을 엄선하여 추천해드려요
        </p>
      </div>

      <div class="card">
        <div class="image-container">
          <img src="@/assets/About/about3.jpg" />
        </div>
        <p class="card-title">웰니스/로컬 콘텐츠</p>
        <p class="card-description">
          직장인을 위한 웰니스 프로그램부터 로컬에서만 즐길 수 있는 액티비티까지 다양한 콘텐츠를 맞춤 기획해드려요
        </p>
      </div>

      <div class="card">
        <div class="image-container">
          <img src="@/assets/About/about4.jpg" />
        </div>
        <p class="card-title">편안한 이동</p>
        <p class="card-description">
          아무리 먼 곳이라도 편안하게 이동할 수 있도록 인원에 맞게 차량을 대절해드려요
        </p>
      </div>
    </div>
    <button @click="showConsulting">맞춤 컨설팅 문의하기</button>
  </div>
</template>

<script>
export default {
  name: "CustomConsultingVue",
  methods: {
    showConsulting() {
      this.$emit('showConsulting', true)
    }
  }
};
</script>

<style scoped>
.diy-container {
  padding: 95px 15% 95px 15%;

}

.diy-title {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.diy-subtitles {
  max-width: 100%;
  margin: 50px 20% 50px 20%;
}

.diy-subtitles > p {
  display: inline;
  font-size: 1.8rem;
}

.card-set {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  flex-basis: 23.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  overflow: hidden;
}

.image-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
}

.card-description {
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
}

button {
  margin-top: 30px;
  color: #FF4E31;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: 1.5px solid #FF4E31;
  border-radius : 50px;
  background-color: rgba( 255, 255, 255, 0);
  cursor: pointer;
}
button:hover {
  background-color: #FF4E31;
  color: #FFFEF6;
}

@media screen and (max-width: 768px) {
  .diy-container {
    padding: 50px 5% 50px 5%;
  }
  .diy-subtitles {
    margin: 50px 0% 50px 0%;
  }
  .card {
    flex-basis: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    overflow: hidden;

  }
}
</style>