<template>
  <div class="banner-container">
    <p class="type">{{ detail.type }}</p>
    <p class="title">{{ detail.title }}</p>
    <p class="semititle">{{ detail.semititle }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutBanner",
  props: {
    detail: Object
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
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.type {
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 400;
  color: #FF4E31;
  margin: 0;
}

.title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #FFFBE3;
  margin-top: 61px;
  margin-bottom: 8px;
}

.semititle {
  font-family: "Montserrat";
  font-size: 3rem;
  font-weight: 700;
  color: #FFFBE3;
  margin: 0;
}

</style>