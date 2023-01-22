<template>
  <div>
    <div class="banner-container">
      <p class="banner-descript-title">노트북만 있다면 어디든 사무실이 되는 시대</p>
      <p class="banner-descript-subtitle">일과 휴식 그리고 오롯이 나에게 집중할 수 있는</p>
      <p class="banner-descript-subtitle">워케이션을 만들어 드립니다.</p>
      <button class="consulting-button" @click="showConsulting">무료 상담하기</button>
    </div>
  </div>
</template>

<script>
// 미디어쿼리 쓰는게 가장 일반적이다.
export default {
  name: 'BannerVue',
  methods: {
    showConsulting() {
      this.$emit('showConsulting', true)
    }
  }
}
</script>

<style scoped>
.banner-container {
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.26)),
    url("@/assets/Home/mainAboutBanner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 20vh;
  padding-bottom: 20vh;
}
.banner-descript-title {
  font-weight: 700;
  font-size: 3rem;
  margin-top: 0px;
  margin-bottom: 21px;
  color: #FFFBE3;
}
.banner-descript-subtitle {
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFFBE3;
}
.consulting-button {
  font-family: 'Noto Sans KR', sans-serif;
  padding: 15px 40px 15px 40px;
  background-color: rgba( 255, 255, 255, 0);
  border: 1px solid rgb(255, 255, 255);
  font-weight: 700;
  color: #FFFBE3;
  border-radius: 50px;
  margin-top: 50px;
  font-size: 1.5rem;
  cursor: pointer;
}

.consulting-button:hover {
  background-color: #FFFBE3;
  color: black;
}
</style>