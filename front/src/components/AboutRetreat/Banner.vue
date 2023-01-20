<template>
  <div>
    <div class="img-container">
      <img class="banner-img" src="@/assets/AboutRetreat/aboutRetreatBanner.jpg"/>
      <div class="inner-contents">
        <div class="type">
          <p @click="moveToMindful">마인드풀 워케이션</p>
          <p>애니웨어 리트릿</p>
        </div>
        <div class="banner-description">
          <p class="title">Anywhere Retreat</p>
          <p class="semititle">애니웨어 리트릿</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutRetreatBannerVue",
  methods: {
    moveToMindful() {
      this.$router.push({name: "aboutmindful"})
    }
  }
}
</script>

<style scoped>
.img-container {
  position: relative;
}
.banner-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  filter: brightness(80%);
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
.type > p:nth-child(2) {
  font-weight: 700;
  color: #fffbe3;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  cursor: pointer;
}
.type > p:nth-child(1) {
  color: #AFAFAF;
  cursor: pointer;
}
.type > p:nth-child(1):hover {
  color: #fffbe3;
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