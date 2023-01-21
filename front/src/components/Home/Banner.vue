<template>
  <div>
    <div class="banner-container">
      <img class="banner-image" src="@/assets/Home/mainBanner.png">
      <div class="banner-descript-container">
        <p class="banner-descript-title">노트북만 있다면 어디든 사무실이 되는 시대</p>
        <p class="banner-descript-subtitle">일과 휴식 그리고 오롯이 나에게 집중할 수 있는</p>
        <p class="banner-descript-subtitle">워케이션을 만들어 드립니다.</p>
        <button class="consulting-button" @click="showConsulting">무료 상담하기</button>
      </div>
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
  position: relative;
}
.banner-image {
  display: block;
  width: 100%;
  height: 774px;
  object-fit: cover;
  filter: brightness(74%);
}
.banner-descript-container {
  width: 100%;
	text-align: center;
	position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
}
.banner-descript-title {
  font-weight: 700;
  font-size: 5rem;
  margin-top: 0px;
  margin-bottom: 21px;
  color: white;
}
.banner-descript-subtitle {
  margin: 0;
  font-weight: 400;
  font-size: 2rem;
  color: white;
}
.consulting-button {
  font-family: 'Noto Sans KR', sans-serif;
  padding: 20px 25px 20px 25px;
  background-color: rgba( 255, 255, 255, 0);
  border: 1px solid rgb(255, 255, 255);
  font-weight: 700;
  color: white;
  border-radius: 50px;
  margin-top: 50px;
  font-size: 1.5rem;
  cursor: pointer;
}

.consulting-button:hover {
  background-color: white;
  color: black;
}
</style>