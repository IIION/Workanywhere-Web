<template>
  <div class="banner-container">
    <div class="type">
      <p @click="moveToMindful">마인드풀 워케이션</p>
      <p>애니웨어 리트릿</p>
    </div>
    <div class="banner-description">
      <p class="title">Anywhere Retreat</p>
      <p class="semititle">애니웨어 리트릿</p>
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
.banner-container {
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.26)),
    url("@/assets/AboutRetreat/aboutRetreatBanner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 10vh;
  padding-bottom: 20vh;
}
.type > p {
  display: inline;
  margin: 0px 10px 0px 10px;
  font-size: 1.5rem;
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
  font-size: 1.8rem;
  font-weight: 400;
  color: #fffbe3;
  margin-top: 61px;
  margin-bottom: 0;
}

.semititle {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fffbe3;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .banner-container {
    padding-top: 8vh;
    padding-bottom: 10vh;
  }
  .banner-description {
    margin-top: 30px;
  }
}
</style>