<template>
  <div>
    <div class="banner-container">
      <img class="banner-image" src="@/assets/Home/mainBanner.png">
      <div class="banner-descript-container">
        <p class="banner-descript-title">노트북만 있다면 어디든 사무실이 되는 시대</p>
        <p class="banner-descript-subtitle">일과 휴식 그리고 오롯이 나에게 집중할 수 있는</p>
        <p class="banner-descript-subtitle">워케이션을 만들어 드립니다.</p>
        <div class="button">
          <p class="button-text">무료 상담하기</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 미디어쿼리 쓰는게 가장 일반적이다.
export default {
  name: 'BannerVue'
}
</script>

<style>
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
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 5rem;
  margin-top: 0px;
  margin-bottom: 21px;
  color: white;
}
.banner-descript-subtitle {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 3rem;
  color: white;
}
.button {
  width: 234px;
  height: 68px;
  background-color: rgba( 255, 255, 255, 0);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50px;
  display: table;
  margin-top: 57px;
}

.button-text {
  display: table-cell;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  vertical-align: middle;
}
</style>