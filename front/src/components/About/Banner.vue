<template>
  <div>
    <div class="img-container">
      <img class="banner-img" src="@/assets/About/aboutBannerImage.png">
      <div class="banner-description">
        <p class="type">ABOUT</p>
        <p class="title">노트북만 있다면 어디든 사무실이 되는 시대</p>
        <p class="semititle">Work Anywhere</p>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "AboutBanner"
}
</script>

<style scoped>
.img-container {
  position: relative;
}

.banner-img {
  display: block;
  width: 100%;
  filter: brightness(74%);
}

.banner-description {
  position: absolute;
  top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
}

.type {
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 400;
  color: #FF4E31;
  margin: 0;
}

.title {
  font-size: 2rem;
  font-weight: 400;
  color: #FFFBE3;
  margin-top: 61px;
  margin-bottom: 0;
}

.semititle {
  font-family: "Montserrat";
  font-size: 4rem;
  font-weight: 700;
  color: #FFFBE3;
  margin: 0;
}

</style>