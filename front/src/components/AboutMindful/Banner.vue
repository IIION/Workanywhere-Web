<template>
  <div>
    <div class="img-container">
      <img
        class="banner-img"
        src="@/assets/AboutMindful/aboutMindfulBanner.png"
      />
      <div class="inner-contents">
        <div class="type">
          <p>마인드풀 워케이션</p>
          <p>애니웨어 리트릿</p>
        </div>
        <div class="banner-description">
          <p class="title">Mindful Workation</p>
          <p class="semititle">마인드풀 워케이션</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMindfulBannerVue",
};
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

.inner-contents {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.type > p {
  display: inline;
  margin: 0px 10px 0px 10px;
  font-size: 2rem;
}

.type > p:nth-child(1) {
  font-weight: 700;
  color: #fffbe3;
  text-decoration-line: underline;
  text-underline-offset: 10px;
}

.type > p:nth-child(2) {
  color: #AFAFAF;
}
.banner-description {
  margin-top: 100px;
}

.title {
  font-family: "Montserrat";
  font-size: 2.8rem;
  font-weight: 400;
  color: #fffbe3;
  margin-top: 61px;
  margin-bottom: 0;
}

.semititle {
  font-size: 4rem;
  font-weight: 700;
  color: #fffbe3;
  margin: 0;
}
</style>